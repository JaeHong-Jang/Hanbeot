# 한벗 "사람처럼 들리는" 오픈소스 TTS · JARVIS류 음성 에이전트 조사

- 조사일: 2026-11-08 (별 수·라이선스·마지막 push는 이날 GitHub REST API로 조회, README·LICENSE는 raw.githubusercontent.com으로 직접 열람)
- 등급: **A** = 레포 README/LICENSE/모델카드 직접 열람, **B** = 2차 자료(검색 요약), **C** = 미확인
- 선행 노트(중복 조사 안 함): `research_notes/목소리(TTS) 조사/hanbeot_voice_tts.md`(MeloTTS·OmniVoice·Qwen3-TTS·VoxCPM2 샘플, 기법 7가지), `research_notes/유사앱 조사/similar_apps_github.md`(Pipecat·LiveKit·TEN·Moshi 등). 아래에서 "선행 노트"로 인용.
- 지연 수치는 README에 적힌 것만 기재. 없으면 "미보고". 모든 지연은 제작사 보고치이며 한국어·한벗 환경 실측 아님.

---

## 0. 결론

### W4 블라인드 테스트 후보 (Typecast ssfm-v31 옆에 둘 3개)

| 순위 | 후보 | 이유 | 걸림돌 |
|---|---|---|---|
| 1 | **Qwen3-TTS 1.7B (CustomVoice, Sohee)** | 한국어 네이티브 화자 Sohee("Warm Korean female voice with rich emotion", A), 자연어 `instruct`로 감정·운율 지시, 스트리밍 첫 패킷 97ms(공식 주장), Apache-2.0. 선행 노트 샘플로 이미 들어봄 | 웃음·한숨 같은 비언어 태그는 README에서 확인 못 함. 한국어 감정 지시 효과는 실청취 필요 |
| 2 | **VoxCPM2 (2B)** | Apache-2.0 상업 가능(A), 한국어 CER 0.95%(README 표), 48kHz, RTF 0.13~0.3, 참조 음성+스타일 지시로 감정·속도 조정, 목소리 디자인 | 선행 노트: 결과 편차 있음. 비언어 태그 지원은 미확인. 2B라 GPU 필요 |
| 3 | **Fun-CosyVoice3 (0.5B/1.5B)** | 한국어 공식 지원 9개 언어에 포함, 양방향 스트리밍 150ms(README), instruct로 감정·속도, 코드 Apache-2.0. Wiki의 한국어 CER 9.06(스트리밍)과 일치 방향 | 가중치 라이선스는 이번에도 모델카드 미열람(확인 필요). 한국어 CER이 VoxCPM2·Fish보다 높음 |

**번외 (권장하지 않지만 알아둘 것)**
- **Fish Audio S2-Pro / Drama 3**: 한국어 표현력·`[laughing]`·`[whisper]` 태그가 가장 풍부(README A)하고 CV3-eval 한국어 CER 2.76으로 최상위. 그러나 **Fish Audio Community License**라 매출 문턱(Revenue Threshold) 이하만 무료 상업, 호스팅 서비스는 별도 계약. S2-Pro 가중치는 Research License. 청취 비교용 "상한선"으로만 쓰고 상용 후보에서는 제외 권장.
- **Chatterbox Multilingual V3**: 한국어 포함 23개 언어, MIT. 그러나 README에 **"2026년 8월부로 retired, 유지보수 중단"**(A). 영어 전용 Turbo의 `[laugh]` 태그가 한국어 모델에 되는지 미확인.
- **Supertonic 3**(Supertone): 한국어 포함 31개 언어, `<laugh>` `<breath>` `<sigh>` 등 10개 표현 태그, 99M 파라미터 CPU/온디바이스. 그러나 레포 **archived**(개발·지원 종료, A). 모델은 OpenRAIL-M. 

