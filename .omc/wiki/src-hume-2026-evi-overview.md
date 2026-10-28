---
title: "src-hume-2026-evi-overview"
tags: ["app-design", "grade-A", "hume-evi", "turn-detection", "prosody"]
created: 2026-10-25T14:45:19.951Z
updated: 2026-10-25T14:45:19.951Z
sources: ["https://dev.hume.ai/docs/speech-to-speech-evi/overview"]
links: ["overview-app-design.md", "src-hume-2026-evi-docs.md", "overview-benchmark.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-hume-2026-evi-overview

# src-hume-2026-evi-overview
## 서지정보
Hume AI, 개발자 문서 EVI(speech-to-speech) overview, 발행일 미표기, https://dev.hume.ai/docs/speech-to-speech-evi/overview, 확인일 2026-10-25, 유형 공식문서
## 핵심 수치·사실 (설계서에서 쓴 것)
- 목소리 톤 기반 말 끝 감지, 전사 문장별 음성 표현 측정치(expression measure)
- 측정 조건: 개발자 문서
## 검증 결과
- 등급 A. 검증표(ux_benchmark): always interruptible, 톤 기반 end-of-turn, 문장별 표현 측정치, user_message 구성 모두 일치. 얼굴 표정이 아니라 음성 표현 측정치로 번역할 것. 해당 overview에는 라벨명·점수 형식이 없음(다른 API 문서까지 없다는 뜻 아님). 지연 <300ms는 확인불가, 48차원은 Expression Measurement API 기준(B).
## 사용처
- [[overview-app-design]] 의 1절
- 관련: [[src-hume-2026-evi-docs]], [[overview-benchmark]]
