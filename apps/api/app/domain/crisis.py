"""위기 2단 상태 기계 (설계서 5⑨, Wiki claim-app-10).

충돌 우선순위: KeywordGate 양성 > 태그 L1 > 사용자 정정 > L2 누적 > 태그 누락.
L2 점수·임계·해제 턴 수는 모두 임시 운영 기준(rules.yaml).
"""

from __future__ import annotations

from dataclasses import dataclass, replace
from enum import StrEnum

from app.domain.rules import Rules, get_rules


class CrisisLevel(StrEnum):
    """위험 등급. L0 신호 없음 / L2 암시 / L1 명시."""

    L0 = "L0"
    L1 = "L1"
    L2 = "L2"


class Action(StrEnum):
    """step이 돌려주는 다음 행동."""

    NONE = "none"
    SAFE_SCRIPT_SKIP_LLM = "safe_script_skip_llm"  # 키워드 양성: Claude 호출 없이 사전 합성 스크립트
    DISCARD_AND_SAFE_SCRIPT = "discard_and_safe_script"  # 태그 L1: 생성문 폐기 후 스크립트
    STAY_SAFE_MODE = "stay_safe_mode"  # 짧은 공감, 카드 유지, 모드 잠금
    PRESYNTH_SCRIPT_AND_CARD = "presynth_script_and_card"  # 안전 모드 중 LLM 장애
    APOLOGIZE_RETURN_NORMAL = "apologize_return_normal"  # 오탐 정정
    RELEASE_SAFE_MODE = "release_safe_mode"  # "안전해" + 연속 clean 턴
    SOFT_NOTICE = "soft_notice"  # L2 누적 부드러운 안내
    FIXED_APOLOGY_RETRY = "fixed_apology_retry"  # 일반 모드 LLM 장애
    LOG_UNCLASSIFIABLE = "log_unclassifiable"  # STT final 없음
    LOG_TAG_MISSING = "log_tag_missing"  # 태그 누락·파싱 실패, L0 처리


@dataclass(frozen=True)
class Signals:
    """한 턴의 위기 신호."""

    keyword_hit: bool = False
    llm_tag: CrisisLevel | None = None  # None = 태그 누락·파싱 실패
    user_correction: bool = False  # [그런 뜻 아니었어]
    voice_level: CrisisLevel = CrisisLevel.L0  # 음성 저각성 단서(S 동의 시)
    stt_failed: bool = False
    llm_failed: bool = False
    user_said_safe: bool = False  # "안전해" 응답 (해제 조건, 설계서 5⑨-2)


@dataclass(frozen=True)
class CrisisState:
    """세션 위기 상태."""

    in_safe_mode: bool = False
    l2_score: float = 0.0
    l2_notices: int = 0  # 지금까지 한 부드러운 안내 횟수
    safe_confirmed: bool = False  # 사용자가 "안전해"라고 답함
    clean_turns: int = 0  # "안전해" 이후 L1 없는 연속 턴
    card_pinned: bool = False  # 109 카드 하단 고정(해제·정정 후에도 유지)


def combine_risk(text_level: CrisisLevel, voice_level: CrisisLevel) -> CrisisLevel:
    """위험도 = max(텍스트, 음성). 미확정(J): 11/9 결정 전 기본은 텍스트만 쓰는 쪽(rules.yaml)."""
    order = (CrisisLevel.L0, CrisisLevel.L2, CrisisLevel.L1)  # 오름차순 위험도
    return max(text_level, voice_level, key=order.index)


def _enter_safe_mode(state: CrisisState) -> CrisisState:
    return replace(state, in_safe_mode=True, safe_confirmed=False, clean_turns=0, card_pinned=True)


def _step_in_safe_mode(state: CrisisState, signals: Signals, rules: Rules) -> tuple[CrisisState, Action]:
    """안전 모드 중: 정정 → 복귀, "안전해" + 연속 clean 턴 → 해제, 그 외 유지."""
    if signals.user_correction:
        return replace(state, in_safe_mode=False, safe_confirmed=False, clean_turns=0), (Action.APOLOGIZE_RETURN_NORMAL)
    if signals.user_said_safe and not state.safe_confirmed:
        return replace(state, safe_confirmed=True, clean_turns=0), Action.STAY_SAFE_MODE
    if state.safe_confirmed:
        clean_turns = state.clean_turns + 1
        if clean_turns >= rules.crisis_release_clean_turns:
            released = replace(state, in_safe_mode=False, safe_confirmed=False, clean_turns=0)
            return released, Action.RELEASE_SAFE_MODE
        return replace(state, clean_turns=clean_turns), Action.STAY_SAFE_MODE
    if signals.llm_failed:
        return state, Action.PRESYNTH_SCRIPT_AND_CARD
    return state, Action.STAY_SAFE_MODE


def _step_in_normal_mode(state: CrisisState, signals: Signals, rules: Rules) -> tuple[CrisisState, Action]:
    """일반 모드: 장애 처리 → L2 누적 → 태그 누락 기록."""
    if signals.llm_failed:
        return state, Action.FIXED_APOLOGY_RETRY
    if signals.stt_failed:
        return state, Action.LOG_UNCLASSIFIABLE
    if signals.llm_tag is None:
        return state, Action.LOG_TAG_MISSING
    if signals.llm_tag is not CrisisLevel.L2:
        return state, Action.NONE
    # 음성 단서만으로는 점수가 오르지 않는다: 가산은 텍스트 L2와 같은 턴에서만.
    points = rules.crisis_l2_text_points
    if signals.voice_level is not CrisisLevel.L0:
        points += rules.crisis_l2_voice_points
    score = state.l2_score + points
    next_threshold = rules.crisis_l2_notice_every * (state.l2_notices + 1)
    if state.l2_notices < rules.crisis_l2_notice_max and score >= next_threshold:
        return replace(state, l2_score=score, l2_notices=state.l2_notices + 1), (Action.SOFT_NOTICE)
    return replace(state, l2_score=score), Action.NONE


def step(state: CrisisState, signals: Signals, rules: Rules | None = None) -> tuple[CrisisState, Action]:
    """전이표(설계서 5⑨-1·5⑨-2). 호출 쪽은 `new_state, action = step(...)`로 언패킹."""
    active = rules or get_rules()
    if signals.keyword_hit:
        return _enter_safe_mode(state), Action.SAFE_SCRIPT_SKIP_LLM
    if signals.llm_tag is CrisisLevel.L1:
        return _enter_safe_mode(state), Action.DISCARD_AND_SAFE_SCRIPT
    if state.in_safe_mode:
        return _step_in_safe_mode(state, signals, active)
    return _step_in_normal_mode(state, signals, active)
