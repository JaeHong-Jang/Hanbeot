---
title: "topic-data-korean-emotion-speech-datasets"
tags: ["dataset", "aihub", "korean", "emotion-speech", "license", "unconfirmed", "topic"]
created: 2026-11-07T11:33:30.998Z
updated: 2026-11-11T13:15:00.000Z
sources: ["research_notes/회의 후속 조사/K_AIHub_용량표.md", "research_notes/회의 후속 조사/L_한국어감정음성_데이터추가.md", "research_notes/데이터셋 조사/hanbeot_datasets.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-collab-datasets-and-irb.md", "topic-data-text-and-eval-datasets.md", "topic-ser-label-scheme-and-fusion.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-data-korean-emotion-speech-datasets

# topic-data-korean-emotion-speech-datasets

상위: [[topic-meeting-followup-ser-2026-11]] · [[topic-collab-datasets-and-irb]]. 출처: K_AIHub_용량표.md (2026-11-06, 고령자 제외 반영), L_한국어감정음성_데이터추가.md (2026-11-07, 11/11 후보 정리), hanbeot_datasets.md PART 0·1. 짝 페이지: [[topic-data-text-and-eval-datasets]].

> **11/11 기준.** 대상에서 고령자를 빼면서 107·71703·71517·71558 등 고령 화자 데이터 제외(docs/adr/ADR-0005). 11/11에 공공 고객응대 71615·문학 낭송 485도 쓰지 않기로 함.

## K. AI Hub 용량표
- 핵심 4종(263, 71631, 71305, 71630) 압축 합계 약 **318GB**(317.97GB, 1024 기준). 풀 때는 zip + 해제본으로 약 2배(약 640GB).
- **71631 하나가 302.96GB(95%)**. 공감형 대화·멀티세션 텍스트는 둘 합쳐 1GB 미만.
- 개별: 263 14.41GB(Validation 분할 없음), 71631 302.96GB(Training 258.24 / Validation 44.72), 71305 0.10GB, 71630 0.50GB.
- **1차 약 60GB**: 텍스트 3종(71305·71630·86) 0.6GB + 263 14.41GB + 71631 **Validation만** 44.72GB. 2차: 71631 Training 일부, 466 Validation 26.54GB.
- 107을 빼면서 STT 평가셋이 비었음 → 대학생 연령대 발화 데이터로 다시 정해야 함.
- 라벨(json)을 먼저 받아 분포를 확인한 뒤 원천을 고른다. API 다운로드는 분할 zip이라 `cat`으로 합쳐야 하며 Linux/WSL 필요(aihubshell 권장).

## AI Hub 7감정은 최소 3버전
1. Ekman형(263·271·466 수집표): happiness, angry, disgust, fear, neutral, sadness, surprise.
2. 사랑스러움형(71631·71632): 기쁨, 놀라움, 두려움, 사랑스러움, 슬픔, 화남, 없음(혐오 없음).
3. 불안·당황·상처형(86·71305·466 스키마): 기쁨, 당황, 분노, 불안, 상처, 슬픔.
섞어 학습하려면 공통 4·5감정 매핑이 먼저: [[topic-ser-label-scheme-and-fusion]]. 466 페이지는 두 체계가 섞여 있어 json 확인 필요.

## L. 신규 후보 24개 (유료 포함) 요약
- 한국어 감정 라벨 + 상업 라이선스 기성품은 거의 없음. 상용은 Deeply Korean Read Speech(약 290h, 약 19만 발화, 3단계 감정, 견적)와 DataoceanAI 소규모 연기뿐. Nexdata·Appen·Defined.ai·Magic Data는 한국어 감정 상품 없음.
- K-EmoCon은 영어 토론이라 한국어 SER 불가. 부족분은 자체·맞춤 수집(크라우드웍스 등 견적, 청년 화자 기준) 검토.
- AI Hub 미확인 감정 음성 12종 추가 확인.
- **TOP 3 (11/11)**: ① 119 신고 음성 **71768**(3,064h, 158,973건, 불안/걱정 53.6%, 당황/난처 37.6%; 위기·불안 감지용, 라벨 거침) ② Deeply 낭독 감정(유료, 약 290h) ③ Deeply 비언어(유료, 약 56.7h, 한숨·울음 등 16종).
- 차순위: 음성·모션 합성 539(감정 불균형), 다화자 음성합성 542(중립 기준선).
- 제외: 고령 화자 데이터(71517·71558 등), 공공 고객응대 71615·문학 낭송 485(11/11 결정).
- AI Hub 공통: 내국인만, 무료, 재배포 금지.

## 라이선스 3종류와 판단 순서 (hanbeot_datasets.md)
- 초록(바로 OK): CC BY·MIT·ODbL 등. 예: smart-turn-data, Nemotron-Personas-Korea, LongMemEval, CREMA-D.
- 노랑(AI Hub 조건부): 학습용만, 판매 등 상업 이용은 수행기관 협의, 재배포 금지, 해외 반출 별도 합의, 내국인만.
- 빨강(연구·비상업): CC BY-NC, 학술 전용, IRB 필요. 예: ESConv, RAVDESS, DAIC-WOZ, 안심존.
- 판단 순서: CC BY/MIT/Apache? → 예면 OK. 아니면 AI Hub? → 안심존(IRB)이면 원격 분석만 → 원문을 Claude API로 보내야 하면 해외 반출 해석 여지, NIA 문의 전 금지 → 아니면 로컬 학습·평가 OK. 그 외 NC는 평가·참고만.
- HF의 AI Hub 무단 미러 사용 금지.

## SER 학습·평가 TOP 10 (요지)
1 AI Hub 263, 2 71631, 3 71305, 4 71630, 5 smart-turn-data v3.2(한국어 포함, CC BY 4.0), 6 Nemotron-Personas-Korea, 7 LongMemEval, 8 ESConv+PsyCrisis-Bench 루브릭 (원래 목록의 107·71703은 고령자 제외로 뺌). 연기 데이터(KEMDy19, KESDy18, Hi,KIA)는 감정이 과장돼 일상의 잔잔한 감정에 약하므로 학습은 자연 대화, 평가는 **KEMDy20(19~39세, 한벗 대상과 맞음)** + 대학생 파일럿 음성 직접 라벨링을 권장.

## 확인 필요
- 71631·71632 "3,000h vs 6,000h" 표기 불일치
- STT 평가셋(대학생 연령대) 미정
- 71806 안심존 표시 여부, AI Hub 라벨링 가이드

