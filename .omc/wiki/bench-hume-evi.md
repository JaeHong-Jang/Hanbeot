---
title: "bench-hume-evi"
tags: ["benchmark", "hume", "voice", "emotion", "latency", "api", "grade-A"]
created: 2026-10-25T07:32:17.370Z
updated: 2026-10-25T07:32:17.370Z
sources: []
links: ["src-hume-2025-evi3-launch.md", "src-usagepricing-2026-hume-pricing.md", "topic-bench-ser.md", "claim-bench-1-ttfa-target.md", "overview-benchmark.md", "topic-bench-voice-latency.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# bench-hume-evi

# bench-hume-evi

> 감정 표현 측정 + speech-to-speech를 결합한 API 공급자. 한벗 음성 감정 단서 파이프라인의 공급자 후보이자 지연 기준점.

| 항목 | 내용 | 근거 |
|---|---|---|
| 회사/국가/출시 | Hume AI / 미국 / EVI 3 2025-05-29 (API 2025-07-17) | [[src-hume-2025-evi3-launch]] (A) |
| 모달리티 | 음성 speech-to-speech (API) | [[src-hume-2025-evi3-launch]] (A) |
| 기억 기능 | API 수준(앱 기능 아님) | — |
| 감정 기능 | Expression Measurement API: prosody 등 48차원 표현 측정; EVI 3 감정 식별 자체 평가에서 9개 중 8개 GPT-4o 우위 (EVI 3가 48감정을 출력한다는 확인은 없음) | [[src-hume-2025-evi3-launch]] (A/B) |
| 안전 기능 | 공개 자료 없음 | — |
| 가격 | (2026-07 캡처) 무료 5분/월, Starter $3/40분, Pro $70/1,200분, Business $500/12,500분; 초과 단가 티어별 $0.07→$0.04/분; EVI 4 mini 약 절반; 2026-10 가격 페이지 비공개 | [[src-usagepricing-2026-hume-pricing]] (B) |
| 지표(성능) | 응답 지연 **<300ms** (최신 하드웨어, 실사용 보장값 아님) | [[src-hume-2025-evi3-launch]] (A) |
| 사건 | 없음 | — |

## 우선 수정
- "$0.07→$0.04 인하" → 티어별 단가 차이로 정정.

## 한벗 차별점 / 배울 점
- 음성 감정 단서(억양·속도·멈춤)를 자체 학습하기 전 Hume Expression Measurement로 프로토타입 가능. 단, 가격 비공개 전환으로 비용 예측이 불확실 → 대안(오픈소스 SER + KEMDy20 fine-tune) 병행 → [[topic-bench-ser]].
- <300ms는 S2S 네이티브의 기준. 한벗 파이프라인(STT→LLM→TTS) 목표 p50 <500ms → [[claim-bench-1-ttfa-target]].

관련: [[overview-benchmark]] · [[topic-bench-voice-latency]]

