"""3단 동의 8조합 → 허용 기능표 (설계서 5⑩-2), 통화 중 철회 처리 (5⑩-3)."""

from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum


class Feature(StrEnum):
    """동의에 따라 켜지는 기능."""

    SAFETY_CARD = "safety_card"  # 109·지역 센터 카드와 고지문 (항상)
    CALL = "call"
    TRANSCRIPT = "transcript"
    SUMMARY = "summary"  # 감정 줄 없음
    STATED_MEMORY = "stated_memory"  # "내가 말한 것"
    CRISIS_TEXT_CLASSIFY = "crisis_text_classify"  # 텍스트 L1·L2 + 안내
    SER = "ser"
    PROSODY = "prosody"
    CONFIRM_QUESTION = "confirm_question"
    FELT_MEMORY = "felt_memory"  # "한벗이 느낀 것"
    SUMMARY_AFFECT_LINE = "summary_affect_line"
    CRISIS_LOG = "crisis_log"
    VOICE_RETENTION = "voice_retention"  # MVP 비활성(미확정). 어떤 조합에서도 허용하지 않음


class StopAction(StrEnum):
    """S 철회 시 서버가 차례로 하는 일 (설계서 5⑩-3 ①~⑤ + 기존 데이터 삭제)."""

    DISABLE_SER_PROSODY = "disable_ser_prosody"
    CANCEL_SER_JOBS = "cancel_ser_jobs"
    DISCARD_AUDIO_BUFFER = "discard_audio_buffer"
    DISCARD_INFERRED_CANDIDATES = "discard_inferred_candidates"
    RECHECK_BEFORE_WRITE = "recheck_before_write"
    ENQUEUE_SENSITIVE_DELETION = "enqueue_sensitive_deletion"
    END_SESSION = "end_session"  # R 철회
    ENQUEUE_ALL_DELETION = "enqueue_all_deletion"


@dataclass(frozen=True)
class Consent:
    """3단 동의. basic=R(필수), sensitive=S(목소리 감정 단서), voice=V(원본 음성 보관, MVP 비활성)."""

    basic: bool
    voice: bool
    sensitive: bool


_BASIC_FEATURES = frozenset(
    {
        Feature.SAFETY_CARD,
        Feature.CALL,
        Feature.TRANSCRIPT,
        Feature.SUMMARY,
        Feature.STATED_MEMORY,
        Feature.CRISIS_TEXT_CLASSIFY,
    }
)
_SENSITIVE_FEATURES = frozenset(
    {
        Feature.SER,
        Feature.PROSODY,
        Feature.CONFIRM_QUESTION,
        Feature.FELT_MEMORY,
        Feature.SUMMARY_AFFECT_LINE,
        Feature.CRISIS_LOG,
    }
)


def allowed_features(consent: Consent) -> frozenset[Feature]:
    """설계서 5⑩-2: 행 1~4(R 없음)는 카드만, 5·6(S 없음)은 기본, 7·8은 전 기능(V는 비활성)."""
    if not consent.basic:
        return frozenset({Feature.SAFETY_CARD})
    if not consent.sensitive:
        return _BASIC_FEATURES
    return _BASIC_FEATURES | _SENSITIVE_FEATURES


def on_withdraw(prev: Consent, new: Consent) -> list[StopAction]:
    """통화 중 철회 시 중단 목록. 새로 동의한 경우나 변화 없음은 빈 리스트."""
    if prev.basic and not new.basic:
        return [
            StopAction.DISABLE_SER_PROSODY,
            StopAction.CANCEL_SER_JOBS,
            StopAction.DISCARD_AUDIO_BUFFER,
            StopAction.DISCARD_INFERRED_CANDIDATES,
            StopAction.END_SESSION,
            StopAction.ENQUEUE_ALL_DELETION,
        ]
    if prev.sensitive and not new.sensitive:
        return [
            StopAction.DISABLE_SER_PROSODY,
            StopAction.CANCEL_SER_JOBS,
            StopAction.DISCARD_AUDIO_BUFFER,
            StopAction.DISCARD_INFERRED_CANDIDATES,
            StopAction.RECHECK_BEFORE_WRITE,
            StopAction.ENQUEUE_SENSITIVE_DELETION,
        ]
    return []  # V(voice) 철회는 MVP에서 저장 자체가 없어 중단할 일이 없다
