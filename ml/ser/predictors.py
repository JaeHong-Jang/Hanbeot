"""SER 예측기 인터페이스와 가짜. 실제 emotion2vec+ 호출은 이 Protocol 뒤에 둔다."""

from __future__ import annotations

from typing import Any, Protocol


class Predictor(Protocol):
    def predict(self, row: dict[str, Any]) -> tuple[str, float]:
        """manifest 행 하나 → (예측 라벨, 확신도)."""
        ...


class ConstantPredictor:
    """항상 같은 라벨을 내는 가짜 (파이프라인 점검용)."""

    def __init__(self, label: str, confidence: float = 0.5) -> None:
        self._label = label
        self._confidence = confidence

    def predict(self, row: dict[str, Any]) -> tuple[str, float]:
        return self._label, self._confidence
