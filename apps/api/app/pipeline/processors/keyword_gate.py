"""STT final 전사 프레임 → 그대로 통과 또는 즉시 안전 스크립트 프레임."""

from __future__ import annotations

from typing import Any


class KeywordGate:
    """STT final 전사 프레임 → 그대로 통과 또는 즉시 안전 스크립트 프레임.

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
