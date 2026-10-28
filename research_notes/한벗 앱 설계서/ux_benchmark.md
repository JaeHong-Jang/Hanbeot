# 음성 AI 컴패니언 UX 벤치마크 — 한벗 기능별 "따라 할 앱" 지도

- 작성: researcher (claude-sonnet-5-5) / 확인일: 2026-10-25
- 범위: UX·기능 흐름만 (사업 지표·규제는 Wiki `bench-*` 참조)
- 등급: **A** 공식 도움말·공식 블로그·공식 문서 / **B** 언론·전문 매체 / **C** 리뷰·블로그·가이드·사용자 글
- 원칙: 공식 자료로 확인 안 되면 "미확인"으로 쓰고 본 2차 출처를 병기. 앱을 직접 설치·실행해 본 것은 아니며, 아래는 모두 문서·기사 기반이다.
- 한계(중요): help.openai.com, help.replika.com 등 다수 공식 도움말이 자동 열람에서 403이었다. 해당 내용은 검색 결과 스니펫(2차)으로만 확인했고 각 항목에 표기했다. 온보딩 단계 수는 어느 앱도 공식 확인하지 못했다(전부 "미확인").

---

## 1. 요약 (앱별 3줄)

**ChatGPT Voice** — 파랑 오브 UI, 메인 채팅 내/플로팅 오브/전체화면(Separate Voice) 3가지 표시(A 스니펫). 한도 15분 남으면 앱 내 알림(A 스니펫). 감정 표시 기능 없음, 장시간 대화 휴식 팝업은 텍스트 채팅 기준으로만 확인(음성 적용 미확인).

**Gemini Live** — 공식 문서로 컨트롤이 가장 명확: Hold/Mute/End/Camera/Captions, 말로 끼어들기(끄기 토글 있음, 화면 탭도 가능), 종료 시 전사본 제공(A). 음성 앱 통화 화면의 기준선.

**Pi** — 음성은 선택 사항(텍스트 병행), 음성 6종 선택, 과거 대화 기억(모두 C·2차). 온보딩·안전·과금 UX는 미확인.

**Replika** — Memory 탭에서 기억 열람·수동 추가·삭제 가능, 삭제 시 회상 저하 경고(A 스니펫). 음성통화는 유료(C). 통화 화면 상세 미확인.

**Nomi** — Mind Map 2.0: 그래프 뷰/표 뷰, 항목 클릭 시 상세 편집, 새 항목 추가(A). 삭제·알림은 해당 공식 글에 언급 없음. 음성 UX 미확인.

**Kindroid** — 공식 변경 기록상 통화 요청이 조용시간엔 음성 메시지로 대체, 통화 분당 400 크레딧, 자동 일기(저널) 제안, 2026-10-01 무료 종료 후 읽기 전용 전환(A). 통화 화면·끼어들기는 미확인.

**Character.AI** — 채팅창의 버튼으로 통화 시작, 봇이 말하는 중 탭하면 끼어들기(B, TechRadar 스니펫). 공식 도움말 미확인.

**제타** — 공식·언론에서 음성 통화 UX를 찾지 못함(미확인). 앱스토어 소개는 텍스트 중심(B).

**Sesame (Maya/Miles)** — 끼어들기·웃음·톤 변화·감정 단서 반응을 하는 연구 데모, 응답 200–300ms(전부 C, 2차 요약). 앱 UX 상세 미확인.

**Wysa** — 항상 보이는 SOS 버튼 → 지역 핫라인·안전계획·그라운딩(자사 자료, B). AI가 위기 신호를 감지하면 사용자에게 확인 후 SOS 개입으로 이행(자사 연구 발표, B).

**클로바 케어콜** — AI가 주 1~2회 전화해 식사·수면·외출·복약 등을 묻고 결과를 리포트로 담당자에게 전달, 2주 연속 미응답·특이사항은 별도 표시(B, 네이버 발표 기반).

**Hume EVI** — 문장 단위로 표정(expression) 측정치가 전사에 연결, 항상 끼어들기 가능, 억양 기반 end-of-turn 감지(A, 개발자 문서). 감정 막대 UI의 실제 데모 화면은 직접 확인 못함.

**Friend 펜던트** — 목걸이형, 블루투스로 폰 앱과 연결, 앱은 문자 메시지 형태, 버튼 눌러 말하기, 상시 청취로 선제 메시지(B/C). 검색 가능한 전사본 없음(B).

