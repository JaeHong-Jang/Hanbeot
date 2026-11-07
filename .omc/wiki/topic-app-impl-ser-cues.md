---
title: "topic-app-impl-ser-cues"
tags: ["app-design", "implementation", "ser", "emotion2vec", "prosody", "opensmile", "topic", "paper-evidence", "meeting-followup", "scopus-2026-11", "preprocessing"]
created: 2026-10-25T14:46:11.638Z
updated: 2026-11-07T18:46:13.055Z
sources: ["reports/한벗 앱 설계서.md#5-4-5"]
links: ["overview-app-design.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-tech-1-ser-model.md", "claim-bench-8-emotion-cue-as-question.md", "src-emotion2vec-2024-github.md", "src-pipecat-2026-docs-custom-frame-processor.md", "src-sogang-2024-aihub-hubert.md", "src-funasr-2026-model-license.md", "src-audeering-2026-opensmile-python.md", "src-audeering-2026-opensmile-usage.md", "src-ma-2024-emotion2vec.md", "src-sereval-2024-whisper-crosslingual.md", "src-ma-2024-emobox.md", "src-chou-2023-ser-calibration.md", "src-romana-2025-switchboard-affect.md", "src-ren-2024-emo-codec.md", "claim-app-9-ser-evaluation-and-calibration.md", "topic-app-paper-evidence.md", "topic-meeting-followup-ser-2026-11.md", "topic-ser-label-scheme-and-fusion.md", "topic-ser-context-personalization.md", "topic-ser-model-comparison-whisper-spectrogram.md", "topic-ser-preprocessing-pipeline-evidence.md", "src-tzeng-2025-noise-robust-sse.md", "src-leem-2024-selective-enhancement.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-impl-ser-cues

상위: [[overview-app-design]] · 설계서 5절 ④⑤. 결정: [[claim-app-3-emotion-cue-confirmation-rules]]. 근거: [[claim-tech-1-ser-model]], [[claim-bench-8-emotion-cue-as-question]]

## ④ SER (emotion2vec+ turn-end → 확인 질문)
- 선택: emotion2vec+ base(약 90M, 16kHz, utterance 단위, 9라벨) [[src-emotion2vec-2024-github]]. 2순위 SenseVoice-Small.
- 단계: `pip install -U funasr modelscope` → 발화 시작~종료 오디오를 버퍼링하는 FrameProcessor(`process_frame`/`push_frame`) [[src-pipecat-2026-docs-custom-frame-processor]]. 민감정보 동의가 없으면 프로세서를 넣지 않는다 → 턴 종료 시 16kHz 임시 WAV로 `generate`(배열 입력 지원은 공식 예제로 미확인) → 결과에 `utterance_id`, `created_at` 부여, **해당 턴 Claude 호출 시작까지 안 오면 폐기하고 다음 턴에 쓰지 않음** → 임시 WAV 즉시 삭제 → 약관 확인 후 평가.
- 코드 골격 요지: `AutoModel(model="iic/emotion2vec_plus_base").generate(wav, granularity="utterance", extract_embedding=False)`.

### 라벨 범주 매핑 (설계; 평가된 범주만 제품에 사용)
| emotion2vec+ 라벨 | 4-class 벤치마크 | 제품 확인 질문 범주 | 문구 예 |
|---|---|---|---|
| angry | 분노 | 답답함 | "좀 답답하게 들렸는데, 맞아?" |
| sad | 슬픔 | 가라앉음·지침 | "목소리가 좀 가라앉은 것 같은데, 맞아?" |
| happy | 기쁨 | 밝음 | "목소리가 밝게 들렸는데, 맞아?" |
| neutral | 중립 | 질문 안 함 | - |
| fearful, disgusted, surprised, other, unknown | 벤치마크 제외 | 질문 안 함(미평가 범주) | - |
- 평가: 9라벨 점수 중 4개만 남겨 재정규화 후 argmax, 화자 독립 분할에서 UA·WA, 클래스별 재현율, 혼동 행렬 보고. 합격선 UA 0.70, 목표 0.80. 한국어 4-class 공개 수치는 AI Hub HuBERT 0.8139 1건(화자 독립 여부 미확인) [[src-sogang-2024-aihub-hubert]]. 다른 데이터셋 정확도는 한국 대학생 고민 발화 성능을 보증하지 않는다.

### 확인 질문 규칙 (수치 전부 임시 운영 기준, W6 조정)
| 규칙 | 내용 |
|---|---|
| 입력 | `[음성 단서 utt=123] 범주=가라앉음, 말 속도=평소보다 느림, 멈춤=길어짐` (점수는 Claude에 안 넘김) |
| 발화 조건 | 점수 0.6 이상 AND 직전 5턴에 확인 질문 없음 AND 민감정보 동의 ON AND 안전 모드 아님 |
| 판단 보류 | 발화 2초 미만, STT 빈 문자열/1어절, 세션 초반(3턴 또는 30초 미만)에는 상대 지표(속도·멈춤) 미사용 |
| 점수 해석 | "맞을 확률"로 보지 않음(보정 근거 없음), 순위용 |
| 문장 틀 | 한 문장, 응답 끝, 단정·라벨 직역·점수 언급·진단 용어 금지 |
| 응답 처리 | 맞아 → `confirmed`(저장은 아직 아님) / 아니야 → 단서 폐기 + 세션 내 같은 범주 질문 금지 / 무응답 → 폐기 |

### 확인 질문 지표 (수용성 지표, 정확도 아님)
질문 발생률, 확인 수용률("맞아" ÷ 질문; Wiki "확인 일치율 70%"를 재정의, 목표 70%는 수용성 목표), 거절률, 무응답률, 침해감(세션 후 5점 문항), SER 적시 도착률(폐기율의 역). "맞아"에는 동조·모호 수용·대화 지속 응답이 섞일 수 있다.
- 함정: 가중치 model-license는 상업 조항이 불명이고 출처·저자·모델명 보존 의무 [[src-funasr-2026-model-license]]. 공식 지연 수치가 없어 W3에 실측.

## ⑤ 운율 지표 (eGeMAPS → 대안)
- 문제: openSMILE 오픈소스판은 사적·연구·교육만 무료, 상업 제품 사용 불가 [[src-audeering-2026-opensmile-python]].
- 결정(설계): 서비스 코드에 넣지 않는다. 속도·멈춤은 VAD·STT 타임스탬프로 직접 계산(P0), 음높이·크기는 P1에서 다른 라이브러리(동등성은 C). openSMILE은 W3 교육 목적 비교 실험에만 쓰고 배포 코드와 분리.

| 지표 | 계산 | 단서 조건(임시) |
|---|---|---|
| 말 속도 | 전사 음절 수 ÷ VAD 발화 시간 | 세션 기준선 대비 -25% 이하 |
| 멈춤 | 0.7s 이상 무음 구간 개수·총합 | 기준선 대비 +50% 이상 |
| 기준선 | 처음 3턴(또는 30초) 평균, 이후 이동 평균 | 기준선 전 판단 보류 |
| 음높이·크기(P1) | 턴 평균 F0·RMS | 개인 기준선 대비 편차 |
- 비교 실험용 골격: `opensmile.Smile(feature_set=eGeMAPSv02, feature_level=LowLevelDescriptors)` [[src-audeering-2026-opensmile-usage]]. 함정: eGeMAPSv02 LLD 25개에는 speech rate·pause가 직접 없다. 상대 지표만 쓰면 세션 내내 상태가 일정한 경우를 놓치며, 이 한계는 W6 보고에 적는다.

---

## Update (2026-10-26T05:47:05.493Z)

## 2026-10-26 논문 보강
- 한국어 SER 성능은 문헌으로 보장되지 않는다: emotion2vec [P20 [[src-ma-2024-emotion2vec]]], SER Evals [P21 [[src-sereval-2024-whisper-crosslingual]]], EmoBox [P22 [[src-ma-2024-emobox]]] 모두 한국어 미평가. 교차코퍼스에서 macro-F1 약 0.67~0.78 → 0.13~0.20 (B, emotion2vec+ 미포함, 일반화 실패 사례).
- 0.8139 [P26 [[src-sogang-2024-aihub-hubert]]]는 정확도·분할 미확인이라 UA 0.70과 비교 금지.
- 0.6 임계값은 보정 검증 전 확률 해석 금지, 임계 선택 세트와 최종 세트 분리 [P39 [[src-chou-2023-ser-calibration]]].
- 분노("답답함") 질문 보류: 영어 전화 대화에서 Emotion2Vec 분노 F1 0.000 [P31 [[src-romana-2025-switchboard-affect]]], 연기→자연 발화 저하 [P30].
- W3 평가에 Opus 전후 [P34 [[src-ren-2024-emo-codec]]], 성별 [P40], 길이 구간 [P33], 모델 카드 [P44] 추가. 상세: [[claim-app-9-ser-evaluation-and-calibration]], 전체: [[topic-app-paper-evidence]].

---

## Update (2026-11-07T11:39:47.697Z)

## 2026-11-07 회의 후속 조사 반영 (미확정)
- 11/9 회의 결정 전 제안이며 위 구현 설계는 그대로다. 종합: [[topic-meeting-followup-ser-2026-11]].
- 감정 체계 변경 제안: 4감정(평가) / 5감정(서비스, +불안) + 판정보류 + 긍정–부정·흥분 점수. 현재 표의 "제외 범주"(fearful 등)와의 매핑 재검토 [[topic-ser-label-scheme-and-fusion]].
- 출력은 확률 분포 전달, 불일치 되물음(3턴 1번·10턴 2번), 위기 위험도 = max(텍스트, 음성).
- 맥락 턴: 직전 6~10턴 + 화자 표시, 0/2/6/10턴 비교 [[topic-ser-context-personalization]].
- 개인화 기준선: 사용자별 기준선·예시를 pgvector에 저장, 기준선 대비 편차 해석.
- W3 비교: emotion2vec+ vs Whisper 고정 vs Whisper+LoRA [[topic-ser-model-comparison-whisper-spectrogram]].
- 주의: 외로움·우울은 각성이 낮아 SER이 중립으로 놓치기 쉬움, 편안함은 범주에 없음.

---

## Update (2026-11-07T18:46:13.055Z)

## 2026-11-08 Scopus 문헌 반영
- 전처리 13단계(입력 16 kHz mono, VAD, 길이, 무음·비언어, 라우드니스, 소음, 잔향, 화자 기준선, 특징, 헤드, 텍스트 융합, 보정, 증강) 요약표: [[topic-ser-preprocessing-pipeline-evidence]]. 모든 파라미터는 가설, 확정은 ablation 후.
- **전처리는 감정을 분류하지 않는다.** 분류는 인코더+헤드의 일이다.
- 소음 처리는 입력 일괄 SE보다 소음 혼합 증강/공동 학습이 후보([[src-tzeng-2025-noise-robust-sse]], [[src-leem-2024-selective-enhancement]]). 한국어·앱 전이는 미확인.
- 미확정 항목: 샘플링·코덱, VAD 임계값, 최대 길이, 비언어 제거, 라우드니스, 기준선 N, 층 선택.

