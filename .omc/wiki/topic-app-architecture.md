---
title: "topic-app-architecture"
tags: ["app-design", "architecture", "pipeline", "turn-sequence", "topic"]
created: 2026-10-25T14:45:33.132Z
updated: 2026-10-25T14:45:33.132Z
sources: ["reports/한벗 앱 설계서.md#4"]
links: ["overview-app-design.md", "topic-tech-mvp-stack.md", "claim-tech-4-voice-pipeline-architecture.md", "topic-app-impl-audio-stt-turn.md", "topic-app-impl-ser-cues.md", "topic-app-impl-dialogue-tts.md", "topic-app-impl-memory.md", "topic-app-impl-safety-crisis.md", "topic-app-impl-consent-privacy.md", "claim-feedback-1-reflect-professor-round1.md", "claim-tech-6-sensitive-data-consent.md", "claim-tech-2-memory-architecture.md", "topic-app-cost-latency-budget.md", "claim-tech-5-latency-target.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-architecture

상위: [[overview-app-design]] · 설계서 4절. 파이프라인 기준: [[topic-tech-mvp-stack]], [[claim-tech-4-voice-pipeline-architecture]]

## 4.1 구성도 (설계)
```
클라이언트: React(Vite), 모바일 브라우저
  Pipecat client-js + voice-ui-kit(SmallWebRTC), 재생 시작 시각 기록(TTFA 끝점)
     │ WebRTC 오디오·이벤트        │ HTTPS(기억·동의·삭제 REST, 인증 필수)
서버: Python 3.12, FastAPI + Pipecat
  transport.input
   → Silero VAD + Smart Turn v3 (발화 종료 시각 기록)
   → RTZR STT ─partial─▶ MemoryPrefetch(user_pk 한정)
      └ 오디오 버퍼 ─▶ SER·Prosody (민감정보 동의 시), 병렬, 해당 턴 마감 후 폐기
   → KeywordGate: 위험 키워드 → 즉시 안전 스크립트
   → 컨텍스트(모드 + 메모리 블록 + 음성 단서)
   → Claude 스트리밍(첫 줄 위험 태그)
   → RiskTagParser: L1 → 생성문 폐기 후 안전 스크립트 / L0·L2 → 태그 제거 후 TTS
   → Typecast TTS(문장 단위)
  transport.output
  비동기: 통화 후 요약 / TTL 만료 / 삭제 큐
  Postgres+pgvector(RLS): users, consents, transcripts, memories, affect_cues, crisis_logs
외부: RTZR API, Claude API, Typecast(대안 ElevenLabs)
```
구성 요소별 구현은 [[topic-app-impl-audio-stt-turn]], [[topic-app-impl-ser-cues]], [[topic-app-impl-dialogue-tts]], [[topic-app-impl-memory]], [[topic-app-impl-safety-crisis]].

## 4.2 데이터 보관 요약 (상세는 [[topic-app-impl-consent-privacy]])
| 데이터 | 저장 | 보관 |
|---|---|---|
| 원본 음성 | 저장 안 함(STT·SER 후 폐기) | 0일. opt-in 보관은 목적·기간 미확정이라 MVP 비활성 |
| 전사 | 암호화 | 사용자가 삭제할 때까지 |
| SER 라벨·운율 단서 | 가명 키, 별도 테이블 | TTL 30일(초안, 미확정) |
| 기억 "내가 말한 것" / "한벗이 느낀 것" | 승인 후에만 | 삭제 시까지 / TTL 30일(초안, 미확정) |
| 위기 로그(민감정보 동의 시만) | 암호화 | 최소 보존(미확정) |
| voiceprint | 만들지 않음 | - |
근거: [[claim-feedback-1-reflect-professor-round1]] ⑤, [[claim-tech-6-sensitive-data-consent]], [[claim-tech-2-memory-architecture]].

## 4.3 턴 1회 시퀀스
```
t0 = 사용자 발화 종료 VAD 시점(마지막 음성 프레임)   <- TTFA 시작점
 ├ 턴 감지 대기: VAD stop 0.2s(기본값) + Smart Turn 판정(미실측)
 ├ RTZR Finalize → final 전사
 ├ (병렬) SER·운율: 해당 턴 Claude 호출 시작 전까지 오면 사용, 아니면 폐기
 ├ (병렬, partial 시점) 메모리 prefetch
 ├ KeywordGate(로컬) → 양성이면 Claude 없이 안전 스크립트
 ├ Claude 첫 토큰(위험 태그 수 토큰 포함)
 ├ 위험 태그 판정 → 첫 문장 집계
 ├ TTS 첫 청크 → 네트워크 → 클라이언트 재생 버퍼
t1 = 클라이언트 첫 오디오 재생 시작                  <- TTFA 끝점
```
시간 예산과 목표 조정 규칙은 [[topic-app-cost-latency-budget]]. 설계 원칙: SER·메모리는 직렬 경로에 넣지 않고 병렬로 돌리며, 늦으면 버린다(지연 보호와 맥락 오류 방지, 비평 13).

## 지연 예산 요약 (상세는 7절 페이지)
직렬 합계 STT 300 + Claude 700 + TTS 200 = 1.2s, 문장 집계 0.2–0.3s 추가로 1.4–1.5s. Wiki 목표 P50 1.0s는 미달 가능하며 W2 측정 후 1.5s 조정 여부를 정한다 ([[claim-tech-5-latency-target]]).

