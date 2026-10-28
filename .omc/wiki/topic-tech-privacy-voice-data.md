---
title: "topic-tech-privacy-voice-data"
tags: ["tech", "privacy-voice-data", "grade-A", "grade-B", "grade-C", "pipa", "pipc", "sensitive-information", "on-device", "pseudonymization", "topic"]
created: 2026-10-25T07:28:46.586Z
updated: 2026-10-25T07:28:46.586Z
sources: []
links: ["overview-technology.md", "claim-tech-6-sensitive-data-consent.md", "src-law-2026-pipa-sensitive-info.md", "src-pipc-2025-genai-guide.md", "src-pipc-2021-biometric-guideline.md", "src-funaudiollm-2024-sensevoice.md", "src-emotion2vec-2024-github.md", "src-buzzasr-2025-whisper-korean.md", "src-kyutai-2024-moshi.md", "src-openai-2026-realtime-pricing.md", "topic-tech-speech-emotion-recognition.md", "topic-tech-long-term-memory.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tech-privacy-voice-data

# topic-tech-privacy-voice-data

음성·민감정보 프라이버시 영역 종합(한국 개인정보 보호법, PIPC 안내서, on-device 가능성). 상위: [[overview-technology]]. 결정: [[claim-tech-6-sensitive-data-consent]].

## 요약
한국법상 음성 자체는 자동으로 민감정보가 아니며, 시행령 제18조 제3호 생체인식정보는 "신체적·생리적·행동적 특징 + **특정 개인을 알아볼 목적** + 기술적 수단 생성" 요건을 충족할 때만 해당한다(화자 식별을 하지 않으면 요건 회피 가능 — 해석, B). 법 제23조 민감정보에 "건강"이 포함되고 해설상 정신적 건강상태가 건강정보에 들어가므로, 한벗의 정서·정신건강 추론 정보는 **보수적으로 민감정보로 취급**하는 것이 안전하다(PIPC 공식 해석은 미발견, C). PIPC 생성형 AI 안내서(2025-08-06)는 4단계 생애주기·3개 개발 방식, 프롬프트 학습 시 3요소 종합 판단, CPO 초기 참여, PET, 처리방침·옵트아웃을 다룬다. on-device STT/SER은 모델 규모상 후보가 있으나 모바일 성능은 미검증이다.

## 확인된 발견 (A/B)
- 법 제23조(건강 등 민감정보, 원칙적 처리 금지·별도 동의) [A]; 시행령 제18조 제3호 생체인식정보 3요건(2026-09-11 시행 현행) [A]; 4유형·건강정보 해설·음성 비자동 민감정보 [B]; 2020 입법예고 보도·개정안 발의 [B] [[src-law-2026-pipa-sensitive-info]]
- PIPC 생성형 AI 안내서 2025-08-06 공개 [A]; 4단계·3방식·프롬프트 학습 3요소·CPO·PET·외부 API 약관·배포 전 점검 [B]; 2026-05 이용자 가이드, 2024 사례집 [B] [[src-pipc-2025-genai-guide]]
- 생체정보 가이드라인 5단계·15개 보호조치 [B] [[src-pipc-2021-biometric-guideline]]
- on-device 후보: SenseVoice-S 234M [[src-funaudiollm-2024-sensevoice]], emotion2vec+ base 약 90M [[src-emotion2vec-2024-github]], whisper.cpp 한국어 ggml 공개 [A] [[src-buzzasr-2025-whisper-korean]]; Moshi 7B는 24GB VRAM 또는 MLX 양자화 [[src-kyutai-2024-moshi]]
- 외부 API(OpenAI 등) 가격·약관 → no-training 조건 확인 대상 [[src-openai-2026-realtime-pricing]]

## 미확인 (C) — 본문 분리
- 생체정보 가이드라인 용어·인증/식별 구분·AI 스피커 예시·특징정보 암호화 세부(전문 미확보) [[src-pipc-2021-biometric-guideline]]
- "SER 추론 = 민감정보 가능성 높음"(보수적 가정), "메모리 UI로 PIPC 요구 충족", "3계층 분리가 가이드라인 정합", "LLM·TTS 클라우드 불가피"(→ 팀 MVP 조건에서 클라우드 사용 예정) [[src-law-2026-pipa-sensitive-info]], [[src-pipc-2025-genai-guide]]
- SenseVoice 70ms·emotion2vec+ 90M을 모바일 실행 가능성 근거로 쓰는 것, 2025-07 협의회, 다음 링크 매체(연합→지디넷)
- Gaps: PIPC 안내서 원문 세부, 시행령 제18조 2024년 이후 개정 여부, 국외이전(제28조의8), 아동(만 14세 미만) 동의, 음성 특징정보 정의 문구

## 설계 패턴
1. **생체인식정보 회피**: speaker identification/verification 기능 제외, voiceprint 미저장, 로그인은 일반 인증
2. **민감정보 보수 처리**: SER 결과·정신건강 추론은 별도 명시 동의(민감정보 동의) + 암호화 + 사용자 ID와 분리된 가명 키 저장; 원본 음성은 STT/SER 후 즉시 폐기(opt-in 시만 암호화 보관)
3. **3계층 분리(팀 설계 제안)**: 오디오(원본) → eGeMAPS/embedding(특징) → 감정 라벨(추론)을 서로 다른 저장소·키로 분리 → [[topic-tech-speech-emotion-recognition]]
4. **서비스형 LLM 활용 방식 준수**: Claude·STT·TTS 벤더 no-training 약관 확인·명시, 처리방침에 수탁·국외이전 기재, 옵트아웃·열람·삭제 제공(메모리 UI는 일부 충족, 전체 적법성은 별도) → [[topic-tech-long-term-memory]]
5. **on-device 로드맵(MVP 이후)**: STT(whisper.cpp)·SER(SenseVoice-S/emotion2vec+ base) 클라이언트 실행으로 "원본 음성이 서버에 가지 않는" 구조 — 모바일 성능 실측 전까지 "검토 중"으로 표기

