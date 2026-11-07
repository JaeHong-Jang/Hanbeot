---
title: "topic-data-text-and-eval-datasets"
tags: ["dataset", "empathy", "memory", "crisis", "evaluation", "text", "topic"]
created: 2026-11-07T11:33:33.152Z
updated: 2026-11-07T11:33:33.152Z
sources: ["research_notes/데이터셋 조사/hanbeot_datasets.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-collab-datasets-and-irb.md", "topic-data-korean-emotion-speech-datasets.md", "src-arxiv-2025-longmemeval.md", "src-psycrisisbench-2025.md", "claim-app-9-ser-evaluation-and-calibration.md", "topic-bench-safety-eval.md", "topic-bench-memory.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-data-text-and-eval-datasets

# topic-data-text-and-eval-datasets

상위: [[topic-meeting-followup-ser-2026-11]] · [[topic-collab-datasets-and-irb]]. 출처: hanbeot_datasets.md PART 2·3·4. 음성 데이터는 [[topic-data-korean-emotion-speech-datasets]]. **11/9 회의 결정 전의 참고 정리.**

## PART 2. 한국어 텍스트
### 공감·상담 대화 (Claude 응답 설계)
- 공감형 대화 71305: 31,821세션, 47만 발화, 공감 전략 4종(격려·동조·위로·조언) → **응답 평가 루브릭**.
- 감성 대화 말뭉치 86: 27만 문장, 60개 세부 감정(대분류 6), 우울증 환자 WOZ 대화 포함.
- 웰니스 대화 스크립트 267: 의도 359개, 사용자 발화 5,232. 연속적 대화 감정 271: 1만 대화, 7감정.
- HF: empathetic_dialogues_ko 26,662(GPT 합성, Apache-2.0), mental_health_counseling_conversations_ko 3,512(번역투), Chatbot_data 11,876(MIT).
### 장기 기억·페르소나
- 한국어 멀티세션 71630(약 8만 대화, 세션 간 시간 간격) → 회상·요약 평가. 한국어 대화 요약 117(35만) → 기억 카드 요약 평가.
- Nemotron-Personas-Korea(100만, CC BY 4.0, 70~80대·1인가구) → 가상 어르신 시뮬레이터.
- KEEM(arXiv 2601.05548, 감정과 원인 반영 기억 갱신), CareCall_mem(arXiv 2210.08750): 공개 여부 확인 필요.
### 위기·안전
- 군 장병 자살 위험 게시물 2,791(연구윤리 동의 필요), 텍스트 윤리검증 558, KoSBi·SQuARe(MIT), KoBBQ(연령 포함, MIT), K-MHaS(CC BY-SA), KOLD·APEACH, KorNAT(NC).
- **공백**: 공개된 한국어 자살·우울 텍스트는 거의 없음, 노인 말벗 전용 텍스트도 없음 → 위기 평가셋은 감성 대화·웰니스 우울 발화 + C-SSRS 단계 체계 + 전문가 검수 합성 시나리오로 직접 구축.

## PART 3. 영어·다국어 참고
- 정서지원: ESConv 1,300대화(지원 전략 8종, NC), EmpatheticDialogues(NC), AnnoMI 133건, CounselChat 2,775(MIT), MentalChat16K(MIT), CACTUS(GPL), Psych8k(NC).
- SER 벤치마크: IEMOCAP, MSP-Podcast(400h+, 자연 발화), MELD, CREMA-D(ODbL, 상업 가능한 드문 SER), RAVDESS·ESD(NC), EmoBox(32개 데이터, 한국어 없음 → 한국어 검증셋 필요 근거).
- 기억: **LongMemEval**(500문항, MIT; 정보추출·멀티세션 추론·지식 갱신·시간 추론·답변 보류) → 한국어 각색 [[src-arxiv-2025-longmemeval]]. LoCoMo(NC), MSC.
- 위기: Reddit C-SSRS(500명, 5단계, CC BY) → 위기 단계 체계, PsyCrisis-Bench(평가 5차원: 공감·정서조절·탐색·위험평가·외부연계, NC) → 루브릭 차용 [[src-psycrisisbench-2025]]. DAIC-WOZ·Androids는 학술 전용. CANDOR는 턴테이킹 참고.

## PART 4. 적용 순서
1. 바로(오픈): smart-turn kor 서브셋 정확도 측정, Nemotron 가상 사용자, LongMemEval 한국어 50문항, ESConv·PsyCrisis 루브릭.
2. AI Hub 신청 후: 노인 자유대화 RTZR CER, 감정 분류 대화 음성으로 emotion2vec+ 한국어 성능, 공감형 전략 라벨, 멀티세션 회상.
3. 확장: SER 파인튜닝(로컬), 자체 위기 평가셋(전문가 검수), 베타 통화 데이터(동의 기반).
- 바로 할 일 3개: smart-turn `language == kor` 측정, 감정 라벨 매핑표(emotion2vec+ 9 ↔ AI Hub 7 ↔ ETRI 7), AI Hub 신청(내국인 명의).
- 하지 말 것: AI Hub 무단 미러 사용, AI Hub 원문을 Claude API 프롬프트에 넣기(NIA 확인 전). 안심존 데이터는 진단 기능 학습에 쓰지 않음.
- 관련 결정: [[claim-app-9-ser-evaluation-and-calibration]], [[topic-bench-safety-eval]], [[topic-bench-memory]].

