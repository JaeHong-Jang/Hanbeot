---
title: "src-naver-2023-carecall-chi-best-paper"
tags: ["collab", "naver", "carecall", "chi", "hci", "grade-A", "paper-evidence", "memory-hci", "self-disclosure", "korean"]
created: 2026-10-25T07:19:51.620Z
updated: 2026-10-26T05:53:10.521Z
sources: ["https://clova.ai/en/tech-blog/en-clova-carecall-research-paper-understanding-the-benefits-and-challenges-of-deploying-conversational-ai-leveraging-large-language-models-for-public-health-intervention", "https://www.csee.umbc.edu/courses/graduate/691/spring24/pdf/3544548.3581503.pdf", "https://arxiv.org/html/2402.11353v1", "https://clova.ai/en/tech-blog/en-clova-carecall-research-paper-2"]
links: ["topic-collab-case-studies.md", "claim-collab-7-case-precedent-carecall.md", "lab-kaist-lee-uichin-iclab.md", "topic-app-paper-evidence.md", "topic-app-impl-memory.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-naver-2023-carecall-chi-best-paper

## 서지
- Eunkyung Jo(UC Irvine), Daniel A. Epstein(UC Irvine), Hyunhoon Jung(NAVER), Young-Ho Kim(NAVER AI Lab). 「Understanding the Benefits and Challenges of Deploying Conversational AI Leveraging LLMs for Public Health Intervention」, ACM CHI 2023, DOI 10.1145/3544548.3581503, **Best Paper Award**
- 후속: CHI 2024 장기기억과 자기개방 연구, arXiv 2402.11353
- URL: CLOVA 테크블로그 https://clova.ai/en/tech-blog/en-clova-carecall-research-paper-understanding-the-benefits-and-challenges-of-deploying-conversational-ai-leveraging-large-language-models-for-public-health-intervention / 논문 PDF https://www.csee.umbc.edu/courses/graduate/691/spring24/pdf/3544548.3581503.pdf / CHI 2024 https://arxiv.org/html/2402.11353v1 / 블로그 2 https://clova.ai/en/tech-blog/en-clova-carecall-research-paper-2

## 핵심 내용
- CHI 2023: 사용자·텔레오퍼레이터·개발자 대상 포커스그룹·인터뷰. 케어콜이 외로움·정서적 부담 완화 및 공공보건 업무 부담 경감에 기여했으나 LLM 특성상 공중보건·개인건강 지원에 한계 확인(A, 질적 연구의 관찰·진술이며 임상 효과의 인과 추정 아님). "3그룹 총 34명"(C): PDF 확보 실패로 인원 미확인.
- CHI 2024: 통화기록 1,252건(**147명**에서 수집)·사용자 9명 인터뷰로 장기기억이 자기개방에 미치는 영향 분석(A).

## 검증 결과
- 등급: A (저자·DOI·수상·결과 취지) / 34명 C
- 적용된 수정: 1,252는 통화기록 수이며 147명 사용자에서 수집됨을 명시.
- "CHI Best Paper가 128개 지자체 확산의 근거를 만들었다"(C): 병존은 확인되나 인과관계 미입증.
- 확인일: 2026-10-25

## 한벗과의 접점
- 산업체-대학 HCI 공동연구가 한국어 음성 정서 돌봄 서비스의 학술적 정당성을 만든 국내 최적 비교 사례. 같은 방법론(이해관계자 인터뷰·로그 분석)을 UNIST 디자인학과·KAIST ICLab과 재현 가능 → [[topic-collab-case-studies]], [[claim-collab-7-case-precedent-carecall]], [[lab-kaist-lee-uichin-iclab]]

---

## Update (2026-10-26T05:53:10.521Z)

## 2026-10-26 논문 보강 (설계서 [P69])
- 수치: Jo et al. CHI 2023 한국어 LLM 돌봄 통화 질적 연구. 2024 후속은 147명 통화기록 1,252건으로 장기기억과 자기개방을 분석. 등급 A.
- 적용: 국내 음성 돌봄 서비스의 기억 사용 사례. 효과 수치로는 쓰지 않는다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-memory]]
