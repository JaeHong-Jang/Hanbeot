---
title: "src-funaudiollm-2024-sensevoice"
tags: ["tech", "speech-emotion-recognition", "grade-A", "ser", "sensevoice", "korean", "on-device", "paper-evidence", "stt"]
created: 2026-10-25T07:13:16.825Z
updated: 2026-10-26T05:51:56.611Z
sources: ["https://arxiv.org/html/2407.04051", "https://huggingface.co/FunAudioLLM/SenseVoiceSmall"]
links: ["claim-tech-1-ser-model.md", "topic-tech-privacy-voice-data.md", "src-ma-2024-emotion2vec.md", "topic-tech-speech-emotion-recognition.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-funaudiollm-2024-sensevoice

# src-funaudiollm-2024-sensevoice

## 서지정보
FunAudioLLM team (Alibaba), "FunAudioLLM: Voice Understanding and Generation Foundation Models", arXiv 2407.04051 (2024). 공식 HF 카드 FunAudioLLM/SenseVoiceSmall. **Alibaba 자체 보고.**

## URL
- https://arxiv.org/html/2407.04051
- https://huggingface.co/FunAudioLLM/SenseVoiceSmall

## 라이선스/상업 이용
- 논문 본문에 라이선스 명시 없음. 공식 카드는 `model-license` 표시 → **C(미확인)**, 코드 라이선스와 분리해 약관 전문 확인 필요

## 핵심 수치
- SenseVoice-Small 234M / Large 1,587M (Table 6)
- 10초 오디오 처리 지연: SenseVoice-S **70ms**, L 1,623ms, Whisper-S 518ms, Whisper-L-v3 1,281ms (특정 측정 조건의 처리 지연, 모바일·대화 지연 아님)
- Small 지원 언어: zh, yue, en, ja, **ko** (ASR 지원이 한국어 SER 정확도를 보증하지 않음)
- SER WA(%) L/S, fine-tune 없이: IEMOCAP 75.3/65.7, MELD 63.1/57.8, MSP-Podcast 61.7/64.1, CREMA-D 90.4/74.0, CASIA 96.0/70.0, ESD 93.2/85.5, MER2023 69.2/68.3 (Table 8)

## 검증 결과
- 등급 **A** (모델 크기, 지연, 언어, SER WA 모두 Table 6/8과 일치). 리서치 노트의 "근사치로 취급" 주석은 불필요 — 표 열 구분 시 정확히 확인됨
- "70ms이므로 모바일/엣지 실행 가능"은 **C** — 공식 카드가 CPU/edge 경로를 소개하지만 논문 70ms를 모바일 성능으로 적용할 근거 없음
- "70ms이므로 병렬 SER 추가 지연 거의 없음"도 **C** — 서버 자원 경쟁·전송·후처리 포함 실측 필요

## 한벗 적용 포인트
- emotion2vec+의 대안 SER 백본이자 한국어 ASR+SER 동시 수행 가능 모델 → [[claim-tech-1-ser-model]]
- on-device SER 로드맵의 후보(검증 필요) → [[topic-tech-privacy-voice-data]]
- 비교: [[src-ma-2024-emotion2vec]], [[topic-tech-speech-emotion-recognition]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:51:56.611Z)

## 2026-10-26 논문 보강 (설계서 [P28])
- 수치: SenseVoice-Small 234M, 한국어 ASR 지원, IEMOCAP WA(S) 65.7%, 10초 오디오 70ms(특정 조건). 한국어 SER 정확도는 미보고.
- 적용: 2순위 후보. "SenseVoice 한국어 평가 논문 없음"은 이번 검색에서 미발견으로만 쓴다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]]
