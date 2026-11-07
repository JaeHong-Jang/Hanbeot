# 한벗 유사 서비스 조사 (상용·운영 서비스 편)

- 조사일: 2026-11-06
- 범위: 기존 조사에서 다룬 서비스(Character.ai, ChatGPT 음성, 네이버 클로바 케어콜, Hume EVI, 카카오 카나나, Kindroid, Nomi, Pi, Replika, Therabot, Woebot, 뤼튼 캐릭터, Wysa, 제타)는 제외함
- 방법: 웹 검색 후 공식 페이지·앱스토어·보도자료·기사를 직접 열어 확인함. 직접 열지 못하고 검색 요약으로만 확인한 항목은 "(검색 요약)"으로, 근거가 불충분한 항목은 "확인 필요"로 표시함
- 주의: 대부분의 성과 수치(외로움 감소율, 정확도 등)는 회사 자체 발표임. 독립 검증된 수치가 아님

---

## 1. 한눈에 보기

| 앱/서비스 | 국가 | 음성 여부 | 감정 인식 방식 | 포지셔닝 | 본받을 점 |
|---|---|---|---|---|---|
| Sonia | 미국 | 음성·텍스트 선택 | 텍스트 기반 대화 이해 (음성 감정 분석 언급 없음) | AI 정신건강 지원(CBT 기반), 치료 아님 명시 | 주간 인사이트·개인화 플랜, "위기용 아님" 명확한 고지 |
| Ash (Slingshot AI) | 미국 | 음성(전화처럼)·텍스트 | 대화 내용 기반 | "치료를 위해 설계된 AI", 전문 치료 대체 아님 | 장기 기억 + 주간 패턴 인사이트, 심리 특화 파운데이션 모델 |
| Earkick | 스위스(현재 판매자 Elomia Health) | 음성·영상·텍스트 메모 | 음성 톤·표정·심박 등 멀티모달(회사 주장) | 셀프케어 무드 트래커 + 판다 AI 동반자 | 온디바이스 처리·무가입, 패닉 버튼 |
| Youper | 미국 | 텍스트 위주 | 텍스트 무드 트래킹 | AI 웰빙 챗봇 | (반면교사) 2026-09-30 서비스 종료 |
| Abby | 확인 필요 | 텍스트·음성 | 텍스트 기반 | 감정 지원 동반자, 치료 아님 | 말투(지지형/직설형) 선택 |
| Elomia | 우크라이나→미국 | 텍스트 | 텍스트 기반, 위기 감지 후 외부 자원 안내 | CBT/ACT/DBT 기반 챗봇 + API | B2B API로 타 플랫폼 공급 |
| clare&me (Clare) | 독일 | 음성 전용(전화) + WhatsApp | 전사 텍스트 NLP로 감정·맥락 탐지 | 자가치료 보조(심리치료 아님) | 정해진 시간에 AI가 먼저 전화, 과탐지(over-flag) 모더레이션 |
| Limbic Care / Access | 영국 | Care는 텍스트 (Limbic은 별도 음성 접수 에이전트 출시, 검색 요약) | 텍스트 위기 감지 ML(Crisis Detection Engine) | NHS 치료 보조, Access는 UKCA Class IIa | 위기 탐지 엔진을 별도 레이어로 분리 |
| Rosebud | 미국 | 음성 저널링·통화 모드(유료) | 일기 텍스트 패턴 분석 | AI 저널·멘토, 치료 대체 아님 | 장기 기억을 핵심 유료 가치로 설계, 학습 미사용 약속 |
| Headspace Ebb | 미국 | 음성 모드(2025-12) | 텍스트 위험 언어 다층 감지 | 치료 보완 동반자(동기강화상담 기반) | 음성 모드+강화 기억+"시작 프롬프트" |
| Kintsugi | 미국 | 음성 샘플 분석 | 음성 바이오마커(내용 아닌 음성 특성) | 우울·불안 선별 B2B | (반면교사) FDA 허가 지연으로 2026-02 폐업, 모델 공개 |
| Ellipsis Health (Sage) | 미국 | 음성 에이전트 | 음성 바이오마커 기반 "Empathy Engine" | AI 케어 매니저(의료기관용) | 감정 상태에 따라 말투·접근 조정 |
| Sonde Health | 미국 | 30초 음성 샘플 | 5개 음향 특징 → 0~100 점수 | 멘탈 피트니스 모니터링 + API | 점수와 함께 세부 특징을 사용자에게 보여줌 |
| Canary Speech | 미국 | 앰비언트 음성 분석 | 음성 바이오마커(기분·인지 등) | 임상 의사결정 지원 신호(진단 아님) | "진단 아님, 의사결정 보조 신호" 프레이밍 |
| audEERING devAIce | 독일 | SDK/API | 4분류(행복·분노·슬픔·중립) + 각성·쾌·지배 차원 | 음성 감정 인식 엔진 | 온디바이스·전 언어 대상, 차원형 출력 |
| Behavioral Signals | 미국 | API | 발화별 감정·긍정성·각성·망설임 확률 | 음성 감정·행동 인식 엔진, 딥페이크 탐지 | 발화 단위 확률 출력(확인 질문 트리거로 응용 가능) |
| 마인드카페 (아토머스) | 한국 | 텍스트(커뮤니티·상담) | AI 감정 키워드 분석(상담 보조) | 상담 플랫폼 → B2B/B2G SaaS | AI는 경미 케어, 심화는 상담사로 넘기는 하이브리드 |
| 트로스트 (휴마트컴퍼니) | 한국 | 텍스트 상담 | 감정 분석 AI(과거 '감정스캐너', 검색 요약) | 심리상담 앱 + 기업 EAP | EAP로 B2B 매출 기반 확보 |
| 하이(HAII) 마음검진 | 한국 | 텍스트 챗봇 | 카메라 HRV 측정 + 문답 | 건강검진 연계 정신건강 점검(의료 아님) | 검진기관 연계 유통 |
| SKT AI 안부확인(누구 비즈콜) | 한국 | 음성 전화 | 위험 발화("아프다","힘들다") 감지 | 지자체 취약계층 안부 확인 | 위험 발화 → 전문 상담사·지자체 연계 흐름 |
| SKT '내 마음상태 확인하기'(멘탈 비전) | 한국 | 음성(문장 낭독) + 얼굴 | 억양·속도·떨림 분석 | 임직원 심리상태 점검 | 한국어 음성 감정 분석 상용 사례 |
| KT 기가지니 AI 돌봄 | 한국 | 음성(AI 스피커) | 키워드 기반 응급 호출 | 지자체 독거가구 돌봄 | 사투리 사전으로 인식률 확보 |
| 경기도 AI 노인말벗 | 한국 | 음성 전화(주 1회) | 위기 징후 감지(방식 미공개) | 공공 안부 서비스 | 3회 미수신 시 사람 개입 규칙 |
| 서울시 '마음이' | 한국 | 텍스트 | 대화 기반, 3~4턴 후 상담 연결 | 위기상담 1차 관문 | AI→시민상담사→전문상담사 3단계 |
| 닥터프레소 REDI | 한국 | 음성 일기 | 음성 비언어 특성으로 감정 변화 시각화 | 멘탈케어 솔루션 | 한국 스타트업의 음성 감정 시각화 |
| 미스터마인드 말동무 인형 | 한국 | 음성(인형) | 대화 내용 기반 감정 분석(회사 주장) | 어르신 말동무 | 감성 대화형 하드웨어 |
| ElliQ | 이스라엘/미국 | 음성 우선(전용 기기), 능동 대화 | 언급 없음(행동 변화 알림) | 노인 동반자 로봇 | 먼저 말을 거는 능동성, 가족 알림 |
| 효돌 | 한국 | 음성(인형) | 음성 로그로 기분 분석(Microsoft AI) | 노인 돌봄 로봇 | 사회복지사 앱으로 기분 메모 공유 |
| Meela | 미국 | 음성 전화(앱·기기 불필요) | 언급 없음(우려 플래그) | 노인 AI 전화 동반자 | 과거 대화 기억 + 돌봄자 대시보드 |

