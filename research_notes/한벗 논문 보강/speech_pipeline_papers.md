# 한벗 음성 처리 축 논문 보강 노트

작성: researcher / 2026-10-26. 등급: A=arXiv·공식 페이지 직접 열람(초록 또는 본문 표), B=2차 출처(검색 요약·블로그), C=미검증. "초록만"은 본문 수치를 못 읽었다는 뜻. 기존 Wiki 논문(Moshi, Qwen-Omni, Step-Audio, salesforce 튜토리얼, taste2 등)은 재검색하지 않았다.

## 1. VAD (Silero / WebRTC / TEN)

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어 | 설계 시사점 | 등급 |
|---|---|---|---|---|---|---|
| McKinnon et al., Window Size Versus Accuracy Experiments in Voice Activity Detectors | 2026, arXiv (Google) | https://arxiv.org/abs/2601.17270 | Silero, WebRTC, RMS를 실제 오디오 스트림에서 윈도우 크기별로 비교. 결론: "Silero significantly outperforms WebRTC and RMS", hysteresis는 WebRTC에 이득. 초록에 수치 없음 | 언어 비특정(실환경 오디오) | Silero 선택 근거. 윈도우/hysteresis 튜닝이 정확도에 영향 | A(초록만) |
| Picovoice VAD benchmark (벤더) | 웹, 연도 불명 | https://picovoice.ai/docs/benchmark/vad/ | FPR 5%에서 TPR: Silero 약 87.7%, WebRTC 50% (검색 요약 인용) | 영어(LibriSpeech, 깨끗한 음성) | 벤더 자사 제품(Cobra) 비교라 이해충돌. 참고용 | B/C |
| TEN VAD (GitHub 자체 주장) | 2025, 논문 없음 | https://github.com/TEN-framework/ten-vad | WebRTC·Silero보다 정밀도 우수하다는 자체 주장 (검색 요약, 독립 검증 없음) | 비특정 | 논문 없음. 채택 시 한국어 자체 측정 필요 | C |

- 학술 논문으로 Silero를 직접 다룬 것은 위 1건뿐이고 초록 수준이다. Silero 자체 기술 보고서는 찾지 못했다.
- Smart Turn v3 블로그가 "Silero 같은 VAD와 함께 쓰도록 설계"라고 명시한다(섹션 2 참고). 즉 VAD는 Silero 고정이 파이프라인 정합성상 자연스럽다.
- 모바일·소음 환경 프레임당 지연 수치, 한국어 VAD 수치는 못 찾았다.

