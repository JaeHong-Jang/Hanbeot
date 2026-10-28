---
title: "topic-bench-voice-latency"
tags: ["benchmark", "voice-latency", "ttfa", "speech-to-speech", "grade-A"]
created: 2026-10-25T07:36:06.862Z
updated: 2026-10-25T07:36:06.862Z
sources: []
links: ["src-coval-2026-voice-latency.md", "src-hume-2025-evi3-launch.md", "src-artificialanalysis-2026-s2s-leaderboard.md", "src-arxiv-2026-taste2-chatgpt-latency.md", "src-micdrop-2026-gpt-live.md", "src-arxiv-2026-speech-emotion-papers.md", "src-openai-2026-realtime-api-pricing.md", "src-google-2026-gemini-live-api-pricing.md", "src-usagepricing-2026-hume-pricing.md", "claim-bench-1-ttfa-target.md", "overview-benchmark.md", "bench-hume-evi.md", "bench-chatgpt-voice.md", "src-phemex-2025-sesame-funding.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-bench-voice-latency

# topic-bench-voice-latency

> 음성 대화 지연(latency) 기준점과 측정 방법(2026-10 기준).

## 기준점

| 항목 | 값 | 시점·조건 | 근거 |
|---|---|---|---|
| 인간 대화 응답 간격 | 약 400ms; 이상 목표 ~500ms; 1초 초과 시 어색 | 공급사 설계 지침(보편 상수 아님) | [[src-coval-2026-voice-latency]] (B) |
| Hume EVI 3 | **<300ms** | 최신 하드웨어, 네트워크 미포함 | [[src-hume-2025-evi3-launch]] (A) |
| Artificial Analysis S2S 리더보드 | Raon SpeechChat 0.04s, Deepslate Opal 0.44s, Eleven Realtime v1 Max 0.57s | 2026-10 조회 | [[src-artificialanalysis-2026-s2s-leaderboard]] (A) |
| ChatGPT Voice 앱 실측 (TASTE2) | 평균 TTFA **1,370ms** (1,056–2,240ms) | 2026-03-13, 5개 입력 길이 조건 | [[src-arxiv-2026-taste2-chatgpt-latency]] (A) |
| TTS 단계만 | 2026 중앙값 TTFA 519ms, 최저 Palabra v1 103ms | 2026-07-23, STT·LLM 제외 | [[src-coval-2026-voice-latency]] (A) |
| GPT-Live | full-duplex (2026-07-08 전환) | 공식 TTFA 미공개 | [[src-micdrop-2026-gpt-live]] (B) |
| τ-Voice (2026) | full-duplex 에이전트 과제 벤치마크 | 신규 | [[src-arxiv-2026-speech-emotion-papers]] (A) |

## 측정 방법
- 지표: 사용자 발화 종료 → 첫 오디오 바이트(TTFA/TTFB). **첫 바이트 도착 ≠ 실제 들리는 시점** → 재생 시작까지 측정.
- 분포: p50·p95·p99 추적. 조건(네트워크·입력 길이·모델)을 병기. 리더보드 값과 앱 실측값을 직접 비교하지 말 것.

## 비용 (지연과 트레이드오프)
- OpenAI gpt-realtime-2.1 오디오 $32/$64 per M tokens, mini $10/$20 [[src-openai-2026-realtime-api-pricing]] (A); Gemini Live API 오디오 $3/$12 [[src-google-2026-gemini-live-api-pricing]] (A); Hume 티어 $0.04–0.07/분 [[src-usagepricing-2026-hume-pricing]] (B). 분당 환산은 가정 의존(C).

## 한벗 목표
- p50 <500ms, p95 <1s (한벗 제안 목표값, 외부 검증 성능 아님) → [[claim-bench-1-ttfa-target]].

관련: [[overview-benchmark]] · [[bench-hume-evi]] · [[bench-chatgpt-voice]] · [[src-phemex-2025-sesame-funding]]

