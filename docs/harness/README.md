# 한벗 하네스 (Harness) — 폴더 구조와 모듈 책임

작성 2026-11-07. 근거: `reports/한벗 앱 설계서.md` 4절(아키텍처)·5절(기능별 구현)·6절(스택), `reports/한벗 기술 논문 근거.md`, `research_notes/회의 후속 조사/00_요약.md`(11/9 회의 결정 전 항목은 **미확정**으로 표시).

"하네스"는 코드가 올라갈 틀이다. 어디에 무엇을 두는지, 모듈끼리 어떻게 말하는지, 데이터가 어디서 어디로 흐르는지를 먼저 고정해 두고 그 안에서만 기능을 채운다. 규약은 [코딩-규약.md](코딩-규약.md), 일정은 [구현-계획.md](구현-계획.md).

## 1. 한 장 구조

```
Hanbeot/
├── apps/
│   ├── web/            React 18 + Vite + TypeScript  — 통화·기억·동의·위기·요약 화면
│   └── api/            FastAPI + Pipecat (Python 3.12) — 음성 파이프라인·REST·워커
├── packages/
│   └── contracts/      프런트·백엔드 공유 계약: OpenAPI, 이벤트 JSON Schema, 생성된 TS 타입
├── ml/                 모델 실험·평가·파인튜닝 (Python) — 서비스 코드와 분리
│   ├── common/         데이터 로더, 지표(UA/WA/F1/CCC/ECE), 화자 분리 분할
│   ├── ser/            emotion2vec+ 평가·보정, Whisper+LoRA 비교, 맥락 턴 실험
│   ├── crisis/         위기 평가 세트, 키워드 단독/태그 단독/결합 비교
│   ├── turn/           Smart Turn 한국어 조기 종료율
│   └── latency/        TTFA 로그 분석
├── data/               데이터 (schemas·README만 git 추적, 나머지는 제외)
│   ├── raw/            원본. 수정 금지. 데이터셋별 폴더 + LICENSE 메모
│   ├── interim/        변환 중간물 (16kHz mono wav, 전사 jsonl)
│   ├── processed/      학습·평가 입력 최종본 (manifest.jsonl)
│   ├── eval/           동결 평가 세트 (버전 폴더 v0, v1 …)
│   └── schemas/        manifest·이벤트·기억 레코드 JSON Schema
├── infra/
│   ├── docker-compose.yml   Postgres 16 + pgvector, api, web
│   └── db/migrations/       SQL 마이그레이션 (RLS 포함)
├── docs/
│   ├── harness/        이 문서 묶음
│   └── adr/            결정 기록 ADR-NNNN-제목.md
├── scripts/            반복 작업 (dev-up, lint-all, eval-ser …)
├── tests/              E2E·통합 (단위 테스트는 각 app·ml 안에)
├── reports/ research_notes/ .omc/ tools/   리서치 산출물·Wiki·뷰어 (그대로 둠)
├── CLAUDE.md           코드 작업 규약 요약 (사람·AI 에이전트 공통)
└── README.md
```

경계 규칙 세 가지.
1. `apps/api/app/domain/`은 순수 로직만 둔다. 네트워크·DB·파일 I/O 금지. 그래서 단위 테스트가 빠르고, 규칙(확인 질문 조건, 상태 전이, 동의 조합표)이 한 곳에 있다.
2. 외부 서비스(Claude, RTZR, Typecast, DB)는 `services/`의 어댑터를 통해서만 부른다. 벤더 교체는 어댑터 하나만 바꾼다.
3. `ml/`은 `apps/api`를 import하지 않는다. 반대도 금지. 둘이 공유할 것은 `data/schemas`와 `ml/common`의 지표 정의로 한정한다.

## 2. apps/api (FastAPI + Pipecat)

