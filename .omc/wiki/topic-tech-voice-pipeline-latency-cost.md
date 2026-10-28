---
title: "topic-tech-voice-pipeline-latency-cost"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "grade-B", "grade-C", "stt", "tts", "latency", "pricing", "korean", "topic"]
created: 2026-10-25T07:28:34.496Z
updated: 2026-10-25T07:28:34.496Z
sources: []
links: ["overview-technology.md", "claim-tech-3-stt-tts-vendors.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-tech-5-latency-target.md", "src-salesforce-2026-voice-agent-tutorial.md", "src-kyutai-2024-moshi.md", "src-qwen-2025-omni-models.md", "src-stepfun-2025-step-audio-r1.md", "src-livekit-2026-pipeline-docs.md", "src-openai-2026-realtime-pricing.md", "src-rtzr-2026-pricing.md", "src-elevenlabs-2026-api-pricing.md", "src-typecast-2026-api-pricing.md", "src-rtzr-2026-korean-stt-benchmark.md", "src-buzzasr-2025-whisper-korean.md", "src-hume-2026-evi-docs.md", "src-naver-2026-clova-speech-voice.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tech-voice-pipeline-latency-cost

# topic-tech-voice-pipeline-latency-cost

실시간 음성 파이프라인(cascade vs speech-to-speech) 지연·비용·한국어 STT/TTS 옵션 종합. 상위: [[overview-technology]]. 결정: [[claim-tech-3-stt-tts-vendors]], [[claim-tech-4-voice-pipeline-architecture]], [[claim-tech-5-latency-target]].

## 요약
스트리밍 cascade 실측 time-to-first-audio는 약 0.73–0.95초(Deepgram+vLLM+ElevenLabs; 본문 755ms vs 표 P50 947ms), speech-to-speech는 Moshi 200ms(L4, 영어), Qwen3-Omni 이론 234ms, DashScope cloud 실측 702ms, Step-Audio-R1 0.92초다. 한국어 STT는 ReturnZero 자체 벤치 기준 VITO CER 5.91% > Clova 7.52% > Whisper 11.39%, ReturnZero 1,000원/h(첫 10h 무료, 누진 할인), gpt-4o-mini-transcribe $0.003/min, Typecast ≈$0.07–0.09/1k 글자, ElevenLabs Flash $0.04/1k. 프레임워크(Pipecat/LiveKit)보다 모델 선택과 turn detection이 지연을 좌우한다(단, "차이 없음"은 미확인).

## 확인된 발견 (A/B)
### 지연
- Salesforce 튜토리얼: cascade TTFA 755ms(본문) / P50 947ms·min 729ms(표) [B]; Qwen3-Omni DashScope 702ms, 로컬 vLLM Thinker(텍스트) 516ms, Transformers full 약 146s(H200) [A] [[src-salesforce-2026-voice-agent-tutorial]]
- Moshi 이론 160ms, L4 실측 200ms, 24GB VRAM, CC-BY 4.0, 언어 미명시 [[src-kyutai-2024-moshi]]
- Qwen3-Omni **이론** first-packet 234ms, 한국어 출력, Apache 2.0 [[src-qwen-2025-omni-models]]
- Step-Audio-R1 Realtime first-packet 0.92s [[src-stepfun-2025-step-audio-r1]]
- LiveKit: cascade 누적 지연을 streaming으로 완화; 커뮤니티 사례 컴포넌트 합 ~0.8s인데 체감 3–4s(turn detection 추정) [A]; 업계 예산 STT 100–300 / LLM TTFT 350–1,000 / 총 ~800ms [B] [[src-livekit-2026-pipeline-docs]]
### 가격(공식)
- OpenAI: gpt-realtime audio $32/$64/cached $0.40, mini $10/$20/$0.30; gpt-4o-mini-transcribe $0.003/min; gpt-4o-mini-tts audio out $12/1M; Realtime GA 2025-08-28, 2.1 출시 2026-07-06 [[src-openai-2026-realtime-pricing]]
- ReturnZero 1,000원/h, 첫 10h 무료, 월 구간별 1,000/500/400/300원/h 누진, 스트리밍·화자분리·키워드 부스팅 [[src-rtzr-2026-pricing]]
- ElevenLabs Flash/Turbo $0.04/1k(모델 지연 ~75ms), v3/v4 $0.08/1k, Scribe v2 $0.22/h [[src-elevenlabs-2026-api-pricing]]
- Typecast 1 credit=1글자, Free **15k**/월, Lite $15/200k(≈$0.075/1k), Plus $280/4M(≈$0.07/1k) [[src-typecast-2026-api-pricing]]
### 한국어 STT 정확도
- RTZR 자체 벤치 평균 CER: VITO 5.91, RTZR Whisper 6.59, Clova 7.52, ETRI 10.19, Azure 10.88, AWS 11.11, Whisper 11.39, Google v2 11.50, Gemini 2.0 flash 16.58, Deepgram nova-2 21.02 [[src-rtzr-2026-korean-stt-benchmark]]
- Whisper-large-v3 zero-shot 한국어 CER 5.72%(FLEURS+CV, 정규화), BuzzASR fine-tune 4.61%; whisper.cpp 한국어 ggml 공개 [[src-buzzasr-2025-whisper-korean]]
- Hume EVI 가격 $0.04–0.07/min(2차), 2026-11-13 종료 [[src-hume-2026-evi-docs]]

## 미확인 (C) — 본문 분리
- "947ms는 버전 차이", "한벗 TTFA 0.75–1초 예상"(→ 목표치로 표기) [[src-salesforce-2026-voice-agent-tutorial]]
- Realtime GA 당시 cached $2.50/$20(→ GA cached는 $0.40), "gpt-realtime-mini는 text instruction으로만 제어" [[src-openai-2026-realtime-pricing]]
- RTZR 할인액 표기·동시 채널·"무료 초과 시 자동 중단"(→ 구간별 과금) [[src-rtzr-2026-pricing]]
- Typecast Free 30k(→ 15k), 한국어 품질 우위, Ko-TTS-Arena 코드 [[src-typecast-2026-api-pricing]]
- CLOVA Speech/Voice 요금·기능, Supertone 가격, Gemini Live 가격($0.30 vs 현재 $0.50), Daglo [[src-naver-2026-clova-speech-voice]]
- GLM-4-Voice 서술, Pipecat·LiveKit "지연 차이 없음", Whisper v3 10–20% 개선, Pipecat 실측치, gpt-realtime 공식 지연, ElevenLabs 한국어 지원 목록

## 설계 패턴
1. **MVP 1차 cascade**: 브라우저(React, WebRTC/WebSocket) → ReturnZero 스트리밍 STT ‖ SER(병렬) → 메모리 prefetch → Claude 스트리밍 → sentence-chunk → Typecast/ElevenLabs 스트리밍 TTS
2. **지연 예산(목표)**: STT 종료 ≤300ms, SER 병렬(추가 0 목표, 실측 필요), LLM TTFT ≤700ms, TTS 첫 청크 ≤200ms → TTFA **≤1.0초(P50), ≤1.5초(P95)** + turn detection 별도 측정
3. **비용 단위(1분 대화, 환율·VAT 제외)**: STT 약 17원(RTZR) 또는 약 4원(OpenAI mini) + TTS 300글자 $0.012(Flash)–0.027(Typecast) + LLM 토큰
4. **S2S 대안**: gpt-realtime-mini(audio $10/$20) 또는 Qwen3-Omni 자체 호스팅 — SER 신호 명시 저장 요구 때문에 MVP 후순위

