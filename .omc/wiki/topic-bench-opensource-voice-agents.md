---
title: "topic-bench-opensource-voice-agents"
tags: ["benchmark", "github", "opensource", "pipecat", "memory", "topic"]
created: 2026-11-07T11:34:27.863Z
updated: 2026-11-07T11:34:27.863Z
sources: ["research_notes/유사앱 조사/similar_apps_github.md"]
links: ["topic-app-stack-and-forks.md", "overview-benchmark.md", "overview-technology.md", "topic-ser-label-scheme-and-fusion.md", "claim-tech-2-memory-architecture.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-bench-opensource-voice-agents

# topic-bench-opensource-voice-agents

상위: [[topic-app-stack-and-forks]] · [[overview-benchmark]] · [[overview-technology]]. 출처: research_notes/유사앱 조사/similar_apps_github.md (조사일 2026-11-06, GitHub API와 페이지 열람; 별 수는 조회 시점 근사치). 한벗 스택: React + Pipecat + RTZR STT + Smart Turn v3 + emotion2vec+ + Claude + Typecast + Postgres/pgvector.

## 한눈에 보기 (38개 중 핵심)
| 저장소 | 분류 | 별(약) | 라이선스 | 한국어 | 판단 |
|---|---|---|---|---|---|
| pipecat-ai/pipecat | A 프레임워크 | 17.1k | BSD-2 | 무관 | 오케스트레이터 본체, Mem0 서비스·Flows 내장 |
| pipecat-ai/pipecat-examples | A 예제 | 0.4k | BSD-2 | 무관 | React simple-chatbot, instant-voice, 지연 추적 |
| pipecat-ai/smart-turn | A 턴감지 | 1.7k | BSD-2 | 지원(23개 언어) | 이미 채택, 한국어 오탐 평가·미세조정 참고 |
| pipecat-ai/pipecat-flows | A 흐름 | 0.6k | BSD-2 | 무관 | 위기 대응 단계 설계(아카이브, core로 통합) |
| livekit/agents | A 프레임워크 | 15.1k | Apache-2.0 | 확인 필요 | 시맨틱 턴감지·테스트 패턴 비교 |
| TEN-framework | A 프레임워크 | 11.2k | Apache-2.0+제약 | README 한국어판 | TEN VAD, 메모리 예제 |
| vocode-core / bolna | A | 3.8k / 0.8k | MIT | 무관/확인 필요 | 구조 참고만 |
| openai-realtime-console | A 예제 | 3.6k | MIT | 무관 | 이벤트 로그 디버깅 UI 참고 |
| kyutai-labs/moshi | A 풀듀플렉스 | 11.4k | 코드 MIT/Apache, 가중치 CC-BY | 미표기 | 지연 목표 160~200ms 기준점 |
| fixie-ai/ultravox | A 음성LLM | 4.6k | MIT | 미표기 | STT 생략형 비교 |
| ddlBoJack/emotion2vec | B SER | 1.2k | README MIT(API 미지정) | 한국어 확인 필요 | 이미 채택 |
| modelscope/FunASR, SenseVoice | B | 20.9k / 9.7k | MIT(모델 별도 약관) | SenseVoice 한국어 지원 | 추론 런타임, 울음·웃음 이벤트 보조 |
| speechbrain | B 툴킷 | 11.9k | Apache-2.0 | 레시피별 | 한국어 SER 미세조정 실험 |
| EmoLLM, SoulChat, smile, PsyQA, CPsyCoun, MentalLLaMA, ChatPsychiatrist | C 정신건강 | 0.16k~1.8k | MIT·Apache·CC0·CC-BY 등 | 중국어·영어 | 페르소나·평가 4축(포괄성·전문성·진정성·안전) 구조 참고 |
| ESConv | C 데이터 | 0.4k | NOASSERTION | 영어 | 정서지원 전략을 프롬프트 정책으로 |
| KoBERT, KoGPT2-chatbot, KorEmpatheticDialogues, OPELA | D 한국어 | 1.4k~0 | Apache·MIT 등 | 한국어 | 텍스트 감정·위기 분류 백본, 공감 평가셋 |
| MeloTTS, faster-whisper, kospeech | D TTS/STT | 7.7k / 26.5k / 0.6k | MIT·Apache | 한국어 | 폴백 TTS, RTZR 폴백·오프라인 평가 |
| mem0, letta, graphiti, zep | E 메모리 | 68.5k / 25.4k / 32.6k / 5.0k | Apache-2.0 | 언어 무관 | Mem0MemoryService, 자체 편집 메모리, 시간 유효기간 사실 그래프 |
| PurpleLlama | E 안전 | 4.5k | 평가 코드 MIT | Llama Guard 한국어 확인 필요 | 입출력 2차 방어선 |

## 파이프라인 단계별 추천
- 프론트/전송: pipecat-examples, openai-realtime-console → 내부 디버그 패널(이벤트·지연·감정 라벨).
- STT: faster-whisper, SenseVoice → 오프라인 비교·장애 폴백. 턴 감지: smart-turn, TEN VAD, livekit → 한국어 쉼 많은 발화 임계값 튜닝.
- SER: emotion2vec, FunASR, SenseVoice, speechbrain → `scores` 분포 기반 확인 질문, KoBERT 텍스트 감정과 교차 확인, KEMDy19/20 보정. 연결: [[topic-ser-label-scheme-and-fusion]].
- LLM·프롬프트: ESConv 전략(탐색→감정반영→제안), CPsyCoun 4축 LLM-as-judge.
- 메모리: Mem0 앞단 주입 프로세서, 프로필/보관 2층, `valid_to` 시간 무효화, 저장 전 동의 확인 → 관련 [[claim-tech-2-memory-architecture]].
- 안전: 규칙+KoBERT 1차 필터 → Claude 판단 → 출력 Guard, C-SSRS 단계 라벨, Flows로 위기 안내 단계 고정.

## 확인 필요
- mem0, letta, graphiti, zep, KoBERT, KoGPT2-chatbot, MeloTTS, faster-whisper, SenseVoice, CPsyCoun, PurpleLlama의 최신 커밋 일자 미확인.
- 라이선스 불명확: emotion2vec, PsyQA, ESConv, OPELA, TEN 추가 제약.
- 한국어 성능 미확인: Smart Turn v3, emotion2vec+, Llama Guard, LiveKit 턴감지, Moshi·Ultravox.
- 일부 세부(ChatPsychiatrist, ESConv 전략 목록, SMILE, MentalLLaMA, SoulChat, Letta core/archival)는 README 본문 미열람.
- KEMDy19/20을 쓴 공개 GitHub 코드는 못 찾음. AI Hub 감성대화·웰니스의 상업 이용 조건은 AI Hub에서 직접 확인.

