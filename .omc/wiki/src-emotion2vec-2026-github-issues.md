---
title: "src-emotion2vec-2026-github-issues"
tags: ["emotion2vec", "github-issues", "user-reports", "grade-C", "ser"]
created: 2026-11-07T20:06:55.895Z
updated: 2026-11-07T20:06:55.895Z
sources: ["https://github.com/ddlBoJack/emotion2vec/issues"]
links: ["topic-dev-repos-ser-recipes-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md", "src-emotion2vec-2024-github.md"]
category: reference
confidence: low
schemaVersion: 1
---

# src-emotion2vec-2026-github-issues

## 서지
ddlBoJack/emotion2vec 이슈 #30, #39, #41, #42, #46, #61 (2024-06 ~ 2025-07). 조회 2026-11-08. 신뢰도 낮음: 대부분 사용자 보고.

## 수치·기능
- #30: 저자 "길이 제한 없음, 오디오당 라벨 하나, VAD로 의미 단위로 자르라"(저자 발언).
- #41: **사용자**가 plus-large의 페르시아어 저하와 1~2초 입력 환각을 보고. 저자 발언은 "필요 없는 감정을 로짓에서 마스킹하면 이전 모델과 비슷"까지.
- #61: **사용자** 보고: torchaudio vs Sox 16kHz 리샘플로 예측이 크게 달라짐. 저자 답변 없음.
- #39: 사용자 EmoDB WA 약 34.2%(원값 34.2157%). 저자: 임베딩 학습에는 emotion2vec_base가 낫다.
- #46: seed=EmoBox 학술 데이터, base/large=의사 라벨. 분할 질문은 무응답. #42: 융합은 공개 계획 없음.

## 라이선스
FunASR MODEL_LICENSE v1.1(출처·모델명 유지, 비방 시 박탈 조항).

## 검증 결과
**정정(C):** "저자가 직접 밝힌 실패 모드 3개"는 불일치. 짧은 입력 환각과 리샘플 민감도는 사용자 보고이며 저자 확인이 없다. "한국어 4~7클래스 마스킹+재정규화가 저자 공인 대응"도 확인불가(우리 제안). #39 수치는 B.

## 한벗 적용
R5(길이별 UA, 로짓 마스킹)와 R6(리샘플러 민감도)로 직접 측정해서만 서비스 게이트에 반영. 논문에서는 "사용자 보고된 현상을 측정"으로 서술.

## 사용처
[[topic-dev-repos-ser-recipes-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]] · [[src-emotion2vec-2024-github]]

