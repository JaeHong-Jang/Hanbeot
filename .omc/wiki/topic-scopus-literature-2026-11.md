---
title: "topic-scopus-literature-2026-11"
tags: ["scopus-2026-11", "literature-hub", "ser", "hub", "abstract-level", "verified", "scopus", "literature", "github"]
created: 2026-11-07T18:45:37.985Z
updated: 2026-11-07T20:09:13.921Z
sources: ["research_notes/Scopus 조사/00_digest.md", "research_notes/Scopus 조사/01_preprocessing_models_crosscorpus.md", "research_notes/Scopus 조사/02_labels_calibration_fusion_unist.md", "tools/scopus_search.py"]
links: ["overview-technology.md", "overview-researcher-collaboration.md", "topic-app-paper-evidence.md", "topic-ser-preprocessing-pipeline-evidence.md", "topic-ser-label-count-calibration-evidence.md", "topic-collab-unist-affective-labs.md", "src-noh-2021-mpgln-multidomain.md", "src-hyeon-2025-segmental-pooling.md", "src-ryu-2025-pitch-contour.md", "src-tzeng-2025-noise-robust-sse.md", "src-leem-2024-selective-enhancement.md", "src-grageda-2025-hri-distant.md", "src-shi-2026-asr-repr-noisy.md", "src-goron-2024-whisper-dg.md", "src-feng-2023-peft-ser.md", "src-sampath-2025-efficient-ft.md", "src-chen-2023-wav2vec-tapt.md", "src-gat-2022-speaker-norm.md", "src-milling-2022-vad-ser.md", "src-atmaja-2022-augmentation.md", "src-cao-2025-kemdy-w2v-kobert.md", "src-cao-2025-kemdy-prosody-gru.md", "src-jun-2024-realtime-kemdy19.md", "src-chatzichristodoulou-2025-medusa.md", "src-prabhu-2024-label-uncertainty.md", "src-yoon-2025-maskser.md", "src-sridhar-2020-uncertainty-reject.md", "src-sridhar-2021-softlabel-reject.md", "src-kumawat-2025-annotator-softlabel.md", "src-kumawat-2025-mixed-emotion.md", "src-atmaja-2022-class-count-failure.md", "src-chien-2025-conversation-vs-monologue.md", "src-alhussein-2025-ser-conversation-metaanalysis.md", "src-yi-2024-kohmt-korean-fusion.md", "src-yoon-2018-audio-text-dre.md", "src-briganti-2025-depression-voice-review.md", "src-kim-2023-korean-depression-speech.md", "src-yamada-2021-loneliness-speech.md", "src-hu-2023-hue-acoustic-emotion-ca.md", "src-cho-2022-alexa-backchannel.md", "src-varadhan-2025-tts-human-fooling.md", "src-ruensuk-2020-smartphone-affect.md", "src-lee-2020-driver-anxiety-biosignal.md", "src-ben-gurion-2025-depression-selfreport.md", "src-wagner-2023-transformer-era.md", "src-ma-2024-emotion2vec.md", "src-ibrahim-2024-ser-generalization.md", "src-chou-2023-ser-calibration.md", "src-isca-2025-msp-podcast-challenge.md", "lab-unist-oakley-hong-hci.md", "topic-tts-humanlike-evidence-2026-11.md", "topic-dialogue-dynamics-evidence-2026-11.md", "claim-app-12-interruption-backchannel-filler-rules.md", "claim-app-13-tts-blind-test-protocol-w4.md", "topic-ser-sota-benchmarks-2026-11.md", "topic-ser-performance-levers-2026-11.md", "topic-korean-ser-landscape-2026-11.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md", "claim-research-2-paper-b-personalization-synthetic.md", "topic-collab-unist-speech-labs.md", "topic-dev-repos-ser-recipes-2026-11.md", "topic-dev-repos-voice-conversation-2026-11.md", "claim-research-3-reproduction-experiments-r0-r8.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-scopus-literature-2026-11

상위: [[overview-technology]] · [[overview-researcher-collaboration]] · [[topic-app-paper-evidence]]. 허브 페이지: Scopus 문헌 수집(2026-11-08)과 분석 결과의 입구.

## 수집 범위
- Scopus Search API로 쿼리 15개, 수집 2,140건, 중복 제거 1,818건. API는 메타데이터와 초록만 준다. 원자료(초록 포함)는 `research_notes/Scopus 조사/raw/*.jsonl`이며 git에는 올리지 않는다. 도구 `tools/scopus_search.py`, 쿼리 정의 `queries.yaml`, 요약 `00_digest.md`.
- **정직한 한계: 초록 수준 읽기이며 원문(본문·부록)은 읽지 않았다.** 노트가 말하는 "약 257편/약 430건 훑음, 초록 전문 약 45/75건"은 개별 열람 기록이 없어 검증에서 확인 불가(C)로 판정됐다. 핵심 의사결정에 쓸 논문은 본문 확인이 필요하다. "연구가 없다"는 모두 "이번 선정 문헌에서 확인 못 함"으로 읽는다.

## 쿼리별 건수와 상위 게재지 (00_digest)
| 쿼리 | 건수 | 상위 게재지(건수) |
|---|---|---|
| ser_preprocessing_features | 200 | IEEE Access(24), ICASSP(12), IEEE/ACM TASLP(11), Interspeech(10), Applied Acoustics(10) |
| ser_ssl_models | 200 | Interspeech(36), ICASSP(36), IEEE Access(9), TASLP(6), TAFFC(5) |
| ser_cross_corpus | 150 | ICASSP(22), Interspeech(20), TAFFC(15), IEEE Access(7), TASLP(5) |
| ser_noise_codec_robustness | 150 | ICASSP(15), Interspeech(10), IEEE Access(9), Sensors(9), Int. J. Speech Technology(5) |
| ser_korean | 26 | Applied Sciences(4), Sensors(3), IEEE Access(2), AI3E 2025(2) |
| korea_emotion_speech_top | 200 | IEEE Access(36), Sensors(23), Applied Sciences(12), Sensors Switzerland(11), ESWA(7) |
| ser_label_taxonomy | 150 | Interspeech(16), ICASSP(14), Speech Communication(10), IEEE Access(6), TASLP(5) |
| ser_calibration_uncertainty | 93 | Interspeech(10), ICASSP(9), TAFFC(5), LNCS(3) |
| ser_naturalistic_spontaneous | 150 | Interspeech(32), ICASSP(22), TAFFC(16), IEEE Access(5), Speech Communication(3) |
| multimodal_text_audio_fusion | 200 | Interspeech(15), IEEE Access(11), ICASSP(10), Information Fusion(6), ESWA(6) |
| erc_conversation_context | 150 | TAC(12), Knowledge-Based Systems(11), ACL(8), Information Fusion(7), ICASSP(6) |
| ser_low_arousal_depression_loneliness | 150 | Interspeech(10), Biomedical Signal Processing and Control(5), ICASSP(5), J. Affective Disorders(5), TAFFC(5) |
| emotional_tts_expressive | 150 | Interspeech(26), ICASSP(11), ACL(4), TASLP(3) |
| empathetic_voice_agent | 150 | CHI(10), LNCS(8), JMIR(5), JMIR Formative Research(4), Interspeech(3) |
| unist_emotion | 21 | RO-MAN(3), J. Physiological Anthropology(2), Nature Communications(1), Processes(1), IJHCI(1) |
합계 2,140건(질의 간 중복 포함), 고유 1,818건. 노트 01의 6개 쿼리 합 926건은 EID 기준 고유 797건. 노트 02의 9개 쿼리 합 1,214건.

## 분석 노트와 검증 통계
| 노트 | 내용 | 검증 (2026-11-08) | 페이지 |
|---|---|---|---|
| 01 전처리·모델·교차 코퍼스 | 6개 쿼리 926건 | A 69 / B 36 / C 23 | [[topic-ser-preprocessing-pipeline-evidence]] |
| 02 라벨·보정·결합·저각성·TTS·UNIST | 9개 쿼리 1,214건 | A 64 / B 8 / C 35 | [[topic-ser-label-count-calibration-evidence]], [[topic-collab-unist-affective-labs]] |
등급은 행이 아니라 주장 단위(A 원출처 일치, B 2차/조건부, C 확인 근거 부족). **C의 상당수는 "논문 수치 오류"가 아니라 "설계 제안·부재 주장·일반화"**이며 제품 설계 값(5감정, 25% 보류, 3명, 1~1.5초 등)은 논문이 검증한 최적값이 아니다. "일치"는 저자가 그 결과를 보고했다는 뜻이지 독립 재현이 아니다.

## 검증으로 정정된 주요 사항
Jun 2024는 AES Convention Express Paper. Nam H.J. 2024는 POSTECH 연구이나 clean 학습 데이터 IEMOCAP(한국어 소음 연구 아님). Lee 2025 "34.19%"는 %p(56.96→91.15). Chen 2023 +7.4는 최상 시스템 대 이전 SOTA. Prabhu 2024는 프랑스어 RECOLA+영어 MSP-Conversation. GoEmotions는 28→7→4(중립 포함). HiGRU DOI 10.18653/v1/N19-1037. DialogueLLM 평가셋 MELD·IEMOCAP·EmoryNLP. 저각성 연구는 임상군/고령자/환자 내/외래 집단 등으로 일반 청년 오탐률은 미지. Scopus TTS 파일에는 지연 보고(50ms 미만, 500ms 미만)가 있음. "첫 소리 1~1.5초"는 제품 목표값. Chou 2023 본문 표 1에는 ECE 수치가 있음(0.335→0.276, 0.311→0.263).

## 신규 src 페이지 (38건)
- 전처리·모델·교차 코퍼스: [[src-noh-2021-mpgln-multidomain]] · [[src-hyeon-2025-segmental-pooling]] · [[src-ryu-2025-pitch-contour]] · [[src-tzeng-2025-noise-robust-sse]] · [[src-leem-2024-selective-enhancement]] · [[src-grageda-2025-hri-distant]] · [[src-shi-2026-asr-repr-noisy]] · [[src-goron-2024-whisper-dg]] · [[src-feng-2023-peft-ser]] · [[src-sampath-2025-efficient-ft]] · [[src-chen-2023-wav2vec-tapt]] · [[src-gat-2022-speaker-norm]] · [[src-milling-2022-vad-ser]] · [[src-atmaja-2022-augmentation]] · [[src-cao-2025-kemdy-w2v-kobert]] · [[src-cao-2025-kemdy-prosody-gru]] · [[src-jun-2024-realtime-kemdy19]] · [[src-chatzichristodoulou-2025-medusa]] · [[src-prabhu-2024-label-uncertainty]] · [[src-yoon-2025-maskser]]
- 라벨·보정·결합·저각성·TTS·UNIST: [[src-sridhar-2020-uncertainty-reject]] · [[src-sridhar-2021-softlabel-reject]] · [[src-kumawat-2025-annotator-softlabel]] · [[src-kumawat-2025-mixed-emotion]] · [[src-atmaja-2022-class-count-failure]] · [[src-chien-2025-conversation-vs-monologue]] · [[src-alhussein-2025-ser-conversation-metaanalysis]] · [[src-yi-2024-kohmt-korean-fusion]] · [[src-yoon-2018-audio-text-dre]] · [[src-briganti-2025-depression-voice-review]] · [[src-kim-2023-korean-depression-speech]] · [[src-yamada-2021-loneliness-speech]] · [[src-hu-2023-hue-acoustic-emotion-ca]] · [[src-cho-2022-alexa-backchannel]] · [[src-varadhan-2025-tts-human-fooling]] · [[src-ruensuk-2020-smartphone-affect]] · [[src-lee-2020-driver-anxiety-biosignal]] · [[src-ben-gurion-2025-depression-selfreport]]
- 기존 재사용: [[src-wagner-2023-transformer-era]] · [[src-ma-2024-emotion2vec]] · [[src-ibrahim-2024-ser-generalization]] · [[src-chou-2023-ser-calibration]] · [[src-isca-2025-msp-podcast-challenge]] (Naini 2025 챌린지 총괄 포함, 신규 중복 생성 안 함)
- UNIST 연구실: [[lab-unist-oakley-hong-hci]]

---

## Update (2026-11-07T19:52:37.173Z)

## 2026-11-08 문헌 심층 반영
- 2차 수집: 쿼리 20개, 고유 2,934편. 그중 TTS 쿼리 8개 고유 1,288편(노트의 1,400은 중복 포함), 한국어 TTS 쿼리 200건.
- TTS 사람다움 근거: [[topic-tts-humanlike-evidence-2026-11]] (검증표 A95/B27/C56).
- 대화 역학 근거: [[topic-dialogue-dynamics-evidence-2026-11]] (검증표 A110/B21/C35).
- 결정: [[claim-app-12-interruption-backchannel-filler-rules]], [[claim-app-13-tts-blind-test-protocol-w4]].

---

## Update (2026-11-07T19:55:55.786Z)

## 2026-11-08 2차 수집 분석 페이지 (SER SOTA·논문 설계·UNIST)

노트 `research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md` (원문 16편) + 검증 `20261108_043406_verify_05_ser_sota_methods_for_paper.md` (A84/B27/C41).

- 벤치마크 기준선: [[topic-ser-sota-benchmarks-2026-11]] — IEMOCAP 화자 독립 최고 EmoDistill LOSO-10 UA 77.49, MSP-Podcast 8클래스 macro-F1 0.4316(MEDUSA), KEMDy19 LOSO-40 UA 66.26.
- 성능 레버 순위(C등급 판단): [[topic-ser-performance-levers-2026-11]]
- 한국어 SER 지형: [[topic-korean-ser-landscape-2026-11]]
- 논문 설계: [[claim-research-1-paper-a-korean-ser-selective-prediction]] (1순위), [[claim-research-2-paper-b-personalization-synthetic]] (2순위)
- UNIST 음성 연구실(이번 검색 기준 SER 논문 미발견; Oakley 현 소속 KAIST, Jang G.J.는 경북대): [[topic-collab-unist-speech-labs]], [[topic-collab-unist-affective-labs]]
- 개발자 저장소 심층 조사 노트: `research_notes/개발자 GitHub 심층 조사/developer_repos_deep_dive.md` (검증 진행 중, 적재 예정)
- 통합 계획: `reports/한벗 최종 계획 v3.md`

---

## Update (2026-11-07T20:09:13.921Z)

## 2026-11-08 개발자 저장소 조사 반영
- 개발자 GitHub 조사 연계: [[topic-dev-repos-ser-recipes-2026-11]] · [[topic-dev-repos-voice-conversation-2026-11]] · [[claim-research-3-reproduction-experiments-r0-r8]].

