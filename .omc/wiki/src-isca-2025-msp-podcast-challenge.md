---
title: "src-isca-2025-msp-podcast-challenge"
tags: ["benchmark", "ser", "msp-podcast", "interspeech", "grade-A", "paper-evidence", "ser-limits"]
created: 2026-10-25T07:26:26.966Z
updated: 2026-10-26T05:51:59.797Z
sources: ["https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf", "https://github.com/msplabresearch/MSP-Podcast_Challenge_IS2025", "https://www.isca-archive.org/interspeech_2025/dutta25_interspeech.pdf", "https://www.isca-archive.org/interspeech_2025/uniyal25_interspeech.pdf"]
links: ["topic-bench-ser.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-isca-2025-msp-podcast-challenge

# src-isca-2025-msp-podcast-challenge

## 서지
- Naini et al., Interspeech 2025 "SER in Naturalistic Conditions" 챌린지 총괄 논문 + 공식 코드; Dutta et al. (ABHINAYA); Uniyal et al. (SSL 층 동결).

## 사실
- MSP-Podcast: 324시간+ 자연 발화. Task 1 8-class 분류, Task 2 arousal/valence/dominance 회귀(CCC). 데이터 버전·과제별 지표 병기 필요.
- ABHINAYA: **166 submissions 중 4위** (총괄 논문은 93개 연구팀으로 기술; "166팀"은 부정확).
- Uniyal: WavLM 기반 실험에서 초기 9개 트랜스포머 층 동결이 일반/과제 특화 균형에 유리 (모든 SSL 모델 일반화 규칙 아님).

## 검증 결과 (2026-10-25 확인)
- 데이터·과제·Uniyal: 등급 **A**. "166팀 중 4위": **불일치/C** → 166 제출물.

## 사용처
- [[topic-bench-ser]]

---

## Update (2026-10-26T05:51:59.797Z)

## 2026-10-26 논문 보강 (설계서 [P32])
- 수치: 324시간 이상의 자연 발화(영어 팟캐스트), 8-class 과제. 등급 A.
- 적용: 연기 코퍼스(P30)와 달리 자연 발화 평가 설계의 참고. 한국어 수치는 아님.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]]
