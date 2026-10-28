---
title: "topic-app-risks"
tags: ["app-design", "risks", "unverified", "grade-C", "topic"]
created: 2026-10-25T14:48:57.322Z
updated: 2026-10-25T14:48:57.322Z
sources: ["reports/한벗 앱 설계서.md#9"]
links: ["overview-app-design.md", "topic-app-schedule-7weeks.md", "topic-app-cost-latency-budget.md", "src-audeering-2026-opensmile-python.md", "src-sogang-2024-aihub-hubert.md", "src-firt-2026-ios-pwa-getusermedia.md", "topic-app-impl-safety-crisis.md", "topic-app-impl-consent-privacy.md", "topic-app-impl-ser-cues.md"]
category: pattern
confidence: low
schemaVersion: 1
---

# topic-app-risks

상위: [[overview-app-design]] · 설계서 9절. 미확인 항목이 많아 confidence low.

## 리스크 표 (19건)
| 리스크 | 영향 | 완화 | 확인 시점 |
|---|---|---|---|
| 문제·수요 미검증(H1) | 만들어도 쓰지 않음 | W1–W2 인터뷰, 반증 시 축소 ([[topic-app-schedule-7weeks]] 8.3) | W2 |
| 차별점 가치 미검증(H3·H4) | 확인 질문·승인 절차가 대화를 끊음 | 핵심 비교 1개 + 관찰, 반증 시 강등 | W6 |
| 지불 의사·단위경제성(H5) | 가격·무료 상한 설계 실패 | 7.3 계산, 모의 선택 ([[topic-app-cost-latency-budget]]) | W1 단가, W6–W7 |
| emotion2vec+ 가중치 상업 조항 불명(C) | 상용화 시 SER 교체 | 표기 의무 준수, SenseVoice 2순위, MVP는 비상업 테스트 | 법률 자문, W1 |
| openSMILE 상업 사용 불가 [[src-audeering-2026-opensmile-python]] | 포함 시 위반 | 서비스 코드 제외 | W1 |
| 한국어 SER 성능 미확인(공개 수치 1건) [[src-sogang-2024-aihub-hubert]] | 잘못된 확인 질문 → 침해감 | 매핑 범주 제한, 임시 기준, 거절 시 폐기 | W3 UA, W6 |
| KEMDy·AI Hub 약관 미확인(C) | 벤치마크 불가 | 팀 녹음으로 대체 | W1 |
| 커뮤니티 플러그인 성숙도 | 연동 버그·지연 | 버전 고정, 코드 읽기, WebSocket 직접 구현 대비 | W2 |
| TTFA 예산 합계가 목표 초과 | 대화 어색 | 7.2 정의대로 측정, 목표 조정 결정 | W2 |
| 위험 태그 미준수·누락 | 위기 미탐 | KeywordGate 병행, 준수율 기준, 대안 호출 | W3 |
| 암시적 위기 미탐, 텍스트 단독 경로 성능 미확인 | 안전 사고 | 경로별 평가, 평가 세트 동결, 운영 표 | W3–W6 |
| 109 공식 API·연계 미확인(C) | 자동 연결 불가 | 번호·복사·지역 센터 안내 | 기관 문의, W1–W3 |
| 비동의 사용자의 위기 점검 불가 | 사후 점검 누락 | 한계로 보고, 자동 안내는 동일 | W6 보고 |
| 전사의 민감정보 해당 여부·위기 판정 처리 근거 | 동의 재설계 | 법무 검토 항목 명시 | W1–W5 |
| 백업·벤더·로그 보존 기간 미확정 | 삭제 약속 과대 | "설계" 저장소만 24h 약속, 나머지는 처리방침 별도 기재 | W1–W4 |
| 연구윤리 절차 필요 여부(미확인) | 테스트 지연·취소 | 게이트 조건, 대체 발표안 | W1 |
| iOS PWA 마이크 안정성 [[src-firt-2026-ios-pwa-getusermedia]] | 일부 기기 통화 불가 | Safari 브라우저 기본, 기기 매트릭스 | W2 |
| 소규모 표본 | 결과 과대 해석 | 탐색적 해석, 모집자 전체 보고 | W7 |
관련 구현: [[topic-app-impl-safety-crisis]], [[topic-app-impl-consent-privacy]], [[topic-app-impl-ser-cues]].

## C등급: 본문에서 제외한 미확인 항목 10개
- ChatGPT 음성: "한도 15분 전 알림", 오브 색상, 3가지 표시 방식
- Gemini 캡션이 사용자 발화를 표시하지 않는다는 주장
- Wysa SOS가 "항상" 보인다는 주장
- Kindroid가 승인 전에는 저장하지 않는다는 주장
- Hume 감정 점수 그래픽
- `pipecat-rtzr` 0.1.0·커밋 수·테스트 버전
- Typecast "200ms" 인용
- librosa·parselmouth와 eGeMAPS의 동등성
- Pipecat이 LiveKit보다 쉽다는 비교
- LiveKit에 Typecast 플러그인이 없다는 주장
이 항목들은 본문 사실로 쓰지 않으며, 해소되면 해당 topic 페이지에 반영한다.

