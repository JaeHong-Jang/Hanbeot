---
title: "topic-bench-memory"
tags: ["benchmark", "memory", "longmemeval", "locomo", "membench", "grade-A"]
created: 2026-10-25T07:36:02.625Z
updated: 2026-10-25T07:36:02.625Z
sources: []
links: ["src-arxiv-2025-longmemeval.md", "src-mastra-2025-longmemeval-rag.md", "src-arxiv-2026-agent-zero-memory.md", "src-hindsight-2026-memory-benchmark.md", "src-mem0-2026-state-of-memory.md", "src-acl-2025-membench.md", "src-arxiv-2026-speech-emotion-papers.md", "src-replika-2026-help-memory.md", "src-nomi-2026-mind-map.md", "src-kindroid-2026-subscription-docs.md", "claim-bench-4-memory-consent-editing.md", "overview-benchmark.md", "overview-technology.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-bench-memory

# topic-bench-memory

> 장기 기억(agent memory) 벤치마크와 SOTA(2026-10 기준). 한벗 핵심 기능 ③(동의 기반 기억 관리)의 기술 측정 기준.

## 벤치마크 목록

| 벤치마크 | 구성 | SOTA / 기준 (시점, 자기보고) | 근거 |
|---|---|---|---|
| LongMemEval (ICLR 2025) | 5능력(정보추출·다세션 추론·시간 추론·지식 갱신·기권) 500문항; S ~115K 토큰, M ~500세션 | 논문: 지속 상호작용에서 ~30% 하락. gpt-4o+Mastra RAG 63.41–73.98% (topK 2/5; topK 20에서 80%), 시간 추론 35.3–61.7%. 2026: Agent Zero **95.60**, Mastra 94.87, Hindsight 94.6 (v0.4.19), Mem0 94.4, Zep 71.20 | [[src-arxiv-2025-longmemeval]] (A), [[src-mastra-2025-longmemeval-rag]] (A), [[src-arxiv-2026-agent-zero-memory]] (A/B), [[src-hindsight-2026-memory-benchmark]] (A), [[src-mem0-2026-state-of-memory]] (A) |
| LoCoMo | 장기 대화 QA | Agent Zero 93.60, Mem0 92.50, ByteRover 2.0 92.20 (B); Zep 94.7·ZeroMemory 96.1 (C) | [[src-arxiv-2026-agent-zero-memory]] (A/B), [[src-mem0-2026-state-of-memory]] (A/C) |
| MemBench (ACL Findings 2025) | 사실적 vs **반성적 기억**, 참여/관찰, 1K/10K/100K+노이즈, 7 메커니즘 | MemoryBank·GenerativeAgent는 반성적 기억 취약; FullMemory·RecentMemory 100K 급락 | [[src-acl-2025-membench]] (A) |
| BEAM-1M / 10M | 초대규모 컨텍스트 | Mem0 64.1% / 48.6% — 급락 | [[src-mem0-2026-state-of-memory]] (A) |
| AgentMemBench / StreamMemBench / DolphinBench / 비용 인지 평가 (2026) | 파생 벤치마크 | 신규 | [[src-arxiv-2026-speech-emotion-papers]] (A) |

## 포화 경고
- "전부 컨텍스트에 넣기"가 LoCoMo·LongMemEval 대부분에서 경쟁력 → 두 벤치마크의 93–96%는 변별력이 낮음(완전 포화는 합의 사실 아님) ([[src-hindsight-2026-memory-benchmark]]).

## 제품 측 기억 UI 선례
- Replika: 열람·삭제(공식) [[src-replika-2026-help-memory]]; Nomi: Mind Map 열람·편집·추가(공식) [[src-nomi-2026-mind-map]]; Kindroid: 사용자 작성 backstory·journal [[src-kindroid-2026-subscription-docs]].

## 한벗 권장 측정
1. LongMemEval-S 5능력별 정확도 — 특히 **시간 추론·지식 갱신·기권**(가장 약한 능력이며 "기억 수정 후 일관성"과 직결).
2. MemBench 반성적 기억 — "추정 감정" 기억의 정확도.
3. 자체 지표: 사용자 동의/편집/삭제 후 **갱신 일관성**(수정된 사실을 다시 꺼내지 않는 비율) → [[claim-bench-4-memory-consent-editing]].

관련: [[overview-benchmark]] · [[overview-technology]]

