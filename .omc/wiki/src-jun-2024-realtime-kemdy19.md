---
title: "src-jun-2024-realtime-kemdy19"
tags: ["paper-evidence", "scopus-2026-11", "ser", "utterance-length", "kemdy19", "grade-A"]
created: 2026-11-07T18:41:01.575Z
updated: 2026-11-07T18:41:01.575Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-scopus-literature-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-jun-2024-realtime-kemdy19

## 서지
Jun 외 (GIST), 2024, 실시간 SER 조각 길이 실험, AES Convention Express Paper (노트의 "Proc. AES Int. Conf."는 정정). 서지 확인: aes.org elibrary id 22745. DOI는 확인 페이지에서 발견하지 못했으나 부재 단정은 불가.

## 수치 (초록 기준)
- KEMDy19 4감정: 0.5초 조각 UA 상대 -10.61%, 3.0초 조각 -5.08% (전체 발화 대비). 상대 감소율이며 %p가 아니다. 실시간 계수(RTF)는 개선.

## 검증 결과 (2026-11-08)
- 수치 A, 서지 B(venue 정정).
- 정정: "최소 약 3초 확보가 입증됨"은 C. 0.5초보다 3초의 손실이 작다는 결과일 뿐 3초가 최소 기준·최적값이라는 결론이 아니다.

## 한벗 적용
- 너무 짧은 조각(0.5초)을 단독 감정 추정에 쓰지 않는 가설의 근거. 임계 길이는 한벗 데이터로 재측정.

## 사용처
[[topic-ser-preprocessing-pipeline-evidence]] · [[topic-scopus-literature-2026-11]]

