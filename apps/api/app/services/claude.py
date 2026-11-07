"""Claude API 스트리밍 어댑터 (LLMClient)."""

from __future__ import annotations

from collections.abc import AsyncIterator


class ClaudeClient:
    """LLMClient 구현. 호출 전 설치 버전 문서를 확인한다 (설계서 5⑥ 단계 1)."""

    def stream(self, system: str, user_text: str) -> AsyncIterator[str]:
        raise NotImplementedError
