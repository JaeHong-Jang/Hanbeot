---
title: "src-sesame-2025-csm-uncanny-valley"
tags: ["tts", "paper-evidence", "grade-A", "scopus-2026-11", "sesame", "csm"]
created: 2026-11-07T19:48:46.832Z
updated: 2026-11-07T20:08:20.850Z
sources: []
links: ["topic-tts-humanlike-evidence-2026-11.md", "claim-app-13-tts-blind-test-protocol-w4.md", "topic-dev-repos-voice-conversation-2026-11.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-sesame-2025-csm-uncanny-valley

# src-sesame-2025-csm-uncanny-valley
## 서지
Sesame, 2025, "Crossing the uncanny valley of voice" (블로그/기술 보고). sesame.com/research/crossing_the_uncanny_valley_of_voice
## 수치
Llama 백본+소형 오디오 디코더, Mimi 12.5Hz, 약 1M시간 영어. 평가 모델 8B/300M. Expresso 7점 CMOS, 80명 x 평균 약 15개 평가. 맥락 없음: 선호 차이 없음 / 직전 90초 맥락: 원본 선호(승률은 그림에만).
## 검증 결과
수치 A. 선호 비교이며 두 실험의 질문이 "사람 같은 발화"에서 "대화 적절성"으로 바뀌어 맥락만의 효과로 분리 불가. 사람/기계 판별 증거가 아니고 "최신 TTS 일반"으로 확장 불가. 한계: 턴테이킹·쉼·속도 미모델링, 다국어 약함.
## 한벗 적용
W4 평가에 맥락 조건을 넣는 근거(효과 크기는 한국어에서 미지).
## 사용처
[[topic-tts-humanlike-evidence-2026-11]] · [[claim-app-13-tts-blind-test-protocol-w4]]

---

## Update (2026-11-07T20:08:20.850Z)

## 2026-11-08 개발자 저장소 조사 반영
- 재사용 숫자: 직전 90초 맥락을 주면 평가자가 원본 녹음을 선호, 맥락 없으면 뚜렷한 선호 없음(50:50). 평가자 80명·평균 15개, 학습 약 100만 시간 영어(B).
- **주의(검증표):** 평가 모델은 CSM-Medium이며 공개 CSM-1B 결과로 옮기면 안 됨. WER·화자 유사도 포화 지적과 동음이의어 판별·발음 일관성 지표 도입은 유지.
- `generate(text, speaker, context=[Segment...])`: 맥락 오디오+텍스트 입력, README "맥락을 줄 때 가장 잘 들린다". 영어 중심.
- 한벗 적용: 블라인드 테스트에 "직전 턴을 들려주고 더 적절한 이어말하기 고르기" 문항. [[topic-dev-repos-voice-conversation-2026-11]]

