# 한벗 (Hanbeot) — 코드 작업 규약 요약

이 저장소는 리서치 산출물(`reports/`, `research_notes/`, `.omc/wiki/`)과 제품 코드(`apps/`, `packages/`, `ml/`, `data/`, `infra/`)를 함께 둔다. 코드 작업은 아래 문서를 먼저 읽는다.

- 구조와 모듈 책임: `docs/harness/README.md`
- 코딩 규약(함수·인덱스/튜플·데이터 구분): `docs/harness/코딩-규약.md`
- 구현 계획(P0 → 모듈 → 주차 → 검증): `docs/harness/구현-계획.md`
- 감정 인식 계획(라벨 체계·결합·검증·중단 기준): `docs/harness/감정-인식-계획.md`
- 설계 근거: `reports/한벗 앱 설계서.md`(절 번호로 인용), `reports/한벗 기술 논문 근거.md`([P#]), Wiki `overview-app-design`

## 꼭 지킬 것

1. `apps/api/app/domain/`은 순수 함수만. I/O 금지. 표 하나 = 함수 하나 = 테스트 하나.
2. 외부 서비스는 `apps/api/app/services/` 어댑터를 통해서만 호출.
3. 같은 로직 두 번이면 함수로. 함수는 한 가지 일. 모든 함수에 타입 힌트.
4. 튜플은 자리 뜻이 있는 2개까지, 그 이상은 `NamedTuple`/`dataclass`. 인덱스 접근 대신 언패킹·`enumerate`·라벨드 튜플(TS). 인덱스 변수는 뜻이 보이는 이름.
5. 데이터는 `data/raw → interim → processed → eval` 단방향. raw 수정 금지. 민감정보는 `data/raw/sensitive/`만, git 제외. 사용자 서비스 데이터는 `data/`에 넣지 않는다.
6. 비밀값은 `.env`. 사용자 발화 원문은 로그에 남기지 않는다.
7. 11/9 회의 결정 대기 항목(감정 체계, 기억 3층, 위험도 max 결합, 타깃)은 `app/domain/rules.yaml` 값으로 두고 함수 시그니처는 고정.
8. 구조 변경은 `docs/adr/`에 ADR. Wiki에는 결정과 근거를, 코드에는 구현을.

## 실행

```
scripts/dev-up.sh                                  # Postgres+pgvector (docker 없으면 로컬 PG + infra/db/migrations)
cd apps/api && uv sync && uv run uvicorn app.main:app --reload
cd apps/web && npm install && npm run dev
scripts/lint-all.sh                                # ruff·mypy·pytest / eslint·tsc
```

## Wiki·오케스트라

리서치·검증은 `.omc/orchestra/TEAM.md` 절차를 따른다. 코드 작업의 AI 역할 분배(구현 Claude, 교차 리뷰 codex·Gemini, 반례 테스터 codex)와 흐름은 `docs/harness/AI-개발-분배.md`, 리뷰 호출은 `.omc/orchestra/review_code.sh`. 코드 작업 중 설계와 달라진 점은 Wiki `overview-app-design`의 "구현에서 달라진 점" 절에 추가한다. 뷰어: `python3 tools/wiki_server.py` → http://127.0.0.1:8791
