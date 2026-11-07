---
title: "src-prabhu-2024-label-uncertainty"
tags: ["paper-evidence", "scopus-2026-11", "ser", "uncertainty", "annotator-distribution", "grade-A"]
created: 2026-11-07T18:41:06.339Z
updated: 2026-11-07T18:41:06.339Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_032202_verify_02_labels_calibration_fusion_unist.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-ser-label-count-calibration-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-prabhu-2024-label-uncertainty

## 서지
Prabhu N., Lehmann-Willenbrock N., Gerkmann T., 2024, 주석 분포 불확실성(베이지안), IEEE TAFFC. DOI 10.1109/TAFFC.2023.3283595. arXiv 2209.15449.

## 수치 (초록 기준)
- Student-t 분포 기반 KL 손실로 주석 불확실성 모델링, 자연환경 데이터셋 2개에서 SOTA. 평가자 수가 적고 평가자 상관이 높을수록 t분포가 가우시안보다 유리, 교차 코퍼스 일관. 수치는 초록에 없음.

## 검증 결과 (2026-11-08)
- 등급 A. 정정: "영어뿐"이 아니다. 프랑스어 RECOLA/AVEC'16과 영어 MSP-Conversation을 사용.
- "평가자 3명 이하인 우리 데이터에 t분포가 맞다"는 C(보편적 선택 기준이 아님). 주석 불확실성 추정과 분류 확률 보정은 구분해야 한다.

## 한벗 적용
- 평가자 분포 모델링 후보. 한국어 검증은 비어 있음.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-ser-label-count-calibration-evidence]] · [[topic-scopus-literature-2026-11]]

