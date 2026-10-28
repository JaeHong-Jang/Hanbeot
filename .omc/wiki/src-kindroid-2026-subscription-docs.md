---
title: "src-kindroid-2026-subscription-docs"
tags: ["benchmark", "kindroid", "pricing", "memory", "grade-A", "app-design"]
created: 2026-10-25T07:15:37.879Z
updated: 2026-10-25T14:51:33.248Z
sources: ["https://kindroid.ai/v2/docs/subscriptions/", "https://kindroid.ai/v2/docs/update-log/", "https://talkalma.com/articles/nomi-vs-kindroid.html", "https://companionwise.com/compare/nomi-vs-kindroid/"]
links: ["bench-kindroid.md", "claim-bench-4-memory-consent-editing.md", "claim-bench-6-pricing-arpmau.md", "src-nomi-2026-mind-map.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-kindroid-2026-subscription-docs

# src-kindroid-2026-subscription-docs

## 서지
- Kindroid 공식 구독 도움말(kindroid.ai/v2/docs/subscriptions) 및 공식 변경 기록(update-log). 2차: Alma, CompanionWise, AI Companion Pick.

## 사실
- **2026-10-01 무료 Lite 티어·무제한 무료 메시지 종료**. 신규는 짧은 체험 후 읽기 전용 전환, 유료 단일 플랜.
- Ultra/MAX는 별도 월간 추가 구독(MAX는 Standard+Ultra 필요).
- 가격(2차): 앱 $15.99/월·$159.99/년, 웹 $13.99/월·$139.99/년. 공식 도움말은 결제 단계에서 현재 가격 확인을 안내.
- 기억: 사용자가 직접 작성하는 backstory·key memories·journal + 구독자용 Cascaded Memory·Learned Context(자동 장기 기억도 존재).

## 검증 결과 (2026-10-25 확인)
- Lite 종료·Ultra/MAX: 등급 **A** (공식). 가격: **B**. 기억 기능: **B** ("수동 관리 중심"은 해석).
- 2023 출시·LA 소재: **C**. "무료 종료 = 추론 비용 압박의 신호": **C** (원인 미입증).

## 사용처
- [[bench-kindroid]] · [[claim-bench-6-pricing-arpmau]] · [[claim-bench-4-memory-consent-editing]]

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-nomi-2026-mind-map]]

---

## Update (2026-10-25T14:51:33.248Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S5] (등급 A, 공식설명). 사용: 저널 제안, 보류 표시, 조용시간, 400크레딧/분(기본 요금), 읽기 전용. 조건: 2026-10 변경 기록.
- 검증(ux_benchmark): 조용시간 통화 차단·요청 통화 음성 메시지, 보류 제안 표시, 2026-10-01 무료 종료와 읽기 전용 모두 일치(A). 정정: 400크레딧/분은 통화 기본 요금이며 음성 요금은 추가, 영상 별도(총비용 표기 금지). "AI 제안 -> 사용자 승인 후 저장"은 확인불가(C).
- 사용처: [[overview-app-design]] 의 1절, 3.2절 (3.4 헤더 참조)