## 2. 턴 종료 감지 / 엔드포인팅

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어 | 설계 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Daily, Smart Turn v3 발표 블로그 (논문 없음) | 2025, 블로그 | https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/ | 8M 파라미터, 약 8MB, int8 ONNX. 23개 언어 중 Korean 정확도 96.85%(English 94.31%, 2,846샘플). CPU 추론 12.6ms(c7a.2xlarge)~59.8ms(c8g.medium)~94.8ms(t3.medium), L40S GPU 3.3ms. 입력 최대 8초. 벤치마크는 "진행 중"이라 타 모델과의 독립 비교 없음 | 한국어 포함 | 추론 지연은 TTFA 예산에서 무시 가능(수십 ms). 한국어 96.85%는 자체 테스트셋 수치이므로 한벗 실제 대화 데이터로 재측정 필요. 학술 논문은 없다 | A(블로그 본문, 논문 아님) |
| LiveKit turn detector 모델 카드 | 2025, 모델 카드 | https://docs.livekit.io/agents/logic/turns/turn-detector | 14개 언어, Korean TPR 99.3% / TNR 94.5% (검색 요약) | 한국어 포함 | Smart Turn의 대안 후보. 텍스트(STT 결과) 기반이라 STT 지연과 결합됨 | B |
| Ekstedt & Skantze, TurnGPT | 2020, Findings of EMNLP | https://arxiv.org/abs/2010.10874 | 언어적 완결성으로 turn-shift 예측, 두 baseline 능가(초록에 수치 없음). 완결 시점 투영(projection)도 탐구 | 영어 | 의미 기반 엔드포인팅의 학술 근거. LLM으로 "말이 끝났는가" 판단하는 접근의 원형 | A(초록) |
| Ekstedt & Skantze, Voice Activity Projection | 2022, Interspeech (arXiv) | https://arxiv.org/abs/2205.09812 | 자기지도 VAP 목적함수, 턴 전환·백채널 예측 4개 zero-shot 과제에서 prior work 능가(수치 없음) | 영어 | 음향 기반 턴 예측의 학술 근거. Smart Turn류와 같은 계열 | A(초록만) |
| Inoue et al., Multilingual Turn-taking Prediction Using VAP | 2024, LREC-COLING | https://arxiv.org/abs/2403.06487 | 영어·중국어·일본어. 단일언어 모델은 타 언어에서 일반화 불량, 3개 언어 공동학습 모델은 단일언어 모델과 동급. 한국어 미포함 | 영/중/일 | 한국어 턴 예측은 한국어 데이터 학습 또는 다언어 학습이 필요하다는 간접 근거 | A(초록만) |
| Skantze, Turn-taking in Conversational Systems and Human-Robot Interaction: A Review | 2021, Computer Speech & Language 67 | (DOI 직접 못 열음. KTH 프로젝트 페이지 참고문헌 목록에서 서지 확인) | 열람 못 함 | 비특정 | 정식 서지만 확인. 본문 인용 전 직접 열람 필요 | C(서지만 B) |
| Park et al., Improving Backchannel Prediction Leveraging Sequential and Attentive Context Awareness | 2024, Findings of EACL | https://preview.aclanthology.org/setup/2024.findings-eacl.118 | 한국어 데이터셋에서 context-free 대비 +1.3%, 영어 +1.8% (검색 요약) | 한국어+영어 | 한국어 백채널 예측 학술 사례(ETRI 계열). 본문 미열람 | B |

- 수치로 본 지연-오절단 트레이드오프: 직접 보고한 논문은 찾지 못했다. Smart Turn v3의 False Positive(조기 종료) 비율은 블로그에서 언어별로 보고하며 Vietnamese가 14.84%로 가장 나쁘다. 한국어 FPR은 본문에서 확인하지 못했다.
- 한국어 전용 엔드포인팅 논문은 찾지 못했다(Namo-Turn-Detector-v1-Korean 모델 카드가 검색에 노출되었으나 열지 않음).
- Smart Turn 학습 데이터는 v3.1 설명에서 영어·스페인어 중심이라는 언급이 있다(검색 요약, B). 한국어 96.85%가 어떤 한국어 데이터인지 불명확하므로 반드시 자체 검증.

## 3. Barge-in / 끼어들기

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어 | 설계 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Lin et al., Full-Duplex-Bench | 2025, ASRU | https://arxiv.org/abs/2503.04721 | Table III(HTML 본문). 사용자 끼어들기 응답 지연(초): Moshi 0.257, Gemini Live 1.183, Freeze-Omni 1.409, dGSLM 2.531. 일시정지 처리 TOR(낮을수록 좋음): Gemini Live 0.255~0.310, Moshi 0.985. 백채널 빈도: dGSLM 0.015, 나머지 ≤0.012 | 영어 | 끼어들기 후 반응이 1초 이상 걸리는 모델이 있음. cascade 기준선으로 1초 이내 중단·재응답을 목표 삼는 근거. 표 열 매핑은 평탄화 HTML 기준 추론 포함 | A(본문 표) |
| Arora et al., Talking Turns: Benchmarking Audio Foundation Models on Turn-Taking Dynamics | 2025, ICLR | https://arxiv.org/abs/2503.01174 | Switchboard 기반 평가. 모델이 말할 때를 잘 못 알아채고, 지나치게 공격적으로 끼어들며, 백채널을 거의 생성하지 않는다(초록 정성 서술) | 영어 | 우리가 "응/음"에 TTS를 끊지 않는 정책이 학술적으로 타당. 수치는 본문 미열람 | A(초록만) |
| Ekstedt & Skantze (VAP) | 2022 | https://arxiv.org/abs/2205.09812 | 백채널 vs 턴 전환을 구분 예측하는 과제 포함 | 영어 | 백채널 vs 실제 끼어들기 분류에 쓸 수 있는 접근 | A(초록만) |

