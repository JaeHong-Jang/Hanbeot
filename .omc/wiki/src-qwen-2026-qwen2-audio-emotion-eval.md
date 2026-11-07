---
title: "src-qwen-2026-qwen2-audio-emotion-eval"
tags: ["qwen2-audio", "audio-llm", "meld", "iemocap", "audio-flamingo", "grade-B"]
created: 2026-11-07T20:07:42.604Z
updated: 2026-11-07T20:07:42.604Z
sources: ["https://github.com/QwenLM/Qwen2-Audio"]
links: ["topic-dev-repos-ser-recipes-2026-11.md", "src-qwen-2025-omni-models.md", "src-arxiv-2026-audio-flamingo-iemocap.md"]
category: reference
confidence: low
schemaVersion: 1
---

# src-qwen-2026-qwen2-audio-emotion-eval

## 서지
QwenLM/Qwen2-Audio README 평가 표, Audio Flamingo 3 논문 표·HF 카드, Qwen3-Omni README. 조회 2026-11-08.

## 수치·기능
- Qwen2-Audio MELD 정확도 0.553(선행 WavLM-large 0.542, Qwen-Audio 0.557). README 두 번째 표는 0.535.
- Audio Flamingo 3 IEMOCAP 63.8 vs Qwen2-Audio-Instruct 59.2(AF3 논문 표).
- Qwen3-Omni: 음성 입력 18개 언어에 Korean 포함. 감정 인식 전용 수치·프롬프트는 못 찾음(C). SALMONN 미열람(C).

## 라이선스
Qwen2-Audio·Qwen3-Omni Apache-2.0(노트 기재). AF3 가중치 NVIDIA OneWay Noncommercial.

## 검증 결과
**정정:** 두 표의 차이는 "모델 버전이 다름"이 아니라 원래 학습 프레임워크 → Hugging Face 변환 때문(C). 요약 대역은 ".55~.64"가 아니라 약 .54~.64이며 서로 다른 데이터셋 점수를 같은 대역으로 단정 불가(B).

## 한벗 적용
서비스 경로 아님. 논문 상한/대조군(R8). AF3는 비상업.

## 사용처
[[topic-dev-repos-ser-recipes-2026-11]] · [[src-qwen-2025-omni-models]] · [[src-arxiv-2026-audio-flamingo-iemocap]]

