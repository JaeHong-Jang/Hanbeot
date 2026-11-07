# 한벗 개발자 GitHub·구현 글 심층 조사 (SER 레시피 + 사람 같은 음성)

- 조사일: 2026-11-08. 별·라이선스·push 일자는 이날 GitHub REST API / Hugging Face API로 조회(GitHub 비인증 한도 소진 후에는 raw.githubusercontent.com 직접 열람).
- 등급: **A** = README·모델카드·소스 코드·논문 PDF·이슈 본문을 이번 조사에서 직접 열람, **B** = 검색 요약 등 2차 자료, **C** = 미확인 또는 추정. 수치는 열람한 곳에 적힌 것만 기재하고, 없으면 "미보고".
- 선행 노트(중복 조사 안 함, 확장만): `research_notes/오픈소스 음성 조사/humanlike_voice_oss.md`, `research_notes/유사앱 조사/similar_apps_github.md`, Wiki `topic-tts-opensource-candidates-2026-11`, `topic-bench-opensource-voice-agents`, `topic-ser-preprocessing-pipeline-evidence`.
- **선행 노트 정정·보강:** (1) VoxCPM2 "한국어 CER 0.95%"는 자사 내부 벤치(ASR=Gemini 3.1 Flash Lite)의 값이며 같은 표에서 Fish S2-Pro는 0.29% (§B-2). (2) Fun-CosyVoice3-0.5B-2512 가중치는 HF 메타 **Apache-2.0**. (3) Raon-Speech/SpeechChat 9B 가중치는 **CC-BY-NC-4.0**. (4) Pipecat 본체에 사용자 음성 감정 → LLM → 표현 태그 → TTS를 잇는 **"expressive conversation (alpha)"** 모듈이 있음 (§B-5). (5) `maisterr/pipecat-backchannel`(영어 전용) 등 맞장구 구현이 실재 (§B-6).

---

## 0. 결론 — 한벗이 포크·재현·참고할 것 10개

| # | 대상 | 행동 | 이유(근거 등급) |
|---|---|---|---|
| 1 | **emo-box/EmoBox** (331★, README 배지 MIT) | **프로토콜 재현** | 화자 독립 폴드 규칙, "마지막 층 특징 → LayerNorm → 선형-ReLU-풀링-선형 헤드, LR {1e-3,1e-4}×은닉 {128,256} 탐색, 100 epoch(10 warm-up)" 레시피가 공개돼 있어 KEMDy에 그대로 이식 가능(A). 단 **32개 코퍼스에 한국어가 없음**(A) → 한국어 폴드는 우리가 같은 규칙으로 직접 만들어야 하고, 이것이 논문 기여가 된다. |
| 2 | **ddlBoJack/emotion2vec + emotion2vec+** | **서빙 유지 + 소규모 헤드 재학습으로 비교** | 현재 파이프라인 구성요소. 공식 이슈에서 저자가 직접 말한 실패 모드 3개(1–2초 입력 환각, 특정 언어 성능 저하 시 로짓 마스킹, 리샘플러 민감도)를 설계에 반영해야 함(A, §A-1). 한국어 성능은 **공식 수치 미보고** → 우리가 측정. |
| 3 | **MEDUSA** (emopodntua/medusa, MIT) | **축소 재현** | IS2025 Task 1 1위(Macro-F1 0.4316). 소프트 타깃 제거가 최대 하락(상대 -8.23%), RTX 3090 1장(A). KEMDy에 평가자별 라벨이 있으면 최우선 ablation. |
| 4 | **Tzeng 외 Lessons Learnt** (MIT) | **레시피 차용** | Task 2 valence 1위(CCC 0.6953). focal loss가 가중 CE보다 F1-Micro 0.592 vs 0.487, 개별 미세조정 후 동결 융합(A). STT 전사+SER 후기 융합과 일치. |
| 5 | **audeering dim 모델 / w2v2-how-to** | **VA 헤드 참조 구현** | 12층 가지치기+평균 풀링+CCC 손실, LR 1e-4·5 epoch(A). 가중치 CC-BY-NC-SA-4.0 → 연구 전용. |
| 6 | **pipecat `pipecat/expressive/*`** | **참고(+필요 시 포크)** | `PerceptionSignal(tone 라벨+확신도)` → LLM 지시문 → `<<delivery>> [[sound]] ^^강조^^` 태그 → TTS별 어댑터. 한벗의 emotion2vec+→Claude→TTS를 프레임워크 규약으로 표준화한 것(A, alpha 단계). 어댑터는 ElevenLabs·Cartesia·Fish·MiniMax 등이며 Typecast·RTZR용은 main에 없음(조회 기준). |
| 7 | **pipecat 인터럽션 처리 코드** (`tts_service.py`) | **그대로 따라 구현** | `InterruptionFrame` → 텍스트 집계기·오디오 컨텍스트 폐기, "interruptible" 플래그, 단어 타임스탬프로 실제 발화된 단어만 컨텍스트에 기록(A). 한벗 끼어들기 검증 항목의 기준 구현. |
| 8 | **livekit/turn-detector + pipecat smart-turn-v3** | **A/B 비교 후 택1** | LiveKit: 텍스트 기반 EOU, 한국어 TPR 99.3%/TNR 94.5%(공급사 보고, A). Smart Turn v3.2: 오디오 기반, 8MB(CPU), 가중치·데이터·학습 코드 공개, BSD-2(A). 한벗은 이미 Smart Turn v3 채택 → 한국어 TNR을 자체 측정할 것. |
| 9 | **maisterr/pipecat-backchannel** (BSD-2, 25★) | **한국어판으로 포크** | 일시정지 기반 맞장구, `fire_probability 0.8 / cooldown 2.5s / min_speech 0.7s`, 자체 TTS로 "응" 클립을 미리 녹음해 캐시(A). 영어 전용(클립·정규식)이라 한국어 클립("응", "아", "그렇구나")과 규칙만 바꾸면 됨. 발화 중 맞장구(VAP)는 로드맵이며 MaAI는 영·중·일만 지원(A). |
| 10 | **Qwen3-TTS (Apache-2.0)** + Fish S2 (청취 상한) | **W4 블라인드 테스트 후보** | 한국어 화자 Sohee + 자연어 `instruct`, MiniMax-MLS 한국어 WER 1.755(공급사 표, A). Fish S2-Pro는 같은 표에서 1.180·내부 벤치 CER 0.29%로 최상위지만 가중치가 Fish Audio Research License라 상용 제외, "상한선 청취용". |

**한 줄 판단.** 한국어 자연 대화 SER을 SCI급으로 내려면 (a) 공개 SER 코드는 영어 MSP-Podcast·IEMOCAP 중심이라 **한국어 KEMDy에 같은 프로토콜을 적용한 재현 자체가 비어 있고**(§E), (b) 실무자들이 높은 점수를 내는 방식은 "백본 교체"보다 **손실·샘플링·소프트 타깃·화자 독립 분할 같은 학습 규율**이다(MEDUSA·Tzeng·Odyssey 1위 공통). 따라서 한벗의 논문 축은 "한국어 자연 대화에서 이 규율이 얼마나 전이되는가 + 보정/선택적 예측"이 가장 방어 가능하다.

