---
title: "claim-research-3-reproduction-experiments-r0-r8"
tags: ["claim-research", "reproduction", "kemdy", "emobox", "plan", "ser", "estimate"]
created: 2026-11-07T20:06:11.059Z
updated: 2026-11-07T20:06:11.059Z
sources: ["research_notes/개발자 GitHub 심층 조사/developer_repos_deep_dive.md", ".omc/orchestra/reviews/20261108_044841_verify_developer_repos_deep_dive.md"]
links: ["claim-research-1-paper-a-korean-ser-selective-prediction.md", "topic-dev-repos-ser-recipes-2026-11.md", "topic-korean-ser-landscape-2026-11.md", "lab-etri-noh-kyoungju-kemdy.md", "src-dimensionstp-2026-multimodal-transformer.md", "src-ahfe-2024-kemdy19-ccc.md", "src-wu-2026-deer-uncertainty.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-research-3-reproduction-experiments-r0-r8

상위: [[claim-research-1-paper-a-korean-ser-selective-prediction]] · [[topic-dev-repos-ser-recipes-2026-11]] · [[topic-korean-ser-landscape-2026-11]] · [[lab-etri-noh-kyoungju-kemdy]].

## 주장 (제안, 실험 전)
한국어 자연 대화 SER 논문 A와 서비스 게이트 설계를 위해 R0~R8을 이 순서로 재현·측정한다. 근거 노트(2026-11-08 §D)의 계획이며, 모든 시간·GPU는 **추정(C, 검증표: 산정 근거 없음)**이다.

## 정정된 전제
- 원 노트는 "한국어 KEMDy 공개 재현 코드 부재"를 전제로 했으나 검증표가 반박: **DimensionSTP/multimodal-transformer**(3★, MIT)에 KEMDy19 음성·텍스트·멀티모달 학습·평가 명령이 있음([[src-dimensionstp-2026-multimodal-transformer]]). 따라서 **R1은 이 프로토콜을 기준선(baseline)으로 먼저 재현·비교**하고, EmoBox 규칙(화자 독립 n-fold)으로 같은 데이터를 다시 분할해 대조한다. 기여는 "코드 부재"가 아니라 "누수 없는 분할 + 보정/선택적 예측 + 층 가중합 빈칸"으로 서술.
- "KEMDy19 HuBERT CCC .3573"은 IEMOCAP 값이므로 R8 비교값에서 삭제. KEMDy19 HuBERT 원논문 값(전체 .5271, 4감정 .5392)은 [[src-ahfe-2024-kemdy19-ccc]]에서 재확인 후 사용.
- 불확실성 코드는 DEER 존재([[src-wu-2026-deer-uncertainty]]) → R7은 DEER 또는 온도 스케일링 비교로 확장 가능.
- KEMDy19/20 이용 조건은 이번 검증에서도 공식 페이지 접속 실패(C). 사용 전 ETRI 동의 확인.

## 원칙
① 화자 독립 분할 ② 영어 대조(IEMOCAP)로 구현 검증 ③ 한국어에 같은 코드 ④ 지표 UA·WA·Macro-F1 + ECE, 점수에 (분할, 클래스 수, 지표) 병기.

## 실험표 (시간·GPU는 모두 추정)
| ID | 내용 | 시간(추정) | GPU(추정) | 결과가 먹이는 곳 |
|---|---|---|---|---|
| R0 | EmoBox IEMOCAP 5-fold + emotion2vec_base 선형 헤드로 논문 WA 71.8(원값 71.79) 근방 확인 | 반나절 | 12GB+ | 파이프라인·지표 구현 검증. 재현 성공 여부는 실측 전 미정 |
| R5 | emotion2vec+ 제로샷 + 로짓 마스킹, 길이별(<1s, 1–2s, 2–4s, >4s) UA 분해(구간은 제안, 이슈 #41은 1~2초 사용자 보고만 뒷받침) | 1일 | 12GB | 서비스 게이트: 최소 길이/신뢰도 임계 |
| R6 | 리샘플러 민감도: torchaudio vs sox vs 서비스 경로, 라벨 뒤집힘 비율·KL, 표본 500+. 이슈 #61은 사용자 보고. 재추론 GPU 불필요 여부는 처리량 확인 필요 | 1~2일 | 미정 | 서비스 입력 경로 고정, 논문 문제 규정 절 |
| R1 | DimensionSTP 기준선 재현 + EmoBox 프로토콜(동결 마지막 층 → LayerNorm → 선형-ReLU-풀링-선형, LR{1e-3,1e-4}×은닉{128,256}, 100 epoch)로 KEMDy20 자유 대화 4·7클래스. 백본 emotion2vec_base/plus_large, WavLM-large, Whisper-large-v3 인코더, hubert-base-korean, XLS-R-300M | 특징 추출 1~2일 + 헤드 수 시간 | 24GB | 논문 A 기준선, 한국어 폴드 공개 |
| R2 | S3PRL식 층 가중합 vs 마지막 층 | +1일 | 24GB (층별 특징 보관 방식에 좌우) | EmoBox 저자가 남긴 빈칸, 논문 기여 후보 |
| R7 | 검증셋 온도 스케일링, ECE, 위험-커버리지 곡선(R1·R3 출력), DEER 비교 | 3일 | CPU | 선택적 예측(논문 A 핵심), 서비스의 "아무것도 안 함" 임계 |
| R3 | MEDUSA 축소판: 소프트 타깃 + 균형 + MixUp p=0.3 + 클래스 가중 + 모델 수프. KEMDy 평가자별 원라벨 제공 여부 **미확인** | 3~5일 | 24GB | 손실·라벨 규율 ablation |
| R4 | Tzeng 2단계: 음성·텍스트 개별 미세조정 → 동결 융합, focal vs 가중 CE vs 균형. 평가 전사는 RTZR 출력 | 1주 | 24~40GB | 텍스트 융합 설계 |
| R8 | 오디오-LLM 대조군(Qwen3-Omni 제로샷), audeering 구조 차원 헤드, SenseVoice 태그 병합 | 각 2~7일 | 24~80GB | 상한/대조군. 라이선스 NC(audeering·AF3)로 서비스 불가 |

## 순서
R0 → R5 → R6 → R1 → R2 → (R7 병행) → R3/R4. R5·R6을 먼저 하는 이유: 짧은 실험이고 서비스 게이트 설계에 바로 쓰이며 논문 문제 규정에도 쓰임("며칠 내 완료"는 검증되지 않은 제안).

## 평가 위생
SpeechBrain 78.7(무작위 분할), firdhokk 0.92(분할 불명), 한국어 HF 0.98(데이터 불명)은 표에 넣지 않는다. 점수 인용 금지 전체는 [[topic-dev-repos-ser-recipes-2026-11]].

## 열린 질문
- DimensionSTP 코드가 실제로 재현되는지(데이터 접근·환경 포함).
- KEMDy20 평가자별 라벨 유무(R3 전제).
- GPU 자원(보유/대여)과 실제 소요: 모든 추정치는 R0 실측 후 갱신.

