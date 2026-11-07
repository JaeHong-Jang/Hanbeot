---
title: "src-openbmb-2026-voxcpm2"
tags: ["tts", "opensource", "korean", "voxcpm", "apache-2.0"]
created: 2026-11-07T18:12:04.024Z
updated: 2026-11-07T18:12:04.024Z
sources: ["https://github.com/OpenBMB/VoxCPM"]
links: ["topic-tts-opensource-candidates-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-openbmb-2026-voxcpm2

# src-openbmb-2026-voxcpm2

## 서지
OpenBMB/VoxCPM (GitHub README). 조회 2026-11-08.

## 수치·기능
- 별 41.2k(B). 2B, 200만 시간 초과 학습, 30개 언어(한국어 포함), 48kHz(A).
- 한국어 CER 0.95%: 내부 30개 언어 ASR 평가(언어당 500표본, Gemini 3.1 Flash Lite 전사)이며 같은 표 Fish S2-Pro는 **0.29%**(A, 열은 VoxCPM2/Fish S2-Pro로 명확).
- CV3-Eval 한국어 CER 5.69%는 **다른 평가셋**. 같은 표 CosyVoice3-1.5B 5.69, Fish S2 2.76(B, 재게시 값). 서로 직접 비교 금지.
- RTF 0.13~0.3(RTX 4090, Nano-vLLM/PyTorch)(B). 첫 청크 지연 미보고(A). `generate_streaming` 제공.
- 참조 음성+스타일 지시, 목소리 디자인·복제. 비언어 태그 미확인.

## 라이선스
코드·가중치 Apache-2.0(A).

## 검증 결과
"생성 편차 큼"(선행 노트)과 "GPU 필수"는 C(반복 조건·분산 측정 없음, GGUF·Apple 경로 문서화).

## 한벗 적용
W4 후보 2순위. 첫 청크 지연을 직접 실측해야 함.

## 사용처
[[topic-tts-opensource-candidates-2026-11]]

