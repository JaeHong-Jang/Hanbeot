"""기억 4상태 전이(설계서 5⑧-1)와 직전 N턴 윈도우(미확정 M)."""

from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum


class MemoryState(StrEnum):
    """설계서 5⑧-1 기억 상태."""

    STATED = "stated"  # 사용자가 직접 말한 것
    INFERRED = "inferred"  # 모델 추정. 표시·검색 대상 아님
    CONFIRMED = "confirmed"  # inferred를 사용자가 "맞아"로 확인
    APPROVED = "approved"  # 저장 동의. 검색·프롬프트에는 이것만


class MemoryEvent(StrEnum):
    """상태를 바꾸는 사용자 행위."""

    CONFIRM = "confirm"  # 확인 질문에 "맞아"
    APPROVE = "approve"  # 통화 후 카드에서 [저장]


class InvalidTransition(Exception):
    """허용되지 않은 기억 상태 전이."""


# 전이 규칙: stated → approved, inferred → confirmed → approved. inferred → approved는 불가.
_TRANSITIONS: dict[tuple[MemoryState, MemoryEvent], MemoryState] = {
    (MemoryState.INFERRED, MemoryEvent.CONFIRM): MemoryState.CONFIRMED,  # (현재 상태, 이벤트) → 다음
    (MemoryState.STATED, MemoryEvent.APPROVE): MemoryState.APPROVED,
    (MemoryState.CONFIRMED, MemoryEvent.APPROVE): MemoryState.APPROVED,
}


@dataclass(frozen=True)
class Turn:
    """대화 한 턴."""

    speaker: str  # "user" | "assistant"
    text: str


def transition(state: MemoryState, event: MemoryEvent) -> MemoryState:
    """설계서 5⑧-1 전이표. 허용되지 않으면 InvalidTransition."""
    next_state = _TRANSITIONS.get((state, event))
    if next_state is None:
        raise InvalidTransition(f"{state.value} + {event.value}")
    return next_state


def is_searchable(state: MemoryState) -> bool:
    """검색·프롬프트에는 approved만 쓴다 (설계서 5⑧-1)."""
    return state is MemoryState.APPROVED


def context_window(turns: list[Turn], n: int) -> list[Turn]:
    """직전 n턴. n=0이면 빈 리스트. turns는 오래된 것부터 정렬. n 미확정(M): 6~10."""
    if n <= 0:
        return []
    return turns[-n:]  # 뒤에서 n개 = 가장 최근 n턴
