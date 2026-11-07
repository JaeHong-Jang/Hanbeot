"""삭제 큐 처리 (설계서 5⑩-4, P0-10)."""

from __future__ import annotations


async def run_once() -> None:
    """deletion_queue의 pending 행을 하나씩 처리한다.

    큐 의미: 요청 후 24h 이내(운영 DB 기준) 전사·요약·기억·임베딩·단서·위기 로그 삭제를 완료한다.
    임베딩은 원본 행과 같은 트랜잭션에서 지운다. 진행 중 요약·SER 작업은 취소한다.
    완료 시 status=done, done_at 기록. 백업·벤더 사본은 tombstone만 남기고 별도 정책(미확정).
    """
    raise NotImplementedError
