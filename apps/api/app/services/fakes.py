"""테스트용 인메모리 가짜. 벤더 API 대신 어댑터를 이것으로 바꾼다 (코딩 규약 §6)."""

from __future__ import annotations

from collections.abc import AsyncIterator
from dataclasses import dataclass, field


class FakeLLM:
    def __init__(self, chunks: list[str]) -> None:
        self._chunks = chunks

    async def stream(self, system: str, user_text: str) -> AsyncIterator[str]:
        for chunk in self._chunks:
            yield chunk


class FakeSTT:
    def __init__(self, texts: list[str]) -> None:
        self._texts = texts

    async def transcribe_stream(self, audio: AsyncIterator[bytes]) -> AsyncIterator[str]:
        for text in self._texts:
            yield text


class FakeTTS:
    async def synthesize(self, sentence: str, previous_text: str = "", next_text: str = "") -> bytes:
        return sentence.encode("utf-8")


@dataclass
class FakeStorage:
    transcripts: list[tuple[str, str]] = field(default_factory=list)  # (user_id, text)
    memories: dict[str, tuple[str, str, str]] = field(default_factory=dict)  # id → (user_id, state, text)

    async def save_transcript(self, user_id: str, session_id: str, text: str) -> None:
        self.transcripts.append((user_id, text))

    async def save_memory(self, user_id: str, block: str, state: str, text: str) -> str:
        memory_id = str(len(self.memories) + 1)
        self.memories[memory_id] = (user_id, state, text)
        return memory_id

    async def search_memories(self, user_id: str, query: str, top_k: int) -> list[str]:
        found = [t for (u, s, t) in self.memories.values() if u == user_id and s == "approved"]
        return found[:top_k]
