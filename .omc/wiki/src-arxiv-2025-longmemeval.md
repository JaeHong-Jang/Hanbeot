---
title: "src-arxiv-2025-longmemeval"
tags: ["benchmark", "memory", "longmemeval", "iclr", "grade-A"]
created: 2026-10-25T07:26:41.424Z
updated: 2026-10-25T07:26:41.424Z
sources: ["https://arxiv.org/abs/2410.10813v2", "https://www.iclr.cc/virtual/2025/poster/28290", "https://github.com/xiaowu0162/LongMemEval"]
links: ["topic-bench-memory.md", "claim-bench-4-memory-consent-editing.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-arxiv-2025-longmemeval

# src-arxiv-2025-longmemeval

## 서지
- Wu et al., *LongMemEval* (ICLR 2025, arXiv 2410.10813) + 공식 저장소.

## 사실
- 5능력(정보추출·다세션 추론·시간 추론·지식 갱신·기권) **500문항**. S 버전 약 115K 토큰(Llama 3 토크나이저 기준), M 버전 약 500세션.
- 상용 어시스턴트·장문맥 LLM이 지속 상호작용에서 **약 30% 정확도 하락** (특정 실험 조건의 값).

## 검증 결과 (2026-10-25 확인)
- 등급 **A**. GPT-4o 공식 능력별 베이스라인은 미확인.

## 사용처
- [[topic-bench-memory]] · [[claim-bench-4-memory-consent-editing]]

