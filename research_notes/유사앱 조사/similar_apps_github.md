# 한벗 참고용 오픈소스 GitHub 프로젝트 조사

- 조사일: 2026-11-06
- 목적: 한국어 음성 고민 대화 동반자 "한벗"(React + Pipecat + RTZR STT + Smart Turn v3 + emotion2vec+ + Claude + Typecast TTS + Postgres/pgvector)이 코드·패턴·데이터를 참고할 수 있는 오픈소스 레포를 정리함
- 수집 방법: GitHub REST API(별 수·마지막 push·라이선스, 2026-11-06 조회)와 각 레포 페이지 직접 열람으로 확인함. API 조회 한도 초과로 일부 레포는 페이지 열람 값만 기재함. 페이지에서 날짜가 보이지 않은 항목은 "확인 필요"로 표시함
- 별 수는 조회 시점 근사치임

---

## 1. 한눈에 보기

| # | 레포 | 분류 | 별(약) | 라이선스 | 한국어 지원 | 한벗 활용 |
|---|---|---|---|---|---|---|
| 1 | [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) | A 프레임워크 | 17.1k | BSD-2 | 프레임워크 자체는 언어 무관 | 오케스트레이터 본체. Mem0 메모리 서비스, Flows(구조화 대화) 내장 |
| 2 | [pipecat-ai/pipecat-examples](https://github.com/pipecat-ai/pipecat-examples) | A 예제 | 0.4k | BSD-2 | 무관 | React 클라이언트(simple-chatbot), instant-voice, open-telemetry 지연 추적 |
| 3 | [pipecat-ai/smart-turn](https://github.com/pipecat-ai/smart-turn) | A 턴감지 | 1.7k | BSD-2 | 지원(23개 언어에 한국어 포함) | 이미 채택. 한국어 오탐 평가 및 미세조정 코드 참고 |
| 4 | [pipecat-ai/pipecat-flows](https://github.com/pipecat-ai/pipecat-flows) | A 대화흐름 | 0.6k | BSD-2 | 무관 | 위기 대응 단계 흐름 설계 (현재 아카이브, core로 통합) |
| 5 | [livekit/agents](https://github.com/livekit/agents) | A 프레임워크 | 15.1k | Apache-2.0 (턴감지 모델 별도) | 확인 필요 | 시맨틱 턴감지·테스트 프레임워크 패턴 비교용 |
| 6 | [TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework) | A 프레임워크 | 11.2k | Apache-2.0 + 추가 제약 | README 한국어판 있음 | TEN VAD, 메모리 결합 음성비서 예제(memU) |
| 7 | [vocodedev/vocode-core](https://github.com/vocodedev/vocode-core) | A 프레임워크 | 3.8k | MIT | 무관 | 구조 참고만 (2024-11 이후 정체) |
| 8 | [bolna-ai/bolna](https://github.com/bolna-ai/bolna) | A 프레임워크 | 0.8k | MIT | 확인 필요 | 전화형 음성 에이전트 구성 비교 |
| 9 | [openai/openai-realtime-console](https://github.com/openai/openai-realtime-console) | A 예제 | 3.6k | MIT | 무관 | React 기반 실시간 음성 디버깅 UI(이벤트 로그) 설계 참고 |
| 10 | [HumeAI/hume-api-examples](https://github.com/HumeAI/hume-api-examples) | A·B 감정음성 | 0.25k | MIT | 확인 필요 | 감정 인지 음성 에이전트의 채팅기록·CLM(커스텀 LLM) 연동 패턴 |
| 11 | [kyutai-labs/moshi](https://github.com/kyutai-labs/moshi) | A 풀듀플렉스 | 11.4k | 코드 MIT/Apache, 가중치 CC-BY 4.0 | 확인 필요(한국어 미표기) | 지연 목표(160~200ms) 벤치마크 기준점 |
| 12 | [fixie-ai/ultravox](https://github.com/fixie-ai/ultravox) | A 음성LLM | 4.6k | MIT | 미표기(자체 학습 필요) | STT 생략형 구조 비교 참고 |
| 13 | [ddlBoJack/emotion2vec](https://github.com/ddlBoJack/emotion2vec) | B SER | 1.2k | README 배지 MIT(API상 미지정) | 다국어 평가, 한국어 별도 확인 필요 | 이미 채택. 9감정 라벨·점수 활용, 다운스트림 학습 코드 |
| 14 | [modelscope/FunASR](https://github.com/modelscope/FunASR) | B 툴킷 | 20.9k | MIT(모델은 별도 약관) | SenseVoice 통해 지원 | emotion2vec+ 추론 런타임(AutoModel) |
| 15 | [FunAudioLLM/SenseVoice](https://github.com/FunAudioLLM/SenseVoice) | B ASR+SER | 9.7k | 코드 MIT, 가중치 FunASR 약관 | 지원(중/광/영/일/한) | 울음·웃음 등 오디오 이벤트 + 감정 동시 추출, 백업 STT |
| 16 | [speechbrain/speechbrain](https://github.com/speechbrain/speechbrain) | B 툴킷 | 11.9k | Apache-2.0 | 레시피별 상이 | wav2vec2 SER 레시피로 한국어 SER 미세조정 실험 |
| 17 | [mercy-project/korean-audio-sentiment-analysis](https://github.com/mercy-project/korean-audio-sentiment-analysis) | B·D 한국어 SER | 6 | 미표기 | 한국어 | AI Hub 음성 기반 한국어 SER 베이스라인 구조 참고 |
| 18 | [SmartFlowAI/EmoLLM](https://github.com/SmartFlowAI/EmoLLM) | C 정신건강 LLM | 1.8k | MIT | 중국어 | 페르소나·RAG·평가 구조, 면책 문구 |
| 19 | [scutcyr/SoulChat](https://github.com/scutcyr/SoulChat) | C | 0.8k | Apache-2.0 | 중국어 | 공감형 다회차 응답 스타일 참고 |
| 20 | [qiuhuachuan/smile](https://github.com/qiuhuachuan/smile) (MeChat) | C | 0.5k | CC0-1.0 | 중국어 | 단일턴 QA→다회차 대화 합성(SMILE) 방법 |
| 21 | [thu-coai/PsyQA](https://github.com/thu-coai/PsyQA) | C 데이터 | 0.3k | 미지정 | 중국어 | 지원 전략 라벨 체계 |
| 22 | [thu-coai/Emotional-Support-Conversation](https://github.com/thu-coai/Emotional-Support-Conversation) (ESConv) | C 데이터 | 0.4k | NOASSERTION | 영어 | 정서지원 전략(질문·재진술·감정반영 등) 프레임 → 프롬프트 설계 |
| 23 | [CAS-SIAT-XinHai/CPsyCoun](https://github.com/CAS-SIAT-XinHai/CPsyCoun) | C | 0.26k | CC-BY-4.0 | 중국어 | 상담 품질 평가 4축(포괄성·전문성·진정성·안전) |
| 24 | [SteveKGYang/MentalLLaMA](https://github.com/SteveKGYang/MentalLLaMA) | C·E | 0.3k | MIT | 영어 | 설명 가능한 정신건강 분석(위험 신호 판단+근거) 평가 아이디어 |
| 25 | [EmoCareAI/ChatPsychiatrist](https://github.com/EmoCareAI/ChatPsychiatrist) | C | 0.16k | Apache-2.0 | 영어 | Psych8k 데이터·상담 LLM 평가 |
| 26 | [haven-jeon/KoGPT2-chatbot](https://github.com/haven-jeon/KoGPT2-chatbot) | D | 0.18k | MIT | 한국어 | 감정 라벨 조건부 응답 생성 구조, songys 챗봇 데이터 |
| 27 | [SKTBrain/KoBERT](https://github.com/SKTBrain/KoBERT) | D | 1.4k | Apache-2.0 | 한국어 | 텍스트 감정·위기 분류기 백본 |
| 28 | [AIproject-SWU/KoBERT_FeelingClassification](https://github.com/AIproject-SWU/KoBERT_FeelingClassification) | D | 0 | 미표기 | 한국어 | STT 스트리밍+KoBERT 7감정 분류 연결 예시 |
| 29 | [passing2961/KorEmpatheticDialogues](https://github.com/passing2961/KorEmpatheticDialogues) | D 데이터 | 1 | MIT(데이터 CC-BY-4.0, 연구용) | 한국어(번역) | 공감 응답 평가셋·few-shot 예시 |
| 30 | [smilegate-ai/OPELA](https://github.com/smilegate-ai/OPELA) | D 데이터 | 29 | 확인 필요 | 한국어(사람 작성) | 공감·친밀도 평가 척도, 장기 대화 품질 지표 |
| 31 | [myshell-ai/MeloTTS](https://github.com/myshell-ai/MeloTTS) | D TTS | 7.7k | MIT | 한국어 지원 | Typecast 장애 시 폴백 TTS, 로컬 데모 |
| 32 | [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) | D STT | 26.5k | MIT | Whisper 다국어(한국어 포함) | RTZR 폴백·오프라인 평가용 STT |
| 33 | [sooftware/kospeech](https://github.com/sooftware/kospeech) | D STT | 0.6k | Apache-2.0 | 한국어 | 학습용 참고만 (아카이브됨) |
| 34 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | E 메모리 | 68.5k | Apache-2.0 | 언어 무관(LLM 의존) | Pipecat Mem0MemoryService로 바로 연결, pgvector 백엔드 가능성 |
| 35 | [letta-ai/letta](https://github.com/letta-ai/letta) | E 메모리 | 25.4k | Apache-2.0 | 언어 무관 | 에이전트 자체 메모리 편집 패턴 |
| 36 | [getzep/graphiti](https://github.com/getzep/graphiti) | E 메모리 | 32.6k | Apache-2.0 | 언어 무관 | 시간 유효기간 있는 사실 그래프 → "예전엔 그랬는데 지금은" 관리 |
| 37 | [getzep/zep](https://github.com/getzep/zep) | E 메모리 | 5.0k | Apache-2.0 | 언어 무관 | 메모리 벤치마크·평가 하네스 |
| 38 | [meta-llama/PurpleLlama](https://github.com/meta-llama/PurpleLlama) | E 안전 | 4.5k | 평가코드 MIT, 모델 Llama 라이선스 | Llama Guard 3 다국어(한국어 확인 필요) | 입·출력 안전 분류기 2차 방어선 |

---

## 2. 분류별 상세

### A. 음성 에이전트 프레임워크·예제

**pipecat-ai/pipecat** — https://github.com/pipecat-ai/pipecat
- 소유: Daily 및 커뮤니티 / 별 약 17.1k / 마지막 push 2026-11-05 / BSD-2-Clause
- 내용: 음성·멀티모달 실시간 AI용 오픈소스 프레임워크임. 프레임 기반 파이프라인(전송→VAD/턴감지→STT→LLM→TTS)
- 스택: Python, WebRTC(Daily/SmallWebRTC), 다수 STT/LLM/TTS 플러그인
- 한벗에 쓸 수 있는 점: Mem0MemoryService가 LLM 앞단에서 `user_id` 기준으로 기억을 검색해 컨텍스트에 주입하고 저장은 백그라운드로 처리함(`search_limit`, `search_threshold`, `local_config`로 자체 호스팅 가능). 이 위치·구조를 그대로 본떠 pgvector 기반 커스텀 메모리 프로세서를 만들 수 있음. Flows가 core(`pipecat.flows`, pipecat-ai 1.5.0+)로 통합되어 위기 대응 단계 전환에 활용 가능함
- 주의: 릴리스 주기가 빨라 API 변경이 잦음. 버전 고정 필요

**pipecat-ai/pipecat-examples** — https://github.com/pipecat-ai/pipecat-examples
- 별 약 404 / 마지막 push 2026-11-04 / BSD-2-Clause
- 내용: simple-chatbot(React·JS·Swift·Kotlin·RN 클라이언트), push-to-talk, instant-voice(접속 즉시 대화), open-telemetry(Langfuse·LangSmith·Jaeger 추적), studypal(학습 동반자), travel-companion, storytelling-chatbot 등
- 한벗에 쓸 수 있는 점: simple-chatbot의 React 클라이언트를 프론트 출발점으로, open-telemetry로 단계별 지연(STT·LLM 첫 토큰·TTS 첫 오디오) 측정, instant-voice로 첫 인사 지연 단축
- 주의: 감정·심리 지원 전용 예제나 Claude 전용 예제는 페이지상 확인되지 않음

**pipecat-ai/smart-turn** — https://github.com/pipecat-ai/smart-turn
- 별 약 1.7k / 마지막 push 2026-01-29 / BSD-2-Clause
- 내용: 오디오 기반 발화 종료(턴) 판정 모델. 현재 v3.2, 23개 언어(한국어 포함), 약 8M 파라미터, CPU int8 약 8MB, CPU에서 10ms~100ms 미만 추론
- 한벗에 쓸 수 있는 점: 고민 이야기 특성상 말 사이 쉼이 길어 조기 끼어들기가 생기기 쉬움. 레포의 학습·평가 코드로 한국어 쉼 많은 발화 샘플을 모아 임계값 조정·미세조정 검토 가능
- 주의: 한국어 정확도 수치는 레포에서 따로 확인하지 못함(확인 필요)

**pipecat-ai/pipecat-flows** — https://github.com/pipecat-ai/pipecat-flows
- 별 약 626 / BSD-2-Clause / 아카이브(읽기 전용)
- 내용: 구조화 대화 프레임워크. 현재 Pipecat core로 이관됨
- 한벗에 쓸 수 있는 점: "일반 대화 → 위험 신호 확인 → 안전 확인 질문 → 전문기관 안내" 같은 노드 전환을 코드로 고정할 수 있음
- 주의: 독립 패키지는 deprecated. core의 `pipecat.flows` 사용 필요

**livekit/agents** — https://github.com/livekit/agents
- 별 약 15.1k / 마지막 push 2026-11-05 / 프레임워크 Apache-2.0, 턴감지 모델은 LiveKit Model License
- 내용: 실시간 음성 에이전트 프레임워크. 트랜스포머 기반 시맨틱 턴감지, 텔레포니, MCP, 내장 테스트 프레임워크
- 한벗에 쓸 수 있는 점: 에이전트 대화 테스트 프레임워크 방식(시나리오 기반 회귀 테스트)을 한벗 위기 시나리오 테스트에 차용 가능
- 주의: 턴감지 모델 라이선스가 별도임. 한국어 지원 여부 페이지상 미확인. 공식 예제 레포 livekit-examples/python-agents-examples는 API상 archived 상태임

**TEN-framework/ten-framework** — https://github.com/TEN-framework/ten-framework
- 별 약 11.2k / 마지막 push 2026-11-05 / Apache-2.0 + 추가 제약(루트 LICENSE 확인 필요)
- 내용: 대화형 음성 AI 프레임워크. TEN VAD, TEN Turn Detection, memU 메모리 결합 음성비서 예제
- 한벗에 쓸 수 있는 점: TEN VAD를 Silero 대비 비교 실험 후보로 사용, 메모리 결합 음성비서 예제 구조 참고
- 주의: 라이선스에 추가 제약이 있어 상용화 전 법무 검토 필요

**vocodedev/vocode-core** — https://github.com/vocodedev/vocode-core
- 별 약 3.8k / 마지막 push 2024-11-15 / MIT
- 내용: 모듈형 음성 LLM 에이전트 라이브러리
- 한벗에 쓸 수 있는 점: 초기 음성 에이전트 구조(전사기·에이전트·합성기 분리) 학습용
- 주의: 2년 가까이 push 없음. 실사용 비추천

**bolna-ai/bolna** — https://github.com/bolna-ai/bolna
- 별 약 816 / 마지막 push 2026-11-05 / MIT
- 내용: 전화 중심 대화형 음성 에이전트 프레임워크
- 한벗에 쓸 수 있는 점: 향후 전화(콜) 채널 확장 시 구성 참고
- 주의: 한국어 지원 및 세부 구조는 확인 필요

**openai/openai-realtime-console** — https://github.com/openai/openai-realtime-console
- 별 약 3.6k / 마지막 push 2025-08-28 / MIT
- 내용: Realtime API 검사·디버깅용 React 앱
- 한벗에 쓸 수 있는 점: 서버 이벤트 로그를 실시간으로 보여주는 개발자용 화면 구성 → 한벗 내부 디버그 패널(턴감지·감정 라벨·지연 표시)에 차용
- 주의: OpenAI API 전용 코드라 그대로 쓰지 못함

**HumeAI/hume-api-examples** — https://github.com/HumeAI/hume-api-examples
- 별 약 253 / 마지막 push 2026-11-05 / MIT
- 내용: Hume EVI(감정 인지 음성 인터페이스) 예제 약 22개, TTS 예제 9개. chat-history, function-calling, CLM(커스텀 언어모델 SSE/WSS) 등
- 한벗에 쓸 수 있는 점: "음성 감정 신호 + 외부 LLM" 결합 방식(CLM 예제)과 대화 기록 조회 패턴이 한벗의 emotion2vec+ → Claude 구조와 가장 유사함
- 주의: Hume 유료 API 의존. Claude 사용 예제는 페이지상 없음

**kyutai-labs/moshi** — https://github.com/kyutai-labs/moshi
- 별 약 11.4k / 마지막 push 2026-09-09 / 코드 MIT(Python)·Apache(Rust), 가중치 CC-BY 4.0
- 내용: 풀듀플렉스 음성-텍스트 대화 모델. 이론 지연 160ms, L4 GPU 실측 약 200ms
- 한벗에 쓸 수 있는 점: 응답 지연 목표치의 상한 기준점, 맞장구(백채널) 설계 아이디어
- 주의: 한국어 지원 미표기. 상담형 대화 제어(안전·메모리)가 어려움

**fixie-ai/ultravox** — https://github.com/fixie-ai/ultravox
- 별 약 4.6k / 마지막 push 2025-12-12 / MIT
- 내용: 음성을 직접 입력받는 멀티모달 LLM(Llama 3.3 70B 기반, 8B 변형)
- 한벗에 쓸 수 있는 점: STT 단계를 없앤 구조와의 지연 비교 근거
- 주의: 지원 언어 미표기, 한국어는 자체 학습 필요. Claude 대체는 비현실적

### B. 음성 감정 인식(SER) + LLM

**ddlBoJack/emotion2vec** — https://github.com/ddlBoJack/emotion2vec
- 별 약 1.2k / 마지막 push 2024-12-23 / README 배지 MIT(GitHub API는 라이선스 미지정, 확인 필요)
- 내용: ACL 2024 emotion2vec 공식 코드. emotion2vec+ seed(201h)/base(4,788h)/large(42,526h). 9개 라벨(angry, disgusted, fearful, happy, neutral, other, sad, surprised, unknown). `AutoModel(model="iic/emotion2vec_plus_large", hub="hf")`로 `labels`·`scores`·`feats` 반환
- 한벗에 쓸 수 있는 점: 단일 라벨보다 `scores` 분포를 써서 "sad+fearful 합이 임계 이상이고 텍스트는 중립"일 때만 "목소리가 조금 무거워 보이는데 괜찮으세요?" 같은 확인 질문을 생성하는 규칙에 활용. `feats`로 한국어 데이터(KEMDy19/20 등) 소규모 다운스트림 분류기 재학습 가능
- 주의: 마지막 업데이트 2024-12. 한국어 단독 성능 수치 미확인. 모델 가중치 약관은 모델 카드 별도 확인 필요

**modelscope/FunASR** — https://github.com/modelscope/FunASR
- 별 약 20.9k / 마지막 push 2026-11-05 / MIT(모델별 약관 별도)
- 내용: ASR·VAD·구두점·화자분리 툴킷. emotion2vec 권장 추론 경로
- 한벗에 쓸 수 있는 점: emotion2vec+ 서빙 시 FunASR 런타임 사용, `hub="hf"`로 해외 다운로드
- 주의: 의존성이 무거움. SER만 별도 컨테이너로 분리 권장

**FunAudioLLM/SenseVoice** — https://github.com/FunAudioLLM/SenseVoice
- 별 약 9.7k / 코드 MIT, 가중치 FunASR 모델 라이선스(공식 가중치 상업 이용 허용으로 안내됨) / 마지막 활동 확인 필요
- 내용: 비자기회귀 ASR + 감정 인식 + 오디오 이벤트(웃음·울음·기침 등) 탐지. 공개 체크포인트는 한국어 포함 5개 언어
- 한벗에 쓸 수 있는 점: "울음" 이벤트 탐지를 감정 신호 보조로 사용, RTZR 장애 시 한국어 백업 STT 후보
- 주의: 울음 등 이벤트 정확도는 전문 모델보다 낮다고 레포가 밝힘. 단독 판단 근거로 쓰면 안 됨

**speechbrain/speechbrain** — https://github.com/speechbrain/speechbrain
- 별 약 11.9k / 마지막 push 2026-10-14 / Apache-2.0
- 내용: PyTorch 음성 툴킷. 감정 인식 등 레시피 제공
- 한벗에 쓸 수 있는 점: wav2vec2 계열 SER 레시피를 한국어 데이터로 미세조정해 emotion2vec+와 비교(베이스라인)
- 주의: 한국어 사전학습 SER 모델은 확인하지 못함

**mercy-project/korean-audio-sentiment-analysis** — https://github.com/mercy-project/korean-audio-sentiment-analysis
- 별 6 / 라이선스 미표기 / 커밋 8개
- 내용: AI Hub 멀티모달(135)·자유대화 음성(105) 데이터로 멜스펙트로그램 + Inception v3 2분류 감성 분석
- 한벗에 쓸 수 있는 점: AI Hub 한국어 음성 데이터 전처리 흐름 참고
- 주의: 소규모·저활동, 라이선스 없음 → 코드 복사 금지, 아이디어만 참고

### C. 정신건강·정서지원 LLM

**SmartFlowAI/EmoLLM** — https://github.com/SmartFlowAI/EmoLLM
- 별 약 1.8k / 마지막 push 2026-06-18 / MIT / 중국어
- 내용: InternLM·Qwen·GLM 등 여러 베이스로 미세조정한 정신건강 LLM. 상담사·"아이웨이" 등 페르소나, RAG, 평가 폴더, TTS 디지털휴먼
- 한벗에 쓸 수 있는 점: 페르소나 정의 방식, RAG로 심리교육 자료 주입, "전문 상담을 대체하지 않음" 면책 문구 구성
- 주의: 중국어 데이터. 한국어 적용 시 번역·문화 차이 검토 필요

**scutcyr/SoulChat** — https://github.com/scutcyr/SoulChat
- 별 약 772 / 마지막 push 2024-06-15 / Apache-2.0 / 중국어
- 내용: 공감·경청 중심 중국어 심리건강 대화 모델
- 한벗에 쓸 수 있는 점: 조언보다 경청·질문 비중을 높인 응답 스타일 → Claude 시스템 프롬프트 작성 참고
- 주의: 2024 이후 정체

**qiuhuachuan/smile (MeChat)** — https://github.com/qiuhuachuan/smile
- 별 약 536 / 마지막 push 2024-11-17 / CC0-1.0 / 중국어
- 내용: EMNLP 2024. 단일턴 심리 QA를 LLM으로 다회차 대화로 확장(SMILE)해 데이터셋 구축
- 한벗에 쓸 수 있는 점: Claude로 한국어 합성 평가 대화 생성 시 같은 방법론 차용
- 주의: 합성 데이터 품질은 전문가 검수 필요

**thu-coai/PsyQA** — https://github.com/thu-coai/PsyQA
- 별 약 282 / 마지막 push 2024-07-21 / 라이선스 미지정(데이터 신청 방식으로 알려짐, 확인 필요) / 중국어
- 내용: 원조 전략 라벨이 붙은 중국어 심리 QA 데이터
- 한벗에 쓸 수 있는 점: 전략 라벨 체계를 응답 품질 평가 루브릭에 반영
- 주의: 라이선스 불명확

**thu-coai/Emotional-Support-Conversation (ESConv)** — https://github.com/thu-coai/Emotional-Support-Conversation
- 별 약 355 / 마지막 push 2024-06-19 / NOASSERTION / 영어
- 내용: ACL 2021 정서지원 대화 데이터·코드. 탐색→위로→행동 단계와 질문·재진술·감정반영·자기개방·제안·정보제공 등 전략
- 한벗에 쓸 수 있는 점: 한벗 대화 정책(먼저 탐색·감정 반영, 조언은 나중에)의 이론적 뼈대. 감정 단서 → "확인 질문" 전략과 직접 대응
- 주의: 라이선스 명시 확인 필요

**CAS-SIAT-XinHai/CPsyCoun** — https://github.com/CAS-SIAT-XinHai/CPsyCoun
- 별 약 261 / CC-BY-4.0 / 마지막 활동 확인 필요 / 중국어
- 내용: 상담 보고서→다회차 대화 재구성(Memo2Demo), CPsyCounD 3,134개 대화, 평가셋 CPsyCounE(9개 주제)
- 한벗에 쓸 수 있는 점: 포괄성·전문성·진정성·안전 4축 자동 평가를 한벗 LLM-as-judge 루브릭으로 차용
- 주의: 상담(치료) 지향이라 한벗의 "비치료 동반자" 포지션과 범위 차이 있음

**SteveKGYang/MentalLLaMA** — https://github.com/SteveKGYang/MentalLLaMA
- 별 약 326 / 마지막 push 2024-03-04 / MIT / 영어
- 내용: 소셜미디어 글의 정신건강 상태 분석과 근거 설명을 생성하는 LLM 및 평가 벤치마크
- 한벗에 쓸 수 있는 점: 위기 판단 시 "판정 + 근거 문장"을 함께 기록하는 로그 설계
- 주의: 영어, 2024-03 이후 정체

**EmoCareAI/ChatPsychiatrist** — https://github.com/EmoCareAI/ChatPsychiatrist
- 별 약 164 / 마지막 push 2024-03-12 / Apache-2.0 / 영어
- 내용: 상담 대화 데이터(Psych8k)로 학습한 상담 LLM
- 한벗에 쓸 수 있는 점: 상담 응답 평가 지표 참고
- 주의: 정체된 연구 코드

### D. 한국어 특화

**haven-jeon/KoGPT2-chatbot** — https://github.com/haven-jeon/KoGPT2-chatbot
- 별 약 184 / MIT / 마지막 활동 확인 필요
- 내용: songys Chatbot_data(일상 0/부정 1/긍정 2 라벨)로 KoGPT2를 미세조정한 감정 조건부 잡담 챗봇
- 한벗에 쓸 수 있는 점: "감정 라벨을 생성 조건으로 넣는" 구조 → Claude 프롬프트에 `[음성감정: sad 0.62]` 같은 태그를 넣는 방식의 근거. songys 데이터는 한국어 공감 응답 예시로 활용
- 주의: 모델은 구형이라 품질 낮음. 데이터 위주로 참고

**SKTBrain/KoBERT** — https://github.com/SKTBrain/KoBERT
- 별 약 1.4k / Apache-2.0 / 마지막 활동 확인 필요
- 내용: 한국어 BERT(위키 학습, SentencePiece 8,002). HF 버전 포함
- 한벗에 쓸 수 있는 점: 경량 텍스트 위기 신호 분류기(자살·자해 표현 1차 필터)를 서버에서 빠르게 돌리는 백본
- 주의: 최신 한국어 인코더 대비 성능 열세 가능. 비교 필요

**AIproject-SWU/KoBERT_FeelingClassification** — https://github.com/AIproject-SWU/KoBERT_FeelingClassification
- 별 0 / 라이선스 미표기 / 커밋 3개
- 내용: Google STT 스트리밍 + KoBERT 7감정 분류(설명 기준)
- 한벗에 쓸 수 있는 점: STT 결과를 실시간 텍스트 감정 분류에 연결하는 최소 예시 → 음성(emotion2vec+)·텍스트 감정 교차 확인 아이디어
- 주의: 학생 프로젝트 수준, 라이선스 없음

**passing2961/KorEmpatheticDialogues** — https://github.com/passing2961/KorEmpatheticDialogues
- 별 1 / 레포 MIT, HF 데이터셋 CC-BY-4.0(카드상 연구용) / 커밋 3개
- 내용: 영어 EmpatheticDialogues의 DeepL 한국어 번역판(학습 약 19.5k, 검증 2.8k, 테스트 2.5k, 검색 결과 기준)
- 한벗에 쓸 수 있는 점: 한국어 공감 응답 자동 평가셋, few-shot 예시 풀
- 주의: 번역체·연구용 표기 → 상용 학습 사용 전 확인 필요

**smilegate-ai/OPELA** — https://github.com/smilegate-ai/OPELA
- 별 약 29 / 라이선스 파일 있으나 조건 미확인(확인 필요)
- 내용: 크라우드워커가 직접 작성한 한국어 페르소나 대화(15~80턴) + 친밀감·몰입·존중·공감(16~64점) 설문 및 문장 단위 자기개방·공감 주석
- 한벗에 쓸 수 있는 점: 장기 대화 동반자의 사용자 체감 품질 설문 문항 설계(친밀감·공감 척도) 참고
- 주의: 라이선스 확인 전 데이터 재배포·학습 금지

**myshell-ai/MeloTTS** — https://github.com/myshell-ai/MeloTTS
- 별 약 7.7k / MIT / 마지막 활동 확인 필요
- 내용: 다국어 TTS, 한국어 지원, CPU 실시간 추론 주장
- 한벗에 쓸 수 있는 점: Typecast 장애·비용 대비 폴백 TTS, 오프라인 개발 데모
- 주의: 감정 표현력은 Typecast 대비 낮을 가능성(직접 청취 비교 필요)

**SYSTRAN/faster-whisper** — https://github.com/SYSTRAN/faster-whisper
- 별 약 26.5k / MIT
- 내용: CTranslate2 기반 Whisper 재구현(최대 4배 빠름, VAD 필터, 단어 타임스탬프)
- 한벗에 쓸 수 있는 점: RTZR 결과와의 오프라인 정확도 비교, 장애 시 폴백 STT
- 주의: 스트리밍 전용이 아니라 실시간 첫 응답 지연은 RTZR 대비 불리할 수 있음

**sooftware/kospeech** — https://github.com/sooftware/kospeech
- 별 약 637 / Apache-2.0 / 아카이브
- 내용: KsponSpeech 기반 한국어 E2E ASR 툴킷
- 한벗에 쓸 수 있는 점: 한국어 음성 전처리 학습용
- 주의: 아카이브(2021 이후 업데이트 없음). 프로덕션 사용 불가

### E. 안전·메모리

**mem0ai/mem0** — https://github.com/mem0ai/mem0
- 별 약 68.5k / Apache-2.0 / 마지막 활동 확인 필요(2026-04 신규 메모리 알고리즘 공지 있음)
- 내용: LLM 에이전트 장기 메모리 계층. ChatGPT with Memory 데모, 답변 전 기억 검색 채팅 루프 예제
- 한벗에 쓸 수 있는 점: Pipecat Mem0MemoryService로 즉시 통합 가능. 자체 호스팅(`local_config`)으로 데이터 국외 반출 최소화. 기억 추출·갱신 로직을 참고해 "기억 목록 보기/수정/삭제" 화면과 연결
- 주의: 민감정보(정신건강) 자동 추출 시 동의 범위 초과 위험 → 저장 전 사용자 확인 단계 필수

**letta-ai/letta** — https://github.com/letta-ai/letta
- 별 약 25.4k / Apache-2.0 / 마지막 활동 확인 필요
- 내용: 상태 유지(stateful) 에이전트 플랫폼(구 MemGPT). 에이전트 메모리·정체성·대화 영속화
- 한벗에 쓸 수 있는 점: "핵심 프로필 메모리(짧고 항상 포함) + 보관 메모리(검색)" 2층 구조 아이디어(MemGPT 방식, 현 README에서는 직접 확인 못함)
- 주의: 플랫폼 전체 도입은 Pipecat 구조와 겹침. 개념만 차용 권장

**getzep/graphiti** — https://github.com/getzep/graphiti
- 별 약 32.6k / Apache-2.0
- 내용: 유효기간이 있는 사실·엔티티·에피소드를 다루는 시간 인지 컨텍스트 그래프(Zep 내부 엔진). Neo4j/FalkorDB/Neptune 필요
- 한벗에 쓸 수 있는 점: "지난달엔 이직 고민 → 이번 달 이직 완료"처럼 바뀐 사실을 무효화하는 스키마 설계 참고(pgvector 테이블에 `valid_from/valid_to` 컬럼 추가)
- 주의: 그래프 DB 의존 → 초기 MVP에는 과함

**getzep/zep** — https://github.com/getzep/zep
- 별 약 5.0k / Apache-2.0
- 내용: Zep Cloud용 예제·통합·메모리 벤치마크·평가 하네스 모음(제품 자체 아님)
- 한벗에 쓸 수 있는 점: 메모리 회상 품질 평가 하네스 구조 참고
- 주의: 본 제품은 상용 클라우드

**meta-llama/PurpleLlama** — https://github.com/meta-llama/PurpleLlama
- 별 약 4.5k / 평가·Code Shield MIT, Llama Guard·Prompt Guard는 Llama Community License
- 내용: Llama Guard 1~4, Prompt Guard, LlamaFirewall, CyberSecEval
- 한벗에 쓸 수 있는 점: Claude 출력의 2차 안전 검사(자해 조장·위험 정보) 분류기, 입력 프롬프트 인젝션 방지
- 주의: 한국어 정확도·자해 카테고리 세부는 페이지상 미확인. 위기 감지 주 수단이 아니라 보조로만 사용

**위기(자살 위험) 감지 관련 공개 자료** (GitHub 단독 레포 중 신뢰할 만한 것은 찾지 못함)
- Reddit C-SSRS Suicide Dataset (Zenodo): https://zenodo.org/record/2667859 — 정신과 의사 4인이 C-SSRS 기준으로 라벨링한 500명 골드셋. 영어
- RSD-15K (arXiv 2507.11559): https://ar5iv.labs.arxiv.org/html/2507.11559 — C-SSRS 4단계 라벨, 요청 시 제공
- MHDash (arXiv 2602.00353): https://arxiv.org/html/2602.00353v1 — 정신건강 AI 비서 평가용 오픈 플랫폼, 우려 유형·위험 수준·대화 의도 3축 주석
- 한벗에 쓸 수 있는 점: C-SSRS 단계(사고→계획→행동)를 한국어 위기 분류 라벨 체계로 채택, MHDash 방식으로 다회차 위기 평가셋 구성
- 주의: 모두 영어. 한국어 위기 분류는 자체 데이터 구축과 전문가 검수가 필요함

---

## 3. 한벗 파이프라인 단계별 추천

| 단계 | 현재 선택 | 참고 레포 | 구체적 활용 |
|---|---|---|---|
| 프론트/전송 | React + Pipecat | pipecat-examples(simple-chatbot, push-to-talk, instant-voice), openai-realtime-console | React 클라이언트 시작점, 내부 디버그 패널(이벤트·지연·감정 라벨 표시) |
| STT | RTZR | faster-whisper, SenseVoice, (kospeech 학습용) | 오프라인 정확도 비교·장애 폴백. SenseVoice는 감정·울음 이벤트 보조 신호 |
| 턴 감지 | Smart Turn v3 | smart-turn, TEN VAD, livekit/agents | 한국어 쉼 많은 발화로 임계값 튜닝, VAD 비교 실험 |
| SER | emotion2vec+ | emotion2vec, FunASR, SenseVoice, speechbrain | `scores` 분포 기반 확인 질문 트리거, 텍스트 감정(KoBERT)과 교차 확인, KEMDy19/20으로 한국어 보정 |
| LLM·프롬프트 | Claude | ESConv, SoulChat, EmoLLM, KoGPT2-chatbot, CPsyCoun | ESConv 전략(탐색→감정반영→제안) 정책화, 감정 태그 조건부 프롬프트, CPsyCoun 4축 LLM-as-judge 평가 |
| 메모리 | Postgres/pgvector | mem0(Pipecat Mem0MemoryService), letta, graphiti, zep | LLM 앞단 기억 주입 프로세서 구조, 프로필/보관 2층, `valid_to` 시간 무효화, 저장 전 동의 확인 |
| TTS | Typecast | MeloTTS | 폴백·오프라인 데모 |
| 안전 | 위기 감지·연계 | PurpleLlama(Llama Guard), MentalLLaMA, C-SSRS 데이터, MHDash, KoBERT, pipecat flows | 규칙+KoBERT 1차 필터 → Claude 판단 → 출력 Guard 검사, C-SSRS 단계 라벨, Flows로 위기 안내 단계 고정, 판정 근거 로그 |
| 평가 데이터 | — | KorEmpatheticDialogues, OPELA, smile(SMILE 방법) | 한국어 공감 평가셋, 친밀감·공감 설문 척도, Claude 합성 시나리오 |

---

## 4. 확인 필요 사항 요약
- 날짜 미확인: mem0, letta, graphiti, zep, KoBERT, KoGPT2-chatbot, MeloTTS, faster-whisper, SenseVoice, CPsyCoun, PurpleLlama의 최신 커밋 일자(조회 한도 초과·페이지 미표시)
- 라이선스 불명확: emotion2vec(README는 MIT, API는 미지정), PsyQA, ESConv(NOASSERTION), OPELA, mercy-project·AIproject-SWU(미표기), TEN(추가 제약 내용)
- 한국어 성능 미확인: Smart Turn v3 한국어 정확도, emotion2vec+ 한국어 성능, Llama Guard 한국어, LiveKit 턴감지 한국어, Moshi·Ultravox 한국어
- 세부 내용 일부는 API 설명문과 기존 논문 지식에 기반함(README 본문 미열람): ChatPsychiatrist의 Psych8k, ESConv의 전략 목록, SMILE 방법론, MentalLLaMA 세부, SoulChat 응답 스타일, Letta의 core/archival 메모리 구분 → 확인 필요
- KEMDy19/20을 쓴 공개 GitHub 코드는 찾지 못함(데이터는 ETRI 나눔에서 라이선스 동의 후 제공)
- AI Hub 감성대화·웰니스 데이터 이용 조건(상업적 이용 가능 여부)은 AI Hub에서 직접 확인 필요

## 5. 출처
- GitHub REST API 조회(2026-11-06): pipecat, pipecat-examples, smart-turn, livekit/agents, livekit-examples/python-agents-examples, vocode-core, ten-framework, ultravox, moshi, bolna, openai-realtime-console, hume-api-examples, emotion2vec, FunASR, speechbrain, EmoLLM, SoulChat, smile, PsyQA, ChatPsychiatrist, MentalLLaMA, Emotional-Support-Conversation
- 레포 페이지 열람: 위 표의 각 GitHub 링크
- Pipecat Mem0 문서: https://docs.pipecat.ai/server/services/memory/mem0
- KEMDy20 (ETRI): https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us
- KEMDy19 (ETRI): https://nanum.etri.re.kr/share/kjnoh2/KEMDy19
- 한국어 SER 연구(KEMDy19): https://arxiv.org/pdf/2410.12416
- KorEmpatheticDialogues (HF): https://huggingface.co/datasets/passing2961/KorEmpatheticDialogues/blob/main/README.md
- 한국어 다회차 공감 대화(HF, boostcamp): https://huggingface.co/datasets/ohilikeit/empathetic_dialogues_mutli_turn_ko/blame/main/README.md
- KoGPT2 상담 모델(HF): https://huggingface.co/freud-sensei/counsel_chatbot/blame/main/README.md
- 한국어 심리상담 데이터셋 정리 논문: https://www.koreascience.kr/article/CFKO202306643316130.pdf
- KoBERT 감정분류+생성 연구: https://koreascience.kr/article/CFKO202323672013556.pdf
- 우울 감정 탐지 연구: https://koreascience.kr/article/JAKO202203255719375.pdf
- Reddit C-SSRS: https://zenodo.org/record/2667859
- RSD-15K: https://ar5iv.labs.arxiv.org/html/2507.11559
- MHDash: https://arxiv.org/html/2602.00353v1
- GitHub suicide-prevention 토픽: https://www.github.com/topics/suicide-prevention
