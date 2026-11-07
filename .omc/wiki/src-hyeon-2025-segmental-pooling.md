---
title: "src-hyeon-2025-segmental-pooling"
tags: ["paper-evidence", "scopus-2026-11", "ser", "pooling", "kemdy19", "grade-A"]
created: 2026-11-07T18:39:45.660Z
updated: 2026-11-07T18:39:45.660Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-hyeon-2025-segmental-pooling

## 서지
Hyeon J., Oh Y.H., Lee Y.J., Choi H.J. (KAIST 저자 표기), 2025, SSL 특징의 구간 평균 풀링(SAP)+전체 평균(GAP), BigComp. DOI 10.1109/BigComp64353.2025.00047. 선행판 arXiv 2410.12416.

## 수치 (초록 기준)
- GAP+SAP 결합: IEMOCAP에서 비교 범위 SOTA, KEMDy19에서 UA·WA 우위. 수치는 초록에 없음.
- 공개 선행판(검증자 확인): KEMDy19 UA 66.26%, WA 68.27%, 화자 독립 40-fold. 최종 학회판과 버전 대조 필요.

## 검증 결과 (2026-11-08)
- 등급 A. SAP는 비음성 구간 제외 풀링이며 파형에서 비언어를 무조건 삭제하라는 뜻이 아니다.
- 정정: 노트의 "한국어 논문은 프로토콜이 불투명" 서술은 이 논문에는 해당 없음(선행판이 화자 독립 40-fold 명시). 초록 미기재와 본문 미공개는 다르다.
- "바로 적용 가능한 저비용 실험"은 C(재현 후보로 타당, 효과는 직접 측정).

## 한벗 적용
- 풀링 ablation 1순위 후보(GAP vs GAP+SAP). KAIST 저자진 연락 후보.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-scopus-literature-2026-11]]

