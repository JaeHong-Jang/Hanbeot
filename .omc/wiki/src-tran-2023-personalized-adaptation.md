---
title: "src-tran-2023-personalized-adaptation"
tags: ["scopus-2026-11", "paper-evidence", "ser", "personalization", "msp-podcast", "valence", "grade-A"]
created: 2026-11-07T19:52:06.958Z
updated: 2026-11-07T19:52:06.958Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["claim-research-2-paper-b-personalization-synthetic.md", "topic-ser-sota-benchmarks-2026-11.md", "topic-ser-performance-levers-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-tran-2023-personalized-adaptation

# src-tran-2023-personalized-adaptation

## 서지
Tran, Yin, Soleymani 2023, 비지도 개인화 적응 SER, arXiv 2309.02418. 검증 A.

## 수치 (MSP-Podcast v1.6)
- test-b: valence O-CCC 0.607(Vanilla) -> 0.663(PAPT-FT, +0.056), arousal 0.712 -> 0.740(+0.028). TAPT만: 0.630/0.717 (valence +0.023).
- **전체 테스트 valence는 0.665**, 비교 인용값 0.627 (검증 정정: 0.663은 test-b, "전체 테스트"로 쓰면 오류).
- 0.663/0.740은 PAPT-FT 자체 결과. PLDC까지 합친 값으로 설명하면 부정확.
- 화자별 A-CCC valence 0.514 -> 0.569. sigma 이동 A-CCC 최고 0.578, mu 이동은 악화.
- 화자 임베딩 조건 자기지도 사전학습(PAPT) + 유사 화자 라벨 분포(PLDC). 미본 화자(test-c)에도 적용.

## 한벗 적용
논문 B의 영어 기준선(valence 0.665 이기기). 한국어 근거는 없음. [[claim-research-2-paper-b-personalization-synthetic]]

## 사용처
[[topic-ser-sota-benchmarks-2026-11]] · [[topic-ser-performance-levers-2026-11]]
