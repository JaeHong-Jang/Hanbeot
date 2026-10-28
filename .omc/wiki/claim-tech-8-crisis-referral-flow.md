---
title: "claim-tech-8-crisis-referral-flow"
tags: ["tech", "safety-crisis-detection", "grade-A", "grade-B", "grade-C", "decision", "109", "suicide-risk", "referral", "dependence"]
created: 2026-10-25T07:33:30.196Z
updated: 2026-10-25T14:52:29.783Z
sources: []
links: ["topic-tech-safety-crisis-detection.md", "overview-technology.md", "src-jmir-2026-systematic-review-29.md", "src-psycrisisbench-2025.md", "src-vera-mh-2026-eval-tools.md", "src-mohw-2026-suicide-emergency-plan.md", "src-mit-openai-2025-affective-use-rct.md", "claim-tech-1-ser-model.md", "claim-tech-7-dialogue-mode-strategy.md", "overview-hanbeot-project.md", "src-mirror-eval-2026-companion-harm.md", "claim-tech-6-sensitive-data-consent.md", "claim-app-5-crisis-ops-and-tel109.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-8-crisis-referral-flow

# claim-tech-8-crisis-referral-flow

## 결정
**위기 대응은 매 턴 2단 분류기로 구현한다: (1) 명시적 자살·자해 키워드/의도 → 즉시 109(자살예방상담전화)·지역 정신건강복지센터 안내 + 안전 모드 강제 전환(조언·정리 금지, 고정 스크립트, 세션 종료 전 재안내); (2) 암시적 신호(텍스트 + SER 저각성·장기 침묵·속도 저하) → 세션 누적 점수, 임계 초과 시 부드러운 안내. 109 공식 API·가이드라인은 이번 조사에서 확인하지 못했으므로 MVP는 번호·문자 안내 수준으로 구현한다. 의존 완화(사용 시간 모니터링, 오프라인 관계 nudge, 일일 상한 제안)를 MVP에 포함한다.**

상위: [[topic-tech-safety-crisis-detection]], [[overview-technology]]

## 근거
- companion 앱 공통 실패: 위험 평가 부실, 위기 자원 연계 지연, jailbreak 탐지 실패; frontier 모델 우위 [[src-jmir-2026-systematic-review-29]]
- 명시적 위기: PsyCrisisBench F1 0.880(사고)/0.907(위험 평가) 달성 가능; 암시적: DeepSuiMind 1,308 케이스에서 취약 [[src-psycrisisbench-2025]]
- 평가 도구: VERA-MH(임상가 검증), JMIR 2026 한국어 유해 콘텐츠 벤치마크 [[src-vera-mh-2026-eval-tools]]
- 109 인력 103→200명 계획, AI 상담 지원, 플랫폼 키워드 → 109 노출 협의; Google·OpenAI safeguard [[src-mohw-2026-suicide-emergency-plan]]
- 의존: MIT/OpenAI RCT N=981 사용량 ↔ 외로움·의존 상관 [[src-mit-openai-2025-affective-use-rct]]
- SER 저각성 신호 활용 → [[claim-tech-1-ser-model]]; AI 흉내 금지 → [[claim-tech-7-dialogue-mode-strategy]]

## 흐름(텍스트)
```
turn 입력(전사 + SER 라벨/confidence + eGeMAPS)
  ├─ L1 명시적 분류(키워드·의도, LLM 분류 프롬프트)
  │     └─ 양성 → 안전 모드: 공감 1문장 → 109 안내 → "지금 안전한가요?" → 세션 말미 재안내 → 로그(민감정보)
  └─ L2 암시적 점수(텍스트 신호 + SER 저각성/침묵/속도 ↓, 세션 누적)
        └─ 임계 초과 → 부드러운 안내("힘들 때 전화할 수 있는 곳이 있어") + 모드 유지
의존 모니터: 일일 사용 ≥ 60분 또는 주 6일 이상 → 휴식·오프라인 관계 nudge
```

## 비용
- L1/L2 분류는 Claude 호출에 분류 지시 포함(추가 호출 없음) 또는 소형 분류기(비용 미미)
- 전문가 자문(정신건강 전공) 1–2회 — UNIST 연구자 협업 프로그램 활용 → [[overview-hanbeot-project]]

## 검증 가능 목표
1. 한국어 테스트 세트 100–300 케이스(PsyCrisisBench·DeepSuiMind 번역·현지화 + 자문; 규모는 팀 제안) → 명시적 recall ≥ 0.90, 오탐 ≤ 10%
2. multi-turn·역할놀이(jailbreak) 시나리오 20개 → 안전 규칙 유지율 100%
3. JMIR 한국어 벤치마크로 유해 발화 생성 0건
4. 의존 nudge 트리거 동작 확인

## 미확인 리스크 (C)
- MIRROR-Eval 수치(15.1 vs 5.0) 원문 미확인 → 인용 금지 [[src-mirror-eval-2026-companion-harm]]
- 109 공식 API·민간 챗봇 연계 가이드라인(미확인), 109 제2센터 정보
- 한국어 개인 위기 탐지 데이터셋 미발견(콘텐츠 분류 자료만 존재)
- Llama Guard·NeMo Guardrails self-harm 성능 미조사
- 과사용 억제와 재이용 KPI(60%)의 긴장
- 위기 로그는 민감정보 → [[claim-tech-6-sensitive-data-consent]]

---

## Update (2026-10-25T14:52:29.783Z)

## 앱 설계서 반영 (2026-10-25)
- 일일 60분·주 6일 기준은 근거 없는 **임시 운영 기준**이다. W6 결과로 조정하며, 알림 후 종료율은 행동 지표일 뿐 의존 감소의 근거가 아니다(비평 27).
- 분류 호출 구조 확정: 로컬 KeywordGate + Claude 응답 첫 줄 위험 태그(추가 호출 없음), 별도 분류 호출은 대안(비평 9).
- 상세: [[claim-app-5-crisis-ops-and-tel109]]

