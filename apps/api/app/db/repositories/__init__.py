"""테이블별 질의 함수 스텁. 모든 함수는 RLS가 설정된 연결을 받는다."""

from __future__ import annotations

from sqlalchemy.ext.asyncio import AsyncConnection


async def get_user(conn: AsyncConnection, user_id: str) -> None:
    raise NotImplementedError


async def get_consents(conn: AsyncConnection) -> None:
    raise NotImplementedError


async def insert_transcript(conn: AsyncConnection, session_id: str, speaker: str, text: str) -> None:
    raise NotImplementedError


async def list_approved_memories(conn: AsyncConnection) -> None:
    """approved만 반환 (설계서 5⑧)."""
    raise NotImplementedError


async def insert_affect_cue(conn: AsyncConnection, utterance_id: int, category: str) -> None:
    raise NotImplementedError


async def insert_crisis_log(conn: AsyncConnection, level: str) -> None:
    raise NotImplementedError


async def enqueue_deletion(conn: AsyncConnection, scope: str) -> None:
    raise NotImplementedError
