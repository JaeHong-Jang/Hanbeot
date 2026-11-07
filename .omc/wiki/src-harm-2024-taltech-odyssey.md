---
title: "src-harm-2024-taltech-odyssey"
tags: ["paper-evidence", "ser", "fusion", "weights", "grade-A"]
created: 2026-11-07T11:37:24.531Z
updated: 2026-11-07T11:37:24.531Z
sources: ["research_notes/회의 후속 조사/J2_가중치_근거보강.md"]
links: ["topic-ser-label-scheme-and-fusion.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-harm-2024-taltech-odyssey

# src-harm-2024-taltech-odyssey

## 서지
Harm & Alumae, "TalTech Systems for the Odyssey 2024 Emotion Recognition Challenge", Odyssey 2024. MSP-Podcast(자연 발화, 영어), 텍스트는 ASR 전사. 원문 표 직접 확인(J2의 K1).

## 수치
- 음성 Wav2Vec2-BERT(600M) 미세조정 + 텍스트 RoBERTa-large·LLaMA2-7B, 사후확률 선형 보간.
- 정서가 최적 텍스트 가중치 0.55, 각성 0(텍스트 불필요), 8감정 범주 0.45. 8감정 macro-F1 보간 .354(Dev_bal)/.350(평가). 챌린지 정서가 1위(평가 CCC V .6362).

## 한벗 적용
시작 가중치(텍스트:음성) 정서가 0.65:0.35, 각성 0.1:0.9, 5감정 0.55:0.45 제안(11/6 수정, 미확정)의 핵심 근거. 한국어·고령이라 영어 결과(0.55)보다 텍스트를 조금 더 줌.

## 사용처
[[topic-ser-label-scheme-and-fusion]] · [[topic-meeting-followup-ser-2026-11]]

