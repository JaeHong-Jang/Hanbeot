---
title: "topic-bench-safety-eval"
tags: ["benchmark", "safety-eval", "suicide", "clinician-eval", "mental-health", "grade-A"]
created: 2026-10-25T07:36:11.772Z
updated: 2026-10-25T07:36:11.772Z
sources: []
links: ["src-rand-2025-suicide-chatbots.md", "src-openai-2025-sensitive-conversations.md", "src-openai-2025-affective-use-study.md", "src-openai-2025-sycophancy-rollback.md", "src-arxiv-2026-heart-benchmark.md", "src-arxiv-2026-ai-suicide-primer.md", "src-nature-mi-2025-companion-emotional-risks.md", "src-dartmouth-2025-therabot-rct.md", "src-jmir-2017-woebot-rct.md", "src-jmir-2021-youper-observational.md", "claim-bench-3-safety-protocol.md", "claim-bench-7-no-therapy-positioning.md", "overview-benchmark.md", "topic-bench-regulation-incidents.md", "bench-chatgpt-voice.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-bench-safety-eval

# topic-bench-safety-eval

> 위기 대응·정신건강 안전 평가 방법과 기준(2026-10 기준). 한벗 핵심 기능 ④(위기 신호 시 전문기관 안내)의 측정 기준.

## 평가 방법·결과

| 평가 | 설계 | 결과 | 근거 |
|---|---|---|---|
| RAND / Psychiatric Services (2025-08) | 전문가 13명이 30개 자살 질문을 5위험등급으로 분류; ChatGPT·Claude·Gemini 각 100회 → 9,000 응답 | 매우낮음: ChatGPT·Claude 직접 응답 100%; 매우높음: 3모델 모두 0%; **중간 등급 불일치**. ChatGPT는 중고위험 직접 응답 경향, Gemini는 과잉 거부. 치명성 질문 우려 | [[src-rand-2025-suicide-chatbots]] (A/B) |
| OpenAI 임상가 평가 (2025-10) | 170+ 임상가, 영역별 바람직 응답 평가 | 패널 일치도 71–77%; 8월 대비 바람직하지 않은 응답 65–80% 감소(자체); WAU 0.15% 자살 지표 | [[src-openai-2025-sensitive-conversations]] (A/B) |
| MIT×OpenAI 정서 사용 연구 (2025-03) | RCT 981명 4주 + 4,000만 상호작용 분석 | 고사용량↔외로움·의존; 음성은 짧은 사용에서만 유리 | [[src-openai-2025-affective-use-study]] (A) |
| Sycophancy 롤백 (2025-04) | 사후 분석 | 아첨이 정서적 과의존·위험 조장 가능 인정 | [[src-openai-2025-sycophancy-rollback]] (A) |
| HEART (2026) | ESConv 기반 280+20 | safety-critical 항목 제외 → 위기 벤치마크 아님 | [[src-arxiv-2026-heart-benchmark]] (A) |
| AI & Suicide Prevention Primer (2026-05) | 부문 횡단 원칙 문서 | 설계 원칙 참고 | [[src-arxiv-2026-ai-suicide-primer]] (A) |
| Nature MI 논평 (2025-07) | 컴패니언 정서적 위험 주목 촉구 | 실험 아님 | [[src-nature-mi-2025-companion-emotional-risks]] (A) |

## 임상 파일럿 평가 설계 참고
- Therabot RCT: PHQ-9/GAD-7 전후 + 치료동맹, 대기자 대조, 4주+4주 [[src-dartmouth-2025-therabot-rct]] (A).
- Woebot 2017: 대학생 70명 2주 RCT [[src-jmir-2017-woebot-rct]] (A).
- Youper 2021: 관찰연구 4,517명, 2주 d=0.57/0.46 [[src-jmir-2021-youper-observational]] (A).

## 우선 수정
- "30문항×5등급×100회" → 30문항을 5등급으로 분류, 총 9,000 응답.
- "불일치 29%" → 23–29%.
- RAND 페이지는 검증 시점에 열람 가능(403 아님).

## 한벗 권장 측정
1. RAND식 **한국어 자살 관련 질문셋**(5등급, 전문가 분류) × 100회 반복 → 등급별 적절 응답률. 중간 등급 일관성이 핵심.
2. 한국 정신건강 전문가 패널(3–5명) 평정 → 합의율 보고(OpenAI 71–77% 참고).
3. 위기 핸드오프 프로토콜(109 등) 공개 + 호출 성공률 로그 → [[claim-bench-3-safety-protocol]].
4. 파일럿: PHQ-9/GAD-7 전후 비교는 "효능 주장"이 아닌 "무해성 확인" 목적으로만 → [[claim-bench-7-no-therapy-positioning]].

관련: [[overview-benchmark]] · [[topic-bench-regulation-incidents]] · [[bench-chatgpt-voice]]

