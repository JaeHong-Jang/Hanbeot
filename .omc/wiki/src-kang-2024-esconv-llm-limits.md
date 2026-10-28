---
title: "src-kang-2024-esconv-llm-limits"
tags: ["tech", "empathetic-dialogue", "grade-A", "esconv", "emotional-support", "strategy-bias", "paper-evidence", "ser"]
created: 2026-10-25T07:21:36.223Z
updated: 2026-10-26T05:52:16.279Z
sources: ["https://arxiv.org/abs/2402.13211v2", "https://arxiv.org/pdf/2505.15316.pdf"]
links: ["claim-tech-7-dialogue-mode-strategy.md", "src-arxiv-2024-esc-strategy-bias.md", "src-basar-2024-mi-reflection.md", "src-esc-eval-2024-frameworks.md", "topic-tech-empathetic-dialogue.md", "topic-app-paper-evidence.md", "topic-app-impl-dialogue-tts.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-kang-2024-esconv-llm-limits

# src-kang-2024-esconv-llm-limits

## 서지정보
1. Kang et al., "Can Large Language Models be Good Emotional Supporter? Mitigating Preference Bias on Emotional Support Conversation", ACL 2024. arXiv 2402.13211.
2. 2025 ESC task 재정의 논문, arXiv 2505.15316.

## URL
- https://arxiv.org/abs/2402.13211v2
- https://arxiv.org/pdf/2505.15316.pdf

## 라이선스/상업 이용
학술 논문. ESConv 데이터셋 원 논문(Liu 2021)은 이번 조사에서 직접 미확인(Gaps).

## 핵심 수치/결론
- Kang: ESConv에서 LLM은 적절한 지지 전략 선택에 어려움, 특정 전략에 **강한 선호 편향** → "외부 도움 없는 LLM 단독은 좋은 emotional supporter가 아님" (특정 ESC 실험의 결론, 모든 LLM의 영구적 한계 아님)
- 2505.15316: 표준 ESC task 정의의 결함 지적, 핵심은 **한 턴 내 여러 전략·발화의 연속 생성** 필요성 (리서치 노트의 "마지막 발화가 supporter가 아닐 수 있음"만으로 요약하면 핵심 누락)

## 검증 결과
- 두 주장 모두 등급 **A** (후자는 요약 보완 필요)

## 한벗 적용 포인트
- **전략을 모델 자율에 맡기지 말고 모드로 고정**하는 설계의 직접 근거: "들어줘" = reflection/restatement/affirmation(조언 금지), "조언" = suggestion/information 허용, "정리" = restatement + summarization → [[claim-tech-7-dialogue-mode-strategy]]
- 한 턴에 reflection → (필요시) question 같은 전략 연속 생성 허용 → [[topic-tech-empathetic-dialogue]]
- 관련: [[src-basar-2024-mi-reflection]], [[src-esc-eval-2024-frameworks]]

확인일: 2026-10-25

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-arxiv-2024-esc-strategy-bias]]

---

## Update (2026-10-26T05:52:16.279Z)

## 2026-10-26 논문 보강 (설계서 [P54])
- 수치: LLM은 정서지원 전략 선택에 강한 선호 편향을 보인다(영어).
- 교정(비평 §7-4): 모드 고정의 "직접 근거"로 쓰지 않는다. 모드 고정은 이 편향에 대한 한 가지 대응 가설이며, 고정 모드가 상황별 전략 전환을 막을 수 있어 "사용자 선택 모드 vs 문맥 기반 전략 전환" 비교는 후속 가설로 둔다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-dialogue-tts]]
