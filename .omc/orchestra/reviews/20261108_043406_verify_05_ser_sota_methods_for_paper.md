**주요 실험값은 상당수 일치하지만, SOTA 상한·평가 구간·상대 변화율·학습 시간 해석에는 수정이 필요합니다.** 반복된 주장은 합쳤습니다. DOI·arXiv 번호는 연결 가능한 URL로 풀었고, 새로 찾은 근거는 ‘추가 확인’으로 표시했습니다.

A/B/C는 **메모에 적은 확인·정정 값의 근거 수준**입니다. 따라서 ‘불일치/A’는 원문에서 정정값을 직접 확인했다는 뜻입니다. 연구계획의 목표·추정치는 실측값이 아니므로 C로 표시했습니다.

웹 외에 로컬 [검색 로그](</mnt/c/Users/User/Desktop/대학교/3학년/창업(개인 맞춤형 AI 동반자 서비스)/research_notes/Scopus 조사/run2.log>), `raw2`의 Scopus 초록, `.omc/wiki` 파일도 대조했습니다.

조사 범위와 문헌 수에 대한 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 대상 쿼리 10개, 수집 결과 1,450건 | URL 없음; 로컬 검색 로그·raw2 | 해당 JSONL 행 수 합산 | 일치 | A | 합계 1,450건. 중복 제거하면 **1,369편**이므로 고유 논문 1,450편이라는 뜻은 아님. |
| 쿼리별 인용 상위 30편·2024~26년 상위 25편·한국어 관련 전부, 약 500편의 초록을 읽음 | URL 없음 | 검색 설정·저장 파일 확인 | 확인불가 | C | 수집은 인용순 정렬로 확인되지만 실제 열람 목록·선별 기록이 없음. |
| selective prediction 쿼리의 절반 이상이 EEG 논문 | URL 없음; raw2 | 제목·초록의 EEG 관련 표현 검색 | 확인불가 | C | EEG·electroencephal 명시 항목은 **34/150건**. ‘절반 이상’을 뒷받침할 분류표가 없음. |
| audio-LLM·한국어 쿼리에 무관한 논문이 섞임 | URL 없음; raw2 | 제목·초록 표본 대조 | 일치 | B | 정치·문화·비음성 감정 연구 등의 혼입은 확인됨. 비율은 산출하지 못함. |
| UNIST 검색 200건 중 197건이 UNIST 소속 | URL 없음; 검색 로그·raw2 | 소속 필드 집계 | 일치 | A | 검색 전체 적중은 **223건**, 저장분은 200건, UNIST 소속 문자열 포함은 197건. |
| UNIST 결과 약 85%가 비음성 분야, 음성·오디오 ML은 약 20편 | URL 없음 | 저장 결과·분류 근거 확인 | 확인불가 | C | 혼입은 확인되지만 85%·20편의 판정 기준과 목록이 없음. |
| 원문을 읽은 논문은 15편 | §7 목록 | 독립 논문 수 계산 | 불일치 | A | 12번 항목에 Meta-PerSER와 NTT 논문이 함께 들어 있어 **고유 논문은 16편**. 실제 열람 여부는 별도 확인불가. |
| 초록 밖 숫자는 만들지 않았음 | 작성자 선언 | 수치의 출처 추적 | 확인불가 | C | 작성 과정을 검증할 기록은 없음. 아래처럼 원문과 다른 조건·해석은 발견됨. |

