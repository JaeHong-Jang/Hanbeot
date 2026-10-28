---
title: "src-arxiv-2026-taste2-chatgpt-latency"
tags: ["benchmark", "voice-latency", "chatgpt-voice", "ttfa", "grade-A", "paper-evidence", "latency"]
created: 2026-10-25T07:27:20.317Z
updated: 2026-10-26T05:51:45.297Z
sources: ["https://arxiv.org/pdf/2609.08956"]
links: ["topic-bench-voice-latency.md", "bench-chatgpt-voice.md", "claim-bench-1-ttfa-target.md", "topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-arxiv-2026-taste2-chatgpt-latency

# src-arxiv-2026-taste2-chatgpt-latency

## 서지
- TASTE2 논문 (arXiv 2609.08956, 2026-09), Table 4 — 공식 ChatGPT 앱 음성 모드 실측.

## 수치
- 측정일 **2026-03-13**. ChatGPT Voice 평균 TTFA 약 **1,370ms** (범위 1,056–2,240ms), 5개 입력 길이 조건의 평균·범위. 모든 세션의 분포는 아님.

## 검증 결과 (2026-10-25 확인)
- 등급 **A**. 조건이 다른 Artificial Analysis 리더보드 값과 직접 비교 금지.

## 사용처
- [[topic-bench-voice-latency]] · [[bench-chatgpt-voice]] · [[claim-bench-1-ttfa-target]]

---

## Update (2026-10-26T05:51:45.297Z)

## 2026-10-26 논문 보강 (설계서 [P18])
- 수치: ChatGPT Voice 평균 TTFA 약 1,370ms (범위 1,056~2,240ms), 2026-03-13 측정, 영어. 등급 A.
- 교정(비평 §7-17): 평균값이며 측정 조건이 설계서 7.2 TTFA 정의와 다르다. "상용 앱보다 빠르다"는 삭제, 한벗 P50 목표와 직접 비교하지 않는다. 참고 맥락으로만 쓰고 한벗은 P50·P95를 자체 측정.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
