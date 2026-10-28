---
title: "src-mastra-2025-longmemeval-rag"
tags: ["benchmark", "memory", "longmemeval", "rag", "grade-A"]
created: 2026-10-25T07:26:50.179Z
updated: 2026-10-25T07:26:50.179Z
sources: ["https://mastra.ai/blog/use-rag-for-agent-memory"]
links: ["topic-bench-memory.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-mastra-2025-longmemeval-rag

# src-mastra-2025-longmemeval-rag

## 서지
- Mastra 블로그 "Use RAG for agent memory" (2025), LongMemEval 재현 결과.

## 수치
- gpt-4o + Mastra 메모리(RAG): 전체 63.41–73.98% (topK 2 vs 5), 시간 추론 35.3–61.7%. 같은 글에서 **topK 20일 때 80%**도 보고 → 위 범위를 "최고값 범위"처럼 쓰면 안 됨.

## 검증 결과 (2026-10-25 확인)
- 등급 **A** (결과 블록 확인). 시간 추론이 가장 약한 능력임을 보여줌.

## 사용처
- [[topic-bench-memory]]

