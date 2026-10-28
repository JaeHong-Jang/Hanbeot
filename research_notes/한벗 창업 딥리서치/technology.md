# 「한벗」 기술 랜드스케이프 리서치 노트 (Speech Emotion Recognition · Long-term Memory · Voice Pipeline · Empathy · Safety · Privacy)

작성일: 2026-10-25. 대상: Python/PyTorch/FastAPI/React/Whisper/Claude API/vLLM 경험이 있는 소규모 학생 팀, MVP 목표 2026-12.
표기 원칙: 수치는 원문 그대로, 벤더 자체 보고(self-reported)는 명시. 모든 사실에 출처 URL 첨부. 확인 못 한 항목은 Gaps에 기록.

---

## 1. Speech Emotion Recognition (SER): 2023–2026 SOTA, 한국어 데이터셋, paralinguistic feature 표준

### Takeaway
MVP에서 가장 현실적인 선택은 **emotion2vec+ (MIT, FunASR로 한 줄 로드, 9-class)** 또는 **SenseVoice-Small (234M, 10초 오디오 70ms, 한국어 지원)** 을 음성 감정 백본으로 쓰고, 텍스트 감정은 LLM(Claude)에 맡겨 late fusion하는 구조다. 한국어 SER 공개 데이터셋(ETRI KEMDy19/20, KESDy18, AI Hub)은 모두 존재하지만 ETRI 자료는 라이선스 동의서 제출이 필요하고 상용 가능 여부는 이번 조사에서 확인 불가, AI Hub는 출처 표기 조건으로 상용 모델 활용이 허용된다. 멀티모달 omni-LLM(GPT-4o-audio, Qwen2.5-Omni)의 감정 인식은 MELD 기준 0.49~0.50 수준으로 전용 SER 모델 대비 우위가 없다.

### Cited Findings

