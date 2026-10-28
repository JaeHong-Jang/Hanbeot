---
title: "src-romana-2025-switchboard-affect"
tags: ["paper-evidence", "ser", "ser-limits", "grade-A"]
created: 2026-10-26T05:47:37.091Z
updated: 2026-10-26T05:47:37.091Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-romana-2025-switchboard-affect

## 서지
Romana et al. (Apple), 2025, "Switchboard-Affect", arXiv 2510.13906. https://arxiv.org/abs/2510.13906 . 설계서 [P31].

## 수치
- 10,000세그먼트(약 25시간). 참여 평가자 29명, 세그먼트당 6명. 영어 전화 대화.
- 주 감정 Krippendorff α 0.25; 활성도·정서가·지배도 0.53/0.40/0.48. 합의 라벨 부여 가능 67%.
- 분노 F1: GPT-4o 0.257, Whisper-GRU 0.147, Emotion2Vec(IEMOCAP 미세조정) 0.000.

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 "평가자 6명"은 불일치(C): 전체 29명, 세그먼트당 6명.
- "α=0.25가 정확도 상한"은 불일치(C): 라벨 불확실성이 평가 해석을 제한한다는 뜻.

## 한벗 적용
- 사람끼리도 합의가 낮아 라벨 해석에 주의. 이 데이터·모델 조건에서 분노 인식이 약했던 사례이며 한벗 예상 성능이 아니다.
- 분노("답답함") 질문 보류 근거의 하나.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
