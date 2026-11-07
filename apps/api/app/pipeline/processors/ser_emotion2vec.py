"""턴 종료 오디오 버퍼 → 9라벨 확률 프레임 (민감정보 동의 시만, 임시 WAV 즉시 삭제)."""

from __future__ import annotations

from typing import Any


class SerEmotion2vec:
    """턴 종료 오디오 버퍼 → 9라벨 확률 프레임 (민감정보 동의 시만, 임시 WAV 즉시 삭제).

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
