---
title: "src-kim-2024-dementia-ser"
tags: ["paper-evidence", "ser", "elderly", "korean", "grade-A"]
created: 2026-11-07T11:36:05.902Z
updated: 2026-11-07T11:36:05.902Z
sources: ["research_notes/회의 후속 조사/CD_Whisper_스펙트로그램.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-ser-model-comparison-whisper-spectrogram.md", "topic-ser-label-scheme-and-fusion.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-kim-2024-dementia-ser

# src-kim-2024-dementia-ser

## 서지
Kim, Yi, Won, "Speech Emotion Recognition in People at High Risk of Dementia", Dementia and Neurocognitive Disorders 23(3):146-160, 2024. doi 10.12779/dnd.2024.23.3.146. 원문 확인(회의 후속 조사 D7).

## 수치
- 독거노인 133명(평균 80.6세)이 컴패니언 로봇에게 한 실제 발화 6,899개. wav2vec2 특징 + CNN-LSTM-어텐션, 텍스트는 KPFBERT.
- 테스트 정확도: 음성만 6감정 51.4%, 음성만 3감정 64.7%, 텍스트 3감정 79.8%, 텍스트→음성 2단계 6감정 69.3%. 사람 라벨러 일치도 κ 0.70.

## 한벗 적용
한벗과 가장 비슷한 조건의 실제 숫자. "목소리만으로 70~80%"는 근거 없음 → 목표를 "3감정 + 텍스트 결합 약 70%"로 재정의하자는 제안(미확정). 단 대상이 고령층이라 Wiki 1차 타깃(대학생)과의 관계는 팀 확인 필요.

## 사용처
[[topic-meeting-followup-ser-2026-11]] · [[topic-ser-model-comparison-whisper-spectrogram]] · [[topic-ser-label-scheme-and-fusion]]

