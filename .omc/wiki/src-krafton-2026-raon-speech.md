---
title: "src-krafton-2026-raon-speech"
tags: ["voice-agent", "full-duplex", "krafton", "korean", "license", "non-commercial"]
created: 2026-11-07T18:12:19.738Z
updated: 2026-11-07T18:12:19.738Z
sources: ["https://github.com/krafton-ai/Raon-Speech", "https://huggingface.co/KRAFTON/Raon-SpeechChat-9B"]
links: ["topic-voice-agent-frameworks-jarvis-2026-11.md", "topic-bench-opensource-voice-agents.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-krafton-2026-raon-speech

# src-krafton-2026-raon-speech

## 서지
krafton-ai/Raon-Speech README, 모델카드 KRAFTON/Raon-Speech-9B, Raon-SpeechChat-9B. 조회 2026-11-08.

## 수치·기능
- 별 126(A). Raon-Speech 9B: 영·한 이중언어, 한국어 벤치 3종 공개(KVoiceBench, KOpenAudioBench, KMMAU)(A).
- 단일 GPU 스트리밍 TTS first-token 1초 미만: RTX 6000 Pro 617ms, L40S 887ms, LibriSpeech test-clean(영어) 평균(A).
- Raon-SpeechChat: 풀듀플렉스, 전용 백채널 토큰·빈도 조절, 끼어들기(A). 그러나 모델카드는 **영어 대화**라고 명시(노트 "한국어 풀듀플렉스"는 불일치).

## 라이선스
레포 Apache-2.0이지만 두 공개 모델카드(Speech, SpeechChat) 모두 **CC-BY-NC-4.0** -> 가중치 비상업(A). 노트의 레포 vs 선행 노트 충돌은 비상업으로 해소.

## 검증 결과
"한국어 풀듀플렉스 유일 후보", "백채널도 Raon만 한국어"는 C(SpeechChat 한국어 지원부터 미입증, 유일성 조사 불충분).

## 한벗 적용
연구·참고용. 상업 사용 불가, 백채널 학습 방식만 참고.

## 사용처
[[topic-voice-agent-frameworks-jarvis-2026-11]] · [[topic-bench-opensource-voice-agents]]

