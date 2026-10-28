---
title: "src-park-2024-korean-asr-eval"
tags: ["paper-evidence", "stt", "grade-A", "korean"]
created: 2026-10-26T05:45:34.192Z
updated: 2026-10-26T05:45:34.192Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "claim-feedback-1-reflect-professor-round1.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-park-2024-korean-asr-eval

## 서지
Park, Cho, Choo, 2024 (v3 2025-09), "Evaluating ASR Systems for Korean Meteorological Experts", arXiv 2410.18444. https://arxiv.org/abs/2410.18444 . 설계서 [P3].

## 수치
- KsponSpeech eval-clean 3,000개 CER: Whisper tiny 32.67%, small 16.75%, medium 14.33%, large-v2 14.66%.
- large-v2를 Kspon으로 미세조정: 10.48%.
- TTS 생성 날씨 데이터로 미세조정: 날씨 CER 18.35→10.64%, Kspon CER 14.66→15.81%.

## 검증 결과 (2026-10-26)
- 등급 A. 한국어 대화체 zero-shot CER이 medium·large-v2에서 약 14~15%라는 요약은 근사(B).
- RTZR를 독립 평가한 논문은 없다. Wiki `src-rtzr-2026-korean-stt-benchmark` 원문 URL·수치는 미확인(§4).

## 한벗 적용
- CER ≤ 8% 목표는 유지하되 "팀 녹음 기준 자체 측정"으로 표기. 공개 Whisper 수치는 비스트리밍.
- 도메인 적응은 일반 성능을 깎을 수 있다(Kspon 14.66→15.81%).

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]] · [[claim-feedback-1-reflect-professor-round1]]
