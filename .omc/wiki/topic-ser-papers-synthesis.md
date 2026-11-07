---
title: "topic-ser-papers-synthesis"
tags: ["ser", "papers", "synthesis", "korean", "english", "paper-evidence", "topic"]
created: 2026-11-07T11:35:18.148Z
updated: 2026-11-07T11:35:18.148Z
sources: ["research_notes/한벗 논문 보강/ser_papers_synthesis.md", "research_notes/한벗 논문 보강/ser_korean_papers.md", "research_notes/한벗 논문 보강/ser_papers_english.md", "research_notes/한벗 논문 보강/ser_top_journal_papers.md"]
links: ["topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "topic-meeting-followup-ser-2026-11.md", "src-chen-2022-wavlm.md", "src-ma-2024-emotion2vec.md", "src-ma-2024-emobox.md", "src-wagner-2023-transformer-era.md", "src-goncalves-2024-odyssey-challenge.md", "src-chen-2025-listen.md", "src-barrett-2019-emotional-expressions.md", "src-ahfe-2024-kemdy19-ccc.md", "src-sogang-2024-aihub-hubert.md", "src-jeong-2023-kemdy20-context.md", "src-shin-2024-aihub-script-leak.md", "topic-ser-label-scheme-and-fusion.md", "topic-ser-model-comparison-whisper-spectrogram.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-ser-papers-synthesis

# topic-ser-papers-synthesis

상위: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[topic-meeting-followup-ser-2026-11]]. 출처: 한벗 논문 보강/ser_papers_synthesis.md (2026-11-06 동기화), ser_korean_papers.md, ser_papers_english.md, ser_top_journal_papers.md (2026-11-05). 영문 11편 + 국문 10편 종합.

**한 줄 결론**: SER 성능은 모델보다 **데이터 조건**이 더 크게 좌우한다. 연기·낭독은 90%대, 실제 대화는 영어·한국어 모두 4감정 60%대, 8감정 30%대. 한벗은 emotion2vec+를 "감정 판정기"가 아니라 "추정 신호"로 쓰고 한국어 대화 데이터로 직접 성능을 재야 한다.

## 지표 설명
- WA(정확도): 전체 중 맞힌 비율, 중립이 많으면 높게 나옴. UA: 감정별 정답률 평균(불균형에 공정).
- F1/macro-F1: 놓침·헛짚음을 함께 본 점수의 평균. CCC: 정서가·각성 같은 연속값 일치도(1이 최고).
- 화자 분리 평가: 시험 화자를 학습에 쓰지 않음(엄격). 교차 코퍼스: 학습에 안 쓴 다른 데이터로 시험.
- 지표·감정 수가 다른 수치끼리 직접 비교 금지.

## 핵심 규칙 7가지
1. 연기·낭독으로 재면 90% 이상. 서비스 성능 아님.
2. 실제 대화로 바꾸면 크게 하락(4감정 60%대, 8감정 30%대).
3. 화자를 안 나누면 부풀려짐.
4. 처음 보는 데이터에서는 20%p 안팎 하락.
5. 감정 종류가 많을수록 하락, 가장 흔한 오류는 "중립 착각".
6. 정서가가 각성보다 어렵고, 최신 모델은 정서가를 말의 내용으로 보완.
7. 텍스트를 더하면 대체로 오르나 이유를 따져야 함(대본 데이터에서는 정답 누수 가능).

## 영문 논문 (모델 흐름)
- 사전학습 없음(FBANK) 35.4% → wav2vec 2.0 Base 63.4% → HuBERT Large 67.6% → WavLM Large **70.6%** [[src-chen-2022-wavlm]]. emotion2vec IEMOCAP WA 71.8%, 9개 언어 최고 [[src-ma-2024-emotion2vec]]. EmoBox: Whisper-large-v3 32개 중 23개 1위, 처음 보는 데이터 평균 52.0% [[src-ma-2024-emobox]].
- 데이터 종류별 UA: 연기 99% → IEMOCAP 74% → MELD 32% → 팟캐스트 22%.
- Wagner 2023: 정서가 CCC .638, 이유는 말 내용 [[src-wagner-2023-transformer-era]]. Odyssey 2024 대회: 8감정 1위도 macro-F1 0.36, 상위 팀 다수가 텍스트 병행 [[src-goncalves-2024-odyssey-challenge]].
- 음성 LLM(무학습)은 단서 없으면 중립으로 쏠림 [[src-chen-2025-listen]]. VoxEmo(35개 데이터·15개 언어)에서 30개 모두 전용 모델보다 낮음(arXiv 2603.08936). 영문 6편 모두 **한국어 없음**.
- 상위 저널 목록: Latif 2023(IEEE TAC 서베이), Schuller 2018, Akçay 2020, Juslin·Laukka 2003, Cowen 2019(Nat. Hum. Behav., 12 감정 범주), Barrett 2019 [[src-barrett-2019-emotional-expressions]]. IF 값은 제3자 사이트 값이라 JCR 확인 필요. KEMDy를 쓴 SCIE 상위 저널은 못 찾음.

## 국문 논문
| 논문 | 결과 | 신뢰도 |
|---|---|---|
| Bautista 2023 | KEMDy19 정서가·각성 CCC .55 | 화자 분리 안 함 [[src-ahfe-2024-kemdy19-ccc]] |
| Hyeon 2024 | KEMDy19 4감정 UA 66.3% | 화자 분리 [[src-sogang-2024-aihub-hubert]]와 별개 |
| Son·Kwon 2024 | AI Hub 자유대화 7감정 성인 83.5%, 청소년 73.0% | 분리 미보고 |
| Jeong 2023 | KEMDy20 정확도 87.5%, F1 44.2 | 중립·기쁨 95% [[src-jeong-2023-kemdy20-context]] |
| Noh 2021 | KESDy19 4감정 F1 0.59 | 화자 분리 |
| Shin·Shin 2024 | 음성 93.7%, 텍스트만 94.5%, 결합 96.6% | 같은 대본, 부풀림 [[src-shin-2024-aihub-script-leak]] |
- 화자 분리 평가를 한 연구는 모두 50~70% 구간. 믿을 기준: 성우 대화 4감정 59~66%.

## 영문·국문 비교
연기·낭독 85~99% vs 90~96% / 배우·성우 대화 71~74% vs UA 66%·F1 0.59 / 자연 대화 팟캐스트 macro-F1 0.36 vs KEMDy20 F1 44(음성+텍스트), 음성 단독 연구 없음 / emotion2vec 평가: 영어+9개 언어 vs **없음** / 엄격한 평가 비율: 대부분 vs 10편 중 3편.

## 한벗 적용 (제안, 미확정)
- 21편 중 한국어·일반인·고민 대화·스마트폰·emotion2vec+ 조건을 그대로 평가한 연구는 없음. 가장 가까운 근거는 성우 대화 UA 66%, F1 0.59. 일반인은 더 낮을 가능성(추정).
- 모델 후보 emotion2vec+ vs WavLM Large vs Whisper 인코더 동일 조건 비교, 측정 데이터 KEMDy19+KEMDy20+AI Hub 자유대화, 화자 분리 + UA·macro-F1 + "중립 착각" 비율, 4감정 또는 정서가·각성 위주, 전용 SER + Claude 유지(음성 LLM 단일화 금지), SER on/off 비교로 기여 측정, 단정하지 않고 확인 질문.
- 보고 시 한 숫자로 말하지 말고 "성우 대화, 4감정, 화자 분리 기준 UA 66%"처럼 조건 병기. 관련 [[topic-ser-label-scheme-and-fusion]], [[topic-ser-model-comparison-whisper-spectrogram]].

