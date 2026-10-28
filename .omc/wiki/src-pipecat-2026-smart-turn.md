---
title: "src-pipecat-2026-smart-turn"
tags: ["app-design", "grade-A", "smart-turn", "turn-detection", "pipecat"]
created: 2026-10-25T14:47:54.312Z
updated: 2026-10-25T14:47:54.312Z
sources: ["https://github.com/pipecat-ai/smart-turn"]
links: ["overview-app-design.md", "claim-tech-5-latency-target.md", "claim-tech-4-voice-pipeline-architecture.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-pipecat-2026-smart-turn

# src-pipecat-2026-smart-turn
## 서지정보
pipecat-ai, GitHub 저장소 smart-turn, 발행일 미표기, https://github.com/pipecat-ai/smart-turn, 확인일 2026-10-25, 유형 저장소
## 핵심 수치·사실 (설계서에서 쓴 것)
- v3.2, 23개 언어, 8M 파라미터, 16kHz·8초 입력, CPU 100ms 미만
- 측정 조건: 성능은 조건부(B)
## 검증 결과
- 등급 A(사양) / B(성능). 검증표(implementation_refs): CPU 추론 약 10~100ms는 일치(B): 일부 CPU 최소 10ms, 대부분의 클라우드 인스턴스 100ms 미만이라는 조건부 설명이며 보장 범위 아님.
## 사용처
- [[overview-app-design]] 의 1절, 5절 ③, 6.1절, 7.2절
- 관련: [[claim-tech-5-latency-target]], [[claim-tech-4-voice-pipeline-architecture]]