---

## 2. 기능 × 앱 매트릭스

표기: 확인된 사실만. "미확인" = 조사 범위 내 근거 없음. 괄호는 등급.

| 앱 | 온보딩 | 통화 화면 | 감정 표시 | 모드 | 기억 UI | 안전 UX | 과금 |
|---|---|---|---|---|---|---|---|
| ChatGPT Voice | 미확인 | 파랑 오브; 인라인/플로팅/전체화면 (A스니펫) | 없음(명시 기능 없음, Wiki) | 미확인 | 계정 메모리(Wiki; UI 미확인) | 한도 15분 전 알림 (A스니펫); 휴식 팝업은 텍스트 기준 (B) | 무료 일 2시간·GPT-4o mini (A스니펫, 변동 보고 있음) |
| Gemini Live | 첫 실행 시 화면 안내 (A) | Hold/Mute/End/Camera/Captions (A) | 없음 | Gems 사용 불가 (A) | 미확인 | 13세 이상 조건 (A) | 미확인 |
| Pi | 미확인(계정 생성 후 대화 시작, C) | 음성 6종 선택, 텍스트 병행 (C) | 공감 톤 (Wiki) | 미확인 | 이전 대화 기억 (C) | 미확인 | 무료 (Wiki, 2026-08) |
| Replika | 미확인 | 음성통화 유료 (C) | 기분 추적 (Wiki, A) | 미확인 | Memory 탭: 열람·수동 추가·삭제 (A스니펫) | 미확인 | Pro 월 $19.99 등 (Wiki, B) |
| Nomi | 미확인 | 미확인 | 미확인 | 미확인 | Mind Map 그래프/표, 편집, 추가 (A) | 미확인 | $15.99/월 (Wiki, B) |
| Kindroid | 미확인 | 조용시간 통화→음성 메시지; 400크레딧/분 (A) | 미확인 | 미확인 | backstory·key memories·journal; 자동 일기 제안 (A/C) | 조용시간 (A) | 2026-10-01 무료 종료, 읽기 전용 (A) |
| Character.AI | 미확인 | 채팅 내 버튼, 탭으로 끼어들기 (B) | 없음(Wiki) | 캐릭터별 | 미확인 | 18세 미만 제한 (Wiki, B) | c.ai+ $9.99/월 (Wiki, B) |
| 제타 | 미확인 | 미확인 | 미확인 | 캐릭터 롤플레이 | 미확인 | 청소년 3시간 한도·기관 안내 (Wiki, B) | 텍스트 무료 강조 (B) |
| Sesame | 미확인 | 끼어들기 가능, 호흡·망설임 모사 (C) | 정서 단서에 반응 (C) | 미확인 | 미확인 | 미확인 | 미확인 |
| Wysa | 미확인 | 텍스트 중심 | 기분 추적 (Wiki) | 도구 선택(CBT 등) | 미확인 | SOS 버튼, 핫라인, 안전계획 (B) | 프리미엄+EAP (Wiki) |
| 클로바 케어콜 | 없음(기관이 등록·발신) (B) | 전화망 음성 (Wiki, B) | 미확인 | 안부 질문 중심 | 이전 통화 기억 (네이버 발표) | 미응답·이상 징후 표시 → 담당자 (B) | B2G |
| Hume EVI | 미확인 | 항상 끼어들기 가능 (A) | 문장별 expression measure (A) | 미확인 | API 수준 | 미확인 | 무료 5분/월 등 (Wiki) |
| Friend | 미확인 | 버튼 누르고 말하기 (B) | 미확인 | 미확인 | 전사본 검색 없음 (B) | 상시 청취 프라이버시 비판 (B) | 기기 $99→$129 (B) |

---

## 3. 앱별 상세

각 앱의 번호는 요청 항목 1~8과 같다 (1 온보딩, 2 통화 화면, 3 감정 표시, 4 모드, 5 기억 UI, 6 안전 UX, 7 과금 UX, 8 따라 할 것/피할 것).

