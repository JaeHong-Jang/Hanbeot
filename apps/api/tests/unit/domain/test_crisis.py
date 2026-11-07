"""설계서 5⑨ 전이표 12행."""

from app.domain.crisis import (
    Action,
    CrisisLevel,
    CrisisState,
    Signals,
    combine_risk,
    step,
)

NORMAL = CrisisState()
SAFE = CrisisState(in_safe_mode=True, card_pinned=True)


def test_keyword_enters_safe_mode_without_llm() -> None:
    state, action = step(NORMAL, Signals(keyword_hit=True))
    assert state.in_safe_mode and action is Action.SAFE_SCRIPT_SKIP_LLM


def test_tag_l1_discards_and_enters_safe_mode() -> None:
    state, action = step(NORMAL, Signals(llm_tag=CrisisLevel.L1))
    assert state.in_safe_mode and action is Action.DISCARD_AND_SAFE_SCRIPT


def test_keyword_beats_tag_l1() -> None:
    _, action = step(NORMAL, Signals(keyword_hit=True, llm_tag=CrisisLevel.L1))
    assert action is Action.SAFE_SCRIPT_SKIP_LLM


def test_l2_accumulates_and_notices_at_two_points() -> None:
    state, action = step(NORMAL, Signals(llm_tag=CrisisLevel.L2))
    assert action is Action.NONE and state.l2_score == 1.0
    state, action = step(state, Signals(llm_tag=CrisisLevel.L2))
    assert action is Action.SOFT_NOTICE and state.l2_notices == 1


def test_voice_adds_half_point_only_with_text_l2() -> None:
    state, _ = step(NORMAL, Signals(llm_tag=CrisisLevel.L2, voice_level=CrisisLevel.L2))
    assert state.l2_score == 1.5


def test_voice_alone_does_not_raise_score() -> None:
    state, action = step(NORMAL, Signals(llm_tag=CrisisLevel.L0, voice_level=CrisisLevel.L2))
    assert state.l2_score == 0.0 and action is Action.NONE


def test_l2_notice_capped_at_two() -> None:
    state = NORMAL
    actions = []
    for _ in range(8):
        state, action = step(state, Signals(llm_tag=CrisisLevel.L2))
        actions.append(action)
    assert actions.count(Action.SOFT_NOTICE) == 2


def test_missing_tag_is_l0_and_logged_keyword_state_kept() -> None:
    state, action = step(NORMAL, Signals(llm_tag=None))
    assert action is Action.LOG_TAG_MISSING and not state.in_safe_mode
    state, action = step(SAFE, Signals(llm_tag=None))
    assert state.in_safe_mode and action is Action.STAY_SAFE_MODE


def test_correction_returns_to_normal_with_card_pinned() -> None:
    state, action = step(SAFE, Signals(user_correction=True, llm_tag=CrisisLevel.L0))
    assert not state.in_safe_mode and state.card_pinned
    assert action is Action.APOLOGIZE_RETURN_NORMAL


def test_new_l1_right_after_correction_wins() -> None:
    state, _ = step(SAFE, Signals(user_correction=True))
    state, action = step(state, Signals(llm_tag=CrisisLevel.L1))
    assert state.in_safe_mode and action is Action.DISCARD_AND_SAFE_SCRIPT


def test_release_needs_safe_answer_then_three_clean_turns() -> None:
    state, action = step(SAFE, Signals(user_said_safe=True, llm_tag=CrisisLevel.L0))
    assert state.in_safe_mode and state.safe_confirmed
    for _ in range(2):
        state, action = step(state, Signals(llm_tag=CrisisLevel.L0))
        assert state.in_safe_mode and action is Action.STAY_SAFE_MODE
    state, action = step(state, Signals(llm_tag=CrisisLevel.L0))
    assert not state.in_safe_mode and action is Action.RELEASE_SAFE_MODE
    assert state.card_pinned


def test_failures_in_normal_and_safe_mode() -> None:
    _, action = step(NORMAL, Signals(llm_failed=True))
    assert action is Action.FIXED_APOLOGY_RETRY
    _, action = step(SAFE, Signals(llm_failed=True))
    assert action is Action.PRESYNTH_SCRIPT_AND_CARD
    _, action = step(NORMAL, Signals(stt_failed=True))
    assert action is Action.LOG_UNCLASSIFIABLE


def test_combine_risk_is_max() -> None:
    assert combine_risk(CrisisLevel.L0, CrisisLevel.L2) is CrisisLevel.L2
    assert combine_risk(CrisisLevel.L1, CrisisLevel.L2) is CrisisLevel.L1
    assert combine_risk(CrisisLevel.L0, CrisisLevel.L0) is CrisisLevel.L0
