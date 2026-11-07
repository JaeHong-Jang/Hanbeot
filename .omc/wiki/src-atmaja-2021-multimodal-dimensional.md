---
title: "src-atmaja-2021-multimodal-dimensional"
tags: ["paper-evidence", "ser", "valence-arousal", "fusion", "grade-A"]
created: 2026-11-07T11:37:29.634Z
updated: 2026-11-07T11:37:29.634Z
sources: ["research_notes/회의 후속 조사/J_음성텍스트_가중치.md", "research_notes/회의 후속 조사/J2_가중치_근거보강.md"]
links: ["topic-ser-label-scheme-and-fusion.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-atmaja-2021-multimodal-dimensional

# src-atmaja-2021-multimodal-dimensional

## 서지
Atmaja & Akagi, 음성+텍스트 차원 감정 인식, Speech Communication 2021 (arXiv 2210.14495). IEMOCAP·MSP-IMPROV(연기), 화자 분리 LOSO, 옛 특징 LSTM + GloVe, SVM 결합.

## 수치
- IEMOCAP 텍스트: 정서가 .405, 각성 .382 / 음성: 정서가 .204, 각성 .543 / 결합: 정서가 .553, 각성 .579.
- MSP-IMPROV 결합: 정서가 .291, 각성 .570.
- 정서가는 텍스트 우세, 각성은 음성 우세.

## 한벗 적용
축마다 가중치를 다르게 두는 근거. 다만 대본 데이터라 텍스트 각성 .382는 텍스트 누수 영향 가능성이 커서 각성의 텍스트 비중은 0.3이 아니라 0.1로 낮춤(11/6 수정, 미확정).

## 사용처
[[topic-ser-label-scheme-and-fusion]]

