---
title: "src-hume-2026-evi-docs"
tags: ["tech", "speech-emotion-recognition", "voice-pipeline-latency-cost", "grade-A", "hume", "evi", "sunset", "pricing", "app-design"]
created: 2026-10-25T07:13:22.327Z
updated: 2026-10-25T14:52:32.287Z
sources: ["https://dev.hume.ai/voice/docs/speech-to-speech-evi/overview", "https://www.eesel.ai/blog/hume-ai-pricing", "https://costbench.com/software/voice-apis/hume-ai/"]
links: ["claim-tech-1-ser-model.md", "topic-tech-speech-emotion-recognition.md", "src-eyben-2016-egemaps.md", "src-hume-2026-evi-overview.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-hume-2026-evi-docs

# src-hume-2026-evi-docs

## 서지정보
Hume AI 공식 개발자 문서 "EVI overview" (HTML 버전) + 서드파티 가격 집계(eesel.ai, CostBench).

## URL
- https://dev.hume.ai/voice/docs/speech-to-speech-evi/overview (Markdown URL은 도구 처리 실패, HTML에서 확인)
- https://www.eesel.ai/blog/hume-ai-pricing
- https://costbench.com/software/voice-apis/hume-ai/

## 라이선스/상업 이용
상용 API. **"Hume is sunsetting the TTS and EVI APIs, with access ending November 13, 2026"** (미국 동부시간 00:01) 공식 명시 → MVP 의존 불가.

## 핵심 수치
- EVI 3 영어 전용; EVI 4-mini는 영어·일본어·**한국어**·스페인어·프랑스어·포르투갈어·이탈리아어·독일어·러시아어·힌디어·아랍어 11개 언어
- EVI 4-mini는 supplemental LLM(Anthropic, OpenAI, Google, Fireworks 등) 필수; user_message에 prosody(tune, rhythm, timbre) 측정 포함
- 가격(2차 출처, B): overage $0.04–0.07/min, 플랜 $0~500/월, Pro $70/1,200분, Business $500/12,500분
- Expression Measurement "600+ dimensions, 50+ languages": 50+ 언어는 현재 홈페이지에서 확인, 600+ 차원 문구는 **C(미확인)**

## 검증 결과
- 언어 지원, supplemental LLM, prosody, 2026-11-13 종료: 등급 **A**
- 가격: 등급 **B** (2차 출처끼리 일치, 공식 가격표 접근 불가)

## 한벗 적용 포인트
- **MVP 의존 대상에서 제외**(2026-11-13 종료). prosody measure(tune/rhythm/timbre) 설계 참고용으로만 사용 → [[claim-tech-1-ser-model]]
- 한벗의 paralinguistic 지표 설계 벤치마크 → [[topic-tech-speech-emotion-recognition]], [[src-eyben-2016-egemaps]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:32.287Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S25] (등급 A, 공식설명). 사용: EVI API 2026-11-13 종료. 조건: 공식 공지.
- 검증: 검증표에 종료일 행 없음 -> 설계서 등급 유지. 같은 EVI overview(S4)는 별도 페이지 [[src-hume-2026-evi-overview]].
- 사용처: [[overview-app-design]] 의 1절, 6.1절
