---
title: "claim-research-1-paper-a-korean-ser-selective-prediction"
tags: ["scopus-2026-11", "research-track", "paper-a", "ser", "korean", "selective-prediction", "v3"]
created: 2026-11-07T19:54:09.214Z
updated: 2026-11-07T19:54:09.214Z
sources: ["reports/한벷 최종 계획 v3.md#4.3", "research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["claim-app-9-ser-evaluation-and-calibration.md", "topic-ser-sota-benchmarks-2026-11.md", "topic-ser-performance-levers-2026-11.md", "topic-korean-ser-landscape-2026-11.md", "claim-research-2-paper-b-personalization-synthetic.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-research-1-paper-a-korean-ser-selective-prediction

# claim-research-1-paper-a-korean-ser-selective-prediction

v3 §4.3에서 결정된 논문 A(우선). 관련: [[claim-app-9-ser-evaluation-and-calibration]] · [[topic-ser-sota-benchmarks-2026-11]] · [[topic-ser-performance-levers-2026-11]] · [[topic-korean-ser-landscape-2026-11]] · 후속 [[claim-research-2-paper-b-personalization-synthetic]]. 이득 수치는 원 논문(영어) 값이며 한국어 재현 보장 없음.

## 제목·RQ
*Speaker-Independent Korean Conversational Speech Emotion Recognition with Annotator-Distribution Learning and Calibrated Selective Prediction*
- RQ1 화자 독립 한국어 자연 대화에서 SSL 백본·미세조정·소프트 라벨이 UA/CCC를 얼마나 올리는가. RQ2 소프트 라벨이 ECE와 위험-커버리지(AURC)를 개선하는가. RQ3 ASR 텍스트 결합이 valence에서 이득인가, 어느 감정(불안·가라앉음 대리)에서 실패하는가.
- 주 주장은 "UA x 달성"이 아니라 어떤 규율이 한국어 자연 대화로 얼마나 전이되는가 + 보정된 보류가 오류를 얼마나 줄이는가.

## 데이터·프로토콜
- 주: KEMDy20(자연 대화 80명, 외부 태거 10명, VA 라벨 있음). 보조: KEMDy19(Hyeon 기준선 재현). 영어 대조: IEMOCAP(EmoBox 분할), MSP-Podcast(학술 무료, 기관 계약 서명 필요).
- KEMDy20 세션 쌍 단위 5-fold; KEMDy19 LOSO-40(비교용) + 5-fold. 검증은 train 화자 중 8~10%. 4범주 + VA 연속 + 태거 투표 분포. 자연 분포 테스트이므로 UA·macro-F1 주지표, 다수 클래스 기준선 병기.

## 방법 스택 (순서, 근거 레버, 원 논문 이득 / 한국어 기대는 추정)
0 기준선 emotion2vec 동결 + 선형 (IEMOCAP WA 71.79) -> 1 백본 비교 Whisper-L-v3/WavLM-L/emotion2vec/한국어 HuBERT (Whisper +4.07 UA) -> 2 층 가중합 (WA +3.50) -> 3 LoRA 또는 마지막 3층 (이득 크기 미확인) -> 4 GAP+SAP (+1.7~1.9, CI 겹침) -> 5 소프트 라벨 + VA 다중 과제 (제거 시 -8.23%; MEDUSA는 가중 CE+MSE, SAILER는 KL) -> 6 ASR 텍스트 deep fusion (late 대비 +6.31%) -> 7 3모델 앙상블 (+0.020 macro-F1) -> 8 온도 보정 + 엔트로피/MC dropout 보류 (25% 거부 CCC 상대 +7~14%, ECE 0.335 -> 0.276).
- 효과가 겹쳐 단순 합산(+5%p)은 과대. 한국어 이득은 모두 추정(C).

## Ablation·지표
- 층 가중, LoRA rank, 풀링 4종, 하드 vs 소프트, VA 보조, 텍스트 on/off(WER 구간별), 손실(가중 CE/focal), 앙상블 1 vs 3, 보정 on/off, 성별별·발화 길이별 UA.
- UA, macro-F1, WA(+다수 클래스), CCC, ECE, 위험-커버리지 + AURC, 커버리지 60/75/90% UA, 화자 단위 부트스트랩 95% CI.

## 이길 기준선
- 한국어: KEMDy19 LOSO-40 UA 66.26 / WA 68.27 (Hyeon). KEMDy20은 화자 독립 수치를 못 찾아 우리가 첫 기준선(부재 증명 아님).
- 영어 대조 참고(코드 점검용): IEMOCAP LOSO-10 EmoDistill UA 77.49 (WavLM-L 75.57), MSP-Podcast macro-F1 0.329~0.4316, valence CCC 0.638~0.665.

## 최소 데이터·GPU (추정, C)
- 화자 40명 이상, 발화 8,000 이상(운영 제안이지 검정력 산정이 아님). 자체 데이터는 화자 30 x 평가자 3 x 1,000발화 이상.
- 검증 정정: SAILER 15 GPU시간은 Whisper 동결 + 후단 학습이라 LoRA 근거가 아님. 모델당 15시간을 그대로 쓰면 5-fold x 3백본 = 225 GPU시간(노트 100~150은 가정 불명). 실제 LoRA 시간은 측정 필요. WavLM-L LOSO-40(A100 약 40시간/실험)은 인용만.

## 목표 학술지
IEEE TAFFC 또는 Speech Communication, 디딤돌 Interspeech/ICASSP 4쪽. 학술지 요구 수준은 지침으로 검증하지 않음(C). Interspeech 2027 마감 확인 필요.

## 위험
1. UA 0.70 목표는 불확실(KEMDy19 연기 최고 66.26, 자연은 더 낮은 경향). 대안 목표: **커버리지 75%에서 UA 0.70 이상**.
2. 이득이 작아 방법 신규성 부족 판정 -> 프로토콜·보정·한국어 분석을 기여로.
3. KEMDy20 neutral 우세(ETRI 원문 86.5%), 태거 일관성 미확인, 투표 파일 공개 여부 미확인.
4. MSP-Podcast 라이선스 지연. emotion2vec+ 학습 데이터 미공개 오염 가능성.
- "한국어에서 처음"은 이번 검색에서 못 찾았다는 뜻이지 증명이 아님.
