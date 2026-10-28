---
title: "src-openai-2026-realtime-pricing"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "openai", "pricing", "realtime", "stt", "tts"]
created: 2026-10-25T07:18:39.107Z
updated: 2026-10-25T07:18:39.107Z
sources: ["https://developers.openai.com/api/docs/pricing", "https://developers.openai.com/api/docs/models/gpt-realtime", "https://developers.openai.com/api/docs/models/gpt-realtime-mini", "https://openai.com/index/introducing-the-realtime-api/", "https://developers.openai.com/api/docs/changelog"]
links: ["topic-tech-privacy-voice-data.md", "claim-tech-3-stt-tts-vendors.md", "claim-tech-4-voice-pipeline-architecture.md", "topic-tech-voice-pipeline-latency-cost.md", "src-rtzr-2026-pricing.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-openai-2026-realtime-pricing

# src-openai-2026-realtime-pricing

## 서지정보
OpenAI 공식 API 가격표 및 모델 카드(gpt-realtime 계열, gpt-audio, transcribe, tts), Realtime API 소개 글, 공식 changelog. 2026-10 확인.

## URL
- https://developers.openai.com/api/docs/pricing
- https://developers.openai.com/api/docs/models/gpt-realtime (현재 deprecated 표시)
- https://developers.openai.com/api/docs/models/gpt-realtime-mini
- https://openai.com/index/introducing-the-realtime-api/
- https://developers.openai.com/api/docs/changelog

## 라이선스/상업 이용
상용 API(종량제). 학습 미사용(no-training) 약관은 별도 확인 → [[topic-tech-privacy-voice-data]].

## 핵심 수치 (per 1M tokens, 공식)
| 모델 | audio in / out / cached | text in / out |
|---|---|---|
| gpt-realtime | $32 / $64 / $0.40 | $4 / $16 |
| gpt-realtime-mini | $10 / $20 / $0.30 | $0.60 / $2.40 |
| gpt-realtime-2, 2.1 | $32 / $64 / $0.40 | $4 / $24 |
| gpt-realtime-2.1-mini | $10 / $20 | — |
| gpt-audio | $32 / $64 | $2.50 / $10 |

- STT: gpt-4o-transcribe **$0.006/min**, gpt-4o-mini-transcribe **$0.003/min**(≈$0.18/h; 1,333원/USD 가정 시 약 240원/h, 환율·세금 미반영, B), whisper-1 $0.006/min
- TTS: gpt-4o-mini-tts text in $0.60/1M, audio out $12/1M (문자당 고정 요금과 동일시 금지)
- Realtime API GA **2025-08-28** (A). gpt-realtime-2.1 / 2.1-mini **2026-07-06** 출시(changelog 확인, A); p95 지연 25% 이상 감소는 2차 기사 문구(B)

## 검증 결과
- 가격표 전 항목 등급 **A**
- **정정(C)**: 리서치 노트의 "GA 당시 cached text $2.50/M, audio $20/M"은 과거 preview 가격 업데이트와 GA 공지를 혼합한 것. GA `gpt-realtime` cached input은 text/audio 각각 **$0.40/M**. 우선 수정 항목
- **정정(C)**: "gpt-realtime-mini의 메모리·모드 제어는 text instruction으로만 가능" — 가격표는 기능 제한 근거가 아니며 Realtime은 도구 호출·외부 연동 지원

## 한벗 적용 포인트
- STT 대안: gpt-4o-mini-transcribe $0.003/min (RTZR 1,000원/h와 비교) → [[claim-tech-3-stt-tts-vendors]]
- S2S 대안: gpt-realtime-mini audio $10/$20 — 서버 복잡도 감소 vs SER 신호 자체 제어 어려움 → [[claim-tech-4-voice-pipeline-architecture]]
- 관련: [[topic-tech-voice-pipeline-latency-cost]], [[src-rtzr-2026-pricing]]

확인일: 2026-10-25