### 기대 비용 (추정, 근거 명시)
- 블라인드 테스트는 선행 노트의 10문장 대본 × 후보 4종(Typecast 포함) = 40클립. Qwen3-TTS·VoxCPM2·CosyVoice3는 **Hugging Face Space 무료 데모**(선행 노트가 2026-11-06 사용)나 Colab/GPU 1일 대여로 가능. GPU 대여 단가는 이번 조사에서 확인하지 않음(C). Typecast는 1천 자당 약 $0.075(선행 노트). 40클립 ≈ 2천 자 미만이면 수 센트 수준.
- 평가는 선행 노트 §PART 5의 1~5점 평가표 재사용. 추가 기준: ① 한국어 발음 오류(숫자·고유어) ② "아이고/음" 같은 감탄 처리 ③ 문장 끝 억양 ④ 속도 0.9~0.95에서 품질 열화 여부 ⑤ 스트리밍 첫 청크 지연 실측(p50/p90).

### 핵심 한계
- 웃음·숨소리 등 비언어 토큰이 **한국어에서 검증된** 오픈소스는 이번 조사에서 찾지 못함(§3). 한벗 1차는 선행 노트 결론대로 "Typecast + 맥락·감정·맞장구·필러 기법"이 맞고, 오픈소스는 W4 비교 후 비용 단계에서.

---

## 1. TTS 표 (순위: 한국어 + 자연스러움 + 상업 라이선스 + 스트리밍)

별은 2026-11-08 기준. 한국어: 네이티브=한국어 학습 화자/공식 지원, 복제만=제로샷 복제로 가능, 없음.

