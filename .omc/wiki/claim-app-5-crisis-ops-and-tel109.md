---
title: "claim-app-5-crisis-ops-and-tel109"
tags: ["app-design", "decision", "crisis", "safety", "tel109", "operations", "paper-evidence"]
created: 2026-10-25T14:50:41.464Z
updated: 2026-10-26T05:47:43.978Z
sources: ["reports/한벗 앱 설계서.md#5-9"]
links: ["overview-app-design.md", "topic-app-impl-safety-crisis.md", "claim-tech-8-crisis-referral-flow.md", "src-wysa-2024-ai-crisis-detection-study.md", "claim-bench-3-safety-protocol.md", "topic-tech-safety-crisis-detection.md", "claim-app-7-schedule-gates-and-cuts.md", "claim-app-10-crisis-state-machine-and-evaluation.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-5-crisis-ops-and-tel109

상위: [[overview-app-design]], [[topic-app-impl-safety-crisis]]. 수정 대상: [[claim-tech-8-crisis-referral-flow]]

## 결정
**위기 분류는 2단 구조로 확정한다: (1) 로컬 KeywordGate(Claude 호출 전, 양성이면 즉시 안전 모드) + (2) Claude 응답 호출 첫 줄 위험 태그 `<risk>L0|L1|L2</risk>`(추가 호출 없음). L1이면 생성문 폐기 후 사전 합성 안전 스크립트와 109 카드. 위기 운영 책임은 PM·안전(부책임 AI)이며 팀은 실시간 상담·개입을 하지 않는다. 109는 `tel:` 링크 + 큰 글씨 번호 + [번호 복사] + 지역 정신건강복지센터 병기 수준으로 제공한다. 평가 세트 성능은 실제 안전성 보증이 아니다.**

## 근거
- 비평 9: 분류 호출 구조 충돌 해소. 별도 분류 호출은 W3 태그 준수율 99% 미만 또는 L1 재현율 미달 시의 대안.
- 비평 16: 운영 범위 불명확 → 자동 안내 24시간, 팀 로그 점검 W6 매일 1회(실시간 아님), 온보딩·설정 고지. 민감정보 비동의 사용자는 점검 불가 한계를 보고에 기재.
- `tel:109` 실패는 앱이 감지할 수 없고 109 공식 API·연계 가이드라인은 확인하지 못함(C). 긴급 신고 번호 병기 여부는 자문 후 확정.
- 비평 14: 개발 세트와 동결 평가 세트 분리, 유형별 표본·오탐 분모·95% 신뢰구간, 탈옥 20개는 그 20개의 결과로만 해석. 비평 17: Wysa 핫라인 선택 2.4%는 관찰값일 뿐 효과 근거 아님 [[src-wysa-2024-ai-crisis-detection-study]].
- L2 점수·재안내 횟수·해제 3턴은 임시 운영 기준. 음성 단서 단독으로는 L2 점수가 오르지 않는다.
- 근거 문서: [[claim-bench-3-safety-protocol]], [[topic-tech-safety-crisis-detection]]. 등급: 구조는 설계 확정, 효과 미입증 → medium.

## 검증 가능 목표
- P0-6(평가 세트 성능): 유형별 명시 위기 재현율 0.90 이상, 오탐 10% 이하(분모 = 비위기 대조), 95% CI 보고, 태그 형식 준수율 99% 이상, 탈옥 20개. 결과는 "테스트 세트 성능"으로만 표기.
- 사용자 테스트 시작 게이트 1·2·5번: 평가 통과, 전문가 문구 검수, 위기 운영 표·참가 설명서 확정 ([[claim-app-7-schedule-gates-and-cuts]]).
- 안전 모드 중 휴식 알림 보류, 오탐 정정([그런 뜻 아니었어]) 동작 확인.

## 재검토 조건
- 평가 세트 기준 미달 → 외부 사용자 테스트를 시작하지 않는다.
- 태그 준수율 99% 미만 → 별도 분류 호출로 전환(비용·지연 W3 측정).
- 음성 가산이 탐지 성능을 개선하지 않으면 L2에서 음성 가산 제거.
- 109 연계 가이드라인·자문 결과에 따라 카드 구성(긴급 신고 번호 병기 등) 수정.

---

## Update (2026-10-26T05:47:43.978Z)

## 2026-10-26 논문 보강
논문 보강으로 달라진 점 (보완 결정: [[claim-app-10-crisis-state-machine-and-evaluation]]):
- 상태 전이표·충돌 우선순위·태그 누락/API/STT 실패 동작이 추가됨. 1393은 과거 번호로 미사용, 1388 병기는 자문 [P82][P98].
- 2단 구조 효과는 가정하지 않고 키워드/태그/결합 비교 + STT 포함 전체 경로로 평가. 중간 위험·수동적 사고 유형을 추가하고 유형별 최소 성능·미달 조치를 평가 전 확정.
- 오탐 목표를 턴 단위와 대화 단위로 분리. WHO/AFSP 안전 메시징 원문 미확보(W1~W3).

