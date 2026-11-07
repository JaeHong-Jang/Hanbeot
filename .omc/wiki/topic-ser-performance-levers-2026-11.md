---
title: "topic-ser-performance-levers-2026-11"
tags: ["scopus-2026-11", "ser", "performance-levers", "ablation", "selective-prediction", "verified"]
created: 2026-11-07T19:53:30.326Z
updated: 2026-11-07T19:53:30.326Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-sota-benchmarks-2026-11.md", "topic-ser-preprocessing-pipeline-evidence.md", "topic-ser-label-count-calibration-evidence.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md", "src-chatzichristodoulou-2025-medusa.md", "src-feng-2025-sailer-is25-ser.md", "src-ma-2023-synthetic-tts-ser.md", "src-wagner-2023-transformer-era.md", "src-deoliveira-2023-distilled-audio-text-ser.md", "src-ma-2024-emobox.md", "src-tran-2023-personalized-adaptation.md", "src-sridhar-2022-unsupervised-personalization.md", "src-zhang-2026-voxemo-speech-llm-ser.md", "src-emodistill-2024-prosody-linguistic-distillation.md", "src-chen-2023-wav2vec-tapt.md", "src-hyeon-2025-segmental-pooling.md", "src-schrufer-2024-uq-ser.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-ser-performance-levers-2026-11

# topic-ser-performance-levers-2026-11

관련: [[topic-ser-sota-benchmarks-2026-11]] · [[topic-ser-preprocessing-pipeline-evidence]] · [[topic-ser-label-count-calibration-evidence]] · [[claim-research-1-paper-a-korean-ser-selective-prediction]].

이득은 **각 논문 안 ablation 값**이고 지표·단위(상대 %, %p, CCC)가 달라 더하거나 순위화할 공통 실험이 없다. 순위는 이득 일관성 + 비용에 대한 작성자 판단(C, 검증이 "확인불가"). 한국어 재현 보장 없음.

## 1. 레버 표
| 순위 | 레버 | 이득(원 논문) | 비용 | 출처 | 등급 |
|---|---|---|---|---|---|
| 1 | 소프트 라벨(주석자 분포) | MEDUSA: 제거 시 F1 상대 -8.23% (표 반올림값으로 재계산하면 -7.60%, 분모 명시 필요). **MEDUSA 손실은 소프트 타깃 가중 CE + MSE (KL 아님)**; KL 분포 손실은 SAILER | 거의 0(투표 파일 필요) | [[src-chatzichristodoulou-2025-medusa]] · [[src-feng-2025-sailer-is25-ser]] | A |
| 2 | 앙상블 + 메타 분류기 | MEDUSA 최고 단일 대비 상대 +7.23% (내부 평가셋). SAILER 개발셋 0.411 -> 0.431 (+0.020) | 높음(14모델)/중간(3모델). 서비스 지연상 논문 전용 | 같음 | A |
| 3 | 층 가중합 | 동결 data2vec IEMOCAP WA 64.52 -> 68.02 (+3.50), UA +1.73 | 낮음 | [[src-ma-2023-synthetic-tts-ser]] | A |
| 3 | 전체 미세조정 > 동결 | 시험한 모델·조건 안에서 전 차원 우위, valence에서 큼 | 높음(GPU) | [[src-wagner-2023-transformer-era]] | A |
| 4 | 음성 + 텍스트 deep fusion | MEDUSA: late fusion으로 교체 시 F1 상대 -6.31% (재계산 -5.94%) | 중간 | MEDUSA, [[src-deoliveira-2023-distilled-audio-text-ser]] | A |
| 5 | 백본 Whisper-L-v3 | EmoBox IEMOCAP UA 73.54 vs WavLM-L 69.47 (+4.07). 32코퍼스 중 23곳 1위 | 낮음 | [[src-ma-2024-emobox]] | A |
| 6 | 화자 개인화 | MSP valence O-CCC 0.607 -> 0.665 전체 테스트 (test-b 0.663); arousal 0.712 -> 0.740. Sridhar 2022 valence 상대 최대 +13.52% | 중간 | [[src-tran-2023-personalized-adaptation]] · [[src-sridhar-2022-unsupervised-personalization]] | A/B |
| 7 | 합성 TTS 데이터 | 커리큘럼 WA +4.05, UA +2.64; **단순 혼합 -0.28(이득 0)**. 합성:실제 1:2 최적(이 실험) | 낮음~중간 | [[src-ma-2023-synthetic-tts-ser]] | A |
| 8 | 음성 LLM LoRA SFT | 제로샷 대비 평균 macro-F1 +23.7 (Qwen2-Audio), 지도 기준선 30곳 중 10곳 상회 | 높음 | [[src-zhang-2026-voxemo-speech-llm-ser]] | A |
| 9 | 선택적 예측(보류) | 아래 §2 | 낮음(임계값), 커버리지 희생. MC dropout은 반복 추론 비용 | Sridhar 2019/2020/2021 | A/B |
| 10 | focal vs 가중 CE | F1-micro 0.592 vs 0.487 (Tzeng). F1-macro는 0.338로 CE와 동일, 반복 분산 미보고 | 거의 0 | Tzeng Lessons Learnt (v3 R6) | B |
| 11 | 증류 / 소형 백본 | DistilHuBERT 파라미터 약 15%(오디오), 약 20%(오디오+텍스트) | 낮음 | [[src-deoliveira-2023-distilled-audio-text-ser]] · [[src-emodistill-2024-prosody-linguistic-distillation]] | A |
| 12 | TAPT | Chen 2023 UA 절대 +7.4%p는 **최종 시스템 대 이전 SOTA**이며 TAPT 단독 효과 아님(검증 정정). Tran에서 TAPT 단독 valence +0.023 | 중간 | [[src-chen-2023-wav2vec-tapt]] | A |
| 13 | 풀링·다중 과제·증강 | GAP+SAP: IEMOCAP UA +1.70, KEMDy19 +1.92 (CI 겹침). 다중 과제 macro-F1 +0.005이나 소수 클래스 mAP 하락 | 낮음 | [[src-hyeon-2025-segmental-pooling]] | A(작음) |

## 2. 선택적 예측·보정 수치
- Sridhar 2019: 커버리지 75%에서 F1 상대 최대 +25.71%(5범주), +20.63%(8범주) (A).
- Sridhar 2020: 불확실도 상위 25% 거부 시 CCC 상대 arousal +7.34 / valence +13.73 / dominance +8.79% (A). 절대로는 기준값 0.3~0.5에서 +0.041~0.069.
- Sridhar 2021: V/A/D 상대 +16.85/+7.12/+8.01% (초록 명시. 노트의 "수치 초록에 없음"은 정정).
- Chou 2023: ECE 0.335 -> 0.276 (BCE), 0.311 -> 0.263 (CBL+TS); macro-F1 최고 조합 ECE 0.328 -> 0.270 (검증 A).
- Schrufer 2024: 불확실도와 주석 일치도 상관 약함(-.08~-.19) [[src-schrufer-2024-uq-ser]].
- **AURC/AUARC를 보고한 SER 논문은 이번 읽은 범위에서 0건. ECE 보고도 Chou 2023뿐**("찾지 못함"이며 분야 전체 부재 증명 아님, C).
- 모든 거부 이득은 영어·회귀(CCC) 또는 F1이며 한국어 UA 개선 폭의 직접 근거가 아님.
