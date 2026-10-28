---
title: "claim-bench-7-no-therapy-positioning"
tags: ["benchmark", "claim", "positioning", "mental-health", "regulation", "grade-A"]
created: 2026-10-25T07:39:23.408Z
updated: 2026-10-25T14:52:03.669Z
sources: []
links: ["src-woebot-2025-faq-shutdown.md", "src-jmir-2017-woebot-rct.md", "src-businesswire-2022-wysa-fda-breakthrough.md", "src-dartmouth-2025-therabot-rct.md", "src-pennsylvania-2026-characterai-complaint.md", "src-mt-2025-mindcafe-revenue.md", "src-jmir-2021-youper-observational.md", "bench-woebot.md", "bench-wysa.md", "bench-therabot.md", "topic-bench-safety-eval.md", "overview-benchmark.md", "overview-app-design.md"]
category: decision
confidence: high
schemaVersion: 1
---

# claim-bench-7-no-therapy-positioning

# claim-bench-7-no-therapy-positioning

## 주장 (사업계획서용)
> 한벗은 "치료"가 아닌 **"안전한 경청·동반"**으로 포지셔닝한다. 치료 포지션은 Woebot 소비자 앱 종료(2025-06), Wysa의 FDA Breakthrough 지정(승인 아님, 2022), Therabot RCT(연구용, 미출시)가 보여주듯 규제·임상 입증 비용이 크고, 상담사·치료사 사칭 페르소나는 주정부 소송(펜실베이니아 2026-05) 대상이다. 다만 Therabot의 **평가 방법(PHQ-9/GAD-7 전후, 치료동맹)**은 무해성 확인 목적으로 차용한다.

## 근거
- Woebot 소비자 앱 2025-06-30 종료 — [[src-woebot-2025-faq-shutdown]] (A); 2017 RCT 70명·2주 — [[src-jmir-2017-woebot-rct]] (A)
- Wysa Breakthrough 지정 ≠ 허가 — [[src-businesswire-2022-wysa-fda-breakthrough]] (A)
- Therabot: 106 vs 104, 처치군 우울 −51%·불안 −31%, 대기자 대조, FDA 허가 여부 C — [[src-dartmouth-2025-therabot-rct]] (A)
- 펜실베이니아 의료전문가 사칭 소장 — [[src-pennsylvania-2026-characterai-complaint]] (A)
- 한국 멘탈케어 앱은 인간 상담사 매칭 중심(마인드카페) — [[src-mt-2025-mindcafe-revenue]] (B)
- Youper 관찰연구(RCT 아님) — [[src-jmir-2021-youper-observational]] (A)

## 우선 수정
- "Woebot 종료 = 규칙 기반 CBT+FDA 경로의 한계 입증": 단일 사례 일반화(C) → "신호"로 완화.
- "Therabot 인용 시 의료기기 규제 진입": 자동 결정 아님(C) → "효능 표방 시 규제 검토 필요"로 완화.
- PMC10993129는 Woebot 연구가 아님(Fido).

## 등급
- 사실 근거: **A**. 포지셔닝 결정: 설계 결정.

## 검증 방법
- 모든 마케팅·UI 문구에서 "치료·상담·진단" 표현 배제 여부를 출시 전 체크리스트로 검수. MVP 평가는 PHQ-9/GAD-7 악화 여부(무해성)만 보고.

관련: [[bench-woebot]] · [[bench-wysa]] · [[bench-therabot]] · [[topic-bench-safety-eval]] · [[overview-benchmark]]

---

## Update (2026-10-25T14:52:03.669Z)

## 앱 설계서 반영 (2026-10-25)
- 검증 방법 수정: PHQ-9/GAD-7 등 건강 척도 평가는 전문가(연구자 협업) 검토 전에는 사용하지 않는다(비평 18). W6는 사용성·수용성 평가만 한다.
- 고지 문구("AI 친구", "치료나 상담을 대신하지 않아요")는 온보딩·통화 화면·첫 인사 3곳 필수(P0-12a), 치료·상담·진단 효과 주장 금지는 응답 200턴 표본으로 검증(P0-12b).
- 상세: [[overview-app-design]]

