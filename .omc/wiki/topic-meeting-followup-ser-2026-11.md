---
title: "topic-meeting-followup-ser-2026-11"
tags: ["meeting-followup", "ser", "2026-11", "unconfirmed", "memory", "topic", "meeting", "followup"]
created: 2026-11-07T11:31:15.841Z
updated: 2026-11-07T17:38:32.972Z
sources: ["research_notes/회의 후속 조사/00_요약.md"]
links: ["overview-app-design.md", "overview-technology.md", "topic-ser-context-personalization.md", "topic-ser-model-comparison-whisper-spectrogram.md", "topic-ser-label-scheme-and-fusion.md", "topic-data-korean-emotion-speech-datasets.md", "topic-ser-papers-synthesis.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-tech-1-ser-model.md", "src-kim-2024-dementia-ser.md", "src-packer-2023-memgpt.md", "src-bae-2022-carecall-memory-update.md", "claim-app-4-memory-four-states.md", "topic-app-impl-memory.md", "claim-tech-2-memory-architecture.md", "overview-hanbeot-project.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-meeting-followup-ser-2026-11

# topic-meeting-followup-ser-2026-11

상위: [[overview-app-design]] · [[overview-technology]]. 세부: [[topic-ser-context-personalization]], [[topic-ser-model-comparison-whisper-spectrogram]], [[topic-ser-label-scheme-and-fusion]], [[topic-data-korean-emotion-speech-datasets]], [[topic-ser-papers-synthesis]]

> **전체 미확정(11/9 회의 결정 전).** 이 페이지의 "한벗에 할 일"은 팀원 노트의 제안이며 확정된 설계가 아니다. 기존 결정은 [[claim-app-3-emotion-cue-confirmation-rules]], [[claim-tech-1-ser-model]] 등을 따른다. 출처: 회의 후속 조사 A~L (2026-11-06~07).

## 한눈에 보는 결론 (미확정)
- 목소리만으로 70~80%는 근거가 없다. 한벗과 가장 비슷한 조건(국내 독거노인 133명, 평균 80.6세, 반려 로봇과 실제 대화)에서 음성만 6감정 51.4%, 3감정 64.7%. 텍스트로 먼저 나누고 목소리로 세부 감정을 고르는 2단계가 69.3%로 최고. 사람 라벨 일치도 κ 0.70 [[src-kim-2024-dementia-ser]].
- 제안 목표: "3감정 + 텍스트 결합으로 약 70%" **(미확정)**.

## 결론 표: 질문 → 결과 → 한벗에 할 일 (모두 미확정)
| # | 질문 | 결과 | 한벗에 할 일 |
|---|---|---|---|
| A | 맥락화한 연구 | IEMOCAP +12.5점, MELD +2점. 5~12턴 포화, 이상은 하락 | 직전 6~10턴을 화자 표시와 함께 전달. 0/2/6/10턴 비교 실험 |
| B | 개인화 | 기준선 보정 시 긍정/부정 판단 상대 +13.5%. 예시 1→3→7개로 UA 69.8→73.2→75.7% | 사용자별 기준선·예시를 pgvector에 저장 |
| C | Whisper | 영어 IEMOCAP UA 73.5(Whisper) vs 69.5(WavLM). 고정 43~64%, LoRA 77%. 한국어 감정 논문 없음. 75세+ 한국어 CER 5.5% | emotion2vec+ 유지, 한국어로 Whisper+LoRA 비교 1회 |
| D | 스펙트로그램 | log-mel 35% vs WavLM 71%. 국내 83~89%는 연기·화자 혼합 평가 | 메인 부적합, 울음·흥분 보조 감지기로만 |
| E | 단어 vs 어절 | 어절 최하(NSMC 69.0%), 형태소+BPE 84.3%. WER 12%면 영향 거의 없음, 40%면 약 10%p 하락 | 전사문 그대로 Claude에. 필요 시 KcELECTRA |
| F | 감정 분류 체계 | 27분류 .46 → 6분류 .64 → 4그룹 .69. AI Hub 7감정은 최소 3버전 | 평가용 4감정 + 서비스용 5감정(+불안) + 판정보류 + 긍정–부정·흥분 점수 |
| G | 감정 기준값 | 목소리 수치 경계 없음, 사람 다수결. MSP-Podcast κ 0.41, 약 18% 합의 실패 | 확률 분포로 전달, 1·2위 비슷하면 되물음 |
| H | 복합 감정 | SED 최고 모델 오류 30.2%. 음성은 흥분도 CCC .65, 긍정/부정 .38 | 2~3초 구간별 추적, 긍정/부정은 텍스트가 결정 |
| I | AI Hub 용량 | 핵심 6종 약 3.05TB, 71703만 2.44TB | 1차는 약 110GB만 |
| J | 음성·텍스트 가중치 | 정서가 텍스트 우세, 각성 음성 우세 | 시작 가중치 정서가 0.65:0.35, 각성 0.1:0.9, 5감정 0.55:0.45 (11/6 수정) |
| K | 감정 인식 원리·턴 | emotion2vec+ 영어 262h → 의사 라벨 42,526h, 9감정 softmax, 한국어 기록 없음 | W3에서 emotion2vec+ vs Whisper 고정 vs Whisper+LoRA 비교 |
| L | 한국어 감정 음성 추가 | 신규 후보 24개, 상용 한국어 감정 음성은 거의 없음 | 1순위 71517·71558, 119 신고 71768, 딥리, 485 |

세부: A·B [[topic-ser-context-personalization]] · C·D·K [[topic-ser-model-comparison-whisper-spectrogram]] · E~H·J [[topic-ser-label-scheme-and-fusion]] · I·L [[topic-data-korean-emotion-speech-datasets]].

## 안건 M: 대화 기억 3층 구조 (미확정)
1. 직전 6~10턴만 Claude에 전달(화자 표시 + 턴별 SER 추정).
2. 원문 전체는 DB에만 저장, LLM에 직접 넣지 않음.
3. 통화 후 기억 에이전트가 요약하고 유지/교체/추가/삭제를 결정(실시간 경로 밖, 비동기).
근거: MemGPT 회상 32.1% → 92.5% [[src-packer-2023-memgpt]], LoCoMo 긴 문맥 F1 37.8 vs 사람 87.9, CareCall 누적만 하면 5세션째 기억도 -0.67 [[src-bae-2022-carecall-memory-update]]. 관련: [[claim-app-4-memory-four-states]], [[topic-app-impl-memory]], [[claim-tech-2-memory-architecture]].

## 월요일(11/9) 결정 안건 (미확정)
- 감정 목표를 "3감정 + 텍스트 결합 약 70%"로 (지표: UA + 부정 감정 재현율)
- 평가용 4감정 / 서비스용 5감정 체계
- 기억 3층 구조와 기억 에이전트
- W3 실험: 맥락 0/2/6/10턴, emotion2vec+ vs Whisper+LoRA, 구간별 감정 추적

## 주의
- 외로움·우울은 각성이 가장 낮아(외롭다 A 1.97) SER이 중립으로 놓치기 쉽다.
- 편안함·안심은 범주 체계에 없어 긍정–부정 점수로 봐야 한다.
- LLM 감정 분류는 라벨을 지어낼 수 있다(28분류 GPT-4 F1 0.125) → 고정 목록 강제.
- 71703은 감정 종류 라벨 없음(유무 1/0만), 우울·불안 점수 포함 → 민감정보. 분할 zip이라 Linux/WSL 필요.
- 평균만 내면 "괜찮아"+슬픈 목소리가 중립 0.49로 사라진다 → 불일치를 따로 검사해 되물음(3턴에 1번, 10턴에 2번까지). 위기 위험도 = max(텍스트, 음성).
- 가중치는 논문에서 추론한 시작값이며 KEMDy20·AI Hub 화자 분리 5겹 실험으로 조정.
- C 수정(11/7): Whisper 고정 범위 43~58% → 43~64%. "EmoBox 73.5%는 층 가중 평균 덕분" 추정 철회(원문상 마지막 층만 사용).

## 확인 필요
- IEMOCAP κ(0.27 vs 0.48), KEMDy20 평가자 수, AI Hub 라벨링 가이드
- 어르신·한국어 개인화 감정 인식, 한국어 감정 전환 데이터: 못 찾음
- Whisper 한국어 노인 CER 기준선이 추가 학습 전인지
- 형태소 분석기별 감정 분류 비교 논문: 못 찾음
- 노트의 비교 조건(독거노인 133명, 평균 80.6세 등)이 고령층을 가리키나 현재 Wiki 1차 타깃은 대학생: 팀 확인 필요([[overview-hanbeot-project]])

---

## Update (2026-11-07T17:38:32.972Z)

## 정정 (2026-11-08): 고령자 제외, 노트 글자 재배정

- 팀 커밋 607f0f5(2026-11-07)로 회의 후속 조사 노트에서 **고령자 전제를 제거**했다. 1차 타깃은 대학생 그대로다([[overview-hanbeot-project]] 결정 절, ADR-0005). 이 페이지에서 "한벗과 거의 같은 조건(독거노인 133명)"으로 읽히는 문장은 "한국어 실제 대화 SER 참고 수치"로 읽어야 한다. 노인 STT·고령자 구술 71703·중노년 방언 71517/71558은 한벗 범위 밖이다.
- 노트 파일 이름과 주제 글자가 재배정됐다(원격 커밋 01ab0ec~ae4569b): 옛 K→A(감정 인식 원리·턴), GH→BC(라벨 기준·복합 감정), CD→DE(Whisper·스펙트로그램), EF→FG(텍스트 단위), J→H(가중치), J2→H2(가중치 근거 보강), AB→IJ(맥락·개인화), I→K(AI Hub 용량), L은 그대로. 이 페이지의 A~L 표는 **옛 글자** 기준이다. 상세는 `research_notes/회의 후속 조사/00_요약.md`(새 글자) 참조.
- 평가자 일치도 수치는 원문 값 κ 0.27~0.48로 통일됐다(커밋 ae4569b). κ 0.70 조건 정정도 반영됐다(7b4d9ba).

