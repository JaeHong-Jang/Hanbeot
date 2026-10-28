**주요 수정 대상은 ChatGPT의 현행 한도, Kindroid의 통화 총비용, Friend의 지연 비교, 마지막 미확인 항목 집계입니다.** Wysa의 제시 수치는 자사 발표와 일치하며, Gemini·Nomi·Replika·Hume의 주요 기능도 공식 본문에서 확인했습니다.

검증 기준일은 **2026-10-25**입니다. 요약·매트릭스·상세·추천표에서 반복된 주장은 합쳤습니다. A는 원출처에서 확인, B는 2차 출처 또는 근사치, C는 원 주장을 뒷받침하지 못한 경우입니다. **불일치 행의 C는 반증이 약하다는 뜻이 아닙니다.** 현재 페이지로 과거 상태를 복원할 수 없는 경우에는 확인불가로 처리했습니다. 앱을 직접 실행한 검증은 아닙니다.

**ChatGPT Voice**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Advanced는 파랑, Standard는 검정 오브 | [OpenAI 도움말][oa] | 연결된 현행 본문 대조 | 확인불가 | C | 현재 문서에서 해당 색상 구분을 확인하지 못함. 과거 화면 증거 필요. |
| 인라인·플로팅·전체화면의 **3가지** 표시 | [OpenAI 도움말][oa] | 현행 표시 방식 확인 | 확인불가 | C | 채팅 안에서 사용하는 방식은 확인되지만 정확한 3분류는 확인되지 않음. |
| 한도 **15분 전** 알림 | [OpenAI 도움말][oa] | Usage limits 대조 | 확인불가 | C | 현재는 한도 도달 알림만 명시. 15분 사전 알림의 과거 원문 필요. |
| 한도 도달 시 Standard로 전환 가능 | [OpenAI 도움말][oa] | 한도·모드 설명 대조 | 확인불가 | C | Standard 선택지는 존재하지만 한도 도달 후 전환 정책은 확인되지 않음. |
| 무료는 **GPT-4o mini·하루 2시간** | [OpenAI 도움말][oa] | 현행 요금제별 표 대조 | 불일치 | C | 현재 무료 안내는 GPT-Live-1.1 Quip 제한 이용. 기존 모델·시간을 현행 값으로 쓰면 안 됨. |
| 유료는 “거의 무제한” | [OpenAI 도움말][oa] | 요금제별 한도 대조 | 불일치 | C | 유료 전체에 적용 불가. 현재 Plus는 3시간, 일부 Pro만 무제한으로 구분됨. |
| 구 보도에서는 **월 15분** | 구체적 URL 없음 | 노트·Wiki 출처 추적 | 확인불가 | C | 어느 시점·음성 모드·보도인지 식별되지 않음. |
| **2025-08** 휴식 팝업 도입 | [Entrepreneur][entre] | 기사 본문 확인 | 일치 | B | 당시 도입 보도와 일치. 현재 모든 계정의 표시 여부는 별도. |
| 팝업의 제목·본문과 “Keep chatting” 선택 | [Entrepreneur][entre] | 기사에 실린 문구 대조 | 일치 | B | 노트의 인용 문구와 일치. 음성 적용까지 입증하지는 않음. |
| GPT-Live는 full-duplex | Wiki, 직접 URL 없음 | 추가로 [공식 도움말][oa] 확인 | 일치 | A | 듣기와 말하기를 동시에 지원한다고 명시. |
| GPT-Live 도입은 **2026-07** | Wiki | Wiki 연결 자료와 현행 도움말 대조 | 확인불가 | C | 동시 발화 기능은 확인되지만 이 도움말로 도입 월까지 입증할 수 없음. |
| 계정 메모리 존재·음성에서 활용 | Wiki | 추가로 [공식 도움말][oa] 확인 | 일치 | A | Live가 memory를 사용할 수 있다고 명시. |
| 명시적인 감정 표시 기능 없음 | Wiki | 도움말의 기능 설명 확인 | 확인불가 | C | 관련 설명 부재만으로 기능이 없다고 확정할 수 없음. |
| 끼어들기는 공식 확인 못함 | [OpenAI 도움말][oa] | FAQ 대조 | 불일치 | C | 현행 공식 FAQ가 응답 중 말하기·끼어들기를 명시함. |