```
apps/api/
├── pyproject.toml           uv 관리. python = 3.12 (Pipecat 1.14 지원 범위)
├── app/
│   ├── main.py              FastAPI 앱 조립, 라우터 등록, lifespan
│   ├── config.py            Settings (pydantic-settings). 비밀값은 .env, 코드에 금지
│   ├── api/                 HTTP 라우터. 얇게. 검증→서비스 호출→응답
│   │   ├── health.py
│   │   ├── sessions.py      통화 세션 생성·종료, WebRTC 오퍼 교환
│   │   ├── consents.py      3단 동의 조회·변경·통화 중 철회
│   │   ├── memories.py      기억 목록·수정·삭제·승인 (사용자 격리 RLS)
│   │   ├── summaries.py     통화 후 요약·승인 후보
│   │   └── deletion.py      삭제 요청 → 삭제 큐
│   ├── pipeline/            Pipecat 파이프라인 (설계서 4.1 구성도 그대로)
│   │   ├── build.py         build_pipeline(session) → Pipeline. 프로세서 순서는 여기 한 곳
│   │   ├── events.py        턴 이벤트 기록 (t0 발화 종료, t1 첫 재생) — TTFA 정의 7.2
│   │   └── processors/
│   │       ├── vad_turn.py          Silero VAD + Smart Turn v3, 발화 종료 시각 기록
│   │       ├── stt_rtzr.py          RTZR 스트리밍 STT (partial → prefetch 트리거)
│   │       ├── ser_emotion2vec.py   턴 종료 오디오 버퍼 → 9라벨 확률 (민감정보 동의 시만)
│   │       ├── prosody.py           VAD·STT 타임스탬프로 속도·멈춤 계산 (openSMILE 사용 안 함)
│   │       ├── keyword_gate.py      위험 키워드 사전 → 즉시 안전 스크립트
│   │       ├── context_builder.py   모드 + 기억 블록 + 음성 단서 → 프롬프트
│   │       ├── llm_claude.py        Claude 스트리밍 (첫 줄 위험 태그)
│   │       ├── risk_tag_parser.py   L1 → 생성문 폐기·안전 스크립트 / L0·L2 → 태그 제거
│   │       ├── tts_typecast.py      문장 단위 TTS, previous_text/next_text, 감정 태그 (미확정)
│   │       └── backchannel.py       맞장구·필러 클립 (미확정, P1)
│   ├── domain/              순수 로직. 아래 §4 "규칙의 집"
│   │   ├── emotion.py       라벨 매핑표(5④-1), 확인 질문 조건(5④-2), 음성·텍스트 불일치 판정
│   │   ├── memory.py        4상태 전이(stated/inferred/confirmed/approved), 직전 N턴 윈도우
│   │   ├── crisis.py        상태 기계 L0/L1/L2, 진입·유지·해제, 위험도 = max(텍스트, 음성)
│   │   ├── consent.py       3단 동의 8조합 → 허용 기능표 (5⑩), 철회 시 중단 목록
│   │   ├── modes.py         3모드(들어줘/정리해줘/조언해줘) 시스템 프롬프트 조각
│   │   └── usage.py         사용 시간 경계·휴식 알림 판단
│   ├── services/            외부 연동 어댑터 (인터페이스 + 구현)
│   │   ├── claude.py  rtzr.py  typecast.py  elevenlabs.py(대안)
│   │   └── storage.py       기억·전사·단서·위기 로그 저장 (RLS 세션 변수 설정)
│   ├── db/
│   │   ├── models.py        users, consents, transcripts, memories, affect_cues, crisis_logs, deletion_queue
│   │   ├── session.py       async engine, RLS용 set_config(app.user_id)
│   │   └── repositories/    테이블별 질의 함수
│   └── workers/
│       ├── summarize.py     통화 후 요약 + 기억 후보 추출 (기억 에이전트, 미확정)
│       ├── ttl_expire.py    affect_cues·inferred 기억 TTL 만료
│       └── deletion.py      삭제 큐 처리 (전사·요약·임베딩·캐시·백업 tombstone)
└── tests/
    ├── unit/domain/         규칙 테스트 (가장 많이)
    ├── unit/pipeline/       프로세서 단위 (가짜 프레임)
    └── integration/         DB RLS 격리, 삭제 큐
```

파이프라인 프로세서는 Pipecat `FrameProcessor` 하나씩이다. 각 파일은 "어떤 프레임을 받아 어떤 프레임을 내보내는지"를 docstring 첫 줄에 쓴다.

## 3. apps/web (React + Vite + TypeScript)

```
apps/web/
├── package.json  vite.config.ts  tsconfig.json  index.html  .eslintrc.cjs  .prettierrc
└── src/
    ├── main.tsx
    ├── app/                 라우터, 프로바이더(QueryClient, Auth), 전역 스타일
    ├── features/            화면 단위. 폴더마다 index.ts로만 외부 노출
    │   ├── onboarding/      AI 고지 문구(P0-12), 3단 동의 화면(P0-7)
    │   ├── call/            통화 화면(P0-1~5): 연결·보류/음소거 분리·끼어들기·자막·모드 선택·TTFA 끝점 기록
    │   ├── crisis/          안전 모드 카드(P0-6): 109·지역 센터, "지금 안전한가요"
    │   ├── summary/         통화 후 요약 + 기억 승인(P0-8)
    │   ├── memory/          기억 열람·수정·삭제(P0-9), "내가 말한 것 / 한벗이 느낀 것" 분리 표시
    │   ├── usage/           사용 시간 표시·휴식 알림(P0-11)
    │   └── settings/        동의 변경, 삭제 요청(P0-10)
    ├── entities/            도메인 타입 — packages/contracts에서 생성된 타입을 re-export
    └── shared/
        ├── api/             생성된 HTTP 클라이언트 + fetch 래퍼
        ├── voice/           Pipecat client-js 래퍼 (연결, 마이크, 이벤트 → 상태)
        ├── ui/              버튼·카드·토글 등 공용 컴포넌트
        ├── hooks/           useTimer, useConsent 등
        └── lib/             순수 유틸 (시간 포맷, 텍스트 분할)
```

