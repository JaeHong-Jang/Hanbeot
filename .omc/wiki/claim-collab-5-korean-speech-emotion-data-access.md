---
title: "claim-collab-5-korean-speech-emotion-data-access"
tags: ["collab", "claim", "dataset", "etri", "grade-B"]
created: 2026-10-25T07:29:46.578Z
updated: 2026-10-25T07:29:46.578Z
sources: []
links: ["src-etri-epretx-kemdy-kesdy-datasets.md", "lab-etri-noh-kyoungju-kemdy.md", "src-cms-2023-kemdy19-wav2vec-hubert-vad.md", "src-aihub-emotion-dialogue-corpus-usage.md", "topic-collab-datasets-and-irb.md", "claim-collab-3-independent-evaluation-ser.md", "overview-researcher-collaboration.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-collab-5-korean-speech-emotion-data-access

## 주장 (사업계획서용 한 문장)
한국어 감정 음성 데이터(ETRI KEMDy/KESDy)는 e-PreTX에서 라이선스 동의·관리자 승인을 거쳐야 하고 상업 이용 조건이 미확인이므로, 「한벗」은 ETRI·대학 연구자와의 공동연구를 통해 데이터 접근과 베이스라인 구축을 진행한다.

## 근거
- ETRI 나눔 2026-03-03 종료 → e-PreTX 이관, KESDy18 라이선스 동의·관리자 승인 절차 명시, 제공자 노경주 — A [[src-etri-epretx-kemdy-kesdy-datasets]], [[lab-etri-noh-kyoungju-kemdy]]
- KEMDy20: 19~39세 80명 자유대화 멀티모달(음성·전사·EDA·IBI·피부온도·영상) — B
- KEMDy19 + wav2vec2/HuBERT VAD 인식 공개 논문 → 베이스라인 재현 가능 — A [[src-cms-2023-kemdy19-wav2vec-hubert-vad]]
- AI Hub 감성대화말뭉치 이용 사례(A), 현행 약관 미확인 — [[src-aihub-emotion-dialogue-corpus-usage]]

## 등급
B

## 표기 원칙
- "KEMDy는 연구 목적 제한이 높아 상용 학습에 별도 협약 필요"는 **조건부 추정(C)** — 비상업 전용인지, 별도 계약 필수인지 미확인. "라이선스 재확인 필요"로 쓴다.
- KEMDy19 세부 라벨 구성(7범주 + arousal/valence 1~5)은 C — 확정 표기하지 않음.
- 데이터 제공자 확인은 협력 수락을 의미하지 않음.

## 연구자에게 요청하는 것
- KEMDy 현행 라이선스 조건 확인과 「한벗」 대상층(대학생) 발화 데이터로의 일반화 평가 공동 설계.

관련: [[topic-collab-datasets-and-irb]], [[claim-collab-3-independent-evaluation-ser]], [[overview-researcher-collaboration]]

