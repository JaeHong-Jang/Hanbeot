"""기억·전사 저장 어댑터 (Storage). 연결마다 RLS 세션 변수를 먼저 설정한다."""

from __future__ import annotations


class PostgresStorage:
    """Storage 구현. db.session.set_rls_user 후 repositories를 호출한다."""

    async def save_transcript(self, user_id: str, session_id: str, text: str) -> None:
        raise NotImplementedError

    async def save_memory(self, user_id: str, block: str, state: str, text: str) -> str:
        raise NotImplementedError

    async def search_memories(self, user_id: str, query: str, top_k: int) -> list[str]:
        raise NotImplementedError
