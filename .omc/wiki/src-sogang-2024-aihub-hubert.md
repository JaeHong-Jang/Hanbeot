---
title: "src-sogang-2024-aihub-hubert"
tags: ["tech", "speech-emotion-recognition", "grade-A", "korean-dataset", "aihub", "hubert", "late-fusion", "app-design", "ser", "korean", "paper-evidence", "ser-limits"]
created: 2026-10-25T07:15:42.589Z
updated: 2026-10-26T05:51:53.166Z
sources: ["https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918"]
links: ["src-aihub-2024-terms.md", "claim-tech-1-ser-model.md", "topic-tech-speech-emotion-recognition.md", "src-ahfe-2024-kemdy19-ccc.md", "src-ma-2024-emotion2vec.md", "overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-sogang-2024-aihub-hubert

# src-sogang-2024-aihub-hubert

## 서지정보
서강대학교 석사학위논문 (2024), AI Hub '감정 분류를 위한 대화 음성 데이터셋' 기반 HuBERT 음성 SER + LLaMa2 텍스트 융합 실험. 서강대 dCollection 기관 저장소.

## URL
- https://dcollection.sogang.ac.kr/dcollection/srch/srchDetail/000000076918

## 라이선스/상업 이용
학위논문. 사용 데이터셋(AI Hub)의 약관은 [[src-aihub-2024-terms]] 참조(미확인).

## 핵심 수치
- HuBERT 단일 음성 모델, 4-class(분노, 기쁨, 중립, 슬픔) 정확도 **0.8139**
- LLaMa2 텍스트 모델과의 융합(late fusion) 실험 포함

## 검증 결과
- 등급 **A** (초록에 0.8139 명시). 단, **화자 독립(speaker-independent) 분할 여부까지 확인한 것은 아님** — 벤치마크 기준치로 쓸 때 주의

## 한벗 적용 포인트
- 한국어 4-class SER의 **1차 비교 기준(0.8139)** — 팀 벤치마크에서 emotion2vec+/SenseVoice-S/Whisper-encoder가 이 수준에 도달하는지 확인 → [[claim-tech-1-ser-model]]
- 음성(HuBERT) + 텍스트(LLM) late fusion이 한국어에서 이미 시도된 구조라는 근거 → [[topic-tech-speech-emotion-recognition]]
- 관련: [[src-ahfe-2024-kemdy19-ccc]], [[src-ma-2024-emotion2vec]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:51:49.338Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S15] (등급 A, 독립연구/학위논문). 사용: 한국어 4-class 0.8139(HuBERT). 조건: AI Hub 데이터, 화자 독립 분할 미확인, 이번 조사 범위의 공개 수치 1건.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지.
- 사용처: [[overview-app-design]] 의 9절, 5절 ④. 관련: [[claim-tech-1-ser-model]]

---

## Update (2026-10-26T05:51:53.166Z)

## 2026-10-26 논문 보강 (설계서 [P26])
- 수치: AI Hub 4-class 정확도(accuracy) HuBERT 0.8139, LLaMa2 텍스트 0.8125, late fusion 0.8480. 한국어. 등급 A.
- 교정: 지표는 UA가 아닌 정확도이고 화자 독립 분할 여부는 미확인이다. "0.8139보다 낮으므로 UA 0.70은 보수적"은 불일치(C): 지표·분할·데이터 조건이 달라 비교 불가.
- 적용: 합격선과 직접 비교 금지.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]
