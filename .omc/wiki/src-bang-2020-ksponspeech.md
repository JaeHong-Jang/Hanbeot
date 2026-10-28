---
title: "src-bang-2020-ksponspeech"
tags: ["paper-evidence", "stt", "grade-A", "korean"]
created: 2026-10-26T05:45:35.646Z
updated: 2026-10-26T05:45:35.646Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-bang-2020-ksponspeech

## 서지
Bang et al., 2020, "KsponSpeech: Korean Spontaneous Speech Corpus for ASR", Applied Sciences 10(19). https://www.mdpi.com/2076-3417/10/19/6936 . 설계서 [P4].

## 수치
- 약 969시간, 화자 2,000명, 한국어 대화.
- 간투사·반복·단편 태그가 주석에 포함.

## 검증 결과 (2026-10-26)
- 등급 A. 코퍼스 규모·태그 서술 일치.

## 한벗 적용
- 한국어 구어 STT 평가의 표준 코퍼스. CER 측정 시 간투사("음", "어")를 정답에 포함할지 이 태그 규칙으로 미리 정한다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
