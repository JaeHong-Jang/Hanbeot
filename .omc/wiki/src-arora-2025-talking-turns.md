---
title: "src-arora-2025-talking-turns"
tags: ["paper-evidence", "barge-in", "turn-detection", "grade-A", "turn-taking"]
created: 2026-10-26T05:46:31.167Z
updated: 2026-11-07T19:51:31.066Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "topic-dialogue-dynamics-evidence-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-arora-2025-talking-turns

## 서지
Arora et al., 2025, "Talking Turns", ICLR. https://arxiv.org/abs/2503.01174 . 설계서 [P14].

## 수치
- 오디오 기반 모델은 말할 때를 잘 모르고, 과도하게 끼어들며, 백채널을 거의 내지 않는다. 영어 Switchboard.

## 검증 결과 (2026-10-26)
- 등급 A. 한국어 "응/음" 정책을 검증한 연구는 아니다(§4).

## 한벗 적용
- "백채널에 TTS를 끊지 않는다" 정책의 간접 근거(방향만). 한국어 오중단율은 W2에 따로 잰다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]

---

## Update (2026-11-07T19:51:31.066Z)

## 2026-11-08 원문 확인
- 백채널 비율: 사람 0.30%(도메인 내), Moshi·캐스케이드 0.01%. 사용자 연구 11명(Moshi 약 4h05m, 캐스케이드 3h35m).
- 59.4%(캐스케이드)/17.4%(Moshi)는 **끼어든 사용자가 발언권을 얻은 비율**(AI가 넘겨받은 비율 아님). 끼어들기 자체가 0.1%라 신뢰구간 큼.
- 데이터는 Switchboard·Columbia Games·Fisher 등(Candor와 혼동 정정). Whisper+GPT-4o 턴 전환 이해 66.3%.
- 사용처: [[topic-dialogue-dynamics-evidence-2026-11]]

