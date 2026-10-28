---
title: "claim-app-11-data-flow-retention-and-deletion"
tags: ["app-design", "decision", "privacy", "retention", "deletion", "data-flow", "consent", "paper-evidence"]
created: 2026-10-26T05:46:26.004Z
updated: 2026-10-26T05:46:26.004Z
sources: ["reports/한벗 기술 논문 근거.md#2-5"]
links: ["overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-consent-privacy.md", "claim-app-6-consent-and-deletion.md", "claim-tech-6-sensitive-data-consent.md", "src-law-2026-pipa-art21.md", "src-pipc-2023-validity-period-repeal.md", "src-wiepert-2024-voice-reidentification.md", "src-huckvale-2019-mental-health-app-privacy.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-11-data-flow-retention-and-deletion

상위: [[overview-app-design]], [[topic-app-paper-evidence]], [[topic-app-impl-consent-privacy]]. 이 결정은 [[claim-app-6-consent-and-deletion]]과 [[claim-tech-6-sensitive-data-consent]]를 보완한다(2026-10-26).

## 결정
**원칙 두 가지: 필요 없는 데이터는 만들지 않고, 목적이 끝난 데이터는 지체 없이 파기한다. 보관 기간은 숫자가 아니라 데이터별 목적·종료 조건으로 정하고, "삭제 24시간"은 운영 DB·pgvector에 대한 내부 처리 목표이며 법적 적정성은 별도 검토한다.**

## 법·근거 정리
- 개인정보 보호법 제21조(P87 [[src-law-2026-pipa-art21]]): 불필요해진 개인정보를 "지체 없이" 파기, 다른 법령의 보존 의무는 예외. 즉시 반영을 요구하는 조문이 아니다.
- 유효기간제는 2023년 폐지(P88 [[src-pipc-2023-validity-period-repeal]]). 특정 제도의 폐지일 뿐 보관 재량 확대가 아니다. 구법 제39조의6은 인용하지 않는다.
- 시행령 제18조(P100): 생체인식정보는 개인 식별 목적의 기술적 특징 정보 → voiceprint를 만들지 않는다. 음성 유래 감정값의 민감정보 해당 여부는 미확인이라 보수적으로 별도 동의·분리 저장(P99).
- 원본 음성 미저장은 데이터 최소화 설계 판단이다. P85 [[src-wiepert-2024-voice-reidentification]]는 비교 횟수가 늘수록 오매칭이 늘어 재식별이 어려워졌다고 보고(저자는 기술 발전 시 위험 상승 가능 논의). 이 연구가 미저장을 요구하지 않는다.
- P83 [[src-huckvale-2019-mental-health-app-privacy]]: 앱 36개 중 33개 실제 제3자 전송 → 광고·분석 SDK 0개 + 트래픽 점검을 W5 게이트에 추가.

## 데이터별 목적·종료 조건
- 원본 음성: 해당 턴 처리 완료, 자체 저장 안 함. 벤더 보관은 약관 확인 전 미확정(W1).
- 임시 WAV: 추론 완료 즉시 삭제, 실패 잔존 파일 정리 주기 W1.
- 전사: 사용자 삭제·탈퇴·장기 미이용(기간 W1). 단서·SER 점수: 질문 용도는 턴 종료, 지표 용도는 W7 분석 완료. 기존 "30일 TTL 초안"은 근거가 없어 목적 기준으로 재결정.
- 기억: 사용자 삭제·탈퇴·장기 미이용, "한벗이 느낀 것"은 S 동의 철회 포함. 위기 로그: 팀 결정 + 법무 검토.

## 위치별 흐름과 최대 잔존
브라우저(통화 종료까지, 실측 W2) / 서버 메모리(턴 처리 시간, 철회 시 즉시) / 서버 임시 파일(처리 직후 + 정리 주기 W1) / 운영 DB·pgvector(종료 조건까지, 삭제 요청 24h 내부 목표) / 앱 로그(내용 없음, 보존 W1) / 백업(보존 주기 W1) / RTZR·Claude(프롬프트 캐시 TTL 포함)·Typecast·ElevenLabs 벤더 사본(약관, W1 확인 전 미확정).

## 요청별 삭제 범위
- 기억 1건: 해당 행·임베딩 삭제 + tombstone 해시, 전사·요약 유지, 백업은 보존 주기 후 소멸.
- 대화(세션): 전사·요약·단서·캐시 삭제. 그 세션에서 승인된 기억도 지울지는 팀 결정(W1).
- S 동의 철회: 프로세서 비활성 → 진행 작업 취소 → 버퍼 폐기 → inferred·confirmed 후보 폐기 → 저장 직전 재확인 → 기존 S 데이터 삭제 큐, 요약의 감정 줄 삭제(설계안).
- 계정 삭제: 전부 삭제, 백업·벤더 사본은 처리방침에 별도 고지.

## 재생성 시험 (W4)
기억 삭제 후 (1) 다음 통화에 재등장 여부, (2) 원천 전사가 남은 상태에서 요약·후보 추출 재실행 시 재제안 여부, (3) 같은 내용을 다시 말했을 때 tombstone 차단, (4) 재시도·오류·철회·앱 재시작·백업 복원 후에도 동일한지. 결과는 "시험한 N개 시나리오 내에서 재등장 0건"(N은 W1 결정). 근거 P66, P68(B).

## 동의 조합별 범위
조합 1~4(R 없음): 수집·추론 없음. 5·6(R): STT·텍스트 위기 분류·전사·요약, 위기 로그 없음 → 점검·평가에서 빠지는 한계를 W6 보고서에 기록. 7·8(R+S): SER·단서·"한벗이 느낀 것"·위기 로그, 매일 1회 점검. V(원본 보관): MVP 비활성. S 없이도 사용자가 말한 감정은 전사에 남으며 민감정보 여부는 법무 검토.

## 미확정 숫자와 검토
TTL 30일 초안, 위기 로그 보존, 로그·백업 주기, 장기 미이용 기간, 벤더 보관은 W1 확정. 법무 검토 1회(W5 전): 전사 민감정보 여부, 위기 판정 처리 근거, 24h·보관 기간 적정성. 근거 전체는 [[topic-app-paper-evidence]].

