---
title: "src-lee-2026-elderly-whisper-asr"
tags: ["paper-evidence", "asr", "elderly", "whisper", "korean", "grade-A"]
created: 2026-11-07T11:37:34.475Z
updated: 2026-11-07T11:37:34.475Z
sources: ["research_notes/회의 후속 조사/CD_Whisper_스펙트로그램.md"]
links: ["topic-ser-model-comparison-whisper-spectrogram.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-lee-2026-elderly-whisper-asr

# src-lee-2026-elderly-whisper-asr

## 서지
Lee, Hong, Lee, Choi, Kim, Han, Kim, "Elderly-Contextual Data Augmentation via Speech Synthesis for Elderly ASR", arXiv 2604.24770 (2026, IEEE 투고). 한국 75세 이상 104명 VOTE400(약 10시간 사용).

## 수치
- 한국어 노인 Whisper CER 기준선: Small 12.5, Medium 8.3, Large-v2 6.1, Large-v3 5.5.
- LLM 문장 변형 + 노인 목소리 TTS 증강 후 Large-v3 2.7(약 51% 감소).
- 기준선이 제로샷인지 미세조정인지 불명확(확인 필요).

## 한벗 적용
한국어 노인 음성 Whisper CER의 유일한 수치. Whisper 인코더 비교(W3)와 RTZR CER 평가 기준선 참고. 고령층 대상 수치라 1차 타깃과의 관계는 팀 확인 필요.

## 사용처
[[topic-ser-model-comparison-whisper-spectrogram]] · [[topic-meeting-followup-ser-2026-11]]

