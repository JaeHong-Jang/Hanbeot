"""맥락 턴 수 실험 스텁 (미확정 M, 11/9 회의). 직전 0/2/6/10턴을 SER 입력에 더했을 때 UA 변화."""

from __future__ import annotations

from collections.abc import Callable

CONTEXT_TURN_CONDITIONS: tuple[int, ...] = (0, 2, 6, 10)


def run(evaluate_with_context: Callable[[int], float]) -> dict[int, float]:
    """조건별 UA를 모은다. evaluate_with_context(n_turns) → UA. 모델 연결은 TODO."""
    return {n_turns: evaluate_with_context(n_turns) for n_turns in CONTEXT_TURN_CONDITIONS}
