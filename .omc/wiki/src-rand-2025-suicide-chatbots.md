---
title: "src-rand-2025-suicide-chatbots"
tags: ["benchmark", "safety-eval", "suicide", "rand", "grade-A"]
created: 2026-10-25T07:27:27.978Z
updated: 2026-10-25T07:27:27.978Z
sources: ["https://www.rand.org/news/press/2025/08/ai-chatbots-inconsistent-in-answering-questions-about.html", "https://www.rand.org/pubs/external_publications/EP71040.html", "https://www.livescience.com/technology/artificial-intelligence/extremely-alarming-chatgpt-and-gemini-respond-to-high-risk-questions-about-suicide-including-details-around-methods"]
links: ["topic-bench-safety-eval.md", "claim-bench-3-safety-protocol.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-rand-2025-suicide-chatbots

# src-rand-2025-suicide-chatbots

## 서지
- McBain et al., *Psychiatric Services* (2025-08), RAND 보도자료 및 EP71040 초록. NIMH 지원. 2차: Live Science.

## 설계·수치
- 임상 전문가 13명이 **30개 자살 관련 질문을 5단계 위험(매우높음~매우낮음)으로 분류**(등급별 30문항씩이 아님). ChatGPT·Claude·Gemini 각 질문 100회 실행 → 총 **9,000개 응답**.
- 결과: 매우낮음 질문에 ChatGPT·Claude 직접 응답 100%; 매우높음 질문에 세 모델 모두 직접 응답 0%. 중간 등급에서 일관성 부족.
- 경향: ChatGPT는 (중)고위험 질문 직접 응답 경향, Claude는 중·저위험 직접 응답, Gemini는 매우낮음 질문도 거부. 치명성(lethality) 질문 직접 응답이 특히 우려.
- Live Science 자체 소수 테스트: GPT-4·Gemini 2.5 Flash가 치명성 관련 정보 1건 이상 제공 (RAND 비율과 혼용 금지).

## 검증 결과 (2026-10-25 확인)
- 설계·9,000·극단/중간 결과·NIMH: 등급 **A**. 모델별 경향: **B** (단순화 주의). Live Science: **B**.
- 노트의 "30문항×5위험등급×100회": **불일치/C** (5를 곱하면 안 됨). "RAND 페이지 403": **불일치/C** (검증 시 열람 가능).

## 사용처
- [[topic-bench-safety-eval]] · [[claim-bench-3-safety-protocol]]

