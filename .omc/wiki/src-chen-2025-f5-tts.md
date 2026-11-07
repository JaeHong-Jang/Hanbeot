---
title: "src-chen-2025-f5-tts"
tags: ["tts", "paper-evidence", "grade-A", "scopus-2026-11"]
created: 2026-11-07T19:49:04.883Z
updated: 2026-11-07T19:49:04.883Z
sources: []
links: ["topic-tts-humanlike-evidence-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-chen-2025-f5-tts

# src-chen-2025-f5-tts
## 서지
F5-TTS, arXiv 2410.06885. 흐름매칭 DiT, Sway Sampling. 100K시간 공개.
## 수치
CMOS(GT=0) en +0.31(32NFE)/zh +0.21, SMOS 3.89/3.83, WER 1.83/1.56, RTF 0.15(16NFE)/0.31(32NFE, 3090), 20명.
## 검증 결과
A. CMOS가 GT보다 높은 것은 "사람 초과"가 아니라 평가 천장·참조 음질 영향일 수 있음. 감정 제어 없음. 한국어 가중치는 CC-BY-NC.
## 한벗 적용
CoreaSpeech의 베이스. NFE가 늘면 RTF가 늘지만 RTF는 첫 패킷 지연이 아님.
## 사용처
[[topic-tts-humanlike-evidence-2026-11]]

