---
title: "src-github-2026-emobench-m"
tags: ["benchmark", "empathy-dialogue", "emobench-m", "multimodal", "sota", "grade-A"]
created: 2026-10-25T07:26:09.473Z
updated: 2026-10-25T07:26:09.473Z
sources: ["https://github.com/Emo-gml/EmoBench-M", "https://arxiv.org/abs/2502.04424", "https://arxiv.org/pdf/2505.00049"]
links: ["topic-bench-empathy-dialogue.md", "topic-bench-ser.md", "claim-bench-8-emotion-cue-as-question.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-github-2026-emobench-m

# src-github-2026-emobench-m

## 서지
- EmoBench-M 공식 GitHub README(리더보드, 2026-10 조회) 및 arXiv 2502.04424 (2025-02 최초 제출, 2026-07 ACM MM 2026 채택).

## 수치
- 13개 시나리오(기초 감정 인식·대화 감정 이해·사회적 복합 감정), 27개 MLLM 평가(버전에 따라 변동).
- 리더보드 Avg.: **Gemini-3.0-Pro 70.5 > GPT-5.2 66.5 > Gemini-3.0-Flash 65.5**. 인간 대비 큰 격차.

## 검증 결과 (2026-10-25 확인)
- 등급 **A** (README Avg. 일치). 고정 커밋·조회일 추가 권장.
- "70.5가 모든 음성 감정 판단의 한계를 뜻함": **C** (멀티모달 정서지능 ≠ 한국어 음성 감정 인식 정확도).

## 사용처
- [[topic-bench-empathy-dialogue]] · [[topic-bench-ser]] · [[claim-bench-8-emotion-cue-as-question]]

