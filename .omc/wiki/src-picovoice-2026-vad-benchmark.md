---
title: "src-picovoice-2026-vad-benchmark"
tags: ["paper-evidence", "vad", "grade-A"]
created: 2026-10-26T05:45:33.025Z
updated: 2026-10-26T05:45:33.025Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-picovoice-2026-vad-benchmark

## 서지
Picovoice, "VAD Benchmark" (벤더 문서, 게시 연도 미상, 열람 2026). https://picovoice.ai/docs/benchmark/vad/ . 설계서 [P2]. 벤더(Cobra VAD) 자체 비교라 이해충돌.

## 수치
- FPR 5%에서 TPR: Silero 87.7%, WebRTC 50%.
- 조건: 영어 LibriSpeech test-clean에 DEMAND 잡음 혼합, 0 dB SNR.

## 검증 결과 (2026-10-26)
- 등급 A(벤더 원문 일치). 독립 성능 검증은 아님.
- 노트의 "깨끗한 영어 음성"은 불일치(C). 잡음을 섞은 0 dB SNR 조건(공식 가이드가 명시).
- TEN VAD 정밀도 우위는 자체 주장이며 A는 주장의 존재만 뜻한다(§4).

## 한벗 적용
- 잡음 조건에서도 Silero 우위를 보이는 보조 수치. 영어·벤더 자체 평가라 한국어/모바일 소음 오탐률은 W2에서 직접 잰다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
