# 05. SER 최신 성능(SOTA)·성능 요인·논문 설계 (Scopus 2차 + 원문 15편)

작성: 2026-11-08 / 담당: 분석가(researcher) / 대상 쿼리 10개(`ser_sota_training_methods`, `ser_audio_llm_instruction`, `ser_synthetic_tts_data`, `ser_challenges_benchmarks`, `ser_dimensional_valence_arousal`, `ser_selective_prediction_ood`, `ser_personalization_speaker_adaptation`, `korean_emotion_affect_broad`, `korean_prosody_speech_science`, `unist_speech_voice`)

**등급**: A = 원문(arXiv HTML·ISCA PDF·PLOS ONE 본문)을 읽고 표·본문에서 수치를 직접 옮김 / B = Scopus 초록 수준 / C = 2차 자료·내 판단. **초록 밖 숫자는 만들지 않았고, 못 읽은 값은 "미확인"으로 적었다.** 서로 다른 논문의 수치는 프로토콜이 달라 직접 비교 불가이며, 이 노트의 "이득" 열도 논문 안의 ablation 값일 뿐 한벗 데이터에서 재현된다는 보장이 아니다.

읽은 범위: 10개 쿼리 1,450건 중 쿼리별 인용 상위 30 + 2024~26 상위 25 + korea/KEMDy/AI Hub 언급 전부, 약 500편의 초록(등급 B). 질의 오염: `ser_selective_prediction_ood`는 EEG 논문이 절반 이상, `ser_audio_llm_instruction`은 감정과 무관한 LLM 논문 다수, `unist_speech_voice` 197건은 약 85%가 전자피부·초음파·건설재료, `korean_*`는 한국 정치·문화 논문이 섞임. 원문 15편은 §7.

---

## 0. 한 장 요약

1. **MSP-Podcast 8범주(화자 독립, 균형 테스트셋)에서 macro-F1 최고는 0.4316**(Interspeech 2025 챌린지 1위 MEDUSA, 기준선 0.329 대비 +0.103). Odyssey 2024는 1위 0.3569(기준선 0.3113). 1년 만에 +0.075 올랐지만 **여전히 8범주 절반도 못 맞힌다**. 차원 예측은 챌린지 평균 CCC 0.6076(기준선 0.579)이고, 2024년에는 참가팀 대부분이 기준선 평균(0.5327)을 못 넘었다(§1).
2. **IEMOCAP 4범주 화자 독립은 UA 73~76%가 현실 상한**이다(WavLM-L 전체 미세조정 leave-one-speaker-out 10-fold UA 75.57, 95% CI 72.25~78.89). 같은 논문 표에서 HuBERT-L이 화자 의존 79.6 → 화자 독립 73.0이다. **80% 넘는 IEMOCAP 수치는 화자 의존·검증=테스트 분할이 의심된다**(§1.2).
3. **한국어 공개 기준선은 사실상 하나**다: KEMDy19 4범주 leave-one-speaker-out 40-fold, WavLM-L, UA 66.26 / WA 68.27(Hyeon 2024, 원문 A). 이 데이터는 neutral이 54.5%이므로 WA 68.27은 다수 클래스 기준선 54.5% 위의 값이다. KEMDy20·AI Hub는 화자 독립 + UA/F1 + 신뢰구간을 모두 갖춘 보고가 **초록 범위에서 0건**이다(§4).
4. **성능을 가장 크게 움직이는 5개**(논문 내 ablation, 서로 단위가 다름): ① 소프트 라벨(주석자 분포) 제거 시 F1 상대 -8.23%(MEDUSA) ② 다중 모델 앙상블 + 메타 분류기 단일 최고 대비 상대 +7.23%(MEDUSA) ③ 층 가중합(마지막 층 대비) IEMOCAP WA +3.5%p(Ma 2023) / 전체 미세조정이 동결 대비 전 차원에서 우위(Wagner 2023) ④ 화자 개인화 valence CCC +0.056(0.607→0.663, Tran 2023) ⑤ 음성+텍스트 deep fusion 제거 시 F1 상대 -6.31%(MEDUSA). 합성 TTS 데이터는 학습 순서(커리큘럼·전이)를 잘 짜면 IEMOCAP WA +4.0%p(Ma 2023)지만 **단순 혼합은 이득 0**이다(§2).
5. **선택적 예측(보류)이 가장 값싼 큰 이득**이다: 불확실도 상위 25% 거부 시 valence CCC 상대 +13.73%(Sridhar 2020), 커버리지 75%에서 F1 상대 +25.71%(5범주)·+20.63%(8범주)(Sridhar 2019). 그러나 **ECE·위험-커버리지 곡선을 같이 보고한 한국어 논문은 0건**, ECE를 보고한 SER 논문도 초록 수준에서 Chou 2023(수치 미확인) 하나다(§3).
6. **SCI 논문 후보 2안**(§6): (A) 「화자 독립 한국어 대화 SER: 소프트 라벨·LoRA·텍스트 결합·보정된 선택적 예측 벤치마크」, 목표 *IEEE TAFFC* 또는 *Speech Communication*. (B) 「합성 데이터와 소수 샷 화자 적응으로 한국어 대화 SER의 valence·저각성 감정 개선」, 목표 *Computer Speech & Language* 또는 *Speech Communication*, 디딤돌 Interspeech/ICASSP. **순수 성능만으로는 영어 SOTA를 못 넘는다.** 한국어 + 화자 독립 + 보정 + 개인화의 **빈 칸**이 기여다.
7. **UNIST에서 SER 논문은 이번에도 0편**이다. 음성·오디오 ML을 하는 곳은 김태환 연구실(인공지능대학원, 소리→영상 생성 ICCV 2023, 음성 응답 생성 Interspeech 2025)과 2011~2016년 음성 향상·분리를 낸 Jang G.J. 그룹(현 소속 미확인)이다. 공저 후보 1순위는 김태환 연구실(§5).

---

## 1. 벤치마크별 SOTA 표

### 1.1 MSP-Podcast (자연 발화, 팟캐스트)

| 과제·프로토콜 | 지표 | 기준선 | 최고 | 방법 | 출처(등급) |
|---|---|---|---|---|---|
| Odyssey 2024 Task 1, 8범주, 화자 독립 학습·개발, **범주 균형 테스트셋**(Test3), 31팀 제출 | macro-F1 | 0.3113 (micro 0.3272) | **0.3569** (micro 0.3732), Sheffield-MINI. 2위 TalTech 0.3543, 3위 UPC-BSC 0.3441 | 음성+텍스트 SSL, Focal/CE | Goncalves 2024 (A). 주의: 본문 문장은 macro/micro를 바꿔 적었고 표 2·4 기준으로 옮김 |
| Odyssey 2024 Task 2, 속성(arousal/valence/dominance) | CCC 평균 | **0.5327 (기준선이 1위)** | 참가팀 최고 2위 AIST-BahasaKita 0.5297 | 대부분 기준선 못 넘음 | 같은 논문 표 5 (A) |
| Interspeech 2025 Task 1, 8범주, 93팀 | macro-F1 | 0.329 (micro 0.355) | **0.4316** NTUA(MEDUSA, 모델 14개 앙상블), 2위 SAIL 0.4281, 3위 ABHINAYA 0.4181 | WavLM·Whisper·HuBERT + RoBERTa·ModernBERT, 소프트 타깃, 4단계 학습 | Naini 2025 (A), Chatzichristodoulou 2025 (A) |
| Interspeech 2025 Task 2, 속성 | CCC 평균 | 0.579 (A 0.623 / V 0.638 / D 0.477) | **0.6076** SAIL, 2위 SRPOL 0.6003, 3위 SEU AIPLab 0.5955 | WavLM+Whisper+RoBERTa, 1-CCC, 다중 과제 | Naini 2025 (A) |
| MSP-Podcast v1.6 전체 테스트, 단일 모델, 연속 | O-CCC | 미보고 | arousal 0.740 / valence **0.663** (PAPT-FT), 비교 대상 valence 0.627 | HuBERT-L + 화자 적응 사전학습 | Tran 2023 (A) |
| MSP-Podcast (구버전, 텍스트 미사용 wav2vec2-L-robust 전체 미세조정) | CCC | - | arousal 0.745 / dominance 0.634 / **valence 0.635~0.638** | 다중 과제 미세조정 | Wagner 2023 (A) |
| EmoBox 구성(동결 마지막 층 + 얕은 헤드) | UA / WA / F1 | - | Whisper-L-v3 22.24 / 44.1 / 22.12 | 클래스 불균형 | Ma 2024 EmoBox (A) |

