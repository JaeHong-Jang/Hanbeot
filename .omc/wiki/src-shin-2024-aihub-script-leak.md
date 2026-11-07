---
title: "src-shin-2024-aihub-script-leak"
tags: ["paper-evidence", "ser", "korean", "aihub", "leakage", "grade-C"]
created: 2026-11-07T11:37:47.574Z
updated: 2026-11-07T11:37:47.574Z
sources: ["research_notes/한벗 논문 보강/ser_korean_papers.md"]
links: ["topic-ser-papers-synthesis.md", "topic-data-korean-emotion-speech-datasets.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-shin-2024-aihub-script-leak

# src-shin-2024-aihub-script-leak

## 서지
Shin & Shin, 음성+텍스트 감정 분류, 정보처리학회 논문지 13(4), 2024 (KCI). https://koreascience.kr/article/JAKO202414157624833.pdf . AI Hub 감정 음성 453,365개, 7감정, 감정별 화자 40명, 서로 다른 문장은 15,767개뿐.

## 수치
- 음성 93.7%(영어 wav2vec2-large-robust, 한국어 미세조정 없음), 텍스트(KcELECTRA)만 94.5%, 결합 96.6%.
- 감정별 데이터 50개 → 500개(음성+텍스트): 60.5% → 96.6%.
- 텍스트만으로 94.5%가 나온 것은 같은 대본을 여러 화자가 읽어 문장 자체에 감정이 담긴 누수 때문으로 보임. 화자 분리 미보고 → 신뢰도 낮음.

## 한벗 적용
90%대 숫자는 연기·같은 대본 데이터의 결과이므로 서비스 성능으로 인용 금지. 같은 AI Hub 감정 음성을 쓸 때 문장·화자 분리 필수.

## 사용처
[[topic-ser-papers-synthesis]] · [[topic-data-korean-emotion-speech-datasets]]

