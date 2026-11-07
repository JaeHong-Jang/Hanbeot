---
title: "src-chatzichristodoulou-2025-medusa"
tags: ["paper-evidence", "scopus-2026-11", "ser", "class-imbalance", "soft-label", "grade-A", "medusa", "code"]
created: 2026-11-07T18:41:03.911Z
updated: 2026-11-07T20:08:15.955Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_032202_verify_02_labels_calibration_fusion_unist.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-ser-label-count-calibration-evidence.md", "topic-scopus-literature-2026-11.md", "topic-dev-repos-ser-recipes-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-chatzichristodoulou-2025-medusa

## 서지
Chatzichristodoulou 외, 2025, MEDUSA, Interspeech. DOI 10.21437/Interspeech.2025-2636.

## 수치 (초록 기준)
- 균형 샘플링+평가자 점수 소프트 타깃+Manifold MixUp. Interspeech 2025 자연 발화 대회 Task 1(범주 감정 인식) 1위. 점수는 초록에 없음.

## 검증 결과 (2026-11-08)
- 등급 A. 정정: 전체 과제 통합 1위가 아니라 Task 1 부문 1위. 순위는 전체 시스템 결과이며 개별 기법의 독립 효과가 아니다.

## 한벗 적용
- 소수 클래스+소프트 타깃 학습의 참조 레시피. 3층 라벨 설계와 부합.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-ser-label-count-calibration-evidence]] · [[topic-scopus-literature-2026-11]]

---

## Update (2026-11-07T20:08:15.955Z)

## 2026-11-08 개발자 저장소 조사 반영
- 코드: emopodntua/medusa, MIT, 10★(push 2025-06-30), arXiv 2506.09556. 학습은 **RTX 3090 1장**(A).
- 구성: WavLM-large·HuBERT·Whisper-v3 특징 + 전사 텍스트, DeepSER 교차 모달 융합(각 2층, 은닉 1024), 4단계(전체/균형/메타 분류기/모델 수프), MixUp p=0.3, 클래스 가중.
- ablation: **소프트 타깃 제거 평균 상대 -8.23%(최대)**, 후기 융합 -6.31%. 테스트 Macro-F1 0.4316(8클래스, MSP-Podcast IS2025).
- 효과 순위를 다른 우승 시스템과 비교해 일반화하지 말 것(조건 불일치, 검증표 C). [[topic-dev-repos-ser-recipes-2026-11]]