**MSP-Podcast 요약**: 2025년 범주 SOTA = **macro-F1 0.43**, 속성 SOTA = **평균 CCC 0.61** (valence 0.66~0.69 구간). 균형 테스트셋 기준이라 실제 분포(neutral 편중)의 정확도와 다르다.

### 1.2 IEMOCAP 4범주 (angry/happy+excited/neutral/sad)

| 프로토콜 | UA | WA | 방법 | 출처(등급) |
|---|---|---|---|---|
| leave-one-speaker-out 10-fold (8 train/1 val/1 test) | **75.57** (95% CI 72.25~78.89) | 74.77 | WavLM-L 전체 미세조정(316M), GAP+SAP 풀링 + 다중 과제 | Hyeon 2024 (A) |
| 같은 논문, GAP만 | 73.87 | 73.27 | | 같음 |
| 5-session leave-one-session-out, 20% 검증 분리, 동결 + 선형 | - | **71.79** | emotion2vec (base 크기) | Ma 2024 emotion2vec (A) |
| 10-speaker LOSO, 동결 + 선형 | - | 72.94 | emotion2vec | 같음 (A) |
| **같은 모델, 검증=테스트 같은 fold(*)** | - | **74.48 / 77.64** | emotion2vec* (5-session / 10-speaker) | 같음 (A). 같은 모델이 분할 방식만으로 +2.7~4.7%p |
| EmoBox 5-session 동결 마지막 층 + 얕은 헤드 | **73.54** | 72.86 | Whisper-L-v3 (WavLM-L 69.47, HuBERT-L 67.42) | EmoBox (A) |
| 화자 의존 vs 독립 (표 1 인용) | - | 79.6 (독립 73.0) | HuBERT-L, 다른 논문 인용 | Wagner 2023 (A) |
| "SOTA" 주장 77.49 / 78.91 | 77.49 | 78.91 | 운율·언어 증류, 분할 방식 초록에 없음 | 10.1109/ICASSP48485.2024.10448505 (B) |
| 화자 의존 vs 독립 한 논문 안 | - | **SD 86.75 / SI 64.04** | 이중모달 앙상블 | Annals of Telecommunications 2025, 10.1007/s12243-025-01088-y (B) |

**IEMOCAP 요약**: 화자 독립이 확인된 값의 상한은 **UA 75.6, WA 74.8**(10-fold). 신뢰구간 폭이 ±3%p이므로 **1%p 차이는 노이즈**다.

### 1.3 MELD·CREMA-D·KEMDy·AI Hub

| 벤치마크 | 프로토콜 | 최고 수치 | 방법 | 출처(등급) |
|---|---|---|---|---|
| MELD 7범주 음성만 | 원 분할(train/dev/test) | **UA 31.54 / WA 51.89 / F1 32.95** (Whisper-L-v3); emotion2vec WA 51.88, UA 28.03, WF1 48.70 | 동결 마지막 층 + 얕은 헤드 / 선형 | EmoBox (A), emotion2vec (A). 불균형 심해 WA만 보면 안 됨 |
| MELD 가중 F1 | 대화+멀티모달 | 68.57 | DialogueMLLM | 10.1109/ACCESS.2025.3591447 (B), 음성 단독 아님 |
| CREMA-D 6범주 | EmoBox 화자 분할 | **UA 76.75 / F1 76.60** (Whisper-L-v3), WavLM-L 74.50 | 동결 + 얕은 헤드 | EmoBox (A) |
| CREMA-D | 제로샷 음성 LLM vs 지도 SOTA(macro-F1) | Qwen2-Audio 직접 61.9, AF3 앙상블 54.1 vs 지도 71.0 | Qwen2-Audio, Audio Flamingo 3 | VoxEmo 2026 (A) |
| **KEMDy19 4범주** (angry/happy/neutral/sad = 1530/1313/4328/773, 총 7,944) | **leave-one-speaker-out 40-fold** (38/1/1) | **UA 66.26 (CI 64.59~67.93) / WA 68.27 (CI 66.82~69.72)** | WavLM-L 전체 미세조정, GAP+SAP + 다중 과제, A100 40GB 실험당 약 40시간 | Hyeon 2024 (A) |
| KEMDy19 | 같은 논문, GAP만 | UA 64.34 / WA 66.62 | | 같음 (A) |
| KEMDy19 (7범주 포함, disgust 있음) | 분할 미명시 | 정확도 64.69 / UAR 64.71, Disgust F1 72.28, Happy F1 49.62 | 운율 GRU(액센트구별 7개 매개변수), 표본 12,457 | Cao 2025, 10.1109/AI3E69313.2025.00044 (B) |
| KEMDy19 + AI Hub | 분할 미명시, 표기 혼재 | 테스트 정확도 73.3%, 검증 UAR 85.52 | wav2vec 2.0 + KoBERT cross-attention | Cao 2025, 10.1109/AI3E69313.2025.00094 (B) |
| KEMDy20 + MELD | 분할 미명시 | 정확도 87.49, **F1 44.16**, 가중 F1 86.28 | 멀티모달 프롬프트 학습 | Mathematics 2023, 10.3390/math11132908 (B). 정확도와 F1이 43%p 차이 = 불균형 |
| AI Hub 감성(4범주 happy/sad/anger/neutral) | 11,192 → 증강 33,576 | 정확도 수치 초록 잘림 | ResNet + 채도 증강 | Appl. Sci. 2025, 10.3390/app15042088 (B) |
| AI Hub | 4범주, HuBERT | 정확도 0.8139 (분할 미확인) | HuBERT | 기존 노트·Wiki (B). 발화 단위 분할이면 화자 누수 가능 |

### 1.4 어떤 프로토콜 차이가 숫자를 부풀리는가 (수치 근거)

| 요인 | 부풀림 크기 | 근거 |
|---|---|---|
| 화자 의존(SD) vs 독립(SI) | IEMOCAP **약 7~23%p**: HuBERT-L 79.6→73.0(-6.6), 이중모달 86.75→64.04(-22.7) | Wagner 2023 표 1(A), Ann. Telecom. 2025 초록(B) |
| 검증 = 테스트 fold | emotion2vec 71.79→74.48(+2.7), 72.94→77.64(+4.7) | emotion2vec 표 2(A) |
| 연기 vs 자연 | EmoDB UA 91.26 / CREMA-D 76.75 / IEMOCAP 73.54 / **MELD 31.54 / MSP-Podcast 22.24** (같은 모델·같은 헤드) | EmoBox 표 4(A) |
| 범주 수·균형 | MSP-Podcast 8범주 균형 테스트에서 최고 0.43 vs IEMOCAP 4범주 0.75. 챌린지 테스트가 균형이라 macro-F1과 정확도가 같아짐 | IS25(A) |
| accuracy 대 UA·F1 | KEMDy20: 정확도 87.49 vs F1 44.16. KEMDy19: 다수 클래스(neutral) 54.5%(=4328/7944, 내 계산) | Mathematics 2023(B), Hyeon 2024(A) |
| 상대 % 보고 | valence CCC처럼 기준이 낮은 값(0.3~0.5)에서 상대 +13.7%는 절대 +0.05 수준. 거부 실험은 대부분 상대 % 보고 | Sridhar 2020 (B) |
| 신뢰구간 | CI 폭 ±3.3%p(IEMOCAP, 10-fold), ±1.7%p(KEMDy19, 40-fold). 대부분 논문은 CI 없음 | Hyeon 2024 (A) |

