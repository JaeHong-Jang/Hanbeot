---
title: "src-wu-2024-longmemeval"
tags: ["tech", "long-term-memory", "grade-A", "benchmark", "longmemeval", "paper-evidence", "memory-hci"]
created: 2026-10-25T07:15:51.707Z
updated: 2026-10-26T05:53:03.123Z
sources: ["https://arxiv.org/abs/2410.10813"]
links: ["topic-tech-long-term-memory.md", "claim-tech-2-memory-architecture.md", "src-mem0-2025-locomo-paper.md", "src-zep-2025-graphiti.md", "topic-app-paper-evidence.md", "topic-app-impl-memory.md", "claim-app-4-memory-four-states.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-wu-2024-longmemeval

# src-wu-2024-longmemeval

## 서지정보
Wu et al., "LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory", ICLR 2025. arXiv 2410.10813.

## URL
- https://arxiv.org/abs/2410.10813

## 라이선스/상업 이용
학술 벤치마크(공개). 해당 없음.

## 핵심 수치
- 500문항, 5가지 핵심 능력: information extraction, multi-session reasoning, temporal reasoning, knowledge updates, abstention
- 상용 챗 어시스턴트·long-context LLM이 지속적 상호작용 기억에서 **30% 정확도 하락** (모든 모델의 보편적 하락률로 해석 금지)
- 개선 권고: session decomposition, fact-augmented key expansion, time-aware query expansion

## 검증 결과
- 등급 **A** (초록·방법 설명과 일치)

## 한벗 적용 포인트
- 메모리 평가 축 5개를 한벗 메모리 테스트 설계에 차용(특히 knowledge updates = 사용자가 수정한 사실 반영, abstention = 모르는 것을 지어내지 않기) → [[topic-tech-long-term-memory]]
- time-aware query expansion은 "지난주에 말한 팀플 고민" 같은 시간 참조 처리에 필요 → [[claim-tech-2-memory-architecture]]
- 관련: [[src-mem0-2025-locomo-paper]], [[src-zep-2025-graphiti]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:53:03.123Z)

## 2026-10-26 논문 보강 (설계서 [P61])
- 수치: 500문항, 5능력(정보 추출·다세션 추론·시간 추론·지식 갱신·기권). 상용 어시스턴트의 지속 상호작용 정확도 약 30% 하락(영어).
- 적용: 한벗 50문항 세트에 "수정 반영(지식 갱신)"과 "모르면 기권" 축을 포함.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-memory]] · [[claim-app-4-memory-four-states]]
