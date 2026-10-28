---
title: "topic-market-tam-sam-som-assembly"
tags: ["market", "tam", "sam", "som", "grade-B", "assembly", "decision"]
created: 2026-10-25T07:30:35.129Z
updated: 2026-10-25T10:45:23.778Z
sources: []
links: ["src-mois-2025-resident-population.md", "src-mois-2024-resident-population.md", "src-appfigures-2025-companion-revenue.md", "src-gmi-2025-ai-companion-app-market.md", "src-towardshealthcare-2025-ai-virtual-companions.md", "src-grandview-2025-ai-companion-market.md", "src-kedi-2026-data-reading-education-no7.md", "src-moe-2025-higher-ed-basic-statistics.md", "src-moe-2026-higher-ed-basic-statistics.md", "src-kostat-2025-youth-supplementary-survey.md", "src-mods-2025-single-person-household.md", "src-binulabs-2025-genz-ai-trend.md", "src-msit-2025-value-added-telecom-survey.md", "src-pmi-2026-ai-emotional-exchange-survey.md", "src-wiseapp-2026-zeta-mau-february.md", "src-wiseapp-2025-zeta-mau-june.md", "src-hannam-2024-enrollment-namuwiki.md", "src-moe-2025-hannam-scholarship.md", "src-daejeon-2025-population-inflow.md", "src-mois-2026-regional-age-population-data.md", "src-msit-2025-internet-usage-survey.md", "src-appstore-2026-zeta-pricing.md", "src-recurdash-2026-characterai-pricing.md", "overview-hanbeot-project.md", "src-catch-2025-genz-jobseeker-ai-survey.md", "src-elon-2026-rise-of-ai-companions.md", "src-scatterlab-2025-zeta-subscriber-age.md", "topic-market-population-base.md", "topic-market-adoption-rate.md", "topic-market-companion-market-size.md", "topic-market-willingness-to-pay.md", "topic-market-demand-signals.md", "overview-market-demand.md", "src-hannam-2025-enrollment-official.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# topic-market-tam-sam-som-assembly

## TAM / SAM / SOM 조립 (한벗, 확인일 2026-10-25)

원칙: 검증된 수치(A/B)만 계산식에 넣고, C 등급 계수는 **시나리오 변수**로 분리한다. 페르소나 체인: 전국 20~30대 → 대학생 → (취준생·1인 가구) → 대전·한남대.

---

### TAM — 국내 20~39세 "AI에게 속마음을 말할 수 있는" 전체 시장

**정의**: 국내 20~39세 인구 전체(한벗이 장기적으로 도달 가능한 최대 인구). 금액 TAM은 글로벌 컴패니언 앱 시장을 참고치로 병기.

**계산식(인구)**: 총인구 × (20대 비중 + 30대 비중)

**사용한 수치**
- 총인구 51,117,378명, 20대 11.12%, 30대 13.06% (2025-12-31 주민등록) → **≈ 12,360,182명** (계산값, B) [[src-mois-2025-resident-population]]
- 추세: 20대 비중 −0.51%p/1년(2024→2025) [[src-mois-2024-resident-population]]

**금액 참고(글로벌, 정의별)**
- 협의·보수: 소비자 앱 결제 2025년 $120M+ 전망(B) [[src-appfigures-2025-companion-revenue]]
- 협의·보고서: "컴패니언 앱" $17.2B, CAGR 27.4%(A) [[src-gmi-2025-ai-companion-app-market]]; $18.6B(A) [[src-towardshealthcare-2025-ai-virtual-companions]]
- 광의(각주): $36.8B, CAGR 31.0%(A) [[src-grandview-2025-ai-companion-market]]

**결과 범위**: 인구 TAM ≈ **1,236만 명**. 금액 TAM은 글로벌 $120M(실결제 전망)~$17.2B(앱 보고서) — 국내 억원 환산치는 **본 조사에서 찾지 못함**.

**미확인**: 주민등록 인구 정의(C), 20·30대 절대값 원표, 국내 시장 금액.

---

### SAM — 한벗이 실제 서비스할 수 있는 세그먼트(대학생 중심 + 인접 집단)

**정의**: 1차 타깃 대학생(학부 재학생) 전체. 2차로 취준생·1인 가구 20~30대를 **별도 세그먼트**로 병기(합산 금지 — 중복·정의 차이).

**계산식**: SAM(인구) = 학부 재학생 수. SAM(활성 후보) = 학부 재학생 × 대학생 AI 이용률 [시나리오]. SAM(정서 대화 후보) = 활성 후보 × AI 이용자 중 감정 대화 경험률 [시나리오].

**사용한 수치**
- 학부 재학생(휴학 제외, 2025-04-01): 1,628,665 + 396,438 = **2,025,103명**(B) [[src-kedi-2026-data-reading-education-no7]]
- 상한(재적, 휴학·유예·대학원 포함): **3,016,724명**(2025, B) / 3,072,261명(2026, A) [[src-moe-2025-higher-ed-basic-statistics]] [[src-moe-2026-higher-ed-basic-statistics]]
- 2차 세그먼트(별도): 취업시험 준비 청년 **585,000명**(2025.5, A), 미취업 졸업 청년 **1,212,000명**(A) — 서로 다른 집단, 범위 표현 금지 [[src-kostat-2025-youth-supplementary-survey]]; 1인 가구 29세 이하 ≈ 1,432,010 + 30대 ≈ 1,399,830가구(B, 20세 미만 포함) [[src-mods-2025-single-person-household]]
- 시나리오 계수(곱셈은 C — 보고서에 "가정" 표기):
  - 대학생 AI 이용 71.2%(B, 대학생 1,000명) [[src-binulabs-2025-genz-ai-trend]] 또는 20대 92.6%(B, 부가통신 조사) [[src-msit-2025-value-added-telecom-survey]]
  - AI 이용자 중 감정 대화 경험 20대 67.6%(B) [[src-pmi-2026-ai-emotional-exchange-survey]]

**결과 범위**
- SAM(인구): **2,025,103명**(재학) ~ 3,016,724명(재적 상한)
- SAM(활성 후보, 시나리오): 2,025,103 × 71.2% ≈ **144만 명** ~ × 92.6% ≈ 188만 명 (계산값, C — 모집단 불일치 경고)
- SAM(정서 대화 후보, 시나리오): 144만 × 67.6% ≈ **97만 명** ~ 188만 × 67.6% ≈ 127만 명 (계산값, C)
- 대리지표 교차검증: 제타 국내 MAU 402만(2026.2, B; 1020 약 90%)은 "AI와 감정·일상 대화" 행동의 국내 규모가 SAM 시나리오와 같은 자릿수임을 시사 [[src-wiseapp-2026-zeta-mau-february]] [[src-wiseapp-2025-zeta-mau-june]]

**미확인**: 2025 재적학생의 학부/대학원 분리치, 20~39세 취업자 수, 결합 계수의 모집단 정합성(C), 음성 모드 이용률.

---

### SOM — 초기 1~2년 내 획득 가능한 시장(대전 → 한남대 거점)

**정의**: 한남대 학부 재학생을 1차 SOM 분모로, 대전 소재 대학생을 확장 SOM으로 설정. 유료 전환은 민감도 시나리오.

**계산식**: SOM(이용자) = 거점 분모 × 채택률 [가정] × 초기 침투율 [가정]. SOM(매출) = SOM(이용자) × 유료 전환율 [가정] × 월 가격 [가정] × 12.

**사용한 수치**
- 한남대 학부 재학생 **11,506명**(2024, 휴학 제외) — **C(나무위키 2차 자료, 대학알리미 2025 공시 재확인 필요)** [[src-hannam-2024-enrollment-namuwiki]]; '학생 정원 1만 명 이상' 분류 확인(B) [[src-moe-2025-hannam-scholarship]]
- 대전 인구 1,440,729명(2025-12), 전입자 60%가 20~30대(B) [[src-daejeon-2025-population-inflow]]; 대전 20~39세 절대값은 공공데이터에서 합산 가능(미산출) [[src-mois-2026-regional-age-population-data]]
- 대전 생성형 AI 경험률 53.1%(전국 2위, B) — 침투 유리 주장은 C [[src-msit-2025-internet-usage-survey]]
- 대전 소재 대학 재학생 총수: **미확인(Gap)**
- 가격 앵커: 제타패스 ₩14,900(A, 결제 주기 C), c.ai+ $9.99/월(B) [[src-appstore-2026-zeta-pricing]] [[src-recurdash-2026-characterai-pricing]]
- 전환율 참고(모두 C로서 가정): 전 국민 AI 유료 7.9%(B) [[src-msit-2025-internet-usage-survey]], 대학생 유료 AI 22.6%(B) [[src-binulabs-2025-genz-ai-trend]]

**결과 범위(시나리오, 전부 계산값)**
- SOM 분모: 한남대 **11,506명**(C, 잠정) → 대전 대학생(미확인)
- SOM(활성 후보): 11,506 × 71.2% ≈ **8,192명**(C)
- 예시 시나리오(가정: 침투 10%, 전환 5~20%, 월 ₩14,900 가정): 이용자 ≈ 819명 → 유료 41~164명 → 연매출 ≈ **₩730만~2,930만** — **전부 가정값**, MVP 테스트(대학생 30명, 재이용 의향 60% 목표)로 대체해야 함 [[overview-hanbeot-project]]

**미확인**: 한남대 2025 공시, 대전 대학생 총수, 컴패니언 특화 전환율·WTP(국내 설문 없음), 제타패스 결제 주기.

---

### 검증자 지적 반영 요약
- 외로움 48.9%는 **2025년** 수치(부록 '2024' 수정) [[src-mods-2025-single-person-household]]
- 캐치 73%는 **2025년 7월** 조사, AI 사용 경험자 분모 [[src-catch-2025-genz-jobseeker-ai-survey]]
- 27% 조사는 **엘론대** [[src-elon-2026-rise-of-ai-companions]]
- 가입자 구성비(20대 55%)를 MAU에 곱한 "20대 220만" **사용 금지** [[src-scatterlab-2025-zeta-subscriber-age]]
- 제타패스 "월 14,900원" **확정 인용 금지** [[src-appstore-2026-zeta-pricing]]
- 58.5만~121.2만 "범위" 표현 금지, 2030 1인 가구 283만 × 48.9% 곱셈 금지, 20대 소득 근거로 3,423만 원 사용 금지

### 등급 상향 경로(우선순위)
1. 대학알리미에서 한남대 2025 재학·재적·휴학 원표 확인 → SOM 분모 C→A
2. 교육통계서비스 시도별 표에서 대전 대학생 총수 → 확장 SOM 분모 신설
3. 주민등록 연령별 인구현황 원표 → TAM 절대값 B→A
4. MVP 테스트에서 WTP·전환 의향 직접 설문 → SOM 계수 C→B

관련: [[topic-market-population-base]] · [[topic-market-adoption-rate]] · [[topic-market-companion-market-size]] · [[topic-market-willingness-to-pay]] · [[topic-market-demand-signals]] · [[overview-market-demand]]

---

## Update (2026-10-25T10:45:23.778Z)

## SOM 분모 갱신 (2026-10-25, 2차 사이클 run 20261025_193750)
- 한남대 학부 **재적생 15,865명(2025년 공시기준, A)** — [[src-hannam-2025-enrollment-official]]. 이전 잠정치 11,506(2024 재학, C, [[src-hannam-2024-enrollment-namuwiki]])을 SOM 분모에서 교체. 두 수치는 정의(재적/재학)와 연도가 달라 증감으로 읽지 않는다.
- SOM 비율: 15,865 / 전국 재적 3,016,724 = **0.53%** (계산값). 전국 3,016,724는 검증자가 KEDI 원문에서 일치 확인해 B→A 상향 ([[src-moe-2025-higher-ed-basic-statistics]]).
- **여전히 미확인(C)**: 대전광역시 고등교육기관 재적학생 2025(KESS 접근 차단), 한남대 2025 재학생(휴학 제외, 대학알리미 원표 필요), 대전 상위 5개교 재학생. 참고치: 한밭대 2022 학부 재학 8,203·대학원 583(통계연보 일치, A), 충남대 2022 학부 16,930(나무위키 미러, B).
- 다음 경로: 대학알리미 「학생 현황-재적학생」 엑셀 수동 다운로드, KESS 시도별 재적학생 표, KEDI 2025-08-28 게시물 HWP 첨부.
