---
title: "src-audeering-2023-w2v2-msp-dim"
tags: ["audeering", "dimensional", "msp-podcast", "cc-by-nc-sa", "model-card", "grade-A"]
created: 2026-11-07T20:07:37.732Z
updated: 2026-11-07T20:07:37.732Z
sources: ["https://huggingface.co/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim", "https://github.com/audeering/w2v2-how-to"]
links: ["src-wagner-2023-transformer-era.md", "topic-dev-repos-ser-recipes-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-audeering-2023-w2v2-msp-dim

## 서지
audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim (HF 모델카드) + audeering/w2v2-how-to. 논문은 [[src-wagner-2023-transformer-era]]. 조회 2026-11-08.

## 수치·기능
- w2v2-how-to 563★, push 2023-05-22(A).
- Wav2Vec2-Large-Robust를 MSP-Podcast v1.7로 미세조정, 24층 → 12층 가지치기. 출력 각성·지배·긍정도(대략 0~1) + 마지막 층 풀링 상태. 헤드 dropout → dense(tanh) → dropout → out_proj. ONNX(zenodo 10.5281/zenodo.6221127).
- MSP CCC 각성 .745 / 지배 .634 / 긍정도 .635, IEMOCAP 교차 .663/.518/.448(논문 본문).
- 불확실성은 다루지 않음(모델카드 범위).

## 라이선스
w2v2-how-to MIT / **가중치 CC-BY-NC-SA-4.0**(연구 전용). audonnx는 API상 NOASSERTION이나 실제 LICENSE는 MIT(검증표).

## 검증 결과
긍정도 범위 .359~.635는 **정정**: 본문은 HuBERT-base .636까지, 초록 최고 .638. 논문은 개별 화자 수준 CCC 분석으로 공정성 문제를 명시함(노트의 "미보고"는 오류).

## 한벗 적용
논문 실험 전용(R8 차원 헤드 재현). 서비스 번들 금지(NC, SA).

## 사용처
[[topic-dev-repos-ser-recipes-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]]

