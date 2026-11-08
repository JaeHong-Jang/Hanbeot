---
title: "overview-hanbeot-project"
tags: ["한벗", "overview", "문워크", "사업개요", "project", "paper-evidence", "meeting-followup", "hanbeot", "target"]
created: 2026-10-25T06:41:02.286Z
updated: 2026-11-08T06:34:14.580Z
sources: []
links: ["overview-orchestra-team.md", "overview-problem-definition.md", "overview-market-demand.md", "overview-technology.md", "overview-benchmark.md", "overview-researcher-collaboration.md", "overview-research-cycle-1.md", "src-professor-2026-feedback-deliverable-1.md", "claim-feedback-1-reflect-professor-round1.md", "overview-app-design.md", "claim-feedback-2-professor-answer-draft-round1.md", "topic-app-paper-evidence.md", "topic-market-tam-sam-som-assembly.md", "claim-app-8-hypotheses-h1-h5.md", "bench-clova-carecall.md", "claim-app-9-ser-evaluation-and-calibration.md", "topic-meeting-followup-ser-2026-11.md", "src-kim-2024-dementia-ser.md", "src-lee-2026-elderly-whisper-asr.md", "overview-final-plan-v3.md", "topic-scopus-literature-2026-11.md", "claim-research-1-paper-a-korean-ser-selective-prediction.md", "claim-app-12-interruption-backchannel-filler-rules.md", "claim-app-13-tts-blind-test-protocol-w4.md"]
category: architecture
confidence: high
schemaVersion: 1
---

# overview-hanbeot-project

## 한벗 프로젝트 개요

- **팀**: 문워크 (한남대학교 빅데이터응용학과) – 장재홍(팀장, 총괄·AI), 이동섭(데이터 처리), 성하윤(UI), 함승주(사용자 조사·시제품)
- **아이템**: 속마음을 털어놓을 곳이 없는 사람들을 위한 음성 기반 개인 맞춤형 AI 친구 「한벗」
- **1차 타깃**: 대인관계·팀플·진로 고민을 가까운 사람에게 말하지 못하는 대학생 → 이후 취준생·직장인
- **핵심 기능**: ① 음성 감정 단서 분석(억양·속도·멈춤) ② 대화 방식 선택(들어줘/조언/정리) ③ 동의 기반 기억 관리(사실/추정 감정 분리, 확인·수정·삭제) ④ 위기 신호 시 109 등 전문기관 안내
- **수익 모델**: 음성·영상통화 무료, 장기 기억·고급 기능 월 구독. 개인정보 통제 기능은 전원 무료.
- **이번 학기 목표(2026-12)**: MVP + 대학생 30명 테스트, 재이용 의향 60%, 만족도 3.5/5

## 영역별 종합 페이지
- [[overview-orchestra-team]] – 리서치·검증 팀 구조
- [[overview-problem-definition]] – 문제정의 근거
- [[overview-market-demand]] – 시장 수요·TAM/SAM/SOM
- [[overview-technology]] – 기술 스택·논문
- [[overview-benchmark]] – 경쟁 서비스·벤치마크
- [[overview-researcher-collaboration]] – 연구자 협업 필요성

## 원천 문서
- 보고서/AI 부트캠프 창업 동아리/제출 서류/2026-2_AI 창업동아리 신청서_문워크_장재홍.pdf
- 보고서/Unist 지원 프로그램/UNIST연구자-예비창업자 팀빌딩 프로그램[한 벗].pdf

---

## Update (2026-10-25T07:43:07.870Z)

## 리서치 사이클
- [[overview-research-cycle-1]] – 2026-10-25 딥리서치 (5트랙, 검증 1,038행, Wiki 371페이지, 보고서 `reports/한벗 창업 딥리서치.md`)

---

## Update (2026-10-25T13:43:06.143Z)

## 외부 피드백 (2026-10-25 추가)
- 지도교수 1차 산출물 피드백 원문: [[src-professor-2026-feedback-deliverable-1]] — 긍정 3, 보완 5(감정 분석 검증·오추정 위험, 위기 대응 흐름, 표 2 익명 커뮤니티, 주차별 일정표, 데이터 보관 범위·기간).
- 반영 결정과 항목별 근거 매핑: [[claim-feedback-1-reflect-professor-round1]]. 파일 보관: `보고서/AI 부트캠프 창업 동아리/피드백/`.

---

## Update (2026-10-25T14:52:53.317Z)

## 앱 설계서 (2026-10-25)
- MVP 개발 기준 문서 「한벗 앱 설계서」(2차 개정)를 Wiki에 적재했다. 7주(10/27–12/12) 일정, P0 12개 기능, W6 사용자 테스트 20–30명, 테스트 시작 게이트 5조건.
- 핵심 가설 H1–H5(문제·음성 선택·감정 단서 가치·기억 승인·결제)를 검증 대상으로 둔다.
- 진입점: [[overview-app-design]]

---

## Update (2026-10-26T05:47:57.791Z)

## 2026-10-26 논문 보강
- 외부 피드백: 교수님 1차 피드백 답변 초안(2026-10-26) 요지는 [[claim-feedback-2-professor-answer-draft-round1]], 기술별 논문 근거(P1~P101)는 [[topic-app-paper-evidence]].

---

## Update (2026-11-07T11:40:38.843Z)

## 열린 질문 (2026-11-07)
- 회의 후속 조사 노트의 예시와 비교 조건(독거노인 133명·평균 80.6세, 노인 음성 인식, 고령자 구술 데이터)이 고령층을 가리킨다. 현재 Wiki의 1차 타깃은 대학생이다. 타깃 변경인지 2차 확장인지 팀 확인 필요.

---

## Update (2026-11-08)

## 결정: 고령자 제외, 1차 타깃 대학생 유지 (2026-11-08)

"열린 질문 (2026-11-07)"에 대한 답. 팀이 2026-11-07 커밋 607f0f5("한벗 대상에서 고령자 제외")로 회의 후속 조사·데이터셋·TTS·유사앱 노트에서 고령층 전제를 걷어냈고, 팀장이 11/8 확인했다. **1차 타깃은 대학생 그대로**다. 기록: `docs/adr/ADR-0005-target-older-adults-excluded.md`.

주의: 11/7에 적재한 [[topic-meeting-followup-ser-2026-11]], [[src-kim-2024-dementia-ser]], [[src-lee-2026-elderly-whisper-asr]]은 고령층 전제가 남아 있던 노트 판본을 근거로 썼다. 독거노인 133명 연구(음성만 3감정 64.7%, 2단계 69.3%)는 "한국어 실제 대화에서 SER 성능이 어디까지 나오는가"의 **참고 수치**로만 쓰고, 한벗 사용자 조건과 같다고 쓰지 않는다. 노인 STT·고령자 구술 데이터(71703)는 한벗 범위 밖이다.

---

## Update (2026-11-08T06:34:14.580Z)

## 최종 통합 계획 v3 (2026-11-08)

제품·목소리·감정 인식·SCI 논문 트랙을 한 문서로 묶은 계획: [[overview-final-plan-v3]] (원문 `reports/한벗 최종 계획 v3.md`). 근거 허브 [[topic-scopus-literature-2026-11]], 논문 설계 [[claim-research-1-paper-a-korean-ser-selective-prediction]], 턴 처리 규칙 [[claim-app-12-interruption-backchannel-filler-rules]], TTS 블라인드 테스트 [[claim-app-13-tts-blind-test-protocol-w4]]. 11/9 회의 결정 요청 17건은 `docs/harness/회의-안건-2026-11-09.md`.

