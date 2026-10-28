---
title: "topic-app-impl-audio-stt-turn"
tags: ["app-design", "implementation", "audio", "stt", "rtzr", "smart-turn", "barge-in", "topic", "paper-evidence"]
created: 2026-10-25T14:45:50.346Z
updated: 2026-10-26T05:47:12.254Z
sources: ["reports/한벗 앱 설계서.md#5-1-3"]
links: ["overview-app-design.md", "topic-app-architecture.md", "src-pipecat-2026-docs-js-client.md", "src-pipecat-2026-voice-ui-kit.md", "src-pipecat-2026-examples.md", "topic-app-feature-spec.md", "src-firt-2026-ios-pwa-getusermedia.md", "claim-tech-3-stt-tts-vendors.md", "src-pipecat-2026-docs-supported-services.md", "src-rtzr-2026-streaming-websocket.md", "src-rtzr-2026-streaming-api.md", "src-pipecat-2026-rtzr-service-unverified.md", "src-livekit-2026-rtzr-plugin.md", "src-pipecat-2026-smart-turn.md", "src-pipecat-2026-vad-analyzer.md", "src-pipecat-2026-docs-speech-input.md", "claim-app-2-call-screen-gemini-live.md", "claim-app-1-pipecat-orchestrator.md", "src-daily-2025-smart-turn-v3.md", "src-park-2024-korean-asr-eval.md", "src-bang-2020-ksponspeech.md", "src-mckinnon-2026-vad-window.md", "src-lin-2025-full-duplex-bench.md", "topic-app-paper-evidence.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-impl-audio-stt-turn

상위: [[overview-app-design]] · 설계서 5절 ①②③. 구성도: [[topic-app-architecture]]. 각 항목은 선택 / 레퍼런스 / 단계 / 코드 골격 / 함정 순.

## ① 오디오 캡처·전송 (React + Pipecat 클라이언트)
- 선택: `@pipecat-ai/client-js` + SmallWebRTC, UI는 voice-ui-kit(React + Tailwind 4, BSD-2). 출처 [[src-pipecat-2026-docs-js-client]], [[src-pipecat-2026-voice-ui-kit]], [[src-pipecat-2026-examples]].
- 단계 요지: `simple-chatbot` 로컬 구동 → Vite React로 클라이언트 분리(`ConnectButton`, `UserAudioControl`, `VoiceVisualizer`) → `PipecatClient`를 `enableMic:true`로 생성 → 전사·봇 상태 이벤트를 자막·오브에 연결하고 첫 재생 시각을 서버로 전송 → 기기 매트릭스 12칸 테스트([[topic-app-feature-spec]]).
- 코드 골격: 노트에 인용할 공식 코드 블록이 없다. `PipecatClient` + `enableMic:true` 예제와 `@pipecat-ai/client-react` 설치 안내를 설치 버전대로 따른다.
- 함정: iOS 홈 화면 PWA의 getUserMedia 버그 보고(2020, 2024, 주로 카메라) [[src-firt-2026-ios-pwa-getusermedia]]. MVP는 Safari 브라우저 접속 기본.

## ② STT (RTZR 스트리밍)
- 선택: RTZR `sommers_ko` ([[claim-tech-3-stt-tts-vendors]]), Pipecat 커뮤니티 서비스 `pipecat-rtzr`(공식 목록 등재) [[src-pipecat-2026-docs-supported-services]].
- 프로토콜 [[src-rtzr-2026-streaming-websocket]], [[src-rtzr-2026-streaming-api]]: `/v1/authenticate` 토큰 → `wss://openapi.vito.ai/v1/transcribe:streaming` Bearer 연결 → LINEAR16 전송 → `final`, `alternatives[].text` 읽기 → 턴 확정 `{"type":"Finalize"}`(연결 유지) → 종료 `EOS`. `sample_rate`(8000~48000) 필수.
- 단계 요지: `uv add pipecat-rtzr`, 실제 서버 sample rate를 로그로 확인(16k 가정 금지), VAD 뒤 배치, Finalize 전송 시점을 패키지 코드로 확인, 화자·환경별 CER 측정(목표 8% 이하).
- 코드 골격 요지: `RTZRSTTService(client_id, client_secret)`를 VAD 뒤 파이프라인에 추가. 노트 인용이며 검증 C(원문 미확보)라 설치 후 README와 대조 [[src-pipecat-2026-rtzr-service-unverified]].
- 함정: (a) 기본 도메인 `CALL`이 헤드셋·근접 마이크에도 적합하다고 문서에 있으나 변경 여부는 CER로 판단. (b) LiveKit 플러그인 기본 sample_rate 8000 [[src-livekit-2026-rtzr-plugin]]. (c) 연결 후 60초간 오디오 청크가 없으면 종료 가능, 보류 중 무음 프레임 전송. (d) 플러그인 기본값·keepalive·호환 버전은 C, 버전 고정 후 막히면 WebSocket 직접 구현.

## ③ 턴 감지·끼어들기 (Smart Turn v3, barge-in)
- 선택: Silero VAD + Smart Turn v3.2(한국어 포함 23개 언어, 약 8M, 16kHz 최대 8초 입력) [[src-pipecat-2026-smart-turn]]. CPU 추론 100ms 미만은 조건부 설명(B). VADParams 기본 start/stop 0.2s [[src-pipecat-2026-vad-analyzer]]. 끼어들기 전략은 [[src-pipecat-2026-docs-speech-input]].
- 단계 요지: `TurnAnalyzerUserTurnStopStrategy(turn_analyzer=LocalSmartTurnAnalyzerV3())` 설정 → 시작 전략이 끼어들기를 트리거하면 봇 발화·진행 작업 즉시 취소, 기본 ON → [보류] 탭은 서버 인터럽트 이벤트 → 머뭇거림 포함 50턴 이상으로 조기 종료율 측정 → 위기 안내 중 끼어들면 카드 유지 + `safety_reminder_pending=true`로 세션 말미 재안내 ([[claim-app-2-call-screen-gemini-live]]).
- 함정: Smart Turn과 RTZR 서버 끝점 검출의 중복 턴 확정 가능성은 추론일 뿐(C), W2 로그로 확인. 한국어 고민 발화에서 Smart Turn 정확도의 공개 수치는 이번 조사 범위에서 찾지 못함.

## 수용 기준 연결
P0-1(통화 루프 완료율), P0-2(끼어들기 300ms 이하), P0-3(말 중간 끊김 10% 이하)이 이 절의 검증 대상이다 ([[topic-app-feature-spec]]). 오케스트레이터 선택 근거는 [[claim-app-1-pipecat-orchestrator]].

---

## Update (2026-10-26T05:47:12.254Z)

## 2026-10-26 논문 보강
- Smart Turn v3 한국어 정확도 96.85%, FP 1.12%, FN 2.02% (n=890), CPU 12.6~94.8ms(전처리 포함) [P6 [[src-daily-2025-smart-turn-v3]]]. 벤더 자체 테스트셋이므로 "공개 수치 못 찾음" 문구를 수정하되 한국어 고민 발화 조기 종료율 50턴 실측은 유지(W2).
- Whisper large-v2 zero-shot KsponSpeech CER 14.66%, 미세조정 10.48% [P3 [[src-park-2024-korean-asr-eval]]]. RTZR 독립 검증 없음 → CER ≤ 8%는 팀 녹음 기준 목표. 간투사 처리 규칙을 P4 [[src-bang-2020-ksponspeech]] 태그로 사전 정의.
- Silero 선택은 영어 근거만 [P1 [[src-mckinnon-2026-vad-window]], P2]. 한국어·모바일 소음 오탐률은 W2 기기 매트릭스.
- 끼어들기 기본 ON 방향은 지지 [P13 [[src-lin-2025-full-duplex-bench]], P14]. 백채널 "예측"(P11)과 "응/음" 입력 판별은 다른 과제 → 생성·판별·TTS 중단을 나눠 W2에 실제 겹친 발화로 오중단율 측정.
- 전체 근거: [[topic-app-paper-evidence]].

