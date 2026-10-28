---
title: "claim-tech-3-stt-tts-vendors"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "grade-C", "decision", "stt", "tts", "returnzero", "typecast", "elevenlabs", "korean"]
created: 2026-10-25T07:32:59.607Z
updated: 2026-10-25T07:32:59.607Z
sources: []
links: ["topic-tech-voice-pipeline-latency-cost.md", "overview-technology.md", "src-rtzr-2026-korean-stt-benchmark.md", "src-rtzr-2026-pricing.md", "src-openai-2026-realtime-pricing.md", "src-buzzasr-2025-whisper-korean.md", "src-elevenlabs-2026-api-pricing.md", "src-typecast-2026-api-pricing.md", "src-naver-2026-clova-speech-voice.md", "claim-tech-6-sensitive-data-consent.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-3-stt-tts-vendors

# claim-tech-3-stt-tts-vendors

## 결정
**STT는 ReturnZero 스트리밍(1,000원/h, 첫 10h 무료)을 1순위, gpt-4o-mini-transcribe($0.003/min ≈ 240원/h)를 비용 대안으로 둔다. TTS는 Typecast Lite($15/월 200k 글자)와 ElevenLabs Flash($0.04/1k)를 팀 블라인드 비교(10문장 x 3모델 x 10명) 후 선택하며, 비교 전 기본값은 Typecast다. CLOVA Speech/Voice는 단가 확인 후 재검토한다.**

상위: [[topic-tech-voice-pipeline-latency-cost]], [[overview-technology]]

## 근거
- 한국어 CER(RTZR 자체 벤치, 벤더 편향 주의): VITO 5.91 < Clova 7.52 < Whisper 11.39 < Deepgram 21.02 [[src-rtzr-2026-korean-stt-benchmark]]
- RTZR 1,000원/h, 첫 10h 무료, 월 구간별 누진(1,000/500/400/300원/h), 스트리밍·화자분리 [[src-rtzr-2026-pricing]]
- OpenAI gpt-4o-mini-transcribe $0.003/min [[src-openai-2026-realtime-pricing]]
- Whisper-large-v3 한국어 CER 5.72%(FLEURS/CV, 다른 정규화) 로컬 대안 [[src-buzzasr-2025-whisper-korean]]
- ElevenLabs Flash $0.04/1k, 모델 지연 ~75ms, 한국어 지원 목록 미확인 [[src-elevenlabs-2026-api-pricing]]
- Typecast Free 15k(상업 이용 제한), Lite ≈$0.075/1k, Plus ≈$0.07/1k [[src-typecast-2026-api-pricing]]
- CLOVA·Supertone·Gemini Live 요금 미확인 [[src-naver-2026-clova-speech-voice]]

## 비용 추정(MVP 30명 x 8주, 1인 주 3회 x 10분 ≈ 120시간 대화; 환율 1,333원/USD, VAT 제외)
| 항목 | 1순위 | 대안 |
|---|---|---|
| STT | RTZR: (120−10)h x 1,000원 ≈ **11만원** | OpenAI mini: 120h x 240원 ≈ 2.9만원 |
| TTS | 응답 50%·300글자/턴, 약 7,200턴 x 300 = 2.16M 글자 → Typecast Plus 1개월($280) 또는 Lite 초과분 ≈ $190 | ElevenLabs Flash 2.16M x $0.04/1k ≈ **$86** (Creator $22 + 초과) |
| 합계 | 약 **40만원 이내** | 약 15만원 이내 |

## 검증 가능 목표
1. 팀 녹음 샘플 100문장(대학생 일상 대화)으로 RTZR vs OpenAI mini vs Whisper-v3 CER 재측정 → 1순위 CER ≤ 8%
2. TTS 블라인드 MOS 비교 → 평균 ≥ 3.5/5 모델 채택
3. STT 스트리밍 partial → final 지연 ≤ 300ms 실측

## 미확인 리스크 (C)
- RTZR 벤치 평가 시점·모델 버전, 동시 채널 제한
- ElevenLabs 한국어 공식 지원, Typecast 품질 우위(벤더 주장)
- CLOVA Speech/Voice·Supertone 단가, Daglo
- 각 벤더 **no-training·국외이전 약관** → [[claim-tech-6-sensitive-data-consent]]

