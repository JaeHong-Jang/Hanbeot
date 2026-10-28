---
title: "src-livekit-2025-turn-detector"
tags: ["paper-evidence", "turn-detection", "grade-A", "korean"]
created: 2026-10-26T05:45:40.226Z
updated: 2026-10-26T05:45:40.226Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-livekit-2025-turn-detector

## 서지
LiveKit, 2025, Turn detector (공식 문서, 벤더). https://docs.livekit.io/agents/logic/turns/turn-detector/ . 설계서 [P7].

## 수치
- 텍스트 기반 모델, 14개 언어. 한국어 TPR 99.3%, TNR 94.5%.

## 검증 결과 (2026-10-26)
- 등급 A·벤더. 문서의 수치 존재·일치 확인이며 독립 검증 아님.

## 한벗 적용
- STT 결과 기반이라 STT 지연과 결합된다(음향 기반 Smart Turn과 다름). 대안 후보로만 유지.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
