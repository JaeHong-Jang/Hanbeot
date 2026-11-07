---
title: "topic-korean-ser-landscape-2026-11"
tags: ["scopus-2026-11", "ser", "korean", "kemdy", "prosody", "gap", "verified"]
created: 2026-11-07T19:53:32.539Z
updated: 2026-11-07T19:53:32.539Z
sources: ["research_notes/Scopus 조사/05_ser_sota_methods_for_paper.md", ".omc/orchestra/reviews/20261108_043406_verify_05_ser_sota_methods_for_paper.md"]
links: ["topic-ser-papers-synthesis.md", "topic-ser-sota-benchmarks-2026-11.md", "src-sogang-2024-aihub-hubert.md", "lab-etri-noh-kyoungju-kemdy.md", "claim-app-9-ser-evaluation-and-calibration.md", "src-hyeon-2025-segmental-pooling.md", "src-cao-2025-kemdy-prosody-gru.md", "src-cao-2025-kemdy-w2v-kobert.md", "src-yi-2024-kohmt-korean-fusion.md", "src-jun-2024-realtime-kemdy19.md", "src-oh-2024-korean-vocal-emotion-acoustics.md", "src-yoon-2026-human-vs-ai-korean-voices.md", "src-yoon-2026-lowpass-korean-gender-emotion.md", "src-chen-2023-f0-perturbation-focus-ko-ja.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-korean-ser-landscape-2026-11

# topic-korean-ser-landscape-2026-11

관련: [[topic-ser-papers-synthesis]] · [[topic-ser-sota-benchmarks-2026-11]] · [[src-sogang-2024-aihub-hubert]] · [[lab-etri-noh-kyoungju-kemdy]] · [[claim-app-9-ser-evaluation-and-calibration]].

## 1. 한국어 SER 결과와 프로토콜
| 논문 | 데이터 | 프로토콜 | 결과 | 등급 |
|---|---|---|---|---|
| Hyeon·Oh·Choi (KAIST; BigComp 2025 / arXiv 2410.12416) [[src-hyeon-2025-segmental-pooling]] | KEMDy19 4범주 7,944발화 | LOSO-40 (38/1/1) | UA 66.26 / WA 68.27, GAP만 64.34/66.62. 최저 happy, 최고 neutral. 최대 16초, A100 약 40시간/실험. 학회판-선행판 수치 대조는 남음 | A |
| Cao 2025 AI3E [[src-cao-2025-kemdy-prosody-gru]] | KEMDy19, 12,457샘플, 7범주 포함 | **미명시(초록)** | accuracy 64.69 / UAR 64.71; Disgust F1 72.28, Happy 49.62; 운율 매개변수 7개 | B |
| Cao 2025 AI3E [[src-cao-2025-kemdy-w2v-kobert]] | KEMDy19 + AI Hub | 미명시 | 테스트 accuracy 73.3 vs 검증 UAR 85.52 (지표 혼재, 비교 불가) | B |
| Mathematics 2023 | KEMDy20 + MELD | 초록에서 미명시(기존 노트에는 30세션 학습/10세션 평가 기록이라 충돌, 본문 재확인 필요) | accuracy 87.49 / F1 44.16 / 가중 F1 86.28 | B/C |
| Sogang 2024 [[src-sogang-2024-aihub-hubert]] | AI Hub 4범주 | 분할 미확인(서지·DOI 특정 안 됨) | accuracy 0.8139. 발화 단위 분할이면 화자 누수 가능 | C |
| KoHMT [[src-yi-2024-kohmt-korean-fusion]] | AI Hub 7감정 | 9:1 분할, 화자 독립 불명 | 77.01 | B |
| Jun 2024 AES [[src-jun-2024-realtime-kemdy19]] | KEMDy19 스트리밍 | - | 0.5초 UA 상대 -10.61%, 3초 -5.08% (3초 손실이 작다는 결과이지 최소 길이 증명 아님) | B |
| Appl. Sci. 2025 | AI Hub 4범주 11,192 -> 33,576 | - | "34.19% 향상"은 %p(56.96 -> 91.15)로 정정됨(v3). 절대 정확도와 구분 | B |
- 12,457 vs 7,944는 범주·필터에 따른 **부분집합 차이일 수 있어 오류 판정 불가(확인 필요)**.
- Hyeon이 "이 방식으로 평가한 첫 논문"이라 주장한 것은 확인. 한국어 전체 문헌의 유일성은 입증되지 않음(C).

## 2. 한국어 감정 운율·음성학
- [[src-oh-2024-korean-vocal-emotion-acoustics]] (B): 성별별 피치·강도 패턴 차이.
- [[src-yoon-2026-human-vs-ai-korean-voices]] (A): 불안이 가장 낮게 인식, AI 불안은 주로 강도 변동 의존.
- [[src-yoon-2026-lowpass-korean-gender-emotion]] (B): 성별이 인식에 개입.
- [[src-chen-2023-f0-perturbation-focus-ko-ja]] (A, 감정 논문 아님): 서울말 자음이 후속 모음 F0를 바꿈. F0 해석에 음소 통제 필요(설계 권고, C).
- Oh·Yoon 두 편은 연기·통제 자극이고 원문 미확보 기반(Oh).

## 3. 비어 있는 것 (이번 검색에서 찾지 못함, 부재 증명 아님)
1. KEMDy20·AI Hub 화자 독립 + UA/F1 + CI 보고 (KEMDy20은 우리가 첫 기준선이 될 수 있음).
2. 한국어 보정(ECE)·선택적 예측(보류 곡선) 보고.
3. 공개된 재현 가능한 KEMDy 학습 레시피(코드·fold 목록은 저자에게 요청 필요).
4. 한국어 SER의 LoRA/PEFT·음성 LLM·합성 데이터·화자 적응 사례. VoxEmo 35코퍼스에 한국어·KEMDy 없음(A).
5. 불안·외로움·가라앉음의 한국어 자연 대화 음향 연구.
6. KEMDy19/20 평가자별 투표 파일의 공개 분할 포함 여부, KEMDy20 시간·클래스 분포 일부.