**한벗 논문의 규칙**: ① 테스트 화자(또는 세션) 완전 분리 ② 검증은 train 안의 별도 화자 ③ UA·macro-F1 + 다수 클래스 기준선 병기 ④ fold별 점수 + 부트스트랩 CI(화자 단위) ⑤ 영어 SOTA와 비교할 때는 EmoBox 분할을 쓰기.

---

## 2. 성능을 움직이는 요인 표 (기법 | 이득 | 비용 | 근거 | 등급)

효과 크기는 **논문 안 ablation 그대로**이고 지표·데이터가 서로 다르다. 순위는 "이득의 일관성 + 비용"에 대한 내 판단(C).

| 순위 | 기법 | 이득 | 비용 | 근거 | 등급 |
|---|---|---|---|---|---|
| 1 | **소프트 라벨(주석자 투표 분포) + KL 손실** | MEDUSA ablation: 제거 시 F1 상대 **-8.23%**(모델 4개 평균, 가장 큰 항목). 합의 없는 약 2만 발화도 학습에 사용. SAILER도 "분포 학습이 CE보다 데이터를 더 활용" | 거의 0(라벨 파일에 투표가 있으면 손실만 바꿈). KEMDy20은 외부 태거 10명이라 가능, KEMDy19는 A/V 외부 평가자 10명 평균(Wiki, 확인 필요) | MEDUSA(A), SAILER(A), 이전 노트 Kumawat 2025 UWA +6.8(B) | A |
| 2 | **다중 모델 앙상블 + 메타 분류기** | MEDUSA: 최고 단일 모델 대비 상대 **+7.23%**(메타 분류기 soup). 하드/소프트 투표보다 우위. SAILER 개발셋 macro-F1 0.411(단일)→0.424(2개)→0.431(3개) | 높음(모델 14개 학습) / 3개는 중간 | MEDUSA(A), SAILER(A), IS25 참가팀 95%가 앙상블(A) | A |
| 3 | **층 가중합(마지막 층만 쓰지 않기) + 전체/부분 미세조정** | 동결 data2vec IEMOCAP: 마지막 층 WA 64.52→다층 가중 **68.02(+3.5)**, UA 68.22→69.95. Wagner: 동결 대비 전체 미세조정이 **모든 경우** 우위, valence에서 특히 큼 | 낮음(가중합) / 높음(전체 미세조정, GPU) | Ma 2023(A), Wagner 2023(A) | A |
| 4 | **음성 + 텍스트 deep fusion** | MEDUSA: deep fusion을 late fusion으로 바꾸면 F1 상대 **-6.31%**. IS25 상위팀 76%가 멀티모달. 증류 HuBERT-base는 텍스트 추가 시 valence가 큰 모델과 동급(파라미터 약 20%) | 중간(ASR 필요) | MEDUSA(A), Naini 2025(A), Oliveira 2023(A) | A |
| 5 | **화자 개인화(적응 사전학습 + 유사 화자 라벨 분포 보정)** | MSP-Podcast v1.6 valence O-CCC **0.607→0.663(+0.056)**, arousal 0.712→0.740(+0.028). TAPT만은 0.630/0.717. 화자별 A-CCC도 valence 0.514→0.569 | 중간(화자 임베딩 + 추가 사전학습) | Tran 2023(A); Sridhar 2022 valence 상대 +13.52%(B) | A/B |
| 6 | **합성 TTS 데이터 (커리큘럼·전이)** | IEMOCAP, data2vec 마지막 층: WA 64.52→**68.57(+4.0)**, UA 68.22→70.86(+2.6). 다층 가중 + 합성: WA 68.02→68.85, UA 69.95→71.89(+1.9). **단순 혼합은 64.52→64.24로 이득 0**. 최적 비율 합성:실제 = 1:2. 합성이 더 많으면 하락 | 낮음~중간(GPT-4 텍스트 + Azure 감정 TTS) | Ma 2023(A). Bellver-Soler 2026(CSL, B): 다섯 코퍼스 중 TTS가 두 곳(EMS·VERBO)에서만 고전 증강 상회, Mix-up이 가장 안정적 | A/B |
| 7 | **백본 선택 (Whisper-L-v3 > WavLM-L > HuBERT-L ≥ data2vec)** | EmoBox IEMOCAP UA: Whisper-L-v3 73.54 vs WavLM-L 69.47(+4.1) vs HuBERT-L 67.42. CREMA-D 76.75 vs 74.50. 32개 코퍼스 중 Whisper가 23곳 1위. SAILER도 Whisper > WavLM. 크기: Wagner는 base≈large, valence는 사전학습 데이터 다양성이 결정 | 낮음(선택만) | EmoBox(A), SAILER(A), Wagner(A), Goron 2024 6개 데이터셋 평균 UAR 74.5(B) | A |
| 10 | **TAPT·계속 사전학습(비라벨 대상 음성)** | IEMOCAP UA 절대 +7.4(이전 노트, Chen 2023 B). 개인화 논문에서 TAPT 단독은 valence +0.023 | 중간(비라벨 음성 필요) | Chen 2023(B), Tran 2023(A) | B/A |
| 13 | **음성 LLM 지도 미세조정(LoRA)** | VoxEmo: 제로샷 대비 최고 프롬프트에서 SFT로 평균 macro-F1 **+23.7**, 36개 분할 중 34곳 개선. SFT 후 평균 acted 66.0 / in-the-wild 40.1. 지도 EmoBox 기준선을 30곳 중 10곳 상회(5,000발화 이상 11곳 중 7곳, 1,000발화 미만 9곳 중 0곳). 제로샷은 지도 학습보다 낮음(CREMA-D 61.9 vs 71.0) | 높음(7B급 LoRA) | VoxEmo(A) | A |
| 8 | **GAP+SAP 풀링 · 다중 과제 · 증강** | 풀링: IEMOCAP UA 73.87→75.57(+1.7), KEMDy19 64.34→66.26(+1.9), CI 겹침. 다중 과제(VA·2차 감정): SAILER macro-F1 0.406→0.411(+0.005)이고 소수 클래스 mAP는 0.328→0.316 하락. 증강(오디오 혼합·주석 드롭아웃 20%): 정확도 불변, macro-F1·소수 클래스 개선(상위팀 60% 사용) | 낮음 | Hyeon 2024(A), SAILER(A), IS25(A) | A (작음) |
| 9 | **증류·화자 조건** | DistilHuBERT는 파라미터 약 15~20%로 오디오+텍스트 시 동급(비용 이득). 화자 조건 sub-network: IEMOCAP 상대 +8.3% | 낮음~중간 | Oliveira 2023(A), Triantafyllopoulos 2021(B) | A/B |
| - | **선택적 예측(보류)** | §3. 위 어떤 학습 기법보다 큰 상대 이득이지만 커버리지를 희생 | 낮음(손실 없이 임계값) | §3 | A/B |

