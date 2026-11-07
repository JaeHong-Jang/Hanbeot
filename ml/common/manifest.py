"""manifest.jsonl 로드·검증. 같은 speaker_id가 두 split에 있으면 에러 (코딩 규약 §3)."""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

import jsonschema

SCHEMA_PATH = Path(__file__).resolve().parents[2] / "data" / "schemas" / "manifest.schema.json"


class ManifestError(ValueError):
    """manifest가 스키마나 화자 분리 규칙을 어김."""


def load_schema(path: Path = SCHEMA_PATH) -> dict[str, Any]:
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)  # type: ignore[no-any-return]


def check_speaker_split(rows: list[dict[str, Any]]) -> None:
    """한 화자는 한 split에만 속해야 한다."""
    splits_by_speaker: dict[str, set[str]] = {}
    for row in rows:
        splits_by_speaker.setdefault(row["speaker_id"], set()).add(row["split"])
    leaked = {spk: sorted(s) for spk, s in splits_by_speaker.items() if len(s) > 1}
    if leaked:
        raise ManifestError(f"speaker_id가 여러 split에 있음: {leaked}")


def load_manifest(path: Path, schema_path: Path = SCHEMA_PATH) -> list[dict[str, Any]]:
    """jsonl을 읽어 줄마다 스키마 검증 후 화자 분리 검사."""
    validator = jsonschema.Draft202012Validator(load_schema(schema_path))
    rows: list[dict[str, Any]] = []
    with path.open(encoding="utf-8") as fh:
        for line_no, line in enumerate(fh, start=1):  # 1-기반 줄 번호
            if not line.strip():
                continue
            row = json.loads(line)
            errors = list(validator.iter_errors(row))
            if errors:
                raise ManifestError(f"{path}:{line_no}: {errors[0].message}")
            rows.append(row)
    check_speaker_split(rows)
    return rows


if __name__ == "__main__":
    loaded = load_manifest(Path(sys.argv[1]))
    print(f"OK: {len(loaded)} rows")
