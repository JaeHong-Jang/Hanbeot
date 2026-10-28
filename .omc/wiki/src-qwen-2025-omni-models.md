---
title: "src-qwen-2025-omni-models"
tags: ["tech", "speech-emotion-recognition", "voice-pipeline-latency-cost", "grade-A", "qwen-omni", "speech-to-speech", "apache-2.0", "korean"]
created: 2026-10-25T07:13:20.919Z
updated: 2026-10-25T07:13:20.919Z
sources: ["https://arxiv.org/abs/2509.17765", "https://huggingface.co/Qwen/Qwen2.5-Omni-7B"]
links: ["src-salesforce-2026-voice-agent-tutorial.md", "claim-tech-4-voice-pipeline-architecture.md", "src-ahelm-2025-audio-benchmark.md", "topic-tech-voice-pipeline-latency-cost.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-qwen-2025-omni-models

# src-qwen-2025-omni-models

## 서지정보
1. Qwen3-Omni Technical Report, arXiv 2509.17765 (2025-09).
2. Qwen2.5-Omni-7B 공식 HF 모델 카드 (벤더 자체 보고).

## URL
- https://arxiv.org/abs/2509.17765
- https://huggingface.co/Qwen/Qwen2.5-Omni-7B

## 라이선스/상업 이용
- Qwen3-Omni 30B-A3B 계열 **Apache 2.0** (기술보고서 명시, 상업 이용 가능)

## 핵심 수치
- Qwen3-Omni: 음성 이해 19개 언어, 음성 생성 10개 언어(**한국어 포함**); cold-start **이론** end-to-end first-packet latency **234ms** (실서비스 실측 아님)
- Qwen2.5-Omni-7B 자체 보고 MELD SER **0.570** (Qwen2-Audio 0.553) — 공식 카드에서도 확인
- DashScope Realtime(cloud) audio-to-audio 실측 약 702ms → [[src-salesforce-2026-voice-agent-tutorial]]

## 검증 결과
- 언어 수, Apache 2.0, 234ms, MELD 0.570 모두 등급 **A**
- 주의: 234ms는 이론값. 입력·출력 언어 지원과 한국어 품질은 별개
- **C**: "Qwen3-Omni가 자체 호스팅 S2S의 유일한 open 후보"는 입증 자료 없음 → "검토한 후보 중"으로 한정

## 한벗 적용 포인트
- 자체 호스팅 speech-to-speech 실험 후보(30B-A3B 서빙 GPU 필요, vLLM 경험 활용). MVP 1차는 cascade 유지 → [[claim-tech-4-voice-pipeline-architecture]]
- 관련: [[src-ahelm-2025-audio-benchmark]], [[topic-tech-voice-pipeline-latency-cost]]

확인일: 2026-10-25

