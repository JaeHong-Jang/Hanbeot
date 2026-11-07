"""affect_cues·inferred 기억 TTL 만료 (설계서 5⑧ 단계 4)."""

from __future__ import annotations


async def run_once() -> None:
    """expires_at이 지난 행을 삭제한다. 하루 1회 실행. TTL 값은 rules.yaml(미확정)."""
    raise NotImplementedError
