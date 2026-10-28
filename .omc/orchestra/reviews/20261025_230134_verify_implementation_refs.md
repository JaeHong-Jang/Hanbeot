주요 수정 대상은 **RTZR의 60초 종료 조건, LiveKit의 최소 Python 버전, Mem0의 필수 설정 주장, Open-LLM-VTuber 라이선스**입니다. 문장 집계의 약 200~300ms 추가 지연은 공식 문서에서 확인했습니다.

아래는 반복된 주장을 통합한 검증표입니다. **A는 원출처와 일치, B는 2차 출처·근사치, C는 원래 주장을 확인하거나 뒷받침하지 못한 경우**입니다. 따라서 원출처로 반박된 주장도 등급은 C로 표시했습니다. 문서·코드 대조 결과이며, 실행·성능 테스트 결과는 아닙니다. 스타·push 등 변동값은 열람 시 표시값을 기준으로 했습니다.

**오케스트레이터·턴 감지 관련 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Pipecat 라이선스는 BSD-2-Clause | [Pipecat](https://github.com/pipecat-ai/pipecat) | 저장소 라이선스 및 pyproject 대조 | 일치 | A | 공식 저장소에 명시됨. |
| Pipecat은 Python 3.11 이상, 3.12 이상 권장 | [Pipecat](https://github.com/pipecat-ai/pipecat) | README와 pyproject 대조 | 일치 | A | 최소 버전과 권장 버전 모두 일치. |
| CLI 설치 후 `pipecat init`으로 프로젝트 생성 | [Pipecat](https://github.com/pipecat-ai/pipecat) | README 명령 대조 | 일치 | A | `uv tool install "pipecat-ai[cli]"` 확인. |
| Pipecat 버전 v1.14.0 | [Pipecat](https://github.com/pipecat-ai/pipecat) | [해당 릴리스](https://github.com/pipecat-ai/pipecat/releases/tag/v1.14.0) 열람 | 일치 | A | 해당 버전과 Latest 표시 확인. |
| LiveKit Agents는 Apache-2.0, 턴 감지 모델은 별도 LiveKit Model License | [LiveKit Agents](https://github.com/livekit/agents) | README License 대조 | 일치 | A | 프레임워크와 모델 라이선스를 구분한 설명이 맞음. |
| LiveKit Agents의 Python 요구사항은 `>=3.11` | [LiveKit Agents](https://github.com/livekit/agents) | [현재 pyproject](https://raw.githubusercontent.com/livekit/agents/main/livekit-agents/pyproject.toml) 대조 | 불일치 | C | 현재 값은 `>=3.10,<3.15`. 노트의 특정 버전 기준인지는 추가 증거 없음. |
| LiveKit Agents 버전은 1.8.9 | [LiveKit Agents](https://github.com/livekit/agents) | 태그·릴리스 접근 시도 | 확인불가 | C | 의존성의 `>=1.8.9` 표기만으로 본체 릴리스를 확정할 수 없음. |
| `console/dev/start` 실행 명령을 제공 | [LiveKit Agents](https://github.com/livekit/agents) | README 실행 예제 대조 | 일치 | A | 세 명령 모두 확인. |
| LiveKit은 서버가 반드시 필요 | [LiveKit Agents](https://github.com/livekit/agents) | 실행 모드 설명 대조 | 불일치 | C | 웹 클라이언트 연결에는 서버가 필요하지만 `console` 모드는 외부 서버 없이 실행 가능. |
| RTZR·Typecast가 Pipecat 공식 목록에 Community로 등재 | [지원 서비스 목록](https://docs.pipecat.ai/server/services/supported-services) | 서비스 표 대조 | 일치 | A | 공식 지원·유지보수 서비스라는 뜻은 아님. |
| 두 플러그인은 모두 “비공식” | [지원 서비스 목록](https://docs.pipecat.ai/server/services/supported-services), [Typecast 저장소](https://github.com/neosapience/pipecat-typecast) | 유지보수 주체 대조 | 불일치 | C | Pipecat의 공식 지원 대상은 아니지만 Typecast 연동은 벤더인 Neosapience가 유지보수함. |
| Smart Turn이 Pipecat 기본 턴 종료 전략 | [speech-input](https://docs.pipecat.ai/guides/learn/speech-input) | 기본 전략 설명 대조 | 일치 | A | 공식 문서에 명시됨. |
| Smart Turn 코드 스니펫이 공식 예제와 동일 | [speech-input](https://docs.pipecat.ai/guides/learn/speech-input) | import·생성자 대조 | 일치 | A | `LocalSmartTurnAnalyzerV3`와 `TurnAnalyzerUserTurnStopStrategy` 조합 확인. |
| Smart Turn v3.2, 한국어 포함 23개 언어 | [smart-turn](https://github.com/pipecat-ai/smart-turn) | README 버전·언어 목록 대조 | 일치 | A | Korean 포함. |
| Whisper Tiny 기반, 약 8M 파라미터 | [smart-turn](https://github.com/pipecat-ai/smart-turn) | 아키텍처 설명 대조 | 일치 | A | 원문도 근삿값으로 제시. |
| CPU 추론 약 10~100ms | [smart-turn](https://github.com/pipecat-ai/smart-turn) | 성능 설명 대조 | 일치 | B | 일부 CPU에서 최소 10ms, 대부분의 클라우드 인스턴스에서 100ms 미만이라는 조건부 설명. 보장 범위는 아님. |
| Smart Turn 입력은 16kHz mono PCM, 최대 8초 | [smart-turn](https://github.com/pipecat-ai/smart-turn) | 입력 형식 설명 대조 | 일치 | A | 긴 턴은 앞부분을 잘라 사용하도록 설명. |
| Silero VAD는 MIT | [Silero VAD](https://github.com/snakers4/silero-vad) | 저장소 라이선스 확인 | 일치 | A | 확인됨. |
| Pipecat VAD 시작·종료 기본값은 각각 0.2초 | [노트의 Silero 출처](https://github.com/snakers4/silero-vad) | [Pipecat VADParams](https://reference-server.pipecat.ai/en/stable/api/pipecat.audio.vad.vad_analyzer.html) 추가 대조 | 일치 | A | 수치는 맞지만 Silero README 대신 Pipecat 레퍼런스를 인용해야 함. |
| 끼어들기 활성화 시 발화 중단·진행 작업 취소 | [speech-input](https://docs.pipecat.ai/guides/learn/speech-input) | Interruptions 설명 대조 | 일치 | A | 기본적으로 활성화된 시작 전략을 설명함. |
| LiveKit 오디오 턴 감지기는 한국어 지원 | [turn-detector.md](https://docs.livekit.io/agents/logic/turns/turn-detector.md) | [HTML 공식 문서](https://docs.livekit.io/agents/logic/turns/turn-detector/)로 대체 확인 | 일치 | A | `.md` 주소는 열람 실패했지만 공식 HTML에서 확인. |
| LiveKit 텍스트 턴 감지 모델은 396MB, CPU 약 50~160ms | [turn-detector.md](https://docs.livekit.io/agents/logic/turns/turn-detector.md) | [이전 공식 플러그인 문서](https://docs.livekit.io/agents/build/turns/turn-detector/) 대조 | 일치 | A | 텍스트 Multilingual 모델 수치. 오디오 모델 성능으로 사용하면 안 됨. |
| LiveKit `TurnHandlingOptions`·`inference.TurnDetector()` 스니펫 | [Turns](https://docs.livekit.io/agents/build/turns/) | 공식 턴 감지 예제 대조 | 일치 | A | 해당 조합 확인. |
| `allow_interruptions`, `InterruptionOptions(min_duration,min_words)`, adaptive/vad, `interrupt()` 제공 | [Turns](https://docs.livekit.io/agents/build/turns/) | 끼어들기 설정·API 설명 대조 | 일치 | A | 설정 위치와 사용 객체는 채택 버전에 맞춰 확인 필요. |
| Pipecat 프레임 처리·LiveKit 노드 오버라이드로 확장 가능 | [FrameProcessor](https://docs.pipecat.ai/guides/fundamentals/custom-frame-processor), [LiveKit Agents](https://github.com/livekit/agents) | 공식 예제 및 [노드 문서](https://docs.livekit.io/agents/logic/nodes/) 대조 | 일치 | A | 확장 지점의 존재 확인. |
| Pipecat이 7주 팀의 1순위이고 LiveKit보다 병렬 SER 삽입이 쉽다 | 위 공식 문서들 | 비교 실험·구현 시간 근거 검토 | 확인불가 | C | 설계 판단이다. 공식 기능 설명만으로 난이도 우열까지 확정할 수 없음. |

**RTZR 관련 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| `uv add pipecat-rtzr`로 설치 | [Pipecat RTZR](https://docs.pipecat.ai/api-reference/server/services/stt/rtzr) | [공식 서비스 목록](https://docs.pipecat.ai/server/services/supported-services) 교차 확인 | 일치 | A | 개별 문서는 접근 실패했지만 목록의 설치 명령 확인. |
| `RTZR_CLIENT_ID/SECRET`로 인증 | [RTZR WebSocket](https://developers.rtzr.ai/docs/en/stt-streaming/websocket/) | 공식 코드 예제 대조 | 일치 | A | 인증 환경변수 확인. |
| Pipecat `RTZRSTTService` 생성 스니펫은 공식 문서 원문 | [Pipecat RTZR](https://docs.pipecat.ai/api-reference/server/services/stt/rtzr) | 문서·저장소·raw README 접근 시도 | 확인불가 | C | 원문 확보 실패. 존재하지 않는다는 뜻은 아님. |
| Pipecat 플러그인은 `sommers_ko`·CALL 기본값, 16bit mono PCM | [Pipecat RTZR](https://docs.pipecat.ai/api-reference/server/services/stt/rtzr) | 개별 구현 문서 접근 시도 | 확인불가 | C | RTZR API 기본값을 플러그인 구현 확인으로 대체할 수 없음. |
| Pipecat 플러그인은 VAD 종료 시 Finalize 전송·무음 keepalive 구현 | [Pipecat RTZR](https://docs.pipecat.ai/api-reference/server/services/stt/rtzr) | 구현 원문 접근 시도 | 확인불가 | C | Pipecat 공통 keepalive 기능의 존재와 해당 플러그인의 구현은 별개. |
| `pipecat-rtzr` 0.1.0 alpha, 스타 0, 커밋 9개, BSD-2-Clause | [pipecat-rtzr](https://github.com/jhwanseok/pipecat-rtzr) | 저장소·API·PyPI 접근 시도 | 확인불가 | C | 해당 세부값 모두 독립 확인 실패. |
| `pipecat-rtzr`는 Pipecat 1.13.0으로 테스트 | [pipecat-rtzr](https://github.com/jhwanseok/pipecat-rtzr) | 호환성 원문 접근 시도 | 확인불가 | C | 테스트 버전 근거 확보 실패. |
| RTZR WebSocket 주소·Bearer 인증·`/v1/authenticate` | [RTZR WebSocket](https://developers.rtzr.ai/docs/en/stt-streaming/websocket/) | 공식 예제 대조 | 일치 | A | 노트의 엔드포인트와 인증 흐름 일치. |
| 응답에 `final`과 `alternatives[].text` 포함 | [RTZR WebSocket](https://developers.rtzr.ai/docs/en/stt-streaming/websocket/) | 응답 스키마 대조 | 일치 | A | 확인됨. |
| `{"type":"Finalize"}`로 턴 확정, `EOS`로 종료 | [RTZR WebSocket](https://developers.rtzr.ai/docs/en/stt-streaming/websocket/) | 제어 메시지·예제 대조 | 일치 | A | 두 메시지의 역할 구분이 맞음. |
| Finalize는 연결을 유지하면서 발화를 확정 | [RTZR 스트리밍](https://developers.rtzr.ai/docs/en/stt-streaming/) | AI Voice Agent·Finalize 설명 대조 | 일치 | A | 종료 메시지 EOS와 구분됨. |
| LINEAR16 등 지원, sample_rate는 8000~48000Hz | [RTZR 스트리밍](https://developers.rtzr.ai/docs/en/stt-streaming/) | 파라미터 표 대조 | 일치 | A | sample_rate는 필수 입력. |
| RTZR API 기본 모델은 `sommers_ko`, 도메인은 CALL | [RTZR 스트리밍](https://developers.rtzr.ai/docs/en/stt-streaming/) | 기본값 표 대조 | 일치 | A | API 기준 확인. |
| CALL은 “8kHz 전화 튜닝”이므로 웹 마이크에는 도메인 변경 필요 | [RTZR 스트리밍](https://developers.rtzr.ai/docs/en/stt-streaming/) | Domain 설명 대조 | 불일치 | C | CALL은 전화뿐 아니라 개인 헤드셋·근접 마이크에도 적합하다고 명시. CALL을 8kHz 전용으로 설명할 근거 없음. |
| “60초 무음 시 연결 종료” | [RTZR 스트리밍](https://developers.rtzr.ai/docs/en/stt-streaming/) | 종료 조건 문장 대조 | 불일치 | C | 원문은 연결 후 60초 안에 **오디오 청크를 보내지 않으면 종료될 수 있음**. 음향적 무음과 전송 부재를 혼동함. |
| LiveKit RTZR 기본값: `sommers_ko`, CALL, 8000Hz, `epd_time=0.8` | [LiveKit RTZR](https://docs.livekit.io/reference/python/livekit/plugins/rtzr/index.html) | 생성자·공개 소스 대조 | 일치 | A | 네 값 모두 확인. |
| 웹 마이크 입력은 항상 16kHz 이상 | 직접 출처 없음 | 근거 검토 | 확인불가 | C | 장치·브라우저·리샘플링 설정에 따라 달라짐. 실제 전송 형식을 확인해야 함. |
| Smart Turn과 RTZR endpointing이 충돌한다 | 위 서비스 문서들 | 통합 동작 증거 검토 | 확인불가 | C | 가능한 설계 문제라는 추론이며 실제 충돌 재현 자료는 없음. |

**Typecast·ElevenLabs·문장 집계 관련 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Typecast 연동 패키지는 `pipecat-ai-typecast`, 유지보수자는 Neosapience | [Pipecat Typecast](https://docs.pipecat.ai/api-reference/server/services/tts/typecast) | 설치·유지보수 설명 대조 | 일치 | A | Pipecat은 직접 테스트하거나 공식 지원하지 않는다고 명시. |
| Typecast 연동은 BSD-2-Clause | [Typecast 저장소](https://github.com/neosapience/pipecat-typecast) | README 라이선스 대조 | 일치 | A | 확인됨. |
| `aiohttp.ClientSession` 필요, 기본 모델 `ssfm-v30` | [Pipecat Typecast](https://docs.pipecat.ai/api-reference/server/services/tts/typecast) | 필수 인자·기본값 대조 | 일치 | A | 확인됨. |
| Pipecat Typecast는 WAV만 지원하고 기본 sample_rate는 44100Hz | [Pipecat Typecast](https://docs.pipecat.ai/api-reference/server/services/tts/typecast) | 파라미터 표 대조 | 일치 | A | 현재 문서 기준 두 값 모두 확인. |
| Pipecat Typecast 기본 언어는 영어 | [Pipecat Typecast](https://docs.pipecat.ai/api-reference/server/services/tts/typecast) | Input Parameters 대조 | 일치 | A | `Language.EN` 확인. |
| Pipecat 서비스에도 문자열 `kor`를 그대로 넣어야 한다 | [Typecast API](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md) | API와 래퍼 파라미터 형식 비교 | 확인불가 | C | API의 `kor` 지원은 확인. 래퍼 문서는 `Language` 타입을 사용하므로 동일 문자열 사용까지 확정할 수 없음. |
| Typecast 코드의 감정 강도 1.3·pitch 2·tempo 1.05는 공식 예제 값 | [Pipecat Typecast](https://docs.pipecat.ai/api-reference/server/services/tts/typecast) | Usage 코드 대조 | 일치 | A | 값·클래스 조합은 일치. 노트의 “condensed”라는 표기는 현재 페이지에서 찾지 못함. |
| Typecast 연동은 Pipecat 0.0.94 이상 지원 | [Typecast 저장소](https://github.com/neosapience/pipecat-typecast) | Compatibility 표 대조 | 일치 | A | 0.0.94와 1.4.0 테스트 표기도 확인. |
| Typecast 스트리밍 POST 경로·X-API-KEY·voice_id/text/model | [스트리밍 API 원래 주소](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md) | [공식 HTML](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech) 대조 | 일치 | A | `.md` 접근은 실패했지만 HTML에서 확인. |
| Typecast text는 1~2000자 | [스트리밍 API](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md) | 공식 HTML 스키마 대조 | 일치 | A | 최소·최대 길이 일치. |
| 한국어 코드는 `kor`, ISO 639-3 사용 | [스트리밍 API](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md) | 언어 목록·대소문자 규칙 대조 | 일치 | A | KOR가 명시되고 대소문자를 구분하지 않음. |
| 스트리밍 WAV는 32kHz·16bit·mono, MP3도 지원 | [스트리밍 API](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md) | 출력 형식 설명 대조 | 일치 | A | MP3는 44.1kHz로 별도 명시됨. |
| 스트리밍에서는 volume 불가, target_lufs 사용 가능 | [스트리밍 API](https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md) | 출력 옵션 대조 | 일치 | A | 확인됨. |
| Typecast 공식 페이지에 “200ms 응답” 문구가 있음 | [Typecast API 소개](https://typecast.ai/developers/api/) | 현재 홍보 문구 대조 | 불일치 | C | 현재 문구는 170ms 및 170~210ms. 과거 정확한 인용은 확인하지 못함. |
| Typecast 응답은 대략 200ms 수준이라는 홍보 | [Typecast API 소개](https://typecast.ai/developers/api/) | 현재 범위와 비교 | 일치 | B | 170~210ms의 근사 요약으로는 타당. 실사용 TTFA 검증은 아님. |
| Typecast 홍보 페이지에는 측정 조건이 없다 | [Typecast API 소개](https://typecast.ai/developers/api/) | 해당 성능 문구 주변 설명 확인 | 일치 | A | 열람한 본문에 구체적인 실험 조건이 제시되지 않음. |
| 래퍼 44.1kHz와 API WAV 32kHz가 실제 출력 불일치를 일으킨다 | 위 두 Typecast 문서 | 명시값 비교 | 확인불가 | C | 문서상 차이는 확인되지만 실제 출력·리샘플링 문제는 실행 검증 필요. |
| ElevenLabs WebSocket은 `/v1/text-to-speech/{voice_id}/stream-input` | [WebSocket API](https://elevenlabs.io/docs/api-reference/text-to-speech/v-1-text-to-speech-voice-id-stream-input) | 엔드포인트 대조 | 일치 | A | 확인됨. |
| 첫 메시지는 공백 `" "`, 종료는 빈 문자열 `""` | [WebSocket API](https://elevenlabs.io/docs/api-reference/text-to-speech/v-1-text-to-speech-voice-id-stream-input) | 메시지 예제 대조 | 일치 | A | 인증·음성 설정은 별도 필요할 수 있음. |
| 이후 모든 텍스트 메시지는 반드시 공백으로 끝나야 함 | [WebSocket API](https://elevenlabs.io/docs/api-reference/text-to-speech/v-1-text-to-speech-voice-id-stream-input) | API 예제·공식 가이드 비교 | 확인불가 | C | 공백 종료 예제는 확인했지만, 열람 본문에서 모든 메시지에 대한 필수 규칙은 확인하지 못함. |
| `flush:true`, 기본 chunk schedule `[120,160,250,290]` | [WebSocket API](https://elevenlabs.io/docs/api-reference/text-to-speech/v-1-text-to-speech-voice-id-stream-input) | [공식 WebSocket 가이드](https://elevenlabs.io/docs/developers/websockets) 추가 확인 | 일치 | A | 두 항목 모두 가이드에서 직접 확인. 배열 값의 단위는 문자 수. |
| Flash v2.5는 한국어 지원, 지연 약 75ms | [모델 문서](https://elevenlabs.io/docs/overview/models) | 모델 설명·지원 언어 대조 | 일치 | A | 애플리케이션·네트워크 지연을 제외한다는 각주도 확인. |
| TTSService는 SENTENCE 기본, TOKEN 직송 지원 | [TTSService](https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html) | 파라미터·열거형 설명 대조 | 일치 | A | SENTENCE는 문장 경계까지 집계. |
| `aggregate_sentences`는 0.0.104부터 deprecated | [TTSService](https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html) | deprecated 표시 대조 | 일치 | A | 확인됨. |
| SENTENCE·TOKEN의 영문 설명 두 문장이 원문 인용 | [TTSService](https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html) | 문구 대조 | 일치 | A | 노트의 두 설명과 일치. |
| 문장 집계는 문장당 약 200~300ms 지연 추가 | [TTSService](https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html) | 열거형 설명 대조 | 일치 | A | 검색 요약뿐 아니라 공식 본문에 존재. 보편적 실측값으로 해석하면 안 됨. |
| LLMTextProcessor 사용 시 TTS 내장 집계 우회 | [LLMTextProcessor](https://docs.pipecat.ai/api-reference/server/utilities/frame/llm-text-processor) | Overview 대조 | 일치 | A | 노트의 B를 A로 상향 가능. |
| `run_tts(text, context_id)`의 추상 메서드 반환형 | [TTSService](https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html) | 메서드 시그니처 대조 | 일치 | A | `AsyncGenerator[Frame 또는 None, None]` 확인. |
| STT는 WebsocketSTTService 상속·run_stt 구현·keepalive 오버라이드 가능 | 노트에 직접 URL 없음 | [공식 STTService](https://reference-server.pipecat.ai/en/stable/api/pipecat.services.stt_service.html) 추가 확인 | 일치 | A | 일반 확장 계약은 확인. 모든 STT가 반드시 이 클래스만 상속해야 한다는 뜻은 아님. |
| Cartesia·Together STT가 참고 구현으로 존재 | 노트의 모듈명 | [Cartesia 소스](https://raw.githubusercontent.com/pipecat-ai/pipecat/main/src/pipecat/services/cartesia/stt.py), [Together 소스](https://raw.githubusercontent.com/pipecat-ai/pipecat/main/src/pipecat/services/together/stt.py) 열람 | 일치 | A | 해당 모듈과 WebSocket STT 구현 설명 확인. |
| MetricsFrameLogger의 process_frame·push_frame 골격 | [Custom FrameProcessor](https://docs.pipecat.ai/guides/fundamentals/custom-frame-processor) | 공식 코드 대조 | 일치 | A | SER 병렬 실행 성능까지 입증하는 예제는 아님. |

**emotion2vec·openSMILE 관련 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| emotion2vec+ base는 약 90M 파라미터 | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | 모델 설명 대조 | 일치 | A | 원문도 `~90M`. |
| base 미세조정 데이터는 4,788시간 의사라벨 데이터 | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | 데이터 설명·시간 표 대조 | 일치 | A | 전체 사전학습 시간으로 표현하면 부정확함. |
| 입력 16kHz, utterance/frame 선택, frame은 50Hz | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | Usage 대조 | 일치 | A | 확인됨. |
| `pip install -U funasr modelscope` | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | 설치 명령 대조 | 일치 | A | 확인됨. |
| `AutoModel(model="iic/emotion2vec_plus_base")`와 generate 스니펫 | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | FunASR 예제 대조 | 일치 | A | 모델 경로·output_dir·utterance·extract_embedding 값 일치. |
| 0~8 인덱스의 9개 감정 라벨 | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | 라벨 목록 대조 | 일치 | A | angry, disgusted, fearful, happy, neutral, other, sad, surprised, unknown 순서 일치. |
| 반환 키는 feats·labels·scores, False이면 분류 점수 사용 | [emotion2vec README](https://github.com/ddlBoJack/emotion2vec) | 반환 설명 대조 | 일치 | A | `extract_embedding=True`일 때 특징도 추출한다고 설명. 항상 유효한 embedding이 반환된다는 뜻은 아님. |
| README 예제는 파일 경로·wav.scp이며 numpy 입력 여부는 미확인 | [README](https://github.com/ddlBoJack/emotion2vec), [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | 입력 예제 확인 | 일치 | A | 해당 페이지의 예제 범위에 관한 설명은 맞음. 배열 입력 불가라는 결론은 아님. |
| emotion2vec README에 MIT 배지가 있음 | [emotion2vec](https://github.com/ddlBoJack/emotion2vec) | [raw README](https://raw.githubusercontent.com/ddlBoJack/emotion2vec/main/README.md) 확인 | 일치 | A | MIT 배지 확인. 가중치 라이선스와는 구분해야 함. |
| 가중치 라이선스 표기는 `other`·`model-license` | [모델 카드](https://huggingface.co/emotion2vec/emotion2vec_plus_base) | [raw 메타데이터](https://huggingface.co/emotion2vec/emotion2vec_plus_base/raw/main/README.md) 대조 | 일치 | A | license link는 FunASR 저장소를 가리킴. |
| FunASR MODEL_LICENSE에는 상업 이용을 직접 언급하지 않음 | [MODEL_LICENSE](https://raw.githubusercontent.com/modelscope/FunASR/main/MODEL_LICENSE) | 영문·중문 본문 확인 | 일치 | A | 상업 이용을 명시적으로 허용·금지하는 조항은 확인하지 못함. |
| MODEL_LICENSE는 출처·저자 정보와 모델명 보존을 요구 | [MODEL_LICENSE](https://raw.githubusercontent.com/modelscope/FunASR/main/MODEL_LICENSE) | 2.2절 대조 | 일치 | A | 노트는 저자 정보 의무를 생략함. |
| MODEL_LICENSE에는 제한이 없다 | [MODEL_LICENSE](https://raw.githubusercontent.com/modelscope/FunASR/main/MODEL_LICENSE) | 전체 조항 대조 | 불일치 | C | 표시 의무, 금지 행위, 종료·개정 조항 등이 있음. “상업 금지 문구 없음”으로 좁혀 써야 함. |
| 해당 라이선스만으로 emotion2vec 가중치의 상업 이용 가능 여부 확정 | 위 라이선스·모델 카드 | 적용 범위·명시적 권한 검토 | 확인불가 | C | 노트가 법적 확정을 유보한 것은 적절함. |
| emotion2vec의 공식 RTF·지연 실측 보고가 없다 | “검색 결과 없음” | 제공된 README·모델 카드 확인 | 확인불가 | C | 이 두 페이지에서는 찾지 못했지만 자료 전체의 부재를 증명한 것은 아님. |
| openSMILE의 eGeMAPSv02·LowLevelDescriptors·process_signal 코드 | [사용법](https://audeering.github.io/opensmile-python/usage.html) | 공식 코드 대조 | 일치 | A | 노트 스니펫의 핵심 호출 일치. |
| eGeMAPSv02 LLD는 25개 | [사용법](https://audeering.github.io/opensmile-python/usage.html) | 출력 목록 직접 계수 | 일치 | A | Loudness·F0semitone·jitterLocal 등 25개 확인. |
| LLD 목록에 speech rate·pause가 직접 없음 | [사용법](https://audeering.github.io/opensmile-python/usage.html) | 25개 이름 대조 | 일치 | A | 목록에 해당 이름은 없음. |
| Functionals 또는 VAD만으로 필요한 speech rate·pause를 얻을 수 있음 | [사용법](https://audeering.github.io/opensmile-python/usage.html) | 요구 지표와 기능 설명 비교 | 확인불가 | C | 발화 속도·조음 속도·휴지 비율 등 지표 정의와 계산법을 구체화해야 함. |
| openSMILE은 사적·연구·교육 사용 무료, 오픈소스판의 상업 제품 사용 금지 | [opensmile-python](https://github.com/audeering/opensmile-python) | README License 대조 | 일치 | A | 기업의 기초연구와 제품 개발도 구분해 설명함. |
| 상업 제품에는 별도 라이선스가 필요 | [opensmile-python](https://github.com/audeering/opensmile-python) | 이중 라이선스 설명 대조 | 일치 | A | 공식 README에 명시됨. |
| librosa·parselmouth가 동등한 대체재 | 직접 출처 없음 | 대체 범위·검증 근거 검토 | 확인불가 | C | 일부 특징 계산의 대안일 수 있지만 eGeMAPS 전체 동등성을 입증하지 않음. |

**Mem0·Letta 관련 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Mem0 OSS는 Apache-2.0 | [Mem0](https://github.com/mem0ai/mem0) | 저장소 라이선스 확인 | 일치 | A | 확인됨. |
| `Memory()`·search의 `filters={"user_id":...}, top_k=3`·add 예제 | [Mem0](https://github.com/mem0ai/mem0) | README 예제 대조 | 일치 | A | 제시된 코드가 README에 존재함. 실행 호환성 검증과는 별개. |
| pgvector provider와 user/password/host/port 설정 후 `Memory.from_config` | [pgvector 문서](https://docs.mem0.ai/components/vectordbs/dbs/pgvector) | Python 예제 대조 | 일치 | A | 확인됨. |
| `embedding_model_dims`는 필수 | [pgvector 문서](https://docs.mem0.ai/components/vectordbs/dbs/pgvector) | 문서 예제·[공식 설정 코드](https://raw.githubusercontent.com/mem0ai/mem0/main/mem0/configs/vector_stores/pgvector.py) 대조 | 불일치 | C | 기본값 1536이 있으며 공식 예제도 해당 필드를 생략함. 임베딩 차원 일치는 별도 요구사항. |
| pgvector 예제는 `metadata={"category":"movies"}` 사용 | [pgvector 문서](https://docs.mem0.ai/components/vectordbs/dbs/pgvector) | add 예제 대조 | 일치 | A | 확인됨. |
| `metadata={"block":...}`로 블록 구분 가능 | [pgvector 문서](https://docs.mem0.ai/components/vectordbs/dbs/pgvector) | 사용자 정의 metadata 예제에 비추어 검토 | 일치 | B | 태그 저장 방식으로는 타당한 추론. Letta의 컨텍스트 블록과 동일한 기능은 아님. |
| Mem0 metadata 필터 문법은 미확인 | [pgvector 문서](https://docs.mem0.ai/components/vectordbs/dbs/pgvector) | 문서 링크 확인 | 확인불가 | C | 노트의 조사 이력은 재현 불가. 현재 문서에는 Enhanced Metadata Filtering 링크가 있음. |
| Letta 블록은 label·description·value·limit으로 구성 | [memory blocks](https://docs.letta.com/guides/core-concepts/memory/memory-blocks) | 공식 설명·예제 대조 | 일치 | A | 현재는 V1 SDK 문서로 리디렉션됨. |
| Letta `create`의 `limit=4000`·agents.blocks.attach 스니펫 | [memory blocks](https://docs.letta.com/guides/core-concepts/memory/memory-blocks) | Python 예제 대조 | 일치 | A | 4000은 예제 값이며 공통 기본 한도가 아님. |
| Letta는 read_only를 지원 | [memory blocks](https://docs.letta.com/guides/core-concepts/memory/memory-blocks) | Read-only blocks 설명 대조 | 일치 | A | 에이전트의 블록 수정을 제한하는 기능. |
| value update는 전체 교체, 동시 수정은 마지막 쓰기가 덮어씀 | [memory blocks](https://docs.letta.com/guides/core-concepts/memory/memory-blocks) | Modifying a block 설명 대조 | 일치 | A | 공식 문서가 last-write-wins 문제를 직접 설명함. |
| Letta 라이선스는 Apache-2.0 | [memory blocks](https://docs.letta.com/guides/core-concepts/memory/memory-blocks) | 제시 페이지에서 라이선스 근거 확인 | 확인불가 | C | 문서 페이지를 제품·SDK·서버 전체의 라이선스 근거로 쓰기에는 부족함. |

**클라이언트·모바일 관련 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Pipecat JS는 client-js와 트랜스포트 패키지로 구성 | [JS 소개](https://docs.pipecat.ai/client/js/introduction) | 설치·Transport Packages 대조 | 일치 | A | Daily·SmallWebRTC·WebSocket 안내 확인. |
| `PipecatClient`와 `enableMic:true` 사용 | [JS 소개](https://docs.pipecat.ai/client/js/introduction) | 코드 예제 대조 | 일치 | A | 확인됨. |
| 해당 JS 소개 페이지에는 React 래퍼 설명이 없음 | [JS 소개](https://docs.pipecat.ai/client/js/introduction) | 본문 확인 | 일치 | A | 이 페이지의 본문 범위에서는 맞음. React SDK가 없다는 뜻은 아님. |
| Pipecat JS 클라이언트 라이선스는 BSD-2-Clause | [JS 소개](https://docs.pipecat.ai/client/js/introduction) | 제시 페이지의 라이선스 근거 검토 | 확인불가 | C | 패키지 저장소 LICENSE를 직접 인용해야 함. |
| voice-ui-kit 설치에 client-react가 등장 | [voice-ui-kit](https://github.com/pipecat-ai/voice-ui-kit) | Quickstart 명령 대조 | 일치 | A | `@pipecat-ai/client-react` 확인. |
| voice-ui-kit은 React·Tailwind 4 기반이며 BSD-2-Clause | [voice-ui-kit](https://github.com/pipecat-ai/voice-ui-kit) | README·라이선스 대조 | 일치 | A | 확인됨. |
| VoiceVisualizer·UserAudioControl·ConnectButton·ConsoleTemplate 제공 | [voice-ui-kit](https://github.com/pipecat-ai/voice-ui-kit) | README 예제 대조 | 일치 | A | 관련 컴포넌트·템플릿 확인. |
| voice-ui-kit은 SmallWebRTC 사용 가능 | [voice-ui-kit](https://github.com/pipecat-ai/voice-ui-kit) | 설치·custom UI 예제 대조 | 일치 | A | Daily도 지원. SmallWebRTC 전용이라는 뜻은 아님. |
| LiveKit은 useMediaDevices·useAudioWaveform·BarVisualizer·AudioVisualizer 제공 | [React 컴포넌트](https://docs.livekit.io/reference/components/react/) | 공식 API 목록 대조 | 일치 | A | 네 항목 모두 확인. |
| LiveKit React 컴포넌트 라이선스는 미확인 | [React 컴포넌트](https://docs.livekit.io/reference/components/react/) | [공식 저장소](https://github.com/livekit/components-js) 추가 확인 | 일치 | A | 이번 확인에서는 Apache-2.0으로 해소 가능. 노트의 미확인 상태를 갱신해야 함. |
| agent-starter-react는 MIT·Next.js/TypeScript 기반 | [React starter](https://github.com/livekit-examples/agent-starter-react) | README·파일·라이선스 대조 | 일치 | A | Next.js는 React 기반 프레임워크이므로 “React 계획과 다름”은 요구사항에 따라 달라짐. |
| React starter에 visualizer 5종·라이트/다크 제공 | [React starter](https://github.com/livekit-examples/agent-starter-react) | Features 목록 계수 | 일치 | A | bar·grid·radial·wave·aura의 5종 확인. |
| React starter에 마이크·토큰 연결 흐름이 있음 | [React starter](https://github.com/livekit-examples/agent-starter-react) | 연결 설명·토큰 엔드포인트 확인 | 일치 | A | 제공 여부는 확인. 완성도 최상이라는 평가는 별개. |
| LiveKit starter가 “가장 완성도 높음” | [React starter](https://github.com/livekit-examples/agent-starter-react) | 비교 기준·평가 자료 검토 | 확인불가 | C | 비교 대상·평가기준·실험이 없음. |
| iOS getUserMedia는 13.0부터 지원으로 표기 | [firt.dev](https://firt.dev/notes/pwa-ios/) | 호환성 표 대조 | 일치 | B | 표에는 13.0으로 기재. 개인 테스트 기반의 2차 자료임. |
| 2020~2024 standalone PWA 버그 보고 존재 | [firt.dev](https://firt.dev/notes/pwa-ios/), Bugzilla 일반 언급 | [2020 보고](https://bugs.webkit.org/show_bug.cgi?id=212040), [2024 보고](https://bugs.webkit.org/show_bug.cgi?id=273938) 추가 확인 | 일치 | A | 보고의 존재 확인. 해당 사례는 주로 카메라로, 마이크 안정성까지 동일하게 입증하지는 않음. |
| 2025~2026 iOS PWA 상태는 미확인 | 구체적인 URL 없음 | 최신 Bugzilla 보고·댓글 검색 | 확인불가 | C | [2025 개발자 댓글](https://bugs.webkit.org/show_bug.cgi?id=282327), [2026 사용자 보고](https://bugs.webkit.org/show_bug.cgi?id=280394)는 확인됨. 전체 안정성을 확정하지는 못함. |
| Pipecat React Native 자료는 확보할 수 없음 | [client-web](https://github.com/pipecat-ai/pipecat-client-web) 등 | 공식 서비스 목록·예제 확인 | 확인불가 | C | 조사 당시 확보 실패는 검증 불가. 현재 공식 문서에는 React Native SDK 항목과 관련 예제가 존재함. |
| voice-ui-kit orb 지원 여부·PWA 실기기 안정성 | 위 클라이언트 출처들 | 제시 문서 범위 확인 | 확인불가 | C | 노트의 유보 상태를 유지. |

**저장소 수치·날짜·라이선스 주장**

스타는 열람된 저장소 페이지의 표시값입니다. **최근 커밋 날짜와 GitHub API의 `pushed_at`은 다른 항목**이므로 서로 대체하지 않았습니다.

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Pipecat 스타 16.8k | [Pipecat](https://github.com/pipecat-ai/pipecat) | 저장소 표시값 대조 | 일치 | B | 16.8k 표시 확인. 반올림된 값. |
| Pipecat 최근 push 2026-10-25 | [GitHub API 일반 주소](https://api.github.com) | 개별 저장소 API 접근 시도 | 확인불가 | C | 원래 API 응답·조회 시각이 보존되지 않음. |
| LiveKit Agents 스타 14.9k | [LiveKit Agents](https://github.com/livekit/agents) | [개별 API](https://api.github.com/repos/livekit/agents) 대조 | 일치 | B | API 값 14,933으로 14.9k 근사치와 일치. |
| LiveKit Agents push 2026-10-25 | [GitHub API 일반 주소](https://api.github.com) | [개별 API](https://api.github.com/repos/livekit/agents) 확인 | 일치 | A | `2026-10-25T09:52:23Z` 확인. |
| Typecast 플러그인 스타 1 | [Typecast 저장소](https://github.com/neosapience/pipecat-typecast) | 저장소 표시값 대조 | 일치 | A | 1 star 확인. 신생 여부·안정성과는 별개. |
| pipecat-examples 스타 401·BSD-2-Clause | [pipecat-examples](https://github.com/pipecat-ai/pipecat-examples) | 저장소 표시·라이선스 대조 | 일치 | A | 두 항목 확인. |
| pipecat-examples push 2026-10-20 | [pipecat-examples](https://github.com/pipecat-ai/pipecat-examples) | 개별 API 접근 시도 | 확인불가 | C | 정확한 pushed_at 확보 실패. |
| simple-chatbot·push-to-talk·websocket·p2p-webrtc·travel-companion 예제 존재 | [pipecat-examples](https://github.com/pipecat-ai/pipecat-examples) | 파일 목록·README 대조 | 일치 | A | React 클라이언트와 voice-ui-kit 설명도 확인. |
| agent-starter-react 스타 962·MIT | [React starter](https://github.com/livekit-examples/agent-starter-react) | 저장소 표시·라이선스 대조 | 일치 | A | 확인됨. |
| agent-starter-react push 2026-10-23 | [React starter](https://github.com/livekit-examples/agent-starter-react) | 개별 API 접근 시도 | 확인불가 | C | 정확한 pushed_at 확보 실패. |
| agent-starter-python 스타 267·MIT | [Python starter](https://github.com/livekit-examples/agent-starter-python) | 저장소 표시·라이선스 대조 | 일치 | A | Python 음성 에이전트 starter라는 설명도 일치. |
| agent-starter-python push 2026-10-24 | [Python starter](https://github.com/livekit-examples/agent-starter-python) | 개별 API 접근 시도 | 확인불가 | C | 정확한 pushed_at 확보 실패. |
| voice-ui-kit 스타 419 | [voice-ui-kit](https://github.com/pipecat-ai/voice-ui-kit) | 저장소 표시값 대조 | 일치 | A | 확인됨. |
| voice-ui-kit push 2026-10-12 | [voice-ui-kit](https://github.com/pipecat-ai/voice-ui-kit) | 개별 API 접근 시도 | 확인불가 | C | 정확한 pushed_at 확보 실패. |
| cyber-companion 스타 0·MIT | [cyber-companion](https://github.com/Xiaoyan43/cyber-companion) | 저장소 표시·라이선스 확인 | 일치 | A | 열람 자료는 이전 크롤링본이므로 당일 스냅샷은 아님. |
| cyber-companion은 FastAPI·React·Pipecat, 메모리·관계 상태·WebRTC를 갖춘 개인 프로토타입 | [cyber-companion](https://github.com/Xiaoyan43/cyber-companion) | 작성자의 저장소 설명 대조 | 일치 | A | 작성자의 기능 설명 확인이며 구현 품질 검증은 아님. |
| cyber-companion push 2026-07-10 | [cyber-companion](https://github.com/Xiaoyan43/cyber-companion) | 개별 API 접근 시도 | 확인불가 | C | 정확한 pushed_at 확보 실패. |
| nemo-voice-agent-ko 스타 0·Apache-2.0 | [nemo-voice-agent-ko](https://github.com/msh9184/nemo-voice-agent-ko) | 저장소 표시·라이선스 확인 | 일치 | A | 열람 자료는 이전 크롤링본. 개인 저장소라도 자체 수치·라이선스에 대해서는 원출처임. |
| nemo-voice-agent-ko는 NeMo·Pipecat 한국어 실시간 에이전트 | [nemo-voice-agent-ko](https://github.com/msh9184/nemo-voice-agent-ko) | 저장소 설명·README 확인 | 일치 | A | 스트리밍 ASR·턴테이킹·한국어 TTS 설명 확인. |
| nemo-voice-agent-ko의 날짜는 2026-06 또는 push 2026-06-14 | [nemo-voice-agent-ko](https://github.com/msh9184/nemo-voice-agent-ko) | 날짜 항목·개별 API 확인 시도 | 확인불가 | C | 월 표기가 생성일인지 갱신일인지도 불명확함. |
| Open-LLM-VTuber 스타 14,375 | [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 저장소 표시값 비교 | 확인불가 | B | 표시값 14.4k와는 근사하지만 정확한 14,375는 확인하지 못함. |
| Open-LLM-VTuber push 2026-05-15 | [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 개별 API 접근 시도 | 확인불가 | C | 정확한 pushed_at 확보 실패. |
| Open-LLM-VTuber 라이선스는 NOASSERTION이라 미확정 | [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | [LICENSE 원문](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/blob/main/LICENSE) 대조 | 불일치 | C | 본체는 MIT, Live2D 샘플은 별도 라이선스로 명시됨. API 분류 실패와 라이선스 부재는 다름. |
| Open-LLM-VTuber는 로컬 LLM·Live2D·음성 상호작용 중심 | [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | README·저장소 설명 대조 | 일치 | A | 스택 적합도·포크 권장 여부는 별도 판단. |

**출처 부재·설계 목표·조사 이력 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| LiveKit Typecast 플러그인은 미확인 | 구체적인 플러그인 URL 없음 | [공식 TTS 목록](https://docs.livekit.io/agents/models/tts/) 검색 | 확인불가 | C | 열람 목록에서 찾지 못함. 플러그인이 전혀 없다는 증거는 아님. |
| Typecast 플러그인을 반드시 직접 작성해야 함 | 위 미확인 주장 | 대체 연동 가능성 검토 | 확인불가 | C | 플러그인 부재가 입증되지 않았으므로 필수 작업으로 확정할 수 없음. |
| “Replika류”에서 신뢰할 만한 오픈소스 후보를 찾지 못함 | 검색어·검색 결과 URL 없음 | 조사 재현 가능성 검토 | 확인불가 | C | 검색 범위·평가기준·결과 기록이 없음. |
| pipecat-rtzr의 전화·장시간 사용 품질은 미검증 | 테스트 출처 없음 | 테스트 보고 근거 검토 | 확인불가 | C | 작성자의 미검증 상태이지 품질 결함을 입증한 주장이 아님. |
| 7주 구현 가능성·스택 일치도 높음/중상/중/낮음 | 저장소별 URL | 일정·평가기준 근거 검토 | 확인불가 | C | 팀 역량·인원·기능 범위에 따른 계획 판단. |
| TTFA 예산 1.0초 | 외부 출처 없음 | 목표와 측정 결과 구분 | 확인불가 | C | 제품 목표값으로 표기해야 함. 현재 스택이 달성한다는 증거 없음. |
| RTF는 추론시간÷오디오 길이 | 출처 없음 | 정의 대조 | 일치 | A | 통상적인 정의와 일치. 실제 RTF 수치는 제시되지 않음. |
| SER 병렬 삽입의 추가 지연은 미확인 | 실측 출처 없음 | 성능 자료 검토 | 확인불가 | C | 공식 모델 속도만으로 전체 파이프라인 추가 지연을 계산할 수 없음. |
| Mem0 prefetch·Claude 스트리밍→Pipecat 예제를 이번 조사에서 확보 못 함 | 구체적인 URL 없음 | 조사 이력·검색 기록 검토 | 확인불가 | C | 확보 실패와 해당 예제의 부재를 구분해야 함. |
| “코드 스니펫은 공식 출처 원문만” | 각 스니펫의 URL | 개별 코드 대조 | 확인불가 | C | 다수는 확인했으나 RTZR 스니펫은 원문 접근 실패. 일부 주석·서식도 축약되어 일괄적으로 ‘원문 그대로’라고 할 수 없음. |
| 작성자 모델·확인일 2026-10-25·GitHub API 조회 이력 | 파일 머리말·[API 일반 주소](https://api.github.com) | 원본 응답·타임스탬프 존재 여부 검토 | 확인불가 | C | 작성 메타데이터만으로 실제 조회 이력을 검증할 수 없음. 개별 API URL·응답·조회 시각 보존 필요. |
