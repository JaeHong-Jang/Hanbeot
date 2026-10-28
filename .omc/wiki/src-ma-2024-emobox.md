---
title: "src-ma-2024-emobox"
tags: ["paper-evidence", "ser", "ser-limits", "grade-A"]
created: 2026-10-26T05:46:38.638Z
updated: 2026-10-26T05:46:38.638Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-ma-2024-emobox

## 서지
Ma et al., 2024, "EmoBox", Interspeech. https://arxiv.org/abs/2406.07162 . 설계서 [P22].

## 수치
- 32개 데이터셋·14개 언어·10개 모델. 한국어 없음.
- IEMOCAP UA/WA: WavLM-large 69.47/69.07%, Whisper-large-v3 73.54/72.86%.
- 교차코퍼스 12쌍 중 9쌍에서 Whisper-large-v3 1위.

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 "화자 50명(44명) 미만이면 화자 종속 분할"은 불일치(C): 원문은 화자 4명 미만이거나, 4명 이상이어도 화자별 감정 분포가 불균형하면 화자 종속 분할.

## 한벗 적용
- Whisper encoder 후보 유지 근거. 평가 프로토콜(화자 분할 규칙) 참고.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
