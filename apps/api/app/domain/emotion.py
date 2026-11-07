"""감정 단서 규칙: 라벨 매핑(설계서 5④-1), 확인 질문 조건(5④-2), 불일치 판정(미확정 J)."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import StrEnum
from typing import NamedTuple

from app.domain.rules import Rules, get_rules


class ProductCategory(StrEnum):
    """제품 확인 질문 범주 (설계서 5④-1)."""

    FRUSTRATED = "frustrated"  # 답답함
    LOW = "low"  # 가라앉음·지침
    BRIGHT = "bright"  # 밝음


class Cue(NamedTuple):
    """SER 결과 한 건."""

    label: str  # emotion2vec+ 9라벨 원문
    score: float  # softmax 확률. 보정 전에는 순위용 값으로만 해석
    utterance_id: int


@dataclass(frozen=True)
class AskState:
    """확인 질문 여부 판단에 필요한 세션 상태."""

    turns_since_last_ask: int  # 마지막 확인 질문 이후 지난 턴 수
    sensitive_consent: bool  # 민감정보(S) 동의
    in_safe_mode: bool
    rejected_categories: frozenset[ProductCategory] = field(default_factory=frozenset)


class TextSentiment(NamedTuple):
    """텍스트 극성. -1(부정) ~ +1(긍정). 산출 방법은 미확정."""

    polarity: float


class Mismatch(NamedTuple):
    """음성과 텍스트가 어긋난 판정 결과."""

    voice_category: ProductCategory
    text_polarity: float


def map_label(label: str, rules: Rules | None = None) -> ProductCategory | None:
    """설계서 5④-1: emotion2vec+ 라벨을 제품 범주로. None이면 질문하지 않는다."""
    active = rules or get_rules()
    category = active.label_map.get(label)
    if category is None:
        return None
    return ProductCategory(category)


def should_ask(cue: Cue, state: AskState, rules: Rules | None = None) -> bool:
    """설계서 5④-2: 점수 >= 임계, 직전 N턴 질문 없음, S 동의 ON, 안전 모드 아님.

    이미 "아니야"로 거절된 범주는 같은 세션에서 다시 묻지 않는다.
    """
    active = rules or get_rules()
    category = map_label(cue.label, active)
    if category is None or category in state.rejected_categories:
        return False
    return (
        cue.score >= active.ser_score_threshold
        and state.turns_since_last_ask >= active.ser_min_turn_gap
        and state.sensitive_consent
        and not state.in_safe_mode
    )


def detect_mismatch(voice: Cue, text: TextSentiment, rules: Rules | None = None) -> Mismatch | None:
    """음성·텍스트 불일치. 미확정(J): 임시 규칙 = 긍정 텍스트 + 슬픔/분노 음성 >= 임계."""
    active = rules or get_rules()
    category = map_label(voice.label, active)
    if category is None or category.value not in active.mismatch_voice_categories:
        return None
    if voice.score < active.ser_score_threshold:
        return None
    if text.polarity < active.mismatch_text_polarity_min:
        return None
    return Mismatch(voice_category=category, text_polarity=text.polarity)