**Gemini Live**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 하단 Live·스와이프·음성 명령으로 시작 | [Google 도움말][gem] | 시작 절차 대조 | 일치 | A | 제시한 음성 시작 명령도 확인됨. Android 문서 기준. |
| 첫 실행 시 화면 안내 | [Google 도움말][gem] | 시작 절차 확인 | 일치 | A | 전체 가입 온보딩의 질문 수·단계 수를 뜻하지는 않음. |
| Hold와 Mute를 구분 | [Google 도움말][gem] | 보류·음소거 설명 대조 | 일치 | A | Mute는 Gemini의 발화를 유지하면서 사용자 마이크를 끔. |
| End 또는 오른쪽 스와이프로 종료·전사본 확인 | [Google 도움말][gem] | 종료 절차 대조 | 일치 | A | 전사본이며, 별도 요약 기능을 입증하는 것은 아님. |
| 이전 대화에서 Live 재개 | [Google 도움말][gem] | 재개 절차 확인 | 일치 | A | 기존 채팅에서 Live 또는 왼쪽 스와이프. |
| Camera·화면 공유 지원 | [Google 도움말][gem] | 해당 기능 절차 확인 | 일치 | A | 지원 환경·계정에 따른 차이는 유의. |
| Captions는 우상단, 설정 유지 | [Google 도움말][gem] | 캡션 설정 대조 | 일치 | A | 끌 때까지 이후 Live 대화에도 적용. |
| 말로 끼어들기·끄기 토글·탭 대체 | [Google 도움말][gem] | Interrupt 설정 대조 | 일치 | A | 노트의 설명과 일치. |
| 캡션은 AI 응답만, 사용자 발화는 미표시 | [9to5Google][gemcap] | 기사 본문 확인 | 확인불가 | C | AI 응답을 표시한다는 설명은 있으나 사용자 발화를 절대 표시하지 않는다는 명시적 근거는 부족. |
| **13세 이상**, 로그인 필요 | [Google 도움말][gem] | 이용 조건 대조 | 일치 | B | 로그인은 일치. 연령은 국가별 적용 기준을 함께 명시해야 함. |
| Gems 사용 불가 | [Google 도움말][gem] | 제한사항 확인 | 일치 | A | 현재 문서에 명시. |
| 감정 표시 없음 | URL 없음 | 공식 문서 범위 확인 | 확인불가 | C | 기능 부재를 확정할 근거 부족. |
| 컨트롤이 공식 확인된 “유일 사례” | 여러 출처의 비교 판단 | 다른 공식 문서와 교차 확인 | 확인불가 | C | 비교 기준이 없고 다른 서비스도 컨트롤을 공식 설명함. “이번 조사에서 가장 상세”로 제한 권장. |

**Pi**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| iOS에서 양방향 음성 대화 | [Maginative][pi] | 기사 본문 확인 | 일치 | B | 2023-07-08 보도 기준. |
| 음성 **6종**, 영국식 **2종** 추가 | [Maginative][pi] | 수치 대조 | 일치 | B | 당시 수치와 일치. 현재 음성 수라는 의미로 재사용하면 안 됨. |
| 음성 대신 텍스트 선택 가능 | [Maginative][pi] | 본문 확인 | 일치 | B | 텍스트 입력을 계속 선택할 수 있다고 설명. |
| 공감적이고 친근한 톤 | [Maginative][pi]·Wiki | 기사 설명 대조 | 일치 | B | 정성적 제품 설명이며 감정 추적 UI의 증거는 아님. |
| 선호·소통 방식·이전 주제를 기억 | 구체적 URL 없음 | Wiki 및 연결 자료 확인 | 확인불가 | C | 기억 관련 설명은 있으나 나열한 세 항목을 뒷받침하는 정확한 출처 불명. |
| 계정 생성 후 대화 시작 | 2023 가이드, URL 없음 | 출처 추적 | 확인불가 | C | 추가 [2026 리뷰][pireview]에는 계정 없이 대화 가능하다고 서술. 가입 필수로 단정 불가. |
| 무료, **2026-08 기준** | Wiki | 연결된 [리뷰][pireview] 확인 | 일치 | B | 무료라는 설명 확인. 다만 확인한 리뷰는 2026-09 게시 자료. |

