---
title: "topic-tts-opensource-candidates-2026-11"
tags: ["tts", "opensource", "w4-blind-test", "license", "korean", "candidates"]
created: 2026-11-07T18:10:59.650Z
updated: 2026-11-07T20:08:59.842Z
sources: ["research_notes/오픈소스 음성 조사/humanlike_voice_oss.md", ".omc/orchestra/reviews/20261108_025524_verify_humanlike_voice_oss.md"]
links: ["topic-tts-humanlike-techniques.md", "topic-app-impl-dialogue-tts.md", "claim-tech-3-stt-tts-vendors.md", "topic-bench-opensource-voice-agents.md", "src-github-2026-english-only-tts-roundup.md", "src-fishaudio-2026-fish-speech-s2-pro.md", "src-resemble-2026-chatterbox-multilingual.md", "src-supertone-2026-supertonic-3.md", "src-boson-2026-higgs-audio.md", "src-du-2024-cosyvoice2.md", "src-qwen-2026-qwen3-tts.md", "src-openbmb-2026-voxcpm2.md", "src-funaudio-2026-fun-cosyvoice3.md", "src-yeowon-2026-indextts-ko.md", "src-krafton-2026-raon-speech.md", "src-kyutai-2026-unmute.md", "topic-dev-repos-voice-conversation-2026-11.md", "src-pipecat-2026-expressive-alpha.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tts-opensource-candidates-2026-11

# topic-tts-opensource-candidates-2026-11

상위: [[topic-tts-humanlike-techniques]] · [[topic-app-impl-dialogue-tts]] · [[claim-tech-3-stt-tts-vendors]] · [[topic-bench-opensource-voice-agents]]. 출처: 오픈소스 음성 조사 노트(2026-11-08) + 검증표(같은 날, 검증표가 우선). 별 수·라이선스·push는 GitHub REST 조회, 지연은 전부 제작사 보고치이며 한국어·한벗 환경 실측 아님. 등급은 주장별(A 원출처 대조, B 2차·근사, C 미확인).

## 결론: W4 블라인드 테스트 후보 3개 (Typecast ssfm-v31 옆)
| 순위 | 후보 | 이유 | 걸림돌 |
|---|---|---|---|
| 1 | Qwen3-TTS 1.7B CustomVoice (Sohee) | 한국어 네이티브 화자, 자연어 instruct, 스트리밍, Apache-2.0(코드·해당 가중치, A). 선행 노트 샘플 보유 | 비언어 태그 문서 없음(C: 부재 입증 아님). instruct는 1.7B CustomVoice·VoiceDesign만, **Base와 0.6B CustomVoice는 미지원**(A). 3초 복제는 Base 기능 |
| 2 | VoxCPM2 (2B) | Apache-2.0 코드·가중치(A), 30개 언어, 48kHz, 스타일 지시·목소리 디자인, `generate_streaming`(A) | 첫 청크 지연 미보고. 생성 편차 주장은 C. GPU 필수 단정은 C(양자화·GGUF 경로 존재) |
| 3 | Fun-CosyVoice3 | 한국어 포함 9개 언어, 양방향 스트리밍 최소 150ms(A, 제작사), instruct, 공개 **0.5B 가중치 Apache-2.0**(A) | 1.5B 공식 다운로드는 미확인(C). 선행 노트 샘플에 CosyVoice3는 없음(샘플은 Qwen·VoxCPM2·OmniVoice·MeloTTS) |

## 전체 TTS 비교표 (2026-11-08)
| 모델 | 별 | 라이선스 | 한국어 | 스트리밍/지연(보고) | 감정 제어 | 비언어 | 마지막 push·상태 |
|---|---|---|---|---|---|---|---|
| Qwen3-TTS | 14.3k | Apache-2.0 | 네이티브(Sohee) | 5개 공개 모델 모두 스트리밍, 첫 패킷 97ms(주장, 종단 지연 아님) | instruct(1.7B CustomVoice) | 미확인 | 활발 |
| VoxCPM2 | 41.2k | Apache-2.0 | 네이티브 | RTF 0.13~0.3(4090) | 스타일 지시 | 미확인 | 활발 |
| CosyVoice3 | 24.3k | 코드 Apache, 0.5B 가중치 Apache | 네이티브 | 150ms | instruct | 일반 예제 `[laughter]` `[breath]`, 한국어 효과 미검증 | 저장소 QwenAudio로 이전 |
| Fish S2-Pro/Drama 3 | 33.6k | Fish Community License(아래), S2-Pro는 Research | 다국어 | 약 100ms(S2-Pro, H200) | `[whisper]` `[angry]` `[laughing]`, Drama 3 다회 수정 | 풍부(제작사 설명), 한국어 청취 검증 없음 | 활발 |
| OmniVoice | 16.4k | 코드 Apache, **가중치 CC-BY-NC** | 포함(600+) | RTF 0.025 | 디자인(중·영 학습) | `[laughter]` `[sigh]` | 상업 불가 |
| Chatterbox Multi V3 | 27.6k | MIT | 포함(23개) | 호스팅 sub-200ms는 유료 서비스 얘기 | exaggeration | Turbo·Nano(영어)만 태그 | 2026-08 retired 공지(archived 아님) |
| Supertonic 3 | 13.8k | 코드 MIT, 모델 OpenRAIL-M | 포함(31개) | CPU/온디바이스 | 태그 10종 | `<laugh>` `<breath>` `<sigh>`, 한국어 청취 미검증 | archived |
| GPT-SoVITS | 64.5k | MIT(코드) | 포함 | 미보고 | 참조음성 | 문서에서 확인 못 함 | - |
| MeloTTS | 7.7k | MIT | 읽기체 기준선 | CPU 실시간 | 문서에서 확인 못 함 | - | 2024-12-24 |
| F5-TTS | 15.5k | 코드 MIT, 가중치 CC-BY-NC | 한국어 체크포인트 미특정 | 미보고 | 참조음성 | - | - |
| XTTS v2 | 2.3k(idiap) | 모델 CPML 비상업 | **ko 지원 확인(17개 언어)** | README 스트리밍 200ms 미만 주장 | 참조음성 | - | 원본 push 2024-08-16 |
| IndexTTS2/2.5 | 25.0k | bilibili Model Use License | 공식 미지원 | 미보고 | 감정 참조 분리, duration_factor | - | KO 커뮤니티판 별도 |
| Higgs Audio v3 | 8.4k | Research & Non-Commercial | 미확인 | 스트리밍, 수치 없음 | 미확인 | 미확인 | - |
| MOSS-TTSD | 1.4k | Apache-2.0 | 포함 | v0.5 스트리밍 | 대화(다자 지원) | - | - |
| Dia / Orpheus / CSM / Spark / Zonos / Kokoro | 영어 중심 | 코드 Apache-2.0 | 미지원 또는 미확인 | - | - | Dia 21종 등(영어) | [[src-github-2026-english-only-tts-roundup]] |

## 번외 (정정된 라이선스)
- **Fish Audio Community License**: 연 매출 **USD 500,000 미만**(관계사 합산, 직전 12개월)에서 무료 상업 이용(LICENSE III(a), A). 호스팅 서비스는 별도 계약이지만 정의에서 **자체 제품이 생성한 조수 응답 음성** 등은 제외(III(c), A). 따라서 "상용 후보에서 반드시 제외"는 C(단정 불가), 서비스 제공 방식별 법무 확인 필요. S2-Pro 가중치는 Research License(상업은 별도 계약). 상세 [[src-fishaudio-2026-fish-speech-s2-pro]].
- **Chatterbox**: MIT이나 개발 중단 공지. [[src-resemble-2026-chatterbox-multilingual]].
- **Supertonic**: 한국어 표현 태그가 요구에 가장 가깝지만 archived. 상용 Play/API 문의 가치. [[src-supertone-2026-supertonic-3]].
- **Higgs Audio**: v3는 비상업. v2 가중치도 Apache가 아니라 Boson 자체 Community License(코드만 Apache). [[src-boson-2026-higgs-audio]].

## 비용 추정 (근거 명시)
- 대본 10문장 x 4종 = 40클립(산술 A). 실제 대본 글자수 미제시라 "2천 자 미만"은 C.
- Typecast 약 $0.075/1천 자는 **Lite 월 $15 / 20만 크레딧의 포함분 환산 단가**(A). 초과분은 $0.09/1천 크레딧, 월정액 조건 존재. 총 2천 자를 4종에 균등 사용 시 Typecast 약 500자 = 포함분 환산 약 $0.04.
- 무료 Space 사용 가능·Colab/GPU 1일 대여 가능은 링크 존재만 확인(C), GPU 단가·월 서버 비용은 미확인(C). 신규 월정액·GPU 비용은 별도.
- 평가표는 선행 노트 PART 5 재사용. 추가 기준: 숫자·고유어 발음, "아이고/음" 감탄, 문장 끝 억양, 속도 0.9~0.95 열화(최적값은 미검증 C), 스트리밍 첫 청크 p50/p90 실측.

## 숫자 해석 주의
- 한국어 CER은 평가셋이 다르면 비교 불가. CV3-Eval 한국어: VoxCPM2 5.69 = CosyVoice3-1.5B 5.69, Fish S2 2.76(B, 재게시 값). VoxCPM 내부 30개 언어 평가: VoxCPM2 0.95 / Fish S2-Pro 0.29(500표본, Gemini 전사). CosyVoice 9.06은 CosyVoice2-S 스트리밍 값([[src-du-2024-cosyvoice2]]).
- 지연은 TTFT·첫 오디오·RTF가 섞여 있어 통일 비교 금지.

## 핵심 한계
- 한국어에서 청취 검증된 비언어 토큰(웃음·숨) 오픈소스 사례 0건 확인(검색 범위 미기록, "없다" 증명 아님).
- 캐스케이드용 백채널·필러 OSS 구현 0건 확인(AI 먼저 말 걸기, 턴 감지, 백채널은 서로 다른 기능).
- 한국어 SER+LLM+TTS 결합 공개 저장소 0건 확인. 가장 가까운 사례는 CAI 2022 논문(코드 공개 미확인). emotion2vec+ -> Claude -> Typecast 조합의 공개 사례는 "이번 검색에서 확인 못 함"으로 한정.
- 한벗 1차 결론은 변함없이 Typecast + 맥락·감정·맞장구·필러 기법. 오픈소스는 W4 비교 후 비용 단계에서 검토. 순위 1~3은 실행 제안이며 사실 검증된 우열이 아님(C).

---

## Update (2026-11-07T18:13:14.163Z)

## 개별 출처 페이지
[[src-qwen-2026-qwen3-tts]] · [[src-openbmb-2026-voxcpm2]] · [[src-funaudio-2026-fun-cosyvoice3]] · [[src-fishaudio-2026-fish-speech-s2-pro]] · [[src-resemble-2026-chatterbox-multilingual]] · [[src-supertone-2026-supertonic-3]] · [[src-boson-2026-higgs-audio]] · [[src-yeowon-2026-indextts-ko]] · [[src-github-2026-english-only-tts-roundup]] · [[src-krafton-2026-raon-speech]] · [[src-kyutai-2026-unmute]]

---

## Update (2026-11-07T20:08:59.842Z)

## 2026-11-08 개발자 저장소 조사 반영
- 코드 수준 메모(맥락→운율, 감정 주입, 스트리밍, 끼어들기)는 [[topic-dev-repos-voice-conversation-2026-11]].
- VoxCPM2 한국어 CER 0.95%는 자사 내부 벤치(ASR=Gemini 3.1 Flash Lite) 값이고 같은 표에서 Fish S2-Pro는 0.29%. Fun-CosyVoice3-0.5B-2512 가중치 Apache-2.0, Raon 9B 가중치 CC-BY-NC-4.0.
- 검증표 정정: Fish Drama 3 가중치는 HF 메타 Research이나 실제 LICENSE는 Community License(연매출 50만 달러 미만 상업 이용 조항) → "상용 일괄 제외"는 부적절, 재검토 필요(C).
- 한국어 WER/CER 낮은 값이 많아도 "포화로 변별력 없음"은 단정 불가(같은 표에 CER 19.7·0.29·0.95 공존). 청취 평가 우선 판단은 유지.
- Pipecat expressive(alpha)에 TTS 어댑터 9종, Typecast·RTZR 없음: [[src-pipecat-2026-expressive-alpha]].

