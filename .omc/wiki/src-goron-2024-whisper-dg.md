---
title: "src-goron-2024-whisper-dg"
tags: ["paper-evidence", "scopus-2026-11", "ser", "whisper", "domain-generalization", "grade-B"]
created: 2026-11-07T18:39:59.482Z
updated: 2026-11-07T18:39:59.482Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-goron-2024-whisper-dg

## 서지
Goron 외, 2024, SER 도메인 일반화에서 Whisper·HuBERT·WavLM 비교, ICASSP. DOI 10.1109/ICASSP48485.2024.10446997.

## 수치 (초록 기준)
- 6개 데이터셋 평균 UAR 74.5%로 Whisper가 가장 우수. HuBERT·WavLM도 일반화 가능.

## 검증 결과 (2026-11-08)
- 등급 B (원출처 직접 접근 실패, 로컬 Scopus 초록 수치 일치).
- 주의: "Whisper는 한국어 사전학습을 포함해 한국어 SER에 유리"는 C(한국어 ASR 능력과 한국어 SER 우위는 별개).

## 한벗 적용
- Whisper 인코더를 emotion2vec+와 함께 백본 비교 후보로. 한국어 우위를 전제하지 않는다.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-scopus-literature-2026-11]]

