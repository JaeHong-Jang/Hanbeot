---
title: "src-ren-2024-emo-codec"
tags: ["paper-evidence", "ser", "ser-limits", "grade-A"]
created: 2026-10-26T05:47:40.373Z
updated: 2026-10-26T05:47:40.373Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-ren-2024-emo-codec

## 서지
Ren et al., 2024, "EMO-Codec", APSIPA ASC. https://arxiv.org/abs/2407.15458 . 설계서 [P34].

## 수치
- 코덱 재합성 후 SER 저하, 슬픔·우울·공포·혐오에서 심함(초록은 취약 감정 열거).
- Opus 6·24 kbps 평가 포함. 영어·중국어.

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 "Opus 직접 평가 없음"은 불일치(C): Opus 6·24kbps 포함. 단 WebRTC 전체 전송 환경과는 다르다.
- "슬픔이 가장 취약"은 감정별 표 미확인(§4).

## 한벗 적용
- W3 평가에 Opus 전후 비교를 넣는다(전송·잡음 결합 조건은 별도).

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
