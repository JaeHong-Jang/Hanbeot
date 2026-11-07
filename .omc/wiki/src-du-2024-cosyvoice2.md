---
title: "src-du-2024-cosyvoice2"
tags: ["paper-evidence", "tts", "latency", "grade-A", "korean", "cosyvoice"]
created: 2026-10-26T05:49:09.107Z
updated: 2026-11-07T19:51:25.698Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-dialogue-tts.md", "claim-feedback-1-reflect-professor-round1.md", "src-funaudio-2026-fun-cosyvoice3.md", "topic-tts-humanlike-evidence-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-du-2024-cosyvoice2

## 서지
Du et al., 2024, "CosyVoice 2", arXiv 2412.10117. https://arxiv.org/abs/2412.10117 . 설계서 [P56].

## 수치
- 한국어 test-ko CER: 스트리밍 9.06% vs 오프라인 7.98% (+1.08%p). NMOS 3.60 vs 3.73 (−0.13).
- 한국어 학습 2,200시간.
- 첫 패킷 지연의 실측 ms는 없음(수식만).

## 검증 결과 (2026-10-26)
- 등급 A. "스트리밍 저하가 작다"는 기준·유의성이 없어 근거 불충분. "150ms 지연"은 이 논문으로 인용 불가(§4).

## 한벗 적용
- 스트리밍 전환 시 한국어 품질 변화의 공개 수치로만 사용.
- MOS 합격선 3.5는 팀 기준으로 표기.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-dialogue-tts]] · [[claim-feedback-1-reflect-professor-round1]]

---

## Update (2026-11-07T18:12:59.902Z)

## 2026-11-08 OSS 음성 조사 반영
- 한국어 스트리밍 CER 9.06%는 CosyVoice2-S 값(논문 표 9)이며 CosyVoice3 수치가 아님(검증 A). 인용 시 모델명 구분.
- CosyVoice3-1.5B의 CV3-Eval 한국어 CER은 5.69(CosyVoice2 19.7에서 개선), 평가가 달라 9.06과 직접 비교 금지. [[src-funaudio-2026-fun-cosyvoice3]]
- CosyVoice3 공개 0.5B 가중치는 Apache-2.0.

---

## Update (2026-11-07T19:51:25.698Z)

## 2026-11-08 원문 확인
- arXiv 2412.10117: test-ko CER 7.98(비스트리밍)/9.06(스트리밍), SS 0.707/0.714, NMOS 3.73/3.60. test-zh CER 1.45(사람 1.26). NMOS는 예측 MOS라 "사람 초과" 해석 금지.
- 스트리밍 한국어 CER +1.08%p. 단 일본어도 18.79->21.41(+2.62%p)이라 "한국어에서 더 크다"는 근거 아님(검증표 C).
- 사용처: [[topic-tts-humanlike-evidence-2026-11]]

