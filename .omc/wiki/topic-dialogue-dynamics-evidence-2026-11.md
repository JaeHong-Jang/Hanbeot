---
title: "topic-dialogue-dynamics-evidence-2026-11"
tags: ["scopus-2026-11", "turn-taking", "barge-in", "backchannel", "filler", "full-duplex", "verified"]
created: 2026-11-07T19:47:31.700Z
updated: 2026-11-07T19:53:00.862Z
sources: ["research_notes/Scopus 조사/04_dialogue_dynamics_literature.md", ".omc/orchestra/reviews/20261108_040523_verify_04_dialogue_dynamics_literature.md", "reports/한벗 최종 계획 v3.md"]
links: ["topic-scopus-literature-2026-11.md", "topic-app-impl-audio-stt-turn.md", "claim-app-2-call-screen-gemini-live.md", "claim-tech-5-latency-target.md", "claim-app-12-interruption-backchannel-filler-rules.md", "src-lin-2025-full-duplex-bench.md", "src-lin-2025-full-duplex-bench-v1-5.md", "src-arora-2025-talking-turns.md", "src-stivers-2009-turn-taking-universals.md", "src-shiwa-2009-robot-response-delay.md", "src-maslych-2025-response-delay-fillers.md", "src-kyutai-2024-moshi.md", "src-wang-2024-freeze-omni.md", "src-veluri-2024-synchronous-llms.md", "src-ohashi-2025-j-moshi.md", "src-lin-2026-fdb-v2-mtr-thai-bench.md", "src-corps-2022-overrated-gaps.md", "src-young-lee-2004-korean-backchannel.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-dialogue-dynamics-evidence-2026-11

# topic-dialogue-dynamics-evidence-2026-11

상위: [[topic-scopus-literature-2026-11]] · [[topic-app-impl-audio-stt-turn]] · [[claim-app-2-call-screen-gemini-live]] · [[claim-tech-5-latency-target]]. 후속 결정: [[claim-app-12-interruption-backchannel-filler-rules]]. 원문 요약: [[src-lin-2025-full-duplex-bench]] · [[src-lin-2025-full-duplex-bench-v1-5]] · [[src-arora-2025-talking-turns]] · [[src-stivers-2009-turn-taking-universals]]. 출처: 노트 04 + 검증표(A110/B21/C35, 2026-11-08). 검증표가 노트와 충돌하면 검증표를 따랐다. 설계값(팀 초기값)은 논문 결과가 아니다.

## 1. 턴 간격·지연 지각
| 항목 | 수치 | 주의(검증 반영) | 등급 |
|---|---|---|---|
| 10개 언어 평균 응답 간격 [[src-stivers-2009-turn-taking-universals]] | 평균 +208ms, 중앙값 +100ms, 최빈값 0ms | 주로 극성 질문-응답의 offset. TTFA와 동일 지표 아님. 덴마크어 +469, 일본어 +7 | A |
| 한국어 간격 | **182ms** (Levinson & Torreira 종설이 Stivers를 인용해 제시) | 2차 인용(B). 노트의 "미확정"은 정정 | B |
| 사람 계획 지연 | 간격 약 200ms vs 새 단어 명명 600ms+ | 문장 생성은 약 1,500ms 사례도 있음. 선행 계획은 설명 모형 | B |
| Shiwa 2009 [[src-shiwa-2009-robot-response-delay]] | 응답 지연 선호가 1초에서 최고, 2초 부근 평탄 | **실험 1에서 0초 vs 1초 선호가 유의하게 달랐다**("1초까지 변화 없음"은 오류). 2초 이후 악화도 서술되어 "2초 넘어도 괜찮다"로 인용 금지. 일본 로봇 | 정점 A / 평탄 B |
| Maslych 2025 [[src-maslych-2025-response-delay-fillers]] | VR N=54, 1.5/4.0/6.5s. 1.5s 최선호 57.41%, 6.5s 최비선호 61.11%. 4초 미만 권고 | 영어, 대학생, VR | A |
| FDB v1.5 | 인간다운 수습엔 지연 약 1.5초 미만 | 5개 시스템 관찰 | A |
| 근거 없던 문구 | "사람 약 0.2초, 4초 초과 시 저하"의 단일 원문 없음 | Stivers/Maslych로 분해해 인용 | C |
해석: 한벗 TTFA P50 1.0s + P90 1.5s는 **팀의 초기 목표**이며 한국어 음성 통화에서 실증된 허용 상단이 아니다. 사람 평균 208ms와 직접 비교 대상이 아님.

## 2. 말 끝 감지·끼어들기
| 방법/시스템 | 수치 | 주의 | 등급 |
|---|---|---|---|
| FDB v1 끼어들기 후 응답 지연 | Moshi 0.257, Gemini 1.183, Freeze-Omni 1.409, dGSLM 2.531 s | 응답 지연이지 TTS 중단 시간이 아님 | A |
| FDB v1 내용 점수(0~5) | Moshi 0.765, dGSLM 0.201 | **둘 다 0-5 범위 안(척도 모순 없음)** | A |
| FDB v1.5 맞장구 시 Resume | Sonic 0.98, Gemini 0.93, Freeze-Omni 0.80, GPT-4o 0.70, Moshi 0.06 | **Resume = 이전 발화 내용을 계속하는 의미적 행동**(오디오 무정지 아님) | A |
| GPT-4o 정지 | 끼어들기 0.23s, 맞장구에도 0.21s | 과민형. 한국어·타 파이프라인 전이 보증 아님 | A |
| 제3자 대화/배경음 | GPT-4o Respond 0.91/0.93, 제3자 말 구분 약 91% 수준 문제 | 주소 인식 실패 | A |
| LiveKit EOU (2024-12 블로그) | VAD 단독 대비 의도치 않은 끼어듦 **-85%**, 135M, 약 50ms | 영어 초기 모델, 벤더. **현행 LiveKit 모델은 한국어 지원**(노트의 "한국어 불가" 정정) | A/벤더 |
| Smart Turn v3 | 한국어 96.85%, FP 1.12%, FN 2.02% (n=890) | 벤더 자체 테스트셋 | A/벤더 |
| TurnGPT / VAP | bal.acc 0.913(Assistant); VAP 가중 F1 S/H .899, BC-pred .723 | 영어 | A |
| 다국어 VAP | 영 77.16/중 84.60/일 76.54, 한국어 없음. F0 평탄화 시 중·일 하락 | 한국어 F0 의존은 가설 | A |
| Talking Turns | 11명 연구. 끼어든 뒤 **끼어든 사용자가 발언권을 얻은 비율** 캐스케이드 59.4%, Moshi 17.4% | "AI가 턴을 넘겨받은" 해석은 오류. 데이터는 Switchboard/Columbia Games/Fisher(Candor 혼동 정정) | A |

## 3. 맞장구·필러
| 항목 | 내용 | 등급 |
|---|---|---|
| 맞장구 정의(FDB) | 1초 미만 & 2단어 미만 | A |
| 빈도 | 사람 0.30%(결정 시점 대비) vs Moshi/캐스케이드 0.01% (Talking Turns) | A |
| 예측 | VAP BC-pred F1 .723(영어). **CABP 한국어 최고 M-F1 39.5**(검증표: 원표 확인; 노트의 "약 35"는 정정). 과제 다르므로 .723과 직접 비교 불가 | A/B |
| Choi 2024 ETRI | "+18.7%"는 **논문에 한국어 결과로 없음**(영어 Switchboard, 기존 예측 방법 대비 수치) -> 한국어 근거로 사용 금지 | 불일치 |
| 한국어 맞장구 빈도 | Young & Lee는 상담 장르 빈도 우위를 뒷받침하지 않음 | C |
| 필러 효과 | Maslych: 자연 필러가 4.0s, 6.5s에서 지각 응답 시간 개선, 1.5s에서는 유의 효과 없음(비유의는 효과 0의 증명 아님). 인공 필러 효과 없음. 필러 유형 주효과는 일부 지표에서 유의 | B |
| 맞장구 개인차 | 청취자별 변동 큼(2024) | B |
| Cho 2022 | 의사난수 백채널이 청취 지각·자기노출 증가(N=40) | A |

## 4. 전이중 모델 비교
| 모델 | 요지 | 캐스케이드 모방 가능 | 등급 |
|---|---|---|---|
| Moshi ([[src-kyutai-2024-moshi]]) | 이론 160ms/실측 200ms, 끼어들기 지연 최저(0.257)이나 맞장구 Resume 0.06 | 상시 듣기만 | A |
| Freeze-Omni ([[src-wang-2024-freeze-omni]]) | 제1저자 **Wang**. 3상태 분류, 지연 평균 745ms/P90 1,020ms | VAD 시작 -> 청크 -> 3상태 판정 | A |
| Gemini Live | 끼어들기 인정 느림(정지 2.20s), 맞장구 Resume 0.93 | 끈기형 정책 | A |
| GPT-4o Realtime | 양보형, 정지 0.23s | 양보형 정책 | A |
| SyncLLM ([[src-veluri-2024-synchronous-llms]]) | 200ms까지 강건, 240ms에서 하락 | 합성 대화 증폭 아이디어 | A |
| J-Moshi ([[src-ohashi-2025-j-moshi]]) | 제1저자 Ohashi. 일본어 이식 선례 | - | B |

## 5. 한벗 캐스케이드 규칙 4개 (설계값, 미확정)
[[claim-app-12-interruption-backchannel-filler-rules]]에 결정으로 정리. 요약: (1) 봇 발화 중 VAD 시작 시 ducking 후 맞장구 사전·길이로 resume/cancel, (2) 맞장구 클립은 사용자 발화 중 VAD 무음+Smart Turn 미완료일 때만 8~10초 1회, (3) 필러는 1.0초까지 첫 오디오가 없을 때만, TTFA 1.5초 이내면 생략, (4) 말 끝 격자 튜닝. **모든 수치는 설계값이며 논문 결과가 아니다.**

## 6. 평가 지표 제안
TTFA P50/P90(필러 포함·제외 별도, 측정 시작점 정의 필수), 끼어들기 정지 지연, 끼어들기 후 응답 지연(FDB 식과 시작점 일치 확인), Respond 비율, 오중단률(=1-Resume), 조기 종료율 <=10%, 놓친 턴 전환율, 맞장구 적절성(새 정의), 필러 효과 설문. 한국어 이식 선례: [[src-lin-2026-fdb-v2-mtr-thai-bench]]. 판정에 ASR 텍스트를 쓰므로 한국어는 인간 검수 샘플 필요.

## 7. 연구 기회
한국어 겹침 발화 벤치마크(FDB v1.5 이식), 오중단률-지연 곡선, 클립 기반 맞장구·필러 한국어 지각 실험(Maslych 구조 복제), 한국어 VAP/F0 의존 실험, 정서 상황별 턴 정책. 모두 작성자 제안.

---

## Update (2026-11-07T19:53:00.862Z)

## 추가 원문 링크
간격 해석 주의: [[src-corps-2022-overrated-gaps]]. 한국어 맞장구 2차 서술(C): [[src-young-lee-2004-korean-backchannel]]. 필러 지연 실험: [[src-maslych-2025-response-delay-fillers]].

