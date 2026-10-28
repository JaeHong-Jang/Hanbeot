---
title: "claim-tech-6-sensitive-data-consent"
tags: ["tech", "privacy-voice-data", "long-term-memory", "grade-A", "grade-B", "grade-C", "decision", "consent", "sensitive-information", "pipa", "pipc"]
created: 2026-10-25T07:33:19.076Z
updated: 2026-10-25T07:33:19.076Z
sources: []
links: ["topic-tech-privacy-voice-data.md", "overview-technology.md", "claim-tech-2-memory-architecture.md", "src-law-2026-pipa-sensitive-info.md", "src-pipc-2025-genai-guide.md", "src-pipc-2021-biometric-guideline.md", "src-letta-2025-memory-blocks.md", "src-openai-2026-realtime-pricing.md", "src-rtzr-2026-pricing.md", "src-typecast-2026-api-pricing.md", "src-eyben-2016-egemaps.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-6-sensitive-data-consent

# claim-tech-6-sensitive-data-consent

## 결정
**한벗은 (1) 화자 식별·voiceprint 저장을 하지 않아 생체인식정보 요건을 피하고, (2) SER·정신건강 추론 결과를 보수적으로 민감정보(건강정보)로 취급해 가입 시 일반 동의와 분리된 명시 동의를 받으며, (3) 원본 음성은 STT/SER 처리 후 즉시 폐기(opt-in 시만 암호화 보관), 추론 결과는 사용자 ID와 분리된 가명 키로 암호화 저장하고, (4) 메모리 열람·수정·삭제 UI와 처리방침(수탁·국외이전 명시)·옵트아웃을 제공한다. 개인정보 통제 기능은 전원 무료다.**

상위: [[topic-tech-privacy-voice-data]], [[overview-technology]], [[claim-tech-2-memory-architecture]]

## 근거
- 법 제23조 민감정보(건강 포함) 원칙적 처리 금지·별도 동의 예외; 시행령 제18조 제3호 생체인식정보 3요건(특정 개인 식별 목적) [A]; 건강정보에 정신적 건강상태 포함(해설, B); 화자 식별 안 하면 요건 회피(해석, B) [[src-law-2026-pipa-sensitive-info]]
- PIPC 생성형 AI 안내서(2025-08-06): 서비스형 LLM 활용 방식, 외부 API 약관으로 안전성 확보, PET, 처리방침 공개·옵트아웃, CPO 초기 참여 [[src-pipc-2025-genai-guide]]
- 생체정보 가이드라인 5단계·15개 보호조치(B); 원본/특징정보 분리·암호화(C) [[src-pipc-2021-biometric-guideline]]
- 메모리 블록 분리(`user_stated` / `ai_inferred`)와 사용자 편집 UI [[src-letta-2025-memory-blocks]]
- 외부 벤더(OpenAI 등) 약관 확인 대상 [[src-openai-2026-realtime-pricing]], [[src-rtzr-2026-pricing]], [[src-typecast-2026-api-pricing]]
- 특징정보 단위: eGeMAPS/embedding [[src-eyben-2016-egemaps]]

## 동의·데이터 흐름(초안)
| 데이터 | 분류(보수) | 동의 | 저장 | 보존 |
|---|---|---|---|---|
| 원본 음성 | 개인정보 | 일반 | 메모리 내 처리 후 폐기 | 0(opt-in 시 암호화 보관) |
| 전사 텍스트 | 개인정보 | 일반 | 암호화 | 세션 + 사용자 삭제 |
| eGeMAPS/embedding | 특징정보 | 민감정보 동의 | 분리 저장소·별도 키 | TTL |
| 감정 라벨·confidence | 건강정보 가능성 | 민감정보 동의 | 가명 키 | TTL + 삭제 UI |
| 위기 신호 로그 | 건강정보 가능성 | 민감정보 동의 + 고지 | 암호화 | 최소 보존 |
| user_stated_facts | 개인정보 | 일반 | 암호화 | 사용자 삭제 |

## 비용
- 법무 검토 1회(민감정보 동의서·처리방침·국외이전 고지) — 창업지원 프로그램 법률 자문 활용
- 암호화·키 분리는 Postgres 컬럼 암호화 + KMS 수준으로 추가 인프라 비용 미미

## 검증 가능 목표
1. 동의 화면: 일반 동의 / 민감정보 동의 / 음성 보관 opt-in 3단 분리, 각 미동의 시 기능 축소 동작 확인
2. 삭제 요청 → 모든 저장소(메모리·특징·라벨·로그)에서 24h 내 삭제 자동 테스트
3. 벤더별 no-training·국외이전 조항 표 작성(Claude, RTZR, Typecast/ElevenLabs)

## 미확인 리스크 (C)
- "음성 추론 감정 = 건강정보" PIPC 공식 해석 부재 → 보수적 가정
- PIPC 안내서 원문 세부(민감정보·아동·정당한 이익), 생체정보 가이드라인 전문
- 국외이전(제28조의8) 요건, 만 14세 미만 법정대리인 동의(대학생 타깃이라 영향 적으나 확인 필요)
- 메모리 UI만으로 적법성 전체 충족 불가 — 위탁·보안·배포 전 점검 별도
- 시행령 제18조 2024년 이후 개정 여부

