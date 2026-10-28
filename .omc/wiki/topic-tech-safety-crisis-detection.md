---
title: "topic-tech-safety-crisis-detection"
tags: ["tech", "safety-crisis-detection", "grade-A", "grade-B", "grade-C", "suicide-risk", "109", "companion-chatbot", "dependence", "topic"]
created: 2026-10-25T07:28:42.669Z
updated: 2026-10-25T07:28:42.669Z
sources: []
links: ["overview-technology.md", "claim-tech-8-crisis-referral-flow.md", "src-jmir-2026-systematic-review-29.md", "src-mit-openai-2025-affective-use-rct.md", "src-psycrisisbench-2025.md", "src-vera-mh-2026-eval-tools.md", "src-mohw-2026-suicide-emergency-plan.md", "src-wenger-2026-ai-empathy-paradox.md", "src-mirror-eval-2026-companion-harm.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tech-safety-crisis-detection

# topic-tech-safety-crisis-detection

안전·위기 탐지·109 연계 영역 종합. 한벗 핵심 기능 ④(위기 신호 시 109 등 전문기관 안내)의 기술·정책 근거. 상위: [[overview-technology]]. 결정: [[claim-tech-8-crisis-referral-flow]].

## 요약
29편 체계적 고찰은 companion 앱의 공통 문제로 위험 평가 부실, 위기 자원 연계 지연, jailbreak 탐지 실패를 들고, frontier 모델(ChatGPT, Claude)이 오픈소스·companion 앱보다 자살·자해 대응 품질이 높다고 보고한다. 명시적 위기 신호는 PsyCrisisBench 기준 F1 0.88–0.91 달성 가능하나 암시적 신호는 현 LLM이 취약하다(DeepSuiMind 1,308 케이스). MIT/OpenAI RCT(N=981)는 사용량과 외로움·의존 증가의 상관을 보였다. 한국은 2026-07 「자살 긴급대응 강화방안」에서 109 인력 103→200명, AI 상담 지원, 플랫폼 위험 키워드 → 109 안내 협의를 추진 중이며, 민간 챗봇-109 연계 공식 가이드라인은 이번 조사에서 확인하지 못했다. MIRROR-Eval 수치(15.1 vs 5.0)는 원문 미확인(C)이다.

## 확인된 발견 (A/B)
- 체계적 고찰 29편(2025-12 cutoff): frontier > 오픈소스·companion; 3대 공통 문제; IWSDS 2025 위기 지원 에이전트 설계 사례 [[src-jmir-2026-systematic-review-29]]
- MIT/OpenAI RCT N=981·28일: 사용량 ↑ ↔ 외로움·의존·문제적 사용 ↑, 사회화 ↓(상관); 플랫폼 분석 약 4,000만 interactions(B), 설문 4,076명; De Freitas 2026 순간적 외로움 감소(B) [[src-mit-openai-2025-affective-use-rct]]
- PsyCrisisBench 540전사·64 LLM: 자살 사고 F1 0.880, 위험 평가 F1 0.907; DeepSuiMind 1,308 케이스 암시적 사고 취약(B); SOS-HL-1K 1,249 포스트 [[src-psycrisisbench-2025]]
- VERA-MH 오픈소스 평가 도구 임상가 검증; JMIR 2026 **한국어** 자살 유해 콘텐츠 벤치마크 존재 [[src-vera-mh-2026-eval-tools]]
- 2026-07-28 강화방안: 5단계, 109 인력 103→200명 계획, AI 상담 지원; 플랫폼 키워드 → 109 노출 협의(B); Google·OpenAI safeguard 보도(B) [[src-mohw-2026-suicide-emergency-plan]]
- AI 라벨이 heard 느낌 감소 → 인간 흉내 금지의 안전 근거 [[src-wenger-2026-ai-empathy-paradox]]

## 미확인 (C) — 본문 분리
- MIRROR-Eval 15.1 vs 5.0, 3티어, Character.AI·Replika 최고 위해; Psychiatric Services·Scientific Reports 2025-08(PMC CAPTCHA, 서지 혼동 점검); FTC 조사·Axios; 청소년 사망 소송 보도 [[src-mirror-eval-2026-companion-harm]]
- 109 제2센터·정원 140명 [[src-mohw-2026-suicide-emergency-plan]]
- "한국어 자살 위험 데이터셋 없음"(→ 콘텐츠 분류 자료는 존재, 개인 위기 탐지 자료 미발견), "109 공식 API 없음"(→ 미확인), 100–300 케이스 적정성(팀 제안)
- Gaps: Llama Guard·NeMo Guardrails self-harm 성능, CLPsych/UMD Reddit 데이터, Stanford companion 연구

## 설계 패턴
1. **2단 위험 분류(매 턴)**: 텍스트 명시적 키워드/의도 → 즉시 109·정신건강복지센터 안내 + 모드 강제 전환(조언·정리 금지, 안전 스크립트); 암시적 신호(텍스트 + SER 저각성·장기 침묵 등) → 세션 누적 점수, 임계 초과 시 부드러운 안내
2. **multi-turn·jailbreak 평가**: 단일 프롬프트 평가만으로 부족; 역할놀이 요청에도 안전 규칙 유지 테스트
3. **한국어 테스트 세트**: PsyCrisisBench·DeepSuiMind 케이스 번역·현지화 + 정신건강 전공 자문, VERA-MH 한국어 포팅; JMIR 한국어 벤치마크로 유해 발화 생성 방지 검증
4. **의존 완화**: 사용 시간·빈도 모니터링, 오프라인 관계 nudge, 일일 상한/휴식 제안 — KPI(재이용 60%)와의 긴장 명시
5. **109 연계 수준**: 공식 API 미확인 → 번호·문자 안내 + 지역 센터 안내, 정부 플랫폼 협의 흐름 추적

