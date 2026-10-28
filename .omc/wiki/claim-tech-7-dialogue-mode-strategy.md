---
title: "claim-tech-7-dialogue-mode-strategy"
tags: ["tech", "empathetic-dialogue", "grade-A", "grade-B", "grade-C", "decision", "esconv", "motivational-interviewing", "evaluation", "claude"]
created: 2026-10-25T07:33:24.027Z
updated: 2026-10-25T07:33:24.027Z
sources: []
links: ["topic-tech-empathetic-dialogue.md", "overview-technology.md", "src-ayers-2023-jama-chatbot-empathy.md", "src-lee-2024-llm-empathy.md", "src-conll-2026-empathy-raters.md", "src-kang-2024-esconv-llm-limits.md", "src-basar-2024-mi-reflection.md", "src-wenger-2026-ai-empathy-paradox.md", "src-esc-eval-2024-frameworks.md", "src-jmir-2026-systematic-review-29.md", "claim-tech-8-crisis-referral-flow.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-7-dialogue-mode-strategy

# claim-tech-7-dialogue-mode-strategy

## 결정
**한벗의 3모드는 ESConv 지지 전략 체계에 고정 매핑한다: "들어줘" = MI reflection/restatement/affirmation(조언 금지), "조언" = suggestion/information 허용, "정리" = restatement + summarization. 전략 선택을 모델 자율에 맡기지 않고 시스템 프롬프트로 고정하며, 응답은 1–2문장 우선, SER·메모리의 구체 맥락을 반드시 1개 이상 반영한다. LLM은 Claude API(스트리밍)를 사용하고, 공감 평가는 LLM-as-judge + 인간 평가(Başar 4기준)를 병행한다. AI임을 숨기지 않는다.**

상위: [[topic-tech-empathetic-dialogue]], [[overview-technology]]

## 근거
- LLM 응답이 블라인드에서 인간보다 공감적: Ayers 78.6%, Lee N=192/202, CoNLL 1,000명 [[src-ayers-2023-jama-chatbot-empathy]], [[src-lee-2024-llm-empathy]], [[src-conll-2026-empathy-raters]]
- 전략 선택 편향 → 모드 고정 필요(Kang ACL 2024); 한 턴 내 다중 전략 연속 생성(2025 재정의) [[src-kang-2024-esconv-llm-limits]]
- GPT-4 MI reflection이 인간 작성과 comparable; 4기준 appropriateness/specificity/naturalness/engagement [[src-basar-2024-mi-reflection]]
- 정형화 비판 → specificity 주입; in-group bias → 인간 평가 필수 [[src-conll-2026-empathy-raters]]
- AI 라벨 페널티(heard 감소, 귀속 후 인간 선호 57–62%) → 투명성 유지 [[src-wenger-2026-ai-empathy-paradox]]
- 평가 프레임: FEEL(LLM judge), HEART 5축, ESC-Skills(100케이스·인간 3명) [[src-esc-eval-2024-frameworks]]
- frontier 모델이 위기 대응 품질에서 우위 → Claude 선택의 안전 측면 근거 [[src-jmir-2026-systematic-review-29]]

## 모드별 프롬프트 규칙(초안)
| 모드 | 허용 전략 | 금지 | 길이 | SER 반영 |
|---|---|---|---|---|
| 들어줘 | simple/complex reflection, affirmation, open question(≤1) | 조언, 해결책, 평가 | 1–2문장 | 톤·속도 변화 언급 가능("목소리가 좀 지친 것 같아") |
| 조언 | reflection 1회 후 suggestion/information | 단정적 지시, 의료 판단 | 2–4문장 | 정서 강도 따라 조언 강도 조절 |
| 정리 | restatement, summarization, 다음 행동 1개 | 새 조언 | 3–5문장 | 세션 내 정서 변화 요약 |
| 안전(강제) | 위기 스크립트, 109 안내 | 모든 일반 전략 | 고정 | 위험 신호 근거 → [[claim-tech-8-crisis-referral-flow]] |

## 비용
- Claude 토큰: 시스템 프롬프트(모드+메모리 블록+SER) 약 1.5–2.5k 입력 + 100–200 출력/턴. 프롬프트 캐싱으로 입력 절감 가능(Claude API 가격은 이번 조사 범위 밖 — 별도 확인)

## 검증 가능 목표
1. 30명 테스트 전사 100턴 샘플, 평가자 3명, Başar 4기준 5점 척도 → 평균 ≥ 3.5(한벗 만족도 KPI와 정합)
2. 모드 위반율(들어줘 모드에서 조언 발생) ≤ 5% (LLM judge + 수동 확인)
3. specificity: 응답 중 SER 또는 메모리 참조 포함 비율 ≥ 60%

## 미확인 리스크 (C)
- MI reflection 품질을 상담 효과로 확대 불가 — 한벗은 상담 서비스가 아님을 명시
- 한국어 empathetic dialogue 데이터·한국어 LLM 공감 평가 부재 → 한국어 평가 결과는 팀 자체 데이터가 유일
- Xie 2024 MI 귀납 규칙 논문 원문 미확인
- Ayers "중앙값" 정정 반영

