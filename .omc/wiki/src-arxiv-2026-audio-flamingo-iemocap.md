---
title: "src-arxiv-2026-audio-flamingo-iemocap"
tags: ["benchmark", "ser", "iemocap", "sota", "grade-A", "app-design", "paper-evidence", "ser-limits"]
created: 2026-10-25T07:26:22.945Z
updated: 2026-10-26T05:51:58.287Z
sources: ["https://arxiv.org/pdf/2609.20081", "https://apsipa.org/proceedings/2025/papers/APSIPA2025_P308.pdf", "https://ieeexplore.ieee.org/document/9414635/", "https://arxiv.org/abs/2609.20081"]
links: ["topic-bench-ser.md", "claim-bench-8-emotion-cue-as-question.md", "overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-arxiv-2026-audio-flamingo-iemocap

# src-arxiv-2026-audio-flamingo-iemocap

## 서지
- arXiv 2609.20081 (2026-09) Table 4 — IEMOCAP 4-class 비교. 보조: APSIPA 2025 P308 (PDF 미확보), IEEE 9414635 (2021 multiscale area attention, 표 미대조).

## 수치 (IEMOCAP 4-class)
- Audio Flamingo 3: **WA 76.48% / UA 76.15%**.
- Whisper-large (EmoBox 리더보드 최고 항목 †): WA 72.86% / UA 73.54%.
- APSIPA 2025 어댑터 전이학습: UA 78.32% / WA 77.56% — PDF 미확보.
- 2021 multiscale area attention: WA 79.34% / UA 77.54% — 표 미대조.
- 프로토콜(LOSO vs 5-fold, 4/10-class)에 따라 비교 불가 → "76–79%를 보편 SOTA"로 쓰면 부적절.

## 검증 결과 (2026-10-25 확인)
- Audio Flamingo 3·Whisper 수치: 등급 **A**. "AF3도 EmoBox 리더보드 값": **불일치/C** (EmoBox 주석은 Whisper-large에만). APSIPA·2021 수치: **C**. 프로토콜 주의: **B**.

## 사용처
- [[topic-bench-ser]] · [[claim-bench-8-emotion-cue-as-question]]

---

## Update (2026-10-25T14:51:45.885Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S14] (등급 A, 독립연구). 사용: Audio Flamingo 3 IEMOCAP 4-class UA 76.15% / WA 76.48% (Table 4). 조건: 영어, 프로토콜(LOSO·5-fold)별 비교 불가, 이번 조사에서 확인한 범위.
- 검증: ux/implementation 검증표에 해당 행 없음 -> 설계서 등급 유지.
- 사용처: [[overview-app-design]] 의 1절. 관련: [[claim-bench-8-emotion-cue-as-question]]

---

## Update (2026-10-26T05:51:58.287Z)

## 2026-10-26 논문 보강 (설계서 [P29])
- 수치: IEMOCAP 4-class UA 76.15%, WA 76.48% (영어). 등급 A.
- 적용: 영어 최고 수준 참고치(설계서 S14)일 뿐 프로토콜(LOSO/5-fold, 4/10-class)이 달라 다른 수치와 비교 불가. 한국어 합격선(UA ≥ 0.70)의 근거로 쓰지 않는다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]]
