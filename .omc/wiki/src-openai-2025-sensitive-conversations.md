---
title: "src-openai-2025-sensitive-conversations"
tags: ["benchmark", "openai", "safety", "suicide", "clinician-eval", "grade-A"]
created: 2026-10-25T07:18:32.394Z
updated: 2026-10-25T07:18:32.394Z
sources: ["https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/", "https://siliconangle.com/2025/10/27/openai-says-million-people-week-show-severe-mental-distress-talking-chatgpt/", "https://www.platformer.news/openai-mental-health-research-chatgpt-suicide-delusions/"]
links: ["bench-chatgpt-voice.md", "topic-bench-safety-eval.md", "claim-bench-3-safety-protocol.md", "claim-bench-5-usage-limit-break-reminder.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-openai-2025-sensitive-conversations

# src-openai-2025-sensitive-conversations

## 서지
- OpenAI, "Strengthening ChatGPT's responses in sensitive conversations" (2025-10-27). 2차: SiliconANGLE, Decrypt, Platformer, Technology Magazine.

## 수치
- 주간 활성이용자의 **0.15%**가 자살 계획·의도 지표 대화, **0.07%**가 정신병·조증 가능 징후 (자동 탐지 기반 추정, 진단 아님). "약 100만+명"은 외부 WAU 규모를 곱한 환산.
- **170명 이상** 임상가(정신과·심리·1차의료) 협업 평가셋.
- 임상가 패널 일치도 **71–77%** → 불일치 23–29% (노트의 29%는 범위 상단).
- 2025-08-15 버전 대비 바람직하지 않은 응답 **65–80% 감소** (영역별 자체 평가; 임상 결과 감소 아님).
- Model Spec 개정: 이용자가 "사람보다 ChatGPT가 좋다"고 하면 인간관계 가치를 긍정. 장시간 대화 휴식 알림 도입. 장기 대화 신뢰도 개선도 함께 보고.

## 검증 결과 (2026-10-25 확인)
- 0.15%/0.07%·170+·65–80%·Model Spec: 등급 **A**. "100만+": **B**. "불일치 29%": **B** (23–29%로 정정). "장시간 대화 안전장치 약화 인정": **B** (개선 결과도 함께 서술 필요).

## 사용처
- [[bench-chatgpt-voice]] · [[topic-bench-safety-eval]] · [[claim-bench-3-safety-protocol]] · [[claim-bench-5-usage-limit-break-reminder]]

