---
title: "src-chen-2022-wavlm"
tags: ["paper-evidence", "ser", "wavlm", "spectrogram", "grade-A"]
created: 2026-11-07T11:36:25.003Z
updated: 2026-11-07T11:36:25.003Z
sources: ["research_notes/한벗 논문 보강/ser_papers_english.md", "research_notes/회의 후속 조사/CD_Whisper_스펙트로그램.md"]
links: ["topic-ser-model-comparison-whisper-spectrogram.md", "topic-ser-papers-synthesis.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-chen-2022-wavlm

# src-chen-2022-wavlm

## 서지
Chen et al., "WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing", IEEE JSTSP 16(6):1505-1518, 2022. doi 10.1109/JSTSP.2022.3188113, arXiv 2110.13900. Microsoft.

## 수치
- 영어 9만 4천 시간 사전학습, 학습 음성 20%에 잡음·다른 화자 혼합. 평가는 SUPERB.
- SUPERB 감정(IEMOCAP 4감정, 세션 5-fold): FBANK(log-mel) 35.39% vs wav2vec 2.0 Base 63.4% vs HuBERT Large 67.6% vs WavLM Large 70.62%.
- 같은 분류기에 입력만 바꾼 가장 공정한 비교.

## 한벗 적용
스펙트로그램 그대로는 절반 수준이라 메인 모델 부적합(보조 감지기로만). WavLM은 emotion2vec+의 비교 대상.

## 사용처
[[topic-ser-model-comparison-whisper-spectrogram]] · [[topic-ser-papers-synthesis]]

