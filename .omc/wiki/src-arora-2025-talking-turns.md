---
title: "src-arora-2025-talking-turns"
tags: ["paper-evidence", "barge-in", "turn-detection", "grade-A"]
created: 2026-10-26T05:46:31.167Z
updated: 2026-10-26T05:46:31.167Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-arora-2025-talking-turns

## 서지
Arora et al., 2025, "Talking Turns", ICLR. https://arxiv.org/abs/2503.01174 . 설계서 [P14].

## 수치
- 오디오 기반 모델은 말할 때를 잘 모르고, 과도하게 끼어들며, 백채널을 거의 내지 않는다. 영어 Switchboard.

## 검증 결과 (2026-10-26)
- 등급 A. 한국어 "응/음" 정책을 검증한 연구는 아니다(§4).

## 한벗 적용
- "백채널에 TTS를 끊지 않는다" 정책의 간접 근거(방향만). 한국어 오중단율은 W2에 따로 잰다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
