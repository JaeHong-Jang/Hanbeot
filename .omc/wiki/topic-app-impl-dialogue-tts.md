---
title: "topic-app-impl-dialogue-tts"
tags: ["app-design", "implementation", "dialogue", "tts", "typecast", "elevenlabs", "summary", "topic", "paper-evidence"]
created: 2026-10-25T14:46:30.845Z
updated: 2026-10-26T05:47:14.181Z
sources: ["reports/한벗 앱 설계서.md#5-6-7-12"]
links: ["overview-app-design.md", "claim-tech-7-dialogue-mode-strategy.md", "claim-tech-3-stt-tts-vendors.md", "topic-app-impl-safety-crisis.md", "src-pipecat-2026-docs-tts-aggregation.md", "topic-app-cost-latency-budget.md", "src-pipecat-2026-typecast-service.md", "src-typecast-2026-streaming-tts-api.md", "src-elevenlabs-2026-websocket-tts.md", "src-elevenlabs-2026-models.md", "src-typecast-2026-developers-latency.md", "src-typecast-2026-api-pricing.md", "topic-app-impl-memory.md", "src-kang-2024-esconv-llm-limits.md", "src-acl-2021-esconv.md", "src-du-2024-cosyvoice2.md", "topic-app-paper-evidence.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-impl-dialogue-tts

상위: [[overview-app-design]] · 설계서 5절 ⑥⑦⑫. 근거: [[claim-tech-7-dialogue-mode-strategy]], [[claim-tech-3-stt-tts-vendors]]

## ⑥ 대화 생성 (Claude 스트리밍, 3모드, 위험 태그, 문장 단위 TTS)
- 선택: Claude API 스트리밍 + 모드 고정 시스템 프롬프트. 응답 첫 줄에 위험 태그 출력([[topic-app-impl-safety-crisis]]). Pipecat `TTSService`의 `text_aggregation_mode=SENTENCE`(기본) [[src-pipecat-2026-docs-tts-aggregation]]. SENTENCE는 문장 경계까지 버퍼링, TOKEN은 즉시 전송. `aggregate_sentences`는 0.0.104부터 deprecated.
- 단계: Pipecat Anthropic LLM 서비스 사용법을 설치 버전 문서로 확인(노트에 공식 예제 없음) → 프롬프트 = [공통 규칙] + [모드] + [메모리 블록] + [음성 단서] + [위험 태그 지시], 고정 부분은 캐싱 대상 → 모드 전환은 [모드]만 교체 → `RiskTagParser`를 LLM과 TTS 사이에 → 첫 문장 짧게 지시 → 100턴으로 모드 위반율·specificity 판정.

| 모드 | 허용 | 금지 | 길이 |
|---|---|---|---|
| 들어줘 | 반영(단순/복합), 인정, 열린 질문 1개 이하 | 조언, 해결책, 평가 | 1–2문장 |
| 조언 | 반영 1회 후 제안·정보 | 단정적 지시, 의료 판단 | 2–4문장 |
| 정리 | 재진술, 요약, 사용자가 말한 다음 행동 되짚기 | 새 조언 | 3–5문장 |
| 안전(강제) | 고정 위기 스크립트, 109 안내 | 일반 전략 전부 | 고정 |
- 공통 규칙(설계): 첫 문장 15자 안팎(임시), 메모리·음성 단서의 구체 맥락 1개 이상 반영(목표 60% 이상), AI임을 숨기지 않음, 치료·상담·진단 효과 주장 금지(P0-12b).
- 함정: 문장 집계는 문장당 약 200–300ms 추가 가능(보편 실측 아님), TOKEN은 지연이 낮지만 품질 저하 가능. Claude 단가는 미확인이라 W1 확인 ([[topic-app-cost-latency-budget]]).

## ⑦ TTS (Typecast 스트리밍, ElevenLabs 대안)
- 선택: Typecast 기본, W2 블라인드 비교 후 확정. 출처 [[src-pipecat-2026-typecast-service]](Neosapience 유지, Pipecat은 직접 테스트 안 함 명시), [[src-typecast-2026-streaming-tts-api]], [[src-elevenlabs-2026-websocket-tts]].
- 사실(A): Pipecat 래퍼는 `uv add pipecat-ai-typecast`, `aiohttp.ClientSession` 필요, 기본 모델 `ssfm-v30`, 출력 WAV만, 기본 44.1kHz, 기본 언어 영어, Pipecat 0.0.94 이상. Typecast API는 `POST /v1/text-to-speech/stream`, `X-API-KEY`, text 1~2000자, 한국어 코드 `kor`, 스트리밍 WAV 32kHz/16bit/mono. ElevenLabs Flash v2.5는 한국어 지원, 모델 지연 약 75ms(네트워크 제외) [[src-elevenlabs-2026-models]].
- 단계: 언어 한국어 지정(래퍼 `Language`에 `kor` 가능 여부는 C) → 출력 sample rate를 트랜스포트와 일치 → **감정 프리셋은 중립 고정** → MOS 비교 → 끼어들기 시 스트림 취소 확인 → 안전 스크립트 오디오는 사전 합성해 서버 파일로 보관.
- 코드 골격 요지: 공식 예시 값(`emotion_preset="happy"`, `emotion_intensity=1.3`, `audio_pitch=2`, `audio_tempo=1.05`)을 한벗 정책에 맞게 중립·강도 1.0으로 바꾼다(비평 26). 프리셋 이름·허용 범위는 Typecast 문서로 확인(미확인).
- ElevenLabs WebSocket: 첫 메시지 `{"text":" "}` → 본문 → `flush:true` → 종료 `{"text":""}`, `chunk_length_schedule` 기본 [120,160,250,290].
- 함정: Typecast 공식 지연 170~210ms는 조건 없는 벤더 주장(B) [[src-typecast-2026-developers-latency]]. 무료 플랜 생성물은 상업 이용 제한 [[src-typecast-2026-api-pricing]]. 44.1k/32k 차이의 실제 영향은 실행 확인 필요(C).

## ⑫ 통화 후 요약
- 통화 종료 후 Claude를 비동기로 1회 호출, "정리" 모드 규칙. 출력 스키마(설계): `{summary[≤3], confirmed_affect[], next_step(사용자가 말한 계획이 있을 때만, 없으면 null), memory_candidates[{state: stated|confirmed, block, text, evidence_utterance_id}]}`.
- 단계: 전사 + 확인 응답 입력 → JSON 검증 실패 시 1회 재시도 → 후보 표시 → `inferred`(미확인), "아니야" 감정, 삭제 tombstone과 같은 후보 제외 → 표시 지연 15s 이하(목표) 측정.
- 함정: 진단성 표현("우울 증상")은 금지 목록으로 검사, 위기 세션 요약 화면에도 109 카드 표시, "들어줘" 세션에서 새 조언 생성 금지. 후보의 저장 승인은 [[topic-app-impl-memory]].

---

## Update (2026-10-26T05:47:14.181Z)

## 2026-10-26 논문 보강
- 모드 고정 시스템 프롬프트는 LLM의 전략 선택 편향 [P54 [[src-kang-2024-esconv-llm-limits]]]에 대한 대응 가설일 뿐 직접 근거가 아니다. 사용자 선택 모드 vs 문맥 기반 전략 전환 비교는 후속 가설. 모드 위반 기준은 ESConv 전략 범주 [P49 [[src-acl-2021-esconv]]], 한국어 개발 세트에 EmoBench 번역판 [P51] 권장. 공감 기본선 [P53]은 지각된 공감이며 상담 효과 아님.
- TTS: 스트리밍 전환 시 한국어 CER 9.06% vs 7.98%, NMOS 3.60 vs 3.73 [P56 [[src-du-2024-cosyvoice2]]]. "150ms"는 이 논문으로 인용 불가. MOS 3.5는 팀 기준, 한국어 청취자 수 보고 [P59].
- 요약: 직접 연구 없음. 축어 인용 대신 재진술 [P64], 저장 내용 놀람 [P65]이 간접 근거.
- 전체 근거: [[topic-app-paper-evidence]].

