"""오디오 프레임 → 오디오 프레임 + 발화 시작·종료 이벤트(Silero VAD + Smart Turn v3, t0 기록)."""

from __future__ import annotations

from typing import Any


class VadTurn:
    """오디오 프레임 → 오디오 프레임 + 발화 시작·종료 이벤트(Silero VAD + Smart Turn v3, t0 기록).

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
