---
title: "src-law-2026-pipa-sensitive-info"
tags: ["tech", "privacy-voice-data", "grade-A", "pipa", "sensitive-information", "biometric", "health-information", "korea-law"]
created: 2026-10-25T07:24:37.674Z
updated: 2026-10-25T07:24:37.674Z
sources: ["https://www.law.go.kr/lsLinkCommonInfo.do?ancYnChk=&chrClsCd=010202&lsJoLnkSeq=1020398539", "https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1029907813", "https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p", "https://byline.network/2020/03/307/", "https://www.daeryunlaw.com/newsletter/news/155"]
links: ["claim-tech-6-sensitive-data-consent.md", "topic-tech-privacy-voice-data.md", "src-pipc-2025-genai-guide.md", "src-pipc-2021-biometric-guideline.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-law-2026-pipa-sensitive-info

# src-law-2026-pipa-sensitive-info

## 서지정보
「개인정보 보호법」 제23조(민감정보의 처리 제한), 「개인정보 보호법 시행령」 제18조(민감정보의 범위, 2026-09-11 시행 현행) — 국가법령정보센터 원문. 보조: nepla 법령 해설 wiki, 바이라인네트워크 2020 보도(시행령 개정 **입법예고**), 대륜 뉴스레터(개정안 발의).

## URL
- https://www.law.go.kr/lsLinkCommonInfo.do?ancYnChk=&chrClsCd=010202&lsJoLnkSeq=1020398539 (법 제23조)
- https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1029907813 (시행령 제18조 제3호)
- https://www.nepla.ai/wiki/it-정보-방송통신/개인정보-위치정보-신용정보/민감정보의-처리/민감정보의-의미와-유형-0vyn50d38d7p
- https://byline.network/2020/03/307/
- https://www.daeryunlaw.com/newsletter/news/155

## 라이선스/상업 이용
법령(공공). 해당 없음.

## 핵심 조문
- 법 제23조 제1항: 사상·신념, 노조·정당 가입, 정치적 견해, **건강**, 성생활 등 + 대통령령 정보 = 민감정보, 원칙적 처리 금지(별도 동의 등 예외) (A)
- 시행령 제18조: 1호 유전정보, 2호 범죄경력, **3호 "신체적·생리적·행동적 특징에 관한 정보로서 특정 개인을 알아볼 목적으로 일정한 기술적 수단을 통해 생성한 정보"**(생체인식정보), 4호 인종·민족 (3호 원문 A, 4유형 전체 B)
- 해설: 건강정보에 정신적 장애·정신적 건강상태 포함 (B; "모든 감정 라벨이 곧 건강정보"는 별도 법적 해석)
- 음성 자체는 자동으로 생체인식 민감정보가 아님 — 3호의 **목적 요건**에 따른 해석 (B; 음성이 개인정보가 아니라는 뜻은 아님)
- 2020 시행령 개정 보도는 입법예고 단계 자료 (B); 생체정보를 법 제23조에 명시하는 개정안 발의 (B; 통과 여부 미확인)

## 검증 결과
- 조문: **A**. 해설·해석: **B**
- **B**: "화자 식별을 안 하면 생체인식정보 요건을 피할 수 있음" — 목적 요건 해석으로 한정, 다른 개인정보 처리 의무는 유지
- **C**: "SER 감정·정신건강 추론은 민감정보일 가능성이 높음" — 설계상 보수적 가정이며 PIPC 공식 해석 미발견

## 한벗 적용 포인트
- (1) voiceprint 저장·화자 식별 기능을 넣지 않아 생체인식정보 요건 회피 (2) 정서·정신건강 추론 결과는 **보수적으로 민감정보로 취급**해 별도 명시 동의 + 암호화 + 분리 보관 → [[claim-tech-6-sensitive-data-consent]]
- 아동(만 14세 미만) 법정대리인 동의·국외이전(제28조의8) 요건은 미조사 Gaps → [[topic-tech-privacy-voice-data]]
- 관련: [[src-pipc-2025-genai-guide]], [[src-pipc-2021-biometric-guideline]]

확인일: 2026-10-25

