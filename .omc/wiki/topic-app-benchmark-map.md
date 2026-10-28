---
title: "topic-app-benchmark-map"
tags: ["app-design", "benchmark", "feature-map", "topic", "grade-A", "grade-B"]
created: 2026-10-25T14:44:42.482Z
updated: 2026-10-25T14:44:42.482Z
sources: ["reports/한벗 앱 설계서.md#1"]
links: ["overview-app-design.md", "overview-benchmark.md", "claim-app-8-hypotheses-h1-h5.md", "src-google-2026-gemini-live-help.md", "claim-bench-4-memory-consent-editing.md", "src-characterai-2024-character-calls.md", "src-fortune-2025-friend-necklace-review.md", "src-openai-2026-chatgpt-voice-help.md", "src-hume-2026-evi-overview.md", "src-pipecat-2026-smart-turn.md", "src-hume-2026-evi-docs.md", "src-arxiv-2026-audio-flamingo-iemocap.md", "claim-tech-7-dialogue-mode-strategy.md", "src-kindroid-2026-subscription-docs.md", "src-replika-2026-help-how-memory-works.md", "src-nomi-2026-mind-map.md", "src-naver-2026-carecall-result-report.md", "src-wysa-2024-ai-crisis-detection-study.md", "src-entrepreneur-2025-chatgpt-break-reminder.md", "src-openai-2025-affective-use-study.md", "claim-bench-5-usage-limit-break-reminder.md", "src-khan-2026-zeta-teen-policy.md", "claim-tech-6-sensitive-data-consent.md", "topic-app-schedule-7weeks.md", "src-apple-2026-replika-appstore.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-benchmark-map

상위: [[overview-app-design]] · 설계서 1절 요약. 관련: [[overview-benchmark]]

## 읽는 법
등급 A는 "출처 원문과 일치"라는 뜻일 뿐, 그 기능이 효과적이거나 안전하다는 증거도, 한벗에 그대로 적용된다는 보증도 아니다. 경쟁 앱에 기능이 있다는 사실은 수요의 증거가 아니다(가설 H1 참고: [[claim-app-8-hypotheses-h1-h5]]). 아래는 기능 존재 사실과 설계 참고점만 정리한다.

## 기능별 따라 할 앱 (14행)
| # | 한벗 기능 | 1순위 참고 | 따라 하는 것 | 한벗 설계 / 피할 것 | 근거 |
|---|---|---|---|---|---|
| 1 | 온보딩 | 자체 설계 + 사용자 테스트 | Gemini Live 첫 실행 안내만 확인 [[src-google-2026-gemini-live-help]] | 3단 동의, 호칭, 모드 소개, AI·비치료 고지, 3분 이내 / 민감정보 동의를 일반 동의와 묶지 않음 ([[claim-bench-4-memory-consent-editing]]) | A 공식 |
| 2 | 통화 시작 | Character.AI | 채팅 버튼으로 통화 시작, 텍스트 복귀, 한국어 [[src-characterai-2024-character-calls]] | 홈의 큰 통화 버튼 1개 / 상시 청취(Friend) 지양 [[src-fortune-2025-friend-necklace-review]] | A 공식 |
| 3 | 통화 화면 | Gemini Live | Hold와 Mute 구분, End 후 전사본, Captions 유지 [[src-google-2026-gemini-live-help]] | 카메라 제외, 양쪽 자막, 오브 1개 + 상태 텍스트 / 응답 지연 7–10초(Friend 리뷰)는 피함 | A 공식 / B 2차 |
| 4 | 끼어들기 | Gemini + ChatGPT + Character.AI | 말로 끼어들기·끄기 토글 [[src-google-2026-gemini-live-help]], ChatGPT FAQ [[src-openai-2026-chatgpt-voice-help]], 버튼 끼어들기 [[src-characterai-2024-character-calls]] | 기본 ON. 위기 안내 중 끼어들면 음성만 멈추고 카드 유지, 세션 말미 재안내 | A 공식 |
| 5 | 말 끝 감지 | Hume EVI(설계 참고) | 톤 기반 말 끝 감지 [[src-hume-2026-evi-overview]] | 구현은 Smart Turn v3 [[src-pipecat-2026-smart-turn]], 침묵 임계는 길게(임시) / Hume EVI API는 2026-11-13 종료라 채택 안 함 [[src-hume-2026-evi-docs]] | A 공식 |
| 6 | 감정 단서 표시 | Hume EVI(데이터 구조만) | 문장별 음성 표현 측정치 [[src-hume-2026-evi-overview]] | 점수·막대 노출 금지, 확인 질문으로만 사용, 사용자가 확인한 감정만 후보로 / IEMOCAP 4-class Audio Flamingo 3 UA 76.15%(영어, 비교 불가) [[src-arxiv-2026-audio-flamingo-iemocap]] | A 공식 / A 독립 |
| 7 | 대화 모드 | 자체 설계 + 테스트 | 모드 UI 사례 확인 못함 | 들어줘/조언/정리를 ESConv 전략에 고정, 상단 세그먼트 ([[claim-tech-7-dialogue-mode-strategy]]) / 전략 선택을 모델에 맡기지 않음 | Wiki 결정 |
| 8 | 기억 생성 승인 | Kindroid | 일기 저널 제안, 보류 제안 목록 [[src-kindroid-2026-subscription-docs]] | 통화 후 후보 카드(저장/고쳐서 저장/버리기) / 사용자가 모르는 기억, Replika의 보이지 않는 계층 지양 [[src-replika-2026-help-how-memory-works]] | A 공식 |
| 9 | 기억 열람·편집 | Nomi + Replika | Nomi 표 뷰·편집 [[src-nomi-2026-mind-map]], Replika 열람·삭제·삭제 경고 | 목록 뷰만, 라벨 "내가 말한 것"/"한벗이 느낀 것", 근거·만료일 표시 / 그래프 뷰 제외 | A 공식 |
| 10 | 통화 후 요약 | Gemini 전사본 + 케어콜 | 케어콜 결과 리포트·카테고리별 불편 [[src-naver-2026-carecall-result-report]] | 본인에게만 표시, 확인된 감정만, 사용자가 말한 계획이 있을 때만 다음 행동 / 제3자 자동 공유 금지 | A 공식·자사 |
| 11 | 위기 화면 | Wysa SOS | 홈 SOS, 감지 후 확인→SOS, 핫라인·안전계획·그라운딩 [[src-wysa-2024-ai-crisis-detection-study]] | 109 카드 최상단 + 지역 센터, 통화 화면 SOS 버튼, 안전계획 메모 P0 / 핫라인 선택 2.4%는 관찰값일 뿐 효과 근거 아님 | A 자사발표 |
| 12 | 휴식·사용 제한 | ChatGPT 팝업 + Kindroid 조용시간 | 휴식 팝업 "Keep chatting" [[src-entrepreneur-2025-chatgpt-break-reminder]], 조용시간 | 통화 중 음성 제안, 기준은 임시 / 장시간 사용과 외로움 상관은 인과 아님 [[src-openai-2025-affective-use-study]] ([[claim-bench-5-usage-limit-break-reminder]]) | B 2차 / A 공식 |
| 13 | AI 고지 | 자체 설계 + 테스트 | 제타 상시 표시 보도 [[src-khan-2026-zeta-teen-policy]] | 온보딩·통화 화면 상단·첫 인사 음성 3곳, 위치 비교 없이 W6 관찰 | B 2차 |
| 14 | 무료/유료 경계 | Kindroid + ChatGPT | Kindroid 분당 400크레딧·무료 후 읽기 전용, ChatGPT 한도 | "분" 단위 표시, 안전·개인정보 통제는 전원 무료 ([[claim-tech-6-sensitive-data-consent]]), 가격은 H5 검증 / 읽기 전용 전환이 위기 사용자를 막는 구조 지양 | A 공식 |

## 1차 자료 없는 4가지
온보딩 질문 구성, 모드 UI, AI 고지 위치, 기억 알림 문구는 W6에서 A/B 비교하지 않고 관찰 항목([[topic-app-schedule-7weeks]] 8.5)으로 본 뒤 결정한다. P2 선제 체크인은 Replika 선제 안부 [[src-apple-2026-replika-appstore]]와 케어콜 주 1~2회 발신을 참고하되 사용자가 켠 경우에만 동작한다.

