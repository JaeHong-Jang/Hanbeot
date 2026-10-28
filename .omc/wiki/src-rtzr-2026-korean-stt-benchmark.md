---
title: "src-rtzr-2026-korean-stt-benchmark"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "stt", "korean", "returnzero", "cer", "vendor-self-report"]
created: 2026-10-25T07:18:41.567Z
updated: 2026-10-25T07:18:41.567Z
sources: ["https://github.com/rtzr/Awesome-Korean-Speech-Recognition"]
links: ["claim-tech-3-stt-tts-vendors.md", "topic-tech-voice-pipeline-latency-cost.md", "src-rtzr-2026-pricing.md", "src-buzzasr-2025-whisper-korean.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-rtzr-2026-korean-stt-benchmark

# src-rtzr-2026-korean-stt-benchmark

## 서지정보
ReturnZero(rtzr) GitHub "Awesome-Korean-Speech-Recognition" 한국어 STT 벤치마크 표. **ReturnZero 자체 실시 → 벤더 편향 주의.** 평가 일자·각 서비스 모델 버전 미기재.

## URL
- https://github.com/rtzr/Awesome-Korean-Speech-Recognition

## 라이선스/상업 이용
벤치마크 자료(참고용). 해당 없음.

## 핵심 수치 (CER %, 낮을수록 좋음; 도메인별 각 3,000문장 AI Hub 샘플)
- **평균**: ReturnZero VITO **5.91**, RTZR Whisper(fine-tuned) 6.59, Naver ClovaSpeech 7.52, ETRI 10.19, Azure batch 10.88, AWS Transcribe 11.11, OpenAI Whisper 11.39, Google v2 11.50, Gemini 2.0 flash 16.58, Deepgram nova-2 21.02
- 콜센터: VITO 3.51, Clova 4.91, Whisper 7.51
- 저품질 전화: VITO 4.40, RTZR Whisper 4.26, Clova 6.49, Whisper 17.27
- KsponSpeech eval clean: VITO 6.64, Clova 8.05, Whisper 12.06

## 검증 결과
- 모든 수치 등급 **A** (원 벤치 표와 일치). 단, 모델 버전·평가 시점 미고정으로 **현재 순위로 일반화 불가**. 평균의 가중 방식·표본 구성을 함께 기록할 것

## 한벗 적용 포인트
- 한국어 STT 1순위 후보 ReturnZero 선택의 근거(벤더 자체 벤치임을 명시). 대학생 대화는 콜센터보다 "일상 대화" 도메인에 가까우므로 팀 자체 샘플(30명 테스트 녹음)로 CER 재측정 권장 → [[claim-tech-3-stt-tts-vendors]]
- Deepgram nova-2가 한국어 CER 21%로 최하위 → Salesforce 튜토리얼 구성(Deepgram)을 그대로 쓰면 안 됨 → [[topic-tech-voice-pipeline-latency-cost]]
- 관련: [[src-rtzr-2026-pricing]], [[src-buzzasr-2025-whisper-korean]]

확인일: 2026-10-25

