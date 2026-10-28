---
title: "src-rtzr-2026-pricing"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "stt", "korean", "returnzero", "pricing", "app-design"]
created: 2026-10-25T07:18:44.151Z
updated: 2026-10-25T14:52:06.110Z
sources: ["https://developers.rtzr.ai/docs/pricing/", "https://rtzr.ai/pricing", "https://developers.rtzr.ai/", "https://www.venturesquare.net/863579/"]
links: ["claim-tech-3-stt-tts-vendors.md", "src-openai-2026-realtime-pricing.md", "topic-tech-voice-pipeline-latency-cost.md", "src-rtzr-2026-korean-stt-benchmark.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-rtzr-2026-pricing

# src-rtzr-2026-pricing

## 서지정보
ReturnZero 공식 개발자 요금 문서 및 가격 페이지; VentureSquare 과거 보도(VITO 개발자 사이트 공개 당시).

## URL
- https://developers.rtzr.ai/docs/pricing/ (공식 요금 문서, 확인됨)
- https://rtzr.ai/pricing (접근 실패)
- https://developers.rtzr.ai/
- https://www.venturesquare.net/863579/

## 라이선스/상업 이용
상용 API(종량제, VAT 별도). 국내 기업(한국어 특화). 학습 미사용 약관 별도 확인.

## 핵심 수치
- Basic: Batch·Streaming 모두 **1,000원/시간**(≈16.67원/분, VAT 별도), **첫 10시간 무료** (A)
- 현행 공식 표: 월 사용 구간별 **1,000 / 500 / 400 / 300원/h 누진 과금** — 리서치 노트의 "최대 400원/h 할인, Enterprise 추가 300원/h 할인"은 "할인액"과 "적용 단가" 혼동 가능성 → **C**
- 동시 10채널, 10,000시간+/100채널+ 영업 문의: **C** (페이지 접근 실패)
- 기능: 실시간 스트리밍, 화자분리, 키워드 부스팅 (A)
- 과거 월 1,000시간 무료 보도: **B** (과거 프로모션, 현행과 구분)

## 검증 결과
- 1,000원/h·첫 10h 무료·기능: 등급 **A**
- **정정(C)**: "무료 10시간 초과 시 자동 중단" → 현행 문서는 **무료분 초과부터 구간별 과금 적용**. 우선 수정 항목

## 한벗 적용 포인트
- MVP 30명 테스트(1인 10분 x 주 3회 x 8주 ≈ 120시간 가정) STT 비용 ≈ 12만원 수준(첫 10h 무료 제외, VAT 별도) → [[claim-tech-3-stt-tts-vendors]]
- 비교: gpt-4o-mini-transcribe ≈ 240원/h([[src-openai-2026-realtime-pricing]]) — 가격은 OpenAI가 약 1/4이나 CER은 RTZR 벤치에서 Whisper 계열이 열세 → [[topic-tech-voice-pipeline-latency-cost]]
- 관련: [[src-rtzr-2026-korean-stt-benchmark]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:06.110Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S19] (등급 A, 공식설명). 사용: 1,000원/h, 첫 10h 무료, 누진. 조건: VAT 별도, 2026-10.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지.
- 사용처: [[overview-app-design]] 의 6.1절, 7.1절. 관련: [[claim-tech-3-stt-tts-vendors]]