---

## 2. 그룹별 상세

### A. 글로벌 AI 정신건강·감정 지원 앱

#### A1. Sonia
- 회사/국가: Bloit Inc. / 미국
- 출시: 확인 필요(앱 ID상 2023년 말~2024년 등록 추정, 확인 필요)
- 플랫폼: iPhone 전용(Mac 언급 있음, 검색 요약)
- 상태: 운영 중(최신 버전 5.0.47, 10월 26일 배포, 연도 미표기)
- 음성: 음성·텍스트 선택형
- 언어: 앱스토어에 한국어 등 현지화 스토어 표기가 있으나 앱 자체 지원 언어는 명시 안 됨 → 한국어 지원 확인 필요
- 감정 인식: 음성 톤 분석 언급 없음. 무드 체크인 제공
- 기억/개인화: 대화 이력을 유지하고 패턴을 파악해 맞춤 지원, 주간 인사이트·개인화 지원 플랜, 커플용 파트너 세션 제공
- 안전: "Sonia는 위기 상황용이 아님"을 명시하고 위기 시 전문가·위기 전화로 안내. 18세 이상, 면허 치료사 아님 고지
- 포지셔닝: CBT·마음챙김 기반 AI 정신건강 지원(웰니스)
- 임상 근거: 확인되지 않음
- 가격: 무료 다운로드 + 구독(월 $24.99~$64.99, 연 $249.99~$419.99)
- 지표: 앱스토어 평점 4.7(약 1.5천 건)
- 본받을 점: 음성/텍스트 자유 전환, "위기용 아님"을 첫 화면 수준에서 명확히 고지함
- 주의: 제3자 리뷰에서 위기 상황 대응이 약할 수 있다는 지적이 있음(검색 요약)
- 출처: [App Store](https://apps.apple.com/us/app/sonia-ai-for-mental-health/id6472111765)

#### A2. Ash (Slingshot AI)
- 회사/국가: Slingshot AI / 미국
- 출시: 2025년 7월
- 플랫폼: iOS, 웹앱(app.talktoash.com). Android는 검색 요약상 지원(확인 필요)
- 상태: 운영 중
- 음성: "전화하듯 말하기" 또는 텍스트, 24시간
- 언어: 공식 페이지에 언급 없음 → 한국어 확인 필요
- 감정 인식: 별도 음성 감정 분석 언급 없음, 대화 내용 기반
- 기억/개인화: 사용자의 이야기·선호·진척을 기억해 이전 대화에서 이어감. 목표에 맞춘 프로그램 구성, 현재 주제를 과거 패턴과 연결하는 주간 인사이트
- 안전: 위기용으로 설계되지 않았다고 명시, findahelpline.com 등으로 안내
- 포지셔닝: "치료를 위해 설계된 AI"로 홍보하나 전문 치료 대체는 아니라고 고지
- 임상 근거: 독립 임상 검증 확인 안 됨. 심리 특화 파운데이션 모델(CBT·DBT·ACT·정신역동 데이터 사전학습 + 임상 파인튜닝 + 강화학습), 5만 명 베타 테스트(검색 요약)
- 가격: 무료(검색 요약)
- 지표: 누적 투자 9,300만 달러(a16z, Forerunner, Radical 등, 검색 요약)
- 본받을 점: "지난주에 말한 그 일"을 연결하는 주간 패턴 인사이트, 임상 자문위원회 운영
- 주의: "치료용 AI"라는 강한 표현은 규제·신뢰 리스크가 큼. 한벗은 "치료 아님" 포지션 유지가 안전함
- 출처: [공식 사이트](https://www.talktoash.com/), [HLTH 기사](https://hlth.com/insights/news/slingshot-ai-launches-ash-first-ai-designed-specifically-for-therapy-with-93m-funding-2025-07-25)(검색 요약)

#### A3. Earkick
- 회사/국가: Earkick(공동창업 Karin Andrea Stephan, Herbert Bay, "We're Swiss") / 스위스. 현재 App Store 판매자는 Elomia Health, Inc.로 표기됨 → 인수·이관 여부 확인 필요
- 출시: 2021년 창업
- 플랫폼: iOS, Apple Watch, 웹 챗봇(Panda)
- 상태: 운영 중(earkick.com은 블로그로 리다이렉트, 2026년 8월 글 존재)
- 음성: 음성·영상·텍스트 메모로 기록, 판다 동반자 음성·말투 커스터마이즈 가능
- 언어: 우크라이나어 출시 언급, 한국어 확인 필요
- 감정 인식: 음성 톤, 표정, 타이핑 패턴, 심박 등 멀티모달 감정 분석으로 개인 기준선 대비 변화 감지(회사 주장). 앱스토어에는 "하루를 설명하는 방식에서 기분·스트레스·증상 추출"로 표현
- 기억/개인화: 위치·날씨·Apple Health 데이터와 상관관계 분석, 진척 통계
- 안전: 패닉 버튼(신뢰하는 사람에게 위치 공유·알림), 위기 시 의사 연락 안내. 구체적 핫라인 목록은 없음
- 포지셔닝: 셀프케어 AI 코치·무드 트래커
- 임상 근거: 회사 자체 백서·보도자료 수준, 독립 검증 없음
- 가격: 무료 + 구독(주 $3.99, 월 $14.99, 연 $44.99~$107.99)
- 지표: 평점 4.7(3.3천 건)
- 본받을 점: 온디바이스 처리·무가입 프라이버시 설계, 음성 감정 결과를 "변화 추이"로 보여주는 방식
- 주의: "No tracking" 마케팅과 앱스토어 개인정보 라벨(추적 목적 사용 데이터 표기)이 상충함. 한벗은 동의 문구와 실제 데이터 처리를 반드시 일치시켜야 함
- 출처: [LDV Capital 인터뷰](https://www.ldv.co/blog/2022/3/30/can-ai-detect-and-identify-changes-in-our-well-being-meet-karin-andrea-stephan-of-earkick), [App Store](https://apps.apple.com/us/app/-/id1584854531), [블로그](https://blog.earkick.com/)

#### A4. Youper
- 회사/국가: Youper Inc. / 미국(샌프란시스코)
- 상태: **2026년 9월 30일 서비스 종료** (공식 사이트 고지)
- 음성: 텍스트 위주
- 감정 인식: 무드 트래킹, 자살 사고·자해 표현 탐지
- 안전: 988, Crisis Text Line, 911 안내, 탐지가 완벽하지 않음을 명시
- 포지셔닝: AI 웰빙 챗봇, 의료기기 아님
- 임상 근거: 스탠퍼드 연계 관찰 연구(JMIR, 4,517명)가 있다고 알려졌으나 RCT 아님(검색 요약, 확인 필요)
- 가격: 연 $69.99 내외(검색 요약)
- 본받을 점: 탐지 한계를 솔직하게 고지하는 안전 문구
- 주의: 초기 선도 앱도 종료될 수 있음. 지속 가능한 수익 구조(B2B·공공) 확보가 중요함
- 출처: [공식 사이트](https://www.youper.ai/)

#### A5. Abby
- 회사/국가: 확인 필요
- 상태: 운영 중(앱스토어 등재)
- 음성: 무료 플랜에서 텍스트·음성 모드 제공
- 언어: 26개 언어(Talkspace 기사), 다른 출처는 88개로 상이 → 한국어 확인 필요
- 감정 인식: 텍스트 기반, 무드 트래킹
- 기억/개인화: 대화 기록 보관, 체크인 알림, 지지형/직설형 말투 선택
- 안전: 사람 지원·위기 개입 없음, 위기 경로가 불명확하다는 평가. 데이터 저장·삭제 안내도 불명확
- 포지셔닝: 감정 지원 동반자(진단·치료 아님)
- 임상 근거: 동료평가 검증 부족
- 가격: 무료 + Pro 월 $19.99 / 연 $179.99
- 본받을 점: 말투 스타일 선택권
- 주의: 위기 경로·데이터 삭제 안내 부재는 가장 큰 약점임. 한벗의 109 연계·삭제 기능이 차별점이 될 수 있음
- 출처: [Talkspace 비교 글](https://www.talkspace.com/blog/wysa-vs-abby/)

#### A6. Elomia
- 회사/국가: Elomia Health, Inc. / 우크라이나 하르키우 창업(2019), 본사 미국 샌프란시스코
- 출시: 모바일 앱 2022년
- 상태: 운영 중
- 음성: 언급 없음(텍스트)
- 감정 인식: 텍스트 기반. 챗봇 이상의 도움이 필요할 때 외부 자원으로 안내하는 장치(검색 요약)
- 포지셔닝: CBT·ACT·DBT 기반 챗봇, 치료·진단 아님
- 임상 근거: 2021년 학술 연구, 2025년 BMC Psychology 준실험 연구에서 우울·불안 감소 보고
- 사업모델: 무료+인앱결제, 제3자용 API, 아동용 챗봇(Troodi) 파트너십
- 본받을 점: 챗봇을 API로 B2B 공급하는 구조
- 주의: 음성·감정 인식 차별점이 없어 범용 LLM과 구분이 약함
- 출처: [Wikipedia](https://en.wikipedia.org/wiki/Elomia_Health)

#### A7. clare&me (Clare)
- 회사/국가: clare&me GmbH / 독일 베를린
- 출시: 확인 필요(2024년 8월 370만 유로 투자 유치)
- 플랫폼: 전화 통화 + WhatsApp
- 상태: 운영 중(확인 필요)
- 음성: **음성 우선(전화)**. 온보딩 통화(3~6분) 후 예약 시간에 Clare가 전화하거나 사용자가 요청해 통화, 세션 5~45분
- 언어: 영어만(연구 기준) → 한국어 미지원
- 감정 인식: 음성을 텍스트로 전사한 뒤 NLP로 감정·맥락 탐지(음향 감정 분석은 아님)
- 안전: 입력·출력을 커스텀 모더레이션 API로 사전 검사, 급성 자살 위험군은 온보딩 단계에서 제외, 이후 자살 위험·심각한 고통 감지 시 핫라인 안내 및 **이용 차단**, 사람 모더레이터 검토, 거짓 음성 감소를 위해 의도적으로 과탐지
- 포지셔닝: "전화 한 통 거리의 자가치료", 전통적 심리치료 아님
- 임상 근거: Frontiers in Digital Health(2025) 기초선 연구, 527명. 초기 작업동맹 점수 3.76/5로 강한 유대 보고. 대조군 없음, 회사 자금 지원 연구. 이용자 85.9%가 외로움 보고, 주요 동기는 "사람에게 말하는 창피함 회피"(35.7%)
- 사업모델: 구독 + 클리닉·헬스기업 대상 임상 LLM API
- 본받을 점: AI가 먼저 정해진 시간에 전화를 거는 능동형 음성 루틴, 과탐지 원칙의 다층 모더레이션
- 주의: 위기 감지 시 "차단"은 가장 필요한 순간에 관계를 끊는 효과가 있음. 한벗은 차단보다 "연결 유지 + 109 안내"가 바람직함. 또 연구에서 통화 빈도가 첫 4주간 감소하고 이탈자가 더 고통이 컸음
- 출처: [Frontiers 논문](https://www.frontiersin.org/articles/10.3389/fdgth.2025.1576135/full), [tech.eu](https://tech.eu/2024/08/08/ai-therapy-startup-clare-me-raises-3-7m/)(검색 요약)

#### A8. Limbic Care / Limbic Access
- 회사/국가: Limbic / 영국
- 플랫폼: iOS·Android(Care), NHS 서비스 연동
- 상태: 운영 중
- 음성: Limbic Care 페이지에는 음성 언급 없음. 미국 행동건강 기관용 음성 접수 에이전트 출시 보도 있음(Fierce Healthcare, 검색 요약)
- 감정 인식: 자유 텍스트를 검토하는 ML 기반 Crisis Detection Engine으로 위험 자가보고 환자 식별
- 안전: "Limbic Layer"라는 임상·기술 안전장치 계층
- 포지셔닝: NHS Talking Therapies 그룹치료 환자의 회기 사이 생성형 AI 케어 동반자(치료 보조)
- 임상 근거: Limbic Access는 UKCA Class IIa 의료기기(2023, 회사 발표). Limbic Care는 NHS 5개 기관 실사용 연구(JMIR, 150명 vs 94명)에서 회복률 동등 이상·회기 40% 감소(회사 요약, 검색 요약)
- 사업모델: NHS·미국 보험사 등 B2B
- 본받을 점: 위기 탐지를 LLM과 분리된 독립 모델(엔진)로 운영하는 아키텍처
- 주의: 의료기기 인증은 큰 비용과 시간이 필요함. 한벗 초기 단계에서는 비의료 웰니스 범위를 명확히 유지해야 함
- 출처: [Limbic Care 소개](https://limbic.ai/blog/introducing-limbic-care), [BusinessWire](https://www.businesswire.com/news/home/20250310848349/en)(검색 요약)

#### A9. Rosebud
- 회사/국가: Rosebud / 미국, 2023년 창업(Chrys Bader, Sean Dadashi)
- 플랫폼: 웹, iOS, Android
- 상태: 운영 중
- 음성: 유료 플랜에서 음성 입력·답변 읽어주기·통화 모드. 앱스토어상 음성 20개 언어(검색 요약, 한국어 포함 여부 확인 필요)
- 감정 인식: 일기 텍스트의 패턴 분석
- 기억/개인화: 자체 장기 기억 기술(유료), 사용자 소통 스타일에 맞춰 부드러운 공감~직설적 도전까지 조정
- 안전: 위기 감지·연계 기능 언급 없음. 치료사 대체 아님
- 프라이버시: 일기 암호화, 제3자 공유·AI 학습 사용 안 함
- 가격: 기본 무료(2025년 기준), 월 $12.99 유료. 이후 무료 플랜 폐지 주장 있음(확인 필요)
- 지표: 5억 단어 작성, 3,000만 분 이상 사용, 4인 팀, 시드 600만 달러(Bessemer 주도)
- 본받을 점: 장기 기억을 유료 전환 핵심 가치로 설계, "학습에 쓰지 않음" 명시
- 주의: 위기 대응 설계가 공개되어 있지 않음
- 출처: [TechCrunch](https://techcrunch.com/2025/06/04/rosebud-lands-6m-to-scale-its-interactive-ai-journaling-app), [장기기억 도움말](https://help.rosebud.app/ai-analysis/long-term-memory)(검색 요약)

#### A10. Headspace Ebb
- 회사/국가: Headspace / 미국
- 출시: 2024년 10월(미국), 음성 모드·강화 기억 2025년 12월
- 플랫폼: Headspace 앱 내 기능
- 상태: 운영 중. 18세 이상 유료 회원, 영어, 미국·영국·캐나다·호주
- 음성: Voice Mode로 소리 내어 대화, 스트레스 순간 타이핑 부담 감소가 목적. 음성 앱 Supertalk 인수(검색 요약)
- 감정 인식: 고위험 언어를 식별하는 다층 시스템, 실시간 위기 자원 제시
- 기억/개인화: 과거 대화 세부를 기억해 "큰일이나 힘든 주"를 다시 물어봄, "응원이 필요해" 같은 시작 프롬프트
- 포지셔닝: 동기강화상담 기반 감정 동반자, 치료 보완(대체 아님)
- 임상 근거: 2026년 기술 검증·안전성·실효성 연구 발표 예정. Headspace 콘텐츠는 70개 이상 동료평가 연구
- 사업모델: Headspace 구독에 포함, 2,000개 이상 기업 복지 프로그램 제공
- 지표: 출시 후 700만 메시지 이상, 주 사용 목적은 스트레스·불안·수면
- 본받을 점: 기억을 "다시 안부 묻기"로 쓰는 방식(한벗의 장기 기억 활용 방향과 일치), 말 꺼내기 어려운 사용자용 시작 프롬프트
- 주의: 다국어(한국어) 미지원 상태로, 한국어 음성 품질이 한벗의 차별점이 될 수 있음
- 출처: [HIT Consultant](https://hitconsultant.net/2025/12/08/headspace-updates-ebb-ai-with-voice-mode-and-enhanced-memory-to-deepen-mental-health-support/), [Headspace 도움말](https://help.headspace.com/hc/en-us/articles/44080195624859-What-is-Ebb-Voice)(접속 차단, 검색 요약)

### B. 음성 바이오마커·음성 감정 분석 기업

#### B1. Kintsugi
- 회사/국가: Kintsugi / 미국 버클리
- 상태: **2026년 2월 상업 사업 종료**, 음성 바이오마커 모델·방법론·연구를 공개(오픈소스화). Hugging Face에 공개(검색 요약)
- 기술: 20초 자유 발화에서 말의 내용이 아닌 음성 특성으로 우울·불안 징후 탐지(검색 요약)
- 종료 사유: CEO는 "침체된 시장의 한계보다 과학의 무결성을 택했다"고 밝힘. FDA De Novo 허가를 제때 받지 못한 것이 원인으로 보도됨(검색 요약)
- 투자: 약 3,000만 달러(Insight Partners, Acrew Capital 등)
- 본받을 점: 공개된 모델을 한국어 음성에 대한 연구·비교 기준으로 참고할 수 있음(라이선스 확인 필요)
- 주의: "음성으로 우울증 진단"을 사업 중심에 두면 의료기기 규제 부담이 매우 큼. 한벗처럼 감정 신호를 "확인 질문"으로만 쓰는 접근이 규제상 안전함
- 출처: [Behavioral Health Business](https://bhbusiness.com/2026/02/11/mental-health-voice-biomarker-kintsugi-closes-makes-all-technology-and-research-public/)

#### B2. Ellipsis Health (Sage)
- 회사/국가: Ellipsis Health / 미국 샌프란시스코
- 출시: Sage 2025년 6월
- 형태: 의료기관·보험사용 음성 AI 케어 매니저, Salesforce Health Cloud 연동
- 감정 인식: 특허 음성 바이오마커 기반 "Empathy Engine", 수백만 건 실제 임상 통화로 학습. 환자 감정 상태와 필요에 따라 말투·접근을 조정함
- 안전·에스컬레이션: 공개 자료에 설명 없음
- 투자: 시리즈A 4,500만 달러(Salesforce, Khosla, CVS Health Ventures)
- 이전 실적: Cigna StressWaves 음성 스트레스 테스트(검색 요약)
- 본받을 점: 감정 인식 결과를 "판정"이 아니라 "응답 말투 조정"에 쓰는 설계(한벗의 TTS 감정 톤 조절에 응용 가능)
- 주의: B2B 의료 시장 지향이라 개인 사용자 투명성 정보가 적음
- 출처: [HLTH](https://hlth.com/insights/news/ellipsis-health-raises-45m-to-launch-sage-an-emotionally-intelligent-ai-care-manager-2025-06-16)

#### B3. Sonde Health (Mental Fitness)
- 회사/국가: Sonde Health / 미국
- 출시: 2021년 10월(앱 + API)
- 플랫폼: iOS·Android 앱, 엔터프라이즈·개발자 API
- 감정 인식: 약 30초 음성으로 부드러움(지터), 제어, 생동감(피치 범위), 에너지 범위, 명료도 5개 음향 특징 측정 → 점수 산출(0~69 "주의", 70~79 "양호", 80~100 "우수", 검색 요약). 단어 내용과 무관한 음향 접근
- 사용자 표시: 점수 + 5개 특징 + 타인 대비 비교 + 추세, 기분 자가보고 추가
- 임상 근거: Frontiers in Psychiatry(2024) 외래환자 104명 4주 연구에서 증상 상승군 구분 능력 보고(검색 요약)
- 사업모델: EAP·웰니스 플랫폼·임상·제약 연구 파트너용 API
- 본받을 점: 음성 신호를 사용자에게 이해 가능한 지표로 풀어 보여주는 UX
- 주의: 점수화는 사용자에게 "평가받는" 부담을 줄 수 있음. 한벗은 점수보다 대화 속 부드러운 확인이 적합함
- 출처: [Sonde 페이지](https://www.sondehealth.com/vocal-biomarkers-for-mental-fitness-scoring-and-tracking)

#### B4. Canary Speech
- 회사/국가: Canary Speech / 미국(유타)
- 제품: Canary Ambient(2024년 10월, 진료 대화 실시간 앰비언트 분석), Wellness API, 모바일 앱
- 감정 인식: 음성 바이오마커로 기분·인지·신경 상태 등 선별, "진단이 아닌 의사결정 지원 신호"로 제공
- 규제: HIPAA 준수 명시, FDA 허가는 확인되지 않음(FDA와 연구 협력 언급만 있음)
- 투자: 시리즈A 1,300만 달러(2024년 6월, 검색 요약)
- 본받을 점: 결과를 "진단"이 아닌 "신호"로 부르는 표현 전략
- 주의: 앰비언트(상시 청취)는 동의 설계가 핵심임
- 출처: [공식 사이트](https://canaryspeech.com/)

#### B5. audEERING devAIce
- 회사/국가: audEERING / 독일
- 형태: SDK(Windows, Linux, macOS, Android, iOS), Web API, Unity/Unreal 플러그인
- 감정 인식: 각성·쾌·지배(AVD) 차원 모델 + 4분류(행복·분노·슬픔·중립), Large/Small/Tiny 모델, "모든 언어 대상" 개발
- 온디바이스: 웨어러블·라즈베리파이급 저전력 기기에서 실시간 구동
- 가격: 선불 €35/600분, €250/6,000분, 학술 라이선스
- 활용: 콜센터(Jabra), 소셜 로봇(Hanson Robotics), 헬스케어 등
- 본받을 점: emotion2vec+ 대비 비교 실험 후보(차원형 출력은 "약간 처진 것 같아" 같은 강도 표현에 유리)
- 주의: 4분류는 한국어 대화의 미묘한 감정(서운함, 답답함)을 담기 어려움
- 출처: [devAIce 페이지](https://www.audeering.com/devaice/)

#### B6. Behavioral Signals
- 회사/국가: Behavioral Signals / 미국 LA, 2016년(USC SAIL 출신, 검색 요약)
- 형태: 개발자용 API(클라우드·온프레미스·엣지), 콜센터 매칭 PAIR, 음성 딥페이크 탐지
- 감정 인식: 발화별 감정·긍정성·각성·말 속도·망설임·몰입도·화자 특성을 확률로 출력
- 본받을 점: 발화 단위 "확률" 출력을 임계값으로 써서 확인 질문을 띄우는 방식에 참고 가능(망설임 지표도 유용)
- 주의: 콜센터 데이터 기반이라 정서 지원 대화에서의 정확도는 미검증
- 출처: [공식 사이트](https://behavioralsignals.com/), [Verdict](https://www.verdict.co.uk/behavioral-signals-ai-voice-emotion/)(검색 요약)

### C. 한국 서비스

#### C1. 마인드카페 (아토머스)
- 국가: 한국 / 상태: 운영 중
- 형태: 익명 커뮤니티 + 전문 상담, 일본 진출(2022), 명상앱 '코끼리' 인수
- 음성: 텍스트 중심
- 감정 인식: 상담 보조 AI가 상담 내용 자동 요약, 감정 키워드 분석, 심리이론 추천, 통계화. 커뮤니티 글에 공감 댓글 자동 작성
- 포지셔닝: AI는 경미한 상태의 지속 케어, 심화 상담은 숙련 상담사로 넘기는 하이브리드. 서울대병원·성모병원과 챗봇 기반 우울증 디지털치료제 개발 추진
- 사업모델: 개인 유료 상담 → B2B·B2G SaaS(조직 심리진단 리포트)
- 지표: 누적 이용자 약 300만 명, 2025년 매출 200억 원 이상 예상(회사 전망)
- 본받을 점: AI→사람 상담사 연결 구조를 비즈니스 모델로 만든 점(한벗의 위기 연계를 "제휴 상담 연결"로 확장 가능)
- 주의: 위기 대응 체계는 공개 자료에서 확인 안 됨
- 출처: [머니투데이 유니콘팩토리](https://www.unicornfactory.co.kr/article/2025061915171098934), [바이라인네트워크](https://byline.network/2024/04/04-107/)(검색 요약)

#### C2. 트로스트 (휴마트컴퍼니)
- 국가: 한국 / 상태: 운영 중(확인 필요)
- 형태: 텍스트 심리상담 앱 + 기업 EAP(상담·명상·사운드테라피·워크숍), 100여 개 고객사
- AI: 2023년 7월 소프트리에이아이와 멘탈케어 AI 챗봇 개발 MOU, 이전 고객 리뷰 분석 AI 공동 개발. 고민 텍스트로 감정을 분석하는 '감정스캐너' 출시 이력(검색 요약)
- 본받을 점: EAP를 통한 B2B 유통(한벗의 기업 복지 채널 가능성)
- 주의: AI 챗봇의 현재 출시 상태·기능은 확인 필요
- 출처: [유니콘팩토리](https://www.unicornfactory.co.kr/article/2023071808492546921)

#### C3. 하이(HAII) 마음검진 / 마음첵
- 국가: 한국(연세대 교원창업, 2016) / 상태: 운영 중(마음검진 v2.4.2, 2025-08-20)
- 형태: AI 챗봇 '테스'와 대화형 문답 + 카메라 기반 심박변이도(HRV) 측정. 마이크는 주변 소음 측정용. KMI 건강검진 이용 코드로 접근
- 언어: 한국어·영어
- 감정 인식: 음성 감정 분석이 아닌 HRV + 문답
- 포지셔닝: 진단 아님 명시. 별도 '마음첵'(세브란스 공동개발, HRV 1분 측정)
- 본받을 점: 건강검진 기관과 연계한 유통 경로
- 주의: 회사 기술 소개에 음성 바이오마커가 포함되나 해당 앱의 음성 기능은 확인되지 않음
- 출처: [App Store 마음검진](https://apps.apple.com/KR/app/id6462848390), [와우테일](https://wowtale.net/2022/03/29/36842/)(검색 요약)

#### C4. SKT AI 안부확인 서비스 (누구 비즈콜 / 누구 돌봄 케어콜)
- 국가: 한국 / 출시: 누구 돌봄 케어콜 2021년 11월(경남), AI 안부확인 2022년 10월 / 상태: 운영 중(확인 필요)
- 음성: AI가 주 1회 전화로 식사·건강 등 안부 확인
- 감정 인식: "아프다", "힘들다" 같은 위험 발화 감지 → 행복커넥트 전문 상담사 연결, 위급자 병원 동행 연계, 복지 요청 지자체 전달. 감정 분석 언급 없음
- 지표: 1년간 110,538명, 약 176만 건 통화, 위험 감지 4,063명 지원, 복지 요청 6,780건 전달, 약 100개 지자체·기관(2023-11 기준). SKT 자체 LLM A.X 탑재 계획
- 본받을 점: "위험 발화 → 사람 상담사 → 지자체"로 이어지는 구체적 핸드오프 경로와 성과 지표 공개
- 주의: 정해진 시나리오 위주라 깊은 정서 대화는 제한적
- 출처: [SKT 뉴스룸 2023](https://news.sktelecom.com/200115), [SKT 뉴스룸 2022](https://news.sktelecom.com/175665)

#### C5. SKT '내 마음상태 확인하기' (멘탈 비전)
- 국가: 한국 / 출시: 2025년 9월 발표 / 상태: SK그룹 임직원 대상 운영, 일반 확대 계획
- 음성: 짧은 문장을 소리 내어 읽으면 억양·속도·떨림 분석, 카메라 얼굴 인식 병행
- 감정 인식: 불안·우울 등 심리 상태 추정 → 수련원 프로그램 추천
- 협력: 헬스케어 스타트업 '유쾌한 프로젝트'
- 본받을 점: 한국어 음성 기반 심리 추정의 상용 시도로, 한벗의 직접적인 기술 비교 대상
- 주의: 낭독 과제 방식이라 자유 대화 중 감정 인식과는 다름
- 출처: [토큰포스트](https://www.tokenpost.kr/news/tech/282874)

#### C6. KT 기가지니 AI 돌봄
- 국가: 한국 / 시작: 2021년 광주 서구 / 상태: 운영 중(확인 필요)
- 음성: AI 스피커 + IoT 센서
- 안전: 위급 시 특정 말을 하면 보호자·복지사에게 문자, 무응답 시 KT텔레캅 출동. "지니야 살려줘" 호출 시 119 연계(검색 요약)
- 언어: 전라도 사투리 사전 등록("죽것당께", "아프당께"), 인식률 약 91%
- 지표: 2022년 전국 564가구(검색 요약)
- 본받을 점: 사투리 사전으로 인식률 보완(대상은 독거 고령 가구라 한벗과 다르지만, RTZR STT의 방언 대응 점검 필요성은 시사)
- 주의: 명령어 기반 호출이라 대화형 정서 지원은 제한적
- 출처: [데일리안](https://www.dailian.co.kr/news/view/997770)

#### C7. 경기도 AI 노인말벗서비스
- 국가: 한국 / 시작: 2023년 6월 시범, 2024년 4월 본격 / 운영: 경기도사회서비스원(기술 제공사 미공개, 확인 필요)
- 음성: AI 상담원이 주 1회 정해진 시간에 집전화·휴대폰으로 안부 전화
- 안전: 3회 이상 미수신 또는 통화 중 위기 징후 감지 시 담당자가 직접 통화, 긴급복지 핫라인 연결, 긴급 시 읍면동 방문
- 지표: 신청자 5,012명(2024-06)
- 본받을 점: "미수신 3회 → 사람 개입" 같은 명확한 규칙 기반 에스컬레이션
- 주의: 주 1회 통화라 관계 형성이 약함
- 출처: [아주경제](https://www.ajunews.com/view/20240613102126012)

#### C8. 서울시 AI 챗봇 '마음이'
- 국가: 한국 / 운영: 서울시 자살예방센터, 정신건강위기상담전화(1577-0199) 체계 / 상태: 운영 중
- 음성: 텍스트 전용(전화 상담이 부담스러운 사람 대상), 회원가입 불필요, PC·모바일
- 기능: 우울·불안·자살 위기에 대한 공감 대화, 조언·해결책 대신 안전하게 들어주기에 집중, 대화 3~4회 후 실시간 채팅·전화 상담 연결
- 구조: AI 챗봇(문 열기) → 시민상담사(당사자 경험 기반 공감) → 전문상담사(위기 대응) 3단계
- 본받을 점: "조언하지 않고 들어주기" 원칙, 몇 턴 만에 사람에게 넘기는 빠른 연결 설계. 한벗의 109 연계를 단계적 안내로 설계할 때 참고
- 주의: 공공 서비스라 장기 기억·지속 관계는 제공하지 않음
- 출처: [서울시 복지 누리집](https://news.seoul.go.kr/welfare/archives/576572)
- 참고: 보건복지부·대한신경정신의학회 「정신건강 목적 생성형 AI 이용 가이드라인」(2026-10-08) 발표. 개인정보 보호, 과도한 의존 예방, AI 위험도 평가를 확정적 의학 판단으로 받아들이지 말 것 등을 권고함(검색 요약, 원문 확인 필요) → 한벗 정책 설계 시 필수 참고

#### C9. 닥터프레소 REDI
- 국가: 한국 / 상태: 운영 중(CES 2026 서울관 참가)
- 형태: AI 음성 일기 'REDI', 일상 발화의 비언어적 특성으로 미세한 감정 변화를 탐지·시각화
- 수상: FIX 2025 ICT 혁신상, MWC GLOMO 헬스·웰빙 부문 결선
- 본받을 점: 한국 스타트업이 음성 감정 변화를 "시각화"로 보여주는 UX
- 주의: 사용자 수·B2B 고객 등 정보 부족, 확인 필요
- 출처: [벤처스퀘어](https://www.venturesquare.net/1030259)

#### C10. 미스터마인드 말동무 인형
- 국가: 한국 / 시점: 2021년 기사 / 상태: 확인 필요
- 형태: 명령어가 아닌 감성 대화형 어르신 말동무 인형, 대화 정보로 감정 분석해 치매·우울·고독사 징후 조기 발견 목표(회사 주장)
- 본받을 점: 하드웨어 동반자 형태(향후 한벗의 기기 확장 참고)
- 주의: 현재 보급 현황 미확인
- 출처: [넥스트유니콘](https://www.nextunicorn.kr/content/147e1045c3a12075)

### D. 노인·외로움 음성 동반자

> 고령층은 한벗 대상에서 제외함. 이 절은 능동형 안부·기억·안전 구조 참고용으로만 둠.

#### D1. ElliQ (Intuition Robotics)
- 회사/국가: Intuition Robotics / 이스라엘·미국 / 상태: 운영 중
- 음성: 음성 우선 전용 기기, 사용자에게 먼저 말을 거는 능동형
- 기능: 복약 알림, 건강·통증 추적, 운동 제안, 웰니스 프로그램, 가족과 사진·메시지·통화, 수면·건강·행동 변화 시 돌봄자 알림
- 감정 인식: 명시 없음
- 안전: 의료기기 아님, 보호자·신뢰 연락처 연락 유도(낙상 후 딸에게 전화한 사례 후기)
- 가격: 12개월 프리미엄 구독 포함 월 결제(금액 미표기)
- 근거: 회사 설문(278명 중 173명 응답)에서 95.9% 외로움 감소, 97.6% 웰니스 향상. 뉴욕주 노인국(NYSOFA) 800명 이상 파일럿. 대조군 없음, 자가보고
- 본받을 점: 먼저 안부를 묻는 능동성, 가족 알림 연동
- 주의: 회사 설문 기반 수치는 마케팅용이며 응답률·대조군 문제가 있음. 한벗도 효과를 주장할 때 측정 설계가 필요함
- 출처: [공식 사이트](https://elliq.com/), [효과 측정 글](https://blog.elliq.com/measuring-the-efficacy-of-elliq)

#### D2. 효돌 (Hyodol)
- 회사/국가: 효돌 / 한국, 대표 김지희 / 상태: 운영 중, 2026년 미국 출시 목표
- 형태: 7세 손주 콘셉트 봉제 인형, ChatGPT 기반 대화, 복약·식사 알림, 노래·말벗
- 감정 인식: 가슴 마이크로 일일 체크인 답변을 녹음하고 Microsoft AI로 음성 로그의 기분 분석, 사회복지사 앱으로 기분 메모 전달. 목 적외선 센서가 24시간 무움직임 시 알림
- 데이터: 익명화 데이터 클라우드 3년 보관, 음성 녹음은 챗봇 학습에만 사용·판매 안 함(회사 주장). 수면·기분·식사·통증 등 기록은 사전 동의 후 복지사 공유(검색 요약)
- 가격: 대당 160만 원
- 지표: 1만 2천 대 이상(Rest of World), 약 1만 4,500대(AFP, 검색 요약), 구로구 412대
- 문제 사례: 사투리·불명확 발음 오인식, 부적절한 답변, 치매 노인이 로봇의 문구를 듣고 개울로 걸어간 사례 후 문구 삭제, 돌봄 인력 관리 부담 증가
- 본받을 점: 감정 분석 결과를 사용자에게 직접 판정하지 않고 돌봄자에게 "메모"로 전달하는 구조, 동의 기반 공유
- 주의: LLM 발화가 취약 사용자 행동을 유발할 수 있음 → 한벗도 발화 안전 필터와 사고 대응 절차가 필요함
- 출처: [Rest of World](https://restofworld.org/2025/korea-ai-robot-senior-care-hyodol/), [파이낸셜뉴스 등 국내 기사](https://www.fnnews.com/news/202009141647236405)(검색 요약)

#### D3. Meela
- 회사/국가: Meela / 미국 뉴욕 / 출시: 2025년 9월
- 음성: 정해진 시간에 AI가 일반 전화(유선·휴대폰)로 전화, 앱·기기 불필요
- 기억: 이름으로 인사하고 과거 대화 세부를 기억해 질문을 개인화
- 안전: 지속 다리 통증 같은 우려를 대시보드·알림으로 직원에게 플래그, HIPAA 준수 돌봄자 대시보드
- 고객: RiverSpring Living(일 2만 2천 명 서비스)
- 투자: 시드 350만 달러(Bain Capital Ventures)
- 지표: 초기 파일럿 90일 시점 50% 이상 지속 사용(회사 발표, 검색 요약)
- 현재 상태: 공식 홈페이지(meela.ai)가 현재 노인 대상 전화 컨시어지 서비스(차량·장보기·기술지원 대행, 연 $119 또는 월 $24)로 소개되어 있음 → 사업 전환 여부 확인 필요
- 본받을 점: 앱 설치 없는 전화 채널(디지털 취약층 접근성), 기억 기반 개인화
- 주의: 순수 정서 동반자만으로는 수익화가 어려워 실용 서비스로 확장한 것으로 보임(추정, 확인 필요)
- 출처: [HomeCare 기사](https://www.homecaremag.com/news/meela-launches-personalized-ai-companion-seniors), [공식 사이트](https://www.meela.ai/)

---

## 3. 공통 패턴 & 한벗 시사점

1. **"치료 아님 + 위기용 아님" 고지가 업계 표준임.** Sonia, Ash, Abby, Elomia, Ebb 모두 명시함. 한벗도 온보딩 동의 화면에 "상담·치료 아님, 위기 시 109" 문구를 고정하는 것이 바람직함. 2026-10 복지부 가이드라인과도 정합성을 맞춰야 함.
2. **장기 기억은 "안부를 다시 묻는" 데 쓰일 때 가치가 큼.** Ebb(힘든 주 다시 묻기), Ash(주간 패턴 인사이트), Meela(이름·가족 기억), Rosebud(유료 핵심 기능)가 공통으로 활용함. 한벗의 기억 기능은 "지난번 말한 일 어떻게 됐어?" 형태의 먼저 묻기로 설계하는 것이 효과적임.
3. **음성 감정 인식을 "진단·점수"로 쓰는 회사는 규제 벽에 부딪힘.** Kintsugi 폐업(FDA), Canary·Sonde의 "진단 아님" 프레이밍이 그 증거임. 한벗의 "혹시 속상한 거야?" 확인 질문 방식은 오인식 위험과 규제 위험을 동시에 줄이는 좋은 포지션이며 차별점으로 강조할 만함.
4. **감정 신호는 응답 톤 조정에 쓰는 사례가 늘고 있음.** Ellipsis Sage는 감정에 따라 말투를 바꾸고, 효돌은 결과를 돌봄자 메모로 돌림. 한벗도 emotion2vec+ 결과를 Typecast TTS 감정 톤·속도 조절에 연결하는 것을 검토할 만함.
5. **위기 대응은 "LLM과 분리된 독립 레이어 + 사람 연결"이 표준임.** Limbic Crisis Detection Engine, clare&me 모더레이션 API, SKT 위험 발화 → 상담사, 서울시 마음이 3단계가 그 예임. 다만 clare&me처럼 위험 감지 시 차단하는 방식은 피하고, 대화를 유지하면서 109 연결을 안내하는 방식이 바람직함.
6. **먼저 전화를 거는 능동형 음성은 주로 노인·고립층 서비스에서 쓰임.** ElliQ, Meela, clare&me, SKT·경기도 안부전화가 그 예임. 한벗(대학생·청년)은 사용자가 켠 경우에만 동의 기반 "예약 안부 콜"을 확장 기능으로 고려할 수 있음. 성인 사용자 대상이라 경기도식 "N회 미응답 시 보호자 알림"은 그대로 가져오지 않고, 미응답 처리 규칙만 명확히 정해야 함.
7. **한국어 음성 정서 동반자 시장은 공백이 큼.** 글로벌 앱(Ebb, Clare, Ash)은 영어 중심이고, 국내 서비스는 텍스트 상담(마인드카페·트로스트·마음이)이나 시나리오형 안부전화(SKT·KT·경기도)에 머묾. 자유 대화형 한국어 음성 + 감정 확인 + 기억을 결합한 서비스는 확인되지 않음. 다만 방언 발화 인식(KT 사투리 사전, 효돌 오인식 사례 참고)은 검증이 필요함.
8. **지속 가능성은 B2B·B2G 채널에서 나옴.** Youper 종료(2026-09), Meela 사업 전환 정황, 마인드카페·트로스트의 B2B·EAP 전환, Ebb의 2,000개 기업 공급이 그 근거임. 한벗도 지자체·기업 EAP·대학 상담센터 채널을 초기부터 검토할 필요가 있음.

---

## 4. 출처 목록

직접 열어 확인한 출처
- Sonia App Store: https://apps.apple.com/us/app/sonia-ai-for-mental-health/id6472111765
- Ash 공식: https://www.talktoash.com/
- Earkick LDV 인터뷰: https://www.ldv.co/blog/2022/3/30/can-ai-detect-and-identify-changes-in-our-well-being-meet-karin-andrea-stephan-of-earkick
- Earkick App Store: https://apps.apple.com/us/app/-/id1584854531
- Earkick 블로그: https://blog.earkick.com/
- Youper 공식: https://www.youper.ai/
- Talkspace Wysa vs Abby: https://www.talkspace.com/blog/wysa-vs-abby/
- Elomia Health Wikipedia: https://en.wikipedia.org/wiki/Elomia_Health
- clare&me Frontiers 논문: https://www.frontiersin.org/articles/10.3389/fdgth.2025.1576135/full
- Limbic Care 소개: https://limbic.ai/blog/introducing-limbic-care
- Rosebud TechCrunch: https://techcrunch.com/2025/06/04/rosebud-lands-6m-to-scale-its-interactive-ai-journaling-app
- Headspace Ebb HIT Consultant: https://hitconsultant.net/2025/12/08/headspace-updates-ebb-ai-with-voice-mode-and-enhanced-memory-to-deepen-mental-health-support/
- Kintsugi 폐업 BHB: https://bhbusiness.com/2026/02/11/mental-health-voice-biomarker-kintsugi-closes-makes-all-technology-and-research-public/
- Ellipsis Health HLTH: https://hlth.com/insights/news/ellipsis-health-raises-45m-to-launch-sage-an-emotionally-intelligent-ai-care-manager-2025-06-16
- Sonde Health: https://www.sondehealth.com/vocal-biomarkers-for-mental-fitness-scoring-and-tracking
- Canary Speech: https://canaryspeech.com/
- audEERING devAIce: https://www.audeering.com/devaice/
- Behavioral Signals: https://behavioralsignals.com/
- 마인드카페 유니콘팩토리: https://www.unicornfactory.co.kr/article/2025061915171098934
- 트로스트 유니콘팩토리: https://www.unicornfactory.co.kr/article/2023071808492546921
- HAII 마음검진 App Store: https://apps.apple.com/KR/app/id6462848390
- SKT 뉴스룸(2023 AI 안부확인): https://news.sktelecom.com/200115
- SKT 뉴스룸(2022 돌봄콜): https://news.sktelecom.com/175665
- SKT 멘탈 비전 토큰포스트: https://www.tokenpost.kr/news/tech/282874
- KT AI 돌봄 데일리안: https://www.dailian.co.kr/news/view/997770
- 경기도 AI 노인말벗 아주경제: https://www.ajunews.com/view/20240613102126012
- 서울시 마음이: https://news.seoul.go.kr/welfare/archives/576572
- 닥터프레소 벤처스퀘어: https://www.venturesquare.net/1030259
- 미스터마인드 넥스트유니콘: https://www.nextunicorn.kr/content/147e1045c3a12075
- ElliQ 공식: https://elliq.com/
- ElliQ 효과 측정: https://blog.elliq.com/measuring-the-efficacy-of-elliq
- 효돌 Rest of World: https://restofworld.org/2025/korea-ai-robot-senior-care-hyodol/
- Meela HomeCare: https://www.homecaremag.com/news/meela-launches-personalized-ai-companion-seniors
- Meela 공식: https://www.meela.ai/

검색 결과 요약으로만 확인한 출처(본문 미열람 또는 접속 차단)
- Ash HLTH: https://hlth.com/insights/news/slingshot-ai-launches-ash-first-ai-designed-specifically-for-therapy-with-93m-funding-2025-07-25
- Headspace Ebb Voice 도움말(403): https://help.headspace.com/hc/en-us/articles/44080195624859-What-is-Ebb-Voice
- Limbic 실사용 연구 BusinessWire: https://www.businesswire.com/news/home/20250310848349/en
- Limbic 음성 접수 에이전트 Fierce Healthcare: https://www.fiercehealthcare.com/health-tech/limbic-launches-voice-ai-agent-help-behavioral-health-orgs-patient-intake
- clare&me 투자 tech.eu: https://tech.eu/2024/08/08/ai-therapy-startup-clare-me-raises-3-7m/
- Rosebud 장기기억 도움말: https://help.rosebud.app/ai-analysis/long-term-memory
- Behavioral Signals Verdict: https://www.verdict.co.uk/behavioral-signals-ai-voice-emotion/
- 마인드카페 바이라인네트워크: https://byline.network/2024/04/04-107/
- HAII 와우테일: https://wowtale.net/2022/03/29/36842/
- 효돌 국내 기사: https://www.fnnews.com/news/202009141647236405
- 복지부 생성형 AI 가이드라인 관련: https://www.fnnews.com/news/202610080830222469
