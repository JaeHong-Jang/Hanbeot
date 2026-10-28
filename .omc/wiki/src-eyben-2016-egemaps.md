---
title: "src-eyben-2016-egemaps"
tags: ["tech", "speech-emotion-recognition", "grade-B", "egemaps", "opensmile", "paralinguistic", "paper-evidence", "ser"]
created: 2026-10-25T07:15:48.459Z
updated: 2026-10-26T05:52:01.640Z
sources: ["https://msp.utdallas.edu/publications/Eyben_2016.pdf", "https://arxiv.org/pdf/2210.14495", "https://arxiv.org/pdf/2310.08338", "https://arxiv.org/pdf/1906.01155"]
links: ["topic-tech-speech-emotion-recognition.md", "topic-tech-privacy-voice-data.md", "claim-tech-1-ser-model.md", "src-hume-2026-evi-docs.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-eyben-2016-egemaps

# src-eyben-2016-egemaps

## 서지정보
Eyben et al., "The Geneva Minimalistic Acoustic Parameter Set (GeMAPS) for Voice Research and Affective Computing", IEEE Trans. Affective Computing 2016. 보조 출처: arXiv 2210.14495, 2310.08338 (eGeMAPS 사용 후속 연구), 1906.01155 (ShEMO baseline).

## URL
- https://msp.utdallas.edu/publications/Eyben_2016.pdf (접근 실패)
- https://arxiv.org/pdf/2210.14495
- https://arxiv.org/pdf/2310.08338
- https://arxiv.org/pdf/1906.01155

## 라이선스/상업 이용
- openSMILE에 eGeMAPS 구현 포함. **openSMILE 라이선스(audEERING, 상업 이용 시 별도 라이선스)는 미확인** — 상용 서비스 전 확인 필요

## 핵심 수치
- GeMAPS LLD 23개(또는 25개로 기술한 자료 있음) + functionals → **eGeMAPS 총 88 features** (F0, jitter, shimmer, formants, loudness 등)
- 선정 기준: 정서적 생리 변화와의 연관성, 선행연구 실적, 추출 용이성
- ShEMO baseline은 openSMILE eGeMAPS + z-score 정규화 사용

## 검증 결과
- 원 논문 설명(선정 기준·openSMILE 구현): **C** (PDF 접근 실패, 직접 확인 못함)
- 23 LLD/88 features: **B** (후속 연구에서 확인, 표준 정의 원출처는 아님)
- 25 LLD→88 functionals: **B** (GeMAPS/eGeMAPS, 버전·구현 차이 구분 필요)
- ShEMO baseline: **A** (단, "다수 데이터셋이 사용"이라는 범용 주장까지 입증하지는 않음)

## 한벗 적용 포인트
- 억양·속도·멈춤 분석의 **표준 feature set**. 발화 중 경량 스트리밍 지표(pitch/loudness/speech-rate/pause)를 eGeMAPS 하위 집합으로 정의 → [[topic-tech-speech-emotion-recognition]]
- 특징정보(embedding/eGeMAPS)를 원본 오디오와 분리 저장하는 가명처리 계층의 단위 → [[topic-tech-privacy-voice-data]]
- 관련: [[claim-tech-1-ser-model]], [[src-hume-2026-evi-docs]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:52:01.640Z)

## 2026-10-26 논문 보강 (설계서 [P47])
- 수치: GeMAPS LLD 23(또는 25)개, eGeMAPS 88 features. 등급 B.
- 적용: speech rate·pause는 직접 포함되지 않는다(설계서 S43). 속도·멈춤을 VAD·STT 타임스탬프로 계산하는 선택과 −25%/+50% 임계는 이 논문이 뒷받침하지 않으므로 임시 운영 기준으로 표기하고 W3 한국어 녹음 분포로 조정.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]]
