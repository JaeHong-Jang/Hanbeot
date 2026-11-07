---
title: "src-qwen-2026-qwen3-tts"
tags: ["tts", "opensource", "korean", "qwen", "apache-2.0"]
created: 2026-11-07T18:12:01.270Z
updated: 2026-11-07T18:12:01.270Z
sources: ["https://github.com/QwenLM/Qwen3-TTS"]
links: ["topic-tts-opensource-candidates-2026-11.md", "topic-tts-humanlike-techniques.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-qwen-2026-qwen3-tts

# src-qwen-2026-qwen3-tts

## 서지
QwenLM/Qwen3-TTS (GitHub README, 모델카드 Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice). 조회 2026-11-08.

## 수치·기능
- 별 14.3k(B). 0.6B/1.7B, Base·CustomVoice·VoiceDesign 변형, 공개 표 5개 모델 모두 스트리밍(A).
- 한국어 포함 10개 언어. Sohee = "Warm Korean female voice with rich emotion"(A).
- 첫 패킷 최소 97ms는 제작사 주장(A). 전체 STT-LLM-TTS 지연이 아니며 GPU·한국어 실측 없음.
- 자연어 instruct(감정·운율)와 VoiceDesign은 **1.7B CustomVoice·VoiceDesign만**. Base와 0.6B CustomVoice는 미지원(A, 노트 정정). 3초 참조 복제는 Base 기능.
- vLLM-Omni day-0 지원(범위는 오프라인 추론으로 제한된 설명 병존).

## 라이선스
Apache-2.0, 코드와 해당 가중치 모두(A).

## 검증 결과
위 항목 A. 비언어 태그·한국어 감정 효과는 미확인(C, 부재/효과 실험 없음).

## 한벗 적용
W4 블라인드 후보 1순위. 반드시 1.7B CustomVoice(Sohee)로 시험. 선행 노트 샘플 보유.

## 사용처
[[topic-tts-opensource-candidates-2026-11]] · [[topic-tts-humanlike-techniques]]

