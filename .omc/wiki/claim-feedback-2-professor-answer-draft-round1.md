---
title: "claim-feedback-2-professor-answer-draft-round1"
tags: ["feedback", "decision", "professor", "answer-draft", "한벗", "paper-evidence", "2026-10-26"]
created: 2026-10-26T05:46:28.222Z
updated: 2026-10-26T05:46:28.222Z
sources: ["보고서/AI 부트캠프 창업 동아리/피드백/2026-10-26_교수님_보완_답변_초안.md"]
links: ["claim-feedback-1-reflect-professor-round1.md", "src-professor-2026-feedback-deliverable-1.md", "topic-app-paper-evidence.md", "claim-app-9-ser-evaluation-and-calibration.md", "claim-app-10-crisis-state-machine-and-evaluation.md", "claim-app-11-data-flow-retention-and-deletion.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-feedback-2-professor-answer-draft-round1

상위: [[claim-feedback-1-reflect-professor-round1]] (반영 방법 결정, 10-25). 원 피드백은 [[src-professor-2026-feedback-deliverable-1]]. 이 페이지는 2026-10-26 답변 초안의 요지다. 논문 근거 전체는 [[topic-app-paper-evidence]].

## 결정
**교수님 5개 보완 의견에 대한 답변 초안을 작성했다. ①②⑤는 논문 근거로 답하고(검증은 AI 검증자 1곳, 독립 재현 아님), "팀 결정 필요"는 W1(10/27~11/02)에 정한다.** 초안 도입부에 H1~H5 가설 연결 표를 넣어 기술 검증이 창업 가설 판정용임을 밝힌다.

## ① SER 검증 계획 → [[claim-app-9-ser-evaluation-and-calibration]]
- SER은 판정이 아니라 확인 질문의 계기. 한국어 정확도는 현재 문헌으로 보장할 수 없다 [P20][P21][P22].
- 미관측 코퍼스에서 macro-F1 약 0.67~0.78 → 0.13~0.20 [P21, emotion2vec+ 미포함]. AI Hub 정확도 0.8139는 UA와 직접 비교 금지 [P26].
- 영어 전화 대화 α 0.25, Emotion2Vec 분노 F1 0.000 [P31]. Opus 포함 코덱에서 SER 저하 [P34]. 점수는 보정 검증 전 확률로 해석하지 않고 세트를 화자 단위로 분리 [P39].
- W3 성능 평가 + W6 비교(SER 기반 질문 vs 같은 빈도 일반 확인 질문). 미달 시 SER 후순위.

## ② 위기 대응 → [[claim-app-10-crisis-state-machine-and-evaluation]]
- 매 턴 두 경로(KeywordGate, 위험 태그 L0·L1·L2). 같은 STT에 의존하므로 키워드/태그/결합 비교와 전체 경로 평가. 109 카드는 설계 판단 [P82][P74]. P73은 응답 정책 연구, 탐지 근거 아님. 한국어 게시글 F1 0.88/0.72 [P70], 대화 발화는 자체 평가.
- 안전 모드는 대화를 끊지 않는다(P72 vs P76, 설계 판단·전문가 검토). 오탐 10%/세션 30턴이면 세션당 약 3회 → 턴·대화 단위 목표 분리. WHO·AFSP 원문은 W3까지 확보.

## ③ 익명 커뮤니티 비교 대상
표 2-A 「기존 대안 경로의 한계」(문제 정의)와 표 2-B 「경쟁 서비스 비교」로 분리. 목표 고객·이용 상황을 먼저 정하고 항목마다 측정 정의·확인 날짜·출처를 붙인다. ④ 7주 일정표(W1~W7)는 설계서 8.1 기준, "0건·100%"는 시험 사례 수 안의 결과로만 보고.

## ⑤ 데이터 저장·보관 → [[claim-app-11-data-flow-retention-and-deletion]]
- 제21조 "지체 없이" [P87], 원본 음성 자체 미저장은 설계 판단 [P85], voiceprint 미생성 [P100], 제3자 SDK 0개 [P83], 항목별 승인 [P65][P67]. 데이터별 목적·종료 조건 표, 삭제 범위 3단계, W4 재생성 시험.

## 사용자 테스트 시작 게이트
필수 5개: 위기 평가 세트 통과 / 전문가 문구 검수 / 동의 8조합·철회·삭제·격리 시험 / 연구윤리(필요 시) / 위기 운영 표·참가 설명서. W5 지인 파일럿에도 ②③⑤ 선적용. 개인 중단(심각한 부정 반응·위기 신호)과 전체 일시 중지(누락 확인) 기준, 이상 사례 기록→당일 점검→자문 보고→수정. 자문 미확보 시 연기.

## 남은 확인 사항
1) emotion2vec+ 가중치 상업 조건, KEMDy·AI Hub 약관(W1) 2) 보관 기간 "팀 결정 필요" 항목, 24시간·기간의 법적 적정성 3) 안전 메시징 원문(W3) 4) 109 연동 방식, 1388 병기 자문 5) 한국어 SER·대화 발화 위기 분류 공개 평가 부재 → 자체 평가.

## 비평 반영 (답변 초안 20건: 상13·중7)
수정 16, 일부 수정 4. 논문 근거 문서 비평 26건(수정 24·일부 2)과 합쳐 46건 중 수정 40, 일부 6.

