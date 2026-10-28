---
title: "src-mem0-2026-research-page"
tags: ["tech", "long-term-memory", "grade-B", "mem0", "zep", "vendor-self-report", "benchmark-reliability"]
created: 2026-10-25T07:15:58.381Z
updated: 2026-10-25T07:15:58.381Z
sources: ["https://mem0.ai/research", "https://mem0.ai/compare/mem0-vs-zep", "https://mem0.ai/blog/zep-vs-mem0-which-ai-memory-layer-should-you-choose", "https://braindetox.kr/en/posts/memory_benchmark_scores_reliability_2026.html"]
links: ["src-mem0-2025-locomo-paper.md", "claim-tech-2-memory-architecture.md", "topic-tech-long-term-memory.md", "src-zep-2025-graphiti.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-mem0-2026-research-page

# src-mem0-2026-research-page

## 서지정보
Mem0 공식 연구 페이지·경쟁사 비교 페이지(벤더 자체 보고) + BrainDetox 블로그(메모리 벤치마크 신뢰성 논란, 접근 실패).

## URL
- https://mem0.ai/research
- https://mem0.ai/compare/mem0-vs-zep
- https://mem0.ai/blog/zep-vs-mem0-which-ai-memory-layer-should-you-choose
- https://braindetox.kr/en/posts/memory_benchmark_scores_reliability_2026.html (접근 실패)

## 라이선스/상업 이용
해당 없음(마케팅/연구 페이지).

## 핵심 수치
- Mem0 자체 보고: LoCoMo **92.5**, LongMemEval **94.4**, BEAM 1M 64.1 / 10M 48.6 — 공식 비교 페이지에도 동일 4값 표시 (A, 자체 보고)
- "2026-05-20 갱신, 이전 판 91.6/93.4": **C** (과거 스냅샷 미확보)
- Mem0 비교 페이지 인용 Zep LongMemEval(GPT-4o) **71.2**: **B** (Zep 자체 원출처 아님)
- Zep 논란(75.14로 정정, 94.7은 GPT-5.4 judge, 단일 제품 점수 범위 58.44~94.7): **C** (BrainDetox 접근 실패, 경쟁사 페이지로 확정 불가)
- "다른 aggregator의 Zep 90.2": **C** (출처 URL 미제시)

## 검증 결과
- 핵심 메시지: **동일 제품의 LoCoMo 점수가 측정자·judge 모델에 따라 수십 점 차이** → 벤더 블로그 점수는 사업계획서 근거로 부적합. 논문 수치([[src-mem0-2025-locomo-paper]])와 섞지 말 것

## 한벗 적용 포인트
- 메모리 프레임워크 선택 근거는 벤더 점수가 아니라 (1) OSS 여부 (2) 논문 조건의 지연 (3) 블록 분리·삭제 API 구현 용이성으로 서술 → [[claim-tech-2-memory-architecture]]
- 관련: [[topic-tech-long-term-memory]], [[src-zep-2025-graphiti]]

확인일: 2026-10-25

