---
title: "src-khan-2026-zeta-teen-policy"
tags: ["benchmark", "zeta", "safety", "minors", "regulation", "grade-B", "app-design"]
created: 2026-10-25T07:21:42.749Z
updated: 2026-10-25T14:51:39.530Z
sources: ["https://www.khan.co.kr/article/202610121608001", "https://www.ajunews.com/view/20261012093611669", "https://www.aitimes.com/news/articleView.html?idxno=216164", "https://www.womennews.co.kr/news/articleView.html?idxno=283170", "https://www.shinailbo.co.kr/news/articleView.html?idxno=5071411"]
links: ["bench-zeta-scatterlab.md", "bench-wrtn-character.md", "topic-bench-regulation-incidents.md", "claim-bench-3-safety-protocol.md", "claim-bench-5-usage-limit-break-reminder.md", "overview-app-design.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-khan-2026-zeta-teen-policy

# src-khan-2026-zeta-teen-policy

## 서지
- 경향신문 2026-10-12, 아주경제 2026-10-12, AI타임스(국정감사), 여성신문, 신아일보 (크랙 동반 적용).

## 사실
- **2026-10-12 발표, 연내 도입 예정**: 청소년 기본 이용시간 하루 3시간, 월 결제 한도 10만원. (이미 시행 아님)
- 기본 '세이프 모드'(청소년유해매체물 수준 제한), 성인 본인인증 시 '언리밋 모드'.
- 자살·자해 위험 표현 반복 감지 시 전문 상담기관 **안내** (자동 연결·인계와 구분).
- 의원실 점검: 세이프 모드에서도 성폭력·성착취 묘사 생성 확인 (표본 제한 보도).
- 은유 탐지 강화·반복 위반 경고→대화 초기화·4분기 연령별 생성 수위 학습: 원출처 대조 못함.
- 크랙(뤼튼)도 청소년 하루 3시간 제한 적용 발표 (신아일보·아주경제 교차 확인).
- 2026-10 국감에서 "AI 캐릭터 챗봇 청소년 보호 구멍" 지적.

## 검증 결과 (2026-10-25 확인)
- 세이프/언리밋·위기 안내·세이프 모드 결함·국감 지적·크랙 정책: 등급 **B**.
- "3시간·10만원을 2026-10 도입": **불일치/B** → 발표(10-12)·연내 도입 예정으로 정정.
- 은유 탐지·대화 초기화·4분기 학습: **C**.
- "제타 3시간 ≈ SB 243 3시간 알림 수렴 → 업계 표준": **불일치/C** (강제 이용 상한 vs 미성년 대상 반복 알림, 다른 규칙).

## 사용처
- [[bench-zeta-scatterlab]] · [[bench-wrtn-character]] · [[topic-bench-regulation-incidents]] · [[claim-bench-3-safety-protocol]] · [[claim-bench-5-usage-limit-break-reminder]]

---

## Update (2026-10-25T14:51:39.530Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S11] (등급 B, 2차). 사용: 제타 AI 상시 표시. 조건: 2026-10-12 보도.
- 검증(ux_benchmark): 일치(B). 청소년 하루 3시간·월 10만원 한도는 연내 도입 예정(시행 전)이므로 예정 표기 필요. 이전 노트 "어느 앱도 AI 고지 위치 확인 못함"은 불일치(제타가 플레이 화면에 AI임 상시 표시 보도).
- 사용처: [[overview-app-design]] 의 1절
