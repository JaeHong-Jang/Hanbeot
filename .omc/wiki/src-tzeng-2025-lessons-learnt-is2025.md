---
title: "src-tzeng-2025-lessons-learnt-is2025"
tags: ["msp-podcast", "interspeech-2025", "focal-loss", "fusion", "grade-A"]
created: 2026-11-07T20:07:40.074Z
updated: 2026-11-07T20:07:40.074Z
sources: ["https://arxiv.org/abs/2508.07282", "https://github.com/RogerTzeng/biic_IS2025_SER_Challenge"]
links: ["src-tzeng-2025-noise-robust-sse.md", "topic-dev-repos-ser-recipes-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-tzeng-2025-lessons-learnt-is2025

## 서지
Tzeng 외, Lessons Learnt (arXiv 2508.07282) + 코드 RogerTzeng/biic_IS2025_SER_Challenge. 다른 논문 [[src-tzeng-2025-noise-robust-sse]]와 구분. 조회 2026-11-08.

## 수치·기능
- 코드 2★, MIT(A).
- 1단계 RoBERTa·WavLM 개별 미세조정(배치 32, LR 1e-5, 20 epoch) → 2단계 백본 동결 후 융합층만(LR 5e-6).
- 훈련 전사는 정답, 개발·테스트 전사는 whisper-large-v3 자동 전사(운영 조건 모사).
- 불균형 처리(미세조정 WavLM + RoBERTa): 가중 CE F1-Micro 0.487, 균형 샘플링 0.445, **focal 0.592**. F1-Macro는 CE와 동일 0.338(논문은 +10.2%로 서술), 반복 분산 미보고.
- Task 2 valence CCC 0.6953(1위).

## 라이선스
코드 MIT.

## 검증 결과
수치 A. focal의 우위는 F1-Micro 기준이며 F1-Macro에서는 동일하므로 "focal이 우월" 일반화 금지. 다른 우승 시스템과 같은 조건 비교가 아님.

## 한벗 적용
R4(2단계 융합, 평가 전사는 RTZR 출력)의 레시피. 한국어에서 손실 3종 직접 비교.

## 사용처
[[topic-dev-repos-ser-recipes-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]]

