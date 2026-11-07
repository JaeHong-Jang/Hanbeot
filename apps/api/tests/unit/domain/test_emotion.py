"""설계서 5④-1 매핑 9건, 5④-2 확인 질문 8건, 불일치 4건."""

import pytest

from app.domain.emotion import (
    AskState,
    Cue,
    ProductCategory,
    TextSentiment,
    detect_mismatch,
    map_label,
    should_ask,
)
from app.domain.rules import get_rules

P = ProductCategory


@pytest.mark.parametrize(
    ("label", "expected"),
    [
        ("angry", P.FRUSTRATED),
        ("sad", P.LOW),
        ("happy", P.BRIGHT),
        ("neutral", None),
        ("fearful", None),
        ("disgusted", None),
        ("surprised", None),
        ("other", None),
        ("unknown", None),
    ],
)
def test_map_label(label: str, expected: P | None) -> None:
    assert map_label(label) is expected


def test_rules_cover_nine_labels() -> None:
    assert len(get_rules().label_map) == 9


OK = AskState(turns_since_last_ask=5, sensitive_consent=True, in_safe_mode=False)
SAD = Cue("sad", 0.7, 1)


def test_ask_when_all_conditions_hold() -> None:
    assert should_ask(SAD, OK)


def test_ask_at_threshold_boundary() -> None:
    assert should_ask(Cue("sad", 0.6, 1), OK)
    assert not should_ask(Cue("sad", 0.59, 1), OK)


def test_no_ask_within_five_turns() -> None:
    assert not should_ask(SAD, AskState(4, True, False))


def test_no_ask_without_consent() -> None:
    assert not should_ask(SAD, AskState(9, False, False))


def test_no_ask_in_safe_mode() -> None:
    assert not should_ask(SAD, AskState(9, True, True))


def test_no_ask_for_unmapped_label() -> None:
    assert not should_ask(Cue("neutral", 0.99, 1), OK)


def test_no_ask_for_rejected_category() -> None:
    state = AskState(9, True, False, frozenset({P.LOW}))
    assert not should_ask(SAD, state)


def test_no_ask_when_all_conditions_fail() -> None:
    assert not should_ask(Cue("fearful", 0.2, 1), AskState(0, False, True))


def test_mismatch_ok_text_sad_voice() -> None:
    result = detect_mismatch(Cue("sad", 0.8, 1), TextSentiment(0.6))  # "괜찮아" + 슬픔
    assert result is not None and result.voice_category is P.LOW


def test_mismatch_angry_voice() -> None:
    result = detect_mismatch(Cue("angry", 0.8, 1), TextSentiment(0.5))
    assert result is not None and result.voice_category is P.FRUSTRATED


def test_no_mismatch_when_text_negative() -> None:
    assert detect_mismatch(Cue("sad", 0.8, 1), TextSentiment(-0.5)) is None


def test_no_mismatch_low_score_or_happy_voice() -> None:
    assert detect_mismatch(Cue("sad", 0.3, 1), TextSentiment(0.6)) is None
    assert detect_mismatch(Cue("happy", 0.9, 1), TextSentiment(0.6)) is None
