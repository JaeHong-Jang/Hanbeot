---
title: "src-ma-2023-synthetic-tts-ser"
tags: ["scopus-2026-11", "paper-evidence", "ser", "synthetic-data", "tts", "layer-weighted", "grade-A"]
created: 2026-11-07T19:51:59.560Z
updated: 2026-11-07T19:51:59.560Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-performance-levers-2026-11.md", "claim-research-2-paper-b-personalization-synthetic.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-ma-2023-synthetic-tts-ser

# src-ma-2023-synthetic-tts-ser

## 서지
Ma 외 2023 (ICASSP 2024), Speech PTM + LLM + Emotional TTS, arXiv 2309.10294. 검증 A.

## 수치 (IEMOCAP, data2vec, 선형 헤드, RTX 3090)
- 기준선(마지막 층) WA 64.52 / UA 68.22.
- 합성 투입: 단순 혼합 64.24(-0.28), 적대 64.88, 전이 68.20, **커리큘럼 68.57(+4.05)**. UA 68.22 -> 70.86(+2.64).
- 층 가중합: WA 68.02(+3.50), UA 69.95(+1.73). 다층 + 합성 WA 68.85 / UA 71.89 (다층 대비 UA +1.94).
- 합성:실제 1:2가 이 실험의 최적, 더 많으면 하락. 한국어·다른 모델의 공통 최적값은 아님.
- GPT-4 문장 + Azure 감정 TTS, EmoDiff도 이득.

## 한벗 적용
합성은 투입 방식(커리큘럼/전이)에 따라 0 또는 +4. 논문 B 설계 근거. 연기 데이터 결과이며 자연 대화 일반화는 미확인. [[topic-ser-performance-levers-2026-11]]

## 사용처
[[claim-research-2-paper-b-personalization-synthetic]] · [[topic-ser-performance-levers-2026-11]]
