---
title: "topic-ser-label-count-calibration-evidence"
tags: ["scopus-2026-11", "ser", "label-scheme", "calibration", "fusion", "low-arousal", "empathy", "verified"]
created: 2026-11-07T18:44:31.294Z
updated: 2026-11-07T19:54:44.050Z
sources: ["research_notes/Scopus 조사/02_labels_calibration_fusion_unist.md", ".omc/orchestra/reviews/20261108_032202_verify_02_labels_calibration_fusion_unist.md", "docs/harness/감정-인식-계획.md", "research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md"]
links: ["topic-scopus-literature-2026-11.md", "topic-ser-label-scheme-and-fusion.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-app-9-ser-evaluation-and-calibration.md", "topic-tts-humanlike-techniques.md", "src-atmaja-2022-class-count-failure.md", "src-yoon-2018-audio-text-dre.md", "src-kumawat-2025-mixed-emotion.md", "src-kumawat-2025-annotator-softlabel.md", "src-chatzichristodoulou-2025-medusa.md", "src-wagner-2023-transformer-era.md", "src-chien-2025-conversation-vs-monologue.md", "src-alhussein-2025-ser-conversation-metaanalysis.md", "src-sridhar-2020-uncertainty-reject.md", "src-sridhar-2021-softlabel-reject.md", "src-chou-2023-ser-calibration.md", "src-prabhu-2024-label-uncertainty.md", "src-yi-2024-kohmt-korean-fusion.md", "src-kim-2023-korean-depression-speech.md", "src-briganti-2025-depression-voice-review.md", "src-yamada-2021-loneliness-speech.md", "src-ben-gurion-2025-depression-selfreport.md", "src-lee-2020-driver-anxiety-biosignal.md", "src-hu-2023-hue-acoustic-emotion-ca.md", "src-cho-2022-alexa-backchannel.md", "src-varadhan-2025-tts-human-fooling.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "src-schrufer-2024-uq-ser.md", "topic-ser-performance-levers-2026-11.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-ser-label-count-calibration-evidence

상위: [[topic-scopus-literature-2026-11]] · [[topic-ser-label-scheme-and-fusion]] · [[claim-app-3-emotion-cue-confirmation-rules]] · [[claim-app-9-ser-evaluation-and-calibration]] · [[topic-tts-humanlike-techniques]]. 출처: Scopus 분석 노트 02(초록 기준) + 검증표(2026-11-08, A64/B8/C35). 등급은 주장 단위. 설계 제안(5감정·25%·3명 등)은 논문이 검증한 값이 아니라 작성자 제안이다.

## 1. 감정 개수·체계 근거
| 체계 | 논문 | 수치(초록 기준) | 검증 메모 |
|---|---|---|---|
| 이진 vs 다클래스 | [[src-atmaja-2022-class-count-failure]] | 이진 감성 WA 81%·UA 73%, 6감정·3/7 감성은 "정확한 예측 실패" | A. 6+클래스 음성 단독 불가의 일반 결론은 C |
| 4클래스 | Issa 2020 IEMOCAP 64.3%(화자 독립), [[src-yoon-2018-audio-text-dre]] 68.8~71.8% | RAVDESS 8클래스 71.61%, EMO-DB 7클래스 86.1%/95.71% | A. "데이터 성격이 클래스 수보다 크다"는 통제 비교가 아니라 C |
| 혼합 감정 | [[src-kumawat-2025-mixed-emotion]] | 원형 6+비원형 7, +7.10%(MFCC)/+8.39%(wav2vec 2.0) | A. 최선 조건의 개선폭 |
| 소프트 라벨 | [[src-kumawat-2025-annotator-softlabel]], [[src-chatzichristodoulou-2025-medusa]] | UWA +6.80%(IEMOCAP)/+2.73%(MSP-Podcast) | B. 상대 %/ %p 미확인 |
| 차원 | [[src-wagner-2023-transformer-era]] | valence CCC 0.638(명시적 텍스트 없이) | A |
| 3단계 축 | Chou 2020(10.21437/Interspeech.2020-1714) | IEMOCAP·NNIME 정서가/각성 UAR +3.97/+1.48, +1.71/+2.87. 타깃 평가자 주석 50%만 추가해도 100% 모델을 대체로 상회 | A. 3단계 축 사용 사례이지 "표준" 입증은 아님. 거친→세밀 계층의 직접 증거는 "검토한 초록에서 못 찾음" |
| 자연 대화 일치도 | [[src-chien-2025-conversation-vs-monologue]], MSP-Podcast κ 0.411·합의 없음 약 17.98% | 대화가 독백보다 평가자 일관성이 상대적으로 높음 | A. 낮은 일치도의 원인이 8클래스·자연 발화라는 인과는 C |
| 대화 SER 메타분석 | [[src-alhussein-2025-ser-conversation-metaanalysis]] | 51편 고찰 중 27편 메타분석, 이질성 높음 | A |
| 라벨 규칙 | CVPRW 2023(10.1109/CVPRW59228.2023.00619) | 이진화 임계 변경으로 가중 F1 평균 +7% | A. 라벨 규칙의 중요성은 지지하나 "모델보다 중요"는 C |
| GoEmotions 묶음 | Wiki 수치 | BERT macro-F1 .46 → .64 → .69 | A. **분류 수는 28→7→4(중립 포함)**. 기존 "27→6→4" 표기는 중립을 뺀 것 |

### 권고 (제안, 최적성 미검증 C)
- 평가용: 4감정(분노·기쁨·중립·슬픔) + 정서가·각성 3단계 + 평가자 분포 + 판정보류 커버리지-위험 곡선. 평가자는 발화당 3명 이상(MSP-Conversation은 5명 이상, "3명이면 충분"의 검증은 없음). 표본은 계획의 200발화 이상·10명 이상.
- 제품용: 5감정(답답함·밝음·가라앉음·불안·중립) + 판정보류 + 2축. 불안은 텍스트 우선 라벨, 가라앉음은 축 조건(정서가 낮음 AND 각성 낮음)으로 정의. 6번째 이후 라벨은 질문에 쓰지 않고 내부 로그만.
- 논문용: 4감정 + 정서가/각성 + 보류 곡선 + 평가자 분포. 기여점은 한국어 자연 대화의 보류 정책과 확인 질문 수용률.
- 6감정 이상으로 확대하지 않는다: 확대의 이득 증거가 없다는 관찰이며(검토 범위 한정), 확대가 해롭다는 증명은 아니다.

## 2. 보정·불확실성·보류
| 주제 | 논문 | 수치 | 메모 |
|---|---|---|---|
| 거부 25% | [[src-sridhar-2020-uncertainty-reject]] | CCC 상대 각성 +7.34%, 정서가 +13.73%, 지배 +8.79% | A. 회귀(CCC) 결과 |
| 커버리지 60% | [[src-sridhar-2021-softlabel-reject]] | 정서가 +16.85%, 각성 +7.12%, 지배 +8.01% | A |
| 온도 보정 | [[src-chou-2023-ser-calibration]] (동일 논문 확인 A) | 본문 표 1: BCE 모델 ECE 0.335→0.276, 클래스 균형 모델 0.311→0.263 | 초록에는 ECE 없음, 본문에는 있음. 저각성 파일의 정신증 음성 연구에 ECE 0.045이 있으나 과제가 달라 비교 불가 |
| 분포 학습 | [[src-prabhu-2024-label-uncertainty]] | 평가자 적고 상관 높을수록 Student-t 유리 | A. "3명 이하라 t분포가 맞다"는 C |
- 보류 약 25%(커버리지 약 75%)는 시작값이며 한국어 제품 최적 정책이라는 근거는 없다(C). W3 calib 세트에서 60/75/100% 곡선으로 확정. ECE는 한벗 데이터로 직접 측정.

## 3. 결합·맥락
| 주제 | 논문 | 수치 | 메모 |
|---|---|---|---|
| 오디오+텍스트 | [[src-yoon-2018-audio-text-dre]], Peng 2021 ASR 조건 | WA +5.0%, UA +5.2%(기존 방법 대비) | A |
| 정서가 | 교사-학생 ICASSP 2022 | MSP-Podcast CCC 활성 0.757/정서가 0.627/지배 0.671 | A. "정서가는 텍스트, 각성은 소리"는 배타적 규칙이 아니라 설계 해석(C). Wagner는 음성만으로 0.638 |
| 한국어 결합 | [[src-yi-2024-kohmt-korean-fusion]] | 77.01%, F1 0.7703 | A. AI-HUB 7감정 9:1 분할, 결론부 73.13% 내부 불일치 |
| 맥락 | HiGRU(10.18653/v1/N19-1037) | 최소 개선폭 +8.7/+7.5/+6.0%, IEMOCAP 텍스트만 +3.8% | A. **DOI 있음**. 맥락 유무만 분리한 비교 아님 |
| LLM ERC | DialogueLLM(10.1016/j.neunet.2025.107901) | 7B LoRA, A100 40GB 5시간 | A. **평가셋 MELD·IEMOCAP·EmoryNLP**. 한국어 검증 없음은 사실, 영어·중국어 중심 서술은 불일치 |
| 맥락 길이 | EmoBERTa(IEMOCAP 56.09→68.57, weighted F1 +12.48%p) | 위키 +12.5점 확인 A | 6~10턴·0/2/6/10턴은 실험 계획값. W3 자체 실험이 "유일한 근거"는 불일치(외부에도 있음), "제품에 대한 직접 근거"로 좁힐 것 |

## 4. 저각성 (표본 단서 필수)
| 대상 | 논문 | 수치 | 표본·한계 |
|---|---|---|---|
| 한국어 우울 | [[src-kim-2023-korean-depression-speech]] | 153 vs 165, 78.14% | 낭독, 임상 vs 대조 |
| 우울 종합 | [[src-briganti-2025-depression-voice-review]] | 12편, AUC 0.71~0.93, 6편 고편향 | 임상·모바일 혼재 |
| 우울 표지 | Deng 2025(10.21437/Interspeech.2025-1968) | 낮은 음량·F0, 긴 발화가 유리 | D-vlog 데이터 |
| 양극성 | Min 2025(10.2196/79093) | 92명 304녹음, AUC 0.76 대 0.54 | **환자 내 우울 심각도 분류**(환자 vs 건강인 아님) |
| 외로움 | [[src-yamada-2021-loneliness-speech]] | 고령자 57명, 95.6% | 고령자, 교차검증, 낙관적 가능 |
| 자기보고 | [[src-ben-gurion-2025-depression-selfreport]] | 한 문항 86%, 음향 추가 92%(p=0.1) | 만성통증 외래, 143명 중 52명 하위집단 |
| 불안 | [[src-lee-2020-driver-anxiety-biosignal]] | EEG 77.01%, 나머지 우연 수준 | 분석 23명, 영상 시청 |
- 해석 정정: 인용 연구가 **모두** "임상 환자 vs 건강 대조 또는 고령자"는 아니다(양극성 환자 내 비교, 만성통증 외래 집단 포함). 공통점은 "일반 청년 대화의 오탐률을 측정한 연구가 이번 선정 범위에 없음"이다. **대학생 일상 대화에서의 오탐률은 알려져 있지 않다.**
- 한국어 직접 증거 두 건(Kim 2023, Min 2025)이 이 범위의 전부라는 것은 "선정 자료 범위의 관찰"이다.
- 오탐 방어(개인 기준선·지속 변화·열린 질문)는 합리적 설계 가설일 뿐 오탐 감소율은 미검증(C).

## 5. 공감 체감·감정 TTS
| 요소 | 논문 | 결과 | 메모 |
|---|---|---|---|
| 감정 인지 응답 | [[src-hu-2023-hue-acoustic-emotion-ca]] | N=75, PEI 증가 | 통계적 유의는 확인 못 함(C) |
| 맞장구 | [[src-cho-2022-alexa-backchannel]] | N=40, 청취 지각·정서 노출 증가 | 의사난수 백채널 |
| 정서 운율 | Zhu 2022(10.1145/3543829.3543840) | 표현도↑ 참여도·인간다움·호감↑ | B. 상한 없음 |
| 떨리는 목소리 | Empathy by Design(10.1109/TAFFC.2023.3332742) | 기부 의사·CTR 증가 | 자선 맥락. 조작 위험, 한벗은 쓰지 않음 |
| 맥락 TTS | ECSS(10.1609/aaai.v38i17.29833) | 대화 이력 그래프, 기준선 상회 | A. `previous_text` API 입력 설계의 직접 검증은 아님(C) |
| 사람 기만 | [[src-varadhan-2025-tts-human-fooling]] | 상용 근접, 오픈소스 대화체 취약 | A |
| 필러 | Kirkland 2022 | 자신 있게 들린 발화=필러 없음+낮은 f0+빠른 속도 | 지연 은폐 효과는 이 연구가 검증한 것이 아님 |
| 공감 척도 | JMIR FR 2025(10.2196/69329) | 306명, 9종, r=.829, PEI χ²=11.865 p=.003 | A. 심리학과 1학년이나 평균 30세 |
- **지연 수치**: Scopus TTS 파일에 50ms 미만, 500ms 미만 지연 보고가 있다(예: 10.1109/ICEMCSI67638.2026.11602916). 단 TTS 모듈 지표이지 대화 앱 전체 응답 지연이 아니다. **"첫 소리까지 1~1.5초"는 연구로 확정된 최적값이 아니라 제품 목표값**이다.
- "사람처럼 들리는 데에는 인식 정답보다 반응 방식이 효과"는 직접 비교 실험이 없어 C. 반응 방식의 효과 자체는 확인됨.

## 6. 확인 질문 규칙 v2 (제안)
| 상황 | 조건 | 질문 형태 |
|---|---|---|
| 일치·확신 | 보정 신뢰도 높음, 글·소리 일치 | 질문하지 않거나 가볍게 되받음 |
| 불일치 | 글 긍정+소리 가라앉음(또는 반대) | 소프트 확인 ("괜찮다고 했는데 목소리는 좀 가라앉은 것 같아. 맞아?") |
| 판정보류 | 신뢰도 낮음·1·2위 근접 | 라벨을 말하지 않고 열린 질문 |
| 저각성 부정 | 축 조건+개인 기준선 대비 변화 지속 | 부드러운 체크인. "우울"·"외로움" 단어 금지 |
| 위기 | 텍스트 위기 단서(max 규칙) | 별도 흐름 [[claim-app-10-crisis-state-machine-and-evaluation]] |
빈도 상한(3턴 1회, 10턴 2회)은 근거 미확보(계획서에 미확정 표기). 사용자가 정정하면 해당 세션 같은 유형 질문 중지.

## 7. 빈 곳
ECE 외 다수 지표, 자연 대화 클래스 수별 통제 비교, 거친→세밀 계층 직접 증거, 한국어 LLM ERC, 대학생 일상 저각성 오탐률, 한국어 감정 TTS 사용자 연구. 모두 "검토한 초록에서 찾지 못함"이며 분야 전체의 부재를 단정하지 않는다. 읽기 범위(약 430건 훑음, 약 75건 초록 전문)는 개별 열람 기록이 없어 확인 불가(C).

---

## Update (2026-11-07T19:54:44.050Z)

## 2026-11-08 SER SOTA 문헌 반영
- Sridhar 2021 초록에 V/A/D 상대 +16.85/+7.12/+8.01%가 명시됨(노트 05의 "수치 초록에 없음"은 정정).
- Chou 2023: BCE ECE 0.335->0.276, CBL 0.311->0.263, macro-F1 최고 조합 0.328->0.270.
- Schrufer 2024: 모델 불확실도와 주석 일치도 상관은 약함(-.08~-.19) [[src-schrufer-2024-uq-ser]].
- AURC 보고 SER 논문은 읽은 범위에서 0건. 상세 [[topic-ser-performance-levers-2026-11]].