**한벗에 의미하는 것**: 비용 대비 이득 상위는 ①소프트 라벨 ②층 가중합 + Whisper 계열 백본 ③ 텍스트 결합 ④ 보류. 논문용으로는 여기에 ⑤ 화자 개인화와 ⑥ 합성 데이터를 **한국어에서 처음 검증**하는 것이 새로움이다.

---

## 3. 선택적 예측·보정 표

| 논문 | 데이터·과제 | 결과(수치) | 보고 방식 | 등급 |
|---|---|---|---|---|
| Sridhar 외 2019, Interspeech 10.21437/Interspeech.2019-1842 | MSP-Podcast, 5·8범주, DNN + reject option(두 기준) | 커버리지 75%에서 F1 **상대 +25.71%(5범주), +20.63%(8범주)**. 거부된 발화는 평가자 일치도 낮음 | 커버리지별 F1 곡선, 상대 % | B |
| Sridhar 외 2020, ICASSP 10.1109/ICASSP40776.2020.9054237 | MSP-Podcast 속성 회귀, MC dropout | 불확실도 상위 25% 거부 시 상대 **arousal +7.34%, valence +13.73%, dominance +8.79%**. 극단값 발화는 불확실도 낮음 | 거부율별 CCC, 상대 % | B |
| Sridhar 외 2021, ACII 10.1109/ACII52823.2021.9597461 | 소프트 라벨(주석 분포) 생성 모델 + reject | 거부 포함 이득 확인(수치는 초록에 없음; 이전 노트: 커버리지 60%에서 valence 상대 +16.9%) | 커버리지-CCC | B |
| Chou 외 2023, Interspeech 10.21437/Interspeech.2023-1113 | 다중 레이블 SER, **ECE** + 다중 레이블 온도 스케일링(TS) | 감정 동시 발생 가중치 + 클래스 균형 손실 + TS 조합이 최고. **ECE 수치는 초록에 없음** | ECE, 정확도 보존 | B |
| Schrüfer 외 2024, Interspeech (arXiv 2407.01143) | EmoDB·CREMA-D·MSP test1, 4범주, CE 엔트로피·MC dropout·EDL·Prior Network | EmoDB 평균 불확실도 in/out(학습 안 한 감정): CE .333/.850, MC .010/.023, EDL .256/.387, PN(in) .239/.725. 주석 일치도와 상관(PCC, 낮을수록 좋음): MSP에서 CE -.128, MC -.082, EDL -.119, PN(in) -.144, PN(out) -.194 → **약함**. UAR(MSP) .609/.603/.576/.561/.558, 정확도와 UAR 순위가 엇갈림 | CDF 곡선, PCC, 평균 불확실도. **ECE·위험-커버리지 없음** | A |
| 보장 커버리지 SER, EAAI 2025 10.1016/j.engappai.2025.111721 | 보정 집합 기반 예측 집합(conformal), 5개 모델·3개 코퍼스 | 목표 커버리지 보장 주장, 수치 초록에 없음 | 예측 집합 크기·실제 커버리지 | B |
| VoxEmo 2026 (arXiv 2603.08936) | 35개 코퍼스, 음성 LLM 소프트 라벨 평가 | Qwen2-Audio는 1순위 정확도가 높지만 확률이 **과도하게 집중(과신)**, Audio Flamingo 3는 분포가 더 매끈해 자연 발화(EmotionTalk, BIIC-Podcast)에서 KLD·JSD 낮음 | 코사인 유사도, MSE, KLD, JSD, 프롬프트 앙상블 | A |

**관찰**
1. 대부분 **상대 %와 커버리지별 F1/CCC**로 보고한다. **ECE는 Chou 2023뿐**이고, **위험-커버리지 곡선 아래 면적(AURC, AUARC)을 SER에서 보고한 논문은 이번 초록·원문에서 0건**이다. 한벗 논문에서 ECE + AURC + 커버리지 60/75/90%의 UA를 표준으로 제시하면 **방법론적 빈 칸**을 메운다.
2. Schrüfer 2024에서 가장 단순한 **엔트로피**(CE)도 틀린 예측을 어느 정도 구분하지만 주석 일치도와 상관은 -0.08~-0.26으로 약하다. 즉 "모델의 불확실도 ≠ 사람들의 이견"이라서 소프트 라벨로 학습해야 보류가 의미를 갖는다(MEDUSA·SAILER와 연결).

---

## 4. 한국어 SER·운율 표

### 4.1 한국어 SER 결과 (프로토콜 포함)

| 논문 | 데이터 | 프로토콜 | 결과 | 비고 | 등급 |
|---|---|---|---|---|---|
| **Hyeon 외 2024 (KAIST, arXiv 2410.12416; BigComp 2025)** | KEMDy19, 4범주 7,944발화 | **leave-one-speaker-out 40-fold, 38/1/1** | **UA 66.26 / WA 68.27**(GAP 64.34/66.62). 가장 낮은 클래스 happy, 가장 높은 neutral | 발화 최대 16초 절단, 실험당 A100 약 40시간. 저자: "이 방식으로 평가한 첫 논문" | A |
| Cao 외 2025, AI3E 10.1109/AI3E69313.2025.00044 | KEMDy19, 12,457샘플(Hyeon의 7,944와 불일치), 7범주 포함 | 미명시 | 정확도 64.69 / UAR 64.71, Disgust F1 72.28, Happy F1 49.62 | 운율 7개 매개변수(F0 통계, 모음 길이, 말속도, 문미 F0 변화) | B |
| Cao 외 2025, AI3E 10.1109/AI3E69313.2025.00094 | KEMDy19 + AI Hub | 미명시(검증 UAR 85.52 vs 테스트 정확도 73.3 혼재) | wav2vec 2.0 + KoBERT cross-attention | 지표 혼합이라 비교 불가 | B |
| KEMDy20 멀티모달 프롬프트 (Math. 2023) | KEMDy20 + MELD | 미명시 | 정확도 87.49 / F1 44.16 | 불균형 때문 | B |
| Jun 2024 (AES, GIST) | KEMDy19 | 스트리밍 조각 | 0.5초 UA -10.61%, 3초 -5.08%(상대) | 최소 3초 이상 필요 | B |
| Sogang 2024 (기존 노트) | AI Hub 4범주 | 분할 미확인 | 정확도 0.8139 (HuBERT) | 발화 분할이면 화자 누수 가능 | B |

**한국어 SER 요약**: 화자 독립 + CI를 갖춘 보고는 **Hyeon 2024 한 건**이다. 나머지는 분할 미명시이거나, 연기 데이터이거나, 정확도만 보고한다.

### 4.2 한국어 감정의 운율·음성학 (음성과학 논문)

