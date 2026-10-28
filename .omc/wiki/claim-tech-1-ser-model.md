---
title: "claim-tech-1-ser-model"
tags: ["tech", "speech-emotion-recognition", "grade-A", "grade-C", "decision", "ser", "emotion2vec", "sensevoice"]
created: 2026-10-25T07:32:41.900Z
updated: 2026-10-25T07:32:41.900Z
sources: []
links: ["topic-tech-speech-emotion-recognition.md", "overview-technology.md", "src-ma-2024-emotion2vec.md", "src-emotion2vec-2024-github.md", "src-funaudiollm-2024-sensevoice.md", "src-sereval-2024-whisper-crosslingual.md", "src-ahfe-2024-kemdy19-ccc.md", "src-sogang-2024-aihub-hubert.md", "src-hume-2026-evi-docs.md", "src-ahelm-2025-audio-benchmark.md", "claim-tech-5-latency-target.md", "src-etri-2020-kemdy.md", "src-aihub-2024-terms.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-1-ser-model

# claim-tech-1-ser-model

## 결정
**MVP 음성 감정 백본은 emotion2vec+ base(약 90M, FunASR 로드)를 1순위, SenseVoice-Small(234M, 한국어 ASR 겸용)을 2순위로 두고, turn 종료 시 전체 발화 단위 추론 + LLM 텍스트 감정 late fusion으로 구성한다. 한국어 성능은 팀 자체 벤치마크(목표: AI Hub 4-class 0.8139 근접)로 확인한 뒤 확정한다. Hume EVI는 제외한다.**

상위: [[topic-tech-speech-emotion-recognition]], [[overview-technology]]

## 근거
- 원본 emotion2vec IEMOCAP WA 71.79%(영어), 비영어 9개 언어에서 data2vec 2.0 상회 [[src-ma-2024-emotion2vec]]
- emotion2vec+ base 4,788h 학습, 9-class, 한 줄 로드, embedding 추출 가능 [[src-emotion2vec-2024-github]]
- SenseVoice-S 234M, 70ms/10초(특정 조건), ko 지원, IEMOCAP WA 65.7 [[src-funaudiollm-2024-sensevoice]]
- Whisper encoder도 cross-lingual SER 후보 [[src-sereval-2024-whisper-crosslingual]]
- 한국어 SSL 특징(wav2vec/HuBERT)이 전통 음향 특징 상회; AI Hub HuBERT 4-class 0.8139 [[src-ahfe-2024-kemdy19-ccc]], [[src-sogang-2024-aihub-hubert]]
- Hume EVI 2026-11-13 API 종료 [[src-hume-2026-evi-docs]]
- omni-LLM 단독 사용 배제 이유: 지표 비교 불가 + SER 신호를 명시적으로 저장·사용자에게 보여줘야 하는 한벗 요구 [[src-ahelm-2025-audio-benchmark]]

## 비용·지연
- 모델 비용 0(OSS). 추론: GPU 1장(T4급) 또는 CPU에서 utterance 단위 수십~수백 ms(실측 필요)
- 파이프라인 내 위치: STT 스트리밍과 병렬 → LLM 호출 전 완료 목표 → [[claim-tech-5-latency-target]]

## 벤치마크 계획(검증 가능 목표)
1. 데이터: KEMDy20(라이선스 확인 후) 또는 AI Hub 감정 대화 음성(약관 원문 확인 후), speaker-independent 분할
2. 후보: emotion2vec+ base / SenseVoice-S / Whisper-encoder + linear head, 4-class(분노·기쁨·중립·슬픔)
3. 지표: UA, WA; 합격선 UA ≥ 0.70, 목표 0.80
4. 추가: turn-end 전체 발화 vs 3초 세그먼트 정확도 차이 측정

## 미확인 리스크 (C)
- emotion2vec+·SenseVoice **가중치 라이선스**(`model-license`) → 상업 이용 전 확인 필수
- ETRI 데이터셋 상업 이용 가능 여부, AI Hub 약관 원문 [[src-etri-2020-kemdy]], [[src-aihub-2024-terms]]
- 한국어 SER 공개 성능 부재(검토 자료 기준), 모바일 실행 성능
- 세그먼트 단축 시 정확도 하락 수치(포스터 미확인)