### 3.1 ChatGPT Voice (Advanced Voice / GPT-Live)
1. 온보딩: 미확인.
2. 통화 화면: Advanced Voice는 파랑 오브, Standard Voice는 검정 오브. 음성은 메인 채팅 페이지 내, 플로팅 오브, 별도 전체화면(Separate Voice)으로 표시. [OpenAI 도움말 스니펫, 확인 2026-10-25, A(스니펫, 원문 403)] https://help.openai.com/articles/8400625 . 끼어들기·말 끝 감지·통화 후 요약: 미확인(검색에서 못 찾음). full-duplex(GPT-Live 2026-07)는 Wiki(B)만 있음.
3. 감정 표시: 명시적 기능 없음 (Wiki `bench-chatgpt-voice`, A/B).
4. 모드: 음성 모드 자체의 경청/조언 선택은 미확인.
5. 기억 UI: 계정 메모리 존재(Wiki). 음성 중 "기억했어요" 알림은 미확인.
6. 안전 UX: 일일 한도 15분 남으면 앱 내 알림, 한도 도달 시 Standard Voice 전환 가능 [위 도움말 스니펫, A]. 휴식 알림은 2025-08 텍스트 채팅에서 "Just checking in / You've been chatting a while — is this a good time for a break?" 팝업, "Keep chatting" 선택 가능 [Entrepreneur, B] https://www.entrepreneur.com/business-news/chatgpt-says-to-take-a-break-adds-mental-health-features/495484 . 음성에도 적용되는지는 미확인. "AI임" 고지 위치 미확인.
7. 과금: 무료는 GPT-4o mini 기반 일 2시간 한도(도움말 스니펫 A), 구 보도는 월 15분 등 상이(B/C) → 시기별로 달라 현재 값은 불확실. 유료는 "거의 무제한"(A 스니펫).
8. 따라 할 것: 한도 임박 사전 알림, 오브 중심의 단순 화면. 피할 것: 한도·모드 정책이 자주 바뀌어 사용자 혼선.

### 3.2 Gemini Live (한 줄 요청 → 공식 문서가 가장 상세해 상세 기재)
2. 통화 화면: 앱 하단 Live 탭 또는 스와이프로 시작, "Hey Google, let's talk Live" 음성 시작도 가능. 컨트롤: Hold(마이크 끄고 보류), Mute(마이크만 끔), End(종료+전사본 제공, 오른쪽 스와이프도 가능), Camera, 화면 공유, Captions(우상단, 켜면 이후 계속 유지). 끼어들기: 말로 가능, 설정 "Interrupt Live responses"로 끌 수 있으며 꺼도 화면 탭으로 끼어들기 가능. 종료 시 전사본 열람, 이전 대화에서 Live 재개 가능. [Google Gemini 도움말, A, 확인 2026-10-25] https://support.google.com/gemini/answer/15274899?hl=en
   - 보충(B): 캡션은 AI 응답만 보여주고 사용자 발화는 실시간 표시 안 함 [9to5google 스니펫] https://9to5google.com/2025/06/05/gemini-live-captions/ — 공식 문서와 직접 대조하지 못함.
6. 안전: 13세 이상·로그인 조건. 위기 대응 UX는 미확인.
8. 따라 할 것: Hold와 Mute 분리, End 시 전사본 제공, 끼어들기 끄기 옵션. 피할 것: 캡션이 AI 발화만 보여주는 구조(한벗은 사용자 확인 질문을 위해 양쪽 자막 권장).

### 3.3 Pi (Inflection)
1. 온보딩: 계정 생성 후 대화 시작(2023 출시 시점 가이드, C). 단계 수 미확인.
2. 통화 화면: iOS 앱에서 양방향 음성 대화, 음성 6종(영국식 2종 추가), 텍스트 선택 가능 [Maginative 스니펫·가이드, C/B] https://www.maginative.com/article/pi-now-lets-you-talk-back-and-forth-with-ai-like-you-would-with-a-friend . 끼어들기·말 끝 감지·요약: 미확인.
3~4. 감정 표시·모드: 미확인(공감 톤 위주, Wiki).
5. 기억: 사용자 선호·소통 방식·이전 주제를 기억한다고 설명(C). 열람·편집 UI 미확인.
6. 안전: 미확인. 7. 과금: 무료(Wiki, 2026-08).
8. 따라 할 것: 음성 선택을 처음부터 노출하되 텍스트로 언제든 전환. 피할 것: 기억 UI·안전 UX가 확인되지 않은 점은 참고 불가.

