---
title: "src-torgashov-2025-voxtream"
tags: ["paper-evidence", "tts", "latency", "grade-A"]
created: 2026-10-26T05:49:11.243Z
updated: 2026-10-26T05:49:11.243Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-dialogue-tts.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-torgashov-2025-voxtream

## 서지
Torgashov, Henter, Skantze, 2025, "VoXtream", arXiv 2509.15969 (ICASSP 2026 채택 표기). https://arxiv.org/abs/2509.15969 . 설계서 [P57].

## 수치
- 초기 지연 102ms (A100, FP16, torch.compile). 컴파일 미적용 171ms. 영어.

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 "102ms는 이론적 하한"은 불일치(C): 특정 환경의 실측치.

## 한벗 적용
- 특정 GPU 실측치로만 인용. 한벗 TTS 지연 목표의 근거로 쓰지 않는다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-dialogue-tts]]
