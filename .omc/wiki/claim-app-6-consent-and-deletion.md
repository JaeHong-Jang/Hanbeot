---
title: "claim-app-6-consent-and-deletion"
tags: ["app-design", "decision", "consent", "privacy", "deletion", "withdrawal", "paper-evidence"]
created: 2026-10-25T14:50:57.439Z
updated: 2026-10-26T05:47:46.751Z
sources: ["reports/한벗 앱 설계서.md#5-10"]
links: ["overview-app-design.md", "topic-app-impl-consent-privacy.md", "claim-tech-6-sensitive-data-consent.md", "topic-app-screen-flow.md", "claim-app-7-schedule-gates-and-cuts.md", "claim-app-11-data-flow-retention-and-deletion.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-6-consent-and-deletion

상위: [[overview-app-design]], [[topic-app-impl-consent-privacy]]. 기반: [[claim-tech-6-sensitive-data-consent]]

## 결정
**동의는 필수(R) / 민감정보=목소리 감정 단서(S) / 원본 음성 보관(V) 3단으로 분리하고 8조합별 허용 기능표를 코드와 일치시킨다. 통화 중 S 철회는 즉시 반영한다. 삭제는 저장소별 표로 관리하며 "24h 삭제"는 "설계" 상태 저장소에만 약속하고, 미확정 저장소(백업·벤더·로그·위기 로그·Mem0)는 미확정 상태와 기간 미정을 처리방침에 명시한다. 원본 음성은 저장하지 않고 voiceprint는 만들지 않는다.**

## 근거
- 비평 19–21: 동의 체계가 민감 내용 전체를 포괄하지 못함, 삭제·비저장 약속이 실제 데이터 흐름보다 강함, 통화 중 철회·접근 통제 부재.
- R 없이는 서비스 이용 불가(1~4번 조합: 109 카드와 고지만), S 없으면 SER·운율·확인 질문·"한벗이 느낀 것"·위기 로그 없음(5~6번), V는 목적·기간 미확정으로 MVP 비활성(6, 8번).
- 철회 순서: SER·Prosody 비활성 → 진행 SER 취소 → 버퍼 폐기 → inferred·confirmed 후보 폐기 → 저장 직전 동의 재확인(write-time check). 기존 S 데이터는 삭제 큐.
- 재생성 방지: 세션당 1회 추출, tombstone 해시 차단. 삭제 확인 문구는 "원래 대화 기록은 남아 있어요"를 명시([[topic-app-screen-flow]]).
- 법무 검토 항목: 전사 텍스트의 민감정보 동의 필요 여부, 위기 판정의 처리 근거(생명·신체 보호 목적). "음성 추정 감정 = 건강정보"라는 PIPC 공식 해석은 없어(C) 보수적으로 취급.
- 등급: 설계 확정, 법적 적법성은 미검토 → medium.

## 검증 가능 목표
- P0-7: 8조합 허용 기능표와 실제 동작 일치 8/8. 철회 10회 시 철회 후 SER 라벨·운율·추정 후보 저장 0건, 진행 중 SER 취소, 버퍼 폐기(로그 확인).
- P0-10: "설계" 저장소는 삭제 요청 24h 후 0건(자동 테스트). 삭제 24h·철회·격리 테스트를 CI에 둔다.
- W1: 벤더(RTZR, Claude, Typecast/ElevenLabs) 학습 사용 금지·국외이전·보존 기간 조항 표 작성.

## 재검토 조건
- 법무 검토 결과 전사 자체에 별도 민감정보 동의가 필요하면 동의 단계를 재설계.
- 위기 로그 최소 보존 정책, 백업·벤더·로그 보존 기간이 확정되면 삭제표의 "미확정"을 갱신하고 처리방침 수정.
- V(원본 음성 보관)는 목적·기간 확정 전까지 비활성 유지, 확정 시 8조합표 재검토.
- 게이트 3번(동의 8조합, 철회, 삭제, 격리 테스트 통과) 미충족 시 테스트 연기 ([[claim-app-7-schedule-gates-and-cuts]]).

---

## Update (2026-10-26T05:47:46.751Z)

## 2026-10-26 논문 보강
논문 보강으로 달라진 점 (보완 결정: [[claim-app-11-data-flow-retention-and-deletion]]):
- 24h 삭제는 운영 DB 대상 내부 목표, 법적 적정성은 별도 검토(제21조 "지체 없이" [P87]). 유효기간제 폐지 [P88]는 재량 확대가 아님.
- 데이터별 목적·종료 조건, 위치별 흐름, 요청별 삭제 범위(전사·요약·임베딩·캐시·백업·벤더)가 추가됨. 기존 TTL 30일 초안은 근거 없어 W1 재결정.
- W4 재생성 시험(전사 잔존·재시도·철회·재시작·백업 복원) 추가. S 철회 시 요약 감정 줄 삭제(설계안).

