# 한벗 MVP 구현 레퍼런스 (implementation_refs)

작성: researcher (claude-sonnet-5-5) / 확인일: 2026-10-25 / 확정 스택(`topic-tech-mvp-stack`)을 재평가하지 않고 "어떻게 구현하나"만 수집.
등급: A=공식 문서·공식 저장소, B=2차(커뮤니티 플러그인·검색 요약), C=미확인. 스타·최근 커밋은 GitHub API(2026-10-25 조회) 값.

## 1. 요약 (핵심 선택 5줄)
1. 오케스트레이터 1순위 = **Pipecat**. 근거: RTZR STT(`pipecat-rtzr`)와 Typecast TTS(`pipecat-ai-typecast`) 커뮤니티 서비스가 공식 문서 목록에 이미 있고, Smart Turn v3(한국어 포함 23개 언어)가 기본 턴 종료 전략이다. 단 둘 다 비공식·신생(별 0~1개)이라 코드 리딩/보강 각오가 필요하다.
2. LiveKit Agents는 2순위(대안). `livekit-plugins-rtzr`(RTZR STT)는 존재하나 Typecast 플러그인은 **미확인**(직접 작성). 오디오 turn detector에 한국어 포함. 클라이언트 스타터(`agent-starter-react`, MIT, 5종 visualizer)가 가장 완성도 높음.
3. 문장 단위 TTS는 Pipecat `TTSService(text_aggregation_mode=SENTENCE)`가 기본 동작(0.0.104+). ElevenLabs는 `stream-input` WebSocket + Flash v2.5(한국어 포함), Typecast는 `POST /v1/text-to-speech/stream`(WAV 32kHz/MP3, 한국어 코드 `kor`).
4. SER = FunASR `AutoModel("iic/emotion2vec_plus_base").generate(wav, granularity="utterance", extract_embedding=False)`(16kHz). eGeMAPS = `opensmile` `eGeMAPSv02`. **openSMILE 오픈소스판은 상업 제품 사용 금지**, emotion2vec 가중치는 `model-license`(MODEL_LICENSE는 상업 언급 없음, 법률 검토 필요). 지연 실측 보고는 미확인.
5. 메모리 = Mem0 OSS(Apache-2.0) + pgvector(`Memory.from_config`), 블록 구분은 metadata 태그, Letta는 블록 개념 차용(API 예제 확보). 클라이언트는 React + (Pipecat client-js/voice-ui-kit 또는 LiveKit components). 모바일은 PWA 우선(iOS 스탠드얼론 getUserMedia 안정성은 미확인 리스크).

### Pipecat vs LiveKit Agents (7주 학부 팀 기준 근거)
| 항목 | Pipecat | LiveKit Agents |
|---|---|---|
| 라이선스 | BSD-2-Clause (16.8k★, 최근 push 2026-10-25, v1.14.0) | Apache-2.0 (14.9k★, push 2026-10-25, 1.8.9). turn detector 모델은 LiveKit Model License |
| Python | 3.11 이상(권장 3.12 이상) | `>=3.11` (pyproject) |
| RTZR STT | 커뮤니티 `pipecat-rtzr` (공식 문서에 등재) | `livekit-plugins-rtzr` (LiveKit 레퍼런스에 등재) |
| Typecast TTS | 커뮤니티 `pipecat-ai-typecast` (neosapience, 공식 문서 등재) | 미확인 |
| 턴 감지 | Silero VAD + Smart Turn v3(기본), 한국어 포함 | VAD / turn detector 모델 / STT endpointing, 한국어 포함 |
| 커스텀 서비스 | `WebsocketSTTService`/`TTSService.run_tts` 상속 | STT 플러그인 또는 `stt_node` 오버라이드 |
| 프레임·이벤트 | 프레임 파이프라인(`process_frame`/`push_frame`) — SER/eGeMAPS 병렬 처리기를 끼우기 쉬움 | AgentSession + 노드 오버라이드 |
| 서버 필요 | SmallWebRTC/WebSocket 트랜스포트로 자체 서버만으로 가능 | LiveKit 서버(클라우드 또는 셀프호스팅) 필요(`LIVEKIT_URL` 등) |
판단(근거 기반 추론): 한벗은 SER/eGeMAPS 같은 병렬 처리기를 파이프라인에 삽입해야 하고 Typecast+RTZR 플러그인이 둘 다 이미 있는 쪽이 Pipecat이므로 1순위. 단 Pipecat 쪽 두 플러그인은 신생이라 "직접 작성 비용 0"은 보장 못 함(미검증).

