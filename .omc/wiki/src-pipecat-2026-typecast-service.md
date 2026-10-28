---
title: "src-pipecat-2026-typecast-service"
tags: ["app-design", "grade-A", "pipecat", "typecast", "tts"]
created: 2026-10-25T14:48:23.844Z
updated: 2026-10-25T14:48:23.844Z
sources: ["https://docs.pipecat.ai/api-reference/server/services/tts/typecast", "https://github.com/neosapience/pipecat-typecast"]
links: ["overview-app-design.md", "src-typecast-2026-api-pricing.md", "claim-tech-3-stt-tts-vendors.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-pipecat-2026-typecast-service

# src-pipecat-2026-typecast-service
## 서지정보
Pipecat 문서 Typecast TTS 서비스 + Neosapience 저장소 pipecat-typecast, 발행일 미표기, 확인일 2026-10-25, 유형 공식문서/저장소
## 핵심 수치·사실 (설계서에서 쓴 것)
- 래퍼 기본값, 공식 예시 값
- 측정 조건: Pipecat 미테스트 명시
## 검증 결과
- 등급 A. 검증표(implementation_refs): 래퍼 44.1kHz vs API WAV 32kHz 차이는 문서상 확인되나 실제 출력 문제는 실행 검증 필요(확인불가). Pipecat 서비스에 문자열 `kor` 사용은 래퍼가 `Language` 타입을 쓰므로 확정 불가. Typecast 연동은 벤더(Neosapience)가 유지보수.
## 사용처
- [[overview-app-design]] 의 5절 ⑦(TTS), 6.1절
- 관련: [[src-typecast-2026-api-pricing]], [[claim-tech-3-stt-tts-vendors]]