---

## A. SER 저장소

### A-0. 요약 표

별·라이선스는 2026-11-08 조회. "코드/가중치" 라이선스를 분리. 점수는 **분할 방식이 다르면 비교 불가**이므로 분할을 함께 적었다.

| 저장소·모델 | ★ | 코드 / 가중치 라이선스 | 데이터·라벨 | 보고 성능(분할) | 한국어 | 등급 |
|---|---|---|---|---|---|---|
| [ddlBoJack/emotion2vec](https://github.com/ddlBoJack/emotion2vec) | 1,210 (마지막 push 2024-12-23) | 코드 README 배지 MIT(API상 미지정) / HF 가중치 "other: FunASR MODEL_LICENSE" | 사전학습 262h 비라벨 감정 음성(IEMOCAP·MELD·MEAD·CMU-MOSEI·MSP-Podcast); + 9클래스 | IEMOCAP 4클래스 WA 71.79(leave-one-session-out 5-fold, 선형 헤드) | 한국어 성능 미보고. 중국어 코퍼스 포함(저자 이슈 #87), 한국어는 언급 없음 | A |
| [QwenAudio/SenseVoice](https://github.com/QwenAudio/SenseVoice) (구 FunAudioLLM) | 9,710 (push 2026-09-30) | MIT / SenseVoiceSmall "FunASR 모델 라이선스"(상업 이용 허용, 출처 표기 필요, 공식 설명 있음) | ASR+LID+SER+이벤트 태그, 학습 40만 시간 이상(연구), 공개 체크포인트는 zh/yue/en/ja/ko | 제로샷 CASIA SenseVoiceSmall 70.0 UA/WA(6라벨 프로토콜) 외 표는 이미지(미판독) | **ASR/LID는 ko 지원, 한국어 SER 평가는 미보고** | A |
| [emo-box/EmoBox](https://github.com/emo-box/EmoBox) | 331 (push 2026-03-18) | README 배지 MIT | 32개 코퍼스·14개 언어·294.4h | 아래 §A-2. Whisper-large-v3 인코더가 23/32 코퍼스에서 1위 | **한국어 코퍼스 없음** | A |
| [speechbrain/speechbrain](https://github.com/speechbrain/speechbrain) IEMOCAP 레시피 | 11,928 | Apache-2.0 | IEMOCAP 4클래스 | wav2vec2-base 78.7(최고)/77.0(평균), **무작위 분할(화자 누수 가능)** | 없음 | A |
| [audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim](https://huggingface.co/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim) + [w2v2-how-to](https://github.com/audeering/w2v2-how-to) | 563 (push 2023-05-22) | MIT / **CC-BY-NC-SA-4.0** | MSP-Podcast v1.7, 도미넌스·각성·긍정도 | MSP-Podcast CCC 각성 .745 / 지배 .634 / 긍정도 .635(본문), IEMOCAP(교차) .663/.518/.448 | 없음(영어) | A |
| [emopodntua/medusa](https://github.com/emopodntua/medusa) | 10 (push 2025-06-30) | MIT / 해당 없음 | MSP-Podcast(Interspeech 2025 판) 범주 8클래스 | 대회 테스트 Macro-F1 0.4316, Micro-F1 0.4319, Acc 0.4319 (1위) | 없음 | A |
| [RogerTzeng/biic_IS2025_SER_Challenge](https://github.com/RogerTzeng/biic_IS2025_SER_Challenge) | 2 | MIT | MSP-Podcast | Task 2 valence CCC 0.6953 (1위) | 없음 | A |
| [alefiury/InterSpeech-SER-2025](https://github.com/alefiury/InterSpeech-SER-2025) | 11 | **라이선스 파일 없음(API: 미지정)** | MSP-Podcast | 8위, Macro-F1 39.79%(검증 42.20%) | 없음 | A |

### A-1. emotion2vec / emotion2vec+ (ddlBoJack)

**한 줄:** 한벗이 쓰는 SER의 정체와 한계를 가장 정확히 알려주는 자료는 README가 아니라 **이슈 답변**이다.

**학습 레시피 (논문 arXiv 2312.15185, A).** 사전학습은 data2vec식 자기지도 온라인 증류(EMA 교사의 상위 8블록 평균을 목표, 발화 수준 손실 + 프레임 마스크 손실, 마스크 p=0.5·길이 5). 262h 비라벨 감정 음성, 4×A10, 100 epoch, Adam LR 7.5e-5, cosine+5% warm-up. 다운스트림은 SUPERB 관행의 **선형-ReLU-선형 + 평균 풀링**: 공개 코드 `Linear(768,256) → ReLU → 마스크 평균 → Linear(256,4)`, 배치 128, 100 epoch, LR 5e-4, 특징은 마지막 층. IEMOCAP 4클래스 WA 71.79(leave-one-session-out 5-fold), 74.48*는 검증·테스트 폴드를 같게 둔 완화 설정. 이 수치를 한국어 성능으로 인용 금지.

**emotion2vec+ 데이터 공학 (모델카드·저자 답변, A).** seed(201h)=EmoBox 학술 데이터 미세조정, base(4,788h)·large(42,526h)=seed 의사 라벨을 필터링해 미세조정(160k시간 중 40k 사용). 모델카드는 "세부는 추후 공개"라고만 했고 미공개 상태. 9클래스: angry, disgusted, fearful, happy, neutral, other, sad, surprised, unknown.

**이슈에서 저자가 직접 설계 의도·한계를 밝힌 사례 (A, 이슈 본문 직접 열람).**

| 이슈 | 내용 | 한벗에 대한 함의 |
|---|---|---|
| [#30](https://github.com/ddlBoJack/emotion2vec/issues/30) (2024-06) | 최적 분할 길이 질문에 저자: "길이 제한 없음, 오디오당 라벨 하나, VAD로 의미 단위로 자르라. 모델은 가변 길이로 학습됨" | 발화 단위(VAD+턴) 입력이 기본이며 고정 윈도 슬라이딩을 강제할 필요는 없음 |
| [#41](https://github.com/ddlBoJack/emotion2vec/issues/41) (2024-07) | 사용자 보고: plus-large가 페르시아어에서 이전 모델보다 훨씬 나쁨, **1–2초 짧은 입력에서 환각이 많음(영어에서도)**. 저자: "필요 없는 감정을 로짓에서 마스킹하면 이전 모델과 비슷한 성능" | (1) 한벗은 1~2초 짧은 응답("네", "그냥요")에 감정 라벨을 붙이지 말고 최소 길이/확신도 게이트를 둘 것 (2) 한국어 4~7클래스만 쓸 때 **로짓 마스킹 + 재정규화** 방식이 저자 공인 대응 |
| [#61](https://github.com/ddlBoJack/emotion2vec/issues/61) (2024-12) | torchaudio 리샘플과 Sox 리샘플로 같은 음원을 16kHz로 바꾸니 예측이 크게 달라짐(고주파 스펙트럼 차이). 저자 답변 없음, 2025-05 후속 질문도 미해결 | 서비스 입력(WebRTC→Pipecat 리샘플)과 학습/평가 입력의 리샘플러를 **동일 구현으로 고정**해 평가할 것. 이것 자체가 "전처리 민감도" 논문 소재 |
| [#46](https://github.com/ddlBoJack/emotion2vec/issues/46) (2024-09) | seed=EmoBox 학술, base/large=seed 의사 라벨. 2025-07 "EmoBox 분할을 어떻게 나눴나" 질문에 답 없음 | 사전 노출 가능성: EmoBox 코퍼스는 학습에 쓰였을 수 있으므로 해당 코퍼스 평가는 오염 위험. KEMDy는 EmoBox에 없음(A) |
| [#42](https://github.com/ddlBoJack/emotion2vec/issues/42) (2024-08) | 음성+텍스트 융합 데모 요청에 저자: Shi 외(2020, 2023) 방법을 재현했으나 **공개 계획 없음, 직접 재현하라** | 융합 헤드는 우리가 직접 구현(§D) |
| [#39](https://github.com/ddlBoJack/emotion2vec/issues/39) (2024-07) | 다운스트림 학습 시 EmoDB에서 WA 34.2% 등 저조. 저자: "plus 시리즈 말고 emotion2vec_base가 특징 표현에는 더 낫다" | **분류용 emotion2vec+는 분류기, 임베딩 학습용은 base** — 한국어 헤드 재학습은 `emotion2vec_base`(768) vs `plus_large`(1024) feats를 둘 다 비교 |

**라이선스 주의 (A, MODEL_LICENSE v1.1 전문 열람).** 사용·수정·공유 자유, 단 출처·모델명 유지(파인튜닝 파생물 포함). 4.2항: "근거 없는 비방·악의적 폄훼" 시 **라이선스 자동 박탈** → 논문에서 한국어 실패 모드는 조건·수치만 서술. 상업 허용은 SenseVoice 이슈 #334 공식 해설로 확인되며 emotion2vec 카드에는 별도 해설 없음(C, 같은 협약).

### A-2. EmoBox (emo-box) — 벤치마크 툴킷

- **구성(A):** 32 코퍼스 / 14개 언어 / 3,510 화자 / 294.4h. IEMOCAP, MELD, MSP-Podcast(113.6h), M3ED, CASIA 등 포함, **한국어 없음.**
- **분할 규칙(논문, A):** 공식 분할 존중 / 화자 <4 또는 감정이 화자별 불균형이면 화자 종속(감정별 25% 테스트) / 화자 ≥4이고 균형이면 leave-one-speaker-out n-fold(4~6명이면 n=화자 수, 6명 초과면 n=4로 묶음).
- **레시피(A):** 마지막 Transformer 층 특징 + LayerNorm → 선형 은닉 + ReLU + 풀링 + 분류. LR ∈ {1e-3,1e-4}, 은닉 ∈ {128,256} 탐색, 학습 20%를 검증, 100 epoch(10 warm-up). 지표 UA·WA·Macro-F1. 예제는 SpeechBrain(wav2vec2-base freeze, 배치 32, LR 1e-4).
- **결과(A):** Whisper-large-v3 인코더(약 635M)가 23/32 코퍼스·교차 12쌍 중 9쌍 1위(저자 가설: 다국어·대규모). WavLM-large가 영어 SSL 최고. **저자가 밝힌 한계: 마지막 층만 평가** → 한국어에서 층 가중합 비교는 빈 실험.
- **한벗용:** 한국어 폴드를 `data/<dataset>/fold_k/*.json` + `label_map.json` 형식으로 만들면 `EmoDataset`/`EmoEval`(UA=balanced_accuracy, WA=accuracy)을 그대로 사용 가능.

### A-3. SenseVoice (감정 + 이벤트 태그)

- 출력: 텍스트에 `<|HAPPY|>`, `<|SAD|>`, `<|ANGRY|>`, `<|NEUTRAL|>`, `<|FEARFUL|>`, `<|DISGUSTED|>`, `<|SURPRISED|>`와 이벤트 `<|Laughter|>`, `<|Cry|>`, `<|Breath|>`, `<|Cough|>` 등(학습 데이터 형식 안내, A). **웃음·한숨·기침 같은 비언어 이벤트를 ASR과 동시에 얻는 오픈소스는 이것이 가장 직접적**이며 한국어 음성 입력을 지원(`language="ko"`).
- 평가: "제로샷으로 현 최고 SER 모델 수준 이상"이라는 주장이 있으나 표는 이미지이고 평가셋은 중·영(공연·영화·자연 대화 혼합)이다. 재현 계약(`benchmarks/ser/README.md`)은 UA=라벨별 재현율 평균, WA=전체 정확도, 원시 태그를 파싱할 것을 요구. 한국어 SER 수치는 **미보고**.
- 미세조정: `emo_target`·`event_target` 필드를 포함한 JSONL 스크립트 제공 → KEMDy를 이 형식으로 변환해 한국어 감정 태그를 직접 학습시킬 수 있는 유일한 경량 경로(A). 코드 MIT, 가중치는 FunASR 협약.
- 한벗 활용: RTZR STT는 유지하되, **병렬 보조 신호**로 SenseVoice의 `<|Laughter|>/<|Cry|>/<|Breath|>`를 받아 emotion2vec+ 점수와 합치는 실험 가치(웃음·한숨은 감정 9클래스에 없는 신호). 1~2초 짧은 구간 안정성은 미검증.

### A-4. SpeechBrain / s3prl / SUPERB 레시피

- **SpeechBrain IEMOCAP wav2vec2-base (A):** 헤드 LR 1e-4, wav2vec2 LR 1e-5, 30 epoch, 배치 4, CNN 특징추출기 동결, 나머지 미세조정, `StatisticsPooling` 후 선형 4클래스, NewBob 스케줄러, seed 1993. 주석: "ASR 미세조정본이 아닌 **원본 wav2vec2-base를 쓰면 약 4% 개선**". 보고 78.7/77.0은 **무작위 분할**이고 README가 "벤치마킹하려면 5 fold(또는 `different_speakers`로 10 fold)를 돌리라"고 명시 → 인용 금지, 레시피만 차용.
- **s3prl ER (A):** Adam LR 1e-4, 총 30,000 step, 그래디언트 누적 8, 배치 4, projector 256, `MeanPooling`, 검증 비율 0.2, 5-fold leave-session-out. 업스트림 동결+가중합이 SUPERB 표준. HF 이식본은 session1 정확도 0.6343(s3prl) / 0.6258(transformers).
- 한벗 활용: **"원본(비-ASR) 모델이 낫다"는 SpeechBrain 주석과 "Whisper가 EmoBox 1위"는 방향이 다르므로** 한국어에서 직접 비교(§D R2).

### A-5. audeering 차원(VA) 모델 + 논문 (Wagner 외, arXiv 2203.07378)

- **모델카드(A):** Wav2Vec2-Large-Robust를 MSP-Podcast v1.7로 미세조정, **24층 → 12층 가지치기 후** 학습, 출력 각성·지배·긍정도(대략 0~1) + 마지막 층 풀링 상태. 헤드는 `dropout → dense(tanh) → dropout → out_proj`, 시간축 평균 풀링. ONNX 내보내기(zenodo 10.5281/zenodo.6221127). **CC-BY-NC-SA-4.0, 연구 전용**(상업용은 audEERING 유료).
- **논문 학습 설정(A, 본문 직접 열람):** 마지막 Transformer 층 평균 풀링 + 선형 헤드, **CCC 손실**, 고정 LR 1e-4, 5 epoch, 배치 32, 개발셋 최고 체크포인트 선택, **CNN 동결·Transformer 미세조정**(Wang 외 관행). MSP-Podcast 각성/지배 CCC .745/.634, IEMOCAP 교차 .663/.518. 긍정도는 모델별 변동이 커서 .359부터 .635(MSP) / .448(IEMOCAP)까지 분포, 미세조정이 긍정도를 크게 올림(+.26 근처로 서술).
- **저자의 핵심 주장(A):** 긍정도 성공은 **암묵적 언어 정보 학습** 덕분. 합성 음성으로 검증(그림 4)하고 성별 공정성을 측정(개별 화자 편향은 미보고 영역). → 한벗이 STT 텍스트를 별도 융합하는 설계가 이 관찰과 일관됨.
- **지원 도구:** `audonnx`(10★, NOASSERTION)로 ONNX 추론. 한벗 서버에서는 CPU 추론이 가능하지만 라이선스상 상용 불가.

### A-6. Whisper 기반 SER

- **firdhokk (A):** whisper-large-v3 전체 미세조정. RAVDESS+SAVEE+TESS+URDU(연기 낭독) 7클래스, LR 5e-5, 실효 배치 10, 25 epoch, warm-up 0.1, AMP. 정확도 0.9199 / F1 0.9198, **분할 방식 미기재** → 점수 참고 불가, 레시피만 참고.
- **LoRA 계열:** `Thuctac/SER-LoRA`(MIT), `harryporry77/Behind-the-Scenes`, `amnva/voice2emotion` 등은 별 0~9개, **README 미열람(C)**. 검증된 한국어/자연 대화 LoRA 레시피는 못 찾음. 근거는 위키의 Feng 2023 PEFT-SER(LoRA 최고, A) → 신규 구현.
- **EmoBox 간접 증거(A):** Whisper-large-v3 인코더는 동결 특징만으로 23/32 코퍼스 1위 → LoRA 이전에 **동결+헤드**가 강한 기준선.

### A-7. MSP-Podcast 챌린지 우승 코드·논문 (Odyssey 2024, Interspeech 2025)

**MEDUSA (Interspeech 2025 Task 1 범주 1위, arXiv 2506.09556 + 코드, A).** 입력: WavLM-large·HuBERT·Whisper-v3 인코더 특징 + Whisper-large-v3 전사 텍스트 특징을 **DeepSER**(교차 모달 Transformer 각 2층, 은닉 1024, λ1=1.5, λ2=0.4)로 깊게 융합. 4단계: S1 전체 / S2 균형 부분집합 / S3 메타 분류기(배치 128, LR 1e-3) / S4 모델 수프. 배치 16, LR 1e-5, AdamW, Manifold MixUp p=0.3, 클래스 가중 (N/(|C|·f_c))^0.5, **RTX 3090 1장**. ablation: **소프트 타깃(평가자 투표) 제거 평균 상대 -8.23%(최대)**, 깊은 융합→후기 융합 -6.31%, MixUp·균형 단계·다중 과제 제거도 하락, 학습형 메타 분류기가 소프트/하드 투표를 능가. 테스트 Macro-F1 0.4316 / Acc 0.4319.

**Tzeng 외 Lessons Learnt (arXiv 2508.07282, 코드 MIT, A).** 1단계 RoBERTa·WavLM 각각 미세조정(배치 32, LR 1e-5, 20 epoch) → 2단계 백본 **동결** 후 융합층만(LR 5e-6). 훈련 전사는 정답, 개발·테스트 전사는 whisper-large-v3 자동 전사(운영 조건 모사). 불균형 처리(미세조정 WavLM + RoBERTa): 가중 CE F1-Micro 0.487, 균형 샘플링 0.445, **focal 0.592**(F1-Macro는 0.338로 CE와 동일, 논문은 +10.2%로 서술; 반복 분산 미보고). Task 2 valence CCC 0.6953(1위).

**Odyssey 2024 Task 1 1위 (arXiv 2405.20064, A).** 7모델 다수결 앙상블, 특징 WavLM-large·HuBERT-xlarge·Whisper-large-v3 인코더 최종층 + RoBERTa-large 마지막 4층 평균(텍스트는 Whisper-large-v2 전사), 평균 풀링 헤드, 손실은 **focal(γ 2~3) 또는 사전 기반 클래스 가중 CE**. Macro-F1 35.69% / Acc 37.32%. 코드 링크 못 찾음.

**alefiury (8위, arXiv 2506.02088, 코드 라이선스 없음):** F0 양자화 운율 + 그래프 어텐션 융합 앙상블, Macro-F1 39.79%. 배치 8, 역빈도 가중 CE, 20 epoch, cosine+500 warm-up, AdamW.

**이 세 시스템의 공통 교훈 (한벗이 가져올 규율).** ① MSP-Podcast 같은 자연 대화 범주형의 현실적 Macro-F1은 **0.36~0.43** 대(8클래스). 한국어 자연 대화에서 4클래스 UA 70%대를 목표로 잡는 것은 위험 신호. ② 소프트 타깃·focal/균형·앙상블 순으로 효과, ③ 텍스트(Whisper 전사) 융합이 모두에서 쓰임, ④ 평가 시 자동 전사로 훈련-운영 조건을 맞춤.

### A-8. 한국어 (KEMDy / AI Hub / ETRI)

- **공개 GitHub 코드:** `KEMDy`, `KEMDy19`, `KEMDy20`, `korean speech emotion wav2vec2` 등 저장소 검색(2026-11-08)에서 KEMDy로 학습·평가한 의미 있는 저장소를 **찾지 못함**(나온 것은 `DimensionSTP/multimodal-transformer` 3★ MIT 정도, 미열람 C). 위키의 기존 결론과 일치. API 한도 소진으로 일부 검색은 반복하지 못했으므로 "없다"가 아니라 "미발견".
- **HF 한국어 SER:** `jungjongho/wav2vec2-xlsr-korean-speech-emotion-recognition3` 정확도 0.9876이나 데이터 "None"·1 epoch → **증거 불가**(A). `HyunaZ/hubert_emotion`은 `team-lucid/hubert-base-korean`(Apache-2.0) 기반 KEMDy형 7라벨 + **강도 회귀 헤드**, 수치 미기재(A).
- **논문(검색 요약, B):** KEMDy19 dimensional HuBERT 평균 CCC 0.3573, HuBERT+KoELECTRA 멀티모달 정확도 77.01%, AI Hub 7감정(wav2vec2-large-robust). 코드 공개 여부 미확인 → 위키 `src-*` 저자에게 코드 요청이 현실적.
- **의미:** 재현할 공개 레시피가 없다는 것이 곧 기여 지점이지만 비교 기준선도 없다 → EmoBox 프로토콜 + 영어 대조(§D) 필요.

### A-9. 보정·선택적 예측·차원 코드

- `audeering/w2v2-how-to`(563★, MIT): 차원 모델 사용 튜토리얼(노트북), 불확실성은 다루지 않음(A, 모델카드에서 확인한 범위).
- **불확실성/보정 코드는 사실상 부재.** Sridhar & Busso(MC dropout + reject option, 가장 불확실한 25%를 거부하면 각성 +7.34%, 긍정도 +13.73%, 지배 +8.79% 상대 개선), Chou 외(ECE, 다중 라벨 온도 스케일링 + ConsCal), Jia 외 arXiv 2503.22712(보정된 예측 집합, 커버리지 보장)는 모두 **코드 링크를 확인하지 못함**(B, 검색 요약). `W-Wu/DEER`는 코드가 있으나 README 미열람(C). → 한벗이 **ECE 보고 + 위험-커버리지 곡선 코드를 공개**하면 그 자체가 기여.
- 한벗 적용: emotion2vec+의 `scores`(softmax)에 온도 스케일링(검증셋), 신뢰도 낮으면 "목소리가 조금 무거워 보이는데, 괜찮으세요?" 대신 아무것도 하지 않음. 확인 질문의 사용자 효과는 미검증(위키 C).

### A-10. 오디오-LLM SER

- Qwen2-Audio: MELD 정확도 0.553(선행 WavLM-large 0.542, Qwen-Audio 0.557). README에 표가 둘 있고 두 번째 표는 0.535로 모델 버전이 다름 → 인용 시 모델·표를 명시(A).
- Audio Flamingo 3: IEMOCAP 63.8, Qwen2-Audio-Instruct 59.2(AF3 논문 표, A). 가중치 **NVIDIA OneWay Noncommercial**(HF 카드 A) → 연구 비교용만.
- Qwen3-Omni(Apache-2.0): 음성 입력 18개 언어에 Korean 포함(A), 시스템 프롬프트 예시는 "음성 응답은 50단어 이내, 감정/행동 묘사 금지"를 명시. 감정 인식 전용 수치·프롬프트는 README에서 찾지 못함(C).
- **판단:** 오디오-LLM의 IEMOCAP/MELD 점수는 SSL+선형 헤드와 같은 대역(0.55~0.64)이고, 공개 라이선스·지연·비용 때문에 **서비스 경로가 아니라 논문의 상한/대조군**으로 쓰는 것이 합리적. SALMONN은 이번에 열람하지 못함(C).

---

## B. TTS·대화 음성 저장소 상세

선행 노트의 표(별·라이선스·지연)는 그대로 유효. 여기서는 (1) 맥락→운율, (2) 감정·스타일 주입, (3) 스트리밍·첫 청크, (4) 끼어들기, (5) 맞장구·필러, (6) 한국어 평가를 코드·카드 기준으로 보강.

### B-1. 모델별 요약 (맥락 · 감정 주입 · 스트리밍 · 가중치 라이선스)

- **Qwen3-TTS (Apache-2.0):** 텍스트 의미로 어조 적응 + 자연어 `instruct`·VoiceDesign. 첫 오디오 패킷 즉시, 종단 97ms(공급사 주장, GPU 미기재). 한국어 화자 Sohee. (A)
- **VoxCPM2 (Apache-2.0):** 텍스트에서 운율 자동 추론, 참조 오디오+전사로 이어 말하기, 텍스트 앞 괄호 지시 `(slightly faster, cheerful tone)` 또는 `--control`. RTF 0.3(4090)/0.13(Nano-vLLM), 첫 청크 미보고. (A)
- **Fun-CosyVoice3-0.5B-2512 (Apache-2.0):** `instruct`(언어·감정·속도·볼륨), 양방향 스트리밍 150ms(README). (A)
- **Fish S2-Pro / Drama 3 (Research License):** 인라인 `[whisper] [angry] [laughing] [pause] [excited]`, Drama 3는 직전 테이크를 말로 고치는 다회 수정. S2 RTF 0.195(H200), 첫 오디오 약 100ms. (A)
- **Sesame CSM-1B (Apache-2.0):** 이전 발화 오디오+텍스트를 입력(Segment). 영어 중심(저자: 타 언어는 "잘 안 됨"). (A)
- **Kyutai DSM-TTS/Unmute:** 텍스트 선행 스트림. 영·프 전용. 단일 L40S TTS 약 750ms → 분산 약 450ms(Unmute README). (A)
- **Raon-Speech/SpeechChat 9B (CC-BY-NC-4.0):** 영·한, 116K시간 시간정렬 대화로 연속 학습. RTX 6000 Pro TTFT 617ms·RTF 0.27, L40S 887ms·0.45(LibriSpeech 영어). 한국어 벤치 KVoiceBench·KOpenAudioBench·KMMAU 공개. (A)

### B-2. 한국어 평가 수치 (모두 **공급사 보고**, 독립 검증 아님)

| 평가셋 | 지표 | 값 | 출처 |
|---|---|---|---|
| MiniMax-Multilingual-Test, 한국어 | WER ↓ | MiniMax 1.747 / ElevenLabs 1.865 / **Qwen3-TTS 1.755** / **Fish S2 1.180** / **VoxCPM2 1.962** | VoxCPM README 표(A). Qwen3-TTS 자체 표는 열 배치가 HTML에서 모호해 같은 값을 VoxCPM 표로 확인 |
| 같은 셋, 한국어 | 화자 유사도(%) ↑ | 77.6 / 70.0 / 79.9 / 81.7 / **83.3** (같은 열 순서) | VoxCPM README(A) |
| CV3-eval, 한국어 | CER ↓ | CosyVoice2 19.7 / **CosyVoice3-1.5B 5.69** / Fish S2 2.76 / **VoxCPM2 5.69** | VoxCPM README(A) |
| VoxCPM 내부 30개 언어, 한국어 | CER ↓ | **VoxCPM2 0.95% / Fish S2-Pro 0.29%**, ASR은 Gemini 3.1 Flash Lite | VoxCPM README(A). 선행 노트의 "0.95%"는 이 값 |

**독해.** 한국어 WER/CER은 모두 1~6 이하로 포화에 가까워 후보 간 변별력이 낮다(Sesame가 영어에서 같은 지적: WER·화자 유사도 포화). 한벗의 결정 지표는 CER이 아니라 **운율 적절성 청취 평가**여야 한다. 한국어 비언어(웃음·한숨) 품질에 대한 독립 평가는 이번에도 못 찾음.

### B-3. 맥락이 운율을 바꾸는 방식

1. **Sesame CSM (A):** 백본(Llama)이 텍스트·오디오 토큰을 교차 입력해 0번 코드북, 작은 디코더가 나머지 코드북 생성. `generate(text, speaker, context=[Segment...])`. README: "맥락을 줄 때 가장 잘 들린다." **CMOS: 맥락 없이는 사람 녹음과 50:50, 직전 90초 맥락을 주면 원본 선호** → 한벗 블라인드 테스트에 "직전 턴을 들려주고 더 적절한 이어말하기를 고르게" 하는 문항 추가.
2. **Fish Drama 3:** 멀티턴 감정 수정("더 부드럽게, 조금 슬프게"). Research License.
3. **Typecast `previous_text`**(선행 노트): 한국어 상용 경로. 오픈소스 쪽은 Qwen3-TTS·CosyVoice3 `instruct`에 직전 사용자 감정을 문장으로 써 넣는 방식(코드 검증 아님, C).
4. **Kyutai DSM-TTS (A):** 행동 스트림 + **텍스트 선행 스트림 l=2**(휴지·단어 위치 결정에 뒷문맥), 지연 1.6초, CFG 증류, 화자 임베딩 최대 5명. 영·프만 → 한국어에서는 LLM 스트리밍 시 문장 끝을 기다리지 말고 2단어 선행 제공을 시험.

### B-4. 스트리밍 청킹과 끼어들기 (Pipecat 코드, A)

`src/pipecat/services/tts_service.py` (2026-11-08 main 열람):
- `TextAggregationMode.SENTENCE`(기본): 문장 경계까지 버퍼링, "더 자연스럽지만 문장당 약 200~300ms 추가"(코드 주석). `TOKEN`: 토큰 직송, 지연 감소하나 "TTS 제공사에 따라 품질 영향".
- `reuse_context_id_within_turn`, `push_stop_frames`(`stop_frame_timeout_s=3.0`), `push_silence_after_stop`(`silence_time_s=2.0`): 턴 단위 오디오 컨텍스트 관리.
- **끼어들기:** `InterruptionFrame` 수신 시 `_handle_interruption` → 텍스트 집계기·건너뛰기 집계기·필터를 `handle_interruption()`으로 초기화하고 `_interrupt_audio_contexts()`로 **interruptible 컨텍스트만 폐기**(uninterruptible은 재생 유지), 단어 타임스탬프 트래커를 재설정, `_aggregated_frame_sequencer.clear(keep_contexts=...)`. `TTSContext.interruptible` 필드로 안내 방송 같은 "끊으면 안 되는" 발화를 구분.
- 어시스턴트 컨텍스트 기록은 **TTS가 보고한 실제 발화 단어**(word timestamps)를 근거로 함 → 끼어든 뒤 LLM이 "내가 어디까지 말했는지" 알게 됨. 한벗 감사 로그의 "실제로 발화된 텍스트" 기준과 같음.
- **LiveKit(문서, A):** VAD는 말소리를 감지했으나 전사가 비면 **false interruption**으로 보고 기본적으로 말하던 지점에서 이어 말함(`resume_false_interruption`, `false_interruption_timeout`). 신규 adaptive interruption: 오디오만으로 진짜 끼어들기와 "응/네/맞아" 맞장구를 구분하는 모델(LiveKit Cloud 인증 필요, `backchannel_boundary` 기본 1.0초 쿨다운, 영어에서 더 나을 수 있다고 명시).
- 한벗 적용: "음… 네" 같은 맞장구가 에이전트 발화를 끊지 않게 하는 규칙이 필요(한국어는 맞장구가 매우 빈번). 자체 호스팅 가능한 대안은 Pipecat의 `MinWordsUserTurnStartStrategy`(선행 노트) + false-interruption 재개 로직을 직접 구현.

### B-5. Pipecat "expressive conversation (alpha)" — 감정 주입의 표준화 (A)

`src/pipecat/expressive/` 6개 모듈(`perception.py`, `expression.py`, `policy.py`, `instructions.py`, `formatter.py`, `spoken.py`) + `adapters/tts/services/{azure,cartesia,elevenlabs,fish,gemini,inworld,minimax,mistral,soniox}_adapter.py`.

- **지각(perception):** STT 또는 후속 프로세서가 사용자 턴마다 `PerceptionSignal(name="tone", labels=[("frustrated",0.86),("neutral",0.10)])` 또는 `value`형(`speech_rate`, 초당 단어 수)을 전사 프레임의 `perception`에 붙이고, `PerceptionCapabilities`를 `PerceptionMetadataFrame`으로 방송해 **LLM이 읽는 법을 지시문으로 받음**. 같은 턴을 여러 번 읽으면 `merge_perception`이 신호별 최대값 유지. → **한벗의 emotion2vec+ scores를 이 형식으로 변환하면 프레임워크 규약에 맞는다.**
- **표현(expression):** LLM이 응답에 `<<warm>> It's [[laugh]] ^^back^^ up. [[pause 300]] Your code is <<slow: A B 7>>.`처럼 태그를 씀. `<<이름>>`=이후 단어의 전달 방식(`<<neutral>>`로 복귀), `<<이름: 단어>>`=스팬, `^^단어^^`=강조, `[[이름]]`=소리, `[[pause N]]`=N ms 휴지. 포매터가 "표시 텍스트(태그 제거)"와 "제공사 마크업"을 각각 생성(예: ElevenLabs `[warmly] ... [laughs] BACK`). **TTS가 못 하는 표현은 요청에서 빼고 컨텍스트 텍스트에는 남김.**
- **정책(policy):** `ExpressionGuidance.MATCH_STYLE` = "사용자의 기분·에너지에 목소리를 맞추되 **적대적이면 맞추지 말고 침착하게**; 대부분의 문장에는 태그가 필요 없다." `BREATHE` = "답변당 최대 1회, 습관적으로 쓰지 말 것."
- **의미:** 과용을 억제하는 지시가 핵심이고, Typecast·RTZR용 어댑터는 main에 없어 `BaseExpressionAdapter`를 직접 구현해야 하며, alpha라 문법이 바뀔 수 있다.

### B-6. 맞장구·필러 구현

| 저장소 | 접근 | 한국어 | 등급 |
|---|---|---|---|
| [maisterr/pipecat-backchannel](https://github.com/maisterr/pipecat-backchannel) (BSD-2, 25★, push 2026-08-10) | 일시정지(문장/절 완결 휴지)에서 짧은 클립 재생. 파라미터 `fire_probability=0.8`, `cooldown_s=2.5`, `min_speech_before_eligible_s=0.7`, `volume=0.6`. 클립은 **본인 TTS로 첫 실행에 녹음해 `.clip_cache/`에 캐시**, 그룹(continuer/agreement/hesitation/surprise)별 2개 이상, 구두점으로 억양 변주(`"Mhm."` 하강 / `"Mhm,"` 유지 / `"Hm..."` 늘임). 맞장구는 **턴을 가져가지 않고 LLM 컨텍스트에 흔적 없음**. 두 번째 VAD+턴 감지기를 병렬 실행해 추론 약 2배. 단어 찾기 휴지("we need the, uh...")와 완결된 질문에는 침묵 | 영어 전용(클립·정규식). 모델은 다국어 가능하다고 명시 | A |
| LiveKit adaptive interruption | 반대 방향: 사용자의 맞장구를 무시 | any language, 영어 우위 가능 | A |
| [MaAI-Kyoto/MaAI](https://github.com/MaAI-Kyoto/MaAI) | Voice Activity Projection 기반 턴테이킹·맞장구·고개 끄덕임 예측, CPU 가능, 1채널/2채널 | **영어·중국어·일본어**만 | A |

Open-LLM-VTuber(MIT)는 헤드폰 없는 음성 끼어들기·AI 선발화·감정 → Live2D 표정 매핑을 제공(README, A).

**한벗 판단.** 한국어는 맞장구가 매우 빈번하므로 `pipecat-backchannel` 구조(휴지 게이트+확률+쿨다운+캐시 클립)를 포크하고 클립을 Typecast로 녹음하는 것이 가장 싸다. 발화 중 맞장구(VAP)는 MaAI가 한국어 미지원이라 KEMDy20 자유 대화로 별도 학습해야 한다(연구 과제). 한국어 필러 구현 저장소는 못 찾음(C).

### B-7. 턴 감지 모델 카드

- **livekit/turn-detector (HF, A):** Qwen2.5-0.5B-Instruct 기반, 7B 교사에서 증류(약 1,500 step 수렴), 입력은 최근 최대 6턴·128토큰을 Qwen 채팅 템플릿으로 구성하되 마지막 사용자 메시지의 `<|im_end|>`를 제거하고 **`<|im_end|>` 확률 = 발화 종료 확률**. 언어별 임계값(`languages.json`), INT8 ONNX CPU 추론. 학습 데이터: 콜센터 전사 + 주소·전화·이메일·카드번호 합성 대화 + 다중 STT 포맷. **한국어 TPR 99.3% / TNR 94.5%**(14개 언어 중 힌디 다음 높음, 공급사 보고). 구조화 입력 향상은 영어 학습에만 추가했으나 언어 간 일반화. 라이선스 LiveKit Model License(other). 이전 135M(SmolLM v2) 글(§C)에서는 추론 약 50ms.
- **pipecat Smart Turn v3.2 (Daily 블로그, A):** 원시 오디오 기반, CPU 8MB / GPU 32MB, 짧은 발화("yes", "okay") 오분류 40% 감소, 카페·사무실 소음 학습 데이터 추가, 가중치·데이터·학습 코드 공개. 한국어 정확도는 이 글에 없음.

---

## C. 개발자 글 10편 (직접 열람한 것만)

| # | 글 | 날짜 | 재사용할 숫자·설계 교훈 | 등급 |
|---|---|---|---|---|
| 1 | [Sesame — Crossing the uncanny valley of conversational voice](https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice) | 2025-02-27 | ① WER·화자 유사도는 포화, 새 지표로 **동음이의어 판별·발음 연속 일관성** 도입 ② CMOS: 맥락 없으면 사람과 50:50, **직전 90초 맥락을 주면 원본 선호** ③ 평가자 80명이 평균 15개씩 평가 ④ 학습 약 100만 시간 영어, 백본+디코더, 디코더는 프레임 1/16만 학습. 한벗: 블라인드 테스트에 "맥락 있는 이어말하기 적절성" 문항 추가 | A |
| 2 | [LiveKit — Using a transformer to improve end of turn detection](https://blog.livekit.io/using-a-transformer-to-improve-end-of-turn-detection/) | 2024-12-20 | 135M SmolLM v2 기반, **최근 4턴**을 문맥으로, 모델 예측으로 VAD 침묵 타임아웃을 **늘리거나 줄임**. VAD 단독 대비 **의도치 않은 끼어들기 85% 감소**, "아직 끝 아님" 오판 3%. 추론 약 50ms. 기본 `min_endpointing_delay` 500ms. 영어만(당시). 한벗: 한국어 문미("~는데요", "~고요")에서의 TNR을 직접 측정 | A |
| 3 | [Daily — Smart Turn v3.2](https://www.daily.co/blog/smart-turn-v3-2-handling-noisy-environments-and-short-responses/) | 2026-01-07 | 짧은 발화 오분류 **-40%**, 모델 8MB/32MB, **가중치·학습 데이터·학습 코드 전부 공개**, 패딩 버그를 커뮤니티 제보로 수정. 한벗: 우리 한국어 짧은 응답 세트를 이 공개 데이터 형식으로 기여/평가 가능 | A |
| 4 | [Hume — Introducing EVI 3](https://www.hume.ai/blog/introducing-evi-3) | 2025-05-29 | ① 단일 자기회귀 모델이 텍스트·음성 토큰을 같이 처리, 시스템 프롬프트가 말투도 결정 ② 강화학습으로 선호 음성 품질 학습 ③ 평가 설계: 감정·스타일 30종 지시를 사람이 1~5점, 사용자 감정 이해는 9감정 중 8개에서 GPT-4o 우위(수치 미공개) ④ 체감 지연(사용자 말 끝~응답 시작): Gemini Live 평균 약 1.5초, GPT-4o 실시간 약 2.6초, Sesame 약 1초, EVI 3 0.9~1.4초. 한벗: **"감정 이해 평가"는 같은 문장을 9감정으로 연기하게 해 모델이 맞히는지 보는 방식** — 한국어 연기 코퍼스로 모사 가능 | A |
| 5 | [Kyutai — Delayed Streams Modeling (arXiv 2509.08753)](https://arxiv.org/abs/2509.08753) | 2025-09 | 지연 τ로 품질·지연 균형 조절, TTS는 **행동 스트림 + 텍스트 선행 스트림 l=2**, CFG 증류, ASR 지연 2.5초 기본·H100에서 400개 동시 처리하며 실시간. Unmute 전체 TTS 지연 약 750ms→450ms(분산 시). 한벗: LLM 스트리밍 위에서 2단어 선행 제공 | A |
| 6 | [Wagner 외 — Dawn of the transformer era in SER (arXiv 2203.07378)](https://arxiv.org/abs/2203.07378) | 2022 | 미세조정으로 긍정도 CCC **.635(MSP-Podcast)**, 성공 이유 **암묵적 언어 정보**, 성별 그룹 공정성 측정, 합성 음성 인과 실험. 한벗: STT 전사와 SER 융합의 근거, 화자 공정성 보고 | A |

| 7 | [MEDUSA (arXiv 2506.09556)](https://arxiv.org/abs/2506.09556) | 2025-06 | 소프트 타깃 제거 -8.23%, 4단계, RTX 3090 1장 | A |
| 8 | [Tzeng 외 Lessons Learnt (arXiv 2508.07282)](https://arxiv.org/abs/2508.07282) | 2025-08 | focal loss, 2단계(개별 미세조정 → 동결 융합) | A |
| 9 | [emotion2vec 이슈 #30 #39 #41 #46 #61](https://github.com/ddlBoJack/emotion2vec/issues) | 2024-06~2025-07 | 1~2초 환각, 로짓 마스킹, 리샘플 민감도 | A |
| 10 | [Pipecat expressive 소스](https://github.com/pipecat-ai/pipecat/tree/main/src/pipecat/expressive) | 2026 alpha | 지각 신호 → LLM 지시 → 태그 → 어댑터 (§B-5) | A |

**찾지 못한/불확실:** Cartesia·ElevenLabs의 1차 지연 글은 열람하지 못했고(검색 결과는 제3자 리뷰뿐, 모델 지연 Sonic Turbo 약 40ms / Sonic-3 약 90ms는 B~C, 종단 190ms는 제3자 기재), Hume EVI 후속 연구 글·Daily "voice AI latency" 글은 이번에 열람하지 않음. **한국어 개발자가 쓴 SER·음성 에이전트 엔지니어링 블로그는 검색(한국어 쿼리 3회)에서 실질적 글을 찾지 못함(C)** — 한국어 쪽은 학술지(koreascience) 논문뿐이었다.

---

## D. 한벗 재현 실험 제안

원칙: ① **화자 독립 분할**(EmoBox 규칙) ② 영어 대조 코퍼스(IEMOCAP 또는 MSP-Podcast 공개 부분)에서 같은 레시피로 논문 수치 근처가 나오는지 먼저 확인(구현 검증) ③ 한국어에서 같은 코드 ④ 지표 UA·WA·Macro-F1 + ECE. 시간·GPU는 **추정(C)**: 데이터 시간·대여 단가를 이번에 확인하지 못했다. KEMDy19/20 사용에는 ETRI 라이선스 동의 필요(KEMDy 공식 페이지는 이번 조사 중 접속 실패, 위키 `lab-etri-noh-kyoungju-kemdy` 참조).

| ID | 레시피(출처) | KEMDy/AI Hub 적용 | 소요(추정) | GPU |
|---|---|---|---|---|
| R0 | EmoBox IEMOCAP 5-fold + emotion2vec_base 선형 헤드로 논문 WA 71.8 근방 확인 | 파이프라인·지표 검증 | 반나절 | 12GB+ |
| R1 | **EmoBox 프로토콜**: 동결 마지막 층 → LayerNorm → 선형-ReLU-풀링-선형, LR{1e-3,1e-4}×은닉{128,256}, 100 epoch. 백본 = emotion2vec_base(768)/plus_large(1024), WavLM-large, Whisper-large-v3 인코더, team-lucid/hubert-base-korean, XLS-R-300M | KEMDy20(자유 대화)을 EmoBox 규칙(화자 독립 n-fold)으로 분할, 4·7클래스 | 특징 추출 1~2일 + 헤드 수 시간 | 24GB |
| R2 | S3PRL식 학습형 **층 가중합** vs 마지막 층(EmoBox 저자가 남긴 빈칸) | R1 상위 2개 백본 | +1일 | 24GB |
| R3 | **MEDUSA 축소판**: 소프트 타깃 + 균형 샘플링 + Manifold MixUp p=0.3 + 클래스 가중 + 모델 수프 | KEMDy 평가자별 라벨 유무 확인(C), 없으면 균형·focal만 | 3~5일 | 24GB |
| R4 | **Tzeng 2단계**: 음성·텍스트(KoBERT류) 각각 미세조정(배치 32, LR 1e-5, 20 epoch) → 동결 융합(LR 5e-6), 손실 focal vs 가중 CE vs 균형 샘플링 | 평가 전사는 **RTZR STT 출력**(운영 조건 모사) | 1주 | 24~40GB |
| R5 | **emotion2vec+ 제로샷 + 로짓 마스킹**(이슈 #41), 길이별(<1s, 1–2s, 2–4s, >4s) UA 분해 | KEMDy20 전체 | 1일 | 12GB |
| R6 | **리샘플 민감도**(이슈 #61): torchaudio vs sox vs 서비스 경로 → 라벨 뒤집힘 비율·KL | 표본 500+ | 1~2일 | 불필요 |
| R7 | **보정**: 검증셋 온도 스케일링, ECE, 위험-커버리지 곡선 | R1·R3 확률 출력(코드 직접 구현) | 3일 | CPU |
| R8 | 오디오-LLM 대조군(Qwen3-Omni 제로샷), 차원 헤드(audeering 구조 재현, KEMDy19 CCC 0.3573과 비교 B), SenseVoice 태그 병합(웃음·한숨 이벤트) | 필요 시 | 각 2~7일 | 24GB~80GB(C) |

**우선순위(첫 2주):** R0 → R5 → R6 → R1 → R2 → (R7 병행) → R3/R4. R5·R6은 단 며칠에 끝나고 곧바로 서비스 게이트 설계에 반영되며, 논문의 "문제 규정" 절에도 쓰인다.

**평가 위생:** 점수는 항상 (분할, 클래스 수, 지표)를 병기. SpeechBrain 78.7(무작위 분할), firdhokk 0.92(분할 불명), 한국어 HF 0.98(데이터 불명)은 표에 넣지 않는다.

---

## E. 빈 곳 · 라이선스 주의

### E-1. 비어 있는 것 (= 기회이자 위험)

1. **한국어 자연 대화 SER의 공개 재현 코드 부재.** KEMDy19/20·AI Hub로 훈련한 검증 가능한 공개 저장소를 찾지 못함. 비교 기준선은 우리가 만들어야 한다. 위험: 심사자가 "기준선이 없어 의미를 알 수 없다"고 할 수 있으므로 영어 대조(R0)와 EmoBox 형식 공개가 필수.
2. **EmoBox에 한국어가 없음.** emotion2vec+의 seed 단계(EmoBox 학술 데이터)와 의사 라벨 대규모 데이터에 한국어가 얼마나 있는지 **미공개**. 한국어 성능은 제로샷이 아니라 "분포 모름"으로 취급.
3. **보정·선택적 예측 구현 코드 부재**(§A-9).
4. **한국어 비언어(웃음·한숨·숨) TTS의 독립 평가 부재**(§B-2). 한국어 맞장구 코드도 없음(§B-6).
5. **emotion2vec+ 데이터 공학 상세 미공개**(모델카드 "추후 공개"). 논문에서 emotion2vec+를 "블랙박스 사전학습 모델"로 취급하고 데이터 오염 가능성 한계를 서술.
6. Odyssey 2024 우승 코드, SALMONN, DEER, 다수 Whisper-LoRA 저장소 README는 **이번에 열람하지 못함**(C).
7. GitHub 비인증 API 한도가 중간에 소진되어 일부 한국어 저장소 검색을 반복하지 못했다. "KEMDy 관련 공개 코드 없음"은 확정이 아니라 **미발견**.

### E-2. 라이선스 표 (2026-11-08, 코드/가중치 분리)

| 대상 | 코드 | 가중치 | 한벗 사용 판단 |
|---|---|---|---|
| emotion2vec / emotion2vec+ | MIT(README 배지) | FunASR MODEL_LICENSE v1.1: 자유 사용, **출처·모델명 유지**, 비방 시 자동 박탈 | 상용 서비스 가능성 높음(C: 모델카드 자체의 상업 해설 없음). 논문에서 서술적·정량적으로만 비판 |
| SenseVoice | MIT | 같은 협약, 공식 이슈 설명으로 **상업 허용·파생 가중치 비공개 가능**(출처 표기 필요) | 가능 |
| EmoBox | MIT(README 배지) | 해당 없음(코퍼스 각각의 약관 별도) | 코드 사용 가능, 코퍼스는 개별 확인 |
| audeering dim 모델 | w2v2-how-to MIT | **CC-BY-NC-SA-4.0** | 논문 실험 전용, 서비스 번들 금지(SA 조건으로 파생물 공유조건도 부담) |
| Qwen3-TTS / VoxCPM2 / Fun-CosyVoice3-0.5B-2512 / CSM-1B | Apache-2.0 | Apache-2.0 (HF 메타) | 가능(CSM은 영어 위주) |
| Fish S2-Pro / Drama 3 | Fish Audio Community License(매출 문턱) | **Fish Audio Research License** | 상용 제외, 청취 상한 전용 |
| Raon-Speech / SpeechChat 9B | README Apache-2.0 표기(코드) | **CC-BY-NC-4.0** | 비상업 연구 전용 |