**Replika**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Pro에 음성통화 기능 포함 | [eesel 리뷰][reprev] | 추가로 [공식 Pro 설명][reppro] 대조 | 일치 | A | voice messaging·background calls·voice/AR calls 명시. |
| 관계 상태 선택은 Pro 기능 | [eesel 리뷰][reprev] | [공식 Pro 설명][reppro] 확인 | 일치 | A | Romantic Partner 설정을 명시. 친구 상태까지 모두 유료라는 뜻으로 확대하면 안 됨. |
| 기분 추적 | Wiki·앱스토어 | [현행 앱 소개][repapp] 확인 | 확인불가 | C | 현행 소개에서 해당 기능을 명확히 찾지 못함. |
| 선제 체크인 | Wiki·앱스토어 | [개발사 앱 소개][repapp] 대조 | 일치 | A | 앱을 열 때뿐 아니라 먼저 확인·후속 연락한다고 설명. |
| Memory 탭에서 기억 열람·수동 추가 | [공식 도움말][repmem] | 본문 확인 | 일치 | A | 이번 검증에서는 원문 열람 가능. |
| 기억 삭제 가능·회상 영향 경고 | [공식 도움말][repmem] | 본문 확인 | 일치 | A | 삭제가 일부 세부정보의 회상에 영향을 줄 수 있다고 설명. |
| 탭에 보이지 않는 더 깊은 기억 계층 | [공식 도움말][repmem] | 기억 구조 설명 대조 | 일치 | A | 대화 이력의 패턴을 활용하는 계층 명시. |
| 홈에서 이름 탭 → Memory | 가이드, URL 없음 | 제시된 도움말에서 경로 검색 | 확인불가 | C | 해당 도움말은 접근 경로를 제시하지 않음. |
| Pro **$19.99/월** | Wiki | 현행 공식·스토어·리뷰 대조 | 확인불가 | C | 현재 공식 설명은 앱·스토어 가격 확인을 안내. 해당 금액을 특정한 Pro 월 요금으로 확인하지 못함. |

**Nomi**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Mind Map **2.0**, 그래프·표 **2개 뷰** | [Nomi 공식 업데이트][nomi] | 본문 확인 | 일치 | A | 게시일은 2025-10-09. |
| 사람·장소·주제·목표 연결, 카테고리별 색, 대화에 따른 변화 | [Nomi 공식 업데이트][nomi] | Graph View 설명 대조 | 일치 | A | 노트와 일치. |
| 표 정렬·검색, 상세 dossier 열람 | [Nomi 공식 업데이트][nomi] | Table View 설명 대조 | 일치 | A | 확인됨. |
| 오류 수정·중요도 조정·신규 항목 추가 | [Nomi 공식 업데이트][nomi] | 편집·추가 설명 대조 | 일치 | A | “빨리 따라잡게”라는 표현도 신규 지식 추가 취지와 일치. |
| 해당 글에는 삭제·생성 알림·음성 UX 설명 없음 | [Nomi 공식 업데이트][nomi] | 본문 전체 범위 확인 | 일치 | A | 해당 글에 한정한 판단. 제품 전체의 미지원 의미는 아님. |
| **$15.99/월** | Wiki | 연결된 [가격 리뷰][nomiprice] 확인 | 일치 | B | 2026-10-09 재확인했다는 2차 자료. 결제 화면 직접 확인은 아님. |