| 논문 | 방법·표본 | 발견 | 한벗에 의미 | 등급 |
|---|---|---|---|---|
| Oh 2024, Linguistic Research 41(3), 10.17250/khisli.41.3.202412.012 (건국대) | 기쁨·슬픔·**불안**·분노, 피치·강도·음질 등 음성학 표지 10개, 성별 비교 | 여성: 슬픔에서 피치 안정, 분노에서 강도 변동 증가. 남성: 슬픔에서 피치 변동 증가, 분노에서 불규칙성. 사회 규범이 성별 차이에 영향 가능성 | 성별별 정규화·보정 필요 | B(원문 미확보) |
| Yoon·Oh·Kent 2026, Lingua 10.1016/j.lingua.2025.104083 (건국대) | 한국어 청자 36명, 사람 32 + AI 32 발화, 4감정 | 사람 음성이 정확도·반응속도 우위. **기쁨 최고, 불안 최저**, AI 음성의 불안은 강도 변동에만 의존(과장). 사람 불안은 피치+강도 조합 | **불안은 사람도 어렵다**. TTS 합성 불안 데이터는 과장되어 현실과 다름(합성 증강 위험) | B |
| Yoon & Oh 2026, Psychol. Rep. 10.1177/00332941261457358 | AI Hub 발화를 저역통과 필터, 청자 33명, 4감정 | 기쁨은 모든 목소리에서 일관 인식, **분노는 남성, 슬픔은 여성 음성에서 정확**. 여성 기쁨·슬픔이 더 강하게 지각 | 화자 성별이 라벨 신호에 개입. 성별별 평가 보고 | B |
| Chen·Hong·Li·Chun 2023, PLoS ONE 10.1371/journal.pone.0283139 | 서울말 화자 19명(1명 제외) + 도쿄 일본어 13명, 초점 조건별 F0 | 초점 위치에서 F0 확장, 초점 전후 압축. **서울말은 자음(평음·격음·경음)이 이후 모음 F0를 바꿈(F0 perturbation)**, 일본어보다 제약이 큼. 한국어는 quasi-tonogenesis 단계 | **한국어 F0는 어휘(자음) 효과와 섞임**. 화자·음소 정규화 없는 단순 F0 통계는 감정 신호가 흐려질 수 있음. 영어 피치 모델을 그대로 쓰면 안 되는 이유 | **A**(원문) |

### 4.3 한국어에서 비어 있는 것

1. **자연 대화 한국어 음성 + 화자 독립 + 소프트 라벨 + 보정**을 모두 가진 논문 0건.
2. KEMDy20(자연 대화 80명, 외부 태거 10명)에 대한 **화자 독립 범주형 SER 수치** 초록 범위 0건(KEMDy20 총 시간·발화 수·neutral 비율은 Wiki도 미확인).
3. **불안·외로움·가라앉음**의 음향 상관을 한국어 자연 대화에서 측정한 음성과학 논문: Oh 2024와 Yoon 2026 외에는 없고 둘 다 연기·통제 자극이며 원문 미확보.
4. 한국어 SER에서 **LoRA/PEFT·음성 LLM·합성 데이터·화자 적응** 사례 0건(초록 기준).

---

## 5. UNIST 음성 연구실 표

`unist_speech_voice` 200건 중 197건이 UNIST 소속이지만 **약 85%가 전자피부·압전 센서·초음파·건설재료**다(질의의 voice·sound 키워드 오염). 음성·오디오 ML 논문은 약 20편.

| 연구실 | 대표 논문(1~2편) | 분야 | 한벗 SER 공저 가능성 |
|---|---|---|---|
| **김태환 연구실 (인공지능대학원)** — 저자 "Kim T." | ① Lee T.·Kang J.·Kim H.·Kim T., *Generating Realistic Images from In-the-wild Sounds*, ICCV 2023 (10.1109/ICCV51070.2023.00658) ② Kim T.·Jo Y.·Song H.·Kim T., *Towards Human-like Multimodal Conversational Agent by Generating Engaging Speech*, Interspeech 2025 (10.21437/Interspeech.2025-1075) (+ Bae 외 *Sound of Story*, EMNLP Findings 2023) | 오디오 생성, 대화 분위기·응답 스타일 기반 음성 생성, 파라언어 | **높음(1순위)**. Wiki의 C-MET(음성→표정 감정 전이, CVPR 2026)와 같은 연구실로 추정하나 Scopus 저자 표기 "Kim T."만으로는 동일 인물 확정 못 함(확인 필요). 합성 데이터 설계(안 B)와 맞음 |
| **Jang G.J. 그룹** (논문 소속: UNIST·Mokwon·Sogang·KAIST 혼재) | Park J.·Jang G.·Kim J.·Kim S., *Acoustic interference cancellation for a voice-driven interface in smart TVs*, IEEE Trans. Consum. Electron. 2013 (10.1109/TCE.2013.6490266) / Jang·Park·Kim·Seo, *Line spectral frequency-based noise suppression…*, 2011 / Park·Jang·Kim·Yeo, *Unsupervised noise reduction…*, Multimedia Tools Appl. 2016 | 음성 향상·화자 분리·음성 인식, 2011~2016 | 전처리·잡음 강건성 자문 가능. **현 소속·활동 미확인(최근 논문 없음)** |
| **Oakley I. (HCI)** | Shin 외, *SkullID: Through-Skull Sound Conduction based Authentication for Smartglasses*, CHI 2024 (10.1145/3613904.3642506) | 소리 기반 웨어러블 인증, ESM(스마트폰 감정 경험 표집) | 중간. SER 모델이 아니라 **평가 방법**(ESM, 실사용 연구). 이전 노트와 일치 |
| **Jung Y. (정의철, 고려대·UNIST 공저)** | Park·Choi·Jung, *Users' Cognitive and Affective Response to the Risk to Privacy from a Smart Speaker*, IJHCI 2021 (10.1080/10447318.2020.1841422) / Choi 외 2023 *User Preferences of Privacy-Enhancing Attributes of a Smart Speaker* | 스마트 스피커 프라이버시 인식 | 중간. 음성 감정 수집 동의·프라이버시 설문 설계 |
| **기타 (공저 가능성 낮음)** | Ahn H. VAFOR(RO-MAN 2023, 음성 비서·로봇); Kim S.P. 대화 소음의 ERP BCI 영향(J. Neural Eng. 2024); Kim J. 안면 감정 웨어러블(Nat. Commun. 2024); Lee K. LLM 에이전트(2025) | 로보틱스·BCI·재료·HCI | 낮음 |

**결론**: SER 모델·데이터 공저는 **김태환 연구실 한 곳**이 현실적이다. 확인 순서: ① 교수 페이지·Google Scholar에서 "Kim T." 저자 동일 인물 확인 ② 한국어 대화 감정 데이터가 연구 대상에 있는지 질문 ③ 합성 음성(안 B)·평가(안 A) 중 어느 쪽 협업인지 정함. Wiki 기존 `lab-unist-kim-taehwan`, `lab-unist-oakley-hong-hci`, `topic-collab-unist-affective-labs` 갱신 대상.

---

## 6. 논문 설계 2안

### 공통 원칙
- **새 감정 체계 제안은 하지 않는다**(비교 대상 없음, 이전 노트 결론). 4범주(angry/happy/neutral/sad) + arousal·valence + 소프트 라벨로 영어 기준선과 직접 비교한다.
- 영어 비교용으로 **MSP-Podcast(라이선스 신청 필요)** 와 **IEMOCAP·EmoBox 분할**에서도 같은 코드를 돌려 "한국어 결과가 영어 SOTA 대비 어디인지" 한 표에 넣는다.
- 보고 지표: **UA, macro-F1, WA(다수 클래스 기준선 병기), CCC(arousal/valence), ECE, 위험-커버리지 곡선 + AURC**, 화자 단위 부트스트랩 95% CI.

### 안 A (핵심 안): 한국어 화자 독립 SER 벤치마크 + 보정된 선택적 예측

