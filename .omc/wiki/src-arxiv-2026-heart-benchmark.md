---
title: "src-arxiv-2026-heart-benchmark"
tags: ["benchmark", "empathy-dialogue", "heart", "safety", "grade-A", "paper-evidence", "crisis"]
created: 2026-10-25T07:26:02.354Z
updated: 2026-10-26T05:52:12.381Z
sources: ["https://arxiv.org/pdf/2601.19922", "https://arxiv.org/html/2601.19922v2"]
links: ["src-esc-eval-2024-frameworks.md", "topic-bench-empathy-dialogue.md", "topic-bench-safety-eval.md", "topic-app-paper-evidence.md", "topic-app-impl-safety-crisis.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-arxiv-2026-heart-benchmark

# src-arxiv-2026-heart-benchmark

## 서지
- *HEART* (arXiv 2601.19922, 2026-01), ESConv 기반 인간·LLM 공통 평가 벤치마크.

## 사실
- 280개 regular + 20개 adversarial 항목 (supporter turn 평가).
- 고부담 정서 상황을 다루지만 **명시적 자해 계획 등 safety-critical 내용은 제외** → 위기 대응 벤치마크가 아님.

## 검증 결과 (2026-10-25 확인)
- 구성(280+20)·ESConv 기반: 등급 **A**. "280개 = 고위험 supporter turn": **불일치/C** (안전 임계 항목 제외).

## 사용처
- [[topic-bench-empathy-dialogue]] · [[topic-bench-safety-eval]]

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-esc-eval-2024-frameworks]]

---

## Update (2026-10-26T05:52:12.381Z)

## 2026-10-26 논문 보강 (설계서 [P52])
- 수치: 280 regular + 20 adversarial 항목, ESConv 기반. 명시적 자해 계획 등 안전 임계 항목은 제외. 영어.
- 적용: 공감 품질 평가용이다. 위기 평가로 쓰지 않는다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-safety-crisis]]
