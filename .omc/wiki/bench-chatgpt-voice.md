---
title: "bench-chatgpt-voice"
tags: ["benchmark", "openai", "chatgpt-voice", "safety", "dependency", "grade-A"]
created: 2026-10-25T07:32:22.104Z
updated: 2026-10-25T07:32:22.104Z
sources: []
links: ["src-micdrop-2026-gpt-live.md", "src-openai-2025-sycophancy-rollback.md", "src-openai-2025-sensitive-conversations.md", "src-openai-2026-realtime-api-pricing.md", "src-arxiv-2026-taste2-chatgpt-latency.md", "src-openai-2025-affective-use-study.md", "src-openai-2026-retiring-gpt4o.md", "src-ftc-2025-companion-chatbot-inquiry.md", "claim-bench-3-safety-protocol.md", "claim-bench-5-usage-limit-break-reminder.md", "claim-bench-1-ttfa-target.md", "overview-benchmark.md", "topic-bench-safety-eval.md", "topic-bench-voice-latency.md", "src-google-2026-gemini-live-api-pricing.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# bench-chatgpt-voice

# bench-chatgpt-voice

> 범용 어시스턴트지만 정서적 의존·안전 평가의 가장 풍부한 1차 자료를 공개한 사례. 음성 모드 실측 지연의 기준점.

| 항목 | 내용 | 근거 |
|---|---|---|
| 회사/국가/출시 | OpenAI / 미국 / Advanced Voice 2024 → GPT-Live(full-duplex) 2026-07-08 | [[src-micdrop-2026-gpt-live]] (B) |
| 모달리티 | 텍스트, 음성 full-duplex | [[src-micdrop-2026-gpt-live]] (B) |
| 기억 기능 | 계정 메모리 | — |
| 감정 기능 | 명시적 기능 없음; 2025-04 아첨(sycophancy) 업데이트 롤백 | [[src-openai-2025-sycophancy-rollback]] (A) |
| 안전 기능 | 170+ 임상가 평가셋, 패널 일치도 71–77%, 바람직하지 않은 응답 65–80% 감소(자체), 장시간 대화 휴식 알림, Model Spec 인간관계 존중 규칙 | [[src-openai-2025-sensitive-conversations]] (A/B) |
| 가격 | Plus $20/월, GPT-Live 일 3시간(2차); API gpt-realtime-2.1 오디오 $32/$64 per M tokens, mini $10/$20 | [[src-micdrop-2026-gpt-live]] (B), [[src-openai-2026-realtime-api-pricing]] (A) |
| 지표 | WAU 0.15% 자살 계획·의도 지표, 0.07% 정신병·조증 징후(2025-10, 자동 탐지 추정); 앱 음성 TTFA 평균 1,370ms(2026-03-13 실측) | [[src-openai-2025-sensitive-conversations]] (A), [[src-arxiv-2026-taste2-chatgpt-latency]] (A) |
| 연구 | MIT×OpenAI(2025-03): 고사용량↔외로움·의존; 음성은 짧은 사용에서 유리, 장시간 이점 소멸(특히 중립 음성); 이성 음성·개인 대화 결과는 조건부 | [[src-openai-2025-affective-use-study]] (A) |
| 사건·규제 | GPT-4o ChatGPT 퇴역 2026-02-13(일 선택 이용자 0.1%); 소송 8–13건(C); FTC 6(b) 대상 | [[src-openai-2026-retiring-gpt4o]] (A/C), [[src-ftc-2025-companion-chatbot-inquiry]] (A) |

## 우선 수정
- "불일치 29%" → 23–29% (일치도 71–77%). "개인 대화가 의존 증가" → 개인 대화는 외로움↑, 의존은 일반 주제에서↑로 분리.

## 한벗 차별점 / 배울 점
- 한벗 안전 평가는 OpenAI 방식(임상가 패널·영역별 바람직 응답률)을 축소 재현: 한국 정신건강 전문가 3–5명 패널 → [[claim-bench-3-safety-protocol]].
- 음성 우위는 "짧은 사용"에서만 → 사용량 상한·휴식 알림 → [[claim-bench-5-usage-limit-break-reminder]].
- 지연: 1,370ms는 범용 앱 수준. 한벗은 p50 <500ms 목표로 체감 차별화 → [[claim-bench-1-ttfa-target]].

관련: [[overview-benchmark]] · [[topic-bench-safety-eval]] · [[topic-bench-voice-latency]] · [[src-google-2026-gemini-live-api-pricing]]

