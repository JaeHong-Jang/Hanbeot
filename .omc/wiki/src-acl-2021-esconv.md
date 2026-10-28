---
title: "src-acl-2021-esconv"
tags: ["benchmark", "empathy-dialogue", "esconv", "dataset", "grade-A", "paper-evidence", "ser"]
created: 2026-10-25T07:25:51.419Z
updated: 2026-10-26T05:52:07.298Z
sources: ["https://aclanthology.org/2021.acl-long.269/"]
links: ["topic-bench-empathy-dialogue.md", "topic-app-paper-evidence.md", "topic-app-impl-dialogue-tts.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-acl-2021-esconv

# src-acl-2021-esconv

## 서지
- Liu et al., *Towards Emotional Support Conversation* (ACL 2021, 2021.acl-long.269) — ESConv 데이터셋.

## 사실
- Hill의 Helping Skills 이론 기반 **8개 정서지원 전략**(질문, 재진술, 감정 반영, 자기 개방, 긍정·안심, 제안, 정보, 기타)을 주석한 지원자-구조자 대화셋.

## 검증 결과 (2026-10-25 확인)
- 등급 **A**. 원래 데이터 논문을 직접 인용(노트는 2402.13211을 경유 인용).

## 사용처
- [[topic-bench-empathy-dialogue]]

---

## Update (2026-10-26T05:52:07.298Z)

## 2026-10-26 논문 보강 (설계서 [P49])
- 수치: Helping Skills 기반 8개 정서지원 전략을 주석한 영어 대화셋.
- 적용: 3모드(들어줘·조언·정리)의 허용 전략 정의와 100턴 모드 위반율 평가 기준을 이 전략 범주에 맞춘다. 영어 데이터라 한국어 평가는 별도.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-dialogue-tts]]
