---
title: "topic-bench-empathy-dialogue"
tags: ["benchmark", "empathy-dialogue", "esconv", "emobench", "eq-bench", "grade-A"]
created: 2026-10-25T07:35:54.235Z
updated: 2026-10-25T07:35:54.235Z
sources: []
links: ["src-acl-2021-esconv.md", "src-arxiv-2024-esc-strategy-bias.md", "src-acl-2025-esc-judge.md", "src-arxiv-2026-heart-benchmark.md", "src-acl-2019-empathetic-dialogues.md", "src-acl-2024-emobench.md", "src-github-2026-emobench-m.md", "src-eqbench-2026-leaderboard.md", "src-arxiv-2026-speech-emotion-papers.md", "overview-hanbeot-project.md", "overview-benchmark.md", "topic-bench-ser.md", "topic-bench-safety-eval.md", "claim-bench-8-emotion-cue-as-question.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-bench-empathy-dialogue

# topic-bench-empathy-dialogue

> 공감·정서지원 대화 능력을 측정하는 학술 벤치마크와 SOTA(2026-10 기준).

## 벤치마크 목록

| 벤치마크 | 구성 | SOTA / 기준 (시점) | 근거 |
|---|---|---|---|
| ESConv (ACL 2021) | Helping Skills 기반 8전략 주석 정서지원 대화셋 | LLM은 특정 전략에 편향, 전략 선택 정확도 낮음 (ACL 2024, arXiv 2402.13211). gold-match 지표 한계 논의 | [[src-acl-2021-esconv]] (A), [[src-arxiv-2024-esc-strategy-bias]] (A) |
| ESC-Judge (EMNLP 2025) | 이론 기반 정서지원 에이전트 비교 판정 프레임워크 | 리더보드 아님 | [[src-acl-2025-esc-judge]] (A) |
| HEART (2026-01) | ESConv 기반 280 regular + 20 adversarial supporter turn 평가; safety-critical 항목 제외 | 인간·LLM 공통 평가 | [[src-arxiv-2026-heart-benchmark]] (A) |
| EmpatheticDialogues (ACL 2019) | 32감정 라벨 공감 대화셋 | 학습·평가 데이터로 사용 | [[src-acl-2019-empathetic-dialogues]] (A) |
| EmoBench (ACL 2024) | 400개 수작업 객관식(영·중), 이해+적용 | — | [[src-acl-2024-emobench]] (A) |
| EmoBench-M (2025 / MM 2026) | 13 시나리오, 27 MLLM | **Gemini-3.0-Pro 70.5 > GPT-5.2 66.5 > Gemini-3.0-Flash 65.5** (README, 2026-10 조회); 인간과 큰 격차 | [[src-github-2026-emobench-m]] (A) |
| EQ-Bench 3/4 | Elo 기반 정서지능 | EQ-Bench 3 (2025-08) horizon-alpha 1568 (B); EQ-Bench 4 07-26 스냅샷 Opus 5 1385.0 (노트의 07-20 값은 C) | [[src-eqbench-2026-leaderboard]] (B/C) |
| EmoS / EIBench (2026) | SLM 정서지능 평가·정렬 / 시뮬레이터 기반 감정 관리 | 신규, 수치 미인용 | [[src-arxiv-2026-speech-emotion-papers]] (A) |

## 우선 수정
- "Madani & Srihari SICon 2025 gold-match 비판" → 2025.sicon-1.3은 DecepBench(다른 논문). 삭제 또는 교체.
- "2025 연구" → ACL 2024 (2402.13211v2).
- HEART는 위기 대응 벤치마크가 아님.

## 한벗 권장 측정
1. EmoBench 한국어 번역판 정확도 (기본 LLM 선택 기준).
2. ESConv 8전략 분포 측정 → "들어줘/조언/정리" 모드별로 전략 편향이 의도와 일치하는지 확인.
3. EQ-Bench류 Elo는 모델 선택 참고용으로만(자체 측정 어려움).
4. 한국어 공감 평가는 인간 평정(대학생 30명 테스트)이 1차 지표 → [[overview-hanbeot-project]].

관련: [[overview-benchmark]] · [[topic-bench-ser]] · [[topic-bench-safety-eval]] · [[claim-bench-8-emotion-cue-as-question]]

