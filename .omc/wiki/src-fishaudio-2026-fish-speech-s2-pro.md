---
title: "src-fishaudio-2026-fish-speech-s2-pro"
tags: ["tts", "opensource", "license", "fish-audio", "korean"]
created: 2026-11-07T18:12:09.768Z
updated: 2026-11-07T18:12:09.768Z
sources: ["https://github.com/fishaudio/fish-speech", "https://huggingface.co/fishaudio/s2-pro"]
links: ["topic-tts-opensource-candidates-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-fishaudio-2026-fish-speech-s2-pro

# src-fishaudio-2026-fish-speech-s2-pro

## 서지
fishaudio/fish-speech README·LICENSE, S2-Pro 모델카드. 조회 2026-11-08.

## 수치·기능
- 별 33.6k(B). `[whisper]` `[angry]` `[laughing]` 인라인 태그(Drama 3, A). 직전 테이크를 자연어로 고치는 다회 수정은 **Drama 3 기능**, S2-Pro 표에서는 미지원(A).
- 약 100ms 첫 오디오, RTF 0.195, H200은 S2-Pro 수치(B). Drama 3에 이전 금지.
- 한국어 CER: CV3-Eval 표 2.76(그 표 비교 대상 내 최저, B), VoxCPM 내부 평가 0.29(A). "한국어 표현력 최상"은 공통 청취평가 없음(C).

## 라이선스
- Fish Audio Community License: 무료 상업은 연 매출 **USD 500,000 미만**, 관계사 합산, 직전 12개월(LICENSE III(a), A). 노트의 "금액 미확인"과 "문턱 이하" 표현 정정.
- 호스팅 서비스는 별도 계약(III(c)). 단 정의 예외: 자체 제품이 생성한 조수 응답 음성, 완성 음원 납품, 무료 비상업 연구 데모.
- S2-Pro 가중치는 Research License(연구·비상업 무료, 상업은 별도 계약).

## 검증 결과
"한벗 상용 후보에서 반드시 제외"는 C: 모델·매출·제공 방식별 판단 필요(법무 확인).

## 한벗 적용
청취 상한선 비교용. 상용 채택 전 라이선스 문의.

## 사용처
[[topic-tts-opensource-candidates-2026-11]]

