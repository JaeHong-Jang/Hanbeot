---
title: "bench-clova-carecall"
tags: ["benchmark", "clova-carecall", "naver", "elderly", "voice", "b2g", "grade-B"]
created: 2026-10-25T07:33:10.120Z
updated: 2026-10-25T07:33:10.120Z
sources: []
links: ["src-dealsite-2026-clova-carecall.md", "src-skt-2021-nugu-carecall.md", "overview-benchmark.md", "overview-hanbeot-project.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# bench-clova-carecall

# bench-clova-carecall

> 한국 고령층 음성 AI 안부전화의 대표(B2G). 한벗 3차 타깃(고령층 말벗)의 직접 참조점.

| 항목 | 내용 | 근거 |
|---|---|---|
| 회사/국가/출시 | 네이버클라우드 / 한국 / 2021 (부산 해운대 시범) | [[src-dealsite-2026-clova-carecall]] (B) |
| 모달리티 | 음성 전화(기존 전화망, 기기 불요) | [[src-dealsite-2026-clova-carecall]] (B) |
| 기억 기능 | 이전 통화 내용 기억해 후속 질문(네이버 발표; 본 노트 미검증) | — |
| 감정 기능 | 안부·건강 상태 확인 중심 | — |
| 안전 기능 | 통화 결과 지자체·복지담당자 공유 → 위기 시 개입 | [[src-dealsite-2026-clova-carecall]] (B) |
| 가격 | B2G(지자체 계약) | — |
| 지표 | 이용자 2024-08 ~3만 → 2026-03 5만 → 2026-09 ~6만, 약 150개 기관; 일본 공공복지 2026-04 판매 | [[src-dealsite-2026-clova-carecall]] (B) |
| 미검증 | 시군구 절반 이상 도입(2024-09), 고독사 발생률 44.2% 낮음(연세대 공동), 2024 사회적 가치 340억 | [[src-dealsite-2026-clova-carecall]] (C) |
| 비교 | SKT 누구 돌봄 케어콜: 2021-11-01 경남 출시, 통화 결과 지자체 공유, 이용자 수 미집계 | [[src-skt-2021-nugu-carecall]] (A) |

## 한벗 차별점 / 배울 점
- 케어콜은 "기관이 거는 안부전화"(push·B2G). 한벗은 "이용자가 먼저 거는 말벗"(pull·B2C) → 고령층 확장 시 지자체 연계(핸드오프)는 케어콜 모델을 차용.
- 44.2% 고독사 감소는 인과 근거로 쓰지 말 것(C).

관련: [[overview-benchmark]] · [[overview-hanbeot-project]]

