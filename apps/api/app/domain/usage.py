"""사용 시간 경계·휴식 알림 판단 (설계서 5⑪). 기준값은 임시 운영 기준(rules.yaml)."""

from __future__ import annotations

from app.domain.rules import Rules, get_rules


def should_notify(
    elapsed_minutes: float,
    active_days: int,
    in_safe_mode: bool,
    rules: Rules | None = None,
) -> bool:
    """분 >= 일일 기준 또는 주 사용일 >= 주간 기준이면 True. 안전 모드 중에는 보류."""
    active = rules or get_rules()
    if in_safe_mode:
        return False
    return elapsed_minutes >= active.usage_daily_minutes or active_days >= active.usage_weekly_days
