---
title: "src-sereval-2024-whisper-crosslingual"
tags: ["tech", "speech-emotion-recognition", "grade-A", "ser", "whisper", "wav2vec", "paper-evidence", "ser-limits", "grade-B"]
created: 2026-10-25T07:13:18.262Z
updated: 2026-10-26T05:51:51.172Z
sources: ["https://arxiv.org/html/2408.07851v1", "https://arxiv.org/pdf/2111.02735"]
links: ["topic-tech-speech-emotion-recognition.md", "claim-tech-1-ser-model.md", "src-ma-2024-emotion2vec.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-sereval-2024-whisper-crosslingual

# src-sereval-2024-whisper-crosslingual

## 서지정보
1. "SER Evals: In-domain and Out-of-domain Benchmarking for Speech Emotion Recognition", arXiv 2408.07851 (2024).
2. Pepino et al., "Emotion Recognition from Speech Using wav2vec 2.0 Embeddings" 계열 IEMOCAP fine-tuning 연구, arXiv 2111.02735 (2021).

## URL
- https://arxiv.org/html/2408.07851v1
- https://arxiv.org/pdf/2111.02735

## 라이선스/상업 이용
학술 논문(arXiv). 모델 자체 라이선스는 Whisper(MIT), wav2vec2/HuBERT(MIT) 개별 확인.

## 핵심 수치
- SER Evals: ASR용으로 설계된 **Whisper** 모델이 cross-lingual SER에서 전용 SSL 모델(WavLM/HuBERT 계열)을 능가 (해당 벤치마크·설정의 결론)
- 2111.02735: IEMOCAP fine-tuned wav2vec 2.0/HuBERT 최고 WA — speaker-dependent **79.58%**, speaker-independent **73.01%** (모델군의 최고 점수, 모든 모델 공통 성능 아님)

## 검증 결과
- 두 주장 모두 등급 **A** (원 논문 초록과 일치)

## 한벗 적용 포인트
- Whisper encoder가 한국어 SER 백본 후보로 유효함을 시사 → 팀 벤치마크 3후보(emotion2vec+ / SenseVoice-S / Whisper-encoder)에 포함 → [[topic-tech-speech-emotion-recognition]]
- speaker-independent 73%가 영어 4-class 현실적 상한선 참고치 → [[claim-tech-1-ser-model]]
- 관련: [[src-ma-2024-emotion2vec]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:51:51.172Z)

## 2026-10-26 논문 보강 (설계서 [P21])
- 수치(표 3, 등급 A/B): 19개 코퍼스·13개 언어·9개 체크포인트, 한국어 없음. 모델별 평균 macro-F1이 도메인 내 약 0.67~0.78에서 미관측 코퍼스 약 0.13~0.20으로 하락(B, 반올림 범위·모델별 코퍼스 평균). Whisper-L-v2 0.782→0.194, WavLM-L 0.765→0.161, HuBERT-L 0.733→0.157.
- 교정: "IEMOCAP 화자 독립 상한 73%"는 별개 연구(arXiv 2111.02735)의 최고 WA 73.01%일 뿐 분야 상한도 UA도 아니다(검증표 불일치).
- 적용: emotion2vec+ 미포함. 일반화 실패 사례로만 인용하고 zero-shot 한국어 성능을 가정하지 않는다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
