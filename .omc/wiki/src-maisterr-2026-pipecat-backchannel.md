---
title: "src-maisterr-2026-pipecat-backchannel"
tags: ["github", "backchannel", "pipecat", "english-only", "grade-A"]
created: 2026-11-07T20:06:51.173Z
updated: 2026-11-07T20:06:51.173Z
sources: ["https://github.com/maisterr/pipecat-backchannel"]
links: ["claim-app-12-interruption-backchannel-filler-rules.md", "topic-dev-repos-voice-conversation-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-maisterr-2026-pipecat-backchannel

## 서지
maisterr/pipecat-backchannel (GitHub README·소스). 조회 2026-11-08.

## 수치·기능
- 25★, push 2026-08-10, BSD-2(A).
- 문장/절 완결 휴지에서 짧은 클립 재생. `fire_probability=0.8`, `cooldown_s=2.5`, `min_speech_before_eligible_s=0.7`, `volume=0.6`.
- 클립은 자체 TTS로 첫 실행에 녹음해 `.clip_cache/` 캐시. 그룹 continuer/agreement/hesitation/surprise 각 2개 이상, 구두점으로 억양 변주(`"Mhm."` 하강 / `"Mhm,"` 유지 / `"Hm..."` 늘임).
- 맞장구는 턴을 가져가지 않고 LLM 컨텍스트에 흔적 없음. VAD+턴 감지기를 병렬 실행해 추론 약 2배. 단어 찾기 휴지·완결된 질문에는 침묵.

## 라이선스
BSD-2.

## 검증 결과
수치·구조 A. **영어 클립·정규식 전용**. "클립·규칙만 바꾸면 한국어판 완성"은 턴 감지·STT·타이밍·억양 한국어 검증이 빠져 확인불가(C). "Typecast로 녹음이 가장 저렴"도 비교 근거 없음(C).

## 한벗 적용
구조(휴지 게이트+확률+쿨다운+캐시)를 한국어 클립("응", "아", "그렇구나")으로 시험하는 포크 후보. 한국어 오끊김·과다 발화율을 실측.

## 사용처
[[claim-app-12-interruption-backchannel-filler-rules]] · [[topic-dev-repos-voice-conversation-2026-11]]

