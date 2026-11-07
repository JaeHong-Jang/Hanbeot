주요 수치는 대체로 출처와 맞지만, **향상률 단위, 실험 언어, 효과의 귀속, DOI 연결**에 수정할 부분이 있습니다. 반복된 주장은 합쳤습니다. 검증일은 **2026-11-08**입니다.

A는 원출처 확인, B는 Scopus·검색색인 등 간접 확인, C는 확인 불가입니다. 수치 없는 인용은 원출처의 서술 일치 여부로 평가했습니다. **‘일치’는 저자가 해당 결과를 보고했다는 뜻이며, 독립 재현을 뜻하지 않습니다.** 원출처 수치는 같아도 해석이 틀리면 ‘불일치/A’로 표시했습니다.

조사 건수와 출처 관리에 대한 검증입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| `ser_preprocessing_features` 200건 | URL 없음; 로컬 Scopus 원자료 | 해당 JSONL 레코드 계수 | 일치 | A | 200건 확인 |
| `ser_ssl_models` 200건 | URL 없음; 로컬 Scopus 원자료 | 해당 JSONL 레코드 계수 | 일치 | A | 200건 확인 |
| `ser_cross_corpus` 150건 | URL 없음; 로컬 Scopus 원자료 | 해당 JSONL 레코드 계수 | 일치 | A | 150건 확인 |
| `ser_noise_codec_robustness` 150건 | URL 없음; 로컬 Scopus 원자료 | 해당 JSONL 레코드 계수 | 일치 | A | 150건 확인 |
| `ser_korean` 26건, 전부 조사 | URL 없음; 로컬 Scopus 원자료 | 파일 계수와 조사 주장 구분 | 확인불가 | C | 파일은 26건이 맞지만 실제 전부 읽었는지는 확인 불가 |
| `korea_emotion_speech_top` 200건 | URL 없음; 로컬 Scopus 원자료 | 해당 JSONL 레코드 계수 | 일치 | A | 200건 확인 |
| 6개 파일 합계 926건, 중복 포함 | URL 없음; 로컬 Scopus 원자료 | 합산 및 EID 중복 검사 | 일치 | A | 926건 확인. EID 기준 고유 문헌은 797건 |
| 상위 인용 30건＋2025~2026 상위 20건＋제목·초록의 `korea`로 선정 | URL 없음; 선정 규칙 | 저장 순서와 연도를 이용해 합집합 재계산 | 일치 | A | 순서대로 35·51·43·46·26·56건 재현 |
| 읽은 편수 35·51·43·46·26·56편, 합계 257편 | URL 없음 | 선정 집합과 실제 독서 이력 구분 | 확인불가 | C | 합계 257과 선정 건수는 맞음. 실제 독서 행위는 입증되지 않음 |
| 2021년 이후 약 120편을 훑고 핵심 약 45편의 초록 전문을 읽음 | URL 없음 | 선별 목록·독서 기록 존재 여부 점검 | 확인불가 | C | 해당 120편·45편을 특정하는 목록이 필요 |
| 모든 수치는 Scopus 초록·메타데이터에서만 가져옴 | Scopus 및 ‘위키 기존’ 참조 | 문서 내부 출처와 대조 | 불일치 | B | 16 kHz 모델 사양, 서강대 학위논문, 기존 위키 수치와 제안값도 포함됨 |
| 본문·부록을 읽지 않았고 일부는 앞 300자＋수치 문장만 읽음 | URL 없음 | 조사 이력 확인 | 확인불가 | C | 작성자의 작업 방식에 대한 자기보고 |
| Wiki 후보 25개 | URL 없음; §7 표 | 표 행 계수 | 일치 | A | 25개 맞음. 이것이 문헌 품질을 보증하지는 않음 |
| 보류 문헌은 “모두 A” | URL 없음; §7 | 같은 문장의 등급 대조 | 불일치 | B | Portal을 바로 뒤에서 B로 표기해 내부적으로 모순 |
| 기존 Wiki 슬러그가 존재함 | URL 없음; `.omc/wiki/` | 로컬 파일 확인 | 일치 | A | 명시된 기존·유사 슬러그 확인. Bautista·Naini의 제안 슬러그 자체는 없고 다른 기존 슬러그로 연결됨 |

