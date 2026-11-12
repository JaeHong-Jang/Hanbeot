# 한벗 개발 AI 분배 — 누가 쓰고, 누가 검토하나

작성 2026-11-12. 리서치용 오케스트라(`.omc/orchestra/TEAM.md`)와 같은 원칙을 코드 작업에 적용한다.
모델 ID는 `.omc/orchestra/team.json`의 `dev` 항목 한 곳에서만 바꾼다.

> 원칙 세 가지
> 1. **쓴 모델과 검토하는 모델은 다르다.** Claude가 쓴 코드는 GPT(codex)가, 중요한 변경은 Gemini(Antigravity CLI)도 같이 리뷰한다.
> 2. **판단은 지휘자가, 결정은 사람이.** 리뷰 지적을 반영할지는 지휘자가 표로 정리하고, 시안·설계서끼리 부딪히는 것은 사람에게 묻는다.
> 3. **리뷰 기록이 남지 않은 변경은 올리지 않는다.** 결과는 `.omc/orchestra/reviews/`에 파일로 남기고 커밋 메시지에 반영 건수를 적는다.

## 1. 역할

| 역할 | 누가 | 하는 일 | 권한 |
|---|---|---|---|
| 결정자 | 사람 (JaeHong, hayun-0) | 시안·우선순위·병합 결정, 리뷰에서 넘어온 충돌 판단 | 전부 |
| 지휘자 | Claude Opus 5.5 (Claude Code 메인 세션) | 작업 카드 작성, 구현 배정, 리뷰 결과 판단 표, 화면 확인, 커밋·푸시, 보고 | 쓰기 |
| 구현자 ×N | Claude Sonnet 5.5 (Agent 도구, `isolation: worktree`) | 작업 카드 하나를 맡아 구현 + 테스트. 모듈이 다르면 병렬 | 자기 worktree만 쓰기 |
| 리뷰어 | GPT-6 Astra (`codex exec`, `--sandbox read-only`) | 커밋 전 변경 리뷰: 버그·P0 요구·접근성·규약·빠진 테스트 | 읽기만 |
| 제2 리뷰어 | Gemini 4 Argon (`agy -p`, 읽기 권한만 허용) | domain 규칙·계약·위기·동의처럼 중요한 변경에 두 번째 의견 | 읽기만 |
| 테스터 | GPT-6.1 Sol (`codex exec`, 읽기 전용) | domain 규칙 표를 보고 반례·경계 테스트 케이스 제안 | 읽기만 |

- 작은 수정(한두 파일)은 지휘자가 직접 구현하고 리뷰어만 붙인다.
- Gemini는 Antigravity CLI(`agy`)로 부른다. 헤드리스 모드는 권한 확인이 필요한 도구(명령 실행)를 자동 거부하므로, 리뷰 대상 diff를 `.omc/state/`(git 제외)에 써 두고 `--settings '{"permissions":{"allow":["read(*)"]}}'`로 읽기만 허용한다. 프롬프트는 `-p "..."`로만 받는다(표준 입력 불가, Windows 명령줄 약 3만 2천 자 한도).

## 2. 작업 한 건의 흐름

```
① 작업 카드 (지휘자)      목표 · 손댈 파일 · 수용 기준(구현-계획.md P0 열) · 안 건드릴 것
② 계약 먼저 (필요할 때)    packages/contracts 변경 → scripts/gen-types.sh
③ 구현 (구현자 또는 지휘자) worktree에서 코드 + 테스트
④ 자체 검사               scripts/lint-all.sh 통과, 화면 변경은 스크린샷 확인
⑤ 교차 리뷰 (리뷰어)       .omc/orchestra/review_code.sh <이름> "<목적·중점>"  (중요 변경: REVIEWERS=codex,gemini)
⑥ 판단 표 (지휘자)         지적마다 반영 / 반영 안 함(이유) / 사람에게 질문
⑦ 반영 후 ④ 다시          '상' 지적이 남아 있으면 ⑧로 가지 않는다
⑧ 커밋·푸시               지금은 front_develop(11/12 사람 지시). 메시지에 리뷰 파일·반영 건수
```

domain 규칙(`apps/api/app/domain/`)을 바꿀 때는 ⑤ 앞에 테스터(`REVIEWERS=tester`)를 돌려 반례를 받고, 그 케이스를 테스트로 넣는다.

> 브랜치: `코딩-규약.md` 7절은 `feat/<p0-id>-…` 브랜치를 쓰라고 하지만, 11/12부터 사람 지시로 모든 커밋을 `front_develop`에 올린다. 둘 중 무엇을 따를지 정해지면 이 줄을 고친다.
> worktree에서 구현한 브랜치는 **그 worktree 안에서** 커밋 전에 `review_code.sh`를 돌리고, 결과 파일(`.omc/orchestra/reviews/…`)을 메인 checkout으로 복사한다. 메인 checkout에서 `A...B` 범위로 리뷰하면 diff는 B 것이지만 리뷰어가 읽는 주변 파일은 메인 것이라 섞일 수 있다.