**Kindroid**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 조용시간에는 통화 차단·요청 통화는 음성 메시지 | [공식 변경 기록][kin] | 10/17 항목 대조 | 일치 | A | 노트와 일치. |
| 채팅 중 요청 통화·셀피는 live chat actions로 처리 | [공식 변경 기록][kin] | 10/17 항목 확인 | 일치 | A | 확인됨. |
| 요청 실패 시 이유·재시도 시점 안내 | [공식 변경 기록][kin] | 해당 항목 확인 | 일치 | A | 확인됨. |
| 통화 **400크레딧/분** | [공식 변경 기록][kin] | 10/5 요금 설명 대조 | 일치 | A | **통화 기본 요금**. 음성 요금은 추가이며, 영상도 별도 비용이 붙음. 총비용으로 표시하면 부정확. |
| 통화 지연 약 **20초** | [AppleVis 댓글][applevis] | URL 열람·검색 교차 확인 | 일치 | B | 다른 [AppleVis 경로][applevis2]의 검색 결과에서 약 20초 서술 확인. 오래된 사용자 관찰이며 현행 성능 아님. |
| Learned Context와 자동 일기 제안이 켜지면 주기적으로 제안 | [공식 변경 기록][kin] | 10/5 항목 대조 | 일치 | A | 두 설정 조건 명시. |
| 보류 제안이 Kin 목록에 표시 | [공식 변경 기록][kin] | 10/12 항목 대조 | 일치 | A | pending suggestion 표시 점을 명시. |
| “AI 제안 → 사용자 승인” 후 저장 | [공식 변경 기록][kin] | 제안·저장 절차 구분 | 확인불가 | C | 제안 발생과 보류 표시는 확인되나 승인 전 저장 금지까지 이 기록에서 입증되지는 않음. |
| backstory·key memories는 지속 참조, journal은 직접 작성·자동 요약 | [MessengerBot 가이드][kinguide] | 가이드 본문 확인 | 일치 | B | 제시된 2차 설명과 일치. 내부 구현까지 독립 검증한 것은 아님. |
| **2026-10-01** Lite·무제한 무료 메시지 종료 | [공식 변경 기록][kin] | Important Changes 확인 | 일치 | A | 확인됨. |
| 무료 상호작용 소진 후 읽기 전용, 기존 대화 열람 가능 | [공식 변경 기록][kin] | 무료 접근 변경 확인 | 일치 | A | 확인됨. 다만 일부 비활성 기존 계정은 바로 읽기 전용이라는 예외 있음. |

**Character.AI**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 채팅 버튼으로 통화 시작·탭으로 끼어들기 | [TechRadar][caitr] | 기사 및 추가 [공식 출시 글][caicall] 대조 | 일치 | A | 공식 자료에서도 확인 가능. |
| 통화·텍스트 전환, 한국어 지원 | [TechRadar][caitr] | [공식 출시 글][caicall] 확인 | 일치 | A | 공식 언어 목록에 한국어 포함. |
| 끼어들기는 벤더 블로그에서만 반복, 공식 확인 못함 | [TechRadar][caitr] 등 | [공식 출시 글][caicall] 확인 | 불일치 | C | 공식 블로그가 버튼으로 끼어들기를 명시함. |
| 출시 당시 통화 무료 | [TechRadar][caitr] | [공식 출시 글][caicall] 대조 | 일치 | A | 2024-06-27 발표 기준. 현재 무료 범위까지 자동 입증하지 않음. |
| **18세 미만** open-ended chat 제한·연령추정 | Wiki | 추가 [공식 발표][caiage] 확인 | 일치 | A | 2025-11-25까지 적용한다고 발표. 앱 전체 이용 금지와 구분 필요. |
| c.ai+ **$9.99/월** | Wiki | 추가 [공식 요금 약관][caiprice] 확인 | 일치 | A | USD 표준 월 갱신가 확인. 지역·세금 차이 명시. |
| 감정 표시 기능 없음 | Wiki | 제시 자료 범위 확인 | 확인불가 | C | 부재를 입증할 근거 없음. |
| 전문가·상담사 사칭을 허용 | 구체적 URL 없음 | 사실 주장과 설계 권고 구분 | 확인불가 | C | 실제 문제 사례와 운영사가 정책상 허용한다는 주장은 별개. 표현 수정 필요. |

**제타**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 텍스트 캐릭터 채팅·롤플레이 중심 | [앱스토어][zeta] | 개발사 소개 확인 | 일치 | A | 개발사 작성 소개이므로 이 주장에는 1차 자료로 사용 가능. |
| 무료·무제한 텍스트 채팅 강조 | [앱스토어][zeta] | 기능 소개 대조 | 일치 | A | 인앱 결제도 존재하므로 모든 기능 무료라는 뜻은 아님. |
| 이미지 무제한 강조 | [앱스토어][zeta] | 현행 이미지 기능 설명 확인 | 확인불가 | C | 이미지 생성은 확인되지만 무제한이라는 조건은 확인되지 않음. |
| 음성통화 존재·UX를 찾지 못함 | 검색 결과·앱스토어 | 제시 페이지 확인 | 확인불가 | C | 조사상 미확인으로 유지 가능. 음성통화가 없다는 증거는 아님. |
| 청소년 **하루 3시간·월 10만원** 한도 | Wiki | 연결된 [경향신문][zetapolicy] 본문 확인 | 일치 | B | 2026-10-12 발표, **연내 도입 예정**. 매트릭스에도 예정 표시 필요. |
| 자살·자해 반복 감지 시 상담기관 안내 | Wiki | [경향신문][zetapolicy] 확인 | 일치 | B | 기사에서는 기존 보호 장치로 설명. 새 시간·결제 한도와 시행 시점이 다름. |
| 세이프 모드에서도 선정성 문제 지적 | Wiki | [경향신문][zetapolicy] 확인 | 일치 | B | 의원실 점검 사례를 구체적으로 보도함. |

