---
title: "src-wang-2023-speech-emotion-diarization"
tags: ["paper-evidence", "ser", "diarization", "mixed-emotion", "grade-A"]
created: 2026-11-07T11:36:27.375Z
updated: 2026-11-07T11:36:27.375Z
sources: ["research_notes/회의 후속 조사/GH_라벨기준_복합감정.md"]
links: ["topic-ser-label-scheme-and-fusion.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-wang-2023-speech-emotion-diarization

# src-wang-2023-speech-emotion-diarization

## 서지
Wang, Ravanelli, Yacoubi, "Speech Emotion Diarization: Which Emotion Appears When?", IEEE ASRU 2023 (arXiv 확인). 원문 확인.

## 수치
- 감정을 시간 경계가 있는 사건으로 보고 프레임(약 20ms) 단위로 분류. 새 지표 EDER. 비연기 데이터 ZED 공개: 180발화, 17분, 화자 73명(20~70세), 프레임 단위 평가자 Fleiss κ 0.81.
- EDER: wav2vec2 36.2%, HuBERT 34.5%, WavLM-large 30.2%(최고).
- 같은 노트 AVEC 2016(RECOLA): 음성 단독 CCC 각성 .796(개발)/.648(시험), 정서가 .455/.375.

## 한벗 적용
복합·전이 감정은 아직 30% 오류 → 2~3초 구간별 추적, 긍정/부정은 텍스트가 결정하는 제안(미확정). 한국어는 KEMDy 대화를 이어 붙여 합성 전이 데이터를 만드는 방법 가능.

## 사용처
[[topic-ser-label-scheme-and-fusion]] · [[topic-meeting-followup-ser-2026-11]]

