---
title: "topic-tts-humanlike-techniques"
tags: ["tts", "typecast", "elevenlabs", "backchannel", "filler", "latency", "topic"]
created: 2026-11-07T11:34:24.685Z
updated: 2026-11-07T11:34:24.685Z
sources: ["research_notes/목소리(TTS) 조사/hanbeot_voice_tts.md"]
links: ["topic-app-impl-dialogue-tts.md", "claim-tech-3-stt-tts-vendors.md", "overview-technology.md", "topic-app-impl-ser-cues.md", "src-pipecat-2026-docs-tts-aggregation.md", "claim-tech-5-latency-target.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-tts-humanlike-techniques

# topic-tts-humanlike-techniques

상위: [[topic-app-impl-dialogue-tts]] · [[claim-tech-3-stt-tts-vendors]] · [[overview-technology]]. 출처: research_notes/목소리(TTS) 조사/hanbeot_voice_tts.md (2026-11-06). 11/9 회의 전 제안이며 확정 아님.

## 한 줄 결론
엔진을 바꾸기 전에 지금 쓰는 Typecast에 **대화 맥락, 사용자 감정에 맞춘 톤, 맞장구·필러, 말하기용 문장**을 붙이는 게 가장 싸고 효과가 크다. 엔진 비교 1순위는 Typecast ssfm-v31 vs ElevenLabs v4 Turbo. 한국어+상업 가능한 풀듀플렉스 모델은 아직 없어 STT → Claude → TTS 구조 유지. Sesame 연구: 문장 하나만 들려주면 AI와 사람 구분이 어렵고, 대화 맥락까지 들려주면 사람 녹음을 더 선호 → 남은 격차는 억양·타이밍.

## 엔진 비교
### 직접 들어본 샘플 (2026-11-06, Hugging Face 공개 데모로 합성; 대본 "아이고, 그러셨구나. 오늘 많이 속상하셨겠어요. 제가 옆에서 들어드릴게요.")
- Qwen3-TTS 1.7B (Sohee, Apache-2.0): `research_notes/목소리(TTS) 조사/audio/A_qwen3_sohee.wav`
- VoxCPM2 2B (Apache-2.0): `research_notes/목소리(TTS) 조사/audio/A_voxcpm2.mp3`
- OmniVoice 0.6B (가중치 CC-BY-NC, 상용 불가): `research_notes/목소리(TTS) 조사/audio/A_omnivoice.wav`
- MeloTTS-Korean (MIT, 읽기체 기준선): `research_notes/목소리(TTS) 조사/audio/A_melotts_kr.wav`
- 상용(Typecast, ElevenLabs, Gemini)은 API 키가 없어 미생성. 기법 효과 비교 음성도 미생성(무료 GPU 한도 소진).
### 상용
- Typecast ssfm-v31(현재): 감정 7종 x 강도 0~2, Smart Emotion(`previous_text`/`next_text`), 쉼 표기. 1천 자당 약 $0.075(Lite). 웃음·한숨 소리, SSML, WebSocket 없음. Pipecat 플러그인은 v30까지 확인.
- ElevenLabs v4 Turbo / v3: 오디오 태그(`[sighs]` 등), 약 100ms/165ms, 1천 자당 약 $0.04. 한국어 태그 효과는 직접 확인 필요.
- Google Gemini 3.8 Flash-Lite TTS: 자연어 스타일 지시 + 태그, 오디오 100만 토큰당 $6(2027-01부터 2배).
- Azure MAI-Voice-2: 한국어 감정 스타일 13종, 미리보기. Inworld TTS-2, Cartesia Sonic 3.6(감정 태그 영어 전용), Naver CLOVA Voice(Pipecat 미지원).
- 제외: OpenAI TTS(2027-01-06 종료 예정), Rime·Sesame(한국어 없음), 음성 대 음성 모델(LLM을 Claude에서 바꿔야 함).
### 오픈소스(자체 서버·비용 대비)
- Qwen3-TTS(첫 소리 약 97ms, Apache-2.0, 1순위), Fun-CosyVoice3, VoxCPM2, Supertonic 3(저장소 archive), MeloTTS, Raon-SpeechChat 9B(비상업). 웃음·한숨이 뛰어난 오픈소스는 대부분 영어 전용. 지금은 상용 API, 오픈소스는 나중 단계에서 검토.

## 사람처럼 들리게 하는 기법 7가지
1. **대화 맥락**: Typecast Smart Emotion의 `previous_text`에 직전 2~3턴, `next_text`에 같은 응답의 다음 문장. 자동으로 안 채워지므로 코드에서 넣는다.
2. **사용자 감정에 톤 맞추기**: emotion2vec+ 결과 → Claude 프롬프트 `[사용자 감정: 슬픔 0.7]` + TTS 규칙(슬픔·불안: tonedown/normal, 강도 0.6~0.8, 속도 0.9 / 기쁨: happy 1.0, 1.0 / 화남: normal 0.7, 0.95 / 중립: normal 1.0, 0.95). 관련 [[topic-app-impl-ser-cues]].
3. **맞장구 클립**: 사용자가 3~4초 이상 말하다 쉬고 Smart Turn이 "아직 안 끝남"이면 미리 만든 클립을 작게 재생. 대화 기록(LLM)에 넣지 않고 에코로 STT에 재입력되지 않게 처리.
4. **필러 쿨다운**: Claude 첫 응답이 0.7초 이상 늦을 때만 "음, 그러니까요…", 연속 사용 금지. 어색하면 미리 녹음 클립으로 대체.
5. **감정 태그 + PatternPairAggregator**: Claude가 `<emo>sad</emo>`를 붙이면 읽지 않고 TTS 설정만 바꿈. 말하기용 문장 규칙(15~25자, 한 턴 2~3문장, 질문 하나, 마크다운·이모지 금지, 숫자는 한글로 풀기, 해요체). `MarkdownTextFilter`는 안전장치 [[src-pipecat-2026-docs-tts-aggregation]].
6. **audio_tempo 0.9~0.95**: 무조건 느리게보다 구절 사이·핵심 단어 앞 쉼이 이해에 도움. 옛 합성기 기준이라 재확인 필요. 문장 단위 TTS 호출로 쉼 확보.
7. **응답 1~1.5초 목표**: 사용자 말 끝 후 첫 소리까지 1~1.5초 이내(사람 전환 간격 약 0.2초, 4초 넘으면 경험 하락). 끼어들기는 `MinWordsUserTurnStartStrategy`로 최소 2~3단어일 때만.

## 실험 계획
가장 싼 순서: Typecast 그대로 + `previous_text` + 감정 톤 규칙 전후 비교 → 맞장구 3개·필러 2개 클립 연결 → ElevenLabs v4 Turbo와 블라인드 비교. 평가표 1~5점(사람 같음, 공감, 알아듣기, 감정 적합, 맞장구 자연스러움, 사람/AI 판별). 지연은 Pipecat 실통화 p50·p90. 지연 목표 비교: [[claim-tech-5-latency-target]].

## 확인 필요
상용 엔진 한국어 음질, Typecast 첫 소리 지연 수치와 Pipecat v31 지원, ElevenLabs 태그의 한국어 효과, Gemini TTS의 Pipecat 지원, Hume 종료 공지, CosyVoice3 가중치 라이선스, 어르신 대상 말 속도 연구의 최신 TTS 적합성.

