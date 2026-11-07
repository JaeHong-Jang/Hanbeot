"""rules.yaml을 한 번 읽어 불변 객체로 제공한다.

설계서 5④-2, 5⑨-1, 5⑪의 임시 운영 기준과 11/9 회의 미확정 항목의 값을 담는다.
파일 읽기는 import 시점이 아니라 첫 `get_rules()` 호출 때 한 번만 일어난다.
"""

from __future__ import annotations

from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path
from typing import Any

import yaml

RULES_PATH = Path(__file__).with_name("rules.yaml")


@dataclass(frozen=True)
class Rules:
    """domain이 쓰는 모든 조정 가능 값."""

    ser_score_threshold: float
    ser_min_turn_gap: int
    context_window_turns: int
    usage_daily_minutes: int
    usage_weekly_days: int
    affect_ttl_days: int
    label_scheme: str
    label_map: dict[str, str | None]
    mismatch_text_polarity_min: float
    mismatch_voice_categories: tuple[str, ...]
    crisis_l2_text_points: float
    crisis_l2_voice_points: float
    crisis_l2_notice_every: float
    crisis_l2_notice_max: int
    crisis_release_clean_turns: int
    crisis_keywords: tuple[str, ...]
    crisis_combine_rule: str


def parse_rules(raw: dict[str, Any]) -> Rules:
    """yaml에서 읽은 dict를 Rules로 바꾼다. 필드가 없으면 TypeError."""
    return Rules(
        **{
            **raw,
            "mismatch_voice_categories": tuple(raw["mismatch_voice_categories"]),
            "crisis_keywords": tuple(raw["crisis_keywords"]),
        }
    )


@lru_cache(maxsize=1)
def get_rules() -> Rules:
    """rules.yaml을 한 번만 읽어 캐시한다."""
    with RULES_PATH.open(encoding="utf-8") as fh:
        raw = yaml.safe_load(fh)
    return parse_rules(raw)
