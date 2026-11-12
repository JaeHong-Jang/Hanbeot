---
title: "overview-app-design"
tags: ["app-design", "overview", "mvp", "hanbeot", "hypothesis", "paper-evidence", "meeting-followup", "scopus-2026-11"]
created: 2026-10-25T14:51:55.321Z
updated: 2026-11-07T19:52:40.152Z
sources: ["reports/한벗 앱 설계서.md"]
links: ["overview-hanbeot-project.md", "overview-technology.md", "overview-benchmark.md", "overview-research-cycle-1.md", "claim-bench-7-no-therapy-positioning.md", "claim-bench-8-emotion-cue-as-question.md", "topic-tech-mvp-stack.md", "claim-app-8-hypotheses-h1-h5.md", "claim-tech-1-ser-model.md", "claim-tech-3-stt-tts-vendors.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-tech-2-memory-architecture.md", "claim-tech-8-crisis-referral-flow.md", "claim-tech-5-latency-target.md", "topic-app-benchmark-map.md", "topic-app-feature-spec.md", "topic-app-screen-flow.md", "topic-app-architecture.md", "topic-app-impl-audio-stt-turn.md", "topic-app-impl-ser-cues.md", "topic-app-impl-dialogue-tts.md", "topic-app-impl-memory.md", "topic-app-impl-safety-crisis.md", "topic-app-impl-consent-privacy.md", "topic-app-stack-and-forks.md", "topic-app-cost-latency-budget.md", "topic-app-schedule-7weeks.md", "topic-app-risks.md", "topic-app-critic-review-1.md", "claim-app-1-pipecat-orchestrator.md", "claim-app-2-call-screen-gemini-live.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-app-4-memory-four-states.md", "claim-app-5-crisis-ops-and-tel109.md", "claim-app-6-consent-and-deletion.md", "claim-app-7-schedule-gates-and-cuts.md", "topic-app-paper-evidence.md", "claim-app-9-ser-evaluation-and-calibration.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "claim-app-11-data-flow-retention-and-deletion.md", "claim-feedback-2-professor-answer-draft-round1.md", "topic-meeting-followup-ser-2026-11.md", "topic-ser-context-personalization.md", "topic-data-korean-emotion-speech-datasets.md", "topic-ser-papers-synthesis.md", "claim-app-12-interruption-backchannel-filler-rules.md", "claim-app-13-tts-blind-test-protocol-w4.md"]
category: architecture
confidence: medium
schemaVersion: 1
---

# overview-app-design

상위: [[overview-hanbeot-project]], [[overview-technology]], [[overview-benchmark]], [[overview-research-cycle-1]]

## 한 장 요약 (설계서 0절, 2차 개정 2026-10-25)
1. **무엇을**: 대학생이 음성으로 고민을 말하면 들어주는 AI 친구. React 웹앱(모바일 브라우저 우선)으로 통화하고, 통화 후 요약과 기억 후보를 사용자가 승인한다.
2. **차별점(가설)**: 음성 감정 단서는 확인 질문으로만 쓴다. 기억은 "내가 말한 것"과 "한벗이 느낀 것"으로 나누고 저장 전 동의를 받는다. 위기 시 109 안내와 안전 모드로 전환한다. 치료가 아닌 경청·동반을 내세운다 ([[claim-bench-7-no-therapy-positioning]], [[claim-bench-8-emotion-cue-as-question]]).
3. **참고 앱**: 통화 화면 Gemini Live, 끼어들기 Gemini·ChatGPT·Character.AI, 기억 편집 Nomi·Replika, 기억 제안 Kindroid, 위기 화면 Wysa, 통화 후 결과 클로바 케어콜.
4. **스택**: React + Pipecat + RTZR STT + Smart Turn v3 + emotion2vec+ base + Claude 스트리밍(위험 태그) + Typecast TTS + Postgres/pgvector ([[topic-tech-mvp-stack]]).
5. **7주 범위**: W1 라이선스·문제 인터뷰, W5까지 P0 완료 + 테스트 시작 게이트 통과 후 W6 사용자 20~30명 테스트, W7 분석·발표.
6. **목표**: TTFA P50 1.0s(Wiki 목표)는 예산 합계 1.4–1.5s로 미달 가능, W2 측정 후 1.5s 조정 여부 결정. 위기 평가 목표는 테스트 세트 성능이지 실제 안전성 보증이 아니다.
7. **최대 미확인**: 문제·지불 의사(H1·H5), emotion2vec 가중치·openSMILE 라이선스, 한국어 SER 성능, 커뮤니티 플러그인 성숙도, 109 연동, 실측 TTFA.
이 문서의 위상은 **설계 가설**이다. W6 테스트와 자체 벤치마크로 반증되면 Wiki 결정과 함께 수정한다. 자체실측은 현재 0건.

## 0.1 핵심 가설 (상세: [[claim-app-8-hypotheses-h1-h5]])
| H | 가설 | 반증 신호(임시) | 반증 시 조치 |
|---|---|---|---|
| H1 문제 | 주 1회 이상 털어놓을 상대·시간이 없고 현재 대안에 불만 | 인터뷰 절반 미만 해당, "챗봇으로 충분" 다수 | 타깃 재정의, 통화 루프 + 안전만 유지 |
| H2 음성 선택 | 텍스트보다 음성을 고르는 사용자 상당수 | 텍스트 선택 과반 | 텍스트 우선 + 음성 보조 |
| H3 감정 단서 가치 | 확인 질문이 이해받음을 높이고 침해감은 낮춤 | ON 이해받음이 OFF 이하, 침해감 30% 이상 | SER·확인 질문 P2 강등 |
| H4 기억 승인 수용 | 승인을 귀찮아하지 않고 가치 있게 봄 | 처리율 50% 미만 | 통화별 저장 ON/OFF로 단순화 |
| H5 결제 | 월 9,900–14,900원 지불 의사, 원가가 이를 안 넘음 | 상한 중앙값 9,900원 미만 | 가격·무료 분 상한 재설계 |
표본 20~30명이므로 탐색적 해석만 한다.

## 기술 결정 재검토 조건
| Wiki 결정 | 재검토 조건 | 조치 |
|---|---|---|
| SER = emotion2vec+ ([[claim-tech-1-ser-model]]) | 라이선스 부정, 4-class UA 0.70 미만, H3 반증 | SenseVoice 교체 또는 SER 제외(P2) |
| STT = RTZR ([[claim-tech-3-stt-tts-vendors]]) | 팀 녹음 CER 8% 초과, 플러그인 연동 W2 실패 | WebSocket 직접 구현 → gpt-4o-mini-transcribe |
| TTS = Typecast | 블라인드 MOS 3.5 미만 | ElevenLabs Flash |
| cascade ([[claim-tech-4-voice-pipeline-architecture]]) | 조정 후에도 P50 1.5s 초과 | 미달 보고, S2S 비교 실험 앞당김 검토 |
| 3블록 메모리 ([[claim-tech-2-memory-architecture]]) | 50문항 정답률 70% 미만 또는 H4 반증 | 1블록 단순화 |
| 위기 2단 분류 ([[claim-tech-8-crisis-referral-flow]]) | 평가 세트 기준 미달 | 외부 테스트 미시작 |

## Wiki와 달라진 4곳
| Wiki 페이지 | Wiki 내용 | 설계서 | 사유 |
|---|---|---|---|
| [[claim-bench-7-no-therapy-positioning]] 검증 방법 | PHQ-9/GAD-7 악화 여부 | 사용 안 함(전문가 검토 전) | 비평 18 |
| [[claim-bench-8-emotion-cue-as-question]] | 확인 일치율 70% | "확인 수용률" 수용성 지표로 재정의 | 비평 11 |
| [[claim-tech-5-latency-target]] | P50 1.0s | 유지, W2 측정 후 1.5s 조정 여부 | 비평 8 |
| [[claim-tech-8-crisis-referral-flow]] | 일일 60분·주 6일 | 임시 운영 기준 표기 | 비평 27 |

## 절별 페이지 목록
- 1절 벤치마크 지도 → [[topic-app-benchmark-map]]
- 2절 MVP 기능 명세 → [[topic-app-feature-spec]]
- 3절 화면 흐름 → [[topic-app-screen-flow]]
- 4절 시스템 아키텍처 → [[topic-app-architecture]]
- 5절 ①②③ → [[topic-app-impl-audio-stt-turn]] / ④⑤ → [[topic-app-impl-ser-cues]] / ⑥⑦⑫ → [[topic-app-impl-dialogue-tts]] / ⑧ → [[topic-app-impl-memory]] / ⑨ → [[topic-app-impl-safety-crisis]] / ⑩⑪ → [[topic-app-impl-consent-privacy]]
- 6절 스택·포크 → [[topic-app-stack-and-forks]]
- 7절 비용·지연 → [[topic-app-cost-latency-budget]]
- 8절 7주 일정 → [[topic-app-schedule-7weeks]]
- 9절 리스크 → [[topic-app-risks]]
- 10절 출처 → 각 페이지의 `src-*` 링크
- 11절 비평 반영 → [[topic-app-critic-review-1]]
- 결정: [[claim-app-1-pipecat-orchestrator]], [[claim-app-2-call-screen-gemini-live]], [[claim-app-3-emotion-cue-confirmation-rules]], [[claim-app-4-memory-four-states]], [[claim-app-5-crisis-ops-and-tel109]], [[claim-app-6-consent-and-deletion]], [[claim-app-7-schedule-gates-and-cuts]], [[claim-app-8-hypotheses-h1-h5]]

## 원천
- 설계서: `reports/한벗 앱 설계서.md`
- 노트 2건: `research_notes/한벗 앱 설계서/ux_benchmark.md`, `research_notes/한벗 앱 설계서/implementation_refs.md`
- 검증표 2건(GPT-6.1 Sol): `.omc/orchestra/reviews/20261025_225231_verify_ux_benchmark.md`, `.omc/orchestra/reviews/20261025_230134_verify_implementation_refs.md`
- 비평 1건(GPT-6 Astra, 27건): `.omc/orchestra/reviews/20261025_232255_critic_app_design.md`
- 출처 슬러그 매핑: `research_notes/한벗 앱 설계서/src_slug_map.md`
- 실행 run: 20261025_224701

---

## Update (2026-10-26T05:47:03.646Z)

## 2026-10-26 논문 보강
- 기술별 논문 근거 진입 페이지: [[topic-app-paper-evidence]] (원문 `reports/한벗 기술 논문 근거.md`, P1~P101).
- 설계서에 10.1.1절(논문 목록 P1~P101)과 11.1절이 추가됐다.
- 신규 결정: [[claim-app-9-ser-evaluation-and-calibration]] (SER 평가·보정·W6 비교), [[claim-app-10-crisis-state-machine-and-evaluation]] (위기 등급·상태 전이·평가), [[claim-app-11-data-flow-retention-and-deletion]] (데이터 흐름·종료 조건·삭제 범위).
- 교수님 답변 초안 요지: [[claim-feedback-2-professor-answer-draft-round1]].

---

## Update (2026-11-07T11:40:36.029Z)

## 2026-11-07 회의 후속 조사 반영 (미확정)
- 새 topic 페이지(11/9 회의 결정 전 제안): [[topic-meeting-followup-ser-2026-11]] · [[topic-ser-context-personalization]] · [[topic-data-korean-emotion-speech-datasets]] · [[topic-ser-papers-synthesis]]

---

## Update (2026-11-07T19:52:40.152Z)

## 2026-11-08 문헌 심층 반영
- 추가 결정: [[claim-app-12-interruption-backchannel-filler-rules]] (끼어들기·맞장구·필러·말 끝 규칙, 설계값), [[claim-app-13-tts-blind-test-protocol-w4]] (W4 TTS 블라인드 테스트).


---

## Update (2026-11-11)

## 구현에서 달라진 점 (apps/web, `front` 브랜치)
설계서에 없거나 설계서와 다르게 구현한 화면 요소. 팀 확인 전이며 결정이 아니다.

| 항목 | 설계서 | 구현 | 사유 |
|---|---|---|---|
| 통화 화면 오브 | 오브 1개 + 상태 텍스트 ([[claim-app-2-call-screen-gemini-live]]) | 오브는 1개 그대로 두되 친구 캐릭터 사진을 오브로 사용, 고리 움직임으로 듣는 중·생각 중·말하는 중 표시 | 사업계획서 삽화의 통화 화면과 맞춤. 캐릭터 2종(하늘·도윤)은 계약에 없는 클라이언트 취향값(localStorage) |
| 홈 화면 | 화면 흐름에 없음 ([[topic-app-screen-flow]]) | `/` 홈 추가: 인사, 대화 모드 선택, 지난 기억 1건, 전화 걸기. 동의 화면은 `/start`로 이동 | 통화 전 진입 화면이 필요. 필수 동의 전에는 `/start`로 보냄 |
| 시작 화면 | 없음 | 붓으로 "한벗"을 쓰는 스플래시(탭하면 건너뜀, 움직임 줄이기 설정 시 생략) | 브랜드 표현. 기능 영향 없음 |
| 확인 질문 응답 | [맞아]/[아니야] 1탭 ([[claim-app-3-emotion-cue-confirmation-rules]]) | 카드 UI와 `VoiceClient.answerCue()` 추가. 서버로 보내는 이벤트 스키마는 아직 없음 | `packages/contracts/events`에 응답 이벤트 추가 필요(TODO) |
| 부르는 이름 | 없음 | 설정에서 입력, 이 기기에만 저장 | 홈 인사말용. 서버 전송 없음 |
| 가짜 API | 없음 | `npm run dev:mock`에서만 `/api/*`를 가로채는 `shared/api/mockApi.ts` | 서버 없이 화면 확인용 |
| 화면 디자인 (2026-11-12, `front_develop`) | 없음 | 운영 앱 문법을 기본으로 다시 짬: 밝은 바탕+흰 카드 묶음, 프리텐다드, 하단 고정 버튼, 설정은 주제별 묶음 목록, 홈은 친구 카드(사진·대화 방식 세그먼트·전화 버튼) 하나로 정리. 편지 컨셉은 우체통 빨강 포인트, 편지 본문 명조(고운바탕), 서명 손글씨(하이멜로디) 세 곳에만 | 이전 손편지 시안이 앱 구성·가독성이 약하다는 팀 피드백. 통화 화면은 바꾸지 않음. 팀 확인 전 |
| 통화 후 요약 | 요약 줄 목록 | "통화가 끝났어요" + 친구가 쓴 편지 한 장(받는 이름, 요약, 다음에 해볼 것, 서명) + 기억 후보 저장/버리기. 승인 동작은 그대로(자동 승인 없음) | 편지 컨셉이 가장 잘 드러나는 지점. P0-8 동작은 바뀌지 않음 |
| 홈 구성 (2026-11-12) | 인사, 대화 모드, 지난 기억 1건, 전화 걸기 | 친구 카드 사진 위에 친구가 먼저 건네는 한마디(지금은 정해진 문장)+최근 저장 기억, 오른쪽 위 "도움 받기" 시트(109·1577-0199·1388·119), 최근 편지 가로 카드(누르면 `/letters/:id`), 이번 주 통화 횟수·분 | 재방문 유도, 위기 자원은 홈에서도 한 번에(P0-6). 통화 기록은 이 기기 localStorage에 세션 번호·시간만 저장, 편지 본문은 서버 요약에서 읽음. 지난 통화 목록 API가 생기면 교체 |
| 홈·기록·설정을 "하늘이네 집"으로 (2026-11-13) | 홈·기억·설정 화면 | 거실(`/`, 홈: 시간대별 방 그림, 소파=통화, 현관=친구 쪽지, 창문=시간대 바꿔 보기, 대화 방식, 이번 주) / 냉장고(`/fridge`: 최근 편지 사진 4장, 달력에 이번 주 통화, 메모에 최근 기억) / 내 방(`/room`: 옷장=친구 바꾸기, 이름, 기억, 동의, 데이터 삭제). 첫 방문 3단계 안내. 예전 홈·설정·하단 탭바 삭제. 편지지(V3) 컨셉은 실제 구현해 본 뒤 폐기. 시작 화면은 어두운 거실에 불이 켜지는 장면, 동의 화면은 "하늘이네 집에 들어가기 전에"(거실 그림+하늘이 인사), 전체 색 토큰을 벽지 흰색+소파 초록(#4e5b3f)으로 바꿈 | 팀 컨셉 비교 결과. 방 그림은 하늘이(여성) 기준이라 도윤을 골라도 그림은 같음. 쪽지 알림·앱 잠금은 준비 중 안내만 |
