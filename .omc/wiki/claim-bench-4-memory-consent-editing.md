---
title: "claim-bench-4-memory-consent-editing"
tags: ["benchmark", "claim", "memory", "privacy", "consent", "grade-A"]
created: 2026-10-25T07:39:07.178Z
updated: 2026-10-25T07:39:07.178Z
sources: []
links: ["src-replika-2026-help-memory.md", "src-nomi-2026-mind-map.md", "src-kindroid-2026-subscription-docs.md", "src-byline-2021-pipc-scatterlab-sanction.md", "src-garante-2025-replika-fine.md", "src-arxiv-2025-longmemeval.md", "src-acl-2025-membench.md", "src-tnw-2026-friend-pendant.md", "topic-bench-memory.md", "topic-bench-regulation-incidents.md", "bench-nomi.md", "overview-benchmark.md"]
category: decision
confidence: high
schemaVersion: 1
---

# claim-bench-4-memory-consent-editing

# claim-bench-4-memory-consent-editing

## 주장 (사업계획서용)
> 기억 열람·삭제(Replika), 열람·편집·추가(Nomi), 사용자 작성(Kindroid)은 이미 시장에 존재한다. 한벗의 차별점은 **(a) 저장 전 동의, (b) 사실 vs 추정 감정의 분리 표시, (c) 기억 근거(언제·무슨 대화) 표시, (d) 학습 재사용 금지·가명처리·14세 미만 차단·삭제권 명문화**이며, 측정 지표로 LongMemEval 5능력(특히 시간 추론·지식 갱신·기권)과 MemBench 반성적 기억, 자체 "수정 후 갱신 일관성"을 사용한다.

## 근거
- Replika Memory 탭 열람·삭제(공식), 편집은 C — [[src-replika-2026-help-memory]] (A/C)
- Nomi Mind Map 열람·편집·**추가**(공식) — [[src-nomi-2026-mind-map]] (A)
- Kindroid backstory·journal·Cascaded Memory — [[src-kindroid-2026-subscription-docs]] (B)
- 이루다 제재: 학습 동의·민감정보 별도 동의·14세 미만 — [[src-byline-2021-pipc-scatterlab-sanction]] (B)
- Garante: 연령확인·법적 근거·고지 — [[src-garante-2025-replika-fine]] (A)
- LongMemEval 5능력, 지속 상호작용 ~30% 하락 — [[src-arxiv-2025-longmemeval]] (A)
- MemBench 반성적 기억 취약 — [[src-acl-2025-membench]] (A)
- Friend 상시 청취 반발 → 명시적 동의 필요 — [[src-tnw-2026-friend-pendant]] (B)

## 우선 수정 (노트 추론 교정)
- "편집 가능 기억은 Replika·Nomi 정도" → Kindroid도 포함(C). "둘 다 사후 편집뿐" → Nomi는 추가 가능(불일치/C).
- "동의+편집+근거로 GDPR·한국법 대응 확보" → 법 준수는 별도 요건 검토 필요(C). 주장은 "선례 쟁점에 대응하는 설계"로 완화.

## 등급
- 선례·제재 근거: **A/B**. 차별점 (a)~(d)의 희소성: **C** (시장 전수 조사 아님).

## 검증 방법
- LongMemEval-S 능력별 정확도 + 자체 갱신 일관성(수정된 사실 재언급률 <5%) 측정 후 보고.

관련: [[topic-bench-memory]] · [[topic-bench-regulation-incidents]] · [[bench-nomi]] · [[overview-benchmark]]

