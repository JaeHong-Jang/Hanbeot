---
title: "src-lee-2024-llm-empathy"
tags: ["tech", "empathetic-dialogue", "grade-A", "empathy", "llm-vs-human", "microsoft-research", "paper-evidence", "ser"]
created: 2026-10-25T07:21:22.312Z
updated: 2026-10-26T05:52:14.127Z
sources: ["https://arxiv.org/pdf/2403.18148"]
links: ["claim-tech-7-dialogue-mode-strategy.md", "src-ayers-2023-jama-chatbot-empathy.md", "topic-tech-empathetic-dialogue.md", "topic-app-paper-evidence.md", "topic-app-impl-dialogue-tts.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-lee-2024-llm-empathy

# src-lee-2024-llm-empathy

## 서지정보
Lee et al. (Microsoft Research), "Large Language Models Produce Responses Perceived to be Empathic", ACII 2024. arXiv 2403.18148.

## URL
- https://arxiv.org/pdf/2403.18148

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치
- 두 연구(N=192, N=202)에서 인간 평가자가 GPT-4 Turbo, Llama2, Mistral 응답과 인간 작성 응답을 평가 → LLM 응답이 **일관되게 더 공감적**으로 평가 (연구 상황의 지각된 공감)

## 검증 결과
- 등급 **A** (원 논문 초록과 일치)

## 한벗 적용 포인트
- 오픈 모델(Llama2, Mistral)도 지각된 공감에서 인간을 상회 → 비용 절감을 위해 LLM을 바꿔도 공감 기본선은 유지될 가능성 → [[claim-tech-7-dialogue-mode-strategy]]
- 관련: [[src-ayers-2023-jama-chatbot-empathy]], [[topic-tech-empathetic-dialogue]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:52:14.127Z)

## 2026-10-26 논문 보강 (설계서 [P53])
- 수치: N=192, N=202 두 실험에서 LLM 응답이 인간 작성 응답보다 일관되게 더 공감적으로 "지각"됨(영어).
- 적용: 공감 기본선이 높다는 근거이나 지각된 공감일 뿐 상담 효과가 아니다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-dialogue-tts]]
