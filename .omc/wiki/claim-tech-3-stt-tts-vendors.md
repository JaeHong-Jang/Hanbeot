---
title: "claim-tech-3-stt-tts-vendors"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "grade-C", "decision", "stt", "tts", "returnzero", "typecast", "elevenlabs", "korean", "meeting-followup", "opensource", "license", "scopus-2026-11"]
created: 2026-10-25T07:32:59.607Z
updated: 2026-11-07T19:52:19.818Z
sources: []
links: ["topic-tech-voice-pipeline-latency-cost.md", "overview-technology.md", "src-rtzr-2026-korean-stt-benchmark.md", "src-rtzr-2026-pricing.md", "src-openai-2026-realtime-pricing.md", "src-buzzasr-2025-whisper-korean.md", "src-elevenlabs-2026-api-pricing.md", "src-typecast-2026-api-pricing.md", "src-naver-2026-clova-speech-voice.md", "claim-tech-6-sensitive-data-consent.md", "topic-tts-humanlike-techniques.md", "src-lee-2026-elderly-whisper-asr.md", "topic-ser-model-comparison-whisper-spectrogram.md", "topic-tts-opensource-candidates-2026-11.md", "claim-app-13-tts-blind-test-protocol-w4.md", "topic-tts-humanlike-evidence-2026-11.md"]
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

---

## Update (2026-11-07T11:40:26.540Z)

## 2026-11-07 회의 후속 조사 반영 (미확정)
- 기존 결정 유지, 비교 후보만 추가 (11/9 회의 결정 전). 상세: [[topic-tts-humanlike-techniques]].
- 엔진 1순위 비교: Typecast ssfm-v31 vs ElevenLabs v4 Turbo(약 100ms/165ms, 1천 자당 약 $0.04). Gemini 3.8 Flash-Lite TTS와 Azure MAI-Voice-2는 후보. OpenAI TTS는 2027-01-06 종료 예정으로 제외.
- 오픈소스 1순위 Qwen3-TTS(첫 소리 약 97ms, Apache-2.0)는 비용·자체 서버 단계에서 검토.
- 응답 첫 소리 1~1.5초 이내 목표 언급.
- STT: 한국어 노인 Whisper CER Large-v3 5.5% (기준선 조건 불명확) [[src-lee-2026-elderly-whisper-asr]]. RTZR 대비 비교는 [[topic-ser-model-comparison-whisper-spectrogram]].

---

## Update (2026-11-07T18:12:55.737Z)

## 2026-11-08 OSS 음성 조사 반영
- W4 블라인드 테스트 후보(Typecast ssfm-v31 옆): Qwen3-TTS 1.7B CustomVoice, VoxCPM2, Fun-CosyVoice3 0.5B. 상세 [[topic-tts-opensource-candidates-2026-11]].
- 라이선스 주의: Fish Audio Community License는 연 매출 USD 500,000 미만(관계사 합산, 직전 12개월)만 무료 상업, 호스팅은 별도 계약(자체 제품 조수 응답 음성 등 예외 있어 법무 확인). S2-Pro 가중치는 Research License.
- 상업 불가/제한: OmniVoice 가중치 CC-BY-NC, F5-TTS 가중치 CC-BY-NC, Higgs Audio v3 비상업(v2 가중치도 자체 라이선스), Raon-Speech 모델카드 CC-BY-NC-4.0, XTTS v2 CPML, IndexTTS는 bilibili 약관.
- Chatterbox(MIT)는 2026-08 retired, Supertonic은 archived.

---

## Update (2026-11-07T19:52:19.818Z)

## 2026-11-08 문헌 심층 반영
- Typecast 공식 API 페이지에 TTFB 170~210ms가 있음("공개 수치 없음"은 정정). 한국어 CER·previous_text 효과의 공개 정량 근거는 확보 못함.
- OSS 후보 한국어 수치는 평가셋이 달라 순위 비교 불가: MaskGCT Ko WER 9.4, CosyVoice2 CER 7.98/9.06, CosyVoice3 DiffRO 후 약 4.0, Qwen3-TTS WER 1.74~2.70(Base, MiniMax 셋; Sohee 아님).
- 이전 여부는 W4 블라인드 테스트로 결정: [[claim-app-13-tts-blind-test-protocol-w4]]. 근거: [[topic-tts-humanlike-evidence-2026-11]].
- 한국어 대화형 청취 평가는 "거의 없음, KoCC-TTS 1건(27명·596표)".

