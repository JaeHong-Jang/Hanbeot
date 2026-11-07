"""모델 비교 스텁 (미확정, 11/9 회의): emotion2vec+ vs Whisper 인코더 + LoRA. 같은 화자 분리 분할에서 1회."""

from __future__ import annotations

from typing import Any

from ser.evaluate import evaluate
from ser.predictors import Predictor


def compare(rows: list[dict[str, Any]], predictors: dict[str, Predictor]) -> dict[str, dict[str, float]]:
    """모델 이름 → 지표. 같은 rows(test split)로 모두 평가한다. 실제 모델은 TODO."""
    return {name: evaluate(rows, predictor) for name, predictor in predictors.items()}
