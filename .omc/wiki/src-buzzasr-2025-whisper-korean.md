---
title: "src-buzzasr-2025-whisper-korean"
tags: ["tech", "voice-pipeline-latency-cost", "privacy-voice-data", "grade-A", "stt", "whisper", "korean", "on-device"]
created: 2026-10-25T07:18:46.982Z
updated: 2026-10-25T07:18:46.982Z
sources: ["https://huggingface.co/BuzzASR/korean", "https://huggingface.co/royshilkrot/whisper-large-v3-turbo-korean-ggml", "https://arxiv.org/pdf/2410.18444", "https://friendli.ai/models/openai/whisper-large-v3"]
links: ["claim-tech-3-stt-tts-vendors.md", "topic-tech-privacy-voice-data.md", "src-rtzr-2026-korean-stt-benchmark.md", "topic-tech-voice-pipeline-latency-cost.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-buzzasr-2025-whisper-korean

# src-buzzasr-2025-whisper-korean

## 서지정보
1. BuzzASR/korean HF 모델 카드 (Whisper-large-v3 한국어 fine-tune, 벤더 보고)
2. royshilkrot/whisper-large-v3-turbo-korean-ggml (whisper.cpp용 변환 모델)
3. 한국어 기상 도메인 ASR 평가 논문, arXiv 2410.18444 (2024)
4. Friendli whisper-large-v3 모델 페이지 (large-v2 대비 개선 인용)

## URL
- https://huggingface.co/BuzzASR/korean
- https://huggingface.co/royshilkrot/whisper-large-v3-turbo-korean-ggml
- https://arxiv.org/pdf/2410.18444
- https://friendli.ai/models/openai/whisper-large-v3

## 라이선스/상업 이용
- Whisper 원본 MIT. fine-tune 모델·ggml 변환 모델의 개별 라이선스는 카드에서 확인 필요(미확인)

## 핵심 수치
- Whisper-large-v3 zero-shot 한국어 **combined normalized CER 5.72%**(FLEURS + Common Voice 25), BuzzASR fine-tuned **4.61%** (A, 벤더 보고)
- whisper.cpp용 한국어 ggml 변환 모델 공개 → 로컬 STT 가능 (A; 실제 기기 속도·정확도 검증은 별개)
- 기상 도메인 연구는 Whisper large-v2까지 평가, CER + space-normalized WER 사용 (A)
- large-v3가 large-v2 대비 오류 10–20% 감소: **C** (원문 미확보, 한국어 한정 개선율로 쓰면 안 됨)

## 검증 결과
- CER 5.72/4.61, ggml 공개, 기상 논문: 등급 **A**. 10–20% 개선: **C**

## 한벗 적용 포인트
- 로컬/자체 호스팅 STT 대안(비용 0, GPU 필요). FLEURS/CV 기준 5.72%는 RTZR 벤치의 Whisper 11.39%와 **데이터셋·정규화가 달라 직접 비교 불가** → [[claim-tech-3-stt-tts-vendors]]
- "원본 음성이 서버에 가지 않는" on-device STT 로드맵의 기술적 근거 → [[topic-tech-privacy-voice-data]]
- 관련: [[src-rtzr-2026-korean-stt-benchmark]], [[topic-tech-voice-pipeline-latency-cost]]

확인일: 2026-10-25

