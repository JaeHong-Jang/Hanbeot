---
title: "topic-tech-mvp-stack"
tags: ["tech", "mvp-stack", "grade-A", "grade-B", "grade-C", "architecture", "stt", "ser", "tts", "memory", "claude", "pipeline"]
created: 2026-10-25T07:35:06.981Z
updated: 2026-10-25T07:35:06.981Z
sources: []
links: ["overview-technology.md", "overview-hanbeot-project.md", "src-rtzr-2026-korean-stt-benchmark.md", "src-rtzr-2026-pricing.md", "src-openai-2026-realtime-pricing.md", "src-buzzasr-2025-whisper-korean.md", "claim-tech-3-stt-tts-vendors.md", "src-ma-2024-emotion2vec.md", "src-emotion2vec-2024-github.md", "src-funaudiollm-2024-sensevoice.md", "claim-tech-1-ser-model.md", "src-eyben-2016-egemaps.md", "src-lee-2024-llm-empathy.md", "src-kang-2024-esconv-llm-limits.md", "src-basar-2024-mi-reflection.md", "claim-tech-7-dialogue-mode-strategy.md", "src-mem0-2025-locomo-paper.md", "src-letta-2025-memory-blocks.md", "claim-tech-2-memory-architecture.md", "src-typecast-2026-api-pricing.md", "src-elevenlabs-2026-api-pricing.md", "src-naver-2026-clova-speech-voice.md", "src-livekit-2026-pipeline-docs.md", "claim-tech-4-voice-pipeline-architecture.md", "src-qwen-2025-omni-models.md", "src-salesforce-2026-voice-agent-tutorial.md", "src-psycrisisbench-2025.md", "src-vera-mh-2026-eval-tools.md", "claim-tech-8-crisis-referral-flow.md", "src-law-2026-pipa-sensitive-info.md", "src-pipc-2025-genai-guide.md", "claim-tech-6-sensitive-data-consent.md", "src-hume-2026-evi-docs.md", "claim-tech-5-latency-target.md", "topic-tech-privacy-voice-data.md"]
category: architecture
confidence: medium
schemaVersion: 1
---

# topic-tech-mvp-stack

# topic-tech-mvp-stack

한벗 MVP(2026-12) 권장 기술 스택. 각 선택의 상세 근거는 claim 페이지, 수치 출처는 src 페이지 참조. 상위: [[overview-technology]], [[overview-hanbeot-project]].

## 권장 MVP 스택

| 컴포넌트 | 선택 | 대안 | 비용 | 라이선스 | 근거 |
|---|---|---|---|---|---|
| 클라이언트 | React + WebRTC/WebSocket | — | 0 | MIT | 팀 경험 |
| STT(한국어) | ReturnZero 스트리밍 | gpt-4o-mini-transcribe $0.003/min; Whisper-large-v3 로컬(CER 5.72% FLEURS/CV) | 1,000원/h, 첫 10h 무료, 누진 할인 | 상용 API | [[src-rtzr-2026-korean-stt-benchmark]], [[src-rtzr-2026-pricing]], [[src-openai-2026-realtime-pricing]], [[src-buzzasr-2025-whisper-korean]] → [[claim-tech-3-stt-tts-vendors]] |
| SER(음성) | emotion2vec+ base(약 90M, FunASR) | SenseVoice-Small(234M, ko ASR 겸용); Whisper-encoder + head | 0(자체 추론, GPU 1장) | 코드 MIT, **가중치 model-license 미확인** | [[src-ma-2024-emotion2vec]], [[src-emotion2vec-2024-github]], [[src-funaudiollm-2024-sensevoice]] → [[claim-tech-1-ser-model]] |
| Paralinguistic | openSMILE eGeMAPS 88 하위 집합(pitch, loudness, rate, pause) | 자체 librosa 추출 | 0 | **openSMILE 상업 라이선스 확인 필요** | [[src-eyben-2016-egemaps]] |
| 텍스트 감정 + 응답 | Claude API 스트리밍, 모드 고정 프롬프트 | vLLM 자체 호스팅(Llama/Mistral) | 토큰 과금(별도 확인) | 상용 API | [[src-lee-2024-llm-empathy]], [[src-kang-2024-esconv-llm-limits]], [[src-basar-2024-mi-reflection]] → [[claim-tech-7-dialogue-mode-strategy]] |
| 메모리 | pgvector 단순 RAG(k=2, 256-tok) + 블록 metadata → Mem0 OSS로 승급 | Letta 서버 | 인프라만 | OSS(Apache 2.0, 별도 확인) | [[src-mem0-2025-locomo-paper]], [[src-letta-2025-memory-blocks]] → [[claim-tech-2-memory-architecture]] |
| TTS(한국어) | Typecast Lite($15/월 200k) | ElevenLabs Flash $0.04/1k(한국어 확인 필요); CLOVA Voice(요금 미확인) | ≈$0.07–0.09/1k 글자 | 상용 API(무료 플랜 상업 제한) | [[src-typecast-2026-api-pricing]], [[src-elevenlabs-2026-api-pricing]], [[src-naver-2026-clova-speech-voice]] → [[claim-tech-3-stt-tts-vendors]] |
| 오케스트레이션 | Pipecat 또는 LiveKit Agents | 자체 FastAPI WebSocket | 0 | OSS | [[src-livekit-2026-pipeline-docs]] → [[claim-tech-4-voice-pipeline-architecture]] |
| S2S 대안(후순위) | gpt-realtime-mini | Qwen3-Omni(Apache 2.0, ko 출력, 이론 234ms) | audio $10/$20 per 1M | API / Apache 2.0 | [[src-openai-2026-realtime-pricing]], [[src-qwen-2025-omni-models]], [[src-salesforce-2026-voice-agent-tutorial]] |
| 안전 분류 | Claude 분류 지시 2단(명시/암시) + 한국어 테스트 세트 | Llama Guard 등(미조사) | 추가 호출 없음 | — | [[src-psycrisisbench-2025]], [[src-vera-mh-2026-eval-tools]] → [[claim-tech-8-crisis-referral-flow]] |
| 개인정보 | 민감정보 분리 동의, 가명 키, 3계층 분리 저장 | — | 법무 검토 1회 | — | [[src-law-2026-pipa-sensitive-info]], [[src-pipc-2025-genai-guide]] → [[claim-tech-6-sensitive-data-consent]] |
| 제외 | Hume EVI | — | — | 2026-11-13 API 종료 | [[src-hume-2026-evi-docs]] |

