---
title: "src-letta-2025-memory-blocks"
tags: ["tech", "long-term-memory", "grade-A", "letta", "memgpt", "memory-blocks", "user-editable", "app-design"]
created: 2026-10-25T07:16:05.732Z
updated: 2026-10-25T14:52:39.039Z
sources: ["https://docs.letta.com/concepts/memory-management", "https://docs.letta.com/guides/agents/architectures/memgpt", "https://docs.letta.com/v1-sdk/memory/memory-blocks", "https://docs.letta.com/guides/core-concepts/memory/memory-blocks"]
links: ["claim-tech-2-memory-architecture.md", "topic-tech-long-term-memory.md", "src-mem0-2025-locomo-paper.md", "claim-tech-6-sensitive-data-consent.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-letta-2025-memory-blocks

# src-letta-2025-memory-blocks

## 서지정보
Letta(구 MemGPT) 공식 문서: memory management 개념, MemGPT 아키텍처, 현행 memory blocks SDK 문서.

## URL
- https://docs.letta.com/concepts/memory-management
- https://docs.letta.com/guides/agents/architectures/memgpt
- https://docs.letta.com/v1-sdk/memory/memory-blocks (현행)

## 라이선스/상업 이용
- Letta 서버 오픈소스(Apache 2.0, GitHub letta-ai/letta — 검증 범위 밖, 별도 확인). 클라우드는 상용.

## 핵심 수치/구조
- 메모리 계층: **core memory**(컨텍스트 내 read-write memory blocks, 기본 `human`/`persona` 블록), **archival memory**(vector DB), **recall memory**(대화 이력 로그)
- 에이전트가 도구로 블록을 직접 읽기·수정 (현행 문서에서 human/persona와 읽기·수정 API 확인)
- 도구명 `block_append / block_replace / block_read / block_summarize`: **C** — 메모리 편집 기능은 확인되나 제시된 네 식별자를 그대로 확인하지 못함. **버전 고정 필요**

## 검증 결과
- 계층 구조·블록 개념: 등급 **A**. 도구명: **C**
- Letta·LangMem의 LongMemEval 공식 점수 "Not published"(Keywords AI 인용): **C** (현재 페이지에서 확인 못함)
- **C**: "user_stated vs ai_inferred 분리·편집·동의 메모리의 학술 패턴이 사실상 없다"는 검색 미발견을 분야 전체 부재로 확대한 것 → "이번 조사에서 발견하지 못함"으로 한정

## 한벗 적용 포인트
- 한벗 "동의 기반 기억 관리(사실/추정 감정 분리, 확인·수정·삭제)"에 가장 가까운 기성 구조. 블록을 `user_stated_facts` / `ai_inferred_affect` / `persona`로 분리하고 각 블록을 React UI에 렌더링해 사용자 편집을 받는 설계 → [[claim-tech-2-memory-architecture]]
- Mem0 `add/search/delete` 위에 metadata 태그로 동일 아이디어 구현도 가능 → [[topic-tech-long-term-memory]]
- 관련: [[src-mem0-2025-locomo-paper]], [[claim-tech-6-sensitive-data-consent]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:39.039Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S52] (등급 A, 공식설명; URL docs.letta.com/guides/core-concepts/memory/memory-blocks 은 기존 페이지 URL과 다른 같은 주제 문서). 사용: 블록 구조, last-write-wins.
- 검증(implementation_refs): "Letta 라이선스는 Apache-2.0"은 문서 페이지만으로는 확인불가(C) -> 라이선스 근거로 인용 금지.
- 사용처: [[overview-app-design]] 의 5절 ⑧. 관련: [[claim-tech-2-memory-architecture]]
