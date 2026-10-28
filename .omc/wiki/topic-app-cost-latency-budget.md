---
title: "topic-app-cost-latency-budget"
tags: ["app-design", "cost", "latency", "ttfa", "unit-economics", "topic", "paper-evidence"]
created: 2026-10-25T14:48:12.403Z
updated: 2026-10-26T05:47:18.533Z
sources: ["reports/한벗 앱 설계서.md#7"]
links: ["overview-app-design.md", "claim-tech-5-latency-target.md", "claim-tech-3-stt-tts-vendors.md", "claim-bench-6-pricing-arpmau.md", "topic-tech-voice-pipeline-latency-cost.md", "src-rtzr-2026-pricing.md", "src-typecast-2026-api-pricing.md", "src-elevenlabs-2026-api-pricing.md", "src-typecast-2026-developers-latency.md", "src-elevenlabs-2026-models.md", "src-pipecat-2026-docs-tts-aggregation.md", "src-livekit-2026-pipeline-docs.md", "src-salesforce-2026-voice-agent-tutorial.md", "claim-bench-1-ttfa-target.md", "src-etnews-2026-scatterlab-zeta-interview.md", "src-mysoftly-2026-companion-pricing.md", "claim-app-8-hypotheses-h1-h5.md", "src-levinson-2015-turn-timing.md", "src-arxiv-2026-taste2-chatgpt-latency.md", "topic-app-paper-evidence.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-cost-latency-budget

상위: [[overview-app-design]] · 설계서 7절. 근거: [[claim-tech-5-latency-target]], [[claim-tech-3-stt-tts-vendors]], [[claim-bench-6-pricing-arpmau]], [[topic-tech-voice-pipeline-latency-cost]]

## 7.1 변동비 산식
가정: a1 분당 AI 응답 3턴(추정) / a2 응답 평균 80자(추정, 민감도 150자) / a3 세션 10분·1인 주 3회 / a4 환율 1,333원/USD, VAT 제외 / a5 턴당 Claude 입력 1.5–2.5k·출력 100–200 토큰(+위험 태그) / a6 재시도·오류 +10%.
단가: STT 1,000원/h(첫 10h 무료, 누진) [[src-rtzr-2026-pricing]]; Typecast Lite $15/월 200k자, 초과 $0.09/1k자 [[src-typecast-2026-api-pricing]]; ElevenLabs Flash $0.04/1k자 [[src-elevenlabs-2026-api-pricing]]; Claude 단가 미확인(W1 확인, 표에서 L원/분).

| 단계 | STT | TTS Typecast | TTS ElevenLabs |
|---|---|---|---|
| 분당(240자) | 16.7원 | 28.8원 | 12.8원 |
| 세션(10분) | 167원 | 288원 | 128원 |
| 30명x8주(720세션=7,200분=120h) | 110,000원 | 약 199,000원(Lite 2개월 + 초과) | 약 92,000원 |
| 합계(+10%) | STT+TTS 약 34.0만원 | | 약 22.2만원 |
| 민감도 a2=150자 | - | 약 38.1만원 | 약 17.3만원 |
Claude·서버는 별도. Wiki의 15–40만원은 300자/턴 가정이라 짧은 응답 설계에 맞춰 재계산했다.
이번 학기 실제 예상(추정): 개발 테스트 40h(STT 3만원, TTS 6.1/3.1만원) + W6 테스트 15h(STT 1.5만원, TTS 2.6/1.2만원) = 합계(+10%) STT 약 5.0만원, TTS 약 9.6만원(Typecast)/4.6만원(ElevenLabs). Claude·서버·도메인은 W1 단가 확인 후 추가.

## 7.2 지연 예산과 측정 정의 (비평 8)
측정 정의(고정): TTFA 시작 = 사용자 발화 종료 VAD 시점(마지막 음성 프레임, stop 대기 0.2s와 Smart Turn 판정은 TTFA 안에 포함), 끝 = 클라이언트 첫 오디오 재생 이벤트, 세션 시작 시 왕복 5회로 시계 차 보정(오차 기록), 집계 = 기기·환경 칸별 주 1회 100턴 이상, P50/P95와 단계별 분해.

| 단계 | 예산 | 상태 |
|---|---|---|
| 턴 감지 대기 | VAD stop 0.2s + Smart Turn | 미실측 |
| STT final | 300ms 이하(목표) | 미실측 |
| SER·메모리 prefetch | 직렬 경로 제외(병렬, 늦으면 폐기) | 미실측 |
| Claude 첫 토큰(위험 태그 포함) | 700ms 이하(목표) | 미실측 |
| TTS 첫 청크 | 200ms 이하(목표) [[src-typecast-2026-developers-latency]] [[src-elevenlabs-2026-models]] | 미실측 |
| 직렬 합계 ① | 300+700+200 = 1.2s | |
| 문장 집계 ② | +0.2–0.3s [[src-pipecat-2026-docs-tts-aggregation]] | 미실측 |
| ①+② | 1.4–1.5s | |
| 그 밖 | 턴 감지 대기, 국내→해외 API 왕복, 재생 버퍼(미산정). 컴포넌트 합 약 1초인데 체감 3–4초 사례 [[src-livekit-2026-pipeline-docs]] | 미실측 |
판정: P50 1.0s는 Wiki 목표이며 예산 합계로는 미달 가능. **W2 1차 측정 후 P50 1.5s로 조정할지 결정**. 유사 cascade(Deepgram + vLLM + ElevenLabs, 영어)는 본문 755ms, 표 P50 947ms로 서로 다르며 한벗 실측이 아니다 [[src-salesforce-2026-voice-agent-tutorial]]. 미달 시 조정 순서: (a) 첫 문장 단축·집계 축소 (b) Claude 모델 티어 (c) 끝점 임계. 출시 후 p50 500ms 목표는 제안값(C)이며 MVP 합격 기준 아님 ([[claim-bench-1-ttfa-target]]).

## 7.3 단위경제성 (H5, 추정)
STT+TTS 원가 분당 45.5원(16.7 + 28.8), 가격 9,900원 가정, 누진·Claude·서버·수수료 미반영.
| 이용자 | 원가 | 판단 |
|---|---|---|
| 라이트 30분/월 | 1,365원 + 30L | 여유 |
| 중간 120분(주 3회x10분) | 5,460원 + 120L | Claude 단가에 따라 빠듯 |
| 헤비 600분 | 27,300원 + 600L | **적자**, 유료도 월 분 상한 필요 |
| 손익분기 | 9,900 / 45.5 = 약 217분/월(Claude 제외) | Claude 포함 시 더 낮음 |
무료 상한 F 조건: `9,900 x c >= 45.5 x F x (1 - c)`. 전환율 5%면 F 약 11분/월 이하, 10%면 약 24분/월 이하. 전환율 5–10%는 근거 없는 설계 가정(C). 제타 역산 ARPMAU 약 1,388원/월 [[src-etnews-2026-scatterlab-zeta-interview]]. 따라서 음성 무료 상한은 수 분~수십 분 단위일 가능성이 크다. 가격 범위 9,900–14,900원은 가설(C) [[src-mysoftly-2026-companion-pricing]]. H5 판정은 [[claim-app-8-hypotheses-h1-h5]].

---

## Update (2026-10-26T05:47:18.533Z)

## 2026-10-26 논문 보강
- TTFA P50 ≤ 1.0s 목표 유지, 설계서 7.2 정의로 P50·P95 직접 측정. 참고 맥락: 사람 턴 간격 약 200ms [P16 [[src-levinson-2015-turn-timing]]], 언어별 평균은 교차언어 평균 ±250ms 안팎 [P15], ChatGPT Voice 평균 약 1,370ms [P18 [[src-arxiv-2026-taste2-chatgpt-latency]], 측정 조건 다름]. 직접 비교·"상용보다 빠르다"·"달성 불가" 표현 금지.
- 상용 모델 끼어들기 후 응답 지연 0.26~2.53s [P13] (TTS 중단 시간 아님).
- 7.1·7.3: SER·메모리 prefetch의 세션당 추가 서버 비용이 원가에 없음 → W3 실측 후 7.3 손익에 반영, H3·H4 반증 시 해당 비용 제거 (비평 26 일부 수정; 수치는 실측 전이라 보류).
- 전체: [[topic-app-paper-evidence]].

