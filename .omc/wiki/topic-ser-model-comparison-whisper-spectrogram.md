---
title: "topic-ser-model-comparison-whisper-spectrogram"
tags: ["ser", "whisper", "wavlm", "lora", "spectrogram", "emotion2vec", "turn", "unconfirmed", "topic"]
created: 2026-11-07T11:32:25.032Z
updated: 2026-11-07T11:32:25.032Z
sources: ["research_notes/회의 후속 조사/CD_Whisper_스펙트로그램.md", "research_notes/회의 후속 조사/K_감정인식원리_턴.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-app-impl-ser-cues.md", "claim-tech-1-ser-model.md", "src-ma-2024-emobox.md", "src-ma-2025-lora-whisper-ser.md", "src-sereval-2024-whisper-crosslingual.md", "src-lee-2026-elderly-whisper-asr.md", "src-park-2024-korean-asr-eval.md", "src-chen-2022-wavlm.md", "src-kim-2024-dementia-ser.md", "src-ma-2024-emotion2vec.md", "topic-ser-label-scheme-and-fusion.md", "topic-ser-context-personalization.md", "src-funaudiollm-2024-sensevoice.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-ser-model-comparison-whisper-spectrogram

# topic-ser-model-comparison-whisper-spectrogram

상위: [[topic-meeting-followup-ser-2026-11]] · [[topic-app-impl-ser-cues]] · [[claim-tech-1-ser-model]]. **미확정(11/9 회의 결정 전).** 출처: CD_Whisper_스펙트로그램.md, K_감정인식원리_턴.md.

## C. Whisper를 감정 인식에 쓰면
- 영어에서는 강하나 한국어 감정 근거는 없다. 한국어 감정으로 평가한 논문을 이번에도 못 찾음.
- EmoBox IEMOCAP UA/WA: Whisper-large-v3 **73.54/72.86** vs WavLM-large 69.47/69.07 (약 4%p). 32개 데이터 중 23개에서 1위. 처음 보는 데이터 평균 Whisper 52.0% vs WavLM 44.5% [[src-ma-2024-emobox]].
- 그대로 얼려(frozen) 쓰면 층·풀링에 따라 크게 하락: IEMOCAP 4감정 화자 독립 10-fold, large-v2 **LoRA UAR 0.774 / frozen 0.582**, large-v3 LoRA 0.767 / frozen 0.433 [[src-ma-2025-lora-whisper-ser]]. 따라서 LoRA급 미세조정이 사실상 필요.
- 정정(11/7): 고정 Whisper 범위 43~58% → **43~64%**로 수정. "EmoBox 73.5%는 층 가중 평균 덕분"이라는 추정은 **철회**(원문상 마지막 층만 사용). K 노트: Whisper 감정 인식 고정 43~64% / LoRA 77% (IEMOCAP), 자연 대화 8감정 F1 .43. emotion2vec+와 같은 조건 비교·한국어 결과는 없음.
- 교차코퍼스: SER Evals에서 Whisper-Large-v2 macro-F1 0.782 → 0.194, WavLM-Large 0.765 → 0.161. Whisper가 덜 무너질 뿐 모든 모델이 1/4 수준으로 떨어진다 [[src-sereval-2024-whisper-crosslingual]].
- 한국어 노인 ASR(75세 이상 104명, VOTE400): Whisper CER Small 12.5, Medium 8.3, Large-v2 6.1, **Large-v3 5.5** → 증강 후 2.7 [[src-lee-2026-elderly-whisper-asr]]. 기준선이 제로샷인지 미세조정인지 불명확.
- 일반 성인 자유대화(KsponSpeech) 제로샷 CER 약 14% [[src-park-2024-korean-asr-eval]].
- 비용: 한벗은 RTZR STT를 쓰므로 Whisper 인코더는 추가 연산 비용.

## D. 스펙트로그램 + CNN
- 같은 가벼운 분류기에 입력만 바꾼 SUPERB 비교: FBANK(log-mel) **35.39%** vs WavLM Large **70.62%** [[src-chen-2022-wavlm]].
- Light-SERNet 0.88MB로 IEMOCAP UA 70.76이나 화자 분리 명시 없음. 국내 83~89%(상명대 연기 DB 88.89%, AI Hub VGG16 성인 83.5%)는 연기·화자 혼합 평가라 믿기 어렵다.
- 결론(제안): 메인 모델로 부적합. 울음·한숨·흥분 감지 같은 기기 내 **보조 감지기**로만 검토.
- 70~80%는 연기·4감정 영어 벤치마크 숫자. 실제 독거노인 발화는 음성만 6감정 51.4%, 3감정 64.7%, 텍스트→음성 2단계 69.3% [[src-kim-2024-dementia-ser]].

## K. SER 원리와 emotion2vec+
- 흐름: 소리(16kHz) → 특징(옛: 피치·MFCC·eGeMAPS / 요즘: wav2vec2·HuBERT·WavLM·emotion2vec) → 분류기 → softmax로 감정별 확률.
- emotion2vec+: 영어 약 **262h** 사전학습 후 **의사 라벨로 42,526h**까지 확장, **9감정 softmax** 확률 출력. **한국어 학습·평가 기록 없음** [[src-ma-2024-emotion2vec]].
- 목소리는 각성은 잘 맞히고 정서가는 약함: [[topic-ser-label-scheme-and-fusion]].

## 턴(turn) 정의
- 대화 분석(Sacks·Schegloff·Jefferson 1974): 한 사람이 말을 시작해 상대에게 넘기기 전까지의 말 한 덩어리.
- ERC 논문의 w턴은 양쪽 화자 발화를 합쳐 센다 → 기존 "6~10턴" ≈ 3~5왕복. 맥락 효과는 [[topic-ser-context-personalization]].
- Smart Turn v3는 "말이 끝났는가"를 판단하는 별개 개념.

## 한벗에 할 일 (제안, 미확정)
- emotion2vec+ 유지. W3에서 emotion2vec+ vs Whisper 고정 vs Whisper+LoRA를 KEMDy20·AI Hub 화자 분리로 비교(1회).
- 백업 후보: SenseVoice-Small(10초 음성 70ms vs Whisper-Small 518ms, A800), 한국어 감정 성능 미검증 [[src-funaudiollm-2024-sensevoice]].

## 확인 필요
- Whisper 한국어 노인 CER 기준선이 추가 학습 전인지
- 한국어 감정 Whisper 평가, emotion2vec+와 동일 조건 비교

