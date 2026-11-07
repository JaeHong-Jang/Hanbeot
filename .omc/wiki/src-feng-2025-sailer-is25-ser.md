---
title: "src-feng-2025-sailer-is25-ser"
tags: ["scopus-2026-11", "paper-evidence", "ser", "msp-podcast", "soft-label", "ensemble", "grade-A"]
created: 2026-11-07T19:51:54.829Z
updated: 2026-11-07T19:51:54.829Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-performance-levers-2026-11.md", "topic-ser-sota-benchmarks-2026-11.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-feng-2025-sailer-is25-ser

# src-feng-2025-sailer-is25-ser

## 서지
Feng, Lertpetchpun 외 2025, SAILER (Interspeech 2025 SER Challenge 참가), arXiv 2505.22133. 원문 열람(노트 05 §7), 검증 A.

## 수치
- Whisper-L-v3 + 텍스트 FM의 단순 결합. 단일 모델 test macro-F1 0.4 초과. IS25 Task 1 2위 0.4281.
- 개발셋: 단일 0.411 -> 2모델 0.424 -> 3모델 0.431 (+0.020). 테스트 0.4281과 혼동 금지.
- 다중 과제: macro-F1 0.406 -> 0.411, 소수 클래스 mAP 0.328 -> 0.316(하락).
- KL 분포 손실, 오디오 혼합 + 주석 드롭아웃 20% 증강(정확도 거의 불변, macro-F1·소수 클래스 개선, B).
- 12GB GPU 약 15시간은 **Whisper 동결 + 후단만 학습** 조건. LoRA 시간 근거가 아님(검증 정정).

## 검증 결과
수치 일치 A. 15 GPU시간을 LoRA 비용 근거로 쓰는 것은 불일치(A).

## 한벗 적용
소프트 라벨 + 3모델 앙상블의 비용 대비 근거. 논문 A 스택 7단계. [[topic-ser-performance-levers-2026-11]]

## 사용처
[[topic-ser-sota-benchmarks-2026-11]] · [[claim-research-1-paper-a-korean-ser-selective-prediction]]
