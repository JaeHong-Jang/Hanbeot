---
title: "topic-tech-long-term-memory"
tags: ["tech", "long-term-memory", "grade-A", "grade-B", "grade-C", "mem0", "letta", "locomo", "user-editable", "topic"]
created: 2026-10-25T07:28:30.566Z
updated: 2026-10-25T07:28:30.566Z
sources: []
links: ["overview-technology.md", "claim-tech-2-memory-architecture.md", "src-wu-2024-longmemeval.md", "src-mem0-2025-locomo-paper.md", "src-zep-2025-graphiti.md", "src-mem0-2026-research-page.md", "src-letta-2025-memory-blocks.md", "src-xu-2025-a-mem.md", "src-arxiv-2026-memory-benchmarks.md", "claim-tech-6-sensitive-data-consent.md", "topic-tech-voice-pipeline-latency-cost.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tech-long-term-memory

# topic-tech-long-term-memory

LLM 에이전트 장기 메모리 영역 종합. 한벗 핵심 기능 ③(동의 기반 기억 관리: 사실/추정 감정 분리, 확인·수정·삭제)의 기술 근거. 상위: [[overview-technology]]. 결정: [[claim-tech-2-memory-architecture]].

## 요약
Mem0 **벤더 자체 논문**(2025-04) 기준 LoCoMo J: Mem0 66.9 / Mem0-graph 68.4 / Zep 66.0 / LangMem 58.1 / A-Mem 48.4 / full-context 72.9. 벤더 블로그의 90점대 수치는 grader·모델이 달라 비교 불가하며 같은 제품 점수가 측정자별로 수십 점 차이 난다. 소규모 팀에는 Mem0(OSS, p95 1.44초, 약 1.8k 토큰/쿼리) 또는 Letta memory block 개념이 참고 가치가 높다. "사용자 진술 사실 vs AI 추론 감정" 분리와 사용자 편집 UI를 직접 다룬 학술 패턴은 **이번 조사에서 발견하지 못했으므로** 자체 설계가 필요하다.

## 확인된 발견 (A/B)
- LongMemEval 500문항·5능력(extraction, multi-session, temporal, knowledge update, abstention); 상용 어시스턴트 30% 하락; session decomposition·fact-augmented key expansion·time-aware query expansion 권고 [[src-wu-2024-longmemeval]]
- Mem0 논문 LoCoMo 표(J / p95 / 토큰): Mem0 66.88 / 1.440s / 1,764; graph 68.44 / 2.590s / 3,616; Zep 65.99 / 2.926s; A-Mem 48.38 / 4.374s; LangMem 58.10 / 60.40s / 127; OpenAI memory 52.90 / 0.889s; full-context 72.90 / 17.1s / 26,031; RAG k=2·256-tok 60.97 / 1.907s [[src-mem0-2025-locomo-paper]]
- Zep 자체 연구: DMR 94.8% vs MemGPT 93.4%, LongMemEval 최대 18.5% 향상·지연 90% 감소 [[src-zep-2025-graphiti]]
- Mem0 연구 페이지 자체 보고 LoCoMo 92.5 / LongMemEval 94.4; Zep LongMemEval(GPT-4o) 71.2(Mem0 비교 페이지 인용) [[src-mem0-2026-research-page]]
- Letta 계층: core memory blocks(human/persona) + archival(vector DB) + recall(대화 로그), 블록 읽기·수정 API [[src-letta-2025-memory-blocks]]
- A-MEM Zettelkasten식 상호 연결 노트 [[src-xu-2025-a-mem]]
- 2026 후속: LangMem이 A-MEM 대비 LongMemEval 5열 중 3열 우위(Gemini-2.5-Flash·Claude-Sonnet-4.5 백본, GPT-4o-mini judge); MemConflict(충돌 갱신), From Recall to Forgetting(망각 축), Memoria(세션 요약·가중 KG) [[src-arxiv-2026-memory-benchmarks]]

## 미확인 (C) — 본문 분리
- Mem0 "독립 논문" 표기(→ 벤더 자체 연구로 정정), 연구 페이지 갱신 이력, Zep 점수 논란(75.14 / 94.7 / 58.44 범위), aggregator Zep 90.2 [[src-mem0-2026-research-page]]
- Letta 도구명 `block_append/replace/read/summarize`(버전 고정 필요), Letta·LangMem 공식 점수 "Not published" [[src-letta-2025-memory-blocks]]
- A-MEM non-GPT 백본 전면 우위 [[src-xu-2025-a-mem]]
- "LangMem 60초·A-Mem 4.4초 → 실시간 부적합"은 해당 평가 구현에 한정 [[src-mem0-2025-locomo-paper]]
- user_stated/ai_inferred 분리 패턴의 "학술 부재"는 검색 미발견으로 한정; 한국어 장기 기억 벤치마크 미발견; LoCoMo 원 논문·LangMem 공식 문서 직접 미확인

## 설계 패턴
1. **블록 분리**(Letta 차용): `user_stated_facts`(사용자 명시 발화, 출처 발화 ID·타임스탬프), `ai_inferred_affect`(SER+텍스트 추론 정서, confidence·timestamp·TTL), `persona`(대화 모드 선호). 각 블록을 React UI에 그대로 렌더링 → 확인·수정·삭제 → [[claim-tech-6-sensitive-data-consent]]
2. **비대칭 망각**: 추론 항목은 TTL/decay, 사실 항목은 사용자 삭제 전까지 유지(망각이 평가 축이라는 근거까지만 확인됨; TTL 값은 팀 설계)
3. **지연 대책**: 메모리 검색(Mem0 p95 1.44s)을 STT 스트리밍과 병렬 선행 실행 또는 세션 시작 시 prefetch → [[topic-tech-voice-pipeline-latency-cost]]
4. **단순 출발점**: pgvector RAG(k=2, 256-token chunk, J 60.97)도 OpenAI memory(52.9)보다 높았으므로 MVP 1차는 단순 RAG + 블록 메타데이터로 시작 가능
5. **테스트 축**: LongMemEval 5능력 + MemConflict식 번복 처리 + "지난주 팀플" 같은 time-aware 질의

## 우선 수정 항목
- Mem0 논문을 "독립 연구"로 쓰지 말 것
- 벤더 블로그 점수와 논문 점수 혼용 금지

