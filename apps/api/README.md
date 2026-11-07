# hanbeot-api

FastAPI + Pipecat 백엔드. 구조는 `docs/harness/README.md` 2절.

```
cp .env.example .env
uv python install 3.12
uv sync --group dev            # 음성 의존성: uv sync --group dev --extra voice
uv run uvicorn app.main:app --reload
curl localhost:8000/health     # {"status":"ok"}
```

검사: `uv run ruff check . && uv run mypy app/domain && uv run pytest -q`

- `app/domain/`은 순수 함수(I/O 금지). 조정 가능한 값은 `rules.yaml`.
- 통합 테스트(`tests/integration`)는 Postgres가 필요해 기본으로 skip된다.
