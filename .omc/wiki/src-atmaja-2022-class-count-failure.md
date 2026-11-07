---
title: "src-atmaja-2022-class-count-failure"
tags: ["paper-evidence", "scopus-2026-11", "ser", "class-count", "grade-A"]
created: 2026-11-07T18:42:37.483Z
updated: 2026-11-07T18:42:37.483Z
sources: ["research_notes/Scopus 조사/02_labels_calibration_fusion_unist.md", ".omc/orchestra/reviews/20261108_032202_verify_02_labels_calibration_fusion_unist.md"]
links: ["topic-ser-label-count-calibration-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-atmaja-2022-class-count-failure

## 서지
Atmaja B.T., Sasou A., 2022, 자기지도 음성 모델의 감성 분석, Sensors. DOI 10.3390/s22176369. (기존 `src-atmaja-2021-multimodal-dimensional`과 다른 논문. 증강 논문은 `src-atmaja-2022-augmentation`.)

## 수치 (초록 기준)
- 이진 감성 WA 81%·UA 73% 최고. 6감정 분류와 3·7클래스 감성 과제는 "정확한 예측 실패", 불균형 데이터가 한몫.
- 같은 맥락 비교: Issa 외 2020(10.1016/j.bspc.2020.101894) IEMOCAP 4클래스 64.3%(화자 독립), RAVDESS 8클래스 71.61%, EMO-DB 7클래스 86.1%(535샘플)/95.71%(520샘플).

## 검증 결과 (2026-11-08)
- Atmaja 수치 A. 정정/하향: "6개 이상 감정은 음성만으로 믿기 어렵다"는 일반 결론은 C(특정 모델·데이터·과제의 결과). "데이터 성격이 클래스 수보다 더 크게 좌우"도 C(Issa는 샘플 선택·모델 변경이 섞여 통제 비교 아님).

## 한벗 적용
- "라벨을 늘리지 않는다"의 보조 근거. 클래스 수 상한 증명이 아님.

## 사용처
[[topic-ser-label-count-calibration-evidence]] · [[topic-scopus-literature-2026-11]]

