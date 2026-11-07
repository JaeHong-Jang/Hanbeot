---
title: "topic-dev-repos-ser-recipes-2026-11"
tags: ["ser", "github", "recipes", "reproduction", "korean", "kemdy", "grade-A-B-C", "verified-2026-11-08"]
created: 2026-11-07T20:05:15.322Z
updated: 2026-11-07T20:05:15.322Z
sources: ["research_notes/개발자 GitHub 심층 조사/developer_repos_deep_dive.md", ".omc/orchestra/reviews/20261108_044841_verify_developer_repos_deep_dive.md"]
links: ["topic-ser-sota-benchmarks-2026-11.md", "topic-korean-ser-landscape-2026-11.md", "topic-ser-performance-levers-2026-11.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md", "topic-dev-repos-voice-conversation-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md", "src-sensevoice-2026-license-issue-334.md", "src-dimensionstp-2026-multimodal-transformer.md", "src-wu-2026-deer-uncertainty.md", "src-emotion2vec-2026-github-issues.md", "src-qwen-2026-qwen2-audio-emotion-eval.md", "src-ahfe-2024-kemdy19-ccc.md", "src-wagner-2023-transformer-era.md", "src-s3prl-2026-emotion-recognition.md", "src-speechbrain-2026-iemocap-recipe.md", "src-tzeng-2025-lessons-learnt-is2025.md", "src-audeering-2023-w2v2-msp-dim.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-dev-repos-ser-recipes-2026-11

상위: [[topic-ser-sota-benchmarks-2026-11]] · [[topic-korean-ser-landscape-2026-11]] · [[topic-ser-performance-levers-2026-11]] · [[claim-research-1-paper-a-korean-ser-selective-prediction]]. 짝: [[topic-dev-repos-voice-conversation-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]].

출처: 개발자 GitHub 심층 조사 노트(2026-11-08) + 검증표 20261108_044841(A173/B8/C44, **검증표가 우선**). 별·라이선스·push는 2026-11-08 GitHub API 조회(검증표 일치). **A = 원출처와 일치일 뿐 독립 재현·성능 보증이 아님.** 모든 점수는 (분할, 클래스 수, 지표)와 함께 읽는다.

## 한 줄 결론
공개 SER 코드는 영어 MSP-Podcast·IEMOCAP 중심. 실무 우승 코드의 공통점은 백본 교체보다 학습 규율(소프트 타깃·focal/균형·화자 독립 분할·후기 융합 전사 조건 일치)이나, **세 논문이 같은 구성요소를 같은 조건에서 비교하지 않았으므로 효과 순위는 일반화 불가**(검증표 C). 한국어 KEMDy19 학습·평가 코드는 **있음(1건 발견)**: DimensionSTP/multimodal-transformer. 실행 성공·재현 품질은 별도 검증 대상.

## 1. 저장소 표
| 대상 | URL | ★ (조회일) | 라이선스 코드 / 가중치 | 데이터 | 레시피 | 보고 점수 + 프로토콜 주의 | 한국어 | 등급 |
|---|---|---|---|---|---|---|---|---|
| emotion2vec / emotion2vec+ | github.com/ddlBoJack/emotion2vec | 1,210 (push 2024-12-23) | MIT 배지(API 미지정) / FunASR MODEL_LICENSE v1.1 | 사전학습 262h 비라벨, +9클래스 | data2vec식 온라인 증류, 선형-ReLU-선형 헤드, LR 5e-4, 100 epoch. plus: seed(201h, EmoBox 학술) 미세조정 → 의사 라벨 필터링 → base 4,788h·large 42,526h. 세부 미공개 | IEMOCAP 4클래스 WA 71.79 (leave-one-session-out 5-fold). 74.48은 완화 설정 | 한국어 미보고 | A |
| SenseVoice | github.com/QwenAudio/SenseVoice | 9,710 (push 2026-09-30) | MIT / FunASR 협약(상업 해설 미확정, [[src-sensevoice-2026-license-issue-334]]) | ASR+LID+SER+이벤트 태그, ko 지원 | `emo_target`·`event_target` JSONL 미세조정 스크립트 | CASIA 제로샷 70.0 UA/WA(6라벨). 표 대부분 이미지(미판독) | ASR/LID ko 지원, SER 한국어 미보고 | A (라이선스 C) |
| EmoBox | github.com/emo-box/EmoBox | 331 (push 2026-03-18) | MIT 배지(API 미지정) / 코퍼스별 약관 | 32 코퍼스·14개 언어·294.4h | 화자 독립 폴드 규칙, 동결 마지막 층 → LayerNorm → 선형-ReLU-풀링-선형, LR{1e-3,1e-4}×은닉{128,256}, 100 epoch(10 warm-up) | Whisper-large-v3 인코더 23/32 코퍼스 1위. 마지막 층만 평가(층 가중합 빈칸) | **한국어 코퍼스 없음** | A |
| SpeechBrain IEMOCAP ([[src-speechbrain-2026-iemocap-recipe]]) | github.com/speechbrain/speechbrain | 11,928 | Apache-2.0 / - | IEMOCAP 4클래스 | wav2vec2-base, 헤드 LR 1e-4·본체 1e-5, 30 epoch, 배치 4, CNN 동결 | 78.7(최고)/77.0(평균), **무작위 분할 = 화자 누수 가능**. README가 5-fold 권고 | 없음 | A |
| s3prl ER ([[src-s3prl-2026-emotion-recognition]]) | github.com/s3prl/s3prl | - | - | IEMOCAP | 동결 업스트림+가중합, Adam 1e-4, 30,000 step, 누적 8, MeanPooling, 5-fold session | HF 이식본 session1 0.6343 / 0.6258 | 없음 | A |
| audeering w2v2 차원 ([[src-audeering-2023-w2v2-msp-dim]]) | HF audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim + github.com/audeering/w2v2-how-to | 563 (push 2023-05-22) | MIT / **CC-BY-NC-SA-4.0 (연구 전용)** | MSP-Podcast v1.7, 각성·지배·긍정도 | 24→12층 가지치기, CCC 손실, LR 1e-4, 5 epoch, CNN 동결 | MSP CCC 각성 .745 / 지배 .634 / 긍정도 .635(모델카드·본문). 논문 전체 긍정도 최고 .638, 모델별 범위 .359~.636(HuBERT-base) | 없음 | A |
| Whisper 기반 SER (firdhokk 등) | HF/GitHub 소규모 | 0~9 | 다양 | RAVDESS+SAVEE+TESS+URDU(연기 낭독) | whisper-large-v3 전체 미세조정, LR 5e-5, 25 epoch | 0.9199 acc, **분할 미기재 → 점수 인용 금지**. LoRA 저장소 README 미열람(C) | 없음 | A/C |
| MEDUSA (emopodntua) | github.com/emopodntua/medusa | 10 (push 2025-06-30) | MIT | MSP-Podcast(IS2025) 8클래스 | WavLM+HuBERT+Whisper 특징 + 전사 텍스트, DeepSER 교차 모달 융합, 4단계, MixUp p=0.3, 클래스 가중, **RTX 3090 1장** | 테스트 Macro-F1 0.4316 (1위). **소프트 타깃 제거 평균 상대 -8.23%(ablation 중 최대)**, 후기 융합 -6.31% | 없음 | A |
| Tzeng Lessons Learnt ([[src-tzeng-2025-lessons-learnt-is2025]]) | github.com/RogerTzeng/biic_IS2025_SER_Challenge | 2 | MIT | MSP-Podcast | 개별 미세조정 → 동결 융합. 훈련 전사는 정답, 평가 전사는 Whisper 자동 전사 | focal F1-Micro 0.592 vs 가중 CE 0.487 vs 균형 샘플링 0.445 (F1-Macro는 CE와 동일 0.338, 반복 분산 미보고). Task 2 valence CCC 0.6953(1위) | 없음 | A |
| alefiury IS2025 | github.com/alefiury/InterSpeech-SER-2025 | 11 | **LICENSE 없음(재사용 허가 아님)** | MSP-Podcast | F0 양자화 운율 + 그래프 어텐션 | 8위 Macro-F1 39.79% | 없음 | A |
| DimensionSTP/multimodal-transformer | github.com/DimensionSTP/multimodal-transformer | 3 | MIT | **KEMDy19** 음성·텍스트·멀티모달 | README에 학습·평가 명령 존재 | 점수 미열람. 실행·재현 품질 미검증 | **있음** | A(존재)/C(품질). [[src-dimensionstp-2026-multimodal-transformer]] |
| W-Wu/DEER | github.com/W-Wu/DEER | - | - | 불확실성 회귀 | 불확실성 회귀 학습·설정·손실·평가 코드 존재 | 점수 미열람 | 아님 | A(존재). [[src-wu-2026-deer-uncertainty]] |
| Qwen2-Audio / Audio Flamingo 3 / Qwen3-Omni / SALMONN | 각 공식 저장소 | - | Qwen2-Audio·Qwen3-Omni Apache-2.0 / AF3 가중치 NVIDIA 비상업 | MELD·IEMOCAP | 오디오-LLM 제로샷 | Qwen2-Audio MELD 0.553 / 두 번째 표 0.535, AF3 IEMOCAP 63.8 vs Qwen2-Audio-Instruct 59.2. Qwen3-Omni 감정 수치·SALMONN 미열람(C) | Qwen3-Omni는 음성 입력 ko 포함 | A/B |

## 2. 이슈에서 읽은 것 (emotion2vec, 신뢰도 낮음)
- 1~2초 짧은 입력 환각(#41)과 리샘플러(torchaudio vs Sox) 민감도(#61)는 **사용자 보고**이며, 저자 답변은 없거나 일부만 있다. "저자가 인정한 실패 모드"로 쓰지 않는다(검증표 C).
- 저자 답변이 있는 것: #30(길이 제한 없음, VAD로 의미 단위 자르기), #39("특징 표현용은 emotion2vec_base"), #42(융합은 공개 계획 없음), #41(필요 없는 감정은 로짓에서 마스킹하면 이전 모델과 비슷). 이 마스킹을 한국어 4~7클래스에 적용하는 것은 **우리의 구현 제안**이지 저자 공인이 아님.
- #39 EmoDB WA 약 34.2%는 사용자 보고(B), 공식 벤치마크 아님. 상세는 [[src-emotion2vec-2026-github-issues]].

## 3. 오디오-LLM
두 표 차이는 HF 변환 때문(모델 버전 아님), 대역은 약 .54~.64, 서비스 경로 아닌 대조군. [[src-qwen-2026-qwen2-audio-emotion-eval]]

## 4. 점수 인용 금지 목록
| 값 | 이유 |
|---|---|
| SpeechBrain IEMOCAP 78.7 / 77.0 | 무작위 분할, 화자 누수 가능 |
| firdhokk Whisper SER 0.9199 | 분할 미기재, 연기 낭독 코퍼스 |
| HF jungjongho 한국어 0.9876 | 데이터 "None", 1 epoch |
| emotion2vec IEMOCAP 71.79 / 74.48 | 영어, 74.48은 검증=테스트 폴드. 한국어 성능으로 인용 금지 |
| **"KEMDy19 HuBERT 평균 CCC .3573"** | **IEMOCAP 결과**(검증표). KEMDy19 HuBERT 원논문은 전체 감정 .5271, 4감정 .5392 → [[src-ahfe-2024-kemdy19-ccc]] 확인 후 사용. 기존 R8 비교값 폐기 |
| emotion2vec #39 EmoDB 34.2% | 사용자 보고, 모델 벤치마크 아님 |
| 4클래스 UA 70% 목표가 위험하다는 추론 | 8클래스 Macro-F1(.36~.43)과 직접 연결 불가 |
| "소프트 타깃 → focal → 앙상블 순 효과" | 세 논문 조건 불일치, 일반화 불가 |
| SenseVoice 제로샷 CASIA 70.0 | 중국어 6라벨, 한국어 무관 |
| 공급사 보고 점수 전반(Qwen3-TTS 등) | 독립 검증 아님 |

## 5. 정정·보류 항목
- "KEMDy 공개 코드 부재" → **있음(1건 발견)**. 노트의 "찾지 못함"은 검색 로그 없는 조사자 경험이므로 "코드 없음"으로 바꾸지 말 것.
- "불확실성·보정 코드 부재" → DEER에 불확실성 회귀 코드 존재. 온도 스케일링·선택적 예측 코드는 별도 조사 필요(범위 미확정). Chou 연구의 ConsCal은 해당 논문에서 확인되지 않음(C).
- audEERING 논문은 개별 화자 수준 CCC 분석과 공정성 문제를 **보고함**(노트의 "미보고"는 오류). 성별 그룹 외 화자별 분석 포함. 합성 음성 실험으로 암묵적 언어 정보 학습을 시사. 상세는 [[src-wagner-2023-transformer-era]].
- emotion2vec 상업 이용 가능성: SenseVoice 잠정 해설을 전용할 수 없음(C). 비방 시 라이선스 박탈 조항 때문에 논문에서는 조건·수치 서술만.
- SenseVoice를 "유일한 경량 경로"로 단정하지 않음(대안 전수 비교 없음, C).

