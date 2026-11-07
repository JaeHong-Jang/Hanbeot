---
title: "src-funaudio-2026-fun-cosyvoice3"
tags: ["tts", "opensource", "korean", "cosyvoice", "apache-2.0"]
created: 2026-11-07T18:12:06.707Z
updated: 2026-11-07T18:12:06.707Z
sources: ["https://github.com/FunAudioLLM/CosyVoice", "https://arxiv.org/html/2505.17589"]
links: ["src-du-2024-cosyvoice2.md", "topic-tts-opensource-candidates-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-funaudio-2026-fun-cosyvoice3

# src-funaudio-2026-fun-cosyvoice3

## 서지
FunAudioLLM/CosyVoice(현 QwenAudio/CosyVoice로 이전), Fun-CosyVoice3-0.5B-2512 모델카드, CosyVoice3 논문 arXiv 2505.17589. 조회 2026-11-08.

## 수치·기능
- 별 24.3k(B). 한국어 포함 9개 언어 + 중국어 18+ 방언(A). 논문에 0.5B·1.5B 평가(A).
- Bi-Streaming 최소 150ms는 제작사 보고(A), 한국어 실측 아님.
- instruct(감정·속도·볼륨), 제로샷 복제(A). `example.py`에 `[laughter]` `[breath]` 예제가 있으나 한국어 효과는 미검증(C).
- CV3-Eval 한국어 CER: CosyVoice2 19.7 -> CosyVoice3-1.5B 5.69(논문 표 5, A). VoxCPM2도 5.69로 동일(노트의 "CosyVoice3가 더 높다"는 불일치).
- 한국어 스트리밍 CER 9.06은 **CosyVoice2-S** 값이며 CosyVoice3 수치가 아님([[src-du-2024-cosyvoice2]]).

## 라이선스
코드 Apache-2.0. 공개 **0.5B 가중치 Apache-2.0**(모델카드, A). 1.5B 공식 다운로드는 미확인(C) -> 확대 적용 금지.

## 검증 결과
위 A 항목 외 "두 크기 모두 즉시 시험 가능"은 C. 선행 노트 샘플에 CosyVoice3 없음.

## 한벗 적용
W4 후보 3순위, 0.5B로 시험.

## 사용처
[[topic-tts-opensource-candidates-2026-11]]