- 상태: 서버 상태는 TanStack Query, 통화 중 로컬 상태는 feature 안의 `useReducer`. 전역 스토어는 두지 않는다(필요해지면 ADR로 결정).
- 스타일: CSS Modules. 디자인 토큰은 `src/app/tokens.css` 한 곳.
- 음성 UI는 `pipecat-ai/voice-ui-kit`를 참고하되 포크 전에는 `shared/voice/`에 얇은 래퍼만 둔다.

## 4. 규칙의 집: domain 모듈이 담는 표

설계서의 표를 코드로 옮기는 곳이다. 표 하나 = 함수 하나 + 테스트 하나.

| 설계서 표 | domain 함수 | 테스트 |
|---|---|---|
| 5④-1 라벨 매핑 | `emotion.map_label(label) -> ProductCategory | None` | 9라벨 전부 |
| 5④-2 확인 질문 조건 | `emotion.should_ask(cue, state) -> bool` | 점수·5턴·동의·안전모드 4조건 조합 |
| 음성·텍스트 불일치 (미확정 J) | `emotion.detect_mismatch(voice, text) -> Mismatch | None` | "괜찮아"+슬픔 |
| 기억 4상태 | `memory.transition(state, event) -> State` | 허용·금지 전이 전부 |
| 직전 N턴 윈도우 (미확정 M) | `memory.context_window(turns, n) -> list[Turn]` | n=0/2/6/10 |
| 위기 상태 기계 | `crisis.step(state, signals) -> (State, Action)` | L0→L1, 해제, 충돌 우선순위, 태그 누락 |
| 위험도 결합 (미확정 J) | `crisis.combine_risk(text_level, voice_level)` | max 규칙 |
| 3단 동의 8조합 | `consent.allowed_features(consent) -> frozenset[Feature]` | 8조합 전부 |
| 철회 시 중단 | `consent.on_withdraw(prev, new) -> list[StopAction]` | 통화 중 철회 |
| 사용 시간 경계 | `usage.should_notify(elapsed, state)` | 경계·안전 모드 보류 |

## 5. 데이터 흐름과 보관 (설계서 4.2·5⑩)

```
브라우저 마이크 ──WebRTC──▶ api transport.input
  └ 오디오 프레임: 메모리 버퍼만. 임시 WAV는 SER 호출 직후 삭제. 디스크 보존 0
전사(text) ──▶ transcripts (암호화, 사용자 삭제까지)
SER 라벨·운율 ──▶ affect_cues (가명 키, TTL 30일 초안 — 미확정)
기억 후보 ──▶ memories(state=inferred) ──승인──▶ approved
위기 신호 ──▶ crisis_logs (민감정보 동의 시만, 보존 기간 미확정)
삭제 요청 ──▶ deletion_queue ──▶ 전사·요약·임베딩·캐시·백업·벤더 사본 순서대로 tombstone
```

`data/`는 서비스 DB와 다르다. 연구·평가용 데이터셋만 둔다. 사용자 데이터는 절대 `data/`로 내보내지 않는다.

## 6. 계약(contracts)

- `packages/contracts/openapi.yaml`: REST 계약. api가 생성하지 않고 **먼저 쓴다**(계약 우선). 서버는 이 스키마에 맞춰 구현하고, 프런트는 여기서 타입을 생성한다.
- `packages/contracts/events/*.schema.json`: 통화 중 이벤트(turn_started, turn_ended, cue_detected, safe_mode_entered, ttfa_measured). 서버 `pipeline/events.py`와 프런트 `shared/voice`가 같은 스키마를 본다.
- 생성 명령: `scripts/gen-types.sh` → `apps/web/src/entities/generated/`.

## 7. 실행

```
scripts/dev-up.sh        # docker compose: postgres+pgvector 기동, 마이그레이션
cd apps/api && uv sync && uv run uvicorn app.main:app --reload
cd apps/web && npm install && npm run dev
scripts/lint-all.sh      # ruff + mypy + pytest(unit) / eslint + tsc
```

Docker가 없는 환경에서는 로컬 Postgres에 `infra/db/migrations`를 직접 적용한다.