### 3.4 Replika
1. 온보딩: 미확인.
2. 통화: 음성통화는 유료(Pro)(리뷰 C). 화면·끼어들기 미확인.
3. 감정: 기분 추적·선제 체크인(앱스토어 설명, Wiki A).
4. 모드: 관계 상태(친구/연인 등) 선택은 Pro 기능(리뷰 C). 경청/조언 모드 미확인.
5. 기억: Memory 탭에서 열람, 수동 추가, 삭제 가능. 일부 기억은 탭에 보이지 않는 더 깊은 시스템에서 생성. 삭제는 회상에 영향 줄 수 있다는 경고. 홈에서 Replika 이름 탭 → Memory 경로(가이드). [Replika 도움말 스니펫 A(원문 403)] https://help.replika.com/hc/en-us/articles/37208679176077-How-does-Replika-s-memory-work . 편집은 별도 확인 못함(Wiki도 미확인). 생성 알림("기억했어요")·근거 표시: 미확인.
6. 안전: 미확인. 7. 과금: Wiki 참조(Pro $19.99/월).
8. 따라 할 것: 기억 탭 접근 경로 + 삭제 영향 경고 문구. 피할 것: 탭에 안 보이는 "숨은 기억" 계층(한벗은 사용자가 모르는 기억 금지 원칙과 충돌).

### 3.5 Nomi
5. 기억: Mind Map 두 뷰(그래프: 사람·장소·주제·목표 네트워크, 카테고리별 색, 대화에 따라 변화 / 표: 정렬·검색 가능 목록). 항목 클릭 시 상세(dossier) 열려 오류 수정·중요도 이해 조정, 새 항목 생성 및 "빨리 따라잡게" 추가 가능. 삭제 방법·알림은 해당 글에 언급 없음, 음성도 언급 없음. [Nomi 공식 업데이트, A, 확인 2026-10-25] https://nomi.ai/updates/mind-map-2-0-bringing-nomi-memory-into-view/
1~4, 6~7: 온보딩·통화·감정·모드·안전 미확인. 과금은 Wiki(B).
8. 따라 할 것: 표 뷰 + 항목 상세 편집(한벗은 표 뷰만 MVP로). 피할 것: 그래프 뷰는 MVP 범위 과다, 삭제 경로 미확인이므로 삭제는 별도 설계.

### 3.6 Kindroid
1. 온보딩: 공식 변경 기록에 없음(미확인).
2. 통화: 조용시간(quiet hours)에 요청한 통화는 음성 메시지로 도착, 조용시간엔 통화 차단. 채팅 중 통화·셀피 요청은 live chat actions로 처리, 실패 시 이유와 재시도 시점 안내. 통화 분당 400 크레딧(영상 포함 업그레이드 문맥). 끼어들기·통화 UI는 변경 기록에서 다루지 않음(미확인). [Kindroid update-log, A, 확인 2026-10-25] https://kindroid.ai/v2/docs/update-log/ . 참고: 사용자 리뷰에 통화 지연 약 20초(날짜 불명) [AppleVis, C] https://applevis.com/comment/166109
5. 기억: Learned Context와 자동 일기 제안이 모두 켜져 있으면 주기적으로 일기 저널 제안(A). 보류 중인 제안이 있으면 Kin 목록에 표시(A). backstory·key memories(항상 참조하는 고정 텍스트)·journal(과거 요약, 직접 작성 또는 자동 요약)은 가이드 설명(C) https://messengerbot.app/zh/kindroid-ai-in-2026-companion-app-guide-pricing-and-safety/ . "AI가 제안 → 사용자가 승인" 구조의 실제 사례.
7. 과금: 2026-10-01 Lite·무제한 무료 메시지 종료, 무료는 제한된 상호작용 후 읽기 전용, 기존 대화는 구독 없이 열람 가능(A).
3~4, 6: 미확인.
8. 따라 할 것: 기억을 "제안 → 승인" 흐름, 보류 제안 표시, 조용시간. 피할 것: 크레딧/분 과금의 불투명성(한벗은 분 단위 표시 권장), 읽기 전용 전환은 위기 사용자에게 위험할 수 있어 한벗은 안전 기능은 무료 유지 권장(이 판단은 본 조사자의 제안).

