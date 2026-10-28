---
title: "src-pipecat-2026-docs-tts-aggregation"
tags: ["app-design", "grade-A", "pipecat", "tts", "latency"]
created: 2026-10-25T14:48:19.788Z
updated: 2026-10-25T14:48:19.788Z
sources: ["https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html"]
links: ["overview-app-design.md", "claim-tech-5-latency-target.md", "claim-tech-4-voice-pipeline-architecture.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-pipecat-2026-docs-tts-aggregation

# src-pipecat-2026-docs-tts-aggregation
## 서지정보
Pipecat, 서버 레퍼런스 pipecat.services.tts_service, 발행일 미표기, URL 위 sources, 확인일 2026-10-25, 유형 공식문서
## 핵심 수치·사실 (설계서에서 쓴 것)
- SENTENCE/TOKEN 집계, 문장당 약 200-300ms 추가, 해당 옵션 deprecated
- 측정 조건: 보편적 실측 아님
## 검증 결과
- 등급 A. 검증표(implementation_refs): 문장 집계의 약 200~300ms 추가 지연은 공식 문서에서 확인. 보편 실측치로 쓰지 말 것.
## 사용처
- [[overview-app-design]] 의 5절 ⑥(대화 생성·문장 단위 TTS), 7.2절
- 관련: [[claim-tech-5-latency-target]], [[claim-tech-4-voice-pipeline-architecture]]
