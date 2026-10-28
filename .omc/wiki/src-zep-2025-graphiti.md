---
title: "src-zep-2025-graphiti"
tags: ["tech", "long-term-memory", "grade-A", "zep", "graphiti", "knowledge-graph", "vendor-self-report"]
created: 2026-10-25T07:16:01.978Z
updated: 2026-10-25T07:16:01.978Z
sources: ["https://arxiv.org/abs/2501.13956"]
links: ["src-mem0-2025-locomo-paper.md", "claim-tech-2-memory-architecture.md", "topic-tech-long-term-memory.md", "src-mem0-2026-research-page.md", "src-wu-2024-longmemeval.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-zep-2025-graphiti

# src-zep-2025-graphiti

## 서지정보
Rasmussen et al. (Zep), "Zep: A Temporal Knowledge Graph Architecture for Agent Memory", arXiv 2501.13956 (2025-01-20). **Zep 자체 연구.**

## URL
- https://arxiv.org/abs/2501.13956

## 라이선스/상업 이용
- Graphiti(그래프 엔진)는 오픈소스(Apache 2.0, GitHub getzep/graphiti — 검증 범위 밖, 별도 확인). Zep Cloud는 상용.

## 핵심 수치
- DMR 벤치마크 **94.8%** vs MemGPT 93.4%
- LongMemEval에서 baseline 대비 최대 **18.5%** 정확도 향상, 응답 지연 **90%** 감소 (절대값 미제시; baseline·개선율 정의 유지 필요)

## 검증 결과
- 등급 **A** (초록과 일치). 자체 보고. Mem0 논문에서 측정한 Zep 65.99/2.926s([[src-mem0-2025-locomo-paper]])와는 조건이 다름

## 한벗 적용 포인트
- 시간 인식(temporal) 지식그래프는 "사실이 바뀌었을 때(예: 전공 변경, 관계 변화)" 이력을 유지하는 데 유리 → 한벗의 `user_stated` 블록 갱신 이력 설계 참고 → [[claim-tech-2-memory-architecture]]
- MVP에는 과도(그래프 저장 토큰 600k+, p95 2.9s) → 후순위 → [[topic-tech-long-term-memory]]
- 관련: [[src-mem0-2026-research-page]], [[src-wu-2024-longmemeval]]

확인일: 2026-10-25

