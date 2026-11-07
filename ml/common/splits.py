"""화자 기준 분할. 같은 화자는 한 split에만 들어간다."""

from __future__ import annotations

import random
from collections.abc import Mapping, Sequence


def speaker_split(
    speaker_ids: Sequence[str],
    ratios: Mapping[str, float],
    seed: int,
) -> dict[str, str]:
    """speaker_id → split 이름. 순서와 무관하게 seed가 같으면 결과가 같다.

    ratios 예: {"train": 0.7, "dev": 0.1, "calib": 0.1, "test": 0.1}. 합이 1이어야 한다.
    """
    if abs(sum(ratios.values()) - 1.0) > 1e-9:
        raise ValueError("ratios 합은 1이어야 한다")
    unique = sorted(set(speaker_ids))
    random.Random(seed).shuffle(unique)
    assignment: dict[str, str] = {}
    start_idx = 0  # 0-기반, 다음 split의 시작 위치
    names = list(ratios)
    for split_idx, name in enumerate(names):
        if split_idx == len(names) - 1:
            end_idx = len(unique)
        else:
            end_idx = start_idx + round(ratios[name] * len(unique))
        for speaker in unique[start_idx:end_idx]:
            assignment[speaker] = name
        start_idx = end_idx
    return assignment
