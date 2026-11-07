---
title: "src-wang-2024-freeze-omni"
tags: ["full-duplex", "turn-taking", "paper-evidence", "grade-A", "scopus-2026-11"]
created: 2026-11-07T19:50:43.858Z
updated: 2026-11-07T19:50:43.858Z
sources: []
links: ["topic-dialogue-dynamics-evidence-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-wang-2024-freeze-omni

# src-wang-2024-freeze-omni
## 서지
Wang (Xiong Wang) et al., 2024, Freeze-Omni, arXiv 2411.00774. 제1저자는 Xiong Wang이므로 성 기준 인용은 Wang et al.
## 수치
Qwen2-7B 고정 + 스트리밍 음성 인코더 350M + 음성 디코더 120M, Silero VAD + 3상태(계속 듣기/끼어들기/정상 종료) 분류. 지연 평균 745ms, 중앙 753ms, P90 1,020ms(서버 내부), 네트워크 포함 약 1.2s 추정. 엔드포인트->상태 판정 160~320ms. TriviaQA 53.88 vs 텍스트 63.93.
## 검증 결과
A. 듀플렉스 정책 정확도 수치 없음(FDB가 외부 평가: 끼어들기 응답 지연 1.409s, 맞장구 Resume 0.80).
## 한벗 적용
가장 가까운 모방 대상: VAD 시작 -> 청크 스트리밍 -> 3상태 판정을 Smart Turn+STT 중간 결과로 근사.
## 사용처
[[topic-dialogue-dynamics-evidence-2026-11]]

