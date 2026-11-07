"""VAD·STT 타임스탬프 프레임 → 속도·멈춤 단서 프레임 (openSMILE 사용 안 함)."""

from __future__ import annotations

from typing import Any


class Prosody:
    """VAD·STT 타임스탬프 프레임 → 속도·멈춤 단서 프레임 (openSMILE 사용 안 함).

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
