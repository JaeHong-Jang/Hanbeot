"""설계서 5⑩-2 8조합, 5⑩-3 철회."""

import pytest

from app.domain.consent import Consent, Feature, StopAction, allowed_features, on_withdraw

CARD_ONLY = frozenset({Feature.SAFETY_CARD})


@pytest.mark.parametrize(
    ("row", "basic", "voice", "sensitive"),
    [
        (1, False, False, False),
        (2, False, True, False),
        (3, False, False, True),
        (4, False, True, True),
    ],
)
def test_without_basic_only_safety_card(row: int, basic: bool, voice: bool, sensitive: bool) -> None:
    assert allowed_features(Consent(basic=basic, voice=voice, sensitive=sensitive)) == CARD_ONLY


@pytest.mark.parametrize("voice", [False, True])  # 행 5, 6
def test_basic_only_has_no_sensitive_features(voice: bool) -> None:
    features = allowed_features(Consent(basic=True, voice=voice, sensitive=False))
    assert Feature.CALL in features and Feature.CRISIS_TEXT_CLASSIFY in features
    assert not features & {
        Feature.SER,
        Feature.PROSODY,
        Feature.CONFIRM_QUESTION,
        Feature.FELT_MEMORY,
        Feature.CRISIS_LOG,
        Feature.VOICE_RETENTION,
    }


@pytest.mark.parametrize("voice", [False, True])  # 행 7, 8
def test_full_consent_all_features_but_voice_retention(voice: bool) -> None:
    features = allowed_features(Consent(basic=True, voice=voice, sensitive=True))
    assert features == frozenset(Feature) - {Feature.VOICE_RETENTION}


def test_withdraw_sensitive_stops_ser_and_queues_deletion() -> None:
    prev = Consent(basic=True, voice=False, sensitive=True)
    actions = on_withdraw(prev, Consent(basic=True, voice=False, sensitive=False))
    assert actions[0] is StopAction.DISABLE_SER_PROSODY
    assert StopAction.RECHECK_BEFORE_WRITE in actions
    assert StopAction.ENQUEUE_SENSITIVE_DELETION in actions
    assert StopAction.END_SESSION not in actions


def test_withdraw_basic_ends_session() -> None:
    prev = Consent(basic=True, voice=False, sensitive=True)
    actions = on_withdraw(prev, Consent(basic=False, voice=False, sensitive=False))
    assert StopAction.END_SESSION in actions and StopAction.ENQUEUE_ALL_DELETION in actions


def test_no_change_no_actions() -> None:
    c = Consent(basic=True, voice=False, sensitive=True)
    assert on_withdraw(c, c) == []


def test_granting_is_not_withdrawal() -> None:
    prev = Consent(basic=True, voice=False, sensitive=False)
    assert on_withdraw(prev, Consent(basic=True, voice=False, sensitive=True)) == []
