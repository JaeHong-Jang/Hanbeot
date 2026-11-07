#!/usr/bin/env bash
# contracts -> apps/web/src/entities/generated/{api,events}.d.ts
set -euo pipefail
cd "$(dirname "$0")/../packages/contracts"
[ -d node_modules ] || npm install --no-audit --no-fund
npm run gen:types
