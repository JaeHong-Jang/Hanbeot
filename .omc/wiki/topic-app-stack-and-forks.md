---
title: "topic-app-stack-and-forks"
tags: ["app-design", "tech-stack", "fork", "license", "topic"]
created: 2026-10-25T14:47:47.402Z
updated: 2026-10-25T14:47:47.402Z
sources: ["reports/한벗 앱 설계서.md#6"]
links: ["overview-app-design.md", "claim-app-1-pipecat-orchestrator.md", "topic-tech-mvp-stack.md", "src-pipecat-2026-docs-js-client.md", "src-pipecat-2026-voice-ui-kit.md", "src-livekit-2026-components-js.md", "src-pipecat-2026-github.md", "src-livekit-2026-agents-github.md", "src-pipecat-2026-smart-turn.md", "src-livekit-2026-turn-detector.md", "claim-tech-3-stt-tts-vendors.md", "src-rtzr-2026-pricing.md", "src-emotion2vec-2024-github.md", "src-funasr-2026-model-license.md", "src-audeering-2026-opensmile-python.md", "src-pipecat-2026-typecast-service.md", "src-elevenlabs-2026-models.md", "src-typecast-2026-api-pricing.md", "src-mem0-2026-github.md", "src-hume-2026-evi-docs.md", "src-pipecat-2026-docs-supported-services.md", "src-pipecat-2026-examples.md", "src-livekit-2026-agent-starter-react.md", "src-livekit-2026-agent-starter-python.md", "src-xiaoyan43-2026-cyber-companion.md", "src-msh9184-2026-nemo-voice-agent-ko.md", "src-open-llm-vtuber-2026-license.md", "src-livekit-2026-docs-tts-models.md", "topic-app-impl-audio-stt-turn.md", "topic-app-cost-latency-budget.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-stack-and-forks

상위: [[overview-app-design]] · 설계서 6절. 결정: [[claim-app-1-pipecat-orchestrator]]. 기준: [[topic-tech-mvp-stack]]

## 6.1 스택 확정표
| 컴포넌트 | 선택 | 대안 | 라이선스 | 비용 |
|---|---|---|---|---|
| 클라이언트 | React(Vite) + Pipecat client-js + voice-ui-kit [[src-pipecat-2026-docs-js-client]] [[src-pipecat-2026-voice-ui-kit]] | LiveKit React 컴포넌트(Apache-2.0) [[src-livekit-2026-components-js]] | voice-ui-kit BSD-2, client-js는 저장소 LICENSE 확인 필요 | 0 |
| 오케스트레이터 | Pipecat v1.14.0(Python 3.11+, 3.12 권장) [[src-pipecat-2026-github]] | LiveKit Agents(Python 3.10+, 웹 연결 시 서버 필요) [[src-livekit-2026-agents-github]] | BSD-2 / Apache-2.0 | 0 |
| VAD·턴 | Silero VAD + Smart Turn v3.2 [[src-pipecat-2026-smart-turn]] | LiveKit turn detector(한국어 포함, LiveKit Model License) [[src-livekit-2026-turn-detector]] | MIT / BSD-2 | 0 |
| STT | RTZR `sommers_ko` | gpt-4o-mini-transcribe $0.003/min ([[claim-tech-3-stt-tts-vendors]]) | 상용 | 1,000원/h, 첫 10h 무료 [[src-rtzr-2026-pricing]] |
| SER | emotion2vec+ base [[src-emotion2vec-2024-github]] | SenseVoice-Small | 코드 MIT, 가중치 model-license(상업 이용 미확정) [[src-funasr-2026-model-license]] | 0(GPU 1장 또는 CPU) |
| 운율 | VAD 기반 자체 계산 | openSMILE(연구 비교 전용) [[src-audeering-2026-opensmile-python]] | audEERING 이중 라이선스 | 0 |
| LLM + 위험 태그 | Claude API 스트리밍(첫 줄 위험 태그) | 별도 분류 호출, vLLM 자체 호스팅 | 상용 | 토큰 과금(단가 미확인) |
| 위험 사전 필터 | 로컬 키워드 사전 | Llama Guard 등(미조사) | - | 0 |
| TTS | Typecast `ssfm-v30` [[src-pipecat-2026-typecast-service]] | ElevenLabs Flash v2.5 [[src-elevenlabs-2026-models]] | 래퍼 BSD-2 | Lite $15/월 200k자 [[src-typecast-2026-api-pricing]] |
| 메모리 | Postgres + pgvector(RLS) | Mem0 OSS(P1) [[src-mem0-2026-github]], Letta | Mem0 Apache-2.0 | 인프라만 |
| 제외 | Hume EVI | - | - | 2026-11-13 API 종료 [[src-hume-2026-evi-docs]] |

Pipecat 우선은 RTZR·Typecast 연동이 모두 Pipecat 공식 목록에 있다는 사실 [[src-pipecat-2026-docs-supported-services]]에 근거한 설계 판단이다. "LiveKit보다 쉽다"는 비교는 입증되지 않았다(C).

## 6.2 포크 후보
| 저장소 | 스타 | 라이선스 | 맞는 점 | 판단 |
|---|---|---|---|---|
| pipecat-examples [[src-pipecat-2026-examples]] | 401 | BSD-2 | `simple-chatbot`(React), `push-to-talk`, `websocket`, `p2p-webrtc` | **서버 골격 포크**: STT·TTS·LLM 교체, SER·KeywordGate·RiskTagParser·Memory 프로세서 추가 |
| voice-ui-kit [[src-pipecat-2026-voice-ui-kit]] | 419 | BSD-2 | 연결·마이크·시각화·디버그 콘솔, SmallWebRTC·Daily | **클라이언트 UI 포크**(오브 형태 지원 C) |
| livekit agent-starter-react [[src-livekit-2026-agent-starter-react]] | 962 | MIT | Next.js/TS, 시각화 5종 | LiveKit 전환 시 |
| livekit agent-starter-python [[src-livekit-2026-agent-starter-python]] | 267 | MIT | LiveKit 백엔드 골격 | LiveKit 전환 시 |
| cyber-companion [[src-xiaoyan43-2026-cyber-companion]] | 0 | MIT | FastAPI·React·Pipecat, 메모리(품질 미검증) | 구조 참고 |
| nemo-voice-agent-ko [[src-msh9184-2026-nemo-voice-agent-ko]] | 0 | Apache-2.0 | 한국어 Pipecat, 턴테이킹·한국어 TTS | 한국어 연결 참고 |
| Open-LLM-VTuber [[src-open-llm-vtuber-2026-license]] | 약 14.4k(B) | 본체 MIT, Live2D 샘플 별도 | 로컬 LLM·Live2D 중심 | 포크 안 함 |

LiveKit 공식 TTS 목록에서 Typecast 플러그인을 찾지 못했으나 부재가 입증된 것은 아니다(C) [[src-livekit-2026-docs-tts-models]]. 구현 상세는 [[topic-app-impl-audio-stt-turn]] 등 impl 페이지, 비용은 [[topic-app-cost-latency-budget]].

