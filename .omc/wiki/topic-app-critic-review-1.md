---
title: "topic-app-critic-review-1"
tags: ["app-design", "critic", "review", "revision", "topic"]
created: 2026-10-25T14:49:16.527Z
updated: 2026-10-25T14:49:16.527Z
sources: [".omc/orchestra/reviews/20261025_232255_critic_app_design.md"]
links: ["overview-app-design.md", "claim-app-8-hypotheses-h1-h5.md", "topic-app-schedule-7weeks.md", "topic-app-benchmark-map.md", "topic-app-cost-latency-budget.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md", "topic-app-impl-safety-crisis.md", "claim-app-5-crisis-ops-and-tel109.md", "topic-app-feature-spec.md", "claim-bench-7-no-therapy-positioning.md", "topic-app-impl-consent-privacy.md", "topic-app-impl-memory.md", "claim-app-6-consent-and-deletion.md", "claim-app-4-memory-four-states.md", "claim-app-7-schedule-gates-and-cuts.md", "topic-app-impl-dialogue-tts.md", "claim-tech-5-latency-target.md", "claim-bench-8-emotion-cue-as-question.md", "claim-tech-8-crisis-referral-flow.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-app-critic-review-1

상위: [[overview-app-design]] · 설계서 11절. 비평 원문: `.omc/orchestra/reviews/20261025_232255_critic_app_design.md` (비평자 GPT-6 Astra, 1차 초안 대상)

## 결과
비평 27건 중 **수정 26건, 보류 1건**. 보류는 #2 중 "기억 기능 비교 실험"으로, 표본 부족(#23) 때문에 비교 실험을 하지 않고 관찰 지표(H4)로 대체했다. 이 때문에 설계서는 "Wiki 결정 = 확정"에서 "설계 가설"로 위상이 바뀌었다(#3, [[claim-app-8-hypotheses-h1-h5]]).

## 반영표 요약 (묶음별)
| 묶음 | # | 조치 요지 | 반영 페이지 |
|---|---|---|---|
| 가설·검증 구조 | 1, 2, 3, 23 | H1 문제 가설과 W1–W2 인터뷰, 확인 질문 ON/OFF 핵심 비교 1개(교차), 문서 위상을 설계 가설로, 재검토 조건표·Wiki 수정 목록, 표본 한계 | [[claim-app-8-hypotheses-h1-h5]], [[topic-app-schedule-7weeks]] |
| 근거·표기 | 4, 5 | 등급 A는 효과·적용 보증 아님(1절 고정 문구), 증거 유형 분리, 수치마다 [S#] 추적, "최고 수준" 표현을 "이번 조사 범위"로 제한 | [[topic-app-benchmark-map]] |
| 비용·지연·가격 | 6, 7, 8 | H5 지불의사·단위경제성, 단일 비용 산식(a1–a6), TTFA 시작·끝점 정의·합계 1.2s+0.2–0.3s, P50 1.5s 조정 | [[topic-app-cost-latency-budget]] |
| SER·확인 질문 | 10, 11, 12, 13 | 9라벨↔4-class↔제품 범주 매핑, 확인 일치율 → 수용성 지표, 임계값 임시 표기, 늦은 SER 폐기 | [[topic-app-impl-ser-cues]], [[claim-app-3-emotion-cue-confirmation-rules]] |
| 안전·위기 | 9, 14, 15, 16, 17 | 분류 구조 확정(KeywordGate + 첫 줄 태그), 평가 세트 분리·신뢰구간·"테스트 세트 성능", L2 점수 규칙, 위기 운영 범위, Wysa 2.4%는 관찰값 | [[topic-app-impl-safety-crisis]], [[claim-app-5-crisis-ops-and-tel109]] |
| 평가 윤리 | 18, 24 | PHQ-9/GAD-7 삭제, 기기·환경·화자 매트릭스, 판정 지침·kappa | [[topic-app-feature-spec]], [[claim-bench-7-no-therapy-positioning]] |
| 동의·삭제·기억 | 19, 20, 21, 22 | 데이터x처리 표, 8조합, 저장소별 삭제표, 철회 순서·RLS, 4상태 | [[topic-app-impl-consent-privacy]], [[topic-app-impl-memory]], [[claim-app-6-consent-and-deletion]], [[claim-app-4-memory-four-states]] |
| 일정·운영 | 25, 27 | 핵심 경로·중단 기준·테스트 시작 게이트, 그라운딩 W5 필수 제외, 과사용 기준 임시 표기 | [[topic-app-schedule-7weeks]], [[claim-app-7-schedule-gates-and-cuts]] |
| 문구 모순 | 26 | P0-12를 (a) 고지 필수 / (b) 효능 주장 금지로 분리, TTS 예시 중립화(공식 원문 값 병기), 다음 행동은 사용자 계획 시에만 | [[topic-app-feature-spec]], [[topic-app-impl-dialogue-tts]] |

## 개별 건 중 자주 인용되는 것
- #8: TTFA 목표 조정 → [[claim-tech-5-latency-target]]에 반영
- #11: 확인 일치율 70% 재정의 → [[claim-bench-8-emotion-cue-as-question]]에 반영
- #18: 건강 척도 미사용 → [[claim-bench-7-no-therapy-positioning]]에 반영
- #27: 60분·주 6일 임시 기준 → [[claim-tech-8-crisis-referral-flow]]에 반영

## 한계
이 비평은 1차 초안에 대한 1회 검토이며, 2차 개정본에 대한 재검토 결과는 이 페이지에 포함되지 않는다. 검증표 2건과 함께 [[overview-app-design]]의 원천 목록에 있다.