- TTS 스트림 취소 방법(오디오 큐 flush, LLM 생성 취소)을 다룬 학술 논문은 못 찾았다. 엔지니어링 영역으로 보인다.
- 한국어 백채널("응", "음") 예측 연구는 Park et al.(ETRI, EACL 2024)과 ETRI Journal의 스트리밍 백채널+ASR 공동 모델이 있으나(후자는 검색 스니펫만, B) 본문은 열지 못했다.
- Full-Duplex-Bench는 full-duplex 모델 평가이므로 cascade 직접 비교는 아니다. 지연 기준선으로만 쓸 것.

## 4. 스트리밍 TTS 지연 / 청킹 / 한국어 품질

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어 | 설계 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Du et al., CosyVoice 2 | 2024, arXiv | https://arxiv.org/abs/2412.10117 | 본문 표: 스트리밍(CosyVoice2-S) vs 오프라인 한국어 test-ko CER 9.06 vs 7.98, 한국어 NMOS 3.60 vs 3.73. 한국어 학습데이터 2,200h. 첫 패킷 지연(ms)은 본문에 실측 수치 없음(수식만) | 한국어 포함(zh/en/ja/ko) | 스트리밍 전환 시 한국어 품질 저하는 작음(CER +1.08p, NMOS -0.13). 150ms 지연 수치는 이 논문 본문에서 확인 못 했으니 인용 금지 | A(본문 표) |
| Torgashov, Henter, Skantze, VoXtream | 2025, arXiv | https://arxiv.org/abs/2509.15969 | 초기 지연 102ms(GPU), 공개 스트리밍 TTS 중 최저라고 주장 | 언어 초록에 명시 없음(영어로 추정, 미확인) | 이론적 하한 참고치. 한국어 지원 불명 | A(초록만) |
| Bai et al., SpeakStream | 2025, arXiv (Apple) | https://arxiv.org/abs/2505.19206 | LLM 출력 스트림에서 점진 생성, "SOTA first-token latency" 주장, 초록에 수치 없음 | 영어로 추정(미확인) | LLM→TTS 직결 구조의 학술 사례. 문장 분할 방식 대안 | A(초록만) |
| Korean TTS MOS 계열 (TTS-by-TTS 등) | 2020~ | https://arxiv.org/abs/2010.13421 | 한국어 청취자 18명, MOS 3.74 (검색 요약) | 한국어 | 오래된 비스트리밍 연구. Typecast/ElevenLabs 평가에 직접 쓰기엔 약함 | B |

- 문장 vs 절 단위 청킹이 지각된 자연스러움에 미치는 영향을 사용자 연구로 비교한 논문은 찾지 못했다. 블로그 수준에서 "문장 경계 청킹이 운율에 유리, 절 단위는 지연에 유리"라는 서술만 확인(C).
- 검색 요약에서 "naive streaming MOS 3.46 vs 어댑터 사용 4.12"라는 수치가 나왔으나 출처 논문을 특정·열람하지 못해 채택하지 않는다.
- Typecast, ElevenLabs의 상용 TTS 학술 평가는 없다.

## 5. 한국어 STT

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어 | 설계 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Park, Cho, Choo, Evaluating ASR Systems for Korean Meteorological Experts | 2024, arXiv | https://arxiv.org/abs/2410.18444 | KsponSpeech eval CER(%): zero-shot Whisper tiny 32.67 / small 16.75 / medium 14.33 / large-v2 14.66. large-v2를 KsponSpeech로 미세조정 시 10.48. 도메인(날씨) 데이터 미세조정은 해당 도메인 CER 18.35→10.64이나 KsponSpeech CER는 15.81로 악화 | 한국어 | 한국어 대화체(KsponSpeech) 기준 Whisper 자유발화 CER 약 14~15%. 도메인 적응 시 일반 성능 저하 트레이드오프. 비스트리밍 | A(본문 표) |
| Bang et al., KsponSpeech | 2020, Applied Sciences | https://www.mdpi.com/2076-3417/10/19/6936 | 열람 실패(403). 검색 요약: 약 969시간 대화 코퍼스, 2,000명 화자, 간투사·반복·단편 disfluency 태그 | 한국어 | 한국어 구어 표준 코퍼스. 서지는 검색 요약 기준이라 연도·저자 재확인 필요 | C |
| Feature Space Interpolation (ASR 오류 vs 비유창성) | 2021, arXiv | https://arxiv.org/abs/2108.01812 | KsponSpeech에서 토큰 수준 오류율 0.06(E2E) vs 0.15(전통 파이프라인) (검색 요약) | 한국어 | 비유창성(간투사)을 STT가 어떻게 다루는지 관련. 본문 미열람 | B |

