---
title: "topic-ser-label-scheme-and-fusion"
tags: ["ser", "label-scheme", "fusion", "weights", "valence-arousal", "crisis", "unconfirmed", "topic", "scopus-2026-11"]
created: 2026-11-07T11:32:27.096Z
updated: 2026-11-07T18:46:18.398Z
sources: ["research_notes/회의 후속 조사/EF_텍스트단위_감정분류.md", "research_notes/회의 후속 조사/GH_라벨기준_복합감정.md", "research_notes/회의 후속 조사/J_음성텍스트_가중치.md", "research_notes/회의 후속 조사/J2_가중치_근거보강.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-app-impl-ser-cues.md", "claim-app-3-emotion-cue-confirmation-rules.md", "src-demszky-2020-goemotions.md", "topic-data-korean-emotion-speech-datasets.md", "src-busso-2025-msp-podcast-labels.md", "src-wang-2023-speech-emotion-diarization.md", "src-atmaja-2021-multimodal-dimensional.md", "src-harm-2024-taltech-odyssey.md", "src-macary-2021-continuous-ser.md", "src-wagner-2023-transformer-era.md", "claim-app-5-crisis-ops-and-tel109.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "topic-ser-label-count-calibration-evidence.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-ser-label-scheme-and-fusion

# topic-ser-label-scheme-and-fusion

상위: [[topic-meeting-followup-ser-2026-11]] · [[topic-app-impl-ser-cues]] · [[claim-app-3-emotion-cue-confirmation-rules]]. **미확정(11/9 회의 결정 전).** 출처: EF, GH, J, J2 노트 (2026-11-06).

## E. 텍스트 단위: 어절 vs 형태소
- 어절(띄어쓰기) 단위만 확실히 나쁨(NSMC **69.0%**). 음절·형태소·서브워드는 82.7~84.3%로 1~2%p 안쪽, 형태소+BPE 84.3%.
- 한벗은 Claude가 전사문을 통째로 읽으므로 단위 선택은 사실상 불필요. 별도 분류기를 둔다면 KcELECTRA·KLUE-RoBERTa의 기본 토크나이저를 그대로 쓴다.
- STT WER 약 12%까지는 텍스트 손해 거의 없음, WER 약 40%면 텍스트 단독 약 10%p 하락 (Li 외 2024 SLT).
- LLM의 약점은 단위가 아니라 라벨 수: 2클래스 NSMC GPT-4 zero-shot F1 88.0 vs 미세조정 88.6, 28클래스 GoEmotions macro-F1 12.5%, 1,000문장 중 89개에 목록 밖 라벨을 지어냄 → 고정 목록 강제.

## F. 분류 체계 (27→6→4)
- 같은 BERT에서 묶을수록 상승: 27분류 F1 **.46** → Ekman 6 **.64** → 감성 4그룹 **.69** [[src-demszky-2020-goemotions]].
- AI Hub "7감정"은 최소 3버전(Ekman형 / 사랑스러움형 / 불안·당황·상처형) → 공통 매핑표 먼저: [[topic-data-korean-emotion-speech-datasets]].
- 제안(미확정): **평가용 4감정**(기쁨·슬픔·분노·중립) + **서비스용 5감정**(+불안) + **판정보류** + **긍정–부정·흥분 점수**.
- 외로움·우울(저각성 부정)과 편안함·안심(저각성 긍정)은 범주 체계에 없어 정서가·각성 축으로 잡는다(외롭다 정서가/각성 1.63/1.97, 우울하다 1.78/2.00).

## G. 라벨 기준: 누가 경계를 정했나
- 목소리에 "피치 몇 Hz 이상이면 화남" 같은 기준값은 어느 데이터셋에도 없음. 경계는 평가자 **다수결**.
- 사람 일치도: MSP-Podcast 주 감정 κ **0.411**, 정서가 α 0.508, 각성 α 0.441, 합의 없음 48,180발화(**약 18%**) [[src-busso-2025-msp-podcast-labels]]. MELD κ 0.43. CREMA-D 음성만 의도 일치 40.9%.
- 소수 의견을 버리면 데이터의 5.63~89.17%를 버림(Chou 2024) → 확률 분포(소프트 라벨)로 전달, 1·2위가 비슷하면 되물음.

## H. 복합·전이 감정
- Speech Emotion Diarization 최고(WavLM-large) 오류율 EDER **30.2%** (wav2vec2 36.2, HuBERT 34.5) [[src-wang-2023-speech-emotion-diarization]].
- 시간 연속 인식에서 음성은 각성 CCC 0.65~0.80, 정서가 0.38~0.46(RECOLA).
- 제안: 2~3초 구간별 추적, 긍정/부정은 텍스트가 결정.

## J·J2. 음성·텍스트 가중치
- 축별 우세: 정서가는 텍스트(CCC **.405** vs 음성 .204), 각성은 음성(**.543** vs 텍스트 .382) (IEMOCAP 화자 분리 LOSO) [[src-atmaja-2021-multimodal-dimensional]].
- 실제 대화에서 찾은 최적 비율: TalTech 2024(팟캐스트, 정서가 텍스트 0.55 / 각성 0 / 8감정 0.45) [[src-harm-2024-taltech-odyssey]], Macary 2021(콜센터 만족/불만, 텍스트 0.69:음성 0.31) [[src-macary-2021-continuous-ser]]. 둘 다 원문 표 확인.
- 텍스트 추가 시 각성은 오히려 하락(Wagner 2023: -.023~-.065 CCC) [[src-wagner-2023-transformer-era]].
- **시작 가중치(11/6 수정, 텍스트:음성, 미확정)**: 정서가 0.65:0.35 (이전 0.7/0.3), 각성 0.1:0.9 (이전 0.3/0.7), 5감정 0.55:0.45 (이전 0.6/0.4). 가중치를 직접 보고한 논문은 3편뿐이고 나머지는 단독 성능 차이에서의 추론.
- 더하는 단계: 온도 보정 → 확신도·STT 품질로 조정 → 사용자 기준선 대비 z-score.
- 재조정: KEMDy20·AI Hub로 화자 분리 5겹 실험(지표 UA + 부정 감정 재현율).

## 불일치 되물음 규칙과 위기
- 평균만 내면 "괜찮아"+슬픈 목소리가 중립 0.49로 사라진다 → 불일치를 따로 계산해 되물음 플래그로 전달. 빈도: **3턴에 1번, 10턴에 2번**까지(제안).
- 위기 위험도 = **max(텍스트, 음성)**: 음성은 위험도를 올리기만 하고 낮추지 않음. 관련 [[claim-app-5-crisis-ops-and-tel109]], [[claim-app-10-crisis-state-machine-and-evaluation]].
- 계산은 코드, Claude에는 요약 결과와 플래그만 전달.

## 확인 필요
- IEMOCAP κ(0.27 vs 0.48), KEMDy20 평가자 수, AI Hub 라벨링 가이드 원문
- 형태소 분석기별 감정 분류 비교 논문: 못 찾음

---

## Update (2026-11-07T18:46:18.398Z)

## 2026-11-08 Scopus 문헌 반영
- 결론: 6감정 이상으로 확대하지 않는다. 클래스 수를 늘려 얻는 이득의 증거를 검토한 초록에서 찾지 못했고, 분포·축·보류가 증거와 맞다 (제안, 최적성 미검증). 평가 4 + 정서가·각성 3단계 + 분포 + 보류 곡선, 제품 5 + 판정보류 + 2축(불안은 글 중심, 가라앉음은 축 정의). [[topic-ser-label-count-calibration-evidence]]
- 정정: GoEmotions 묶음의 분류 수는 중립 포함 28→7→4 (F1 .46→.64→.69 수치는 일치).
- 정서가=텍스트/각성=음성은 배타적 규칙이 아니라 설계 해석(Wagner는 음성만으로 정서가 CCC 0.638). 0.65:0.35 가중치는 논문값이 아닌 추론 시작값.
- 맥락 6~10턴은 실험 계획값. 외부 연구는 맥락의 이득만 보이며 창 길이 최적성은 미확정.

