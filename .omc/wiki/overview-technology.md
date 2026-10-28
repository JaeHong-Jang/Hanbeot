---
title: "overview-technology"
tags: ["tech", "overview", "grade-A", "grade-B", "grade-C", "architecture", "technology", "verification"]
created: 2026-10-25T07:35:11.560Z
updated: 2026-10-25T14:52:49.058Z
sources: ["research_notes/한벗 창업 딥리서치/technology.md", ".omc/orchestra/reviews/20261025_155449_verify_technology.md"]
links: ["overview-hanbeot-project.md", "overview-orchestra-team.md", "topic-tech-speech-emotion-recognition.md", "topic-tech-long-term-memory.md", "topic-tech-voice-pipeline-latency-cost.md", "topic-tech-empathetic-dialogue.md", "topic-tech-safety-crisis-detection.md", "topic-tech-privacy-voice-data.md", "topic-tech-mvp-stack.md", "claim-tech-1-ser-model.md", "claim-tech-2-memory-architecture.md", "claim-tech-3-stt-tts-vendors.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-tech-5-latency-target.md", "claim-tech-6-sensitive-data-consent.md", "claim-tech-7-dialogue-mode-strategy.md", "claim-tech-8-crisis-referral-flow.md", "src-mem0-2025-locomo-paper.md", "src-ma-2024-emotion2vec.md", "src-typecast-2026-api-pricing.md", "src-rtzr-2026-pricing.md", "src-openai-2026-realtime-pricing.md", "src-ahelm-2025-audio-benchmark.md", "src-ayers-2023-jama-chatbot-empathy.md", "src-psycrisisbench-2025.md", "src-arxiv-2026-memory-benchmarks.md", "src-aihub-2024-terms.md", "src-naver-2026-clova-speech-voice.md", "src-vera-mh-2026-eval-tools.md", "src-pipc-2025-genai-guide.md", "src-mirror-eval-2026-companion-harm.md", "src-emotion2vec-2024-github.md", "src-funaudiollm-2024-sensevoice.md", "src-sereval-2024-whisper-crosslingual.md", "src-qwen-2025-omni-models.md", "src-hume-2026-evi-docs.md", "src-etri-2018-kesdy18.md", "src-etri-2020-kemdy.md", "src-ahfe-2024-kemdy19-ccc.md", "src-sogang-2024-aihub-hubert.md", "src-eyben-2016-egemaps.md", "src-wu-2024-longmemeval.md", "src-mem0-2026-research-page.md", "src-zep-2025-graphiti.md", "src-letta-2025-memory-blocks.md", "src-xu-2025-a-mem.md", "src-salesforce-2026-voice-agent-tutorial.md", "src-kyutai-2024-moshi.md", "src-stepfun-2025-step-audio-r1.md", "src-rtzr-2026-korean-stt-benchmark.md", "src-buzzasr-2025-whisper-korean.md", "src-elevenlabs-2026-api-pricing.md", "src-livekit-2026-pipeline-docs.md", "src-lee-2024-llm-empathy.md", "src-conll-2026-empathy-raters.md", "src-wenger-2026-ai-empathy-paradox.md", "src-kang-2024-esconv-llm-limits.md", "src-esc-eval-2024-frameworks.md", "src-basar-2024-mi-reflection.md", "src-jmir-2026-systematic-review-29.md", "src-mit-openai-2025-affective-use-rct.md", "src-mohw-2026-suicide-emergency-plan.md", "src-law-2026-pipa-sensitive-info.md", "src-pipc-2021-biometric-guideline.md", "topic-app-architecture.md", "overview-app-design.md"]
category: architecture
confidence: medium
schemaVersion: 1
---

# overview-technology

# overview-technology

한벗 기술 트랙 종합. 원천: 리서치 노트 `research_notes/한벗 창업 딥리서치/technology.md`(Claude Sonnet 리서처, 2026-10-25) + 독립 검증표 `.omc/orchestra/reviews/20261025_155449_verify_technology.md`(GPT 검증자, A/B/C). 프로젝트: [[overview-hanbeot-project]]. 팀 구조·규칙: [[overview-orchestra-team]].

## 요약
한벗 MVP(2026-12)는 **streaming cascade**(ReturnZero STT → Claude → Typecast/ElevenLabs TTS)에 **emotion2vec+ base SER**을 병렬로 붙이고, **Letta식 메모리 블록**(`user_stated_facts` / `ai_inferred_affect` / `persona`)을 pgvector/Mem0 위에 구현하며, 대화 모드는 **ESConv 전략 고정**, 위기 대응은 **2단 분류 + 109 안내**, 개인정보는 **민감정보 분리 동의 + 가명 키 + 3계층 분리 저장**으로 설계한다. TTFA 목표는 P50 ≤ 1.0초(실측 아님). Hume EVI는 2026-11-13 API 종료로 제외한다. 한국어 SER 성능, 데이터셋 상업 이용, 벤더 한국어 TTS 품질, 109 공식 연계는 모두 미확인이며 팀 자체 벤치마크·확인이 선행돼야 한다.

