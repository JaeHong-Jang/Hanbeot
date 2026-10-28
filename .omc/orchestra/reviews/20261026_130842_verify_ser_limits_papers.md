원문·초록·표를 웹에서 대조했습니다. **주요 수정 사항은 EmoBox의 화자 분할 기준, IEMOCAP 73.01%의 지표·해석, EMO-Codec의 Opus 평가 여부**입니다.

반복된 주장은 통합했습니다. 등급은 요청하신 기준으로 다시 판정했습니다. **A=원출처 직접 확인, B=2차 출처·근사치, C=확인 불가 또는 해당 주장에 대한 근거 부족**입니다. ‘불일치’ 행은 메모에 원문과의 차이를 적었습니다. 초록의 문제 제기는 실험으로 입증된 결과와 구분했습니다.

먼저 교차언어·교차코퍼스 성능과 한국어 수치입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| SER Evals: 2024년, 19개 코퍼스·13개 언어·9개 체크포인트 | [SER Evals](https://arxiv.org/html/2408.07851v1) | 표 1의 코퍼스·언어, 표 2의 체크포인트 집계 | 일치 | A | 한국어는 표에 없음. |
| 모든 모델의 평균 macro-F1이 ID 약 0.67~0.78, OOD 약 0.13~0.20 | [SER Evals](https://arxiv.org/html/2408.07851v1) | 표 3 직접 대조 | 일치 | B | 반올림 범위. **모델별 코퍼스 평균**이며 모든 개별 코퍼스 결과의 범위가 아님. |
| Whisper-Large-v2: 0.782→0.194 | [SER Evals](https://arxiv.org/html/2408.07851v1) | 표 3 | 일치 | A | 원값 0.781942→0.194250. |
| WavLM-Large: 0.765→0.161 | [SER Evals](https://arxiv.org/html/2408.07851v1) | 표 3 | 일치 | A | 원값 0.765474→0.161098. |
| HuBERT-Large: 0.733→0.157 | [SER Evals](https://arxiv.org/html/2408.07851v1) | 표 3 | 일치 | A | 원값 0.733036→0.156504. |
| 모델별 하락폭 약 0.53~0.60 | [SER Evals](https://arxiv.org/html/2408.07851v1) | 표 3에서 ID−OOD 재계산 | 일치 | B | 예시 세 모델은 0.587692·0.604376·0.576532. 논문 직접 서술이 아닌 계산값. |
| OOD F1은 ID의 “1/4 안팎” | [SER Evals](https://arxiv.org/html/2408.07851v1) | OOD÷ID 재계산 | 일치 | B | 예시 모델은 약 21~25%. 한국어에서 같은 비율로 하락한다는 뜻은 아님. |
| EmoBox: 2024 Interspeech, 32개 데이터셋·14개 언어·10개 모델 | [EmoBox](https://arxiv.org/html/2406.07162v1) | 초록·§2.1·표 4 | 일치 | A | 한국어 데이터셋 없음. |
| IEMOCAP WavLM-large UA/WA=69.47/69.07 | [EmoBox](https://arxiv.org/html/2406.07162v1) | 표 4의 IEMOCAP 열 대조 | 일치 | A | 단위 %. 열 매핑 확인됨. |
| IEMOCAP Whisper-large-v3 UA/WA=73.54/72.86 | [EmoBox](https://arxiv.org/html/2406.07162v1) | 표 4의 IEMOCAP 열 대조 | 일치 | A | 단위 %. |
| Whisper-large-v3가 교차코퍼스 12쌍 중 9쌍에서 1위 | [EmoBox](https://arxiv.org/html/2406.07162v1) | §3.3·표 5 | 일치 | A | 본문에 9/12로 명시. |
| 화자 50명 미만 또는 44명 미만이면 화자 종속 분할 | [EmoBox](https://arxiv.org/html/2406.07162v1) | §2.2의 분할 규칙 | **불일치** | C | **4명 미만**, 또는 4명 이상이어도 화자별 감정 분포가 불균형하면 화자 종속 분할. |
| 화자 종속 분할에서 감정별 25%를 테스트에 사용 | [EmoBox](https://arxiv.org/html/2406.07162v1) | §2.2 | 일치 | A | 위 조건에 해당하는 데이터셋의 규칙. |
| emotion2vec으로 라벨 오류를 줄이고 화자·감정 균형 테스트 세트를 구성 | [EmoBox](https://arxiv.org/html/2406.07162v1) | 초록·§2.3 | 일치 | A | 이것만으로 emotion2vec의 한국어 성능이나 전반적 우수성이 입증되지는 않음. |
| Ibrahim 2024: 11개 데이터셋, Whisper, 화자 독립 평가·오버샘플링 | [Ibrahim et al.](https://arxiv.org/html/2406.09933v1) | 초록·§2·§3 | 일치 | A | 화자 홀드아웃과 5-fold 평가를 함께 설명함. 단순 LOSO 한 종류로만 요약하지 않는 편이 정확함. |
| 사용 데이터는 “거의 영어”, 한국어 없음 | [Ibrahim et al.](https://arxiv.org/html/2406.09933v1) | §2.2 | 일치 | A | 더 정확히는 혼합언어 코퍼스에서도 **영어 발화만 추출**했다고 명시. |
| 4감정 평균 WA 약 76%, N감정 약 63% | [Ibrahim et al.](https://arxiv.org/html/2406.09933v1) | 표 3 Mean 행 | 일치 | B | 4감정 **통합학습·다운샘플링 76.00%**, 개별학습 75.84%; N감정 개별학습 63.20%. 조건을 붙여야 함. |
| 본문에는 교차코퍼스 하락 수치가 없다 | [Ibrahim et al.](https://arxiv.org/html/2406.09933v1) | 평가 프로토콜·표 3 대조 | 일치 | A | SER Evals 같은 미관측 코퍼스 전이 하락표가 아님. |
| 인간 인식 정확도: 친숙한 화자 87.3%→낯선 화자 64.7% | [Ibrahim et al.](https://arxiv.org/html/2406.09933v1) | 서론의 Schuller 연구 인용 확인 | 일치 | B | 해당 논문 자체 실험이 아닌 **재인용**. 원연구는 이번에 직접 대조하지 않음. |
| D’Asaro 2024: 8개 언어, Whisper 마지막 층·선형 분류기가 유리; wav2vec2는 초기·중간 층이 유리 | [CLiC-it 논문](https://aclanthology.org/2024.clicit-1.31/) | 공식 초록 | 일치 | A | 8개 구분에는 French와 Canadian French가 각각 포함됨. 한국어 없음. |
| 영어 전용 wav2vec2가 다국어 XLS-R을 대부분 언어에서 능가 | [CLiC-it 논문](https://aclanthology.org/2024.clicit-1.31/) | 공식 초록 | 일치 | A | 이 논문의 실험 조건에 한정된 결론. |
| Phukan 2025 APSIPA-ASC: TRILLsson이 비교 모델보다 교차코퍼스에서 우수 | [Phukan et al.](https://arxiv.org/abs/2509.16182) | 초록·학회 채택 정보 | 일치 | A | “모든 조건에서 일관되게”라는 표현보다는 초록 수준의 비교 결론으로 인용할 것. |
| 서강대 2024 석사논문: 한국어 AI Hub 4-class | Wiki slug만 제시; [보완한 원출처](https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918) | 대학 저장소 서지·초록 | 일치 | A | 제목: 「음성과 텍스트를 이용한 멀티모달 한국어 감정 인식 연구」. |
| HuBERT 정확도 0.8139, LLaMa2 0.8125, late fusion 0.8480 | [서강대 원출처](https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918) | 한·영 초록 수치 대조 | 일치 | A | 지표는 **accuracy**. UA라고 바꾸면 안 됨. 화자 독립 여부는 초록으로 확인 불가. |
| KEMDy19 Wav2Vec2 CCC=0.5473, HuBERT CCC=0.5271 | Wiki slug만 제시; [보완한 AHFE 원출처](https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68) | 출판사 초록 | 일치 | A | 전체 감정 클래스의 valence·arousal 평균 CCC. **분류 정확도가 아님**. |
| 한국어 정확도 0.81보다 낮으므로 UA 0.70 기준은 보수적 | [서강대 원출처](https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918) | 지표·평가 조건 비교 | **불일치** | C | accuracy와 UA, 분할·데이터 조건이 달라 보수성 판단 근거가 되지 못함. |
| IEMOCAP 화자 독립 성능의 “상한”은 73% | Wiki 경유; [2111.02735](https://arxiv.org/abs/2111.02735) | 원논문 초록 | **불일치** | C | **해당 연구의 최고 WA 73.01%**임. 분야 전체 상한이나 UA가 아님. |
| 원 emotion2vec 논문은 한국어를 평가하지 않음 | Wiki slug만 제시; [보완한 원논문](https://arxiv.org/html/2312.15185v1) | 언어 일반화 실험·표 4 | 일치 | A | 원본 emotion2vec의 결과를 emotion2vec+ 결과로 취급하면 안 됨. |
| emotion2vec·SER Evals·EmoBox·D’Asaro의 실험에 한국어가 없음 | 위 각 원문 | 데이터셋·언어 목록 대조 | 일치 | A | 검토한 논문에 한정하면 확인됨. |

자연 발화, 짧은 발화, 코덱 관련 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Kawaoto 2025 RANLP: 연기 데이터 학습 모델이 자연 고객센터 통화에서 성능 저하, 분노 중심 | [RANLP 논문](https://aclanthology.org/2025.ranlp-1.61/) | 공식 초록 | 일치 | A | 정량 하락폭은 노트에 제시되지 않음. |
| Switchboard-Affect: 2025, Apple 연구진, 10,000세그먼트·약 25시간 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 저자 소속·§II | 일치 | A | 영어 전화 대화. |
| 평가자는 6명 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | §II 인증·라벨링 절차 | **불일치** | C | 전체 라벨링 참여자는 **29명**. **각 세그먼트를 6명이 독립 평가**함. |
| 주 감정 Krippendorff α=0.25 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 라벨 품질 분석 | 일치 | A | 감정 범주에 대한 지각적 합의도. |
| 활성도·정서가·지배도 α=0.53/0.40/0.48 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 라벨 품질 분석 | 일치 | A | 순서까지 일치. |
| “합의 감정 존재 비율” 67% | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 라벨 공개 형식 설명 | 일치 | A | 정확히는 **주 감정의 합의 라벨을 부여할 수 있는 세그먼트 비율**. 감정이 실제 존재한다는 비율이 아님. |
| 분노 F1: GPT-4o .257, Odyssey .163, Whisper-GRU .147, Emotion2Vec .000 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 표 V | 일치 | A | 합의 라벨이 있는 해당 평가 표본·모델 조건의 결과. |
| Emotion2Vec 분노 재현율도 .000 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 표 V Recall 행 | 일치 | A | 원문 표에 일치. 다만 세 자리 반올림값을 근거로 “정확히 한 건도 없음”까지 단정하는 것은 주의. |
| 사용된 emotion2vec 버전은 미확인 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 모델 설명 | 일치 | A | IEMOCAP 범주 라벨로 미세조정한 모델이라고 설명. 정확한 체크포인트·plus 여부는 명확하지 않음. |
| 슬픔·기쁨은 MSP-Podcast보다 잘 인식하고 분노는 덜 인식 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 결과 비교 문단 | 일치 | A | 논문이 비교 결과를 직접 서술함. |
| α=.25가 모델 정확도의 상한을 뜻함 | [Switchboard-Affect](https://arxiv.org/html/2510.13906v1) | 합의도와 예측 지표의 의미 비교 | **불일치** | C | α는 정확도 상한이 아님. **라벨 불확실성이 평가 해석을 제한한다**고 고쳐야 함. |
| MSP-Podcast Challenge 2025: 324시간 이상·8-class | [제시 논문](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf), [보완한 주최 측 저장소](https://github.com/msplabresearch/MSP-Podcast_Challenge_IS2025) | 논문 과제 정의·공식 저장소 설명 | 일치 | A | 324시간 이상은 공식 저장소에서 확인. 논문은 release 1.12의 부분집합 사용을 설명함. |
| Neumann & Vu 2017: 특징 선택과 무관하게 발화 종류가 성능에 큰 영향 | [원논문](https://arxiv.org/abs/1706.00612) | 초록 | 일치 | A | 즉흥·대본 발화를 비교함. |
| 짧아질수록 정확도가 낮아지고 즉흥 발화의 하락이 더 작음 | [원논문 PDF](https://arxiv.org/pdf/1706.00612) | §5.4 본문 | 일치 | A | 이번에는 본문까지 확인. 원문은 짧은 구간으로도 작은 손실로 인식 가능하다는 점도 강조함. |
| 이 논문이 “2초 미만이면 확인 질문을 건너뛰라”는 규칙을 정당화 | [원논문 PDF](https://arxiv.org/pdf/1706.00612) | 실험 범위·결론 대조 | 확인불가 | C | 한국어 2초 기준이나 확인 질문 정책을 검증하지 않음. 팀 정책으로 표시해야 함. |
| KEMDy19 0.5초 UA −10.61%, 3초 −5.08% | Wiki 경유; [보완한 AES 행사 링크](https://aesshow2024ny.sched.com/event/1kyKX/real-time-recognition-of-speech-emotion-for-human-robot-interaction) | 행사 페이지 접근 시도 | 확인불가 | C | 페이지 조회 실패. %와 %p 중 무엇인지도 미확인. |
| EMO-Codec 2024 APSIPA: 재합성 후 SER 저하, 특히 슬픔·우울·공포·혐오 | [EMO-Codec](https://arxiv.org/abs/2407.15458) | 초록·서지 | 일치 | A | ‘우울’은 해당 감정 라벨 맥락이며 임상적 우울증 진단 결과가 아님. |
| 영어·중국어로 학습한 코덱도 중국어 감정 보존에 한계 | [EMO-Codec](https://arxiv.org/html/2407.15458v4) | 초록 | 일치 | A | 해당 코덱·데이터 실험 범위에 한정. |
| EMO-Codec에는 Opus 직접 평가·수치가 없음 | [EMO-Codec](https://arxiv.org/html/2407.15458v4) | 표 2·§2.2·결과·청취 실험 | **불일치** | C | **Opus 6·24 kbps를 포함**함. WebRTC 전체 전송 환경 평가와는 구분해야 함. |
| “슬픔이 코덱에 가장 취약하다” | [EMO-Codec](https://arxiv.org/html/2407.15458v4) | 초록의 감정별 결론 대조 | 확인불가 | C | 초록은 취약한 감정들을 열거함. 슬픔이 모든 조건에서 최악이라는 순위는 뒷받침하지 않음. |
| Triantafyllopoulos 2025: 트랜스포머 이후 성능 정체·비교 모델 선택에 따른 진보 인식 차이 | [원논문](https://arxiv.org/html/2508.02448v1) | 초록 | 일치 | A | 검토한 벤치마크에서의 결론. 모든 SER 연구의 개선 불가능성을 뜻하지 않음. |
| 위 논문에 Opus 포함 코덱 실험이 있다는 검색 요약 | [원논문](https://arxiv.org/html/2508.02448v1) | 부록 C | 일치 | A | 이번에 원문 확인. 기존 B에서 A로 올릴 수 있음. |

과학적 타당성, 보정, 편향 관련 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Barrett et al. 2019, PSPI 20(1):1–68, 얼굴 표정 중심 리뷰 | [Barrett 원문](https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/) | 서지·논문 범위 | 일치 | A | 음성 SER 성능 연구가 아님. |
| 89개 효과크기·47개 연구·3,599명 | [Barrett 원문](https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/) | 메타분석 소개 문단 | 일치 | B | 수치는 일치하지만 **Duran & Fernandez-Dols 2018의 메타분석을 재인용**한 것. |
| 표정 강도와 감정 측정값 간 평균 r=.32 | [Barrett 원문](https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/) | 같은 문단 | 일치 | B | 메타분석 재인용. 모든 표정·감정 관계를 대표하는 보편 상수처럼 쓰면 안 됨. |
| 감정 사건 중 가정된 표정이 관찰된 평균 비율 .19 | [Barrett 원문](https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/) | 같은 문단 | 일치 | B | 재인용 수치. 분류 정확도 19%라는 뜻이 아님. |
| 자동 FACS 정확도: 이상적 실험실 >90%, 비통제 조건 <83%, F1<.65 | [Barrett 원문](https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/) | 자동 FACS 설명 문단 | 일치 | B | 여러 연구의 결과를 요약한 값. **얼굴 동작 단위 검출 성능**이며 감정 분류 정확도가 아님. |
| 표정을 내적 감정 상태의 신뢰할 수 있는 단독 지표로 취급하지 말라는 취지 | [Barrett 원문](https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/) | 신뢰성·특이성·일반화 한계와 권고 | 일치 | A | 음성에 동일 수치가 적용된다는 근거로 사용할 수 없음. |
| Crawford 2021 Nature: 대유행 중 직장·학교 감정 AI 확산 비판, Barrett 인용, 규제 촉구 | [Nature 논평 PDF](https://media.nature.com/original/magazine-assets/d41586-021-00868-5/d41586-021-00868-5.pdf) | 논평 본문 직접 확인 | 일치 | A | 기존 B에서 직접 확인으로 상향 가능. ‘증거 없음’은 논평의 서술임. |
| Stark & Hoey 2021: 감정 개념·대리 데이터 분류체계와 윤리적 영향 논의 | [저자 공개 PDF](https://cs.uwaterloo.ca/~jhoey/papers/StarkHoey2021.pdf) | 초록·서론·DOI | 일치 | A | DOI 10.1145/3442188.3445939 일치. 기존 B에서 상향 가능. |
| angry/sad/happy/neutral 4라벨 선택은 basic emotion 이론을 가정 | [Stark & Hoey](https://cs.uwaterloo.ca/~jhoey/papers/StarkHoey2021.pdf) | 이론 논의와 노트의 적용 비교 | 확인불가 | C | 범주형 모델이라는 해석은 가능하나, **4라벨만으로 특정 감정 이론을 필연적으로 채택했다고 단정하기 어려움**. |
| Chou 2023 논문 제목은 “Confidence Calibration for Multi-Label SER” | [ISCA 공식 페이지](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html) | 공식 제목·서지 | **불일치** | C | 정식 제목은 **The Importance of Calibration: Rethinking Confidence and Performance of Speech Multi-label Emotion Classifiers**. |
| 저신뢰 예측 거부는 보정을 전제하며 ECE·다중 라벨 온도 스케일링 사용 | [Chou 2023](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html) | 공식 초록 | 일치 | A | 저자·연도 일치. |
| score=.6이 정답 확률 60%를 자동으로 의미하지 않음 | [Chou 2023](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html) | 신뢰도와 정확도의 관계 설명 | 일치 | A | **0.6 자체는 팀 예시**이며 논문이 검증한 한벗 임계값이 아님. |
| Gorrostieta 2019: 활성도 모델 정확도가 여성 음성에서 일관되게 낮고 디바이싱으로 완화 | [ISCA 공식 초록](https://www.isca-archive.org/interspeech_2019/gorrostieta19_interspeech.html) | 공식 초록 | 일치 | A | 이 연구의 활성도 모델 결과. 모든 SER·한국어 모델에 대한 결론은 아님. |
| 편향 원인으로 대표성·인간 라벨링·모델·최적화 선택 제시 | [Gorrostieta 2019](https://www.isca-archive.org/interspeech_2019/gorrostieta19_interspeech.html) | 공식 초록 | 일치 | A | 노트 요약과 일치. |
| Upadhyay 2025: 성능과 공정성은 별개이며 코퍼스 간 공정성 일반화를 검토해야 함 | [원논문 초록](https://arxiv.org/abs/2501.00995) | 초록 | 일치 | A | 한국어 성별 격차의 직접 수치는 아님. |
| Borre 2025: 십대 12명·55세 이상 12명, 덴마크어·영어, 의도적 감정 연기 | [원논문 초록](https://arxiv.org/abs/2507.12580) | 초록 | 일치 | A | 총 N=24. |
| 연령·언어 집단 간 유의차 없음, 고각성 감정 인식 한계·affective misalignment 제기 | [Borre 2025](https://arxiv.org/abs/2507.12580) | 초록 | 일치 | A | **유의차 미검출은 동등성·무편향의 입증이 아님**. |
| 20대 대학생 서비스이면 연령 편향 위험이 작음 | [Borre 2025](https://arxiv.org/abs/2507.12580) | 표본·결론의 적용 범위 비교 | 확인불가 | C | 이 연구는 20대 한국어 이용자에 대한 위험 감소를 검증하지 않음. |

오추정과 사용자 반응에 관한 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Shibata 2021, 정보처리학회논문지 62(1):26–34 | [제시 URL](https://ipsj.ixsq.nii.ac.jp/records/208970), [보완한 CiNii](https://cir.nii.ac.jp/crid/1390855511137228800) | 원사이트 접근 시도·CiNii 서지 대조 | 일치 | B | 원사이트 429 오류. 서지·초록은 CiNii에서 확인. |
| 불완전한 감정 추정에 기반한 명시적 공감은 aversion을 유발한다는 서술 | [CiNii 수록 초록](https://cir.nii.ac.jp/crid/1390855511137228800) | 일본어·영어 초록 대조 | 일치 | B | ‘혐오감’보다 **반감·거부감**이 오해가 적음. |
| Shibata 실험이 “오추정+단정 공감→반감”의 인과 효과를 검증 | [CiNii 수록 초록](https://cir.nii.ac.jp/crid/1390855511137228800) | 문제 제기와 실제 실험 목적 구분 | **불일치** | C | 초록의 실험은 **모호한 물체 움직임이 공감으로 받아들여지는지**를 평가함. 반감 서술은 배경 문제 제기임. |
| 이 연구가 확인 질문 프레이밍을 검증한 것은 아님 | [CiNii 수록 초록](https://cir.nii.ac.jp/crid/1390855511137228800) | 실험 대상 대조 | 일치 | B | 물체의 움직임과 언어적 확인 질문은 다른 개입. |
| Picard & Klein MIT TR-538: 감정 단서 인식·좌절에 지지적 반응, 우려·한계 논의 | [MIT 초록](https://vismod.media.mit.edu/pub/tech-reports/TR-538-ABSTRACT.html) | 기관 원페이지 | 일치 | A | 이 페이지에 출판연도는 없음. 직접적인 오추정 피해 비교 실험 근거는 아님. |
| Bickmore CHI 2007: 공감 정확도가 표현 자유도보다 대부분 척도에서 중요 | [제시 PDF](https://www.ccs.neu.edu/~bickmore/publications/CHI07.pdf), [이전된 저자 PDF](https://www.khoury.northeastern.edu/home/bickmore/publications/CHI07.pdf) | 직접 접근 실패·저자 PDF 검색 색인 확인 | 일치 | B | 검색 색인에 결론 확인. 정식 제목은 **Practical Approaches to Comforting Users with Relational Agents**. |
| Bickmore의 제목·표본·본문은 미확인 | 위 PDF | 접근 상태·검색 결과 대조 | 확인불가 | C | 본문 직접 열람은 여전히 실패. 현재 노트의 가제는 정식 제목으로 교체 가능. |
| EmoBot 2024: 3쪽 확장 초록, 만족도·정확도·결함 분석 | [arXiv](https://arxiv.org/abs/2411.02831) | 메타데이터·초록 | 일치 | A | ‘미심사’ 여부는 arXiv 등록 사실만으로 확정할 수 없음. |
| EmoBot은 텍스트 챗봇만 다룸 | [EmoBot 본문](https://arxiv.org/html/2411.02831v1) | §2·§3 | **불일치** | C | 음성 입력도 받고 STT로 변환함. 연구 참여자는 음성·텍스트 모두 사용. |
| EmoBot에 복합 감정 입력 처리 실패가 있음 | [EmoBot 본문](https://arxiv.org/html/2411.02831v1) | 결함 분석 문맥 | 확인불가 | C | 노트가 말하는 구체적 ‘혼합 감정 문장 오분류 사례’와의 정확한 대응을 확보하지 못함. |
| 확인 질문이 단정형 공감·무반응보다 오추정 피해를 줄임 | 직접 출처 없음 | 인용된 연구의 개입·비교군 검토 | 확인불가 | C | 노트 자체도 직접 근거가 없다고 인정함. 효과가 입증된 완화책으로 쓰면 안 됨. |
| SER을 위기 탐지에 쓰지 않으므로 슬픔 미검출 위험이 낮음 | 직접 출처 없음 | 근거·위험 비교 연구 유무 검토 | 확인불가 | C | 사용 목적 제한은 설계 사실이고, 피해가 낮다는 결론은 별도 검증 대상. |
| 위기 신호는 텍스트·키워드 경로가 담당하면 됨 | Wiki slug 2개만 제시 | 실제 문헌 URL·시스템 평가 근거 확인 | 확인불가 | C | 경로의 존재와 안전성·탐지 성능은 구분해야 함. |
| 5턴당 최대 1회·부정 응답 후 빈도 하향·추정값 저장 금지 | 출처 없음 | 노트의 출처 표시 확인 | 확인불가 | C | **팀 설계 제안**이라고 명시한 점은 적절함. 효과 검증 수치가 아님. |

평가 방법, 표본 계산, 규제 관련 주장입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Model Cards 2019 FAT*: 집단·교차 집단 성능, 의도 사용·평가 방법 공개 권고 | [Model Cards](https://arxiv.org/abs/1810.03993) | 초록·학회 서지 | 일치 | A | arXiv 최초 등록은 2018년, 학회 출판은 2019년. |
| EmoBox·Ibrahim 모두 화자 분리와 UA/WA 계열 평가 사용 | [EmoBox](https://arxiv.org/html/2406.07162v1), [Ibrahim](https://arxiv.org/html/2406.09933v1) | 평가 절·결과표 | 일치 | A | **EmoBox에는 화자 종속 예외가 있음**. 두 논문 모두 항상 LOSO라는 뜻은 아님. |
| Ibrahim은 오버샘플링, EmoBox는 교차코퍼스 테스트의 화자·감정 균형으로 불균형 처리 | 위 두 원문 | 방법론 대조 | 일치 | A | 학습 데이터 처리와 평가 세트 구성이라는 차이는 유지해야 함. |
| 정확도 .70, n=100이면 95% 구간 반폭 약 ±9.0%p | 출처 없음·팀 계산 | \(1.96\sqrt{.7×.3/n}\) 재계산 | 일치 | B | 8.982%p. **독립 베르누이·정규근사** 조건. |
| n=200이면 ±6.4%p | 출처 없음·팀 계산 | 같은 공식 | 일치 | B | 6.351%p. |
| n=400이면 ±4.5%p | 출처 없음·팀 계산 | 같은 공식 | 일치 | B | 4.491%p. 정확 이항구간 계산값은 아님. |
| UA .70 합격선 검증에는 최소 200발화·20화자·클래스당 50건 필요 | 출처 없음·팀 권장 | 표본수 계산의 전제·검정 목표 검토 | 확인불가 | C | 허용 오차·검정력·귀무가설·화자 내 상관을 정하지 않아 **필요 최소 표본수로 도출되지 않음**. |
| 같은 화자의 발화는 독립이 아니어서 실제 구간은 더 넓음 | 출처 없음 | 표본 독립성 가정 검토 | 일치 | B | 양의 군집 상관이 있다면 해당. 화자 단위 부트스트랩 등으로 평가해야 함. |
| UA는 클래스별 재현율 평균 | 논문 지표 정의 참조 | UA 정의 확인 | 일치 | A | 전체 accuracy의 이항구간을 UA에 그대로 적용하면 안 됨. |
| KEMDy20은 외부 평가자 10명이 라벨링 | ETRI 검색 요약만 언급, URL 없음 | 원문 식별·검색 시도 | 확인불가 | C | 이번 검증에서 해당 ETRI 원문을 확보하지 못함. |
| EU AI Act 제5조(1)(f): 직장·교육기관의 감정 추론 금지, 의료·안전 예외 | [제시 조문 재게시 사이트](https://artificialintelligenceact.eu/article/5/) | 재게시 조문·FPF 해설 대조 | 일치 | B | 제시 사이트는 **EU 공식 법령 사이트가 아님**. EUR-Lex 원문 접근은 봇 확인으로 차단됨. |
| 금지 규정 적용일은 2025-02-02 | [보완한 EU 집행위 안내](https://ai-watch.ec.europa.eu/news/first-rules-artificial-intelligence-act-are-now-applicable-2025-02-02_en) | 집행위 공식 발표 | 일치 | A | 최초 적용 규칙과 금지 관행 적용일 확인. |
| FPF 글 게시일 2026-03-24 | [FPF](https://fpf.org/blog/red-lines-under-eu-ai-act-unpacking-the-prohibition-of-emotion-recognition-in-the-workplace-and-education-institutions/) | 페이지 날짜 | 일치 | A | 날짜 자체는 발행 원페이지에서 확인. 법 해석은 2차 자료. |
| 교육기관 범위는 모든 유형·수준이며 대학 포함은 해석 | [FPF](https://fpf.org/blog/red-lines-under-eu-ai-act-unpacking-the-prohibition-of-emotion-recognition-in-the-workplace-and-education-institutions/) | 교육기관 범위 설명 | 일치 | B | FPF 본문은 대학을 별도 명명하지 않음. |
| 생체 데이터 기반 추론이 대상이고 텍스트 기반 감정 추론은 이 금지 범위 밖 | [FPF](https://fpf.org/blog/red-lines-under-eu-ai-act-unpacking-the-prohibition-of-emotion-recognition-in-the-workplace-and-education-institutions/) | 범위·텍스트 관련 설명 | 일치 | B | “다른 법적 의무도 없음”이라는 뜻은 아님. |
| 의료·안전 예외는 좁게 해석하고 일반 웰빙 모니터링은 제외 | [FPF](https://fpf.org/blog/red-lines-under-eu-ai-act-unpacking-the-prohibition-of-emotion-recognition-in-the-workplace-and-education-institutions/) | 예외 설명 | 일치 | B | 집행위 가이드라인에 대한 2차 요약으로 확인. |
| 금지되지 않은 감정 인식 시스템은 Annex III 고위험 | [FPF](https://fpf.org/blog/red-lines-under-eu-ai-act-unpacking-the-prohibition-of-emotion-recognition-in-the-workplace-and-education-institutions/) | 요약·본문 | 일치 | B | FPF 서술과 일치. 개별 제품은 법적 정의·적용 범위·예외까지 검토해야 함. |
| 개인 소비자 앱이고 학교와 데이터를 공유하지 않으면 금지 범위 밖 | 위 법령·FPF | 해당 앱에 대한 직접 판단 유무 검토 | 확인불가 | C | **소비자 앱이라는 명칭·비공유만으로 확정할 수 없음**. 실제 사용 맥락이 필요함. |
| 한국 서비스에는 EU법이 직접 적용되지 않음 | 직접 근거 없음 | 적용 범위 결론의 근거 검토 | 확인불가 | C | 한국 소재 여부만으로 배제할 수 없음. EU 시장·이용·출력 사용과의 관련성을 확인해야 함. |
| Commission 금지 관행 가이드라인이 존재함 | [보완한 집행위 공식 페이지](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-prohibited-artificial-intelligence-ai-practices-defined-ai-act) | 공식 발표·다운로드 목록 | 일치 | A | 2025-02-04 발표. 가이드라인은 비구속적 해석 지침임. PDF 다운로드는 타임아웃으로 본문 미확인. |
| PIPC 생체정보 지침을 직접 확인하지 못함 | URL 없음; [보완한 개인정보 포털 안내](https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=12743) | 공식 자료 검색 | 일치 | B | **2021.9 생체정보 보호 가이드라인의 존재**는 확인. 음성 감정 인식 전용 지침과는 별개. |
| 시행령상 “신체적 특징 정보”가 민감정보에 포함됨 | URL 없음; [보완한 시행령 제18조](https://www.law.go.kr/법령/개인정보보호법시행령/제18조) | 연결된 국가법령정보센터 조문 직접 확인 | **불일치** | C | 핵심 조건 누락. **특정 개인을 알아볼 목적으로 기술적 수단을 통해 생성한 신체적·생리적·행동적 특징 정보**임. |
| 민감정보는 반드시 별도 동의가 있어야만 처리 가능 | 보도 요약만 언급 | 법적 요건과 노트의 단정 범위 검토 | 확인불가 | C | 별도 동의 외 법령상 허용 근거 가능성도 있어 ‘항상 동의만 가능’으로 쓰면 부정확함. |
| 음성에서 추론한 감정값이 민감정보인지 미확인 | 직접 출처 없음 | 확인한 조문의 범위 검토 | 확인불가 | C | 음성 유래라는 이유만으로 자동 분류할 수 없음. 정보 내용·처리 목적 등에 대한 검토 필요. |

마지막으로 ‘빈 곳’에 적힌 검색 부재 주장과 문헌에서 도출되지 않는 설계 해석입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| emotion2vec+·SenseVoice 한국어 평가 논문을 찾지 못함 | 검색 기록·검색식 없음 | 노트 및 인용된 원문 범위 검토 | 확인불가 | C | “노트 작성자의 검색에서 미발견”으로만 표현 가능. 공개 연구가 없다는 결론은 불가. |
| 한국어 정확도 수치는 서강대 논문에서만 나옴 | 인용 목록 | 문장의 범위 검토 | 확인불가 | C | **이 노트에서 확인한 범주형 정확도 수치**라고 한정할 것. 한국어 SER 문헌 전체에 대한 진술로는 과도함. |
| KEMDy19/20·AI Hub의 공개 Fleiss κ를 찾지 못함 | 원문 URL 없음 | 노트의 근거·검색 범위 검토 | 확인불가 | C | 공개 수치 부재가 입증된 것은 아님. |
| 한국어 화자 독립·종속 격차의 확인된 정량값 없음 | 직접 출처 없음 | 확보 근거 검토 | 확인불가 | C | 이번 자료에서 확보하지 못했다는 수준으로 유지. |
| EMO-DB 화자 독립 시 7% 하락 | 검색 요약만 언급 | 원논문·지표·분할 식별 | 확인불가 | C | 노트에서 사용하지 않은 판단은 적절함. |
| WebRTC Opus+잡음+SER을 함께 평가한 논문은 “없음” | 검색 기록 없음 | 인용 논문의 실험 범위 대조 | 확인불가 | C | **“이번 검색에서 찾지 못함”으로 수정**. Opus 단독 SER 실험은 이미 있음. |
| 확인 질문과 단정형 공감·무반응을 비교한 연구는 없음 | 검색 기록 없음 | 인용 문헌의 비교 조건 검토 | 확인불가 | C | 이 노트의 인용 목록에 없다는 점만 확인 가능. |
| 정신건강 맥락에서 슬픔 미검출·거짓 양성의 피해 비교 연구를 찾지 못함 | 직접 출처 없음 | 검색 범위·증거 검토 | 확인불가 | C | 미발견과 문헌 부재를 구분해야 함. |
| 음성 타당성 비판 수치·연령·억양 편향의 직접 정량 근거를 확보하지 못함 | 직접 출처 없음 | 노트 내 인용 검토 | 확인불가 | C | Barrett 수치는 얼굴 연구이고 Borre 결과를 한국어 억양 편향으로 확대할 수 없음. |
| 더 큰 모델이 SER 한계를 해결한다고 가정할 수 없음 | [Triantafyllopoulos 2025](https://arxiv.org/html/2508.02448v1) | 성능 정체 결론과 설계 해석 비교 | 일치 | B | 합리적인 경계 원칙이지만, 큰 모델이 효과 없다는 보편 명제는 아님. |
| 한국어 자연 대화·화자 독립 파일럿으로 직접 검증해야 함 | 여러 문헌을 종합한 팀 제안 | 문헌의 적용 범위와 제안 구분 | 확인불가 | C | 적절한 연구 계획이지만 이미 검증된 성능·효과라는 주장은 아님. |

**사업계획서 인용 전 우선 고칠 문장**은 다음과 같습니다.

- “화자 50명/44명 미만” → **“4명 미만 또는 화자별 감정 분포가 불균형한 경우”**
- “IEMOCAP 화자 독립 UA 상한 73%” → **“특정 연구의 화자 독립 WA 73.01%”**
- “EMO-Codec에는 Opus 직접 평가가 없다” → **“Opus를 평가했지만 WebRTC 전송·잡음 결합 조건과는 구분된다”**
- “Shibata가 오추정 공감의 반감 유발을 실험으로 입증했다” → **“초록에서 배경 문제로 제시하고, 실험은 모호한 움직임의 공감 전달을 평가했다”**
- “α=.25이므로 정확도 상한이 낮다” → **“평가자 합의도가 낮아 라벨과 모델 성능의 해석에 주의가 필요하다”**
