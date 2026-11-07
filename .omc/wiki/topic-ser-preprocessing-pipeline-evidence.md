---
title: "topic-ser-preprocessing-pipeline-evidence"
tags: ["scopus-2026-11", "ser", "preprocessing", "pipeline", "cross-corpus", "korean", "verified"]
created: 2026-11-07T18:43:53.333Z
updated: 2026-11-07T18:43:53.333Z
sources: ["research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", ".omc/orchestra/reviews/20261108_030939_verify_01_preprocessing_models_crosscorpus.md", "docs/harness/감정-인식-계획.md"]
links: ["topic-scopus-literature-2026-11.md", "topic-app-impl-ser-cues.md", "claim-app-9-ser-evaluation-and-calibration.md", "topic-ser-model-comparison-whisper-spectrogram.md", "topic-ser-papers-synthesis.md", "src-milling-2022-vad-ser.md", "src-jun-2024-realtime-kemdy19.md", "src-atmaja-2022-augmentation.md", "src-hyeon-2025-segmental-pooling.md", "src-tzeng-2025-noise-robust-sse.md", "src-leem-2024-selective-enhancement.md", "src-grageda-2025-hri-distant.md", "src-gat-2022-speaker-norm.md", "src-ryu-2025-pitch-contour.md", "src-shi-2026-asr-repr-noisy.md", "src-feng-2023-peft-ser.md", "src-chatzichristodoulou-2025-medusa.md", "src-cao-2025-kemdy-w2v-kobert.md", "src-yoon-2025-maskser.md", "src-prabhu-2024-label-uncertainty.md", "src-chou-2023-ser-calibration.md", "src-goron-2024-whisper-dg.md", "src-wagner-2023-transformer-era.md", "src-ma-2024-emotion2vec.md", "src-chen-2023-wav2vec-tapt.md", "src-sampath-2025-efficient-ft.md", "src-noh-2021-mpgln-multidomain.md", "src-cao-2025-kemdy-prosody-gru.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-ser-preprocessing-pipeline-evidence

상위: [[topic-scopus-literature-2026-11]] · [[topic-app-impl-ser-cues]] · [[claim-app-9-ser-evaluation-and-calibration]] · [[topic-ser-model-comparison-whisper-spectrogram]] · [[topic-ser-papers-synthesis]]. 출처: Scopus 분석 노트 01(초록 기준) + 검증표(2026-11-08, A69/B36/C23). 근거 강도는 행이 아니라 주장 단위로 표기한다. 전처리·모델 파라미터는 모두 가설이며 확정은 한벗 ablation 후다.

## 0. 핵심 한 줄
**전처리는 감정을 분류하지 않는다.** 리샘플링·VAD·소음 억제는 입력을 표준화하고 방해 요인을 줄일 뿐이고, 감정 구분은 인코더(SSL 임베딩 또는 음향 특징)와 분류 헤드가 한다 (검증 A). 6개 쿼리에서 한국어·자연발화 전처리 단독 효과를 정량한 논문을 "발견하지 못했다"는 것은 C(검색 범위 한계)이므로 "연구가 없다"로 쓰지 않는다.

## 1. 전처리 13단계 (제안 파이프라인)
| # | 단계 | 설정(제안) | 근거 | 수치 | 상태 |
|---|---|---|---|---|---|
| 1 | 입력 수신 | 16 kHz mono PCM, 수신 코덱은 메타로 기록 | emotion2vec+ 모델 카드(입력 16 kHz, A) | 해당 없음 | 미확정. 16 kHz는 모델 사양일 뿐 감정 인식 최적이라는 실험 근거가 아님(C) |
| 2 | VAD 분할 | Silero/WebRTC A/B, 히스테리시스 | [[src-milling-2022-vad-ser]], McKinnon 2026(VAD 비교 A, SER 정확도 비교 아님) | Milling: VAD ROC-AUC 0.850/0.662, SER CCC 0.263 | 미확정(임계값·패딩 직접 튜닝) |
| 3 | 발화 길이 | 0.5초 조각 단독 추정 회피, 최소 길이는 재측정 | [[src-jun-2024-realtime-kemdy19]] | KEMDy19 4감정, 0.5초 UA 상대 -10.61%, 3.0초 -5.08% | 부분. "3초가 최소 기준"은 C(0.5초보다 손실이 작다는 결과일 뿐) |
| 4 | 무음·비언어 | 앞뒤 트리밍 약하게, 풀링에서 비언어 구간 제외(SAP) | [[src-atmaja-2022-augmentation]], [[src-hyeon-2025-segmental-pooling]] | Hyeon 선행판 KEMDy19 UA 66.26%, WA 68.27%(40-fold 화자 독립) | 부분. 웃음·한숨 제거 이득은 미확정 |
| 5 | 라우드니스 | 피크/RMS 정규화 | 근거 없음 | - | 미확정 |
| 6 | 소음 처리 | 입력 일괄 SE 대신 소음 혼합 증강, 가능하면 SE-SER 공동 학습 | [[src-tzeng-2025-noise-robust-sse]], [[src-leem-2024-selective-enhancement]] | Tzeng 0 dB F1-Macro +3.7%/Micro +2.7%. Leem 10 dB arousal +17.7%, dominance +21.2%, valence +3.3% | 후보 전략(방향 "확정"은 C, 한국어·앱 전이 미확인) |
| 7 | 잔향·거리 | 학습 데이터에 RIR 시뮬레이션, 빔포밍 미사용(단일 마이크) | [[src-grageda-2025-hri-distant]] | ladder network CCC 약 +116%(HRI), wav2vec 2.0은 D&S만 개선 | 후보 전략 |
| 8 | 화자 기준선 | 세션 초기 N발화로 기준선, 피치 z vs 원본 병행 | [[src-gat-2022-speaker-norm]], [[src-ryu-2025-pitch-contour]] | Ryu: z-정규화 효과 데이터 의존 | 미확정(차감 이득의 직접 근거 없음, 관련 연구 전체 부재는 확인 불가) |
| 9 | 특징 추출 | emotion2vec+ 또는 HuBERT/WavLM/Whisper 층 가중 합, GAP+SAP | Wagner 2023, Pepino 2021, [[src-shi-2026-asr-repr-noisy]] | Wagner valence CCC 0.638(성공 원인=암묵적 언어 정보) | 부분. 층 선택 미확정 |
| 10 | 헤드·학습 | 동결+헤드 후 LoRA, 소수 클래스 균형 샘플링+소프트 타깃 | [[src-feng-2023-peft-ser]], [[src-chatzichristodoulou-2025-medusa]] | 아래 §2 | 부분. 이 순서는 작성자 설계 판단(C) |
| 11 | 텍스트 융합 | STT 전사+KoBERT류 후기 융합 | [[src-cao-2025-kemdy-w2v-kobert]], [[src-yoon-2025-maskser]] | Cao 테스트 정확도 73.3%(검증 UAR 85.52%와 비교 불가) | 부분. "전사 비용 0"은 C(텍스트 인코딩·융합 비용 있음) |
| 12 | 신뢰도 보정 | 낮은 확신은 억제 또는 확인 질문, ECE 보고 | [[src-prabhu-2024-label-uncertainty]], [[src-chou-2023-ser-calibration]] | 보정 필요성은 지지, 확인 질문의 사용자 효과는 미검증(C) | 방향 지지 |
| 13 | 증강 | 소음·RIR·코덱 시뮬레이션 우선, 속도·피치·SpecAugment는 ablation | [[src-atmaja-2022-augmentation]] | 증강 개수는 조건에 따라 최적이 다름 | 소음·RIR만 후보, 나머지 미확정 |

미확정 목록(직접 실험): 샘플링·코덱(1), VAD 임계값(2), 최대 발화 길이(3), 비언어 제거(4), 라우드니스(5), 기준선 N(8), 층 선택(9), 증강 종류별 효과(13).

## 2. 모델·학습 전략
| 항목 | 근거 | 수치(초록 기준) | 검증 메모 |
|---|---|---|---|
| 백본 | [[src-goron-2024-whisper-dg]], [[src-wagner-2023-transformer-era]] | 6개 데이터셋 평균 UAR 74.5%, Whisper 최고 | B. Whisper의 한국어 SER 우위는 C(한국어 ASR 능력과 별개) |
| 동결+헤드 | [[src-ma-2024-emotion2vec]] | 선형 층만 학습해 IEMOCAP 기존 모델 상회, 10개 언어 개선 | A. 논문의 emotion2vec 결과이며 emotion2vec+에 그대로 귀속 금지 |
| TAPT | [[src-chen-2023-wav2vec-tapt]] | IEMOCAP UA 이전 SOTA 대비 절대 +7.4%p | A. **최상 시스템 대 이전 SOTA 비교이며 TAPT 단독 효과가 아니다** |
| 2단계 미세조정 | Gao 2023(10.21437/Interspeech.2023-756) | UA 76.10%, 단일 과제 대비 절대 +3.97%p | A |
| LoRA | [[src-feng-2023-peft-ser]] | 4개 테스트베드 PEFT 중 LoRA 최고, 공정성 개선 | A. 비교 범위 한정 |
| 부분 미세조정 | [[src-sampath-2025-efficient-ft]] | 마지막 3층 속도 +67%, 캐시 포함 +88%, 학습 파라미터 -71% | A. Wav2Vec 2.0 base 한정 |
| 불균형·소프트 타깃 | [[src-chatzichristodoulou-2025-medusa]] | Interspeech 2025 Task 1(범주) 1위 | A. 개별 기법 효과가 아니라 시스템 결과 |
| 불확실성 | [[src-prabhu-2024-label-uncertainty]] | Student-t 분포 SOTA(수치 초록에 없음) | A. **프랑스어 RECOLA/AVEC'16 + 영어 MSP-Conversation**(영어 한정이 아님) |

## 3. 교차 코퍼스·도메인 적응
| 방법 | 근거 | 수치 | 검증 메모 |
|---|---|---|---|
| 순수 교차 코퍼스 | Portal 2025(10.1142/S0129065725300013) | 대부분 정확도 40% 미만, 최대 5코퍼스 결합 훈련 최고 58.85% | A. 해당 벤치마크 관측. **"분야 전체가 40%에 막혀 있다"는 확대 해석(검증 불일치)** |
| eGeMAPS 전이 | Zhao 2025(10.1109/TCSS.2024.3483964) | 6과제 평균 UAR 42.12% | B. 상한·전체 평균 아님 |
| 다중 코퍼스 | Ibrahim 2024, Ahn 2022(코퍼스별 손실 가중), Parry 2019 | 수치 초록에 없음 | A |
| 소량 타깃 미세조정 | Naderi 2023(타깃 화자 20%, EmoDB 92.45%), Zhao R. 2025(7개 평균 78.75%) | 20%는 화자 비율, 낭독형 | B/A. 무적응 성능과 구분 |
| 반지도 | Agarla 2023(10.1016/j.eswa.2023.121368) | UA 평균 약 40% 향상(기준=기존 SOTA, +40%p 아님) | A. 정식 권호는 2024 |
| 한국어 다중 도메인 | [[src-noh-2021-mpgln-multidomain]] | F1 +3.7%, 일반화 +3.5% | B |
| 한↔영 | Ough 2023(10.1155/2023/8837465) | 언어 의존성으로 낮은 정확도(포먼트 차이는 가설) | B |
해석: 한국어 소량 라벨·반지도는 "유망한 경로"이지 "필수 조건"이 아니다(필수 입증은 C).

## 4. 한국어 연구 지형 (검증자 단서 반영)
- ETRI(Noh·Bautista·Ahn): KEMDy18/19 보유 기관, 반복 출판. 데이터 접근 문의 후보. Noh 2023은 **화자 식별(SI)** +3.2%이지 SER 정확도가 아님.
- KAIST 저자(Hyeon): [[src-hyeon-2025-segmental-pooling]]. 서울대(Ryu, Gweon): [[src-ryu-2025-pitch-contour]]. 제주대(Yoon): [[src-yoon-2025-maskser]]. 가톨릭대(Cao): [[src-cao-2025-kemdy-prosody-gru]].
- 정정 1: **Nam H.J. 2024는 POSTECH(한국 기관) 연구이나 clean 학습 데이터는 IEMOCAP**이라 한국어 소음 실험이 아니다. 한국어 소음 직접 근거는 Nam Y. 2021(중앙대, 원래 CADKES 조건 수치 95.8%/93.6%) 정도.
- 정정 2: Bautista 2025 평가 데이터는 IEMOCAP. Lee 2025(AI Hub 증강)의 "34.19% 향상"은 **56.96%에서 91.15%로 34.19%p 상승**(상대 약 60.02%)이다.
- 정정 3: K9의 NAACL DOI(10.18653/v1/2022.naacl-main.416)는 CoMPM 논문이지 Hi,KIA가 아니다. Hi,KIA는 APSIPA 2022(488발화, 8명, 4감정, 호출어 데이터).
- 정정 4: "한국어 연구는 프로토콜이 불투명"은 일반화 불가. 저장된 26편 초록 범위에서 미기재일 뿐이며 Hyeon 선행판은 화자 독립 40-fold를 명시한다.
- 비교 불가: KEMDy19 정확도 64.69%(Cao) / CCC 0.5473(Bautista 2023, **wav2vec2 기반, emotion2vec+ 결과 아님**) / AI Hub 정확도 0.8139(서강대 학위논문, 화자 독립 불명)는 서로 다른 과제·지표·분할.
- 협력 후보 순위("연락 가치 높음")는 논문 소속·출판 이력일 뿐 연락 가능성·협력 의사와는 별개(C).

## 5. 연구 기회 3개 (가설, 선행연구 부재는 미입증)
1. **O1** 한국어 대화 SER의 보정된 신뢰도+화자 기준선(인앱, 동의 데이터). 기준선은 KEMDy19 위키 수치와 Cao 64.69%, 단 지표가 달라 직접 비교 금지. 표본 규모("수십~수백 명")는 목표값이지 검증된 필요 수가 아님.
2. **O2** 코덱·전화 대역·소음 내성 한국어 벤치마크. "코덱 정량 논문이 없다"는 "이번 선정 문헌에서 확인 못 함"으로만 쓴다.
3. **O3** 영어 사전학습에서 한국어 자연발화로의 전이(소량 라벨+의사 라벨). 라벨 수 학습 곡선.
우선순위(O1 제품 직결, O2 단기, O3 라벨 선행)는 의견.

## 6. 한계
초록 기준 읽기. 핵심 의사결정 논문(Tzeng, Leem, Grágeda, Shi, Hyeon, Jun, Cao, Ryu)은 본문 확인 권고. 노트의 "모든 수치는 Scopus 초록에서만"은 부분 불일치(모델 사양, 학위논문, 기존 위키 수치 포함).

