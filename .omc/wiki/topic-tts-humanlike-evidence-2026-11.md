---
title: "topic-tts-humanlike-evidence-2026-11"
tags: ["scopus-2026-11", "tts", "humanlike", "blind-test", "korean-tts", "verified"]
created: 2026-11-07T19:47:22.836Z
updated: 2026-11-07T19:53:03.253Z
sources: ["research_notes/Scopus 조사/03_tts_humanlike_literature.md", ".omc/orchestra/reviews/20261108_041922_verify_03_tts_humanlike_literature.md", "reports/한벗 최종 계획 v3.md"]
links: ["topic-scopus-literature-2026-11.md", "topic-tts-humanlike-techniques.md", "topic-tts-opensource-candidates-2026-11.md", "topic-app-impl-dialogue-tts.md", "claim-tech-3-stt-tts-vendors.md", "claim-app-13-tts-blind-test-protocol-w4.md", "src-sesame-2025-csm-uncanny-valley.md", "src-rethinking-mushra-2025.md", "src-audio-turing-test-2025.md", "src-nvspeech-2025.md", "src-efthymiou-2024-trembling-voices.md", "src-du-2024-cosyvoice2.md", "src-du-2025-cosyvoice3.md", "src-hu-2026-qwen3-tts-report.md", "src-voxcpm-2025-report.md", "src-chen-2025-f5-tts.md", "src-wang-2024-maskgct.md", "src-ju-2024-naturalspeech3.md", "src-liu-2024-fish-speech.md", "src-kwon-2025-coreaspeech.md", "src-upskyy-2026-komos.md", "src-jeon-2024-takotron2pro.md", "src-kuhne-2020-humanlike-voices.md", "src-liu-2024-gpt-talker.md", "src-kim-2025-fillerspeech.md", "src-kirkland-2023-stuck-in-mos-pit.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tts-humanlike-evidence-2026-11

# topic-tts-humanlike-evidence-2026-11

상위: [[topic-scopus-literature-2026-11]] · [[topic-tts-humanlike-techniques]] · [[topic-tts-opensource-candidates-2026-11]] · [[topic-app-impl-dialogue-tts]] · [[claim-tech-3-stt-tts-vendors]] · 후속 결정: [[claim-app-13-tts-blind-test-protocol-w4]]. 출처: 노트 03(Scopus 2차 TTS 쿼리 + 원문 15편) + 검증표(2026-11-08, A95/B27/C56). 등급은 주장 단위(A=원출처 일치, B=근사·2차, C=불일치/확인불가). 검증표가 노트와 충돌하면 검증표를 따랐다. TTS 라운드2 고유 문헌은 **1,288편**(노트의 1,400은 중복 포함 건수). 한국어 쿼리는 200건.

## 1. 요소별 근거
| 요소 | 근거 | 수치 | 한계(검증 반영) | 등급 |
|---|---|---|---|---|
| 맥락 프로소디 | [[src-sesame-2025-csm-uncanny-valley]] | Expresso 7점 CMOS, 80명 x 약 15쌍. 맥락 없음: 선호 차이 없음 / 직전 90초 맥락: 원본 선호(승률은 그림에만) | **선호 연구이며 두 실험의 질문이 달라졌다("사람 같은 발화" -> "대화에 적절한 연결"). 맥락만의 인과효과로 분리 불가.** "문장 하나면 최신 TTS와 사람 구분 불가"로 일반화 금지 | 수치 A / 해석 C |
| 문장 MOS 천장 | F5-TTS CMOS +0.31(en)/+0.21(zh), NaturalSpeech 3 -0.08(12명, 20문장), MaskGCT +0.10 | | 천장·방법 편향 우려는 타당하나 "후보 간 차이가 안 보인다"는 일반 결론은 C. MUSHRA 기준음 편향은 [[src-rethinking-mushra-2025]]: Hindi REF 84.18 vs VITS 67.65인데 CMOS -0.10 | A/C |
| ATT(사람/기계 판별) | [[src-audio-turing-test-2025]] | 857명. Seed-TTS 0.417 > MiniMax 0.387 > Step-Audio 0.286 > CosyVoice 0.234 > GPT-4o 0.138 | **사람/불확실/기계 3택(1/0.5/0)**, 점수는 GLMM 사후평균. 이진 강제선택 아님. 중국어만 | A |
| 비언어음 | [[src-nvspeech-2025]] | 태그본 선호 CosyVoice 78.7%, CosyVoice2 75.4%(60명) | **태그만의 효과가 아님**(학습 데이터·미세조정·태그 사용이 함께 변함). NMOS는 비언어음·전환 자연스러움이지 전체 음질(QMOS)이 아님. 한국어 외삽 금지 | 수치 A / 해석 C |
| 속도·쉼 | Korean TTS listening speed(2014, n=10) | 0.8~3.6배속은 제시한 15개 시험 속도 범위 | 청취 능력 결과 아님. 속도 0.9 가설 무근거 | B/C |
| 감정 일치 | ATT 실패 원인 서술, [[src-efthymiou-2024-trembling-voices]] | 떨리는 목소리 -> 취약성 지각 -> 공감 -> 기부 의향(초록) | "맞는 감정을 맞는 시점에서만 공감"은 설계 원칙이지 입증된 필요조건 아님 | B/C |
| 지연 | Qwen3-TTS 12Hz 첫 패킷 97~101ms(동시 1) -> 299~333ms(동시 6); CosyVoice2 스트리밍 한국어 CER +1.08%p; Typecast 공식 TTFB **170~210ms** | | RTF는 생성시간/음성 길이이지 첫 패킷이 아님. 제작사 보고, 한국어·한벗 환경 실측 아님 | A/B |

## 2. TTS 계열 비교
| 계열 | 모델 | 자연성 | 지연(보고) | 한국어 | 등급 |
|---|---|---|---|---|---|
| LLM+흐름매칭 | CosyVoice 2 0.5B ([[src-du-2024-cosyvoice2]]) | NMOS(예측 MOS) 3.96 vs 사람 3.84 - "사람 초과" 해석 금지 | 청크 스트리밍, 첫 패킷 수치 없음 | test-ko CER 7.98 / 스트리밍 9.06. 일본어도 +2.62%p라 "한국어에서 더 크다"는 C | A |
| LLM+흐름매칭 | CosyVoice 3 ([[src-du-2025-cosyvoice3]]) | Expresso MOS 3.54~3.56 vs 사람 3.65 | - | CV3-Eval Ko CER 0.5B 12.8 -> DiffRO 4.02, 1.5B 5.69 -> 4.01. 공개 가중치가 DiffRO 적용본인지 미확정 | A |
| 이중 AR+코덱 | Qwen3-TTS ([[src-hu-2026-qwen3-tts-report]]) | UTMOS 4.16은 **12Hz 토크나이저 재구성 점수**(TTS 자연성 아님) | 12Hz 97~101ms, RTF 0.29~0.46 | Ko WER 1.74~2.70, **Base 모델, MiniMax 다국어 평가셋**. Sohee CustomVoice 결과 아님 | A |
| 반이산+확산 | VoxCPM ([[src-voxcpm-2025-report]]) | N-MOS 4.10/4.11 | RTF 0.17(4090) | 논문에 한국어 없음(VoxCPM2는 별도 릴리스) | A |
| 흐름매칭 DiT | F5-TTS ([[src-chen-2025-f5-tts]]) | CMOS +0.31/+0.21 | RTF 0.15(16NFE) | CoreaSpeech가 LoRA 확장 | A |
| 마스크 코덱 | MaskGCT ([[src-wang-2024-maskgct]]) | CMOS +0.10 | - | Ko WER 9.417, SIM 0.732(XTTS 12.45) | A |
| 분해 코덱 | NaturalSpeech 3 ([[src-ju-2024-naturalspeech3]]) | CMOS -0.08, 12명 | V100 RTF 0.296 | 영어만 | A |
| 이중 AR | Fish-Speech ([[src-liu-2024-fish-speech]]) | MOS 4.05(표기 불일치) | 150ms 주장(근거 약함) | 계열 2만h | A |
| 멀티모달 AR | Sesame CSM | 위 1절 | - | 다국어 약함 | A |
요약: 한국어 오차 범위는 크지만 **WER/CER, ASR, 평가셋이 달라 "3배 차이"처럼 배수 해석 불가**, 순위 비교 금지. 우리 대본 재측정 필요.

## 3. 한국어 TTS 연구
| 연구 | 내용 | 한벗 시사점 | 등급 |
|---|---|---|---|
| MaskGCT | Ko WER 9.4(한국어 7,400h) | 데이터량-오차 참고점 | A |
| CosyVoice2 | Ko CER 7.98, 스트리밍 9.06 | 스트리밍 손실 측정 필요 | A |
| CosyVoice3 | DiffRO 후 4.02/4.01 | 공개 체크포인트 버전 확인 | A |
| Qwen3-TTS | Ko WER 1.74~2.70(Base, MiniMax 셋) | 청취 자연성 근거 아님 | A |
| [[src-kwon-2025-coreaspeech]] | 700h/21,449명, Numeric 벤치, CC BY-NC | **표 3에 CER/WER, 부록 표 7에 nMOS/sMOS/RTF가 있음**(노트의 "결과 없음" 정정). 평가용만 | A |
| [[src-upskyy-2026-komos]] | MOS 예측 SRCC 0.900(UTMOS v2 0.767) | 스크리닝용. 엔진 간 판별력은 "미검증" | A(블로그) |
| **KoCC-TTS (arXiv 2509.18531)** | 한국어 콜센터 대화 50개, 27명 596표 블라인드 선호 | **"한국어 대화형 청취 평가 0건"은 오류 -> "거의 없음, KoCC-TTS 1건"** (대화 이력 조건화 효과 실험은 아님) | A |
| [[src-jeon-2024-takotron2pro]] | 한국어 쉼 오류 | 초록만 | B |
| 한국어 구어 끝 억양(ETRI 2006) | modality 특징 정확도 +25% | 해요체 끝 억양 항목 | B |
한국어 대화 이력 조건화 효과 크기·비언어음 코퍼스·합성음 신뢰 연구는 "이번 조사에서 확보 못함"이며 부재 증명 아님.

## 4. 지각·신뢰·공감
| 연구 | 결과 | 주의 | 등급 |
|---|---|---|---|
| [[src-kuhne-2020-humanlike-voices]] | 인간다움 6.51 vs 2.72~3.00, 기이함 1.89 vs 3.77~3.79, beta -0.64~-0.66 | 구형 합성기, 자극 3종. 현대 TTS 법칙으로 확장 불가 | A/C |
| Deviation from typical organic voices(2024) | 기이함은 일탈(변형·병리)과 관련 | "합성 오류가 원인"을 입증한 연구 아님 | B |
| [[src-efthymiou-2024-trembling-voices]] | 떨림 -> 공감 -> 기부 의향 | 조종 가능성: 윤리 검토 | B |
| Voice Fidelity on Decision Making(2024) | 합성 방식·속도·피치가 선택에 영향 | 다크패턴 경계 | B |
| GPT-Talker ([[src-liu-2024-gpt-talker]]) | DailyTalk N-DMOS 3.890, E-DMOS 3.908 (검증표: 본문 판독 가능) | 노트의 "초록만"은 정정 | B |
| FillerSpeech ([[src-kim-2025-fillerspeech]]) | LLM 필러 위치 예측 | 본문 표 판독 가능(검증표) | B |

## 5. W4 블라인드 테스트 프로토콜
상세: [[claim-app-13-tts-blind-test-protocol-w4]]. 요지: 전문가 사전 점검 -> MUSHRA 기준음 숨김(2축) -> 2턴 맥락 CMOS 페어 + 사람/불확실/기계 3택. 청취자 20명이면 순위 상관 >90%, 30명+30문항이면 >95%(해당 데이터 재표집 결과, 보편 보장 아님). **A/B 이진 선호로는 7점 CMOS를 계산할 수 없으므로 별도 7점 평정 문항 필요.** 반복 청취 구조 때문에 단순 이항검정 대신 혼합효과 모형.

## 6. Typecast 위에서 되는 것 / 자체 모델 필요
- 되는 것(구현 가능, 효과는 미검증): previous_text 맥락 입력, 감정·강도·tempo·pitch 설정, 문장 분할, 숫자 전처리, 고정 보이스 ID, 맞장구·필러 클립 삽입. 직전 2~3턴의 최적성과 한국어 효과는 미검증(C). 쉼 표기 `<|1s|>`와 웃음·한숨 불가 여부는 공식 근거 확보 못함 -> 실제 요청으로 확인.
- 자체 모델이 필요한 쪽: 대화 이력 조건화 운율 학습, 한국어 비언어음 토큰, 문장 내 시변 감정, 사용자 음성 엔트레인먼트. 단 "상용은 운율 생성을 못 바꾼다"가 아니라 **모델 학습·내부 구조 변경이 어렵다**가 정확. 100ms대 첫 패킷 보장은 자체 모델이 보장해 주지도 않음.

## 7. 연구 기회(작성자 제안)
1. 한국어 대화형 TTS 청취 평가 프로토콜+공개 대본(KoCC-TTS와 차별: 해요체 위로 대화, 맥락 유무 조건). 2. LLM이 감정·필러 위치를 함께 출력하는 파이프라인. 3. 한국어 비언어·필러 코퍼스(라이선스·동의 확인). 4. 인간다움-신뢰-의존 윤리(UNIST HCI 접점). 5. 스트리밍 손실 측정. 6. KOMOS류 자동 판정(엔진 간 판별력 미검증). "최초" 주장은 KoCC-TTS 반례 때문에 쓰지 말 것.

---

## Update (2026-11-07T19:53:03.253Z)

## 추가 원문 링크
MOS 방법론 보고 누락(C, 초록): [[src-kirkland-2023-stuck-in-mos-pit]]. 필러 위치 예측: [[src-kim-2025-fillerspeech]].

