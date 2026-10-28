---
title: "src-stepfun-2025-step-audio-r1"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "speech-to-speech", "step-audio", "glm-4-voice"]
created: 2026-10-25T07:18:36.186Z
updated: 2026-10-25T07:18:36.186Z
sources: ["https://arxiv.org/pdf/2511.15848", "https://arxiv.org/pdf/2508.07375"]
links: ["claim-tech-5-latency-target.md", "topic-tech-voice-pipeline-latency-cost.md", "src-kyutai-2024-moshi.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-stepfun-2025-step-audio-r1

# src-stepfun-2025-step-audio-r1

## 서지정보
1. StepFun, Step-Audio-R1 Technical Report, arXiv 2511.15848 (2025-11). 벤더 자체 보고.
2. TurnGuide (GLM-4-Voice 지연 분석 포함), arXiv 2508.07375 (2025).

## URL
- https://arxiv.org/pdf/2511.15848
- https://arxiv.org/pdf/2508.07375

## 라이선스/상업 이용
모델 라이선스 미확인(Gaps). 한국어 지원도 미확인.

## 핵심 수치
- Step-Audio-R1 Realtime: Big Bench Audio speech-to-speech first-packet latency **0.92초** (Table 2, A)
- GLM-4-Voice: e2e 지연 = speech tokenization + LLM + speech decoding 3요소(확인); "streaming thoughts" 문구와 측정값 미공개 진술은 **C**

## 검증 결과
- Step-Audio-R1 0.92s: 등급 **A**. GLM-4-Voice 서술: **C**

## 한벗 적용 포인트
- S2S 모델이라도 reasoning 포함 시 first-packet이 0.9초대 → "S2S = 무조건 빠름"이 아님. cascade 목표 1초와 큰 차이 없음 → [[claim-tech-5-latency-target]]
- 관련: [[topic-tech-voice-pipeline-latency-cost]], [[src-kyutai-2024-moshi]]

확인일: 2026-10-25

