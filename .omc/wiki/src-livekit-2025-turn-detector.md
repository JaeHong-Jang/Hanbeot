---
title: "src-livekit-2025-turn-detector"
tags: ["paper-evidence", "turn-detection", "grade-A", "korean"]
created: 2026-10-26T05:45:40.226Z
updated: 2026-11-07T19:51:40.850Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "topic-dialogue-dynamics-evidence-2026-11.md"]
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

---

## Update (2026-11-07T19:51:40.850Z)

## 2026-11-08 원문 확인
- 블로그(게시 2024-12-20): 135M SmolLM v2 기반, 최근 4턴 문맥, VAD 단독 대비 의도치 않은 끼어듦 85% 감소, 잘못된 미종료 3%, 추론 약 50ms. 영어 초기 모델, 벤더 수치.
- **현행 LiveKit EOU 모델은 한국어 지원**(노트의 "한국어 불가"는 초기 모델에만 해당).
- 사용처: [[topic-dialogue-dynamics-evidence-2026-11]]

