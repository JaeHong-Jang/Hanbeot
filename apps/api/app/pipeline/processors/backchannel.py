"""사용자 발화 중 프레임 → 맞장구·필러 클립 프레임 (미확정, P1)."""

from __future__ import annotations

from typing import Any


class Backchannel:
    """사용자 발화 중 프레임 → 맞장구·필러 클립 프레임 (미확정, P1).

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