| 항목 | 내용 |
|---|---|
| **제목 초안** | *Speaker-Independent Korean Conversational Speech Emotion Recognition with Annotator-Distribution Learning and Calibrated Selective Prediction* |
| **연구 질문** | RQ1: 화자 독립 한국어 자연 대화에서 SSL 백본·미세조정 방식·소프트 라벨이 UA/CCC를 얼마나 올리는가? RQ2: 소프트 라벨 학습이 ECE와 위험-커버리지 곡선을 개선하는가? RQ3: 한국어 음성 + ASR 텍스트 결합이 valence에서 이득이고, 어느 감정(불안·가라앉음 대리 클래스)에서 실패하는가? |
| **데이터** | 주: KEMDy20 (자연 대화, 40세션 80명, 외부 태거 10명) / 보조: KEMDy19 (연기 20세션 40명, 4범주 7,944발화 — Hyeon 기준선 재현) / 영어 대조: MSP-Podcast, IEMOCAP / (확보 시) AI Hub 71517·71558 방언 대화 또는 한벗 인앱 동의 데이터 |
| **프로토콜** | 세션 쌍(두 화자) 단위로 분리한 5-fold(KEMDy20), KEMDy19는 Hyeon과 같은 leave-one-speaker-out 40-fold(비교용) + 5-fold(계산 절약). 검증은 train 화자 중 별도 8~10%. 4범주 + VA 연속 + 10명 태거의 투표 분포(소프트). 다수 클래스 기준선 병기. KEMDy20 VA 라벨 존재는 데이터 확인 필요 |
| **방법 스택(순서)** | ① 백본 비교: Whisper-L-v3 vs WavLM-L vs emotion2vec+ (EmoBox: IEMOCAP UA +4.1%p Whisper 우위) ② 층 가중합 (Ma 2023: 마지막 층 대비 WA +3.5%p) ③ LoRA (Feng 2023, Ma 2025; 전체 미세조정 대비 자원 절감, 이득 크기는 미확인) ④ GAP+SAP 풀링 (Hyeon: +1.7~1.9%p, 거의 무비용) ⑤ 소프트 라벨 + KL + 다중 과제(VA) (MEDUSA: 제거 시 -8.23%) ⑥ ASR(Whisper) 텍스트 + KoBERT 계열 deep fusion (MEDUSA: late fusion 대비 +6.31%) ⑦ 3모델 앙상블/메타 분류기 (SAILER: +0.02 macro-F1) ⑧ 온도 스케일링 + 엔트로피/MC dropout 보류 (Sridhar: 25% 거부 시 CCC 상대 +7~14%) |
| **ablation** | 층 가중 on/off, LoRA rank, 풀링 4종, 소프트 vs 하드, VA 보조 on/off, 텍스트 on/off(전사 WER 별), 앙상블 크기, 보정 on/off, **fold 간 화자 성별 분리 분석**(성별별 UA) |
| **이겨야 할 기준선** | KEMDy19 LOSO-40: **UA 66.26 / WA 68.27**(Hyeon 2024). 영어 대조: MSP-Podcast 8범주 macro-F1 0.329(IS25 기준선)~0.4316, valence CCC 0.638~0.663, IEMOCAP LOSO-10 UA 75.57 |
| **기대 이득** | 한국어 4범주 UA 66→**70% 전후**(추정, 보장 아님; 소프트 라벨 +, 텍스트 +, 앙상블 +를 단순 합산하면 +5%p 정도지만 효과는 겹침). 가장 확실한 결과는 **보류 곡선**: 커버리지 75%에서 UA +수 %p |
| **최소 데이터** | 화자 ≥40명, 발화 ≥8,000(KEMDy19 7,944 + KEMDy20). 한벗 자체 데이터를 쓰면 화자 ≥30명 × 평가자 ≥3명 × ≥1,000발화 |
| **GPU·시간(추정)** | Whisper-L-v3 LoRA 한 모델 약 15 GPU시간 이하(SAILER: 12GB, 약 15시간, MSP-Podcast 전체) → 5-fold × 3 백본 ≈ 100~150 GPU시간(추정). WavLM-L 전체 LOSO-40은 실험당 약 40시간(A100)이라 생략하고 인용 |
| **목표 학술지** | 1순위 *IEEE TAFFC* 또는 *Speech Communication*; 디딤돌 Interspeech/ICASSP 4쪽(한국어 화자 독립 + 보류 곡선 요약) |
| **학술지 기대 수준(C)** | TAFFC: 새 방법 또는 새 프로토콜, 코퍼스 2~3개 이상, 유의성 검정이 일반적. Speech Communication·CSL: 체계적 비교와 언어 특이 분석도 수용하는 편. *내 인상이며 지침으로 검증하지 않음* |
| **위험** | ① 성능 이득이 작아 "방법 신규성 부족" 판정 위험 → 프로토콜·보정·한국어 분석을 기여로 명시 ② KEMDy20 클래스 불균형(neutral 우세 추정) ③ 태거 10명 투표 일관성(κ) 미확인 ④ MSP-Podcast 라이선스 지연 |

### 안 B: 합성 데이터 + 소수 샷 화자 적응 (개인화)

| 항목 | 내용 |
|---|---|
| **제목 초안** | *Few-Shot Speaker Personalization and Quality-Filtered Synthetic Speech for Korean Conversational Emotion Recognition* |
| **연구 질문** | RQ1: LLM이 만든 한국어 감정 문장을 감정 TTS로 합성한 데이터가, 자연 대화 SER(특히 valence·소수 감정)을 올리는가, 아니면 연기 데이터에서만 이득인가? RQ2: 같은 화자의 단 몇 발화(≤30초 등록)로 적응하면 화자별 CCC가 오르는가? RQ3: 두 기법이 합쳐지면 중복인가 상보적인가? |
| **데이터** | 학습·적응 평가: KEMDy20(화자 80명, 세션 내 다수 발화), KEMDy19 / 합성: LLM 생성 한국어 감정 대화문 + 한국어 감정 TTS(라이선스 확인 필요, Wiki `topic-tts-opensource-candidates-2026-11`) / 영어 일반화 확인: MSP-Podcast(화자 ID 존재, Tran 2023과 직접 비교) |
| **프로토콜** | 화자 독립 5-fold에서 테스트 화자의 **등록 발화 k ∈ {0, 1, 3, 7, 15}** 를 지정(감정 라벨 있음/없음 두 조건), 나머지로 평가. 합성 데이터는 train에만 사용, 합성:실제 = 1:2 기준 비율 스윕. 화자 단위 A-CCC(화자별 평균)과 전체 O-CCC 둘 다 보고(Tran 2023 방식) |
| **방법 스택** | ① 기준선: 안 A의 Whisper+LoRA 소프트 라벨 모델 ② **합성 증강**: LLM 감정 문장 → 감정 TTS → ASR-WER·화자 유사도·감정 분류기 필터 (Bellver-Soler 2026 파이프라인) → **전이 학습/커리큘럼으로 투입** (단순 혼합 금지; Ma 2023: 혼합 0, 커리큘럼 +4.0%p WA) ③ **무라벨 화자 적응**: 유사 화자 탐색 + 적응 세트 (Sridhar 2022: valence 상대 +13.52%) 또는 화자 임베딩 조건 사전학습 (Tran 2023: valence O-CCC +0.056) ④ **등록 발화 ICL**: 음성 LM 문맥에 해당 화자 예시를 주는 방식(NTT 2025, 초록 수준; 이득 수치 미확인) ⑤ 개인 기준선 정규화(화자 z-정규화)와의 비교 |
| **ablation** | 합성 비율(0, 0.25, 0.5, 1, 2), 합성 품질 필터 on/off, 합성 투입 방식 4종(혼합/적대/전이/커리큘럼), 적응 샷 수, 라벨 유무 적응, 화자 성별 |
| **이겨야 할 기준선** | MSP-Podcast v1.6: valence O-CCC 0.663 / arousal 0.740 (Tran 2023), A-CCC valence 0.569. 한국어: KEMDy19 LOSO-40 UA 66.26. 합성: IEMOCAP WA +4.0%p(Ma 2023) |
| **기대 이득** | 한국어 valence CCC 화자 적응 후 +0.03~0.06(영어 +0.056 유추, **한국어 근거 없음**). 합성은 +1~4%p(영어 연기 데이터 값), 자연 대화에서는 0 이하일 수 있음 → 부정적 결과도 가치(Bellver-Soler: 5개 중 2곳만) |
| **최소 데이터** | 화자당 ≥15발화(적응 15샷 + 평가), 화자 ≥40명 / 합성 5,000~10,000발화(실제의 약 절반) |
| **GPU·시간(추정)** | 합성: TTS 10,000발화 ≈ GPU 수 시간(모델 따라) + 필터 / 학습: 안 A 기준선의 2~3배(합성 곡선 5점 × 투입 4종) ≈ 150~250 GPU시간 |
| **목표 학술지** | *Computer Speech & Language*, *Speech Communication*; 디딤돌 Interspeech/ICASSP(「합성 한국어 감정 음성은 자연 대화 SER에 도움이 되는가」 단일 질문) |
| **위험** | ① 합성 불안의 과장(Yoon 2026: AI 음성의 불안은 강도 변동에만 의존) ② 적응에는 화자당 발화가 충분해야 함(KEMDy20 화자당 발화 수 미확인) ③ TTS 약관상 학습용 합성 데이터 사용 가능 여부 ④ 개인화 정보는 민감 정보(IRB·동의, `topic-tech-privacy-voice-data`) |

