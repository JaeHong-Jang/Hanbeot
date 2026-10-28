---
title: "src-levinson-2015-turn-timing"
tags: ["paper-evidence", "latency", "turn-detection", "grade-A"]
created: 2026-10-26T05:46:35.319Z
updated: 2026-10-26T05:46:35.319Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-levinson-2015-turn-timing

## 서지
Levinson & Torreira, 2015, "Timing in turn-taking and its implications for processing models of language", Frontiers in Psychology 6:731. https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00731/full . 설계서 [P16].

## 수치
- 턴 간격 약 200ms, 발화 생성 지연 600ms 이상 → 화자는 상대 턴 끝을 예측해 미리 준비한다.

## 검증 결과 (2026-10-26)
- 등급 A. 인간 간격과의 직접 비교로 "달성 불가"를 결론짓는 것은 불일치(C).

## 한벗 적용
- 예측적 엔드포인팅의 이론적 참고. LLM 선행 생성의 효능 근거는 아니다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
