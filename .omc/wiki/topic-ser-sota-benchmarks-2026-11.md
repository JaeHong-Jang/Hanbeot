---
title: "topic-ser-sota-benchmarks-2026-11"
tags: ["scopus-2026-11", "ser", "benchmark", "sota", "protocol", "verified"]
created: 2026-11-07T19:53:28.083Z
updated: 2026-11-07T19:53:28.083Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md", "reports/한벷 최종 계획 v3.md"]
links: ["topic-ser-preprocessing-pipeline-evidence.md", "topic-ser-label-count-calibration-evidence.md", "claim-app-9-ser-evaluation-and-calibration.md", "topic-ser-performance-levers-2026-11.md", "topic-korean-ser-landscape-2026-11.md", "src-goncalves-2024-odyssey-challenge.md", "src-isca-2025-msp-podcast-challenge.md", "src-chatzichristodoulou-2025-medusa.md", "src-feng-2025-sailer-is25-ser.md", "src-tran-2023-personalized-adaptation.md", "src-wagner-2023-transformer-era.md", "src-ma-2024-emobox.md", "src-emodistill-2024-prosody-linguistic-distillation.md", "src-hyeon-2025-segmental-pooling.md", "src-ma-2024-emotion2vec.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-ser-sota-benchmarks-2026-11

# topic-ser-sota-benchmarks-2026-11

관련: [[topic-ser-preprocessing-pipeline-evidence]] · [[topic-ser-label-count-calibration-evidence]] · [[claim-app-9-ser-evaluation-and-calibration]] · [[topic-ser-performance-levers-2026-11]] · [[topic-korean-ser-landscape-2026-11]]. 출처: 노트 05 + 검증표(A84/B27/C41, 2026-11-08). 서로 다른 논문의 수치는 프로토콜이 달라 직접 비교 불가. "2026년 전역 SOTA"가 아니라 아래 챌린지·버전·평가셋 한정 값(C).

## 1. MSP-Podcast (자연 발화)
| 과제·프로토콜 | 지표 | 기준선 | 최고 | 출처 | 등급 |
|---|---|---|---|---|---|
| Odyssey 2024 Task 1, 8범주, 균형 테스트, 31팀 | macro-F1 | 0.3113 | 1위 0.3569 (Sheffield-MINI), 2위 0.3543, 3위 0.3441 | [[src-goncalves-2024-odyssey-challenge]] | A |
| Odyssey 2024 Task 2 속성 | CCC 평균 | 0.5327 (기준선이 1위) | 참가팀 최고 0.5297 | 같음 | A |
| IS25 Task 1, 8범주, 93팀 | macro-F1 | 0.329 | 1위 MEDUSA 0.4316 (14모델 앙상블), 2위 SAIL 0.4281, 3위 ABHINAYA 0.4181 | [[src-isca-2025-msp-podcast-challenge]] · [[src-chatzichristodoulou-2025-medusa]] · [[src-feng-2025-sailer-is25-ser]] | A |
| IS25 Task 2 속성 | CCC 평균 | 0.579 (A 0.623/V 0.638/D 0.477) | **최우수 SAIL 시스템의 세 속성 평균 0.6076**(챌린지 평균이 아님, 검증 정정), 2위 0.6003, 3위 0.5955 | 같음 | A |
| MSP v1.6 valence | O-CCC | 비교 0.627 | **0.665 전체 테스트**(Tran 2023). 0.663은 test-b 값 | [[src-tran-2023-personalized-adaptation]] | A |
| MSP valence (구버전, 음성만) | CCC | - | 0.638 (Wagner 2023), arousal 0.745, dominance 0.634 | [[src-wagner-2023-transformer-era]] | A |
| EmoBox 구성 (동결 + 얕은 헤드) | UA/WA/F1 | - | Whisper-L-v3 22.24/44.10/22.12 | [[src-ma-2024-emobox]] | A |

- 2024->2025 최고점 차 +0.0747이지만 데이터 버전·학습량·테스트 구성이 달라 방법만의 연간 향상이 아님(B).
- 균형 단일 라벨 테스트셋에서는 **macro-recall(UA) = accuracy**. macro-F1 동일은 보장되지 않음(MEDUSA macro-F1 0.4316, accuracy 0.4319). "8범주 절반 미만 정답"은 accuracy로 뒷받침.
- 상위팀 비율(76% 멀티모달, 앙상블 95% 등)은 기준선 초과·설문 응답 17팀(Task 1)/8팀(Task 2) 기준.

## 2. IEMOCAP 4범주 (화자 독립)
| 프로토콜 | UA | WA | 방법 | 출처 |
|---|---|---|---|---|
| LOSO-10 | **77.49** | 78.91 | EmoDistill (화자 독립 확정, 최고 확인값) | [[src-emodistill-2024-prosody-linguistic-distillation]] (A) |
| LOSO-10 (8/1/1) | 75.57 (95% CI 72.25~78.89) | 74.77 | WavLM-L 전체 미세조정. 천장이 아니라 확인된 값 | [[src-hyeon-2025-segmental-pooling]] (A) |
| 5-session, 동결 + 선형 | - | 71.79 | emotion2vec | [[src-ma-2024-emotion2vec]] (A) |
| EmoBox 5-session | 73.54 | 72.86 | Whisper-L-v3 (WavLM-L 69.47, HuBERT-L 67.42) | [[src-ma-2024-emobox]] (A) |
- "UA 73~76 현실 상한"은 EmoDistill 때문에 철회. CI 폭 약 +-3.3%p라 1%p 차이는 노이즈라는 말은 개별 CI만으로 차이 유의성을 못 정하므로 대응 비교가 필요(C).

## 3. KEMDy (한국어)
| 데이터 | 프로토콜 | 결과 | 출처 |
|---|---|---|---|
| KEMDy19 4범주 7,944발화 (angry 1,530/happy 1,313/neutral 4,328/sad 773) | LOSO-40 (38/1/1) | UA 66.26 (CI 64.59~67.93) / WA 68.27 (CI 66.82~69.72); GAP만 64.34/66.62 | Hyeon (A) |
| 다수 클래스 기준선 | - | neutral 54.5% (4,328/7,944 = 54.48%) | 계산 (B) |
| KEMDy20 / AI Hub | - | 화자 독립 + UA/F1 + CI 보고를 초록 범위에서 못 찾음(부재 증명 아님) | C |
- KEMDy20은 외부 평가자 10명이 범주·arousal·valence를 주석, VA 라벨 존재, ETRI 원문상 neutral 86.5%(A, 추가 확인). 배포 파일의 평가자별 라벨 제공 여부는 별도 확인 필요.

## 4. 프로토콜 인플레이션
| 요인 | 크기 | 출처·등급 |
|---|---|---|
| 화자 의존 vs 독립 | HuBERT-L 79.6 SD -> 73.0 SI (-6.6, 다른 논문 재인용 표라 B); 이중모달 86.75 -> 64.04 (-22.71, accuracy, A) | Wagner 2023, Annals Telecom. 2025 |
| 검증 = 테스트 fold | emotion2vec +2.69/+4.70%p | emotion2vec 표 2 (A) |
| 연기 vs 자연 (같은 모델·헤드) | CREMA-D 76.75 vs MELD 31.54 vs MSP-Podcast 22.24. 범주·자료·분할이 달라 연기 효과 크기로만 해석 금지 | EmoBox (A) |
| accuracy vs F1 | KEMDy20 accuracy 87.49 vs F1 44.16 (43.33점 차; 지표 간 차이를 부풀림 크기로 해석 금지) | Mathematics 2023 (B) |
- 높은 IEMOCAP 수치(예: 80% 초과)는 분할을 확인해야 하며 점수만으로 누수를 추정할 수 없다(C).
- 한벗 논문 규칙: 테스트 화자 분리, 검증도 train 내 별도 화자, UA·macro-F1 + 다수 클래스 병기, 화자 단위 부트스트랩 CI, 영어 비교는 EmoBox 분할, 점수 옆에 (분할, 클래스 수, 지표).
