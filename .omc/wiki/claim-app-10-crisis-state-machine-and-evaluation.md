---
title: "claim-app-10-crisis-state-machine-and-evaluation"
tags: ["app-design", "decision", "crisis", "state-machine", "evaluation", "tel109", "paper-evidence"]
created: 2026-10-26T05:46:22.855Z
updated: 2026-10-26T05:46:22.855Z
sources: ["reports/한벗 기술 논문 근거.md#2-2"]
links: ["overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-safety-crisis.md", "claim-app-5-crisis-ops-and-tel109.md", "claim-tech-8-crisis-referral-flow.md", "src-judd-2025-llm-suicide-signals.md", "src-cmaj-2026-chatbot-suicide-prevention.md", "src-psycrisisbench-2025.md", "src-park-2020-military-suicide-risk.md", "src-mcbain-2025-llm-suicide-alignment.md", "src-mohw-2026-109-hotline.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-10-crisis-state-machine-and-evaluation

상위: [[overview-app-design]], [[topic-app-paper-evidence]], [[topic-app-impl-safety-crisis]]. 이 결정은 [[claim-app-5-crisis-ops-and-tel109]]와 [[claim-tech-8-crisis-referral-flow]]를 보완한다(2026-10-26).

## 결정
**위기 대응은 등급 정의 + 상태 전이표 + 충돌 우선순위로 고정하고, 2단 구조(KeywordGate + 위험 태그)의 효과는 가정하지 않고 같은 평가 세트에서 직접 비교한다. 한국어 대화 발화 성능은 자체 평가 세트 결과로만 말한다.**

## 위기 등급
- L0: 신호 없음("죽겠다" 같은 관용 표현 포함), 일반 모드.
- L2: 암시적 신호(무망감). 단독으로 안전 모드 진입 안 함. 세션 점수 누적, 2점 이상이면 부드러운 안내(임시). 음성 저각성 단서는 가산만.
- L1: 명시적 자살·자해 의도·계획·수단. KeywordGate 또는 태그 → 즉시 안전 모드.
- 임박 위험(L1 하위): 수단·시점 구체. 긴급 신고 병기와 분리 여부는 자문 후 확정(팀 결정 W1).

## 상태 전이 (요지)
- 진입: 키워드 양성 → Claude 호출 없이 사전 합성 스크립트. 태그 L1 → 생성문 폐기 후 안전 모드.
- 유지: 짧은 공감 응답, 109 카드 전면, 모드 전환 잠금, 휴식 알림 보류. 끼어들기 시 카드 유지 + `safety_reminder_pending=true`. LLM·TTS 장애 시 사전 합성 오디오 + 카드. 무응답·신호 지속이면 유지.
- 해제: "안전해" + 연속 3턴 L1 없음 → 일반 모드(카드 하단 고정, 세션 말미 재안내). 3턴이 위험 해소를 뜻한다는 근거는 없어 시나리오 평가·전문가 검토 대상. [그런 뜻 아니었어] → 사과 1문장 후 일반 모드.
- 충돌 우선순위: KeywordGate 양성 > 태그 L1 > 사용자 정정 > L2 누적 > 태그 누락. 정정 직후 새 L1이면 L1이 이긴다.
- 실패 동작: 태그 누락·파싱 실패는 L0 처리 + 키워드 결과 유지 + 기록. Claude API 실패는 고정 사과 문구 + 재시도(시간 초과 기준 W1 결정). STT final 없음·빈 전사는 분류 불가로 기록 후 빈도 측정. `tel:109` 연결 실패는 큰 글씨 번호 + 복사 + 지역 정신건강복지센터 병기.
- 안전 모드의 "대화 유지"는 근거가 아니라 설계 판단: P72 [[src-judd-2025-llm-suicide-signals]]는 위험 누적 시 대화 축소를 비판하나 P76 [[src-cmaj-2026-chatbot-suicide-prevention]]는 연결 후 종료를 권고. 전문가 검토 대상.

## 평가 설계
- 경로 비교: 키워드 단독 / 태그 단독 / 결합. 두 경로가 같은 STT 결과에 의존하므로 이중 구조의 이점을 가정하지 않는다. 전체 경로(녹음 → STT → 분류 → 음성·카드)에서 핵심어 전사 오류율, STT final 미발생 비율, 종료~안내 지연 P50·P95.
- 평가 세트: 번역·현지화(P77 [[src-psycrisisbench-2025]]) + 한국어 직접 작성 다중 턴. 동결 후 수정하면 개발 결과로만 보고. P70 [[src-park-2020-military-suicide-risk]]은 게시글 이진 F1 0.88·4단계 0.72뿐.
- 유형별 최소 성능: 명시적 재현율 ≥ 0.90, 비위기 오탐 ≤ 10%. **중간 위험·수동적 사고·암시 유형을 별도 유형으로 추가**하고 합격선은 자문과 평가 전에 정한다(W1). 미달 시: 명시적은 외부 테스트 시작 안 함, 암시·중간은 기본안 연기(자문 최종).
- 오탐 분모: 턴 단위와 대화 단위를 따로 정한다. 설명용 계산(재현율 0.90, 턴 오탐 10%, 세션 30턴): 비위기 사용자에게 세션당 약 3회 잘못된 안전 모드, 위기 비율 1%면 경보 정밀도 약 8.3%. 턴 단위 10%만으로는 서비스가 성립하지 않는다(실제 발생률 추정 아님).
- 결과 표현: "시험한 N개 시나리오 내에서"만 허용. P73 [[src-mcbain-2025-llm-suicide-alignment]]는 응답 정책 연구라 탐지 성능 근거가 아니다.

## 기관 안내와 미확보 항목
- 109 현행(P82 [[src-mohw-2026-109-hotline]]), 1393은 과거 번호로 사용 안 함, 1388(P98)은 청소년 상담이며 병기는 자문 후 결정.
- WHO·AFSP 안전 메시징 원문은 미확보: PM·안전이 W1~W3 확보, W5 전문가 검수에서 문구·다중 턴 전이 대조. 109 공식 연동 API 미확인, MVP는 번호·전화 링크.
- 팀 결정 필요(W1): 평가 세트 동결 시점, 시나리오 수 N, 비명시 유형 합격선, API 시간 초과 기준, 임박 위험 분리.