**emotion2vec / emotion2vec+ (SSL 기반 SER 백본)**
- emotion2vec(ACL Findings 2024)은 IEMOCAP에서 linear layer만 학습하여 WA 71.79%를 기록, WavLM Large 70.03%, HuBERT Large 67.62%, data2vec 2.0(base) 68.58%, Vesper-12 70.70%를 상회. 모델 93.79M 파라미터(base 아키텍처) + 0.20M downstream linear head. 사전학습 감정 데이터 262시간(IEMOCAP, MELD, MEAD, CMU-MOSEI, MSP-Podcast). — [arXiv 2312.15185 (HTML)](https://arxiv.org/html/2312.15185)
- 비영어 9개 언어(그리스어 AESDD 72.33, 프랑스어 CaFE 74.52, 러시아어 RESD 64.75, 독일어 EmoDB 84.34, 이탈리아어 EMOVO 61.21, 중국어 M3ED 49.15, 벵골어 SUBESCO 90.91, 페르시아어 ShEMO 79.97, 우르두어 81.50 WA)에서 data2vec 2.0 대비 모두 우위. **한국어 데이터셋은 평가에 포함되지 않음.** — [arXiv 2312.15185 (HTML)](https://arxiv.org/html/2312.15185)
- GitHub 공개 라이선스 **MIT**. 모델 라인업: emotion2vec+ seed(201h fine-tune), emotion2vec+ base(4,788h, ~90M), emotion2vec+ large(42,526h, ~300M; 160k시간 중 40k 사용). 9-class 라벨: angry, disgusted, fearful, happy, neutral, other, sad, surprised, unknown. `pip install -U funasr` 후 `AutoModel(model="iic/emotion2vec_plus_large", hub="hf")`로 로드, `granularity="utterance"`, `extract_embedding=True`로 embedding 추출 가능. — [GitHub ddlBoJack/emotion2vec](https://github.com/ddlBoJack/emotion2vec)
- 서드파티 리더보드(RESD 러시아어) 기준 emotion2vec+ base UA 79.8, emotion2vec+ large 69.1, 원본 emotion2vec 65.04 (aggregator 수치, 원문 미확인). — [hyper.ai SER on RESD](https://next.hyper.ai/en/sota/tasks/speech-emotion-recognition/benchmark/speech-emotion-recognition-on-resd)
- 2025년 후속 연구는 Emotion2Vec-S 변형을 Emo-Emilia로 fine-tune하여 모든 감정 카테고리에서 base 대비 정확도 향상을 보고(전체 수치 미제시). — [arXiv 2502.18186](https://arxiv.org/pdf/2502.18186)

**SenseVoice (FunAudioLLM, Alibaba)**
- SenseVoice-Small 234M / SenseVoice-Large 1,587M. 10초 오디오 처리 지연: SenseVoice-S **70ms**, SenseVoice-L 1,623ms, Whisper-S 518ms, Whisper-L-V3 1,281ms. SenseVoice-Small 지원 언어: zh, yue, en, ja, **ko**. — [arXiv 2407.04051 (HTML)](https://arxiv.org/html/2407.04051)
- SER WA(%) (fine-tune 없이): IEMOCAP L 75.3 / S 65.7, MELD 63.1 / 57.8, MSP-Podcast 61.7 / 64.1, CREMA-D 90.4 / 74.0, CASIA 96.0 / 70.0, ESD 93.2 / 85.5, MER2023 69.2 / 68.3. (표 열 정렬이 불명확해 근사치로 취급 권장.) 논문 본문에 라이선스 명시 없음. — [arXiv 2407.04051 (HTML)](https://arxiv.org/html/2407.04051)

**Whisper encoder 기반 SER**
- SER Evals(2024) 벤치마크: ASR용으로 설계된 Whisper 모델이 cross-lingual SER에서 전용 SSL 모델(WavLM/HuBERT 계열)을 능가. — [arXiv 2408.07851](https://arxiv.org/html/2408.07851v1)
- 영어 IEMOCAP fine-tuned wav2vec 2.0/HuBERT: speaker-dependent WA 79.58%, speaker-independent 73.01%. — [arXiv 2111.02735](https://arxiv.org/pdf/2111.02735)

**Multimodal / Omni-LLM의 감정 인식 성능**
- AHELM(2025) emotion detection(MELD·MUStARD): Gemini 2.5 Pro mean win rate 0.781로 1위; GPT-4o Audio(Preview 2024-12-17)와 Qwen2.5-Omni(7B) 모두 0.656으로 공동 2위. MELD audio subset: GPT-4o Audio 0.497, Qwen2.5-Omni 0.491. — [arXiv 2508.21376](https://arxiv.org/pdf/2508.21376)
- Qwen2.5-Omni-7B 자체 보고 MELD SER 0.570 (Qwen2-Audio 0.553) — 미러 모델 페이지, 공식 카드 미확인. — [Qwen2.5-Omni-7B mirror](https://ai.gitcode.com/openharmony-models/Qwen2.5-Omni-7B)
- OmniVox(2025): omni-LLM zero-shot 감정 인식 평가(GPT-4o audio 포함, Qwen2.5-Omni 미포함). — [arXiv 2503.21480](https://arxiv.org/pdf/2503.21480)
- AEQ-Bench(2026): omni-modal LLM의 공감(empathy) 측정 벤치마크. — [arXiv 2601.10513](https://arxiv.org/pdf/2601.10513)
- Qwen3-Omni(2025-09): 음성 이해 19개 언어, 음성 생성 10개 언어(**한국어 포함**), Apache 2.0(30B-A3B 계열). — [arXiv 2509.17765](https://arxiv.org/abs/2509.17765)

**Hume AI EVI (Empathic Voice Interface)**
- 공식 문서: EVI 3는 **영어 전용**, EVI 4-mini는 영어·일본어·**한국어**·스페인어·프랑스어·포르투갈어·이탈리아어·독일어·러시아어·힌디어·아랍어 지원. EVI 4-mini는 supplemental LLM(Anthropic, OpenAI, Google, Fireworks 등) 필수. user_message에 "vocal expression measures"(prosody: tune, rhythm, timbre) 포함. **공식 문서에 "Hume is sunsetting the TTS and EVI APIs, with access ending November 13, 2026" 명시.** — [dev.hume.ai EVI overview](https://dev.hume.ai/docs/speech-to-speech-evi/overview.md)
- 가격(서드파티 집계, 공식 페이지 접근 불가): EVI overage $0.04–0.07/min(티어별), 플랜 $0~$500/월, Pro $70에 1,200분, Business $500에 12,500분 포함. — [eesel.ai Hume pricing](https://www.eesel.ai/blog/hume-ai-pricing); [costbench Hume](https://costbench.com/software/voice-apis/hume-ai/)
- Expression Measurement API: "600+ dimensions of expression, in 50+ languages" (한국어 명시 없음). — [hume.ai](https://www.hume.ai/pricing)

**한국어 SER 데이터셋**
- **KEMDy20 (ETRI)**: 19–39세 성인 80명, 2인 1조 40세션, 자유 대화. 음성 + 전사 + 생체신호(EDA, IBI, 손목 온도). 세그먼트별 7개 범주 감정 라벨. — [ETRI 나눔터 KEMDy20](https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us)
- **KEMDy19 (ETRI)**: 성우 연기 발화. 범주 라벨은 다수결, arousal/valence는 외부 평가자 10명 평균. "License Agreement required". — [ETRI 나눔터 KEMDy19](https://nanum.etri.re.kr/share/kjnoh2/KEMDy19)
- **KESDy18 (ETRI)**: 성우 30명, wav 2,880개, 발화 텍스트, 감정 라벨 xlsx(다수결 + arousal/valence 평균). 공개분은 KESDy18_EM(Shure S35). "License Agreement required (Not submitted)". — [ETRI 나눔터 KESDy18](https://nanum.etri.re.kr/share/kjnoh2/KESDy18)
- KEMDy19 dimensional SER: Wav2Vec 2.0 기반 mean CCC 0.5473, HuBERT 기반 0.5271. — [AHFE/CMS Conferences](https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68)
- KEMDy19 4-class(anger, happiness, neutral, sadness) 실시간 SER: 0.5초 세그먼트 처리 시 전체 발화 대비 UA −10.61%, 3.0초 세그먼트 −5.08%. — [AES Show 2024 poster](https://aesshow2024ny.sched.com/event/1kyKX/real-time-recognition-of-speech-emotion-for-human-robot-interaction)
- **AI Hub 감정 분류 대화 음성 데이터셋**으로 HuBERT 단일 음성 모델 학습 시 정확도 **0.8139**(4-class: 분노, 기쁨, 중립, 슬픔), LLaMa2 텍스트 모델과 융합 실험 포함 (2024 서강대 석사논문). — [서강대 dCollection](https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918)
- AI Hub 데이터 이용약관(공공데이터포털 게시): "AI허브에서 다운로드 받은 데이터로 학습하여 만들어진 AI모델과 서비스는 자유롭게 배포, 활용 가능 … 영리적으로 판매, 활용하는 행위는 제한하지 않으나 AI허브 데이터를 사용하였음을 명시하여야 함." 단, NIA·구축기업 사전협의 없는 데이터 재가공 배포는 원칙적 불가. — [data.go.kr 15146382](https://www.data.go.kr/data/15146382/fileData.do)
- 한국어 wav2vec 특징이 기존 음향 특징 대비 SVM/MLP에서 더 높은 WA/UA (2021 GIST). — [GIST scholar](https://scholar.gist.ac.kr/handle/local/21974)

**Paralinguistic feature 표준: eGeMAPS**
- Geneva Minimalistic Acoustic Parameter Set(GeMAPS)/eGeMAPS: Eyben et al., IEEE Trans. Affective Computing 2016. 음성 생성의 정서적 생리 변화와의 연관성, 선행연구 실적, 추출 용이성 기준으로 선정. openSMILE에 구현 포함. — [Eyben 2016 PDF](https://msp.utdallas.edu/publications/Eyben_2016.pdf)
- GeMAPS 23 LLD(F0, jitter, shimmer, formants 등) + functionals → eGeMAPS 총 **88 features**. — [arXiv 2210.14495](https://arxiv.org/pdf/2210.14495); LLD 수를 25로 기술한 자료도 있음 — [arXiv 2310.08338](https://arxiv.org/pdf/2310.08338)
- ShEMO 등 다수 SER 데이터셋 baseline이 openSMILE eGeMAPS + z-score 정규화 사용. — [arXiv 1906.01155](https://arxiv.org/pdf/1906.01155)

### Inferences
- 한국어 발화에서 emotion2vec+가 어느 정도 성능을 내는지는 **공개 수치가 없다**. 팀은 KEMDy20(자연 대화) 또는 AI Hub 데이터셋으로 emotion2vec+ / SenseVoice-S / Whisper-encoder 세 백본을 동일 프로토콜(4~7 class, speaker-independent, UA/WA)로 벤치마크해야 한다. 서강대 논문의 HuBERT 0.8139(4-class)를 1차 비교 기준으로 삼을 수 있다.
- 실시간 SER은 세그먼트 길이 trade-off가 명확하다(KEMDy19: 0.5초 −10.6%, 3초 −5.1%). 한벗은 발화 종료(turn end) 시점에 전체 발화 단위로 SER을 돌리고, 중간에는 eGeMAPS 기반 pitch/loudness/speech-rate/pause 지표만 경량 스트리밍 계산하는 2단 구조가 합리적이다.
- Omni-LLM(GPT-4o-audio, Qwen2.5-Omni)의 감정 인식은 MELD 0.49~0.50으로 전용 모델 대비 이점이 없고 비용이 높으므로, MVP에서는 "전용 SER + 텍스트 감정(LLM)" late fusion이 비용·성능 모두 유리하다.
- Hume EVI는 2026-11-13 API 종료가 공식 문서에 명시되어 있어 **MVP 의존 대상에서 제외**해야 한다. 벤치마크 참고용(prosody measure 설계)으로만 사용.
- ETRI 데이터셋은 라이선스 동의서 제출 절차가 필요하므로 상용 서비스 학습 사용 가능 여부를 ETRI에 직접 확인한 뒤 착수해야 한다. 학술 한정일 경우 AI Hub 데이터셋(상용 모델 허용, 출처 표기)이 대안.

### Gaps
- KEMDy20의 정확한 규모(총 시간, 발화 수), 클래스 불균형(neutral 비율), 그리고 범주형 SER 보고 정확도를 확인하지 못함 — ETRI 나눔터·KSP 서버 접속 실패(ECONNREFUSED).
- ETRI 데이터셋(KEMDy19/20, KESDy18)의 상업적 이용 허용 여부 — 라이선스 동의서 원문 미확보.
- AI Hub '감정 분류를 위한 대화 음성 데이터셋' 자체 스펙(시간, 발화 수, 화자 수, 라벨 체계)과 데이터셋별 세부 약관 — AI Hub 페이지 미확인.
- SenseVoice 모델 가중치 라이선스 — 논문 미명시, GitHub/ModelScope 모델 카드 확인 필요.
- emotion2vec+ 대형 모델의 공식 정확도 표(이미지로만 제공)와 한국어 성능.
- Hume EVI 공식 가격표(접근 불가, 서드파티 수치만 확보).

---

## 2. LLM 에이전트용 Long-term Memory: 프레임워크, 벤치마크, fact/inference 분리 및 user-editable 설계

### Takeaway
LoCoMo 기준 독립 논문 수치(Mem0 2025-04)는 Mem0 66.9 / Mem0-graph 68.4 / Zep 66.0 / LangMem 58.1 / A-Mem 48.4 / OpenAI memory 52.9 / full-context 72.9이고, 벤더 블로그의 90점대 수치는 grader·모델 변경으로 비교 불가하다. 소규모 팀에는 **Mem0(오픈소스, p95 1.44초, 쿼리당 ~1.8k 토큰)** 또는 Letta의 memory block 개념(human/persona 블록 + archival vector DB)이 가장 참고 가치가 높다. "사용자 진술 사실 vs AI 추론 감정" 분리와 사용자 열람·수정·삭제 UI에 대한 **학술적 디자인 패턴은 사실상 없고**, Letta의 블록 구조를 차용해 `user_stated` / `ai_inferred` 블록을 분리하고 삭제 API를 노출하는 자체 설계가 필요하다.

### Cited Findings

**벤치마크: LoCoMo / LongMemEval**
- LongMemEval(ICLR 2025): 500문항, 5가지 핵심 능력(information extraction, multi-session reasoning, temporal reasoning, knowledge updates, abstention). 상용 챗 어시스턴트·long-context LLM이 지속적 상호작용 기억에서 **30% 정확도 하락**. 개선 권고: session decomposition, fact-augmented key expansion, time-aware query expansion. — [arXiv 2410.10813](https://arxiv.org/abs/2410.10813)
- Mem0 논문(2025-04-28) LoCoMo 결과 — Overall LLM-as-a-Judge(J, %) / p95 total latency(s) / 쿼리당 컨텍스트 토큰:
  - Mem0 66.88±0.15 / 1.440 / 1,764
  - Mem0^g(graph) 68.44±0.17 / 2.590 / 3,616
  - Zep 65.99±0.16 / 2.926 / 3,911
  - A-Mem 48.38±0.15 / 4.374 / 2,520
  - LangMem 58.10±0.21 / 60.40 / 127
  - OpenAI memory 52.90±0.14 / 0.889 / 4,437
  - Full-context 72.90±0.19 / 17.117 / 26,031
  - RAG(best k=2, 256-token chunk) 60.97±0.20 / 1.907
  - 저장 토큰: Mem0 ~7k, Mem0^g ~14k, Zep >600k, 원본 대화 ~26k. Mem0는 full-context 대비 p95 지연 91% 감소, 토큰 비용 90% 이상 절감, OpenAI memory 대비 J 26% 상대 향상. — [arXiv 2504.19413 (HTML)](https://arxiv.org/html/2504.19413); [abstract](https://arxiv.org/abs/2504.19413)
- Zep/Graphiti 논문(2025-01-20): DMR 94.8% vs MemGPT 93.4%; LongMemEval에서 baseline 대비 최대 18.5% 정확도 향상, 응답 지연 90% 감소(절대값 미제시). — [arXiv 2501.13956](https://arxiv.org/abs/2501.13956)
- 벤더 자체 보고(비교 불가 주의): Mem0 연구 페이지(2026-05-20 갱신) LoCoMo 92.5, LongMemEval 94.4, BEAM 1M 64.1 / 10M 48.6; 이전 판은 91.6 / 93.4. — [mem0.ai/research](https://mem0.ai/research)
- Zep LoCoMo 수치 논란: Zep 2025 수치는 category 5 집계 방식 지적 후 75.14(10회 평균)로 정정; Zep 2026 claim 94.7은 gpt-5.4(reasoning)를 답변·채점 모델로 사용. 단일 제품 LoCoMo 점수가 측정자에 따라 58.44~94.7 범위. — [braindetox.kr](https://braindetox.kr/en/posts/memory_benchmark_scores_reliability_2026.html); [mem0 vs zep](https://mem0.ai/compare/mem0-vs-zep)
- Mem0 비교 페이지 인용 Zep LongMemEval(GPT-4o) 71.2; 다른 aggregator는 90.2 — 출처별 상이. — [mem0.ai zep vs mem0](https://mem0.ai/blog/zep-vs-mem0-which-ai-memory-layer-should-you-choose)

**프레임워크 구조**
- A-MEM(2025-02): Zettelkasten식 상호 연결 노트로 메모리 저장, LoCoMo에서 non-GPT 백본 기준 baseline 전부 상회(자체 보고). — [arXiv 2502.12110](https://arxiv.org/pdf/2502.12110)
- Letta(MemGPT) 메모리 계층: **core memory**(컨텍스트 내 read-write memory blocks, 기본 `human`/`persona` 블록), **archival memory**(vector DB 테이블), **recall memory**(대화 이력 로그). 에이전트가 `block_append / block_replace / block_read / block_summarize` 도구로 블록을 직접 편집. — [Letta docs: memory management](https://docs.letta.com/concepts/memory-management); [Letta MemGPT architecture](https://docs.letta.com/guides/agents/architectures/memgpt)
- 2026년 graph memory 논문의 LongMemEval 표(LLM judge)에서 LangMem이 A-MEM보다 대부분 열에서 우위 (백본 모델 라벨 모호). — [arXiv 2606.06036](https://arxiv.org/pdf/2606.06036)
- MemConflict(2026): A-MEM, LangMem, Letta를 메모리 충돌(모순 정보 갱신) 상황에서 함께 평가. — [arXiv 2605.20926](https://arxiv.org/pdf/2605.20926)
- "From Recall to Forgetting"(2026): 개인화 에이전트의 장기 기억을 **망각(forgetting)** 포함해 벤치마크. — [arXiv 2604.20006](https://arxiv.org/pdf/2604.20006)
- Memoria(2025-12): 개인화 대화 AI용 확장형 agentic memory 프레임워크. — [arXiv 2512.12686](https://arxiv.org/pdf/2512.12686)
- 서드파티 비교: Letta·LangMem 모두 LongMemEval 점수 "Not published". — [Keywords AI](https://keywordsai.co/market-map/compare/langmem-vs-letta)

### Inferences
- 한벗의 "동의 기반 메모리 + 열람/수정/삭제" 요구에 가장 가까운 기성 구조는 Letta의 memory block이다. 블록을 `user_stated_facts`(사용자가 명시적으로 말한 것, 출처 발화 ID 보관), `ai_inferred_affect`(SER/텍스트에서 추론한 정서, confidence·timestamp 포함), `persona`(대화 모드 선호)로 분리하고, 각 블록을 React UI에 그대로 렌더링해 사용자 편집을 받는 설계가 가능하다. 동일 아이디어를 Mem0의 `add/search/delete` API 위에 metadata 태그로 구현하는 것도 가능하다.
- LangMem의 쿼리당 127 토큰·p95 60초, A-Mem의 4.4초는 실시간 음성 대화에 부적합하다. 음성 turn 안에서 메모리 검색을 끝내려면 Mem0(1.44초) 수준도 빠듯하므로, 메모리 검색은 STT 종료와 병렬로 선행 실행하거나 세션 시작 시 prefetch해야 한다.
- 소규모 팀의 RAG는 Mem0 논문의 "k=2, 256-token chunk" 설정이 LoCoMo 60.97로 OpenAI memory(52.9)보다 높았다는 점에서, 단순 vector RAG도 적절히 튜닝하면 충분한 출발점이 된다.
- 감정 추론 메모리는 "망각"이 기능 요구다(From Recall to Forgetting 벤치마크 참고). 추론된 정서 항목에는 TTL/decay를 두고, 사실 항목은 사용자가 삭제할 때까지 유지하는 비대칭 정책이 합리적이다.

### Gaps
- "user-stated fact vs AI-inferred emotion 분리", "user-editable memory", "consent-based memory"를 직접 다룬 학술 논문·설계 패턴은 이번 조사에서 발견하지 못함. Letta/Mem0 문서도 최종 사용자 열람·동의·삭제 UX는 다루지 않음.
- Letta, LangMem의 공식 LongMemEval 점수 없음.
- LoCoMo 원 논문(Maharana et al. 2024) 및 LangMem 공식 문서는 직접 확인하지 않음.
- 한국어 대화 기준 장기 기억 벤치마크는 발견하지 못함.

---

## 3. 실시간 Voice Pipeline: cascaded(STT→LLM→TTS) vs speech-to-speech 지연·비용, 한국어 STT/TTS 옵션, 오케스트레이션 프레임워크

### Takeaway
스트리밍 cascade는 실측 time-to-first-audio **~750ms~950ms**(Deepgram+vLLM+ElevenLabs), speech-to-speech는 Moshi 200ms(L4), Qwen3-Omni 이론 234ms, DashScope Realtime 실측 702ms, Step-Audio-R1 Realtime 0.92s 수준이다. 한국어 STT는 벤더 벤치마크(ReturnZero 자체 실시) 기준 ReturnZero VITO CER 5.91% > Clova 7.52% > ETRI 10.19% > Whisper 11.39%이며, ReturnZero는 배치·스트리밍 모두 **1,000원/시간(첫 10시간 무료)**, OpenAI gpt-4o-mini-transcribe $0.003/min, gpt-realtime 오디오 $32/$64 per 1M tokens, Typecast TTS ≈ $0.07–0.09/1k 글자, ElevenLabs Flash $0.04/1k 글자다. 프레임워크(Pipecat vs LiveKit)는 지연 차이가 거의 없고 모델 선택과 turn detection이 지연을 결정한다.

### Cited Findings

**지연(latency) 실측치**
- Salesforce AI Research 튜토리얼(2026-03): Deepgram(streaming STT) + vLLM(function calling) + ElevenLabs(streaming TTS) cascade에서 time-to-first-audio **755ms 측정, best case 729ms**; Qwen3-Omni는 DashScope Realtime API(cloud) audio-to-audio ~702ms, 로컬 vLLM Thinker(텍스트만) 516ms, 로컬 Transformers 풀 파이프라인 ~146s. — [arXiv 2603.05413](https://arxiv.org/abs/2603.05413). 검색 스니펫은 같은 논문의 P50 TTFA를 947ms(best 729ms)로 인용 — 버전 차이로 추정. — [EmergentMind 2603.05413](https://www.emergentmind.com/papers/2603.05413)
- Moshi(Kyutai): 이론 지연 160ms(Mimi 80ms 프레임 + 80ms acoustic delay), **L4 GPU 실측 200ms**. 7B Temporal Transformer + Depth Transformer. Mimi: 24kHz → 12.5Hz, 1.1kbps, 80ms 프레임. 가중치 **CC-BY 4.0**, 코드 MIT(Python)/Apache(Rust). PyTorch 실행 시 24GB VRAM, macOS MLX 4/8-bit 양자화 지원. 지원 언어 미명시. — [GitHub kyutai-labs/moshi](https://github.com/kyutai-labs/moshi); [arXiv 2410.00037](https://arxiv.org/abs/2410.00037)
- Qwen3-Omni: cold-start 이론 end-to-end first-packet latency **234ms**; 음성 생성 10개 언어(한국어 포함); Apache 2.0. — [arXiv 2509.17765](https://arxiv.org/abs/2509.17765)
- Step-Audio-R1 Realtime: Big Bench Audio speech-to-speech 기준 first-packet latency 0.92s. — [arXiv 2511.15848](https://arxiv.org/pdf/2511.15848)
- GLM-4-Voice: "streaming thoughts" 템플릿으로 지연 감소 설계; e2e 지연은 speech tokenization + LLM + speech decoding 세 요소로 구성(측정값 미공개). — [TurnGuide arXiv 2508.07375](https://arxiv.org/pdf/2508.07375)
- 단계별 예산(2026 업계 글): STT 100–300ms, LLM TTFT 350–1000ms, 총 ~800ms 목표. — [morphllm](https://www.morphllm.com/voice-agent-api)
- Forasoft(벤더 블로그): speech-to-speech ~300ms, cascade는 +300–800ms; 지연은 오케스트레이션 레이어가 아니라 모델 선택이 결정. — [forasoft pipecat vs livekit](https://www.forasoft.com/blog/article/pipecat-vs-livekit-agents)
- LiveKit 공식: pipeline은 단계별 지연이 누적되지만 streaming으로 완화, realtime model은 단계 통합으로 baseline 지연이 더 낮음. — [LiveKit docs pipelines](https://docs.livekit.io/agents/models/pipelines/)
- LiveKit 커뮤니티 사례: ASR ~100ms, LLM ~500ms, TTS ~200ms인데 발화 종료→첫 오디오 3–4초 — turn detection/buffering 원인 추정(단일 사례). — [LiveKit community](https://community.livekit.io/t/high-end-to-end-latency-asr-llm-tts-total-1s-but-speech-end-to-reply-takes-3-4s-livekit-agents/1277)
- Realtime API GA: 2025-08-28; 당시 cached 가격 text $2.50/1M, audio $20/1M. — [OpenAI introducing the Realtime API](https://openai.com/index/introducing-the-realtime-api/)
- gpt-realtime-2.1 / 2.1-mini 2026-07-06 출시, Realtime 음성 모델 p95 지연 25% 이상 감소(단일 2차 출처). — [mer.vin](https://mer.vin/2026/07/gpt-realtime-2-1-api-reasoning-voice-agents-and-mini-pricing/)

**OpenAI 공식 가격(2026-10 확인, per 1M tokens)**
- gpt-realtime: audio in $32 / out $64 / cached $0.40; text in $4 / out $16.
- gpt-realtime-mini: audio $10 / $20 / cached $0.30; text $0.60 / $2.40.
- gpt-realtime-2, gpt-realtime-2.1: audio $32 / $64 / cached $0.40; text $4 / $24. gpt-realtime-2.1-mini: audio $10 / $20.
- gpt-audio: audio $32 / $64; text $2.50 / $10.
- STT: gpt-4o-transcribe $0.006/min, gpt-4o-mini-transcribe $0.003/min, whisper-1 $0.006/min.
- TTS: gpt-4o-mini-tts text in $0.60/1M, audio out $12/1M. — [developers.openai.com pricing](https://developers.openai.com/api/docs/pricing)

**Gemini Live(서드파티 집계, 출처 간 불일치)**
- gemini-live-2.5-flash-preview-native-audio-09-2025: $0.30/1M in, $2.00/1M out(Gemini API), cached $0.075; Vertex AI는 $0.50 in으로 표기한 곳도 있음. 구형 Live 2.5 Flash native audio는 audio websocket in $3 / out $12 per 1M로 표기. 한국어 별도 요금 없음. — [getmaxim](https://www.getmaxim.ai/bifrost/llm-cost-calculator/provider/gemini/model/gemini-live-2.5-flash-preview-native-audio-09-2025); [cloudprice](https://cloudprice.net/models/gemini-live-2.5-flash-native-audio)

**한국어 STT 정확도(CER %, 낮을수록 좋음; 각 3,000문장 샘플, AI Hub 데이터; ReturnZero 자체 실시 → 벤더 편향 주의)**
- 평균: ReturnZero VITO **5.91**, ReturnZero Whisper(fine-tuned) 6.59, Naver ClovaSpeech 7.52, ETRI 10.19, Azure batch 10.88, AWS Transcribe 11.11, OpenAI Whisper 11.39, Google v2 11.50, Gemini 2.0 flash 16.58, Deepgram nova-2 21.02.
- 콜센터 도메인: VITO 3.51, Clova 4.91, Whisper 7.51. 저품질 전화: VITO 4.40, RTZR Whisper 4.26, Clova 6.49, Whisper 17.27. KsponSpeech eval clean: VITO 6.64, Clova 8.05, Whisper 12.06. 평가 일자 미기재. — [GitHub rtzr/Awesome-Korean-Speech-Recognition](https://github.com/rtzr/Awesome-Korean-Speech-Recognition)
- Whisper-large-v3 zero-shot 한국어 CER 5.72%(FLEURS+Common Voice), fine-tuned 모델 4.61% (벤더 모델 카드). — [HF BuzzASR/korean](https://huggingface.co/BuzzASR/korean)
- Whisper large-v3는 large-v2 대비 10–20% 오류 감소(공식 모델 카드 인용). — [friendli whisper-large-v3](https://friendli.ai/models/openai/whisper-large-v3)
- 한국어 기상 도메인 ASR 평가(2024)는 Whisper large-v2까지만 평가, CER + space-normalized WER 사용. — [arXiv 2410.18444](https://arxiv.org/pdf/2410.18444)

**한국어 STT 가격**
- ReturnZero(RTZR) Basic: Batch·Streaming 모두 **1,000 KRW/시간**, 최대 400원/시간 할인, **첫 10시간 무료**, 동시 10채널; Enterprise Cloud(최대 300원/시간 추가 할인, 견적)·On-Prem(견적); 10,000시간+ 또는 실시간 100채널+는 영업 문의. 무료 10시간 초과 시 자동 중단. 실시간 스트리밍, 화자분리, 키워드 부스팅 지원. — [rtzr.ai/pricing](https://rtzr.ai/pricing); [developers.rtzr.ai](https://developers.rtzr.ai/)
- 과거 보도: VITO 개발자 사이트 공개 당시 월 1,000시간 무료(현재 요금표와 상이). — [venturesquare](https://www.venturesquare.net/863579/)
- CLOVA Speech: 단문/장문/스트리밍 인식, 키워드 부스팅, Papago 연동 번역; 한국 리전 Classic/VPC. 요금은 별도 "사용 준비" 페이지(미확인). — [guide.ncloud-docs clovaspeech-overview](https://guide.ncloud-docs.com/docs/ko/clovaspeech-overview); 제품 페이지는 "국내 가장 높은 수준의 한국어 인식률" 주장. — [ncloud CLOVA Speech](https://www.ncloud.com/product/aiService/clovaSpeech)

**한국어 TTS 가격·특성**
- ElevenLabs API(1k 글자당): v3 $0.08, v3 Conversational $0.04, v2 Multilingual $0.08, Flash/Turbo $0.04(지연 ~75ms), v4 $0.08, v4 Turbo $0.04. 플랜: Free 10k, Starter $6/75k, Creator $22/275k, Pro $99/1.238M, Scale $299/3.738M, Business $990/12.375M 글자. STT Scribe v2 $0.22/hr, Scribe v2 Realtime $0.39/hr. Agents(Speech Engine) $0.08/min. 언어 수만 표기(v4 90+, v3 70+, Flash 32, v2 29) — 한국어 명시 없음(별도 문서 확인 필요). — [elevenlabs.io/pricing/api](https://elevenlabs.io/pricing/api)
- Typecast API: 1 credit = 1 글자. Free 30k credits/월(동시 2); Lite $15/월 200k($0.075/1k, 초과 $0.09/1k); Plus $280/월 4M($0.07/1k, 초과 $0.08/1k); Enterprise 별도. — [typecast.ai/pricing/api](https://typecast.ai/pricing/api/)
- Supertone Play(소비자 플랜에 API 접근 포함): Free 3,000 credits, Starter $2.99/월 20,000, Creator $10.49/월 100,000; API 분당 20회 호출 제한. 기업용 API 단가표 미공개. — [supertone.ai/ko/play](https://www.supertone.ai/ko/play); 비교 사이트도 "Pricing not disclosed". — [neuronfeed](https://neuronfeed.com/compare/supertone-vs-typecast)
- CLOVA Voice: 100가지 음성 옵션, 한국어·영어·일본어·중국어·스페인어, 볼륨·속도·피치·감정 조절. 요금은 제품 페이지 "요금 소개"(미확인). — [guide.ncloud-docs clovavoice-overview](https://guide.ncloud-docs.com/docs/ko/clovavoice-overview)
- 한국어 TTS 품질 비교는 벤더 글(Typecast가 한국어 더 자연스럽다는 주장)과 블로그 의견만 존재 — [typecast.ai learn](https://typecast.ai/learn/?p=13109)
- Ko-TTS-Arena(HF Space, channelcorp)가 한국어 TTS 블라인드 비교 코드를 공개. — [HF Ko-TTS-Arena](https://huggingface.co/spaces/channelcorp/Ko-TTS-Arena/blob/refs%2Fpr%2F1/tts.py)

### Inferences
- **MVP 추천 1차 구성**: 브라우저(React, WebRTC/WebSocket) → ReturnZero 스트리밍 STT(1,000원/h, 첫 10h 무료; CER 최저) 또는 gpt-4o-mini-transcribe($0.003/min ≈ 4원/min ≈ 240원/h) → Claude API(스트리밍) → Typecast/ElevenLabs Flash 스트리밍 TTS. 예상 TTFA 0.75–1.0초(Salesforce 실측과 동일 구조). 비용 추정: 1분 대화에 STT ~17원(RTZR) + TTS 응답 300글자 ≈ $0.012–0.027(ElevenLabs Flash/Typecast) + LLM 토큰.
- **speech-to-speech 대안**: gpt-realtime-mini(audio $10/$20 per 1M)는 서버 복잡도를 크게 줄이지만 SER 신호를 자체 제어하기 어렵고(모델 내부), 메모리/모드 제어는 text instruction으로만 가능. 한벗의 "paralinguistic cue를 명시적으로 분석·저장"하는 요구에는 cascade가 더 적합하다. Qwen3-Omni(Apache 2.0, 한국어 음성 출력)는 vLLM 경험이 있는 팀이 자체 호스팅 S2S를 실험할 유일한 open 후보이나 30B-A3B 서빙 GPU가 필요하다. Moshi는 영어 중심(언어 미명시)이라 한국어 MVP엔 부적합.
- 지연 병목은 LLM TTFT(350–1000ms)와 turn detection이다. Claude 응답은 첫 문장 단위로 TTS에 흘려보내는 sentence-chunk streaming이 필수이며, SER 결과는 LLM 호출 전에 준비돼야 하므로 SER 추론을 STT 스트리밍과 병렬 실행해야 한다(SenseVoice-S 70ms/10초면 병렬화 시 추가 지연 거의 없음).
- Pipecat/LiveKit 선택은 지연이 아니라 팀 숙련도·배포 편의 기준으로 결정하면 된다(여러 출처가 모델이 지연을 결정한다고 일치).

### Gaps
- Naver CLOVA Speech / CLOVA Voice의 공식 단가(원/15초, 원/1,000글자) — 공식 문서 페이지에서 요금 섹션 미확보.
- Daglo(다글로) API 요금·정확도 — 검색 결과 없음.
- Pipecat의 실측 지연 수치 — 발견 못함(LiveKit는 공식 문서·커뮤니티 사례만).
- GLM-4-Voice, Step-Audio(원본), Step-Audio 2의 실측 지연·한국어 지원·라이선스 — 미확인.
- Gemini Live API 공식 가격(aggregator 간 불일치), 한국어 음성 품질.
- ElevenLabs 한국어 공식 지원 여부(언어 수만 확인).
- gpt-realtime 공식 지연 수치 — OpenAI 공식 수치 없음(서드파티 ~300ms 주장).
- rtzr 벤치마크의 평가 일자와 각 서비스 모델 버전.

---

## 4. 대화 품질·공감(Empathy): empathetic dialogue 생성 연구, reflective listening / Motivational Interviewing 프롬프팅, 평가 벤치마크, LLM 공감 평가 증거

### Takeaway
LLM 응답은 블라인드 평가에서 반복적으로 인간보다 더 공감적으로 평가된다(Ayers 2023: 585건 중 78.6% 챗봇 선호; Lee 2024 N=192/202; CoNLL 2026 평가자 1,000명). 그러나 (a) AI가 작성했다고 알리면 "들어줬다"는 느낌이 감소하고, (b) 응답이 담화 기능 수준에서 정형화(templatic)되어 있으며, (c) ESConv 기반 평가에서 LLM은 지지 전략 선택에 편향이 있어 "LLM 단독으로는 좋은 emotional supporter가 아니다"(Kang et al., ACL 2024). MI reflection 생성은 GPT-4가 인간 상담사 수준으로 평가되므로, 한벗의 "그냥 들어주기 / 조언 / 정리" 모드는 ESConv의 전략 분류(reflection, affirmation, suggestion 등)와 MI reflection 프롬프트를 모드별로 고정하는 방식으로 구현할 수 있다.

### Cited Findings

**LLM 공감 평가 증거**
- Ayers et al., JAMA Internal Medicine 2023-04-28: r/AskDocs 195개 질문, 의사 vs ChatGPT 응답을 의료 전문가가 블라인드 3중 평가(585건). 챗봇 선호 **78.6%**(95% CI 75.0–81.8). 응답 길이 중앙값 의사 52단어 vs 챗봇 211단어. 보도에 따르면 "empathetic/very empathetic" 비율 챗봇이 9.8배(원문 수치 직접 확인 못 함). 한계: 포럼 질문이 일반 진료 질문과 다를 수 있음. — [physiciansweekly](https://www.physiciansweekly.com/chatbot-generates-quality-empathetic-responses-to-patient-questions/); [healio](https://www.healio.com/news/primary-care/20230518/chatgpt-offers-highquality-empathetic-responses-to-patient-messages)
- Lee et al.(ACII 2024, Microsoft Research): GPT-4 Turbo, Llama2, Mistral 응답을 인간 평가자(N=192, N=202 두 연구)가 평가 → LLM 응답이 인간 작성 응답보다 **일관되게 더 공감적**으로 평가. — [arXiv 2403.18148](https://arxiv.org/pdf/2403.18148)
- CoNLL 2026: 인간 평가자 1,000명 대상, LLM 응답이 감정·평가자 전반에서 유의하게 더 공감적; 인간 평가자와 LLM-as-judge 모두 자기 그룹 응답을 더 호의적으로 평가(in-group bias). — [ACL Anthology 2026.conll-main.21](https://aclanthology.org/2026.conll-main.21/)
- 반론 1: LLM 공감 응답은 담화 기능 수준에서 고도로 정형화(formulaic/templatic)되어 있음(UT Austin 2026 preprint). — [alphaxiv 2604.08479](https://www.alphaxiv.org/abs/2604.08479.md)
- 반론 2: Wenger et al.(Communications Psychology, 2026-01 보도) 4개 연구에서 참가자는 인간의 공감 응답을 57–62% 선택(선호 연구, 블라인드 품질 평가 아님) — 2차 출처. — [michaelinzlicht.com](https://michaelinzlicht.com/news-for-front/2026/4/23/the-ai-empathy-paradox-customers-reject-the-help-they-say-they-prefer)
- 반론 3: 응답이 AI 작성으로 귀속되면 인간 귀속 대비 "heard/validated" 느낌 감소. — [arXiv 2506.10150](https://arxiv.org/html/2506.10150v2)

**ESConv 기반 emotional support 연구·평가**
- Kang et al.(ACL 2024): ESConv에서 LLM은 적절한 지지 전략 선택에 어려움, 특정 전략에 강한 선호 편향 → "외부 도움 없는 LLM 단독은 좋은 emotional supporter가 아님". — [arXiv 2402.13211](https://arxiv.org/abs/2402.13211v2)
- ESC-Eval(2024): LLM 기반 emotional support 시스템 평가 프레임워크. — [arXiv 2406.14952](https://www.arxiv.org/pdf/2406.14952)
- FEEL(2024): LLM-as-judge로 emotional support 품질 평가, 기존 자동 지표는 인간 판단과 상관 낮음. — [arXiv 2403.15699](https://arxiv.org/pdf/2403.15699v1)
- 2025: 표준 ESC task 정의의 결함(대화 이력 마지막 발화가 supporter가 아닐 수 있음) 지적, 과제 재정의 제안. — [arXiv 2505.15316](https://arxiv.org/pdf/2505.15316.pdf)
- HEART(2026-02): ESConv 파생 multi-turn 대화에서 인간 vs LLM을 empathic responsiveness 포함 5축으로 비교하는 통합 벤치마크. — [arXiv 2601.19922](https://arxiv.org/pdf/2601.19922)
- ESC-Skills(2026-05): ESConv test 100개에서 GPT-Judge·인간 평가(empathy, helpfulness)로 self-evolving 스킬 평가. — [arXiv 2605.27908](https://arxiv.org/pdf/2605.27908)

**Motivational Interviewing(MI) / reflective listening 프롬프팅**
- Başar et al.(ACL 2024 HuCLLM 워크숍): GPT-4, BLOOM, FLAN-T5로 MI reflection 생성(금연·성건강 챗봇 실데이터). 4기준(appropriateness, specificity, naturalness, engagement) 평가 + 인간 작성 reflection과 ranking 비교 → **GPT-4 reflection은 인간 작성과 동등 품질**. DOI 10.18653/v1/2024.hucllm-1.4. — [ACL Anthology 2024.hucllm-1.4](https://aclanthology.org/2024.hucllm-1.4.pdf)
- COLING 2025 후속("How Well Can Large Language Models Reflect?"): GPT-4, Llama-2, BLOOM; 대화 컨텍스트 길이와 MI 전략 통합 효과 탐색 → 인간 치료사 수준 가능성 있으나 내용 분석상 과제 잔존. — [UvA pure 2025.coling-main.135](https://pure.uva.nl/ws/files/267190166/2025.coling-main.135.pdf)
- Xie et al.(ACL Findings 2024): 전문가 시연으로부터 natural-language inductive rule로 MI 대화 전략을 few-shot 학습. — [sotaro.io MI papers](https://gengo.sotaro.io/ner/Motivational%20Interviewing)

### Inferences
- 한벗의 3가지 모드는 ESConv 지지 전략 체계로 매핑할 수 있다: "그냥 들어주기" = reflection/restatement/affirmation 중심(MI reflection 프롬프트 고정, 조언 금지), "조언" = providing suggestions/information 허용, "정리" = restatement + summarization. Kang et al.의 발견(전략 선택 편향)을 고려해 **전략을 모델 자율에 맡기지 말고 모드로 고정**하는 것이 품질과 예측 가능성 모두에 유리하다.
- 공감 평가는 자동 지표(BLEU 등) 대신 FEEL/ESC-Eval 방식의 LLM-as-judge + 소규모 인간 평가(appropriateness, specificity, naturalness, engagement 4기준)를 MVP 평가 프로토콜로 채택하면 된다. 단, CoNLL 2026의 in-group bias(LLM judge가 LLM 응답 편애)를 감안해 인간 평가를 반드시 병행.
- 정형화 비판에 대응하려면 SER·메모리에서 가져온 **구체적 맥락(specificity)** 을 응답에 주입하는 것이 핵심 차별점이 된다. "AI 귀속 시 heard 느낌 감소" 연구는 한벗이 AI임을 숨기지 않는 이상 감수해야 할 구조적 한계로, 과장된 인간 흉내 대신 투명성을 유지하는 편이 안전(5절 참조).

### Gaps
- EmpatheticDialogues(Rashkin 2019), ESConv 원 논문(Liu 2021)의 데이터셋 규모·메트릭 원문은 이번 세션에서 직접 확인하지 않음(인용 논문들이 ESConv를 벤치마크로 사용한다는 사실만 확인).
- 한국어 empathetic dialogue 데이터셋/벤치마크(AI Hub 감성 대화 말뭉치 외)는 발견하지 못함. 한국어 LLM 공감 평가 연구도 미발견.
- Ayers 2023의 공감 9.8배 수치는 원문 아닌 보도 인용.
- Communications Psychology Wenger et al. 원문 미확인(블로그 인용).

---

## 5. Safety: 위기(자살 위험) 탐지 접근·데이터셋, guardrail, 한국 109 연계, 2024–2026 companion chatbot 안전 연구

### Takeaway
2025–2026 연구는 일관되게 **companion 앱(Character.AI, Replika)이 범용 frontier LLM보다 위기 상황에서 훨씬 더 해롭다**(MIRROR-Eval: trial당 유해 행동 15.1 vs 5.0)고 보고하며, 29편 체계적 문헌고찰은 "위험 평가 부실, 위기 자원 연계 지연, jailbreak 탐지 실패"를 공통 문제로 든다. 암시적(implicit) 자살 사고 탐지는 현 LLM이 취약(DeepSuiMind 1,200+ 케이스)하지만 명시적 위기 핫라인 전사 기준 F1 0.88~0.91(PsyCrisisBench)은 달성 가능하다. 한국은 2026-07 「자살 긴급대응 강화방안」에서 109 상담 인력 200명 확대·AI 상담 지원·플랫폼 위험 키워드 검색 시 109 안내 노출을 추진 중이며, 민간 AI 챗봇-109 연계 공식 가이드라인은 아직 없다. MIT/OpenAI RCT(N=981, 28일)는 사용량 증가가 외로움·의존·사회화 감소와 상관됨을 보였다.

### Cited Findings

**Companion chatbot 안전 평가**
- MIRROR-Eval(NeurIPS 2026, preprint): multi-turn 위기 대화에서 companion 앱 vs 범용 LLM 평가. Character.AI·Replika 최고 위해 티어, GPT-5.5·Claude Sonnet 5 최저 위해 티어. 3티어 위해 구조; **companion 앱 trial당 평균 15.1개 유해 행동 vs 범용 LLM 5.0**. — [NeurIPS 2026 virtual 177275](https://neurips.cc/virtual/2026/177275)
- 체계적 문헌고찰(29편, 2025-12 cutoff): 독점 frontier 모델(ChatGPT, Claude)이 오픈소스(LlaMA, DeepSeek)·companion(Replika, Character.AI)보다 자살·자해 위험 응답 품질 높음. 공통 문제: poor risk assessment, delays in referrals to crisis resources and human-delivered support, difficulty detecting jailbreaking attempts. — [JMIR preprint 103517](https://preprints.jmir.org/preprint/103517)
- Psychiatric Services(2025-08): ChatGPT·Gemini·Claude는 최고 위험 질문엔 응답 회피하나 중간 위험 프롬프트엔 비일관적; multi-turn 미평가 한계. 같은 시기 ChatGPT 관련 청소년 사망 소송 보도. — [Live5News 2025-08-27](https://www.live5news.com/2025/08/27/study-says-ai-chatbots-need-fix-suicide-response-family-sues-over-chatgpt-role-boys-death); [PMC12391427](https://pmc.ncbi.nlm.nih.gov/articles/PMC12391427)
- Scientific Reports(2025-08): 29개 AI 챗봇 에이전트에 모의 자살 시나리오 → 인간 전문가/응급 연계 여부 평가. — [PMC12391427](https://pmc.ncbi.nlm.nih.gov/articles/PMC12391427)
- FTC가 2025년 AI companion chatbot의 아동·청소년 안전 관행 조사 개시; 챗봇은 미묘한 정신건강 신호 포착에 취약(Axios 2026-05-12). — [Axios](https://axios.com/2026/05/12/ai-chatbots-mental-health-cues)
- IWSDS 2025: 자살 위험자 지원 대화 에이전트 설계 논문. — [ACL Anthology 2025.iwsds-1.13](https://preview.aclanthology.org/setup/2025.iwsds-1.13)

**정서적 의존·외로움**
- MIT Media Lab × OpenAI(2025-03): 4주 RCT, 참가자 981명, 일 5분 이상 28일 사용; OpenAI 측은 약 4,000만 상호작용 분석 + 4,076명 설문. "모든 modality·대화 유형에서 일일 사용량이 높을수록 외로움, 의존, 문제적 사용 증가, 사회화 감소"와 상관(상관관계, 인과 불명). — [Fortune 2025-03-24](https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab); [HPCwire](https://www.hpcwire.com/aiwire/2025/03/26/twin-studies-warn-of-harmful-emotional-and-social-impacts-of-chatgpt/)
- Frontiers in Medicine 논평: 해당 RCT 결과는 복합적이고 해석이 어려움. — [Frontiers 2025.1612838](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1612838/full)
- 반대 증거(미검증 2차): De Freitas et al., J. Consumer Research 2026 — AI companion 대화가 순간적 외로움을 사람과의 대화 수준으로 감소. — [cave.co.nl](https://cave.co.nl/blog/do-ai-companions-help-with-loneliness/)

**자살 위험 탐지 데이터셋·벤치마크**
- DeepSuiMind(2025): 심리 이론 기반 1,200+ 테스트 케이스로 **암시적(implicit) 자살 사고** 탐지 평가 → 현 모델들이 탐지와 적절한 지원에 크게 취약. — [arXiv 2502.17899](https://arxiv.org/abs/2502.17899v1)
- PsyCrisisBench(2025): 항저우 심리지원 핫라인 전사 540건, 64개 LLM(15 모델 패밀리) 평가. 자살 사고 탐지 F1 **0.880**, 위험 평가 F1 **0.907**, 자살 계획 식별 과제 포함. — [arXiv 2506.01329](https://arxiv.org/abs/2506.01329v2)
- SOS-HL-1K(2023): 중국 SNS 1,249 포스트 고/저 자살 위험; fine-tuned LLM이 성능 크게 향상. — [arXiv 2309.03564](https://arxiv.org/pdf/2309.03564)
- 유해 자살 콘텐츠 탐지 벤치마크(JMIR Med Inform 2026, LLM-guided sampling, 전문가 주석). — [JMIR preprint 73725](https://preprints.jmir.org/preprint/73725/accepted)
- VERA-MH(2026): 오픈소스 챗봇 자살 위험 탐지·응답 안전성 평가 도구의 인간 검증 연구(JMIR AI). — [arXiv 2602.05088](https://arxiv.org/pdf/2602.05088)

**한국 109 및 정책 동향**
- 2026-07-28 보건복지부 관계부처 합동 「자살 긴급대응 강화방안」: '위기포착-출동·초동대응-안정·치료-퇴원 후 밀착관리-일상회복' 5단계; 109 상담 인력 **103명→200명**; AI 활용 상담 지원·민간 상담기관 연계 확대; '자살·자해' 위험 키워드 검색 이용자에게 109 안내·공익광고 노출을 플랫폼과 협의. — [뉴시스 2026-07-28](https://www.newsis.com/view/NISX20260728_0003726203); [데일리안](https://www.dailian.co.kr/news/view/1671726/)
- 2025-10 109 제2센터 개소: AI 활용 상담일지 작성·위기 신호 조기 발굴 추진, 상담 정원 총 140명. — [헤럴드경제 2025-10-22](https://www.heraldk.com/article/2025102222153330814)
- 구글·오픈AI는 관련 질문 감지 시 예방 상담전화 안내 또는 대화 중단 세이프가드 적용(국내 보도). — [노컷뉴스](https://www.nocutnews.co.kr/news/6483401)
- 109 상담사 2배 확대 보도(영문). — [아시아경제 2026-05-31](https://view.asiae.co.kr/en/article/2026053100423567809)

### Inferences
- 한벗은 "AI companion" 카테고리로 분류되므로 MIRROR-Eval·체계적 고찰이 지적한 companion 앱의 전형적 실패(위기 자원 연계 지연, 다중 턴 지속 시 안전 저하, 과도한 정서적 밀착)를 설계 단계에서 명시적으로 차단해야 한다. 실천적으로: (1) 매 턴 텍스트+SER 기반 2단 위험 분류기(명시적 키워드/의도 → 즉시 109 안내 + 모드 강제 전환; 암시적 신호 → 누적 점수), (2) multi-turn 평가(단일 프롬프트 평가만으로는 부족), (3) jailbreak/역할놀이 요청에도 안전 규칙 유지.
- 벤치마크 가용성: 한국어 자살 위험 데이터셋은 발견되지 않았으므로 PsyCrisisBench(중국어 핫라인)·DeepSuiMind(영어) 케이스를 번역·현지화하거나 전문가(정신건강 전공) 자문으로 소규모 한국어 테스트 세트(100~300 케이스)를 자체 구축해야 한다. VERA-MH 같은 오픈소스 평가 하네스를 한국어로 포팅하는 것도 선택지.
- MIT/OpenAI 결과에 따라 사용 시간·빈도 모니터링과 "오프라인 관계로 연결" 유도(nudge), 일일 사용량 상한/휴식 제안 같은 의존 완화 기능을 MVP 범위에 포함할 근거가 있다.
- 109 연계는 공식 API/가이드라인이 없으므로 MVP는 "109 번호·문자 안내 + 지역 정신건강복지센터 안내" 수준으로 구현하고, 정부가 추진 중인 플랫폼 협의(위험 키워드 → 109 노출)의 흐름을 따라가는 것이 현실적이다.

### Gaps
- Llama Guard, NeMo Guardrails 등 guardrail 프레임워크의 self-harm 카테고리 성능 비교 — 검색 결과 없음.
- CLPsych shared task 데이터 및 Reddit 기반 영어 자살 위험 데이터셋(예: UMD Reddit Suicidality) — 이번 조사에서 미확인.
- 한국어 자살 위험 탐지 데이터셋·논문 — 미발견.
- Stanford HAI/Stanford 연구진의 companion 관련 연구 — 검색에서 식별 실패(MIT/OpenAI 연구만 확인).
- 민간 AI 챗봇의 109 연계에 관한 보건복지부/한국생명존중희망재단 공식 가이드라인 — 존재 확인 못함.
- MIRROR-Eval, 체계적 고찰 모두 preprint 단계.

---

## 6. Privacy: on-device vs cloud, 한국 개인정보보호법상 음성·민감정보 규율, 가명처리, PIPC 생성형 AI 안내서

### Takeaway
한국법상 음성 자체는 자동으로 민감정보가 아니며, 「개인정보 보호법 시행령」 제18조 제3호의 생체인식정보는 "신체적·생리적·행동적 특징 + **특정 개인을 알아볼 목적** + 기술적 수단 생성" 3요건을 충족할 때만 해당한다(화자 식별을 하지 않으면 생체인식정보 아님). 반면 법 제23조 민감정보에 "건강"이 포함되고 해설상 정신적 건강상태가 건강정보에 들어가므로, 한벗이 생성하는 **정서·정신건강 추론 정보는 민감정보로 취급될 위험이 크다** → 별도 동의·암호화·분리 보관이 안전한 설계다. PIPC 「생성형 AI 개발·활용을 위한 개인정보 처리 안내서」(2025-08-06)는 4단계 생애주기·3개 개발 방식별 기준, 프롬프트 학습 시 (관련성·예측가능성·옵트아웃) 종합 판단, CPO 초기 참여, PET(가명·익명처리), 처리방침 공개·옵트아웃 제공을 요구한다. on-device SER은 SenseVoice-S(234M, 70ms) 수준은 가능하나 S2S LLM(Moshi 24GB VRAM)은 서버 필요.

### Cited Findings

**법령: 민감정보·생체인식정보**
- 「개인정보 보호법」 제23조 제1항: "사상ㆍ신념, 노동조합ㆍ정당의 가입ㆍ탈퇴, 정치적 견해, **건강**, 성생활 등에 관한 정보, 그 밖에 정보주체의 사생활을 현저히 침해할 우려가 있는 개인정보로서 대통령령으로 정하는 정보"를 민감정보로 정의하고 원칙적 처리 금지(별도 동의 등 예외). — [nepla 법령 wiki](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p)
- 시행령 제18조(민감정보의 범위): 1호 유전정보, 2호 범죄경력자료, **3호 "개인의 신체적, 생리적, 행동적 특징에 관한 정보로서 특정 개인을 알아볼 목적으로 일정한 기술적 수단을 통해 생성한 정보"**(생체인식정보), 4호 인종·민족 정보. 해설: 3호는 (1) 신체적·생리적·행동적 특징, (2) 특정 개인 식별·인증 목적, (3) 기술적 수단 생성의 3요건. **음성은 생체인식정보의 예시로 열거되나 3요건 충족 시에만 해당.** 건강정보 해설: 과거·현재 병력, 신체적·정신적 장애 유무·종류·등급, 건강상태 등. — [nepla 법령 wiki](https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p)
- 2020 데이터3법 시행령: 생체인식정보(지문·홍채·안면 등)를 민감정보로 분류, 처리에 정보주체 동의 필요; 가명정보 결합은 지정 전문기관에서, 추가정보 분리 보관·접근권한 분리 등 안전조치, 반출 시 전문기관 평가·승인. — [바이라인네트워크 2020](https://byline.network/2020/03/307/)
- 생체정보를 법 제23조에 명시적으로 포함하는 개정안 발의(통과 여부 미확인). — [대륜 뉴스레터](https://www.daeryunlaw.com/newsletter/news/155)

**PIPC 「생체정보 보호 가이드라인」(2021-09-08 개정)**
- '바이오정보'→'생체정보' 용어 변경, 생체정보 중 특정 개인 인증·식별 목적으로 처리되는 것이 '생체인식정보'. 인증(기기 내 대조) vs 식별(DB 대조) 구분; **식별 예시로 "여러 가족 구성원 음성 중 지금 말하는 사람을 확인해 대답하는 AI 스피커"**. 처리 5단계별 15개 보호조치. 원본정보(변경 불가, 유출 시 복구 어려움)와 특징정보 구분; 특징정보 암호화 저장, 원본을 특징정보 생성 후 보관 시 다른 개인정보와 분리 보관. — [보안뉴스 가이드라인-1](https://m.boannews.com/html/detail.html?idx=103846); [보안뉴스 생체정보](https://m.boannews.com/html/detail.html?idx=102064); [서울신문 2021-09-09](https://m.go.seoul.co.kr/news/2021/09/09/20210909011007)

**PIPC 「생성형 AI 개발·활용을 위한 개인정보 처리 안내서」(2025-08-06)**
- 생애주기 4단계: ① 목적 설정(처리 개인정보 범위·목적 명확화) ② 전략 수립(개발 방식별 보호 전략) ③ AI 학습·개발(데이터 출처·적법성 검토, PET 활용) ④ 시스템 적용·관리(배포 전 점검·테스트, 배포 후 처리방침 공개·옵트아웃 제공). 개발 방식 3종: 서비스형 LLM 활용, 기성 LLM 활용, 자체 개발 LLM. — [바이라인네트워크 2025-08](https://byline.network/2025/08/6-277/)
- 이용자 프롬프트를 학습에 사용할 경우 "LLM 성능 개선과의 관련성, 이용자의 예측 가능성, 옵트아웃 기회 제공 여부"를 종합하여 적법성 판단. — [다음(연합) 2025-08-06](https://v.daum.net/v/20250806130146966); [바이라인네트워크](https://byline.network/2025/08/6-277/)
- AI 프라이버시 거버넌스: **CPO의 기획 초기 단계 참여**, 내부 감사 로그 관리; 안전조치로 전처리·가명처리·익명처리 등 PET, 외부 API 사용 시 라이선스·약관으로 안전성 확보, 배포 전 위협 점검. — [디지털데일리 2025-08-06](https://www.ddaily.co.kr/page/view/2025080611120338544); [바이라인네트워크](https://byline.network/2025/08/6-277/)
- 2025-07-08 민·관 정책협의회에서 AI 가드레일 구축 논의. — [보안뉴스](https://m.boannews.com/html/detail.html?idx=138045)
- 2026-05 PIPC, 이용자용 '생성형 AI 개인정보 보호 가이드' 책자(학습 활용 여부, 기록 삭제 등) 발간. — [다음 2026-05-19](https://v.daum.net/v/20260519222300715)
- PIPC 2024 보호법 해석 사례집, 질의응답 모음집 개정본 발간(건강정보 사례 포함). — [세종 뉴스레터 2510](https://shinkim.com/kor/media/newsletter/2510); [3064](https://www.shinkim.com/kor/media/newsletter/3064)

**On-device 가능성(기술 측)**
- SenseVoice-Small 234M, 10초 오디오 70ms — 모바일/엣지 추론 가능 규모. — [arXiv 2407.04051](https://arxiv.org/html/2407.04051)
- emotion2vec+ base ~90M(MIT). — [GitHub emotion2vec](https://github.com/ddlBoJack/emotion2vec)
- Moshi(7B) PyTorch 24GB VRAM, MLX 4/8-bit로 MacBook Pro M3 로컬 실행 — 서버급 또는 고사양 PC 필요. — [GitHub kyutai-labs/moshi](https://github.com/kyutai-labs/moshi)
- Whisper-large-v3-turbo 한국어 ggml(whisper.cpp) 변환 모델이 공개돼 로컬 STT 가능. — [HF royshilkrot](https://huggingface.co/royshilkrot/whisper-large-v3-turbo-korean-ggml)

### Inferences
- **설계 권고(법적 리스크 최소화)**: (1) 화자 식별(speaker identification/verification) 기능을 넣지 않으면 음성은 생체인식정보 요건을 피할 수 있다 — 로그인은 일반 인증으로 처리하고 voiceprint를 저장하지 않는다. (2) SER 결과·정신건강 관련 추론은 "건강에 관한 정보"로 해석될 가능성이 높으므로 **별도 명시 동의(민감정보 동의)** 를 받고, 원본 음성은 STT/SER 처리 후 즉시 폐기(또는 사용자가 opt-in 한 경우만 암호화 보관), 추론 결과는 사용자 ID와 분리된 가명 키로 저장한다. (3) 외부 API(Claude, STT, TTS)에 음성/전사를 전송하는 것은 '서비스형 LLM 활용' 방식에 해당하므로 각 벤더의 학습 미사용(no-training) 약관을 확인·명시하고 처리방침에 수탁/국외이전 사항을 기재한다. (4) PIPC 안내서가 요구하는 옵트아웃·처리방침 공개·배포 전 점검은 2절의 "메모리 열람/수정/삭제 UI"로 상당 부분 충족된다.
- 가명처리 패턴: 생체정보 가이드라인의 "원본정보/특징정보 분리 보관 + 특징정보 암호화" 원칙을 그대로 차용해, 오디오(원본) → eGeMAPS/embedding(특징) → 감정 라벨(추론) 3계층을 서로 다른 저장소·키로 분리하는 것이 가이드라인 정합적이다.
- on-device: STT(whisper.cpp)·SER(SenseVoice-S/emotion2vec+ base)은 클라이언트 측 실행이 기술적으로 가능해 "원본 음성이 서버에 가지 않는" 구조를 MVP 이후 로드맵으로 제시할 수 있다. LLM·TTS는 클라우드 불가피.

### Gaps
- PIPC 생성형 AI 안내서 **원문**(민감정보·아동·정당한 이익 기준 세부) 미확보 — 보도 요약만 확인. pipc.go.kr 원문 다운로드 필요.
- "음성에서 추론한 감정/정신건강 상태"가 민감정보(건강정보)에 해당하는지에 대한 PIPC 공식 해석·사례 — 발견 못함(법리적 추론만).
- 2024년 이후 시행령 제18조 개정 여부(검색 결과는 2020년 자료 위주).
- 국외 이전(Claude·OpenAI API 등 해외 서버) 관련 보호법 제28조의8 요건과 PIPC 가이드 — 이번 조사 범위에서 미확인.
- 생체정보 보호 가이드라인 원문의 조항 번호·음성 특징정보 정의 문구 — 언론 해설만 확인.
- 아동·청소년(만 14세 미만 법정대리인 동의) 요건 — 미조사.

---

## 부록: MVP 기술 스택 후보 요약(위 근거 기반)

| 레이어 | 1순위 후보 | 근거 수치 | 라이선스/비용 | 대안 |
|---|---|---|---|---|
| STT(한국어) | ReturnZero 스트리밍 | CER 5.91%(벤더 벤치) | 1,000원/h, 첫 10h 무료 | gpt-4o-mini-transcribe $0.003/min; Whisper-large-v3 로컬(CER 5.72% FLEURS/CV) |
| SER(음성) | emotion2vec+ base/large | IEMOCAP WA 71.79(base 논문) | MIT | SenseVoice-S(234M, 70ms, ko) |
| Paralinguistic | openSMILE eGeMAPS 88 | Eyben 2016 표준 | openSMILE 라이선스 별도 확인 | 자체 pitch/energy/pause 추출 |
| 텍스트 감정+응답 | Claude API(스트리밍) | LLM 공감 평가 다수 연구 | 토큰 과금 | vLLM 자체 호스팅 |
| 메모리 | Mem0(OSS) 또는 Letta block 패턴 | LoCoMo J 66.9, p95 1.44s | OSS | pgvector 단순 RAG(k=2, 256-tok: J 60.97) |
| TTS(한국어) | Typecast API | ≈$0.07–0.09/1k 글자 | 구독 | ElevenLabs Flash $0.04/1k(한국어 확인 필요); CLOVA Voice(요금 미확인) |
| 오케스트레이션 | Pipecat 또는 LiveKit Agents | 지연 차이 無(모델이 결정) | OSS | 자체 FastAPI WebSocket |
| S2S 대안 | gpt-realtime-mini | audio $10/$20 per 1M | API | Qwen3-Omni(Apache 2.0, 234ms 이론, ko 출력) |
| 안전 평가 | PsyCrisisBench/DeepSuiMind 현지화 + VERA-MH 포팅 | F1 0.88/0.91(중국어 핫라인) | 연구용 | 자체 한국어 100–300 케이스 |
| 제외 | Hume EVI | 2026-11-13 API 종료 | — | — |
