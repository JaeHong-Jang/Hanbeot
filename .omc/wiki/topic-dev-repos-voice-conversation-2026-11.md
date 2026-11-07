---
title: "topic-dev-repos-voice-conversation-2026-11"
tags: ["pipecat", "livekit", "backchannel", "interruption", "tts", "turn-taking", "github", "verified-2026-11-08"]
created: 2026-11-07T20:05:49.637Z
updated: 2026-11-07T20:05:49.637Z
sources: ["research_notes/개발자 GitHub 심층 조사/developer_repos_deep_dive.md", ".omc/orchestra/reviews/20261108_044841_verify_developer_repos_deep_dive.md"]
links: ["topic-tts-opensource-candidates-2026-11.md", "topic-bench-opensource-voice-agents.md", "claim-app-12-interruption-backchannel-filler-rules.md", "claim-app-1-pipecat-orchestrator.md", "topic-dev-repos-ser-recipes-2026-11.md", "src-pipecat-2026-expressive-alpha.md", "src-livekit-2025-turn-detector.md", "src-daily-2026-pipecat-latency-posts.md", "src-qwen-2026-qwen3-tts.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-dev-repos-voice-conversation-2026-11

상위: [[topic-tts-opensource-candidates-2026-11]] · [[topic-bench-opensource-voice-agents]] · [[claim-app-12-interruption-backchannel-filler-rules]] · [[claim-app-1-pipecat-orchestrator]]. 짝: [[topic-dev-repos-ser-recipes-2026-11]].

출처: 개발자 GitHub 심층 조사 노트(2026-11-08, §B·§C) + 검증표(A173/B8/C44, 검증표 우선). 수치는 대부분 공급사 보고이며 독립 검증이 아니다. A는 원출처 일치를 뜻한다.

## 1. Pipecat expressive 모듈 (alpha) — 감정 주입 표준 흐름
`src/pipecat/expressive/` (perception, expression, policy, instructions, formatter, spoken) + `adapters/tts/services/`. 상세 [[src-pipecat-2026-expressive-alpha]].
- 흐름: **STT 톤 신호**(`PerceptionSignal(name="tone", labels=[("frustrated",0.86),...])`, `speech_rate` 값형) → LLM이 지시문으로 읽는 법을 받음 → LLM이 **전달 방식/소리/강조 태그**를 응답에 삽입(`<<warm>>`, `<<이름: 단어>>`, `^^강조^^`, `[ [laugh] ]`, `[ [pause 300] ]`) → 포매터가 표시 텍스트(태그 제거)와 제공사 마크업 생성 → **TTS별 어댑터**가 지원 안 되는 표현을 요청에서 제외(컨텍스트에는 남김).
- 어댑터: azure, cartesia, elevenlabs, fish, gemini, inworld, minimax, mistral, soniox. **Typecast·RTZR 어댑터는 main에 없음** → `BaseExpressionAdapter` 직접 구현. alpha라 문법 변경 가능.
- 정책: `MATCH_STYLE`은 사용자 기분에 맞추되 적대적이면 맞추지 않고 침착; `BREATHE`는 답변당 최대 1회. 과용 억제가 핵심.
- 한벗: emotion2vec+ scores를 `PerceptionSignal` 형식으로 변환하면 프레임워크 규약과 맞음(제안, 미검증).

## 2. Pipecat tts_service 끼어들기·청킹 (코드 열람, A) — 조건부 동작
- `TextAggregationMode.SENTENCE`(기본, 문장당 약 200~300ms 추가는 코드 주석) / `TOKEN`(지연 감소, 제공사에 따라 품질 영향).
- `InterruptionFrame` → 집계기 초기화, `_interrupt_audio_contexts()`로 **interruptible 컨텍스트만 폐기**(uninterruptible 안내 방송은 유지), `TTSContext.interruptible` 구분.
- **검증표 정정:** 단어 타임스탬프 트래커 재설정은 "무조건"이 아니라 재생 중 컨텍스트를 인터럽트하는 조건에서만이며, 보존 발화가 있으면 경로가 다름. "실제 발화된 단어만 항상 LLM 컨텍스트에 기록"도 **확인불가(C)**: 타임스탬프 경로는 있으나 타임스탬프 없는 제공사용 대체 경로가 존재. 따라서 한벗 감사 로그의 "실제 발화 텍스트" 기준은 제공사별로 직접 시험해야 한다.
- 기준 구현으로는 유효하되 "그대로 따라 구현"이 아니라 시험 항목 목록으로 사용.

## 3. 맞장구·끼어들기 필터
| 대상 | 요점 | 한국어 | 등급 |
|---|---|---|---|
| maisterr/pipecat-backchannel (BSD-2, 25★, push 2026-08-10) | 문장/절 완결 휴지에서 짧은 클립. `fire_probability 0.8`, `cooldown_s 2.5`, `min_speech_before_eligible_s 0.7`, `volume 0.6`. 클립은 자체 TTS로 첫 실행에 녹음해 `.clip_cache/` 캐시, 그룹 4종(continuer/agreement/hesitation/surprise), 구두점으로 억양 변주. 맞장구는 턴을 가져가지 않고 LLM 컨텍스트에 흔적 없음. VAD+턴 감지기 병렬 실행 → 추론 약 2배. 단어 찾기 휴지와 완결된 질문엔 침묵 | 영어 클립·정규식. "클립·규칙만 바꾸면 한국어판 완성"은 **미검증(C)**: 턴 감지·STT·타이밍·억양 한국어 검증 필요 | A |
| LiveKit 문서 | 전사 없는 VAD 감지는 false interruption으로 보고 이어 말함(`resume_false_interruption`, `false_interruption_timeout`). adaptive interruption은 오디오만으로 진짜 끼어들기와 맞장구 구분, **LiveKit Cloud 인증 필요**, `backchannel_boundary` 기본 (1.0, 1.0)초, 영어 우위 가능 | 언어 무관 명시, 영어에서 더 나을 수 있음 | A |
| MaAI VAP (MaAI-Kyoto/MaAI) | Voice Activity Projection 기반 턴·맞장구·끄덕임 예측, CPU 가능 | **영·중·일만** → 한국어는 KEMDy20 자유 대화로 별도 학습 필요 | A |
| Open-LLM-VTuber (MIT) | 헤드폰 없는 음성 끼어들기, AI 선발화, 감정 → Live2D 표정 | - | A |
- 한국어 맞장구/필러 구현 저장소는 조사 범위에서 **미발견**(포괄적 부재 입증은 아님, C). "Typecast로 클립 녹음이 가장 저렴"은 요금·개발시간 비교 없는 추정(C).

## 4. 턴 감지
- LiveKit turn-detector: Qwen2.5-0.5B-Instruct 기반 7B 증류, 최근 최대 6턴·128토큰, `<|im_end|>` 확률 = 종료 확률, INT8 ONNX CPU. **한국어 TPR 99.3% / TNR 94.5%는 공급사 보고**, LiveKit Model License. [[src-livekit-2025-turn-detector]]
- Smart Turn v3.2(Daily): 오디오 기반, CPU 8MB / GPU 32MB, 짧은 발화 오분류 -40%, 가중치·데이터·학습 코드 공개, BSD-2. 한국어 정확도는 글에 없음. [[src-daily-2026-pipecat-latency-posts]]
- "한벗이 이미 Smart Turn v3를 채택"은 내부 현황 주장이라 외부 출처로 확인 불가(C). 한국어 TNR 자체 측정 필요.

## 5. 모델별 코드 수준 메모 (맥락→운율, 감정, 스트리밍, 끼어들기)
| 모델 | 맥락 → 운율 | 감정 주입 | 스트리밍 | 라이선스 | 비고 |
|---|---|---|---|---|---|
| Qwen3-TTS | 텍스트 의미로 어조 적응 | 자연어 `instruct`(1.7B CustomVoice·VoiceDesign) | 첫 패킷 97ms(공급사) | Apache-2.0 | [[src-qwen-2026-qwen3-tts]] |
| VoxCPM2 | 운율 자동 추론, 참조 오디오+전사 이어 말하기 | 괄호 지시 `(slightly faster, cheerful tone)` | RTF 0.3(4090) / 0.13(Nano-vLLM), 첫 청크 미보고 | Apache-2.0 | 한국어 CER 0.95%는 자사 벤치(ASR=Gemini 3.1 Flash Lite) |
| Fun-CosyVoice3-0.5B-2512 | - | `instruct`(언어·감정·속도·볼륨) | 양방향 150ms(README) | Apache-2.0 | |
| Fish S2-Pro / Drama 3 | Drama 3 다회 수정 | 인라인 `[whisper][angry][laughing][pause]` | RTF 0.195(H200), 첫 오디오 약 100ms | HF 메타 Research. **실제 LICENSE는 Community License(연매출 50만 달러 미만 상업 이용 조항)** → "상용 일괄 제외"는 부적절(검증표 C). 재검토 필요 | 청취 상한용 |
| Chatterbox / Supertonic | 코드 수준 미열람 | - | - | - | 선행 노트 표 유지 |
| Sesame CSM-1B | 이전 발화 오디오+텍스트(Segment) | - | - | Apache-2.0 | 영어 중심 |
| Kyutai DSM-TTS / Unmute | 텍스트 선행 스트림 l=2 | - | 단일 L40S TTS 약 750ms, 분산 약 450ms | - | 영·프 전용 |
| Raon-Speech/SpeechChat 9B | 116K시간 대화 | - | RTX 6000 Pro TTFT 617ms, L40S 887ms | **CC-BY-NC-4.0** | KVoiceBench 등 한국어 벤치 공개 |
- 한국어 WER/CER은 낮은 값이 많지만(1~2 대) 같은 표에 CosyVoice2 CER 19.7, Fish 0.29, VoxCPM 0.95가 공존하므로 **"포화"로 단정하지 않는다**(검증표 C). 청취 평가를 결정 지표로 두는 판단은 유지(제안).
- Typecast `previous_text`가 맥락 제어 경로라는 서술은 API 문서 URL·버전 없음 → 확인불가(C).

## 6. 개발자 글 재사용 숫자
| 글 | 숫자 2~3개 | 등급 |
|---|---|---|
| Sesame (2025-02-27) | 직전 90초 맥락 제공 시 원본 선호, 맥락 없으면 뚜렷한 선호 없음(50:50). 평가 모델은 **CSM-Medium**이며 공개 CSM-1B로 옮기지 말 것. 평가자 80명·평균 15개, 학습 약 100만 시간 영어 | B |
| Kyutai DSM (arXiv 2509.08753) | 텍스트 선행 l=2, ASR 지연 2.5초 기본·H100 400 동시, Unmute TTS 750→450ms | A |
| Daily Smart Turn v3.2 (2026-01-07) | 짧은 발화 오분류 -40%, 8MB/32MB, 가중치·데이터·코드 공개 | A |
| LiveKit EOU (2024-12-20) | 의도치 않은 끼어들기 85% 감소, 오판 3%, 추론 약 50ms, 기본 `min_endpointing_delay` 500ms, 영어만(당시) | A |
| Hume EVI 3 (2025-05-29) | 체감 지연: EVI 3 0.9~1.4초, Sesame 약 1초, Gemini Live 약 1.5초, GPT-4o 약 2.6초. 감정 이해는 9감정 중 8개에서 GPT-4o 우위(수치 미공개). 평가 설계: 같은 문장을 9감정으로 연기 | A (지연 비교는 공급사 자체 측정) |
- 미확인: Cartesia Sonic 40~90ms는 공식 글에 범위만 있고 모델별 값·측정 조건 미확정, 종단 190ms는 제3자 기재·URL 없음(C). 한국어 개발자 블로그 부재는 검색 로그 없는 서술(C).

## 7. 한벗 적용
- 맞장구는 pipecat-backchannel 구조(휴지 게이트+확률+쿨다운+캐시)를 한국어 클립으로 시험(포크 가능 여부는 한국어 클립 소규모 시험으로 확인).
- 끼어들기 필터: LiveKit adaptive는 Cloud 필요 → 자체 호스팅은 Pipecat 정책 + false-interruption 재개를 직접 구현해 한국어 "응/네" 오끊김률 측정.
- 블라인드 테스트에 "직전 턴을 들려주고 더 적절한 이어말하기 고르기" 문항 추가(Sesame 설계 차용).