- ReturnZero 자체 스트리밍 지연·CER를 독립 검증한 학술 논문은 없다. 기존 Wiki의 src-rtzr-2026-korean-stt-benchmark가 유일한 근거다.
- 스트리밍 Korean ASR의 지연(ms) 학술 수치, 한국어 대화 비유창성 처리(Whisper가 "음", "어"를 삭제하는 경향 등)에 대한 논문은 못 찾았다.

## 6. 종단 지연 / 인간 턴 간격 / 지각

| 논문 | 연도·학회 | URL | 핵심 수치 | 언어 | 설계 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Stivers et al., Universals and cultural variation in turn-taking in conversation | 2009, PNAS 106(26) | https://doi.org/10.1073/pnas.0903616106 (PNAS 403, 서지는 MPI·emcawiki 검색 결과로 확인) | 10개 언어. 모든 언어에서 겹침 회피와 턴 간 침묵 최소화. 언어별 평균 간격 차이는 교차언어 평균 ±250ms 내. (유명한 "약 200ms"는 이 초록 수치가 아님) | 10개 언어(한국어 Yoon 저자 참여로 Korean 포함 추정, 미확인) | 목표 TTFA 1.0s는 인간 간격의 약 5배. 달성 불가 구간이므로 "무응답으로 느끼지 않는 선"을 별도로 정의해야 함 | B(초록 요약) |
| Levinson & Torreira, Timing in turn-taking and its implications for processing models of language | 2015, Frontiers in Psychology 6:731 | https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00731/full | 턴 간격 약 200ms, 언어 생성 지연은 600ms 이상. 따라서 화자는 상대 턴 종료를 예측해 미리 준비해야 한다 | 비특정 | 예측적 엔드포인팅(TurnGPT, VAP)과 LLM 선행 생성(speculative) 설계의 이론적 근거 | B(검색 요약) |
| Ok, Yoo, Lee, Speculative End-Turn Detector for Efficient Speech Chatbot Assistant | 2026, ACL | 검색 스니펫만(URL 미확보) | OpenETD 데이터셋. 내용 미확인 | 미확인 | 후보. 직접 열람 필요 | C |

- 음성 에이전트 응답 지연이 지각된 자연스러움에 미치는 영향을 정량화한 학술 논문은 못 찾았다. 벤더 블로그에서 "1초 이내"가 자주 인용되나 통제 실험이 아니다.
- 본 파이프라인 예산(1.4~1.5s)은 인간 평균 간격의 7배 수준이므로, 대기 중 "음…" 같은 필러 오디오 같은 완충 설계가 필요한지는 사용자 테스트로 정해야 한다.

## 빈 곳

- Silero VAD 공식 논문·기술 보고서, TEN VAD 논문, 모바일 소음 환경 VAD 오탐률, 프레임당 지연 수치.
- Smart Turn v3의 학술 논문(없음, 블로그/모델 카드만), 한국어 FPR(조기 종료율), 한국어 엔드포인팅 논문.
- Skantze 2021 리뷰 본문(미열람), Full-Duplex-Bench v1.5, Talking Turns 본문 수치.
- 한국어 백채널("응", "음") 때문에 생기는 false barge-in 수치, TTS 취소 구현에 관한 학술 연구.
- Typecast/ElevenLabs 한국어 TTS의 TTFB 학술 측정, CosyVoice 2의 150ms 지연 근거(본문에서 확인 못 함), 문장 vs 절 청킹 사용자 연구, F5-TTS·Matcha-TTS·XTTS 스트리밍 지연(이번에 열람 안 함).
- 스트리밍 한국어 ASR 지연(ms), 한국어 구어 비유창성 처리 연구, KsponSpeech 원 논문 직접 열람.
- 응답 지연이 음성 에이전트 자연스러움 지각에 미치는 통제 실험.