## 지연·비용 요약
- TTFA 목표 P50 ≤ 1.0s / P95 ≤ 1.5s(목표치, 실측 아님) → [[claim-tech-5-latency-target]]
- 1분 대화 변동비(환율·VAT 제외): STT 약 17원 + TTS $0.012–0.027/턴 + Claude 토큰
- MVP 30명 x 8주(약 120시간) STT+TTS 약 15–40만원 → [[claim-tech-3-stt-tts-vendors]]

## 파이프라인 다이어그램
```
 사용자 음성 ──▶ [React / WebRTC] ──오디오 스트림──▶ [오케스트레이터 Pipecat/LiveKit]
                                                        │
          ┌─────────────────────────────────────────────┼──────────────────────┐
          ▼                                             ▼                      ▼
 [STT 스트리밍 RTZR]                         [SER emotion2vec+ (turn-end)]   [eGeMAPS 스트리밍]
   partial ──▶ [메모리 prefetch pgvector/Mem0]     라벨·confidence            pitch/rate/pause
   final                                                │                      │
          └───────────────┬─────────────────────────────┴──────────────────────┘
                          ▼
            [위험 분류 L1 명시 / L2 암시 누적]  ──양성──▶ [안전 모드: 109 안내 스크립트]
                          │
                          ▼
   [Claude 스트리밍: 모드 프롬프트(들어줘/조언/정리) + 메모리 블록 + SER 컨텍스트]
                          │ sentence-chunk
                          ▼
            [TTS 스트리밍 Typecast / ElevenLabs Flash] ──▶ [브라우저 재생]
                          │
                          ▼
   [메모리 쓰기: user_stated_facts(영구) / ai_inferred_affect(TTL) / persona]
                          │
                          ▼
   [React 메모리 UI: 열람·수정·삭제 | 민감정보 동의·옵트아웃 | 원본 음성 즉시 폐기]
```

## 라이선스 체크리스트(MVP 전 확인)
1. emotion2vec+ / SenseVoice 가중치 `model-license` 상업 조항
2. openSMILE 상업 라이선스
3. ETRI KEMDy·AI Hub 데이터셋 약관(학습 사용 시)
4. Claude·RTZR·Typecast/ElevenLabs no-training·국외이전 조항
5. Mem0 / Letta / Pipecat / LiveKit OSS 라이선스 재확인

## 미확인(C) 요약
- Typecast 한국어 품질 우위, ElevenLabs 한국어 지원, CLOVA 단가
- 한벗 구성 실측 TTFA, SER 병렬 추가 지연
- 모바일 on-device 성능(MVP 이후) → [[topic-tech-privacy-voice-data]]

