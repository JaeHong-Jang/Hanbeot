---
title: "claim-tech-2-memory-architecture"
tags: ["tech", "long-term-memory", "grade-A", "grade-C", "decision", "mem0", "letta", "user-stated", "ai-inferred"]
created: 2026-10-25T07:32:50.473Z
updated: 2026-10-25T07:32:50.473Z
sources: []
links: ["topic-tech-long-term-memory.md", "overview-technology.md", "src-letta-2025-memory-blocks.md", "src-mem0-2025-locomo-paper.md", "src-wu-2024-longmemeval.md", "src-arxiv-2026-memory-benchmarks.md", "src-zep-2025-graphiti.md", "src-mem0-2026-research-page.md", "claim-tech-6-sensitive-data-consent.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-2-memory-architecture

# claim-tech-2-memory-architecture

## 결정
**메모리는 Letta의 memory block 개념을 차용해 `user_stated_facts` / `ai_inferred_affect` / `persona` 세 블록으로 분리하고, 저장·검색은 Mem0(OSS) 또는 pgvector 단순 RAG(k=2, 256-token chunk) 위에 metadata 태그로 구현한다. 모든 블록은 React UI에서 열람·수정·삭제 가능하며, `ai_inferred_affect`에는 TTL/decay를 둔다. 메모리 검색은 STT와 병렬 prefetch한다.**

상위: [[topic-tech-long-term-memory]], [[overview-technology]]

## 블록 스키마(초안)
| 블록 | 내용 | 출처 필드 | 보존 정책 | 사용자 권한 |
|---|---|---|---|---|
| user_stated_facts | 사용자가 명시적으로 말한 사실(전공, 관계, 고민 주제) | 발화 ID, timestamp | 사용자 삭제 전까지 | 열람·수정·삭제 |
| ai_inferred_affect | SER+텍스트 추론 정서, confidence | 발화 ID, SER 라벨, confidence, timestamp | TTL(예: 30일) + decay | 열람·삭제·"틀렸어" 피드백 |
| persona | 대화 모드 선호, 호칭 | 설정 UI | 영구 | 열람·수정 |

## 근거
- Letta core memory blocks(human/persona) + archival + recall 계층, 블록 읽기·수정 API [[src-letta-2025-memory-blocks]]
- Mem0 논문(벤더 자체): LoCoMo J 66.88, p95 1.44s, 1,764 토큰; RAG k=2·256-tok J 60.97 > OpenAI memory 52.9 [[src-mem0-2025-locomo-paper]]
- LongMemEval 5능력(knowledge update, abstention 포함), time-aware query expansion 권고 [[src-wu-2024-longmemeval]]
- 망각이 벤치마크 축(From Recall to Forgetting), 충돌 갱신 평가(MemConflict) [[src-arxiv-2026-memory-benchmarks]]
- Zep temporal KG는 사실 변경 이력에 유리하나 MVP엔 과도 [[src-zep-2025-graphiti]]
- 벤더 블로그 점수는 비교 불가 → 선택 근거에서 제외 [[src-mem0-2026-research-page]]

## 비용·지연
- Mem0 OSS 자체 호스팅: 인프라 비용만(Postgres+pgvector 1대). 검색 p95 1.44s(논문 조건) → 음성 turn 내 동기 호출 불가 → **세션 시작 prefetch + STT 병렬 검색**
- LLM 컨텍스트 토큰 약 1.8k/쿼리 → Claude 입력 비용 소폭

## 검증 가능 목표
1. 30명 테스트 전사에서 LongMemEval 5능력별 10문항 x 5 = 50문항 자체 세트 → 정답률 ≥ 70%
2. 사용자가 사실을 수정/삭제한 뒤 다음 세션에서 반영률 100%
3. 메모리 검색이 TTFA에 추가하는 지연 ≤ 100ms(prefetch 기준)

## 미확인 리스크 (C)
- user_stated/ai_inferred 분리·동의 메모리의 학술 선례 미발견(검색 범위 한정)
- Letta 도구명·버전 변동, Letta·LangMem 공식 점수 부재
- TTL 값(30일)은 팀 가정 — 검증된 최적 정책 아님
- 한국어 장기 기억 벤치마크 미발견
- 민감정보 처리 요건과의 결합 → [[claim-tech-6-sensitive-data-consent]]

