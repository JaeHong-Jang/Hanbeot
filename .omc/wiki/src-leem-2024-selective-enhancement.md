---
title: "src-leem-2024-selective-enhancement"
tags: ["paper-evidence", "scopus-2026-11", "ser", "noise", "speech-enhancement", "grade-A"]
created: 2026-11-07T18:39:52.605Z
updated: 2026-11-07T18:39:52.605Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-leem-2024-selective-enhancement

## 서지
Leem 외, 2024, 선택적 음향 특징 향상, IEEE/ACM TASLP. DOI 10.1109/TASLP.2023.3340603. 관련: Leem 2023 Interspeech 어댑터(10.21437/Interspeech.2023-1034).

## 수치 (초록 기준)
- MSP-Podcast, 10 dB: 전체 LLD 향상 대비 arousal +17.7%, dominance +21.2%, valence +3.3%. 특정 비교 조건의 상대 값이며 정확도 증가량으로 읽으면 안 된다.
- Leem 2023: 환경별 적응 시간 59.16% 감소, 트랜스포머 인코더 파라미터의 0.98%만 필요(비교 대상 인코더 대비).

## 검증 결과 (2026-11-08)
- 등급 A. 강건한 특징까지 향상하면 감정 단서가 훼손될 수 있다는 동기와 부합.

## 한벗 적용
- 일괄 노이즈 제거가 중립/해로울 수 있다는 근거. SE 사용 시 clean 대비 하락 점검 필수.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-scopus-literature-2026-11]]

