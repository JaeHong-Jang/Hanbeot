---
title: "src-etnews-2026-scatterlab-zeta-interview"
tags: ["benchmark", "zeta", "scatterlab", "revenue", "mau", "grade-B", "app-design"]
created: 2026-10-25T07:21:33.905Z
updated: 2026-10-25T14:52:16.263Z
sources: ["https://www.etnews.com/20260114000140", "https://www.seoul.co.kr/news/economy/industry/2026/01/13/20260113500129"]
links: ["bench-zeta-scatterlab.md", "topic-bench-business-metrics.md", "claim-bench-6-pricing-arpmau.md", "overview-app-design.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-etnews-2026-scatterlab-zeta-interview

# src-etnews-2026-scatterlab-zeta-interview

## 서지
- 전자신문 2026-01-14 김종윤 스캐터랩 대표 인터뷰. 보조: 서울신문 2026-01-13 (원문 대조 미완료).

## 수치 (대표 발언, 재무제표 검증 아님)
- 제타 2024-04 출시, 2024년 9개월 매출 약 50억원.
- **2025년 1–11월 매출 229억원, 영업이익 26억원** (회사 실적과 서비스 실적의 경계 명시 필요; 연간 확정 아님).
- **MAU 150만 (2025-12)**: 한국 110만+, 일본 30만+.
- 북미 클로즈베타. 수익모델: 광고 기반 경량 모델 무료 + 고몰입 이용자 유료 티어. 중장기 목표 글로벌 MAU 1억(실적 아님).
- "추론 비용 때문에 서비스할수록 비용 발생".
- 일본 2025-12 월 매출 11억·2026 연 200억 전망(서울신문): 전자신문에는 없음.

## 역산 (검증자 재계산)
- 229억 ÷ 11 ≈ 월 20.8억원; ÷ MAU 150만 ≈ **월 1,387.88원/MAU** (12월 MAU 사용, 엄밀한 ARPMAU 아님).

## 검증 결과 (2026-10-25 확인)
- 매출·영업이익·MAU·수익모델·발언: 등급 **B**. 일본 수치: **C**.
- 노트 KQ5 Takeaway "MAU당 월 약 1.4만원": **불일치/C — 10배 오류, 약 1,400원** (우선 수정 항목 1순위).

## 사용처
- [[bench-zeta-scatterlab]] · [[topic-bench-business-metrics]] · [[claim-bench-6-pricing-arpmau]]

---

## Update (2026-10-25T14:52:16.263Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S22] (등급 B, 2차). 사용: 제타 ARPMAU 약 1,388원/월. 조건: 전자신문 2026-01-14 대표 인터뷰, 229억/11개월/MAU 150만 역산(추정치).
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지. 역산 추정임을 병기.
- 사용처: [[overview-app-design]] 의 7.3절. 관련: [[claim-bench-6-pricing-arpmau]]