### 3.7 Character.AI (Character Calls)
2. 통화: 채팅창의 버튼으로 시작, 봇이 말하는 중 탭하면 끼어들기, 같은 방식으로 텍스트 복귀. 지원 언어에 한국어 포함. [TechRadar, B(스니펫; 본문 추출 실패)] https://www.techradar.com/computing/artificial-intelligence/characterai-lets-you-talk-to-your-favorite-synthetic-people-on-the-phone-which-isnt-weird-at-all . "Tap to interrupt"는 벤더 블로그(C)에서만 반복. 공식 도움말 미확인.
6. 안전: 18세 미만 open-ended chat 금지, 연령추정(Wiki, B).
7. 과금: c.ai+ $9.99/월(Wiki B). 통화 무료 여부는 출시 시점 기사 "무료"(B)이나 현재 미확인.
1,3~5: 미확인.
8. 따라 할 것: 채팅과 통화의 한 화면 전환. 피할 것: 캐릭터에 전문가(상담사) 사칭 허용.

### 3.8 제타 (스캐터랩)
- 음성 통화 존재 여부·UX·과금: 검색에서 확인 못함(미확인). 앱스토어 소개는 텍스트 스토리 무료·이미지 무제한을 강조(B) https://apps.apple.com/us/app/%EC%A0%9C%ED%83%80-zeta-%EC%83%81%EC%83%81%EC%9D%B4-%ED%98%84%EC%8B%A4%EC%9D%B4-%EB%90%98%EB%8A%94-ai-%EC%B1%84%ED%8C%85/id1619030760
- 안전: 청소년 하루 3시간·월 10만원 한도, 자살·자해 반복 감지 시 상담기관 안내(Wiki, B, 도입은 연내 예정).
8. 따라 할 것: 한국 사용자 대상 시간 한도·기관 안내 문구의 한국어 톤 선례. 피할 것: 세이프 모드에서의 선정성 지적(Wiki).

### 3.9 Sesame (Maya/Miles)
2~3. 끼어들기, 웃음, 문장 중 톤 변화, 정서 단서에 실시간 반응, 호흡·망설임·말 고침 모사, 응답 200–300ms, STT→TTS 파이프라인이 아니라 텍스트·오디오 토큰 동시 처리 모델 [getcoai 요약·Contrary Research, C] https://getcoai.com/news/sesames-ai-voice-presence-creates-emotional-bonds-with-human-like-imperfections . 데모의 화면 구성·온보딩·기억·과금은 미확인. 공식 블로그 원문은 열람하지 못함(2차만).
8. 따라 할 것: 호흡·침묵 허용 등 "서두르지 않는" 말투. 피할 것: 인간 모사가 과해 AI임 고지가 약해지는 설계(이 판단은 제안).

### 3.10 Wysa
6. 안전: 항상 보이는 SOS 버튼 → 지역 핫라인, 안전계획, 그라운딩, 비상 연락처. AI가 대화 중 고통 신호를 감지하면 먼저 사용자에게 자해·자살 생각이 있는지 확인하고, 확인되면 SOS 개입으로 이행(2024-04 자사 연구: 위기 사례의 82%가 AI 감지+사용자 확인, 18%는 사용자가 직접 선택). 안전계획 사용 49.2%, 그라운딩 46.6%, 핫라인 통화 2.4%. "위기 서비스가 아님"을 자체 명시. [Wysa 블로그·페이지 스니펫, B(자사 자료)] https://blogs.wysa.io/blog/wysa-news/ai-detects-82-of-mental-health-app-users-in-crisis-finds-wysas-global-study-released-on-the-role-of-ai-to-detect-and-manage-distress , https://www.wysa.com/role-of-ai-in-sos (본문 추출 실패, 스니펫만). 정확한 화면·단계는 미확인.
1~5, 7: 온보딩·통화(텍스트 앱)·모드·기억 상세 미확인. 가격은 Wiki.
8. 따라 할 것: 감지 후 "확인 질문 → 확정 시 SOS" 2단계, 핫라인 외 안전계획·그라운딩을 함께 제시(핫라인 통화율 2.4%이므로 전화만으로는 부족). 피할 것: 자사 수치를 근거 없이 효과로 인용.

