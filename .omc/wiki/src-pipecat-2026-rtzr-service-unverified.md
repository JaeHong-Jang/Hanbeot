---
title: "src-pipecat-2026-rtzr-service-unverified"
tags: ["app-design", "grade-C", "pipecat", "rtzr", "stt", "unverified"]
created: 2026-10-25T14:47:40.495Z
updated: 2026-10-25T14:47:40.495Z
sources: ["https://docs.pipecat.ai/api-reference/server/services/stt/rtzr", "https://github.com/jhwanseok/pipecat-rtzr"]
links: ["overview-app-design.md", "src-pipecat-2026-docs-supported-services.md", "claim-tech-3-stt-tts-vendors.md"]
category: reference
confidence: low
schemaVersion: 1
---

# src-pipecat-2026-rtzr-service-unverified

# src-pipecat-2026-rtzr-service-unverified
## 서지정보
Pipecat 문서 RTZR STT 서비스 페이지 + 커뮤니티 저장소 jhwanseok/pipecat-rtzr, 발행일 미표기, 확인일 2026-10-25, 유형 공식문서(접근 실패)/저장소
## 핵심 수치·사실 (설계서에서 쓴 것)
- RTZR 서비스 생성 스니펫
- 측정 조건: 원문 미확보
## 검증 결과
- 등급 C. 검증표(implementation_refs): `RTZRSTTService` 스니펫이 공식 원문인지, `sommers_ko`·CALL 기본값, Finalize·keepalive 구현, `pipecat-rtzr` 0.1.0 alpha/스타 0/커밋 9개/BSD-2, Pipecat 1.13.0 테스트 모두 확인불가(원문 접근 실패이지 부재 입증 아님). 설치 명령 `uv add pipecat-rtzr` 만 서비스 목록으로 A 확인. 스니펫은 "원문 미확보"로 표기.
## 사용처
- [[overview-app-design]] 의 5절 ②
- 관련: [[src-pipecat-2026-docs-supported-services]], [[claim-tech-3-stt-tts-vendors]]
