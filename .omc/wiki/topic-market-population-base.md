---
title: "topic-market-population-base"
tags: ["market", "tam", "sam", "som", "grade-B", "population", "topic"]
created: 2026-10-25T07:26:35.613Z
updated: 2026-10-25T07:26:35.613Z
sources: []
links: ["src-mois-2025-resident-population.md", "src-mois-2024-resident-population.md", "src-kedi-2026-data-reading-education-no7.md", "src-moe-2025-higher-ed-basic-statistics.md", "src-moe-2026-higher-ed-basic-statistics.md", "src-moe-2024-higher-ed-basic-statistics.md", "src-kostat-2025-youth-supplementary-survey.md", "src-mods-2026-youth-supplementary-survey.md", "src-mods-2025-single-person-household.md", "src-mogef-2025-gender-statistics-single-household.md", "src-daejeon-2025-population-inflow.md", "src-tf-2025-yuseong-youth-ratio.md", "src-mois-2026-regional-age-population-data.md", "src-hannam-2024-enrollment-namuwiki.md", "src-moe-2025-hannam-scholarship.md", "topic-market-tam-sam-som-assembly.md", "claim-market-1-population-base.md", "claim-market-2-university-students.md", "overview-market-demand.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-market-population-base

## 인구 기반(Population bases) — TAM/SAM/SOM 분모

한벗의 페르소나 체인(전국 20~30대 → 대학생 → 취준생·1인 가구 → 대전·한남대)별 분모를 검증 등급과 함께 정리한다. 모든 수치는 "값·기준시점·정의"를 함께 쓴다.

### 1. 전국 20~39세 (TAM 분모)
- 2025-12-31 주민등록 인구 51,117,378명; 20대 11.12%, 30대 13.06% → (계산값) 20대 ≈ 5,684,252명, 30대 ≈ 6,675,930명, 합계 ≈ **12,360,182명**. 반올림 비중 기반 근사치(B). [[src-mois-2025-resident-population]]
- 20대 비중은 2024→2025년 −0.51%p(11.63% → 11.12%). "매년 0.5%p 감소"는 장기 시계열 미확인(C). [[src-mois-2024-resident-population]]
- 주민등록 인구의 정의(외국인 제외·거주불명자 포함·재외국민)는 미검증(C) — 보고서에 명시 필요. [[src-mois-2025-resident-population]]

### 2. 대학생 (SAM 1차 분모) — 정의 2종
- **재학생(휴학 제외, 대학알리미 공시 범위)** 2025-04-01: 대학 1,628,665 + 전문대 396,438 = **2,025,103명**(계산값, B). 전체 재학생(대학원 포함) 2,339,937명. [[src-kedi-2026-data-reading-education-no7]]
- **재적학생(휴학·유예 포함, 전체 고등교육기관, 대학원 포함)** 2025: **3,016,724명**(+0.3%, B); 2026: 3,072,261명(+1.8%, A); 2024: 3,007,242명(B). [[src-moe-2025-higher-ed-basic-statistics]] [[src-moe-2026-higher-ed-basic-statistics]] [[src-moe-2024-higher-ed-basic-statistics]]
- 두 정의의 차이 676,787명은 휴학·유예 **및 기관 범위 차이**가 함께 작용(C) — "휴학 때문"으로만 설명 금지. [[src-moe-2025-higher-ed-basic-statistics]]
- 2025 교육기본통계의 학부/대학원 재적 분리 수치는 미확인.

### 3. 취업준비생 (SAM 2차)
- 2025.5: 취업시험 준비자 **585,000명**(비경제활동인구의 14.5%, A); 최종학교 졸업 후 미취업자 **1,212,000명**(A). 두 수치는 **서로 다른 집단**이므로 "58.5만~121.2만 범위"로 쓰지 말 것(C). [[src-kostat-2025-youth-supplementary-survey]]
- 2026.5: 취준 비율 14.5% 동일, 1년 이상 미취업 605,000명(48.6%), 3년 이상 241,000명(19.4%) — 장기 미취업 증가(A/B). [[src-mods-2026-youth-supplementary-survey]]
- 20~39세 취업자(직장인) 수는 미조사.

### 4. 1인 가구 20~30대 (SAM 세그먼트)
- 2024년 1인 가구 8,045천 가구(A); 29세 이하 17.8%, 30대 17.4% → (계산값) 1,432,010 + 1,399,830 ≈ **2,831,840가구**(B). "29세 이하"에는 20세 미만 포함 — 20~39세 합계가 아님. [[src-mods-2025-single-person-household]]
- 1인 가구 외로움 48.9% vs 전체 38.2%는 **2025년** 조사(A) — 부록 '2024' 표기 수정. 연령별 외로움 비율은 없으므로 "283만의 48.9%"로 곱하지 말 것(C). [[src-mods-2025-single-person-household]]
- 성별 구성(남성 1인 가구 30대 21.8%·20대 17.2%). [[src-mogef-2025-gender-statistics-single-household]]

### 5. 대전 (SOM 지역)
- 대전 인구 1,440,729명(2025-12 말), 2025년 전입자 중 20~30대 약 60%(47,696명)(B). [[src-daejeon-2025-population-inflow]]
- 유성구 청년 비율 32.2%(청년 정의 미확인, B). [[src-tf-2025-yuseong-youth-ratio]]
- 대전 20~39세 절대 인구: 공공데이터(법정동 성별 연령별, 2026-09-30 갱신)에서 합산 가능하나 **미산출**. [[src-mois-2026-regional-age-population-data]]
- 대전 소재 대학 재학생 총수: **미확인(Gap)** — 대학알리미/교육통계서비스 시도별 표 필요.

### 6. 한남대 (SOM 거점)
- 2024년 학부 재학생 11,506명(휴학 제외), 대학원 951명 — **나무위키 2차 자료, C(미확인)**. 2025 공시 재확인 필요. [[src-hannam-2024-enrollment-namuwiki]]
- '학생 정원 1만 명 이상' 대학 분류에서 1인당 장학금 전국 6위(B) — 규모의 간접 확인. [[src-moe-2025-hannam-scholarship]]

### 패턴
- 분모는 항상 "재학/재적", "가구/세대", "29세 이하/20대" 정의를 명시해야 등급 B 이상을 유지한다.
- 계산값은 검증자가 산술만 확인(B)했으므로 원표 절대값으로 교체하는 것이 후속 과제.

관련: [[topic-market-tam-sam-som-assembly]] · [[claim-market-1-population-base]] · [[claim-market-2-university-students]] · [[overview-market-demand]]
