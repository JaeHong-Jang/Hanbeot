"""RTZR 스트리밍 STT 어댑터 (STTClient)."""

from __future__ import annotations

from collections.abc import AsyncIterator


class RtzrClient:
    """STTClient 구현."""

    def transcribe_stream(self, audio: AsyncIterator[bytes]) -> AsyncIterator[str]:
        raise NotImplementedError