### 두 안 비교 및 권고

구현 난이도와 이득의 확실성은 안 A가 더 낮은 위험이다(소프트 라벨·텍스트 결합은 근거가 강하고, 합성·개인화는 자연 대화에서 불확실). **먼저 안 A**(디딤돌 Interspeech 1편 + 저널), 안 A 코드 위에 안 B를 증분한다.

"순수 성능만으로 SCI"는 영어 8범주 챌린지(참가 93팀)에서 한 자릿수 순위가 아니면 어렵고, **한국어 화자 독립 + 보정 곡선은 비교 대상이 거의 없어 SCI 투고의 현실 경로**다(내 판단, C).

---

## 7. 원문 읽은 논문 15편 요약 (각 5줄)

1. **Goncalves 외 2024, Odyssey 2024 SER Challenge** (ISCA PDF, A). MSP-Podcast 8범주·속성 두 과제, 47팀 등록·31팀(Task1)·13팀(Task2) 제출. 학습 약 6.8만 발화(남 37,370/여 30,990, 화자 1,405), 테스트는 범주 균형. 기준선 macro-F1 0.3113, 1위 Sheffield-MINI 0.3569. Task2 평균 CCC는 기준선 0.5327이 1위.
2. **Naini 외 2025, Interspeech 2025 SER Challenge** (ISCA PDF, A). 93팀, 범주 기준선 macro-F1 0.329, 1위 0.4316. 상위팀 76% 음성+텍스트 FM, WavLM 70%·Whisper 47%, 앙상블 95%, 증강 60%, 가중 CE 70%. Task 2는 1-CCC 손실 87%, SAIL 평균 CCC 0.6076. 상위권은 소프트 라벨·클래스 가중·배치 균형을 같이 씀.
3. **Chatzichristodoulou 외 2025, MEDUSA** (arXiv 2506.09556, A). DeepSER(deep fusion) 14개 모델을 4단계(전체 학습→균형 부분집합→메타 분류기→soup)로 결합, 소프트 타깃 + Manifold MixUp + 다중 과제, RTX 3090 1장. 테스트 macro-F1 0.4316 / micro 0.4319. ablation: 소프트 타깃 제거 -8.23%, deep fusion 제거 -6.31%. 앙상블은 최고 단일 대비 +7.23%.
4. **Feng·Lertpetchpun 외 2025, SAILER** (arXiv 2505.22133, A). Whisper-L-v3 + 텍스트 FM의 단순 결합으로 단일 모델 test macro-F1 0.4 초과, 12GB GPU 약 15시간. KL 분포 손실, 오디오 혼합·주석 드롭아웃(20%) 증강. 개발셋: 단일 0.411, 3모델 0.431. 다중 과제는 macro-F1 +0.005, 소수 클래스 mAP는 하락. "다운스트림 구조 영향은 작다"는 결론.
5. **Ma 외 2024, emotion2vec** (arXiv 2312.15185, A). 262시간 비라벨 감정 데이터로 온라인 증류, 동결 + 선형 헤드로 IEMOCAP WA 71.79 (5-session), 같은 fold 검증이면 74.48. MELD WA 51.88, 10개 언어에서 일반화(AESD 72.33 등). 사전학습 4×A10, 100 epoch, 에폭당 37분. 프로토콜 표에 검증=테스트 fold 표기까지 있어 부풀림을 수치로 보여주는 자료.
6. **Ma 외 2024, EmoBox** (arXiv 2406.07162, A). 32개 코퍼스·14개 언어 분할 표준화(IEMOCAP 5-fold 2화자/폴드, MELD 원 분할), 10개 SSL을 동결 마지막 층 + 얕은 헤드로 평가. Whisper-L-v3가 32곳 중 23곳 1위, WavLM-L이 31곳 top3. IEMOCAP UA 73.54, MELD UA 31.54, MSP-Podcast UA 22.24. 교차 코퍼스는 Whisper가 12쌍 중 9쌍 1위.
7. **Wagner 외 2023, Dawn of the transformer era in SER** (TPAMI, arXiv 2203.07378, A). MSP-Podcast w2v2/HuBERT 다중 과제 미세조정, 텍스트 없이 valence CCC .638, arousal .745, dominance .634. 동결 대비 미세조정은 모든 경우 우위, base≈large, valence는 사전학습 데이터 다양성이 좌우. IEMOCAP 교차 코퍼스 CCC 하락 arousal 11%·dominance 21%·valence 30%. 성별은 공정, 개별 화자는 불공정.
8. **de Oliveira·Prabhu·Gerkmann 2023, 오디오-텍스트 증류** (arXiv 2305.19184, A; audeering 차원 모델은 Wagner 2023과 동일 논문이라 대체). HuBERT 층 분석: 얕은 층은 arousal, 깊은 층은 valence. DistilHuBERT는 파라미터 약 15~20%로 arousal·dominance는 큰 모델과 동급이나 valence가 약함. 텍스트를 더하면 valence까지 동급(MSP-Podcast v1.10). 설명: 증류 모델에는 텍스트가 필수.
9. **Zhang·Chou·Narayanan·Hain 2026, VoxEmo** (arXiv 2603.08936, A). 35개 코퍼스·15개 언어에서 Qwen2-Audio·Audio Flamingo 3 평가. 제로샷은 지도보다 낮고(CREMA-D 61.9 vs 71.0) 프롬프트에 민감. LoRA SFT는 평균 macro-F1 +23.7(34/36 분할), 5,000발화 이상에서 EmoBox 지도 기준선과 동급. Qwen2-Audio는 과신, AF3는 분포가 매끈.
10. **Ma 외 2023(ICASSP 2024), Speech PTM+LLM+Emotional TTS** (arXiv 2309.10294, A). GPT-4로 감정 일치 문장 생성 → Azure 감정 TTS 합성, IEMOCAP, data2vec 선형 헤드, RTX 3090. 단순 혼합 WA 64.24(기준선 64.52), 적대 64.88, 전이 학습 68.20, 커리큘럼 68.57. 합성:실제 1:2가 최적, 더 많으면 하락. 다층 가중 + 합성 = WA 68.85 / UA 71.89. EmoDiff 합성도 이득.
11. **Tran·Yin·Soleymani 2023, 개인화 적응** (arXiv 2309.02418, A). 화자 임베딩 조건 자기지도 사전학습(PAPT) + 유사 화자 라벨 분포(PLDC)로 비지도 개인화. MSP-Podcast test-b: valence O-CCC 0.607(Vanilla)→0.663, arousal 0.712→0.740. TAPT는 0.630/0.717. σ 이동만 쓰면 A-CCC 최고(0.578), μ 이동은 오히려 악화. 미보 화자(test-c)에도 적용.
12. **Shen·Fang 외 2025, Meta-PerSER** (arXiv 2505.16220, A 부분) + **Ihori 외 2025 NTT ICL 개인화** (arXiv 2509.08344, A 부분). Meta-PerSER: 청자 주석 스타일에 MAML 적응, 본 데이터 +1~2%p, 미본 데이터 최대 +7%p, 샷 2→32에서 상승·64에서 소폭 하락. NTT: 음성 LM에 화자의 몇 발화+라벨을 문맥으로 제공, 등록 발화가 늘수록 향상. 수치 대부분이 그림이라 일부 미추출.
13. **Schrüfer 외 2024, Are you sure? UQ for SER** (arXiv 2407.01143, A). 엔트로피·MC dropout·EDL·Prior Network를 EmoDB·CREMA-D·MSP-test1(4범주)에서 비교. 훈련에 없던 감정에서 불확실도 상승(EmoDB CE .333→.850). 주석 일치도와 상관은 -.08~-.26로 약함. OOD 데이터를 훈련에 넣은 Prior Network가 가장 구분력이 높음. ECE·위험-커버리지는 보고 없음.
14. **Hyeon·Oh·Choi 2024, GAP+SAP 풀링** (arXiv 2410.12416, A). WavLM-L 전체 미세조정(316M), 비음성 구간을 제외하는 SAP를 GAP과 결합 + 다중 과제 가중 0.5/0.25/0.25, 투영 32차원. IEMOCAP LOSO-10: UA 75.57 / WA 74.77. **KEMDy19 LOSO-40**: UA 66.26 / WA 68.27, 클래스별 최저는 happy. 실험당 A100 40GB에서 IEMOCAP 약 8시간, KEMDy19 약 40시간. 한국어 화자 독립 기준선 중 유일하게 CI 포함.
15. **Chen·Hong·Li·Chun 2023, F0 perturbation in focus marking** (PLoS ONE, 본문 A; 한국어 감정 운율 논문 원문은 접근 불가라 대체). 서울말 19명(1명 제외)·도쿄 일본어 13명, 초점 조건별 평음·격음·경음 뒤 모음 F0. 초점 위치에서 자음 효과 증폭, 전후 압축. 한국어는 어휘 수준 F0 구별이 있어 감정 F0 해석에 음소 통제가 필요. 감정 직접 논문(Oh 2024, Yoon 2026)은 B 유지.

