---
title: "src-lei-2024-instructerc"
tags: ["paper-evidence", "erc", "context-window", "grade-A"]
created: 2026-11-07T11:36:10.916Z
updated: 2026-11-07T11:36:10.916Z
sources: ["research_notes/회의 후속 조사/AB_맥락_개인화.md"]
links: ["topic-ser-context-personalization.md", "topic-ser-model-comparison-whisper-spectrogram.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-lei-2024-instructerc

# src-lei-2024-instructerc

## 서지
Lei et al., "InstructERC: Reforming Emotion Recognition in Conversation with Multi-task Retrieval-based LLMs", arXiv 2309.11911 (v6 2024). Llama2-7B + LoRA, 지시문 + 과거 w턴 + 유사 예시 검색 + 화자 식별 보조과제.

## 수치
- 창 1→5→12→20턴: IEMOCAP 56.12→68.65→71.39→71.01, MELD 65.91→66.97→69.15→68.75.
- 12턴 최적, 20턴 소폭 하락. 저자도 짧은 대화(MELD 평균 6~7턴)는 길게 넣으면 손해라고 함.
- w턴은 양쪽 화자 발화를 합산해 센다 (K 노트 확인): 6~10턴 ≈ 3~5왕복.

## 한벗 적용
기본 6~10턴, W3에 0/2/6/10턴 비교 실험 제안(미확정). 2~3턴은 최소선.

## 사용처
[[topic-ser-context-personalization]] · [[topic-ser-model-comparison-whisper-spectrogram]]

