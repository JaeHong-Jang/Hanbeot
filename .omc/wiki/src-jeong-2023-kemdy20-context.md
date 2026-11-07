---
title: "src-jeong-2023-kemdy20-context"
tags: ["paper-evidence", "ser", "korean", "kemdy20", "context", "grade-B"]
created: 2026-11-07T11:37:44.914Z
updated: 2026-11-07T11:37:44.914Z
sources: ["research_notes/한벗 논문 보강/ser_korean_papers.md", "research_notes/회의 후속 조사/AB_맥락_개인화.md"]
links: ["topic-ser-context-personalization.md", "topic-ser-papers-synthesis.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-jeong-2023-kemdy20-context

# src-jeong-2023-kemdy20-context

## 서지
Jeong et al., 대화 맥락 + 음성 + 텍스트 감정 분류, Mathematics 11(13):2908, 2023 (MDPI). doi 10.3390/math11132908. KEMDy20(일반인 자유대화, 40세션 중 30세션 학습 10,304개, 10세션 평가 3,158개) 및 MELD. pko-T5 + wav2vec 2.0 특징.

## 수치
- 정확도 87.5%, F1 44.2. 중립·기쁨이 데이터의 약 95%라 정확도만 높음.
- 직전 2발화 맥락: 텍스트 F1 38.43 → 39.13 (+0.7, 정확도 87.11 → 86.51로 오히려 하락). 음성까지 함께 넣으면 F1 44.16.
- 음성 추가: 정확도 87.1 → 87.4, F1 38.4 → 40.9(종합 노트 표기).

## 한벗 적용
한국어에서도 맥락 단독 이득은 작고 음성과 결합할 때 효과. 정확도만 보고하면 안 되고 F1·UA와 부정 감정 재현율을 함께 봐야 함(제안, 미확정).

## 사용처
[[topic-ser-context-personalization]] · [[topic-ser-papers-synthesis]]

