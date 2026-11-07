import json
from pathlib import Path

import pytest

from common.manifest import ManifestError, load_manifest
from common.splits import speaker_split
from latency.ttfa import load_ttfa_ms, summarize
from ser.evaluate import evaluate
from ser.predictors import ConstantPredictor


def row(sample_id: str, speaker: str, split: str, **extra: object) -> dict[str, object]:
    base: dict[str, object] = {
        "id": sample_id,
        "speaker_id": speaker,
        "split": split,
        "label": "sad",
        "label_scheme": "4class",
        "source": "t",
        "license": "open",
        "text": "x",
    }
    return base | extra


def write(path: Path, rows: list[dict[str, object]]) -> Path:
    path.write_text("\n".join(json.dumps(r) for r in rows), encoding="utf-8")
    return path


def test_valid_manifest(tmp_path: Path) -> None:
    rows = load_manifest(write(tmp_path / "m.jsonl", [row("1", "a", "train"), row("2", "b", "test")]))
    assert len(rows) == 2


def test_same_speaker_in_two_splits_raises(tmp_path: Path) -> None:
    with pytest.raises(ManifestError, match="여러 split"):
        load_manifest(write(tmp_path / "m.jsonl", [row("1", "a", "train"), row("2", "a", "test")]))


def test_missing_required_field_raises(tmp_path: Path) -> None:
    bad = row("1", "a", "train")
    del bad["license"]
    with pytest.raises(ManifestError):
        load_manifest(write(tmp_path / "m.jsonl", [bad]))


def test_audio_path_xor_text(tmp_path: Path) -> None:
    both = row("1", "a", "train", audio_path="a.wav")
    with pytest.raises(ManifestError):
        load_manifest(write(tmp_path / "m.jsonl", [both]))
    neither = row("1", "a", "train")
    del neither["text"]
    with pytest.raises(ManifestError):
        load_manifest(write(tmp_path / "m2.jsonl", [neither]))


def test_speaker_split_is_grouped_and_seeded() -> None:
    speakers = [f"s{i}" for i in range(20)]
    ratios = {"train": 0.6, "dev": 0.2, "test": 0.2}
    first = speaker_split(speakers, ratios, seed=1)
    assert first == speaker_split(list(reversed(speakers)), ratios, seed=1)
    assert set(first) == set(speakers)
    assert sum(v == "test" for v in first.values()) == 4


def test_fake_predictor_evaluate() -> None:
    rows = [{"label": "sad"}, {"label": "sad"}, {"label": "happy"}]
    result = evaluate(rows, ConstantPredictor("sad", 1.0))
    assert result["WA"] == pytest.approx(2 / 3) and result["UA"] == 0.5


def test_ttfa_summary(tmp_path: Path) -> None:
    path = tmp_path / "e.jsonl"
    path.write_text(
        "\n".join(
            json.dumps({"turn_id": i, "t0_speech_end_ms": 0, "t1_first_audio_ms": v})
            for i, v in enumerate([100, 200, 300, 400, 1000])
        ),
        encoding="utf-8",
    )
    result = summarize(load_ttfa_ms(path))
    assert result["P50"] == 300 and result["n"] == 5
