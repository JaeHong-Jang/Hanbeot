---
title: "src-openai-2026-realtime-api-pricing"
tags: ["benchmark", "openai", "voice-cost", "pricing", "api", "grade-A"]
created: 2026-10-25T07:18:37.619Z
updated: 2026-10-25T07:18:37.619Z
sources: ["https://developers.openai.com/api/docs/models/gpt-realtime-2.1", "https://platform.openai.com/pricing"]
links: ["bench-chatgpt-voice.md", "claim-bench-6-pricing-arpmau.md", "topic-bench-business-metrics.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-openai-2026-realtime-api-pricing

# src-openai-2026-realtime-api-pricing

## 서지
- OpenAI 공식 모델 문서 gpt-realtime-2.1 및 공식 가격표 (2026-10 조회).

## 수치
- gpt-realtime-2.1 오디오 토큰: 입력 **$32/백만**, 출력 **$64/백만**.
- gpt-realtime-2.1-mini 오디오: 입력 $10/백만, 출력 $20/백만. (텍스트 토큰 가격과 구분)

## 검증 결과 (2026-10-25 확인)
- 등급 **A** (공식 문서 확인). 노트의 "[2차출처·상충]" 표시는 공식 확인으로 상향.
- 분당 환산($0.048–0.23/분, Webscraft): **C** — 입력·출력 발화 비중·무음 과금·부가 추론비가 빠져 재현 불가.

## 사용처
- [[bench-chatgpt-voice]] · [[claim-bench-6-pricing-arpmau]] · [[topic-bench-business-metrics]]