### 3.11 클로바 케어콜
1. 온보딩: 이용자 본인 가입 없음, 지자체가 대상자를 등록해 AI가 발신(B).
2. 통화: AI가 주 1~2회(지자체별 상이) 전화해 식사·수면·외출·복약·건강을 묻고, 정해진 질문만이 아닌 자유 대화 가능(네이버 설명). 통화 후 결과는 리포트로 담당자에게. 담당자 도구에서 완료·미응답 현황과 카테고리별 불편 사항 확인. 2주 연속 미응답이나 특이·긴급 의심 답변은 별도 표시. 통화 불가·이상자 분류 시 담당 공무원이 재확인. [검색 요약(네이버 보도자료·언론 종합), B] https://navercorp.com/media/pressReleasesDetail?seq=32029 , https://www.smarttoday.co.kr/ko-kr/articles/22812 (기사 본문 직접 열람은 못함, 검색 요약 의존)
3~5, 7: 감정 표시·모드 미확인, 기억은 Wiki(네이버 발표, 미검증), 과금 B2G.
8. 따라 할 것: 통화 후 구조화된 결과 + 이상 징후 플래그 개념(한벗은 사용자 본인에게 요약, 제3자 공유는 별도 동의). 피할 것: 제3자 자동 공유(한벗은 대학생 B2C라 기본 비공유).

### 3.12 Hume EVI
2. 항상 끼어들기 가능(EVI가 빠르게 멈추고 맥락 이어감), 사용자 목소리 톤으로 end-of-turn 감지, 전사의 각 문장에 expression measure 연결. `user_message`에 전사와 음성 표현 측정치가 함께 오며 prosody는 억양·리듬·음색의 스트리밍 측정. 좌절에는 사과하는 톤으로 응답하는 식으로 어조 조정. [Hume 개발자 문서, A, 확인 2026-10-25] https://dev.hume.ai/docs/speech-to-speech-evi/overview
3. 감정 표시: 측정치는 문서상 데이터로 전달되며 라벨명·점수 형식은 해당 페이지에 없음. 마케팅 페이지의 감정 점수(예: Annoyance 0.84)와 톤 라벨(Warm 등)은 "설명용 그래픽이며 실제 제품 UI가 아님" [Hume 제품 페이지, A] https://www.hume.ai/empathic-voice-interface . 실제 데모의 감정 막대 UI는 직접 확인 못함(미확인).
Wiki: 지연 <300ms, 48차원은 B.
8. 따라 할 것: 문장 단위로 감정 단서를 붙이는 데이터 구조, 톤 기반 말 끝 감지. 피할 것: 수치 막대를 사용자에게 단정적으로 노출(한벗 원칙: 확인 질문으로 전환).

### 3.13 Friend 펜던트 (한 줄)
목걸이형, 블루투스로 폰 앱과 연결, 메시지는 문자 앱 형태, 버튼 눌러 말하기, 상시 청취로 선제 메시지 가능, 검색 가능한 전사본 없음. Fortune 2주 테스트: 인식 불량, 응답이 타 어시스턴트보다 7–10초 느림. 가격 $99 출시가→$129. [Fortune, B] https://fortune.com/2025/10/03/friend-ai-necklace-review-avi-schiffmann/ , [Tom's Guide, B] https://tomsguide.com/ai/friend-is-a-dollar99-ai-necklace-that-wants-to-help-you-remake-the-movie-her
8. 따라 할 것: 푸시투톡(버튼) 대안 입력. 피할 것: 상시 청취(동의 구조와 충돌).

---

## 4. 기능별 "따라 할 앱" 추천표

