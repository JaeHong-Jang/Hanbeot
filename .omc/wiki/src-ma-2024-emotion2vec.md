---
title: "src-ma-2024-emotion2vec"
tags: ["tech", "speech-emotion-recognition", "grade-A", "ser", "emotion2vec", "paper-evidence", "ser-limits"]
created: 2026-10-25T07:13:14.186Z
updated: 2026-10-26T05:51:48.756Z
sources: ["https://arxiv.org/html/2312.15185", "https://arxiv.org/pdf/2502.18186"]
links: ["src-emotion2vec-2024-github.md", "topic-tech-speech-emotion-recognition.md", "claim-tech-1-ser-model.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-ma-2024-emotion2vec

# src-ma-2024-emotion2vec

## 서지정보
Ma et al., "emotion2vec: Self-Supervised Pre-Training for Speech Emotion Representation", ACL Findings 2024. arXiv 2312.15185.

## URL
- https://arxiv.org/html/2312.15185

## 라이선스/상업 이용
논문 자체는 arXiv 공개. 코드/가중치 라이선스는 [[src-emotion2vec-2024-github]] 참조(코드 MIT, 가중치는 `model-license` 별도).

## 핵심 수치 (원본 emotion2vec, emotion2vec+가 아님)
- IEMOCAP linear-probe WA **71.79%** (WavLM Large 70.03, HuBERT Large 67.62, data2vec 2.0 base 68.58, Vesper-12 70.70)
- 백본 93.79M 파라미터 + downstream linear head 0.20M
- 감정 사전학습 데이터 262시간(IEMOCAP, MELD, MEAD, CMU-MOSEI, MSP-Podcast)
- 비영어 9개 데이터셋 WA: 그리스어 72.33, 프랑스어 74.52, 러시아어 64.75, 독일어 84.34, 이탈리아어 61.21, 중국어 49.15, 벵골어 90.91, 페르시아어 79.97, 우르두어 81.50 — 모두 data2vec 2.0 상회
- **한국어 데이터셋은 평가에 포함되지 않음** (이 논문에 없다는 뜻이며, 한국어 공개 연구 전무의 증명은 아님)

## 검증 결과
- 등급 **A** (5개 수치 묶음 모두 원문 Table과 일치)
- 정정 1: 71.79%는 **원본 emotion2vec**의 결과. emotion2vec+ base/large의 정확도로 옮겨 적으면 안 됨 (리서치 노트 부록 표 오류 → 수정 적용)
- 정정 2: 후속 논문 arXiv 2502.18186의 "Emotion2Vec-S를 Emo-Emilia로 fine-tune" 주장은 **불일치(C)** — Emo-Emilia는 **평가용 테스트 세트**로 기술됨
- 주의: HTML 표 머리글 일부 오기 있음, 지표 열 주의

## 한벗 적용 포인트
- SER 백본 1순위 후보의 원 논문. 한국어 성능은 KEMDy20/AI Hub로 팀이 직접 벤치마크해야 함 → [[topic-tech-speech-emotion-recognition]], [[claim-tech-1-ser-model]]
- 사업계획서에는 "71.79%(IEMOCAP, 영어, 원본 모델)"로만 인용하고 한국어 성능 미확인을 명시

확인일: 2026-10-25

---

## Update (2026-10-26T05:51:48.756Z)

## 2026-10-26 논문 보강 (설계서 [P20])
- 수치: 원본 emotion2vec의 IEMOCAP linear-probe WA 71.79%. 비영어 9개 데이터셋을 평가했으나 한국어는 없다.
- 교정: 이 수치는 emotion2vec+(한벗 후보)의 것이 아니다. "emotion2vec+ 한국어 평가 논문 없음"은 "이번 검색에서 미발견"으로만 쓴다(§4).
- 적용: UA ≥ 0.70 합격선은 이 논문이 보장하지 않으며 한국어 성능은 W3 자체 벤치마크로 측정.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
