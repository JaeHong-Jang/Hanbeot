---
title: "src-park-2024-backchannel-eacl"
tags: ["paper-evidence", "barge-in", "turn-detection", "grade-A", "korean", "backchannel", "grade-B"]
created: 2026-10-26T05:46:24.601Z
updated: 2026-11-07T19:51:38.449Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "claim-feedback-1-reflect-professor-round1.md", "topic-dialogue-dynamics-evidence-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-park-2024-backchannel-eacl

## 서지
Park et al. (충남대), 2024, "Improving Backchannel Prediction Leveraging Sequential and Attentive Context Awareness", Findings of EACL. https://aclanthology.org/2024.findings-eacl.118/ . 설계서 [P11].

## 수치
- 백채널 예측 한국어 M-F1 33.8→35.1(+1.3%p), 영어 W-F1 62.9→64.7(+1.8%p).

## 검증 결과 (2026-10-26)
- 등급 A. 노트의 "ETRI 계열 연구"는 불일치(C): 논문 저자 소속은 충남대. ETRI 자원 사용과 소속을 구분.
- 비평 반영(§7-18): 백채널을 언제 낼지 "예측"하는 과제이며, 사용자 "응/음"이 끼어들기인지 판별하는 과제의 근거가 아니다.

## 한벗 적용
- 백채널 생성·입력 판별·TTS 중단을 별개 과제로 나누고, 판별·중단 정책은 W2에 실제 겹친 발화로 오중단율을 잰다.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]] · [[claim-feedback-1-reflect-professor-round1]]

---

## Update (2026-11-07T19:51:38.449Z)

## 2026-11-08 원문 확인
- 검증표: CABP PDF 본문 판독 가능. **한국어 최고 M-F1 39.5**(노트의 "약 35"는 정정). 초록 수치 문맥 무사용 대비 +1.3%(한국어)/+1.8%(영어), wav2vec 결합 +4.4%/+3.1%.
- VAP BC-pred F1 .723과 과제가 달라 직접 비교 불가. Interspeech 2024 "who, when and what"는 서지만 확인(C).
- 사용처: [[topic-dialogue-dynamics-evidence-2026-11]]

