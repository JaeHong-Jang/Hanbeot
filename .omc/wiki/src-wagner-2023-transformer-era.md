---
title: "src-wagner-2023-transformer-era"
tags: ["paper-evidence", "ser", "valence", "wav2vec2", "grade-A", "audeering", "dimensional"]
created: 2026-11-07T11:37:36.857Z
updated: 2026-11-07T20:08:13.728Z
sources: ["research_notes/한벗 논문 보강/ser_papers_english.md", "research_notes/회의 후속 조사/J2_가중치_근거보강.md"]
links: ["topic-ser-label-scheme-and-fusion.md", "topic-ser-papers-synthesis.md", "src-audeering-2023-w2v2-msp-dim.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-wagner-2023-transformer-era

# src-wagner-2023-transformer-era

## 서지
Wagner, Triantafyllopoulos et al., "Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap", IEEE TPAMI 45(9):10745-10759, 2023. doi 10.1109/TPAMI.2023.3263585, arXiv 2203.07378.

## 수치
- MSP-Podcast(자연, 영어) 학습 62시간/시험 21시간(화자 60명). 텍스트 입력 없이 정서가 CCC .638. 이유는 목소리 톤보다 말의 내용을 배웠기 때문. 성별 간 공정하나 화자 간 불공정.
- 텍스트(BERT) 추가 시 변화(J2 Figure 3): 각성 -.023~-.065, 지배성 -.028~-.111 모두 하락. 정서가는 모델별로 +.098, +.030, +.101, -.042, -.025, +.103, +.176.
- 트랜스포머가 작은 교란에 스펙트로그램 CNN 기준선보다 강건.

## 한벗 적용
각성에는 텍스트를 거의 주지 않는 근거(텍스트 가중치 0.1). 화자별 편차 리스크 근거.

## 사용처
[[topic-ser-label-scheme-and-fusion]] · [[topic-ser-papers-synthesis]]

---

## Update (2026-11-07T20:08:13.728Z)

## 2026-11-08 개발자 저장소 조사 반영
- 학습 설정: 마지막 층 평균 풀링 + 선형 헤드, CCC 손실, LR 1e-4, 5 epoch, 배치 32, CNN 동결·Transformer 미세조정. 모델/저장소는 [[src-audeering-2023-w2v2-msp-dim]].
- 긍정도 범위 정정(검증표): 본문 모델별 범위는 HuBERT-base .636까지, 초록 최고 .638. ".359~.635"는 부정확(C).
- 논문은 개별 화자별 CCC를 분석하고 개인 수준 공정성 문제를 명시함. "개별 화자 편향 미보고"는 오류.
- "+.26 개선"은 비-Transformer 선행 모델 대비 설명이므로 동결 → 미세조정 개선폭으로 쓰지 않음(B).
- 성공 이유로 암묵적 언어 정보를 제시(합성 음성 실험). STT 융합 근거로 유지.

