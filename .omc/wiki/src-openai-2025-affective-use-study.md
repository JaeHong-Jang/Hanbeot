---
title: "src-openai-2025-affective-use-study"
tags: ["benchmark", "openai", "chatgpt-voice", "loneliness", "paper", "grade-A", "app-design", "paper-evidence", "dependence"]
created: 2026-10-25T07:18:26.680Z
updated: 2026-10-26T05:53:27.890Z
sources: ["https://openai.com/index/affective-use-study/", "https://arxiv.org/html/2503.17473v1", "https://fortune.com/2025/03/24/chatgpt-making-frequent-users-more-lonely-study-openai-mit-media-lab", "https://openai.com/index/affective-use-study", "https://arxiv.org/abs/2503.17473"]
links: ["bench-chatgpt-voice.md", "claim-bench-5-usage-limit-break-reminder.md", "src-mit-openai-2025-affective-use-rct.md", "topic-bench-safety-eval.md", "overview-app-design.md", "topic-app-paper-evidence.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-openai-2025-affective-use-study

# src-openai-2025-affective-use-study

## 서지
- OpenAI × MIT Media Lab, "Investigating Affective Use and Emotional Well-being on ChatGPT" (공식 소개 openai.com/index/affective-use-study, 논문 arXiv 2503.17473, 2025-03). 2차: Fortune 2025-03-24, The Decoder, ISPR.

## 수치·결과
- 두 연구: (1) 약 4,000만 상호작용 대규모 관찰 분석, (2) RCT 4주, 분석 참가자 **981명**.
- 고사용량 ↔ 외로움·정서적 의존·문제적 사용 증가와 관련 (상관, 인과 아님).
- 음성: **사용시간이 짧을 때** 텍스트보다 외로움 완화에 유리, 장시간 사용에서 이점 감소. 중립 음성(neutral voice)의 장시간 사용은 사회적 교류·문제적 사용에서 불리.
- 이성 음성 이용자는 외로움·의존이 유의하게 높음 (관련성 분석; 무작위 배정 아님).
- 개인적 대화(personal)는 외로움↑이나 중간 사용량에서 **의존·문제적 사용은 낮음**; 비개인적(일반) 주제 대화는 의존↑.

## 검증 결과 (2026-10-25 확인)
- 연구 개요·사용량 결과·음성 결과·이성 음성·대화 유형: 등급 **A** (공식 해설·원논문 일치). "~1,000명"은 981명으로 정밀화.
- 노트 Inferences의 "개인 대화가 의존을 증가시킨다": **불일치/C** — 개인 대화와 일반 대화 결과를 분리해야 함.

## 한벗 시사점
- 음성 우위 가설은 "짧은 사용"에서만 지지 → 사용량 상한·휴식 알림·인간관계 연결 유도가 설계 요건. [[bench-chatgpt-voice]] · [[claim-bench-5-usage-limit-break-reminder]] · [[topic-bench-safety-eval]]

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-mit-openai-2025-affective-use-rct]]

---

## Update (2026-10-25T14:51:52.570Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S16] (등급 A, 독립연구(벤더 공동)). 사용: 고사용량과 외로움·의존 관련, 음성 이점은 짧은 사용에서. 조건: RCT 4주 981명 + 관찰 분석, 상관(인과 아님).
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지.
- 사용처: [[overview-app-design]] 의 1절. 관련: [[claim-bench-5-usage-limit-break-reminder]]

---

## Update (2026-10-26T05:53:27.890Z)

## 2026-10-26 논문 보강 (설계서 [P97])
- 수치: OpenAI 2025, "Investigating Affective Use and Emotional Well-being on ChatGPT", arXiv 2504.03888. 대규모 사용 분석 + 설문 4,076명. 고사용과 정서적 의존이 관련(상관).
- 교정: P90(MIT x OpenAI RCT)과 다른 조사이며 관찰 연구다. 인과로 쓰지 않는다.
- 사용처: [[topic-app-paper-evidence]] · [[claim-bench-5-usage-limit-break-reminder]]
