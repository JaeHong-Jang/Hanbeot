"""SER 평가 CLI: manifest → 예측 → UA/WA/macro-F1/ECE 표 (설계서 5④-1 평가 방법).

합격선 UA >= 0.70, 목표 0.80. 점수는 보정 전에는 순위용이다.
"""

from __future__ import annotations

import argparse
from collections import Counter
from pathlib import Path
from typing import Any

from common.manifest import load_manifest
from common.metrics import ece, macro_f1, ua, wa
from ser.predictors import ConstantPredictor, Predictor


def evaluate(rows: list[dict[str, Any]], predictor: Predictor) -> dict[str, float]:
    """행마다 예측하고 지표를 계산한다."""
    y_true = [row["label"] for row in rows]
    preds = [predictor.predict(row) for row in rows]
    y_pred = [label for label, _ in preds]
    confidences = [conf for _, conf in preds]
    correct = [t == p for t, p in zip(y_true, y_pred, strict=True)]
    return {
        "n": float(len(rows)),
        "UA": ua(y_true, y_pred),
        "WA": wa(y_true, y_pred),
        "macro_F1": macro_f1(y_true, y_pred),
        "ECE": ece(confidences, correct),
    }


def format_table(result: dict[str, float]) -> str:
    lines = ["| metric | value |", "|---|---|"]
    lines += [f"| {name} | {value:.4f} |" for name, value in result.items()]
    return "\n".join(lines)


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--split", default="test")
    parser.add_argument("--fake-label", help="ConstantPredictor로 실행 (실제 모델 연결 전 점검용)")
    args = parser.parse_args(argv)
    rows = [r for r in load_manifest(args.manifest) if r["split"] == args.split]
    if not rows:
        raise SystemExit(f"split={args.split} 행이 없다")
    label = args.fake_label or Counter(r["label"] for r in rows).most_common(1)[0][0]
    # TODO: 실제 emotion2vec+ Predictor 연결 (모델 호출은 Predictor 뒤에만)
    print(format_table(evaluate(rows, ConstantPredictor(label))))


if __name__ == "__main__":
    main()