## 3. 누가 어디를 맡나

| 영역 | 주 담당 | AI가 바꿀 때 조건 |
|---|---|---|
| `apps/web` 디자인 (home, splash, `shared/ui`, `tokens.css`) | hayun-0 | 사람이 준 시안이 있을 때만. 토큰 규칙과 다르면 커밋 메시지에 적고 알린다 |
| `apps/web` 기능 화면 (call, memory, settings, summary, crisis) | 지휘자 + 구현자 | P0 수용 기준 유지 확인, 스크린샷, `frontend-design` 스킬 적용 + 리뷰에서 AI 티 점검 |
| `apps/api/app/domain/` | 구현자 | 테스터 반례 + 리뷰어 2명(codex, gemini) 필수. 표 하나 = 함수 하나 = 테스트 하나 |
| `apps/api` pipeline·services | 구현자 | 외부 키는 `.env`만, 실제 호출 테스트는 사람이 실행 |
| P0 안전·법적 요구 파일: 위기(`keyword_gate`, `risk_tag_parser`, `features/crisis`), 동의(`api/consents`, `onboarding`, `settings`), 기억 격리·삭제(`db/`, `workers/deletion`, `infra/db/migrations`), 음성 폐기(`ser_emotion2vec`), AI 고지(`shared/strings/disclosure.ts`) | 지휘자 + 구현자 | 리뷰어 2명(codex, gemini) 필수 |
| `packages/contracts` | 지휘자 | 바꾸면 웹·API 양쪽 타입 재생성, 리뷰어 2명 필수 |
| `ml/`, `data/` | 구현자 | 원본 데이터는 해외 API(Claude·codex 포함)에 넣지 않는다. 코드만 보낸다 |

## 4. 리뷰 지적을 다루는 규칙

- 지적은 셋 중 하나로 처리한다: **반영**, **반영 안 함**(이유를 한 줄로), **사람에게**(시안·설계서·일정이 부딪힐 때).
- 리뷰어가 "확인 못 함"이라고 한 부분(실제 렌더링, 브라우저 동작)은 지휘자가 스크린샷이나 실행으로 메운다.
- 같은 변경을 두 번째 리뷰에 보낼 때는 첫 리뷰 파일 경로를 목적 문장에 넣어 중복 지적을 줄인다.
- 리뷰 스크립트는 `data/`와 바이너리를 diff에서 빼고 보낸다. 원본 데이터를 외부 API에 보내지 않는 규칙(3절) 때문이다.
- 리뷰 전후로 작업 트리를 비교해 리뷰어가 파일을 바꾸면 경고한다.

## 5. 실제 예: 통화 화면 (커밋 f60284c)

| 단계 | 한 일 |
|---|---|
| ① | 사용자 시안(영상통화형) → 남길 P0(고지·SOS·확인 질문·사용 시간)과 바뀌는 것(끊기, 보류) 정리 |
| ③④ | 지휘자가 구현, 테스트 42개·타입·린트 통과, Edge로 5장면 스크린샷 |
| ⑤ | GPT-6 Astra 리뷰 9건 (`reviews/20261112_140446_codereview_call_screen.md`) |
| ⑥ | 반영 8건(스크롤 넘침, 포커스, SOS 44px, 스피커 실제 연결 등), 사람에게 1건(보류 버튼 삭제) |
| ⑧ | front_develop에 푸시 |

## 6. 호출 방법

```bash
# 교차 리뷰 (커밋 안 된 변경)
bash .omc/orchestra/review_code.sh call_screen "통화 화면을 영상통화 시안처럼 바꿈. 끼어들기 방식 변경 영향 중점"
# domain 규칙: 반례 먼저
REVIEWERS=tester bash .omc/orchestra/review_code.sh crisis_step "위기 상태 기계 전이표 구현"
# 중요한 변경: codex + gemini 둘 다
REVIEWERS=codex,gemini bash .omc/orchestra/review_code.sh crisis_step "위기 상태 기계 전이표 구현"
# 브랜치 전체를 main 기준으로
bash .omc/orchestra/review_code.sh front_merge "front_develop 병합 전 점검" main
```

구현자는 Claude Code 세션 안에서 Agent 도구로 띄운다. 브리핑에는 작업 카드 전체와 "worktree 안에서만 쓰기, 끝나면 lint-all 결과를 보고"를 넣는다.
