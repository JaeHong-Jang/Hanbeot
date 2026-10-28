---
title: "src-eqbench-2026-leaderboard"
tags: ["benchmark", "empathy-dialogue", "eq-bench", "elo", "grade-B"]
created: 2026-10-25T07:26:12.809Z
updated: 2026-10-25T07:26:12.809Z
sources: ["https://arxiv.org/abs/2312.06281", "https://aiwiki.ai/wiki/eq-bench_3", "https://benchlm.ai/benchmarks/eqbench4", "https://eqbench.com/"]
links: ["topic-bench-empathy-dialogue.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-eqbench-2026-leaderboard

# src-eqbench-2026-leaderboard

## 서지
- EQ-Bench 원논문 arXiv 2312.06281 (2023); AI Wiki EQ-Bench 3 설명; BenchLM EQ-Bench 4 미러; 공식 eqbench.com.

## 수치
- 원논문: MMLU와 상관 r=0.97 (원래 EQ-Bench; 3/4 버전에 확대 금지).
- EQ-Bench 3 (2025-08): horizon-alpha 1568 Elo, o3 1500 앵커.
- EQ-Bench 4: 노트 "2026-07-20 스냅샷 Claude Fable 5 1349.5 > Kimi K3 1349.2 > GPT-5.5 1325.8". 검증 시점 미러는 **07-26 스냅샷: Opus 5 1385.0, Fable 5 1340.4, Kimi K3 1339.3**.

## 검증 결과 (2026-10-25 확인)
- r=0.97: **A**. EQ-Bench 3: **B** (공식 스냅샷 미확보). EQ-Bench 4 07-20 값: **C** (보존본 필요; 현재 미러 값과 다름).

## 사용처
- [[topic-bench-empathy-dialogue]]

