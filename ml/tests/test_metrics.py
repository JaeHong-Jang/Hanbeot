import numpy as np
import pytest

from common.metrics import ccc, ece, macro_f1, ua, wa


def test_wa_and_ua_differ_on_imbalance() -> None:
    y_true = ["a", "a", "a", "b"]
    y_pred = ["a", "a", "a", "a"]
    assert wa(y_true, y_pred) == 0.75
    assert ua(y_true, y_pred) == 0.5  # (1.0 + 0.0) / 2


def test_macro_f1_perfect_and_worst() -> None:
    assert macro_f1([0, 1, 2], [0, 1, 2]) == 1.0
    assert macro_f1([0, 0, 1, 1], [1, 1, 0, 0]) == 0.0


def test_macro_f1_known_value() -> None:
    # a: tp=1 fp=0 fn=1 → 2/3 ; b: tp=1 fp=1 fn=0 → 2/3
    assert macro_f1(["a", "a", "b"], ["a", "b", "b"]) == pytest.approx(2 / 3)


def test_ccc_identity_and_shift() -> None:
    x = np.array([1.0, 2.0, 3.0, 4.0])
    assert ccc(x, x) == pytest.approx(1.0)
    assert ccc(x, x + 1) < 1.0
    assert ccc(x - 2.5, -(x - 2.5)) == pytest.approx(-1.0)  # 평균 0일 때


def test_ece_perfectly_calibrated_and_overconfident() -> None:
    assert ece([1.0, 1.0], [1, 1]) == 0.0
    assert ece([0.9, 0.9, 0.9, 0.9], [1, 0, 0, 0]) == pytest.approx(0.65)


def test_metrics_reject_bad_shapes() -> None:
    with pytest.raises(ValueError):
        ua([1, 2], [1])
    with pytest.raises(ValueError):
        wa([], [])
