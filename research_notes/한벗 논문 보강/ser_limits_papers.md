# SER 정확도 한계와 오추정 위험 — 교수님 피드백 ① 대응 문헌 노트

작성: researcher / 2026-10-26. 등급: A = 논문·초록 페이지를 직접 열어 확인, B = 2차 출처(검색 요약 등), C = 미확인.
공통 주의: 도구가 초록 페이지만 반환한 논문은 "초록만 확인"으로 표기했고, 초록에 없는 수치는 적지 않았다. 이미 Wiki에 있는 논문(emotion2vec, SER Evals, KEMDy, Sogang 등)은 slug로만 인용한다.

---

## 1. 교차언어·교차코퍼스 열화와 한국어 SER

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어·데이터 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| SER Evals: In-domain and Out-of-domain Benchmarking for SER (Wiki: `src-sereval-2024-whisper-crosslingual`) | 2024, arXiv 2408.07851 | https://arxiv.org/html/2408.07851v1 | 19개 코퍼스, 13개 언어, 9개 체크포인트. 표 3 macro-F1: 도메인 내 0.67~0.78 → 미관측 코퍼스(OOD) 0.13~0.20. 모델별 하락폭 약 0.53~0.60 (Whisper-Large-v2 0.782→0.194, WavLM-Large 0.765→0.161, HuBERT-Large 0.733→0.157). 하락폭은 fetch 요약이 표에서 계산한 값이며 논문이 명시한 문장은 아님. | 13개 언어, 한국어 없음 | 학습에 없던 코퍼스로 가면 F1이 도메인 내의 1/4 안팎으로 떨어진다. 한국어 미검증 모델을 그대로 쓸 수 없다는 가장 강한 근거. 원표 재확인 필요. | A (수치는 요약 경유, 재확인 권장) |
| EmoBox: Multilingual Multi-corpus SER Toolkit and Benchmark (Ma et al.) | 2024, Interspeech | https://arxiv.org/abs/2406.07162 | 32개 데이터셋, 14개 언어, 10개 사전학습 모델. IEMOCAP: WavLM-large UA/WA 69.47/69.07, Whisper-large-v3 73.54/72.86 (HTML 표 추출, 표가 깨져 있어 재확인 필요). 교차코퍼스 12개 학습-평가 쌍 중 Whisper-large-v3가 9개에서 1위. 데이터 수 50명 미만 코퍼스는 화자 종속 분할(감정별 25% 홀드아웃). | 14개 언어, 한국어 코퍼스 없음 | 같은 팀이 emotion2vec으로 라벨을 정제해 교차코퍼스 평가 세트를 만들었다. 즉 emotion2vec 계열이 라벨 필터에 쓰일 만큼 영어권에서는 강하지만, 한국어는 이 벤치마크 밖이다. | A (초록) + 본문 표 일부 |
| What Does it Take to Generalize SER Model Across Datasets? (Ibrahim et al.) | 2024, Interspeech | https://arxiv.org/abs/2406.09933 | 11개 데이터셋 통합, 화자 독립(leave-one-speaker-out) 평가, Whisper 사용. 4감정 평균 WA 약 76%, N감정 평균 약 63% (fetch 요약, 열 매핑 불확실). 본문에는 교차코퍼스 하락 수치 자체가 없다고 확인됨. 인간 연구 인용: 친숙한 화자 87.3% → 낯선 화자 64.7%. | 11개 데이터셋, 거의 영어, 한국어 없음 | 데이터 통합이 일반화를 개선한다는 정성 결론. 한벗은 한국어 학습 데이터를 섞어 미세조정하는 근거로 사용 가능. 수치는 보조 용도로만. | A (초록·일부 본문) |
| Using Large Speech Models for Feature Extraction in Cross-Lingual SER (D'Asaro et al.) | 2024, CLiC-it | https://aclanthology.org/2024.clicit-1.31/ | 초록만 확인: Whisper는 마지막 층 선형 분류에서 최고, wav2vec2는 중간·초기 층이 유리. 영어 전용 wav2vec2가 다국어 XLS-R을 대부분 언어에서 능가. 수치 없음. | 이탈리아어·프랑스어·스페인어·독일어·그리스어·아랍어·페르시아어 등 8개, 한국어 없음 | 다국어 사전학습이 곧 감정 일반화는 아니다. 후보 백본 비교 시 층 선택까지 포함해야 한다. | A (초록만) |
| Rethinking Cross-Corpus SER Benchmarking (Phukan et al.) | 2025, APSIPA-ASC | https://arxiv.org/abs/2509.16182 | 초록만 확인: 준언어(paralinguistic) 모델 TRILLsson이 다른 사전학습 모델보다 교차코퍼스에서 일관되게 우세. 수치 없음. | 영어 중심 | 백본 후보에 TRILLsson 추가 검토 가능. 현재 3후보(emotion2vec+, SenseVoice-S, Whisper-encoder)는 이 논문 기준으로는 비교 대상 일부. | A (초록만) |
| 한국어 직접 근거: Sogang 2024 석사논문, AHFE KEMDy19 (Wiki: `src-sogang-2024-aihub-hubert`, `src-ahfe-2024-kemdy19-ccc`, `src-cms-2023-kemdy19-wav2vec-hubert-vad`) | 2024 / 2023 | Wiki 참조 | AI Hub 4-class HuBERT 0.8139, LLaMa2 텍스트 0.8125, late fusion 0.8480 (검색 결과로 재확인). KEMDy19 차원 CCC 0.5473(Wav2Vec2), 0.5271(HuBERT). | 한국어 | 한국어 4-class 공개 수치는 0.81 수준이나 화자 독립 여부는 미확인. 0.70 합격선은 이 수치보다 낮아 보수적이다. | A (Wiki 기준) |

- 확인된 사실: emotion2vec 원 논문(Wiki `src-ma-2024-emotion2vec`), SER Evals, EmoBox, D'Asaro 모두 한국어를 평가하지 않았다. emotion2vec+ 또는 SenseVoice를 한국어로 평가한 논문은 이번 검색에서 찾지 못했다. 이것은 "없다"의 증명이 아니라 "찾지 못함"이다.
- 한국어 수치는 한국어 학습·평가 논문(Sogang 0.8139)에서만 나온다. 이 수치는 emotion2vec+의 한국어 제로샷 성능이 아니다. 서로 섞어 인용하면 안 된다.
- 한벗 합격선 UA 0.70(한국어, 화자 독립)은 영어 IEMOCAP 화자 독립 상한 73%(Wiki `src-sereval-2024-whisper-crosslingual`의 2111.02735 수치)와 같은 대역이라 낙관적일 수 있다. 4-class에 neutral이 포함된 자연 대화에서는 달성 여부를 직접 측정해야 한다.
- 팀이 직접 한국어 제로샷 UA를 측정하는 것이 가장 강한 답변이다. 문헌만으로는 한국어 정확도 범위를 보장할 수 없다.

---

## 2. 연기 vs 자연 발화, 화자 독립, 짧은 발화, 코덱·잡음

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어·데이터 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Performance Gaps in Acted and Naturalistic Speech (Kawaoto et al.) | 2025, RANLP | https://aclanthology.org/2025.ranlp-1.61/ | 초록만 확인: 연기 데이터로 학습한 모델이 고객센터 통화(자연 발화)에서 "뚜렷한" 성능 저하, 분노 중심. 수치 없음. | 영어, 연기+팟캐스트 vs 콜센터 | 자연 발화 열화를 직접 다룬 최신 논문. 한벗 사용자 발화는 자연 대화이므로 연기 코퍼스 수치를 그대로 적용할 수 없다. | A (초록만) |
| Switchboard-Affect (Romana et al., Apple) | 2025, arXiv 2510.13906 | https://arxiv.org/html/2510.13906v1 | 10,000 세그먼트(약 25시간), 평가자 6명. 주 감정 Krippendorff α = 0.25, 활성도·정서가·지배도 α = 0.53/0.40/0.48. 합의 감정 존재 비율 67%. 분노 F1: GPT-4o 0.257, Odyssey 0.163, Whisper-GRU 0.147, **Emotion2Vec 0.000** (재현율도 0.000). 슬픔·기쁨은 MSP-Podcast 대비 더 잘 맞았고 분노는 덜 맞음. | 영어 전화 대화 | 인간 평가자끼리도 α 0.25 수준이라 "정답 라벨" 자체가 불안정하다. emotion2vec이 자연 전화 대화에서 분노를 한 건도 못 맞춘 사례. 한벗이 분노를 4라벨에 포함하는 것의 위험을 보여줌. 사용된 emotion2vec 버전(원본/plus)은 미확인. | A |
| MSP-Podcast Challenge, Interspeech 2025 (Wiki: `src-isca-2025-msp-podcast-challenge`) | 2025 | https://www.isca-archive.org/interspeech_2025/naini25_interspeech.pdf | 324시간+ 자연 발화, 8-class. 수치는 Wiki 참조. | 영어 팟캐스트 | 자연 발화 벤치마크의 기준. 한벗 파일럿 분할 설계의 참고. | A (Wiki) |
| Attentive CNN SER: Impact of Input Features, Signal Length, and Acted Speech (Neumann & Vu) | 2017, Interspeech | https://arxiv.org/abs/1706.00612 | 초록만 확인: 성능은 입력 특징보다 데이터 종류(즉흥 vs 대본)에 크게 좌우. 길이별 수치는 초록에 없음. 검색 요약에 따르면 입력이 짧을수록 정확도가 떨어지고 즉흥 발화에서 하락이 작다(B, 본문 미확인). | 영어 IEMOCAP | 짧은 발화 열화의 고전적 근거. 2초 미만 발화는 확인 질문을 건너뛰는 규칙의 정당화로 사용 가능. | A (초록만) |
| EMO-Codec (Ren et al.) | 2024, APSIPA ASC | https://arxiv.org/abs/2407.15458 | 초록만 확인: 코덱으로 재합성한 음성에서 SER 성능이 저하되며 특히 슬픔·우울·공포·혐오에서 심함. 영어·중국어로 학습한 코덱은 중국어에서 감정 보존이 제한적. 수치 없음. | IEMOCAP 등, 영어·중국어 | 한벗의 가장 중요한 라벨인 "슬픔"이 코덱에 가장 취약하다는 점이 핵심. WebRTC Opus 자체를 평가한 것은 아님(레거시·신경 코덱 평가). | A (초록만) |
| Charting 15 years of progress in deep learning for SER (Triantafyllopoulos, Batliner, Schuller) | 2025, arXiv 2508.02448 | https://arxiv.org/abs/2508.02448 | 초록만 확인: 트랜스포머 이후 성능이 정체. 모델 선택에 따라 "진보"가 달라 보임. 검색 요약상 Opus 포함 코덱 실험이 있다고 하나 초록에는 없음(B). | 영어 중심 | 더 큰 모델로 해결된다는 기대를 낮추는 근거. Opus 결과는 본문 확인이 필요. | A (초록) / B (Opus) |

- 화자 독립 평가: Ibrahim et al.은 leave-one-speaker-out을 사용했고, EmoBox는 화자 44명 미만이면 화자 종속 분할을 사용한다(A). 한벗 합격선이 "화자 독립 한국어 분할"이라고 명시한 것은 표준과 일치한다. 화자 독립/종속 격차의 정량 수치는 이번에 확보하지 못했다(EMO-DB 7% 하락 언급은 검색 요약 B 수준이라 사용하지 않음).
- 짧은 발화(2초 미만) 한국어 수치는 Wiki의 KEMDy19 0.5초 −10.61%, 3.0초 −5.08% 주장이 있으나 등급 C(미확인)이다. 인용하지 말 것.
- WebRTC Opus + 잡음 + SER을 함께 평가한 논문은 찾지 못했다. 한벗이 파일럿에서 직접 Opus 인코딩 전후 UA를 비교해야 한다.
- 자연 발화에서 분노가 약하고(Switchboard-Affect) 슬픔은 코덱에 약하다(EMO-Codec)는 두 결과는 4라벨 중 angry와 sad 모두에 취약점이 있음을 의미한다.

---

## 3. 음성에서 감정을 추론하는 것의 과학적 타당성, 편향, 보정

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어·데이터 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Emotional Expressions Reconsidered (Barrett, Adolphs, Marsella, Martinez, Pollak) | 2019, Psychological Science in the Public Interest 20(1):1-68 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6640856/ | 얼굴 표정 중심 리뷰(음성 분석은 열람한 부분에 거의 없음). 89개 효과크기·47개 연구·3,599명에서 표정-감정 상관 평균 r = .32. 감정 사건 중 해당 표정이 나타난 비율 평균 .19. 자동 FACS 코딩은 실험실 90% 초과, 비통제 환경 83% 미만(F1 < .65). 소비자(기업 등)는 표정을 내적 상태의 신뢰할 수 있는 지표로 취급하지 말라고 권고. | 얼굴 중심, 다문화 | 음성 SER에 직접 적용된 수치가 아님에 주의. "감정이 신뢰할 수 있게, 특이적으로, 일반화 가능하게 읽힌다"는 가정 자체가 약하다는 논거. 한벗이 결과를 사실로 말하지 않고 확인 질문으로만 쓰는 설계를 지지. | A |
| Time to regulate AI that interprets human emotions (Crawford) | 2021, Nature 592:167 | https://media.nature.com/original/magazine-assets/d41586-021-00868-5/d41586-021-00868-5.pdf | 검색 요약만 확인: 대유행기에 근거 없는 감정 AI가 직장·학교로 확산되는 점 비판, Barrett 2019를 인용해 "신뢰할 만한 증거 없음" 주장, 규제 촉구. | 논평 | 윤리·정책 논거. 한벗은 학교·직장 감시 용도가 아니라는 구분이 필요. | B |
| The Ethics of Emotion in Artificial Intelligence Systems (Stark & Hoey) | 2021, ACM FAccT, pp.782-793, DOI 10.1145/3442188.3445939 | https://cs.uwaterloo.ca/~jhoey/papers/StarkHoey2021.pdf | 검색 요약만 확인: 컴퓨터과학이 쓰는 감정의 정의는 정답이 아니며 어떤 정의를 택하느냐가 윤리·사회적 결과를 바꾼다는 주장. 감정 개념 모델 분류체계 제시. | 개념·윤리 | 4라벨(angry/sad/happy/neutral) 선택은 고전적 범주 모델(basic emotions)을 가정한다는 점을 한계 항목에 명시해야 한다. | B |
| Confidence Calibration for Multi-Label SER (Chou, Goncalves, Leem, Lee, Busso) | 2023, Interspeech | https://www.isca-archive.org/interspeech_2023/chou23_interspeech.html | 초록만 확인: 감정 불확실성 때문에 SER 신뢰도가 낮고, 저신뢰 예측을 거부하는 전략은 모델이 잘 보정되어 있을 때만 유효. ECE로 평가, 다중 라벨 온도 스케일링 제안. 수치는 초록에 없음. | 영어 MSP-Podcast 계열(초록에 데이터명 없음) | "score ≥ 0.6"이 실제 정확도 60%를 뜻한다는 보장이 없다는 직접 근거. 한국어 파일럿에서 신뢰도 구간별 실제 정확도(신뢰도 곡선, ECE)를 측정하고, 필요하면 온도 스케일링을 적용하라. 0.6 임계값은 보정 후 재설정이 맞다. | A (초록만) |
| Gender De-Biasing in SER (Gorrostieta et al.) | 2019, Interspeech | https://www.isca-archive.org/interspeech_2019/gorrostieta19_interspeech.html | 초록만 확인: 활성도(activation) 모델의 정확도가 여성 음성에서 일관되게 낮음. 편향 원인으로 데이터 대표성, 사람 라벨링, 모델·최적화 선택을 제시. 간단한 디바이싱 학습으로 완화. 수치 없음. | 영어 | 성별에 따른 정확도 격차 가능성. 한국어 파일럿에서 남/여 UA를 분리 보고해야 한다. | A (초록만) |
| Is It Still Fair? Gender Fairness in Cross-Corpus SER (Upadhyay, Chien, Lee) | 2025, arXiv 2501.00995 | https://arxiv.org/abs/2501.00995 | 초록만 확인: 전체 성능과 공정성은 별개이며, 한 코퍼스에서 공정해도 다른 코퍼스에서 공정하다는 보장이 없음. 수치 없음. | 영어 | 한국어로 옮길 때 성별 격차를 다시 측정해야 한다. | A (초록만) |
| "How to Explore Biases in Speech Emotion AI with Users?" (Borre et al.) | 2025, arXiv 2507.12580 (cs.HC) | https://arxiv.org/abs/2507.12580 | 십대 12명, 55세 이상 12명, 덴마크어·영어, 의도적 감정 연기. 연령·언어 집단 간 유의차 없음(통계 수치는 초록에 없음). 고각성 감정 인식에 한계. "affective misalignment"(의도와 기계 해석 불일치) 위험 제기. 소규모 표본. | 덴마크어·영어, 연기 | 연령·언어에 대한 편향이 없다는 결론은 N=24 연기 발화라서 약하다. 대학생(20대)에 한정된 서비스라면 연령 편향 리스크는 작지만 억양·방언은 별도 확인. | A (초록만) |

- Barrett 2019는 얼굴 중심 문헌이다. 음성에 그대로 옮겨 "음성도 r = .32"라고 쓰면 오인용이다. 음성에 관한 같은 취지의 근거는 이번에 직접 확보하지 못했다(빈 곳 참조).
- 보정 문제: 모델 신뢰도가 정확도와 같다고 가정하면 안 된다(Chou 2023). 한벗은 임계값 0.6을 고정 가정이 아니라 파일럿에서 검증해야 하는 하이퍼파라미터로 문서화해야 한다.
- 성별 편향에 대한 근거는 영어 기반이며 한국어에서는 미검증이다. 연령·억양 편향은 직접 수치를 얻지 못했다.
- Switchboard-Affect의 α = 0.25는 "정답"이 사람 사이에서도 일치하지 않음을 보여주므로, 모델 정확도 상한이 라벨 합의도에 의해 제한된다는 논거로 활용 가능.

---

## 4. 오추정이 사용자에게 미치는 영향, 확인 질문 프레이밍

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어·데이터 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| 柔らかい物体の動きによる共感表現方法の効果 (Shibata et al.) | 2021, 情報処理学会論文誌 62(1):26-34 | https://ipsj.ixsq.nii.ac.jp/records/208970 | 초록만 확인: "불완전한 감정 추정에 기반한 명시적 공감 표현은 혐오감(aversion)을 유발한다"고 서술. 모호한 표현이 그 완화책이라는 제안. 실험 수치는 초록에 없음. | 일본어, 소규모 실험 | 오추정 + 단정적 공감 = 혐오감이라는 기전 가설. 한벗이 사실처럼 말하지 않고 질문형으로 모호하게 쓰는 설계와 방향이 일치. 다만 이 논문이 확인 질문 자체를 검증한 것은 아니다. | A (초록만) |
| Computers that Recognise and Respond to User Emotion (Picard & Klein) | Interacting with Computers (연도는 페이지에 없음), MIT TR-538 | https://vismod.media.mit.edu/pub/tech-reports/TR-538-ABSTRACT.html | 초록만 확인: 감정 단서를 인식해 좌절에 지지적으로 반응하는 프로토타입 기술, 우려사항과 한계 논의. 수치 없음. | 영어 | 감정 반응형 UI의 고전적 근거. 오추정 위험 논의의 출발점. | A (초록만) |
| Empathic accuracy vs expressivity (Bickmore 등, CHI 2007 Work-in-Progress) | 2007, CHI EA (검색 요약 기준) | https://www.ccs.neu.edu/~bickmore/publications/CHI07.pdf | PDF를 읽지 못해 본문 미확인. 검색 요약에 "공감 정확도가 사용자 표현 자유도보다 거의 모든 척도에서 더 중요"라는 문장이 있음. 제목·표본·수치 미확인. | 영어 | 정확하지 않은 공감이 손해라는 방향의 근거이나 본문을 확인하기 전에는 인용 금지. | C |
| Enhancing EmoBot: User Satisfaction and Faults in an Emotion-Aware Chatbot (Mubassira et al.) | 2024, arXiv 2411.02831 (3쪽 확장 초록, 미심사) | https://arxiv.org/abs/2411.02831 | 초록만 확인: 사용성·정확도·만족도 설문과 결함 분석. 수치 없음. 검색 요약에 혼합 감정 문장 오분류 사례(B). | 영어, 텍스트 챗봇 | 근거 강도 낮음. 참고용. | A (초록만, 근거 약함) |

- 가장 중요한 결론은 빈 곳이다: "감정을 단정하지 않고 확인 질문으로 묻는 것이 오추정 피해를 줄인다"는 것을 직접 검증한 연구는 이번에 찾지 못했다. 검색 결과 어디에도 확인 질문과 단정형 공감 또는 무반응을 비교한 실험은 없었다.
- 간접 근거: Shibata 2021은 불완전한 추정에 기반한 명시적 공감이 혐오감을 유발한다고 보고하고, 이에 대한 대안으로 모호한 표현을 제시한다. 한벗의 질문형 프레이밍은 이 방향과 맞지만 한벗 자체의 효과는 사용자 연구로 검증해야 한다.
- 정신건강 맥락의 거짓 음성(슬픔을 정상으로 오인)과 거짓 양성 비교 문헌은 이번에 찾지 못했다. 설계상 한벗은 SER을 위기 탐지에 쓰지 않으므로, 슬픔 미검출은 "아무 질문도 하지 않는 것"이라 위험이 낮다는 논리를 스스로 세워야 한다. 위기 신호는 텍스트·키워드 안전 경로(Wiki `src-arxiv-2026-ai-suicide-primer`, `src-psycrisisbench-2025`)가 담당한다고 문서화하는 것을 권한다.
- 오추정 비용을 줄이는 설계: (1) 5턴당 최대 1회 제한, (2) 사용자가 "아니야"라고 답하면 해당 세션에서 질문 빈도 하향, (3) 결과를 저장하거나 요약에 사실처럼 반영하지 않기. 이 세 가지는 문헌이 아니라 팀 설계 제안이다.

---

## 5. 검증 방법론, 평가자 합의도, 보고, 규제

| 논문·문서 | 연도·학회 | URL | 핵심 수치 | 언어·데이터 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Model Cards for Model Reporting (Mitchell et al.) | 2019, FAT* | https://arxiv.org/abs/1810.03993 | 초록만 확인: 인구통계·문화·교차 집단별로 성능을 보고하고, 의도된 사용 맥락과 평가 방법을 명시하는 문서. | 일반 ML | 한벗 SER 모델 카드 항목: 의도 사용(확인 질문 트리거만), 비의도 사용(진단·위기 판정), 집단별 UA(성별), 한계. | A (초록만) |
| Switchboard-Affect (위 2절 참조) | 2025 | https://arxiv.org/html/2510.13906v1 | 평가자 6명, 주 감정 α = 0.25, 합의 감정 존재 67% | 영어 | 라벨 합의도 기준선(영어). 한국어 KEMDy/AI Hub의 Fleiss κ는 이번에 확보하지 못함. | A |
| EU AI Act Article 5(1)(f) | 2024 제정, 2025-02-02 적용 | https://artificialintelligenceact.eu/article/5/ | 조문: "직장과 교육기관 영역에서 자연인의 감정을 추론하는" AI 시스템의 시장 출시·사용 금지. 단 의료·안전 목적은 예외. | EU | 한벗은 대학생 대상이지만 대학이 도입한 교육 도구가 아니라 개인 소비자 앱이다. 아래 FPF 요약상 금지는 직장·교육 맥락에 한정되고 그 밖의 감정 인식은 Annex III 고위험으로 분류된다. 한국 서비스에 EU법이 직접 적용되지 않지만 규제 신호로 인용 가능. | A (조문) |
| FPF, Red Lines under EU AI Act (2026-03-24 게시) | 2026 | https://fpf.org/blog/red-lines-under-eu-ai-act-unpacking-the-prohibition-of-emotion-recognition-in-the-workplace-and-education-institutions/ | 요약 확인: 교육 범위는 "모든 유형과 수준"(대학 명시 언급은 페이지에 없음, 포함은 추정), 감정 인식은 생체 데이터 기반 추론이 대상, 텍스트 기반 추론은 금지 밖, 의료·안전 예외는 좁게 해석(웰빙 모니터링 제외), 그 외 맥락은 Annex III 고위험. Commission 가이드라인 원문은 직접 열지 못해 2차 요약. | EU | 한벗이 대학에서 학생 모니터링 용도로 쓰이면 금지 영역에 걸릴 수 있다. 개인 선택 소비자 앱 + 학교와 데이터 비공유를 설계 원칙으로 명시할 것. 법률 해석은 전문가 확인 필요. | B (2차) |
| 한국 개인정보보호위원회 음성·생체정보 지침 | - | 직접 확인 못함 | 검색에서 PIPC의 음성 감정 인식 전용 지침은 찾지 못함. 개인정보 보호법 시행령상 생체인식정보 중 "신체적 특징에 관한 정보"가 민감정보에 포함되고 별도 동의가 필요하다는 보도 요약만 확인(B). 음성에서 추론한 감정 상태가 민감정보인지는 미확인. | 한국 | 보수적으로 음성 원본·감정 추정값을 민감정보 수준으로 취급(별도 동의, 최소 보관)하는 설계를 권장. 법적 결론은 PIPC·법무 확인이 필요. | C |

- 표준 평가 프로토콜(A): EmoBox와 Ibrahim 2024가 모두 leave-one-speaker-out 또는 화자 분리 분할과 UA/WA 계열 지표를 사용한다. 클래스 불균형은 Ibrahim이 오버샘플링으로, EmoBox는 교차코퍼스 테스트 세트를 화자·감정 균형으로 구성해 다룬다.
- 최소 표본 크기(문헌 아님, 팀 계산): 정확도 0.70 가정의 이항 95% 신뢰구간 반폭은 n=100에서 ±9.0%p, n=200에서 ±6.4%p, n=400에서 ±4.5%p이다. 합격선 0.70을 검증하려면 최소 발화 200건 이상(화자 20명 이상, 클래스당 50건 이상 권장)이 필요하며, 같은 화자 발화는 독립이 아니므로 실제 구간은 더 넓다. UA는 클래스별 재현율 평균이므로 클래스당 최소 표본이 더 중요하다.
- 한국어 KEMDy/AI Hub의 평가자 간 Fleiss κ는 이번 검색에서 공개 수치를 찾지 못했다. KEMDy20은 외부 평가자 10명이 라벨을 붙였다는 사실만 확인(ETRI 페이지 검색 요약, B).
- Triantafyllopoulos 2025(A, 초록)는 모델 개선이 정체했음을 말한다. 따라서 더 큰 모델로 한계가 해결된다고 가정하지 말고 설계로 위험을 흡수해야 한다.

---

## 교수님 ① 답변 초안 재료

(a) 한국어 정확도 범위
1. [Sogang 2024 석사논문, Wiki `src-sogang-2024-aihub-hubert`] 한국어 AI Hub 4-class에서 HuBERT 단일 음성 모델이 0.8139, 텍스트와 late fusion 시 0.8480을 보고했다. 화자 독립 여부는 미확인이므로 상한 참고치로만 쓴다.
2. [SER Evals 2024, `src-sereval-2024-whisper-crosslingual`] 13개 언어·19개 코퍼스에서 학습에 쓰지 않은 코퍼스로 평가하면 모든 모델의 macro-F1이 도메인 내 0.67~0.78에서 0.13~0.20으로 떨어졌다(표 기반 계산, 한국어 미포함). 한국어 제로샷 성능을 가정하지 않고 직접 측정하겠다는 계획의 근거다.

(b) 알려진 한계
3. [Kawaoto et al., RANLP 2025] 연기 데이터로 학습한 모델은 자연 발화(콜센터)에서 성능이 뚜렷이 떨어진다. 한벗 사용자는 자연 대화 화자이므로 IEMOCAP류 수치를 인용하지 않고 한국어 자연 대화 분할로 합격선을 판정한다.
4. [Switchboard-Affect, Romana et al. 2025] 영어 전화 대화에서 사람 평가자 간 주 감정 일치도 Krippendorff α = 0.25, Emotion2Vec의 분노 F1은 0.000이었다. 그래서 4라벨 모두를 신뢰하지 않고, 확인 질문의 트리거로만 쓴다.
5. [EMO-Codec, Ren et al. 2024] 코덱을 거친 음성에서 SER이 떨어지고 특히 슬픔·우울에서 심하다. 한벗 파일럿에서 Opus 인코딩 전후 UA를 반드시 비교한다(Opus 직접 수치는 문헌에 없음).
6. [Barrett et al. 2019, PSPI] 얼굴 표정 문헌 기준으로 표정-감정 상관이 평균 r = .32에 그쳐 단일 신호로 내적 감정을 진단할 수 없다. 음성에 직접 적용된 수치는 아니므로 "원리적 한계의 근거"로만 제시하고, 한벗이 결과를 사실로 진술하지 않는 이유로 사용한다.

(c) 오추정 위험
7. [Shibata et al., IPSJ 2021] 불완전한 감정 추정에 근거한 명시적 공감은 혐오감을 유발할 수 있다고 보고했다. 오추정이 사용자 불쾌감으로 이어질 수 있다는 위험을 인정하는 근거다.
8. [Chou et al., Interspeech 2023] 신뢰도 점수는 보정되어 있어야 의미가 있다. 따라서 0.6 점수가 정답 확률 0.6이라는 가정을 하지 않고, 한국어 파일럿에서 신뢰도 구간별 정확도와 ECE를 측정해 임계값을 재설정한다.

(d) 우리의 완화책과 근거
9. [Gorrostieta 2019 / Upadhyay 2025 / Mitchell 2019] 성별 격차 가능성이 있으므로 남/여 UA를 분리 보고하고 모델 카드에 의도 사용·비의도 사용·집단별 성능·한계를 명시한다.
10. [EU AI Act Art. 5(1)(f), FPF 2026 요약] 직장·교육기관에서의 감정 추론은 금지되므로, 한벗은 학교·기관에 결과를 공유하지 않는 개인 소비자 앱으로 설계하고, 감정 추정값은 저장·요약에 사실로 반영하지 않으며 사용자 부정 응답 시 질문 빈도를 낮춘다. 확인 질문의 효과 자체에 대한 직접 문헌은 없으므로 한벗 사용자 연구로 검증한다고 명시한다.

---

## 빈 곳

- emotion2vec+ 또는 SenseVoice를 한국어로 평가한 논문: 찾지 못함. 원 emotion2vec 논문, SER Evals, EmoBox, CLiC-it 2024 모두 한국어 미포함.
- KEMDy19/20, AI Hub 감정 대화 음성의 평가자 간 Fleiss κ: 공개 수치 미확인. ETRI 페이지 접속 불안정, 검색에서 수치 안 나옴.
- 한국어 화자 독립 vs 화자 종속 격차, 한국어 2초 미만 발화 열화: 확인된 수치 없음(Wiki의 KEMDy19 0.5초/3.0초 수치는 등급 C).
- WebRTC Opus + 잡음 + SER을 결합 평가한 논문: 없음. EMO-Codec은 코덱 일반 평가이며 수치는 초록에 없어 본문 확인이 필요.
- 확인 질문(asking) 프레이밍이 단정(asserting)보다 오추정 피해를 줄이는지 직접 비교한 연구: 찾지 못함. 간접 근거는 Shibata 2021뿐이고 Bickmore CHI 2007은 본문 미확인(C).
- 슬픔 미검출(거짓 음성)과 거짓 양성의 정신건강 맥락 비교, 감정 AI 오추정이 신뢰·라포에 미치는 영향의 정량 연구: 찾지 못함.
- 음성(not 얼굴)에 대한 Barrett류 타당성 비판 수치, 연령·억양 편향의 SER 정량 결과: 직접 확보 못함. Borre 2025는 N=24 소규모.
- 한국 PIPC의 음성 감정 인식 전용 지침, 음성 유래 감정 추정값의 민감정보 해당 여부: 확인 못함. 법무·PIPC 직접 확인 필요.
- Commission의 AI Act 금지 관행 가이드라인 원문: 직접 열지 못하고 FPF 등 2차 요약만 확인. 한벗(소비자 앱)이 금지 범위 밖이라는 결론은 법률 검토 전까지 "추정"으로 표기.
- SER Evals 표 3과 EmoBox 표 4/5의 수치는 도구가 표를 요약·추출한 값이다. 사업계획서 인용 전에 원문 PDF 표를 사람이 대조할 것.
