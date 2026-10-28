---
title: "claim-app-7-schedule-gates-and-cuts"
tags: ["app-design", "decision", "schedule", "gate", "scope-cut"]
created: 2026-10-25T14:51:12.346Z
updated: 2026-10-25T14:51:12.346Z
sources: ["reports/한벗 앱 설계서.md#8"]
links: ["overview-app-design.md", "topic-app-schedule-7weeks.md", "claim-feedback-1-reflect-professor-round1.md", "claim-bench-7-no-therapy-positioning.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-app-5-crisis-ops-and-tel109.md", "claim-app-6-consent-and-deletion.md", "claim-app-8-hypotheses-h1-h5.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-7-schedule-gates-and-cuts

상위: [[overview-app-design]], [[topic-app-schedule-7weeks]]. 교수님 피드백 ④: [[claim-feedback-1-reflect-professor-round1]]

## 결정
**W5까지 P0를 완료하고 사용자 테스트 시작 게이트 5조건을 모두 충족해야 W6 외부 테스트(20–30명)를 시작한다. 5조건: ① 위기 평가 세트 기준 통과 ② 전문가 문구 검수 ③ 동의 8조합·철회·삭제(설계 저장소)·격리 테스트 통과 ④ 연구윤리 절차(필요 시) ⑤ 위기 운영 표·참가 설명서 확정. 핵심 경로는 통화 루프 → 위기 분류·안전 모드 → 동의·삭제 → 게이트이며, SER·확인 질문과 기억이 축소 가능 범위다. W3 말 통화 루프가 미완성이면 SER을 P2로 중단·강등한다.**

## 근거
- 비평 25: 실패 시 축소 기준 없음, 그라운딩이 W5 필수와 모순 → 핵심 경로·의존성, 주차별 중단·축소표, 게이트 분리, 그라운딩 제외.
- 공수 가정 1인 주 약 15시간 x 4명 x 7주 = 약 420인시(추정, W1 확정). 기간 10/27–12/12.
- 의존: SER은 라이선스 결과 의존(W1), 문구 검수는 자문 섭외(W3) 선행, 연구윤리 확인(W1) 후 필요 시 신청(W2). 상세 표는 [[topic-app-schedule-7weeks]].
- 등급: 설계 판단, 실행 전 → medium.

## 검증 가능 목표
- W1 라이선스 체크리스트 5/5, W2 10분 통화 + TTFA 1차 측정, W3 태그 준수율·단정 표현 0건, W4 미승인 노출 0·격리 100%·삭제 24h, W5 게이트 판정, W6 모집자 전체 흐름 보고, W7 H1–H5 판정표.
- W6 건강 척도(PHQ-9/GAD-7)는 사용하지 않는다 ([[claim-bench-7-no-therapy-positioning]]).

## 재검토(중단·축소) 조건
- W3 말: 통화 루프 미완성 → SER P2 강등 + 기억은 "내가 말한 것"만. SER UA 0.70 미만 또는 적시 도착률 50% 미만 → SER P2 강등, H3 비교는 속도·멈춤 단서로 변경 또는 취소. 태그 준수율 99% 미만 → 별도 분류 호출.
- W1 말: SER 약관 부정 → SER P2. W2 말: H1 반증 → 범위를 통화 루프 + 안전 + 요약으로 축소. 통화 루프 미완성 → RTZR WebSocket 직접 구현·대체 STT.
- W4 말: 기억 승인·삭제 미완성 → 통화 후 요약만.
- W5 말: 게이트 미충족 → 외부 테스트 연기·취소, 내부 파일럿과 오프라인 평가로 발표 대체, 미충족 사유 보고.
- 관련: [[claim-app-3-emotion-cue-confirmation-rules]], [[claim-app-5-crisis-ops-and-tel109]], [[claim-app-6-consent-and-deletion]], [[claim-app-8-hypotheses-h1-h5]].

