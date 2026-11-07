---
title: "claim-research-2-paper-b-personalization-synthetic"
tags: ["scopus-2026-11", "research-track", "paper-b", "personalization", "synthetic-data", "v3"]
created: 2026-11-07T19:54:12.386Z
updated: 2026-11-07T19:55:02.888Z
sources: ["reports/한벷 최종 계획 v3.md#4.3-B", "research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["claim-research-1-paper-a-korean-ser-selective-prediction.md", "src-ma-2023-synthetic-tts-ser.md", "src-tran-2023-personalized-adaptation.md", "src-sridhar-2022-unsupervised-personalization.md", "src-ihori-2025-ntt-icl-personalization.md", "src-yoon-2026-human-vs-ai-korean-voices.md", "src-shen-2025-meta-perser.md", "topic-collab-unist-speech-labs.md"]
category: decision
confidence: low
schemaVersion: 1
---

# claim-research-2-paper-b-personalization-synthetic

# claim-research-2-paper-b-personalization-synthetic

**2순위.** 논문 A([[claim-research-1-paper-a-korean-ser-selective-prediction]]) 코드 위에 증분. A가 막히면 B도 시작하지 않는다.

## 요약
- 제목 초안: *Few-Shot Speaker Personalization and Quality-Filtered Synthetic Speech for Korean Conversational Emotion Recognition*.
- RQ: 합성 데이터가 자연 대화 SER(valence·소수 감정)을 올리는가, 연기 데이터에서만인가 / 등록 발화 k in {0,1,3,7,15} 적응이 화자별 CCC를 올리는가 / 두 기법은 상보적인가.
- 방법: ASR-WER·화자 유사도·감정 분류기로 품질 필터 -> 커리큘럼/전이 투입(단순 혼합 금지, [[src-ma-2023-synthetic-tts-ser]]), 합성:실제 1:2 기준 스윕. 적응: 화자 임베딩 조건 사전학습 [[src-tran-2023-personalized-adaptation]] 또는 유사 화자 라벨 분포 [[src-sridhar-2022-unsupervised-personalization]], 등록 발화 ICL [[src-ihori-2025-ntt-icl-personalization]].
- 이길 기준선: MSP-Podcast v1.6 valence O-CCC **0.665(전체 테스트; 0.663은 test-b)**, arousal 0.740(test-b), 화자별 A-CCC valence 0.569. 한국어 KEMDy19 LOSO-40 UA 66.26.
- 목표: Computer Speech & Language 또는 Speech Communication, 디딤돌 Interspeech/ICASSP.

## 기대·위험 (모두 추정/주의)
- 한국어 valence +0.03~0.06은 영어 +0.056 유추, 한국어 근거 없음. 합성은 자연 대화에서 0 이하일 수 있고 부정적 결과도 가치가 있음.
- 합성 "불안"은 과장될 수 있음 ([[src-yoon-2026-human-vs-ai-korean-voices]]: AI 불안은 주로 강도 변동 의존).
- 검증 정정: **화자당 최소 15발화로는 15샷 적응 후 평가 발화가 남지 않는다.** 적응분 외 평가분을 별도 확보해야 함. 등록 30초 가정도 발화 길이에 따라 달라짐.
- 합성 5,000~10,000발화, 150~250 GPU시간은 근거 없는 추정(C). TTS 약관상 학습용 합성 가능 여부 확인 필요. 개인화 정보는 민감 정보(IRB).

---

## Update (2026-11-07T19:55:02.888Z)

## 참고 (청자 개인화)
- 평가자(청자) 스타일 적응은 화자 개인화와 다르다: [[src-shen-2025-meta-perser]] (본 데이터 +1~2%p, 미본 최대 +7%p). 공저 후보: [[topic-collab-unist-speech-labs]].