벤치마크 수치와 평가 조건을 대조한 결과입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Odyssey 2024: 8범주·화자 독립·균형 Test3, 47팀 등록·Task1 31팀·Task2 13팀 | [Goncalves 2024](https://www.isca-archive.org/odyssey_2024/goncalves24_odyssey.pdf) | 본문 §2·3·5 | 일치 | A | 해당 챌린지 조건으로 한정해야 함. |
| Odyssey 학습 약 6.8만 발화, 남 37,370·여 30,990, 화자 1,405명 | [같은 원문](https://www.isca-archive.org/odyssey_2024/goncalves24_odyssey.pdf) | 표 1·데이터 설명 | 일치 | A | 정확한 학습 발화 합계는 **68,360**. |
| Odyssey Task1 기준선 macro/micro 0.3113/0.3272, 1위 0.3569/0.3732, 2·3위 0.3543·0.3441 | [같은 원문](https://www.isca-archive.org/odyssey_2024/goncalves24_odyssey.pdf) | 표 4 | 일치 | A | 노트처럼 표의 열 이름을 기준으로 인용하는 것이 적절함. |
| Odyssey Task2 기준선 평균 CCC 0.5327이 1위, AIST 0.5297 | [같은 원문](https://www.isca-archive.org/odyssey_2024/goncalves24_odyssey.pdf) | 표 5 | 일치 | A | 참가 시스템이 기준선을 넘지 못했다는 설명도 부합. |
| IS25에 93팀 참가 | [Naini 2025](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 초록·결과 절 | 일치 | A | **챌린지 전체 참가팀 수**. Task1 제출 166건·Task2 제출 111건과 구별해야 함. |
| IS25 Task1 기준선 macro/micro 0.329/0.355, NTUA 0.4316·SAIL 0.4281·ABHINAYA 0.4181 | [같은 원문](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 표 1·2 | 일치 | A | ‘2025 챌린지 순위’로 확인됨. |
| IS25 Task2 기준선 평균 0.579, A/V/D 0.623/0.638/0.477; 상위 0.6076·0.6003·0.5955 | [같은 원문](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 표 1·2 | 일치 | A | 순서대로 SAIL·SRPOL·SEU.AIPLab. |
| ‘챌린지 평균 CCC가 0.6076’ | [같은 원문](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 표 2의 지표 확인 | 불일치 | A | **최우수 SAIL 시스템의 세 속성 평균**이다. 참가 시스템 전체 평균이 아님. |
| MEDUSA는 기준선 대비 +0.103 | [Naini 2025](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 0.4316−0.329 재계산 | 일치 | B | 정확한 차이는 **+0.1026**, 소수 셋째 자리 근사치가 +0.103. |
| 2024→2025 최고 점수가 약 +0.075 증가 | [Odyssey](https://www.isca-archive.org/odyssey_2024/goncalves24_odyssey.pdf), [IS25](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 두 점수 차 계산 | 일치 | B | 차이는 **0.0747**. 데이터 버전·학습량·테스트 구성도 달라 ‘방법만으로 얻은 연간 향상’은 아님. |
| 상위팀 76% 멀티모달·WavLM 70%·Whisper 47%·앙상블 95%·증강 60%·가중 CE 70%·1−CCC 87% | [Naini 2025](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf) | 설문 분석 절 | 일치 | A | **기준선 초과·설문 응답팀**에 대한 비율. Task1 17팀·Task2 8팀 분석이며 전체 93팀 비율이 아님. |
| IEMOCAP LOSO-10, 8/1/1 분할, UA 75.57·WA 74.77 | [Hyeon 2024](https://arxiv.org/html/2410.12416v1) | §4·표 1 | 일치 | A | 4범주, happy에 excited 병합. |
| IEMOCAP UA 95% CI 72.25~78.89, GAP만 UA/WA 73.87/73.27 | [같은 원문](https://arxiv.org/html/2410.12416v1) | 표 1 | 일치 | A | GAP+SAP의 UA 증가량은 **1.70%p**. |
| KEMDy19 4범주 1,530/1,313/4,328/773, 총 7,944발화; LOSO-40, 38/1/1 | [같은 원문](https://arxiv.org/html/2410.12416v1) | 데이터·분할 설명 | 일치 | A | 순서 angry/happy/neutral/sad. |
| KEMDy19 UA 66.26·CI 64.59~67.93, WA 68.27·CI 66.82~69.72; GAP 64.34/66.62 | [같은 원문](https://arxiv.org/html/2410.12416v1) | 표 3 | 일치 | A | UA 증가 **1.92%p**, WA 증가 **1.65%p**. |
| WavLM-L 316M, 투영 32차원, 손실 가중 0.5/0.25/0.25, KEMDy 최대 16초, A100 40GB에서 약 8·40시간 | [같은 원문](https://arxiv.org/html/2410.12416v1) | 실험 설정 | 일치 | A | 8시간은 IEMOCAP, 40시간은 KEMDy19의 실험당 추정치. 한국어 최저 happy·최고 neutral 설명도 부합. |
| KEMDy19 neutral 54.5% | [Hyeon 2024](https://arxiv.org/html/2410.12416v1) | 4,328÷7,944 재계산 | 일치 | B | **54.481%**의 근사치. 전체 발화 기준 비율과 화자별 평균 WA는 집계 방식이 다를 수 있음. |
| emotion2vec WA 71.79/72.94, 검증=테스트일 때 74.48/77.64 | [emotion2vec](https://arxiv.org/html/2312.15185v1) | 표 2·각주 | 일치 | A | 앞은 5-session, 뒤는 10-speaker. 별표 조건을 반드시 유지해야 함. |
| 같은 fold 검증으로 WA +2.7~4.7%p | [같은 원문](https://arxiv.org/html/2312.15185v1) | 차이 계산 | 일치 | B | 정확히 **+2.69·+4.70%p**. |
| emotion2vec MELD WA 51.88·UA 28.03·WF1 48.70; AESD 72.33 | [같은 원문](https://arxiv.org/html/2312.15185v1) | 표 3·4 | 일치 | A | MELD의 **weighted F1**을 EmoBox의 macro-F1과 혼동하면 안 됨. AESD 72.33은 지표명을 함께 적어야 함. |
| emotion2vec 사전학습 262시간, 10개 언어 일반화, A10 4장·100 epoch·epoch당 37분 | [같은 원문](https://arxiv.org/html/2312.15185v1) | 학습 설정·데이터 설명 | 일치 | A | 10개 언어는 평가 범위이며 사전학습 언어 수라는 뜻은 아님. |
| EmoBox: 32코퍼스·14언어·10개 SSL 모델 | [EmoBox](https://arxiv.org/html/2406.07162v1) | 초록·§3.1 | 불일치 | A | 수는 맞지만 **10개 사전학습 모델**이 정확함. Whisper는 지도 ASR 사전학습 모델. |
| EmoBox Whisper: IEMOCAP UA/WA 73.54/72.86, WavLM UA 69.47·HuBERT 67.42 | [같은 원문](https://arxiv.org/html/2406.07162v1) | 표 4 | 일치 | A | 동결 마지막 층·후단 분류기 조건. Whisper−WavLM은 **4.07%p**. |
| EmoBox Whisper: MELD UA/WA/F1 31.54/51.89/32.95, MSP 22.24/44.10/22.12 | [같은 원문](https://arxiv.org/html/2406.07162v1) | 표 4 | 일치 | A | F1은 macro-F1. 챌린지의 별도 Test3 결과와 직접 비교 불가. |
| EmoBox: CREMA-D Whisper UA/F1 76.75/76.60, WavLM UA 74.50; EmoDB Whisper UA 91.26 | [같은 원문](https://arxiv.org/html/2406.07162v1) | 표 4 | 일치 | A | 서로 범주·자료·분할이 달라 ‘연기 효과’만의 크기로 볼 수는 없음. |
| Whisper 23/32곳 1위, WavLM 31/32곳 top3, Whisper 교차 코퍼스 9/12쌍 1위 | [같은 원문](https://arxiv.org/html/2406.07162v1) | §3.2·3.3 | 일치 | A | 해당 모델·후단·탐색 범위 안의 순위. |
| HuBERT-L 화자 의존 79.6→독립 73.0 | [Wagner 2023](https://arxiv.org/html/2203.07378) | 표 1·각주 | 일치 | B | 숫자는 있으나 **다른 논문 결과를 재인용한 표**이므로 B. 차이는 6.6%p. |
| 이중모달 모델 IEMOCAP SD 86.75·SI 64.04 | [Annals 2025](https://link.springer.com/article/10.1007/s12243-025-01088-y) | 출판사 초록 | 일치 | A | accuracy 수치이며 차이는 **22.71%p**. |
| EmoDistill IEMOCAP UA 77.49·WA 78.91 | [제시 DOI](https://doi.org/10.1109/ICASSP48485.2024.10448505); [추가 확인 원문](https://arxiv.org/html/2309.04849) | 초록·§4.3 | 일치 | A | 원문에 **화자 독립 LOSO-10**이 명시됨. 검증 화자 분리의 상세는 추가 확인 필요. |
| DialogueMLLM MELD weighted F1 68.57 | [제시 DOI](https://doi.org/10.1109/ACCESS.2025.3591447) | 저장된 Scopus 초록 대조 | 일치 | B | 텍스트·음성·영상 모델 결과. 음성 단독 SOTA로 쓰면 안 됨. |
| Wagner 음성 단독 CCC A/D/V 0.745/0.634/0.635~0.638 | [Wagner 2023](https://arxiv.org/html/2203.07378) | 본문·모델별 결과 | 일치 | A | 설정별 valence를 구분해야 하며, 2023년 결과를 현재 전역 SOTA로 단정할 수 없음. |

학습 기법의 효과와 비용 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| MEDUSA 14모델·4단계·RTX 3090 1장, 테스트 macro/micro/accuracy 0.4316/0.4319/0.4319 | [MEDUSA](https://arxiv.org/html/2506.09556v1) | §3~5 | 일치 | A | 3090 1장은 실험 장비 설명이며 전체 학습 비용이 낮다는 증거는 아님. |
| MEDUSA 소프트 타깃 제거 −8.23%, late fusion 교체 −6.31%, 4모델 평균 | [같은 원문](https://arxiv.org/html/2506.09556v1) | 표 2 | 일치 | A | **원문 기재값**은 맞음. 다만 표의 반올림 F1 0.421→0.389/0.396을 완성 모델 기준으로 계산하면 **−7.60%/−5.94%**. 상대 변화율의 분모를 명시해야 함. |
| MEDUSA 앙상블은 최고 단일 대비 상대 +7.23%, 투표보다 우수 | [같은 원문](https://arxiv.org/html/2506.09556v1) | §5.3·표 3 | 일치 | A | **내부 평가셋** 비교이며 챌린지 테스트에서 측정한 이득이 아님. |
| 소프트 타깃으로 합의 없는 약 2만 발화를 활용 | [같은 원문](https://arxiv.org/html/2506.09556v1) | §3.2 | 일치 | A | 원문에 약 20K로 제시됨. |
| MEDUSA가 ‘소프트 라벨+KL 손실’을 사용 | [MEDUSA](https://arxiv.org/html/2506.09556v1), [SAILER](https://arxiv.org/html/2505.22133v1) | 손실식 비교 | 불일치 | A | MEDUSA는 **소프트 타깃 가중 CE+MSE**, SAILER는 KL 분포 손실. 소프트 라벨 사용과 손실 이름을 구분해야 함. |
| SAILER 단일 test macro-F1 >0.4, Whisper가 WavLM보다 우수 | [SAILER](https://arxiv.org/html/2505.22133v1) | 초록·표 2 | 일치 | A | 해당 실험에서 성립. |
| SAILER 개발셋 단일 0.411→2모델 0.424→3모델 0.431 | [같은 원문](https://arxiv.org/html/2505.22133v1) | 표 5 | 일치 | A | 단일→3모델 **+0.020**. 테스트 최고 0.4281과 혼동 금지. |
| SAILER 다중 과제 macro-F1 0.406→0.411, 소수 클래스 mAP 0.328→0.316 | [같은 원문](https://arxiv.org/html/2505.22133v1) | 표 4 | 일치 | A | 전체 지표와 소수 클래스 지표의 방향이 다름. |
| 주석 20% 드롭아웃·오디오 혼합은 정확도 변화 없이 macro-F1·소수 클래스 개선 | [같은 원문](https://arxiv.org/html/2505.22133v1) | §2.3·표 3 | 일치 | B | ‘정확도 향상 없음’에 가까움. 정확도가 수학적으로 동일한 것은 아님. |
| SAILER 12GB·약 15 GPU시간 | [같은 원문](https://arxiv.org/html/2505.22133v1) | §3.2 | 일치 | A | **Whisper를 동결하고 후단만 학습**한 조건. |
| 층 가중합: data2vec WA 64.52→68.02, UA 68.22→69.95 | [Ma 2023](https://arxiv.org/html/2309.10294v1) | 표 4 | 일치 | A | 각각 **+3.50·+1.73%p**. |
| TTS 증강: baseline WA 64.52, 혼합 64.24·적대 64.88·전이 68.20·커리큘럼 68.57 | [같은 원문](https://arxiv.org/html/2309.10294v1) | 표 3 | 일치 | A | 커리큘럼 증가는 **4.05%p**. ‘+4.0’은 근사치, 혼합은 정확히 **−0.28%p**. |
| TTS 커리큘럼 UA 68.22→70.86; 다층+합성 WA/UA 68.85/71.89 | [같은 원문](https://arxiv.org/html/2309.10294v1) | 표 3·4 | 일치 | A | UA 증가는 2.64%p. 다층 기준 대비 합성 UA 증가는 1.94%p. |
| 합성:실제 1:2가 최적, 더 많으면 하락; GPT-4·Azure TTS·EmoDiff 활용 | [같은 원문](https://arxiv.org/html/2309.10294v1) | §2·3.3·3.4 | 일치 | A | **이 실험의 최적 비율**이며 한국어·다른 모델의 공통 최적값은 아님. |
| Bellver-Soler: 5코퍼스 중 EMS·VERBO에서 TTS가 고전 증강 상회, Mix-up이 가장 안정적 | [확인된 DOI](https://doi.org/10.1016/j.csl.2025.101927) | Scopus 초록 대조 | 일치 | B | ASR-WER·화자 유사도·감정 필터 파이프라인도 초록에 있음. |
| Tran: valence O-CCC 0.607→0.663, arousal 0.712→0.740; TAPT 0.630/0.717 | [Tran 2023](https://arxiv.org/html/2309.02418v1) | 표 2 | 일치 | A | **test-b** 결과. 증가량 +0.056/+0.028, TAPT valence +0.023. |
| Tran의 ‘전체 테스트’ 결과가 valence 0.663·arousal 0.740 | [같은 원문](https://arxiv.org/html/2309.02418v1) | 표 2·직후 본문 | 불일치 | A | 표의 두 값은 test-b. **전체 테스트 valence는 0.665**, 비교 인용값은 0.627. |
| Tran A-CCC valence 0.514→0.569, σ 이동 0.578, μ 이동 악화 | [같은 원문](https://arxiv.org/html/2309.02418v1) | 표 2 | 일치 | A | 0.663/0.740은 **PAPT-FT 자체** 결과. PLDC까지 합쳐 얻은 값으로 설명하면 부정확함. |
| Sridhar 2022 비지도 개인화로 valence 상대 최대 +13.52% | [확인된 DOI](https://doi.org/10.1109/TAFFC.2022.3187336) | 저장된 Scopus 초록 | 일치 | B | ‘최대’ 결과이며 일반적인 평균 이득은 아님. |
| Oliveira: 얕은 층은 arousal, 깊은 층은 valence에 중요; 증류+텍스트로 큰 모델과 비슷 | [Oliveira 2023](https://arxiv.org/html/2305.19184v1) | 초록·표 1·분석 | 일치 | A | 오디오 DistilHuBERT는 비교 모델 총 파라미터의 약 15%, 오디오+텍스트는 약 20% 수준이라는 맥락을 유지해야 함. |
| 증류 모델에는 텍스트가 ‘필수’ | [같은 원문](https://arxiv.org/html/2305.19184v1) | 결론의 적용 범위 검토 | 확인불가 | C | 이 실험에서 유용하다는 증거다. 모든 증류 모델에 필수라는 일반 명제는 입증하지 않음. |
| Wagner: 동결보다 미세조정이 모든 경우 우수, base≈large, 사전학습 데이터가 valence에 영향 | [Wagner 2023](https://arxiv.org/html/2203.07378) | §4.4·4.6·4.7 | 일치 | A | **시험한 모델·조건 안에서** 성립. ‘데이터 다양성이 성능을 결정한다’는 단정은 더 강한 표현. |
| Wagner 교차 코퍼스 CCC 감소 A/D/V 11%/21%/30%; 성별 집단보다 개별 화자 공정성 문제 | [같은 원문](https://arxiv.org/html/2203.07378) | §4.5·공정성 분석 | 일치 | A | 감소율은 상대값. 공정성 결론 역시 시험 데이터·정의 범위로 한정. |
| Goron: 6데이터셋 평균 UAR 74.5 | [확인된 DOI](https://doi.org/10.1109/ICASSP48485.2024.10446997) | Scopus 초록 | 일치 | B | 다른 표의 단일 코퍼스 UAR와 직접 비교 불가. |
| Kumawat 2025 소프트 라벨 UWA +6.8 | [확인된 DOI](https://doi.org/10.1109/ICASSP49660.2025.10890796) | Scopus 초록 | 일치 | B | 초록은 IEMOCAP 6.80%, MSP 2.73%로 표현. **절대 %p인지 확인 없이 바꾸면 안 됨**. |
| Chen 2023 TAPT 자체의 ablation 이득이 UA +7.4%p | [확인된 IEEE 초록](https://rc.signalprocessingsociety.org/conferences/icassp-2023/spsicassp23vid1982) | 비교 대상 확인 | 불일치 | A | +7.4%p는 **최종 시스템의 종전 SOTA 대비 향상**. TAPT 단독 효과로 분리된 값이 아님. |
| 화자 조건 sub-network로 IEMOCAP 상대 +8.3% | [확인된 DOI](https://doi.org/10.1109/ICME51207.2021.9428217) | Scopus 초록 | 일치 | B | 보조 네트워크 없는 동일 구조 대비 상대 개선. |
| Feng·Ma 논문이 LoRA/PEFT 활용을 뒷받침 | [Feng](https://arxiv.org/html/2306.05350), [Ma](https://arxiv.org/html/2509.08454) | 원문 초록·실험 | 일치 | A | LoRA 적용 근거는 있음. 한벗에서의 시간·성능 이득까지 검증된 것은 아님. |
| 소프트 라벨·앙상블·층 결합 등이 ‘가장 큰 5개’, 선택적 예측이 가장 저렴하고 이득이 큼 | 여러 논문의 교차 요약 | 지표·비용·커버리지 조건 비교 | 확인불가 | C | 서로 다른 과제의 상대 F1·CCC·%p를 순위화할 공통 실험이 없음. MC dropout은 반복 추론 비용도 발생함. |

음성 LLM·개인화·불확실도 관련 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| VoxEmo 35코퍼스·15언어 | [VoxEmo](https://arxiv.org/html/2603.08936v1) | 초록·데이터 표 | 일치 | A | **한국어·KEMDy는 표에 포함되지 않음**. 노트 §9의 미확인 사항은 해소 가능. |
| CREMA-D Qwen2-Audio direct 61.9·AF3 ensemble 54.1·지도 비교 71.0 | [같은 원문](https://arxiv.org/html/2603.08936v1) | 표 7 | 일치 | A | 표 7의 hard-label macro-F1 비교 조건을 명시해야 함. |
| SFT 평균 macro-F1 +23.7, 34/36 분할 개선, acted 66.0·자연 자료 40.1 | [같은 원문](https://arxiv.org/html/2603.08936v1) | §4.2 | 일치 | A | **Qwen2-Audio** 결과다. 모든 음성 LLM의 평균 효과는 아님. |
| 지도 EmoBox 기준선 10/30곳 상회, ≥5,000발화 7/11곳·<1,000발화 0/9곳 | [같은 원문](https://arxiv.org/html/2603.08936v1) | §4.2 | 일치 | A | ‘5,000발화 이상이면 동급’이라는 보장으로 확대하면 안 됨. |
| Qwen 분포는 집중되고 AF3는 더 매끈하며 일부 자연 자료 KLD·JSD가 낮음 | [같은 원문](https://arxiv.org/html/2603.08936v1) | §4.3·표 6 | 일치 | A | 분포 정렬에 관한 관찰. ECE로 입증한 보정 우열이라는 뜻은 아님. |
| Meta-PerSER seen 약 +1~2%p·unseen 최대 +7%p, 샷 2→32 개선·64에서 일부 하락 | [Meta-PerSER](https://arxiv.org/html/2505.16220v1) | §4·부록 A4 | 일치 | A | **청자·평가자 개인화**다. 화자 개인화와 구분 필요. |
| NTT는 해당 화자의 발화+라벨 ICL로 개인화하며 예시가 늘면 개선 | [NTT 2025](https://arxiv.org/html/2509.08344v1) | 방법·실험 | 일치 | A | 실험 범위의 경향이며 무제한 단조 증가를 보장하지 않음. |
| Sridhar 2019: 커버리지 75%, F1 상대 최대 +25.71%(5범주)·+20.63%(8범주) | [ISCA 원문 초록](https://www.isca-archive.org/interspeech_2019/sridhar19_interspeech.html) | 초록 직접 대조 | 일치 | A | 거부된 발화의 평가자 일치도가 낮다는 설명도 일치. |
| Sridhar 2020: 상위 불확실도 25% 거부, CCC 상대 A/V/D +7.34/+13.73/+8.79% | [저자 원문](https://www.carlosbusso.com/publications/Sridhar_2020.pdf) | 초록·본문 | 일치 | A | 극단 속성값 발화의 불확실도가 낮다는 관찰도 부합. |
| Sridhar 2021: 60% 커버리지에서 valence 약 +16.9% | [저자 원문](https://ecs.utdallas.edu/research/researchlabs/msp-lab/publications/Sridhar_2021.pdf) | 초록 | 일치 | B | 원문은 **최대 +16.85%**, 반올림하면 16.9%. |
| Sridhar 2021의 수치는 초록에 없음 | [같은 원문](https://ecs.utdallas.edu/research/researchlabs/msp-lab/publications/Sridhar_2021.pdf) | 초록 직접 확인 | 불일치 | A | 초록에 V/A/D **16.85%/7.12%/8.01%**가 명시됨. |
| Chou 2023은 ECE·다중 라벨 TS를 사용하며 초록에는 ECE 숫자가 없음 | [ISCA 초록](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html) | 초록 | 일치 | A | 원문 PDF는 현재 공개 접근 가능. |
| Chou의 ‘공동 발생 손실+균형 손실+TS가 최고’ | [Chou PDF](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.pdf) | 표 1 | 일치 | A | **macro-F1 최고 조합**이라는 뜻. 그 조합 ECE **0.328→0.270**, 최저 ECE는 CBL+TS의 **0.263**. |
| Chou ECE 개선 폭은 미확인 | [같은 원문](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.pdf) | 표 1 재확인 | 확인불가 | C | 원래 작성자의 열람 상태는 검증 불가. 현재는 확인 가능: BCE **0.335→0.276**, CBL **0.311→0.263**. |
| Schrüfer EmoDB in/out: CE .333/.850, MC .010/.023, EDL .256/.387, PN(in) .239/.725 | [Schrüfer 2024](https://arxiv.org/html/2407.01143v1) | 표 3 | 일치 | A | 방식마다 척도가 달라 불확실도 절대값의 단순 비교는 부적절. |
| Schrüfer MSP PCC −.128/−.082/−.119/−.144/−.194 | [같은 원문](https://arxiv.org/html/2407.01143v1) | 표 2 | 일치 | A | CE/MC/EDL/PN(in)/PN(out) 순서. 전체 상관 범위 ‘약 −.08~−.26’도 부합. |
| Schrüfer MSP UAR .609/.603/.576/.561/.558, accuracy와 순위가 다름 | [같은 원문](https://arxiv.org/html/2407.01143v1) | 표 1 | 일치 | A | 노트의 지적이 맞음. |
| Schrüfer는 ECE·위험–커버리지를 보고하지 않고, OOD 추가 PN이 비음성 구분에 유리 | [같은 원문](https://arxiv.org/html/2407.01143v1) | 실험·결과 절 | 일치 | A | 본문의 CDF 면적 설명을 AURC와 혼동하면 안 됨. |
| EAAI 2025: 5모델·3코퍼스, 보정 기반 예측집합으로 커버리지 보장 | [출판사 원문](https://www.sciencedirect.com/science/article/pii/S0952197625017233) | 출판사 초록·설명 | 일치 | A | 최종판 기준. arXiv판은 6모델·2데이터셋으로 달라 **버전 명시 필요**. 보장도 가정 아래 주변적 커버리지임. |
| ECE 보고 SER는 Chou 하나, AURC/AUARC 보고는 0건, 한국어 ECE·보류 곡선은 0건 | 재현 가능한 문헌 목록 없음 | 검색 범위·완전성 검토 | 확인불가 | C | ‘이번에 읽은 자료에서 찾지 못함’까지만 말할 수 있음. 분야 전체의 부재·신규성 증명이 아님. |
| 소프트 라벨로 학습해야 보류가 의미를 가짐 | MEDUSA·SAILER·Schrüfer의 연결 해석 | 필요조건 여부 검토 | 확인불가 | C | Sridhar 2019·2020의 보류 이득 자체가 이 필요조건을 입증하지 않음. |

한국어 자료와 운율 연구에 대한 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Cao 운율 GRU: 12,457샘플·7개 운율 매개변수, accuracy/UAR 64.69/64.71, disgust/happy F1 72.28/49.62 | [제시 DOI](https://doi.org/10.1109/AI3E69313.2025.00044) | Scopus 초록 대조 | 일치 | B | 화자 분할은 초록에서 확인되지 않음. ‘7범주’는 초록의 명시적 설명과 구별 필요. |
| 12,457와 Hyeon의 7,944가 달라 데이터 수치가 불일치 | 위 DOI·[Hyeon](https://arxiv.org/html/2410.12416v1) | 사용 범주·필터 비교 | 확인불가 | C | **부분집합 차이일 수 있음**. Hyeon은 4범주만 사용하므로 총수 차이만으로 오류 판정 불가. |
| Cao Wav2Vec2+KoBERT cross-attention: 테스트 accuracy 73.3%, 검증 UAR 85.52 | [제시 DOI](https://doi.org/10.1109/AI3E69313.2025.00094) | Scopus 초록 | 일치 | B | 데이터·평가셋·지표가 달라 두 숫자를 직접 비교할 수 없음. |
| Mathematics 2023: accuracy 87.49·F1 44.16·weighted F1 86.28 | [제시 DOI](https://doi.org/10.3390/math11132908) | 저장 초록·기존 상세 노트 대조 | 일치 | B | 한국어 KEMDy20 결과로 기록됨. 출판사 본문 재접속은 제한됨. |
| Mathematics 논문의 분할은 미명시 | [같은 DOI](https://doi.org/10.3390/math11132908) | 로컬 상세 노트와 대조 | 확인불가 | C | 기존 상세 노트에는 **30세션 학습·10세션 평가**가 기록돼 있어 충돌. ‘초록에서 미명시’로 한정하거나 본문 재확인이 필요. |
| 정확도와 F1 차이가 약 43%p이며 불균형 때문 | [같은 DOI](https://doi.org/10.3390/math11132908) | 차이·자료 분포 검토 | 일치 | B | 차이는 **43.33점**. 다른 지표 간 차이를 정확도 ‘부풀림 크기’로 해석할 수는 없음. |
| AI Hub 11,192→33,576발화, 4감정, ResNet+채도 증강 | [제시 DOI](https://doi.org/10.3390/app15042088) | Scopus 초록 | 일치 | B | 증강은 3배. 초록에는 기존 ResNet 대비 개선 34.19%도 있으나 절대 정확도와는 다름. |
| Sogang 2024 AI Hub HuBERT 정확도 0.8139 | ‘기존 노트·Wiki’; 직접 URL 없음 | 서지·원문 추적 | 확인불가 | C | 논문 제목·DOI·표·분할이 특정되지 않아 B를 부여하기 어려움. |
| Jun 2024: 0.5초·3초 조각에서 UA 상대 −10.61%·−5.08% | [확인된 AES 식별자](https://www.aes.org/e-lib/browse.cfm?elib=22745) | Scopus 초록·기존 서지 기록 | 일치 | B | 원문 PDF 재접속은 실패. %p가 아닌 상대 감소율. |
| 위 결과가 ‘최소 3초 이상 필요’를 입증 | 같은 출처 | 실험 결과의 논리적 범위 검토 | 확인불가 | C | 3초의 손실이 0.5초보다 작다는 결과이지 최소 길이·최적 길이의 증명은 아님. |
| KEMDy19 연기 20세션·40명, KEMDy20 자연 대화 40세션·80명·외부 평가자 10명 | 추가 확인: [ETRI 저자 원문](https://ksp.etri.re.kr/ksp/article/file/67248.pdf) | §IV.A | 일치 | A | 두 데이터 모두 외부 평가자 10명이 범주·arousal·valence를 주석함. |
| KEMDy20의 VA 라벨·neutral 비율은 미확인 | 위 ETRI 원문 | 데이터 설명 | 확인불가 | C | 작성 당시 열람 여부는 알 수 없음. **VA 라벨 존재, neutral 86.5%**는 원문에서 확인 가능. 배포 파일의 주석자별 라벨 제공 여부는 별도 확인 필요. |
| 한국어 화자 독립+CI 보고는 Hyeon 한 건, 공개 기준선도 사실상 하나 | 검색 노트 | 문헌 검색의 완전성 검토 | 확인불가 | C | Hyeon이 최초 LOSO-40이라고 주장한 것은 확인됨. 한국어 전체 문헌의 유일성은 입증되지 않음. |
| Oh 2024: 4감정·10개 음성 표지, 성별에 따라 피치·강도·음질 패턴 차이 | [제시 DOI](https://doi.org/10.17250/khisli.41.3.202412.012); [KCI 초록](https://www.kci.go.kr/kciportal/mobile/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003147903) | 초록 대조 | 일치 | B | 여성 슬픔의 피치 안정·분노 강도 변동, 남성 슬픔 피치 변동·분노 불규칙성 설명이 부합. 사회 규범은 가능성 해석. |
| Yoon·Oh·Kent: 청자 36명, 사람 32+AI 32발화, 4감정; 사람 정확도·속도 우위, happy 최고·anxious 최저 | [출판사 원문](https://www.sciencedirect.com/science/article/pii/S0024384125002086) | 초록·자극 설명 | 일치 | A | 해당 자극·TTS·청자 집단에서 나온 결과. |
| AI 불안 인식은 강도 변동에‘만’ 의존 | [같은 원문](https://www.sciencedirect.com/science/article/pii/S0024384125002086) | 표현의 강도 대조 | 불일치 | A | 원문은 **주로 강도 변동에 의존**한다고 함. ‘오직’이라는 배타적 주장으로 강화하면 안 됨. |
| Yoon & Oh: 한국어 청자 33명·AI Hub 저역통과·4감정, 남성 분노·여성 슬픔 인식 우위 | [제시 DOI](https://doi.org/10.1177/00332941261457358) | Scopus 초록·서지 대조 | 일치 | B | 여성 happy의 강도는 남성보다 높음. 여성 happy·sad는 **여성 자신의 angry보다 강함**이라는 비교도 구분해야 함. |
| PLOS: 서울말 19명 중 1명 제외·도쿄말 13명, 초점·자음 종류가 F0 교란에 영향 | [PLOS 원문](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0283139) | §2.1·결과·논의 | 일치 | A | 명시된 전체 표본수와 일치. 감정 인식 성능을 직접 측정한 논문은 아님. |
| 한국어는 quasi-tonogenesis 단계이며 자음 효과 때문에 F0 해석에 통제가 필요 | [같은 원문](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0283139) | 연구 배경·논의 | 일치 | A | 언어학적 배경과 실험 결과에 부합. |
| 따라서 영어 피치 모델을 그대로 쓰면 안 됨·성별 정규화가 필요 | 위 운율 논문들 | 직접 실험 여부 검토 | 확인불가 | C | **후속 연구 가설·설계 권고**다. 정규화의 성능 이득이나 영어 모델의 실패를 직접 검증하지 않음. |
| 한국어 자연 대화+화자 독립+소프트 라벨+보정 논문 0건; LoRA·음성 LLM·합성·화자 적응 사례 0건 | 제한된 Scopus 검색 | 검색 범위 검토 | 확인불가 | C | ‘이번 검색에서 발견하지 못함’으로 수정 필요. ‘한국어에서 처음’의 근거로는 부족함. |
| 불안·외로움·가라앉음의 한국어 음향 연구는 Oh·Yoon 외에 없음 | 제한된 검색 | 주제·검색어 범위 검토 | 확인불가 | C | 인용된 논문들이 외로움·가라앉음을 모두 연구한 것도 아님. |

수치에서 도출한 일반화도 별도로 검토해야 합니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| IEMOCAP 화자 독립의 현실 상한은 UA 73~76%, 확인된 최고는 75.57 | Hyeon·기존 문헌 | [EmoDistill 원문](https://arxiv.org/html/2309.04849)과 대조 | 불일치 | A | EmoDistill은 **화자 독립 LOSO-10 UA 77.49**를 보고함. 상세 검증 조건이 완전히 같은지는 별도 문제. ‘상한’은 성립하지 않음. |
| IEMOCAP 80% 초과 결과는 화자 의존·검증=테스트가 의심됨 | 일반화된 판단 | 개별 프로토콜 증거 검토 | 확인불가 | C | 높은 점수만으로 누수·평가 오류를 추정할 수 없음. 논문별 분할을 확인해야 함. |
| 균형 테스트셋이면 macro-F1과 accuracy가 같아짐 | IS25 인용 | 지표 정의 대조 | 불일치 | A | 균형 단일 라벨 자료에서는 **macro-recall(UA)=accuracy**. macro-F1의 일치는 보장되지 않음. |
| macro-F1 0.4316은 정확도 43.16%를 뜻함 | MEDUSA | [실제 보고 지표](https://arxiv.org/html/2506.09556v1) 대조 | 불일치 | A | 실제 accuracy는 **43.19%**로 별도 보고됨. ‘해당 테스트에서 절반 미만 정답’은 이 accuracy로 뒷받침 가능. |
| CI가 ±3%p이므로 1%p 차이는 노이즈 | Hyeon CI | 통계적 추론 검토 | 확인불가 | C | 개별 평균 CI만으로 **두 모델 차이의 유의성**을 결정할 수 없음. 대응 비교가 필요. |
| 화자 의존으로 약 7~23%p 부풀려짐 | Wagner·Annals | 차이 계산 | 일치 | B | 제시된 두 사례는 **6.60·22.71%p**. 모든 SER의 보편적 부풀림 범위는 아님. |
| valence 상대 +13.7%는 절대 약 +0.05 | Sridhar 2020 | 기준값 0.3~0.5에 적용 | 일치 | B | 절대 증가는 **0.0411~0.0685**. 기준값에 따라 달라지는 예시임. |
| 범주 SOTA 0.43·속성 SOTA 평균 CCC 0.61·valence 0.66~0.69 | 여러 버전·과제 혼합 | 평가셋·연도 대조 | 확인불가 | C | 개별 수치의 존재와 **2026년 전역 SOTA**는 별개. 특정 챌린지·버전·평가셋으로 한정해야 함. |
| 순수 성능으로 영어 SOTA를 못 넘으며 한국어+보정이 SCI의 현실 경로 | 작성자 판단 | 검증 가능한 판정 기준 확인 | 확인불가 | C | 연구 전략 의견이다. 실험 결과·학술지 규정으로 확인된 사실은 아님. |

UNIST 관련 인물·논문·협업 판단입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| ICCV 2023 음성→이미지 논문의 Kim T.는 김태환 교수 | [제시 DOI](https://doi.org/10.1109/ICCV51070.2023.00658); [UNIST 공식 소개](https://aigs.unist.ac.kr/generating-realistic-images-from-in-the-wild-sounds-iccv-2023-prof-taehwan-kim/) | 전체 저자명·소속 대조 | 일치 | A | Taegyeong Lee·Jeonghun Kang·Hyeonyu Kim·**Taehwan Kim**, UNIST. |
| Interspeech 2025 ‘Generating Engaging Speech’도 같은 연구실 | [ISCA 원문](https://www.isca-archive.org/interspeech_2025/kim25m_interspeech.html) | 전체 저자명·소속 | 일치 | A | **Taesoo Kim과 Taehwan Kim이 모두 공저자**여서 축약명 Kim T.만으로는 구분되지 않음. |
| Sound of Story, EMNLP Findings 2023 공저 | [ACL 원문](https://aclanthology.org/2023.findings-emnlp.898/) | 저자·연도·학회 | 일치 | A | Taehwan Kim 공저 확인. |
| C-MET CVPR 2026이 김태환 연구실인지 불확실 | 추가 확인: [UNIST 공식 발표](https://www.unist.ac.kr/unist/center/resualt.do?article.offset=0&articleLimit=9&articleNo=304283&mode=view) | 연구팀 명시 확인 | 확인불가 | C | 노트의 당시 확인 상태는 알 수 없으나, 현재 공식 자료로 **김태환 교수팀**임을 확인할 수 있음. |
| Jang 그룹의 2011·2013·2016 음성 향상·분리 논문 | [2011](https://doi.org/10.4316/AECE.2011.04001), [2013](https://doi.org/10.1109/TCE.2013.6490266), [2016](https://doi.org/10.1007/s11042-013-1788-y) | Scopus 서지·대학 연구정보 | 일치 | B | 역사적 UNIST 소속·공저 기록으로는 맞음. |
| Jang G.J.의 현재 소속 미확인·최근 논문 없음 | 추가 확인: [경북대 공식 프로필](https://research.knu.ac.kr/en/persons/gil-jin-jang/), [2024 논문](https://www.mdpi.com/2076-3417/14/18/8138/xml) | 소속·연도 확인 | 불일치 | A | **장길진, 경북대 교수**. UNIST 경력은 2009~2014년이며 2024년 음성 논문이 있음. |
| Oakley의 SkullID, CHI 2024·소리 기반 인증 연구 | [제시 DOI](https://doi.org/10.1145/3613904.3642506); [연구실 페이지](https://sites.google.com/view/kaist-witlab/home) | 논문·연구실 기록 | 일치 | A | 과거 UNIST 공저 이력과 현재 소속은 구별 필요. 현재 연구실 페이지는 KAIST임. |
| Oakley의 ESM·실사용 감정 평가 협업 적합성 | 구체적인 ESM 논문 URL 없음 | 인용의 직접성 확인 | 확인불가 | C | SkullID 자체는 ESM·SER 평가 방법의 근거가 아님. 협업 적합성은 판단. |
| 스마트 스피커 논문의 Jung Y.는 ‘정의철’ | [출판사 저자 정보](https://www.tandfonline.com/doi/abs/10.1080/10447318.2020.1841422) | 전체 저자명 확인 | 불일치 | A | **Yoonhyuk Jung, 정윤혁**이다. |
| 스마트 스피커 프라이버시 논문 2021·2023 | [2021](https://doi.org/10.1080/10447318.2020.1841422), [2023](https://doi.org/10.1080/10447318.2022.2101685) | 서지·Scopus 기록 | 일치 | B | 프라이버시 인식 연구라는 설명은 부합. SER 모델 연구는 아님. |
| Ahn의 VAFOR 2023·Kim S.P.의 대화 방해 BCI 2024·Kim J.의 감정 인터페이스 2024 | [VAFOR](https://doi.org/10.1109/RO-MAN57019.2023.10309466), [BCI](https://doi.org/10.1088/1741-2552/ad731e), [인터페이스](https://doi.org/10.1038/s41467-023-44673-2) | Scopus 서지·초록 | 일치 | B | 논문 존재·분야는 부합. 협업 가능성의 높고 낮음은 별도 판단. |
| Lee K.의 LLM 에이전트 논문 2025 | 제목·DOI 없음 | 해당 연구 특정 시도 | 확인불가 | C | 저자 축약명·연도만으로 확인 불가. |
| UNIST SER 논문 0편·현실적인 공저 연구실은 김태환 한 곳 | 제한된 검색·작성자 판단 | 검색 범위·연구실 판단 검토 | 확인불가 | C | ‘검색 결과에서 직접 SER 논문을 찾지 못했다’와 대학 전체의 부재·유일한 협업처는 다른 주장. |

논문 설계의 숫자는 실측 근거와 구별해 다음처럼 취급해야 합니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 안 A: 5-fold, 검증 8~10%, 4범주+VA+소프트 라벨, 3백본·3모델 앙상블·풀링 4종 | 연구계획; 직접 출처 없음 | 기존 실험인지 확인 | 확인불가 | C | **실험 설계안**. 값 자체를 검증된 최적 설정처럼 쓰면 안 됨. |
| AI Hub 71517·71558은 사용할 수 있는 방언 대화 후보 | 데이터 ID만 제시 | 공식 페이지 접근 시도 | 확인불가 | C | 해당 ID의 정확한 자료명·감정 라벨·화자 ID·이용 조건은 확인되지 않음. |
| 안 A 예상 UA 66→70% 전후, 단순 합산 약 +5%p | 영어 실험으로부터 추정 | 한국어 실험 근거 확인 | 확인불가 | C | 효과 중복·언어·분할 차이가 있어 합산할 수 없음. |
| 한국어에서도 커버리지 75%에서 UA 수 %p 개선이 가장 확실 | Sridhar의 영어 F1·CCC 결과 유추 | 동일 언어·지표 근거 확인 | 확인불가 | C | 한국어 **UA 개선 폭**의 직접 근거가 아님. |
| 최소 화자 ≥40명·발화 ≥8,000, 자체 자료 ≥30명·평가자 ≥3명·≥1,000발화 | 제안값 | 표본수·검정력 산정 여부 확인 | 확인불가 | C | 통계적 최소 표본수가 아니라 운영상 제안. |
| Whisper-L-v3 LoRA 한 모델 ≤15 GPU시간이라는 근거가 SAILER | [SAILER](https://arxiv.org/html/2505.22133v1) | 학습 대상 확인 | 불일치 | A | SAILER의 15시간은 **동결 Whisper+후단 학습** 조건으로 LoRA 시간 근거가 아님. |
| 5-fold×3백본 ≈100~150 GPU시간 | 시간 추정 | 산식 재계산 | 확인불가 | C | 모델당 15시간을 그대로 적용하면 **225 GPU시간**. 100~150시간의 모델별 가정이 없음. |
| 안 B 등록 ≤30초, k={0,1,3,7,15}, 합성 비율 {0,.25,.5,1,2}, 투입 방식 4종 | 연구계획 | 설계·실측 구분 | 확인불가 | C | 15발화가 30초 안에 들어가는지도 발화 길이에 따라 달라짐. |
| 안 B 화자당 최소 15발화로 15샷 적응과 나머지 평가 가능 | 연구계획 | 발화 배정 계산 | 불일치 | A | 정확히 15발화면 15샷 적응 후 평가 발화가 없음. **적응분 외 평가분을 추가 확보**해야 함. |
| 안 B 화자 ≥40명, 합성 5,000~10,000발화·실제의 약 절반 | 연구계획 | 근거·산식 확인 | 확인불가 | C | 실제 자료 크기를 고정하지 않으면 ‘약 절반’도 결정되지 않음. |
| 한국어 개인화 CCC +0.03~0.06, 합성 +1~4%p | Tran·Ma의 영어 결과 유추 | 한국어 재현 실험 유무 확인 | 확인불가 | C | 노트가 ‘한국어 근거 없음’이라고 단서를 붙인 것은 적절함. |
| TTS 10,000발화는 GPU 수 시간, 안 B 학습은 안 A의 2~3배·150~250시간 | 추정 | 모델·길이·장비·실험 수 확인 | 확인불가 | C | 합성 길이·속도·장비가 없고, 비율 5점×투입 4종의 비용도 연결되지 않음. |
| TAFFC는 보통 코퍼스 2~3개 이상·새 방법/프로토콜·유의성 검정 요구 | 작성자 인상 | 공식 요구사항 인용 여부 확인 | 확인불가 | C | 학술지의 명문화된 투고 요건으로 확인되지 않음. |
| Speech Communication·CSL은 체계적 비교·언어 특이 분석을 수용하는 편, Interspeech/ICASSP 4쪽 디딤돌 | 투고 전략 | 특정 연도·논문 유형 규정 확인 | 확인불가 | C | 연구 전략과 해당 연도 공식 분량 규정은 분리해야 함. |
| 순수 성능 SCI는 93팀 챌린지 한 자릿수 순위가 아니면 어려움 | 작성자 판단 | 객관적인 게재 기준 확인 | 확인불가 | C | 순위와 저널 채택 사이의 입증된 기준이 아님. |
| MSP-Podcast는 라이선스 신청 필요 | [공식 배포 안내](https://www.lab-msp.com/MSP/MSP-Podcast.html) | Academic License 절 | 일치 | A | 학술 이용은 무료지만 **기관 권한자의 계약 서명** 절차가 안내됨. |
| 새 감정 체계의 비교 대상이 없음·안 A가 안 B보다 낮은 위험·안 A부터 수행 권고 | 작성자 설계 판단 | 검증 가능한 실증 근거 확인 | 확인불가 | C | 연구 선택의 논거로 제시할 수 있으나 검증된 사실은 아님. |
| §8의 기존 Wiki 항목은 이미 존재함 | URL 없음; `.omc/wiki` | 파일명 대조 | 일치 | A | MEDUSA·Hyeon·Sridhar·Cao 두 건·연구실 등 기재 항목의 대응 파일이 확인됨. 일부는 축약 slug. |
| §8 신규 후보·내용의 A/B 등급 | 후보 목록 | 파일 존재·위 검증 결과 대조 | 확인불가 | C | 신규/갱신은 관리 제안. **내용 등급은 위 정정 결과를 반영해 다시 부여**해야 하며, topic 전체를 일괄 A로 볼 수 없음. |
