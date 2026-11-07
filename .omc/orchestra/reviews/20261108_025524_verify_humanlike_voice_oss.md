확인일은 **2026-11-08**입니다. 반복된 주장은 합쳤으며, 수치 외에 인용된 기능·라이선스·지원 언어도 포함했습니다. **A는 원출처 대조, B는 2차 출처·근사치, C는 확인불가**입니다. ‘불일치/A’는 메모의 정정값을 원출처에서 확인했다는 뜻입니다. 제작사 보고치와 독립적인 성능 검증은 구분했습니다.

주요 정정 사항은 **Qwen의 instruct 지원 범위, CosyVoice 9.06%의 모델 버전, Fish 라이선스 예외, Raon-SpeechChat의 언어, AI Hub 합성용 데이터의 존재**입니다.

먼저 GitHub 별 수입니다. `k` 표기는 근사치이므로 B로 분류했습니다. 아래 값은 이번 REST API 응답이며, 원저자의 조회 시각을 재현한 것은 아닙니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Qwen3-TTS 14.3k | [GitHub](https://github.com/QwenLM/Qwen3-TTS) | REST `stargazers_count` | 일치 | B | 14,270 |
| VoxCPM 41.2k | [GitHub](https://github.com/OpenBMB/VoxCPM) | REST API | 일치 | B | 41,243 |
| CosyVoice 24.3k | [GitHub](https://github.com/FunAudioLLM/CosyVoice) | 이전된 저장소 REST API | 일치 | B | 24,327. 현재 `QwenAudio/CosyVoice` |
| Fish Speech 33.6k | [GitHub](https://github.com/fishaudio/fish-speech) | REST API | 일치 | B | 33,608 |
| OmniVoice 16.4k | [GitHub](https://github.com/k2-fsa/OmniVoice) | REST API | 일치 | B | 16,368 |
| Chatterbox 27.6k | [GitHub](https://github.com/resemble-ai/chatterbox) | REST API | 일치 | B | 27,646 |
| Supertonic 13.8k | [GitHub](https://github.com/supertone-inc/supertonic) | 이전된 저장소 REST API | 일치 | B | 13,756. 현재 `supertone-oss-archive/supertonic` |
| MOSS-TTSD 1.4k | [GitHub](https://github.com/OpenMOSS/MOSS-TTSD) | REST API | 일치 | B | 1,417 |
| GPT-SoVITS 64.5k | [GitHub](https://github.com/RVC-Boss/GPT-SoVITS) | REST API | 일치 | B | 64,498 |
| MeloTTS 7.7k | [GitHub](https://github.com/myshell-ai/MeloTTS) | REST API | 일치 | B | 7,701 |
| F5-TTS 15.5k | [GitHub](https://github.com/SWivid/F5-TTS) | REST API | 일치 | B | 15,530 |
| IndexTTS 25.0k | [GitHub](https://github.com/index-tts/index-tts) | REST API | 일치 | B | 24,973 |
| Higgs Audio 8.4k | [GitHub](https://github.com/boson-ai/higgs-audio) | REST API | 일치 | B | 8,379 |
| Dia 19.4k | [GitHub](https://github.com/nari-labs/dia) | REST API | 일치 | B | 19,408 |
| Orpheus 6.4k | [GitHub](https://github.com/canopyai/Orpheus-TTS) | REST API | 일치 | B | 6,395 |
| CSM 14.7k | [GitHub](https://github.com/SesameAILabs/csm) | REST API | 일치 | B | 14,746 |
| Spark-TTS 11.0k | [GitHub](https://github.com/SparkAudio/Spark-TTS) | REST API | 일치 | B | 10,991 |
| Zonos 7.2k | [GitHub](https://github.com/Zyphra/Zonos) | REST API | 일치 | B | 7,239 |
| Kokoro 10.0k | [GitHub](https://github.com/hexgrad/kokoro) | REST API | 일치 | B | 9,956 |
| idiap 포크 2.3k | [GitHub](https://github.com/idiap/coqui-ai-TTS) | REST API | 일치 | B | 2,349 |
| 원본 Coqui TTS 46.2k | [GitHub](https://github.com/coqui-ai/TTS) | REST API | 일치 | B | 46,190 |
| Pipecat 17.1k | [GitHub](https://github.com/pipecat-ai/pipecat) | REST API | 일치 | B | 17,112 |
| LiveKit Agents 15.1k | [GitHub](https://github.com/livekit/agents) | REST API | 일치 | B | 15,126 |
| TEN Framework 11.2k | [GitHub](https://github.com/TEN-framework/ten-framework) | REST API | 일치 | B | 11,222 |
| Unmute 1.5k | [GitHub](https://github.com/kyutai-labs/unmute) | REST API | 일치 | B | 1,545 |
| Open-LLM-VTuber 조회 실패, 다른 경로에서 47 반환 | [GitHub](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 정확한 저장소 REST API | 확인불가 | C | 당시 실패 과정은 재현 불가. 이번 정확한 값은 **14,626** |
| Vocode 3.8k | [GitHub](https://github.com/vocodedev/vocode-core) | REST API | 일치 | B | 3,809 |
| Willow 3.1k | [GitHub](https://github.com/HeyWillow/willow) | REST API | 일치 | B | 3,133 |
| Home Assistant 92.0k | [GitHub](https://github.com/home-assistant/core) | REST API | 일치 | B | 92,048 |
| Leon 17.6k | [GitHub](https://github.com/leon-ai/leon) | REST API | 일치 | B | 17,646 |
| OVOS 0.3k | [GitHub](https://github.com/OpenVoiceOS/ovos-core) | REST API | 일치 | B | 300 |
| Jan 45.6k | [GitHub](https://github.com/janhq/jan) | REST API | 일치 | B | 45,561 |
| Moshi 11.5k | [GitHub](https://github.com/kyutai-labs/moshi) | REST API | 일치 | B | 11,451 |
| Raon-Speech 126 | [GitHub](https://github.com/krafton-ai/Raon-Speech) | REST API | 일치 | A | 126 |
| Qwen3-Omni 4.1k | [GitHub](https://github.com/QwenLM/Qwen3-Omni) | REST API | 일치 | B | 4,095 |
| Step-Audio2 1.5k | [GitHub](https://github.com/stepfun-ai/Step-Audio2) | REST API | 일치 | B | 1,527 |
| GLM-4-Voice 3.2k | [GitHub](https://github.com/zai-org/GLM-4-Voice) | REST API | 일치 | B | 3,243 |
| Ultravox 4.6k | [GitHub](https://github.com/fixie-ai/ultravox) | REST API | 일치 | B | 4,585 |
| Freeze-Omni 0.4k | [GitHub](https://github.com/VITA-MLLM/Freeze-Omni) | REST API | 일치 | B | 402 |
| Priler/jarvis 3.0k | [GitHub](https://github.com/Priler/jarvis) | REST API | 일치 | B | 3,011 |
| isair/jarvis 2.2k | [GitHub](https://github.com/isair/jarvis) | REST API | 일치 | B | 2,197 |
| GauravSingh9356/J.A.R.V.I.S 1.5k | [GitHub](https://github.com/GauravSingh9356/J.A.R.V.I.S) | REST API | 일치 | B | 1,459 |
| ethanplusai/jarvis 1.0k | [GitHub](https://github.com/ethanplusai/jarvis) | REST API | 일치 | B | 963 |
| AlexandreSajus/JARVIS 0.5k | [GitHub](https://github.com/AlexandreSajus/JARVIS) | REST API | 일치 | B | 529 |
| projecthub-codingstudio/JARVIS 2 | [GitHub](https://github.com/projecthub-codingstudio/JARVIS) | REST API | 일치 | A | 2 |
| openjarvis-voice 0 | URL 미제시, 저장소명만 기재 | [해당 저장소](https://github.com/yunis8712-prog/openjarvis-voice) REST API | 일치 | A | 0 |

라이선스는 코드와 가중치를 구분해야 합니다. 원문에서 출처를 제시하지 않은 항목은 그렇게 표시하고, 새로 찾은 자료는 확인 방법에 연결했습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Qwen3-TTS Apache-2.0, 상업 이용 가능 | [레포](https://github.com/QwenLM/Qwen3-TTS) | LICENSE 및 [공식 모델카드](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | 일치 | A | 코드와 해당 가중치 모두 Apache-2.0 |
| VoxCPM2 코드·가중치 Apache-2.0 | [레포](https://github.com/OpenBMB/VoxCPM) | README의 라이선스 설명 | 일치 | A | 가중치와 코드 모두 명시 |
| CosyVoice 코드 Apache-2.0 | [레포](https://github.com/FunAudioLLM/CosyVoice) | 이전된 레포 LICENSE | 일치 | A | 현재 QwenAudio 소유 |
| CosyVoice3 가중치 라이선스 미확인 | [레포](https://github.com/FunAudioLLM/CosyVoice) | [0.5B 공식 모델카드](https://huggingface.co/FunAudioLLM/Fun-CosyVoice3-0.5B-2512) | 일치 | A | **미확인 사항 해소:** 공개 0.5B 모델은 Apache-2.0. 1.5B까지 확대 적용할 근거는 별도 필요 |
| Fish 코드·관련 가중치는 Community License | [레포](https://github.com/fishaudio/fish-speech) | [LICENSE](https://github.com/fishaudio/fish-speech/blob/main/LICENSE), README | 일치 | A | S2-Pro 가중치는 별도 예외 |
| Fish 매출 문턱 “이하”만 무료 상업 이용 | [레포](https://github.com/fishaudio/fish-speech) | LICENSE III(a) | 불일치 | A | 정확히는 연 매출 **USD 500,000 미만**. 관계사 합산·직전 12개월 기준 |
| Fish 매출 문턱 금액을 LICENSE에서 찾지 못함 | [레포](https://github.com/fishaudio/fish-speech) | LICENSE III(a) | 불일치 | A | 금액이 본문에 명시됨 |
| Fish 호스팅 서비스는 별도 계약 | [레포](https://github.com/fishaudio/fish-speech) | LICENSE III(c)의 정의·예외 | 일치 | A | 다만 **자체 제품이 생성한 조수 응답 음성**, 완성 음원 납품, 무료 비상업 연구 데모 등은 정의에서 제외 |
| Fish는 한벗 상용 후보에서 반드시 제외해야 함 | [레포](https://github.com/fishaudio/fish-speech) | LICENSE의 조수 응답 예외 대조 | 확인불가 | C | 포괄적 제외 결론은 원문에서 도출되지 않음. 모델·매출·서비스 제공 방식별 판단 필요 |
| S2-Pro 가중치는 Research License | [레포](https://github.com/fishaudio/fish-speech) | [S2-Pro 모델카드](https://huggingface.co/fishaudio/s2-pro) | 일치 | A | 연구·비상업 무료, 상업 이용은 별도 계약 |
| OmniVoice 코드 Apache-2.0, 가중치 CC-BY-NC | [레포](https://github.com/k2-fsa/OmniVoice) | LICENSE 및 [공식 모델카드](https://huggingface.co/k2-fsa/OmniVoice) | 일치 | A | 상업 이용 불가 판단은 공개 가중치 기준 |
| Chatterbox MIT | [레포](https://github.com/resemble-ai/chatterbox) | API·README·[모델카드](https://huggingface.co/ResembleAI/chatterbox) | 일치 | A | 한국어 지원 가중치에도 MIT 표기 |
| Supertonic 코드 MIT, 모델 OpenRAIL-M | [레포](https://github.com/supertone-inc/supertonic) | LICENSE 및 [모델카드](https://huggingface.co/supertone-oss-archive/supertonic-3) | 일치 | A | 모델 사용 제한은 별도로 적용 |
| MOSS-TTSD Apache-2.0 | [레포](https://github.com/OpenMOSS/MOSS-TTSD) | README·API | 일치 | A | 프로젝트 라이선스 표기 확인 |
| GPT-SoVITS MIT | [레포](https://github.com/RVC-Boss/GPT-SoVITS) | README·API | 일치 | A | 코드 기준. 외부 구성요소·가중치까지 일괄 보증하는 근거는 아님 |
| MeloTTS MIT, 상업 이용 가능 | [레포](https://github.com/myshell-ai/MeloTTS) | README License | 일치 | A | 상업·비상업 이용 가능 명시 |
| F5-TTS 코드 MIT, 사전학습 가중치 CC-BY-NC | [레포](https://github.com/SWivid/F5-TTS) | README License | 일치 | A | Emilia 학습 데이터 제약을 이유로 명시 |
| IndexTTS bilibili Model Use License | [레포](https://github.com/index-tts/index-tts) | [LICENSE](https://github.com/index-tts/index-tts/blob/main/LICENSE) | 일치 | A | 별도 허가 기준: 전월 MAU **1억 초과** 또는 전년도 매출 **10억 위안 초과** 등 |
| IndexTTS-KO는 원 IndexTTS-2 약관 상속 | [모델카드](https://huggingface.co/yeowon/index-tts-ko) | License & Derivative Work Notice | 일치 | A | 원 라이선스 파일 포함 |
| Higgs Audio v3 Research & Non-Commercial | [레포](https://github.com/boson-ai/higgs-audio) | README | 일치 | A | 상업·호스팅·매출 발생 용도는 별도 라이선스. 루트 코드 LICENSE는 Apache라 구분 필요 |
| 이전 Higgs Audio v2는 Apache | [레포](https://github.com/boson-ai/higgs-audio) | [v2 가중치 LICENSE](https://huggingface.co/bosonai/higgs-tts-2-3b-base/blob/main/LICENSE) | 불일치 | A | **가중치는 Boson Higgs Audio 2 Community License**. 코드 Apache와 혼동 |
| Dia·Orpheus·CSM·Spark-TTS·Zonos·Kokoro 코드 Apache-2.0 | 각 [Dia](https://github.com/nari-labs/dia), [Orpheus](https://github.com/canopyai/Orpheus-TTS), [CSM](https://github.com/SesameAILabs/csm), [Spark](https://github.com/SparkAudio/Spark-TTS), [Zonos](https://github.com/Zyphra/Zonos), [Kokoro](https://github.com/hexgrad/kokoro) | 각 API·README | 일치 | A | 코드 라이선스 기준. Kokoro는 README에서 가중치 Apache도 명시 |
| XTTS v2 모델 CPML, 비상업 | [idiap 포크](https://github.com/idiap/coqui-ai-TTS) | [공식 모델 LICENSE](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) | 일치 | A | CPML 1.0.0. 포크와 원본 **코드**는 MPL-2.0 |
| Pipecat BSD-2 | [레포](https://github.com/pipecat-ai/pipecat) | API·소스 헤더 | 일치 | A | BSD-2-Clause |
| LiveKit 코드 Apache-2.0, 턴 모델 별도 | [레포](https://github.com/livekit/agents) | LICENSE 및 [턴 모델카드](https://huggingface.co/livekit/turn-detector) | 일치 | A | 턴 모델은 LiveKit Model License |
| TEN Apache-2.0 + 추가 조건 | [레포](https://github.com/TEN-framework/ten-framework) | [LICENSE](https://github.com/TEN-framework/ten-framework/blob/main/LICENSE) | 일치 | A | 최종 사용자 기기 호스팅·Agora 경쟁 배포 등에 추가 제한 |
| Unmute·Vocode·Leon MIT | [Unmute](https://github.com/kyutai-labs/unmute), [Vocode](https://github.com/vocodedev/vocode-core), [Leon](https://github.com/leon-ai/leon) | 각 API·README | 일치 | A | 코드 기준 |
| Open-LLM-VTuber MIT, Live2D 샘플 별도 | [레포](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | LICENSE | 일치 | A | API는 NOASSERTION이어도 LICENSE 본문은 MIT |
| Willow·Home Assistant·OVOS Apache-2.0 | [Willow](https://github.com/HeyWillow/willow), [Home Assistant](https://github.com/home-assistant/core), [OVOS](https://github.com/OpenVoiceOS/ovos-core) | 각 REST API | 일치 | A | 저장소 코드 기준 |
| Moshi Python MIT·Rust Apache, 가중치 CC-BY 4.0 | [레포](https://github.com/kyutai-labs/moshi) | README License | 일치 | A | 명시적으로 구분 |
| Raon 레포 Apache-2.0, 모델카드 재확인 필요 | [레포](https://github.com/krafton-ai/Raon-Speech) | LICENSE 및 [Speech](https://huggingface.co/KRAFTON/Raon-Speech-9B), [SpeechChat](https://huggingface.co/KRAFTON/Raon-SpeechChat-9B) 모델카드 | 일치 | A | **미확인 사항 해소:** 두 공개 모델카드 모두 CC-BY-NC-4.0 |
| Qwen3-Omni·Step-Audio2 코드 Apache-2.0 | [Qwen](https://github.com/QwenLM/Qwen3-Omni), [Step](https://github.com/stepfun-ai/Step-Audio2) | 각 API·README | 일치 | A | 코드 기준 |
| GLM-4-Voice 라이선스 Apache-2.0 | [레포](https://github.com/zai-org/GLM-4-Voice) | README와 [모델 LICENSE](https://huggingface.co/zai-org/glm-4-voice-9b/blob/main/LICENSE) | 불일치 | A | **코드만 Apache**. 가중치는 별도 GLM 약관이며 상업 이용 등록 조건 존재 |
| Ultravox MIT | [레포](https://github.com/fixie-ai/ultravox) | REST API | 일치 | A | 코드 기준. 기반 LLM 조건은 별도 |
| Jan·Freeze-Omni·isair/jarvis·ethanplusai/jarvis API NOASSERTION | 각 기재 저장소 | REST `license.spdx_id` | 일치 | A | NOASSERTION은 ‘라이선스 없음’ 또는 ‘상업 가능’을 뜻하지 않음 |
| Priler/jarvis CC BY-NC-SA 4.0 | [레포](https://github.com/Priler/jarvis) | LICENSE.txt | 일치 | A | 비상업 조건 확인 |
| Gaurav JARVIS·projecthub JARVIS·openjarvis-voice MIT | 각 기재 저장소 | API·README | 일치 | A | 코드 기준 |
| AlexandreSajus/JARVIS GPL-3.0 | [레포](https://github.com/AlexandreSajus/JARVIS) | REST API | 일치 | A | GPL-3.0 |

다음은 TTS의 수치·지원 기능·직접 인용입니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Qwen3-TTS 0.6B·1.7B 변형 존재 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README 모델 표 | 일치 | A | 공개 표에 기재 |
| 한국어 포함 10개 언어 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README 언어 목록 | 일치 | A | 한국어 공식 지원 |
| Sohee는 한국어 여성 화자이며 감정이 풍부하다는 설명 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README 화자 표 | 일치 | A | “Warm Korean female voice with rich emotion.” 문구 일치 |
| 자연어 instruct로 감정·운율, VoiceDesign 지원 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README 모델 표·예제 | 일치 | A | **1.7B CustomVoice·VoiceDesign**에서 명시 |
| Base·CustomVoice·VoiceDesign의 모든 크기가 instruct 지원 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README Instruction Control 열 | 불일치 | A | Base와 0.6B CustomVoice에는 지원 체크가 없음. 0.6B VoiceDesign도 공개 표에 없음 |
| 모든 공개 변형 스트리밍 지원 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README Streaming 열 | 일치 | A | 공개 표의 5개 모델 모두 체크 |
| 한 글자 입력 뒤 첫 패킷, 최소 97ms | [레포](https://github.com/QwenLM/Qwen3-TTS) | README 스트리밍 설명 | 일치 | A | 제작사 주장. 전체 STT→LLM→TTS 지연으로 해석하면 안 됨 |
| 3초 참조 음성 복제 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README Base 모델 설명 | 일치 | A | **Base 모델 기능**이며 CustomVoice의 화자 선택과 구분 |
| vLLM-Omni day-0 지원 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README vLLM Usage | 일치 | A | 같은 문서에 당시 지원 범위를 오프라인 추론으로 제한한 설명도 있음 |
| Qwen 비언어 태그·한국어 감정 효과 미확인 | [레포](https://github.com/QwenLM/Qwen3-TTS) | README·예제 대조 | 확인불가 | C | 태그 부재나 한국어 효과를 실험으로 입증한 것은 아님 |
| VoxCPM2 2B, 200만 시간 학습 | [레포](https://github.com/OpenBMB/VoxCPM) | README 개요 | 일치 | A | 정확한 표현은 **200만 시간 초과** |
| VoxCPM2 30개 언어·한국어·48kHz | [레포](https://github.com/OpenBMB/VoxCPM) | README 사양·언어 목록 | 일치 | A | 명시됨 |
| VoxCPM2 한국어 CER 0.95% | [레포](https://github.com/OpenBMB/VoxCPM) | 내부 30개 언어 ASR 평가 표 | 일치 | A | 언어당 500개 표본, Gemini 3.1 Flash Lite 전사 평가. 같은 표 Fish S2-Pro는 **0.29%** |
| 0.95% 표의 비교 대상 열이 불명확 | [레포](https://github.com/OpenBMB/VoxCPM) | 표 머리글 확인 | 불일치 | A | 열은 **VoxCPM2 / Fish S2-Pro**로 명확함 |
| CV3-Eval에서 VoxCPM2 한국어 CER 5.69% | [레포](https://github.com/OpenBMB/VoxCPM) | CV3-Eval 표 | 일치 | A | 0.95%와는 **다른 평가셋·평가 절차** |
| 같은 표 CosyVoice3-1.5B 5.69%, Fish S2 2.76% | [레포](https://github.com/OpenBMB/VoxCPM) | CV3-Eval 표 | 일치 | B | 숫자는 일치. 다른 제작사가 재게시한 비교값이라는 한계 |
| VoxCPM2 RTF 0.13~0.3, RTX 4090 | [레포](https://github.com/OpenBMB/VoxCPM) | 추론 사양·배포 설명 | 일치 | B | PyTorch 약 0.30, Nano-vLLM 약 0.13. 근사 보고값 |
| 참조 음성+스타일 지시, 목소리 디자인·복제 | [레포](https://github.com/OpenBMB/VoxCPM) | README 기능·API 예제 | 일치 | A | 감정·속도·표현 조정 설명 존재 |
| `generate_streaming` API | [레포](https://github.com/OpenBMB/VoxCPM) | README 예제 | 일치 | A | 코드 예제 확인 |
| VoxCPM2 첫 청크 지연 미보고 | [레포](https://github.com/OpenBMB/VoxCPM) | README 지연·RTF 설명 검색 | 일치 | A | 확인한 문서에서는 첫 청크 수치 없이 RTF 제시 |
| 2B이므로 GPU가 반드시 필요 | [레포](https://github.com/OpenBMB/VoxCPM) | 배포 경로 대조 | 확인불가 | C | 실시간 목표·양자화·기기 조건이 빠진 단정. GGUF·Apple 경로도 문서화 |
| VoxCPM2 생성 편차가 큼 | 선행 노트 | 선행 노트·샘플 존재 확인 | 확인불가 | C | 반복 생성 조건·분산 측정 없음 |
| CosyVoice3 한국어 포함 9개 언어·중국어 18+ 방언 | [레포](https://github.com/FunAudioLLM/CosyVoice) | 현재 README·공식 모델카드 | 일치 | A | 언어 목록과 개수 일치 |
| 양방향 스트리밍 최소 150ms | [레포](https://github.com/FunAudioLLM/CosyVoice) | README Bi-Streaming | 일치 | A | 제작사 보고. 한국어 실측 아님 |
| instruct로 감정·속도·볼륨, 제로샷 복제 | [레포](https://github.com/FunAudioLLM/CosyVoice) | README Key Features | 일치 | A | 명시됨 |
| CosyVoice3 0.5B·1.5B 모델 존재 | [레포](https://github.com/FunAudioLLM/CosyVoice) | [공식 논문](https://arxiv.org/html/2505.17589) | 일치 | A | 논문에서 두 크기 평가 |
| 두 크기를 모두 공개 가중치로 바로 시험 가능 | [레포](https://github.com/FunAudioLLM/CosyVoice) | 공개 다운로드 목록·모델카드 확인 | 확인불가 | C | 0.5B 공개는 확인. 동일한 공식 1.5B 다운로드는 확인하지 못함 |
| CosyVoice3 한국어 스트리밍 CER 9.06% | Wiki라고만 기재, URL 없음 | [CosyVoice2 논문 표 9](https://arxiv.org/html/2412.10117v3) | 불일치 | A | **9.06%는 CosyVoice2-S**. CosyVoice3 수치로 인용하면 오류 |
| CosyVoice2 한국어 CER 19.7 → CosyVoice3-1.5B 5.69 | VoxCPM README | [CosyVoice3 원논문 표 5](https://arxiv.org/html/2505.17589) | 일치 | A | CV3-Eval 다국어 복제 평가. 위 9.06% 평가와 별개 |
| CosyVoice3의 한국어 CER이 VoxCPM2보다 높음 | [레포](https://github.com/OpenBMB/VoxCPM) | 동일 CV3-Eval 표 비교 | 불일치 | A | **1.5B 기준 둘 다 5.69%**. 서로 다른 평가의 9.06·0.95를 비교하면 안 됨 |
| CosyVoice 비언어 태그는 미확인 | [레포](https://github.com/FunAudioLLM/CosyVoice) | 현재 `example.py` 확인 | 확인불가 | C | 일반 기능은 `[laughter]`·`[breath]` 예제가 있음. 한국어 효과는 여전히 미검증 |
| Fish `[whisper]`·`[angry]`·`[laughing]` 인라인 태그 | [레포](https://github.com/fishaudio/fish-speech) | README Drama 3 | 일치 | A | 명시됨 |
| 직전 테이크를 자연어로 수정하는 다회 수정 | [레포](https://github.com/fishaudio/fish-speech) | README 비교 표 | 일치 | A | **Drama 3 기능**. S2-Pro는 해당 표에서 미지원 |
| Fish 웃음·울음·속삭임 표현 | [레포](https://github.com/fishaudio/fish-speech) | README 기능 설명 | 일치 | A | 기능에 대한 제작사 설명 확인 |
| Fish가 한국어 표현력·태그에서 가장 풍부함 | [레포](https://github.com/fishaudio/fish-speech) | 비교 평가 근거 탐색 | 확인불가 | C | 한국어 조건의 공통 청취평가나 태그 수 비교 없음 |
| Fish 한국어 CER 2.76으로 최상위 | [VoxCPM](https://github.com/OpenBMB/VoxCPM) | CV3-Eval 비교 표 | 일치 | B | **그 표의 비교 대상 내** 최저값. 전체 모델 최상위라는 증거는 아님 |
| Fish 약 100ms, H200 | [레포](https://github.com/fishaudio/fish-speech) | README S2-Pro 설명 | 일치 | B | 약 100ms 첫 오디오, RTF 0.195. Drama 3 수치로 이전하면 안 됨 |
| OmniVoice 600+ 언어, 한국어 포함 | [레포](https://github.com/k2-fsa/OmniVoice) | README·공식 모델카드 언어 목록 | 일치 | A | `ko` 포함 |
| OmniVoice RTF 0.025 | [레포](https://github.com/k2-fsa/OmniVoice) | README Key Features | 일치 | A | 최소 보고값. 첫 청크 지연이 아님 |
| OmniVoice 목소리 디자인·복제·`[laughter]`·`[sigh]` | [레포](https://github.com/k2-fsa/OmniVoice) | README API·태그 목록 | 일치 | A | 명시됨 |
| OmniVoice 디자인·태그가 한국어에서도 검증됨 | [레포](https://github.com/k2-fsa/OmniVoice) | 언어별 검증 자료 확인 | 확인불가 | C | 디자인 학습은 중국어·영어라고 명시. 한국어 일반화 품질은 별도 문제 |
| Chatterbox Multilingual V3 0.5B·23개 언어·한국어 | [레포](https://github.com/resemble-ai/chatterbox) | README 모델 표·언어 목록 | 일치 | A | 목록 23개, 모델 500M |
| Chatterbox 2026년 8월 retired·유지보수 중단 문구 | [레포](https://github.com/resemble-ai/chatterbox) | README 상단 공지 | 일치 | A | 공지 확인. GitHub `archived`는 false이므로 저장소 아카이브와는 구분 |
| Chatterbox Turbo만 비언어 태그 지원 | [레포](https://github.com/resemble-ai/chatterbox) | README Turbo·Nano 표 | 불일치 | A | **Nano도 지원**. Turbo와 Nano 모두 영어 모델 |
| Turbo의 웃음·기침 태그가 한국어 Multilingual에 적용됨 | [레포](https://github.com/resemble-ai/chatterbox) | 모델별 기능 표 | 확인불가 | C | Multilingual에 대한 동일 기능 보증 없음 |
| Chatterbox sub-200ms는 호스팅 서비스 설명 | [레포](https://github.com/resemble-ai/chatterbox) | README 해당 문단 | 일치 | A | 로컬 Multilingual 모델의 실측값으로 쓸 수 없음 |
| Supertonic3 한국어 포함 31개 언어·99M | [레포](https://github.com/supertone-inc/supertonic) | 이전된 README | 일치 | A | 명시됨 |
| Supertonic 표현 태그 10개, `<laugh>`·`<breath>`·`<sigh>` | [레포](https://github.com/supertone-inc/supertonic) | README Key Features | 일치 | A | 개수·예시 모두 일치 |
| Supertonic CPU·온디바이스 실행 | [레포](https://github.com/supertone-inc/supertonic) | README ONNX·CPU 설명 | 일치 | A | GPU 불필요한 고정 화자 실행 경로 명시 |
| Supertonic archived, 개발·지원 종료 | [레포](https://github.com/supertone-inc/supertonic) | REST `archived`·README 공지 | 일치 | A | `archived=true`, 종료 공지 확인 |
| Supertonic 호스팅 기능이 Play/API로 이동 | [레포](https://github.com/supertone-inc/supertonic) | README 뉴스·공지 | 일치 | A | Play/API 지원 안내 존재. 현재 아카이브는 호스팅 데모·Voice Builder를 제공하지 않는다고 설명 |
| Supertonic 한국어 비언어 태그가 자연스러움 | [레포](https://github.com/supertone-inc/supertonic) | 한국어 태그 청취평가 확인 | 확인불가 | C | 언어 지원과 태그 존재만으로 입증되지 않음 |
| MOSS-TTSD 한국어·음성 복제·v0.5 스트리밍 | [레포](https://github.com/OpenMOSS/MOSS-TTSD) | README 언어 표·뉴스 | 일치 | A | v0.5 스트리밍 지원은 2025-08-12 뉴스에 명시 |
| MOSS-TTSD는 2화자 중심이므로 단일 화자에 부적합 | [레포](https://github.com/OpenMOSS/MOSS-TTSD) | 현재 v1.0 설명 | 확인불가 | C | 현재는 다자 대화를 지원. 단일 화자 부적합은 비교 검증 없는 판단 |
| MOSS-TTS-Realtime은 대화 이력·사용자 음향 조건 사용 | MOSS-TTSD README | README의 제품군 설명 | 일치 | A | 문서 설명은 확인. 별도 모델의 성능 검증은 아님 |
| GPT-SoVITS 1분 학습·5초 제로샷 | [레포](https://github.com/RVC-Boss/GPT-SoVITS) | README Features | 일치 | A | **1분은 학습 데이터 길이**, 5초는 참조 음성 길이. 학습 완료 시간이 아님 |
| GPT-SoVITS 영·일·한·광동·중 지원 | [레포](https://github.com/RVC-Boss/GPT-SoVITS) | README 언어 설명 | 일치 | A | 5개 언어 일치 |
| GPT-SoVITS 감정·스트리밍이 약함, 한국어 자료가 많음 | [레포](https://github.com/RVC-Boss/GPT-SoVITS) | 정량 비교 근거 확인 | 확인불가 | C | 상대적 약함·자료량을 뒷받침하는 기준 미제시 |
| MeloTTS 한국어·CPU 실시간 | [레포](https://github.com/myshell-ai/MeloTTS) | README 언어 표·Features | 일치 | A | 명시됨 |
| MeloTTS가 읽기체이며 자연스러움 기준선 | [레포](https://github.com/myshell-ai/MeloTTS) | 공통 청취평가 확인 | 확인불가 | C | 조사자의 평가·실험 용도 제안 |
| F5-TTS 기본 모델 영·중, 한국어는 커뮤니티 미세조정 필요 | [레포](https://github.com/SWivid/F5-TTS) | README·공식 비교 논문 | 일치 | B | 기본 모델 영·중은 확인. 사용할 한국어 체크포인트는 미특정 |
| IndexTTS2.5 공식 언어 중·영·일·스·아랍어, 한국어 없음 | [레포](https://github.com/index-tts/index-tts) | README 개요 | 일치 | A | 2.5 기준 5개 언어 |
| IndexTTS 감정 참조와 음색 분리·복제 | [레포](https://github.com/index-tts/index-tts) | README 기능·추론 예제 | 일치 | A | 분리된 감정 참조 입력 제공 |
| `duration_factor` 0.5~2.0 | [레포](https://github.com/index-tts/index-tts) | README 속도 제어 | 일치 | A | **길이 배율**. 1.2는 느리게, 0.8은 빠르게 하는 예제 |
| IndexTTS-KO 좋아요 3 | [모델카드](https://huggingface.co/yeowon/index-tts-ko) | 모델 페이지 | 일치 | A | 이번 조회에서도 3 |
| IndexTTS-KO 180,100 step·Emilia-YODAS 한국어 | [모델카드](https://huggingface.co/yeowon/index-tts-ko) | 학습·아티팩트 설명 | 일치 | A | `emilia-yodas/KO_preprocessed`와 step 명시 |
| IndexTTS-KO 정식 MOS/CER 평가 미주장 | [모델카드](https://huggingface.co/yeowon/index-tts-ko) | Verification Scope | 일치 | A | 소규모 smoke test와 정식 품질 평가를 구분 |
| Higgs v3 복제·스트리밍 지원 | [레포](https://github.com/boson-ai/higgs-audio) | README API 설명 | 일치 | A | 명시됨. 첫 청크 수치는 확인되지 않음 |
| Dia 영어 전용 | [레포](https://github.com/nari-labs/dia) | README | 일치 | A | 영어 생성만 지원한다고 **명시**. 영어 예제만 보고 추론할 필요 없음 |
| Dia 비언어 태그 20여 종 | [레포](https://github.com/nari-labs/dia) | README 목록 계수 | 일치 | B | 목록은 **21개** |
| Dia `(laughs)`·`(sighs)`·`(inhales)`, 참조 음성 조건 | [레포](https://github.com/nari-labs/dia) | README 태그·설명 | 일치 | A | 명시됨 |
| Orpheus 약 200ms, 입력 스트리밍 시 약 100ms | [레포](https://github.com/canopyai/Orpheus-TTS) | README Low Latency | 일치 | B | 근사 제작사 보고값 |
| Orpheus 영어 중심·다국어 연구 프리뷰·감정 태그 | [레포](https://github.com/canopyai/Orpheus-TTS) | README 뉴스·태그 목록 | 일치 | A | 다국어 태그는 별도 문서 안내 |
| Orpheus 음성 복제가 제한적 | [레포](https://github.com/canopyai/Orpheus-TTS) | README 복제 설명 | 일치 | B | 제로샷 복제는 표방하나, 사전학습 모델이 해당 목적에 명시적으로 학습되지는 않았다는 설명 존재 |
| CSM은 Llama 백본, 텍스트+오디오 대화 맥락 입력 | [레포](https://github.com/SesameAILabs/csm) | README 구조·context 예제 | 일치 | A | 이전 화자 발화별 `Segment` 입력 |
| CSM 영어 전용 | [레포](https://github.com/SesameAILabs/csm) | README FAQ | 일치 | B | 엄밀히는 비영어 능력이 일부 있으나 성능이 좋지 않을 것으로 설명 |
| Spark-TTS 중·영·복제·피치·속도 제어 | [레포](https://github.com/SparkAudio/Spark-TTS) | README Features | 일치 | A | 공식 이중언어 지원 |
| Zonos 감정 4종·속도·피치·복제 | [레포](https://github.com/Zyphra/Zonos) | README Features | 일치 | A | 기쁨·분노·슬픔·공포 예시 일치 |
| Zonos는 영어 중심, 한국어 미확인 | [레포](https://github.com/Zyphra/Zonos) | README 지원 목록 | 일치 | B | 지원 목록은 **영·일·중·프·독 5개**. `en-us` 예제만으로 영어 전용이라 할 수 없음 |
| Kokoro 82M, README 언어 목록에 한국어 없음 | [레포](https://github.com/hexgrad/kokoro) | README 모델 설명·언어 코드 | 일치 | A | 두 주장 모두 확인 |
| XTTS v2 한국어 지원은 미확인 | [레포](https://github.com/idiap/coqui-ai-TTS) | [공식 모델카드](https://huggingface.co/coqui/XTTS-v2) | 일치 | A | **미확인 사항 해소:** 17개 언어에 Korean `ko` 명시 |
| XTTS v2 지연 미보고 | [레포](https://github.com/idiap/coqui-ai-TTS) | 포크·원본 README | 불일치 | A | README에 스트리밍 **200ms 미만** 주장 존재 |
| 여러 모델의 감정·비언어·복제 기능이 “없음” | 각 모델 레포 | README 기능 목록 대조 | 확인불가 | C | GPT-SoVITS·MeloTTS·F5·Index·Spark·Zonos·Kokoro 등의 ‘없음’은 구현 부재를 입증하지 못함. ‘문서에서 확인 못 함’으로 수정 권장 |
| §13~19 모델은 모두 한국어 불가 | 각 모델 레포 | 언어 목록·모델 버전 대조 | 확인불가 | C | 명시적 미지원과 미확인을 혼합함. CSM의 제한적 비영어 능력 등도 구분 필요 |

프레임워크·S2S·JARVIS의 구조와 인용 주장은 다음과 같습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Pipecat은 STT·LLM·TTS 파이프라인 프레임워크 | [레포](https://github.com/pipecat-ai/pipecat) | README | 일치 | A | 서비스·전송·대화 처리 조합 제공 |
| `MinWordsUserTurnStartStrategy`로 끼어들기 제어 | 선행 노트·[레포](https://github.com/pipecat-ai/pipecat) | [공식 소스](https://github.com/pipecat-ai/pipecat/blob/main/src/pipecat/turns/user_start/min_words_user_turn_start_strategy.py) | 일치 | A | 전사된 최소 단어 수로 사용자 턴 시작 결정 |
| Pipecat 백채널·필러 기본 제공 없음 | [레포](https://github.com/pipecat-ai/pipecat) | README·턴 관리 문서 확인 | 확인불가 | C | README에 없다는 사실만으로 전체 기능 부재를 확정할 수 없음 |
| 한벗이 Pipecat을 이미 채택 | 선행 노트 | 로컬 선행 노트 확인 | 확인불가 | C | 설계 문서에는 기재. 실제 코드 통합·운영 여부는 이번 검증 범위에서 확인하지 않음 |
| LiveKit 캐스케이드+실시간 모델, 시맨틱 턴 감지 | [레포](https://github.com/livekit/agents) | README | 일치 | A | STT·LLM·TTS 또는 realtime 모델 조합 설명 |
| LiveKit 시나리오 테스트 프레임워크 | [레포](https://github.com/livekit/agents) | README Builtin test framework | 일치 | A | 테스트·judge 제공 설명 |
| LiveKit 한국어 미확인 | [레포](https://github.com/livekit/agents) | [공식 턴 모델카드](https://huggingface.co/livekit/turn-detector) | 일치 | A | **턴 모델의 `ko` 지원은 확인됨**. 전체 STT/TTS 지원은 선택한 플러그인별 확인 필요 |
| TEN 캐스케이드·VAD·턴 감지 | [레포](https://github.com/TEN-framework/ten-framework) | README 예제·구성요소 | 일치 | A | 연결 가능한 구성요소 확인 |
| TEN Turn Detection은 풀듀플렉스 대화용 | [레포](https://github.com/TEN-framework/ten-framework) | [공식 턴 감지 README](https://github.com/TEN-framework/ten-turn-detection) | 일치 | A | 제품 설명 확인. 음향적 동시 청취·발화 성능 자체의 검증은 아님 |
| TEN 한국어 턴 감지 미확인 | [레포](https://github.com/TEN-framework/ten-framework) | 턴 감지 README 언어 목록 | 확인불가 | C | 해당 문서는 영어·중국어 지원을 명시. 한국어 보증 없음 |
| Unmute Kyutai STT/TTS+임의 텍스트 LLM | [레포](https://github.com/kyutai-labs/unmute) | README 구조 설명 | 일치 | A | 임의 텍스트 LLM 사용 가능 명시 |
| Unmute TTS 지연 L40S 단일 GPU 약 750ms, 분산 약 450ms | [레포](https://github.com/kyutai-labs/unmute) | README 배포 설명 | 일치 | B | 450ms는 Unmute.sh 구성 설명. 임의 분산 구성의 보장값은 아님 |
| Unmute 끼어들기 지원 | [레포](https://github.com/kyutai-labs/unmute) | 대화·스트리밍 설계 확인 | 일치 | B | 한국어 조건·중단 반응시간은 별도 미검증 |
| Open-LLM-VTuber 오프라인·헤드폰 없는 끼어들기·먼저 말 걸기 | [레포](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | README 기능 목록 | 일치 | A | 세 기능 모두 명시 |
| 감정→Live2D 표정 매핑, FunASR·Melo·Cosy·Fish·Claude 연동 | [레포](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | README 지원 목록 | 일치 | A | 목록 확인. 실제 한벗 구성에서의 동작 검증은 아님 |
| Open-LLM-VTuber 속마음 표시 | [레포](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | README 기능 대조 | 확인불가 | C | 이번 확인 자료로 해당 기능을 확정하지 못함 |
| Vocode 캐스케이드·끼어들기 지원 | [레포](https://github.com/vocodedev/vocode-core) | README 대화 처리 설명 | 일치 | A | 프레임워크 기능으로 확인 |
| Willow ESP32 하드웨어 비서+서버 | [레포](https://github.com/HeyWillow/willow) | 짧은 README·Inference Server 안내 | 일치 | B | 서버의 STT/TTS/LLM은 확인. ESP32 세부 구조는 링크 문서 추가 확인 필요 |
| Home Assistant는 스마트홈 플랫폼·Assist 사용 | [레포](https://github.com/home-assistant/core) | README.rst | 일치 | B | 스마트홈 성격 확인. 다국어 음성 기능 전체는 이 README만으로 검증되지 않음 |
| Leon은 로컬 개인 비서 | [레포](https://github.com/leon-ai/leon) | README | 일치 | A | 현재 develop은 2.0 Developer Preview이며 로컬 실행 가능 설명 |
| OVOS는 Mycroft 호환 스킬 구조 | [레포](https://github.com/OpenVoiceOS/ovos-core) | README | 일치 | A | 기존 Mycroft 스킬 대부분의 호환 설명 |
| Jan은 로컬 LLM 앱 | [레포](https://github.com/janhq/jan) | README | 일치 | A | 음성 전용 프레임워크라는 설명은 아님 |
| Moshi 풀듀플렉스, 이론 160ms·L4 약 200ms | [레포](https://github.com/kyutai-labs/moshi) | README 구조·지연 설명 | 일치 | A | 160ms=프레임 80ms+음향 지연 80ms. 200ms는 최저 수준의 실용 지연 주장 |
| Moshi의 LLM을 Claude로 단순 교체할 수 없음 | [레포](https://github.com/kyutai-labs/moshi) | 통합 모델 구조 대조 | 일치 | B | 구조상 타당한 추론. 모든 재설계 가능성을 배제하는 뜻은 아님 |
| Raon-Speech 9B 영·한 이중언어 | [레포](https://github.com/krafton-ai/Raon-Speech) | README·Speech 모델카드 | 일치 | A | **기반 Raon-Speech**에 해당 |
| 한국어 벤치마크 3종 공개 | [레포](https://github.com/krafton-ai/Raon-Speech) | README Open Release | 일치 | A | KVoiceBench·KOpenAudioBench·KMMAU |
| Raon 단일 GPU 스트리밍 TTS 첫 토큰 1초 미만 | [레포](https://github.com/krafton-ai/Raon-Speech) | README 성능 표 | 일치 | A | RTX 6000 Pro 617ms, L40S 887ms. LibriSpeech test-clean 평균 |
| Raon-SpeechChat 풀듀플렉스·백채널·끼어들기 | [레포](https://github.com/krafton-ai/Raon-Speech) | [SpeechChat 모델카드](https://huggingface.co/KRAFTON/Raon-SpeechChat-9B) | 일치 | A | 전용 백채널 토큰·빈도 조절 등 명시 |
| Raon-SpeechChat은 한국어 풀듀플렉스 후보 | [레포](https://github.com/krafton-ai/Raon-Speech) | SpeechChat 모델카드의 언어 설명 | 불일치 | A | 카드에는 **영어 대화**라고 명시. 영·한 기반 모델과 혼동한 것으로 보임 |
| Raon이 한국어 풀듀플렉스 “유일 후보”, 백채널도 Raon만 한국어 | [레포](https://github.com/krafton-ai/Raon-Speech) | 모델별 언어·기능 범위 대조 | 확인불가 | C | 한국어 SpeechChat 지원부터 입증되지 않으며 유일성 조사도 불충분 |
| Qwen3-Omni 음성 입력·출력 모두 한국어 | [레포](https://github.com/QwenLM/Qwen3-Omni) | README 언어 목록 | 일치 | A | 두 목록 모두 Korean 포함 |
| Qwen3-Omni 저지연 스트리밍·자연스러운 턴테이킹 표방 | [레포](https://github.com/QwenLM/Qwen3-Omni) | README | 일치 | A | 기능 주장 확인. 한국어 실시간 성능 측정은 아님 |
| Qwen3-Omni는 크며 LLM 교체 불가 | [레포](https://github.com/QwenLM/Qwen3-Omni) | 모델·Thinker–Talker 구조 | 일치 | B | 공개 주력은 30B-A3B 계열. Claude 단순 교체는 지원 경로가 아님 |
| Qwen3-Omni와 Qwen2.5-Omni의 별이 4,095로 같아 리다이렉트 추정 | [Qwen3-Omni](https://github.com/QwenLM/Qwen3-Omni) | 두 저장소 REST ID·이름 비교 | 불일치 | A | 별 수는 우연히 같음. ID는 **1061125458 / 952842018**로 서로 다른 저장소 |
| Step-Audio2는 음성 대화 모델, 중·영 중심 | [레포](https://github.com/stepfun-ai/Step-Audio2) | README | 일치 | B | 한국어 지원은 확인 못 함. ‘한국어 불가’ 확정 근거는 아님 |
| GLM-4-Voice 중·영 | [레포](https://github.com/zai-org/GLM-4-Voice) | README | 일치 | A | 중국어·영어 음성 대화 설명 |
| Ultravox를 S2S 모델 표에 배치 | [레포](https://github.com/fixie-ai/ultravox) | README 입출력 설명 | 불일치 | A | 공개 모델은 **음성 입력→스트리밍 텍스트 출력**. 음성 출력은 별도 TTS 필요 |
| Freeze-Omni 스트리밍 입력·출력 및 끼어들기 상태 처리 | [레포](https://github.com/VITA-MLLM/Freeze-Omni) | README 구조 설명 | 일치 | A | 음성 인코더·디코더·상태 예측 명시 |
| Freeze-Omni 중·영 추정 | [레포](https://github.com/VITA-MLLM/Freeze-Omni) | 명시적 언어 범위 확인 | 확인불가 | C | 노트의 C 유지 |
| Priler/jarvis Rust·오프라인·웨이크워드·STT 중심 | [레포](https://github.com/Priler/jarvis) | README | 일치 | A | 현재 지원 언어는 러시아어라고 명시 |
| isair/jarvis Whisper·Ollama·일기·지식그래프·민감정보 마스킹 | [레포](https://github.com/isair/jarvis) | README | 일치 | A | 모두 문서화. 기억을 활용하는 음성·텍스트 대화 기능도 있음 |
| Gaurav JARVIS 파이썬 명령 실행형 | [레포](https://github.com/GauravSingh9356/J.A.R.V.I.S) | README 의존성·기능 | 일치 | A | 음성 명령·웹·이메일·음악 등 |
| ethanplusai/jarvis 영국 집사 페르소나·Claude Code 프로세스 | [레포](https://github.com/ethanplusai/jarvis) | README | 일치 | A | 두 설명 모두 명시 |
| Alexandre JARVIS Voice→Text→LLM→Speech 웹 UI | [레포](https://github.com/AlexandreSajus/JARVIS) | README 처리 순서 | 일치 | A | Deepgram→GPT API→ElevenLabs→웹 표시 |
| projecthub JARVIS 한국어 우선·macOS 로컬 | [레포](https://github.com/projecthub-codingstudio/JARVIS) | README 구성·실행 환경 | 일치 | B | 한국어 검색 처리·Apple Silicon·로컬 STT/TTS 확인. ‘한국어 우선’은 요약 표현 |
| openjarvis-voice 한국어 브라우저 비서·Ollama | URL 미제시 | [README](https://github.com/yunis8712-prog/openjarvis-voice) | 일치 | A | 한국어 Edge TTS·브라우저 UI·Ollama 명시 |
| 별 2·0이므로 실적 없음·장난감 수준 | 해당 저장소명 | 별 수와 평가 근거 구분 | 확인불가 | C | 별 수는 품질·실사용 실적을 증명하지 않음 |
| JARVIS 상위 레포 대부분 명령 실행형, 대화 품질을 다루는 것은 없음 | 검색어만 제시 | 위 README 비교 | 확인불가 | C | 검색 순위·범위 기록 없음. isair 등은 대화·기억을 명시하므로 일반화 축소 필요 |

활동 시점과 유지보수 상태도 구분했습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| MeloTTS 2024-12 이후 정체 | [레포](https://github.com/myshell-ai/MeloTTS) | REST `pushed_at` | 일치 | A | 2024-12-24. ‘마지막 push’는 확인되나 개발 종료 선언은 아님 |
| Zonos 2025-03 이후 정체 | [레포](https://github.com/Zyphra/Zonos) | REST API | 일치 | A | 2025-03-05. 해당 **v0.1 저장소** 기준 |
| Vocode 2024-11 이후 정체 | [레포](https://github.com/vocodedev/vocode-core) | REST API | 일치 | A | 2024-11-15 |
| GLM-4-Voice 2024-12 이후 정체 | [레포](https://github.com/zai-org/GLM-4-Voice) | REST API | 일치 | A | 2024-12-05 |
| Freeze-Omni 2025-05 이후 정체 | [레포](https://github.com/VITA-MLLM/Freeze-Omni) | REST API | 일치 | A | 2025-05-27 |
| 원본 Coqui TTS 2024-08 중단 | [레포](https://github.com/coqui-ai/TTS) | REST API | 확인불가 | C | 마지막 push는 2024-08-16. 이것만으로 공식 중단을 확정할 수 없음 |
| Alexandre JARVIS 2024-06 | [레포](https://github.com/AlexandreSajus/JARVIS) | REST API | 일치 | A | 마지막 push 2024-06-09 |
| Expressive-FastSpeech2 마지막 업데이트 2021-08 | [레포](https://github.com/keonlee9420/Expressive-FastSpeech2) | REST API | 일치 | A | 마지막 push 2021-08-25 |
| 모든 별·라이선스·push를 11월 8일 API로 조사하고 raw README를 열람함 | 조사 과정 자체 주장 | 실행 로그·응답 스냅숏 확인 | 확인불가 | C | 이번 조회의 재현성은 높지만 저자의 실제 조사 절차까지 증명하지는 못함 |

한국어 감정 TTS·논문·데이터 관련 주장은 다음과 같습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Expressive-FastSpeech2는 AI Hub 멀티모달 영상 데이터로 한국어 감정 TTS | [레포](https://github.com/keonlee9420/Expressive-FastSpeech2) | README | 일치 | A | 한국어 AIHub·영어 IEMOCAP 구분 명시 |
| 구형 구조여서 자연스러움이 낮을 것으로 예상 | 같은 레포 | 비교 청취·MOS 자료 확인 | 확인불가 | C | 연식만으로 품질 우열을 확정할 수 없음 |
| Selvas 정부과제 플랫폼에 Emotional SSML·한국어 G2P 존재 | URL 미제시 | 새로 찾은 [원 저장소](https://github.com/emotiontts/emotiontts_open_db) README | 일치 | A | `EmotionalSSMLParser`, `SogangG2P`, 한국어 TTS 구성 확인 |
| Selvas 플랫폼 URL·라이선스 미확인 | URL 미제시 | 위 README Purpose·라이선스 표시 | 일치 | A | **미확인 사항 해소:** 연구 목적만 가능, 상업 목적 불가 명시 |
| E3-VITS는 한국어 FSNR0 스타일 태그 데이터 사용 | URL 미제시 | [공식 데모](https://wonbin-jung.github.io/e3-vits/)·[논문](https://openreview.net/pdf?id=qL47xtuEuv) | 일치 | A | 한국어 스타일 태깅 데이터 사용 확인 |
| E3-VITS 코드·체크포인트 미확인 | URL 미제시 | 데모·관련 저장소 확인 | 확인불가 | C | 데모 저장소와 모델 학습·추론 코드 공개는 별개 |
| AI Hub에서 감성 합성용 코퍼스를 확인하지 못함 | URL 미제시 | [감정 음성 데이터셋](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=637) 및 [감성·발화스타일 음성합성 데이터](https://www.aihub.or.kr/aihubdata/data/view.do?dataSetSn=71349) | 불일치 | A | **합성 목적 데이터가 존재함**. 다만 저자가 당시 못 찾았다는 행위 자체는 검증 불가 |
| AI Hub 감정 대화 음성은 분노·행복·중립·슬픔 4감정 | URL 미제시 | [공식 데이터 소개](https://aihub.or.kr/aihubdata/data/view.do?aihubDataSe=extrldata&dataSetSn=263) | 불일치 | A | 원 데이터 소개는 **7감정**. 논문에서 선택한 4개 분류와 혼동 가능 |
| 감정 분류용 대화 음성은 인식용 데이터 | URL 미제시 | 위 공식 활용 설명 | 일치 | A | 감정 분류 연구용으로 소개됨. 다른 AI Hub 합성 데이터의 부재를 뜻하지 않음 |
| AI Hub 합성 데이터의 라이선스 미확인 | URL 미제시 | 데이터셋별 이용 설명 | 일치 | A | 637번은 **연구 목적만 가능** 명시. 71349번 등 다른 데이터는 각각 약관 확인 필요 |
| CAI 2022 한국어 공감 시스템은 감정 감지·응답 생성·ASR·TTS·아바타 결합 | [ACL 논문](https://aclanthology.org/2022.cai-1.3/) | 원논문 초록 | 일치 | A | 구성요소·2022년 모두 일치 |
| 위 CAI 시스템 코드 공개 여부 미확인 | 같은 논문 | 논문 페이지·공개 자료 확인 | 확인불가 | C | 논문 존재가 코드 공개를 뜻하지 않음 |
| engrXiv에 한국어 Live2D 음성 동반자, gpt-4o-audio-preview 사용 | URL 미제시 | 새로 찾은 [원 프리프린트](https://engrxiv.org/preprint/view/5984) | 일치 | A | 논문 제목·한국어 음성·Live2D·해당 모델 사용 확인 |
| 그 프리프린트는 별도 SER을 사용하지 않음 | URL 미제시 | 원문 전체 확인 시도 | 확인불가 | C | 초록만으로 별도 SER 부재를 확정할 수 없음. 본문 접근 제한 |
| 서강대 논문 HuBERT·LLaMA2, 정확도 0.8139·0.8125 | URL 미제시 | [논문 초록](https://www.dbpia.co.kr/journal/detail?nodeId=T16917357)·대학 논문 목록 | 일치 | B | 두 수치 일치. 학위논문 본문 표까지 대조하지 않아 B |
| 해당 논문은 AI Hub 데이터 사용 | URL 미제시 | 동일 초록 | 일치 | B | 연구에서 4감정을 사용했다고 설명 |
| Llama-KoEmpathy는 AIHub 공감 대화로 미세조정한 8B 텍스트 모델 | [Featherless](https://featherless.ai/models/byeolki/Llama-KoEmpathy/readme) | [원 모델카드](https://huggingface.co/byeolki/Llama-KoEmpathy) | 일치 | A | Llama-3.1-8B 기반·AIHub 공감 대화·텍스트 생성 확인 |
| Hume EVI에 외부 LLM용 CLM 예제가 있음 | 선행 노트 | [공식 예제 README](https://github.com/HumeAI/hume-api-examples) | 일치 | A | CLM SSE·WSS 예제 존재 |
| Hume 구조가 한벗과 “가장 유사” | 선행 노트 | 비교 기준 확인 | 확인불가 | C | 구조상 참고 가능하나 최상급 비교는 평가 기준 없음 |
| 한국어 SER+LLM+TTS 공개 레포는 찾지 못함 | 검색 1회·API 검색이라고만 기재 | 검색식·전체 결과 기록 확인 | 확인불가 | C | 부재 증명이 아니며 검색 범위 재현도 불가 |
| emotion2vec+→Claude→Typecast 조합은 공개 사례가 없음 | 구체적 근거 없음 | 조합의 공개 사례·검색 범위 확인 | 확인불가 | C | ‘이번 검색에서 확인 못 함’으로 한정해야 함 |

마지막으로 비용·실험 계획·종합 판단을 검토했습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 대본 10문장×후보 4종=40클립 | 선행 노트 | 계획 확인·산술 계산 | 일치 | A | 계산은 맞음. 생성 완료한 40클립이라는 뜻은 아님 |
| 선행 노트에 10문장 계획·1~5점 평가·p50/p90 측정이 있음 | 로컬 `hanbeot_voice_tts.md` | PART 1·PART 5 직접 열람 | 일치 | A | 계획과 평가 항목 존재. 완성된 10문장 대본은 별도 확인 필요 |
| Qwen·VoxCPM2·CosyVoice3 데모를 2026-11-06 선행 노트에서 사용 | 선행 노트 | PART 1의 모델·오디오 목록 | 불일치 | A | 기록된 4개는 **Qwen·VoxCPM2·OmniVoice·MeloTTS**. CosyVoice3는 없음 |
| Qwen·VoxCPM2·OmniVoice·MeloTTS 샘플이 있음 | 선행 노트 | 로컬 음원 파일·본문 참조 확인 | 일치 | A | 4개 파일 존재. 실제 합성 날짜·설정 로그까지 확인한 것은 아님 |
| 공개 Space가 무료이며 즉시 이용 가능 | 선행 노트·각 모델 링크 | 데모 링크·이용 기록 확인 | 확인불가 | C | 링크 존재와 현재 무료 GPU 할당·큐·실행 가능 여부는 별개 |
| Colab 또는 GPU 1일 대여로 시험 가능 | 근거 미제시 | 자원 요구량·대여 견적 확인 | 확인불가 | C | 런타임·VRAM·가용성·소요시간 미산정 |
| GPU 대여 단가·월 서버 비용 미확인 | 미제시 | 견적·측정 자료 확인 | 확인불가 | C | 실제 비용 판단에 필요한 자료 없음 |
| Typecast 1천 자당 약 $0.075 | 선행 노트 | [공식 요금표](https://typecast.ai/pricing/api/) | 일치 | A | **Lite 월 $15·20만 크레딧의 포함분 환산 단가**. 1자=1크레딧 |
| Typecast 소량 사용도 항상 위 단가로 결제 | 같은 요금표 | 포함분·초과분·월정액 구분 | 불일치 | A | Lite 초과분은 **$0.09/1천 크레딧**이며 월정액 조건 존재 |
| 40클립은 약 2천 자 미만 | 대본 미제시 | 실제 합성 텍스트 문자 수 계산 | 확인불가 | C | 대본·반복 생성 횟수 없어 계산 불가 |
| 따라서 비용은 수 센트 | 추정 | Typecast 분량·요금 조건 대입 | 확인불가 | C | 총 2천 자를 4모델에 균등 사용하면 Typecast 약 500자로 포함분 환산 $0.0375. **신규 월정액·GPU 비용은 별도** |
| Typecast `ssfm-v31` 사용 가능 | 선행 노트 | [공식 모델 문서](https://typecast.ai/docs/models) | 일치 | A | 2026-10 API 제공으로 명시 |
| Typecast `previous_text`·`audio_tempo` 사용 | 선행 노트 | 선행 노트 및 공식 문서 접근 확인 | 확인불가 | C | 로컬 인용은 확인했으나 이번에 해당 필드의 현재 API 명세까지 직접 대조하지 못함 |
| 속도 0.9~0.95에서 품질 유지·개선 | 실험 제안 | 한국어 청취·음질 평가 확인 | 확인불가 | C | 제안한 시험 범위일 뿐 검증된 최적값 아님 |
| 문헌의 지연값은 모두 한국어·한벗 실측이 아님 | 각 README | 측정 조건·제공된 실측 자료 대조 | 일치 | A | 이번 자료에 한벗 측정 결과는 없음. 서로 다른 TTFT·첫 오디오·RTF를 통일해 비교하면 안 됨 |
| 한국어에서 검증된 비언어 태그 오픈소스를 찾지 못함 | 검색 범위 미기록 | 언어별 태그 평가 근거 확인 | 확인불가 | C | 이번 확인에서도 충분한 한국어 청취 검증을 확보하지 못함. ‘없다’는 결론은 불가 |
| 캐스케이드용 백채널 구현 레포를 찾지 못함 | 검색 범위 미기록 | 검색 기록·구현 근거 확인 | 확인불가 | C | AI 먼저 말 걸기·턴 감지·백채널은 서로 다른 기능 |
| Typecast `previous_text`가 한국어 유일 실사용 경로 | 선행 노트 | 다른 모델의 한국어·맥락 기능 대조 | 확인불가 | C | ‘한벗에서 현재 사용 중인 경로’로 한정할 수는 있으나 보편적 유일성은 입증되지 않음 |
| 후보 순위 1~3, W4 비교 후 도입, Typecast 우선이 가장 적합 | 조사자의 결론 | 공통 조건의 청취·지연·비용 평가 확인 | 확인불가 | C | 실행 가능한 제안이지만 사실 검증된 모델 우열은 아님 |
| 원문 각 행의 종합 A 등급 | 자체 등급 | 개별 주장별 원출처 재대조 | 불일치 | A | 코드·가중치 혼동, 버전 오인, 미확인 기능을 한 행의 A로 묶은 사례 존재. **주장별 등급으로 분리 필요** |
