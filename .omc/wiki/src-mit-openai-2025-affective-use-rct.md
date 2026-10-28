---
title: "src-mit-openai-2025-affective-use-rct"
tags: ["tech", "safety-crisis-detection", "grade-A", "loneliness", "dependence", "rct", "mit-media-lab", "openai", "paper-evidence"]
created: 2026-10-25T07:24:25.161Z
updated: 2026-10-26T05:53:25.428Z
sources: ["https://arxiv.org/html/2503.17473v1", "https://arxiv.org/html/2504.03888", "https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab", "https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1612838/full", "https://cave.co.nl/blog/do-ai-companions-help-with-loneliness/"]
links: ["claim-tech-8-crisis-referral-flow.md", "src-jmir-2026-systematic-review-29.md", "src-openai-2025-affective-use-study.md", "topic-tech-safety-crisis-detection.md", "topic-app-paper-evidence.md", "claim-bench-5-usage-limit-break-reminder.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-mit-openai-2025-affective-use-rct

# src-mit-openai-2025-affective-use-rct

## 서지정보
1. MIT Media Lab x OpenAI, "How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use: A Longitudinal Randomized Controlled Study", arXiv 2503.17473 (2025-03) — RCT
2. OpenAI, "Investigating Affective Use and Emotional Well-being on ChatGPT", arXiv 2504.03888 — 플랫폼 분석 + 설문
3. Frontiers in Medicine 논평 10.3389/fmed.2025.1612838 (해석·비평)
4. De Freitas et al., J. Consumer Research 2026 (2차 요약 cave.co.nl)

## URL
- https://arxiv.org/html/2503.17473v1
- https://arxiv.org/html/2504.03888
- https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab
- https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1612838/full
- https://cave.co.nl/blog/do-ai-companions-help-with-loneliness/

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치
- RCT: 최종 분석 표본 **981명**, 4주(28일), 일 5분 이상 사용 **지시** 조건 (A)
- 모든 modality·대화 유형에서 **일일 사용량이 높을수록 외로움·의존·문제적 사용 증가, 사회화 감소와 상관** — 사용량은 무작위 배정되지 않아 인과 결론과 구분 (A)
- OpenAI 플랫폼 분석: 공식 발표 약 **4,000만 interactions**(B; 논문의 300만+ conversations와 혼동 금지), 설문 **4,076명**(A, RCT와 다른 조사)
- Frontiers 논평: 결과가 복합적이고 해석 주의 (B)
- De Freitas JCR 2026: AI companion 대화가 순간적 외로움을 인간 대화 수준으로 감소 (B; 2차 요약, 장기 의존 감소 입증 아님)

## 검증 결과
- RCT 표본·설계·상관 결과: **A**. 4,000만: **B**. 4,076: **A**. 논평·De Freitas: **B**

## 한벗 적용 포인트
- **의존 완화 기능을 MVP 범위에 포함할 근거**: 사용 시간·빈도 모니터링, 오프라인 관계 연결 nudge, 일일 사용 상한/휴식 제안 → [[claim-tech-8-crisis-referral-flow]]
- 한벗 KPI(재이용 의향 60%)와 "과사용 억제"가 충돌할 수 있음을 사업계획서에 명시 → [[topic-tech-safety-crisis-detection]]
- 관련: [[src-jmir-2026-systematic-review-29]]

확인일: 2026-10-25

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-openai-2025-affective-use-study]]

---

## Update (2026-10-26T05:53:25.428Z)

## 2026-10-26 논문 보강 (설계서 [P90])
- 같은 연구(arXiv 2503.17473, 4주 RCT 981명)의 두 번째 페이지. v2 기준 실험 조건의 유의한 효과 미검출. 자발적 고사용이 외로움·정서 의존·문제적 사용 증가 및 사회화 감소와 "관련"(상관, 인과 아님). 음성 이점은 짧은 사용에서만.
- 교정: 상관 결과를 "제한하면 의존이 줄어든다"로 확장하지 않는다. 이 연구와 P97은 서로 다른 조사.
- 사용처: [[topic-app-paper-evidence]] · [[claim-bench-5-usage-limit-break-reminder]]
