"""통합 테스트 필수 3개 (코딩 규약 §6). Postgres가 필요해 지금은 skip."""

import pytest


@pytest.mark.skip(reason="needs postgres")
def test_rls_isolation_between_users() -> None:
    """P0-9: A 인증으로 B의 행에 접근 100% 차단."""


@pytest.mark.skip(reason="needs postgres")
def test_deletion_queue_completes_within_24h() -> None:
    """P0-10: 삭제 요청 후 운영 DB에 사용자 행 0건."""


@pytest.mark.skip(reason="needs postgres")
def test_unapproved_memory_not_searchable() -> None:
    """P0-8: approved가 아닌 기억은 검색에 노출되지 않는다."""
