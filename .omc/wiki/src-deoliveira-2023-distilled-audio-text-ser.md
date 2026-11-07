---
title: "src-deoliveira-2023-distilled-audio-text-ser"
tags: ["scopus-2026-11", "paper-evidence", "ser", "distillation", "fusion", "grade-A"]
created: 2026-11-07T19:52:04.543Z
updated: 2026-11-07T19:52:04.543Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-performance-levers-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-deoliveira-2023-distilled-audio-text-ser

# src-deoliveira-2023-distilled-audio-text-ser

## 서지
de Oliveira, Prabhu, Gerkmann 2023, 오디오-텍스트 증류 차원 SER, arXiv 2305.19184. 검증 A.

## 수치
- HuBERT 층 분석: 얕은 층은 arousal, 깊은 층은 valence에 중요.
- DistilHuBERT 오디오 모델은 비교 모델 총 파라미터의 약 15%, 오디오+텍스트는 약 20%. arousal·dominance는 큰 모델과 동급, valence는 약함. 텍스트를 더하면 valence까지 동급(MSP-Podcast v1.10).
- "증류 모델에는 텍스트가 필수"는 일반 명제가 아니라 이 실험에서 유용하다는 증거(C).

## 한벗 적용
서비스 지연 제약에서 소형 백본 + 텍스트 결합의 근거. [[topic-ser-performance-levers-2026-11]]

## 사용처
[[topic-ser-performance-levers-2026-11]]
