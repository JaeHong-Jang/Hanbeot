---
title: "topic-app-screen-flow"
tags: ["app-design", "ux", "screen-flow", "onboarding", "topic"]
created: 2026-10-25T14:45:17.595Z
updated: 2026-10-25T14:45:17.595Z
sources: ["reports/한벗 앱 설계서.md#3"]
links: ["overview-app-design.md", "topic-app-feature-spec.md", "topic-app-benchmark-map.md", "src-google-2026-gemini-live-help.md", "topic-app-impl-consent-privacy.md", "topic-app-impl-memory.md", "topic-app-impl-dialogue-tts.md", "src-nomi-2026-mind-map.md", "src-replika-2026-help-how-memory-works.md", "claim-tech-6-sensitive-data-consent.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-app-screen-flow

상위: [[overview-app-design]] · 설계서 3절. 기능 근거: [[topic-app-feature-spec]], 참고 앱: [[topic-app-benchmark-map]]

## 전체 흐름
```
[온보딩 1 소개·고지] → [2 3단 동의] → [3 호칭·모드] → [4 마이크 권한]
   → [홈] ─통화─▶ [통화] ─종료─▶ [요약·기억 승인] → [홈]
        ├─▶ [기억 관리]        위기 감지 시 어느 화면에서든 ─▶ [안전 모드·109 카드]
        └─▶ [설정: 사용 시간·동의·삭제]
```

## 3.1 온보딩 (자체 설계, 참고 [[src-google-2026-gemini-live-help]])
- 1면: "한벗은 AI 친구예요 / 치료나 상담을 대신하지 않아요 / 위급할 땐 109 번호를 안내해요 / 한벗 팀은 실시간으로 연락하지 않아요". 앞 두 줄이 P0-12a 필수 고지, 마지막 줄은 위기 운영 범위 고지.
- 2면 동의 3종: (필수) 서비스 이용·대화 기록 저장(건강·관계 이야기 가능, 내용이 해외 AI 서비스로 전송됨 고지) / (선택) 목소리 감정 단서 분석(끄면 확인 질문·"한벗이 느낀 것" 기억 없음, 민감정보 별도 동의) / (선택) 원본 음성 보관 [준비 중](목적·기간 확정 전 비활성). 동의 세부는 [[topic-app-impl-consent-privacy]].
- 3면: 호칭 입력, 들어줘/조언/정리 모드 소개.

## 3.2 홈
통화 버튼(1탭), 오늘 사용 시간("오늘 12분"), 기억 후보 배지("확인할 기억 2개"), 우상단 SOS(109 카드), 하단 탭 홈/기억/설정. 참고: Character.AI, Kindroid 분당 요금 공개, Wysa SOS.

## 3.3 통화 화면 (참고 Gemini Live)
```
AI 친구 한벗 · 07:42        [SOS]   ← 고지 문구 2
[들어줘 | 조언 | 정리]
        ( 오브 )                    ← 듣는 중 / 생각 중 / 말하는 중
나: 오늘 발표를 망쳐서…             ← 양쪽 자막
한벗: 발표가 마음에 걸리는구나. 목소리가 좀 가라앉은 것 같은데, 맞아?  [맞아] [아니야]
[보류] [음소거] [자막] [종료]
```
보류는 마이크와 AI 발화를 모두 멈추고 음소거는 마이크만 끈다. [맞아]는 해당 추정을 `confirmed`로 바꾸지만 이는 "감정이 맞다는 확인"일 뿐이고, 저장 동의(`approved`)는 통화 후 카드에서 따로 받는다 ([[topic-app-impl-memory]]).

## 3.4 통화 후 요약·기억 승인
- 상단: 오늘 이야기(요약 ≤3줄), 사용자가 확인한 감정만, 사용자가 말한 계획이 있을 때만 "다음에 해볼 것".
- 하단 "기억해도 될까요?": [내가 말한 것] 항목은 근거 날짜·발화와 [저장][고쳐서 저장][버리기], [한벗이 느낀 것 · 내가 맞다고 함] 항목은 30일 뒤 자동 삭제 표시와 [저장][버리기].
- 요약 생성은 [[topic-app-impl-dialogue-tts]]의 통화 후 요약.

## 3.5 기억 관리
| 요소 | 내용 |
|---|---|
| 라벨 | "내가 말한 것"(stated) / "한벗이 느낀 것 · 내가 맞다고 함"(inferred + confirmed) / "설정"(persona). "사실" 라벨은 쓰지 않음 |
| 행 | 1줄 내용, 탭하면 근거 발화·날짜 |
| 만료 | "한벗이 느낀 것"만 "D-23" 표시 |
| 동작 | 수정("내가 말한 것", 설정), 삭제(전부), "틀렸어"("한벗이 느낀 것") |
| 삭제 확인 | "이 기억은 앞으로 대화에 쓰이지 않아요. 원래 대화 기록은 남아 있어요. [대화 기록도 지우기]" |
| 정렬·검색 | 날짜·라벨 정렬, 키워드 검색 |
참고: Nomi 표 뷰 [[src-nomi-2026-mind-map]], Replika 삭제 경고 [[src-replika-2026-help-how-memory-works]].

## 3.6 설정
사용 시간(오늘·주간 분, 휴식 알림 기준 60분 임시, 조용시간 P1), 동의 3종 개별 on/off(통화 중에도 철회, 즉시 반영), 내 데이터(전사 내려받기, 전체 기억 삭제, 대화 기록 삭제, 계정 삭제), 안전(109·지역 센터 카드, 안전계획 메모, "실시간 연락 없음" 고지), 고지(AI 고지, 처리방침: 수탁·국외이전·저장소별 보존 기간, [[claim-tech-6-sensitive-data-consent]]).

