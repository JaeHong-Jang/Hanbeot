"""위기 평가: 유형별 재현율과 비위기 대조 오탐률 (설계서 5⑨-3). 경로 비교(키워드/태그/결합)는 TODO."""

from __future__ import annotations

from collections import defaultdict
from collections.abc import Callable, Sequence
from typing import NamedTuple


class Scenario(NamedTuple):
    text: str
    kind: str  # explicit | self_harm | implicit | middle | control
    is_crisis: bool


def evaluate(scenarios: Sequence[Scenario], classify: Callable[[str], bool]) -> dict[str, float]:
    """classify(text)가 True면 L1로 판정. 유형별 재현율 + control 오탐률."""
    hits: dict[str, list[bool]] = defaultdict(list)
    for scenario in scenarios:
        hits[scenario.kind].append(classify(scenario.text))
    report = {}
    for kind, results in hits.items():
        rate = sum(results) / len(results)
        report["false_positive_rate" if kind == "control" else f"recall_{kind}"] = rate
    return report


def keyword_classifier(keywords: Sequence[str]) -> Callable[[str], bool]:
    return lambda text: any(keyword in text for keyword in keywords)
