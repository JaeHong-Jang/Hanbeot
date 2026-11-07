---
title: "topic-collab-unist-affective-labs"
tags: ["unist", "collaboration", "affective-computing", "hci", "scopus-2026-11", "verified"]
created: 2026-11-07T18:45:08.530Z
updated: 2026-11-07T18:45:08.530Z
sources: ["research_notes/Scopus 조사/02_labels_calibration_fusion_unist.md", ".omc/orchestra/reviews/20261108_032202_verify_02_labels_calibration_fusion_unist.md"]
links: ["overview-researcher-collaboration.md", "topic-collab-candidate-researchers-map.md", "topic-scopus-literature-2026-11.md", "lab-unist-kim-taehwan.md", "lab-unist-park-youngwoo-ipd.md", "lab-unist-oakley-hong-hci.md", "src-ruensuk-2020-smartphone-affect.md", "src-lee-2020-driver-anxiety-biosignal.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-collab-unist-affective-labs

상위: [[overview-researcher-collaboration]] · [[topic-collab-candidate-researchers-map]] · [[topic-scopus-literature-2026-11]]. 기존 UNIST 페이지: [[lab-unist-kim-taehwan]] · [[lab-unist-park-youngwoo-ipd]]. 신규: [[lab-unist-oakley-hong-hci]].

## 범위
`unist_emotion` 쿼리 21편 전수 + 전체 1,818편 소속 스캔(저장된 자료 기준 UNIST 소속 일치 21건 재현 A). 결론: **UNIST SER(음성 감정 인식) 논문은 이 코퍼스에 0편**(B: 독립 SER 모델 평가 논문을 못 찾았다는 범위. 음성을 쓰는 로봇 연구는 포함). 이를 "UNIST에 음성 감정 역량이 없다"로 일반화하는 것은 C. 학과 단위 소속뿐이라 "연구실" 묶음은 저자 반복 패턴 추정이며 교수 페이지 확인이 필요하다.

## 연구 그룹
| 그룹 | 주제·대표 논문 | 한벗 접점 | 메모 |
|---|---|---|---|
| Oakley I.·Hong H. (HCI) | 스마트폰 센서 ESM, 일시적 감정 검출. [[src-ruensuk-2020-smartphone-affect]] | W6 사용자 테스트의 ESM 자기보고 | 상세 [[lab-unist-oakley-hong-hci]]. 2020 IMWUT, 2022 CHI |
| Kim S.P. (신경공학) | 운전자 불안 다중 생체신호, EEG 77.01%. [[src-lee-2020-driver-anxiety-biosignal]] | 소수 참가자 생체 기준으로 "불안 발화" 구간 검증 가능성 | 분석 23명, 영상 시청. 제품화 불가(EEG) |
| Lee H.S. (소셜 로봇) + Park, Lee, Kim, Hwang | 로봇 감정 표현의 여운(lingering) 선형 동역학 모델 e-LDAEM(2023, 10.1007/s11370-023-00483-5), 아동 독서 로봇(2024 ICCAS, 10.23919/ICCAS63016.2024.10773382) | 직전 턴 감정 이월·전이 설계의 이론 참조 | e-LDAEM은 로봇의 **표현 상태** 모델이지 사용자 감정이 같은 방식으로 지속된다는 증거가 아님. 8가지는 로봇 표현 종류(사용자 감정 8클래스 아님) |
| Yoon J. (디자인) + Kim C. | 음악 재생 미적 인터랙션, PrEmo(2025, 10.1017/pds.2025.10187) | 그림 기반 감정 자기보고(PrEmo)로 평가자 일치도 보완 | 이 논문만으로 "Yoon 교수 연구실" 특정 불가 |
| Jung Y. (고려대·UNIST 공저) | 스마트 스피커 프라이버시 인지·정서 반응(2021, IJHCI, 10.1080/10447318.2020.1841422) | 동의·프라이버시 설계(항상 듣는 음성 앱에 대한 우려와 대처 행동 설문) | Park·Choi는 UNIST, Jung은 고려대 소속 |
| Kim J.(재료공학), Lee P.S. | 피부 부착 무선 안면 인터페이스, Nature Communications 2024(10.1038/s41467-023-44673-2) | **협업 후보 아님.** 언어+비언어 결합 설계 철학만 인용 | 소속 UNIST 재료공학 확인 A |
| Kim T.H. (기존 위키) | 음성 감정 → 표정 전이 C-MET, CVPR 2026 | [[lab-unist-kim-taehwan]] | 연구·CVPR 2026 표기는 저자 프로젝트 페이지로 확인 A. **이번 Scopus 코퍼스에는 색인되지 않음.** 이유가 인덱싱 지연이라는 추정은 C(없는 사실과 원인은 별개). Google Scholar·교수 페이지 직접 확인 필요 |

## 결론: 협업 가치는 W6 평가 방법
- 데이터·모델 파트너로는 이번 코퍼스의 UNIST가 약하다. 강점은 평가 방법: ESM(사용 직후 자기보고), PrEmo(그림 기반 자기보고), 생체신호 기준. W6(대학생 20~30명, 3세션) 설계에 쓸 수 있다.
- 한벗 정확도의 기준으로 인용하지 않는다(이진 라벨·자기보고 기준·소표본·센서 입력).
- Scopus 인용 수(15·5·3·44·109·3·30)는 수집 시점 Scopus 기준이며 타 DB와 비교 금지.

