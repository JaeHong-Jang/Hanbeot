---
title: "src-etri-2020-kemdy"
tags: ["tech", "speech-emotion-recognition", "grade-C", "korean-dataset", "etri", "kemdy20", "kemdy19", "unverified"]
created: 2026-10-25T07:13:24.917Z
updated: 2026-10-25T07:42:07.000Z
sources: ["https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us", "https://nanum.etri.re.kr/share/kjnoh2/KEMDy19", "https://aesshow2024ny.sched.com/event/1kyKX/real-time-recognition-of-speech-emotion-for-human-robot-interaction"]
links: ["src-ahfe-2024-kemdy19-ccc.md", "src-aihub-2024-terms.md", "src-etri-2018-kesdy18.md", "src-etri-2023-kemdy-datasets.md", "src-sogang-2024-aihub-hubert.md", "topic-tech-speech-emotion-recognition.md"]
category: reference
confidence: low
schemaVersion: 1
---

# src-etri-2020-kemdy

# src-etri-2020-kemdy

**미확인(C)** — ETRI 나눔터 접속 실패(502/ECONNREFUSED)로 원문 검증 미완료. 본문 인용 시 "미확인" 표기 필수.

## 서지정보
ETRI 나눔터 KEMDy20 / KEMDy19 (Korean Emotional Multimodal Database) 설명 페이지; AES Show 2024 포스터 "Real-time recognition of speech emotion for human-robot interaction".

## URL
- https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us
- https://nanum.etri.re.kr/share/kjnoh2/KEMDy19
- https://aesshow2024ny.sched.com/event/1kyKX/real-time-recognition-of-speech-emotion-for-human-robot-interaction

## 라이선스/상업 이용
- "License Agreement required" (KEMDy19) — 상업 이용 허용 여부 **미확인**

## 핵심 수치 (리서치 노트 주장, 미검증)
- KEMDy20: 19–39세 성인 80명, 2인 1조 40세션 자유 대화, 음성+전사+생체신호(EDA, IBI, 손목 온도), 세그먼트별 7범주 라벨 — 80명·연령·40세션은 관련 논문 검색과 부합하나 전체 묶음 원문 검증 미완료
- KEMDy19: 성우 연기 발화, 범주 다수결, arousal/valence 외부 평가자 10명 평균 — KESDy18 설명과 혼동 가능성 재확인 필요
- KEMDy19 4-class 실시간 SER: 0.5초 세그먼트 UA −10.61%, 3.0초 −5.08% (포스터 접근 실패; %인지 %p인지 원문 확인 필요)

## 검증 결과
- 모두 등급 **C(확인불가)**. 접속 실패는 거짓이라는 뜻이 아님
- Gaps: KEMDy20 총 시간·발화 수·neutral 비율·범주형 SER 보고 정확도 미확인

## 한벗 적용 포인트
- 자연 대화 기반 한국어 SER 벤치마크의 1순위 후보이나, 접속·라이선스 확인 후 착수. 대안: AI Hub → [[src-sogang-2024-aihub-hubert]], [[src-aihub-2024-terms]]
- 세그먼트 길이 trade-off는 turn-end 전체 발화 SER + 경량 스트리밍 지표 2단 구조의 근거(미확인 상태) → [[topic-tech-speech-emotion-recognition]]
- 확인된 ETRI 자료: [[src-etri-2018-kesdy18]], [[src-ahfe-2024-kemdy19-ccc]]

확인일: 2026-10-25

## 동일·관련 출처 페이지
같은 URL을 인용하는 다른 트랙의 페이지 (교차 확인용):
- [[src-etri-2023-kemdy-datasets]]
