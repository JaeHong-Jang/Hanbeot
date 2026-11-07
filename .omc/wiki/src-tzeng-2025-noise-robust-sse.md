---
title: "src-tzeng-2025-noise-robust-sse"
tags: ["paper-evidence", "scopus-2026-11", "ser", "noise", "speech-enhancement", "grade-A"]
created: 2026-11-07T18:39:50.252Z
updated: 2026-11-07T18:39:50.252Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-tzeng-2025-noise-robust-sse

## 서지
Tzeng 외 (NTHU/UT Dallas MSP 계열), 2025, 공유 SSL 기반 음성 향상(SE)+SER 공동 학습, 점진적 unfreeze, ICASSP. DOI 10.1109/ICASSP49660.2025.10887569.

## 수치 (초록 기준)
- 0 dB에서 F1-Macro +3.7%, F1-Micro +2.7%, 통계적 유의. 원문 표현 그대로 인용(임의로 %p 변환 금지).
- 서론 문제 제기: 낮은 정확도의 예측은 사용자 신뢰를 해칠 수 있다(별도 사용자 실험 결과는 아님).

## 검증 결과 (2026-11-08)
- 등급 A (수치·구조). "소음 방향 확정"은 C: 한국어 앱에서는 후보 전략일 뿐.

## 한벗 적용
- 입력 일괄 SE 대신 소음 혼합 증강 또는 SE-SER 공동 학습을 ablation 후보로.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-scopus-literature-2026-11]]

