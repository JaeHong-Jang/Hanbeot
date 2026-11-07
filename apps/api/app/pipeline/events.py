"""턴 이벤트 기록. TTFA 정의는 설계서 7.2: t0 = 발화 종료, t1 = 첫 오디오 재생."""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path


@dataclass(frozen=True)
class TurnEvent:
    """한 턴의 지연 측정 점. 발화 내용은 담지 않는다 (코딩 규약 §4)."""

    turn_id: int
    t0_speech_end_ms: int
    t1_first_audio_ms: int

    @property
    def ttfa_ms(self) -> int:
        """t1 - t0."""
        return self.t1_first_audio_ms - self.t0_speech_end_ms


def record_turn_event(event: TurnEvent, path: Path) -> None:
    """jsonl 한 줄 추가. ml/latency/ttfa.py가 읽는다 (data/schemas/turn_event.schema.json)."""
    row = asdict(event) | {"ttfa_ms": event.ttfa_ms}
    with path.open("a", encoding="utf-8") as fh:
        fh.write(json.dumps(row, ensure_ascii=False) + "\n")
