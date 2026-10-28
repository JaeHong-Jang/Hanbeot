---
title: "src-neumann-2017-attentive-cnn-ser"
tags: ["paper-evidence", "ser", "ser-limits", "grade-A"]
created: 2026-10-26T05:47:38.959Z
updated: 2026-10-26T05:47:38.959Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-neumann-2017-attentive-cnn-ser

## 서지
Neumann & Vu, 2017, "Attentive Convolutional Neural Network based Speech Emotion Recognition", Interspeech. https://arxiv.org/abs/1706.00612 . 설계서 [P33].

## 수치
- 성능은 특징보다 발화 종류(즉흥·대본)에 크게 좌우. 입력이 짧을수록 정확도 하락, 즉흥 발화의 하락이 더 작음. 영어 IEMOCAP.

## 검증 결과 (2026-10-26)
- 등급 A. "2초 미만이면 확인 질문 생략"을 정당화한다는 주장은 불일치: 2초 기준은 팀 정책(§4).

## 한벗 적용
- 짧은 발화·기준선 전 판단 보류의 방향 근거만 된다. W3 평가에 발화 길이 구간을 추가.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
