---
title: "src-stivers-2009-turn-taking-universals"
tags: ["paper-evidence", "latency", "turn-detection", "grade-A", "korean", "turn-taking"]
created: 2026-10-26T05:46:32.963Z
updated: 2026-11-07T19:51:33.527Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "claim-feedback-1-reflect-professor-round1.md", "topic-dialogue-dynamics-evidence-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-stivers-2009-turn-taking-universals

## 서지
Stivers et al., 2009, "Universals and cultural variation in turn-taking in conversation", PNAS 106(26). https://doi.org/10.1073/pnas.0903616106 . 설계서 [P15].

## 수치
- 10개 언어(한국어 포함) 모두 겹침 회피·침묵 최소화.
- 언어별 평균은 교차언어 평균 ±250ms 안팎. 본문 전체 평균 208ms.

## 검증 결과 (2026-10-26)
- 등급 A. 언어별 평균의 차이이며 개별 대화의 변동 범위가 아니다.
- "인간보다 느리니 1초 TTFA 달성 불가"는 불일치(C), 논리적 비약.

## 한벗 적용
- 참고 맥락으로만 사용. TTFA 1.0s 목표는 유지하고 설계서 7.2 정의로 P50·P95를 직접 잰다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]] · [[claim-feedback-1-reflect-professor-round1]]

---

## Update (2026-11-07T19:51:33.527Z)

## 2026-11-08 원문 확인
- 10개 언어 평균 +208ms, 중앙값 +100ms, 최빈값 0ms. 덴마크어 +469, 일본어 +7, 이탈리아어 +310. 주로 극성 질문-응답의 offset이라 TTFA와 동일 지표 아님.
- 한국어는 본문에 수치 문장이 없으나 Levinson & Torreira 종설이 Stivers를 인용해 182ms를 제시(B, 2차 인용).
- 사용처: [[topic-dialogue-dynamics-evidence-2026-11]]

