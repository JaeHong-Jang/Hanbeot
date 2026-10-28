---
title: "src-coval-2026-voice-latency"
tags: ["benchmark", "voice-latency", "ttfa", "tts", "grade-A"]
created: 2026-10-25T07:27:16.961Z
updated: 2026-10-25T07:27:16.961Z
sources: ["https://www.coval.ai/blog/how-to-measure-voice-ai-latency-the-complete-guide/", "https://www.coval.ai/blog/tts-latency-benchmark-2026/", "https://telnyx.com/resources/low-latency-voice-ai"]
links: ["topic-bench-voice-latency.md", "claim-bench-1-ttfa-target.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-coval-2026-voice-latency

# src-coval-2026-voice-latency

## 서지
- Coval "How to measure voice AI latency" 가이드; Coval "TTS latency benchmark 2026" (2026-07-23); Telnyx 저지연 음성 AI 자료. 공급사 지침.

## 수치
- 인간 대화 응답 약 400ms(Coval), 이상 목표 ~500ms, 1초 초과 시 어색(Telnyx) — 공급사 근사치, 보편 상수 아님.
- 측정: 발화 종료→첫 오디오 바이트(TTFA/TTFB), p95·p99 추적 권고. 첫 바이트 도착과 실제 들리는 시점은 구분.
- TTS 단계만: 2026 중앙값 TTFA **519ms**, 최저 Palabra TTS v1 **103ms** (STT·LLM·네트워크 제외).

## 검증 결과 (2026-10-25 확인)
- 400–500ms·1초·측정 지침: 등급 **B**. TTS 벤치마크 수치: **A**.

## 사용처
- [[topic-bench-voice-latency]] · [[claim-bench-1-ttfa-target]]