**Sesame**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Maya·Miles가 끼어들기·웃음·문장 중 톤 변화·정서 단서 반응 | [getcoai][sesco]·[Contrary][sescon] | Contrary 본문 확인 | 일치 | B | 제시한 2차 출처에 해당 설명이 있음. |
| 호흡·망설임·멈춤 모사 | [getcoai][sesco]·[Contrary][sescon] | Contrary 본문 확인 | 일치 | B | 기능 설명과 일치. 실제 사용 조건별 품질은 미검증. |
| 말 고침 모사 | 같은 출처 | 관련 설명 대조 | 확인불가 | C | 멈춤·말더듬 설명은 있으나 “말 고침”을 별도로 확인하지 못함. |
| 응답 **200–300ms** | [Contrary][sescon] | 본문 수치 확인 | 일치 | B | 측정 조건·분포·실측 자료 없음. 보장 지연이나 한벗 성능 목표의 직접 근거로 쓰기 어려움. |
| STT→TTS가 아니라 텍스트·오디오 토큰 동시 처리 | [Contrary][sescon] | 추가 [Sesame 기술 글][sesofficial] 대조 | 일치 | B | 근사 설명. 공식 표현은 텍스트·오디오를 교차 입력하는 구조이며 문자 그대로의 동시 처리와 구분 필요. |
| 연구 데모 | 위 출처 | [공식 기술 글][sesofficial] 확인 | 일치 | A | 해당 데모를 대화 음성 생성 연구의 시연으로 설명함. |

**Wysa**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 항상 보이는 SOS 버튼 | [자사 발표][wysab] | 버튼 위치 설명 확인 | 확인불가 | C | **홈 화면에서 이용 가능**은 확인. 모든 화면에 항상 보인다는 근거는 없음. |
| SOS에서 지역 핫라인·안전계획·그라운딩 제공 | [자사 발표][wysab]·[보고서 페이지][wysar] | 본문 대조 | 일치 | A | 자사 서비스 흐름 설명으로 확인. |
| 위험 신호 감지 → 사용자 확인 → SOS 개입 | [자사 발표][wysab] | SOS Protocol 확인 | 일치 | A | 확인 질문과 개입 연결을 명시. |
| **2024-04** 발표 | [자사 발표][wysab] | 발표일 확인 | 일치 | A | 2024-04-15. |
| 위기 사례 **82%**는 AI 감지와 사용자 확인 | [자사 발표][wysab] | 수치·분모 대조 | 일치 | A | 앱에서 포착한 위기 사례의 구성비. 모든 실제 위기에 대한 탐지 민감도 82%라는 뜻은 아님. |
| **18%**는 사용자 직접 SOS 선택 | [자사 발표][wysab] | 수치 대조 | 일치 | A | 발표와 일치. |
| 안전계획 선택 **49.2%** | [자사 발표][wysab] | 수치 확인 | 일치 | A | 원문은 “49.2% 이상”. 선택 비율이지 치료 효과 수치가 아님. |
| 그라운딩 사용 **46.6%** | [자사 발표][wysab] | 수치 확인 | 일치 | A | 자사 관찰자료와 일치. |
| 핫라인 통화 선택 **2.4%** | [자사 발표][wysab] | 수치 확인 | 일치 | A | 위기 확인 후 통화를 선택한 비율. 실제 연결·완료율로 바꾸면 안 됨. |
| “위기 서비스가 아님”을 명시 | 위 두 페이지 | 추가 [공식 FAQ][wysafaq] 확인 | 일치 | A | 위기 상황에 권장되지 않으며 전문가 서비스도 응급 지원이 아니라고 명시. |
| 기분 추적·CBT 도구 선택·프리미엄+EAP | Wiki | Wiki 출처 연결 확인 | 확인불가 | C | 이 노트에 각 기능·현재 상품을 뒷받침하는 정확한 URL이 없음. |

