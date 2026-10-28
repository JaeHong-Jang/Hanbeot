---
title: "claim-bench-1-ttfa-target"
tags: ["benchmark", "claim", "voice-latency", "ttfa", "grade-B"]
created: 2026-10-25T07:38:54.910Z
updated: 2026-10-25T07:38:54.910Z
sources: []
links: ["src-coval-2026-voice-latency.md", "src-arxiv-2026-taste2-chatgpt-latency.md", "src-hume-2025-evi3-launch.md", "src-artificialanalysis-2026-s2s-leaderboard.md", "topic-bench-voice-latency.md", "overview-benchmark.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-bench-1-ttfa-target

# claim-bench-1-ttfa-target

## 주장 (사업계획서용)
> 한벗의 음성 응답 지연(발화 종료→첫 오디오 재생) 목표는 **p50 < 500ms, p95 < 1,000ms**이며, 이는 범용 ChatGPT Voice 앱 실측(평균 1,370ms, 2026-03)보다 빠르고 인간 대화 응답 간격(~400–500ms)에 근접하는 수준이다.

## 근거
- 인간 대화 응답 ~400ms, 1초 초과 시 어색 — [[src-coval-2026-voice-latency]] (B, 공급사 지침)
- ChatGPT Voice 앱 평균 TTFA 1,370ms (1,056–2,240ms), 2026-03-13 — [[src-arxiv-2026-taste2-chatgpt-latency]] (A)
- Hume EVI 3 <300ms (최신 하드웨어) — [[src-hume-2025-evi3-launch]] (A)
- S2S 리더보드 0.04–0.57s (2026-10 조회) — [[src-artificialanalysis-2026-s2s-leaderboard]] (A)
- TTS 단계 중앙값 519ms, 최저 103ms (2026-07) — [[src-coval-2026-voice-latency]] (A)

## 등급
- 목표값 자체: **C** (한벗 제안값, 외부 검증 성능 아님). 비교 기준 수치: A/B.

## 검증 방법
- MVP에서 p50/p95를 네트워크·입력 길이 조건 병기해 측정. TTS 단계만 519ms 중앙값이므로 p50 <500ms는 **스트리밍 TTS + 저지연 모델** 없이는 달성 어려움 → 미달 시 p50 <800ms로 조정 후 공개.

관련: [[topic-bench-voice-latency]] · [[overview-benchmark]]

