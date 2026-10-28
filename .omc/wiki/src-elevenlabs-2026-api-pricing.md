---
title: "src-elevenlabs-2026-api-pricing"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "tts", "elevenlabs", "pricing", "app-design"]
created: 2026-10-25T07:18:49.777Z
updated: 2026-10-25T14:52:13.207Z
sources: ["https://elevenlabs.io/pricing/api"]
links: ["claim-tech-3-stt-tts-vendors.md", "topic-tech-voice-pipeline-latency-cost.md", "src-typecast-2026-api-pricing.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-elevenlabs-2026-api-pricing

# src-elevenlabs-2026-api-pricing

## 서지정보
ElevenLabs 공식 API 가격 페이지 (2026-10 확인).

## URL
- https://elevenlabs.io/pricing/api

## 라이선스/상업 이용
상용 API. 유료 플랜에서 상업 이용 가능(플랜 약관 확인). **한국어 공식 지원 여부는 언어 수만 확인(v4 90+, v3 70+, Flash 32, v2 29) — 별도 언어 목록 확인 필요.**

## 핵심 수치 (1k 글자당)
- v3 $0.08, v3 Conversational $0.04, v2 Multilingual $0.08, **Flash/Turbo $0.04 (모델 지연 약 75ms)**, v4 $0.08, v4 Turbo $0.04
- 플랜($0.08 모델 기준 포함량): Free 10k, Starter $6/75k, Creator $22/275k, Pro $99/1.238M, Scale $299/3.738M, Business $990/12.375M 글자 — $0.04 모델은 포함 문자량이 더 많음
- STT Scribe v2 $0.22/hr, Scribe v2 Realtime $0.39/hr; Agents(Speech Engine) $0.08/min

## 검증 결과
- 모든 항목 등급 **A**. 75ms는 벤더 제시 모델 지연(E2E 아님). 추가 기능·burst 요금 별도

## 한벗 적용 포인트
- 응답 300글자 기준 Flash **$0.012/턴** (B, 구독 최소 결제액 제외) → [[claim-tech-3-stt-tts-vendors]]
- Typecast 대비 단가 우위이나 한국어 품질·지원 미확인 → Ko-TTS-Arena 방식 블라인드 비교 필요 → [[topic-tech-voice-pipeline-latency-cost]]
- 관련: [[src-typecast-2026-api-pricing]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:13.207Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S21] (등급 A, 공식설명). 사용: Flash $0.04/1k. 조건: 구독 최소액 별도.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지.
- 사용처: [[overview-app-design]] 의 7.1절. 관련: [[claim-tech-3-stt-tts-vendors]]
