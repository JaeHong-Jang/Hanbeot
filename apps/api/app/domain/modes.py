"""3모드 시스템 프롬프트 조각 (설계서 5⑥ 표, P0-5, P0-12)."""

from __future__ import annotations

from collections.abc import Sequence
from enum import StrEnum

# P0-12: AI 고지는 온보딩·통화 화면·첫 인사 3곳. 이 상수가 첫 인사 음성의 출처.
# 문구는 임시(자체 설계 + 사용자 테스트로 결정). 효능 주장 금지: 부정문 고지만.
AI_DISCLOSURE_GREETING = "안녕, 나는 한벗이야. 사람이 아니라 AI 친구고, 치료나 상담을 대신하지는 않아."

RISK_TAG_INSTRUCTION = (
    "응답의 첫 줄에 <risk>L0</risk>, <risk>L1</risk>, <risk>L2</risk> 중 하나만 출력하라. "
    "L1은 명시적 자살·자해 의도, L2는 암시적 무망감, L0은 그 외(관용 표현 포함)."
)

COMMON_RULES = (
    "너는 한벗, AI 친구다. 사람인 척하지 않는다. 치료·상담·진단의 효과를 주장하지 않는다. "
    "감정을 단정하지 않는다. 점수나 진단 용어를 말하지 않는다. 첫 문장은 짧게 쓴다."
)


class Mode(StrEnum):
    """설계서 5⑥ 3모드 (들어줘 / 정리해줘 / 조언해줘)."""

    LISTEN = "listen"
    ORGANIZE = "organize"
    ADVISE = "advise"


_MODE_RULES: dict[Mode, str] = {
    Mode.LISTEN: (
        "[모드: 들어줘] 반영(단순/복합)과 인정, 열린 질문은 최대 1개. 조언·해결책·평가는 하지 않는다. 1–2문장."
    ),
    Mode.ORGANIZE: ("[모드: 정리해줘] 재진술, 요약, 사용자가 말한 다음 행동 되짚기. 새 조언은 하지 않는다. 3–5문장."),
    Mode.ADVISE: ("[모드: 조언해줘] 반영 1회 후 제안·정보. 단정적 지시와 의료 판단은 하지 않는다. 2–4문장."),
}


def system_prompt(mode: Mode, cues: Sequence[str], memory_block: str) -> str:
    """[공통 규칙] + [모드] + [메모리 블록] + [음성 단서] + [위험 태그 지시] (설계서 5⑥ 단계 2).

    cues는 `[음성 단서 utt=123] 범주=가라앉음, ...` 형식의 문자열(점수 제외, 5④-2).
    """
    parts = [COMMON_RULES, _MODE_RULES[mode]]
    if memory_block:
        parts.append(f"[기억]\n{memory_block}")
    if cues:
        parts.append("[음성 단서]\n" + "\n".join(cues))
    parts.append(RISK_TAG_INSTRUCTION)
    return "\n\n".join(parts)
