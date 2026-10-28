---
title: "claim-app-9-ser-evaluation-and-calibration"
tags: ["app-design", "decision", "ser", "evaluation", "calibration", "h3", "paper-evidence"]
created: 2026-10-26T05:46:21.137Z
updated: 2026-10-26T05:46:21.137Z
sources: ["reports/한벗 기술 논문 근거.md#2-1"]
links: ["overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-tech-1-ser-model.md", "src-ma-2024-emotion2vec.md", "src-sereval-2024-whisper-crosslingual.md", "src-ma-2024-emobox.md", "src-sogang-2024-aihub-hubert.md", "src-romana-2025-switchboard-affect.md", "src-kawaoto-2025-acted-natural-ser.md", "src-chou-2023-ser-calibration.md", "src-ren-2024-emo-codec.md", "claim-app-8-hypotheses-h1-h5.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-9-ser-evaluation-and-calibration

상위: [[overview-app-design]], [[topic-app-paper-evidence]], [[topic-app-impl-ser-cues]]. 이 결정은 [[claim-app-3-emotion-cue-confirmation-rules]]와 [[claim-tech-1-ser-model]]을 보완한다(2026-10-26).

## 결정
**SER은 판정이 아니라 확인 질문의 계기로만 쓴다. 한국어 정확도는 문헌으로 보장되지 않으므로 W3(11/10~11/16)에 자체 평가하고, 합격선 UA 0.70은 유지한다. 0.6 임계값은 보정 검증 전에는 확률로 해석하지 않는다. 분노("답답함") 질문은 질문 정밀도와 문구 대응을 확인할 때까지 보류한다.**

## 근거
- emotion2vec 원 논문(P20 [[src-ma-2024-emotion2vec]]), SER Evals(P21 [[src-sereval-2024-whisper-crosslingual]]), EmoBox(P22 [[src-ma-2024-emobox]])는 한국어를 평가하지 않았다. emotion2vec+ 한국어 평가는 이번 검색에서 미발견.
- P21: 미관측 코퍼스에서 모델별 평균 macro-F1이 약 0.67~0.78에서 0.13~0.20으로 하락(B, emotion2vec+ 미포함, 일반화 실패 사례로만 인용).
- P26 [[src-sogang-2024-aihub-hubert]] 0.8139는 정확도이고 화자 분할 미확인 → UA 0.70과 직접 비교 금지.
- P31 [[src-romana-2025-switchboard-affect]]: 영어 전화 대화에서 α 0.25, IEMOCAP 미세조정 Emotion2Vec 분노 F1 0.000. P30 [[src-kawaoto-2025-acted-natural-ser]]: 연기 코퍼스 수치를 자연 발화로 옮기지 않는다.
- P39 [[src-chou-2023-ser-calibration]]: 저신뢰 거부는 보정을 전제. P34 [[src-ren-2024-emo-codec]]: Opus 포함 코덱에서 SER 저하. P40 성별 격차, P33 짧은 입력 하락.
- P43은 배경 근거(B)일 뿐 확인 질문의 효과 증거가 아니다.

## 평가 설계 (W3)
- 정답: 4-class. 공개 데이터는 원 라벨, 팀 녹음은 2인 독립 판정 + Cohen's κ, 불일치는 "판정 불가"로 제외하고 제외 수를 보고.
- 세트: 화자가 겹치지 않는 개발·보정(임계값 선택)·최종 3세트. 최종 평가 전 모델·라벨 매핑·임계값 동결.
- 주지표: 최종 세트 UA + 화자 단위 부트스트랩 95% 구간(합격 0.70, 목표 0.80). 탐색 지표: 클래스별 재현율·정밀도, 성별, 길이(2초 미만/이상), Opus 전후. 판정에는 쓰지 않고 보고만.
- 질문 관점: 임계값별 질문 적용 비율과 질문 정밀도, 질문 적용 비율별 오류율로 임계 선택.
- 모델 카드(P44)에 집단별 성능·의도 사용·평가 방법 공개.
- 표본 참고(독립 이항 근사): 정확도 0.70에서 반폭 n=100 ±9.0%p, n=200 ±6.4%p, n=400 ±4.5%p. **이 값은 UA와 화자 군집에 그대로 적용할 수 없다.** "200발화·20화자·클래스당 50건"은 검정력 계산값이 아니다.

## 사용자 비교 실험 (W6 12/01~12/07)
- 가설 하나: SER 기반 확인 질문 vs **같은 빈도의 일반 확인 질문**(감정 범주 언급 없음). 질문 ON/OFF 효과는 이번 가설이 아니다.
- 참가자 내 교차, 순서 무작위. 세션 1·2에서 "한벗이 느낀 것" 기억은 다음 세션에 이월하지 않는다.
- 주지표 "이해받음" 5점. 보조: 침해감, 흐름 끊김, 거절률, 질문 정밀도. 불편 30%는 기능 강등용이며 개인 단위 강도·지속·심각 반응을 따로 기록, 심각 반응 1건이면 해당 참가자 질문 OFF + 자문 보고.

## 팀 결정 필요 (W1)
화자 수·클래스별 발화 수(목표 구간 폭 기준), 최소 의미 효과, 예상 탈락률, 분석 방법 문서 고정 시점.

## 재검토 조건
UA 0.70 미달, Opus 후 급락, 분노 질문 정밀도 미달, H3 반증 시 SER을 P2로 강등 ([[claim-app-8-hypotheses-h1-h5]]). 미확인 항목은 [[topic-app-paper-evidence]] 4절 참조.

