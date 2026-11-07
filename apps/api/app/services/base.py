"""외부 서비스 인터페이스. 벤더 교체는 구현 하나만 바꾼다 (README 경계 규칙 2)."""

from __future__ import annotations

from collections.abc import AsyncIterator
from typing import Protocol


class LLMClient(Protocol):
    def stream(self, system: str, user_text: str) -> AsyncIterator[str]:
        """응답 텍스트 조각을 스트리밍한다. 첫 줄은 위험 태그."""
        ...


class STTClient(Protocol):
    def transcribe_stream(self, audio: AsyncIterator[bytes]) -> AsyncIterator[str]:
        """오디오 스트림 → partial/final 전사."""
        ...


class TTSClient(Protocol):
    async def synthesize(self, sentence: str, previous_text: str = "", next_text: str = "") -> bytes:
        """문장 하나 → 오디오 바이트."""
        ...


class Storage(Protocol):
    async def save_transcript(self, user_id: str, session_id: str, text: str) -> None: ...

    async def save_memory(self, user_id: str, block: str, state: str, text: str) -> str:
        """기억 저장 후 id 반환."""
        ...

    async def search_memories(self, user_id: str, query: str, top_k: int) -> list[str]:
        """approved 기억만 검색한다 (설계서 5⑧)."""
        ...
