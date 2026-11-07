"""Smart Turn 조기 종료율: 사용자가 아직 말 중인데 턴이 끝났다고 판정한 비율 (P0-3, 목표 <= 10%)."""

from __future__ import annotations

from collections.abc import Sequence
from typing import NamedTuple


class TurnJudgment(NamedTuple):
    cutoff_ms: int  # 모델이 턴 종료라고 판정한 시각
    true_end_ms: int  # 사람이 표시한 실제 발화 종료 시각


def early_cutoff_rate(judgments: Sequence[TurnJudgment]) -> float:
    """cutoff < true_end 인 턴의 비율."""
    if not judgments:
        raise ValueError("판정이 비어 있다")
    return sum(j.cutoff_ms < j.true_end_ms for j in judgments) / len(judgments)
