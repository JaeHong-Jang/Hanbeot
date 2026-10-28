---
title: "claim-bench-8-emotion-cue-as-question"
tags: ["benchmark", "claim", "ser", "emotion", "ux", "grade-A"]
created: 2026-10-25T07:39:27.928Z
updated: 2026-10-25T14:52:18.882Z
sources: []
links: ["src-arxiv-2026-audio-flamingo-iemocap.md", "src-github-2026-emobench-m.md", "src-isca-2025-msp-podcast-challenge.md", "src-etri-2023-kemdy-datasets.md", "src-hume-2025-evi3-launch.md", "src-acl-2024-emobench.md", "claim-bench-4-memory-consent-editing.md", "topic-bench-ser.md", "topic-bench-empathy-dialogue.md", "overview-benchmark.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: decision
confidence: high
schemaVersion: 1
---

# claim-bench-8-emotion-cue-as-question

# claim-bench-8-emotion-cue-as-question

## 주장 (사업계획서용)
> 음성 감정 인식의 최고 수준도 IEMOCAP 4-class 약 76%(2026)이고 멀티모달 정서지능(EmoBench-M) 최고 70.5점으로 인간에 못 미친다. 따라서 한벗은 음성 감정 단서를 **"확정 판단"이 아니라 "확인 질문"**("오늘 좀 지쳐 보이는데, 맞아?")으로 제시하고, 사용자가 확인한 감정만 기억에 저장한다. 측정 목표: KEMDy20 4-class UA **≥70%**, 사용자 확인 일치율 ≥70%.

## 근거
- IEMOCAP: Audio Flamingo 3 WA 76.48/UA 76.15 (2026-09), 프로토콜별 비교 불가 — [[src-arxiv-2026-audio-flamingo-iemocap]] (A)
- EmoBench-M Gemini-3.0-Pro 70.5 (2026-10 README) — [[src-github-2026-emobench-m]] (A); SER 정확도와 다른 지표임(C 주의)
- MSP-Podcast 자연 발화 과제(8-class, A/V/D CCC) — [[src-isca-2025-msp-podcast-challenge]] (A)
- KEMDy19/20 한국어 데이터, 7감정(4-class 부분집합), 공개 리더보드 없음 — [[src-etri-2023-kemdy-datasets]] (A/C)
- Hume: 감정 식별 자체 평가 9중 8 GPT-4o 우위, 48차원 측정 — [[src-hume-2025-evi3-launch]] (A/B)
- EmoBench 400문항 — [[src-acl-2024-emobench]] (A)
- 사실/추정 분리 저장 — [[claim-bench-4-memory-consent-editing]]

## 등급
- SOTA 수치: **A**. UA ≥70% 목표: C (한벗 설정; KEMDy20 공개 SOTA 부재).

## 검증 방법
- KEMDy20 4-class UA/WA 측정(LOSO 또는 5-fold 명시). 대학생 30명 테스트에서 확인 질문 정답률·불쾌감(침해감) 자기보고.

관련: [[topic-bench-ser]] · [[topic-bench-empathy-dialogue]] · [[overview-benchmark]]

---

## Update (2026-10-25T14:52:18.882Z)

## 앱 설계서 반영 (2026-10-25)
- 지표 재정의: "사용자 확인 일치율 70%"는 정확도가 아니라 **"확인 수용률"(맞아 ÷ 확인 질문) 수용성 지표**로 바꾼다(비평 11). "맞아"에는 동조·모호 수용이 섞일 수 있다. 질문 발생률·거절률·무응답률·침해감·SER 적시 도착률을 함께 보고한다.
- 5턴 1회·점수 0.6 등 질문 조건은 임시 운영 기준이다. 상세: [[claim-app-3-emotion-cue-confirmation-rules]]

