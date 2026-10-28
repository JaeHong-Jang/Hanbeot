---
title: "src-kyutai-2024-moshi"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "moshi", "speech-to-speech", "cc-by-4.0", "on-device"]
created: 2026-10-25T07:18:33.668Z
updated: 2026-10-25T07:18:33.668Z
sources: ["https://github.com/kyutai-labs/moshi", "https://arxiv.org/abs/2410.00037"]
links: ["topic-tech-voice-pipeline-latency-cost.md", "topic-tech-privacy-voice-data.md", "src-qwen-2025-omni-models.md", "claim-tech-4-voice-pipeline-architecture.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-kyutai-2024-moshi

# src-kyutai-2024-moshi

## 서지정보
Kyutai Labs, Moshi: speech-text foundation model for real-time dialogue. GitHub README + arXiv 2410.00037 (2024).

## URL
- https://github.com/kyutai-labs/moshi
- https://arxiv.org/abs/2410.00037

## 라이선스/상업 이용
- 가중치 **CC-BY 4.0**, 코드 MIT(Python) / Apache(Rust) — 구성요소별 라이선스 구분. 상업 이용 가능(출처 표기)

## 핵심 수치
- 이론 지연 160ms(Mimi 80ms 프레임 + 80ms acoustic delay), **L4 GPU 실측 최저 200ms** (자체 보고)
- 7B Temporal Transformer + Depth Transformer
- Mimi 코덱: 24kHz → 12.5Hz, 1.1kbps, 80ms 프레임
- PyTorch 실행 24GB GPU 메모리; macOS MLX 4/8-bit 양자화로 M3 MacBook Pro 로컬 실행 가능
- 지원 언어 미명시(영어 중심)

## 검증 결과
- 모두 등급 **A** (공식 README·논문과 일치)
- 주의: 코덱 지연과 대화 TTFA 구분. 클라우드 서버 필수라는 뜻은 아님(고사양 로컬 기기 가능)

## 한벗 적용 포인트
- 한국어 미지원(미명시)으로 MVP 부적합. S2S 지연 하한선(200ms) 참고치 → [[topic-tech-voice-pipeline-latency-cost]]
- "S2S LLM은 24GB VRAM급이므로 서버 필요"는 on-device 로드맵 서술 시 "팀 MVP 조건에서는 클라우드"로 한정([[topic-tech-privacy-voice-data]])
- 관련: [[src-qwen-2025-omni-models]], [[claim-tech-4-voice-pipeline-architecture]]

확인일: 2026-10-25