다음은 논문의 수치와 핵심 인용 주장입니다. DOI만 제시된 경우 DOI URL로 변환했습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Milling 2022: 일반 VAD ROC-AUC 0.850, 아동 VAD 0.662, 최대 SER CCC 0.263 | [Frontiers 원문](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.837269/full) | 출판사 초록 직접 대조 | 일치 | A | 수치와 일반·아동 VAD의 대응 모두 맞음 |
| Milling: VAD 종류에 따라 valence·arousal 성능이 달라짐; 영어 자폐 아동 대상 | [Frontiers 원문](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2022.837269/full) | 초록·데이터 설명 대조 | 일치 | A | 한국어 성인 대화에 대한 직접 근거는 아님 |
| McKinnon 2026: Silero가 WebRTC·RMS보다 우수하고 hysteresis는 WebRTC에 도움 | 위키 참조 → [arXiv](https://arxiv.org/abs/2601.17270) | 저자 공개 초록·본문 확인 | 일치 | A | 영어 1.1시간·21파일 실험. SER 정확도 비교가 아니라 VAD 비교 |
| Jun 2024: KEMDy19 4감정, 0.5초·3초 분할 시 전체 발화 대비 UA 상대 10.61%·5.08% 감소 | [AES 원출처](https://aes.org/publications/elibrary/elibrary-page/?id=22745) | AES 초록 대조 | 일치 | A | **상대 감소율**이며 %p가 아님 |
| Jun: 실시간 계수 RTF 개선 | [AES 원출처](https://aes.org/publications/elibrary/elibrary-page/?id=22745) | 초록 대조 | 일치 | A | 노트에는 개선량 자체를 제시하지 않음 |
| Jun 논문은 “Proc. AES Int. Conf.”이며 DOI 없음 | [AES 원출처](https://aes.org/publications/elibrary/elibrary-page/?id=22745) | AES 서지 및 DOI 표시 검색 | 불일치 | B | AES Convention Express Paper로 정정 필요. 페이지에서 DOI는 발견하지 못했지만 DOI 부재 자체는 단정 불가 |
| Hyeon 2025: GAP＋SAP가 IEMOCAP에서 SOTA, KEMDy19에서 UA·WA 개선 | [DOI](https://doi.org/10.1109/BigComp64353.2025.00047) | 출판사 색인과 [저자 선행판](https://arxiv.org/html/2410.12416v1) 대조 | 일치 | A | 저자가 보고한 비교 범위의 SOTA |
| Hyeon: SAP는 비음성 구간을 제외하고 음성 구간에 집중 | [DOI](https://doi.org/10.1109/BigComp64353.2025.00047) | 공개 선행판 방법 확인 | 일치 | A | 전체 파형에서 비언어 신호를 무조건 삭제하라는 의미는 아님 |
| Atmaja 2022: 화자 독립 조건에서 글로탈 소스 추출＋무음 제거 두 증강이 최고 | [DOI](https://doi.org/10.3390/s22165941) | Scopus 전문 초록·출판 논문 초록 색인 대조 | 일치 | B | 일본어 Twitter 기반 음성 및 IEMOCAP. 조건 한정 결과 |
| Atmaja: 텍스트 독립 조건에서는 증강을 늘리는 것이 유리한 경향 | [DOI](https://doi.org/10.3390/s22165941) | 초록 대조 | 일치 | B | 모든 조건에서 단조롭게 향상한다는 뜻은 아님 |
| Tzeng 2025: 공유 SSL 기반 SE＋SER 및 점진적 unfreeze | [DOI](https://doi.org/10.1109/ICASSP49660.2025.10887569) | [저자 공개 PDF](https://lab-msp.com/MSP/publications/Tzeng_2025.pdf) 확인 | 일치 | A | 구조·학습 전략이 초록에 명시됨 |
| Tzeng: 0 dB에서 F1-Macro +3.7%, F1-Micro +2.7%, 통계적으로 유의 | [DOI](https://doi.org/10.1109/ICASSP49660.2025.10887569) | 저자 PDF 초록·결과 서술 대조 | 일치 | A | 원문 표현과 일치. 임의로 %p로 바꾸면 안 됨 |
| Tzeng: 낮은 정확도의 예측은 사용자 신뢰를 해칠 수 있음 | [저자 연구실](https://biic.ee.nthu.edu.tw/research.php?id=205) | 초록 문장 직접 확인 | 일치 | A | **문제 제기**이며 사용자 신뢰에 대한 별도 실험 결과는 아님 |
| Leem 2024: 10 dB에서 전체 LLD 향상 대비 arousal +17.7%, dominance +21.2%, valence +3.3% | [DOI](https://doi.org/10.1109/TASLP.2023.3340603) | [저자기관 PDF](https://sites.bu.edu/amplab/files/2024/06/Selective-acoustic.pdf) 초록·결과 확인 | 일치 | A | MSP-Podcast의 특정 비교 조건. 정확도 증가량으로 읽으면 안 됨 |
| Leem: 강건한 특징까지 향상하면 감정 단서가 훼손될 수 있음 | [저자기관 PDF](https://sites.bu.edu/amplab/files/2024/06/Selective-acoustic.pdf) | 방법·결과 서술 대조 | 일치 | A | 선택적 특징 향상의 동기와 부합 |
| Leem 2023: 환경별 적응 시간 59.16% 감소, 트랜스포머 인코더 파라미터의 0.98% 필요 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2023/leem23_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 0.98%는 비교 대상 인코더 대비 비율 |
| Nam Y. 2021: 한국어 DnCNN-CNN 95.8%, CNN 93.6% | [DOI](https://doi.org/10.3390/s21134399) | Scopus 초록 및 논문 표 8·9의 검색색인 대조 | 일치 | B | **원래 CADKES 조건**의 수치. 강한 추가 잡음 조건의 성능으로 인용하면 안 됨 |
| Nam Y.: 중앙대 소속이며 한국어·독일어 소음 SER 연구 | [DOI](https://doi.org/10.3390/s21134399) | 출판 논문·기관 정보 대조 | 일치 | B | 한국어 대상이라는 점은 맞음 |
| Nam H.J. 2024: −6 dB까지 평가 | [DOI](https://doi.org/10.3390/app14125227) | 출판사 초록·본문 검색색인 대조 | 일치 | B | −6 dB에서 clean 대비 정확도 저하 7.2%라는 서술 확인 |
| Nam H.J. 2024를 “한국어 소음 연구”로 분류 | [출판사 원문](https://www.mdpi.com/2076-3417/14/12/5227) | 데이터셋 설명 대조 | 불일치 | B | **한국 기관 POSTECH의 연구**이며 clean 학습 데이터는 IEMOCAP. 한국어 실험 근거로 쓰면 안 됨 |
| Shi 2026: ASR 중간층 표현이 여러 NSER·SSL·소음 제거 기준선을 상회 | [DOI](https://doi.org/10.1109/TASLPRO.2026.3654273) | IEEE 초록 검색색인·Scopus 초록 대조 | 일치 | B | 원문 페이지 직접 접근은 제한됨 |
| Shi: 상위 인코더·하위 디코더가 단일층에서 유리하고 전층 결합이 최고; 사람 음성 잡음에 취약; 교차 언어 강건 | [IEEE 초록](https://ieeexplore.ieee.org/abstract/document/11353442) | 초록의 열거된 결과 대조 | 일치 | B | 해당 연구의 평가 범위에서 성립 |
| Avila 2021: 음성 향상＋변조 스펙트럼 풀링이 소음·잔향·복합 조건에서 기준선 상회 | [DOI](https://doi.org/10.1109/TAFFC.2018.2858255) | Scopus 전문 초록 대조 | 일치 | B | RECOLA·SEWA 연구. MSP-Podcast 연구가 아님 |
| Grágeda 2025: ladder network에서 MVDR·D&S 모두 평균 CCC 약 +116% | [DOI](https://doi.org/10.1016/j.csl.2024.101666) | [저자 공개 PDF](https://lab-msp.com/MSP/publications/Grageda_2025.pdf) 확인 | 일치 | A | 원래 MSP-Podcast 훈련 발화로 학습한 모델의 HRI 부분집합 결과 |
| Grágeda: wav2vec 2.0에서는 D&S만 개선; 목표 환경 시뮬레이션 훈련이 HRI에서 최고 CCC | [저자 공개 PDF](https://lab-msp.com/MSP/publications/Grageda_2025.pdf) | 초록 직접 대조 | 일치 | A | 모바일 한국어에서 같은 효과 크기가 난다는 근거는 아님 |
| Deschamps-Berger 2022: 프랑스 응급 콜센터에서 wav2vec2·BERT 융합 | [DOI](https://doi.org/10.1145/3536220.3558038) | Scopus 전문 초록 대조 | 일치 | B | 실제 전화 대화 연구는 맞지만 코덱 ablation 근거는 아님 |
| Yoon 2025 MASKSER: 음성＋잡음 낀 전사문, KL 손실, 한국어·영어 평가 | [DOI](https://doi.org/10.1109/TASLPRO.2025.3617234) | Scopus 전문 초록 대조 | 일치 | B | 전화 상담을 동기로 삼는 것과 특정 전화 코덱을 평가하는 것은 구분 필요 |
| Gat 2022: 적대 학습으로 화자 특성을 정규화; IEMOCAP 화자 독립·의존 설정에서 SOTA | [DOI](https://doi.org/10.1109/ICASSP43922.2022.9747460) | [저자 공개 초록](https://arxiv.org/abs/2202.01252) 대조 | 일치 | A | 세션 초기 평균을 차감하는 개인화 기법과는 다름 |
| Ryu 2025: MSP-Podcast V 0.627·평균 0.571; IEMOCAP V 0.646/A 0.744/D 0.557 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2025/ryu25_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 차원 감정 회귀 지표이며 분류 정확도가 아님 |
| Ryu: 피치 z-정규화 효과는 데이터셋에 따라 다르고 영어·한국어 사전학습 불일치가 표현 선택에 영향 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2025/ryu25_interspeech.html) | 초록 직접 대조 | 일치 | A | 한국어 인앱 개인 기준선 차감의 효과를 입증한 것은 아님 |
| Lu 2022: 화자 불변 특징 학습으로 화자 독립 SER 개선 | [DOI](https://doi.org/10.1109/TASLP.2022.3178232) | [공저자 소속기관 초록](https://portal.fis.tum.de/en/publications/domain-invariant-feature-learning-for-speaker-independent-speech-/) 대조 | 일치 | A | Emo-DB·eNTERFACE·CASIA. 화자별 z-정규화 논문으로 해석하면 부정확 |
| Yuan 2024: IEMOCAP UA 74.8%, Emo-DB UA 95.5% | [DOI](https://doi.org/10.1109/ICASSP48485.2024.10448044) | Scopus 전문 초록 대조 | 일치 | B | 숫자는 일치하나 각 수치의 상세 평가 설정은 본문 확인 필요 |
| Noh 2023: KEMDy19 화자 식별 정확도 +3.2% | [DOI](https://doi.org/10.1109/ACCESS.2023.3297715) | [ETRI 원문 PDF](https://ksp.etri.re.kr/ksp/article/file/67248.pdf) 확인 | 일치 | A | **화자 식별 SI** 향상. SER 정확도나 기준선 차감의 효과가 아님 |
| Wagner 2023: MSP-Podcast valence CCC 0.638, 명시적 텍스트 없이 최고 성능 | [DOI](https://doi.org/10.1109/TPAMI.2023.3263585) | [저자 공개 초록](https://arxiv.org/abs/2203.07378) 대조 | 일치 | A | 저자가 비교한 당시 조건의 결과 |
| Wagner: CNN보다 강건하고 성별 집단에는 공정하지만 개별 화자에는 불공정; 암묵적 언어 정보가 valence 성능에 기여 | [저자 공개 초록](https://arxiv.org/abs/2203.07378) | 초록 직접 대조 | 일치 | A | 한국어에서 언어 편향이 실제로 증가한다는 결과까지 제시한 것은 아님 |
| Pepino 2021: 여러 층 조합이 최종 출력만 쓰는 것보다 풍부하며 IEMOCAP·RAVDESS 평균 재현율 개선 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2021/pepino21_interspeech.html) | 학회 초록 직접 확인 | 일치 | A | 모든 SSL 모델·데이터에 최적이라는 의미는 아님 |
| Ma 2024 emotion2vec: 선형 층만 학습해 IEMOCAP의 기존 모델을 상회하고 10개 언어에서 개선 | [ACL 원출처](https://aclanthology.org/2024.findings-acl.931/) | 출판사 초록 직접 대조 | 일치 | A | 논문의 **emotion2vec** 결과. emotion2vec+에 그대로 귀속하면 안 됨 |
| Liu K. 2024를 특징 선택 근거로 인용 | [DOI](https://doi.org/10.1109/TMM.2024.3410133) | IEEE 초록 검색색인·Scopus 대조 | 일치 | B | MFCC 특징 학습·TsPCA·특징 융합 연구. GAP＋SAP나 SSL 다층 가중합의 직접 근거는 아님 |
| Chatziagapi 2019: 소수 클래스 GAN 증강으로 IEMOCAP 상대 +10%, FEEL-25k +5% | [ISCA 원출처](https://www.isca-archive.org/interspeech_2019/chatziagapi19_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 상대 향상률. +10%p·+5%p가 아님 |
| Bao 2019: CycleGAN 감정 스타일 변환을 데이터 증강에 사용 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2019/bao19_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 코퍼스 내·교차 코퍼스 개선 보고. 한국어 검증은 별개 |
| Lee 2025: AI Hub 11,192발화를 33,576개로 증강, 채도 가중치 0·2, 4감정 | [출판사 원문](https://www.mdpi.com/2076-3417/15/4/2088) | 출판사 초록·표 검색색인과 Scopus 대조 | 일치 | B | 원래 발화와 파생 이미지의 개수를 구분해 표현하는 것이 정확함 |
| Lee 2025: “기존 ResNet 대비 34.19% 향상” | [출판사 원문](https://www.mdpi.com/2076-3417/15/4/2088) | 초록과 표 4·6 대조·재계산 | 불일치 | B | 초록 표현은 같지만 56.96%→91.15%는 **34.19%p 상승**. 상대 향상률은 약 60.02% |
| Park S. 2024: 건국대의 한국어 다중 라벨·특징 융합 연구 | [DOI](https://doi.org/10.3390/app14177604) | [소속기관 초록](https://pure.konkuk.ac.kr/en/publications/multi-label-emotion-recognition-of-korean-speech-data-using-deep-/) 대조 | 일치 | A | 노트에 이 논문의 구체 성능 수치는 없음 |
| MEDUSA: 균형 샘플링·주석 소프트 타깃·Manifold MixUp 사용, Interspeech 2025 Task 1 1위 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2025/chatzichristodoulou25_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 순위는 전체 시스템의 결과. 개별 기법의 독립 효과와 구분 필요 |
| Uniyal 2025: 클래스 불균형 손실·미세조정·층 동결을 비교 | [ISCA 논문 PDF](https://www.isca-archive.org/interspeech_2025/uniyal25_interspeech.pdf) | 초록 직접 확인 | 일치 | A | 한국어에서 특정 불균형 처리법이 최적이라는 근거는 아님 |
| Ibrahim 2024: 11개 데이터셋·오버샘플링·Whisper·평가 프로토콜 비교 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2024/ibrahim24_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 11개 데이터셋 수 일치 |
| Ahn 2022: 코퍼스별 손실 가중으로 미관측 코퍼스 성능 개선 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2022/ahn22_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 비라벨 코퍼스의 의사 감정 라벨도 사용 |
| Goron 2024: Whisper의 6개 데이터셋 평균 UAR 74.5%; HuBERT·WavLM도 일반화 가능 | [DOI](https://doi.org/10.1109/ICASSP48485.2024.10446997) | Scopus 전문 초록·외부 서지 대조 | 일치 | B | 원출처 직접 접근 실패. 로컬 Scopus 초록의 수치는 일치 |
| Chen 2023: 최상 시스템의 IEMOCAP UA가 이전 SOTA 대비 절대 +7.4%p; 저자원에서 P-TAPT가 TAPT보다 우수 | [DOI](https://doi.org/10.1109/ICASSP49357.2023.10095036) | [저자 공개 초록](https://arxiv.org/abs/2110.06309) 대조 | 일치 | A | 절대 향상이므로 %p 표기가 정확함 |
| Chen의 +7.4%p가 “TAPT 단독 효과” | [저자 공개 초록](https://arxiv.org/abs/2110.06309) | 비교 대상과 효과 귀속 점검 | 불일치 | A | 초록은 **최상 시스템 대 이전 SOTA** 비교라고 명시. TAPT만 추가한 ablation 효과가 아님 |
| Gao 2023: ASR·성별 사전학습과 2단계 미세조정으로 UA 76.10%, 단일 과제 대비 절대 +3.97%p | [ISCA 원출처](https://www.isca-archive.org/interspeech_2023/gao23d_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 수치·비교 기준 모두 일치 |
| Feng 2023: 4개 테스트베드에서 비교한 PEFT 중 LoRA가 최고이며 공정성 개선 | [DOI](https://doi.org/10.1109/ACII59096.2023.10388152) | [저자 공개 초록](https://arxiv.org/abs/2306.05350) 대조 | 일치 | A | 비교한 PEFT·데이터 범위로 한정 |
| Sampath 2025: 마지막 3층 혼합정밀도, 속도 +67%; 캐시 포함 +88%, 학습 파라미터 −71% | [DOI](https://doi.org/10.1109/ICASSP49660.2025.10889878) | [저자 공개 초록](https://arxiv.org/abs/2503.03756) 대조 | 일치 | A | Wav2Vec 2.0 base의 차원 감정 연구. 다른 백본의 보장치가 아님 |
| Ma 2025: LoRA로 Whisper를 SER에 적응시키는 연구가 존재 | 위키 참조 → [arXiv](https://arxiv.org/abs/2509.08454) | 논문 제목·서지 확인 | 일치 | A | 이 노트에서는 해당 논문의 구체 성능 수치를 인용하지 않음 |
| Naini 2025: 챌린지에 93팀 참가, 음성·텍스트 모델 결합이 효과적 | [DOI](https://doi.org/10.21437/Interspeech.2025-1972) | [학회 PDF](https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf)의 검색색인 대조 | 일치 | B | PDF 초록에는 93팀 명시. HTML 초록은 참가 수를 생략한 버전 |
| Cao 운율 GRU: KEMDy19 12,457샘플, 정확도 64.69%, UAR 64.71% | [DOI](https://doi.org/10.1109/AI3E69313.2025.00044) | 로컬 Scopus 전문 초록 대조 | 일치 | B | 원출처의 수치·분할은 직접 확인하지 못함 |
| Cao 운율 GRU: Disgust F1 72.28% 최고, Happy 49.62% 최저; 불균형·문화적 표현 차이로 해석 | [DOI](https://doi.org/10.1109/AI3E69313.2025.00044) | 로컬 Scopus 전문 초록 대조 | 일치 | B | 원인 설명은 저자의 해석이며 별도의 인과 입증으로 읽으면 안 됨 |
| Cao 멀티모달: wav2vec2＋KoBERT 교차 주의, KEMDy19·AI Hub, 테스트 정확도 73.3%·검증 UAR 85.52% | [DOI](https://doi.org/10.1109/AI3E69313.2025.00094) | 로컬 Scopus 전문 초록 대조 | 일치 | B | 검증/테스트 및 정확도/UAR가 달라 두 수치를 직접 비교할 수 없음 |
| Li 2022: ASR 은닉 출력＋텍스트 계층 융합으로 IEMOCAP WA 63.4% | [DOI](https://doi.org/10.1109/ICASSP43922.2022.9746289) | [저자기관 PDF](https://www.pure.ed.ac.uk/ws/portalfiles/portal/254743158/ICASSP2022_camera_ready.pdf) 초록 대조 | 일치 | A | WA이며 UA가 아님 |
| Fukuda 2025를 ASR 기반 SER 근거로 인용 | [DOI](https://doi.org/10.1109/ICASSP49660.2025.10889314) | Scopus 전문 초록 대조 | 일치 | B | Whisper 전체 인코더·디코더와 SerialMTL 연구. **SE 공동 학습이나 소음 강건성의 직접 근거로는 부족** |
| Prabhu 2024: Student-t 주석 분포·KL 손실·베이지안 모델, 자연환경 데이터셋 2개에서 불확실성 모델링 SOTA | [DOI](https://doi.org/10.1109/TAFFC.2023.3283595) | [저자 공개 초록](https://arxiv.org/abs/2209.15449) 대조 | 일치 | A | 주석 불확실성 추정과 분류 확률 보정은 구분 필요 |
| Prabhu의 연구는 “영어뿐” | [DOI](https://doi.org/10.1109/TAFFC.2023.3283595) | [공개 본문](https://arxiv.org/html/2209.15449) 데이터 설명 확인 | 불일치 | A | **프랑스어 RECOLA/AVEC’16과 영어 MSP-Conversation** 사용 |
| Chou 2023: 저신뢰 예측 거부에는 보정이 필요하며 ECE·온도 스케일링으로 평가 | 위키 참조 → [ISCA 원출처](https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html) | 학회 초록 직접 확인 | 일치 | A | 보정 방법의 효과는 보고하지만 한국어 인앱 효과까지 입증하지는 않음 |
| Portal 2025: 단일 코퍼스 간 전이에서 대부분 정확도 40% 미만; 최대 5개 훈련 코퍼스 결합 시 최고 58.85% | [DOI](https://doi.org/10.1142/S0129065725300013) | [저자기관 초록](https://portalcientifico.upm.es/cat/ipublic/item/10382483) 직접 대조 | 일치 | A | 해당 벤치마크의 관측 결과 |
| Zhao 2025 AKTLR: eGeMAPS의 6과제 평균 UAR 42.12% | [DOI](https://doi.org/10.1109/TCSS.2024.3483964) | IEEE 초록 검색색인·Scopus 대조 | 일치 | B | 모든 eGeMAPS 전이 학습의 평균이나 상한이 아님 |
| Parry 2019: 다중 코퍼스 훈련이 유망하고 CNN이 RNN보다 일반화에 유리 | [ISCA 원출처](https://www.isca-archive.org/interspeech_2019/parry19_interspeech.html) | 학회 초록 직접 대조 | 일치 | A | 2019년의 비교 구조에 관한 결론. 최신 Transformer 대비 권고는 아님 |
| Naderi 2023: 타깃 화자 20%로 적응해 EmoDB 정확도 92.45% | [DOI](https://doi.org/10.1016/j.knosys.2023.110814) | 로컬 Scopus 전문 초록 대조 | 일치 | B | 원출처 직접 접근 제한. 20%는 **화자 비율** |
| Zhao R. 2025 HuMP-CAT: 7개 데이터셋 평균 정확도 78.75%, EMODB 88.69%, EMOVO 79.48% | [DOI](https://doi.org/10.1109/JIOT.2025.3613687) | [저자 공개 초록](https://arxiv.org/abs/2501.10408) 대조 | 일치 | A | 타깃 데이터 일부로 미세조정한 결과. 무적응 교차 코퍼스 성능과 구분 |
| Agarla: 5개 언어, 화자 독립 평가, 의사 라벨을 활용해 UA 평균 약 40% 향상 | [DOI](https://doi.org/10.1016/j.eswa.2023.121368) | [저자기관 초록](https://boa.unimib.it/handle/10281/436678) 확인 | 일치 | A | 잘린 비교 대상은 **기존 SOTA 방법**. +40%p로 쓰면 안 됨 |
| Agarla 논문의 연도는 2023 | [저자기관 서지](https://boa.unimib.it/handle/10281/436678) | 온라인 공개일·권호 연도 비교 | 일치 | B | 온라인 공개 2023-09-03, 정식 권호는 **2024년**. 인용 기준을 통일할 것 |
| Noh 2021 MPGLN: KESDy18·19＋IEMOCAP, 다중 도메인 F1 +3.7%, 일반화 +3.5% | [DOI](https://doi.org/10.3390/s21051579) | Scopus 초록·[공개 논문 색인](https://pmc.ncbi.nlm.nih.gov/articles/PMC7956608/) 대조 | 일치 | B | 비교 기준은 temporal feature generator 기반 모델. 모든 환경의 평균 보장치가 아님 |
| Ough 2023: 한↔영 전이의 낮은 정확도, 포먼트 차이 가설, 2층 앙상블 | [DOI](https://doi.org/10.1155/2023/8837465) | 출판사 본문 검색색인·Scopus 초록 대조 | 일치 | B | 포먼트 설명은 가설 |
| Bautista 2025: 이산·차원 감정 공동 모델 연구 | [DOI](https://doi.org/10.3390/app15020623) | 출판사 검색색인·Scopus 초록 대조 | 일치 | B | 초록의 평가 데이터는 **IEMOCAP**. 한국 기관 연구와 한국어 실험을 구분해야 함 |
| Bautista 2023 AHFE: KEMDy19 wav2vec2 평균 CCC 0.5473 | [AHFE 원출처](https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68) | 출판사 초록 직접 대조 | 일치 | A | 전체 감정 범주의 valence·arousal 평균. **emotion2vec+ 결과가 아님** |
| Ahn 2021: 소수샷·도메인 적응, 3개 언어 실험 | [DOI](https://doi.org/10.1109/LSP.2021.3086395) | [ETRI 초록](https://ksp.etri.re.kr/ksp/article/read?id=64122) 직접 확인 | 일치 | A | 타깃 라벨 없이 적응하는 설정이라고 명시 |
| Jo 2024: 제주대의 LEAF＋wav2vec2 기반 한국어 SER | [DOI](https://doi.org/10.18517/ijaseit.14.3.18544) | Scopus 전문 초록·출판사 서지 대조 | 일치 | B | 인용 내용과 일치 |
| Jeong E. 2023: 가천대의 맥락·음성 활용 감정 인식 연구 | [DOI](https://doi.org/10.3390/math11132908) | Scopus 전문 초록·출판사 검색색인 대조 | 일치 | B | MELD·KEMDy20 사용. 노트에는 구체 성능 수치 없음 |
| Hi,KIA: 한국어 488발화, 8명, 4감정, 현대차＋KAIST | [DOI](https://doi.org/10.23919/APSIPAASC55919.2022.9980227) | [학회 원문 PDF](https://www.apsipa.org/proceedings/2022/APSIPA%202022/ThAM1-8/1570835832.pdf)·저자 초록 대조 | 일치 | A | 남성 4명·여성 4명, 호출어 데이터. 일반 대화와 구분 필요 |
| K9에 제시한 NAACL DOI도 Hi,KIA 관련 근거 | [제시 DOI](https://doi.org/10.18653/v1/2022.naacl-main.416) | [ACL 원출처](https://aclanthology.org/2022.naacl-main.416/) 서지 대조 | 불일치 | A | **Lee·Lee의 CoMPM** 논문. Hi,KIA의 DOI와 분리해야 함 |
| 보류 문헌 Upadhyay 2025의 DOI·서지가 유효 | [DOI](https://doi.org/10.1109/TAFFC.2025.3530105) | IEEE 초록·서지 대조 | 일치 | A | 제목은 *Phonetically-Anchored Domain Adaptation…*. 기존 gender-fairness 슬러그와 동일 논문은 아님 |
| 보류 문헌 Gerczuk 2023의 DOI·서지가 유효 | [DOI](https://doi.org/10.1109/TAFFC.2021.3135152) | [공저자 소속기관 서지](https://portal.fis.tum.de/en/publications/emonet-a-transfer-learning-framework-for-multi-corpus-speech-emot/) 확인 | 일치 | A | *EmoNet* 논문. DOI에 2021이 들어가지만 정식 권호는 2023년 |
| 서강대 2024: AI Hub 4감정 HuBERT 정확도 0.8139 | 위키 참조 → [서강대 학위논문](https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918) | 기관 저장소 초록 직접 확인 | 일치 | A | 정확도이며 UAR가 아님. 초록에는 화자 독립 여부가 없음 |
| emotion2vec+ 입력은 16 kHz | 위키 참조 → [공식 모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | 저자 모델 카드 직접 확인 | 일치 | A | 모델 입력 사양 확인. 16 kHz가 감정 인식에 최적이라는 실험 근거는 아님 |

마지막으로, 인용에서 도출한 일반화·부재 주장과 제품 권고를 구분했습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 전처리는 감정을 직접 분류하지 않고 특징 추출기·분류 헤드가 예측 | Hyeon 등 | 논문의 전처리·표현·예측 구조 대조 | 일치 | A | 노트에서 사용하는 파이프라인 구분으로 타당 |
| “최소 약 3초 이상 확보”가 입증됨 | [Jun 2024](https://aes.org/publications/elibrary/elibrary-page/?id=22745) | 실험 조건과 권고의 논리적 범위 비교 | 확인불가 | C | 0.5초보다 3초의 손실이 작다는 결과다. **3초가 최소 기준·최적값이라는 결론은 아님** |
| 증강 개수와 성능은 “반비례 트레이드오프” | [Atmaja 2022](https://doi.org/10.3390/s22165941) | 같은 초록의 조건별 결과 대조 | 불일치 | B | 텍스트 독립 조건에서는 증강 증가가 유리한 경향도 보고. ‘조건에 따라 최적 개수가 다름’으로 수정 |
| 한국어 초록 26편에서 화자 독립·k-fold가 명시되지 않음 | 로컬 `ser_korean.jsonl` | 26개 초록의 관련 표현 검색·점검 | 일치 | B | **저장된 26편의 초록 범위**로 한정해야 함 |
| 한국어 연구는 프로토콜을 알 수 없거나 불투명함 | Hyeon·Noh 등 | 공개 본문과 비교 | 불일치 | A | Hyeon 선행판은 KEMDy19 **화자 독립 40-fold**를 명시. 초록 미기재와 본문 미공개는 다름 |
| Hyeon의 정확한 UA·WA와 분할은 본문 확인이 필요 | [공개 선행판](https://arxiv.org/html/2410.12416v1) | 본문 평가 절·표 3 확인 | 일치 | A | 선행판에는 GAP＋SAP의 KEMDy19 UA **66.26%**, WA **68.27%**, 40-fold가 있음. 최종 학회판과 버전 대조 필요 |
| 한국어 Happy 성능 저하는 문화·소수 클래스 문제를 보여줌 | [Cao GRU](https://doi.org/10.1109/AI3E69313.2025.00044) | 저자 해석과 일반화 범위 비교 | 확인불가 | C | 특정 모델의 오류 분석을 한국어 전체의 특성으로 일반화할 수 없음 |
| 교차 코퍼스 SER는 “40% 안팎에서 막혀 있다” | Portal·Zhao | 연구별 설정·지표 비교 | 불일치 | A | Portal의 특정 벤치마크 결과를 분야 전체의 상한으로 확대함 |
| 한국어 소량 라벨 또는 반지도 학습이 “필수” | Portal·Agarla·Naderi·Ough | 해당 연구가 필요조건을 입증하는지 점검 | 확인불가 | C | 유망한 경로라는 근거는 있지만 필수조건 입증은 아님 |
| 한국어·자연발화의 전처리 단독 효과 연구가 거의 없음 | 6개 Scopus 쿼리 | 쿼리 범위·선정 방식 점검 | 확인불가 | C | 제한 검색에서 발견하지 못했다는 보고로만 사용 가능 |
| Opus·AMR·G.711 코덱 효과를 정량한 논문이 없음 | 6개 쿼리, 전화 연구 2편 | 검색 범위 및 인용 초록 점검 | 확인불가 | C | ‘이번 선정 문헌에서 확인하지 못함’과 ‘연구가 없음’을 구분해야 함 |
| 라우드니스·리샘플링·VAD 임계값·최대 길이 ablation 수치 없음 | 6개 쿼리 | 문헌 전체의 부재를 입증할 자료가 있는지 점검 | 확인불가 | C | 재현 가능한 선별 목록·판정 기준이 부족 |
| 세션 초기 N발화의 기준선을 쌓아 차감하는 효과의 정량 근거 없음 | Gat·Ryu | 인용 기법과 제안 기법 비교 | 확인불가 | C | 두 인용이 직접 입증하지 않는다는 점은 맞지만 관련 연구 전체의 부재는 확인 불가 |
| 한국어 SER의 보정·불확실성 연구가 없음 | Prabhu·Chou 및 6개 쿼리 | 제한 검색의 범위 점검 | 확인불가 | C | 별도의 한국어·KEMDy·AI Hub 보조 검색 없이 부재 단정 불가 |
| 한국어 소음 연구는 Nam Y.와 Nam H.J. 정도 | 두 Nam 논문 | 기관 소재지와 실험 언어 구분 | 불일치 | B | Nam H.J. 연구를 한국어 실험으로 센 것이 잘못됨 |
| KEMDy19 정확도 64.69%, CCC 0.5473, AI Hub 정확도 0.8139는 직접 비교 불가 | Cao·AHFE·서강대 논문 | 과제·지표·데이터셋 대조 | 일치 | A | 분류/회귀, 정확도/UAR/CCC, 평가 분할이 다름 |
| O1의 “emotion2vec+/wav2vec2 동결 헤드 기준선 CCC 0.5473” | [AHFE 원출처](https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68) | 모델과 수치의 대응 확인 | 불일치 | A | 0.5473은 해당 논문의 **wav2vec2 기반 모델** 결과. emotion2vec+나 제안 동결 헤드의 수치로 묶으면 안 됨 |
| Whisper는 한국어 사전학습을 포함하므로 한국어 SER에 유리 | 기존 BuzzASR 위키 | 한국어 ASR 근거와 SER 개선 주장을 구분 | 확인불가 | C | 한국어 처리 가능성과 한국어 SER 우위는 별개의 주장 |
| GAP＋SAP는 한국어 자연발화에 바로 적용 가능한 저비용 실험 | Hyeon | 논문 결과와 재현 비용·도메인 전이 구분 | 확인불가 | C | 재현 후보로는 타당하나 비용·효과는 직접 측정 필요 |
| 단일 마이크에서는 해당 다채널 빔포밍을 적용하기 어려움 | Grágeda | D&S·MVDR의 다채널 입력 조건 점검 | 일치 | A | 여러 마이크가 내장된 기기와 단일 채널 앱 입력은 구분 필요 |
| 16 kHz mono·PCM, RMS/피크 정규화가 한벗의 적정 설정 | P1·P5 | 모델 사양과 성능 최적값 구분 | 확인불가 | C | 16 kHz는 특정 모델 사양으로 확인됨. 모노 변환·정규화의 감정 보존 효과는 별도 실험 대상 |
| VAD 후보·히스테리시스·약한 트리밍·비언어 제외가 적정 전처리 | Milling·McKinnon·Atmaja·Hyeon | 연구 조건과 제품 권고 비교 | 확인불가 | C | 검증할 가설. 웃음·한숨 제거의 이득은 제시된 근거로 확정되지 않음 |
| 소음 혼합·RIR 증강·SE 공동 학습의 방향은 “확정” | Tzeng·Leem·Grágeda | 언어·기기·환경 전이 범위 점검 | 확인불가 | C | 근거 있는 **후보 전략**이며 한국어 앱에서의 방향 확정은 아님 |
| emotion2vec+ 동결→LoRA→텍스트 융합→보정이 비용 대비 최적 순서 | M2·M4·M5·M7 | 직접 비교 실험 존재 여부 점검 | 확인불가 | C | 작성자의 설계 판단. 논문이 검증한 순서가 아님 |
| STT 캐스케이드이므로 전사 융합 비용이 없음 | 프로젝트 설명 | 추가 연산·운영 비용 근거 점검 | 확인불가 | C | 기존 전사 재사용은 가능해도 텍스트 인코딩·융합 비용까지 0은 아님 |
| 저신뢰 예측 억제·확인 질문이 사용자 신뢰를 개선 | Prabhu·Tzeng·Chou | 통계적 보정과 사용자 효과 구분 | 확인불가 | C | 보정 필요성은 뒷받침됨. 확인 질문의 사용자 효과는 별도 평가 필요 |
| “한국어 대화 SER＋보정된 신뢰도＋화자 기준선” 영역이 비어 있음 | §6·§8 | 신규성·부재 주장의 검색 범위 점검 | 확인불가 | C | 연구 가설로 제시 가능. 선행연구 부재가 입증된 상태는 아님 |
| O1~O3의 수십~수백 명, 3층 라벨, KEMDy19/20, 라벨 N개 등의 설계가 충분함 | URL 없음; 연구 제안 | 실증 결과와 계획값 구분 | 확인불가 | C | 표본 수·라벨 수는 목표값 또는 미정 변수. 검증된 필요 표본 수가 아님 |
| 협력 후보 3~5곳과 연락 가치 등급 | 각 기관 논문 및 위키 | 저자·기관 연결과 협력 가능성 구분 | 확인불가 | C | 소속·출판 이력과 실제 연락 가능성·협력 의사는 별개 |
| `ser_korean`의 26건만으로 한국어 연구 지형을 포괄하기 어려움 | 로컬 쿼리 정의·원자료 | 검색식과 수집 상한 점검 | 일치 | B | 검색식이 특정 영문 표현에 의존하고 다른 쿼리는 수집 상한도 있음. 보조 검색 필요라는 결론은 타당 |
