"""TurnEvent jsonl → TTFA P50/P90 (설계서 7.2). 사용: python -m latency.ttfa events.jsonl"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np


def load_ttfa_ms(path: Path) -> list[int]:
    """t1 - t0 를 줄마다 계산한다 (저장된 ttfa_ms가 있어도 다시 계산)."""
    values = []
    with path.open(encoding="utf-8") as fh:
        for line in fh:
            if line.strip():
                row = json.loads(line)
                values.append(int(row["t1_first_audio_ms"]) - int(row["t0_speech_end_ms"]))
    return values


def summarize(ttfa_ms: list[int]) -> dict[str, float]:
    if not ttfa_ms:
        raise ValueError("이벤트가 없다")
    return {
        "n": float(len(ttfa_ms)),
        "P50": float(np.percentile(ttfa_ms, 50)),
        "P90": float(np.percentile(ttfa_ms, 90)),
    }


if __name__ == "__main__":
    print(summarize(load_ttfa_ms(Path(sys.argv[1]))))
