---
title: "claim-app-12-interruption-backchannel-filler-rules"
tags: ["claim-app", "turn-taking", "barge-in", "backchannel", "filler", "design-value"]
created: 2026-11-07T19:48:00.964Z
updated: 2026-11-07T19:48:00.964Z
sources: ["research_notes/Scopus 조사/04_dialogue_dynamics_literature.md", ".omc/orchestra/reviews/20261108_040523_verify_04_dialogue_dynamics_literature.md"]
links: ["claim-app-1-pipecat-orchestrator.md", "topic-dialogue-dynamics-evidence-2026-11.md", "topic-app-impl-audio-stt-turn.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-12-interruption-backchannel-filler-rules

# claim-app-12-interruption-backchannel-filler-rules

상위: [[claim-app-1-pipecat-orchestrator]] · 근거: [[topic-dialogue-dynamics-evidence-2026-11]] · [[topic-app-impl-audio-stt-turn]].

## 결정
한벗 캐스케이드(VAD -> STT -> LLM -> TTS)의 끼어들기·맞장구·필러·말 끝 규칙 4개를 W2 실측 전 **초기 설계값**으로 채택한다. 아래 모든 수치는 **설계값(미확정)**이며 논문이 검증한 값이 아니다(검증표 C). 논문이 직접 지지하는 것은 각 규칙의 방향뿐이다.

## 규칙
1. **끼어들기 vs 맞장구** (봇 발화 중)
   - VAD 시작 즉시 TTS ducking(설계값: 수십 ms).
   - 사용자 발화가 1초 미만 & 2어절 미만(FDB 맞장구 정의 차용) & 한국어 맞장구 사전(응, 음, 어, 네, 아, 그래, 맞아; **사전 미확정**, 팀 녹음으로 확정)이면 ducking 해제 후 이어 말함(resume), 아니면 취소하고 사용자 턴으로 전환.
   - 진짜 끼어들기 정지 목표 <=300ms(설계값). GPT-4o 0.23s가 상용 최저 관찰이나 한국어·캐스케이드 달성 보증은 아님. 짧은 거절·정정이 사전에 걸릴 위험 있음.
2. **맞장구 클립**: 사용자가 말하는 중 + VAD 무음 + Smart Turn "미완료"일 때만. 8~10초에 최대 1회, 연속 금지(설계값, 사람 0.30% 수치에서 도출 불가). 사용자별 on/off 후보(개인차 B).
3. **필러**: 종료 확정 후 1.0초까지 첫 오디오가 없을 때만. TTFA가 1.5초 이내면 생략(Maslych: 1.5s에서 유의 효과 없음, 비유의는 무효 증명 아님). 인공 효과음 금지, 사람 목소리 클립 3~5종 순환(숫자는 설계값). 위기·슬픔 직후 침묵/호흡 클립 여부는 가설.
4. **말 끝 임계 튜닝**: VAD stop {0.2, 0.3, 0.5}s x 미완료 추가 대기 상한 {1.0, 1.5, 2.0}s 격자, 머뭇거림 포함 50턴 이상(통계적 충분성 미입증), 조기 종료율 <=10%와 TTFA P50/P90 동시 측정. 두 오류(너무 이름/너무 늦음)의 균형.

## 위험·한계
제3자 대화·배경음 오인(GPT-4o Respond 0.91/0.93) -> 근접 마이크 가정, 길이·신뢰도 필터, AEC. 한국어 오중단률 수치 없음. 평가 지표는 위 topic 6절.

