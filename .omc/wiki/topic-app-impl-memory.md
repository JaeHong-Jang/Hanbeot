---
title: "topic-app-impl-memory"
tags: ["app-design", "implementation", "memory", "pgvector", "mem0", "four-states", "topic", "paper-evidence"]
created: 2026-10-25T14:46:47.083Z
updated: 2026-10-26T05:47:15.859Z
sources: ["reports/한벗 앱 설계서.md#5-8"]
links: ["overview-app-design.md", "claim-app-4-memory-four-states.md", "claim-tech-2-memory-architecture.md", "src-mem0-2026-pgvector-docs.md", "src-mem0-2026-github.md", "src-letta-2025-memory-blocks.md", "topic-app-screen-flow.md", "topic-app-benchmark-map.md", "src-mem0-2025-locomo-paper.md", "topic-app-impl-consent-privacy.md", "topic-app-feature-spec.md", "src-chen-2026-ai-never-forgets.md", "src-arxiv-2026-algorithmic-self-portrait.md", "src-wu-2024-longmemeval.md", "src-memctrl-2026-memory-control.md", "src-cox-2023-chatbot-memory-reference.md", "claim-app-11-data-flow-retention-and-deletion.md", "topic-app-paper-evidence.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-impl-memory

상위: [[overview-app-design]] · 설계서 5절 ⑧. 결정: [[claim-app-4-memory-four-states]]. 근거: [[claim-tech-2-memory-architecture]]

## 선택
MVP는 Postgres + pgvector 단순 RAG(k=2, 256토큰) + `block` 메타데이터. P1에서 Mem0 OSS(Apache-2.0)로 승급 [[src-mem0-2026-pgvector-docs]], [[src-mem0-2026-github]]. 블록 개념은 Letta [[src-letta-2025-memory-blocks]].

## 4상태 (설계)
| 상태 | 뜻 | 생성 시점 | 블록 | UI 라벨 |
|---|---|---|---|---|
| `stated` | 사용자가 직접 말한 내용(객관적 사실 검증 아님) | 통화 후 요약 작업이 추출 | user_stated_facts | "내가 말한 것" |
| `inferred` | 모델 추정(SER + 텍스트) | 턴 중 단서 생성 | ai_inferred_affect | 표시 안 함(후보에도 안 올림) |
| `confirmed` | inferred를 사용자가 "맞아"로 확인 | 확인 질문 응답 | ai_inferred_affect | "한벗이 느낀 것 · 내가 맞다고 함" |
| `approved` | 사용자가 저장에 동의(stated 또는 confirmed에서만 전이) | 통화 후 카드의 [저장] | 해당 블록 | 위 라벨 + 저장됨 |
전이: `stated → approved`, `inferred → confirmed → approved`. inferred는 approved로 직행 불가. 검색·프롬프트에는 approved만 쓴다. confirmed(감정이 맞다는 확인)와 approved(장기 저장 동의)는 서로 다른 행위다.

## 테이블 (설계)
`memories(id, user_pk(가명), block, state, text, evidence_utterance_id, evidence_at, expires_at, embedding)`, `memory_tombstones(user_pk, text_hash, deleted_at)`.

## 단계
1. 통화 후 작업이 stated·confirmed 후보만 생성.
2. 승인되면 임베딩 생성 후 approved로 변경.
3. 통화 시작 시 approved 기억 prefetch, STT partial마다 보조 검색. 턴 안 동기 호출 금지.
4. 하루 1회 작업이 `expires_at` 지난 기억 삭제(TTL: "한벗이 느낀 것" 30일 초안, 미확정).
5. 수정은 행 교체 후 재임베딩.
6. 후보 추출은 세션 종료 시 1회만, 과거 전사 재처리 금지, 삭제된 기억과 정규화 해시가 같은 후보는 재제안 금지.
7. 모든 쿼리는 인증 세션의 `user_pk`로만 필터(클라이언트 입력값 불사용) + Postgres 행 수준 보안(RLS).
8. 50문항 세트 정답률 측정(목표 70% 이상, 미달 시 "내가 말한 것" 1블록으로 단순화).

## 승인 UI
통화 후 카드에서 [저장][고쳐서 저장][버리기] ([[topic-app-screen-flow]] 3.4). 기억 관리 화면은 라벨·근거·만료 D-day·"틀렸어" 동작 제공(3.5). 참고: Kindroid 보류 제안, Nomi/Replika 열람·삭제 ([[topic-app-benchmark-map]]).

## Mem0 승급 (P1)
`memory.search(query, filters={"user_id":...}, top_k=3)`, `memory.add(messages, user_id=...)`. pgvector는 `vector_store` provider 설정 후 `Memory.from_config`. 승급 합격선: 50문항 정답률이 pgvector보다 낮아지지 않을 것.

## 함정
- Mem0 검색 p95 1.44s(벤더 자체 연구, LoCoMo 조건) [[src-mem0-2025-locomo-paper]]. 동기 호출 금지.
- `embedding_model_dims` 기본 1536, 사용하는 임베딩 모델 차원과 일치 필수.
- Mem0 `add`는 자동 추출·저장하므로 승인된 텍스트만 넘긴다.
- Letta 블록은 값 전체 교체라 동시 수정 시 last-write-wins.
- 삭제 정책·철회 연동은 [[topic-app-impl-consent-privacy]]. 격리 테스트(P0-9)는 [[topic-app-feature-spec]].

---

## Update (2026-10-26T05:47:15.859Z)

## 2026-10-26 논문 보강
- 4상태·approved만 검색은 P65 [[src-chen-2026-ai-never-forgets]](20명 대부분 기대 위반)과 P67 [[src-arxiv-2026-algorithmic-self-portrait]](2,050건 중 96% 시스템 주도 생성; 동의 부재의 증명은 아님)이 보고한 현상에 대응하는 설계. 4상태 효과를 검증한 논문은 없어 H4로 확인.
- 50문항 세트 갱신: 지식 갱신·기권 문항 [P61 [[src-wu-2024-longmemeval]]], 추정("느낀 것") 기억 문항 [P63].
- 삭제 후 프롬프트·검색 재등장 0건 + 재생성 시험(원천 전사 잔존, 재시도·철회·재시작·백업 복원) [P68 [[src-memctrl-2026-memory-control]], B]. 결과는 "시험한 N개 시나리오 내"로 표기.
- 기억 언급 시 축어 인용 금지, 재진술 [P64 [[src-cox-2023-chatbot-memory-reference]]]. 삭제 범위: [[claim-app-11-data-flow-retention-and-deletion]]. 전체: [[topic-app-paper-evidence]].

