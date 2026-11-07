---
title: "src-schrufer-2024-uq-ser"
tags: ["scopus-2026-11", "paper-evidence", "ser", "uncertainty", "selective-prediction", "grade-A"]
created: 2026-11-07T19:52:02.099Z
updated: 2026-11-07T19:52:02.099Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-performance-levers-2026-11.md", "claim-app-9-ser-evaluation-and-calibration.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-schrufer-2024-uq-ser

# src-schrufer-2024-uq-ser

## 서지
Schrufer 외 2024, Are you sure? Uncertainty quantification for SER, Interspeech, arXiv 2407.01143. 검증 A.

## 수치
- EmoDB, CREMA-D, MSP test1 4범주. 엔트로피(CE)·MC dropout·EDL·Prior Network 비교.
- EmoDB 학습 안 한 감정 in/out 평균 불확실도: CE .333/.850, MC .010/.023, EDL .256/.387, PN(in) .239/.725. 방식별 척도가 달라 절대값 비교 부적절.
- MSP 주석 일치도와의 상관(PCC): CE -.128, MC -.082, EDL -.119, PN(in) -.144, PN(out) -.194 (약함).
- MSP UAR .609/.603/.576/.561/.558. 정확도와 UAR 순위가 엇갈림.
- ECE·위험-커버리지 보고 없음. 본문 CDF 면적을 AURC와 혼동 금지.

## 한벗 적용
모델 불확실도와 사람의 이견은 다르다. 소프트 라벨로 학습해도 필요조건이라는 증명은 없음(C 해석). [[topic-ser-performance-levers-2026-11]]

## 사용처
[[claim-app-9-ser-evaluation-and-calibration]] · [[topic-ser-performance-levers-2026-11]]