## 2. 컴포넌트별 레퍼런스 표
| 컴포넌트 | 레퍼런스 | URL | 종류 | 적용 방법 | 라이선스 | 확인일 | 등급 |
|---|---|---|---|---|---|---|---|
| 오케스트레이터 | Pipecat 저장소 | https://github.com/pipecat-ai/pipecat | 공식 저장소 | `uv tool install "pipecat-ai[cli]"` → `pipecat init`으로 프로젝트 생성. Python 3.11+ | BSD-2-Clause | 2026-10-25 | A |
| 오케스트레이터 | LiveKit Agents | https://github.com/livekit/agents | 공식 저장소 | `pip install "livekit-agents[...]"`, `python myagent.py console/dev/start` | Apache-2.0 | 2026-10-25 | A |
| 지원 서비스 목록 | Pipecat Supported Services | https://docs.pipecat.ai/server/services/supported-services | 공식문서 | RTZR(STT), Typecast(TTS)가 Community로 등재. 한국어 지원 서비스 표는 미기재 | - | 2026-10-25 | A |
| STT(RTZR) | RTZRSTTService 문서 | https://docs.pipecat.ai/api-reference/server/services/stt/rtzr | 공식문서(커뮤니티 서비스) | `uv add pipecat-rtzr`, `RTZR_CLIENT_ID/SECRET`. 모델 `sommers_ko`, VAD 종료 시 Finalize 전송, 16bit mono PCM. 기본 domain `CALL`(8kHz 전화 튜닝) 주의 | BSD-2-Clause | 2026-10-25 | A/B |
| STT(RTZR) | pipecat-rtzr 저장소 | https://github.com/jhwanseok/pipecat-rtzr | 2차(개인) | 0.1.0 alpha, 별 0, 커밋 9개, 실제 전화/장시간 미검증. 문제 시 직접 수정 | BSD-2-Clause | 2026-10-25 | B |
| STT(RTZR) | RTZR WebSocket 문서 | https://developers.rtzr.ai/docs/en/stt-streaming/websocket/ | 공식문서 | `wss://openapi.vito.ai/v1/transcribe:streaming`, 핸드셰이크 `Authorization: Bearer`, 토큰은 `/v1/authenticate`. 응답 `final`(true/false), `alternatives[].text`. 제어 `{"type":"Finalize"}`, 종료 `EOS`. 60초 무음 시 종료 | 상용 API | 2026-10-25 | A |
| STT(RTZR) | RTZR 스트리밍 개요 | https://developers.rtzr.ai/docs/en/stt-streaming/ | 공식문서 | 인코딩 LINEAR16 등, `sample_rate` 8000~48000, `FINALIZE`는 연결 유지한 채 턴 확정 | 상용 API | 2026-10-25 | A |
| STT(LiveKit) | livekit.plugins.rtzr | https://docs.livekit.io/reference/python/livekit/plugins/rtzr/index.html | 공식 레퍼런스 | `rtzr.STT(model="sommers_ko", sample_rate=8000 기본, epd_time=0.8 ...)` | 미확인 | 2026-10-25 | A |
| TTS(Typecast) | Typecast Pipecat 문서 | https://docs.pipecat.ai/api-reference/server/services/tts/typecast | 공식문서(커뮤니티) | `uv add pipecat-ai-typecast`, `aiohttp.ClientSession` 필요, 모델 `ssfm-v30`, 감정 프리셋, 출력 wav만, 기본 44.1kHz. 한국어 지원·지연 수치는 해당 문서에 없음 | BSD-2-Clause(저장소) | 2026-10-25 | A/B |
| TTS(Typecast) | Typecast 스트리밍 API | https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md | 공식문서 | `POST https://api.typecast.ai/v1/text-to-speech/stream`, 헤더 `X-API-KEY`, 본문 voice_id/text(1~2000자)/model/language(`kor`). WAV 32kHz 16bit mono 또는 MP3. 스트리밍은 volume 불가(`target_lufs` 사용) | 상용 API | 2026-10-25 | A |
| TTS(Typecast) | Typecast 지연 | https://typecast.ai/developers/api/ | 공식 마케팅 | "200ms 응답" 홍보 문구만 확인, 측정 조건 없음 → 직접 실측 필요 | - | 2026-10-25 | C |
| TTS(ElevenLabs) | stream-input WebSocket | https://elevenlabs.io/docs/api-reference/text-to-speech/v-1-text-to-speech-voice-id-stream-input | 공식문서 | `wss://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream-input`. 첫 메시지 text=`" "`, 이후 텍스트는 공백으로 끝남, `flush:true`, `chunk_length_schedule` 기본 [120,160,250,290] | 상용 API | 2026-10-25 | A |
| TTS(ElevenLabs) | 모델 문서 | https://elevenlabs.io/docs/overview/models | 공식문서 | Flash v2.5 한국어(`ko`) 지원, "~75ms"(앱·네트워크 지연 제외) | 상용 API | 2026-10-25 | A |
| 문장 단위 TTS | Pipecat TTSService 레퍼런스 | https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html | 공식 레퍼런스 | `text_aggregation_mode`: SENTENCE(기본, 문장 경계까지 버퍼) / TOKEN(토큰 직송, 저지연·품질 저하 가능). `aggregate_sentences`는 0.0.104부터 deprecated | BSD-2-Clause | 2026-10-25 | A |
| 문장 단위 TTS | LLMTextProcessor 문서 | https://docs.pipecat.ai/api-reference/server/utilities/frame/llm-text-processor | 공식문서 | 검색 요약상 사용 시 집계가 업스트림에서 처리되고 TTS 내장 집계 우회(본문 미직접 확인) | - | 2026-10-25 | B |
| VAD | Silero VAD | https://github.com/snakers4/silero-vad | 공식 저장소 | Pipecat `SileroVADAnalyzer`(VADParams start/stop_secs 기본 0.2) | MIT | 2026-10-25 | A |
| 턴 감지 | Pipecat speech-input 가이드 | https://docs.pipecat.ai/guides/learn/speech-input | 공식문서 | Smart Turn이 기본 stop 전략. 시작 전략이 인터럽션(barge-in)을 트리거, 활성 시 봇 발화·진행 작업 즉시 취소 | - | 2026-10-25 | A |
| 턴 감지 | pipecat-ai/smart-turn | https://github.com/pipecat-ai/smart-turn | 공식 저장소 | v3.2, Whisper Tiny 기반 ~8M, 한국어 포함 23개 언어, CPU 약 10~100ms, 입력 16kHz mono 최대 8초 | BSD-2-Clause | 2026-10-25 | A |
| 턴 감지 | LiveKit turn detector | https://docs.livekit.io/agents/logic/turns/turn-detector.md | 공식문서 | 오디오 turn detector 언어에 Korean 포함. 텍스트 모델 396MB·CPU 50~160ms(오디오 모델 수치는 미확인) | LiveKit Model License | 2026-10-25 | A |
| 끼어들기 | LiveKit Turns 문서 | https://docs.livekit.io/agents/build/turns/ | 공식문서 | `allow_interruptions`, `InterruptionOptions(min_duration,min_words)`, mode adaptive/vad, `handle.interrupt()` | Apache-2.0 | 2026-10-25 | A |
| SER | emotion2vec README | https://github.com/ddlBoJack/emotion2vec | 공식 저장소 | FunASR `AutoModel`로 로드, utterance 단위 추론, 9라벨+점수 반환 | 코드 MIT 배지 | 2026-10-25 | A |
| SER | emotion2vec_plus_base 모델 카드 | https://huggingface.co/emotion2vec/emotion2vec_plus_base | 공식 모델 카드 | ~90M, 입력 16kHz, granularity utterance/frame(50Hz). 학습 4,788h 의사라벨 | `model-license`("other") | 2026-10-25 | A |
| SER | FunASR MODEL_LICENSE | https://raw.githubusercontent.com/modelscope/FunASR/main/MODEL_LICENSE | 공식 | 상업 이용 언급·제한 없음(요약), 출처·모델명 표기 의무. 법적 확정은 법률 검토 | 커스텀 | 2026-10-25 | A(해석은 C) |
| SER 지연 | emotion2vec RTF/지연 | (검색 결과 없음) | - | 공식 지연 수치 **미확인** → 팀 자체 측정 | - | 2026-10-25 | C |
| eGeMAPS | opensmile-python 사용법 | https://audeering.github.io/opensmile-python/usage.html | 공식문서 | `Smile(feature_set=eGeMAPSv02, feature_level=LowLevelDescriptors)` → `process_signal(signal, sr)`. LLD 25종(F0semitone, Loudness, jitter 등) | audEERING 라이선스 | 2026-10-25 | A |
| eGeMAPS | opensmile-python 저장소 | https://github.com/audeering/opensmile-python | 공식 저장소 | 이중 라이선스: 사적·연구·교육 무료, "상업 제품에 오픈소스판 사용 불가", 상업은 별도 라이선스 | audEERING | 2026-10-25 | A |
| 메모리 | Mem0 저장소 | https://github.com/mem0ai/mem0 | 공식 저장소 | `Memory()`, `memory.search(query, filters={"user_id":..}, top_k=3)`, `memory.add(messages, user_id=..)` | Apache-2.0 | 2026-10-25 | A |
| 메모리 | Mem0 pgvector 설정 | https://docs.mem0.ai/components/vectordbs/dbs/pgvector | 공식문서 | `config["vector_store"]={"provider":"pgvector","config":{user,password,host,port,...}}` → `Memory.from_config`. `embedding_model_dims` 필수. 예제가 `metadata={"category":...}` 태그를 사용 | Apache-2.0 | 2026-10-25 | A |
| 메모리 | Letta memory blocks | https://docs.letta.com/guides/core-concepts/memory/memory-blocks | 공식문서 | 블록은 label/description/value/limit. `client.blocks.create/update`, `client.agents.blocks.attach`. read_only 지원, value 교체 방식이라 동시 쓰기 덮어쓰기 주의 | Apache-2.0 | 2026-10-25 | A |
| 클라이언트 | Pipecat JS 클라이언트 | https://docs.pipecat.ai/client/js/introduction | 공식문서 | `@pipecat-ai/client-js` + 트랜스포트(Daily/SmallWebRTC/WebSocket). `PipecatClient`, `enableMic:true`. React 래퍼 문서는 이 페이지에 없음 | BSD-2-Clause | 2026-10-25 | A |
| 클라이언트 | voice-ui-kit | https://github.com/pipecat-ai/voice-ui-kit | 공식 저장소 | `VoiceVisualizer`, `UserAudioControl`, `ConnectButton`, `ConsoleTemplate`(디버그 콘솔). React+Tailwind4, smallwebrtc 트랜스포트. orb 형태는 미확인 | BSD-2-Clause | 2026-10-25 | A |
| 클라이언트 | LiveKit React 컴포넌트 | https://docs.livekit.io/reference/components/react/ | 공식문서 | 마이크 훅(`useMediaDevices` 등), `BarVisualizer`, `AudioVisualizer`, `useAudioWaveform` | 미확인 | 2026-10-25 | A |
| 모바일 | iOS PWA 호환성 노트 | https://firt.dev/notes/pwa-ios/ | 2차 | getUserMedia iOS 13.0부터 지원 표기. 2020~2024 스탠드얼론 특이 버그 보고 다수(WebKit Bugzilla). 최신 공식 상태 미확인 | - | 2026-10-25 | B |
| 한국어 사례 | nemo-voice-agent-ko | https://github.com/msh9184/nemo-voice-agent-ko | 2차 | NeMo+pipecat 한국어 실시간 에이전트(Apache-2.0, 별 0, 2026-06) | Apache-2.0 | 2026-10-25 | B |