**클로바 케어콜**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 이용자 가입·온보딩 없음, 기관이 등록 | [네이버 발표][naver]·[스마트투데이][smart] | 기관 운영 설명 대조 | 확인불가 | C | 기관 대상자에게 발신하는 구조는 확인. 가입·동의·초기 안내가 전혀 없다는 뜻은 입증되지 않음. |
| AI가 **주 1~2회** 전화 | 같은 출처 | 추가 [네이버·서울대 보고서][naverpdf] pp.19–20 확인 | 일치 | A | 해당 빈도 명시. 같은 보고서에 주 1~3회도 있어 지역별 운영 차이 병기 필요. |
| 식사·수면·외출·건강·복약 질문 | 같은 출처 | [공식 보고서][naverpdf] 확인 | 일치 | A | 식사·수면·외출 및 병원·약 복용 후속 질문 예시 확인. |
| 정해진 질문 외 자연스러운 자유 대화 | [네이버 발표][naver]·[스마트투데이][smart] | 본문 대조 | 일치 | A | 공식 발표에서도 확인. |
| 통화 결과 리포트를 지자체 담당자에게 전달 | [스마트투데이][smart] | 기사 본문 확인 | 일치 | B | 2022-03-24 도입 사례 기준. |
| 완료·미응답·카테고리별 불편사항 확인 | 위 출처 | 추가 [공식 보고서][naverpdf] p.20 대조 | 일치 | A | 담당자 통화 관리 도구 설명에 명시. |
| **2주 연속 미응답**·특이·긴급 의심 답변 별도 표시 | 위 출처 | 추가 [공식 보고서][naverpdf] p.20 확인 | 일치 | A | 원래 제시한 두 페이지보다 이 보고서가 직접 근거에 적합. |
| 미응답·특이사항은 담당 공무원이 재확인 | 위 출처 | [공식 보고서][naverpdf] 대조 | 일치 | A | 확인됨. |
| 이전 통화 기억·후속 질문 | Wiki·네이버 발표 | [공식 발표][naver]·[보고서][naverpdf] 확인 | 일치 | A | 노트의 “미검증”을 해제할 수 있음. |
| 과금은 B2G | Wiki | 기관 도입 자료 확인 | 확인불가 | C | 지자체 대상 운영은 확인되나 요금·계약 방식까지 제시 자료로 확인되지는 않음. |

**Hume EVI**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 항상 끼어들기 가능·빠르게 멈추고 맥락 유지 | [개발자 문서][hume] | Always interruptible 항목 대조 | 일치 | A | 문서의 기능 설명과 일치. |
| 목소리 톤 기반 말 끝 감지 | [개발자 문서][hume] | end-of-turn 설명 확인 | 일치 | A | 확인됨. |
| 전사의 각 문장에 expression measure 연결 | [개발자 문서][hume] | ASR 설명 확인 | 일치 | A | 얼굴 표정이 아니라 **음성 표현 측정치**로 번역해야 함. |
| `user_message`에 전사·음성 표현 측정치 포함 | [개발자 문서][hume] | 메시지 설명 확인 | 일치 | A | 확인됨. |
| prosody는 억양·리듬·음색의 스트리밍 측정 | [개발자 문서][hume] | prosody 설명 대조 | 일치 | A | 확인됨. |
| 좌절에는 사과하는 어조 등으로 조정 | [개발자 문서][hume] | 어조 예시 확인 | 일치 | A | 제품 설명과 일치. 실제 적절성의 독립 검증은 아님. |
| 해당 overview에는 라벨명·점수 형식 없음 | [개발자 문서][hume] | 페이지 범위 확인 | 일치 | A | 다른 API 참조 문서까지 없다는 뜻은 아님. |
| Annoyance **0.84**·Warm 그래픽은 실제 UI가 아니라고 명시 | [제품 페이지][humeproduct] | URL 열람 | 확인불가 | C | 현재 다른 제품 중심 페이지로 연결되어 해당 그래픽·고지를 재현하지 못함. |
| 지연 **<300ms** | Wiki | 연결된 공식 출시 글 대조 | 확인불가 | C | 추가 [API 출시 글][humelaunch]은 약 300ms를 요구 특성으로 설명. 엄격한 미만값·실측 보장을 입증하지 않음. |
| 감정 표현 **48차원** | Wiki | 추가 [공식 사례 글][hume48] 확인 | 일치 | B | Expression Measurement API의 48개 감정 출력 설명은 있음. EVI 자체의 고정 출력 차원이라고 일반화하면 안 됨. |
| 무료 **5분/월** | Wiki | 연결된 [가격 추적 자료][humeprice] 확인 | 일치 | B | **2026-07 과거 가격표**에서 확인. 현재 무료 한도로 표시하면 부적절. |

