---
title: "src-typecast-2026-api-pricing"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "tts", "typecast", "korean", "pricing", "app-design"]
created: 2026-10-25T07:18:52.119Z
updated: 2026-10-25T14:52:09.607Z
sources: ["https://typecast.ai/pricing/api/", "https://typecast.ai/learn/?p=13109", "https://huggingface.co/spaces/channelcorp/Ko-TTS-Arena/blob/refs%2Fpr%2F1/tts.py"]
links: ["claim-tech-3-stt-tts-vendors.md", "topic-tech-voice-pipeline-latency-cost.md", "src-elevenlabs-2026-api-pricing.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-typecast-2026-api-pricing

# src-typecast-2026-api-pricing

## 서지정보
Typecast(네오사피엔스) 공식 API 가격 페이지; Typecast 블로그(한국어 품질 비교 주장); channelcorp Ko-TTS-Arena HF Space.

## URL
- https://typecast.ai/pricing/api/
- https://typecast.ai/learn/?p=13109
- https://huggingface.co/spaces/channelcorp/Ko-TTS-Arena/blob/refs%2Fpr%2F1/tts.py (PR ref 접근 실패)

## 라이선스/상업 이용
- 상용 API. **무료 플랜 생성물은 상업 이용 제한·출처 표기 조건 명시** → MVP 테스트 단계라도 유료 Lite 권장

## 핵심 수치
- 1 credit = 1 글자 (A)
- Free: **15k credits/월**, 동시 2 — 리서치 노트의 30k는 **불일치(C)**, 정정 적용 (우선 수정 항목)
- Lite $15/월 200k credits (≈$0.075/1k, 초과 $0.09/1k) (A)
- Plus $280/월 4M credits (≈$0.07/1k, 초과 $0.08/1k) (A); Enterprise 견적
- 단가는 포함량을 모두 썼을 때의 평균값

## 검증 결과
- credit·Lite·Plus: 등급 **A**. Free 30k: **C → 15k로 정정**
- "Typecast가 한국어에서 더 자연스럽다": **C** (벤더 의견, 독립 평가 아님)
- Ko-TTS-Arena 코드 공개: **C** (PR 경로 접근 실패)

## 한벗 적용 포인트
- 한국어 TTS 1순위 후보(국내 벤더, 한국어 음성 다수). 응답 300글자 ≈ **$0.021–0.027/턴** (B) → [[claim-tech-3-stt-tts-vendors]]
- 품질 우위는 미입증 → ElevenLabs Flash·CLOVA Voice와 팀 블라인드 비교(10문장 x 3모델 x 10명) 후 결정 → [[topic-tech-voice-pipeline-latency-cost]]
- 관련: [[src-elevenlabs-2026-api-pricing]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:09.607Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S20] (등급 A, 공식설명). 사용: Lite $15/200k, 초과 $0.09/1k, Plus $280/4M, 무료 상업 제한. 조건: 1 credit = 1자.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지.
- 사용처: [[overview-app-design]] 의 6.1절, 7.1절, 5절 ⑦. 관련: [[claim-tech-3-stt-tts-vendors]]
