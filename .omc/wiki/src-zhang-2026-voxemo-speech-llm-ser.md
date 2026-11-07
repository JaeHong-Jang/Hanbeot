---
title: "src-zhang-2026-voxemo-speech-llm-ser"
tags: ["scopus-2026-11", "paper-evidence", "ser", "audio-llm", "lora", "grade-A"]
created: 2026-11-07T19:51:57.181Z
updated: 2026-11-07T19:51:57.181Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-performance-levers-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-zhang-2026-voxemo-speech-llm-ser

# src-zhang-2026-voxemo-speech-llm-ser

## 서지
Zhang, Chou, Narayanan, Hain 2026, VoxEmo, arXiv 2603.08936. 검증 A.

## 수치
- 35개 코퍼스·15개 언어. Qwen2-Audio, Audio Flamingo 3 평가. **한국어·KEMDy는 데이터 표에 없음**(검증으로 노트 §9 미확인 해소).
- 제로샷은 지도보다 낮음: CREMA-D Qwen2-Audio 직접 61.9, AF3 앙상블 54.1 vs 지도 71.0 (hard-label macro-F1, 표 7).
- LoRA SFT: 제로샷 대비 평균 macro-F1 +23.7, 36분할 중 34곳 개선(Qwen2-Audio 결과). SFT 후 acted 66.0 / 자연 40.1.
- 지도 EmoBox 기준선 30곳 중 10곳 상회: 5,000발화 이상 11곳 중 7곳, 1,000발화 미만 9곳 중 0곳.
- Qwen2-Audio는 확률이 과도하게 집중(과신), AF3는 분포가 매끈. 분포 정렬 관찰이며 ECE로 입증한 보정 우열이 아님.

## 한벗 적용
7B급 LoRA는 비용 높음. KEMDy 규모(약 8천 발화)에서 지도 기준선과 동급이라는 보장은 없음. [[topic-ser-performance-levers-2026-11]]

## 사용처
[[topic-ser-performance-levers-2026-11]]
