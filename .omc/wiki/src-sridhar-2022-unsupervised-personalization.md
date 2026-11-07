---
title: "src-sridhar-2022-unsupervised-personalization"
tags: ["paper-evidence", "ser", "personalization", "baseline", "grade-A"]
created: 2026-11-07T11:36:13.525Z
updated: 2026-11-07T11:36:13.525Z
sources: ["research_notes/회의 후속 조사/AB_맥락_개인화.md"]
links: ["topic-ser-context-personalization.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-sridhar-2022-unsupervised-personalization

# src-sridhar-2022-unsupervised-personalization

## 서지
Sridhar & Busso, 비지도 개인화 SER, IEEE Trans. Affective Computing 2022. doi 10.1109/TAFFC.2022.3187336, arXiv 2201.07876.

## 수치
- 시험 화자 음성 200초로 비슷한 학습 화자 5명을 찾아 가중 적응. MSP-Podcast 50명.
- 정서가 CCC 0.3083→0.3500 (상대 +13.52%), 각성 0.7164→0.7296 (+1.84%), 지배 0.6374→0.6451 (+1.20%).

## 한벗 적용
라벨 없이 사용자 음성만으로 개인화 가능, 긍정/부정 판단에서 이득이 가장 큼. 사용자별 기준선을 pgvector에 저장하는 제안(미확정)의 근거. 관련: Busso IFN(화자별 중립 발화 정규화)은 후속 수치의 과제·지표 확인 필요.

## 사용처
[[topic-ser-context-personalization]] · [[topic-meeting-followup-ser-2026-11]]

