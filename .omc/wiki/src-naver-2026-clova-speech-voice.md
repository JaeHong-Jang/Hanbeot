---
title: "src-naver-2026-clova-speech-voice"
tags: ["tech", "voice-pipeline-latency-cost", "grade-C", "stt", "tts", "clova", "korean", "unverified", "gemini", "supertone"]
created: 2026-10-25T07:21:15.830Z
updated: 2026-10-25T07:21:15.830Z
sources: ["https://guide.ncloud-docs.com/docs/ko/clovaspeech-overview", "https://www.ncloud.com/product/aiService/clovaSpeech", "https://guide.ncloud-docs.com/docs/ko/clovavoice-overview", "https://www.supertone.ai/ko/play", "https://www.getmaxim.ai/bifrost/llm-cost-calculator/provider/gemini/model/gemini-live-2.5-flash-preview-native-audio-09-2025"]
links: ["src-rtzr-2026-korean-stt-benchmark.md", "claim-tech-3-stt-tts-vendors.md", "topic-tech-voice-pipeline-latency-cost.md"]
category: reference
confidence: low
schemaVersion: 1
---

# src-naver-2026-clova-speech-voice

# src-naver-2026-clova-speech-voice

**미확인(C)** — 이 페이지의 벤더(Naver CLOVA, Supertone, Gemini Live)는 공식 문서 접근 실패 또는 2차 출처 불일치로 모두 C 등급. 본문 인용 시 "미확인" 표기 필수.

## 서지정보
Naver Cloud CLOVA Speech / CLOVA Voice 공식 문서·제품 페이지; Supertone Play 페이지; GetMaxim·CloudPrice Gemini Live 가격 집계.

## URL
- https://guide.ncloud-docs.com/docs/ko/clovaspeech-overview (접근 실패)
- https://www.ncloud.com/product/aiService/clovaSpeech
- https://guide.ncloud-docs.com/docs/ko/clovavoice-overview (접근 실패)
- https://www.supertone.ai/ko/play (리디렉션 후 접근 실패)
- https://www.getmaxim.ai/bifrost/llm-cost-calculator/provider/gemini/model/gemini-live-2.5-flash-preview-native-audio-09-2025

## 라이선스/상업 이용
모두 상용 API. 단가 미확인.

## 핵심 수치 (노트 주장, 미검증)
- CLOVA Speech: 단문/장문/스트리밍, 키워드 부스팅, Papago 번역, 한국 리전; "국내 가장 높은 수준의 한국어 인식률"(벤더 마케팅 문구) — **요금 미확인**
- CLOVA Voice: 100개 음성, 한·영·일·중·스페인어, 볼륨·속도·피치·감정 조절 — **요금 미확인**
- Supertone Play: Free 3,000 credits, Starter $2.99/20k, Creator $10.49/100k, API 분당 20회 제한; 기업 API 단가 미공개
- Gemini Live 2.5 Flash native audio: 노트의 $0.30/M in은 **불일치** — 현재 GetMaxim 페이지는 **input $0.50/M, output $2/M**; cached $0.075 근거 미확인; 구형 websocket $3/$12 미확인; 한국어 별도 요금 없음도 미확인
- Daglo(다글로) API: 검색 결과 없음

## 검증 결과
- 전 항목 등급 **C(확인불가/불일치)**

## 한벗 적용 포인트
- CLOVA Speech는 RTZR 벤치에서 CER 2위(7.52, [[src-rtzr-2026-korean-stt-benchmark]])라 유력 대안이나 단가 확인 전까지 비교표에 "요금 미확인"으로 기재 → [[claim-tech-3-stt-tts-vendors]]
- CLOVA Voice 감정 조절 기능은 한벗 응답 톤 제어에 유용할 수 있음(미확인) → [[topic-tech-voice-pipeline-latency-cost]]

확인일: 2026-10-25

