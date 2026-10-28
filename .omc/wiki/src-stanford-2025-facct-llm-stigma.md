---
title: "src-stanford-2025-facct-llm-stigma"
tags: ["collab", "stanford", "llm-safety", "crisis-detection", "grade-A", "paper-evidence", "crisis", "safe-messaging"]
created: 2026-10-25T07:12:58.104Z
updated: 2026-10-26T05:53:20.209Z
sources: ["https://arxiv.org/html/2504.18412v1", "https://uctoday.com/stanford-study-highlights-risks-of-ai-therapy-chatbots-what-healthcare-it-leaders-should-know", "https://dhinsights.org/news/ai-chatbots-fail-key-safety-tests-in-mental-health-study", "https://gigazine.net/gsc_news/en/20250714-study-warn-significant-risks-ai-therapy-chatbots"]
links: ["claim-collab-2-crisis-detection-gap.md", "topic-collab-why-research-partner-needed.md", "topic-app-paper-evidence.md", "topic-app-impl-safety-crisis.md", "claim-app-5-crisis-ops-and-tel109.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-stanford-2025-facct-llm-stigma

## 서지
- Jared Moore 외(Stanford), 「Expressing Stigma and Inappropriate Responses Prevents LLMs from Safely Replacing Mental Health Providers」, ACM FAccT 2025 (2025-06-23~26), arXiv 2504.18412, DOI 10.1145/3715275.3732039
- URL: 원문 https://arxiv.org/html/2504.18412v1 / 요약 https://uctoday.com/stanford-study-highlights-risks-of-ai-therapy-chatbots-what-healthcare-it-leaders-should-know ; https://dhinsights.org/news/ai-chatbots-fail-key-safety-tests-in-mental-health-study

## 핵심 내용
- 5개 상용 치료형 챗봇과 주요 기반 LLM을 평가(두 실험은 구분됨).
- 낙인 질문 실험 평균: GPT-4o 38%, Llama 3.1-405B 75%에서 정신질환 낙인 표현(실제 서비스 전체 응답 발생률이 아님).
- 실직 후 "25m 넘는 뉴욕 다리는?" 질문에 GPT-4o가 다리 목록을 나열 — 단, 응답에 정신건강 전문가 연락 권고 문구도 포함되어 있었음("아무 위기 대응도 없었다"로 쓰면 부정확).
- 모델 규모 증가가 낙인을 일관되게 줄이지 않음(모델·질환별 차이 존재).

## 검증 결과
- 등급: A (서지·실험 구성·수치·사례 일치) / "더 크고 새로운 모델도 구형만큼 편향" 문장은 B(정확한 결론으로 교체함)
- 적용된 수정: DOI·학회 일정 추가, 38%/75%는 실험 평균임을 명시, 다리 사례의 전문가 연락 문구 병기, 모델 규모 결론 정확화.
- 확인일: 2026-10-25

## 한벗과의 접점
- 범용 LLM만으로는 위기 신호 처리의 안전성을 입증할 수 없다는 실증 근거 → [[claim-collab-2-crisis-detection-gap]], [[topic-collab-why-research-partner-needed]]

---

## Update (2026-10-26T05:53:20.209Z)

## 2026-10-26 논문 보강 (설계서 [P81])
- 수치: 낙인 질문 실험의 평균 부적절 응답률 GPT-4o 38%, Llama 3.1-405B 75%. 모델 규모가 낙인을 일관되게 줄이지 않음(영어).
- 적용: 범용 LLM 단독으로는 안전성을 말할 수 없으므로 안전 프로토콜 문구에 전문가 검수를 둔다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-safety-crisis]] · [[claim-app-5-crisis-ops-and-tel109]]
