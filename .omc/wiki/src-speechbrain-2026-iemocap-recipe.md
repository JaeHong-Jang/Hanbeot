---
title: "src-speechbrain-2026-iemocap-recipe"
tags: ["speechbrain", "iemocap", "recipe", "split-leakage", "grade-A"]
created: 2026-11-07T20:07:33.370Z
updated: 2026-11-07T20:07:33.370Z
sources: ["https://github.com/speechbrain/speechbrain"]
links: ["topic-dev-repos-ser-recipes-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-speechbrain-2026-iemocap-recipe

## 서지
speechbrain/speechbrain IEMOCAP wav2vec2-base 감정 인식 레시피. 조회 2026-11-08.

## 수치·기능
- 11,928★, Apache-2.0(A).
- 헤드 LR 1e-4, wav2vec2 LR 1e-5, 30 epoch, 배치 4, CNN 특징추출기 동결, StatisticsPooling 후 선형 4클래스, NewBob, seed 1993.
- 주석: ASR 미세조정본 대신 원본 wav2vec2-base를 쓰면 약 4% 개선.
- 보고 78.7(최고)/77.0(평균): **무작위 분할**.

## 라이선스
Apache-2.0.

## 검증 결과
레시피·수치 A. 무작위 분할은 화자 누수 가능, README가 5 fold(또는 `different_speakers` 10 fold) 권고. 점수 인용 금지.

## 한벗 적용
레시피(LR 분리, CNN 동결)만 차용. "원본이 낫다"는 주석과 EmoBox의 "Whisper 1위"는 방향이 달라 한국어에서 직접 비교(R1·R2).

## 사용처
[[topic-dev-repos-ser-recipes-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]]

