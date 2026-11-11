# apps/web — 한벗 웹 클라이언트

React 18 + Vite + TypeScript. 구조와 규약은 `docs/harness/README.md` 3절과 `docs/harness/코딩-규약.md` 5절을 따른다.

## 실행

```bash
npm install
npm run dev         # 실제 API(localhost:8000)에 붙는다
npm run dev:mock    # 서버 없이 화면만 본다. /api/* 를 가짜로 답한다
npm run lint && npm run typecheck && npm test
```

넓은 화면에서는 iPhone 17 Pro 크기(402×874) 폰 프레임 안에, 실제 폰에서는 전체 화면으로 보인다.

## 화면

| 경로 | 화면 | 폴더 |
|---|---|---|
| (처음 한 번) | 만년필로 "한벗"을 쓰는 시작 화면 | `features/splash` |
| `/start` | AI 고지 + 3단 동의 | `features/onboarding` |
| `/` | 홈: 인사, 친구 사진, 대화 모드, 지난 기억, 전화 걸기 | `features/home` |
| `/call` | 통화: 오브, 자막, 확인 질문, 모드, 끊기·보류·음소거·종료, SOS | `features/call` |
| `/summary/:sessionId` | 통화 요약 + 기억 승인 | `features/summary` |
| `/memory` | 기억 열람·수정·삭제 | `features/memory` |
| `/settings` | 부르는 이름, 동의 변경, 삭제 요청 | `features/settings` |

필수 동의가 없으면 홈은 `/start`로 보낸다.

## 디자인

콘셉트는 "스탠드 불빛 아래 편지지에 만년필로 쓴 글"이다. 종이, 세피아 잉크, 와인색 봉랍.

- 토큰은 `src/app/tokens.css` 한 곳(색, 간격, 글자 크기, 움직임 곡선·시간).
- 글씨는 Nanum Pen Script 하나. 획이 가늘어 최소 17px로 잡았다.
- "한벗" 로고는 폰트가 아니라 `shared/ui/penLettering.ts`에 획 순서대로 적은 중심선이다.
  - 글자 모양: `LETTERING.strokes` 좌표. 굵은 획(`stroke`)과 가는 이음선(`join`, weight 0.28)으로 나뉜다.
  - 기울기: `LETTERING.slant`. 굵기: `NIB_WIDTH`, `HAIRLINE`, `NIB_ANGLE_RAD`.
  - 쓰는 속도: `features/splash/useWritingAnimation.ts`의 `WRITE_MS`.

### 화면에 적용한 기준

조사한 Claude Code 스킬 문서의 기준을 코드에 반영했다.

| 출처 | 적용한 것 |
|---|---|
| anthropics/skills `frontend-design` | 눈에 띄는 움직임은 시작 화면 한 번만. 섹션마다 떠오르는 효과는 넣지 않았다. 버튼 글자 뒤 화살표, 대문자 라벨 같은 템플릿 장식을 쓰지 않았다 |
| emilkowalski/skills `mobile-native` | hover는 `(hover: hover) and (pointer: fine)`에서만, 탭 번쩍임 제거, `100dvh`, 입력 글자 16px 이상, `touch-action: manipulation`, `overscroll-behavior`, `viewport-fit=cover` + `env(safe-area-inset-*)`, 버튼 글자 선택 방지, `theme-color`. 확대는 막지 않았다 |
| emilkowalski/skills `review-animations` 기준 | 들어오는 움직임은 강한 ease-out, 화면 요소 300ms 이하, 누름 반응 `scale(0.97)` 160ms, `scale(0)`에서 시작하지 않음, `transform`·`opacity`만 움직임, `prefers-reduced-motion` 대응 |
| 접근성(WCAG 2.2. addyosmani/web-quality-skills가 다루는 영역) | 누르는 것 최소 44px, `:focus-visible` 표시, 아이콘 버튼 `aria-label`, 글자색 대비 4.5:1 이상(연한 글자 5.4:1, 본문 12.8:1로 계산), 자막 `aria-live` |

실제 폰에서만 드러나는 문제(붙어 있는 hover, 탭 지연, 노치 여백, 키보드)는 아직 기기로 확인하지 못했다.

## 아직 가짜인 부분

- 음성 연결: `shared/voice/MockVoiceClient`가 데모 대화를 흉내 낸다. 마이크를 쓰지 않는다. 서버가 준비되면 pipecat client-js 구현으로 바꾼다.
- 확인 질문 응답: `VoiceClient.answerCue()`는 서버로 보내는 이벤트 스키마가 아직 없다(`packages/contracts/events`에 추가 필요).
- 친구 캐릭터 사진(`shared/assets`)은 사업계획서 삽화에서 잘라 온 임시 이미지다.
- 친구 선택, 시작 모드, 부르는 이름은 서버 계약에 없어서 이 기기의 localStorage에만 남는다.

설계서와 달라진 점은 Wiki `overview-app-design`의 "구현에서 달라진 점"에 적었다.
