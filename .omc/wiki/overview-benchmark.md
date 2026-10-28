---
title: "overview-benchmark"
tags: ["benchmark", "overview", "competitors", "한벗", "grade-B"]
created: 2026-10-25T07:39:33.368Z
updated: 2026-10-25T14:53:13.206Z
sources: []
links: ["bench-replika.md", "bench-character-ai.md", "bench-pi-inflection.md", "bench-nomi.md", "bench-kindroid.md", "bench-hume-evi.md", "bench-chatgpt-voice.md", "bench-woebot.md", "bench-wysa.md", "bench-therabot.md", "bench-zeta-scatterlab.md", "bench-wrtn-character.md", "bench-kanana.md", "bench-clova-carecall.md", "src-cac-2026-china-companion-rules.md", "src-scmp-2024-talkie-delisted.md", "src-phemex-2025-sesame-funding.md", "src-tnw-2026-friend-pendant.md", "src-mt-2025-mindcafe-revenue.md", "src-thevc-2026-humart-closure.md", "src-google-2026-gemini-live-api-pricing.md", "topic-bench-empathy-dialogue.md", "topic-bench-ser.md", "topic-bench-memory.md", "topic-bench-voice-latency.md", "topic-bench-safety-eval.md", "topic-bench-business-metrics.md", "topic-bench-regulation-incidents.md", "claim-bench-1-ttfa-target.md", "claim-bench-2-d30-retention-target.md", "claim-bench-3-safety-protocol.md", "claim-bench-4-memory-consent-editing.md", "claim-bench-5-usage-limit-break-reminder.md", "claim-bench-6-pricing-arpmau.md", "claim-bench-7-no-therapy-positioning.md", "claim-bench-8-emotion-cue-as-question.md", "src-etnews-2026-scatterlab-zeta-interview.md", "src-jmir-2017-woebot-rct.md", "src-sacra-2026-characterai-revenue.md", "src-a16z-2026-top100-genai-apps.md", "src-gunderson-2025-california-sb243.md", "overview-hanbeot-project.md", "overview-orchestra-team.md", "overview-market-demand.md", "overview-technology.md", "topic-app-benchmark-map.md", "overview-app-design.md"]
category: architecture
confidence: medium
schemaVersion: 1
---

# overview-benchmark

# overview-benchmark

> 「한벗」 경쟁 서비스·벤치마크 종합 (조사 2026-10-25, 검증 2026-10-25). 원천: `research_notes/한벗 창업 딥리서치/benchmark_competitors.md`, 검증표: `.omc/orchestra/reviews/20261025_154648_verify_benchmark_competitors.md`.

## 요약
1. 글로벌 컴패니언 시장은 (a) 미성년 보호 소송·규제(Character.AI 합의·주정부 소송, FTC 6(b), SB 243/1119, 伊 Replika €5M, 中 CAC 규정 시행)와 (b) 정서적 의존 대응(OpenAI 아첨 롤백·GPT-4o 퇴역·임상가 평가)으로 재편 중.
2. 기억 UI(열람·삭제·편집·추가)는 Replika·Nomi·Kindroid가 이미 제공 → 한벗 차별점은 **저장 전 동의 + 사실/추정 분리 + 근거 표시**로 좁혀야 함.
3. "치료" 포지션(Woebot 종료, Wysa 지정≠승인, Therabot 연구용)은 비용이 큼 → 한벗은 "안전한 경청·동반".
4. 한국: 제타(사용시간 1위, 2025 1–11월 229억·흑자, ARPMAU ≈ **₩1,388**)·크랙은 1020 롤플레이, 마인드카페는 인간 상담, 케어콜은 B2G. 대학생 음성 경청 동반자는 공백으로 보이나 "부재"는 C.
5. 기술 벤치마크: 공감(EmoBench-M 70.5), SER(IEMOCAP ~76%), 기억(LongMemEval 93–96% 포화), 지연(인간 ~400–500ms, EVI 3 <300ms, ChatGPT 앱 1,370ms), 안전(RAND 5등급·OpenAI 패널 71–77%).

