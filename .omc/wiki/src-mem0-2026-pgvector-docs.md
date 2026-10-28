---
title: "src-mem0-2026-pgvector-docs"
tags: ["app-design", "grade-A", "mem0", "pgvector", "memory"]
created: 2026-10-25T14:49:26.080Z
updated: 2026-10-25T14:49:26.080Z
sources: ["https://docs.mem0.ai/components/vectordbs/dbs/pgvector"]
links: ["overview-app-design.md", "src-mem0-2025-locomo-paper.md", "claim-tech-2-memory-architecture.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-mem0-2026-pgvector-docs

# src-mem0-2026-pgvector-docs
## 서지정보
Mem0, 문서 pgvector 벡터 DB 설정, 발행일 미표기, https://docs.mem0.ai/components/vectordbs/dbs/pgvector, 확인일 2026-10-25, 유형 공식문서
## 핵심 수치·사실 (설계서에서 쓴 것)
- pgvector 설정, metadata 예제
## 검증 결과
- 등급 A. 검증표(implementation_refs) 정정: "`embedding_model_dims`는 필수"는 불일치 -> 기본값 1536, 공식 예제도 생략(임베딩 차원 일치는 별도 요구). `metadata={"block":...}` 블록 구분은 타당한 추론(B)이나 Letta 컨텍스트 블록과 동일 기능 아님. metadata 필터 문법 "미확인"은 현재 문서에 Enhanced Metadata Filtering 링크가 있어 재확인 필요.
## 사용처
- [[overview-app-design]] 의 5절 ⑧(메모리)
- 관련: [[src-mem0-2025-locomo-paper]], [[claim-tech-2-memory-architecture]]