**Friend 펜던트**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 목걸이형·버튼 발화·문자 앱 형태 응답·상시 청취·선제 메시지 | [Tom’s Guide][friendtg] | 검색으로 확보한 기사 본문 확인 | 일치 | B | 2024년 공개 당시 제품 설명. |
| 블루투스로 폰 앱과 연결 | [Fortune][friendfortune]·[Tom’s Guide][friendtg] | 확보한 본문 검색 | 확인불가 | C | 두 자료에서 해당 연결 방식을 직접 확인하지 못함. |
| 검색 가능한 전사본 없음 | 같은 출처 | transcript·searchable 확인 | 확인불가 | C | 노트에 붙인 출처로는 뒷받침되지 않음. |
| Fortune의 **2주** 테스트 | [Fortune][friendfortune] | 기간 대조 | 일치 | B | 2주로 명시. |
| 다른 어시스턴트보다 **7–10초 느림** | [Fortune][friendfortune] | 지연 표현 대조 | 불일치 | B | **응답 지연 자체가 7–10초**. 비교 차이값이 아님. |
| 인식 불량 관찰 | [Fortune][friendfortune] | 리뷰 대조 | 일치 | B | 개인 사용 관찰. |
| **$99 → $129** | [Tom’s Guide][friendtg]·[Fortune][friendfortune] | 두 시점 가격 대조 | 일치 | B | $99는 2024년 예약가, $129는 2025년 리뷰 시점 가격. |

**문서 전체의 수치·출처 등급·미확인 결론**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| 앱 **13개 × 기능 7개 = 91칸** | 노트 매트릭스 | 로컬 파일 행·열 재계산 | 일치 | A | 앱 13행, 기능 7열 확인. |
| 공식 A 확인 칸 약 **14개** | 노트 매트릭스 | A 표기를 기계적으로 재집계 | 확인불가 | C | A스니펫·A/C 혼합을 포함한 **A 표기 칸은 16개**. 실제 A 검증 칸과 원래 표기 칸을 구분해야 함. |
| 2차 자료만 있는 칸 약 **20개** | 노트 매트릭스 | 분류 기준 확인 | 확인불가 | C | Wiki 제외 방식·혼합 셀 처리 규칙·집계표가 없어 재현 불가. |
| 온보딩은 **13개 앱 전부 미확인** | 노트 전체 | 매트릭스·공식 도움말 비교 | 불일치 | C | Gemini의 최초 실행 안내가 이미 A로 기재됨. “전체 가입 질문 수·단계 수 미확인”으로 좁히면 타당. |
| 미해결 항목은 **4개** | 노트 마지막 문단 | 열거 항목 수 확인 | 일치 | A | 질문 구성·모드 선택·AI 고지 위치·기억 생성 알림의 4개. 단, 각 항목의 미확인 결론은 별도 검증 필요. |
| 어느 앱도 “AI임” 고지 위치를 확인 못함 | 구체적 URL 없음 | [제타 관련 보도][zetapolicy] 대조 | 불일치 | B | 제타가 플레이 화면에 AI임을 상시 표시한다고 보도됨. |
| 어느 앱도 전체 온보딩 질문 구성·경청/조언 선택 UI·기억 생성 알림을 공식 확인 못함 | 조사 범위 설명 | 제시 자료 범위 확인 | 확인불가 | C | 조사자의 탐색 결과로는 기재 가능. 시장 전체에서 근거가 없다고 일반화할 수 없음. |
| 공식 도움말 스니펫이면 A | 노트 자체 등급 | 사용자가 요청한 등급 기준 적용 | 불일치 | C | 공식 도메인만으로 A 부여 불가. 원문 대조 여부를 따져야 함. |
| Wysa 자사 발표는 B | 노트 자체 등급 | 원출처 여부 확인 | 불일치 | C | 자사 발표 수치와의 일치 검증은 A 가능. 독립적인 효과 검증과는 별개. |
| 앱스토어 개발사 소개는 B | 노트 자체 등급 | 작성 주체 구분 | 불일치 | C | 개발사 소개는 1차 자료, 사용자 리뷰는 2차 자료로 구분해야 함. |
| 당시 공식 도움말이 403이었다 | 조사 과정 설명 | 현재 URL 열람 | 확인불가 | C | 당시 접근 로그가 없어 과거 오류는 검증 불가. 이번에는 OpenAI·Replika 본문 열람 가능. |

