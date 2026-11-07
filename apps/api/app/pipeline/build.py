"""파이프라인 조립. 프로세서 순서는 여기 한 곳 (README §2)."""

from __future__ import annotations

from dataclasses import dataclass

from app.config import get_settings
from app.domain.consent import Consent, Feature, allowed_features
from app.domain.modes import Mode


@dataclass(frozen=True)
class SessionContext:
    """세션 하나의 조립 입력."""

    user_id: str
    mode: Mode
    consent: Consent


def build_pipeline(session: SessionContext) -> list[str]:
    """설계서 4.1 구성도 순서대로 프로세서 이름을 돌려준다.

    transport.input
     → vad_turn (Silero VAD + Smart Turn v3, 발화 종료 시각 기록)
     → stt_rtzr (partial → MemoryPrefetch)
     → [ser_emotion2vec, prosody]  (민감정보 S 동의 시에만)
     → keyword_gate (위험 키워드 → 즉시 안전 스크립트)
     → context_builder (모드 + 기억 블록 + 음성 단서)
     → llm_claude (첫 줄 위험 태그)
     → risk_tag_parser (L1 폐기·스크립트 / L0·L2 태그 제거)
     → tts_typecast (문장 단위)
     → transport.output
    backchannel은 미확정(P1)이라 넣지 않는다.
    """
    features = allowed_features(session.consent)
    names = ["vad_turn", "stt_rtzr"]
    if Feature.SER in features:
        names += ["ser_emotion2vec", "prosody"]
    names += ["keyword_gate", "context_builder", "llm_claude", "risk_tag_parser", "tts_typecast"]
    if get_settings().voice_enabled:
        _wire_pipecat(names)
    return names


def _wire_pipecat(names: list[str]) -> None:
    """실제 Pipecat 연결. pipecat 미설치면 건너뛴다 (TODO)."""
    try:
        import pipecat  # noqa: F401
    except ImportError:
        return
    # TODO: names에 대응하는 FrameProcessor를 만들어 Pipeline(...)에 넣는다.
