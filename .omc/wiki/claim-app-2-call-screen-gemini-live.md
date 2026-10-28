---
title: "claim-app-2-call-screen-gemini-live"
tags: ["app-design", "decision", "call-screen", "barge-in", "gemini-live", "grade-A"]
created: 2026-10-25T14:49:49.859Z
updated: 2026-10-25T14:49:49.859Z
sources: ["reports/한벗 앱 설계서.md#1-3-5-3"]
links: ["overview-app-design.md", "topic-app-screen-flow.md", "topic-app-benchmark-map.md", "src-google-2026-gemini-live-help.md", "src-openai-2026-chatgpt-voice-help.md", "src-characterai-2024-character-calls.md", "src-fortune-2025-friend-necklace-review.md", "src-pipecat-2026-docs-speech-input.md", "topic-app-impl-audio-stt-turn.md", "topic-app-risks.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-app-8-hypotheses-h1-h5.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-2-call-screen-gemini-live

상위: [[overview-app-design]], [[topic-app-screen-flow]], [[topic-app-benchmark-map]]

## 결정
**통화 화면은 Gemini Live를 참고해 보류(마이크+AI 발화 정지)와 음소거(마이크만)를 구분하고, 양쪽 자막과 오브 1개 + 상태 텍스트로 구성한다. 끼어들기(말·탭)는 기본 ON이다. 위기 안내 중 끼어들면 음성은 멈추되 109 카드는 유지하고, 세션 말미에 다시 안내한다(`safety_reminder_pending=true`).**

## 근거
- Gemini Live: Hold/Mute 구분, End 후 전사본, Captions 유지, 끼어들기 말·끄기 토글·꺼도 탭 가능 [[src-google-2026-gemini-live-help]] (A, 공식설명, Android 문서 기준).
- ChatGPT: 응답 중 끼어들기를 공식 FAQ에 명시 [[src-openai-2026-chatgpt-voice-help]]. Character.AI: 버튼 끼어들기 [[src-characterai-2024-character-calls]].
- 피할 것: AI 말이 끝날 때까지 기다리게 하는 구조, Friend의 7–10초 지연 [[src-fortune-2025-friend-necklace-review]] (B, 개인 리뷰).
- 구현: Pipecat 시작 전략이 끼어들기를 트리거하면 봇 발화·진행 작업이 즉시 취소 [[src-pipecat-2026-docs-speech-input]] ([[topic-app-impl-audio-stt-turn]]).
- 한계: 이 근거는 기능 존재 사실이며 사용자 선호의 증거가 아니다. "Gemini 캡션이 사용자 발화를 표시하지 않는다"는 주장은 C로 제외 ([[topic-app-risks]]).

## 검증 가능 목표
- P0-2: 발화 시작부터 재생 중단까지 300ms 이하(목표, 기기·환경 칸별 20회).
- 위기 안내 중 끼어들기 시 카드 유지·세션 말미 재안내를 로그로 확인(P0-6 연계).
- [맞아]/[아니야] 1탭 응답이 확인 질문 지표에 기록됨 ([[claim-app-3-emotion-cue-confirmation-rules]]).

## 재검토 조건
- 기기 매트릭스에서 끼어들기 중단 지연이 목표를 반복 초과(스피커 출력의 에코로 오탐 등) → 스피커 환경에서만 탭 끼어들기 우선으로 조정.
- W6에서 음성이 "어색하다"거나 텍스트 선택이 과반(H2) → 텍스트 우선 + 음성 보조로 재설계 ([[claim-app-8-hypotheses-h1-h5]]).

