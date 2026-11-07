---
title: "topic-data-korean-emotion-speech-datasets"
tags: ["dataset", "aihub", "korean", "emotion-speech", "license", "unconfirmed", "topic"]
created: 2026-11-07T11:33:30.998Z
updated: 2026-11-07T11:33:30.998Z
sources: ["research_notes/회의 후속 조사/I_AIHub_용량표.md", "research_notes/회의 후속 조사/L_한국어감정음성_데이터추가.md", "research_notes/데이터셋 조사/hanbeot_datasets.md"]
links: ["topic-meeting-followup-ser-2026-11.md", "topic-collab-datasets-and-irb.md", "topic-data-text-and-eval-datasets.md", "topic-ser-label-scheme-and-fusion.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-data-korean-emotion-speech-datasets

# topic-data-korean-emotion-speech-datasets

상위: [[topic-meeting-followup-ser-2026-11]] · [[topic-collab-datasets-and-irb]]. **미확정(11/9 회의 결정 전).** 출처: I_AIHub_용량표.md (2026-11-06), L_한국어감정음성_데이터추가.md (2026-11-07), hanbeot_datasets.md PART 0·1. 짝 페이지: [[topic-data-text-and-eval-datasets]].

## I. AI Hub 용량표
- 핵심 6종(263, 71631, 107, 71703, 71305, 71630) 압축 합계 약 **3.05TB**(3,125GB, 1024 기준). 풀 때는 zip + 해제본으로 약 2배(약 6TB).
- **71703 고령자 구술 2.44TB(80%)** 하나가 쏠림, 빼면 약 625GB. 공감형 대화·멀티세션 텍스트는 둘 합쳐 1GB 미만.
- 개별: 263 14.41GB(Validation 분할 없음), 71631 302.96GB, 107 306.87GB(60세 이상 1,000명+), 71305 0.10GB, 71630 0.50GB. 71703 페이지 본문(원천 3.81TB)과 표시 2.44TB가 불일치(원본 대비 압축본일 가능성, 설명 없음).
- **1차 약 110GB** 제안: 텍스트 3종 0.6GB + 263 14.41GB + 107 Validation 34.12GB + 71631 Validation 44.72GB + 71703 라벨 전체와 키워드 3개(외롭다 5.04, 슬프다 6.04, 그립다 4.25GB) 약 16GB. 팀 노트북 SSD로는 6종 전체 불가(4~8TB 외장 HDD·서버 필요).
- 라벨(json)을 먼저 받아 분포를 확인한 뒤 원천을 고른다. API 다운로드는 분할 zip이라 `cat`으로 합쳐야 하며 Linux/WSL 필요(aihubshell 권장).

## 71703 라벨 특성 (민감정보 주의)
- 감정 **종류** 라벨 없음. 감정 포함 여부(1/0)만 있음. 50개 질문 키워드 중 감정어 23개는 주제 키워드이지 감정 라벨이 아님. 감정 분류 학습에 바로 못 씀.
- 구술자 **우울·불안 점수(0~4)** 포함 → 민감정보. 처리 시 동의·보관 정책 필요.

## AI Hub 7감정은 최소 3버전
1. Ekman형(263·271·466 수집표): happiness, angry, disgust, fear, neutral, sadness, surprise.
2. 사랑스러움형(71631·71632): 기쁨, 놀라움, 두려움, 사랑스러움, 슬픔, 화남, 없음(혐오 없음).
3. 불안·당황·상처형(86·71305·466 스키마): 기쁨, 당황, 분노, 불안, 상처, 슬픔.
섞어 학습하려면 공통 4·5감정 매핑이 먼저: [[topic-ser-label-scheme-and-fusion]]. 466 페이지는 두 체계가 섞여 있어 json 확인 필요.

## L. 신규 후보 24개 (유료 포함) 요약
- 한국어 감정 라벨 + 상업 라이선스 기성품은 거의 없음. 상용은 Deeply Korean Read Speech(약 290h, 약 19만 발화, 3단계 감정, 견적)와 DataoceanAI 소규모 연기뿐. Nexdata·Appen·Defined.ai·Magic Data는 한국어 감정 상품 없음.
- K-EmoCon은 영어 토론이라 한국어 SER 불가. 노인 감정 음성은 공백 → 자체·맞춤 수집(크라우드웍스 등 견적) 검토.
- AI Hub 미확인 감정 음성 12종 추가 확인.
- **1순위**: 중·노년층 방언 **71517**(157.28GB, 2,004h) + **71558**(156.40GB, 2,023h). 화자 50~80대(경상 70대 50%·80대 17%), 문장 감정 주석(텍스트 기반으로 보임, 라벨 값 목록 없음).
- 2순위 119 신고 음성 **71768**(3,064h, 158,973건, 불안/걱정 53.6%, 당황/난처 37.6%; 위기·불안 감지용, 라벨 거침), 3순위 Deeply, 4순위 문학 낭송 **485**(456.6h, 7감정, 65~90세 낭송자 5명), 5순위 Deeply 비언어(약 56.7h, 한숨·울음 등 16종).
- 차순위: 공공 고객응대 71615(3,300h), 다화자 음성합성 542(60대 이상 111명), KETTS2.
- AI Hub 공통: 내국인만, 무료, 재배포 금지.

## 라이선스 3종류와 판단 순서 (hanbeot_datasets.md)
- 초록(바로 OK): CC BY·MIT·ODbL 등. 예: smart-turn-data, Nemotron-Personas-Korea, LongMemEval, CREMA-D.
- 노랑(AI Hub 조건부): 학습용만, 판매 등 상업 이용은 수행기관 협의, 재배포 금지, 해외 반출 별도 합의, 내국인만.
- 빨강(연구·비상업): CC BY-NC, 학술 전용, IRB 필요. 예: ESConv, RAVDESS, DAIC-WOZ, 안심존.
- 판단 순서: CC BY/MIT/Apache? → 예면 OK. 아니면 AI Hub? → 안심존(IRB)이면 원격 분석만 → 원문을 Claude API로 보내야 하면 해외 반출 해석 여지, NIA 문의 전 금지 → 아니면 로컬 학습·평가 OK. 그 외 NC는 평가·참고만.
- HF의 AI Hub 무단 미러 사용 금지.

## SER 학습·평가 TOP 10 (요지)
1 AI Hub 263, 2 71631, 3 107(STT), 4 71703, 5 71305, 6 71630, 7 smart-turn-data v3.2(한국어 포함, CC BY 4.0), 8 Nemotron-Personas-Korea, 9 LongMemEval, 10 ESConv+PsyCrisis-Bench 루브릭. 연기 데이터(KEMDy19, KESDy18, Hi,KIA)는 감정이 과장돼 노인의 잔잔한 감정에 약하므로 학습은 자연 대화, 평가는 KEMDy20 + 고령자 구술 일부 재라벨링을 권장. KEMDy20은 19~39세 청년층만.

## 확인 필요
- 71631·71632 "3,000h vs 6,000h" 표기 불일치, 71703 용량 불일치
- 71806 안심존 표시 여부, AI Hub 라벨링 가이드

