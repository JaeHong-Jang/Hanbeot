---
title: "topic-app-impl-safety-crisis"
tags: ["app-design", "implementation", "safety", "crisis", "tel109", "evaluation", "topic", "paper-evidence"]
created: 2026-10-25T14:47:06.649Z
updated: 2026-10-26T05:47:07.589Z
sources: ["reports/한벗 앱 설계서.md#5-9"]
links: ["overview-app-design.md", "claim-app-5-crisis-ops-and-tel109.md", "claim-tech-8-crisis-referral-flow.md", "claim-bench-3-safety-protocol.md", "topic-tech-mvp-stack.md", "topic-app-schedule-7weeks.md", "topic-app-feature-spec.md", "src-jmir-2026-systematic-review-29.md", "src-mcbain-2025-llm-suicide-alignment.md", "src-park-2020-military-suicide-risk.md", "src-judd-2025-llm-suicide-signals.md", "src-cmaj-2026-chatbot-suicide-prevention.md", "src-mohw-2026-109-hotline.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "topic-app-paper-evidence.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-impl-safety-crisis

상위: [[overview-app-design]] · 설계서 5절 ⑨. 결정: [[claim-app-5-crisis-ops-and-tel109]]. 근거: [[claim-tech-8-crisis-referral-flow]], [[claim-bench-3-safety-protocol]]

## ⑨-1 분류 구조 (확정, 설계; 비평 9)
| 단계 | 구성 | 시점 | 출력 |
|---|---|---|---|
| ① KeywordGate | 로컬 키워드·패턴 사전(자살·자해 의도·계획·수단) | STT final 직후, Claude 호출 전 | 양성이면 Claude 미호출, 즉시 안전 모드 |
| ② 위험 태그 | Claude 응답 호출에 분류 지시 포함, 첫 줄 `<risk>L0\|L1\|L2</risk>`(추가 호출 없음, [[topic-tech-mvp-stack]]와 일치) | 생성 스트림 첫 토큰 | 서버가 파싱 후 태그 제거, TTS는 태그 판정 후에만 시작 |
| ③ L1 처리 | 생성문 폐기, 고정 안전 스크립트(사전 합성 오디오) 재생 | 태그 수신 즉시 | 안전 모드 |
| ④ L2 누적 | 텍스트 L2 태그 1점 + 같은 턴 음성 저각성 단서 0.5점(민감정보 동의 시). **음성 단서만으로는 점수 불가** | 매 턴 | 2점 이상이면 부드러운 안내 1회, 이후 2점마다 재안내 최대 2회 |
| 실패 처리 | 태그 없음/파싱 불가 시 L0으로 보되 KeywordGate 결과 유지, 파싱 실패 기록. LLM·TTS 장애 시 사전 합성 오디오와 화면 카드 | - | - |
| 대안 | 별도 분류 호출(병렬): W3 개발 세트에서 태그 준수율 99% 미만 또는 L1 재현율 미달 시 전환, 비용·지연은 W3 측정 | - | - |
L2 점수·임계·재안내 횟수는 모두 임시 운영 기준. L2는 텍스트 단독 경로와 텍스트+음성 경로를 따로 평가하고, 음성이 성능을 개선하지 않으면 음성 가산을 뺀다.

## ⑨-2 위기 운영 (설계; 비평 16)
| 항목 | 기준 |
|---|---|
| 담당 | 책임 PM·안전, 부책임 AI. 로그 점검·오탐 분석·문구 수정 요청·자문 연락. **팀은 실시간 상담·개입을 하지 않는다** |
| 대응 시간 | 앱 자동 안내 24시간, 팀 로그 점검은 W6 기간 매일 1회(예: 22시, 실시간 아님). 온보딩·설정에 "한벗 팀은 실시간으로 연락하지 않아요. 지금 위급하면 109로" 고지 |
| 점검 한계 | 민감정보 동의가 없으면 위기 로그를 저장하지 않아 점검 대상에서 빠짐. W6 보고에 한계로 기재 |
| 참가자 사전 절차 | 참가 설명서에 안내 절차·팀 연락 범위·외부 기관 정보. 개별 연락 여부는 연구윤리·자문으로 결정(미확정) |
| `tel:109` 실패 | 앱이 실패를 감지할 수 없으므로 번호를 큰 글씨로 항상 표기 + [번호 복사] 버튼 + 지역 정신건강복지센터 병기. 긴급 신고 번호 병기는 자문 후 확정. 109 공식 API·연계 가이드라인은 미확인(C) |
| 안전 모드 진입 | L1(KeywordGate 또는 태그). 공감 1문장 → 109 안내 → "지금 안전한 곳에 있어?" → 109 카드 전면, 모드 전환 잠금 |
| 해제 | 사용자가 "안전해"라 답하고 이후 연속 3턴(임시) L1 없으면 일반 모드. 109 카드 하단 고정 + 세션 말미 재안내. 무응답·위험 지속이면 유지, 종료 시 카드 화면으로 이동 |
| 오탐 정정 | [그런 뜻 아니었어] 버튼/발화 → 사과 1문장 → 일반 복귀(카드 하단 유지). 오탐 표시는 민감정보 동의 시에만 기록, 주간 오탐 분석은 개발 세트에만 반영 |
| 휴식 알림 | 안전 모드 중 휴식 알림·사용 제한 보류 |

## ⑨-3 평가 설계 (테스트 세트 성능이며 실제 안전성 보증이 아님; 비평 14)
- 세트 분리: 개발 세트(프롬프트·키워드 조정)와 동결 평가 세트. 출처는 PsyCrisisBench·DeepSuiMind 번역 + 자문(규모 100~300건은 팀 제안).
- 유형별 표본: 명시적 자살 의도·계획 / 자해 / 암시(무망감 등) / 비위기 대조(우울한 일상, "죽겠다" 관용 표현). 유형별 표본 수 보고.
- 지표: 유형별 재현율, 오탐률(비위기 대조 중 L1 비율), 95% 신뢰구간, 태그 형식 준수율, 응답 적절성(2인 판정 + kappa).
- 경로 비교: L2 텍스트 단독 vs 텍스트+음성(녹음 세트 있을 때만).
- 탈옥: 다중 턴·역할놀이 20개. "20/20"은 해당 20개의 결과로만 해석.
- 공개 프로토콜: RAND 5등급 질문셋, 전문가 패널 평정은 [[claim-bench-3-safety-protocol]] (출시 전 항목).
- 이 평가 통과는 사용자 테스트 시작 게이트 1번 조건이다 ([[topic-app-schedule-7weeks]]). 수용 기준 P0-6: [[topic-app-feature-spec]].

---

## Update (2026-10-26T05:47:07.589Z)

## 2026-10-26 논문 보강
- 2단 구조(KeywordGate + 태그)를 직접 검증한 논문은 없다. 두 경로가 같은 STT에 의존하므로 키워드/태그/결합 비교와 STT 포함 전체 경로를 평가한다 [P79 [[src-jmir-2026-systematic-review-29]]].
- P73 [[src-mcbain-2025-llm-suicide-alignment]]은 응답 정책 일관성 연구(탐지 근거 아님), P75는 중독 도움 요청 연구라 간접 참고. 한국어 근거는 게시글 F1 0.88/0.72뿐 [P70 [[src-park-2020-military-suicide-risk]]] → 대화 발화는 자체 평가 세트로만 말한다.
- 안전 모드의 짧은 지속 응답은 설계 판단 [P72 [[src-judd-2025-llm-suicide-signals]]] vs 연결 후 종료 권고 [P76 [[src-cmaj-2026-chatbot-suicide-prevention]]].
- 추가: 위기 등급 정의, 상태 전이표, 충돌 우선순위(KeywordGate > L1 > 정정 > L2 > 태그 누락), 태그 누락·API·STT 실패 동작, 중간 위험·수동적 사고 유형, 턴/대화 단위 오탐 목표. 1393 미사용 [P82 [[src-mohw-2026-109-hotline]]], 1388 병기는 자문. 안전 메시징 원문(WHO/AFSP) 미확보.
- 상세: [[claim-app-10-crisis-state-machine-and-evaluation]], [[topic-app-paper-evidence]].

