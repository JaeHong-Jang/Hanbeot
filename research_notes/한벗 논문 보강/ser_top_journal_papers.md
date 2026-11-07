# 음성 감정 인식(SER) 상위 저널 논문 목록

작성일 2026-11-05. 기존 노트(`ser_limits_papers.md`, `_existing_papers.md`)가 arXiv·Interspeech 학회 위주라, 이 노트는 **저널 논문**만 모았다.

## 임팩트 팩터(IF) 표기 주의

- Clarivate JCR 원본은 접근 권한이 필요해 직접 확인하지 못했다. 아래 IF는 제3자 사이트(journalmetrics.org, scijournal.org, myhuiban 등) 값이며 사이트마다 다르다.
- **(미확인)**은 이번 검색에서 수치를 확인하지 못하고 대략적인 수준만 적은 것이다. 인용 전에 학교 도서관에서 JCR로 확인한다.

| 저널 | IF(제3자 값) | 비고 |
|---|---|---|
| IEEE TPAMI | 약 20.8 | AI 저널 1위(IEEE CS 2025 보도자료) |
| Nature Human Behaviour | 15.9~19.7 (사이트마다 다름) | |
| Information Fusion | 15.5 | |
| IEEE Trans. Affective Computing (TAC) | 9.8~11.7 (사이트마다 다름) | 감정 컴퓨팅 분야 대표 저널 |
| Psychological Bulletin / Psych. Science in the Public Interest | 높은 편 (미확인) | 심리학 최상위 |
| Expert Systems with Applications | 7~8대 (미확인) | |
| IEEE JSTSP | 높은 편 (미확인) | |
| Communications of the ACM | (미확인) | 리뷰 매거진 |
| Speech Communication | 2~3대 (미확인) | IF는 낮지만 음성 분야 고전 리뷰가 여기에 많음 |

## 1. 분야 개관·리뷰

| 논문 | 저널·서지 | 핵심 | 한벗 활용 |
|---|---|---|---|
| Latif, Rana, Khalifa, Jurdak, Qadir, Schuller. Survey of Deep Representation Learning for Speech Emotion Recognition | IEEE TAC 14(2):1634–1654, 2023. doi:10.1109/TAFFC.2021.3114365 | SER 딥 표현학습을 처음 종합한 서베이 | 기술 배경 설명의 1순위 인용 |
| Schuller. Speech emotion recognition: two decades in a nutshell, benchmarks, and ongoing trends | Commun. ACM 61(5):90–99, 2018. doi:10.1145/3129340 | 20년 연구 정리. 감정 표현 방식(범주·차원), 라벨 잡음, 실사용 과제 | 발표용 "분야 개관" 인용 |
| Akçay, Oğuz. Speech emotion recognition: Emotional models, databases, features, preprocessing methods, supporting modalities, and classifiers | Speech Communication 116:56–76, 2020. doi:10.1016/j.specom.2019.12.001 | 감정 모델·데이터셋·특징·분류기 종합 리뷰. Scopus 인용 약 620회(저장소 기록 시점) | 용어·데이터셋 정리용 |

## 2. 모델·특징 (한벗 스택과 직결)

| 논문 | 저널·서지 | 핵심 | 한벗 활용 |
|---|---|---|---|
| Wagner, Triantafyllopoulos 외. Dawn of the Transformer Era in Speech Emotion Recognition: Closing the Valence Gap | IEEE TPAMI 45(9):10745–10759, 2023. doi:10.1109/TPAMI.2023.3263585 | wav2vec 2.0·HuBERT 미세조정. MSP-Podcast 정서가(valence) CCC .638(텍스트 입력 없이). 성별 간 공정하지만 **화자 간 공정하지 않음**. 모델 공개 | emotion2vec+ 선택 근거·한계 동시 인용. "화자별 편차" 리스크 근거 |
| Chen 외. WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing | IEEE JSTSP 16(6):1505–1518, 2022. doi:10.1109/JSTSP.2022.3188113 | 마스킹 예측과 잡음 제거를 함께 학습한 자기지도 모델. SUPERB(감정 인식 포함) SOTA | 백본 대안 근거 |
| Eyben, Scherer, Schuller 외. The Geneva Minimalistic Acoustic Parameter Set (GeMAPS) for Voice Research and Affective Computing | IEEE TAC 7(2):190–202, 2016. doi:10.1109/TAFFC.2015.2457417 | 표준 최소 음향 특징 세트. openSMILE에 구현. CC BY 4.0 공개 | 설계서 5⑤ 운율 지표(eGeMAPS)의 원 논문 |
| Ahn, Rana, Busso, Rajapakse. Multitask Transformer for Cross-Corpus Speech Emotion Recognition | IEEE TAC 16(3):1581–1591, 2025 | 다른 코퍼스에서의 성능 저하를 다중 과제 트랜스포머로 개선 | "공개 데이터 성능이 한국어 실사용으로 이어지지 않는다" 리스크 근거 |
| Latif 외. Self supervised adversarial domain adaptation for cross-corpus and cross-language SER | IEEE TAC 14(3), 2023 | 코퍼스·언어가 바뀔 때의 도메인 적응 | 한국어 적용 시 성능 저하 대응 근거 |
| Kwon(세종대), Mustaqeem. MLT-DNet: Speech emotion recognition using 1D dilated CNN based on multi-learning trick approach | Expert Syst. Appl. 167:114177, 2021. doi:10.1016/j.eswa.2020.114177 | 국내 연구진의 경량 CNN SER | 국내 연구 사례. 초록 미확인 |
| Khan, Gueaieb, El-Saddik, Kwon. MSER: Multimodal speech emotion recognition using cross-attention with deep fusion | Expert Syst. Appl. 245:122946, 2024 | 음성+텍스트 교차 어텐션 융합 | 텍스트+음성 결합 설계 근거. 초록 미확인 |