## 경쟁사 매트릭스

| 제품 | 국가 | 모달리티 | 기억 | 안전·규제 | 가격 | 핵심 지표(시점) | 페이지 |
|---|---|---|---|---|---|---|---|
| Replika | 미국 | 텍스트·음성 | 열람·삭제 | 伊 €5M(2025) | $19.99/월 | 누적 4,000만+(2025, B) | [[bench-replika]] |
| Character.AI | 미국 | 텍스트·음성 | 대화 기록 | U18 금지, 소송 합의·주 소송 | $9.99/월 | MAU ~2,000만(2024초), $30M run-rate(2025-07) | [[bench-character-ai]] |
| Pi | 미국 | 텍스트·음성 | 2026-07 개선 | — | 무료 | 공개 없음 | [[bench-pi-inflection]] |
| Nomi | 미국 | 텍스트·음성·이미지 | Mind Map 편집·추가 | — | $15.99/월 | 공개 없음 | [[bench-nomi]] |
| Kindroid | 미국 | 텍스트·음성 | 사용자 작성 | — | $13.99–15.99/월, 무료 종료(2026-10) | 공개 없음 | [[bench-kindroid]] |
| Hume EVI 3 | 미국 | 음성 S2S API | API | — | $0.04–0.07/분(2026-07) | <300ms | [[bench-hume-evi]] |
| ChatGPT Voice | 미국 | 음성 full-duplex | 계정 | 170+ 임상가 평가, 휴식 알림 | Plus $20 | WAU 0.15% 자살 지표; TTFA 1,370ms | [[bench-chatgpt-voice]] |
| Woebot | 미국 | 텍스트 | — | — | 종료(2025-06) | RCT 70명(2017) | [[bench-woebot]] |
| Wysa | 인도·영국 | 텍스트 | — | FDA Breakthrough(2022) | EAP·프리미엄 | 600만(자사) | [[bench-wysa]] |
| Therabot | 미국(연구) | 텍스트 | — | 임상 모니터링 | — | 우울 −51%·불안 −31%(처치군) | [[bench-therabot]] |
| 제타 | 한국 | 텍스트 | — | 청소년 3시간·10만원(연내), 2021 제재 | 광고 무료+유료 | MAU 150만(회사)/402만(와이즈앱) | [[bench-zeta-scatterlab]] |
| 크랙 | 한국 | 텍스트 | — | 청소년 3시간 | 부분유료 | MAU 98만(2026-02) | [[bench-wrtn-character]] |
| 카나나 | 한국 | 텍스트 | 나나 개인화 | — | 무료 | 2026-10-15 종료 예고 | [[bench-kanana]] |
| 클로바 케어콜 | 한국 | 음성 전화 | — | 지자체 공유 | B2G | ~6만(2026-09) | [[bench-clova-carecall]] |

기타(페이지 없음): Xiaoice·中 규정 [[src-cac-2026-china-companion-rules]], Talkie [[src-scmp-2024-talkie-delisted]], Sesame [[src-phemex-2025-sesame-funding]], Friend [[src-tnw-2026-friend-pendant]], 마인드카페 [[src-mt-2025-mindcafe-revenue]], 트로스트 [[src-thevc-2026-humart-closure]], Gemini Live [[src-google-2026-gemini-live-api-pricing]].

## 벤치마크 주제 페이지
- [[topic-bench-empathy-dialogue]] — ESConv·EmoBench(-M)·EQ-Bench·HEART
- [[topic-bench-ser]] — IEMOCAP·MSP-Podcast·KEMDy19/20
- [[topic-bench-memory]] — LongMemEval·LoCoMo·MemBench·BEAM
- [[topic-bench-voice-latency]] — TTFA 기준점·측정법·비용
- [[topic-bench-safety-eval]] — RAND·OpenAI 임상가 평가·MIT 연구
- [[topic-bench-business-metrics]] — 시장·리텐션·전환·가격·ARPMAU
- [[topic-bench-regulation-incidents]] — 소송·규제 연표·한벗 체크리스트

