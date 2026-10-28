---
title: "src-arxiv-2021-asr-error-disfluency"
tags: ["paper-evidence", "stt", "grade-A", "korean"]
created: 2026-10-26T05:45:37.620Z
updated: 2026-10-26T05:45:37.620Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-arxiv-2021-asr-error-disfluency

## 서지
"Feature Space Interpolation" (ASR 오류 vs 비유창성), 2021, arXiv 2108.01812. https://arxiv.org/abs/2108.01812 . 설계서 [P5].

## 수치
- KsponSpeech 입력 ASR 출력의 토큰 오류율: E2E 0.06, 전통 파이프라인 0.15.
- 한국어·영어.

## 검증 결과 (2026-10-26)
- 등급 A. 수치 일치.

## 한벗 적용
- ASR 후처리 오류 탐지 연구. 비유창성(간투사 등)과 인식 오류를 구분해야 한다는 근거로 CER 산정 규칙에 반영.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
