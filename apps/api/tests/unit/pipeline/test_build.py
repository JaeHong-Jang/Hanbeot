from app.domain.consent import Consent
from app.domain.modes import Mode
from app.pipeline.build import SessionContext, build_pipeline
from app.pipeline.events import TurnEvent


def test_pipeline_includes_ser_only_with_sensitive_consent() -> None:
    full = SessionContext("u", Mode.LISTEN, Consent(basic=True, voice=False, sensitive=True))
    basic = SessionContext("u", Mode.LISTEN, Consent(basic=True, voice=False, sensitive=False))
    assert "ser_emotion2vec" in build_pipeline(full)
    assert "ser_emotion2vec" not in build_pipeline(basic)
    assert build_pipeline(basic)[:2] == ["vad_turn", "stt_rtzr"]


def test_ttfa() -> None:
    assert TurnEvent(1, 1000, 1850).ttfa_ms == 850
