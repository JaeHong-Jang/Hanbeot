---
title: "src-esc-eval-2024-frameworks"
tags: ["tech", "empathetic-dialogue", "grade-A", "evaluation", "esc-eval", "feel", "heart", "esc-skills", "llm-as-judge"]
created: 2026-10-25T07:21:41.088Z
updated: 2026-10-25T07:42:07.000Z
sources: ["https://www.arxiv.org/pdf/2406.14952", "https://arxiv.org/pdf/2403.15699v1", "https://arxiv.org/pdf/2601.19922", "https://arxiv.org/pdf/2605.27908"]
links: ["claim-tech-7-dialogue-mode-strategy.md", "src-arxiv-2026-heart-benchmark.md", "src-conll-2026-empathy-raters.md", "src-kang-2024-esconv-llm-limits.md", "topic-tech-empathetic-dialogue.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-esc-eval-2024-frameworks

# src-esc-eval-2024-frameworks

## 서지정보
Emotional support 대화 평가 프레임워크 4편:
1. ESC-Eval, arXiv 2406.14952 (2024) — 역할놀이 에이전트 + **수동 대화 평가**
2. FEEL, arXiv 2403.15699 (2024) — LLM-as-judge, 기존 자동 지표는 인간 판단과 상관 낮음
3. HEART, arXiv 2601.19922 (2026-01 제출, 2월 개정) — ESConv 파생 multi-turn, 5축: Human Alignment, Empathic Responsiveness, Attunement, Resonance, Task-Following
4. ESC-Skills, arXiv 2605.27908 (2026-05) — ESConv test 100개, GPT-5.4 judge + 인간 주석자 3명(empathy, helpfulness)

## URL
- https://www.arxiv.org/pdf/2406.14952
- https://arxiv.org/pdf/2403.15699v1
- https://arxiv.org/pdf/2601.19922
- https://arxiv.org/pdf/2605.27908

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치/결론
- FEEL: BLEU 등 자동 지표는 인간 판단과 상관 낮음 → LLM 평가자 사용
- ESC-Eval: 순수 LLM-as-judge가 아닌 역할놀이 + 수동 평가 (리서치 노트 요약 보완)
- HEART 5축, ESC-Skills 100 케이스·judge+인간 3명 구성

## 검증 결과
- 4편 모두 등급 **A**

## 한벗 적용 포인트
- MVP 공감 평가 프로토콜: 자동 지표 대신 **LLM-as-judge + 소규모 인간 평가** (ESC-Skills식 100케이스·주석자 3명 규모가 학생 팀에 현실적) + HEART 5축 중 Empathic Responsiveness·Attunement 채택 → [[claim-tech-7-dialogue-mode-strategy]]
- in-group bias([[src-conll-2026-empathy-raters]]) 때문에 인간 평가 필수 → [[topic-tech-empathetic-dialogue]]
- 관련: [[src-kang-2024-esconv-llm-limits]]

확인일: 2026-10-25

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-arxiv-2026-heart-benchmark]]
