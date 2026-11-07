#!/usr/bin/env bash
# Postgres+pgvector 기동 후 마이그레이션 적용. Docker가 없으면 수동 절차를 안내한다.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DB_URL="${DATABASE_URL_PSQL:-postgresql://hanbeot:hanbeot@localhost:5432/hanbeot}"

if ! command -v docker >/dev/null 2>&1; then
  cat <<MSG
docker가 없습니다. 수동 절차:
  1) 로컬 Postgres 16 + pgvector 설치, DB/계정 hanbeot 생성
  2) psql "$DB_URL" -f $ROOT/infra/db/migrations/0001_init.sql
MSG
  exit 0
fi

docker compose -f "$ROOT/infra/docker-compose.yml" up -d db
echo "Postgres 대기 중..."
for _ in $(seq 1 30); do
  if docker compose -f "$ROOT/infra/docker-compose.yml" exec -T db pg_isready -U hanbeot -d hanbeot >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

if command -v psql >/dev/null 2>&1; then
  for f in "$ROOT"/infra/db/migrations/*.sql; do
    echo "apply $f"
    psql "$DB_URL" -v ON_ERROR_STOP=1 -f "$f"
  done
else
  for f in "$ROOT"/infra/db/migrations/*.sql; do
    docker compose -f "$ROOT/infra/docker-compose.yml" exec -T db psql -U hanbeot -d hanbeot -v ON_ERROR_STOP=1 < "$f"
  done
fi
echo "완료"
