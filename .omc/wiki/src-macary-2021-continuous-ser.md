---
title: "src-macary-2021-continuous-ser"
tags: ["paper-evidence", "ser", "fusion", "weights", "callcenter", "grade-A"]
created: 2026-11-07T11:37:27.335Z
updated: 2026-11-07T11:37:27.335Z
sources: ["research_notes/회의 후속 조사/J2_가중치_근거보강.md"]
links: ["topic-ser-label-scheme-and-fusion.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-macary-2021-continuous-ser

# src-macary-2021-continuous-ser

## 서지
Macary, Tahon, Esteve, Rousseau, "On the use of self-supervised pre-trained acoustic and linguistic features for continuous speech emotion recognition", IEEE SLT 2021. AlloSat(프랑스 실제 콜센터, 만족-불만 연속값), 텍스트는 ASR 전사. 원문 표 확인(J2의 K3).

## 수치
- wav2vec-EN(음성) + CamemBERT(텍스트) 가중 평균 결정 결합. 시험 CCC: 텍스트 .799, 음성 .730, 결합 .825.
- 0.01 간격 격자(0.1~0.9), Dev에서 최적화한 가중치 텍스트 0.69 : 음성 0.31.

## 한벗 적용
정서가형 축의 텍스트 비중 상한 근거(범위 0.55~0.69). 시작값 정서가 0.65:0.35 제안(미확정)에 사용.

## 사용처
[[topic-ser-label-scheme-and-fusion]] · [[topic-meeting-followup-ser-2026-11]]

