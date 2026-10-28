---
title: "topic-collab-case-studies"
tags: ["collab", "case-study", "carecall", "woebot", "therabot", "grade-A"]
created: 2026-10-25T07:26:58.729Z
updated: 2026-10-25T07:26:58.729Z
sources: []
links: ["src-hume-2024-series-b-semantic-space.md", "src-woebot-2017-jmir-rct.md", "src-dartmouth-2025-therabot-nejm-ai.md", "src-ellipsis-2022-frontiers-voice-biomarker.md", "src-naver-2023-carecall-chi-best-paper.md", "src-naver-2024-clova-carecall-deployment.md", "src-welt-2023-welt-i-approval.md", "src-khcu-2025-ko-jeongeun-care-robot-counseling.md", "src-atommerce-2025-mindcafe-clinical-expansion.md", "lab-unist-park-youngwoo-ipd.md", "lab-kaist-lee-uichin-iclab.md", "claim-collab-6-pilot-study-design-ask.md", "claim-collab-7-case-precedent-carecall.md", "overview-researcher-collaboration.md"]
category: pattern
confidence: high
schemaVersion: 1
---

# topic-collab-case-studies

## 요약
해외(Hume AI, Woebot, Therabot, Ellipsis Health)와 국내(클로바 케어콜, 웰트, 경희사이버대-로아이젠) 사례에서 연구자가 제공한 것은 명확하다: 정서 분류 이론, RCT·임상 설계, 규제 승인용 전문가 자문, 학회 발표를 통한 신뢰 자본. 한국어 음성 기반 정서 돌봄이라는 점에서 「한벗」과 가장 가까운 비교 사례는 클로바 케어콜(UC Irvine-NAVER 공동, CHI 2023 Best Paper)이다. 단, "이론→RCT→허가"라는 공통 단계 모델과 "30~70명 파일럿" 수치는 검증자가 추론(C)으로 분류했다.

## 사례별 확인 사항

| 사례 | 연구자가 제공한 것 | 핵심 수치(검증 후) | 등급 | 페이지 |
|---|---|---|---|---|
| Hume AI (Alan Cowen) | 의미공간이론·대규모 표정/음성 연구(Nature·PNAS 등) | 2024-03-27 시리즈B 5,000만 달러, EVI 베타 | B | [[src-hume-2024-series-b-semantic-space]] |
| Woebot (Stanford) | 소규모 RCT | 18~28세 70명(34 vs 36), PHQ-9·GAD-7·PANAS, 개입 2주, 평균 12.14회 상호작용. JMIR 2017 | A | [[src-woebot-2017-jmir-rct]] |
| Therabot (Dartmouth) | 생성형 AI 치료 챗봇 최초 RCT | **전체 210명 = Therabot 106 + 대조 104**, 4주+4주, 4·8주 증상 감소 유의. NEJM AI 2025-03-27 | A | [[src-dartmouth-2025-therabot-nejm-ai]] |
| Ellipsis Health | 음성 바이오마커 임상 타당화 | AUC 0.82(첫 세션·통합·기준점 10), 평균 63세; NCT06464575 목표 540명; Mayo·덴버대 연구 | A/B | [[src-ellipsis-2022-frontiers-voice-biomarker]] |
| 클로바 케어콜 (NAVER × UC Irvine) | CHI 2023 Best Paper 질적 연구, CHI 2024 로그 분석 | 128개 시군구(2024-08), 사용자 3만 명, **96%는 응답 비율**(효과 지표 아님); CHI 2024 통화기록 1,252건(147명) | A/B | [[src-naver-2023-carecall-chi-best-paper]], [[src-naver-2024-clova-carecall-deployment]] |
| 웰트 WELT-I | 정신건강 전문학회 자문, 120명 임상 | 2023-04-19 국내 2호 DTx, 6주 CBT | B | [[src-welt-2023-welt-i-approval]] |
| 경희사이버대 고정은 × 로아이젠 | 내러티브 상담·코칭 기법 | 서울시 과제, 2025-07-22 | A | [[src-khcu-2025-ko-jeongeun-care-robot-counseling]] |
| 아토머스(마인드카페) | **서울대병원과 디지털치료제 개발 보도**(임상 세부 미확인) | 2025-11 코끼리·밝음 인수 | B | [[src-atommerce-2025-mindcafe-clinical-expansion]] |

## 「한벗」 적용 (추론 — 사실과 분리)
- 가장 유사한 사례는 케어콜: 한국어 음성, 정서 돌봄, 산업체-대학 HCI 공동연구. 같은 방법론(이해관계자 인터뷰·통화 로그 분석)을 UNIST 디자인학과 또는 KAIST ICLab과 재현하면 학술적 정당성 확보 가능. 단, "CHI Best Paper가 128개 지자체 확산의 근거를 만들었다"는 인과는 미입증(C). [[lab-unist-park-youngwoo-ipd]], [[lab-kaist-lee-uichin-iclab]]
- 첫 산학 협업 목표를 "IRB 승인 소규모 사용성·안전성 파일럿"으로 설정하는 것은 사례와 정합하지만, "30~70명"은 제안 수치이며 검정력·실행가능성·안전성 목적에 맞춘 산정이 필요(C). [[claim-collab-6-pilot-study-design-ask]]
- 리서치 노트의 "아토머스조차 대학병원 협업 미확인 → 한벗 차별화" 논거는 **삭제**(서울대병원 협업 보도 존재). 연구자 협업은 차별화가 아닌 업계 표준 방향으로 서술.

## 검증자가 C로 분류한 서술
- "Woebot은 창업 전 대학 연구로 RCT부터 확보" (법인 설립 순서 미확정)
- "성공 사례 공통 경로 = 이론→RCT→등록 임상·허가" (서로 다른 기업을 하나의 단계 모델로 합친 추론)
- "Ellipsis는 진단 아닌 중증도 측정 포지셔닝", "확인된 논문은 하나뿐"

## 공백
- 스캐터랩(이루다) 학술 발표 이력, WELT-I 임상 수행 병원명, 케어콜의 독립(비네이버) 학술 검증.

관련: [[claim-collab-7-case-precedent-carecall]], [[overview-researcher-collaboration]]

