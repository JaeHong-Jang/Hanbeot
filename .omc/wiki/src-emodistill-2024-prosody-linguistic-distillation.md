---
title: "src-emodistill-2024-prosody-linguistic-distillation"
tags: ["scopus-2026-11", "paper-evidence", "ser", "iemocap", "distillation", "sota", "grade-A"]
created: 2026-11-07T19:52:17.794Z
updated: 2026-11-07T19:52:17.794Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-sota-benchmarks-2026-11.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-emodistill-2024-prosody-linguistic-distillation

# src-emodistill-2024-prosody-linguistic-distillation

## 서지
EmoDistill, ICASSP 2024, 10.1109/ICASSP48485.2024.10448505, arXiv 2309.04849. 노트 05는 분할 방식을 몰라 B로 두었으나 검증이 원문에서 A로 확정.

## 수치
- IEMOCAP 4범주 **화자 독립 LOSO-10: UA 77.49 / WA 78.91**. 운율·언어 교사에서 음성 학생으로 증류.
- 검증 정정: 노트의 "IEMOCAP 화자 독립 상한 UA 73~76"은 성립하지 않음. 현재 확인된 화자 독립 최고는 EmoDistill 77.49. WavLM-L LOSO-10 UA 75.57은 천장이 아니라 또 하나의 확인값.
- 검증 화자 분리 등 세부 조건이 Hyeon과 완전히 같은지는 별도 확인 필요.

## 한벗 적용
영어 대조 참고선(논문 A "EmoDistill 77.49 reference").

## 사용처
[[topic-ser-sota-benchmarks-2026-11]] · [[claim-research-1-paper-a-korean-ser-selective-prediction]]
