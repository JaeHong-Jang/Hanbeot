---
title: "src-acl-2025-membench"
tags: ["benchmark", "memory", "membench", "reflective-memory", "grade-A", "paper-evidence", "memory-hci"]
created: 2026-10-25T07:27:12.839Z
updated: 2026-10-26T05:53:06.093Z
sources: ["https://aclanthology.org/2025.findings-acl.989/", "https://arxiv.org/abs/2506.21605"]
links: ["topic-bench-memory.md", "claim-bench-4-memory-consent-editing.md", "topic-app-paper-evidence.md", "topic-app-impl-memory.md", "claim-app-4-memory-four-states.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-acl-2025-membench

# src-acl-2025-membench

## 서지
- Tan et al., *MemBench* (ACL Findings 2025, 2025.findings-acl.989; arXiv 2506.21605).

## 사실
- 사실적(factual) 기억 vs **반성적(reflective) 기억**, 참여/관찰 시나리오; 정확도·재현율·용량·효율 평가.
- 7개 메커니즘(FullMemory, RetrievalMemory, MemoryBank, MemGPT, GenerativeAgent 등) 평가. 규모 1K(관찰 소조건)/10K/100K 토큰 + 노이즈.
- 결과: MemoryBank·GenerativeAgent는 반성적 기억에 크게 취약; FullMemory·RecentMemory는 100K에서 급락 (특정 규모·시나리오 한정).

## 검증 결과 (2026-10-25 확인)
- 등급 **A**. "모두 10K/100K"는 1K 조건 생략.

## 한벗 활용
- 사용자 감정 추정("요즘 지쳐 보인다")처럼 반성적 기억의 정확도를 별도 측정. [[topic-bench-memory]] · [[claim-bench-4-memory-consent-editing]]

---

## Update (2026-10-26T05:53:06.093Z)

## 2026-10-26 논문 보강 (설계서 [P63])
- 수치: 사실 기억 vs 반성적 기억을 구분. MemoryBank 등은 반성적 기억에 취약(영어).
- 적용: "한벗이 느낀 것"(추정 기억)을 별도 정확도로 측정한다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-memory]] · [[claim-app-4-memory-four-states]]
