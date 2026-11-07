---
title: "topic-voice-agent-frameworks-jarvis-2026-11"
tags: ["voice-agent", "jarvis", "pipecat", "livekit", "ten", "unmute", "full-duplex", "opensource"]
created: 2026-11-07T18:11:03.148Z
updated: 2026-11-07T18:11:03.148Z
sources: ["research_notes/오픈소스 음성 조사/humanlike_voice_oss.md", ".omc/orchestra/reviews/20261108_025524_verify_humanlike_voice_oss.md"]
links: ["topic-bench-opensource-voice-agents.md", "claim-app-1-pipecat-orchestrator.md", "topic-tts-opensource-candidates-2026-11.md", "src-kyutai-2026-unmute.md", "src-krafton-2026-raon-speech.md", "src-kyutai-2024-moshi.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-voice-agent-frameworks-jarvis-2026-11

# topic-voice-agent-frameworks-jarvis-2026-11

상위: [[topic-bench-opensource-voice-agents]] · [[claim-app-1-pipecat-orchestrator]] · [[topic-tts-opensource-candidates-2026-11]]. 출처: 오픈소스 음성 조사(2026-11-08) + 검증표(우선). 별은 2026-11-08 REST 값(B).

## 1. JARVIS류 저장소
- 검색 `jarvis voice assistant` 상위(Priler 3.0k CC BY-NC-SA 비상업·러시아어, isair 2.2k, GauravSingh9356 1.5k, ethanplusai 1.0k, AlexandreSajus 0.5k GPL-3.0)는 README 기준 **데스크톱 명령 실행·취미/데모 프로젝트**로, 운율·백채널·감정 구현은 README에서 확인 못 함. 운율·백채널·감정 참고 가치 낮음.
- 정정(검증표): "대화 품질을 다루는 것은 없다"는 일반화는 C. 검색 순위·범위 기록이 없고, isair/jarvis는 기억(일기·지식그래프)과 민감정보 마스킹을 갖춘 대화형 기능을 명시. 코드 내부는 열람하지 않음. 별 2·0 저장소를 "장난감"이라 한 판단은 C(별 수는 품질 증명 아님).
- 참고할 만한 부분: isair의 기억·마스킹 UX, ethanplusai의 페르소나 음성 + Claude Code 연동, AlexandreSajus의 Voice->Text->LLM->Speech 단순 캐스케이드(Deepgram->GPT->ElevenLabs).
- API 라이선스 NOASSERTION(isair, ethanplusai, Jan, Freeze-Omni)은 "없음"도 "상업 가능"도 아님.

## 2. 프로덕션 프레임워크 vs 데모
| 프로젝트 | 별 | 라이선스 | 비고(A) |
|---|---|---|---|
| Pipecat | 17.1k | BSD-2 | STT-LLM-TTS 파이프라인. `MinWordsUserTurnStartStrategy`로 끼어들기 제어. 백채널·필러 기본 제공 없음은 C(README 부재만 확인). 한벗 채택은 설계 문서 기준이며 실제 통합 여부는 미검증 |
| LiveKit Agents | 15.1k | Apache-2.0, 턴 모델은 LiveKit Model License | 시맨틱 턴 감지, 시나리오 테스트. **턴 모델 ko 지원 확인**, 전체 STT/TTS는 플러그인별 확인 |
| TEN Framework | 11.2k | Apache-2.0 + 추가 조건(기기 호스팅·Agora 경쟁 배포 제한) | Turn Detection은 영어·중국어만 명시, 한국어 보증 없음(C) |
| Unmute (Kyutai) | 1.5k | MIT | [[src-kyutai-2026-unmute]] |
| Open-LLM-VTuber | 14,626(정정; 조사 시 47은 오류) | MIT(Live2D 샘플 별도) | 오프라인, 헤드폰 없는 끼어들기, AI 먼저 말 걸기, **감정 -> Live2D 표정 매핑**, FunASR/Melo/Cosy/Fish/Claude 연동(목록 확인, 한벗 구성 동작은 미검증). "속마음 표시"는 C |
| Vocode, Willow, Home Assistant, Leon, OVOS, Jan | - | - | 정체(Vocode 2024-11) 또는 스마트홈·로컬 비서·LLM 앱. 한벗과 무관 |

- 한벗이 가져올 것은 JARVIS 레포가 아니라 프레임워크(턴 감지, 끼어들기)와 TTS 모델. Open-LLM-VTuber의 "감정 태그 -> 표현 매핑" 구조는 emotion2vec+ -> TTS 파라미터 설계 참고용.

## 3. S2S / 풀듀플렉스
- **Raon-Speech (KRAFTON)**: [[src-krafton-2026-raon-speech]]. 기반 Raon-Speech 9B는 영·한 이중언어이나 풀듀플렉스·백채널 모델 SpeechChat은 모델카드상 **영어 대화**. 노트의 "한국어 풀듀플렉스 유일 후보"는 C로 철회. **라이선스 충돌 해소**: 레포 Apache-2.0이지만 두 공개 모델카드는 CC-BY-NC-4.0 -> 가중치 비상업.
- **Qwen3-Omni**: 음성 입력·출력 목록에 한국어 포함(A), 저지연·턴테이킹 표방(수치·한국어 실측 없음). 자체 LLM 고정, 공개 주력 30B-A3B 계열이라 Claude 교체 불가(B). 별 4,095는 Qwen2.5-Omni와 우연히 같을 뿐 별개 저장소(ID 상이).
- **Moshi**: 풀듀플렉스, 이론 160ms, L4 실측 약 200ms, 가중치 CC-BY 4.0, 한국어 미표기. [[src-kyutai-2024-moshi]].
- **Ultravox**는 음성 입력 -> 텍스트 출력이라 S2S 표 분류 오류(음성 출력은 별도 TTS). GLM-4-Voice는 코드 Apache, 가중치는 별도 GLM 약관(상업 등록 조건), 중·영, 2024-12 정체. Step-Audio2·Freeze-Omni는 한국어 미확인(C).

## 4. 한계
- 지연·성능은 모두 제작사 README 값, 한국어·한벗 환경 실측 없음.
- 캐스케이드용 백채널 구현 레포는 이번 조사에서 못 찾았으나 검색 범위가 기록되지 않아 부재 증명 아님.

