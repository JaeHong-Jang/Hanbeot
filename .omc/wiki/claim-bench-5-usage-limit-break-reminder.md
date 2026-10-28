---
title: "claim-bench-5-usage-limit-break-reminder"
tags: ["benchmark", "claim", "dependency", "usage-limit", "safety", "grade-A"]
created: 2026-10-25T07:39:12.958Z
updated: 2026-10-25T07:39:12.958Z
sources: []
links: ["src-openai-2025-affective-use-study.md", "src-openai-2025-sensitive-conversations.md", "src-gunderson-2025-california-sb243.md", "src-khan-2026-zeta-teen-policy.md", "src-fortune-2025-characterai-u18-ban.md", "src-sacra-2026-characterai-revenue.md", "topic-bench-safety-eval.md", "claim-bench-6-pricing-arpmau.md", "overview-benchmark.md"]
category: decision
confidence: high
schemaVersion: 1
---

# claim-bench-5-usage-limit-break-reminder

# claim-bench-5-usage-limit-break-reminder

## 주장 (사업계획서용)
> 음성 동반자의 외로움 완화 효과는 **짧은 사용**에서 확인되며 장시간 사용에서는 이점이 사라지고 의존이 증가한다(MIT×OpenAI 2025). 따라서 한벗은 **연속 사용 시 휴식 알림**(예: 60분·3시간), 일일 음성 분수 상한, 인간관계 연결 유도(친구·상담센터 안내)를 기본 설계에 넣는다. 이는 SB 243(미성년 3시간 알림)·OpenAI 휴식 알림·제타 청소년 3시간 상한과 방향이 같다.

## 근거
- 고사용량↔외로움·의존; 음성은 짧은 사용에서만 유리; 중립 음성 장시간 불리; 이성 음성 이용자 의존↑(관련성) — [[src-openai-2025-affective-use-study]] (A)
- OpenAI 장시간 대화 휴식 알림·인간관계 존중 규칙 — [[src-openai-2025-sensitive-conversations]] (A)
- SB 243 미성년자 대상 3시간마다 휴식 알림 — [[src-gunderson-2025-california-sb243]] (B)
- 제타 청소년 하루 3시간(연내 도입 예정) — [[src-khan-2026-zeta-teen-policy]] (B)
- Character.AI 과도기 하루 2시간 — [[src-fortune-2025-characterai-u18-ban]] (B)
- 일 평균 사용 92분(C.AI, 기준 불명) — [[src-sacra-2026-characterai-revenue]] (B)

## 우선 수정
- "개인 대화가 의존 증가" → 개인 대화는 외로움↑, 의존은 일반 주제 대화에서↑ (C 정정).
- "3시간이 업계 표준으로 수렴" → 강제 상한(제타)과 미성년 알림(SB 243)은 다른 규칙(C).

## 등급
- 연구 근거: **A**. 규제 근거: B. 한벗 수치(60분·분수 상한): 설계 결정.

## 검증 방법
- MVP 로그: 세션 길이 분포, 알림 후 종료율, 비용 상한 도달률. 음성 성별 선택은 이용자 선택으로 두되 의존 지표(자기보고) 모니터링.

관련: [[topic-bench-safety-eval]] · [[claim-bench-6-pricing-arpmau]] · [[overview-benchmark]]

