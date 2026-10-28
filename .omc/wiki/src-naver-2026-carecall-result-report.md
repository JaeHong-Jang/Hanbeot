---
title: "src-naver-2026-carecall-result-report"
tags: ["app-design", "grade-A", "naver-carecall", "post-call-summary", "benchmark"]
created: 2026-10-25T14:45:26.297Z
updated: 2026-10-25T14:45:26.297Z
sources: ["https://www.navercorp.com/api/article/download/a78ea2e4-1a27-4a35-8edf-6492a00ea8cd"]
links: ["overview-app-design.md", "src-naver-2024-clova-carecall-deployment.md", "overview-benchmark.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-naver-2026-carecall-result-report

# src-naver-2026-carecall-result-report
## 서지정보
네이버(Naver)·서울대 협력 CLOVA 케어콜 결과 보고서(PDF), 발행일 미표기, https://www.navercorp.com/api/article/download/a78ea2e4-1a27-4a35-8edf-6492a00ea8cd, 확인일 2026-10-25, 유형 자사발표(공식 보고서)
## 핵심 수치·사실 (설계서에서 쓴 것)
- 통화 결과 리포트, 카테고리별 불편사항, AI 주 1~2회 통화
- 측정 조건: 보고서 pp.19-20, 지역별 운영 차이(같은 보고서에 주 1~3회도 있음)
## 검증 결과
- 등급 A. 검증표(ux_benchmark): 주 1~2회, 질문 항목, 자유 대화, 완료·미응답·카테고리별 불편 확인, 2주 연속 미응답 별도 표시, 담당 공무원 재확인, 이전 통화 기억·후속 질문 모두 일치. "B2G 과금"은 확인불가, "가입·온보딩 없음"은 입증되지 않음.
## 사용처
- [[overview-app-design]] 의 1절 (3.4 통화 후 요약 헤더 참조)
- 관련: [[src-naver-2024-clova-carecall-deployment]], [[overview-benchmark]]
