---
title: "src-hu-2026-qwen3-tts-report"
tags: ["tts", "korean-tts", "paper-evidence", "grade-A", "scopus-2026-11"]
created: 2026-11-07T19:48:56.898Z
updated: 2026-11-07T19:48:56.898Z
sources: []
links: ["topic-tts-humanlike-evidence-2026-11.md", "src-qwen-2026-qwen3-tts.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-hu-2026-qwen3-tts-report

# src-hu-2026-qwen3-tts-report
## 서지
Qwen3-TTS Technical Report, arXiv 2601.15621. 5M시간+, 10개 언어, 12Hz/25Hz 토크나이저. (제1저자 표기는 서지 재확인 필요, slug는 노트 후보명 유지.)
## 수치
한국어 WER 1.74~2.70, SIM 0.80~0.82 (ElevenLabs 1.87/0.70, MiniMax 1.75/0.78). 12Hz 첫 패킷 97~101ms(동시1), 179~195ms(3), 299~333ms(6), RTF 0.29~0.46. UTMOS 4.16.
## 검증 결과
**한국어 표는 Base 모델이며 MiniMax 논문의 다국어 평가셋**(자체 셋 아님). 표 9 화자 실험은 Aiden이지 Sohee가 아님 -> Sohee CustomVoice 성능으로 인용 금지. UTMOS 4.16은 토크나이저 재구성 점수. MOS 없음. 지연은 제작사 보고.
## 한벗 적용
OSS 후보 근거는 WER·지연뿐. 청취 자연성은 W4에서 측정.
## 사용처
[[topic-tts-humanlike-evidence-2026-11]] · [[src-qwen-2026-qwen3-tts]]

