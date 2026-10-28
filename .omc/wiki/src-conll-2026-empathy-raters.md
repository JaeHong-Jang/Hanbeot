---
title: "src-conll-2026-empathy-raters"
tags: ["tech", "empathetic-dialogue", "grade-A", "empathy", "llm-as-judge", "in-group-bias", "formulaic"]
created: 2026-10-25T07:21:27.322Z
updated: 2026-10-25T07:21:27.322Z
sources: ["https://aclanthology.org/2026.conll-main.21/", "https://arxiv.org/abs/2604.08479"]
links: ["claim-tech-7-dialogue-mode-strategy.md", "topic-tech-empathetic-dialogue.md", "src-ayers-2023-jama-chatbot-empathy.md", "src-wenger-2026-ai-empathy-paradox.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-conll-2026-empathy-raters

# src-conll-2026-empathy-raters

## 서지정보
1. CoNLL 2026 main paper 21: 인간 평가자 1,000명 대상 LLM vs 인간 공감 응답 평가.
2. UT Austin 2026 preprint: LLM 공감 응답의 담화 기능 수준 정형성(formulaic/templatic), arXiv 2604.08479.

## URL
- https://aclanthology.org/2026.conll-main.21/
- https://arxiv.org/abs/2604.08479

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치
- CoNLL 2026: 인간 평가자 **1,000명**; LLM 응답이 감정·평가자 전반에서 유의하게 더 공감적; 인간 평가자와 LLM-as-judge 모두 **자기 그룹 응답을 더 호의적으로 평가(in-group bias)**. 비교 모델은 GPT-4·Llama2·Gemini 1.0·Mixtral (2026 최신 모델 전체 성능 아님)
- 2604.08479: LLM 공감 응답은 담화 기능 수준에서 고도로 정형화

## 검증 결과
- 두 주장 모두 등급 **A**

## 한벗 적용 포인트
- **평가 프로토콜 함의**: LLM-as-judge만 쓰면 LLM 응답을 편애 → 인간 평가 반드시 병행 → [[claim-tech-7-dialogue-mode-strategy]]
- **정형화 대응**: SER·메모리에서 가져온 구체적 맥락(specificity)을 응답에 주입하는 것이 한벗의 차별점 → [[topic-tech-empathetic-dialogue]]
- 관련: [[src-ayers-2023-jama-chatbot-empathy]], [[src-wenger-2026-ai-empathy-paradox]]

확인일: 2026-10-25

