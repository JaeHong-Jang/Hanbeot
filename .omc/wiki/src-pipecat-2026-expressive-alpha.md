---
title: "src-pipecat-2026-expressive-alpha"
tags: ["pipecat", "expressive", "alpha", "emotion", "tts-adapter", "grade-A"]
created: 2026-11-07T20:06:53.416Z
updated: 2026-11-07T20:06:53.416Z
sources: ["https://github.com/pipecat-ai/pipecat/tree/main/src/pipecat/expressive"]
links: ["topic-dev-repos-voice-conversation-2026-11.md", "claim-app-1-pipecat-orchestrator.md", "src-pipecat-2026-github.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-pipecat-2026-expressive-alpha

## 서지
pipecat-ai/pipecat `src/pipecat/expressive/` (main 소스). 조회 2026-11-08. 상태 alpha.

## 수치·기능
- 모듈: perception, expression, policy, instructions, formatter, spoken + `adapters/tts/services/`(azure, cartesia, elevenlabs, fish, gemini, inworld, minimax, mistral, soniox).
- 지각: `PerceptionSignal(name="tone", labels=[("frustrated",0.86),("neutral",0.10)])` 또는 `speech_rate` 값형을 전사 프레임에 부착. `PerceptionCapabilities`를 방송해 LLM이 읽는 법을 지시문으로 받음. 같은 턴 중복 읽기는 `merge_perception`이 신호별 최대값 유지.
- 표현 태그: `<<warm>>`(이후 전달 방식), `<<이름: 단어>>`(스팬), `^^단어^^`(강조), `[ [laugh] ]`(소리), `[ [pause N] ]`(ms). 포매터가 표시 텍스트와 제공사 마크업(예: ElevenLabs `[warmly]`)을 분리 생성. TTS가 못 하는 표현은 요청에서 제외, 컨텍스트에는 유지.
- 정책: `MATCH_STYLE`(적대적이면 맞추지 않고 침착), `BREATHE`(답변당 최대 1회).

## 라이선스
Pipecat 본체 라이선스를 따름(이 조사에서 모듈 별도 확인 안 함, C).

## 검증 결과
구조·태그 A(소스 열람). alpha라 문법 변경 가능. Typecast·RTZR 어댑터 없음.

## 한벗 적용
emotion2vec+ scores를 PerceptionSignal로 변환하고 Typecast용 `BaseExpressionAdapter`를 직접 작성하는 안(제안, 미검증). 과용 억제 지시를 프롬프트 설계에 차용.

## 사용처
[[topic-dev-repos-voice-conversation-2026-11]] · [[claim-app-1-pipecat-orchestrator]] · [[src-pipecat-2026-github]]

