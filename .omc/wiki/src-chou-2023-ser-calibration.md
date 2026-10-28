---
title: "src-chou-2023-ser-calibration"
tags: ["paper-evidence", "calibration", "ser", "grade-A"]
created: 2026-10-26T05:47:53.715Z
updated: 2026-10-26T05:47:53.715Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-feedback-1-reflect-professor-round1.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-chou-2023-ser-calibration

## 서지
Chou et al., 2023, "The Importance of Calibration: Rethinking Confidence and Performance of Speech Multi-label Emotion Classifiers", Interspeech. https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html . 설계서 [P39].

## 수치
- 초록: 저신뢰 예측 거부 전략은 모델 보정을 전제로 한다. ECE 평가, 다중 라벨 온도 스케일링. 영어.

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 제목 "Confidence Calibration for Multi-Label SER"는 불일치(C): 정식 제목은 위와 같다.
- 비평 반영(§7-12): "보정을 전제"로 한정. 보정을 입증한 근거가 아니다.

## 한벗 적용
- 점수 0.6은 보정 검증 전에는 확률로 해석하지 않는다. 보정·임계 선택·최종 평가 세트를 화자 비중복으로 분리하고, 임계는 질문 적용 비율별 오류율로 고른다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]] · [[claim-feedback-1-reflect-professor-round1]]
