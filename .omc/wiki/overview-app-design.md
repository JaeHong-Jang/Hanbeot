---
title: "overview-app-design"
tags: ["app-design", "overview", "mvp", "hanbeot", "hypothesis", "paper-evidence"]
created: 2026-10-25T14:51:55.321Z
updated: 2026-10-26T05:47:03.646Z
sources: ["reports/한벗 앱 설계서.md"]
links: ["overview-hanbeot-project.md", "overview-technology.md", "overview-benchmark.md", "overview-research-cycle-1.md", "claim-bench-7-no-therapy-positioning.md", "claim-bench-8-emotion-cue-as-question.md", "topic-tech-mvp-stack.md", "claim-app-8-hypotheses-h1-h5.md", "claim-tech-1-ser-model.md", "claim-tech-3-stt-tts-vendors.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-tech-2-memory-architecture.md", "claim-tech-8-crisis-referral-flow.md", "claim-tech-5-latency-target.md", "topic-app-benchmark-map.md", "topic-app-feature-spec.md", "topic-app-screen-flow.md", "topic-app-architecture.md", "topic-app-impl-audio-stt-turn.md", "topic-app-impl-ser-cues.md", "topic-app-impl-dialogue-tts.md", "topic-app-impl-memory.md", "topic-app-impl-safety-crisis.md", "topic-app-impl-consent-privacy.md", "topic-app-stack-and-forks.md", "topic-app-cost-latency-budget.md", "topic-app-schedule-7weeks.md", "topic-app-risks.md", "topic-app-critic-review-1.md", "claim-app-1-pipecat-orchestrator.md", "claim-app-2-call-screen-gemini-live.md", "claim-app-3-emotion-cue-confirmation-rules.md", "claim-app-4-memory-four-states.md", "claim-app-5-crisis-ops-and-tel109.md", "claim-app-6-consent-and-deletion.md", "claim-app-7-schedule-gates-and-cuts.md", "topic-app-paper-evidence.md", "claim-app-9-ser-evaluation-and-calibration.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "claim-app-11-data-flow-retention-and-deletion.md", "claim-feedback-2-professor-answer-draft-round1.md"]
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

