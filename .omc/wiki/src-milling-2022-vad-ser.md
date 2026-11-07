---
title: "src-milling-2022-vad-ser"
tags: ["paper-evidence", "scopus-2026-11", "ser", "vad", "grade-A"]
created: 2026-11-07T18:40:52.016Z
updated: 2026-11-07T18:40:52.016Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-milling-2022-vad-ser

## 서지
Milling 외, 2022, VAD가 SER에 미치는 영향(자폐 아동 영어 음성), Frontiers in Computer Science. DOI 10.3389/fcomp.2022.837269.

## 수치 (초록 기준)
- 일반 VAD ROC-AUC 0.850, 아동용 VAD 0.662. SER 최대 CCC 0.263(낮음). VAD 종류에 따라 valence/arousal이 달리 움직인다.

## 검증 결과 (2026-11-08)
- 등급 A. 한국어 성인 대화에 대한 직접 근거는 아님.

## 한벗 적용
- VAD 후보(Silero/WebRTC)를 A/B하되 임계값·패딩은 직접 튜닝.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-scopus-literature-2026-11]]

