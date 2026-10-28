---
title: "claim-collab-3-independent-evaluation-ser"
tags: ["collab", "claim", "speech-emotion", "evaluation", "grade-B"]
created: 2026-10-25T07:29:38.343Z
updated: 2026-10-25T07:29:38.343Z
sources: []
links: ["src-who-2024-lmm-ethics-guidance.md", "src-ellipsis-2022-frontiers-voice-biomarker.md", "src-unist-2026-kim-taehwan-cmet-cvpr.md", "lab-korea-ko-hanseok.md", "lab-etri-noh-kyoungju-kemdy.md", "src-cms-2023-kemdy19-wav2vec-hubert-vad.md", "topic-collab-datasets-and-irb.md", "overview-researcher-collaboration.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-collab-3-independent-evaluation-ser

## 주장 (사업계획서용 한 문장)
「한벗」의 음성 감정 단서 분석(억양·속도·멈춤)은 한국어 감정 음성 데이터와 음성 감정 인식 전문 연구자의 독립 평가를 거친 뒤에만 "감정 단서를 반영한다"고 표현하며, 그 전까지는 보조적 신호로만 사용한다.

## 근거
- WHO: 명확히 정의된 과제에 대한 정확성·신뢰성 설계, (대규모 배포 시) 독립 제3자 감사 — A [[src-who-2024-lmm-ethics-guidance]]
- Ellipsis Health: 음성 바이오마커도 AUC 0.82(첫 세션·통합·기준점 10) 수준이며 다수 기관 등록 연구로 타당화 진행 중 — A/B [[src-ellipsis-2022-frontiers-voice-biomarker]]
- UNIST 김태환 C-MET: 감정 표현 정확도 41.99→55.91%는 표정 생성 지표이며 SER 정확도가 아님(수치 전용 금지) — A [[src-unist-2026-kim-taehwan-cmet-cvpr]]
- 국내 SER 전문가·데이터 존재: [[lab-korea-ko-hanseok]], [[lab-etri-noh-kyoungju-kemdy]], [[src-cms-2023-kemdy19-wav2vec-hubert-vad]]

## 등급
B (근거 문서는 A/B이나, "한벗 모델의 연령·방언 일반화 문제"와 "외부 평가 없으면 과대광고"는 검증자 C — 가설로 표기)

## 표기 원칙 (제안/추론 표시)
- "한국어 SER은 연령·방언 편향이 있어 외부 평가 없이는 과대광고 위험"은 **합리적 가설**이며 한벗 모델에 대한 직접 검증은 없음.
- "독립 감사의 가장 현실적 공급자는 대학 연구실"은 **팀의 전략**이며 WHO 원문이 지목한 것이 아님. 대학 협업과 독립성 확보는 별개 문제.

## 연구자에게 요청하는 것
- KEMDy 계열 또는 자체 수집 데이터로 「한벗」 감정 단서 모듈의 성능·편향(연령·성별·방언) 독립 평가 설계 및 결과 공동 발표.

관련: [[topic-collab-datasets-and-irb]], [[overview-researcher-collaboration]]