## 사업계획서용 주장
- [[claim-bench-1-ttfa-target]] — 지연 p50 <500ms / p95 <1s
- [[claim-bench-2-d30-retention-target]] — D30 15%+, MVP 재이용 의향 60%
- [[claim-bench-3-safety-protocol]] — 5등급 자살 질문셋·패널·109 핸드오프 공개
- [[claim-bench-4-memory-consent-editing]] — 저장 전 동의·사실/추정 분리·갱신 일관성
- [[claim-bench-5-usage-limit-break-reminder]] — 휴식 알림·분수 상한
- [[claim-bench-6-pricing-arpmau]] — ₩9,900–14,900, ARPMAU 1,388원 기준
- [[claim-bench-7-no-therapy-positioning]] — 경청·동반 포지셔닝
- [[claim-bench-8-emotion-cue-as-question]] — 감정 단서는 확인 질문으로

## 검증 요약 (GPT verifier, 2026-10-25)
- 총 279개 주장: **A 86 · B 97 · C 96** (C 중 불일치 23).
- 기업 자체 발표의 A는 독립 감사가 아님. C는 본문과 분리해 사용.

### 우선 수정 항목 (5)
1. **제타 ARPMAU "월 1.4만원" → 약 1,400원** (10배 오류) — [[src-etnews-2026-scatterlab-zeta-interview]]
2. **Woebot 2024 RCT(PMC10993129) → 폴란드어 Fido 연구**, 제품 오인 — [[src-jmir-2017-woebot-rct]]
3. **Character.AI 매출: $30M = Sacra 추정, $50M = 회사 전망** (주체 역전) — [[src-sacra-2026-characterai-revenue]]
4. **a16z 7판은 2026-10-05 발행**, 판본·시점 재확인 — [[src-a16z-2026-top100-genai-apps]]
5. **SB 243 휴식 알림은 미성년자 대상** (전 이용자 아님) — [[src-gunderson-2025-california-sb243]]

### 기타 정정
- 中 컴패니언 규정은 "추진"이 아닌 2026-07-15 시행 · Pi 음성은 "추가"가 아닌 "개선" · RAND는 30문항을 5등급 분류(×5 아님) · OpenAI 불일치 23–29% · ABHINAYA 166 제출물 중 4위 · SICon 2025 인용 오류 · Nomi는 기억 추가 가능 · 제타 3시간 제한은 발표(연내 도입).

### 공식 출처로 상향 가능
- Pi 업데이트(GlobeNewswire), Kindroid Lite 종료(공식 변경 기록), 펜실베이니아 소장 접수일, OpenAI 오디오 API 가격, Garante 처분문, 켄터키 AG 발표, CAC 원문.

### 계속 미검증(C)으로 남길 항목
- 전환율·리텐션(원자료 없음), 글로벌 MAU/매출 1차 공시, 한국 대학생 음성 동반자 "공백" 주장, Sesame·Friend·Talkie 세부, 한벗 목표값(D30·가격·지연).

관련: [[overview-hanbeot-project]] · [[overview-orchestra-team]] · [[overview-market-demand]] · [[overview-technology]]

---

## Update (2026-10-25T14:53:13.206Z)

## 앱 설계서 (2026-10-25)
- 벤치마크 결과를 14개 기능별 "따라 할 앱" 지도로 정리했다([[topic-app-benchmark-map]]). 등급 A는 기능 존재 확인일 뿐 효과·수요의 증거가 아니다.
- 1차 자료가 없는 4가지(온보딩 질문, 모드 UI, AI 고지 위치, 기억 알림 문구)는 자체 설계 + W6 관찰로 결정한다.
- 요약: [[overview-app-design]]

