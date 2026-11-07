---
title: "src-s3prl-2026-emotion-recognition"
tags: ["s3prl", "superb", "iemocap", "recipe", "grade-A"]
created: 2026-11-07T20:07:35.550Z
updated: 2026-11-07T20:07:35.550Z
sources: ["https://github.com/s3prl/s3prl"]
links: ["topic-dev-repos-ser-recipes-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-s3prl-2026-emotion-recognition

## 서지
s3prl SUPERB Emotion Recognition(ER) 다운스트림. 조회 2026-11-08.

## 수치·기능
- Adam LR 1e-4, 총 30,000 step, 그래디언트 누적 8, 배치 4, projector 256, MeanPooling, 검증 비율 0.2, IEMOCAP 5-fold leave-session-out(A).
- 업스트림 동결 + 학습형 층 가중합이 SUPERB 표준.
- HF 이식본 session1 정확도 0.6343(s3prl) / 0.6258(transformers).

## 라이선스
확인 못함(C).

## 검증 결과
설정 수치 A. 이식본 수치는 session1 단일 폴드이므로 전체 성능 아님.

## 한벗 적용
R2(층 가중합 vs 마지막 층)의 구현 기준. EmoBox가 마지막 층만 평가한 빈칸을 한국어에서 채운다.

## 사용처
[[topic-dev-repos-ser-recipes-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]]

