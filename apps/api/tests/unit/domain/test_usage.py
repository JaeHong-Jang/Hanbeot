"""설계서 5⑪ 경계 4건 (임시 기준 60분·주 6일)."""

from app.domain.usage import should_notify


def test_below_both_limits() -> None:
    assert not should_notify(59, 5, False)


def test_daily_boundary() -> None:
    assert should_notify(60, 1, False)


def test_weekly_boundary() -> None:
    assert should_notify(10, 6, False)


def test_suppressed_in_safe_mode() -> None:
    assert not should_notify(120, 7, True)
