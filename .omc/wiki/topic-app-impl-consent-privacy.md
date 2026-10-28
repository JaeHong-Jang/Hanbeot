---
title: "topic-app-impl-consent-privacy"
tags: ["app-design", "implementation", "consent", "privacy", "deletion", "usage-limit", "topic", "paper-evidence"]
created: 2026-10-25T14:47:27.766Z
updated: 2026-10-26T05:47:10.181Z
sources: ["reports/한벗 앱 설계서.md#5-10-11"]
links: ["overview-app-design.md", "claim-app-6-consent-and-deletion.md", "claim-tech-6-sensitive-data-consent.md", "topic-tech-privacy-voice-data.md", "claim-tech-8-crisis-referral-flow.md", "claim-bench-5-usage-limit-break-reminder.md", "topic-app-cost-latency-budget.md", "src-entrepreneur-2025-chatgpt-break-reminder.md", "src-law-2026-pipa-art21.md", "src-pipc-2023-validity-period-repeal.md", "src-wiepert-2024-voice-reidentification.md", "src-huckvale-2019-mental-health-app-privacy.md", "src-fang-2025-ai-companion-rct.md", "claim-app-11-data-flow-retention-and-deletion.md", "topic-app-paper-evidence.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-impl-consent-privacy

상위: [[overview-app-design]] · 설계서 5절 ⑩⑪. 결정: [[claim-app-6-consent-and-deletion]]. 근거: [[claim-tech-6-sensitive-data-consent]], [[topic-tech-privacy-voice-data]]

## ⑩ 선택
voiceprint를 만들지 않는다. SER 결과는 보수적으로 민감정보 취급. 동의 3단 분리, 원본 즉시 폐기, 가명 키 분리 저장. R = 필수 동의, S = 민감정보(목소리 감정 단서), V = 원본 음성 보관.

### 데이터 x 처리 단계 (비평 19)
| 데이터 | 추론 | 저장 | 외부 전송 | 근거 동의 |
|---|---|---|---|---|
| 원본 음성 | SER·운율 입력(S일 때만) | 저장 안 함(V는 MVP 비활성) | RTZR(STT) | R |
| 전사 텍스트(민감 내용 가능) | 위기 분류, 응답 생성, 요약 | 암호화 DB | Claude(국외이전 고지) | R. **법무 검토**: 전사 자체에 민감정보 동의 필요한지 |
| AI 응답 텍스트 | - | 전사와 함께 | Typecast/ElevenLabs | R |
| 속도·멈춤 단서 | 단서 계산 | 가명 키, TTL(미확정) | Claude 프롬프트(문장) | S |
| SER 범주·점수 | emotion2vec(서버 내부) | 가명 키, TTL(미확정) | Claude 프롬프트(범주만, 점수 제외) | S |
| 확인 응답 | - | 기억 상태 | - | S |
| 기억 "내가 말한 것" | 요약 작업 추출 | 승인 시 | Claude | R |
| 기억 "한벗이 느낀 것" | confirmed만 | 승인 시, TTL | Claude | S |
| 위기 판정 | KeywordGate + 태그 | S 동의 시 위기 로그(기간 미확정), 없으면 저장 안 함 | Claude(전사 포함) | 판정 R(**법무 검토**: 생명·신체 보호 목적 처리 근거), 로그 S |
| 사용 시간, 계정·동의 기록 | 휴식 알림 | 저장 | - | R |

### 3단 동의 8조합
| # | R | S | V | 허용 기능 |
|---|---|---|---|---|
| 1~4 | 없음 | 무관 | 무관 | 서비스 이용 불가, 109·지역 센터 카드와 고지문만 열람(필수 없이는 선택 동의를 저장 안 함, 선택 항목 UI 비활성) |
| 5 | O | X | X | 통화, 전사, 요약(감정 줄 없음), "내가 말한 것" 기억, 텍스트 L1·L2 위기 분류 + 안내. SER·운율·확인 질문·"한벗이 느낀 것"·위기 로그 없음 |
| 6 | O | X | O | 5와 같음, 음성 보관은 목적·기간 확정 전 비활성(미확정) |
| 7 | O | O | X | 전 기능, 원본 음성 폐기 |
| 8 | O | O | O | 7과 같음, 음성 보관 비활성 |

### 통화 중 철회 (비평 21)
설정에서 S를 끄면 서버로 `consent_revoked` 이벤트. 순서: ① SER·Prosody 비활성 플래그 ② 진행 중 SER 작업 취소 ③ 오디오 버퍼 폐기 ④ 이미 만든 inferred·confirmed 후보 폐기 ⑤ 저장 직전 동의 재확인(write-time check). 같은 세션은 R 전용 기능으로 계속하고 기존 저장 S 데이터는 삭제 큐로 보낸다.

### 저장소별 삭제표 (비평 20; "24h 삭제"는 "설계" 상태 저장소에만 약속)
| 저장소 | 완료 시점 | 상태 |
|---|---|---|
| 운영 DB(계정·전사·요약·기억·단서·사용 기록·위기 로그) | 요청 후 24h 이내(자동 테스트) | 설계 |
| pgvector 임베딩 | 원본 행과 같은 트랜잭션 | 설계 |
| Mem0(P1 도입 시) | 24h 이내(삭제 API는 P1 확인) | 미확정 |
| 앱·지연 측정 로그 | 로그 보존 기간 만료 시(미확정), 로그에 전사·발화 내용 기록 금지 | 미확정 |
| 위기 로그 | 24h 이내, 단 최소 보존 정책 확정 시 그에 따름 | 미확정 |
| 백업 | 백업 보존 주기 종료 시(미확정), 처리방침에 "24h는 운영 DB 기준" 기재 | 미확정 |
| 벤더(RTZR, Claude, Typecast/ElevenLabs) | 각 약관 보존 기간(W1 표로 확인) | 미확정 |
| 캐시 | 세션 종료 즉시(서버 컨텍스트·클라이언트) / 프롬프트 캐시는 벤더 TTL | 설계 / 미확정 |
| 진행 중 작업 | 삭제 요청 시 취소, 완료 시점에 사용자 존재·동의 재확인 후 미저장 | 설계 |
| 임시 WAV | 처리 직후 | 설계 |
| 재생성 방지 | 세션당 1회 추출, 과거 전사 재처리 금지, tombstone 해시 차단 | 설계 |
- 단계: `consents(user_pk, type, granted_at, revoked_at, version)` 테이블 → 세션 시작·철회 이벤트에서 프로세서 삽입/제거 → 삭제 요청은 큐 → 삭제 24h·철회·격리 테스트를 CI에 → 벤더별 학습 사용 금지·국외이전·보존 조항 표(W1).
- 함정: "음성 추정 감정 = 건강정보"라는 PIPC 공식 해석은 없다(C), 보수적 가정 유지. 메모리 UI만으로 적법성이 충족되지 않으므로 법무 검토 1회.

## ⑪ 사용 시간 제한·휴식 알림 (비평 27)
- 연속 60분 휴식 알림, 일일 60분 이상 또는 주 6일 이상이면 오프라인 관계 권유. 이 수치는 임시 운영 기준(근거 없음, W6 조정) ([[claim-tech-8-crisis-referral-flow]], [[claim-bench-5-usage-limit-break-reminder]]). 사용 빈도만으로 문제 있는 이용을 판별할 수 없다. 무료 분 상한은 [[topic-app-cost-latency-budget]] 7.3과 H5로 결정.
- 단계: 서버가 세션·일일 분 집계 → 경계 도달 시 다음 AI 턴 끝에 고정 문구("한 시간쯤 이야기했네. 잠깐 쉬었다 할까? 계속해도 괜찮아.") → [쉬기]/[계속하기] 토스트(ChatGPT "Keep chatting" 변형 [[src-entrepreneur-2025-chatgpt-break-reminder]]) → 안전 모드 중 보류 → 알림 후 행동 + 설문 3문항(불편, 일상 방해, 적절성).
- 함정: 알림 후 종료율은 행동 지표일 뿐 의존 감소 근거가 아님. 강제 종료는 위기 사용자를 끊을 수 있어 MVP는 알림만.

---

## Update (2026-10-26T05:47:10.181Z)

## 2026-10-26 논문 보강
- "24h 삭제"는 내부 처리 목표이며 법적 적정성은 별도 검토. 제21조는 "지체 없이" 파기 + 보존 의무 예외 [P87 [[src-law-2026-pipa-art21]]]. 유효기간제 2023 폐지 [P88 [[src-pipc-2023-validity-period-repeal]]]는 재량 확대가 아니다. 구법 제39조의6 인용 금지.
- voiceprint 미생성은 시행령 제18조 정의와 부합 [P100]. 원본 미저장은 데이터 최소화 설계 판단이며 P85 [[src-wiepert-2024-voice-reidentification]]는 비교 횟수가 늘수록 오매칭 증가(재식별 어려워짐)로 요구 근거가 아니다.
- W5 게이트에 광고·분석 SDK 0개 + 트래픽 점검 추가 [P83 [[src-huckvale-2019-mental-health-app-privacy]]: 33/36 제3자 전송].
- 추가 표: 데이터별 목적·종료 조건, 위치별 흐름·최대 잔존, 요청별 삭제 범위, W4 재생성 시험, 동의 조합별 범위. 60분 사용 알림은 임시 기준 [P90 [[src-fang-2025-ai-companion-rct]]: 관련일 뿐 인과 아님].
- 상세: [[claim-app-11-data-flow-retention-and-deletion]], [[topic-app-paper-evidence]].

