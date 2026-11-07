"""async 엔진과 RLS 사용자 설정."""

from __future__ import annotations

from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncConnection, AsyncEngine, create_async_engine

from app.config import get_settings


def make_engine() -> AsyncEngine:
    """DATABASE_URL로 async 엔진을 만든다."""
    return create_async_engine(get_settings().database_url)


async def set_rls_user(conn: AsyncConnection, user_id: str) -> None:
    """RLS 정책이 읽는 app.user_id를 현재 트랜잭션에만 설정한다 (SET LOCAL).

    set_config의 세 번째 인자 true = 로컬. user_id는 인증 세션에서만 받는다(클라이언트 입력 금지).
    """
    await conn.execute(text("SELECT set_config('app.user_id', :uid, true)"), {"uid": user_id})
