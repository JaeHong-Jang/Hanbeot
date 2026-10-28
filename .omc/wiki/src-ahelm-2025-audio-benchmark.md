---
title: "src-ahelm-2025-audio-benchmark"
tags: ["tech", "speech-emotion-recognition", "grade-A", "omni-llm", "benchmark", "gpt-4o-audio", "qwen-omni"]
created: 2026-10-25T07:13:19.547Z
updated: 2026-10-25T07:13:19.547Z
sources: ["https://arxiv.org/pdf/2508.21376", "https://arxiv.org/pdf/2503.21480", "https://arxiv.org/pdf/2601.10513"]
links: ["claim-tech-1-ser-model.md", "src-qwen-2025-omni-models.md", "topic-tech-speech-emotion-recognition.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-ahelm-2025-audio-benchmark

# src-ahelm-2025-audio-benchmark

## 서지정보
1. AHELM: A Holistic Evaluation of Audio-Language Models, arXiv 2508.21376 (2025).
2. OmniVox: omni-LLM zero-shot 감정 인식 평가, arXiv 2503.21480 (2025).
3. AEQ-Bench: omni-modal LLM 공감(empathy) 벤치마크, arXiv 2601.10513 (2026).

## URL
- https://arxiv.org/pdf/2508.21376
- https://arxiv.org/pdf/2503.21480
- https://arxiv.org/pdf/2601.10513

## 라이선스/상업 이용
학술 벤치마크 논문. 해당 없음.

## 핵심 수치
- AHELM emotion detection(MELD·MUStARD) mean win rate: Gemini 2.5 Pro **0.781** 1위; GPT-4o Audio(2024-12-17)·Qwen2.5-Omni 7B **0.656** 공동 2위 (Gemini 1.5 Pro, GPT-4o Transcribe+GPT-4o도 공동 2위에 포함)
- MELD audio subset: GPT-4o Audio **0.497**, Qwen2.5-Omni **0.491** — 지표는 **PEM**이며, 다른 논문의 WA와 직접 비교 불가
- OmniVox: GPT-4o audio 등 평가, Qwen2.5-Omni 미포함; 일부 omni 모델은 fine-tuned audio 모델과 경쟁 가능하거나 우수하다고도 보고
- AEQ-Bench는 공감 평가 벤치마크(감정 인식 정확도 벤치마크와 구분)

## 검증 결과
- 세 출처 모두 등급 **A** (Table A11, 모델·실험 목록, 초록 일치)
- **정정(C)**: 리서치 노트의 "Omni-LLM은 MELD 0.49~0.50으로 전용 SER 대비 이점 없음, late fusion이 비용·성능 모두 유리"는 AHELM PEM과 SenseVoice WA를 직접 비교한 것으로 **서로 다른 지표 간 우열 단정** — 비용·한국어 late fusion 우위 실험도 없음. 우선 수정 항목.

## 한벗 적용 포인트
- omni-LLM 단독으로 SER를 대체하지 않는 결정은 "지표 비교 불가 + 제어 가능성(SER 신호를 명시적으로 저장해야 함)" 근거로 재서술 → [[claim-tech-1-ser-model]]
- 관련: [[src-qwen-2025-omni-models]], [[topic-tech-speech-emotion-recognition]]

확인일: 2026-10-25

