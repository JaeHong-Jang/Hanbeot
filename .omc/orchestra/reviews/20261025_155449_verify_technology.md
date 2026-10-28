검증 기준일은 **2026-10-25**입니다. Takeaway·Inferences·부록에서 반복된 수치는 합쳤습니다. 한 행에 여러 수치가 있으면 같은 출처·같은 실험에 속하는 묶음입니다.

**A는 원문과의 일치를 뜻하며, 독립 재현이나 서비스 적용 성능을 보증하지 않습니다.** 벤더 자체 보고는 메모에 표시했습니다. 불일치 항목은 원래 주장을 지지하는 근거 등급을 부여할 수 없어 C로 표시하고, 확인된 정정 내용을 적었습니다. 접속 실패는 거짓이라는 뜻이 아닙니다.

**1. 음성 감정 인식·데이터셋·음향 특징**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| emotion2vec: IEMOCAP WA 71.79%, WavLM Large 70.03%, HuBERT Large 67.62%, data2vec 2.0 base 68.58%, Vesper-12 70.70% | [논문](https://arxiv.org/html/2312.15185) | 성능 비교 표 대조 | 일치 | A | 원본 emotion2vec 결과다. emotion2vec+의 정확도로 옮기면 안 된다. |
| emotion2vec 93.79M 파라미터, downstream linear head 0.20M | [논문](https://arxiv.org/html/2312.15185) | 모델 크기 열 대조 | 일치 | A | 백본과 학습 헤드 구분 필요. |
| 사전학습 감정 데이터 262시간: IEMOCAP·MELD·MEAD·CMU-MOSEI·MSP-Podcast | [논문](https://arxiv.org/html/2312.15185) | 데이터셋 절 대조 | 일치 | A | 감정 데이터 262시간 외에 초기화 모델의 사전학습 이력이 있다. |
| 비영어 9개 데이터셋 WA: 72.33·74.52·64.75·84.34·61.21·49.15·90.91·79.97·81.50 | [논문](https://arxiv.org/html/2312.15185) | Table 4의 언어별 결과 대조 | 일치 | A | 제시된 순서의 값과 일치. HTML 표 머리글 일부에 오기가 있어 지표 열을 주의해야 한다. |
| 위 9개 언어에서 data2vec 2.0보다 우수하며 한국어 평가는 없음 | [논문](https://arxiv.org/html/2312.15185) | Table 4와 평가 데이터 목록 확인 | 일치 | A | 이 논문에 한국어가 없다는 뜻이다. 한국어 공개 연구가 전혀 없다는 증명은 아니다. |
| emotion2vec GitHub 라이선스 MIT | [GitHub](https://github.com/ddlBoJack/emotion2vec) | README 원문 확인 | 일치 | A | README에 MIT 배지가 있다. **모델 가중치까지 MIT라고 일반화하면 안 된다.** 공식 HF 카드는 `model-license`로 표시한다. [공식 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) |
| emotion2vec+ seed 201h, base 4,788h, large 42,526h | [GitHub](https://github.com/ddlBoJack/emotion2vec) | 공식 모델 목록 대조 | 일치 | A | 벤더 공개 학습 규모. |
| emotion2vec+ base 약 90M, large 약 300M | [GitHub](https://github.com/ddlBoJack/emotion2vec) | 공식 HF 모델 카드 보완 확인 | 일치 | A | [base 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base), [large 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_large). |
| large는 160k시간 중 약 40k시간 사용 | [GitHub](https://github.com/ddlBoJack/emotion2vec) | README Data Engineering 대조 | 일치 | A | 42,526h와 약 40k는 상세값·반올림 표현이다. |
| 9개 라벨: angry·disgusted·fearful·happy·neutral·other·sad·surprised·unknown | [GitHub](https://github.com/ddlBoJack/emotion2vec) | 공식 라벨 목록 대조 | 일치 | A | `other`와 `unknown` 포함. |
| FunASR 설치 및 `AutoModel`, `hub="hf"`, utterance 단위 임베딩 추출 가능 | [GitHub](https://github.com/ddlBoJack/emotion2vec) | README 설치·추론 예제 확인 | 일치 | A | 문서상 지원 확인이며 실제 설치·실행 검증은 아니다. |
| RESD UA: emotion2vec+ base 79.8, large 69.1, 원본 65.04 | [HyperAI](https://next.hyper.ai/en/sota/tasks/speech-emotion-recognition/benchmark/speech-emotion-recognition-on-resd) | 집계 페이지 접속 및 원 논문 대조 시도 | 확인불가 | C | 집계 페이지 접근 실패. 원본 65.04만 emotion2vec 논문에서 확인된다. |
| Emotion2Vec-S를 Emo-Emilia로 fine-tune하여 모든 감정에서 향상 | [후속 논문](https://arxiv.org/pdf/2502.18186) | 데이터 구성·학습·평가 절 확인 | 불일치 | C | **Emo-Emilia는 평가용 테스트 세트**로 기술된다. “Emo-Emilia로 fine-tune”은 수정 필요. |
| SenseVoice-S 234M, L 1,587M | [논문](https://arxiv.org/html/2407.04051) | PDF Table 6 대조 | 일치 | A | Alibaba 자체 보고. |
| 10초 오디오 지연: SenseVoice-S 70ms, L 1,623ms, Whisper-S 518ms, L-v3 1,281ms | [논문](https://arxiv.org/html/2407.04051) | PDF Table 6 대조 | 일치 | A | 특정 측정 조건의 처리 지연이다. 모바일 지연이나 전체 대화 지연은 아니다. |
| SenseVoice-S 언어 zh·yue·en·ja·ko | [논문](https://arxiv.org/html/2407.04051) | 언어 목록·Table 6 확인 | 일치 | A | 한국어 ASR 지원이 한국어 SER 정확도를 보증하지 않는다. |
| SenseVoice SER WA L/S: IEMOCAP 75.3/65.7, MELD 63.1/57.8, MSP 61.7/64.1 | [논문](https://arxiv.org/html/2407.04051) | Table 8의 WA 열 대조 | 일치 | A | 표 열을 구분하면 정확히 확인된다. 근사치로 낮출 필요 없음. |
| SenseVoice SER WA L/S: CREMA-D 90.4/74.0, CASIA 96.0/70.0, ESD 93.2/85.5, MER2023 69.2/68.3 | [논문](https://arxiv.org/html/2407.04051) | Table 8 대조 | 일치 | A | 저자들이 대상 도메인 fine-tuning 없이 평가했다고 설명한다. |
| SenseVoice 가중치 라이선스 미확인 | [논문](https://arxiv.org/html/2407.04051) | 공식 모델 카드 추가 확인 | 확인불가 | C | [공식 카드](https://huggingface.co/FunAudioLLM/SenseVoiceSmall)는 `model-license` 표시. 코드 라이선스와 분리해 약관 전문 확인 필요. |
| SER Evals에서 Whisper가 cross-lingual SER의 전용 SSL 모델을 능가 | [논문](https://arxiv.org/html/2408.07851v1) | 원 논문 초록 확인 | 일치 | A | 해당 벤치마크·설정의 결론이다. |
| wav2vec 2.0/HuBERT IEMOCAP 최고 WA: speaker-dependent 79.58%, independent 73.01% | [논문](https://arxiv.org/pdf/2111.02735) | 원 논문 초록 대조 | 일치 | A | 모델군에서 얻은 최고 점수이며 모든 모델의 공통 성능이 아니다. |
| AHELM 감정 탐지 MWR: Gemini 2.5 Pro 0.781, GPT-4o Audio·Qwen2.5-Omni 0.656 | [논문](https://arxiv.org/pdf/2508.21376) | Table A11 대조 | 일치 | A | 공동 2위에는 Gemini 1.5 Pro와 GPT-4o Transcribe+GPT-4o도 포함된다. |
| AHELM MELD Audio: GPT-4o Audio 0.497, Qwen2.5-Omni 0.491 | [논문](https://arxiv.org/pdf/2508.21376) | Table A11 대조 | 일치 | A | 표 지표는 **PEM**이다. 다른 논문의 WA와 바로 비교하면 안 된다. |
| Qwen2.5-Omni MELD SER 0.570, Qwen2-Audio 0.553 | [미러](https://ai.gitcode.com/openharmony-models/Qwen2.5-Omni-7B) | 공식 모델 카드까지 추가 대조 | 일치 | A | [공식 카드](https://huggingface.co/Qwen/Qwen2.5-Omni-7B)에서도 확인. 벤더 자체 보고. |
| OmniVox는 GPT-4o Audio 등을 대상으로 zero-shot 감정 인식 평가, Qwen2.5-Omni 미포함 | [논문](https://arxiv.org/pdf/2503.21480) | 모델·실험 목록 확인 | 일치 | A | 논문은 일부 omni 모델이 fine-tuned audio 모델과 경쟁 가능하거나 우수하다고도 보고한다. |
| AEQ-Bench는 omni-modal 모델의 공감 평가 벤치마크 | [논문](https://arxiv.org/pdf/2601.10513) | 제목·초록 확인 | 일치 | A | 감정 인식 정확도 벤치마크와 구분 필요. |
| Qwen3-Omni: 음성 이해 19개, 생성 10개 언어, 한국어 포함 | [논문](https://arxiv.org/abs/2509.17765) | 기술보고서 언어 목록 확인 | 일치 | A | 입력·출력 언어 지원과 한국어 품질은 별개다. |
| Qwen3-Omni 30B-A3B 계열 Apache 2.0 | [논문](https://arxiv.org/abs/2509.17765) | 공개 모델 라이선스 설명 확인 | 일치 | A | 보고서의 명시적 공개 라이선스와 일치. |
| Hume EVI 3 영어 전용, EVI 4-mini는 한국어 포함 11개 언어 | [공식 문서](https://dev.hume.ai/docs/speech-to-speech-evi/overview.md) | HTML 버전의 비교 표 확인 | 일치 | A | Markdown URL은 도구가 처리하지 못했지만 [HTML 문서](https://dev.hume.ai/voice/docs/speech-to-speech-evi/overview)에서 확인. |
| EVI 4-mini는 supplemental LLM 필수, prosody 측정 제공 | [공식 문서](https://dev.hume.ai/docs/speech-to-speech-evi/overview.md) | 버전 비교·prosody 기능 설명 확인 | 일치 | A | tune·rhythm·timbre 측정 설명도 확인. |
| Hume TTS·EVI API 접근 종료 2026-11-13 | [공식 문서](https://dev.hume.ai/docs/speech-to-speech-evi/overview.md) | 공식 종료 공지 확인 | 일치 | A | 정확한 종료 시각은 미국 동부시간 00:01. |
| Hume EVI $0.04–0.07/min, 월 $0–500, Pro $70/1,200분, Business $500/12,500분 | [eesel](https://www.eesel.ai/blog/hume-ai-pricing), [CostBench](https://costbench.com/software/voice-apis/hume-ai/) | 제시된 2차 가격표 확인 | 일치 | B | 2차 출처끼리의 일치다. 현재 계약 가격으로 확정할 수 없음. |
| Hume Expression Measurement “600+ dimensions, 50+ languages” | [가격 페이지](https://www.hume.ai/pricing) | 현재 리디렉션 페이지 확인 | 확인불가 | C | 현재 홈페이지에서 50+ 언어는 확인되나 600+ 차원 문구는 확인하지 못함. |
| KEMDy20: 19–39세 80명, 40개 2인 세션, 음성·전사·EDA·IBI·온도·7범주 | [ETRI](https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us) | ETRI 접근 및 관련 논문 검색 | 확인불가 | C | 원출처 접속 실패. 80명·연령·40세션은 관련 논문 검색 결과와 부합하나 전체 묶음 원문 검증 미완료. |
| KEMDy19는 성우 연기 발화, 범주 다수결·차원 평가자 10명 평균 | [ETRI](https://nanum.etri.re.kr/share/kjnoh2/KEMDy19) | 원출처 접속 시도 | 확인불가 | C | ETRI 502 오류. KESDy18 설명과 혼동했는지도 재확인 필요. |
| KEMDy19는 라이선스 동의서 제출 필요 | [ETRI](https://nanum.etri.re.kr/share/kjnoh2/KEMDy19) | 원출처 접속 시도 | 확인불가 | C | 이번 검증에서는 해당 페이지를 읽지 못함. |
| KESDy18: 성우 30명, wav 2,880개, 텍스트·xlsx 라벨, 공개분 EM/Shure S35 | [ETRI](https://nanum.etri.re.kr/share/kjnoh2/KESDy18) | 공식 데이터 설명·파일 목록 대조 | 일치 | A | 범주 다수결과 arousal/valence 평균도 확인. |
| KESDy18 “License Agreement required (Not submitted)” | [ETRI](https://nanum.etri.re.kr/share/kjnoh2/KESDy18) | 페이지 표시 확인 | 일치 | A | “Not submitted”는 방문자의 제출 상태 표시이며 라이선스 내용이 아니다. |
| KEMDy19 mean CCC: Wav2Vec 2.0 0.5473, HuBERT 0.5271 | [AHFE](https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68) | 원 논문 초록 대조 | 일치 | A | 전체 감정 범주 조건. 4범주 조건의 수치는 별도로 존재한다. |
| KEMDy19 4범주: 0.5초 UA −10.61%, 3초 −5.08% | [AES 포스터](https://aesshow2024ny.sched.com/event/1kyKX/real-time-recognition-of-speech-emotion-for-human-robot-interaction) | 포스터 페이지 접속 시도 | 확인불가 | C | 접근 실패. 감소량이 %인지 %p인지도 원문 확인 필요. |
| AI Hub 4범주 HuBERT 정확도 0.8139, LLaMa2와 융합 실험 | [서강대 학위논문](https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918) | 기관 저장소 초록 대조 | 일치 | A | 초록에 0.8139 명시. 화자 독립 분할 여부까지 확인한 것은 아니다. |
| AI Hub 학습 모델·서비스 상업 활용 허용, 출처 표기, 재가공 배포 사전협의 | [공공데이터포털](https://www.data.go.kr/data/15146382/fileData.do) | 링크 대상·본문·인용 문구 검색 | 확인불가 | C | 링크는 **고양시 어린이 방송 음성 데이터** 페이지다. 해당 감정 데이터셋 약관의 근거로 사용할 수 없다. |
| 한국어 wav2vec 특징이 SVM·MLP에서 기존 음향 특징보다 높은 WA·UA | [GIST](https://scholar.gist.ac.kr/handle/local/21974) | 기관 저장소 초록 확인 | 일치 | A | 2021년 연구라는 서지도 일치. |
| Eyben et al. 2016 GeMAPS/eGeMAPS: 생리적 관련성·선행 실적·추출 용이성 기준, openSMILE 구현 | [원 논문 PDF](https://msp.utdallas.edu/publications/Eyben_2016.pdf) | 원문 접속 및 후속 논문 설명 대조 | 확인불가 | C | 제시 PDF 접근 실패. 원 논문 전체 설명을 직접 확인하지 못함. |
| 23개 LLD 사용, eGeMAPS 총 88개 특징 | [2210.14495](https://arxiv.org/pdf/2210.14495) | 후속 논문 특징 추출 절 확인 | 일치 | B | 23개 사용 설명은 확인되나 표준을 정의한 원출처가 아닌 후속 연구다. |
| eGeMAPS LLD를 25개로 기술한 자료도 있음 | [2310.08338](https://arxiv.org/pdf/2310.08338) | Methods 확인 | 일치 | B | 25 LLD→88 functionals로 명시. GeMAPS와 eGeMAPS, 버전·구현 차이를 구분해야 한다. |
| ShEMO baseline은 openSMILE eGeMAPS와 z-score 정규화 사용 | [논문](https://arxiv.org/pdf/1906.01155) | 특징 추출 절 확인 | 일치 | A | “다수 데이터셋이 사용한다”는 범용 주장까지 이 한 논문이 입증하지는 않는다. |

**2. 장기 메모리**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| LongMemEval: 500문항·5가지 능력·지속적 상호작용에서 정확도 30% 하락 | [논문](https://arxiv.org/abs/2410.10813) | 원 논문 초록 대조 | 일치 | A | 30%를 모든 모델의 보편적 하락률로 해석하면 안 된다. |
| LongMemEval 권고: session decomposition·fact-augmented key expansion·time-aware query expansion | [논문](https://arxiv.org/abs/2410.10813) | 논문 방법 설명 확인 | 일치 | A | 저자들이 제안한 개선 기법. |
| Mem0 2025-04 논문은 “독립 논문” | [논문](https://arxiv.org/html/2504.19413) | 저자 소속 확인 | 불일치 | C | 저자 소속이 `research@mem0.ai`. **벤더 자체 연구**로 수정해야 한다. |
| Mem0: J 66.88±0.15%, p95 1.440초, 1,764토큰 | [논문](https://arxiv.org/html/2504.19413) | 성능·지연 표 대조 | 일치 | A | 논문 실험 조건의 total latency. |
| Mem0 graph: 68.44±0.17%, 2.590초, 3,616토큰 | [논문](https://arxiv.org/html/2504.19413) | 같은 표 대조 | 일치 | A | 벤더 자체 비교. |
| Zep: 65.99±0.16%, 2.926초, 3,911토큰 | [논문](https://arxiv.org/html/2504.19413) | 같은 표 대조 | 일치 | A | Zep의 공식 자체 점수와 구분 필요. |
| A-Mem: 48.38±0.15%, 4.374초, 2,520토큰 | [논문](https://arxiv.org/html/2504.19413) | 같은 표 대조 | 일치 | A | 해당 구현·설정에 한정. |
| LangMem: 58.10±0.21%, 60.40초, 127토큰 | [논문](https://arxiv.org/html/2504.19413) | 같은 표 대조 | 일치 | A | 라이브러리의 일반적 지연 보증값이 아니다. |
| OpenAI memory: 52.90±0.14%, 0.889초, 4,437토큰 | [논문](https://arxiv.org/html/2504.19413) | 같은 표 대조 | 일치 | A | 논문이 구현·평가한 비교 대상의 명칭이다. 현재 제품 전체 성능을 뜻하지 않는다. |
| Full-context: 72.90±0.19%, 17.117초, 26,031토큰 | [논문](https://arxiv.org/html/2504.19413) | 같은 표 대조 | 일치 | A | 노트의 값과 일치. |
| RAG k=2, 256-token chunk: 60.97±0.20%, p95 1.907초 | [논문](https://arxiv.org/html/2504.19413) | RAG 비교 표 대조 | 일치 | A | 해당 표의 설정 중 결과다. 보편적 최적 설정은 아니다. |
| 저장 토큰: Mem0 약 7k, graph 약 14k, Zep 600k 초과, 원본 약 26k | [논문](https://arxiv.org/html/2504.19413) | 메모리 저장·구축 분석 확인 | 일치 | B | 반올림된 요약값. 검색 시 입력 토큰과 저장 토큰을 구분해야 한다. |
| Mem0 full-context 대비 p95 91% 감소·토큰 비용 90% 이상 절감·OpenAI 대비 J 26% 상대 향상 | [논문](https://arxiv.org/abs/2504.19413) | 초록 및 표 재계산 | 일치 | A | 약 91.6%, 26.4% 상대 향상과 부합. 벤더 자체 보고. |
| Zep DMR 94.8% vs MemGPT 93.4% | [논문](https://arxiv.org/abs/2501.13956) | 원 논문 초록 확인 | 일치 | A | Zep 자체 연구. |
| Zep LongMemEval 최대 18.5% 향상·지연 90% 감소 | [논문](https://arxiv.org/abs/2501.13956) | 초록 설명 대조 | 일치 | A | 비교 baseline·개선율 정의를 유지해야 한다. |
| Mem0 연구 페이지: LoCoMo 92.5, LongMemEval 94.4, BEAM 64.1/48.6 | [연구 페이지](https://mem0.ai/research) | 공식 연구·비교 페이지 교차 확인 | 일치 | A | 자체 보고. [공식 비교 페이지](https://mem0.ai/compare/mem0-vs-zep)에도 네 값이 표시된다. |
| 위 페이지 2026-05-20 갱신, 이전 점수 91.6/93.4 | [연구 페이지](https://mem0.ai/research) | 현재 페이지에서 이력 확인 시도 | 확인불가 | C | 과거 스냅샷·수정 이력 미확보. |
| Zep 75.14로 정정, 94.7은 GPT-5.4 사용, 점수 범위 58.44–94.7 | [BrainDetox](https://braindetox.kr/en/posts/memory_benchmark_scores_reliability_2026.html), [Mem0 비교](https://mem0.ai/compare/mem0-vs-zep) | 논란 설명·현재 비교 페이지 확인 | 확인불가 | C | BrainDetox 접근 실패. 경쟁사 비교 페이지로 전체 논란을 확정할 수 없다. |
| Zep LongMemEval GPT-4o 71.2 | [Mem0 비교 글](https://mem0.ai/blog/zep-vs-mem0-which-ai-memory-layer-should-you-choose) | 공식 경쟁사 비교 페이지 대조 | 일치 | B | [현재 비교 페이지](https://mem0.ai/compare/mem0-vs-zep)에 71.2 표시. Zep 자체 원출처는 아님. |
| 다른 aggregator의 Zep 점수 90.2 | URL 미제시 | 출처 식별 시도 | 확인불가 | C | aggregator 명칭·URL·평가 설정이 빠져 있다. |
| A-MEM: Zettelkasten 기반 상호 연결 노트 | [논문](https://arxiv.org/pdf/2502.12110) | 원 논문 초록 확인 | 일치 | A | 동적 색인·연결 구조와 일치. |
| A-MEM은 non-GPT 백본에서 모든 baseline 상회 | [논문](https://arxiv.org/pdf/2502.12110) | 해당 조건의 세부 표 확인 | 확인불가 | C | 논문 존재·구조는 확인했으나 이 범위의 전면 우위는 확정하지 못함. |
| Letta: core blocks·archival vector memory·대화 이력 계층, human/persona 블록 | [메모리 문서](https://docs.letta.com/concepts/memory-management), [아키텍처](https://docs.letta.com/guides/agents/architectures/memgpt) | 리디렉션된 공식 문서 확인 | 일치 | A | [현행 memory blocks 문서](https://docs.letta.com/v1-sdk/memory/memory-blocks)에서 human/persona와 읽기·수정 API 확인. |
| Letta 도구명이 `block_append/replace/read/summarize` | [문서](https://docs.letta.com/concepts/memory-management) | 현행 도구명 검색 | 확인불가 | C | 메모리 편집 기능은 확인되지만 제시된 네 식별자를 그대로 확인하지 못함. 버전 고정 필요. |
| 2026 graph-memory 논문 LongMemEval에서 LangMem이 A-MEM보다 대부분 열에서 우위 | [논문](https://arxiv.org/pdf/2606.06036) | Table 2 대조 | 일치 | A | 5개 열 중 multi-session·temporal·overall 3개에서 우위. 나머지 2개는 A-MEM 우위. |
| 위 논문의 백본 모델 라벨이 모호 | [논문](https://arxiv.org/pdf/2606.06036) | 실험 설정·표 주석 확인 | 불일치 | C | 본문에 Gemini-2.5-Flash·Claude-Sonnet-4.5, judge GPT-4o-mini를 명시한다. |
| MemConflict는 A-MEM·LangMem·Letta의 충돌 상황 평가 | [논문](https://arxiv.org/pdf/2605.20926) | 원 논문 서지·초록 확인 | 일치 | A | 논문 존재와 평가 주제 확인. |
| From Recall to Forgetting은 개인화 에이전트의 망각 포함 평가 | [논문](https://arxiv.org/pdf/2604.20006) | 원 논문 제목·초록 확인 | 일치 | A | TTL 사용이 검증된 최적 정책이라는 뜻은 아니다. |
| Memoria는 2025-12 개인화 대화 AI 메모리 프레임워크 | [논문](https://arxiv.org/pdf/2512.12686) | 제출일·초록 확인 | 일치 | A | 세션 요약·가중 지식그래프 구조 확인. |
| Letta·LangMem LongMemEval 점수 “Not published” | [Keywords AI](https://keywordsai.co/market-map/compare/langmem-vs-letta) | 리디렉션된 비교 페이지 검색 | 확인불가 | C | 현재 페이지에서 해당 문구 확인 못함. “공식 점수가 없다”는 포괄적 부재 주장도 미입증. |

**3. 음성 파이프라인·정확도·가격**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Salesforce 튜토리얼 cascade TTFA 755ms, best 729ms | [논문](https://arxiv.org/abs/2603.05413) | 본문과 실험 표 교차 확인 | 일치 | B | 본문은 755ms, 표는 **추정 E2E TTFA P50 947ms·min 729ms**. 서로 다른 통계량·본문 불일치가 있어 단일 대표 실측값으로 쓰기 어렵다. |
| 같은 논문의 P50 947ms는 버전 차이로 추정 | [EmergentMind](https://www.emergentmind.com/papers/2603.05413) | 현재 논문 본문·표 대조 | 확인불가 | C | 현재 같은 원문 안에도 755와 947이 함께 있다. 버전 차이라는 원인은 확인되지 않았다. |
| Qwen3-Omni DashScope TTFA 평균 702ms | [논문](https://arxiv.org/abs/2603.05413) | Table 3·본문 확인 | 일치 | A | cloud API 조건. |
| 로컬 vLLM Thinker 516ms, Transformers full 약 146초 | [논문](https://arxiv.org/abs/2603.05413) | Table 3 대조 | 일치 | A | 516ms는 **음성→텍스트**, 음성 출력 없음. full은 145,694ms, H200 조건. |
| Moshi 이론 160ms=80+80ms, L4 실측 최저 200ms | [GitHub](https://github.com/kyutai-labs/moshi) | 공식 README 확인 | 일치 | A | 최저 지연 자체 보고이며 한국어 서비스 지연이 아니다. |
| Moshi 7B temporal transformer+depth transformer | [GitHub](https://github.com/kyutai-labs/moshi), [논문](https://arxiv.org/abs/2410.00037) | 공식 아키텍처 설명 확인 | 일치 | A | 전체 시스템 구성과 일치. |
| Mimi 24kHz→12.5Hz, 1.1kbps, 80ms 프레임 | [GitHub](https://github.com/kyutai-labs/moshi) | 공식 README 수치 대조 | 일치 | A | 코덱 지연과 대화 TTFA를 구분해야 한다. |
| Moshi 가중치 CC-BY 4.0, Python MIT·Rust Apache | [GitHub](https://github.com/kyutai-labs/moshi) | 라이선스 설명 확인 | 일치 | A | 구성요소별 라이선스 구분. |
| Moshi PyTorch 24GB GPU 메모리, MLX 4/8-bit·M3 MacBook Pro 실행 | [GitHub](https://github.com/kyutai-labs/moshi) | 설치·실행 문서 확인 | 일치 | A | 클라우드 서버가 필수라는 뜻은 아니다. 로컬 고사양 기기도 가능. |
| Qwen3-Omni cold-start 이론 first-packet 234ms | [논문](https://arxiv.org/abs/2509.17765) | 원 논문 초록 확인 | 일치 | A | **이론값**으로 명시. 실서비스 실측 지연으로 인용하면 안 된다. |
| Step-Audio-R1 Realtime Big Bench Audio first-packet 0.92초 | [논문](https://arxiv.org/pdf/2511.15848) | Table 2 대조 | 일치 | A | 벤더 자체 보고. |
| GLM-4-Voice “streaming thoughts”; e2e는 tokenization+LLM+decoding, 측정값 미공개 | [TurnGuide](https://arxiv.org/pdf/2508.07375) | 지연 분석·용어 검색 | 확인불가 | C | 3요소 설명은 확인. “streaming thoughts” 문구와 GLM 원 모델에 대한 전체 진술은 직접 확인 못함. |
| STT 100–300ms, LLM TTFT 350–1,000ms, 약 800ms 예산 | [Morph](https://www.morphllm.com/voice-agent-api) | 벤더 글 확인 | 일치 | B | 업계 예산·예시다. 통제된 비교 실험 수치가 아니다. |
| S2S 약 300ms, cascade 추가 300–800ms | [Forasoft](https://www.forasoft.com/blog/article/pipecat-vs-livekit-agents) | 비교 글 확인 | 일치 | B | 벤더의 일반화된 설명. 모델·환경별 실측 보증값으로 쓰기 어렵다. |
| Pipecat·LiveKit 지연 차이가 없고 모델이 지연을 결정 | [Forasoft](https://www.forasoft.com/blog/article/pipecat-vs-livekit-agents) | 주장과 제시 근거 검토 | 확인불가 | C | 동일 조건 통제 실험 없이 **“차이 無”**라고 확정할 수 없다. |
| LiveKit: cascade 지연 누적, streaming으로 완화, realtime 모델 baseline 지연 낮음 | [공식 문서](https://docs.livekit.io/agents/models/pipelines/) | 파이프라인 설명 확인 | 일치 | A | 정성적 아키텍처 설명. |
| LiveKit 사례 ASR 100ms·LLM 500ms·TTS 200ms이나 E2E 3–4초 | [커뮤니티](https://community.livekit.io/t/high-end-to-end-latency-asr-llm-tts-total-1s-but-speech-end-to-reply-takes-3-4s-livekit-agents/1277) | 원 게시글 확인 | 일치 | A | 게시자 자체 측정이라는 사실만 확인. 지연 원인이 확정된 실험은 아니다. |
| Realtime API GA 2025-08-28 | [소개 글](https://openai.com/index/introducing-the-realtime-api/) | 공식 개발 문서·모델 정보 대조 | 일치 | A | 최초 preview 공개일과 구분해야 한다. |
| GA 당시 cached text $2.50/M, audio $20/M | [소개 글](https://openai.com/index/introducing-the-realtime-api/) | 공식 GA 모델 가격과 비교 | 불일치 | C | 과거 preview 가격 업데이트와 GA 공지를 섞었다. GA `gpt-realtime` cached input은 text/audio 각각 $0.40/M. [공식 모델 카드](https://developers.openai.com/api/docs/models/gpt-realtime) |
| gpt-realtime-2.1·mini 2026-07-06 출시 | [mer.vin](https://mer.vin/2026/07/gpt-realtime-2-1-api-reasoning-voice-agents-and-mini-pricing/) | 공식 changelog 추가 대조 | 일치 | A | [공식 changelog](https://developers.openai.com/api/docs/changelog)에 7월 6일 출시 확인. |
| Realtime p95 지연 25% 이상 감소 | [mer.vin](https://mer.vin/2026/07/gpt-realtime-2-1-api-reasoning-voice-agents-and-mini-pricing/) | 2차 기사·공식 문서 대조 | 일치 | B | 기사에 ≥25% 문구 존재. 이번 확인에서 공식 측정 근거는 확보 못함. |
| gpt-realtime audio in/out/cached $32/$64/$0.40, text $4/$16 per M | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 모델 카드 대조 | 일치 | A | [카드](https://developers.openai.com/api/docs/models/gpt-realtime). 현재 deprecated 표시도 있다. |
| gpt-realtime-mini audio $10/$20/$0.30, text $0.60/$2.40 per M | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 모델 카드 대조 | 일치 | A | [카드](https://developers.openai.com/api/docs/models/gpt-realtime-mini). |
| gpt-realtime-2·2.1 audio $32/$64/$0.40, text $4/$24 per M | [가격표](https://developers.openai.com/api/docs/pricing) | 모델별 공식 가격 확인 | 일치 | A | [2 카드](https://developers.openai.com/api/docs/models/gpt-realtime-2), [2.1 카드](https://developers.openai.com/api/docs/models/gpt-realtime-2.1). |
| gpt-realtime-2.1-mini audio $10/$20 per M | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 카드 대조 | 일치 | A | [공식 카드](https://developers.openai.com/api/docs/models/gpt-realtime-2.1-mini). |
| gpt-audio audio $32/$64, text $2.50/$10 per M | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 카드 대조 | 일치 | A | [공식 카드](https://developers.openai.com/api/docs/models/gpt-audio). |
| gpt-4o-transcribe $0.006/min, mini $0.003/min, whisper-1 $0.006/min | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 transcription 가격 대조 | 일치 | A | 분당 비용은 공식 표의 추정 비용 기준. |
| gpt-4o-mini-tts text $0.60/M, audio $12/M | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 가격 대조 | 일치 | A | 문자당 고정 요금과 직접 동일시하면 안 된다. |
| Gemini Live in $0.30/M, out $2/M, cached $0.075/M | [GetMaxim](https://www.getmaxim.ai/bifrost/llm-cost-calculator/provider/gemini/model/gemini-live-2.5-flash-preview-native-audio-09-2025) | 현재 제시 페이지 대조 | 불일치 | C | 현재 페이지는 **input $0.50/M, output $2/M**. 캐시 $0.075 근거 미확인. |
| 구형 Gemini Live audio websocket in/out $3/$12 per M | [CloudPrice](https://cloudprice.net/models/gemini-live-2.5-flash-native-audio) | 페이지 접근 시도 | 확인불가 | C | 접근 실패. 텍스트·오디오 모달리티와 모델 버전부터 분리해야 한다. |
| Gemini Live는 한국어 별도 요금 없음 | [GetMaxim](https://www.getmaxim.ai/bifrost/llm-cost-calculator/provider/gemini/model/gemini-live-2.5-flash-preview-native-audio-09-2025), [CloudPrice](https://cloudprice.net/models/gemini-live-2.5-flash-native-audio) | 언어별 과금 근거 확인 | 확인불가 | C | Google 공식 가격·약관 근거 미확보. |
| RTZR 벤치 평균 CER: VITO 5.91, RTZR Whisper 6.59, Clova 7.52, ETRI 10.19, Azure 10.88 | [GitHub](https://github.com/rtzr/Awesome-Korean-Speech-Recognition) | 원 벤치 표 대조 | 일치 | A | **ReturnZero 자체 실시**. 현재 서비스 간 독립 비교 결과가 아니다. |
| 같은 표: AWS 11.11, OpenAI Whisper 11.39, Google v2 11.50, Gemini 16.58, Deepgram 21.02 | [GitHub](https://github.com/rtzr/Awesome-Korean-Speech-Recognition) | 원 벤치 표 대조 | 일치 | A | 모델 버전·평가 시점이 충분히 고정되지 않아 현재 순위로 일반화 불가. |
| 콜센터 VITO/Clova/Whisper 3.51/4.91/7.51 | [GitHub](https://github.com/rtzr/Awesome-Korean-Speech-Recognition) | 도메인별 열 대조 | 일치 | A | 벤더 자체 보고. |
| 저품질 전화 VITO/RTZR Whisper/Clova/Whisper 4.40/4.26/6.49/17.27 | [GitHub](https://github.com/rtzr/Awesome-Korean-Speech-Recognition) | 도메인별 열 대조 | 일치 | A | 벤더 자체 보고. |
| KsponSpeech clean VITO/Clova/Whisper 6.64/8.05/12.06 | [GitHub](https://github.com/rtzr/Awesome-Korean-Speech-Recognition) | 도메인별 열 대조 | 일치 | A | 벤더 자체 보고. |
| 위 벤치는 각 3,000문장 AI Hub 샘플 | [GitHub](https://github.com/rtzr/Awesome-Korean-Speech-Recognition) | 평가 데이터 설명 확인 | 일치 | A | 평균값의 가중 방식·표본 구성은 함께 기록하는 편이 좋다. |
| Whisper-large-v3 zero-shot CER 5.72%, BuzzASR fine-tuned 4.61% | [모델 카드](https://huggingface.co/BuzzASR/korean) | Results 표 대조 | 일치 | A | FLEURS+Common Voice 25의 **combined normalized CER**, 벤더 보고. |
| Whisper large-v3가 large-v2보다 오류 10–20% 감소 | [Friendli](https://friendli.ai/models/openai/whisper-large-v3) | 제시 출처의 공식 인용 여부 검토 | 확인불가 | C | 이번 검증에서 해당 원문을 직접 확보하지 못함. 한국어에 한정된 개선율로 쓰면 안 된다. |
| 한국어 기상 ASR 연구는 large-v2까지, CER·공백 정규화 WER 사용 | [논문](https://arxiv.org/pdf/2410.18444) | 원 논문 평가·모델 목록 확인 | 일치 | A | 해당 도메인 실험 설정. |
| RTZR batch·streaming 1,000원/h, 첫 10시간 무료 | [가격](https://rtzr.ai/pricing), [개발 문서](https://developers.rtzr.ai/) | 공식 개발 가격 문서 보완 확인 | 일치 | A | [공식 요금 문서](https://developers.rtzr.ai/docs/pricing/). VAT 별도. |
| RTZR 최대 400원/h 할인, Enterprise 추가 300원/h 할인 | [가격](https://rtzr.ai/pricing) | 현재 공식 개발 요금표 대조 | 확인불가 | C | 현재 표는 월 구간별 **1,000/500/400/300원/h** 누진 과금이다. “할인액”과 “적용 단가” 혼동 주의. |
| RTZR 동시 10채널, 10,000시간+ 또는 100채널+ 영업 문의 | [가격](https://rtzr.ai/pricing) | 가격·처리량 문서 확인 시도 | 확인불가 | C | 제시 요금 페이지 접근 실패. 현재 공식 문서의 상담·구간 정책과 별도 확인 필요. |
| RTZR 무료 10시간 초과 시 자동 중단 | [가격](https://rtzr.ai/pricing) | 현행 개발 가격 문서 대조 | 불일치 | C | 현재 문서는 **무료분 초과부터 구간별 과금 적용**이라고 설명. [공식 문서](https://developers.rtzr.ai/docs/pricing/) |
| RTZR 스트리밍·화자분리·키워드 부스팅 | [개발 문서](https://developers.rtzr.ai/) | 공식 기능 소개 확인 | 일치 | A | 기능 존재 확인. |
| 과거 VITO 개발자 사이트 월 1,000시간 무료 | [VentureSquare](https://www.venturesquare.net/863579/) | 과거 보도 확인 | 일치 | B | 과거 프로모션·보도다. 현행 무료량과 구분 필요. |
| CLOVA Speech 단문·장문·스트리밍·부스팅·번역·한국 리전 | [문서](https://guide.ncloud-docs.com/docs/ko/clovaspeech-overview) | 공식 문서 접속 시도 | 확인불가 | C | 접근 실패. |
| CLOVA Speech “국내 가장 높은 수준의 한국어 인식률” | [제품 페이지](https://www.ncloud.com/product/aiService/clovaSpeech) | 인용의 실증 근거 확인 | 확인불가 | C | 확인되더라도 벤더 마케팅 문구이며 독립 순위 근거는 아니다. |
| ElevenLabs TTS: v3·v2·v4 $0.08/1k, Conversational·Flash/Turbo·v4 Turbo $0.04/1k | [공식 가격](https://elevenlabs.io/pricing/api) | 모델별 가격표 대조 | 일치 | A | 공개 API 가격. 플랜·포함량·추가 사용 조건 구분 필요. |
| ElevenLabs Flash/Turbo 약 75ms | [공식 가격](https://elevenlabs.io/pricing/api) | 모델 설명 확인 | 일치 | A | 벤더가 제시한 모델 지연. E2E 지연이 아니다. |
| ElevenLabs 플랜: Free 10k, $6/75k, $22/275k, $99/1.238M, $299/3.738M, $990/12.375M | [공식 가격](https://elevenlabs.io/pricing/api) | 플랜·모델별 포함량 대조 | 일치 | A | **$0.08 모델 기준** 포함량. $0.04 모델은 포함 문자량이 더 많아 한 표로 고정하면 오해 가능. |
| Scribe v2 $0.22/h, Realtime $0.39/h, Speech Engine $0.08/min | [공식 가격](https://elevenlabs.io/pricing/api) | 제품별 단가 대조 | 일치 | A | 추가 기능·burst 요금은 별도. |
| ElevenLabs 언어 수 v4 90+, v3 70+, Flash 32, v2 29 | [공식 가격](https://elevenlabs.io/pricing/api) | 모델 설명 대조 | 일치 | A | 이 가격 페이지의 언어 수 표기와 일치. 한국어 지원 목록은 별도 확인 필요. |
| Typecast 1 credit=1문자 | [공식 가격](https://typecast.ai/pricing/api/) | 과금 설명 확인 | 일치 | A | 공식 페이지에 명시. |
| Typecast Free 월 30k credits, 동시 2 | [공식 가격](https://typecast.ai/pricing/api/) | 현재 무료 플랜 대조 | 불일치 | C | 현재는 **15k credits/월**, 동시 2. 무료 생성물의 상업 이용 제한·출처 표기 조건도 명시. |
| Typecast Lite $15/200k, $0.075/1k, 초과 $0.09/1k | [공식 가격](https://typecast.ai/pricing/api/) | 공식 가격·나눗셈 확인 | 일치 | A | 포함량을 모두 썼을 때의 평균 단가다. |
| Typecast Plus $280/4M, $0.07/1k, 초과 $0.08/1k | [공식 가격](https://typecast.ai/pricing/api/) | 공식 가격·나눗셈 확인 | 일치 | A | Enterprise 견적 방식도 확인. |
| Supertone Free 3,000, Starter $2.99/20k, Creator $10.49/100k, API 20회/min | [Play](https://www.supertone.ai/ko/play) | 공식 페이지 접속 시도 | 확인불가 | C | 다른 도메인으로 리디렉션 후 접근 실패. |
| Supertone 기업 API 단가 미공개 | [Play](https://www.supertone.ai/ko/play), [비교](https://neuronfeed.com/compare/supertone-vs-typecast) | 공개 가격 근거 확인 시도 | 확인불가 | C | “공개되지 않았다”는 현재 상태를 확정하지 못함. |
| CLOVA Voice 100개 음성, 5개 언어, 볼륨·속도·피치·감정 조절 | [문서](https://guide.ncloud-docs.com/docs/ko/clovavoice-overview) | 공식 문서 접근 시도 | 확인불가 | C | 접근 실패. |
| Typecast가 한국어에서 더 자연스럽다는 비교 | [벤더 글](https://typecast.ai/learn/?p=13109) | 비교 주장·독립 평가 근거 검토 | 확인불가 | C | 벤더 의견을 품질 우위의 확정 사실로 사용할 수 없음. |
| channelcorp Ko-TTS-Arena 블라인드 비교 코드 공개 | [HF 코드](https://huggingface.co/spaces/channelcorp/Ko-TTS-Arena/blob/refs%2Fpr%2F1/tts.py) | 링크 접근 시도 | 확인불가 | C | PR ref 경로 접근 실패. 기본 브랜치 공개 여부와 구분 필요. |

**4. 공감·대화 품질**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Ayers: 195질문·3중 평가·585평가, 챗봇 선호 78.6%, CI 75.0–81.8 | [Physicians Weekly](https://www.physiciansweekly.com/chatbot-generates-quality-empathetic-responses-to-patient-questions/), [Healio](https://www.healio.com/news/primary-care/20230518/chatgpt-offers-highquality-empathetic-responses-to-patient-messages) | 원 논문 기관 저장소 초록 추가 확인 | 일치 | A | [Johns Hopkins 논문 기록](https://pure.johnshopkins.edu/en/publications/comparing-physician-and-artificial-intelligence-chatbot-responses/). 응답 전체 선호율이며 공감 점수만의 선호율은 아니다. |
| Ayers 응답 길이 **중앙값** 의사 52단어, 챗봇 211단어 | [Physicians Weekly](https://www.physiciansweekly.com/chatbot-generates-quality-empathetic-responses-to-patient-questions/), [Healio](https://www.healio.com/news/primary-care/20230518/chatgpt-offers-highquality-empathetic-responses-to-patient-messages) | 원 논문 초록의 통계량 대조 | 불일치 | C | 기관 저장소 원 논문 초록은 **Mean (IQR)**로 표시한다. 숫자만 일치하며 “중앙값” 표현은 근거와 다름. [논문 기록](https://pure.johnshopkins.edu/en/publications/comparing-physician-and-artificial-intelligence-chatbot-responses/) |
| 공감적·매우 공감적 응답 비율 챗봇이 9.8배 | [Physicians Weekly](https://www.physiciansweekly.com/chatbot-generates-quality-empathetic-responses-to-patient-questions/), [Healio](https://www.healio.com/news/primary-care/20230518/chatgpt-offers-highquality-empathetic-responses-to-patient-messages) | 원 논문 초록까지 추가 확인 | 일치 | A | [기관 저장소](https://pure.johnshopkins.edu/en/publications/comparing-physician-and-artificial-intelligence-chatbot-responses/)에서 확인. 전체 공감 능력의 9.8배라는 뜻은 아니다. |
| Lee 2024: N=192·202, GPT-4 Turbo·Llama2·Mistral이 인간 응답보다 공감적으로 평가 | [논문](https://arxiv.org/pdf/2403.18148) | 원 논문 초록 확인 | 일치 | A | 연구 상황의 지각된 공감 평가. |
| CoNLL 2026: 인간 평가자 1,000명, LLM 응답이 더 공감적, 평가자 자기집단 편향 | [ACL](https://aclanthology.org/2026.conll-main.21/) | 초록·출판 정보 확인 | 일치 | A | GPT-4·Llama2·Gemini 1.0·Mixtral 비교다. 2026 최신 모델 전체의 성능을 뜻하지 않는다. |
| LLM 공감 응답은 담화 기능 수준에서 정형적 | [AlphaXiv](https://www.alphaxiv.org/abs/2604.08479.md) | 원 arXiv 초록 대조 | 일치 | A | [원 논문](https://arxiv.org/abs/2604.08479)에서 확인. |
| Wenger 연구 4개에서 인간 공감 선택 57–62% | [연구자 사이트](https://michaelinzlicht.com/news-for-front/2026/4/23/the-ai-empathy-paradox-customers-reject-the-help-they-say-they-prefer) | 연결된 원 논문 대조 | 일치 | B | [원 논문](https://pmc.ncbi.nlm.nih.gov/articles/PMC12872445/)에서 57.1%·57.8% 등 확인. 57–62%는 반올림 범위다. |
| AI가 썼다고 귀속하면 heard/validated 느낌 감소 | [2506.10150](https://arxiv.org/html/2506.10150v2) | 해당 논문 본문·참고문헌 확인 | 일치 | B | 이 논문의 독자적 발견으로 쓰면 안 된다. Yin et al. 2024의 **“AI can help people feel heard, but an AI label diminishes this impact”** 등 선행연구를 인용한다. |
| Kang ACL 2024: 지지 전략 선택 어려움·선호 편향, 외부 도움 없는 LLM의 한계 | [논문](https://arxiv.org/abs/2402.13211v2) | 원 논문 초록 확인 | 일치 | A | 특정 ESC 실험의 결론이며 모든 LLM의 영구적 한계라는 뜻은 아니다. |
| ESC-Eval은 emotional support 시스템 평가 프레임워크 | [논문](https://www.arxiv.org/pdf/2406.14952) | 원 논문 초록 확인 | 일치 | A | 역할놀이 에이전트와 **수동 대화 평가**를 사용한다. 순수 LLM-as-judge 방식으로 요약하면 부정확하다. |
| FEEL: LLM 평가자 사용, 기존 자동 지표는 인간 판단과 상관 낮음 | [논문](https://arxiv.org/pdf/2403.15699v1) | 원 논문 초록 확인 | 일치 | A | 저자들이 보고한 연구 결과. |
| 2025 ESC 연구는 기존 task 정의 문제와 과제 재정의 제안 | [논문](https://arxiv.org/pdf/2505.15316.pdf) | 원 논문 초록 확인 | 일치 | A | 핵심은 **한 턴 내 여러 전략·발화의 연속 생성**이다. “마지막 발화가 supporter가 아닐 수 있음”만으로 요약하면 핵심이 빠진다. |
| HEART는 인간·LLM multi-turn 지지 대화를 5축 평가 | [논문](https://arxiv.org/pdf/2601.19922) | 원 논문 초록 대조 | 일치 | A | Human Alignment·Empathic Responsiveness·Attunement·Resonance·Task-Following. 최초 제출은 2026-01, 2월 개정. |
| ESC-Skills: ESConv test 100개, GPT-Judge·인간의 empathy/helpfulness 평가 | [논문](https://arxiv.org/pdf/2605.27908) | 4.4절·Table 3 확인 | 일치 | A | GPT-5.4 judge·인간 주석자 3명. |
| Başar 2024: GPT-4·BLOOM·FLAN-T5, 금연·성건강 데이터, 4기준과 ranking 평가 | [논문](https://aclanthology.org/2024.hucllm-1.4.pdf) | 원 논문 초록 대조 | 일치 | A | 네 기준·데이터·모델 목록 모두 일치. DOI도 일치. |
| GPT-4 reflection은 인간 작성 reflection과 비슷한 품질 | [논문](https://aclanthology.org/2024.hucllm-1.4.pdf) | 초록 결론 확인 | 일치 | A | 원문은 comparable quality. **인간 상담사와 상담 능력이 동등**하다는 주장으로 확대하면 안 된다. |
| COLING 2025: GPT-4·Llama2·BLOOM, 컨텍스트 길이·MI 전략 효과 탐색 | [UvA PDF](https://pure.uva.nl/ws/files/267190166/2025.coling-main.135.pdf) | ACL 원 논문 기록 추가 확인 | 일치 | A | [ACL 원문 기록](https://aclanthology.org/2025.coling-main.135/). 임상적 치료 효과 검증은 아니다. |
| Xie ACL Findings 2024: 전문가 시연에서 자연어 귀납 규칙으로 MI 전략 학습 | [Sotaro](https://gengo.sotaro.io/ner/Motivational%20Interviewing) | 제시 목록·원 논문 식별 시도 | 확인불가 | C | 목록 페이지 접근 실패. 논문 제목·Anthology ID를 직접 제시해야 한다. |

**5. 안전·의존·위기 탐지·109**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| MIRROR-Eval: companion 유해 행동 15.1/trial, 범용 LLM 5.0/trial | [NeurIPS](https://neurips.cc/virtual/2026/177275) | 원출처 접속·정확한 수치 검색 | 확인불가 | C | 원문 접근 실패. **핵심 안전 근거로 확정 인용하면 안 된다.** |
| MIRROR-Eval: 3개 위해 티어, Character.AI·Replika 최고, GPT-5.5·Sonnet 5 최저 | [NeurIPS](https://neurips.cc/virtual/2026/177275) | 원출처·모델 목록 확인 시도 | 확인불가 | C | 논문·표·버전 확보 필요. |
| 체계적 고찰 29편, 2025-12 검색 cutoff | [JMIR](https://preprints.jmir.org/preprint/103517) | 초록 Methods·Results 확인 | 일치 | A | 29편 중 출판 논문·프리프린트가 혼재한다. |
| 고찰: frontier가 open-source·여러 companion보다 자살·자해 대응 품질 높음 | [JMIR](https://preprints.jmir.org/preprint/103517) | Results 확인 | 일치 | A | “여러 companion”에 대한 경향이다. 모든 앱·모델의 절대 순위는 아니다. |
| 공통 문제: 위험평가 부실·위기 자원 연계 지연·jailbreak 대응 어려움 | [JMIR](https://preprints.jmir.org/preprint/103517) | 결과·결론 확인 | 일치 | A | 노트의 요약과 부합. |
| Psychiatric Services 2025-08: 고위험 회피, 중간 위험 비일관, multi-turn 미평가 | [Live5News](https://www.live5news.com/2025/08/27/study-says-ai-chatbots-need-fix-suicide-response-family-sues-over-chatgpt-role-boys-death), [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12391427) | 기사·논문 접속 시도 | 확인불가 | C | 기사 접근 실패·PMC CAPTCHA. 두 학술지 주장이 같은 PMC 링크를 공유해 서지 혼동 점검 필요. |
| 같은 시기 ChatGPT 관련 청소년 사망 소송 보도 | [Live5News](https://www.live5news.com/2025/08/27/study-says-ai-chatbots-need-fix-suicide-response-family-sues-over-chatgpt-role-boys-death) | 기사 접속 시도 | 확인불가 | C | 이번 검증에서 해당 기사 본문 미확보. |
| Scientific Reports 2025-08: 29개 챗봇 모의 자살 시나리오·전문가/응급 연계 평가 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12391427) | 원 논문 접속 시도 | 확인불가 | C | CAPTCHA로 본문 확인 실패. |
| FTC 2025 아동·청소년 AI companion 안전 조사, 미묘한 정신건강 신호 탐지 취약 | [Axios](https://axios.com/2026/05/12/ai-chatbots-mental-health-cues) | 제시 기사 접속 시도 | 확인불가 | C | 조사 개시와 탐지 성능은 별도 주장이다. 각각 공식 공지·연구 근거 필요. |
| IWSDS 2025 자살 위험자 지원 대화 에이전트 설계 논문 | [ACL preview](https://preview.aclanthology.org/setup/2025.iwsds-1.13) | 정식 ACL 주소 보완 확인 | 일치 | A | [정식 논문 기록](https://aclanthology.org/2025.iwsds-1.13/). |
| MIT/OpenAI RCT N=981·4주·28일·하루 5분 이상 사용 지시 | [Fortune](https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab), [HPCwire](https://www.hpcwire.com/aiwire/2025/03/26/twin-studies-warn-of-harmful-emotional-and-social-impacts-of-chatgpt/) | 원 연구 추가 대조 | 일치 | A | [원 논문](https://arxiv.org/html/2503.17473v1). 981은 최종 분석 표본이며 일 5분은 지시 조건이다. |
| 사용량이 많을수록 외로움·의존·문제적 사용 증가, 사회화 감소와 상관 | [Fortune](https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab), [HPCwire](https://www.hpcwire.com/aiwire/2025/03/26/twin-studies-warn-of-harmful-emotional-and-social-impacts-of-chatgpt/) | RCT 원 논문 결과 확인 | 일치 | A | [원 논문](https://arxiv.org/html/2503.17473v1). 사용량 자체는 무작위 배정되지 않아 인과 결론과 구분 필요. |
| OpenAI 측 약 4,000만 상호작용 분석 | [Fortune](https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab), [HPCwire](https://www.hpcwire.com/aiwire/2025/03/26/twin-studies-warn-of-harmful-emotional-and-social-impacts-of-chatgpt/) | 연구자 공식 발표·논문 구분 확인 | 일치 | B | 공식 발표의 약 4,000만 **interactions**와 논문의 300만 이상 **conversations**를 혼동하지 말아야 한다. |
| OpenAI 설문 4,076명 | [Fortune](https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab), [HPCwire](https://www.hpcwire.com/aiwire/2025/03/26/twin-studies-warn-of-harmful-emotional-and-social-impacts-of-chatgpt/) | 원 논문 Survey Results 대조 | 일치 | A | [원 논문](https://arxiv.org/html/2504.03888)에 4,076 responses 명시. RCT 표본과 다른 조사다. |
| Frontiers 논평은 RCT 결과가 복합적이고 해석에 주의가 필요하다고 지적 | [논평](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1612838/full) | 논평 내용 확인 | 일치 | B | 원 연구의 재현 실험이 아닌 해석·비평이다. |
| De Freitas JCR 2026: AI companion이 순간적 외로움을 인간 대화 수준으로 감소 | [Cave](https://cave.co.nl/blog/do-ai-companions-help-with-loneliness/) | 제시 2차 요약·원문 링크 확인 | 일치 | B | 2차 요약과 일치. 원문 접근 실패. 장기 의존 감소를 입증한 것은 아니다. |
| DeepSuiMind 1,200+ 케이스, 암시적 자살 사고·지원 취약성 | [논문](https://arxiv.org/abs/2502.17899v1) | 원 논문 초록 대조 | 일치 | B | 정확한 수는 **1,308개**. 1,200+는 거친 하한 표현. |
| PsyCrisisBench: 항저우 핫라인 540전사·64 LLM·15패밀리 | [논문](https://arxiv.org/abs/2506.01329v2) | 원 논문 초록 대조 | 일치 | A | 중국어 핫라인 자료. |
| PsyCrisisBench F1 자살 사고 0.880·위험평가 0.907 | [논문](https://arxiv.org/abs/2506.01329v2) | 초록 대조 | 일치 | A | 특정 태스크·평가 조건의 결과. 모든 LLM이나 한국어 서비스의 예상 F1이 아니다. |
| SOS-HL-1K 1,249개 중국 SNS 포스트, fine-tuning 후 개선 | [논문](https://arxiv.org/pdf/2309.03564) | 원 논문 초록 확인 | 일치 | A | 개인의 임상 위험 판정과 SNS 분류는 다른 과제다. |
| JMIR 2026: LLM-guided sampling·전문가 주석 자살 유해 콘텐츠 벤치마크 | [프리프린트](https://preprints.jmir.org/preprint/73725/accepted) | 최종 출판본 추가 확인 | 일치 | A | [정식 출판본](https://medinform.jmir.org/2026/1/e73725) 존재. 한국어 원문·영어 번역 벤치마크도 다룬다. |
| VERA-MH는 오픈소스 자살 위험 탐지·안전 대응 평가의 인간 검증 연구 | [논문](https://arxiv.org/pdf/2602.05088) | 원 논문 초록 확인 | 일치 | A | 원문에서 평가 도구·임상가 판단 정렬 검증 확인. |
| 2026-07-28 자살 긴급대응 강화방안·5단계 지원 | [뉴시스](https://www.newsis.com/view/NISX20260728_0003726203), [데일리안](https://www.dailian.co.kr/news/view/1671726/) | 기사·정부 정책 설명 교차 확인 | 일치 | A | [정부 정책브리핑](https://www.korea.kr/news/policyNewsView.do?newsId=148968928)으로 보완 확인. |
| 109 인력 103→200명, AI 업무 지원·민간 연계 확대 | [뉴시스](https://www.newsis.com/view/NISX20260728_0003726203), [데일리안](https://www.dailian.co.kr/news/view/1671726/) | 정부 발표 추가 대조 | 일치 | A | [복지부 발표](https://www.mohw.go.kr/gallery.es?act=view&bid=0003&list_no=380102&mid=a10505000000&tag=). 확대 **계획**과 충원 완료를 구분해야 한다. |
| 위험 키워드 검색 시 109 안내·공익광고 노출을 플랫폼과 협의 | [뉴시스](https://www.newsis.com/view/NISX20260728_0003726203), [데일리안](https://www.dailian.co.kr/news/view/1671726/) | 기사 정책 설명 확인 | 일치 | B | 협의·추진 내용이며 모든 플랫폼에 이미 시행됐다는 뜻은 아니다. |
| 2025-10 제2센터·AI 상담일지·조기 발굴·총 정원 140명 | [헤럴드](https://www.heraldk.com/article/2025102222153330814) | 기사 접근 시도 | 확인불가 | C | 접근 실패. 정원과 현원 103명은 다른 지표이므로 직접 모순으로 볼 수 없음. |
| Google·OpenAI는 위험 질문에 상담전화 안내 또는 대화 중단 safeguard 적용 | [노컷뉴스](https://www.nocutnews.co.kr/news/6483401) | 국내 기사 확인 | 일치 | B | 보도 내용의 확인. 모든 상황에서의 작동 보증은 아니다. |
| 109 상담사 2배 확대 보도 | [아시아경제](https://view.asiae.co.kr/en/article/2026053100423567809) | 기사 접속·복지부 발표 대조 | 일치 | B | 기사 본문 접근 실패. 공식 103→200 계획은 약 1.94배로 “2배”에 근사. |

**6. 개인정보·법령·온디바이스**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 개인정보 보호법 제23조: 건강 등 민감정보 원칙적 처리 금지, 별도 동의 등 예외 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 현행 법령 원문 추가 대조 | 일치 | A | [국가법령정보센터 제23조](https://www.law.go.kr/lsLinkCommonInfo.do?ancYnChk=&chrClsCd=010202&lsJoLnkSeq=1020398539). |
| 시행령 제18조 제3호: 신체·생리·행동 특징+특정 개인을 알아볼 목적+기술적 생성 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 2026-09-11 시행 현행 조문 대조 | 일치 | A | [현행 제18조 제3호](https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1029907813). |
| 시행령 제18조: 유전정보·범죄경력·생체인식·인종민족 4유형 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 법률 해설·조문 대조 | 일치 | B | 이번 확보 조문 링크는 제3호를 중심으로 표시. 4유형 전체는 해설에 의존. |
| 건강정보에 정신적 장애·정신적 건강상태 포함 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 법률 해설 확인 | 일치 | B | “모든 감정 라벨이 곧 건강정보”라는 결론은 별도 법적 해석이다. |
| 음성 자체는 자동으로 생체인식 민감정보가 아님 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 목적 요건과 대조 | 일치 | B | 제18조 제3호의 목적 요건에 따른 해석. 음성이 개인정보가 아니라는 뜻은 아니다. |
| 2020 시행령 개정: 생체인식 민감정보·가명정보 결합 전문기관·분리 보관·반출 승인 | [바이라인](https://byline.network/2020/03/307/) | 보도 시점·내용 확인 | 일치 | B | **입법예고된 개정안 보도**다. 현행 요건의 직접 근거로는 현행 법령을 써야 한다. |
| 생체정보를 법 제23조에 명시하는 개정안 발의 | [대륜](https://www.daeryunlaw.com/newsletter/news/155) | 뉴스레터 제목·설명 확인 | 일치 | B | 발의 사실과 통과·시행을 구분해야 한다. |
| PIPC 생체정보 가이드라인 2021-09-08 개정, 용어·인증/식별 구분 | [보안뉴스1](https://m.boannews.com/html/detail.html?idx=103846), [보안뉴스2](https://m.boannews.com/html/detail.html?idx=102064), [서울신문](https://m.go.seoul.co.kr/news/2021/09/09/20210909011007) | 제시 기사·공식 원문 접근 시도 | 확인불가 | C | 기사 403 또는 접근 실패. 가이드라인 전문 미확보. |
| 식별 예시: 가족 음성 중 화자를 알아보는 AI 스피커 | [보안뉴스](https://m.boannews.com/html/detail.html?idx=103846) | 인용문 원문 확인 시도 | 확인불가 | C | 원문 미확보. |
| 생체정보 보호조치 5단계·15개 | [보안뉴스](https://m.boannews.com/html/detail.html?idx=102064), [서울신문](https://m.go.seoul.co.kr/news/2021/09/09/20210909011007) | 관련 보도 교차 검색 | 일치 | B | 다른 보도에서도 5단계·15개가 확인되나 공식 가이드 전문 대조는 미완료. |
| 특징정보 암호화·보관 원본 분리 등 보호조치 | [보안뉴스](https://m.boannews.com/html/detail.html?idx=103846) | 가이드 전문·인용문 확인 시도 | 확인불가 | C | 확인하지 못한 세부 의무를 확정 인용할 수 없음. |
| PIPC 생성형 AI 개인정보 처리 안내서 2025-08-06 공개 | [바이라인](https://byline.network/2025/08/6-277/) | PIPC 공식 발표 추가 확인 | 일치 | A | [공식 발표·첨부 목록](https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&nttId=11410). |
| 생성형 AI 생애주기 4단계·개발 방식 3종 | [바이라인](https://byline.network/2025/08/6-277/) | 안내서 사본 목차·분류 표 대조 | 일치 | B | [안내서 사본](https://itskorea.kr/downloadFile.do?fileId=FILE_000000000105330&fileSn=3)은 4단계 외 거버넌스 장도 포함. 표지에 ‘안’ 표시가 있어 최종본 동일성은 별도 확인 필요. |
| 프롬프트 학습 적법성: 성능개선 관련성·예측 가능성·옵트아웃 종합 고려 | [다음](https://v.daum.net/v/20250806130146966), [바이라인](https://byline.network/2025/08/6-277/) | 기사·안내서 사본 대조 | 일치 | B | 이 3요소만 충족하면 자동 적법이라는 뜻은 아니다. |
| 위 다음 링크는 연합뉴스 기사 | [다음](https://v.daum.net/v/20250806130146966) | 매체명 확인 | 불일치 | C | 실제 표시 매체는 **지디넷코리아**. |
| CPO 초기 참여·로그 관리·PET·외부 API 약관·배포 전 점검 | [디지털데일리](https://www.ddaily.co.kr/page/view/2025080611120338544), [바이라인](https://byline.network/2025/08/6-277/) | 기사·안내서 사본 교차 확인 | 일치 | B | 권고·법적 의무·상황별 조치를 한꺼번에 “요구”로 표현하지 않는 편이 정확하다. |
| 2025-07-08 민관 협의회 AI 가드레일 논의 | [보안뉴스](https://m.boannews.com/html/detail.html?idx=138045) | 제시 기사 원문 확인 | 확인불가 | C | 해당 본문을 확보하지 못함. |
| 2026-05 이용자용 생성형 AI 개인정보 보호 가이드 발간·학습/기록삭제 안내 | [다음](https://v.daum.net/v/20260519222300715) | 기사 본문 확인 | 일치 | B | 보도 날짜·내용 일치. 공식 책자 전문은 별도 확인 필요. |
| PIPC 2024 사례집·질의응답집 개정본, 건강정보 사례 | [세종 2510](https://shinkim.com/kor/media/newsletter/2510), [3064](https://www.shinkim.com/kor/media/newsletter/3064) | 뉴스레터 날짜·본문 확인 | 일치 | B | 2510은 2024 사례집 설명. 두 자료를 모두 2024년 발간물로 묶으면 안 된다. |
| 한국어 Whisper-large-v3-turbo ggml 변환 모델 공개 | [HF](https://huggingface.co/royshilkrot/whisper-large-v3-turbo-korean-ggml) | 모델 저장소 확인 | 일치 | A | 공개 저장소는 확인. 실제 기기에서의 속도·정확도 검증은 별개다. |
| SenseVoice-S 234M·70ms이므로 모바일/엣지 실행 가능 | [논문](https://arxiv.org/html/2407.04051) | 논문 측정 조건·공식 카드 보완 확인 | 확인불가 | C | [공식 카드](https://huggingface.co/FunAudioLLM/SenseVoiceSmall)는 CPU/edge 경로를 소개하지만 **논문의 70ms를 모바일 성능으로 적용할 근거는 없다.** |
| emotion2vec+ base 약 90M·MIT이므로 클라이언트 실행 가능 | [GitHub](https://github.com/ddlBoJack/emotion2vec) | 크기·라이선스·배포 근거 분리 검토 | 확인불가 | C | 90M은 확인. 브라우저/모바일 실행 성능과 가중치 라이선스까지 이 문장이 입증하지 못한다. |

**7. 추론·비용 계산·부록에서 추가로 발생한 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| emotion2vec+ 한국어 공개 성능 수치가 없다 | 특정 URL 없음 | 제시 논문·카드의 평가 범위 확인 | 확인불가 | C | “검토한 자료에서 못 찾았다”로 한정해야 한다. 전 세계 공개 수치 부재는 입증되지 않았다. |
| Omni-LLM은 전용 SER보다 이점 없고 late fusion이 비용·성능 모두 유리 | [AHELM](https://arxiv.org/pdf/2508.21376), [SenseVoice](https://arxiv.org/html/2407.04051) | 지표·데이터·학습 조건 비교 | 확인불가 | C | AHELM PEM과 다른 논문의 WA를 직접 비교했다. 비용·한국어 late fusion 우위 실험도 없다. |
| user-stated/AI-inferred 분리·편집·동의 메모리 학술 패턴이 사실상 없다 | 특정 URL 없음 | 제시 자료의 범위 검토 | 확인불가 | C | 검색 미발견을 분야 전체의 부재로 확대했다. |
| LangMem 60초·A-Mem 4.4초이므로 실시간 음성에 부적합 | [Mem0 논문](https://arxiv.org/html/2504.19413) | 실험 결과와 제품 일반화 구분 | 확인불가 | C | 수치는 맞지만 한 평가 구현만으로 프레임워크 전체의 적합성을 확정할 수 없다. |
| 동일한 cascade를 쓰면 한벗 TTFA 0.75–1초 예상 | [튜토리얼](https://arxiv.org/abs/2603.05413) | 모델·하드웨어·네트워크 조건 비교 | 확인불가 | C | Claude·한국어 STT/TTS·메모리·SER을 포함한 한벗 실측값이 아니다. 목표치로 표기해야 한다. |
| gpt-4o-mini-transcribe $0.003/min≈4원/min≈240원/h | [공식 가격](https://developers.openai.com/api/docs/pricing) | 단위·환산 재계산 | 일치 | B | $0.18/h. 약 1,333원/USD 가정에서 240원/h이며 환율·세금 미제시. |
| RTZR 1,000원/h≈17원/min | [가격](https://rtzr.ai/pricing) | 1,000÷60 계산 | 일치 | B | 약 16.67원, VAT 별도. 실제 오디오 입력 시간 기준으로 계산해야 한다. |
| 응답 300글자 TTS $0.012–0.027 | [ElevenLabs](https://elevenlabs.io/pricing/api), [Typecast](https://typecast.ai/pricing/api/) | 300/1,000×문자 단가 계산 | 일치 | B | Flash $0.012, Typecast $0.021–0.027. 구독 최소 결제액·미사용 포함량 제외. |
| gpt-realtime-mini의 메모리·모드 제어는 text instruction으로만 가능 | [가격표](https://developers.openai.com/api/docs/pricing) | 공식 API 기능과 비교 | 불일치 | C | 가격표는 기능 제한 근거가 아니다. Realtime은 도구 호출·외부 애플리케이션 연동도 지원한다. |
| Qwen3-Omni가 자체 호스팅 S2S의 유일한 open 후보 | [논문](https://arxiv.org/abs/2509.17765) | 후보 전체를 배제하는 근거 확인 | 확인불가 | C | “유일한”을 입증할 자료 없음. |
| SenseVoice 70ms이므로 병렬 SER 추가 지연이 거의 없음 | [논문](https://arxiv.org/html/2407.04051) | 벤치 지연과 실제 파이프라인 구분 | 확인불가 | C | 서버 자원 경쟁·입력 완료 시점·모델 로딩·전송·후처리를 포함한 실측 필요. |
| MI reflection 평가로 인간 상담사 수준의 전반적 공감·상담 능력 가능 | [Başar](https://aclanthology.org/2024.hucllm-1.4.pdf) | 연구 과제 범위 대조 | 확인불가 | C | 특정 reflection 품질 비교를 상담사 전체 능력·임상 효과로 확대할 수 없다. |
| 안전 테스트 한국어 100–300케이스 구축이 적절 | 특정 URL 없음 | 외부 실증 근거와 설계 제안 구분 | 확인불가 | C | 팀의 평가 규모 제안이다. 검증된 최소 표본 수가 아니다. |
| 한국어 자살 위험 데이터셋·논문이 없다/발견 못함 | 특정 URL 없음 | 노트 자체 인용과 교차 검토 | 확인불가 | C | 노트가 인용한 [JMIR 연구](https://medinform.jmir.org/2026/1/e73725)는 한국어 자살 **유해 콘텐츠** 벤치마크를 다룬다. 개인 위기 탐지와는 구분하되 누락으로 기록해야 한다. |
| 109 민간 AI 챗봇 연계 공식 API·가이드라인이 없다 | 특정 URL 없음 | 존재 부재를 입증할 공식 근거 확인 | 확인불가 | C | “이번 조사에서 확인하지 못함”이 정확한 표현이다. |
| SER 감정·정신건강 추론은 민감정보일 가능성이 높음 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 법 조문과 개별 적용 해석 분리 | 확인불가 | C | 설계상 보수적 가정이다. 감정 라벨·건강 추론의 내용과 사용 맥락별 검토 필요. |
| 화자 식별을 안 하면 생체인식정보 요건을 피할 수 있음 | [Nepla](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p) | 시행령의 식별 목적 요건 대조 | 일치 | B | 해당 목적 요건에 관한 해석으로 한정. 다른 개인정보 처리 의무가 사라지는 것은 아니다. |
| 메모리 열람·수정·삭제 UI로 PIPC 요구 상당 부분 충족 | [바이라인](https://byline.network/2025/08/6-277/) | 안내서의 관리·안전·국외이전 항목과 대조 | 확인불가 | C | UI만으로 적법 근거·위탁/이전·보안·배포 전 검증 등을 충족했다고 판단할 수 없다. |
| 오디오·특징·감정 라벨 3개 저장소 분리가 가이드라인에 정합적 | [보안뉴스](https://m.boannews.com/html/detail.html?idx=103846) | 원칙과 제안 아키텍처 구분 | 확인불가 | C | 가능한 설계 제안이지 가이드라인이 명시한 3계층 의무·승인 설계는 아니다. |
| LLM·TTS 클라우드는 불가피 | 특정 URL 없음 | 보편적 불가능 주장 검토 | 확인불가 | C | 로컬 실행을 배제할 근거가 없다. “팀의 MVP 조건에서는 클라우드 사용 예정”으로 고치는 편이 정확하다. |
| ETRI 상용 이용·CLOVA 단가·Daglo·기타 모델 지연 등 Gaps의 미확인 항목 | 각 Gaps의 관련 링크 또는 URL 없음 | 미확인 상태 유지 여부 검토 | 확인불가 | C | “없음”과 “이번 조사에서 미확보”를 구분해야 한다. |
| 부록 emotion2vec+ 추천 근거로 IEMOCAP 71.79% 제시 | [emotion2vec 논문](https://arxiv.org/html/2312.15185) | 모델 이름 대조 | 불일치 | C | **71.79%는 원본 emotion2vec**다. +base/+large 자체 성능처럼 읽히는 표는 수정 필요. |
| 부록 STT·메모리·TTS·S2S·Hume의 반복 수치 | 위 각 원출처 | 본문 검증 행과 대응 | 일치 | B | 숫자 반복 자체는 대체로 일치. 원래 행의 조건·자체 보고·확인불가 판정도 함께 승계해야 한다. |

우선 수정할 항목은 **Mem0의 독립 연구 표기, emotion2vec와 emotion2vec+ 혼용, Emo-Emilia 학습 데이터 주장, Typecast 무료량, RTZR 무료 초과 정책, Realtime GA 가격의 시점 혼합, 서로 다른 감정 인식 지표를 이용한 우열 단정**입니다.