| 한벗 기능 | 1순위 참고 앱 | 참고 이유 | 변형 포인트 | 출처 |
|---|---|---|---|---|
| 통화 화면 컨트롤 | Gemini Live | 공식 문서로 Hold/Mute/End/Camera/Captions 구성이 확인된 유일 사례 | 카메라 제외, 양쪽 자막(사용자 발화도) 표시, 오브는 ChatGPT식 단순 표현 | https://support.google.com/gemini/answer/15274899?hl=en |
| 끼어들기 | Gemini Live (+ Hume) | 말로 끼어들기+끄기 토글+탭 폴백(Gemini), "항상 끼어들기 가능"(Hume) | 위기 안내 문구 낭독 중에는 끼어들기 허용하되 재안내 | 위 + https://dev.hume.ai/docs/speech-to-speech-evi/overview |
| 말 끝 감지 | Hume EVI | 억양 기반 end-of-turn을 문서로 명시 | 머뭇거림이 긴 고민 말하기용으로 대기 시간 길게 | https://dev.hume.ai/docs/speech-to-speech-evi/overview |
| 통화 종료 후 요약 | Gemini Live (전사본) + 케어콜 (구조화 결과) | 종료 시 전사본 제공(Gemini), 통화 후 카테고리별 결과(케어콜) | 본인에게만 요약, 감정은 "~처럼 들렸어요"로 추정 표기 | 위 + https://navercorp.com/media/pressReleasesDetail?seq=32029 |
| 감정 단서 표시 | Hume EVI (데이터 구조만) | 문장별 expression measure 연결 | 화면에 막대·점수 미노출, 확인 질문으로만 전환(점수 노출은 피함) | https://dev.hume.ai/docs/speech-to-speech-evi/overview |
| 기억 열람·편집 | Nomi Mind Map | 표 뷰·항목 상세 편집·신규 추가가 공식 확인됨 | MVP는 표 뷰만, 사실/추정 라벨과 근거 문장 추가 | https://nomi.ai/updates/mind-map-2-0-bringing-nomi-memory-into-view/ |
| 기억 생성 승인 | Kindroid (자동 일기 제안, 보류 표시) | AI가 제안하고 사용자가 확정하는 흐름이 공식 변경 기록에 있음 | 저장 전 동의 팝업, 거절 시 영구 미저장 | https://kindroid.ai/v2/docs/update-log/ |
| 기억 접근 경로·삭제 경고 | Replika Memory 탭 | 수동 추가·삭제와 "삭제 시 회상 영향" 경고 | 숨은 기억 계층 없이 전부 탭에 노출 | https://help.replika.com/hc/en-us/articles/37208679176077-How-does-Replika-s-memory-work |
| 위기 대응 화면 | Wysa SOS | 항상 보이는 SOS+AI 감지 시 확인 질문→개입+안전계획·그라운딩 병행(자사 자료) | 109 연결 카드를 최상단, 확인 질문 문구 임상 검수 | https://blogs.wysa.io/blog/wysa-news/ai-detects-82-of-mental-health-app-users-in-crisis-finds-wysas-global-study-released-on-the-role-of-ai-to-detect-and-manage-distress |
| 휴식·사용시간 알림 | ChatGPT (한도 15분 전 알림, 휴식 팝업) | "Keep chatting" 선택 가능한 부드러운 팝업, 한도 사전 알림 | 음성 통화 중에는 음성으로 부드럽게 제안, 한국 청소년 정책 선례는 제타 참고 | https://www.entrepreneur.com/business-news/chatgpt-says-to-take-a-break-adds-mental-health-features/495484 |
| 조용시간 | Kindroid | 조용시간엔 통화 대신 음성 메시지 | 사용자 지정 취침 시간 | https://kindroid.ai/v2/docs/update-log/ |
| 선제 체크인·통화 | 클로바 케어콜 (리듬), Replika (선제 체크인) | 정기 안부 호출과 미응답 처리 개념 | 사용자가 켠 경우만, 미응답 시 제3자 연락 없음 | https://www.smarttoday.co.kr/ko-kr/articles/22812 |
| 음성 선택 | Pi | 음성 여러 종 선택, 텍스트 병행(2차) | 첫 화면에서 2~3종만 | https://www.maginative.com/article/pi-now-lets-you-talk-back-and-forth-with-ai-like-you-would-with-a-friend |
| 말투·"서두르지 않음" | Sesame (2차만) | 호흡·침묵·망설임 모사 | 감정 단서 단정 금지 유지, AI임 고지 병행 | https://getcoai.com/news/sesames-ai-voice-presence-creates-emotional-bonds-with-human-like-imperfections |
| 과금 표시 | Kindroid (분당 크레딧 명시) | 통화 분당 비용을 공개 | 크레딧 대신 "분" 단위, 안전 기능은 무료 유지 | https://kindroid.ai/v2/docs/update-log/ |

미해결(참고할 1차 자료 없음): 온보딩 질문 구성, 모드(경청/조언/코칭) 선택 UI, "AI임" 고지 위치, 기억 생성 "기억했어요" 알림 문구. 이 4개는 어느 앱에서도 공식 확인하지 못했으므로 한벗 자체 설계와 사용자 테스트로 결정해야 한다.

---