| 순위 | 모델 | 별 | 라이선스(상업) | 한국어 | 첫 청크 지연(보고) | 감정/스타일 제어 | 비언어(웃음·숨) | 복제 | 등급 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [QwenLM/Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) | 14.3k | Apache-2.0 (가능) | 네이티브(Sohee, 10개 언어) | 97ms 종단(공식 주장) | 자연어 instruct, VoiceDesign | README 미확인 | 3초 | A |
| 2 | [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | 41.2k | Apache-2.0 (가능) | 네이티브(30개 언어, ko CER 0.95%) | 미보고(RTF 0.13~0.3, 4090/vLLM) | 참조음성+스타일 지시, 목소리 디자인 | 미확인 | 있음(정밀 복제 모드) | A |
| 3 | [FunAudioLLM/CosyVoice](https://github.com/FunAudioLLM/CosyVoice) | 24.3k | 코드 Apache-2.0, 가중치 확인 필요 | 네이티브(9개 언어) | 150ms(양방향 스트리밍, README) | instruct(감정·속도·볼륨) | 미확인 | 제로샷 | A |
| 4 | [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | 33.6k | Fish Audio Community License(매출 문턱 이하만 상업, 호스팅 별도); S2-Pro 가중치 Research License | 다국어(ko CER 2.76 표 기재) | 약 100ms(H200, 이전 세대 README 기재) | `[whisper]` `[angry]` `[laughing]` 인라인, 다회 수정 | 웃음·울음·속삭임 강함 | 있음 | A |
| 5 | [k2-fsa/OmniVoice](https://github.com/k2-fsa/OmniVoice) | 16.4k | 코드 Apache-2.0(API), 가중치 CC-BY-NC(선행 노트) → 상업 불가 | 600+ 언어 | 미보고(RTF 0.025) | 목소리 디자인(성별·나이·피치) | `[laughter]` `[sigh]` 등 | 있음 | A |
| 6 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | 27.6k | MIT (가능) | Multilingual V3에 ko 포함 | 미보고(제작사 호스팅 sub-200ms는 유료 서비스 얘기) | exaggeration 계열 | Turbo(영어 전용)만 `[laugh]` `[cough]` | 있음 | A, **2026-08 retired** |
| 7 | [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | 13.8k | 코드 MIT, 모델 OpenRAIL-M(조건부) | 네이티브(31개 언어) | 미보고(CPU/온디바이스) | 표현 태그 10종 | `<laugh>` `<breath>` `<sigh>` | 미확인 | A, **archived** |
| 8 | [OpenMOSS/MOSS-TTSD](https://github.com/OpenMOSS/MOSS-TTSD) | 1.4k | Apache-2.0 | 언어표에 ko 포함 | 스트리밍 지원(v0.5), 수치 미보고 | 대화(2화자) 중심 | 미확인 | 있음 | A(부분) |
| 9 | [RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) | 64.5k | MIT (가능) | 영·일·한·광동·중 | 미보고 | 참조음성 감정 전이 | 없음 | 1분 학습/5초 제로샷 | A(부분) |
| 10 | [myshell-ai/MeloTTS](https://github.com/myshell-ai/MeloTTS) | 7.7k | MIT | 네이티브(읽기체) | CPU 실시간 | 없음 | 없음 | 없음 | A, 2024-12 이후 정체 |
| 11 | [SWivid/F5-TTS](https://github.com/SWivid/F5-TTS) | 15.5k | 코드 MIT, 가중치 CC-BY-NC(Emilia) → 상업 불가 | 기본 영·중, 한국어는 커뮤니티 미세조정 필요(C) | 미보고 | 참조음성 | 없음 | 있음 | A |
| 12 | [index-tts/index-tts](https://github.com/index-tts/index-tts) (IndexTTS2/2.5) | 25.0k | bilibili Model Use License(조건 확인 필요) | 공식: 중·영·일·스·아랍어. **한국어 없음**. 커뮤니티 [IndexTTS-KO](https://huggingface.co/yeowon/index-tts-ko)(좋아요 3, MOS/CER 미주장) | 미보고 | 감정 참조음성 분리, `duration_factor` 속도 | 없음 | 있음 | A |
| 13 | [boson-ai/higgs-audio](https://github.com/boson-ai/higgs-audio) | 8.4k | **v3는 Research & Non-Commercial** → 상업 불가 | 미확인 | 스트리밍 지원, 수치 미보고 | 미확인 | 미확인 | 있음 | A(부분) |
| 14 | [nari-labs/dia](https://github.com/nari-labs/dia) | 19.4k | Apache-2.0 | **영어 전용**(README 영어 대본만) | 미보고 | 참조음성 | `(laughs)` `(sighs)` `(inhales)` 등 20여 종 | 있음 | A |
| 15 | [canopyai/Orpheus-TTS](https://github.com/canopyai/Orpheus-TTS) | 6.4k | Apache-2.0 | 영어 중심, 다국어 "연구 프리뷰" | 약 200ms(입력 스트리밍 시 100ms) | 감정 태그(영어) | `<laugh>` 류(영어) | 제한적 | A |
| 16 | [SesameAILabs/csm](https://github.com/SesameAILabs/csm) | 14.7k | Apache-2.0 | 영어(Llama 백본) | 미보고 | **대화 맥락(오디오+텍스트)을 입력**으로 받음 | 맥락으로 암시 | 프롬프트 | A |
| 17 | [SparkAudio/Spark-TTS](https://github.com/SparkAudio/Spark-TTS) | 11.0k | 코드 Apache-2.0 | 중·영만 | 미보고 | 피치·속도 | 없음 | 있음 | A |
| 18 | [Zyphra/Zonos](https://github.com/Zyphra/Zonos) | 7.2k | Apache-2.0 | 영어 중심(language 코드 en-us), 한국어 미확인 | 미보고 | 기쁨·분노·슬픔·공포, 속도·피치 | 없음 | 있음 | A(부분), 2025-03 이후 정체 |
| 19 | [hexgrad/kokoro](https://github.com/hexgrad/kokoro) | 10.0k | Apache-2.0 | **README 언어 목록에 한국어 없음**(영·일·중·힌디 등) | 미보고(82M, 초경량) | 없음 | 없음 | 없음 | A |
| - | [coqui XTTS v2](https://github.com/idiap/coqui-ai-TTS) | 2.3k(idiap 포크; 원본 coqui-ai/TTS 46.2k, 2024-08 중단) | 모델 CPML(비상업) | XTTS v2는 ko 지원 알려졌으나 이번에 모델카드 미열람(C) | 미보고 | 참조음성 | 없음 | 있음 | C |

### 각 후보 메모

**1. Qwen3-TTS** — 0.6B/1.7B Base·CustomVoice·VoiceDesign 변형 모두 스트리밍과 instruct를 지원(README 표). 한국어 전용 화자 Sohee 제공. 스트리밍은 "한 글자 입력 즉시 첫 오디오 패킷", 종단 합성 지연 97ms라고 제작사가 주장하나 GPU 종류·한국어 실측은 미기재. vLLM-Omni day-0 지원. 약점: 비언어 태그 문서화 없음, 감정 지시의 한국어 효과는 직접 청취로 검증해야 함. 선행 노트가 이미 1순위로 지목.

**2. VoxCPM2** — 2B, 200만 시간 학습, 30개 언어, 48kHz. README의 CV3-eval 다국어 표에서 한국어 CER 5.69(CosyVoice3-1.5B와 동일, Fish Audio S2는 2.76), 별도 언어표 ko CER 0.95%(두 번째 표의 열 의미는 요약본만 열람, 비교 대상 열은 불명확). Streaming API `generate_streaming` 제공, 첫 청크 지연 미보고. 약점: 선행 노트가 지적한 생성 편차.

**3. Fun-CosyVoice3** — 한국어 포함 9개 언어·18+ 중국어 방언. Bi-Streaming(텍스트 입력 스트리밍 + 오디오 출력 스트리밍)이 LLM 토큰이 흘러나오는 한벗 구조와 잘 맞음. CosyVoice2의 한국어 CER 19.7 → CosyVoice3-1.5B 5.69로 개선(VoxCPM README 표 인용, B-A 혼합). 다만 이번에도 가중치 라이선스 미확인.

**4. Fish Audio (S2-Pro / Drama 3)** — 가장 "연기"에 가까운 표현(웃음·울음·속삭임, 직전 테이크를 "더 부드럽게, 조금 슬프게"처럼 고치는 다회 수정). 라이선스 때문에 한벗이 매출 문턱을 넘으면 별도 계약 필요. 문턱 금액은 LICENSE에서 못 찾음(확인 필요). 청취 상한선 용도.

**5. OmniVoice** — 선행 노트 샘플 보유. 가중치 CC-BY-NC라 상업 불가. 한국어 포함 600+ 언어와 `[laughter]` `[sigh]` 태그는 연구 참고용.

**6. Chatterbox** — 별 27.6k로 인기 높고 MIT지만 개발 종료. 한국어는 Multilingual V3(0.5B, 23개 언어)에 있음. 영어 Turbo/Nano의 `[laugh]` `[cough]`는 한국어에 적용 안 됨(영어 전용 표기). 유지보수 없는 모델에 프로덕션 의존은 위험.

**7. Supertonic** — 한국 회사 Supertone 제품. 한국어 지원과 `<laugh>` `<breath>` `<sigh>` 태그가 있어 **내용상 한벗 요구에 가장 가까운 "표현 태그"** 이나 저장소 archived, 호스팅 판은 Supertone Play/API(상용)로 이동(README). 상업 TTS 후보로 따로 문의할 가치 있음(Typecast와 같은 급).

**8~11** MOSS-TTSD는 2화자 팟캐스트형(한벗 단일 화자엔 부적합), GPT-SoVITS는 한국어 파인튜닝 자료가 많으나 감정·스트리밍 약함, MeloTTS는 기준선, F5-TTS는 가중치 NC.

**12. IndexTTS** — 감정 참조 음성 분리(timbre/emotion disentanglement)와 속도 `duration_factor 0.5~2.0`이 장점. 공식 한국어 없음. 커뮤니티 IndexTTS-KO는 Emilia-YODAS 한국어로 180,100 step 미세조정, 평가 수치 없음, 라이선스는 원 IndexTTS-2 조건 상속(HF 모델카드 A). 실험 가치만 있음.

**13~19** 영어 중심(Dia·Orpheus·CSM·Spark·Zonos·Kokoro). 한국어 불가이나 §3에서 "기법 차용" 대상. Higgs Audio v3는 비상업 라이선스로 확인되어 제외(이전 v2는 Apache였으나 이번 README는 v3 기준).

### 한국어 전용·감성 TTS 레포 (검색 B)
- [IndexTTS-KO](https://huggingface.co/yeowon/index-tts-ko) — 위 12 참고 (A).
- [keonlee9420/Expressive-FastSpeech2](https://www.github.com/keonlee9420/Expressive-FastSpeech2) — AIHub 멀티모달 영상 데이터로 한국어 감정 TTS(마지막 업데이트 2021-08로 표기). 구형 구조라 자연스러움 낮음 예상 (B).
- Selvas AI 한국어 감정 TTS 정부과제 오픈 플랫폼(Emotional SSML 해석기, 한국어 G2P 포함) — 검색 요약에서만 확인, URL·라이선스 미확인 (C).
- E3-VITS(한국어 스타일 태그 데이터 FSNR0 사용) — 데모 페이지만 확인, 코드·체크포인트 미확인 (C).
- AI Hub "감성 TTS 데이터"라는 이름의 공개 합성용 코퍼스는 이번에 **확인하지 못함**. AI Hub의 감정 분류 대화/음성 데이터셋은 인식용(4감정: 분노·행복·중립·슬픔)이며 합성용 아님 (B).

---

## 2. 에이전트 프레임워크 · JARVIS류

별은 2026-11-08 기준. "구조": 캐스케이드(STT→LLM→TTS) vs S2S(음성-음성 모델).

### 2-A. 프로덕션 프레임워크

| 프로젝트 | 별 | 라이선스 | 구조 | 끼어들기 | 백채널/필러 | 한국어 | 한벗이 가져올 점 | 등급 |
|---|---|---|---|---|---|---|---|---|
| [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) | 17.1k | BSD-2 | 캐스케이드 | 있음(`MinWordsUserTurnStartStrategy`, 선행 노트) | 기본 제공 없음, 파이프라인에 직접 삽입 | STT/TTS 플러그인 따라 | 이미 채택. 선행 노트 참조 | A |
| [livekit/agents](https://github.com/livekit/agents) | 15.1k | Apache-2.0(턴 모델은 LiveKit Model License) | 캐스케이드 + 실시간 모델 | 시맨틱 턴감지로 오끼어듦 감소 | README 미확인 | 미확인 | 시나리오 기반 테스트 | A |
| [TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework) | 11.2k | Apache-2.0 + 추가 조건(상용 전 법무) | 캐스케이드 | TEN Turn Detection으로 풀듀플렉스 대화 표방 | 미확인 | 미확인 | VAD·턴감지 모델 | A |
| [kyutai-labs/unmute](https://github.com/kyutai-labs/unmute) | 1.5k | MIT | 캐스케이드(Kyutai STT/TTS + 임의 LLM) | 있음(저지연 스트리밍 설계) | 미확인 | 한국어 미표기 | TTS 지연: 단일 L40S 약 750ms, 분산 시 약 450ms (README). 캐스케이드의 현실적 지연 기준점 | A |
| [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 별 조회 실패(API는 다른 경로 47 반환, 부정확) | MIT(Live2D 샘플은 별도 약관) | 캐스케이드, 오프라인 가능 | "헤드폰 없이 음성 끼어들기", AI 먼저 말 걸기 | Live2D 감정 매핑, 속마음 표시 | 모듈 교체(FunASR·MeloTTS·CosyVoice·Fish Audio·Claude 지원) | **감정 태그→표정/행동 매핑 구조**, 먼저 말 걸기 | A |
| [vocodedev/vocode-core](https://github.com/vocodedev/vocode-core) | 3.8k | MIT | 캐스케이드 | 있음 | - | - | 2024-11 이후 정체, 학습용 | A |
| [HeyWillow/willow](https://github.com/HeyWillow/willow) | 3.1k | Apache-2.0 | 하드웨어 음성 비서(ESP32) + 서버 | - | - | - | 한벗과 무관(디바이스형) | A(README 짧음) |
| [home-assistant/core](https://github.com/home-assistant/core) Assist | 92.0k | Apache-2.0 | 캐스케이드 | - | - | 다국어 | 한벗과 무관(스마트홈) | B |
| [leon-ai/leon](https://github.com/leon-ai/leon) | 17.6k | MIT | 로컬 비서 | - | - | 미확인 | 무관 | A(조회만) |
| [OpenVoiceOS/ovos-core](https://github.com/OpenVoiceOS/ovos-core) | 0.3k | Apache-2.0 | Mycroft 후속 스킬 구조 | - | - | 미확인 | 무관 | A(조회만) |
| janhq/jan | 45.6k | 조회 NOASSERTION | 로컬 LLM 앱 | - | - | - | 음성 대화 프레임워크 아님. 제외 | B |

### 2-B. 음성-음성 모델(S2S) / 풀듀플렉스

| 프로젝트 | 별 | 라이선스 | 한국어 | 지연(보고) | 백채널·끼어들기 | 한벗 관점 | 등급 |
|---|---|---|---|---|---|---|---|
| [kyutai-labs/moshi](https://github.com/kyutai-labs/moshi) | 11.5k | 코드 MIT/Apache, 가중치 CC-BY 4.0 | 미표기 | 이론 160ms, L4 실측 약 200ms | 풀듀플렉스(동시 청취·발화) | LLM을 Claude로 못 바꿈. 벤치마크 기준점 | A |
| [krafton-ai/Raon-Speech](https://github.com/krafton-ai/Raon-Speech) | 126 | 레포 Apache-2.0(README). 선행 노트는 SpeechChat 9B를 비상업으로 기재 → **모델카드 재확인 필요** | **영·한 이중언어 9B**, 한국어 벤치 3종(KVoiceBench 등) 공개 | 단일 GPU 스트리밍 TTS first-token 1초 미만(LibriSpeech 영어 측정) | 풀듀플렉스, 턴테이킹·백채널·끼어들기 처리 강조 | **한국어 풀듀플렉스 유일 후보**. 연구·참고용 | A |
| [QwenLM/Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni) | 4.1k | Apache-2.0 | 음성 입력·출력 모두 한국어 포함 | "저지연 스트리밍" 표방, 수치 README에서 못 찾음 | 자연스러운 턴테이킹 표방 | LLM 교체 불가, 모델이 크다 | A |
| [stepfun-ai/Step-Audio2](https://github.com/stepfun-ai/Step-Audio2) | 1.5k | Apache-2.0 | 한국어 미확인 | 미보고 | - | 중·영 중심 | A(부분) |
| [zai-org/GLM-4-Voice](https://github.com/zai-org/GLM-4-Voice) | 3.2k | Apache-2.0 | 중·영 | - | - | 2024-12 이후 정체 | A(부분) |
| [fixie-ai/ultravox](https://github.com/fixie-ai/ultravox) | 4.6k | MIT | 미표기 | - | - | 선행 노트 참고 | B |
| [VITA-MLLM/Freeze-Omni](https://github.com/VITA-MLLM/Freeze-Omni) | 0.4k | 조회 NOASSERTION | 중·영 추정(C) | - | - | 2025-05 이후 정체 | C |

### 2-C. 이름이 "Jarvis"인 인기 레포 (취미/데모)

GitHub 검색 `jarvis voice assistant`(별 순, 2026-11-08):

| 레포 | 별 | 라이선스 | 구조·특징 | 한벗 시사점 |
|---|---|---|---|---|
| [Priler/jarvis](https://github.com/Priler/jarvis) | 3.0k | CC BY-NC-SA 4.0 (비상업) | Rust 오프라인 비서, 웨이크워드·STT·NLU 중심 | 상업 불가, 명령 인식형 |
| [isair/jarvis](https://github.com/isair/jarvis) | 2.2k | 조회 NOASSERTION | 로컬 우선 데스크톱 비서, Whisper+Ollama, 일기·지식그래프 기억, 민감정보 마스킹 | 기억·마스킹 UX만 참고 |
| [GauravSingh9356/J.A.R.V.I.S](https://github.com/GauravSingh9356/J.A.R.V.I.S) | 1.5k | MIT | 파이썬 라이브러리 묶음 명령 실행 | 규칙 기반, 참고 가치 낮음 |
| [ethanplusai/jarvis](https://github.com/ethanplusai/jarvis) | 1.0k | 조회 NOASSERTION | "Claude Code를 위한 음성", 영국 집사 페르소나, Claude Code 프로세스를 두뇌로 사용 | 페르소나 음성 + Claude 연동 사례 |
| [AlexandreSajus/JARVIS](https://github.com/AlexandreSajus/JARVIS) | 0.5k | GPL-3.0 | Voice→Text→LLM→Speech 웹 UI (2024-06) | 단순 캐스케이드 교과서 |
| [projecthub-codingstudio/JARVIS](https://github.com/projecthub-codingstudio/JARVIS) | 2 | MIT | **한국어 우선**, macOS 로컬 | 별 2, 실적 없음(C) |
| yunis8712-prog/openjarvis-voice | 0 | MIT | 한국어 브라우저 음성비서, Ollama | 별 0, 장난감 수준(C) |

판단: "자비스류"로 불리는 상위 레포는 대부분 **명령 실행형 데스크톱 비서**이고 대화 품질(운율·백채널·감정)을 다루는 것은 없었다. 한벗이 가져올 것은 JARVIS 레포가 아니라 §2-A·§3의 프레임워크와 TTS 모델이다. 위 레포들의 TTS/백채널 구현은 README 수준에서만 확인했고 코드는 열지 않음.

---

## 3. 요소별 "사람처럼 들리게" 구현 저장소

| 요소 | 구현한 저장소 (등급) | 한국어에서 되는가 | 한벗 적용 |
|---|---|---|---|
| 대화 맥락 기반 운율 | Sesame CSM(이전 턴 오디오+텍스트 입력, A); Fish Drama 3(직전 테이크를 말로 수정, A); MOSS-TTS-Realtime(대화 이력과 사용자 음향 조건, MOSS-TTSD README 언급, 모델 미열람 C); Typecast `previous_text`(선행 노트) | CSM 영어만. Fish는 다국어 | 현재는 Typecast `previous_text`가 한국어 유일 실사용 경로 |
| 자연어 감정 지시 | Qwen3-TTS, CosyVoice3 instruct, VoxCPM2 스타일 지시(A) | 세 곳 모두 한국어 지원 언어 | W4 비교 항목 |
| 숨·웃음·한숨 토큰 | Dia 20여종, Orpheus, Chatterbox Turbo(영어); Fish `[laughing]`, OmniVoice `[laughter]`, Supertonic `<laugh><breath><sigh>`(다국어 표기) | **한국어 청취 검증된 자료는 이번에 못 찾음.** 태그가 있어도 한국어 학습 데이터에 포함됐는지는 별개 | 샘플 청취 필수 |
| 속도 0.9~0.95 | IndexTTS `duration_factor`(0.5~2.0), Typecast `audio_tempo`, Zonos 속도 파라미터 | IndexTTS 한국어 비공식 | 속도 변경 시 음질 열화는 직접 측정 |
| 감정 참조음성 분리 | IndexTTS2(음색/감정 분리, A) | 공식 한국어 없음, KO 미세조정판 존재 | 연구 단계 |
| 필러·백채널 | 프레임워크 레벨: Open-LLM-VTuber의 AI 먼저 말 걸기; Raon-SpeechChat 백채널·끼어들기 학습(A); 선행 노트의 사전 녹음 클립 방식 | Raon만 한국어 | 오픈소스에서 **캐스케이드용 백채널 구현 레포는 못 찾음** → 직접 구현(선행 노트 ③④) |
| 저지연 | Qwen3-TTS 97ms, CosyVoice3 150ms, Orpheus ~200ms, Fish ~100ms, Unmute TTS 450~750ms (모두 제작사 보고, 한국어·한벗 환경 실측 없음) | - | Pipecat에서 p50/p90 실측 |

## 4. 한국어 SER + LLM + TTS 결합 사례

- **GitHub에서 세 요소를 모두 갖춘 공개 한국어 레포는 찾지 못함** (WebSearch 1회 + GitHub 검색 API). 확인 못 한 것이지 없다는 증명은 아님.
- 가장 가까운 것: ① [Korean multimodal empathetic dialogue system (CAI 2022)](https://aclanthology.org/2022.cai-1.3) — 감정 감지기·공감 응답 생성·음성 인식·합성·아바타. 코드 공개 여부 미확인 (B). ② engrXiv 프리프린트: 한국어 Live2D 음성 동반자, gpt-4o-audio-preview로 음성 입력(별도 SER 아님) (B). ③ 서강대 학위논문: HuBERT(음성)·LLaMA2(텍스트) 감정 인식, AI Hub 대화 데이터, 정확도 0.8139/0.8125 (B). ④ [Llama-KoEmpathy](https://featherless.ai/models/byeolki/Llama-KoEmpathy/readme) — AIHub 공감 대화로 미세조정한 8B 텍스트 모델, 음성 없음 (B).
- 선행 노트(`similar_apps_github.md`)의 Hume EVI + CLM 예제가 구조상 가장 유사(음성 감정 신호 + 외부 LLM). 한벗의 emotion2vec+ → Claude → Typecast 조합은 **공개 사례가 없어 직접 구현이 기준선**.

## 5. 빈 곳 · 확인 필요

1. **한국어 비언어 태그 실청취**: Fish `[laughing]`, Supertonic `<laugh>`/`<breath>`, OmniVoice `[laughter]`가 한국어 문장에서 자연스러운지 샘플 필요. 가장 큰 미확인 사항.
2. CosyVoice3 가중치 라이선스, Fish Community License의 매출 문턱 금액, IndexTTS 라이선스 상업 조건, XTTS v2 한국어 여부.
3. Raon-SpeechChat 9B 모델카드 라이선스(레포는 Apache-2.0, 선행 노트는 비상업) 불일치.
4. Open-LLM-VTuber 별 수(조회 시 다른 경로 값 47 반환 → 부정확, 실제 수치 미확인), Qwen3-Omni 별 수가 Qwen2.5-Omni와 동일(4095)해 같은 저장소로 리다이렉트된 것으로 보임.
5. Unmute·Moshi·Step-Audio2·Freeze-Omni의 한국어 지원, LiveKit/TEN의 한국어 STT/TTS 지원.
6. 이번에 제한된 API 호출 한도로 jarvis 레포들의 코드 내부(백채널·끼어들기 구현)는 열지 않음. 모델 성능 비교 수치는 모두 제작사 README 값.
7. AI Hub 감성 합성 데이터의 존재·라이선스. Selvas 감성 TTS 오픈 플랫폼 URL.
8. GPU 대여 단가와 자체 서버 월 비용(블라인드 테스트 비용은 추정만).
