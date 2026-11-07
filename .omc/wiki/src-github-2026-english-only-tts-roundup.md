---
title: "src-github-2026-english-only-tts-roundup"
tags: ["tts", "opensource", "english-only", "dia", "orpheus", "sesame-csm", "non-verbal"]
created: 2026-11-07T18:12:28.449Z
updated: 2026-11-07T18:12:28.449Z
sources: ["https://github.com/nari-labs/dia", "https://github.com/canopyai/Orpheus-TTS", "https://github.com/SesameAILabs/csm"]
links: ["topic-tts-opensource-candidates-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-github-2026-english-only-tts-roundup

# src-github-2026-english-only-tts-roundup

## 서지
nari-labs/dia, canopyai/Orpheus-TTS, SesameAILabs/csm (GitHub README). 조회 2026-11-08. 한국어는 없지만 기법 차용 대상.

## 수치·기능
- Dia (19.4k, B): 영어 생성만 지원 명시(A). 비언어 태그 `(laughs)` `(sighs)` `(inhales)` 등 목록 21개(B, 노트 "20여 종"), 참조 음성 조건.
- Orpheus (6.4k): 영어 중심, 다국어는 연구 프리뷰, 감정 태그 `<laugh>` 류(A). 약 200ms, 입력 스트리밍 시 약 100ms(B, 제작사). 복제는 제로샷 표방하나 명시 학습 안 됨(B).
- Sesame CSM (14.7k): Llama 백본, 이전 화자 발화를 `Segment`(텍스트+오디오)로 입력해 대화 맥락 반영(A). 영어 전용은 B: FAQ상 비영어 능력이 일부 있으나 좋지 않을 것으로 설명.
- Spark(중·영)·Zonos(영·일·중·프·독 5개)·Kokoro(한국어 없음, 82M)도 같은 계열. "없음"으로 적힌 기능은 구현 부재 입증이 아니라 문서 미확인(C).

## 라이선스
코드 Apache-2.0(Dia, Orpheus, CSM 등, A).

## 검증 결과
언어 범위는 명시 미지원과 미확인이 섞여 있어 "모두 한국어 불가"는 C.

## 한벗 적용
직접 사용 불가. CSM의 "이전 턴 오디오+텍스트 입력" 구조는 Typecast `previous_text` 설계의 참고.

## 사용처
[[topic-tts-opensource-candidates-2026-11]]

