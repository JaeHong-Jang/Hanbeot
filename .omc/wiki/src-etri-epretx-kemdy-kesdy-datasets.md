---
title: "src-etri-epretx-kemdy-kesdy-datasets"
tags: ["collab", "etri", "dataset", "speech-emotion", "grade-B"]
created: 2026-10-25T07:15:50.342Z
updated: 2026-10-25T07:15:50.342Z
sources: ["https://epretx.etri.re.kr/dataDetail?id=241&lang=en", "https://epretx.etri.re.kr/dataDetail?id=318&lang=ko", "https://epretx.etri.re.kr/dataDetail?id=88&lang=ko", "http://nanum.etri.re.kr/"]
links: ["lab-etri-noh-kyoungju-kemdy.md", "topic-collab-datasets-and-irb.md", "claim-collab-5-korean-speech-emotion-data-access.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-etri-epretx-kemdy-kesdy-datasets

## 서지
- ETRI 한국어 감정 데이터셋 KESDy18 / KEMDy19 / KEMDy20. 제공자: 노경주(KyoungJu Noh), ETRI
- URL(이관 후 공식): KESDy18 https://epretx.etri.re.kr/dataDetail?id=241&lang=en / KEMDy20 https://epretx.etri.re.kr/dataDetail?id=318&lang=ko / 제공자 확인 https://epretx.etri.re.kr/dataDetail?id=88&lang=ko / 나눔 종료 안내 http://nanum.etri.re.kr/
- 구 URL(nanum.etri.re.kr/share/kjnoh2/...)은 서비스 종료.

## 핵심 내용
- **ETRI 나눔은 2026-03-03 15:00 종료**, 대부분 e-PreTX로 이관(공식 안내). 리서치 노트의 "나눔에서 라이선스 제출·신청 가능" 서술은 불일치.
- KESDy18(A): 성우 30명 음성, ETRI 과제 18ZS1100. 라이선스 동의·관리자 다운로드 승인 절차 명시.
- KEMDy20(B): 한국어 능숙한 19~39세 80명, 2인 1조 40세션, Empatica E4 착용, 주제 영상 약 5분 + 자유대화 약 5분(6개 주제), 음성·전사·EDA·IBI·피부온도·영상, 외부 태거 10명. 공식 이관 페이지 검색 본문 일치하나 직접 렌더링 실패로 B. 현재 배포 파일이 원 수집 자료 전부를 포함한다는 뜻은 아님.
- KEMDy19(C): 성우 대화 기반, 7범주 + arousal/valence 1~5, 다수결·평균 라벨 — 세부 구성 미확정.
- "required / not yet submitted" 상태(C): 개인 로그인 제출 상태이며 보편적 데이터 조건이 아님.
- 상업 이용 조건(C): 비상업 전용인지, 별도 계약 필수인지 미확인. 조건부 추정.

## 검증 결과
- 등급: 제공자 A / KESDy18 A / KEMDy20 B / KEMDy19 C / 접근 경로 C(불일치, 수정 적용)
- 적용된 수정: "나눔 종료 후 e-PreTX로 이관; 현행 배포 파일과 라이선스 재확인 필요".
- 확인일: 2026-10-25

## 한벗과의 접점
- 한국어 SER 베이스라인 구축용 핵심 데이터. 접근·라이선스 재확인 자체가 ETRI 연구자 협업의 실무적 이유 → [[lab-etri-noh-kyoungju-kemdy]], [[topic-collab-datasets-and-irb]], [[claim-collab-5-korean-speech-emotion-data-access]]