한벗의 “음성 2~3종”, “109 카드 최상단”, “안전 기능 무료”, “사용자 승인 전 저장 금지” 등은 **설계 제안**이므로 경쟁 앱에서 확인된 사실과 분리해 표기해야 합니다. 특히 Wysa 이용 비율을 효과로, Sesame의 지연 수치를 실사용 보장으로, 전사본을 요약 기능으로 확대 해석하면 안 됩니다.

[oa]: https://help.openai.com/articles/8400625
[entre]: https://www.entrepreneur.com/business-news/chatgpt-says-to-take-a-break-adds-mental-health-features/495484
[gem]: https://support.google.com/gemini/answer/15274899?hl=en
[gemcap]: https://9to5google.com/2025/06/05/gemini-live-captions/
[pi]: https://www.maginative.com/article/pi-now-lets-you-talk-back-and-forth-with-ai-like-you-would-with-a-friend/
[pireview]: https://aicompanionguides.com/blog/what-happened-to-pi-ai-2026/
[reprev]: https://www.eesel.ai/blog/replika-ai-review
[reppro]: https://help.replika.com/hc/en-us/articles/360032500052-What-is-Replika-Pro
[repapp]: https://apps.apple.com/us/app/replika-ai-companion-chat/id1158555867
[repmem]: https://help.replika.com/hc/en-us/articles/37208679176077-How-does-Replika-s-memory-work
[nomi]: https://nomi.ai/updates/mind-map-2-0-bringing-nomi-memory-into-view/
[nomiprice]: https://aicompanionguides.com/blog/nomi-ai-late-to-party-worth-it/
[kin]: https://kindroid.ai/v2/docs/update-log/
[applevis]: https://applevis.com/comment/166109
[applevis2]: https://www.applevis.com/comment/162792
[kinguide]: https://messengerbot.app/zh/kindroid-ai-in-2026-companion-app-guide-pricing-and-safety/
[caitr]: https://www.techradar.com/computing/artificial-intelligence/characterai-lets-you-talk-to-your-favorite-synthetic-people-on-the-phone-which-isnt-weird-at-all
[caicall]: https://blog.character.ai/introducing-character-calls/
[caiage]: https://blog.character.ai/u18-chat-announcement/
[caiprice]: https://support.character.ai/hc/en-us/articles/51248493096987-c-ai-Summer-Flash-Sale-Offer-Terms
[zeta]: https://apps.apple.com/us/app/zeta-ai-chat-story-play/id1619030760
[zetapolicy]: https://www.khan.co.kr/article/202610121608001
[sesco]: https://getcoai.com/news/sesames-ai-voice-presence-creates-emotional-bonds-with-human-like-imperfections
[sescon]: https://research.contrary.com/company/sesame-ai
[sesofficial]: https://www.sesame.com/journal/crossing-the-uncanny-valley-of-voice
[wysab]: https://blogs.wysa.io/blog/wysa-news/ai-detects-82-of-mental-health-app-users-in-crisis-finds-wysas-global-study-released-on-the-role-of-ai-to-detect-and-manage-distress
[wysar]: https://www.wysa.com/role-of-ai-in-sos
[wysafaq]: https://www.wysa.com/faq
[naver]: https://navercorp.com/media/pressReleasesDetail?seq=32029
[smart]: https://www.smarttoday.co.kr/ko-kr/articles/22812
[naverpdf]: https://www.navercorp.com/api/article/download/a78ea2e4-1a27-4a35-8edf-6492a00ea8cd
[hume]: https://dev.hume.ai/docs/speech-to-speech-evi/overview
[humeproduct]: https://www.hume.ai/empathic-voice-interface
[humelaunch]: https://www.hume.ai/blog/announcing-evi-3-api
[hume48]: https://www.hume.ai/blog/case-study-hume-iris-insights
[humeprice]: https://www.usagepricing.com/blueprint/hume-ai
[friendtg]: https://www.tomsguide.com/ai/friend-is-a-dollar99-ai-necklace-that-wants-to-help-you-remake-the-movie-her
[friendfortune]: https://fortune.com/2025/10/03/friend-ai-necklace-review-avi-schiffmann/