## 영역별 주제 페이지 (pattern)
- [[topic-tech-speech-emotion-recognition]] — SER 백본, 한국어 데이터셋, eGeMAPS
- [[topic-tech-long-term-memory]] — LoCoMo/LongMemEval, Mem0·Letta·Zep, 블록 분리
- [[topic-tech-voice-pipeline-latency-cost]] — cascade vs S2S 지연, 한국어 STT/TTS 가격·정확도
- [[topic-tech-empathetic-dialogue]] — LLM 공감 증거, ESConv·MI, 평가 프로토콜
- [[topic-tech-safety-crisis-detection]] — companion 안전 연구, 위기 탐지 벤치마크, 109 정책
- [[topic-tech-privacy-voice-data]] — 보호법 제23조·시행령 제18조, PIPC 안내서, on-device
- [[topic-tech-mvp-stack]] — 권장 스택 표 + 파이프라인 다이어그램 (architecture)

## MVP 결정 페이지 (decision)
1. [[claim-tech-1-ser-model]] — emotion2vec+ base 1순위, SenseVoice-S 2순위, 자체 벤치마크(목표 0.8139 근접)
2. [[claim-tech-2-memory-architecture]] — 3블록 분리, TTL 비대칭 망각, STT 병렬 prefetch
3. [[claim-tech-3-stt-tts-vendors]] — ReturnZero STT, Typecast/ElevenLabs 블라인드 비교 후 TTS 선택
4. [[claim-tech-4-voice-pipeline-architecture]] — cascade 채택, S2S 후순위, Pipecat/LiveKit
5. [[claim-tech-5-latency-target]] — TTFA P50 ≤ 1.0s / P95 ≤ 1.5s, turn detection 별도 측정
6. [[claim-tech-6-sensitive-data-consent]] — 화자 식별 배제, 민감정보 분리 동의, 원본 즉시 폐기
7. [[claim-tech-7-dialogue-mode-strategy]] — 3모드 = ESConv 전략 고정, Claude, LLM judge + 인간 평가
8. [[claim-tech-8-crisis-referral-flow]] — 2단 위험 분류, 109 안내, 의존 완화 기능

## 검증 요약
검증표 230개 주장 행(부록·추론 포함) 기준:

| 등급 | 건수 | 비율 | 의미 |
|---|---|---|---|
| A | 124 | 54% | 원문과 일치(독립 재현·서비스 성능 보증은 아님) |
| B | 35 | 15% | 2차 출처 일치 또는 반올림·조건 주의 |
| C | 71 | 31% | 확인불가(접속 실패) 또는 불일치(정정 적용) |

Wiki 적재: 소스 페이지 47개(A 31 · B 5 · C 11 — 페이지 confidence 기준), 주제 7개, 결정 8개, 종합 1개. C 등급 소스는 페이지 상단에 **미확인** 표기, 주제 페이지에서는 "미확인(C)" 절로 본문과 분리.

### 우선 수정 항목 (검증자 지정, 모두 wiki에 정정 반영)
1. **Mem0 논문 "독립 연구" → 벤더 자체 연구** [[src-mem0-2025-locomo-paper]]
2. **emotion2vec(71.79%)과 emotion2vec+ 혼용** — 부록 표의 emotion2vec+ 근거 수치 오류 [[src-ma-2024-emotion2vec]]
3. **Emo-Emilia "fine-tune" → 평가용 테스트 세트** [[src-ma-2024-emotion2vec]]
4. **Typecast Free 30k → 15k credits/월**, 무료 생성물 상업 제한 [[src-typecast-2026-api-pricing]]
5. **RTZR "무료 초과 시 자동 중단" → 구간별 과금 적용** [[src-rtzr-2026-pricing]]
6. **Realtime GA cached $2.50/$20 → $0.40/M** (preview·GA 시점 혼합) [[src-openai-2026-realtime-pricing]]
7. **서로 다른 감정 인식 지표(AHELM PEM vs WA)로 omni-LLM 열위 단정 금지** [[src-ahelm-2025-audio-benchmark]]

### 기타 정정
- Ayers 길이 "중앙값" → 평균(IQR) [[src-ayers-2023-jama-chatbot-empathy]]
- DeepSuiMind 1,200+ → 1,308 [[src-psycrisisbench-2025]]
- 2606.06036 백본 "모호" → 본문 명시 [[src-arxiv-2026-memory-benchmarks]]
- AI Hub 약관 링크가 다른 데이터셋 [[src-aihub-2024-terms]]
- Gemini Live $0.30 → 현재 $0.50/M [[src-naver-2026-clova-speech-voice]]
- "한국어 자살 위험 데이터 없음" → 유해 콘텐츠 벤치마크 존재 [[src-vera-mh-2026-eval-tools]]
- 다음 링크 매체 연합뉴스 → 지디넷코리아 [[src-pipc-2025-genai-guide]]

