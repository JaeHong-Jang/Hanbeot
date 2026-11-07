---
title: "src-packer-2023-memgpt"
tags: ["paper-evidence", "memory", "memgpt", "grade-A"]
created: 2026-11-07T11:36:18.568Z
updated: 2026-11-07T11:36:18.568Z
sources: ["research_notes/회의 후속 조사/AB_맥락_개인화.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "claim-tech-2-memory-architecture.md", "src-letta-2025-memory-blocks.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-packer-2023-memgpt

# src-packer-2023-memgpt

## 서지
Packer et al., "MemGPT: Towards LLMs as Operating Systems", 2023 (arXiv). 노트 AB의 ⑱. 원문 확인.

## 수치
- 컴퓨터 메모리처럼 당장 필요한 것만 문맥에 두고 나머지는 외부 저장소에서 함수 호출로 불러옴.
- MSC 과거 세션 사실 회상: GPT-4 단독 32.1% → MemGPT 92.5%.
- 같은 노트의 LoCoMo(ACL 2024): 사람 F1 87.9 vs 긴 문맥 GPT-3.5-16K 37.8, 최고 RAG 41.4. 원문 대화보다 관찰 문장 검색이 가장 좋음. Lost in the Middle: 긴 입력 가운데 정보 손실.

## 한벗 적용
기억 관리를 응답 생성과 분리된 전담 루프로 두는 3층 구조 제안(미확정)의 근거.

## 사용처
[[topic-meeting-followup-ser-2026-11]] · [[claim-tech-2-memory-architecture]] · [[src-letta-2025-memory-blocks]]

