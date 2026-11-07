"""설계서 5⑧-1 전이 10건 + context_window 4건."""

import pytest

from app.domain.memory import (
    InvalidTransition,
    MemoryEvent,
    MemoryState,
    Turn,
    context_window,
    is_searchable,
    transition,
)

S, E = MemoryState, MemoryEvent


@pytest.mark.parametrize(
    ("state", "event", "expected"),
    [
        (S.INFERRED, E.CONFIRM, S.CONFIRMED),
        (S.STATED, E.APPROVE, S.APPROVED),
        (S.CONFIRMED, E.APPROVE, S.APPROVED),
    ],
)
def test_allowed(state: S, event: E, expected: S) -> None:
    assert transition(state, event) is expected


@pytest.mark.parametrize(
    ("state", "event"),
    [
        (S.INFERRED, E.APPROVE),  # inferred는 approved로 바로 갈 수 없다
        (S.STATED, E.CONFIRM),
        (S.CONFIRMED, E.CONFIRM),
        (S.APPROVED, E.CONFIRM),
        (S.APPROVED, E.APPROVE),
    ],
)
def test_forbidden(state: S, event: E) -> None:
    with pytest.raises(InvalidTransition):
        transition(state, event)


def test_full_path_inferred_to_approved() -> None:
    assert transition(transition(S.INFERRED, E.CONFIRM), E.APPROVE) is S.APPROVED


def test_only_approved_searchable() -> None:
    assert [is_searchable(s) for s in S] == [False, False, False, True]


TURNS = [Turn("user", f"t{turn_idx}") for turn_idx in range(12)]


def test_window_zero_is_empty() -> None:
    assert context_window(TURNS, 0) == []


@pytest.mark.parametrize("n", [2, 6, 10])
def test_window_last_n(n: int) -> None:
    window = context_window(TURNS, n)
    assert len(window) == n and window[-1] == TURNS[-1]


def test_window_larger_than_turns() -> None:
    assert context_window(TURNS[:3], 10) == TURNS[:3]
