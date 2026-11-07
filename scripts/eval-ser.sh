#!/usr/bin/env bash
# 사용: scripts/eval-ser.sh data/processed/<set>/manifest.jsonl [split]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MANIFEST="${1:?manifest.jsonl 경로를 주세요}"
SPLIT="${2:-test}"
cd "$ROOT/ml" && uv run python -m ser.evaluate --manifest "$ROOT/$MANIFEST" --split "$SPLIT"
