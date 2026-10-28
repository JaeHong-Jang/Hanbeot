---
title: "bench-therabot"
tags: ["benchmark", "therabot", "mental-health", "rct", "grade-A"]
created: 2026-10-25T07:32:36.951Z
updated: 2026-10-25T07:32:36.951Z
sources: []
links: ["src-dartmouth-2025-therabot-rct.md", "claim-bench-7-no-therapy-positioning.md", "topic-bench-safety-eval.md", "overview-benchmark.md", "bench-woebot.md", "bench-wysa.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# bench-therabot

# bench-therabot

> 생성형 AI 치료 챗봇의 첫 RCT(NEJM AI 2025-03). 상용 제품이 아닌 연구 프로토타입.

| 항목 | 내용 | 근거 |
|---|---|---|
| 회사/국가/출시 | Dartmouth College(Heinz et al.) / 미국 / 연구용, 미출시 | [[src-dartmouth-2025-therabot-rct]] (A) |
| 모달리티 | 텍스트 | [[src-dartmouth-2025-therabot-rct]] (A) |
| 기억·감정 기능 | 치료 대화 맥락 유지, 자동 프롬프트(전반 4주) | [[src-dartmouth-2025-therabot-rct]] (A) |
| 안전 기능 | 임상 모니터링 하에 운영 | — |
| 가격 | 해당 없음 | — |
| 지표(효능) | 처치 106 vs 대기자 104; 4주 사용+4주 추적; **처치군 변화율** 우울 −51%, 범불안 −31%, 섭식 체형 우려 −19%(대조군 대비 유의); 치료동맹 대면치료 보고치와 유사; 평균 ~6시간 사용 | [[src-dartmouth-2025-therabot-rct]] (A) |
| 규제 | FDA 허가 없음(대학 발표만으로 확정 불가, C) | [[src-dartmouth-2025-therabot-rct]] (C) |

## 우선 수정
- −51%/−31%는 대조군 대비 상대 감소율이 아닌 처치군 증상 변화율로 표기.

## 한벗 차별점 / 배울 점
- 효능 수치를 한벗 홍보에 직접 인용하지 말고, **평가 방법(PHQ-9/GAD-7 전후, 치료동맹 WAI-SR)**만 MVP 파일럿 지표로 차용 → [[claim-bench-7-no-therapy-positioning]] · [[topic-bench-safety-eval]].
- 대기자 대조·8주 단기라는 한계를 함께 서술.

관련: [[overview-benchmark]] · [[bench-woebot]] · [[bench-wysa]]

