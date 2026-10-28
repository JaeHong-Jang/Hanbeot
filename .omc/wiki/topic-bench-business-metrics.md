---
title: "topic-bench-business-metrics"
tags: ["benchmark", "business-metrics", "retention", "conversion", "arpu", "pricing", "grade-B"]
created: 2026-10-25T07:36:16.172Z
updated: 2026-10-25T07:36:16.172Z
sources: []
links: ["src-techcrunch-2025-appfigures-companion-revenue.md", "src-techcrunch-2025-sensortower-genai-h1.md", "src-agnost-2026-companion-retention.md", "src-jmir-2021-youper-observational.md", "src-aicompanionpick-2026-replika-stats.md", "src-sacra-2026-characterai-revenue.md", "src-mysoftly-2026-companion-pricing.md", "src-kindroid-2026-subscription-docs.md", "src-aicompanionguides-2026-nomi-pricing.md", "src-etnews-2026-scatterlab-zeta-interview.md", "src-daum-2025-wrtn-crack-mau.md", "src-mt-2025-mindcafe-revenue.md", "src-dealsite-2026-clova-carecall.md", "src-openai-2026-realtime-api-pricing.md", "src-google-2026-gemini-live-api-pricing.md", "src-usagepricing-2026-hume-pricing.md", "src-a16z-2026-top100-genai-apps.md", "claim-bench-2-d30-retention-target.md", "claim-bench-6-pricing-arpmau.md", "overview-benchmark.md", "overview-market-demand.md", "src-hbs-2025-replika-identity.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-bench-business-metrics

# topic-bench-business-metrics

> 리텐션·전환율·ARPU·가격·시장 규모 벤치마크(2026-10 기준). 1차 공시는 거의 없고 대부분 2차 추정(B)임을 전제.

## 시장 규모
| 지표 | 값 | 근거 |
|---|---|---|
| AI 컴패니언 모바일 소비자 지출 | 2025 H1 $82M(+64% YoY), 연말 $120M+ 전망; H1 다운로드 6,000만(+88%); 누적 DL 2.2억·지출 $221M(2025-07) | [[src-techcrunch-2025-appfigures-companion-revenue]] (B) |
| 집중도 | **상위 10% 앱이 매출 89%**; 337개 수익 앱 중 128개 2025 출시; DL당 매출 2024 $0.52 → 2025 $1.18 | [[src-techcrunch-2025-appfigures-companion-revenue]] (B) |
| 전체 GenAI 앱 | 2025 H1 DL 17억, IAP $18.7억(H2 2024 대비 ~2배) | [[src-techcrunch-2025-sensortower-genai-h1]] (B) |

## 리텐션
| 지표 | 값 | 근거 |
|---|---|---|
| 컴패니언 D30 | 대부분 8–18%, 상위 20–25%; Chai ~22%, Character.AI 13–18% (2차, 원자료 없음) | [[src-agnost-2026-companion-retention]] (B) |
| Youper 4주 유지율 | 42.66% (유료 이용자·연구 코호트, 2021; 일반 D30과 비교 금지) | [[src-jmir-2021-youper-observational]] (A) |
| Replika 유료 유지 | 7.2개월 (2차) | [[src-aicompanionpick-2026-replika-stats]] (B) |

## 전환율
| 지표 | 값 | 근거 |
|---|---|---|
| Replika 무료→유료 | ~25% (분모 'free users'; 원자료 없음) | [[src-aicompanionpick-2026-replika-stats]] (B) |

## 가격 (2026, 기본 월 구독)
| 제품 | 가격 | 근거 |
|---|---|---|
| c.ai+ | $9.99/월, $94.99/년 | [[src-sacra-2026-characterai-revenue]] (B) |
| Chai | $13.99/월, $134.99/년 | [[src-mysoftly-2026-companion-pricing]] (B) |
| Kindroid | $13.99–15.99/월 (무료 Lite 2026-10-01 종료) | [[src-kindroid-2026-subscription-docs]] (A/B) |
| Nomi | $15.99/월, $99.99/년 | [[src-aicompanionguides-2026-nomi-pricing]] (B) |
| Replika | Pro $19.99/월, $69.99/년 | [[src-aicompanionpick-2026-replika-stats]] (B) |
| 글로벌 범위 | 월 **$10–20** | [[src-mysoftly-2026-companion-pricing]] (B) |

## 매출·ARPMAU
| 제품 | 값 | 근거 |
|---|---|---|
| Character.AI | Sacra 2025-07 run-rate $30M; 회사 전망 $50M; 2024 $32.2M | [[src-sacra-2026-characterai-revenue]] (B) |
| 제타(스캐터랩) | 2025 1–11월 229억·영업이익 26억, MAU 150만 → **ARPMAU ≈ ₩1,388/월** (노트 "1.4만원"은 10배 오류) | [[src-etnews-2026-scatterlab-zeta-interview]] (B) |
| 크랙 | 월 10억→30억 보도 (C) | [[src-daum-2025-wrtn-crack-mau]] (C) |
| 마인드카페 | 2025 연매출 200억 **예상** | [[src-mt-2025-mindcafe-revenue]] (B) |
| 클로바 케어콜 | 이용자 ~6만(2026-09), B2G | [[src-dealsite-2026-clova-carecall]] (B) |

## 음성 추론 비용
- OpenAI realtime 오디오 $32/$64·mini $10/$20 per M tokens [[src-openai-2026-realtime-api-pricing]] (A); Gemini Live $3/$12 [[src-google-2026-gemini-live-api-pricing]] (A); Hume $0.04–0.07/분 [[src-usagepricing-2026-hume-pricing]] (B). 분당 ₩14–70 환산은 환율 1,400원 가정(C).
- 분당 14–70원 가정 시 **월 20–99분 사용에서 ARPMAU 1,388원 도달** → 무료 음성은 분수 상한 필요.

## 우선 수정
- 제타 ARPMAU 10배 오류. Sacra/회사 전망 주체 역전. a16z 판본 혼동 ([[src-a16z-2026-top100-genai-apps]]).
- 노트의 KPI 가이드(D1 35–45%, D30 15%+, 전환 5–10%, ₩9,900–14,900)는 **한벗 제안 목표값(C)**이며 업계 표준이 아님 → [[claim-bench-2-d30-retention-target]] · [[claim-bench-6-pricing-arpmau]].

관련: [[overview-benchmark]] · [[overview-market-demand]] · [[src-hbs-2025-replika-identity]]

