---
title: "src-bai-2025-speakstream"
tags: ["paper-evidence", "tts", "latency", "grade-A"]
created: 2026-10-26T05:49:13.037Z
updated: 2026-10-26T05:49:13.037Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-dialogue-tts.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-bai-2025-speakstream

## 서지
Bai et al. (Apple), 2025, "SpeakStream", arXiv 2505.19206. https://arxiv.org/abs/2505.19206 . 설계서 [P58].

## 수치
- LLM 텍스트 스트림에서 점진적으로 음성 생성, 첫 토큰 지연 SOTA를 주장(초록에 수치 없음). 영어 LJSpeech 단일 화자.

## 검증 결과 (2026-10-26)
- 등급 A. "문장 경계 청킹이 운율에, 절 단위가 지연에 유리"는 출처 없음(§4).

## 한벗 적용
- 문장 단위 집계의 대안 구조 사례. 한국어·다화자 효과는 미확인.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-dialogue-tts]]
