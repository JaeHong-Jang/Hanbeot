---
title: "src-dasaro-2024-crosslingual-ser"
tags: ["paper-evidence", "ser", "ser-limits", "grade-A"]
created: 2026-10-26T05:46:41.550Z
updated: 2026-10-26T05:46:41.550Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-dasaro-2024-crosslingual-ser

## 서지
D'Asaro et al., 2024, "Using Large Speech Models for Feature Extraction in Cross-Lingual Speech Emotion Recognition", CLiC-it. https://aclanthology.org/2024.clicit-1.31/ . 설계서 [P24].

## 수치
- Whisper는 마지막 층, wav2vec2는 초기·중간 층이 유리.
- 영어 wav2vec2가 다국어 XLS-R을 대부분 언어에서 능가. 8개 언어, 한국어 없음.

## 검증 결과 (2026-10-26)
- 등급 A.

## 한벗 적용
- 다국어 사전학습이 곧 감정 일반화는 아니다. 층 선택도 비교 대상에 둔다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
