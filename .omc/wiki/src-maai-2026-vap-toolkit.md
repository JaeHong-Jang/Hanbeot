---
title: "src-maai-2026-vap-toolkit"
tags: ["maai", "vap", "turn-taking", "backchannel", "no-korean", "grade-A"]
created: 2026-11-07T20:07:45.079Z
updated: 2026-11-07T20:07:45.079Z
sources: ["https://github.com/MaAI-Kyoto/MaAI"]
links: ["src-ekstedt-2022-vap.md", "src-inoue-2024-multilingual-vap.md", "topic-dev-repos-voice-conversation-2026-11.md", "claim-app-12-interruption-backchannel-filler-rules.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-maai-2026-vap-toolkit

## 서지
MaAI-Kyoto/MaAI (Voice Activity Projection 툴킷, GitHub README). 조회 2026-11-08.

## 수치·기능
- VAP 기반 턴테이킹·맞장구·고개 끄덕임 예측, CPU 가능, 1채널/2채널(A).
- 지원 언어 **영어·중국어·일본어**만.
- 발화 중 맞장구(VAP)는 maisterr/pipecat-backchannel의 로드맵 항목.

## 라이선스
미확인(C).

## 검증 결과
언어 범위 A. 한국어 모델 부재를 "세계적 부재"로 확대하지 말 것(조사 범위 내 미발견, C).

## 한벗 적용
한국어 발화 중 맞장구 예측은 KEMDy20 자유 대화로 별도 학습해야 하는 연구 과제. 선행 논문 [[src-ekstedt-2022-vap]]·[[src-inoue-2024-multilingual-vap]].

## 사용처
[[topic-dev-repos-voice-conversation-2026-11]] · [[claim-app-12-interruption-backchannel-filler-rules]]

