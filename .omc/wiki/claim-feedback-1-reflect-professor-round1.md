---
title: "claim-feedback-1-reflect-professor-round1"
tags: ["feedback", "decision", "safety", "ser", "privacy", "schedule", "benchmark", "한벗", "paper-evidence"]
created: 2026-10-25T13:42:46.419Z
updated: 2026-10-26T05:47:54.984Z
sources: []
links: ["src-professor-2026-feedback-deliverable-1.md", "claim-tech-1-ser-model.md", "claim-bench-8-emotion-cue-as-question.md", "claim-tech-2-memory-architecture.md", "claim-collab-3-independent-evaluation-ser.md", "claim-tech-8-crisis-referral-flow.md", "claim-bench-3-safety-protocol.md", "claim-collab-2-crisis-detection-gap.md", "overview-benchmark.md", "overview-problem-definition.md", "topic-tech-mvp-stack.md", "claim-tech-4-voice-pipeline-architecture.md", "claim-tech-5-latency-target.md", "claim-tech-6-sensitive-data-consent.md", "claim-bench-4-memory-consent-editing.md", "overview-hanbeot-project.md", "overview-research-cycle-1.md", "topic-app-schedule-7weeks.md", "topic-app-impl-safety-crisis.md", "topic-app-impl-ser-cues.md", "topic-app-impl-consent-privacy.md", "overview-app-design.md", "claim-feedback-2-professor-answer-draft-round1.md", "claim-app-9-ser-evaluation-and-calibration.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "claim-app-11-data-flow-retention-and-deletion.md", "topic-app-paper-evidence.md"]
category: decision
confidence: high
schemaVersion: 1
---

# claim-feedback-1-reflect-professor-round1

# claim-feedback-1-reflect-professor-round1

## 결정
**교수님 1차 피드백 5개 항목([[src-professor-2026-feedback-deliverable-1]])은 전부 반영한다.** ①②⑤는 Wiki에 이미 있는 근거를 문장·표로 옮기는 작업, ③은 표 구조 변경, ④는 신규 작성이다. (결정일 2026-10-25)

## 항목별 반영 방법과 근거 페이지
| # | 반영 | 근거 페이지 | 비고 |
|---|---|---|---|
| ① 감정 분석 검증·오추정 위험 | KEMDy20/AI Hub 4분류 벤치마크(UA ≥0.70, 목표 0.80), "확인 질문" 원칙, 추정 감정 TTL·삭제, 독립 평가 전 보조 신호 + **위험 표 신설**(오탐·미탐·누적·편향) | [[claim-tech-1-ser-model]] [[claim-bench-8-emotion-cue-as-question]] [[claim-tech-2-memory-architecture]] [[claim-collab-3-independent-evaluation-ser]] | 한국어 SER 공개 성능은 0.8139(AI Hub HuBERT) 1건뿐 — 수치 약속 금지 |
| ② 위기 대응 흐름 | 2단 분류(명시적→109 안내+안전 모드 / 암시적→세션 누적 점수), 검증 목표(재현율 ≥0.90, 탈옥 20개 100%), 공개 안전 프로토콜 5항목 | [[claim-tech-8-crisis-referral-flow]] [[claim-bench-3-safety-protocol]] [[claim-collab-2-crisis-detection-gap]] | 109 공식 API 미확인 → MVP는 번호·문자 안내 수준 명시 |
| ③ 익명 커뮤니티 | 표 2를 「기존 대안 경로의 한계」(지인·익명 커뮤니티·텍스트 AI·전문 상담)와 「경쟁 서비스 비교」(제타·Replika·Nomi·Kindroid·Wysa·Woebot·케어콜)로 분리 | [[overview-benchmark]] [[overview-problem-definition]] | 익명 커뮤니티는 전자에만 |
| ④ 주차별 일정표 | 10/25~12월 발표까지 약 7주 표. 안전 프로토콜·동의 화면은 사용자 테스트 전 주 완료. 10월 말 주는 라이선스·데이터 약관 확인으로 채움 | [[topic-tech-mvp-stack]] [[claim-tech-4-voice-pipeline-architecture]] [[claim-tech-5-latency-target]] | 피드백 대상 원본(일정 그림) 미확보 |
| ⑤ 저장 범위·보관 기간 | 데이터 종류별 표(원본 음성 0일, 전사 사용자 삭제 전까지, 특징·감정 라벨 TTL 30일 초안, 위기 로그 최소 보존), 삭제 24h 자동 테스트, voiceprint 미저장 | [[claim-tech-6-sensitive-data-consent]] [[claim-bench-4-memory-consent-editing]] | TTL·위기 로그 보존·opt-in 음성 보관 일수는 팀 확정 필요 |

## 등급
A — 반영 대상(피드백 원문)은 1차 출처. 반영 내용의 근거 등급은 각 페이지 참조(①의 한국어 성능, ②의 109 연동, ⑤의 보관 일수는 C).

## 검증 가능 목표
1. 보완 답변 문서(항목당 1쪽, 표 포함) 작성 후 비평가(GPT-6 Astra) 검토 통과
2. 표 2 분리본과 주차별 일정표가 10/25 회의록 안건 5와 일치
3. ⑤의 보관 기간 숫자 3개 확정 → [[claim-tech-6-sensitive-data-consent]] 갱신

관련: [[overview-hanbeot-project]] · [[overview-research-cycle-1]]

---

## Update (2026-10-25T14:53:00.634Z)

## 앱 설계서 반영 (2026-10-25)
- ④ 주차별 일정표: [[topic-app-schedule-7weeks]] 로 충족(W1–W7 표, 핵심 경로, 중단·축소 기준, 테스트 시작 게이트).
- ① 안전: [[topic-app-impl-safety-crisis]] (2단 분류, 운영, 평가 설계).
- ② SER: [[topic-app-impl-ser-cues]] (라벨 매핑, 확인 질문 규칙·지표).
- ⑤ 개인정보: [[topic-app-impl-consent-privacy]] (데이터 x 처리 단계, 3단 동의 8조합, 저장소별 삭제표).
- 전체: [[overview-app-design]]

---

## Update (2026-10-26T05:47:54.984Z)

## 2026-10-26 논문 보강
2026-10-26 답변 초안 작성 → [[claim-feedback-2-professor-answer-draft-round1]]. ①②⑤ 매핑:
- ① 감정 분석 검증 → [[claim-app-9-ser-evaluation-and-calibration]]
- ② 위기 대응 → [[claim-app-10-crisis-state-machine-and-evaluation]]
- ⑤ 저장·보관 → [[claim-app-11-data-flow-retention-and-deletion]]
- 주의: 위 표의 "원본 음성 0일", "TTL 30일 초안"은 위치별 흐름·목적 기준 종료 조건으로 대체됨(30일은 근거 없음, W1 재결정). 논문 근거 전체는 [[topic-app-paper-evidence]].

