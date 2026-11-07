#!/usr/bin/env bash
# api: ruff+mypy+pytest / ml: ruff+pytest / web: lint+typecheck (package.json 있을 때)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "== apps/api =="
(cd "$ROOT/apps/api" && uv run ruff check . && uv run mypy app/domain && uv run pytest -q)

echo "== ml =="
(cd "$ROOT/ml" && uv run ruff check . && uv run pytest -q)

if [ -f "$ROOT/apps/web/package.json" ]; then
  echo "== apps/web =="
  (cd "$ROOT/apps/web" && npm run lint && npm run typecheck)
fi
echo "OK"
