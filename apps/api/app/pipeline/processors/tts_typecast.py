"""문장 단위 텍스트 프레임 → 오디오 프레임 (previous_text/next_text, 감정 태그는 미확정)."""

from __future__ import annotations

from typing import Any


class TtsTypecast:
    """문장 단위 텍스트 프레임 → 오디오 프레임 (previous_text/next_text, 감정 태그는 미확정).

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
