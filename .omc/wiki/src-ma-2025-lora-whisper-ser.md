---
title: "src-ma-2025-lora-whisper-ser"
tags: ["paper-evidence", "ser", "whisper", "lora", "grade-A"]
created: 2026-11-07T11:36:22.063Z
updated: 2026-11-07T11:36:22.063Z
sources: ["research_notes/회의 후속 조사/CD_Whisper_스펙트로그램.md"]
links: ["topic-ser-model-comparison-whisper-spectrogram.md", "claim-tech-1-ser-model.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-ma-2025-lora-whisper-ser

# src-ma-2025-lora-whisper-ser

## 서지
Ma, Sang, Li, "Behind the Scenes: Mechanistic Interpretability of LoRA-adapted Whisper for Speech Emotion Recognition", arXiv 2509.08454 (2025), ICASSP 2026 채택.

## 수치
- IEMOCAP 4감정, 화자 독립 10-fold, Whisper 인코더 frozen vs LoRA(r=32).
- Whisper-large-v2: LoRA UAR 0.774 / frozen 0.582. large-v3: LoRA 0.767 / frozen 0.433.
- K 노트 정리: Whisper 고정 43~64%(11/7 정정, 기존 43~58%), LoRA 77%. EmoBox 73.5%가 층 가중 평균 덕분이라는 추정은 철회(원문상 마지막 층만 사용).

## 한벗 적용
frozen + 마지막 층은 크게 떨어질 수 있어 LoRA 미세조정이 사실상 필요. 한국어 감정 평가는 없음 → W3에서 emotion2vec+ vs Whisper 고정 vs Whisper+LoRA 비교 제안(미확정).

## 사용처
[[topic-ser-model-comparison-whisper-spectrogram]] · [[claim-tech-1-ser-model]]