## 5. 출처 전체 목록

**A (공식)**
- Google Gemini 도움말 "Talk naturally with Gemini Live": https://support.google.com/gemini/answer/15274899?hl=en (직접 열람, 2026-10-25)
- Hume 개발자 문서 EVI overview: https://dev.hume.ai/docs/speech-to-speech-evi/overview (직접 열람)
- Hume 제품 페이지: https://www.hume.ai/empathic-voice-interface (직접 열람, 설명용 그래픽)
- Nomi 공식 업데이트 Mind Map 2.0: https://nomi.ai/updates/mind-map-2-0-bringing-nomi-memory-into-view/ (직접 열람)
- Kindroid 공식 update-log: https://kindroid.ai/v2/docs/update-log/ (직접 열람)
- OpenAI 도움말 voice: https://help.openai.com/articles/8400625 (403, 검색 스니펫만 → 등급 A(스니펫))
- Replika 도움말 memory: https://help.replika.com/hc/en-us/articles/37208679176077-How-does-Replika-s-memory-work (403, 검색 스니펫만 → A(스니펫))

**B (언론·전문 매체·자사 보고)**
- Entrepreneur 휴식 알림: https://www.entrepreneur.com/business-news/chatgpt-says-to-take-a-break-adds-mental-health-features/495484 (스니펫)
- TechRadar Character.AI Calls: https://www.techradar.com/computing/artificial-intelligence/characterai-lets-you-talk-to-your-favorite-synthetic-people-on-the-phone-which-isnt-weird-at-all (스니펫, 본문 추출 실패)
- Wysa 블로그/페이지(자사): https://blogs.wysa.io/blog/wysa-news/ai-detects-82-of-mental-health-app-users-in-crisis-finds-wysas-global-study-released-on-the-role-of-ai-to-detect-and-manage-distress , https://www.wysa.com/role-of-ai-in-sos
- 네이버 보도자료/스마트투데이(케어콜): https://navercorp.com/media/pressReleasesDetail?seq=32029 , https://www.smarttoday.co.kr/ko-kr/articles/22812 (검색 요약)
- Fortune Friend 리뷰: https://fortune.com/2025/10/03/friend-ai-necklace-review-avi-schiffmann/
- Tom's Guide Friend: https://tomsguide.com/ai/friend-is-a-dollar99-ai-necklace-that-wants-to-help-you-remake-the-movie-her
- 9to5Google Gemini Live 캡션: https://9to5google.com/2025/06/05/gemini-live-captions/ (스니펫)
- 앱스토어 제타: https://apps.apple.com/us/app/%EC%A0%9C%ED%83%80-zeta-%EC%83%81%EC%83%81%EC%9D%B4-%ED%98%84%EC%8B%A4%EC%9D%B4-%EB%90%98%EB%8A%94-ai-%EC%B1%84%ED%8C%85/id1619030760 (스니펫)
- Maginative Pi 음성: https://www.maginative.com/article/pi-now-lets-you-talk-back-and-forth-with-ai-like-you-would-with-a-friend (스니펫)

**C (리뷰·블로그·가이드·사용자 글)**
- Sesame 요약: https://getcoai.com/news/sesames-ai-voice-presence-creates-emotional-bonds-with-human-like-imperfections , https://research.contrary.com/company/sesame-ai
- Kindroid 가이드: https://messengerbot.app/zh/kindroid-ai-in-2026-companion-app-guide-pricing-and-safety/ ; AppleVis 리뷰: https://applevis.com/comment/166109
- Replika Pro 음성통화 리뷰(eesel): https://www.eesel.ai/blog/replika-ai-review
- Nomi 2차: https://aicompanionpick.com/best-ai-companions-with-memory-2026
- 프로젝트 Wiki: `.omc/wiki/bench-*.md`, `src-nomi-2026-mind-map.md`, `src-replika-2026-help-memory.md`, `src-kindroid-2026-subscription-docs.md`, `src-hume-2025-evi3-launch.md` (사업 지표·가격·규제 재사용)

**미확인 항목 집계**: 앱 13개 × 7개 기능 = 91칸 중 공식(A)으로 확인된 칸은 약 14, 2차(B/C)만 있는 칸 약 20, 나머지는 미확인(Wiki 재사용 칸 제외). 특히 온보딩은 13개 앱 전부 미확인.
