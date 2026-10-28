---
title: "claim-app-4-memory-four-states"
tags: ["app-design", "decision", "memory", "four-states", "approval", "pgvector"]
created: 2026-10-25T14:50:22.142Z
updated: 2026-10-25T14:50:22.142Z
sources: ["reports/한벗 앱 설계서.md#5-8"]
links: ["overview-app-design.md", "topic-app-impl-memory.md", "claim-tech-2-memory-architecture.md", "topic-app-screen-flow.md", "src-replika-2026-help-how-memory-works.md", "src-kindroid-2026-subscription-docs.md", "src-nomi-2026-mind-map.md", "src-mem0-2026-pgvector-docs.md", "src-mem0-2025-locomo-paper.md", "src-letta-2025-memory-blocks.md", "claim-app-8-hypotheses-h1-h5.md", "claim-app-7-schedule-gates-and-cuts.md", "claim-app-6-consent-and-deletion.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-4-memory-four-states

상위: [[overview-app-design]], [[topic-app-impl-memory]]. 기반: [[claim-tech-2-memory-architecture]]

## 결정
**기억은 stated(사용자가 말함) / inferred(모델 추정) / confirmed(사용자가 "맞아"로 확인) / approved(저장 동의) 4상태로 관리한다. 전이는 stated → approved, inferred → confirmed → approved만 허용하며 inferred는 approved로 직행할 수 없다. 승인 전(approved 아님) 기억은 검색·프롬프트에서 제외한다. UI 라벨은 "내가 말한 것"이며 "사실"이라는 라벨은 쓰지 않는다.**

## 근거
- 비평 22: 사실·추정·승인이 구분되지 않던 설계를 4상태로 정리. stated는 객관적 사실로 검증된 것이 아니다.
- confirmed(감정이 맞다는 확인)와 approved(장기 저장 동의)는 다른 행위다. 확인 질문 응답과 저장 동의를 한 번에 묶지 않는다 ([[topic-app-screen-flow]] 3.3–3.4).
- 보이지 않는 기억을 만드는 설계는 피한다: Replika는 탭에 보이지 않는 더 깊은 계층이 있다고 밝힘 [[src-replika-2026-help-how-memory-works]], 승인 UI는 Kindroid 보류 제안 [[src-kindroid-2026-subscription-docs]], 열람·편집은 Nomi [[src-nomi-2026-mind-map]] 참고. "Kindroid가 승인 전에는 저장하지 않는다"는 주장은 C로 제외.
- 구현: Postgres + pgvector(RLS, `user_pk`는 인증 세션 값만), P1에서 Mem0 OSS 승급 [[src-mem0-2026-pgvector-docs]], Mem0 검색 p95 1.44s라 동기 호출 금지 [[src-mem0-2025-locomo-paper]]. 블록 구조는 Letta [[src-letta-2025-memory-blocks]].
- 등급: 설계 결정이며 사용자 수용은 H4로 검증 → medium.

## 검증 가능 목표
- P0-8: 미승인 후보의 검색 노출 0건(자동 테스트), 미확인 추정이 후보로 올라온 건수 0.
- P0-9: 수정·삭제의 다음 세션 반영 100%, 사용자 격리 테스트(타인 기억 0건, 무작위 쿼리 1,000회) 100% 차단.
- 50문항 정답률 70% 이상, H4 후보 카드 처리율 50% 이상.

## 재검토 조건
- 50문항 정답률 70% 미만 또는 H4 반증(처리율 50% 미만, "귀찮음" 다수) → "내가 말한 것" 1블록으로 단순화, 또는 "통화별 저장 ON/OFF 한 번 + 사후 열람·삭제"로 단순화(저장 전 동의 원칙은 유지) ([[claim-app-8-hypotheses-h1-h5]]).
- W4 말 승인·삭제 미완성 → 기억 저장을 끄고 통화 후 요약만 제공 ([[claim-app-7-schedule-gates-and-cuts]]).
- 삭제·철회 연동은 [[claim-app-6-consent-and-deletion]].