## 3. 데이터셋·라벨

| 논문 | 저널·서지 | 핵심 | 한벗 활용 |
|---|---|---|---|
| Lotfian, Busso. Building Naturalistic Emotionally Balanced Speech Corpus by Retrieving Emotional Speech From Existing Podcast Recordings | IEEE TAC, 2019. doi:10.1109/TAFFC.2017.2736999 | MSP-Podcast 코퍼스의 원 논문. 연기가 아닌 자연 발화 | 연기 데이터와 자연 발화의 차이 설명 |
| Chou, Goncalves, Leem, Salman, Lee, Busso (평가자 불일치·라벨 집계 연구) | IEEE 계열(NSF 공개본). 정확한 저널은 미확인 | 기존 다수결 집계는 데이터의 5.63~89.17%를 버림. 평가자 불일치는 잡음이 아니라 정보 | 0.6 임계값·확인 질문 설계의 근거. **저널명 확인 필요** |

## 4. 심리학 근거: 목소리에서 감정을 얼마나 읽을 수 있나

| 논문 | 저널·서지 | 핵심 | 한벗 활용 |
|---|---|---|---|
| Cowen, Laukka, Elfenbein, Liu, Keltner. The primacy of categories in the recognition of 12 emotions in speech prosody across two cultures | Nature Human Behaviour 3(4):369–382, 2019 | 미국·인도 참가자가 2,519개 음성 샘플 판단. 운율로 최소 12개 감정 범주가 두 문화에서 전달됨. 범주 사이는 혼합 감정으로 연속적 | "억양에 감정 단서가 실제로 있다"는 근거. 다만 한국어는 미포함 |
| Juslin, Laukka. Communication of Emotions in Vocal Expression and Music Performance: Different Channels, Same Code? | Psychological Bulletin 129(5):770–814, 2003. doi:10.1037/0033-2909.129.5.770 | 음성 104편, 음악 41편 메타분석. 감정별 음향 단서 패턴 정리 | 속도·음높이·멈춤 지표 선택의 고전 근거 |
| Barrett, Adolphs, Marsella, Martinez, Pollak. Emotional Expressions Reconsidered: Challenges to Inferring Emotion From Human Facial Movements | Psych. Sci. Public Interest 20(1):1–68, 2019. doi:10.1177/1529100619832930 | **얼굴** 표정에서 감정을 신뢰성 있게 추론한다는 통념은 근거가 약함 | 음성 논문은 아니지만, 감정을 단정하지 않고 "확인 질문"으로만 쓰는 설계의 이론 근거로 인용 가능 |

## 5. 정신건강 응용 (한벗은 진단에 쓰지 않음)

| 논문 | 저널·서지 | 핵심 | 한벗 활용 |
|---|---|---|---|
| Cummins, Scherer, Krajewski, Schnieder, Epps, Quatieri. A review of depression and suicide risk assessment using speech analysis | Speech Communication 71:10–49, 2015. doi:10.1016/j.specom.2015.03.004 | 음성 기반 우울·자살 위험 평가 리뷰 | "음성 지표를 위기 탐지에 쓰지 않는 이유" 논의에 인용. 본문 미확인 |

## 확인 못 한 것

- KEMDy19·KEMDy20(ETRI) 한국어 데이터셋을 쓴 **SCIE 상위 저널** SER 논문은 이번에 찾지 못했다. 국내 사례는 Sensors(Noh 외 2021), Applied Sciences(2023), Electronics(KoHMT 2024) 등 MDPI 계열뿐이다.
- Information Fusion에 실린 음성 단독 SER 리뷰는 찾지 못했다. 멀티모달 리뷰로 Jiang 외 2020(doi:10.1016/j.inffus.2019.06.019)이 있다.
- 각 논문의 본문 수치는 대부분 초록·서지 수준에서만 확인했다(Wagner 2023의 CCC .638은 초록 수치).