## 3. 포크 후보 저장소 비교표
| 저장소 | 스타 | 최근 push | 라이선스 | 스택 일치도 | 바꿔야 할 부분 |
|---|---|---|---|---|---|
| pipecat-ai/pipecat-examples (https://github.com/pipecat-ai/pipecat-examples) | 401 | 2026-10-20 | BSD-2-Clause | 높음: `simple-chatbot`(React 클라이언트), `push-to-talk`(voice-ui-kit), `websocket`, `p2p-webrtc`, `travel-companion` 등 | STT→RTZR, TTS→Typecast, LLM→Claude, SER/eGeMAPS/위험분류/메모리 프로세서 추가 |
| livekit-examples/agent-starter-react (https://github.com/livekit-examples/agent-starter-react) | 962 | 2026-10-23 | MIT | 중상: Next.js/TS(우리 "React" 계획과 다름), 5종 visualizer·라이트/다크, 마이크/ 토큰 흐름 완비 | Next.js→(원하면 Vite) 이식, 한벗 UI/메모리 화면 추가, LiveKit 채택 시에만 의미 |
| livekit-examples/agent-starter-python (https://github.com/livekit-examples/agent-starter-python) | 267 | 2026-10-24 | MIT | 중: LiveKit 채택 시 백엔드 골격 | RTZR 플러그인, Typecast 플러그인(미확인) 직접 작성, Claude LLM |
| pipecat-ai/voice-ui-kit (https://github.com/pipecat-ai/voice-ui-kit) | 419 | 2026-10-12 | BSD-2-Clause | 높음(Pipecat 채택 시 클라이언트 UI) | 한벗 브랜딩, 메모리/동의 화면 추가 |
| Xiaoyan43/cyber-companion (https://github.com/Xiaoyan43/cyber-companion) | 0 | 2026-07-10 | MIT | 높음(주제): FastAPI+React+Pipecat, 메모리 커널, 관계 상태, WebRTC 음성. 개인 프로토타입 | 품질 미검증 → 구조 참고용(포크보다 읽기) |
| msh9184/nemo-voice-agent-ko (https://github.com/msh9184/nemo-voice-agent-ko) | 0 | 2026-06-14 | Apache-2.0 | 중: 한국어 Pipecat 에이전트이나 NeMo ASR 중심 | 참고용(턴테이킹·한국어 TTS 연결 방식) |
| Open-LLM-VTuber/Open-LLM-VTuber (https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 14,375 | 2026-05-15 | 미확정(API가 NOASSERTION; 자체 조항 확인 필요) | 낮음: 로컬 LLM·Live2D 중심, 스택 불일치 | 포크 비권장(라이선스 확인 선행) |
"Replika류" 오픈소스는 위 검색(스타순 상위)에서 신뢰할 만한 후보 확인 못 함 → 미확인.

## 4. 코드 스니펫 (공식 출처 원문만)
### 4-1. emotion2vec+ 추론 — https://github.com/ddlBoJack/emotion2vec 및 https://huggingface.co/emotion2vec/emotion2vec_plus_base
```python
from funasr import AutoModel

model = AutoModel(model="iic/emotion2vec_plus_base")

wav_file = f"{model.model_path}/example/test.wav"
res = model.generate(wav_file, output_dir="./outputs", granularity="utterance", extract_embedding=False)
print(res)
```
- 설치 `pip install -U funasr modelscope`. 입력 16kHz. 라벨 인덱스: 0 angry, 1 disgusted, 2 fearful, 3 happy, 4 neutral, 5 other, 6 sad, 7 surprised, 8 unknown. 반환 키 "feats","labels","scores". 메모리 상의 numpy 배열 입력 여부는 해당 페이지에서 미확인(README 예시는 파일 경로/`wav.scp`).

### 4-2. openSMILE eGeMAPS LLD — https://audeering.github.io/opensmile-python/usage.html
```python
smile = opensmile.Smile(
    feature_set=opensmile.FeatureSet.eGeMAPSv02,
    feature_level=opensmile.FeatureLevel.LowLevelDescriptors,
)
smile.feature_names
smile.process_signal(
    signal,
    sampling_rate
)
```
- 원문 출력 목록에 Loudness_sma3, F0semitoneFrom27.5Hz_sma3nz, jitterLocal 등 25개 LLD. speech rate·pause는 이 LLD 목록에 직접 없음 → Functionals 또는 VAD 기반 자체 계산 필요(예제 미확인).

### 4-3. Pipecat 커스텀/커뮤니티 서비스 사용·골격 — https://docs.pipecat.ai/api-reference/server/services/stt/rtzr
```python
import os

from pipecat_rtzr import RTZRSTTService

stt = RTZRSTTService(
    client_id=os.getenv("RTZR_CLIENT_ID"),
    client_secret=os.getenv("RTZR_CLIENT_SECRET"),
)

# Add stt to your pipeline, after a VAD
```
Typecast (https://docs.pipecat.ai/api-reference/server/services/tts/typecast, 문서에서 "condensed"로 표기된 예시):
```python
tts = TypecastTTSService(
    aiohttp_session=session,
    api_key=os.getenv("TYPECAST_API_KEY"),
    voice_id=os.getenv("TYPECAST_VOICE_ID"),
    model="ssfm-v30",
    params=TypecastInputParams(
        prompt_options=PresetPromptOptions(
            emotion_preset="happy",
            emotion_intensity=1.3,
        ),
        output_options=OutputOptions(audio_pitch=2, audio_tempo=1.05),
    ),
)
# Place after the LLM and before transport.output().
```
미지원 벤더용 자체 서비스 작성 계약(https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html):
```python
@abstractmethod
async def run_tts(self, text: str, context_id: str) -> AsyncGenerator[Frame | None, None]
```
- STT는 `WebsocketSTTService`를 상속(RTZR 플러그인이 그 사례), `run_stt` 구현·keepalive 시 `_send_keepalive()` 오버라이드(검색 요약). 참고 구현 `pipecat.services.cartesia.stt`, `together.stt`. 완전한 `_connect`/`run_stt` 골격 원문은 확보 못 함 → 미확인(위 모듈 소스 직접 열람 필요).
- 커스텀 FrameProcessor 골격(https://docs.pipecat.ai/guides/fundamentals/custom-frame-processor): `class MetricsFrameLogger(FrameProcessor)`, `async def process_frame(self, frame: Frame, direction: FrameDirection)`, `await self.push_frame(frame, direction)`. SER/eGeMAPS 병렬 처리기를 이 방식으로 삽입(적용 방식은 문서 기반 추론).

### 4-4. 턴 감지 (Pipecat Smart Turn) — https://docs.pipecat.ai/guides/learn/speech-input
```python
from pipecat.audio.turn.smart_turn.local_smart_turn_v3 import LocalSmartTurnAnalyzerV3
from pipecat.turns.user_stop import TurnAnalyzerUserTurnStopStrategy

stop_strategy = TurnAnalyzerUserTurnStopStrategy(
    turn_analyzer=LocalSmartTurnAnalyzerV3()
)
```
LiveKit (https://docs.livekit.io/agents/build/turns/):
```python
from livekit.agents import AgentSession, TurnHandlingOptions, inference

session = AgentSession(
    turn_handling=TurnHandlingOptions(
        turn_detection=inference.TurnDetector(),
    ),
    # ... stt, tts, llm, etc.
)
```

### 4-5. 문장 분할 TTS
- 공식 문서에서 그대로 가져올 **코드 스니펫은 확보 못 함**(Pipecat은 파라미터로 제공). 사실관계 원문: "`SENTENCE`: Buffer text until sentence boundaries are detected before synthesis." / "`TOKEN`: Stream text tokens directly to TTS as they arrive." (TTSService 레퍼런스). 문장 모드는 문장당 약 200~300ms 지연 추가(검색 요약, 소스 코드 주석 인용 — 미직접 확인, 등급 B).
- ElevenLabs WebSocket 메시지 형식(공식): 첫 `{"text": " "}`, 이후 `{"text": "Hello there "}`(공백 종료), `flush: true`, 종료 `{"text": ""}`.

### 4-6. Mem0 / Letta
Mem0 (https://github.com/mem0ai/mem0):
```python
relevant_memories = memory.search(query=message, filters={"user_id": user_id}, top_k=3)
memory.add(messages, user_id=user_id)
```
Letta (https://docs.letta.com/guides/core-concepts/memory/memory-blocks):
```python
block = client.blocks.create(
    label="organization",
    description="A block to store information about the organization",
    value="Organization: Letta",
    limit=4000,
)
client.agents.blocks.attach(agent_id=agent.id, block_id=block.id)
```
- 블록(user_stated_facts / ai_inferred_affect / persona) 구분: Mem0는 pgvector 문서 예제가 `metadata` 태그를 쓰므로 `metadata={"block": ...}` 방식이 가능(검색 시 metadata 필터 문법은 이번 조사에서 미확인). Letta는 label별 블록.

## 5. 7주 구현의 함정·미확인
1. **라이선스 리스크**: openSMILE 오픈소스판은 상업 제품 불가(공식 README). 서비스화 시 audEERING 상업 라이선스 또는 librosa/parselmouth 등 대체 필요. emotion2vec `model-license`는 상업 조항 법률 검토 필요(MODEL_LICENSE 본문에 상업 금지 문구는 없었으나 출처·모델명 표기 의무 존재).
2. **RTZR 기본값**: Pipecat·LiveKit 플러그인 모두 기본이 `sommers_ko`+`CALL` 도메인, LiveKit은 sample_rate 기본 8000(전화 튜닝). 웹 마이크는 16kHz 이상이므로 `sample_rate`/도메인 지정 필요. 서버 측 endpointing(epd_time)과 Pipecat Smart Turn이 충돌하지 않게 Finalize 정책 결정 필요. 연결 60초 무음 종료(Pipecat 서비스는 무음 keepalive 전송).
3. **커뮤니티 플러그인 성숙도**: pipecat-rtzr 별 0·커밋 9·alpha, pipecat-typecast 별 1. Pipecat 버전 의존(rtzr는 1.13.0 테스트, typecast는 0.0.94 이상). 설치 버전 고정 필수.
4. **Typecast**: Pipecat 서비스 문서에 한국어/스트리밍 지연 기재 없음. Pipecat 서비스는 기본 `language`가 영어이므로 `kor`로 명시해야 함(API 문서 기준 ISO 639-3). 출력 wav만, 기본 44.1kHz(스트리밍 API는 WAV 32kHz) — 샘플레이트 불일치 확인. "200ms"는 마케팅 수치.
5. **TTFA 1.0s 예산**: 문장 모드가 첫 문장 완결까지 대기(+200~300ms 추정 인용), ElevenLabs Flash ~75ms는 네트워크 제외. emotion2vec 지연·SER 병렬 추가 지연은 실측 보고 **미확인** → 자체 측정 필수(RTF=추론시간/오디오길이).
6. **emotion2vec 입력**: 공식 예제는 파일 경로. 스트리밍 파이프라인에서는 turn 종료 후 버퍼를 임시 WAV/배열로 전달해야 하나 배열 입력 지원은 이번에 미확인.
7. **iOS PWA**: getUserMedia는 iOS 13+ 지원 표기이나 스탠드얼론 모드 버그 보고(2020~2024) 존재, 2025~2026 상태 미확인 → 초기엔 Safari 브라우저 접속을 기본, PWA는 실기기 테스트 후 결정. React Native/Expo 근거 자료는 이번 조사에서 확보 못 함(Pipecat RN 클라이언트 저장소는 URL 이동 응답, 미확인).
8. **Pipecat 클라이언트 React 래퍼**(`@pipecat-ai/client-react`)는 voice-ui-kit 설치 안내에 등장하나 JS 소개 페이지엔 없음. LiveKit 컴포넌트 라이선스 표기 미확인.
9. **LiveKit 선택 시**: Typecast 플러그인 미확인 → 직접 작성, LiveKit 서버 운영 부담.
10. Open-LLM-VTuber 등 일부 저장소 라이선스는 SPDX 미판별(NOASSERTION) — 포크 전 LICENSE 원문 확인.
11. Mem0 metadata 필터 문법, Mem0 스트리밍 파이프라인 prefetch 예제, Claude 스트리밍→Pipecat 연동 예제는 본 조사 범위에서 직접 확인 못 함(미확인).

## 6. 출처 전체 목록
- https://github.com/pipecat-ai/pipecat
- https://github.com/pipecat-ai/pipecat-examples
- https://github.com/pipecat-ai/smart-turn
- https://github.com/pipecat-ai/voice-ui-kit
- https://github.com/pipecat-ai/pipecat-client-web
- https://docs.pipecat.ai/server/services/supported-services
- https://docs.pipecat.ai/api-reference/server/services/stt/rtzr
- https://docs.pipecat.ai/api-reference/server/services/tts/typecast
- https://docs.pipecat.ai/guides/fundamentals/custom-frame-processor
- https://docs.pipecat.ai/guides/learn/speech-input
- https://docs.pipecat.ai/client/js/introduction
- https://docs.pipecat.ai/api-reference/server/utilities/frame/llm-text-processor
- https://reference-server.pipecat.ai/en/stable/api/pipecat.services.tts_service.html
- https://github.com/jhwanseok/pipecat-rtzr
- https://github.com/neosapience/pipecat-typecast
- https://github.com/livekit/agents
- https://github.com/livekit-examples/agent-starter-react
- https://github.com/livekit-examples/agent-starter-python
- https://docs.livekit.io/agents/build/turns/
- https://docs.livekit.io/agents/logic/turns/turn-detector.md
- https://docs.livekit.io/agents/models/stt/
- https://docs.livekit.io/reference/python/livekit/plugins/rtzr/index.html
- https://docs.livekit.io/reference/components/react/
- https://developers.rtzr.ai/docs/en/stt-streaming/
- https://developers.rtzr.ai/docs/en/stt-streaming/websocket/
- https://typecast.ai/docs/api-reference/text-to-speech/streaming-text-to-speech.md
- https://typecast.ai/developers/api/
- https://elevenlabs.io/docs/api-reference/text-to-speech/v-1-text-to-speech-voice-id-stream-input
- https://elevenlabs.io/docs/overview/models
- https://github.com/ddlBoJack/emotion2vec
- https://huggingface.co/emotion2vec/emotion2vec_plus_base
- https://raw.githubusercontent.com/modelscope/FunASR/main/MODEL_LICENSE
- https://github.com/audeering/opensmile-python
- https://audeering.github.io/opensmile-python/usage.html
- https://github.com/mem0ai/mem0
- https://docs.mem0.ai/components/vectordbs/dbs/pgvector
- https://docs.letta.com/guides/core-concepts/memory/memory-blocks
- https://github.com/snakers4/silero-vad
- https://firt.dev/notes/pwa-ios/
- https://github.com/msh9184/nemo-voice-agent-ko
- https://github.com/Xiaoyan43/cyber-companion
- https://github.com/Open-LLM-VTuber/Open-LLM-VTuber
- https://api.github.com (스타·push·라이선스 수치, 2026-10-25 조회)
