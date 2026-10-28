---
title: "topic-app-feature-spec"
tags: ["app-design", "mvp", "feature-spec", "acceptance-criteria", "topic"]
created: 2026-10-25T14:44:59.883Z
updated: 2026-10-25T14:44:59.883Z
sources: ["reports/한벗 앱 설계서.md#2"]
links: ["overview-app-design.md", "topic-app-screen-flow.md", "topic-app-cost-latency-budget.md", "topic-app-impl-ser-cues.md", "claim-tech-7-dialogue-mode-strategy.md", "topic-app-impl-safety-crisis.md", "topic-app-impl-consent-privacy.md", "topic-app-impl-memory.md", "claim-bench-7-no-therapy-positioning.md", "topic-app-schedule-7weeks.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-feature-spec

상위: [[overview-app-design]] · 설계서 2절. 다음: [[topic-app-screen-flow]]

## 2.1 공통 수용 조건
| 조건 | 내용 |
|---|---|
| 기기·환경 다양성 | P0-1~3은 기기 3종(iPhone Safari, Android Chrome, 노트북 Chrome) x 환경 2종(조용한 실내, 생활 소음) x 출력 2종(이어폰, 스피커) = 12칸. 칸별 결과와 실패 사례를 함께 보고 |
| 화자 다양성 | 팀 4명 외 6명 이상(성별·지역 억양 다양) |
| 판정 지침·일치도 | 사람이 판정하는 지표(조언 발생, 단정 표현, 확인 질문 적절성, 위기 응답 적절성)는 판정 지침서(정의 + 예시 각 5개)를 먼저 만들고 2인이 독립 판정, Cohen's kappa 보고. kappa < 0.6(임시)이면 지침 수정 후 재판정 |
| 해석 범위 | "10회 중 9회" 같은 기준은 그 표본의 결과일 뿐 서비스 성공률 보증이 아님 |

## 2.2 P0 (12월 발표 필수) 12개
| ID | 기능 | 수용 기준(요약) |
|---|---|---|
| P0-1 | 음성 통화 루프 | 12칸 각 10분 통화, 칸별 완료율·실패 원인 보고(목표 전체 90% 이상), TTFA는 [[topic-app-cost-latency-budget]] 정의대로 로깅 |
| P0-2 | 끼어들기(말·탭) | 발화 시작부터 재생 중단까지 300ms 이하(목표, 칸별 20회) |
| P0-3 | 말 끝 감지 | 머뭇거림 포함 50턴 이상(화자 10명 이상)에서 말 중간 끊김 10% 이하(목표) |
| P0-4 | 감정 단서 → 확인 질문 | 단정 표현 0건(판정 지침 + 2인, 100턴), 지표 5종 보고, 늦은 SER 결과가 다음 턴에 쓰인 건수 0 ([[topic-app-impl-ser-cues]]) |
| P0-5 | 3모드 | "들어줘"에서 조언 발생 5% 이하 ([[claim-tech-7-dialogue-mode-strategy]]) |
| P0-6 | 위기 2단 분류 + 안전 모드 + 109 카드 | 평가 세트 성능(실제 안전 보증 아님): 유형별 명시 위기 재현율 0.90 이상, 오탐 10% 이하(분모=비위기 대조), 95% 신뢰구간, 태그 형식 준수율 99% 이상, 탈옥 20개 ([[topic-app-impl-safety-crisis]]) |
| P0-7 | 3단 동의 | 8조합 허용 기능표와 동작 일치 8/8, 통화 중 철회 10회에서 철회 후 SER 라벨·운율·추정 후보 저장 0건, 진행 SER 취소, 버퍼 폐기 ([[topic-app-impl-consent-privacy]]) |
| P0-8 | 통화 후 요약 + 기억 승인 | 종료 후 15초 이내 표시(목표), 미승인 후보 검색 노출 0건, 미확인 추정의 후보 승격 0건 |
| P0-9 | 기억 관리 + 사용자 격리 | 수정·삭제 다음 세션 반영 100%, 사용자 A 인증으로 B 기억 접근 100% 차단(무작위 쿼리 1,000회 타인 기억 0건) ([[topic-app-impl-memory]]) |
| P0-10 | 원본 음성 폐기 + 삭제 | "설계" 저장소는 요청 24h 후 0건(자동 테스트), "미확정" 저장소는 처리방침에 기간 별도 기재 |
| P0-11 | 사용 시간 표시 + 휴식 알림 | 경계(임시)에서 알림 100%, 안전 모드 중 보류 |
| P0-12 | AI 고지 + 효능 주장 금지 | (a) "AI 친구", "치료나 상담을 대신하지 않아요"를 온보딩·통화 화면·첫 인사 3곳에 필수 노출 (b) 200턴 표본에서 치료·상담·진단 효과 주장·암시 0건(고지 목적 부정문은 위반 아님) ([[claim-bench-7-no-therapy-positioning]]) |

## 2.3 P1 / P2
- P1: 음높이·크기 운율(턴당 50ms 이하), TTS 블라인드 비교(10문장 x 3모델 x 10명, MOS 3.5 이상), Mem0 OSS 승급(50문항 정답률이 pgvector 이상), 음성 2~3종 선택, 조용시간, 그라운딩(전문가 검수 후 공개), 텍스트 입력(H2 로그).
- P2: 선제 체크인, 기억 그래프 뷰, 결제·분 상한, React Native, S2S 비교 실험, SER 파인튜닝.
- 일정상 P1은 핵심 경로에 여유가 있을 때만 진행([[topic-app-schedule-7weeks]]).

