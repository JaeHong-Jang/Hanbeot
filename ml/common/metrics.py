"""지표 정의: UA, WA, macro-F1, CCC, ECE. 순수 numpy."""

from __future__ import annotations

import numpy as np
from numpy.typing import ArrayLike, NDArray


def _as_labels(y_true: ArrayLike, y_pred: ArrayLike) -> tuple[NDArray[np.generic], NDArray[np.generic]]:
    true, pred = np.asarray(y_true), np.asarray(y_pred)
    if true.shape != pred.shape or true.ndim != 1 or true.size == 0:
        raise ValueError("y_true와 y_pred는 같은 길이의 비어 있지 않은 1차원이어야 한다")
    return true, pred


def wa(y_true: ArrayLike, y_pred: ArrayLike) -> float:
    """Weighted Accuracy = 전체 정확도."""
    true, pred = _as_labels(y_true, y_pred)
    return float(np.mean(true == pred))


def ua(y_true: ArrayLike, y_pred: ArrayLike) -> float:
    """Unweighted Accuracy = 클래스별 재현율의 평균 (정답에 존재하는 클래스만)."""
    true, pred = _as_labels(y_true, y_pred)
    recalls = [float(np.mean(pred[true == cls] == cls)) for cls in np.unique(true)]
    return float(np.mean(recalls))


def macro_f1(y_true: ArrayLike, y_pred: ArrayLike) -> float:
    """클래스별 F1의 평균. 정답 또는 예측에 나타난 모든 클래스를 쓴다."""
    true, pred = _as_labels(y_true, y_pred)
    scores = []
    for cls in np.union1d(true, pred):
        tp = float(np.sum((true == cls) & (pred == cls)))
        fp = float(np.sum((true != cls) & (pred == cls)))
        fn = float(np.sum((true == cls) & (pred != cls)))
        denom = 2 * tp + fp + fn
        scores.append(0.0 if denom == 0 else 2 * tp / denom)
    return float(np.mean(scores))


def ccc(y_true: ArrayLike, y_pred: ArrayLike) -> float:
    """Lin의 일치 상관 계수 (연속값: 긍정–부정, 각성)."""
    true = np.asarray(y_true, dtype=float)
    pred = np.asarray(y_pred, dtype=float)
    if true.shape != pred.shape or true.size < 2:
        raise ValueError("길이가 같고 2 이상이어야 한다")
    mean_t, mean_p = true.mean(), pred.mean()
    var_t, var_p = true.var(), pred.var()
    cov = float(np.mean((true - mean_t) * (pred - mean_p)))
    denom = var_t + var_p + (mean_t - mean_p) ** 2
    return 0.0 if denom == 0 else float(2 * cov / denom)


def ece(confidences: ArrayLike, correct: ArrayLike, n_bins: int = 10) -> float:
    """Expected Calibration Error. 구간 (lo, hi], 첫 구간은 0 포함.

    confidences: 예측 확신도 [0,1], correct: 맞았으면 1/True.
    """
    conf = np.asarray(confidences, dtype=float)
    hit = np.asarray(correct, dtype=float)
    if conf.shape != hit.shape or conf.size == 0:
        raise ValueError("길이가 같고 비어 있지 않아야 한다")
    edges = np.linspace(0.0, 1.0, n_bins + 1)
    total = 0.0
    for lo, hi in zip(edges[:-1], edges[1:], strict=True):
        in_bin = (conf > lo) & (conf <= hi) if lo > 0 else (conf >= lo) & (conf <= hi)
        if in_bin.any():
            total += in_bin.mean() * abs(hit[in_bin].mean() - conf[in_bin].mean())
    return float(total)
