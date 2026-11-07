---
title: "topic-ser-context-personalization"
tags: ["ser", "context", "erc", "personalization", "baseline", "unconfirmed", "topic"]
created: 2026-11-07T11:31:18.019Z
updated: 2026-11-07T11:31:18.019Z
sources: ["research_notes/회의 후속 조사/AB_맥락_개인화.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-app-impl-ser-cues.md", "src-kim-2021-emoberta.md", "src-lei-2024-instructerc.md", "src-jeong-2023-kemdy20-context.md", "topic-ser-model-comparison-whisper-spectrogram.md", "src-sridhar-2022-unsupervised-personalization.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-ser-context-personalization

# topic-ser-context-personalization

상위: [[topic-meeting-followup-ser-2026-11]] · [[topic-app-impl-ser-cues]]. **미확정(11/9 회의 결정 전).** 출처 노트: AB_맥락_개인화.md (2026-11-06, 숫자는 원문 확인).

## A. 맥락 반영 감정 인식(ERC)
회의 지적: "대부분 논문이 발화 1~2개만 보고 감정을 판단, 실제 대화에서는 정확도가 크게 떨어짐".

- 이전 발화를 같이 보면 확실히 좋아지나 효과는 데이터마다 다르다.
- 대본형 긴 대화 IEMOCAP: 가중 F1 **+12.5점**(56.1→68.6). 짧은 대화 MELD: **+2점**대 [[src-kim-2021-emoberta]].
- 보는 범위를 늘리면 **5~12턴에서 포화**, 그 이상은 오히려 하락. InstructERC: 창 1→5→12→20턴에서 IEMOCAP 56.12→68.65→71.39→71.01 [[src-lei-2024-instructerc]].
- 화자명을 빼면 IEMOCAP 68.57→64.02: 누가 말했는지 표시가 중요(약 4.5점).
- 미세조정 없는 LLM에 맥락을 많이 넣으면 MELD macro F1 0.576(0턴)→약 0.5(10발화)로 하락. Claude 프롬프트 설계에 직접 관련.
- 학습과 서비스 때 **같은 길이의 맥락**을 줘야 한다(Ghosal 2021).
- 한국어 KEMDy20: 직전 2발화 맥락 단독은 텍스트 F1 38.43→39.13(+0.7), 음성까지 함께 넣어야 44.16 [[src-jeong-2023-kemdy20-context]].
- 주의: IEMOCAP은 같은 감정이 이어지는 "라벨 복사" 경향이 있어 맥락 이득이 과장될 수 있다. 한벗은 감정 전환이 더 잦을 수 있다.

## "턴" 정의 (K 노트)
턴 = 한 사람이 말하기 시작해 상대에게 넘기기 전까지의 말 한 덩어리. 논문의 w턴은 양쪽 화자를 합쳐 센다. 따라서 "6~10턴" ≈ 3~5왕복. 상세는 [[topic-ser-model-comparison-whisper-spectrogram]].

## B. 개인화 기준선
- 사람마다 평소 목소리가 달라 그 사람 기준선으로 보정하면 좋아진다.
- 비지도 개인화(시험 화자 음성 200초로 비슷한 학습 화자 5명 선택): 정서가 CCC 0.3083→0.3500(**상대 +13.5%**), 각성 +1.84%, 지배 +1.20% [[src-sridhar-2022-unsupervised-personalization]]. 긍정/부정 판단에서 이득이 가장 크다.
- 사용자 예시 1→3→7개로 화자별 UA **69.8→73.2→75.7%** (원문 표기 0.698→0.732→0.757, 일본어 800명 7감정, NTT Ihori 외 2025 arXiv). 3개 이후 증가폭 작음. 0-shot은 기본 음성 LM 0.675보다 약간 낮음(0.664).
- 중립 발화만 등록(0.595) < 전 감정 등록(0.626): 중립 기준선만으로는 한계.
- Rahman & Busso 2012의 정규화 없음 69.8% → IFN 71.8% → 완벽 정규화 72.8%는 검색 요약에서 본 것이라 과제·지표 확인 필요(예시 1→3→7개 수치와 숫자가 비슷하나 별개 실험).
- Triantafyllopoulos 2024: 감정별 등록 발화 1개씩. MSP-Podcast 전체 UAR은 사실상 변화 없으나 화자별 평균 UAR .438→.479, FAU-AIBO 최저 화자 .053→.189. 평균 지표만 보면 개인화 효과를 놓친다.

## 실험 설계 제안 (미확정)
- 직전 6~10턴을 화자 표시와 함께 전달. W3에 **0/2/6/10턴** 비교 실험(지연·비용 포함).
- 사용자별 기준선·예시를 pgvector/Postgres에 저장: 첫 1~2주를 "기준선 수집 기간"으로 두고, 원점수 대신 기준선 대비 편차(z-score)로 해석.
- "앞 2~3턴만"은 감정 판단엔 최소선, 장기 기억 대체로는 불가. 기억 3층 구조는 [[topic-meeting-followup-ser-2026-11]] 안건 M 참조.

## 확인 필요
- 한국어 노인 대화에서 최적 창 크기, 기억 에이전트 유무에 따른 만족도 차이: 직접 측정 연구 못 찾음.
- EmoBERTa는 동료 심사 학회 게재 확인 못 함.
- 어르신·한국어 개인화 감정 인식 연구는 못 찾음.

