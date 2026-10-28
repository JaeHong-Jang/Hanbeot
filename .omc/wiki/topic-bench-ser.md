---
title: "topic-bench-ser"
tags: ["benchmark", "ser", "iemocap", "msp-podcast", "kemdy", "korean", "grade-A"]
created: 2026-10-25T07:35:57.682Z
updated: 2026-10-25T07:35:57.682Z
sources: []
links: ["src-arxiv-2026-audio-flamingo-iemocap.md", "src-isca-2025-msp-podcast-challenge.md", "src-etri-2023-kemdy-datasets.md", "src-arxiv-2026-speech-emotion-papers.md", "src-hume-2025-evi3-launch.md", "src-github-2026-emobench-m.md", "claim-bench-8-emotion-cue-as-question.md", "overview-benchmark.md", "topic-bench-empathy-dialogue.md", "bench-hume-evi.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-bench-ser

# topic-bench-ser

> 음성 감정 인식(Speech Emotion Recognition) 벤치마크와 SOTA(2026-10 기준). 한벗 핵심 기능 ①(억양·속도·멈춤 분석)의 측정 기준.

## 벤치마크 목록

| 데이터셋 | 성격 | SOTA / 기준 (시점) | 근거 |
|---|---|---|---|
| IEMOCAP (영어, 연기/유도) | 4-class(angry/happy/neutral/sad) 표준 | Audio Flamingo 3 **WA 76.48 / UA 76.15** (2026-09, Table 4); Whisper-large WA 72.86 / UA 73.54 (EmoBox 최고 항목); APSIPA 2025 UA 78.32/WA 77.56 (C); 2021 WA 79.34/UA 77.54 (C). **LOSO vs 5-fold, 4/10-class에 따라 비교 불가** | [[src-arxiv-2026-audio-flamingo-iemocap]] (A/C) |
| MSP-Podcast (영어, 자연 발화 324h+) | Interspeech 2025 챌린지: Task 1 8-class, Task 2 A/V/D 회귀(CCC) | ABHINAYA 166 제출물 중 4위; WavLM 초기 9층 동결이 균형에 유리 | [[src-isca-2025-msp-podcast-challenge]] (A) |
| KEMDy19 (한국어, 성우 20세션) | 음성+전사+ECG/EDA/피부온도, 7감정 라벨(4-class는 부분집합) | 통일 리더보드 없음(경진대회 수상작 수준, C) | [[src-etri-2023-kemdy-datasets]] (A) |
| KEMDy20 (한국어, 비배우 자유대화) | 5분 영상 후 5분 대화, Empatica E4 생체신호 | 동상 | [[src-etri-2023-kemdy-datasets]] (A) |
| K-MIND (LREC 2026) | 한국어 양자 상호작용 멀티모달 코퍼스 | 신규 | [[src-arxiv-2026-speech-emotion-papers]] (A) |
| VoxEmo (2026) | Speech LLM 기반 SER 벤치마크 | 신규 | [[src-arxiv-2026-speech-emotion-papers]] (A) |
| Hume Expression Measurement | prosody 48차원 표현 측정(상용 API) | EVI 3 자체 평가 9중 8 GPT-4o 우위 | [[src-hume-2025-evi3-launch]] (A/B) |

## 해석 상의 주의
- IEMOCAP 4-class 최고치도 **약 76–79%** → 음성만으로 감정을 "확정"하면 4번 중 1번은 틀림.
- EmoBench-M 70.5(멀티모달 정서지능)는 SER 정확도와 다른 지표 → 혼용 금지 ([[src-github-2026-emobench-m]]).
- KEMDy 라이선스 조건 미확인.

## 한벗 권장 측정
1. **KEMDy20 4-class UA/WA** (한국어 1차) + arousal/valence CCC (MSP-Podcast 방식).
2. 자체 수집: 대학생 30명 테스트 음성에 자기보고 감정 라벨 → 모델 추정과 일치율.
3. UX 원칙: 감정 단서는 "확인 질문"으로 제시 → [[claim-bench-8-emotion-cue-as-question]].

관련: [[overview-benchmark]] · [[topic-bench-empathy-dialogue]] · [[bench-hume-evi]]

