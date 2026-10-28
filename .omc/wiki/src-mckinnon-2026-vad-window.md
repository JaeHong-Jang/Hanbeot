---
title: "src-mckinnon-2026-vad-window"
tags: ["paper-evidence", "vad", "grade-A"]
created: 2026-10-26T05:45:31.682Z
updated: 2026-10-26T05:45:31.682Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "claim-feedback-1-reflect-professor-round1.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-mckinnon-2026-vad-window

## 서지
McKinnon et al. (Google), 2026, "Window Size Versus Accuracy Experiments in Voice Activity Detectors", arXiv 2601.17270. https://arxiv.org/abs/2601.17270 (2026-01-24 제출). 설계서 [P1].

## 수치
- Silero, WebRTC, RMS를 윈도우 크기별로 비교: Silero가 WebRTC·RMS보다 크게 우수, hysteresis는 WebRTC에 이득.
- 초록에 성능 수치 없음.
- 데이터: 영어 음성, 내부 데이터 1.1시간·21파일.

## 검증 결과 (2026-10-26)
- 등급 A. 소속·결과 방향 일치.
- 리서처 노트의 "언어 비특정"은 불일치(C). 원문(III-A)은 영어 음성이라고 명시.
- "Silero 학술 논문은 1건뿐"은 조사 범위 한정 표현으로만 쓴다(§4).

## 한벗 적용
- Silero 선택의 학술 근거 1건. 한국어·모바일 소음 수치는 없으므로 W2 기기 매트릭스에서 직접 잰다.
- 윈도우 크기·hysteresis는 튜닝 대상.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]] · [[claim-feedback-1-reflect-professor-round1]]
