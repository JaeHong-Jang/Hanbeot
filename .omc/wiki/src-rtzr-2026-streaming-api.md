---
title: "src-rtzr-2026-streaming-api"
tags: ["app-design", "grade-A", "rtzr", "stt", "streaming"]
created: 2026-10-25T14:46:40.208Z
updated: 2026-10-25T14:46:40.208Z
sources: ["https://developers.rtzr.ai/docs/en/stt-streaming/"]
links: ["overview-app-design.md", "src-rtzr-2026-pricing.md", "claim-tech-3-stt-tts-vendors.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-rtzr-2026-streaming-api

# src-rtzr-2026-streaming-api
## 서지정보
RTZR(ReturnZero), 개발자 문서 STT 스트리밍, 발행일 미표기, https://developers.rtzr.ai/docs/en/stt-streaming/, 확인일 2026-10-25, 유형 공식문서
## 핵심 수치·사실 (설계서에서 쓴 것)
- sample_rate 범위, CALL 도메인, 연결 후 60초 무전송 시 종료
## 검증 결과
- 등급 A(설계서 정정 반영본). 검증표(implementation_refs) 정정: "60초 무음 시 종료"는 불일치 -> 원문은 연결 후 60초 안에 오디오 청크를 보내지 않으면 종료될 수 있음(음향적 무음과 전송 부재 혼동 금지). "CALL은 8kHz 전화 전용"도 불일치 -> 개인 헤드셋·근접 마이크에도 적합. "웹 마이크는 항상 16kHz 이상"은 확인불가.
## 사용처
- [[overview-app-design]] 의 5절 ②
- 관련: [[src-rtzr-2026-pricing]], [[claim-tech-3-stt-tts-vendors]]
