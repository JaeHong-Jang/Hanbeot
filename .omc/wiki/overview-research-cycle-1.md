---
title: "overview-research-cycle-1"
tags: ["cycle-1", "orchestra", "deep-research", "verification", "critic", "overview", "cycle"]
created: 2026-10-25T07:42:55.752Z
updated: 2026-10-25T14:52:56.489Z
sources: []
links: ["overview-problem-definition.md", "overview-market-demand.md", "overview-technology.md", "overview-benchmark.md", "overview-researcher-collaboration.md", "overview-hanbeot-project.md", "overview-orchestra-team.md", "src-hannam-2025-enrollment-official.md", "topic-market-tam-sam-som-assembly.md", "topic-app-critic-review-1.md", "overview-app-design.md"]
category: architecture
confidence: high
schemaVersion: 1
---

# overview-research-cycle-1

## 리서치 사이클 1 (2026-10-25) – 한벗 창업 딥리서치

**질문**: 한벗 사업계획을 뒷받침할 근거를 문제정의·시장·기술·벤치마크·연구자 협업 5개 영역에서 수집·검증한다.

### 산출물
| 단계 | 담당 | 산출물 |
|---|---|---|
| Plan | 지휘자 (Claude Opus) | `.omc/orchestra/plans/20261025_한벗_딥리서치.md` |
| Research | 리서처 ×5 (Claude Sonnet) | `research_notes/한벗 창업 딥리서치/{problem_definition, market_demand, technology, benchmark_competitors, researcher_collaboration}.md` |
| Verify | 검증자 (GPT-6.1 Sol) | `.omc/orchestra/reviews/*_verify_*.md` – 5개 표, 1,038행 (A 377 / B 339 / C 322) |
| Synthesize | 보고서 작성자 (Claude Sonnet) | `reports/한벗 창업 딥리서치.md` |
| Critique | 비평가 (GPT-6 Astra) | `.omc/orchestra/reviews/*_critic_*.md` – 28건 (상 24 / 중 4) → 보고서 7절에 반영 |
| Ingest | 적재 에이전트 ×5 | Wiki 371페이지 (reference 279 / pattern 43 / decision 41 / architecture 8) |

### 트랙별 검증 결과
| 트랙 | A | B | C | 불일치 | 영역 종합 |
|---|---|---|---|---|---|
| 문제정의 | 58 | 54 | 60 | 19 | [[overview-problem-definition]] |
| 시장 수요 | 41 | 107 | 42 | 20 | [[overview-market-demand]] |
| 기술 | 124 | 35 | 71 | 11 | [[overview-technology]] |
| 벤치마크 | 86 | 97 | 96 | 23 | [[overview-benchmark]] |
| 연구자 협업 | 68 | 46 | 53 | 10 | [[overview-researcher-collaboration]] |

등급 의미: A = 원출처에서 수치 일치(근거의 질을 보증하지 않음), B = 2차 출처 또는 근사치, C = 확인 불가·추정. C 항목은 본문과 분리해 "미확인"으로만 사용한다.

### 비평가 핵심 지적 (다음 사이클 과제)
1. "이야기 상대 부재 15.4%"와 "복합 지지체계 결핍 9.8%"를 구분할 것 (후자는 3개 항목 복합 지표)
2. 문제 존재 → AI 수용 → 음성 선택 → 기억 동의 → 반복 이용 → 결제의 각 단계는 별개 가설 – 단계별 설문·테스트 설계 필요
3. TAM/SAM/SOM 집단 정의(연령·지역·목적) 일관화, 중복 제거 원칙 명시
4. 시나리오 계산값(MAU·전환율·매출)은 "보수적"이 아닌 독립 가정으로 표기, 하방 시나리오 포함
5. SER on/off 비교, 텍스트 vs 음성 비교, 109 연계 오탐·미탐 절차 설계
6. 제타 지표는 엔터테인먼트형 대화 AI 규모로 한정

### 미해결 Gap (사이클 2 후보)
- 한남대 2025 공시 재적학생 수, 대전 대학생 총수 (대학알리미·KESS 직접 확인)
- 한국어 20대 발화 SER 성능 수치, KEMDy 상업 라이선스 조건
- 국내 컴패니언 앱 유료 전환율·리텐션 1차 자료
- 교류 여부 × 이야기 상대 유무 교차표 (사회조사 마이크로데이터)
- Gemini 4 Argon 스캐너 연결 (Antigravity 이전 또는 API 키)

관련: [[overview-hanbeot-project]] · [[overview-orchestra-team]]

---

## Update (2026-10-25T10:45:32.864Z)

## 2차 사이클 1회차 (2026-10-25, run 20261025_193750 — 실행 관제 로그로 전 과정 기록)
- 과제: 다음 사이클 후보 1번 "SOM 분모 확정". 지휘자(Opus) Wiki 3페이지 재사용 → 리서처(Sonnet) 1명 → 검증자(GPT-6.1 Sol) → 지휘자 원문 직접 확인 → Wiki 적재.
- 결과: 한남대 학부 재적생 **15,865명(2025, A)** 확보 → [[src-hannam-2025-enrollment-official]]. 리서처는 "A 확정 0건"으로 보고했으나 검증자가 공식 페이지 후보를 찾고 지휘자가 원문 확인해 등급을 올림 — 작성자·검증자 분리가 실제로 효과를 낸 사례.
- 미해결: 대전 대학생 총수(KESS robots.txt 차단), 한남대 2025 재학생(대학알리미 원표 수동 다운로드 필요). [[topic-market-tam-sam-som-assembly]]

---

## Update (2026-10-25T14:52:56.489Z)

## 앱 설계서 (2026-10-25)
- 1차 조사 결과를 앱 설계서로 확장했다(노트 2건, 검증표 2건, 비평 27건 반영: 수정 26·보류 1, run 20261025_224701).
- 비평으로 Wiki와 달라진 4곳(PHQ-9/GAD-7 미사용, 확인 수용률, TTFA 조정, 임시 운영 기준)이 생겼다. 반영 요약: [[topic-app-critic-review-1]]
- 진입점: [[overview-app-design]]

