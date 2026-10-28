---
title: "topic-collab-datasets-and-irb"
tags: ["collab", "dataset", "irb", "privacy", "grade-B"]
created: 2026-10-25T07:26:46.311Z
updated: 2026-10-25T07:26:46.311Z
sources: []
links: ["src-etri-epretx-kemdy-kesdy-datasets.md", "lab-etri-noh-kyoungju-kemdy.md", "src-cms-2023-kemdy19-wav2vec-hubert-vad.md", "src-aihub-emotion-dialogue-corpus-usage.md", "src-aihub-irb-safezone-guideline-v32.md", "src-skku-irb-bioethics-act-articles-15-36.md", "src-public-irb-eirb-korea.md", "lab-kaist-lee-sungju.md", "src-mohw-2026-genai-mental-health-guideline.md", "claim-collab-4-irb-pathway.md", "claim-collab-5-korean-speech-emotion-data-access.md", "overview-researcher-collaboration.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-collab-datasets-and-irb

## 요약
한국어 감정 음성 데이터의 핵심인 ETRI KEMDy 계열은 2026-03-03 나눔 종료 후 e-PreTX로 이관되어 라이선스 동의·관리자 승인 절차를 거쳐야 하며 상업 이용 조건은 미확인이다. AI Hub 감성대화말뭉치의 현행 약관도 직접 확인이 필요하다. 사용자 대상 정서 데이터 수집은 생명윤리법상 "연구 해당 여부 → 심의/면제 요건"을 사전 검토해야 하며, 대학 IRB 외에 공용IRB(e-IRB) 경로가 존재한다. 리서치 노트의 "대학 IRB 하에서만 가능", "반드시 심의"라는 서술은 검증자가 불일치로 수정했다.

## 데이터셋 (확인 사항)
- ETRI KESDy18(A)·KEMDy20(B)·KEMDy19(C): 제공자 노경주. 현재 e-PreTX 배포, 라이선스 동의 → 관리자 다운로드 승인. 상업 이용 가능 여부 미확인(조건부 추정). [[src-etri-epretx-kemdy-kesdy-datasets]], [[lab-etri-noh-kyoungju-kemdy]]
- KEMDy19 + wav2vec2/HuBERT 기반 VAD 차원 감정 인식 공개 논문 존재 → 베이스라인 재현 가능. [[src-cms-2023-kemdy19-wav2vec-hubert-vad]]
- AI Hub 감성 대화 말뭉치: 허깅페이스 모델 학습 사용 사례(A). 2019년 "회원가입 후 다운로드" 안내는 당시 다른 데이터 4종에 대한 것(B). 현행 약관(상업·재배포·모델 공개) 미확인. [[src-aihub-emotion-dialogue-corpus-usage]]
- AI Hub 안심존 데이터는 공용IRB 심의 연계 가이드라인 v3.2 적용. [[src-aihub-irb-safezone-guideline-v32]]

## IRB·윤리 (확인 사항, 수정 적용)
- 생명윤리법 제15조(인간대상연구)·제36조(인체유래물연구): 연구 착수 전 심의 원칙. **심의면제 규정 존재**(제15조 제2항, 시행규칙 제13조) — 비침습·단순 측정·개인정보 미수집·공개 자료 이용 등은 요건 충족 시 면제 가능(각 조건 자동 면제 아님). [[src-skku-irb-bioethics-act-articles-15-36]]
- 공용IRB: 국가생명윤리정책원 설치, e-IRB(public.irb.or.kr) 가입 → 심의/면제 대상 확인 → 신청(B). "약 2,400기관 이용 대상"은 2012년 예상치(현행 자격 아님). 예비창업자(법인 미설립) 신청 가능 여부·심의비·기간 미확인. [[src-public-irb-eirb-korea]]
- 음성 데이터 = 민감정보 단정 불가(C): 일반 음성 / 개인 식별용 성문정보 / 정신건강 정보를 구분해야 하며 개인정보보호위원회 해석 미조사.

## 「한벗」 적용 (팀의 판단으로 표기)
- 이번 학기 "대학생 30명 MVP 테스트"에서 음성을 녹음·저장하고 정서 상태를 분석한다면, (1) 연구 해당 여부, (2) 식별 가능성, (3) 심리적 민감 주제 포함 여부에 따라 심의 대상이 될 수 있다 → 계획 단계에서 대학 연구자 또는 공용IRB에 사전 문의.
- 경로 선택지: (a) 협업 연구자가 책임연구자로 소속 대학 IRB 심의(대학별 규정 적용, 협업 자체가 자동 접수 자격을 주지는 않음 — C), (b) 공용IRB. 심사·투자 관점에서 (a)가 신뢰도가 높다는 판단은 추론.
- 프라이버시 보존 설계(연합학습·온디바이스)는 복지부 가이드라인 "개인정보 보호"와 연결되는 연구 협업 주제. [[lab-kaist-lee-sungju]], [[src-mohw-2026-genai-mental-health-guideline]]

## 공백
- KEMDy 현행 라이선스 전문(상업 이용·인용 요건), AI Hub 현행 약관, 공용IRB 현행 자격·비용·기간, 음성 데이터의 생체인식정보 해당 여부 해석.

관련: [[claim-collab-4-irb-pathway]], [[claim-collab-5-korean-speech-emotion-data-access]], [[overview-researcher-collaboration]]

