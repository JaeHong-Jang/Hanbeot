---
title: "src-chen-2025-listen"
tags: ["paper-evidence", "ser", "audio-llm", "grade-B"]
created: 2026-11-07T11:37:42.385Z
updated: 2026-11-07T11:37:42.385Z
sources: ["research_notes/한벗 논문 보강/ser_papers_english.md", "research_notes/한벗 논문 보강/ser_papers_synthesis.md"]
links: ["topic-ser-papers-synthesis.md", "topic-app-impl-ser-cues.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-chen-2025-listen

# src-chen-2025-listen

## 서지
Chen et al., "LISTEN: Do audio LLMs actually listen for emotion?", arXiv 2510.10444 (프리프린트, 2025), 오하이오주립대·펜실베이니아주립대. 영어 문항 7,939개를 4조건(중립 문장, 일치, 불일치 등)으로 구성.

## 수치
- Gemini, Qwen-Omni 등 음성 LLM은 목소리보다 말의 내용으로 판단. 단서가 없으면 대부분 "중립".
- 말과 목소리가 다른 조건에서 텍스트를 더하면 34.0% → 19.8%로 하락. 전체 평균 최고 35.7%.
- 같은 종합 노트: VoxEmo(arXiv 2603.08936)는 35개 데이터·15개 언어에서 무학습 음성 LLM이 30개 데이터 모두 전용 모델보다 낮음. 질문 문구만 바꿔도 최대 49점 차이.

## 한벗 적용
음성 LLM 하나로 대체하지 않고 전용 SER + Claude 구조 유지, 말과 목소리가 어긋날 때 확인 질문(제안).

## 사용처
[[topic-ser-papers-synthesis]] · [[topic-app-impl-ser-cues]]

