---
title: "src-arxiv-2026-memory-benchmarks"
tags: ["tech", "long-term-memory", "grade-A", "forgetting", "memconflict", "memoria", "langmem"]
created: 2026-10-25T07:16:12.906Z
updated: 2026-10-25T07:16:12.906Z
sources: ["https://arxiv.org/pdf/2606.06036", "https://arxiv.org/pdf/2605.20926", "https://arxiv.org/pdf/2604.20006", "https://arxiv.org/pdf/2512.12686"]
links: ["claim-tech-2-memory-architecture.md", "topic-tech-long-term-memory.md", "src-xu-2025-a-mem.md", "src-letta-2025-memory-blocks.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-arxiv-2026-memory-benchmarks

# src-arxiv-2026-memory-benchmarks

## 서지정보
2025–2026 장기 메모리 후속 연구 4편:
1. Graph memory 논문 (LongMemEval 비교표 포함), arXiv 2606.06036 (2026)
2. MemConflict: 메모리 충돌(모순 정보 갱신) 평가, arXiv 2605.20926 (2026)
3. "From Recall to Forgetting": 개인화 에이전트 장기 기억의 망각 포함 벤치마크, arXiv 2604.20006 (2026)
4. Memoria: 개인화 대화 AI용 agentic memory 프레임워크, arXiv 2512.12686 (2025-12)

## URL
- https://arxiv.org/pdf/2606.06036
- https://arxiv.org/pdf/2605.20926
- https://arxiv.org/pdf/2604.20006
- https://arxiv.org/pdf/2512.12686

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치
- 2606.06036 Table 2 (LongMemEval, LLM judge): LangMem이 A-MEM보다 5개 열 중 **multi-session·temporal·overall 3개**에서 우위, 나머지 2개는 A-MEM 우위. 백본은 Gemini-2.5-Flash·Claude-Sonnet-4.5, judge GPT-4o-mini로 **본문에 명시** — 리서치 노트의 "백본 라벨 모호"는 **불일치(C)**, 정정
- MemConflict: A-MEM, LangMem, Letta를 충돌 상황에서 함께 평가
- From Recall to Forgetting: 망각을 평가 축에 포함 (TTL이 검증된 최적 정책이라는 뜻은 아님)
- Memoria: 세션 요약·가중 지식그래프 구조

## 검증 결과
- 4편 모두 존재·주제 등급 **A**; "라벨 모호" 주장만 **C**

## 한벗 적용 포인트
- **망각이 기능 요구**: `ai_inferred_affect` 항목에 TTL/decay, `user_stated_facts`는 사용자 삭제 전까지 유지하는 비대칭 정책 — 근거는 "망각이 벤치마크 축"이라는 사실까지이며 TTL 값 자체는 팀 설계 → [[claim-tech-2-memory-architecture]]
- 메모리 충돌(사용자가 과거 진술을 번복) 처리 테스트를 MemConflict 방식으로 설계 → [[topic-tech-long-term-memory]]
- 관련: [[src-xu-2025-a-mem]], [[src-letta-2025-memory-blocks]]

확인일: 2026-10-25

