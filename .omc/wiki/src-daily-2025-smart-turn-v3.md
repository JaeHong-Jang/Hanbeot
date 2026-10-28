---
title: "src-daily-2025-smart-turn-v3"
tags: ["paper-evidence", "turn-detection", "grade-A", "korean"]
created: 2026-10-26T05:45:38.855Z
updated: 2026-10-26T05:45:38.855Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "claim-feedback-1-reflect-professor-round1.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-daily-2025-smart-turn-v3

## 서지
Daily, 2025, "Announcing Smart Turn v3 with CPU inference in just 12ms" (블로그, 벤더). https://www.daily.co/blog/announcing-smart-turn-v3-with-cpu-inference-in-just-12ms/ . 설계서 [P6].

## 수치
- 8M 파라미터, 약 8MB int8 ONNX, 입력 최대 8초, 23개 언어.
- 한국어 정확도 96.85%(표본 890), False Positives 1.12%, False Negatives 2.02%. 영어 94.31%(2,846).
- 전처리+추론 CPU: 12.6ms(c7a.2xlarge), 59.8ms(c8g.medium), 94.8ms(t3.medium); L40S 3.3ms.
- Vietnamese FP 14.84%로 최고.

## 검증 결과 (2026-10-26)
- 등급 A·벤더(자체 테스트셋). 독립 성능 검증이 아니다.
- 노트의 "한국어 수치 확인 불가"는 불일치(C). 같은 표에 FP 1.12%/FN 2.02%가 있다. 단 1.12%를 조건부 FPR로 바꿔 쓰지 않는다.
- Smart Turn 추론 시간이 TTFA에서 무시 가능하다는 주장, 학습 데이터 구성은 미확인(§4).
- "Silero 같은 VAD"와 쓰라는 표현이며 Silero 고정 요구가 아니다.

## 한벗 적용
- 설계서 5③의 "한국어 공개 수치 못 찾음"을 이 수치로 고친다.
- 한국어 고민 발화(머뭇거림 포함 50턴 이상)의 조기 종료율은 W2에 직접 잰다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]] · [[claim-feedback-1-reflect-professor-round1]]
