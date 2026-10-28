---
title: "src-livekit-2026-pipeline-docs"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "livekit", "pipecat", "orchestration", "turn-detection", "app-design"]
created: 2026-10-25T07:18:54.739Z
updated: 2026-10-25T14:52:26.886Z
sources: ["https://docs.livekit.io/agents/models/pipelines/", "https://community.livekit.io/t/high-end-to-end-latency-asr-llm-tts-total-1s-but-speech-end-to-reply-takes-3-4s-livekit-agents/1277", "https://www.forasoft.com/blog/article/pipecat-vs-livekit-agents", "https://www.morphllm.com/voice-agent-api"]
links: ["claim-tech-5-latency-target.md", "claim-tech-4-voice-pipeline-architecture.md", "topic-tech-voice-pipeline-latency-cost.md", "src-salesforce-2026-voice-agent-tutorial.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-livekit-2026-pipeline-docs

# src-livekit-2026-pipeline-docs

## 서지정보
1. LiveKit Agents 공식 문서 "pipelines" (A)
2. LiveKit 커뮤니티 사례 게시글 (A, 게시자 자체 측정)
3. Forasoft 블로그 "Pipecat vs LiveKit Agents" (B, 벤더 글)
4. Morph LLM "voice agent API" 글 (B, 업계 예산)

## URL
- https://docs.livekit.io/agents/models/pipelines/
- https://community.livekit.io/t/high-end-to-end-latency-asr-llm-tts-total-1s-but-speech-end-to-reply-takes-3-4s-livekit-agents/1277
- https://www.forasoft.com/blog/article/pipecat-vs-livekit-agents
- https://www.morphllm.com/voice-agent-api

## 라이선스/상업 이용
- LiveKit Agents, Pipecat 모두 오픈소스(Apache 2.0 — 검증 범위 밖, 별도 확인). 상업 이용 가능

## 핵심 수치
- LiveKit 공식: cascade는 단계별 지연 누적되나 streaming으로 완화; realtime 모델은 단계 통합으로 baseline 지연 더 낮음 (정성적, A)
- 커뮤니티 사례: ASR ~100ms, LLM ~500ms, TTS ~200ms인데 발화 종료→첫 오디오 **3–4초** — turn detection/buffering 원인 추정(단일 사례, 원인 미확정, A)
- Morph 단계별 예산: STT 100–300ms, LLM TTFT 350–1,000ms, 총 ~800ms 목표 (B)
- Forasoft: S2S ~300ms, cascade +300–800ms (B); "Pipecat·LiveKit 지연 차이 없음, 모델이 지연 결정": **C** (통제 실험 없이 '차이 無' 확정 불가)

## 검증 결과
- 공식 문서·커뮤니티: **A**; 업계 예산·벤더 비교: **B**; "차이 없음": **C**
- Pipecat 실측 지연 수치는 발견 못함(Gaps)

## 한벗 적용 포인트
- **turn detection이 실제 병목**이 될 수 있음(컴포넌트 합 1초 vs 체감 3–4초 사례) → VAD/endpointing 설정을 MVP 지연 측정 항목에 포함 → [[claim-tech-5-latency-target]]
- 프레임워크 선택은 지연이 아니라 팀 숙련도·배포 편의 기준(단, "차이 없음"은 미확인으로 표기) → [[claim-tech-4-voice-pipeline-architecture]]
- 관련: [[topic-tech-voice-pipeline-latency-cost]], [[src-salesforce-2026-voice-agent-tutorial]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:26.886Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S24] (등급 A·2차, 사용자 자체 측정; URL은 LiveKit community 글 1277). 사용: 컴포넌트 합 약 1초 vs 체감 3-4초. 조건: 단일 사례, 원인 미확정.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지(단일 사례, 일반화 금지).
- 사용처: [[overview-app-design]] 의 7.2절. 관련: [[claim-tech-5-latency-target]]
