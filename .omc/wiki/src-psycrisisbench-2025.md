---
title: "src-psycrisisbench-2025"
tags: ["tech", "safety-crisis-detection", "grade-A", "suicide-risk", "benchmark", "psycrisisbench", "deepsuimind", "sos-hl-1k", "paper-evidence", "crisis"]
created: 2026-10-25T07:24:28.403Z
updated: 2026-10-26T05:53:12.647Z
sources: ["https://arxiv.org/abs/2506.01329v2", "https://arxiv.org/abs/2502.17899v1", "https://arxiv.org/pdf/2309.03564"]
links: ["claim-tech-8-crisis-referral-flow.md", "topic-tech-safety-crisis-detection.md", "src-vera-mh-2026-eval-tools.md", "topic-app-paper-evidence.md", "topic-app-impl-safety-crisis.md", "claim-app-5-crisis-ops-and-tel109.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-psycrisisbench-2025

# src-psycrisisbench-2025

## 서지정보
자살 위험 탐지 벤치마크 3편:
1. PsyCrisisBench, arXiv 2506.01329 (2025) — 항저우 심리지원 핫라인 전사 540건, 64개 LLM(15 모델 패밀리)
2. DeepSuiMind, arXiv 2502.17899 (2025) — 심리 이론 기반 **1,308개** 테스트 케이스(노트의 1,200+는 거친 하한), 암시적 자살 사고
3. SOS-HL-1K, arXiv 2309.03564 (2023) — 중국 SNS 1,249 포스트 고/저 위험

## URL
- https://arxiv.org/abs/2506.01329v2
- https://arxiv.org/abs/2502.17899v1
- https://arxiv.org/pdf/2309.03564

## 라이선스/상업 이용
학술 벤치마크. 데이터 공개 범위·라이선스 개별 확인 필요(중국어 자료).

## 핵심 수치
- PsyCrisisBench: 자살 사고 탐지 F1 **0.880**, 위험 평가 F1 **0.907**, 자살 계획 식별 과제 포함 (특정 태스크·조건의 결과, 모든 LLM·한국어 서비스의 예상 F1 아님)
- DeepSuiMind: 현 LLM이 **암시적(implicit)** 자살 사고 탐지와 적절한 지원에 크게 취약
- SOS-HL-1K: fine-tuned LLM이 성능 크게 향상 (SNS 분류는 개인 임상 위험 판정과 다른 과제)

## 검증 결과
- PsyCrisisBench·SOS-HL-1K: **A**. DeepSuiMind: **B** (1,200+ → 1,308 정정)

## 한벗 적용 포인트
- 명시적 위기 신호는 F1 0.88–0.91 수준 달성 가능하나 **암시적 신호는 취약** → 2단 분류기(명시적 → 즉시 109 안내; 암시적 → 누적 점수 + SER 단서 보조) → [[claim-tech-8-crisis-referral-flow]]
- 한국어 테스트 세트 자체 구축 시 PsyCrisisBench·DeepSuiMind 케이스 번역·현지화 (100–300 케이스 규모는 팀 제안이며 검증된 최소 표본 아님, C) → [[topic-tech-safety-crisis-detection]]
- 관련: [[src-vera-mh-2026-eval-tools]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:53:12.647Z)

## 2026-10-26 논문 보강 (설계서 [P77], [P95])
- [P77] PsyCrisisBench 2025 (중국어): 핫라인 전사 540건, 64개 LLM. 자살 사고 탐지 F1 0.880, 위험 평가 F1 0.907. 등급 A. 한국어 평가 세트의 번역·현지화 출처로 사용.
- [P95] DeepSuiMind 2025 (arXiv 2502.17899v1, 등급 B, 이 페이지를 공유): 1,308 케이스, 현 LLM은 암시적 자살 사고 탐지에 크게 취약. 언어 미확인. 암시 유형 평가 근거. 간접 표현·반어·수동적 사고의 정량 근거는 본문 표 확인 필요(§4).
- 한계: 중국어 전사 기반이며 한국어 대화 발화 성능은 자체 평가 세트 결과로만 말한다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-safety-crisis]] · [[claim-app-5-crisis-ops-and-tel109]]
