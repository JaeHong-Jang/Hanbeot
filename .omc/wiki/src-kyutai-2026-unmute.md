---
title: "src-kyutai-2026-unmute"
tags: ["voice-agent", "kyutai", "unmute", "latency", "mit"]
created: 2026-11-07T18:12:17.140Z
updated: 2026-11-07T18:12:17.140Z
sources: ["https://github.com/kyutai-labs/unmute"]
links: ["src-kyutai-2024-moshi.md", "topic-voice-agent-frameworks-jarvis-2026-11.md", "topic-bench-opensource-voice-agents.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-kyutai-2026-unmute

# src-kyutai-2026-unmute

## 서지
kyutai-labs/unmute README. 조회 2026-11-08. 관련 [[src-kyutai-2024-moshi]].

## 수치·기능
- 별 1.5k(B). Kyutai STT/TTS + 임의 텍스트 LLM 캐스케이드(A). 끼어들기 지원(B, 한국어·중단 반응시간 미검증).
- TTS 지연: 단일 L40S 약 750ms, 분산 구성 약 450ms(README, B). 450ms는 Unmute.sh 구성 설명이며 임의 분산 구성의 보장값 아님.
- 한국어 지원 미표기(C).

## 라이선스
MIT(코드, A).

## 검증 결과
구조·지연 설명 일치. 한벗 환경 실측 없음.

## 한벗 적용
캐스케이드 구조의 현실적 지연 기준점(제작사 보고치).

## 사용처
[[topic-voice-agent-frameworks-jarvis-2026-11]] · [[topic-bench-opensource-voice-agents]]

