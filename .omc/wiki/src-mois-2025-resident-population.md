---
title: "src-mois-2025-resident-population"
tags: ["market", "tam", "grade-B", "population", "mois"]
created: 2026-10-25T07:14:21.256Z
updated: 2026-10-25T07:14:21.256Z
sources: ["https://www.newsis.com/view/NISX20260104_0003464167", "https://www.yna.co.kr/view/AKR20260102150600530", "https://jumin.mois.go.kr/"]
links: ["topic-market-population-base.md", "topic-market-tam-sam-som-assembly.md", "src-mois-2024-resident-population.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-mois-2025-resident-population

## 서지정보
행정안전부 「2025년 주민등록 인구통계 분석」(2026-01-04 발표). 보도: 뉴시스 2026-01-04, 연합뉴스 2026-01-02. 원자료 포털: jumin.mois.go.kr

## 정의
2025-12-31 기준 주민등록 인구(세대 단위 집계 포함). 외국인 제외·거주불명자 포함 여부는 **미검증(C)** — 재외국민 포함 여부도 보고서에 명시 필요.

## 핵심 수치
- 총인구 51,117,378명 (전년 대비 −99,843명, −0.19%; 뉴시스는 0.2%로 반올림)
- 연령별 비중: 50대 16.89%, 60대 15.50%, 40대 14.83%, 70대 이상 13.76%, **30대 13.06%, 20대 11.12%**, 10대 9.05%, 10대 미만 5.79%
- 1인 세대 10,272,573세대 (42.3%) — 통계청 "1인 가구"(804.5만, 36.1%)와 집계 단위(세대 vs 가구)·기준시점이 다름
- **(계산값)** 20대 ≈ 5,684,252명, 30대 ≈ 6,675,930명, 20~39세 합계 ≈ **12,360,182명** (반올림 비중 × 총인구의 근사치)

## 검증 결과
- 총인구·비중: **B** (일치; 연합뉴스에서 소수 둘째 자리 확인)
- 20대 568만·30대 668만·합계 1,236만: **B** (산술 일치, 근사치)
- 정의(외국인 제외·거주불명자 포함): **C** (포털 첫 화면만으로 검증 부족)
- 1인 세대 vs 1인 가구 단위 차이: **B** (타당)

## 사용처
TAM 분모(국내 20~39세). 절대값은 주민등록 인구통계 "연령별 인구현황" 표에서 재확인 권장.

확인일 2026-10-25. 관련: [[topic-market-population-base]] · [[topic-market-tam-sam-som-assembly]] · [[src-mois-2024-resident-population]]
