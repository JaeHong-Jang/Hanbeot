---
title: "src-pipc-2021-biometric-guideline"
tags: ["tech", "privacy-voice-data", "grade-C", "pipc", "biometric", "guideline", "pseudonymization", "unverified", "paper-evidence", "regulation", "voice-biometric", "grade-B"]
created: 2026-10-25T07:24:43.129Z
updated: 2026-10-26T05:53:33.125Z
sources: ["https://m.boannews.com/html/detail.html?idx=103846", "https://m.boannews.com/html/detail.html?idx=102064", "https://m.go.seoul.co.kr/news/2021/09/09/20210909011007"]
links: ["claim-tech-6-sensitive-data-consent.md", "topic-tech-privacy-voice-data.md", "src-law-2026-pipa-sensitive-info.md", "src-eyben-2016-egemaps.md", "src-law-2026-pipa-decree-art18.md", "topic-app-paper-evidence.md", "topic-app-impl-consent-privacy.md", "claim-app-6-consent-and-deletion.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-pipc-2021-biometric-guideline

# src-pipc-2021-biometric-guideline

**부분 미확인(C/B)** — 가이드라인 전문 미확보. 기사 403/접근 실패. 5단계·15개 보호조치만 다른 보도로 교차 확인(B).

## 서지정보
개인정보보호위원회 「생체정보 보호 가이드라인」(2021-09-08 개정). 보안뉴스 2건, 서울신문 2021-09-09 보도.

## URL
- https://m.boannews.com/html/detail.html?idx=103846 (403)
- https://m.boannews.com/html/detail.html?idx=102064 (접근 실패)
- https://m.go.seoul.co.kr/news/2021/09/09/20210909011007

## 라이선스/상업 이용
정부 가이드라인(공공). 해당 없음.

## 핵심 내용 (노트 주장)
- '바이오정보' → '생체정보' 용어 변경; 특정 개인 인증·식별 목적 처리 = '생체인식정보'; 인증(기기 내 대조) vs 식별(DB 대조) 구분 — **C**
- 식별 예시: "여러 가족 구성원 음성 중 지금 말하는 사람을 확인해 대답하는 AI 스피커" — **C** (원문 미확보)
- 처리 5단계별 **15개 보호조치** — **B** (다른 보도에서 교차 확인, 공식 전문 대조 미완료)
- 원본정보/특징정보 구분, 특징정보 암호화 저장, 원본과 특징정보 분리 보관 — **C** (세부 의무 확정 인용 불가)

## 검증 결과
- 5단계·15개: **B**. 나머지: **C**
- **C**: "오디오(원본) → eGeMAPS/embedding(특징) → 감정 라벨(추론) 3계층 분리가 가이드라인에 정합적" — 가능한 설계 제안이지 가이드라인이 명시한 의무·승인 설계는 아님

## 한벗 적용 포인트
- 원본 오디오 / 특징정보 / 추론 라벨을 서로 다른 저장소·키로 분리하는 설계는 **팀의 보수적 설계 제안**으로 서술(가이드라인 준수 주장은 전문 확인 후) → [[claim-tech-6-sensitive-data-consent]]
- 조항 번호·음성 특징정보 정의 문구는 pipc.go.kr 원문 확보 필요(Gaps) → [[topic-tech-privacy-voice-data]]
- 관련: [[src-law-2026-pipa-sensitive-info]], [[src-eyben-2016-egemaps]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:53:33.125Z)

## 2026-10-26 논문 보강 (설계서 [P89])
- 서지: 개인정보보호위원회 「생체정보 보호 가이드라인」 2021.9. https://www.privacy.go.kr/front/bbs/bbsView.do?bbsNo=BBSMSTR_000000000049&bbscttNo=12743 . 등급 B(가이드라인 존재 확인, 공식 포털).
- 내용: 음성 감정 인식 전용 지침은 아니다.
- 적용: 법무 검토 시 참조. voiceprint 미생성 설계는 시행령 제18조 정의(P100, [[src-law-2026-pipa-decree-art18]])와 함께 본다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-consent-privacy]] · [[claim-app-6-consent-and-deletion]]
