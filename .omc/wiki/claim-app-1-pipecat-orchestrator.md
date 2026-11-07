---
title: "claim-app-1-pipecat-orchestrator"
tags: ["app-design", "decision", "pipecat", "orchestrator", "livekit", "grade-A", "grade-C"]
created: 2026-10-25T14:49:32.816Z
updated: 2026-11-07T20:09:06.955Z
sources: ["reports/한벗 앱 설계서.md#6"]
links: ["overview-app-design.md", "topic-app-stack-and-forks.md", "src-pipecat-2026-docs-supported-services.md", "src-pipecat-2026-rtzr-service-unverified.md", "src-pipecat-2026-typecast-service.md", "src-pipecat-2026-github.md", "src-pipecat-2026-smart-turn.md", "src-pipecat-2026-vad-analyzer.md", "src-livekit-2026-agents-github.md", "src-livekit-2026-turn-detector.md", "src-livekit-2026-docs-tts-models.md", "topic-app-impl-audio-stt-turn.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-tech-3-stt-tts-vendors.md", "src-livekit-2026-rtzr-plugin.md", "src-pipecat-2026-expressive-alpha.md", "src-daily-2026-pipecat-latency-posts.md", "topic-dev-repos-voice-conversation-2026-11.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-1-pipecat-orchestrator

상위: [[overview-app-design]], [[topic-app-stack-and-forks]]

## 결정
**음성 오케스트레이터는 Pipecat(v1.14.0, Python 3.12 권장)을 1순위로 한다. 서버 골격은 `pipecat-examples`의 `simple-chatbot`을 포크해 STT·TTS·LLM을 교체하고 SER·KeywordGate·RiskTagParser·Memory 프로세서를 추가한다.**

## 근거
- RTZR(STT)와 Typecast(TTS) 연동이 모두 Pipecat 공식 서비스 목록에 있다 [[src-pipecat-2026-docs-supported-services]] (A). 두 연동은 커뮤니티 플러그인이며 RTZR 쪽은 원문 미확보(검증 C) [[src-pipecat-2026-rtzr-service-unverified]], Typecast는 Neosapience 유지·Pipecat 직접 미테스트 [[src-pipecat-2026-typecast-service]].
- 라이선스·버전: BSD-2, Python 3.11+ [[src-pipecat-2026-github]]. Smart Turn v3.2와 VAD가 Pipecat 내장 [[src-pipecat-2026-smart-turn]], [[src-pipecat-2026-vad-analyzer]].
- 포크 후보 라이선스·구성은 [[topic-app-stack-and-forks]].
- **LiveKit보다 쉽다는 비교 우위는 입증되지 않았다(C).** LiveKit Agents는 Apache-2.0, LiveKit turn detector는 한국어를 포함하므로 [[src-livekit-2026-agents-github]], [[src-livekit-2026-turn-detector]] 유효한 대안이다. LiveKit TTS 목록에서 Typecast 플러그인 부재도 입증되지 않음(C) [[src-livekit-2026-docs-tts-models]].
- 등급: 연동 존재 A / 비교 우위 C → 종합 medium.

## 검증 가능 목표
- W1: `simple-chatbot` 로컬 구동 + 라이선스 5항목 기록.
- W2: RTZR + Claude + Typecast + Smart Turn 10분 통화 성공(P0-1), 플러그인 연동이 W2까지 성공.
- 플러그인 버전 고정, 막히면 RTZR 공식 WebSocket 직접 구현 ([[topic-app-impl-audio-stt-turn]]).

## 재검토 조건
- 플러그인 연동이 W2까지 실패하거나 CER 8% 초과 → WebSocket 직접 구현 → gpt-4o-mini-transcribe 순 대체.
- Typecast 블라인드 MOS 3.5 미만 → ElevenLabs Flash 교체.
- cascade 조정 후에도 TTFA P50 1.5s 초과 → 발표에서 미달 보고, S2S 비교 실험 앞당김 검토 ([[claim-tech-4-voice-pipeline-architecture]], [[claim-tech-3-stt-tts-vendors]]).
- LiveKit 전환 시 sample_rate 기본값(8000) 등 설정 재확인 [[src-livekit-2026-rtzr-plugin]].

---

## Update (2026-11-07T20:09:06.955Z)

## 2026-11-08 개발자 저장소 조사 반영
- Pipecat main에 `src/pipecat/expressive/`(alpha): 지각 신호(감정 점수) → LLM 지시 → 표현 태그 → TTS 어댑터. 한벗 감정 점수를 이 규약으로 보내는 안은 제안 단계 [[src-pipecat-2026-expressive-alpha]].
- Typecast·RTZR 표현 어댑터는 없음 → `BaseExpressionAdapter` 직접 구현 필요. alpha라 문법 변경 위험.
- `tts_service.py`: 문장 집계 기본(문장당 약 200~300ms 추가는 코드 주석), 토큰 모드는 제공사에 따라 품질 영향. 끼어들기 처리는 조건부.
- Smart Turn v3.2: 짧은 발화 오분류 -40%, 8MB/32MB, 가중치·데이터·코드 공개 [[src-daily-2026-pipecat-latency-posts]].
- 요약 [[topic-dev-repos-voice-conversation-2026-11]].

