---
title: "src-livekit-2025-turn-detector"
tags: ["paper-evidence", "turn-detection", "grade-A", "korean", "livekit", "turn-detector"]
created: 2026-10-26T05:45:40.226Z
updated: 2026-11-07T20:08:18.355Z
sources: []
links: ["topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md", "topic-dialogue-dynamics-evidence-2026-11.md", "topic-dev-repos-voice-conversation-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-livekit-2025-turn-detector

## 서지
LiveKit, 2025, Turn detector (공식 문서, 벤더). https://docs.livekit.io/agents/logic/turns/turn-detector/ . 설계서 [P7].

## 수치
- 텍스트 기반 모델, 14개 언어. 한국어 TPR 99.3%, TNR 94.5%.

## 검증 결과 (2026-10-26)
- 등급 A·벤더. 문서의 수치 존재·일치 확인이며 독립 검증 아님.

## 한벗 적용
- STT 결과 기반이라 STT 지연과 결합된다(음향 기반 Smart Turn과 다름). 대안 후보로만 유지.

## 사용처
[[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]

---

## Update (2026-11-07T19:51:40.850Z)

## 2026-11-08 원문 확인
- 블로그(게시 2024-12-20): 135M SmolLM v2 기반, 최근 4턴 문맥, VAD 단독 대비 의도치 않은 끼어듦 85% 감소, 잘못된 미종료 3%, 추론 약 50ms. 영어 초기 모델, 벤더 수치.
- **현행 LiveKit EOU 모델은 한국어 지원**(노트의 "한국어 불가"는 초기 모델에만 해당).
- 사용처: [[topic-dialogue-dynamics-evidence-2026-11]]

---

## Update (2026-11-07T20:08:18.355Z)

## 2026-11-08 개발자 저장소 조사 반영
- 모델카드: Qwen2.5-0.5B-Instruct 기반, 7B 교사 증류, 최근 최대 6턴·128토큰, `<|im_end|>` 확률 = 발화 종료 확률, INT8 ONNX CPU. 라이선스 LiveKit Model License.
- **한국어 TPR 99.3% / TNR 94.5%는 공급사 보고**(14개 언어 중 힌디 다음 높음). 독립 검증 아님, 한벗 자체 측정 필요.
- 2024-12-20 글(135M SmolLM v2): 의도치 않은 끼어들기 85% 감소, 오판 3%, 추론 약 50ms, 기본 `min_endpointing_delay` 500ms, 영어만(당시).
- adaptive interruption은 LiveKit Cloud 인증 필요, `backchannel_boundary` 기본 (1.0, 1.0)초(검증표). [[topic-dev-repos-voice-conversation-2026-11]]

