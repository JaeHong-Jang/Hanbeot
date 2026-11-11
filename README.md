# Hanbeot (한벗)

속마음을 털어놓을 곳이 없는 사람을 위한 음성 기반 개인 맞춤형 AI 친구. 팀 문워크.

## 저장소 구성

| 폴더 | 내용 |
|---|---|
| `apps/web` | React + Vite + TypeScript 클라이언트 (홈·통화·기억·동의·위기·요약 화면). 서버 없이 보려면 `npm run dev:mock` |
| `apps/api` | FastAPI + Pipecat 서버 (음성 파이프라인, REST, 워커) |
| `packages/contracts` | OpenAPI·이벤트 스키마와 생성 타입 (계약 우선) |
| `ml/` | SER·위기·턴 감지·지연 평가와 실험 (서비스 코드와 분리) |
| `data/` | 연구·평가 데이터. `schemas/`·README만 추적, 원본은 git 제외 |
| `infra/` | docker-compose(Postgres + pgvector), SQL 마이그레이션(RLS) |
| `docs/harness/` | 폴더 구조·코딩 규약·구현 계획 |
| `docs/adr/` | 결정 기록 |
| `reports/` | 앱 설계서, 기술 논문 근거, 창업 딥리서치 |
| `research_notes/` | 리서처 노트 (회의 후속 조사, 데이터셋, TTS, 유사앱, 논문) |
| `.omc/wiki/` | LLM Wiki (근거·결정·출처 페이지) — 뷰어 `python3 tools/wiki_server.py` |
| `tools/` | Wiki 뷰어, 실행 관제 로거 |

## 시작

```bash
scripts/dev-up.sh                                   # Postgres + pgvector, 마이그레이션
cd apps/api && uv sync && uv run uvicorn app.main:app --reload
cd apps/web && npm install && npm run dev
scripts/lint-all.sh
```

코드 작업 전에 `docs/harness/README.md`와 `docs/harness/코딩-규약.md`를 읽는다. 설계 근거는 `reports/한벗 앱 설계서.md`와 Wiki `overview-app-design`.
