---
title: "overview-final-plan-v3"
tags: ["hanbeot", "plan", "v3", "research", "overview"]
created: 2026-11-08T06:33:45.616Z
updated: 2026-11-08T06:33:45.616Z
sources: []
links: ["overview-hanbeot-project.md", "overview-app-design.md", "topic-scopus-literature-2026-11.md", "topic-app-schedule-7weeks.md", "claim-app-12-interruption-backchannel-filler-rules.md", "claim-tech-5-latency-target.md", "claim-app-13-tts-blind-test-protocol-w4.md", "topic-tts-humanlike-evidence-2026-11.md", "topic-ser-label-count-calibration-evidence.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "topic-ser-sota-benchmarks-2026-11.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md", "claim-research-2-paper-b-personalization-synthetic.md", "claim-research-3-reproduction-experiments-r0-r8.md", "topic-ser-performance-levers-2026-11.md", "topic-ser-preprocessing-pipeline-evidence.md"]
category: architecture
confidence: medium
schemaVersion: 1
---

# overview-final-plan-v3

# overview-final-plan-v3

한벗 최종 통합 계획 v3 (2026-11-08). 원문: `reports/한벗 최종 계획 v3.md` (약 100KB, 출처 [R1]~[R133], 비평 37건 반영표 포함). 상위: [[overview-hanbeot-project]], [[overview-app-design]]. 근거 허브: [[topic-scopus-literature-2026-11]].

## 무엇이 바뀌었나
v1 설계서(10/25) → v2 감정 인식 계획(11/8 오전) → v3 통합(11/8). 근거 규모: Scopus 1차 1,818편 + 2차 2,934편(초록), 원문 정독 44편, 저장소 54개, 검증표 7건(A755/B189/C278), 비평 37건(상24·중12·하1 → 수정 33·일부 4·보류 0).

## 트랙별 핵심 (전부 11/9 회의 상정안)
- **제품**: P0 12개·W3~W7 게이트는 [[topic-app-schedule-7weeks]] 유지. 바뀐 것은 턴 처리 규칙([[claim-app-12-interruption-backchannel-filler-rules]]), 위기 결합, 데이터 권한 원칙. 지연은 TTFA P50 ≤ 1.0s 목표 + P90 1.5s + 4s 초과 실패 집계([[claim-tech-5-latency-target]]).
- **목소리**: W4 블라인드 테스트 [[claim-app-13-tts-blind-test-protocol-w4]] — Typecast·Qwen3-TTS 1.7B CustomVoice·VoxCPM2·Fun-CosyVoice3, 청취자 ≥30·문항 ≥30·맥락 2턴·7점 CMOS 주지표, 전환 게이트에 원가·동시 부하·운영 포함. 근거 [[topic-tts-humanlike-evidence-2026-11]].
- **감정 인식**: 라벨 3층(모델 9라벨 / 평가 4감정+VA 3단계+분포+보류 곡선 / 제품 5감정+보류+2축). **감정 수는 늘리지 않는다**([[topic-ser-label-count-calibration-evidence]]). 실행 순서 위기 → 입력 품질 → 보류 → 불일치 되물음 → 2단계 결합. **위기 위험도 max(글, 소리) 규칙은 철회**: 위기는 글 기반(KeywordGate + 위험 태그) 유지, 음성 기여는 별도 평가 후 재검토([[claim-app-10-crisis-state-machine-and-evaluation]] 갱신 필요). 보류 약 25% 시작. emotion2vec+는 VA 연속 점수를 내지 않으므로 VA 회귀 헤드를 W5~W6에 별도로 만들고 그 전에는 "가라앉음" 라벨을 끈다.
- **연구(SCI 논문)**: 기준선 [[topic-ser-sota-benchmarks-2026-11]] (자연 대화 8클래스 macro-F1 최고 0.4316, IEMOCAP 화자 독립 EmoDistill UA 77.49, KEMDy19 LOSO-40 UA 66.26). **논문 A 우선** [[claim-research-1-paper-a-korean-ser-selective-prediction]] (화자 독립 한국어 대화 SER + 평가자 분포 소프트 라벨 + 보정된 선택적 예측; IEEE TAFFC / Speech Communication, 디딤돌 Interspeech·ICASSP), 논문 B는 증분 [[claim-research-2-paper-b-personalization-synthetic]]. 재현 실험 최소 묶음 R0 → R5 → R6 → R1(백본 2종) → R3a(하드 vs 소프트) → R7 ([[claim-research-3-reproduction-experiments-r0-r8]]). 성능 레버 [[topic-ser-performance-levers-2026-11]], 전처리 [[topic-ser-preprocessing-pipeline-evidence]].
- **데이터·권한**: KEMDy는 e-PreTX 승인 절차, 권한이 불명확한 데이터로 만든 가중치·임계값은 `rules.yaml`에 넣지 않는다. 사용자 확인 응답은 정답이 아니다. W4 청취 실험을 포함한 사람 대상 연구는 IRB 경로 확인 후 모집. "KEMDy만 쓰면 IRB 불필요"는 삭제.
- **SER 합격선**: "커버리지 75%에서 UA ≥ 0.70" 대안은 철회. 전체 커버리지 UA 하한 유지(0.70 유지 여부는 팀 결정), 선택적 성능은 따로 보고, 보류에 따른 질문 부담·이탈을 합격 조건에 포함. W6 핵심 비교는 "같은 질문 정책에서 글만 vs 글+음성".

## 11/9 결정 요청 17건
`docs/harness/회의-안건-2026-11-09.md` 8건 + v3 §6 신규 9건(TTS 후보·평가 방식, 맞장구 어휘, 보류 비율 25%, 논문 A 우선, 데이터 신청 담당, 맞장구·필러 규칙, 위기 결합·SER 가치 비교 설계, 공수 배분(AI 담당 W3~W7 약 75시간), 데이터 권한·IRB).

## 위험 3개
1. 4감정 UA 0.70 목표의 근거 없음(KEMDy19 LOSO 66.26). 2. 한국어 자연 대화 라벨 데이터 접근·권한 미확보. 3. AI 담당 가용시간 안의 제품·연구 충돌.

## 미확인·추가 확인 (v3 §7.3)
KEMDy19 표본 12,457 vs 7,944, EmoDistill 검증 세트 화자 분리 조건, Hyeon 학회판 수치, Oakley 현 소속, Interspeech 2027 마감, DimensionSTP 코드 재현 여부, SURBN 2026 대조, 데이터별 허용 행위, IRB 대상 여부, VA 라벨 라이선스, W4 검정력 모의.

