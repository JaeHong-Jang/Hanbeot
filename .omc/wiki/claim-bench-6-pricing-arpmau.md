---
title: "claim-bench-6-pricing-arpmau"
tags: ["benchmark", "claim", "pricing", "arpu", "voice-cost", "grade-B"]
created: 2026-10-25T07:39:18.136Z
updated: 2026-10-25T07:39:18.136Z
sources: []
links: ["src-mysoftly-2026-companion-pricing.md", "src-sacra-2026-characterai-revenue.md", "src-aicompanionguides-2026-nomi-pricing.md", "src-aicompanionpick-2026-replika-stats.md", "src-kindroid-2026-subscription-docs.md", "src-etnews-2026-scatterlab-zeta-interview.md", "src-openai-2026-realtime-api-pricing.md", "src-google-2026-gemini-live-api-pricing.md", "src-usagepricing-2026-hume-pricing.md", "topic-bench-business-metrics.md", "claim-bench-5-usage-limit-break-reminder.md", "overview-benchmark.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-bench-6-pricing-arpmau

# claim-bench-6-pricing-arpmau

## 주장 (사업계획서용)
> 글로벌 컴패니언 기본 월 구독은 $10–20(c.ai+ $9.99 ~ Replika $19.99)이고, 한국 1위 제타의 역산 ARPMAU는 **월 약 1,388원**(2025)이다. 한벗은 월 **₩9,900–14,900** 구독(글로벌 하단, 대학생 가격 민감도)을 제안하되, 무료 음성은 **일일 분수 상한**과 저비용 모델 라우팅으로 음성 추론 비용이 ARPMAU를 넘지 않게 설계한다.

## 근거
- 가격: c.ai+ $9.99, Chai $13.99, Kindroid $13.99–15.99, Nomi $15.99, Replika $19.99 — [[src-mysoftly-2026-companion-pricing]] (B), [[src-sacra-2026-characterai-revenue]] (B), [[src-aicompanionguides-2026-nomi-pricing]] (B), [[src-aicompanionpick-2026-replika-stats]] (B)
- Kindroid 무료 Lite 종료 2026-10-01 — [[src-kindroid-2026-subscription-docs]] (A)
- 제타 229억/11개월/MAU 150만 ≈ 1,387.88원; "추론 비용" 발언 — [[src-etnews-2026-scatterlab-zeta-interview]] (B)
- 음성 API 단가: OpenAI realtime $32/$64, mini $10/$20 per M tokens — [[src-openai-2026-realtime-api-pricing]] (A); Gemini Live $3/$12 — [[src-google-2026-gemini-live-api-pricing]] (A); Hume $0.04–0.07/분 — [[src-usagepricing-2026-hume-pricing]] (B)
- 분당 ₩14–70 가정 시 월 20–99분에서 1,388원 도달 (환율 1,400원 가정, C)
- Replika 전환 ~25%(분모 free users), 7.2개월 — [[src-aicompanionpick-2026-replika-stats]] (B)

## 우선 수정
- **제타 ARPMAU "1.4만원" → 약 1,400원** (10배 오류).
- 한벗 가격 ₩9,900–14,900·전환 5–10%: **C** (지불의사 조사 없는 설계 가정).

## 등급
- 비교 가격·ARPMAU 역산: **B**. 한벗 가격·전환 목표: C.

## 검증 방법
- 대학생 30명 테스트에서 Van Westendorp 가격 민감도 조사. 음성 분당 실비용(모델별) 측정 후 무료 상한 산정.

관련: [[topic-bench-business-metrics]] · [[claim-bench-5-usage-limit-break-reminder]] · [[overview-benchmark]]

