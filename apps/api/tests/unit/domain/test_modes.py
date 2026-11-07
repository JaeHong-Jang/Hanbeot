"""설계서 5⑥ 3모드 프롬프트."""

import pytest

from app.domain.modes import AI_DISCLOSURE_GREETING, Mode, system_prompt


@pytest.mark.parametrize(
    ("mode", "marker"),
    [(Mode.LISTEN, "들어줘"), (Mode.ORGANIZE, "정리해줘"), (Mode.ADVISE, "조언해줘")],
)
def test_each_mode_has_own_rule_and_risk_tag(mode: Mode, marker: str) -> None:
    prompt = system_prompt(mode, [], "")
    assert marker in prompt and "<risk>" in prompt
    others = [m for m in ("들어줘", "정리해줘", "조언해줘") if m != marker]
    assert not any(f"[모드: {m}]" in prompt for m in others)


def test_cues_and_memory_included_when_given() -> None:
    prompt = system_prompt(Mode.LISTEN, ["[음성 단서 utt=1] 범주=가라앉음"], "고양이를 키운다")
    assert "utt=1" in prompt and "고양이" in prompt


def test_greeting_discloses_ai_without_efficacy_claim() -> None:
    assert "AI" in AI_DISCLOSURE_GREETING and "대신하지" in AI_DISCLOSURE_GREETING
