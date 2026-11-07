---
title: "src-hume-2025-evi3-launch"
tags: ["benchmark", "hume", "voice", "latency", "emotion", "grade-A", "evi3"]
created: 2026-10-25T07:15:41.490Z
updated: 2026-11-07T20:08:25.383Z
sources: ["https://www.hume.ai/blog/introducing-evi-3", "https://www.hume.ai/blog/announcing-evi-3-api", "https://venturebeat.com/ai/is-ais-next-big-leap-understanding-emotion-50m-for-hume-says-yes"]
links: ["bench-hume-evi.md", "topic-bench-voice-latency.md", "topic-bench-ser.md", "claim-bench-1-ttfa-target.md", "topic-dev-repos-voice-conversation-2026-11.md", "src-hume-2026-evi-overview.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-hume-2025-evi3-launch

# src-hume-2025-evi3-launch

## 서지
- Hume AI 블로그 "Introducing EVI 3" (2025-05-29), "Announcing EVI 3 API" (2025-07-17). 보조: VentureBeat (Expression Measurement 48차원).

## 수치
- EVI 3: 최신 하드웨어 기준 응답 지연 **<300ms** (네트워크·트래픽 포함 실사용 보장값 아님).
- 감정 이해 자체 평가: 사람이 연기한 9개 감정 중 8개에서 GPT-4o보다 우수 식별.
- Expression Measurement API: prosody 등 48개 expression 차원 측정. EVI 3 자체가 48감정을 출력한다는 확인은 없음.

## 검증 결과 (2026-10-25 확인)
- 발표일·<300ms·9중 8: 등급 **A** (공식). 노트의 "추정" 표시 제거 가능.
- 48차원: **B**. "EVI 3 = 48감정 출력" 아님: **B**.

## 사용처
- [[bench-hume-evi]] · [[topic-bench-voice-latency]] · [[topic-bench-ser]] · [[claim-bench-1-ttfa-target]]

---

## Update (2026-11-07T20:08:25.383Z)

## 2026-11-08 개발자 저장소 조사 반영
- 블로그(2025-05-29) 재사용 숫자: 체감 지연(사용자 말 끝~응답 시작) Gemini Live 약 1.5초, GPT-4o 실시간 약 2.6초, Sesame 약 1초, EVI 3 0.9~1.4초. 공급사 자체 측정(A, 독립 아님).
- 감정 이해: 9감정 중 8개에서 GPT-4o 우위(수치 미공개). 표현력: 30종 감정·스타일 지시를 사람이 1~5점.
- 평가 설계 차용: 같은 문장을 9감정으로 연기하게 해 모델이 맞히는지 보는 방식을 한국어 연기 코퍼스로 모사. [[topic-dev-repos-voice-conversation-2026-11]] · [[src-hume-2026-evi-overview]]

