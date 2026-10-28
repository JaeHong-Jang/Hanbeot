---
title: "src-vera-mh-2026-eval-tools"
tags: ["tech", "safety-crisis-detection", "grade-A", "vera-mh", "evaluation", "korean", "suicide-content", "paper-evidence", "crisis", "safe-messaging"]
created: 2026-10-25T07:24:31.319Z
updated: 2026-10-26T05:53:15.726Z
sources: ["https://arxiv.org/pdf/2602.05088", "https://medinform.jmir.org/2026/1/e73725", "https://preprints.jmir.org/preprint/73725/accepted"]
links: ["claim-tech-8-crisis-referral-flow.md", "topic-tech-safety-crisis-detection.md", "src-psycrisisbench-2025.md", "topic-app-paper-evidence.md", "topic-app-impl-safety-crisis.md", "claim-app-5-crisis-ops-and-tel109.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-vera-mh-2026-eval-tools

# src-vera-mh-2026-eval-tools

## 서지정보
1. VERA-MH (JMIR AI / arXiv 2602.05088, 2026): 오픈소스 챗봇 자살 위험 탐지·응답 안전성 평가 도구의 인간(임상가) 검증 연구
2. JMIR Medical Informatics 2026;e73725: LLM-guided sampling·전문가 주석 기반 **유해 자살 콘텐츠 탐지 벤치마크** — **한국어 원문·영어 번역 벤치마크 포함**

## URL
- https://arxiv.org/pdf/2602.05088
- https://medinform.jmir.org/2026/1/e73725 (정식 출판본)
- https://preprints.jmir.org/preprint/73725/accepted

## 라이선스/상업 이용
- VERA-MH 오픈소스(라이선스 별도 확인). JMIR 벤치마크 데이터 공개 범위 확인 필요

## 핵심 수치/결론
- VERA-MH: 평가 도구와 임상가 판단의 정렬 검증 (A)
- JMIR 2026: 한국어 자살 **유해 콘텐츠** 벤치마크 존재 — 리서치 노트의 "한국어 자살 위험 데이터셋·논문 없음"은 **C**: 개인 위기 탐지와는 과제가 다르지만 한국어 자료가 있으므로 "없음"이 아닌 "콘텐츠 분류 자료는 존재, 개인 위기 탐지 자료는 미발견"으로 정정

## 검증 결과
- 두 출처 등급 **A**. "한국어 자료 없음" 주장: **C → 정정**

## 한벗 적용 포인트
- VERA-MH를 한국어로 포팅하면 MVP 안전 평가 하네스를 처음부터 만들지 않아도 됨 → [[claim-tech-8-crisis-referral-flow]]
- JMIR 한국어 벤치마크는 "유해 콘텐츠 생성 방지"(한벗이 위험한 말을 하지 않는지) 검증에 활용 가능 → [[topic-tech-safety-crisis-detection]]
- 관련: [[src-psycrisisbench-2025]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:53:15.726Z)

## 2026-10-26 논문 보강 (설계서 [P78], [P96])
- [P78] VERA-MH 2026 (JMIR AI / arXiv 2602.05088, 영어, 등급 A): 임상가 판단과 정렬이 검증된 평가 도구. 평가 하네스 재사용 후보.
- [P96] JMIR Medical Informatics 2026, e73725 (이 페이지를 공유, 등급 A): 유해 자살 콘텐츠 탐지 벤치마크, 한국어 원문·영어 번역 포함. 한벗이 위험한 말을 하지 않는지 검증하는 용도이며 개인 위기 탐지와는 다른 과제다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-safety-crisis]] · [[claim-app-5-crisis-ops-and-tel109]]
