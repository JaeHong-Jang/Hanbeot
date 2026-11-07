"""Typecast TTS 어댑터 (TTSClient). 대안: ElevenLabs."""

from __future__ import annotations


class TypecastClient:
    """TTSClient 구현."""

    async def synthesize(self, sentence: str, previous_text: str = "", next_text: str = "") -> bytes:
        raise NotImplementedError
