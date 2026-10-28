---
title: "claim-app-3-emotion-cue-confirmation-rules"
tags: ["app-design", "decision", "ser", "emotion-cue", "confirmation-question", "temporary-criteria", "paper-evidence"]
created: 2026-10-25T14:50:05.792Z
updated: 2026-10-26T05:47:41.450Z
sources: ["reports/한벗 앱 설계서.md#5-4"]
links: ["overview-app-design.md", "topic-app-impl-ser-cues.md", "claim-bench-8-emotion-cue-as-question.md", "src-emotion2vec-2024-github.md", "src-funasr-2026-model-license.md", "src-arxiv-2026-audio-flamingo-iemocap.md", "src-sogang-2024-aihub-hubert.md", "claim-tech-1-ser-model.md", "claim-app-8-hypotheses-h1-h5.md", "claim-app-7-schedule-gates-and-cuts.md", "claim-app-6-consent-and-deletion.md", "claim-app-9-ser-evaluation-and-calibration.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-3-emotion-cue-confirmation-rules

상위: [[overview-app-design]], [[topic-app-impl-ser-cues]]. 이 결정은 [[claim-bench-8-emotion-cue-as-question]]을 수정한다.

## 결정
**SER은 턴 종료 시 비동기로 돌리고 결과는 확인 질문으로만 쓴다. 질문 조건은 점수 0.6 이상 AND 직전 5턴에 확인 질문 없음(5턴 1회) AND 민감정보 동의 ON AND 안전 모드 아님이다. 이 수치는 모두 임시 운영 기준이다. 해당 턴의 Claude 호출 전에 도착하지 않은 SER 결과는 폐기하고 다음 턴에 쓰지 않는다. 확인 질문은 정확도가 아니라 "수용성 지표"로 평가한다.**

## 근거
- emotion2vec+ base는 utterance 단위 9라벨, 약 90M [[src-emotion2vec-2024-github]] (A). 가중치 model-license는 상업 조항 미명시 [[src-funasr-2026-model-license]].
- 평가되지 않은 범주(fearful, disgusted, surprised, other, unknown)는 질문하지 않는다. 4-class(분노/슬픔/기쁨/중립)만 제품 범주(답답함, 가라앉음·지침, 밝음)로 매핑.
- 늦은 결과를 다음 턴에 쓰면 맥락 오류가 생긴다(비평 13). 점수는 "맞을 확률"로 해석하지 않고 Claude에도 넘기지 않는다(비평 12).
- 비교용 수치(영어 IEMOCAP UA 76.15%, 한국어 AI Hub 0.8139 1건)는 한벗 성능 보증이 아니다 [[src-arxiv-2026-audio-flamingo-iemocap]], [[src-sogang-2024-aihub-hubert]]. 상세 규칙·매핑표는 [[topic-app-impl-ser-cues]].
- 등급: 모델·약관 A/B, 임계 근거 없음 → medium.

## 검증 가능 목표
- P0-4: 단정 표현 0건(판정 지침 + 2인 판정, 100턴), 늦게 도착한 SER 결과의 다음 턴 사용 0건(로그), 지표 5종 보고.
- 수용성 지표: 질문 발생률, 확인 수용률(목표 70%, 수용성 목표이며 정확도 아님), 거절률, 무응답률, 침해감(5점), SER 적시 도착률.
- SER 4-class UA 0.70 이상(목표 0.80), 팀 녹음 + 외부 화자 6명 이상.
- W6 핵심 비교: 확인 질문 ON/OFF 교차, 이해받음·침해감·흐름 끊김 3문항 (H3).

## 재검토 조건
- 가중치 라이선스 부정 또는 UA 0.70 미만 또는 적시 도착률 50% 미만(W3 말) → SenseVoice 교체 또는 SER을 P2로 강등 ([[claim-tech-1-ser-model]]).
- H3 반증: ON의 이해받음 점수가 OFF보다 높지 않음, 또는 침해감 "불편" 30% 이상 → SER·확인 질문을 P2로 ([[claim-app-8-hypotheses-h1-h5]], [[claim-app-7-schedule-gates-and-cuts]]).
- 동의 철회 시 즉시 처리는 [[claim-app-6-consent-and-deletion]].

---

## Update (2026-10-26T05:47:41.450Z)

## 2026-10-26 논문 보강
논문 보강으로 달라진 점 (보완 결정: [[claim-app-9-ser-evaluation-and-calibration]]):
- 0.6은 보정 검증 전 확률로 해석하지 않으며, 임계값은 보정 세트에서 질문 적용 비율별 오류율로 고른다 [P39].
- 분노("답답함") 질문은 한국어 분노 재현율·질문 정밀도·문구 대응(2인 판정) 확인 전까지 보류 [P30][P31].
- W6 핵심 비교가 ON/OFF에서 "SER 기반 질문 vs 같은 빈도 일반 확인 질문"으로 바뀜(기억 이월 차단).
- 평가에 Opus 전후·성별·길이 구간·모델 카드 추가 [P33][P34][P40][P44].

