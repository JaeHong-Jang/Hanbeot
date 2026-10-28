---
title: "topic-tech-speech-emotion-recognition"
tags: ["tech", "speech-emotion-recognition", "grade-A", "grade-B", "grade-C", "ser", "korean", "egemaps", "topic"]
created: 2026-10-25T07:28:27.132Z
updated: 2026-10-25T07:28:27.132Z
sources: []
links: ["overview-technology.md", "claim-tech-1-ser-model.md", "src-ma-2024-emotion2vec.md", "src-emotion2vec-2024-github.md", "src-funaudiollm-2024-sensevoice.md", "src-sereval-2024-whisper-crosslingual.md", "src-ahelm-2025-audio-benchmark.md", "src-qwen-2025-omni-models.md", "src-hume-2026-evi-docs.md", "src-etri-2018-kesdy18.md", "src-ahfe-2024-kemdy19-ccc.md", "src-sogang-2024-aihub-hubert.md", "src-eyben-2016-egemaps.md", "src-etri-2020-kemdy.md", "src-aihub-2024-terms.md", "topic-tech-long-term-memory.md", "topic-tech-privacy-voice-data.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tech-speech-emotion-recognition

# topic-tech-speech-emotion-recognition

음성 감정 인식(SER) 영역 종합. 한벗 핵심 기능 ①(억양·속도·멈춤 분석)의 기술 근거. 상위: [[overview-technology]]. 결정: [[claim-tech-1-ser-model]].

## 요약
MVP의 현실적 선택은 SSL 기반 SER 백본(emotion2vec+ 또는 SenseVoice-Small)을 turn 종료 시점에 전체 발화 단위로 돌리고, 텍스트 감정은 LLM에 맡겨 late fusion하는 구조다. 한국어 공개 성능 수치는 검토 자료에서 찾지 못했으므로 팀 자체 벤치마크가 필수이며, 1차 비교 기준은 AI Hub HuBERT 4-class 0.8139다. Hume EVI는 2026-11-13 API 종료로 제외한다.

## 확인된 발견 (A/B)
- 원본 emotion2vec: IEMOCAP linear-probe WA 71.79%, 93.79M 파라미터, 비영어 9개 언어에서 data2vec 2.0 상회, **한국어 미평가** [[src-ma-2024-emotion2vec]]
- emotion2vec+ 라인업: seed 201h / base 4,788h(약 90M) / large 42,526h(약 300M), 9-class, FunASR 한 줄 로드. 코드 MIT, **가중치는 `model-license` 별도** [[src-emotion2vec-2024-github]]
- SenseVoice-Small 234M, 10초 오디오 70ms(특정 조건), 한국어 ASR 지원, fine-tune 없이 IEMOCAP WA 65.7 / MELD 57.8. 가중치 라이선스 미확인 [[src-funaudiollm-2024-sensevoice]]
- Whisper encoder가 cross-lingual SER에서 전용 SSL 모델을 능가(SER Evals); IEMOCAP speaker-independent 상한 참고치 73.01% [[src-sereval-2024-whisper-crosslingual]]
- omni-LLM 감정 인식: AHELM MELD audio PEM GPT-4o Audio 0.497 / Qwen2.5-Omni 0.491 (PEM 지표, WA와 직접 비교 불가) [[src-ahelm-2025-audio-benchmark]]
- Qwen2.5-Omni 자체 보고 MELD 0.570; Qwen3-Omni 한국어 음성 출력, Apache 2.0 [[src-qwen-2025-omni-models]]
- Hume EVI 4-mini 한국어 지원·prosody 측정 제공, **2026-11-13 API 종료** [[src-hume-2026-evi-docs]]
- 한국어 데이터: KESDy18 성우 30명·2,880 wav, 라이선스 동의서 필요 [[src-etri-2018-kesdy18]]; KEMDy19 dimensional CCC wav2vec 0.5473 / HuBERT 0.5271, 한국어 wav2vec 특징이 전통 음향 특징 상회 [[src-ahfe-2024-kemdy19-ccc]]; AI Hub HuBERT 4-class **0.8139**(화자 독립 여부 미확인) [[src-sogang-2024-aihub-hubert]]
- eGeMAPS 88 features(23 또는 25 LLD + functionals), openSMILE 구현, ShEMO baseline 사용 [[src-eyben-2016-egemaps]]

## 미확인 (C) — 본문 분리
- KEMDy20 규모·라벨 분포, KEMDy19 세그먼트 길이 trade-off(0.5초 −10.61%, 3초 −5.08%) [[src-etri-2020-kemdy]]
- AI Hub 상업 이용 약관(제시 링크가 다른 데이터셋) [[src-aihub-2024-terms]]
- RESD 리더보드 emotion2vec+ 수치, Emo-Emilia "fine-tune" 주장(실제는 테스트 세트) [[src-emotion2vec-2024-github]], [[src-ma-2024-emotion2vec]]
- SenseVoice·emotion2vec+ 가중치 라이선스, 모바일 실행 성능, 병렬 SER 추가 지연 "거의 없음" 주장 [[src-funaudiollm-2024-sensevoice]]
- "omni-LLM은 전용 SER 대비 이점 없음"(서로 다른 지표 비교) [[src-ahelm-2025-audio-benchmark]]

## 설계 패턴
1. **2단 구조**: 발화 중에는 eGeMAPS 하위 집합(pitch, loudness, speech-rate, pause)만 경량 스트리밍 계산 → turn end에 전체 발화 SER(emotion2vec+ base) + embedding 추출. 세그먼트 단축 시 정확도 하락 근거는 C이므로 팀 실측으로 확인.
2. **late fusion**: 음성 SER 라벨·confidence + LLM 텍스트 감정 → 최종 정서 추정. 두 신호 불일치 시 "확신 낮음"으로 메모리에 기록([[topic-tech-long-term-memory]]).
3. **벤치마크 프로토콜**: KEMDy20(라이선스 확인 후) 또는 AI Hub, 4~7 class, speaker-independent, UA/WA, 세 백본(emotion2vec+ / SenseVoice-S / Whisper-encoder) 동일 조건. 목표: 0.8139(4-class) 근접.
4. **프라이버시 연계**: 원본 오디오 → 특징(eGeMAPS/embedding) → 라벨 3계층 분리 저장([[topic-tech-privacy-voice-data]]).

## 우선 수정 항목(리서치 노트 대비)
- emotion2vec(71.79%)과 emotion2vec+ 혼용 금지
- Emo-Emilia는 평가 세트
- AI Hub 약관 링크 교체
- omni-LLM 우열 단정 삭제

