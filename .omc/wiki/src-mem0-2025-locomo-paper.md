---
title: "src-mem0-2025-locomo-paper"
tags: ["tech", "long-term-memory", "grade-A", "mem0", "locomo", "vendor-self-report", "latency", "app-design", "paper-evidence", "memory-hci"]
created: 2026-10-25T07:15:54.934Z
updated: 2026-10-26T05:53:00.124Z
sources: ["https://arxiv.org/html/2504.19413", "https://arxiv.org/abs/2504.19413"]
links: ["claim-tech-2-memory-architecture.md", "src-mem0-2026-research-page.md", "topic-tech-long-term-memory.md", "src-wu-2024-longmemeval.md", "src-zep-2025-graphiti.md", "src-letta-2025-memory-blocks.md", "overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-memory.md", "claim-app-4-memory-four-states.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-mem0-2025-locomo-paper

# src-mem0-2025-locomo-paper

## 서지정보
Mem0 팀(research@mem0.ai), "Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory", arXiv 2504.19413 (2025-04-28). **벤더 자체 연구** — 리서치 노트의 "독립 논문" 표기는 **불일치(C)**, 정정 적용.

## URL
- https://arxiv.org/html/2504.19413
- https://arxiv.org/abs/2504.19413

## 라이선스/상업 이용
- Mem0 오픈소스(Apache 2.0, GitHub mem0ai/mem0 — 이번 검증 범위 밖, 별도 확인 권장). 논문 자체는 공개.

## 핵심 수치 (LoCoMo, LLM-as-a-Judge J% / p95 total latency / 쿼리당 컨텍스트 토큰)
| 시스템 | J (%) | p95 (s) | 토큰 |
|---|---|---|---|
| Mem0 | 66.88±0.15 | 1.440 | 1,764 |
| Mem0 graph | 68.44±0.17 | 2.590 | 3,616 |
| Zep | 65.99±0.16 | 2.926 | 3,911 |
| A-Mem | 48.38±0.15 | 4.374 | 2,520 |
| LangMem | 58.10±0.21 | 60.40 | 127 |
| OpenAI memory | 52.90±0.14 | 0.889 | 4,437 |
| Full-context | 72.90±0.19 | 17.117 | 26,031 |
| RAG (k=2, 256-tok) | 60.97±0.20 | 1.907 | — |

- 저장 토큰: Mem0 약 7k, graph 약 14k, Zep 600k 초과, 원본 대화 약 26k (반올림 요약값, B)
- Mem0는 full-context 대비 p95 약 91% 감소, 토큰 비용 90% 이상 절감, OpenAI memory 대비 J 26% 상대 향상 (재계산 부합)

## 검증 결과
- 표의 모든 수치 등급 **A**; 저장 토큰 **B**
- **정정**: "독립 논문" → **벤더 자체 연구**. "OpenAI memory"는 논문이 구현·평가한 비교 대상 명칭이며 현재 제품 전체 성능이 아님
- **C**: "LangMem 60초·A-Mem 4.4초이므로 실시간 음성 부적합"은 한 평가 구현만으로 프레임워크 전체 적합성을 확정할 수 없음 → "해당 구현 기준"으로 한정

## 한벗 적용 포인트
- Mem0(또는 pgvector RAG k=2 설정 J 60.97)가 소규모 팀의 현실적 출발점. 음성 turn 내 1.44초는 빠듯 → STT 스트리밍과 병렬 prefetch 필요 → [[claim-tech-2-memory-architecture]]
- 벤더 블로그 90점대 수치([[src-mem0-2026-research-page]])와 이 논문 수치는 grader·모델이 달라 비교 불가 → [[topic-tech-long-term-memory]]
- 관련: [[src-wu-2024-longmemeval]], [[src-zep-2025-graphiti]], [[src-letta-2025-memory-blocks]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:00.871Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S18] (등급 A, 자사발표). 사용: Mem0 검색 p95 1.44s. 조건: LoCoMo, 논문 구현 조건, 벤더 자체 연구.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지(벤더 자체 연구임을 병기).
- 사용처: [[overview-app-design]] 의 5절 ⑧. 관련: [[claim-tech-2-memory-architecture]]

---

## Update (2026-10-26T05:53:00.124Z)

## 2026-10-26 논문 보강 (설계서 [P60])
- 수치(LoCoMo, 영어, 등급 A·벤더 자체 연구): J 점수 Mem0 66.88%, RAG(k=2, 256토큰) 60.97%, Full-context 72.90%. p95 지연 Mem0 1.440s, RAG 1.907s.
- 적용: MVP RAG k=2 설정의 참고치. 벤더가 자사 방법을 평가한 값이므로 독립 검증이 아니다. 기억 조회를 턴 안에서 동기 호출하지 않는다(설계서 S18).
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-memory]] · [[claim-app-4-memory-four-states]]