### 미확인 핵심 리스크(사업계획서에 "확인 중"으로 표기)
- emotion2vec+·SenseVoice 가중치 라이선스, openSMILE 상업 라이선스
- ETRI KEMDy 접속·상업 이용, AI Hub 약관 원문
- MIRROR-Eval 수치(15.1 vs 5.0) 원문 [[src-mirror-eval-2026-companion-harm]]
- CLOVA Speech/Voice 단가, ElevenLabs 한국어 지원
- 109 공식 API·민간 챗봇 연계 가이드라인
- PIPC 안내서·생체정보 가이드라인 원문, 국외이전·아동 동의 요건
- 한벗 구성 실측 TTFA

## 소스 페이지 색인 (47)
**SER(14)**: [[src-ma-2024-emotion2vec]] [[src-emotion2vec-2024-github]] [[src-funaudiollm-2024-sensevoice]] [[src-sereval-2024-whisper-crosslingual]] [[src-ahelm-2025-audio-benchmark]] [[src-qwen-2025-omni-models]] [[src-hume-2026-evi-docs]] [[src-etri-2018-kesdy18]] [[src-etri-2020-kemdy]] [[src-ahfe-2024-kemdy19-ccc]] [[src-sogang-2024-aihub-hubert]] [[src-aihub-2024-terms]] [[src-eyben-2016-egemaps]]
**메모리(7)**: [[src-wu-2024-longmemeval]] [[src-mem0-2025-locomo-paper]] [[src-mem0-2026-research-page]] [[src-zep-2025-graphiti]] [[src-letta-2025-memory-blocks]] [[src-xu-2025-a-mem]] [[src-arxiv-2026-memory-benchmarks]]
**음성 파이프라인(11)**: [[src-salesforce-2026-voice-agent-tutorial]] [[src-kyutai-2024-moshi]] [[src-stepfun-2025-step-audio-r1]] [[src-openai-2026-realtime-pricing]] [[src-rtzr-2026-korean-stt-benchmark]] [[src-rtzr-2026-pricing]] [[src-buzzasr-2025-whisper-korean]] [[src-elevenlabs-2026-api-pricing]] [[src-typecast-2026-api-pricing]] [[src-livekit-2026-pipeline-docs]] [[src-naver-2026-clova-speech-voice]]
**공감(7)**: [[src-ayers-2023-jama-chatbot-empathy]] [[src-lee-2024-llm-empathy]] [[src-conll-2026-empathy-raters]] [[src-wenger-2026-ai-empathy-paradox]] [[src-kang-2024-esconv-llm-limits]] [[src-esc-eval-2024-frameworks]] [[src-basar-2024-mi-reflection]]
**안전(6)**: [[src-mirror-eval-2026-companion-harm]] [[src-jmir-2026-systematic-review-29]] [[src-mit-openai-2025-affective-use-rct]] [[src-psycrisisbench-2025]] [[src-vera-mh-2026-eval-tools]] [[src-mohw-2026-suicide-emergency-plan]]
**개인정보(3)**: [[src-law-2026-pipa-sensitive-info]] [[src-pipc-2025-genai-guide]] [[src-pipc-2021-biometric-guideline]]

확인일: 2026-10-25

---

## Update (2026-10-25T07:35:39.004Z)

## 정오표 (2026-10-25 적재 직후)
- "검증 요약"의 소스 페이지 confidence 분포 정정: 소스 47개 중 **high 38 · medium 4 · low 5** (medium: [[src-eyben-2016-egemaps]], [[src-mem0-2026-research-page]], [[src-salesforce-2026-voice-agent-tutorial]], [[src-wenger-2026-ai-empathy-paradox]]; low: [[src-etri-2020-kemdy]], [[src-aihub-2024-terms]], [[src-naver-2026-clova-speech-voice]], [[src-mirror-eval-2026-companion-harm]], [[src-pipc-2021-biometric-guideline]]). 위 본문의 "A 31 · B 5 · C 11"은 오기.
- "소스 페이지 색인"의 SER 항목 수는 14가 아니라 **13** (합계 47은 정확).
- 페이지 confidence는 해당 소스의 대표 등급이며, 한 소스 안에 A·C 주장이 혼재할 수 있다(각 src 페이지 "검증 결과" 절 참조).

---

## Update (2026-10-25T14:52:49.058Z)

## 앱 설계서 (2026-10-25)
- 기술 결정을 MVP 구현 수준으로 구체화했다: 구성도·턴 시퀀스([[topic-app-architecture]]), 기능별 구현법(impl 6쪽), 스택·포크, 비용·지연.
- 위기 분류는 KeywordGate + 응답 첫 줄 위험 태그로 확정, TTFA 예산 합계는 1.4–1.5s라 W2 측정 후 목표 조정 여부 결정.
- 기술 결정은 확정이 아니라 설계 가설이며 재검토 조건표가 있다. 요약: [[overview-app-design]]

