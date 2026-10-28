---
title: "src-wiepert-2024-voice-reidentification"
tags: ["paper-evidence", "privacy", "voice-biometric", "grade-A"]
created: 2026-10-26T05:50:28.364Z
updated: 2026-10-26T05:50:28.364Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-consent-privacy.md", "claim-app-6-consent-and-deletion.md", "claim-feedback-1-reflect-professor-round1.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-wiepert-2024-voice-reidentification

## 서지
Wiepert et al., 2024, "Reidentification of Participants in Shared Clinical Data Sets: Experimental Study", JMIR AI 3:e52054. https://ai.jmir.org/2024/1/e52054 . 설계서 [P85].

## 수치
- 비교 횟수와 오수락(FA) 건수 r=0.69.
- FA/TA 비율: 10^5회 비교 0.02, 6x10^6회 1.41 (약 3x10^6회에서 1:1).
- VoxCeleb 7,363명, Mayo 941명·19,195건. 영어 임상 음성.

## 검증 결과 (2026-10-26)
- 등급 A. 비평 반영(§7-1): 이전 해석("비교 횟수가 늘수록 재식별 위험 증가")은 원문과 반대였다. 탐색 공간이 커질수록 오매칭이 늘어 이 실험에서 재식별은 어려워졌다.
- 저자는 큰 탐색 공간에서 위험이 작고 화자식별 기술이 발전하면 상승할 수 있다고 본다.
- "STT 직후 폐기의 효과를 입증"은 아님: 원본 미저장은 팀의 설계 판단이다(§4).

## 한벗 적용
- 음성이 재식별 가능한 데이터라는 일반 배경. 원본 음성 미저장·voiceprint 미생성은 데이터 최소화 설계 판단이며 이 논문이 요구하지 않는다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-consent-privacy]] · [[claim-app-6-consent-and-deletion]] · [[claim-feedback-1-reflect-professor-round1]]