---

## 8. Wiki 적재 후보 (≤30, 기존 slug 확인)

**기존 slug 확인 결과**: 이미 있음(중복 금지) → medusa, goncalves-2024-odyssey, isca-2025-msp-podcast-challenge, ma-2024-emotion2vec, ma-2024-emobox, wagner-2023, hyeon-2025-segmental-pooling, sridhar-2020/2021/2022, chou-2023, prabhu-2024, goron-2024, harm-2024-taltech, cao-2025 두 건, noh-2021-mpgln, jun-2024, feng-2023-peft, ma-2025-lora, lab-unist-kim-taehwan, lab-unist-oakley-hong-hci, topic-collab-unist-affective-labs.

| # | 제안 slug | 내용 | 신규/갱신 | 등급 |
|---|---|---|---|---|
| 1 | `src-feng-2025-sailer-is25-ser` | SAILER, 단일 Whisper+텍스트, KL·증강, 15 GPU시간 | 신규 | A |
| 2 | `src-zhang-2026-voxemo-speech-llm-ser` | 음성 LLM 제로샷 vs LoRA SFT, 소프트 라벨 평가 | 신규 | A |
| 3 | `src-ma-2023-synthetic-tts-ser` | GPT-4 + 감정 TTS 증강, 커리큘럼 +4.0%p | 신규 | A |
| 7 | `src-schrufer-2024-uq-ser` | UQ 4방법, 주석 일치도 상관 약함 | 신규 | A |
| 8 | `src-deoliveira-2023-distilled-audio-text-ser` | 층 중요도, 증류 + 텍스트 | 신규 | A |
| 17 | `src-oh-2024-korean-vocal-emotion-acoustics` | 한국어 4감정 음향 표지·성별 | 신규 | B |
| 18 | `src-yoon-2026-human-vs-ai-korean-voices` | 사람 vs AI 한국어 음성, 불안 최저 | 신규 | B |
| 19 | `src-yoon-2026-lowpass-korean-gender-emotion` | AI Hub 저역통과, 성별과 감정 지각 | 신규 | B |
| 20 | `src-chen-2023-f0-perturbation-focus-ko-ja` | 한국어 자음-F0 교란 | 신규 | A |
| 23 | `topic-ser-sota-benchmark-table-2026-11` | §1 표(프로토콜 부풀림 포함) | 신규 topic | A/B |
| 24 | `topic-ser-needle-movers-effect-sizes` | §2 표 | 신규 topic | A/B |
| 25 | `topic-ser-selective-prediction-reporting` | §3 표, ECE/AURC 빈칸 | 신규 topic | A/B |
| 26 | `topic-ser-korean-benchmarks-and-prosody` | §4 표 | 신규 topic | A/B |
| 27 | `topic-paper-design-ser-sci` | §6 두 안 | 신규 topic | C |
| 28 | `src-goncalves-2024-odyssey-challenge` | Task 1·2 표(1~3위, 기준선) 보강 | 갱신 | A |
| 29 | `src-hyeon-2025-segmental-pooling` | KEMDy19 LOSO-40 수치·클래스 분포·GPU 시간 보강 | 갱신 | A |
| 30 | `topic-collab-unist-affective-labs` + `lab-unist-kim-taehwan` | §5 UNIST 음성·오디오 ML 논문(ICCV 2023, Interspeech 2025) 추가, Jang G.J. 그룹 | 갱신 | B |

---

## 9. 빈 곳

1. **ECE·AURC 수치**: Chou 2023(Interspeech) 원문 미확보로 ECE 개선 폭을 모른다. Sridhar 2021·Prabhu 2024·EmoConfidNet의 본문 수치도 초록 수준(B).
2. **IS25 2~3위 시스템 외 상세**: ABHINAYA(SALMONN-13B + LLaMA-3, 0.4181) 등 음성 LLM 기반 상위권의 ablation은 읽지 못했다.
3. **한국어 *감정* 운율 논문 원문**: Oh 2024, Yoon 2026 두 편은 원문 접근 불가(B). 대체로 읽은 PLoS ONE 한국어 F0 논문은 감정이 아님.
4. **KEMDy20 통계**: 총 시간·발화 수·클래스 분포·VA 라벨 존재 여부 미확인. KEMDy19 샘플 수가 논문마다 다름(7,944 vs 12,457).
5. **KEMDy19/20 소프트 라벨 가능성**: 태거별 투표 파일이 공개 분할에 포함되는지 직접 확인 필요.
6. **음성 LLM 한국어 성능**: VoxEmo 35개 코퍼스에 KEMDy 포함 여부 미확인(본문 데이터 표 미열람).
7. **UNIST**: "Kim T." 저자 동일성, Jang G.J.의 현재 소속, 김태환 연구실이 한국어 감정 음성 데이터를 다루는지 모두 미확인.
8. **학술지 기준·MSP-Podcast 라이선스·다음 챌린지 일정**: §6의 학술지 기대 수준은 지침 페이지로 검증하지 않았고(C), MSP-Podcast 신청 절차·2026 하반기 챌린지도 조사하지 않았다.
