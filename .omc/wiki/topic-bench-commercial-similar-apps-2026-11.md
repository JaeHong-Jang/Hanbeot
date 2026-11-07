---
title: "topic-bench-commercial-similar-apps-2026-11"
tags: ["benchmark", "commercial", "similar-apps", "mental-health", "elderly", "topic"]
created: 2026-11-07T11:34:30.642Z
updated: 2026-11-07T11:34:30.642Z
sources: ["research_notes/유사앱 조사/similar_apps_commercial.md"]
links: ["overview-benchmark.md", "bench-replika.md", "bench-woebot.md", "bench-wysa.md", "bench-clova-carecall.md", "bench-hume-evi.md", "bench-therabot.md", "bench-kanana.md", "bench-pi-inflection.md", "claim-bench-8-emotion-cue-as-question.md", "topic-tts-humanlike-techniques.md", "overview-hanbeot-project.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# topic-bench-commercial-similar-apps-2026-11

# topic-bench-commercial-similar-apps-2026-11

상위: [[overview-benchmark]]. 기존 벤치: [[bench-replika]], [[bench-woebot]], [[bench-wysa]], [[bench-clova-carecall]], [[bench-hume-evi]], [[bench-therabot]], [[bench-kanana]], [[bench-pi-inflection]]. 출처: research_notes/유사앱 조사/similar_apps_commercial.md (조사일 2026-11-06). 기존 14개 서비스는 제외하고 신규만 정리. 성과 수치 대부분은 회사 자체 발표이며 독립 검증이 아니다.

## 그룹별 요약
### A. 글로벌 AI 정신건강 앱
Sonia(CBT 기반, 위기용 아님 고지), Ash(장기 기억+주간 패턴 인사이트), Earkick(멀티모달, 온디바이스, 패닉 버튼), Youper(**2026-09-30 서비스 종료**), Abby, Elomia(위기 감지 후 외부 자원 안내, B2B API), clare&me(독일, 전화로 AI가 먼저 전화, 과탐지 모더레이션), Limbic(위기 탐지 엔진 별도 레이어), Rosebud(장기 기억이 유료 핵심), Headspace Ebb(음성 모드 2025-12, 힘든 주 다시 묻기).
### B. 음성 바이오마커·감정 분석 기업
Kintsugi(**FDA 허가 지연으로 2026-02 폐업**, 모델 공개), Ellipsis Health(감정에 따라 말투 조정), Sonde Health(30초 음성 → 0~100 점수), Canary Speech("진단 아님" 프레이밍), audEERING devAIce(4분류 + 각성·쾌·지배), Behavioral Signals(발화별 감정 확률 출력).
### C. 한국 서비스
마인드카페(AI는 경미 케어, 심화는 상담사 하이브리드), 트로스트(EAP B2B), 하이 마음검진, SKT AI 안부확인(위험 발화 → 상담사·지자체), SKT 멘탈 비전(억양·속도·떨림), KT 기가지니 돌봄(사투리 사전), 경기도 AI 노인말벗(주 1회 전화, 3회 미수신 시 사람 개입), 서울시 마음이(3~4턴 후 상담 연결, AI→시민상담사→전문상담사), 닥터프레소 REDI, 미스터마인드 말동무 인형.
### D. 노인·외로움 음성 동반자
ElliQ(먼저 말 거는 능동성, 가족 알림), 효돌(음성 로그 기분 분석, 사회복지사 앱 공유), Meela(전화 기반, 과거 대화 기억, 돌봄자 대시보드).

## 공통 패턴과 한벗 시사점 (제안)
1. "치료 아님 + 위기용 아님" 고지가 표준 → 온보딩 동의에 "상담·치료 아님, 위기 시 109" 고정 문구, 2026-10 복지부 가이드라인과 정합성.
2. 장기 기억은 안부를 다시 묻는 데 쓸 때 가치가 큼("지난번 말한 일 어떻게 됐어?").
3. 음성 감정 인식을 진단·점수로 쓰면 규제 벽(Kintsugi 폐업) → "혹시 속상한 거야?" 확인 질문 방식이 위험을 줄이는 차별점. 관련 [[claim-bench-8-emotion-cue-as-question]].
4. 감정 신호를 응답 톤 조정에 쓰는 사례가 늘고 있음 → Typecast 톤·속도 연결 검토 [[topic-tts-humanlike-techniques]].
5. 위기 대응은 LLM과 분리된 독립 레이어 + 사람 연결이 표준. 차단 대신 대화를 유지하며 109 연결 안내.
6. 먼저 전화를 거는 능동형 음성이 노인·고립층에 효과적 → 동의 기반 예약 안부 콜, N회 미응답 시 보호자 알림 규칙.
7. 자유 대화형 한국어 음성 + 감정 확인 + 기억을 결합한 서비스는 확인되지 않음(공백). 방언·노인 발화 인식은 검증 필수.
8. 지속 가능성은 B2B·B2G(Youper 종료, 마인드카페·트로스트의 B2B 전환, Ebb 2,000개 기업) → 지자체·EAP·대학 상담센터 채널 검토.

## 주의
이 조사의 시사점 5·6번(노인·안부 전화)은 노트가 고령층을 염두에 둔 서술이다. 현재 Wiki 1차 타깃과의 관계는 팀 확인 필요: [[overview-hanbeot-project]].

