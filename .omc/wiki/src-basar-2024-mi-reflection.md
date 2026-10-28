---
title: "src-basar-2024-mi-reflection"
tags: ["tech", "empathetic-dialogue", "grade-A", "motivational-interviewing", "reflective-listening", "gpt-4", "prompting"]
created: 2026-10-25T07:21:44.346Z
updated: 2026-10-25T07:21:44.346Z
sources: ["https://aclanthology.org/2024.hucllm-1.4.pdf", "https://aclanthology.org/2025.coling-main.135/", "https://pure.uva.nl/ws/files/267190166/2025.coling-main.135.pdf"]
links: ["claim-tech-7-dialogue-mode-strategy.md", "topic-tech-empathetic-dialogue.md", "src-kang-2024-esconv-llm-limits.md", "src-esc-eval-2024-frameworks.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-basar-2024-mi-reflection

# src-basar-2024-mi-reflection

## 서지정보
1. Başar et al., "How Well Can Large Language Models Reflect? A Human Evaluation of LLM-generated Reflections for Motivational Interviewing", ACL 2024 HuCLLM 워크숍. DOI 10.18653/v1/2024.hucllm-1.4.
2. 후속: COLING 2025 main 135 (GPT-4, Llama-2, BLOOM; 컨텍스트 길이·MI 전략 통합 효과).
3. Xie et al. ACL Findings 2024 (전문가 시연으로부터 자연어 귀납 규칙으로 MI 전략 학습): 리서치 노트 출처(Sotaro 목록) 접근 실패 → **C**, Anthology ID 직접 제시 필요.

## URL
- https://aclanthology.org/2024.hucllm-1.4.pdf
- https://aclanthology.org/2025.coling-main.135/
- https://pure.uva.nl/ws/files/267190166/2025.coling-main.135.pdf

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치/결론
- Başar 2024: GPT-4, BLOOM, FLAN-T5로 MI reflection 생성(금연·성건강 챗봇 실데이터), 4기준(appropriateness, specificity, naturalness, engagement) + 인간 작성 reflection과 ranking 비교 → **GPT-4 reflection은 인간 작성과 comparable quality**
- COLING 2025: 인간 치료사 수준 가능성 있으나 내용 분석상 과제 잔존 (임상적 치료 효과 검증 아님)

## 검증 결과
- Başar 4기준·데이터·모델·DOI·결론: 등급 **A**. COLING 2025: **A**. Xie: **C**
- **C**: "MI reflection 평가로 인간 상담사 수준의 전반적 공감·상담 능력 가능"은 특정 reflection 품질 비교를 상담사 전체 능력·임상 효과로 확대한 것 → 금지. "reflection 문장 품질이 comparable"로 한정

## 한벗 적용 포인트
- "그냥 들어주기" 모드의 핵심 프롬프트 = MI reflection(simple/complex reflection) 고정. GPT-4급 모델이면 reflection 품질은 확보 가능 → [[claim-tech-7-dialogue-mode-strategy]]
- 평가 4기준(appropriateness, specificity, naturalness, engagement)을 한벗 MVP 인간 평가 항목으로 채택 → [[topic-tech-empathetic-dialogue]]
- 관련: [[src-kang-2024-esconv-llm-limits]], [[src-esc-eval-2024-frameworks]]

확인일: 2026-10-25

