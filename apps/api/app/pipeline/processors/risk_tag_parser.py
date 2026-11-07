"""LLM 텍스트 프레임 → L0·L2는 태그 제거 후 통과, L1은 생성문 폐기 + 안전 스크립트 프레임."""

from __future__ import annotations

from typing import Any


class RiskTagParser:
    """LLM 텍스트 프레임 → L0·L2는 태그 제거 후 통과, L1은 생성문 폐기 + 안전 스크립트 프레임.

    현재는 통과(pass-through) 스텁. 실제 Pipecat FrameProcessor 연결은 voice 의존성 설치 후.
    """

    def process(self, frame: Any) -> Any:
        """입력 프레임을 그대로 돌려준다 (TODO)."""
        return frame
