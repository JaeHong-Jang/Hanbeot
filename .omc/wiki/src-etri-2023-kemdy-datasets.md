---
title: "src-etri-2023-kemdy-datasets"
tags: ["benchmark", "ser", "kemdy", "korean", "etri", "grade-A"]
created: 2026-10-25T07:26:32.229Z
updated: 2026-10-25T07:42:07.000Z
sources: ["https://ksp.etri.re.kr/ksp/article/file/67248.pdf", "https://nanum.etri.re.kr/share/kjnoh2/KEMDy19?lang=En_us", "https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10708648/", "https://github.com/SeolRoh/Multi-Still_ETRI"]
links: ["claim-bench-8-emotion-cue-as-question.md", "src-etri-2020-kemdy.md", "topic-bench-ser.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-etri-2023-kemdy-datasets

# src-etri-2023-kemdy-datasets

## 서지
- ETRI 연구진 논문 (ksp.etri 67248) — KEMDy19/20 설명; ETRI Nanum 데이터 페이지 (접근 실패 502); PMC10708648 하이브리드 멀티모달 활용 논문; SeolRoh/Multi-Still_ETRI (2023 제2회 ETRI 경진대회 장관상 레포).

## 사실
- **KEMDy19**: 성우 20세션 역할극, 음성+전사+ECG/EDA/피부온도, 외부 주석 다수결. 원래 감정 라벨 **7개**; 4-class(angry/happy/neutral/sad)는 연구에서 선택한 부분집합.
- **KEMDy20**: 비배우 자유대화(5분 영상 시청 후 5분 대화), Empatica E4로 EDA/IBI/피부온도. "약 7시간"은 전체·분절·부분집합 중 무엇인지 불명.
- 공개 통일 리더보드 없음(경진대회 수상작 수준) — 부재 확정은 아님.

## 검증 결과 (2026-10-25 확인)
- KEMDy19/20 구성: 등급 **A** (ETRI 논문 대조). 7시간: **C**. 리더보드 부재: **C**. 경진대회 레포 존재: **A**. 라이선스 조건: 미확인.

## 한벗 활용
- 한국어 음성 감정 1차 측정 데이터셋 후보: KEMDy20 4-class UA + arousal/valence CCC. [[topic-bench-ser]] · [[claim-bench-8-emotion-cue-as-question]]

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-etri-2020-kemdy]]
