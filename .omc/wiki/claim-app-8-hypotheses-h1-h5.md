---
title: "claim-app-8-hypotheses-h1-h5"
tags: ["app-design", "decision", "hypothesis", "falsification", "validation", "paper-evidence"]
created: 2026-10-25T14:51:30.955Z
updated: 2026-10-26T05:47:49.675Z
sources: ["reports/한벗 앱 설계서.md#0-1"]
links: ["overview-app-design.md", "topic-app-critic-review-1.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-app-4-memory-four-states.md", "claim-bench-6-pricing-arpmau.md", "topic-app-cost-latency-budget.md", "src-mysoftly-2026-companion-pricing.md", "src-etnews-2026-scatterlab-zeta-interview.md", "topic-app-schedule-7weeks.md", "claim-app-7-schedule-gates-and-cuts.md", "topic-app-paper-evidence.md", "claim-app-9-ser-evaluation-and-calibration.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-8-hypotheses-h1-h5

상위: [[overview-app-design]]. 비평 반영: [[topic-app-critic-review-1]] #1–3, 6, 23

## 결정
**설계서의 기술·UX 결정은 확정이 아니라 "설계 가설"이며, 아래 5개 핵심 가설을 W1–W7에 검증하고 반증되면 해당 설계와 Wiki 결정을 수정한다. 표본(20–30명)이 작으므로 결과는 탐색적으로 해석하고 반증 신호 수치는 모두 임시 운영 기준이다. 경쟁 앱에 기능이 있다는 사실은 수요의 증거가 아니다.**

## 가설과 반증 시 조치
| H | 가설 | 측정(주차) | 반증 신호 | 반증 시 조치 |
|---|---|---|---|---|
| H1 문제 | 대학생은 고민 털어놓을 상대·시간이 없는 상황을 주 1회 이상 겪고, 현재 대안(지인, 익명 커뮤니티, 텍스트 AI)에 구체적 불만이 있다 | 반구조화 인터뷰 8~10명(W1–W2) + W6 사전 설문 | 참가자 절반 미만이 해당 상황 보고, 또는 "기존 챗봇으로 충분"이 다수 | 타깃 상황 재정의, 통화 루프와 안전 기능만 유지하도록 축소 |
| H2 음성 선택 | 같은 고민이면 텍스트보다 음성을 고르는 사용자가 상당수 | 사후 설문, 인터뷰, P1 텍스트 입력 사용 로그(W6) | 음성이 "어색하다"거나 텍스트 선택 과반 | 텍스트 우선 + 음성 보조로 재설계 ([[claim-tech-4-voice-pipeline-architecture]]) |
| H3 감정 단서 가치 | 확인 질문은 "이해받는 느낌"을 높이고 침해감·끊김은 낮다 | 확인 질문 ON/OFF 참가자 내 교차, 세션 후 3문항(이해받음·침해감·흐름 끊김), 수용성 지표(W6) | ON의 이해받음이 OFF보다 높지 않음, 또는 침해감 "불편" 30% 이상 | SER·확인 질문을 P2로 ([[claim-app-3-emotion-cue-confirmation-rules]]) |
| H4 기억 승인 수용 | 기억 후보 승인을 귀찮아하지 않고 다음 통화에서 기억이 쓰이는 것을 가치 있게 본다 | 로그(처리·건너뛰기·수정·삭제 비율), 사후 2문항, 비교 없이 관찰(W4 내부, W6) | 후보 카드 처리율 50% 미만, 또는 "귀찮음" 다수 | "통화별 저장 ON/OFF 한 번 + 사후 열람·삭제"로 단순화(저장 전 동의 원칙 유지) ([[claim-app-4-memory-four-states]]) |
| H5 결제 | 월 9,900–14,900원(가설, C)에 지불 의사가 있고 이용량별 원가가 이를 넘지 않는다 | 가격 민감도 4문항, 모의 플랜 선택(실제 결제 없음, 선택 직후 모의 고지), 이용량 x 분당 원가(W6–W7) | 수용 가격 상한 중앙값 9,900원 미만, 또는 손익 조건 미충족 | 가격·무료 분 상한·플랜 구조 재설계 ([[claim-bench-6-pricing-arpmau]], [[topic-app-cost-latency-budget]]) |
기억 기능(H4)의 비교 실험은 표본 부족으로 하지 않고 관찰만 한다(비평 2 일부 보류). W6 핵심 비교는 H3 하나다.

## 근거
- 비평 1·3: 고객 문제 검증 전에 해결책·스택을 확정했고 "Wiki 결정 재평가 금지"가 반증을 막았다.
- H5의 가격 범위는 C [[src-mysoftly-2026-companion-pricing]], 유사 앱 ARPMAU 약 1,388원/월은 역산(B) [[src-etnews-2026-scatterlab-zeta-interview]].

## 검증 가능 목표
- W2: H1 1차 판정(인터뷰 8~10명). W6: H2·H3·H4 측정. W7: H1–H5 판정표 + Wiki 수정 목록 ([[topic-app-schedule-7weeks]]).

## 재검토 조건
- 기술 결정 재검토표(SER, STT, TTS, cascade 구조, 3블록 메모리, 위기 2단 분류)의 조건은 [[overview-app-design]]에 있다. H1 반증은 W2 말 범위 축소 기준과 연동 ([[claim-app-7-schedule-gates-and-cuts]]).

---

## Update (2026-10-26T05:47:49.675Z)

## 2026-10-26 논문 보강
논문 보강으로 달라진 점 ([[topic-app-paper-evidence]] 0.1절):
- 새 가설은 만들지 않고 기술 성능을 H1~H5에 연결: 통화 루프→H1, TTFA·끼어들기·STT→H2, SER 확인 질문→H3, 4상태 기억→H4, 분당 원가→H5.
- H3 비교 실험 대조군이 일반 확인 질문으로 좁혀짐 → [[claim-app-9-ser-evaluation-and-calibration]]. 불편 30%는 기능 강등용, 개인 단위 피해는 별도 기록.
- SER·prefetch 추가 비용은 W3 실측 후 H5 손익에 반영, H3·H4 반증 시 비용 제거.

