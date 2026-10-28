---
title: "claim-tech-4-voice-pipeline-architecture"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "grade-B", "grade-C", "decision", "cascade", "speech-to-speech", "pipecat", "livekit"]
created: 2026-10-25T07:33:06.612Z
updated: 2026-10-25T07:33:06.612Z
sources: []
links: ["topic-tech-voice-pipeline-latency-cost.md", "overview-technology.md", "src-salesforce-2026-voice-agent-tutorial.md", "src-stepfun-2025-step-audio-r1.md", "src-kyutai-2024-moshi.md", "src-qwen-2025-omni-models.md", "src-openai-2026-realtime-pricing.md", "src-livekit-2026-pipeline-docs.md", "src-hume-2026-evi-docs.md", "claim-tech-3-stt-tts-vendors.md", "claim-tech-5-latency-target.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-4-voice-pipeline-architecture

# claim-tech-4-voice-pipeline-architecture

## 결정
**MVP는 streaming cascade(STT → Claude → TTS)로 구축한다. speech-to-speech(gpt-realtime-mini, Qwen3-Omni)는 SER 신호를 명시적으로 분석·저장·표시해야 하는 한벗 요구와 맞지 않아 후순위로 둔다. 오케스트레이션은 Pipecat 또는 LiveKit Agents 중 팀 숙련도·배포 편의 기준으로 선택하고(지연 차이 "없음"은 미확인), 자체 FastAPI WebSocket은 fallback으로 둔다.**

상위: [[topic-tech-voice-pipeline-latency-cost]], [[overview-technology]]

## 근거
- cloud S2S(Qwen3-Omni DashScope 702ms)와 streaming cascade(755–947ms)의 지연 차이가 크지 않음 [[src-salesforce-2026-voice-agent-tutorial]]
- S2S라도 reasoning 포함 시 0.92s(Step-Audio-R1) → "S2S = 무조건 빠름" 아님 [[src-stepfun-2025-step-audio-r1]]
- Moshi 200ms는 영어·언어 미명시, 24GB VRAM [[src-kyutai-2024-moshi]]
- Qwen3-Omni Apache 2.0·한국어 출력·이론 234ms — 자체 호스팅 실험 후보(30B-A3B GPU 필요) [[src-qwen-2025-omni-models]]
- gpt-realtime-mini audio $10/$20 per 1M — 서버 단순화 가능하나 SER 신호가 모델 내부에 묻힘(도구 호출은 지원하므로 메모리 연동 자체는 가능) [[src-openai-2026-realtime-pricing]]
- LiveKit: cascade 누적 지연을 streaming으로 완화; turn detection이 체감 지연의 주요 변수 [[src-livekit-2026-pipeline-docs]]
- Hume EVI 종료로 "감정 인식 내장 S2S" 상용 옵션 소멸 [[src-hume-2026-evi-docs]]

## 파이프라인(텍스트 다이어그램)
```
[브라우저 React/WebRTC]
   │ 오디오 스트림
   ▼
[STT 스트리밍 RTZR] ──partial──▶ [메모리 prefetch Mem0/pgvector]
   │                         ┌──▶ [SER emotion2vec+ (turn-end, 병렬)]
   │ final transcript        │          │ 라벨+confidence
   ▼                         │          ▼
[위험 분류기 2단] ◀──────────┘    [eGeMAPS 스트리밍 지표]
   │ 안전 모드 플래그
   ▼
[Claude 스트리밍: 모드 프롬프트 + 메모리 블록 + SER 컨텍스트]
   │ sentence-chunk
   ▼
[TTS 스트리밍 Typecast/ElevenLabs] ──▶ [브라우저 재생]
   │
   └─▶ [메모리 쓰기: user_stated / ai_inferred(TTL)] ──▶ [React 메모리 UI]
```

## 비용·지연
- cascade: STT 17원/min + TTS $0.012–0.027/턴 + Claude 토큰 → [[claim-tech-3-stt-tts-vendors]]
- S2S 대안: gpt-realtime-mini 1분 대화(입력 약 600 audio tok/min x $10 + 출력 약 600 x $20 per 1M ≈ $0.018/min, 팀 추정) — 비용은 비슷하나 SER 제어 불가
- 지연 목표: [[claim-tech-5-latency-target]]

## 검증 가능 목표
1. 주 1회 E2E TTFA 측정(P50/P95) 로그 자동화
2. cascade vs gpt-realtime-mini 10턴 비교 실험 1회(지연·비용·SER 노출 가능성)

## 미확인 리스크 (C)
- Pipecat·LiveKit "지연 차이 없음"(통제 실험 없음), Pipecat 실측치 부재
- "Qwen3-Omni가 유일한 open S2S 후보" 미입증
- GLM-4-Voice·Step-Audio 한국어·라이선스 미확인
- 한벗 구성(Claude+한국어 STT/TTS+SER+메모리)의 실측 TTFA는 아직 없음 → 목표치로만 표기

