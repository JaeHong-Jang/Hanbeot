---
title: "src-daily-2026-pipecat-latency-posts"
tags: ["daily", "pipecat", "smart-turn", "turn-detection", "blog", "grade-A"]
created: 2026-11-07T20:07:47.418Z
updated: 2026-11-07T20:07:47.418Z
sources: ["https://www.daily.co/blog/smart-turn-v3-2-handling-noisy-environments-and-short-responses/"]
links: ["src-daily-2025-smart-turn-v3.md", "topic-dev-repos-voice-conversation-2026-11.md", "src-pipecat-2026-smart-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-daily-2026-pipecat-latency-posts

## 서지
Daily, "Smart Turn v3.2: handling noisy environments and short responses" (2026-01-07). 조회 2026-11-08. 이전 버전 정리는 [[src-daily-2025-smart-turn-v3]].

## 수치·기능
- 짧은 발화("yes", "okay") 오분류 40% 감소(A).
- 모델 CPU 8MB / GPU 32MB, 원시 오디오 기반.
- 카페·사무실 소음 학습 데이터 추가, **가중치·데이터·학습 코드 전부 공개**, 패딩 버그를 커뮤니티 제보로 수정.
- 한국어 정확도는 글에 없음.

## 라이선스
BSD-2(노트 기재).

## 검증 결과
수치 A(공급사 자체 보고). Daily의 "voice AI latency" 글은 이번에 열람하지 않음(미확인). "한벗이 이미 Smart Turn v3 채택"은 내부 현황 주장으로 외부 확인 불가(C).

## 한벗 적용
한국어 짧은 응답 세트로 TNR 자체 측정. 공개 데이터 형식으로 평가·기여 가능.

## 사용처
[[topic-dev-repos-voice-conversation-2026-11]] · [[src-pipecat-2026-smart-turn]]

