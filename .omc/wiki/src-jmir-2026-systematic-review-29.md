---
title: "src-jmir-2026-systematic-review-29"
tags: ["tech", "safety-crisis-detection", "grade-A", "systematic-review", "companion-chatbot", "suicide", "jailbreak", "paper-evidence", "crisis", "safe-messaging"]
created: 2026-10-25T07:21:55.102Z
updated: 2026-10-26T05:53:18.092Z
sources: ["https://preprints.jmir.org/preprint/103517", "https://aclanthology.org/2025.iwsds-1.13/"]
links: ["claim-tech-8-crisis-referral-flow.md", "topic-tech-safety-crisis-detection.md", "src-mirror-eval-2026-companion-harm.md", "src-psycrisisbench-2025.md", "topic-app-paper-evidence.md", "topic-app-impl-safety-crisis.md", "claim-app-5-crisis-ops-and-tel109.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-jmir-2026-systematic-review-29

# src-jmir-2026-systematic-review-29

## 서지정보
1. JMIR Preprints 103517: AI 챗봇의 자살·자해 대응에 관한 체계적 문헌고찰 (29편, 2025-12 검색 cutoff; 출판 논문·프리프린트 혼재). preprint 단계.
2. IWSDS 2025 (ACL Anthology 2025.iwsds-1.13): 자살 위험자 지원 대화 에이전트 설계 논문.

## URL
- https://preprints.jmir.org/preprint/103517
- https://aclanthology.org/2025.iwsds-1.13/

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치/결론
- 29편 고찰: 독점 frontier 모델(ChatGPT, Claude)이 오픈소스(LlaMA, DeepSeek)·여러 companion 앱(Replika, Character.AI)보다 자살·자해 위험 응답 품질 높음 (경향이며 모든 앱·모델의 절대 순위 아님)
- 공통 문제: **poor risk assessment, delays in referrals to crisis resources and human-delivered support, difficulty detecting jailbreaking attempts**
- IWSDS 2025: 자살 위험자 지원 에이전트 설계 사례 존재

## 검증 결과
- 세 주장 모두 등급 **A** (Methods·Results·결론 확인)

## 한벗 적용 포인트
- 한벗은 "AI companion" 카테고리 → 고찰이 지적한 3대 실패(위험 평가 부실, 위기 자원 연계 지연, jailbreak)를 설계 단계에서 명시적으로 차단: (1) 매 턴 위험 분류 (2) 명시적 신호 시 즉시 109 안내 (3) 역할놀이 요청에도 안전 규칙 유지 → [[claim-tech-8-crisis-referral-flow]]
- frontier 모델(Claude) 사용 자체가 안전 기본선에 유리하다는 근거 → [[topic-tech-safety-crisis-detection]]
- 관련: [[src-mirror-eval-2026-companion-harm]], [[src-psycrisisbench-2025]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:53:18.092Z)

## 2026-10-26 논문 보강 (설계서 [P79])
- 수치: AI 챗봇 자살·자해 대응 체계적 고찰 29편(JMIR Preprints 2026). 공통 실패는 위험 평가 부실, 위기 자원 연계 지연, 탈옥 탐지의 어려움.
- 적용: 탈옥 20시나리오 평가의 근거. KeywordGate+위험 태그 2단 구조를 직접 검증한 논문은 아니다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-safety-crisis]] · [[claim-app-5-crisis-ops-and-tel109]]
