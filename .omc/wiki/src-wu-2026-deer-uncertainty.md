---
title: "src-wu-2026-deer-uncertainty"
tags: ["github", "uncertainty", "calibration", "ser", "grade-A-existence"]
created: 2026-11-07T20:06:48.869Z
updated: 2026-11-07T20:06:48.869Z
sources: ["https://github.com/W-Wu/DEER"]
links: ["claim-research-3-reproduction-experiments-r0-r8.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md", "topic-dev-repos-ser-recipes-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-wu-2026-deer-uncertainty

## 서지
W-Wu/DEER (GitHub). 조회 2026-11-08. 원 노트는 "README 미열람 C"였으나 검증표가 README 열람.

## 수치·기능
- **불확실성 회귀 학습·설정·손실·평가 코드가 존재**(A, 검증표).
- 별·점수·데이터셋 세부는 확인 못함(C).

## 라이선스
미확인(C).

## 검증 결과
노트의 "불확실성/보정 구현 코드는 사실상 부재"는 **불일치(C)**. 단 온도 스케일링·선택적 예측(위험-커버리지) 코드의 범위는 별도 조사 필요. Sridhar & Busso·Chou·Jia 등은 코드 링크 미확인(B). Chou 연구의 ConsCal은 해당 논문에서 확인되지 않음(C).

## 한벗 적용
R7에서 온도 스케일링과 DEER식 불확실성 회귀를 비교 후보로 둔다. "ECE·위험-커버리지 코드 공개가 기여"라는 표현은 선행연구 대비 신규성 근거 부족(C)이므로 완화.

## 사용처
[[claim-research-3-reproduction-experiments-r0-r8]] · [[claim-research-1-paper-a-korean-ser-selective-prediction]] · [[topic-dev-repos-ser-recipes-2026-11]]

