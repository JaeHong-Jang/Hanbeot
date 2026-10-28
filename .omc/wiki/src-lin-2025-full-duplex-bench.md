---
title: "src-lin-2025-full-duplex-bench"
tags: ["paper-evidence", "barge-in", "turn-detection", "latency", "grade-A"]
created: 2026-10-26T05:46:29.338Z
updated: 2026-10-26T05:46:29.338Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "claim-feedback-1-reflect-professor-round1.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-lin-2025-full-duplex-bench

## 서지
Lin et al., 2025, "Full-Duplex-Bench" (v3), ASRU. https://arxiv.org/abs/2503.04721 . 설계서 [P13].

## 수치
- 끼어들기 후 응답 지연: Moshi 0.257s, Gemini Live 1.183s, Freeze-Omni 1.409s, dGSLM 2.531s.
- 일시정지 TOR: Gemini Live 0.255~0.310, Moshi 0.985·0.980.
- 백채널 빈도: dGSLM 0.015, Gemini 0.012. 영어.

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 "cascade 직접 비교 아님"은 불일치(C): Freeze-Omni는 cascaded full-duplex system. 단 한벗과 동일 구성은 아니라는 제한은 타당.
- 지표는 응답 지연이며 TTS 중단 시간이 아니다. "1초 이내 중단·재응답" 목표의 근거가 아니다(§4, 1초는 자체 목표).

## 한벗 적용
- 상용 모델도 끼어들기 후 1초 넘게 걸린다는 참고 맥락. 끼어들기 기본 ON 방향을 지지(수치 목표는 자체 측정).

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]] · [[claim-feedback-1-reflect-professor-round1]]
