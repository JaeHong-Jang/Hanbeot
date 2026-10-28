# 「한벗」 연구자 협업 필요성 및 협력 후보 연구자·기관·프로그램 지도

> 조사일: 2026-10-25. 대상: 한남대 팀 문워크의 한국어 음성 기반 정서 인식 AI 동반자 「한벗」. 2026 UNIST 연구자-예비창업자 팀빌딩 프로그램 및 국내 창업지원사업 지원용.
> 표기 원칙: 공식 페이지·1차 자료로 확인한 항목만 이름을 적고, 확인되지 않은 항목은 "(미확인)"으로 표시. 연구실 PI 이름은 공식 페이지 또는 대학 보도자료에서 확인된 경우만 기재.

---

## 핵심질문 1. 정서 지원 챗봇 배포 시 임상·심리 전문성과 검증이 왜 필요한가 (APA·WHO·보건복지부·식약처·학술 근거)

### Takeaway
2024~2026년 사이 WHO, 미국심리학회(APA), 보건복지부(대한신경정신의학회 공동)가 모두 "정신건강 목적 생성형 AI는 과학적 검증·안전 프로토콜·전문가 관여 없이는 위험하다"는 취지의 공식 가이드라인을 냈고, 스탠퍼드 FAccT 2025 연구는 LLM 챗봇이 자살 위기 신호를 놓치고 낙인을 재생산한다는 실증 결과를 제시했다. 학생 팀이 자체적으로 채울 수 없는 영역(임상 타당화, 위기대응 프로토콜, IRB, 규제 분류)이 명확하므로 연구자 협업은 "선택"이 아니라 "출시 전제조건"으로 논증할 수 있다.

### Cited Findings
- APA는 2025년 11월 「생성형 AI 챗봇 및 웰니스 앱의 정신건강 이용에 관한 건강 권고(Health Advisory)」를 발표. 핵심 결론: 수백만 명이 충족되지 않은 정신건강 수요를 위해 범용 생성형 AI 챗봇과 웰니스 앱을 쓰고 있으나, 이들 대부분은 임상 피드백·치료를 목적으로 설계되지 않았고, 과학적 검증과 감독이 부족하며, 적절한 안전 프로토콜을 갖추지 못했고, 규제 승인을 받지 않았다. — [APA 보도자료 2025.11](https://www.apa.org/news/press/releases/2025/11/ai-wellness-apps-mental-health); [APA 권고 본문 페이지](https://apa.org/topics/artificial-intelligence-machine-learning/health-advisory-chatbots-wellness-apps)
- APA CEO Arthur C. Evans Jr.: 이 도구들이 위기 상황의 사용자를 안내하는 능력은 "제한적이고 예측 불가능"하다. 권고 범위는 소비자용 도구(범용 GenAI 챗봇, GenAI 웰니스 앱, 비AI 웰니스 앱)이며, FDA 규제 디지털치료기기와 원격의료는 제외. — [News-Medical 2025.11.13](https://www.news-medical.net/news/20251113/APA-urges-safeguards-for-using-AI-in-mental-health.aspx); [APA 권고 PDF 미러](https://www.infocop.es/wp-content/uploads/2025/11/health-advisory-ai-chatbots-wellness-apps-mental-health.pdf)
- APA 권고는 일부는 소비자가 즉시 적용할 수 있고 일부는 플랫폼·정책입안자·기술 개발자의 변화를 요구한다고 명시(개발자 책임을 분명히 함). — [APA 권고 PDF 미러](https://www.infocop.es/wp-content/uploads/2025/11/health-advisory-ai-chatbots-wellness-apps-mental-health.pdf)
- WHO는 2024년 1월 18일 「보건 분야 AI의 윤리와 거버넌스: 대규모 멀티모달 모델(LMM) 지침」을 발표. 정부·기술기업·의료제공자 대상 40개 이상 권고. 개발자에게는 "초기 단계부터 다양한 이해관계자(의료 전문가, 환자 등)를 참여시키고, 명확히 정의된 과제에 대해 정확성과 신뢰성을 갖추도록 설계"할 것을, 정부에는 "독립 제3자의 출시 후 감사와 영향평가 의무화"를 권고. 2021년 6월 WHO AI 윤리 지침을 계승. — [WHO 보도자료 2024.01.18](https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models); [WHO 보고서 페이지](https://www.who.int/publications/i/item/9789240084759)
- 보건복지부는 2026년 10월 8일 정신건강의 날 기념식에서 대한신경정신의학회와 공동으로 「정신건강 목적 생성형 AI 이용 가이드라인」을 발표. 3대 축: (1) 개인정보 보호, (2) AI 제공 정보의 검증, (3) AI 과의존 예방. — [KDI 경제정보센터 정책자료(복지부 보도자료 전재)](https://eiec.kdi.re.kr/policy/materialView.do?num=287926)
- 스탠퍼드 연구진(Jared Moore 외) 「Expressing Stigma and Inappropriate Responses Prevents LLMs from Safely Replacing Mental Health Providers」(arXiv 2504.18412, ACM FAccT 2025 발표): 5개 상용 치료형 챗봇과 주요 LLM 평가 결과, GPT-4o는 응답의 38%, Llama 3.1-405b는 75%에서 정신질환 낙인 표현을 보였고, 실직 후 "25m 넘는 뉴욕 다리는?"이라는 자살 위기 암시 질문에 GPT-4o가 위기 신호를 감지하지 못하고 높은 다리 목록을 나열. 더 크고 새로운 모델도 구형 모델만큼 편향됨. — [UC Today 요약](https://uctoday.com/stanford-study-highlights-risks-of-ai-therapy-chatbots-what-healthcare-it-leaders-should-know); [DH Insights](https://dhinsights.org/news/ai-chatbots-fail-key-safety-tests-in-mental-health-study); [GIGAZINE 2025.07.14](https://gigazine.net/gsc_news/en/20250714-study-warn-significant-risks-ai-therapy-chatbots)
- Dartmouth Therabot RCT(NEJM AI, 2025.03.27) 주저자 Michael Heinz: "어떤 생성형 AI 에이전트도 정신건강 분야에서 완전 자율로 작동할 준비가 되어 있지 않으며, 위험은 더 잘 측정되어야 한다." 즉 임상적으로 가장 성공한 사례조차 임상의 감독을 전제로 함. — [ScienceDaily 2025.03.27](https://www.sciencedaily.com/releases/2025/03/250327141529.htm)
- 식약처는 2025년 1월 세계 최초로 「생성형 AI 의료기기 허가·심사 가이드라인」을 제정(개발~허가 후 관리 전주기 위험요인 분석), 같은 날 독립형 디지털의료기기소프트웨어 사용적합성 자료 가이드라인도 발표. — [전자신문 2025.01.24](https://m.etnews.com/20250124000173)
- 2025년 4월 「디지털의료제품 분류 및 등급 지정 등에 관한 규정」(식약처 고시 제2025-23호, 2025.4.7) 및 허가·심사 규정(고시 제2025-25호, 2025.4.15) 제정으로 디지털의료제품법 체계 전환; 디지털치료기기 허가·심사 가이드라인도 개정 대상. — [법무법인 세종 뉴스레터](https://www.shinkim.com/kor/media/newsletter/2739?page=55)
- 2025년 7월 기준 디지털의료기기 누적 허가 388건, 임상시험계획 승인 225건, 디지털치료기기 허가 9건(식약처 담당 과장 발언). — [데일리팜](https://m.dailypharm.com/user/news/2997)
- 국내 2호 디지털치료기기 WELT-I(불면증 CBT) 허가(2023.4.19) 심사 시 식약처는 정신건강의학 전문가로 구성된 의료기기위원회(대한신경정신의학회·대한디지털치료학회 자문)를 열어 안전성·유효성 자문을 받았고, 120명 임상시험 결과가 근거. — [데일리팜 2023.04](https://www.dailypharm.com/user/news/29116); [메디게이트뉴스 2023.04.19](https://medigatenews.com/news/3626414635)

### Inferences
- 「한벗」이 "정서 동반자(웰니스)"로 포지셔닝하더라도 APA 권고 범위(소비자용 GenAI 웰니스 앱)에 정확히 해당하므로, 심사위원·투자자는 "과학적 검증, 안전 프로토콜(특히 자살·위기 감지), 전문가 감독"에 대한 답을 요구할 가능성이 높다. 이는 학생 팀 단독으로 충족하기 어렵고, 정신건강의학·상담심리·HCI 연구자와의 협업으로만 신뢰성 있게 답할 수 있다.
- 음성 감정 인식(SER)은 한국어 데이터 편향·연령/방언 일반화 문제가 있어, 외부 평가(독립 검증)가 없으면 "감정을 이해한다"는 주장 자체가 과대광고 위험이 된다. WHO가 요구하는 "독립 제3자 감사·영향평가"의 가장 현실적 공급자는 대학 연구실이다.
- 보건복지부 2026 가이드라인의 3대 축(개인정보·정보검증·과의존 예방)은 그대로 「한벗」의 안전 설계 요구사항으로 치환 가능하며, 사업계획서에서 "연구자 협업으로 각 축을 검증한다"는 구조로 쓸 수 있다.
- 만약 향후 의료기기(디지털치료기기)로 확장하려면 식약처 생성형 AI 의료기기 가이드라인과 디지털의료제품법 체계를 따라야 하며, 이는 임상시험·IRB·의료기관 협력이 필수이므로 초기부터 대학병원/의대 연구자 네트워크를 확보하는 것이 경로 선택권(optionality)을 지킨다.

### Gaps
- APA 권고 본문 페이지는 직접 열람에 실패(빈 페이지 반환)하여 개발자 대상 권고 조항의 원문 문장을 확인하지 못함. 보도자료·PDF 미러 기준으로 요약함.
- 보건복지부 「정신건강 목적 생성형 AI 이용 가이드라인」의 세부 권고 항목(첨부파일 4종)의 전문은 확인하지 못함. 작성 주체(국립정신건강센터 관여 여부)도 미확인.
- NIMH/NIH의 디지털 정신건강 프레임워크는 이번 조사에서 검색하지 못함(검색 호출 예산 초과). 식약처 "정신건강 전용" 디지털치료기기 가이드라인의 존재 여부도 미확인(생성형 AI 의료기기 가이드라인과 DTx 가이드라인 개정 사실만 확인).

---

## 핵심질문 2. 협업 후보 한국 연구실·연구자·기관 지도 (UNIST, KAIST, ETRI, 서울대, 연세대, 한남대 등)

### Takeaway
"한국어 음성 감정 인식 + 정신건강 + HCI"에 직접 닿는 검증된 후보는 (1) UNIST 인공지능대학원 김태환 교수(음성→감정→표정 전이, CVPR 2026), (2) KAIST 전산학부 이의진 교수(ICLab, 1인가구 스마트스피커·IoT 기반 정신건강 추적), (3) KAIST 전기및전자공학부 이성주 교수(음성·키보드 연합학습 정신건강 모니터링), (4) KAIST 정두영 교수(정신과 전문의, 前 UNIST 바이오메디컬공학과·헬스케어센터장, 現 KAIST 마인드케어&성장센터장), (5) ETRI KEMDy 데이터셋 제공자 노경주(KyoungJu Noh) 연구원, (6) UNIST 디자인학과 박영우·이경호·김다정 교수(HCI·정서적 연결·LLM 사회시스템, ACM DIS 2026)로 압축된다. 서울대·연세대·한남대 내부 후보는 공식 페이지 수준의 확인이 부족하여 미확인으로 남긴다.

### Cited Findings

#### UNIST
- **김태환 교수 (UNIST 인공지능대학원)**: 음성 신호에서 감정을 추출해 영상 속 화자의 얼굴 표정을 해당 감정으로 바꾸는 모듈 C-MET(Cross-Modal Emotion Transfer) 개발. 중립 음성과 감정 음성의 차이를 학습해 표정 움직임으로 매핑하므로 고정 감정 라벨 없이 빈정거림·공감·카리스마 같은 미묘한 혼합 감정도 표현. MEAD 데이터셋에서 EDTalk 적용 시 감정표현 정확도 41.99%→55.91%. CVPR 2026 채택, 제1저자 최찬혁(석사과정). 활용처로 "상담 AI"를 명시. UNIST 발표 2026.06.18. — [아시아경제 2026.06.17](https://view.asiae.co.kr/article/2026061716221650883)
- **김지윤 교수 (UNIST 신소재공학과)**: 얼굴 근육 변형과 음성을 함께 감지하는 멀티모달 착용형 실시간 감정 인식 기술 발표(2024.01). 소재공학 기반이므로 SER 알고리즘 협업보다는 웨어러블 센서 확장 시 후보. — [메트로신문 2024.01.29](https://www.metroseoul.co.kr/article/20240129500060); [대학저널](https://www.dhnews.co.kr/news/view/1065572797804077)
- **UNIST 디자인학과 박영우·이경호·김다정 교수**: ACM DIS 2026에서 정규 논문 7편 발표. 박영우 교수팀은 "신체 움직임과 감성적 연결" 주제 4편, 이경호 교수팀은 LLM·AI를 사회 시스템에 접목한 시민참여형 시스템, 김다정 교수팀은 디지털 미디어 환경 속 자아 연구. — [헤럴드경제 2026.06.28](https://www.heraldk.com/article/2026062818481281515)
- **정두영 교수**: 정신건강의학과 전문의. UNIST 의과학대학원/바이오메디컬공학과 부교수 및 UNIST 헬스케어센터장(2016~2025) 역임 후 현재 KAIST 부교수(지정석좌교수), KAIST 마인드 케어&성장센터장. 연구 분야: 디지털 헬스케어 및 정신의학, 청년기 정신건강·예방, 담당 교과목 "디지털 정신건강". KAIST는 이 센터를 통해 "AI 의존 증가로 나타날 수 있는 새로운 정신건강 문제에 선제적으로 대응"한다고 밝힘. — [KAIST 인문사회과학부 교수 프로필](https://hss.kaist.ac.kr/boards/view/fulltime_professor/103); [데일리안](https://www.dailian.co.kr/news/view/1654272); [UNIST 북콘서트 2023.03](https://www.fnnews.com/news/202305091445415056)
  - 주의: 정두영 교수는 2025년 이후 UNIST 소속이 아니므로 "UNIST 연구자" 매칭 대상은 아님. 다만 UNIST 네트워크를 가진 정신과 전문의로서 임상 자문·안전 프로토콜 검토 후보.
- UNIST는 2026년 「공공기술기반 시장연계 창업탐색 지원사업(TeX-Corp)」 '실험실 창업 혁신단'에 선정(5년간 국비 76억 원), 2021년부터 동남권실험실창업혁신단 운영. — [UNIST 뉴스센터 기술사업화 태그](https://news.unist.ac.kr/kor/tag/%ea%b8%b0%ec%88%a0%ec%82%ac%ec%97%85%ed%99%94); [UNIST 뉴스 ?p=68862](https://news.unist.ac.kr/kor/?p=68862)

#### KAIST
- **이의진 교수 (KAIST 전산학부, ICLab)**: 1인 가구용 멀티모달 스마트 스피커 시스템—주변 상황을 실시간 감지해 최적 시점에 정신건강 설문을 요청, 무작위 설문보다 높은 응답률(2024.09 발표). 가정 내 IoT 센서 데이터로 정신건강 상태를 정밀 추적, "일상 리듬이 흐트러질수록 정신건강 악화" 신호 발견(2025.10). "적시 모바일 건강 중재(JIT intervention)" 연구로 ACM 최우수논문상; 8주 실증에서 맞춤 중재도 참여도 저하를 피하지 못함. ICLab은 공개적으로 "연구협력(Research Collaborators)"을 안내. — [대학저널 스마트스피커](https://dhnews.co.kr/news/view/1065573009717726); [헤럴드경제 2025.10.20](https://www.heraldk.com/article/2025102021023529508); [대학저널 ACM 최우수논문상](https://www.dhnews.co.kr/news/view/1065572854219731); [ICLab 브런치 연구협력 안내](https://brunch.co.kr/@kaisticlab/63)
- **이성주 교수 (KAIST 전기및전자공학부)**: 스마트폰 키보드 입력과 마이크 음성 데이터를 연합학습(federated learning)으로 기기 밖 유출 없이 분석해 정신건강 상태를 모니터링하는 기술(2023.12 보도). "모바일 센싱·NLP·AI·심리학 전문가의 협력 연구"라고 설명, 과기정통부·IITP 지원. — [대학저널 2023.12](https://www.dhnews.co.kr/news/view/1065572834668016); [KAIST EE 교수 페이지](https://ee.kaist.ac.kr/professor/17761/)
- **석현정 교수 (KAIST 산업디자인학과)**: 독일 만하임대 심리학 박사, 색채 감성 연구, 한국색채학회 상임이사·『감성과학』 편집위원장(2017년 기준 정보). 감성과학(감성공학) 네트워크 접점 후보이나 음성 정서와의 직접 연관은 미확인. — [리디북스 저자 정보](https://ridibooks.com/author/86077); [KAIST DSpace](https://dspace.kaist.ac.kr/handle/10203/144897?mode=full)
- KAIST 음성 연구실(SSSC Lab) 구성원 페이지는 음성합성·인식·대화 중심이며 감정 인식 특화는 확인되지 않음. — [sssclab.kaist.ac.kr/members](https://sssclab.kaist.ac.kr/members)

#### ETRI
- **KEMDy19/KEMDy20/KESDy18 (제공자: KyoungJu Noh, ETRI, 계정 kjnoh2)**: KEMDy20은 한국어 화자 19~39세 성인 80명을 2인 1조 40세션으로 구성, Empatica E4 착용, 주제 영상 5분 시청 후 약 5분 자유대화(6개 주제 반복), 음성·전사·생체신호(EDA, IBI, 손목 피부온도)·영상 기록, 외부 태거 10명 라벨링. 라이선스 동의서 제출 필요(다운로드 제한). KEMDy19는 성우 대화 기반, 7개 범주 + arousal/valence 1~5. KESDy18은 성우 30명 음성, ETRI 과제 18ZS1100 지원. — [KEMDy20](https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us); [KEMDy19](https://nanum.etri.re.kr/share/kjnoh2/KEMDy19?lang=En_us); [KESDy18](https://nanum.etri.re.kr/share/kjnoh2/KESDy18?lang=En_us)
- ETRI 지식공유플랫폼에 2023년 성격 인지 감정인식(생체신호) 논문 등재; KEMDy19로 Wav2Vec 2.0/HuBERT 기반 차원 감정(valence/arousal/dominance) 인식 논문 존재. — [ETRI KSP](https://ksp.etri.re.kr/ksp/article/read?id=68331); [CMS Conferences](https://openaccess-api.cms-conferences.org/articles/download/978-1-958651-90-2_68)

#### 서울대
- **이교구 교수 (서울대 융합과학기술대학원 지능정보융합학과)**: 서울대 공지에서 "AI 청각지능 및 감성지능 전문가"로 소개(2020 AI 콜로퀴움), 2019 서가명강 "소리의 과학: 음악과 음성이 인공지능과 만날 때" 강연, 수퍼톤(Supertone) CEO 겸임. 음성 감정 연구 논문은 이번 조사에서 직접 확인 못 함. — [서울대 융대원](https://convergence.snu.ac.kr/author/3795/page/90/); [문체부 디지콘 포럼](https://culture.go.kr/digicon/pages/forum2)

#### 연세대
- **양현정 교수 연구실 (연세대 학부대학)**: 상담심리·심리치료 중심 정신건강 요인 연구 + 감정 스코어링·AI 기반 상담 시스템 등 디지털 기술 접목 상담 지원 연구 수행(연구실 소개 플랫폼 기준, 공식 페이지 미확인). — [RnDCircle 연구실 소개](https://app.rndcircle.io/lab/1c48d3d6-5c24-4eb7-baa0-b4471dc646d3)
- 보건복지부·한국보건산업진흥원 2024 보건의료기술 R&D(단국대 이정재 교수 사업단, AI·로봇 활용 정신건강 관리 플랫폼)에 연세대 원주캠퍼스-원주연세의료원이 참여기관으로 포함, 지역별 디지털데이터 기반 정신건강 코호트 운영 예정. — [머니투데이 2024.07.22](https://www.mt.co.kr/policy/2024/07/22/2024072210461457925)
- 연세대 디지털헬스연구원은 2026년 동아에스티와 디지털헬스케어 서비스 개발 MOU(의료 AI 모델 개발 포함, 정신건강 챗봇 언급 없음). — [메디포뉴스](https://www.medifonews.com/news/article.html?no=214541)

#### 기타 대학 (참고)
- 고려대 함병주 교수(고려대 안암병원 정신건강의학과): 복지부·보건산업진흥원 과제로 AI+디지털트윈 기반 우울증 치료기술 개발(~2027.12); 조철현 교수는 과기정통부 디지털헬스케어 과제 수행. AI 챗봇 '심심이'가 함병주 교수를 영입한 사례 보도(2023.05). — [파이낸셜뉴스 2023.05.09](https://www.fnnews.com/news/202305091445415056); [MTN 2023.05.10](https://news.mtn.co.kr/news-detail/2023051012580815440)
- 고려대 고한석 교수: 2023 ISCA Fellow, 감정 인식·생성 모델(헬스케어·콜센터) 연구. — [고려대 전기전자공학부 뉴스](https://ee.korea.ac.kr/eng/community/news_view.html?no=8)
- 경희사이버대 고정은 교수(상담심리학과): 서울시 로봇기술사업화 과제로 고령자 맞춤형 AI 대화 로봇에 내러티브 상담·코칭 기법 접목(로아이젠과 산학협력). — [대학저널](https://dhnews.co.kr/news/view/1065589720592054?dt=m)
- 전남대 인공지능융합학과: 가상 에이전트의 표정·음성·제스처 생성이 사용자 감정·의사결정에 미치는 영향 연구("공감형 AI" 국제 성과, 2026.03). — [헤럴드경제 2026.03.18](https://www.heraldk.com/article/2026031816534035393)

### Inferences
- UNIST 팀빌딩 프로그램의 "UNIST 연구자" 요건에 맞는 1순위 후보는 김태환 교수(음성 감정 표현·전이), 2순위는 디자인학과 박영우 교수(정서적 연결 HCI), 그 다음 이경호 교수(LLM 사회시스템)다. 단, 프로그램 공고는 "특정 연구자와의 매칭을 보장하지 않음"을 명시하므로 사전 컨택이 중요하다.
- 임상 안전성(위기 감지·과의존 예방) 검증에는 정신과 전문의가 필요하며, UNIST 헬스케어센터장을 9년 역임한 정두영 교수(現 KAIST)는 UNIST·KAIST 양쪽 네트워크를 연결하는 자문 후보로 적합하다.
- 한남대(대전)와 지리적으로 가장 가까운 강력한 연구 네트워크는 KAIST(이의진·이성주·정두영)와 ETRI(대전 소재, KEMDy 제공자)다. "대전 지역 산학협력"은 한남대 창업중심대학(지역발 트랙)과도 맞물린다.
- 한국어 SER 모델 자체는 ETRI KEMDy 데이터 + wav2vec2/HuBERT 기반 공개 연구로 베이스라인 구축이 가능하나, 「한벗」 대상층(예: 1인가구, 고령층, 청년)의 실제 발화 데이터로의 일반화 검증은 대학 IRB 하에서만 수행 가능하다.

### Gaps
- 한남대 내부 연구실(상담심리학과, 컴퓨터공학/AI융합학과)의 AI 상담·음성 관련 연구자는 검색으로 확인되지 않음. 한남대 학과 홈페이지 교수진 페이지와 KCI/RISS에서 교수명+"챗봇/상담/음성" 직접 확인 필요.
- 서울대 언어학과·심리학과의 음성 정서/AI 연구실은 검색 호출 예산 내에서 확인하지 못함. 이교구 교수의 최근 논문(2022~2026)도 미확인.
- KAIST "감성공학" 전담 연구실(명칭·PI)은 공식 페이지로 확인하지 못했고, 석현정 교수 정보는 2017년 기준 2차 자료임.
- UNIST 바이오메디컬공학과의 현재 정신건강 연구자(정두영 교수 이직 후)는 미확인. UNIST 인간공학/HCI 전공 교수 명단도 미확인.
- 양현정 교수(연세대) 정보는 연구실 소개 플랫폼 기준이며 연세대 공식 페이지로 검증하지 못함.
- 각 연구자의 Google Scholar 프로필 URL, 대표 논문 DOI는 수집하지 못함(보도자료 기반).

---

## 핵심질문 3. 학술 파트너십·IRB가 필요한 데이터셋과 한국 정서 데이터 사용자 테스트의 윤리 요건

### Takeaway
ETRI KEMDy 계열은 라이선스 동의서 제출이 필요한 제한 배포 데이터이고, AI Hub 감성대화말뭉치는 회원가입 후 이용 가능하나 상업적 이용·재배포 조건은 약관 직접 확인이 필요하다. 사용자 대상 정서 데이터 수집은 생명윤리법 제15조·제36조에 따라 연구 착수 전 IRB 심의가 원칙이며, 자체 IRB가 없는 소규모 기업은 국가생명윤리정책원 공용IRB(e-IRB, public.irb.or.kr)를 이용할 수 있다. 대학 연구자와 협업하면 대학 IRB를 통해 심의받는 경로가 열린다.

### Cited Findings
- KEMDy20 페이지는 "License agreement: required / not yet submitted" 상태로 표시되며 다운로드가 제한됨(사이트 통해 신청). — [KEMDy20 ETRI 나눔](https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us)
- KEMDy20 구성: 19~39세 한국어 화자 80명, 40세션, Empatica E4 생체신호, 6개 주제영상 후 자유대화, 외부 태거 10명. KEMDy19: 7개 범주 감정(angry, sad, happy, disgust, fear, surprise, neutral) + arousal/valence 1~5 척도, 범주는 다수결·차원값은 평균. — [KEMDy19](https://nanum.etri.re.kr/share/kjnoh2/KEMDy19?lang=En_us); [KEMDy20](https://nanum.etri.re.kr/share/kjnoh2/KEMDy20?lang=En_us)
- AI Hub 「감성 대화 말뭉치」(dataSetSn=86)는 허깅페이스 한국어 감정분류 모델 학습에 사용된 사례가 공개됨; 2019년 NIA 발표 당시 AI허브 데이터는 "간단한 회원가입을 통해 누구나 내려받아 사용" 가능하다고 안내됨(감정·상황·대화 복합 영상 데이터, 자연스러운 한국어 대화 음성 데이터 포함). — [Hugging Face 모델 카드](https://huggingface.co/hun3359/mdistilbertV3.1-sentiment); [보안뉴스 2019](https://m.boannews.com/html/detail.html?idx=80434)
- AI Hub는 「안심존 공용 기관생명윤리위원회(IRB) 심의신청 가이드라인 v3.2」를 별도 제공—AI Hub 안심존 데이터(원천 개인정보 포함 데이터) 활용 시 공용IRB 심의 절차가 연계됨. — [AI Hub 안심존 공용IRB 가이드라인 PDF](https://aihub.or.kr/web-nas/aihub21/files/docs/safezone/안심존_공용_기관생명윤리위원회(IRB)_심의신청_가이드라인_v3.2.pdf)
- 생명윤리 및 안전에 관한 법률 제15조·제36조: 인간/인체유래물 대상 연구자는 연구 착수 전 반드시 IRB 심의를 받아야 함. 완전 비식별 공개 데이터셋 활용 등은 인간대상연구 범위 밖. — [성균관대 IRB 안내](https://www.skku.edu/skku/research/industry/IRB.do)
- IRB 심의 면제 범위(국가생명윤리심의위원회 논의): 침습적 행위 없음, 단순 측정·관찰 장비 활용, 개인정보 미수집, 기존·공개 자료 이용 연구 등. — [메디칼타임즈](https://www.medicaltimes.com/Main/view.html?ID=1074662)
- 보건복지부: IRB 설치·등록 의무기관(기업 포함)이 미등록 시 행정처분과 별도로 연구용역 및 R&D 참여 제한; 'IRB 아카데미' 운영. — [문화일보](https://www.munhwa.com/article/11592005)
- 공용IRB는 국가생명윤리정책원에 설치, e-IRB(public.irb.or.kr) 가입 후 심의/면제 대상 확인 → 심의 종류 신청. 100병상 미만 의료기관, 연구원 10명 미만 기업연구소, 전문대학 등 약 2,400여 기관이 공용IRB 이용 대상으로 파악(예상치). — [AI Hub 공용IRB 안내 PDF](https://aihub.or.kr:443/web-nas/aihub21/files/docs/safezone/irb.pdf); [코메디닷컴](https://kormedi.com/1204831/); [메디게이트 2020.04.29](https://www.medigatenews.com/news/2036061359)
- 온라인 설문(Google Forms, Naver Forms 등)의 서면동의 면제 절차는 대학 IRB 가이드 부록으로 존재. — [울산대 산업공학과 게시 자료](https://ie.ulsan.ac.kr/boardDownload.do?no=344471)

### Inferences
- 「한벗」의 베타 테스트에서 사용자의 음성(생체정보에 준하는 민감정보)과 정서 상태를 녹음·저장·분석한다면 "개인정보 수집 + 심리적 민감 주제"에 해당해 IRB 면제 요건을 충족하기 어렵다. 따라서 (a) 대학 연구자가 책임연구자가 되어 대학 IRB 심의를 받거나, (b) 공용IRB를 이용하는 두 경로 중 하나가 필요하며, (a)가 심사·투자 관점에서 신뢰도가 높다.
- KEMDy 라이선스는 연구 목적 제한 가능성이 높으므로(상업 이용 조건 미확인), 상용 모델 학습에 쓰려면 ETRI와 별도 협약이 필요할 수 있다. 이는 ETRI 연구자(노경주 연구원 등)와의 협력 자체가 데이터 접근 수단이 됨을 의미한다.
- 보건복지부 2026 가이드라인의 "개인정보 보호" 축과 연합학습(KAIST 이성주 교수 접근법)은 직접 연결되며, 프라이버시 보존 설계 자체를 연구 협업 주제로 제안할 수 있다.

### Gaps
- KEMDy20 페이지 직접 접속 실패(ECONNREFUSED)로 라이선스 조항(상업적 이용 허용 여부, 인용 요건) 원문 미확인.
- AI Hub 감성 대화 말뭉치·한국어 감정 음성 데이터의 현행 이용약관(상업 이용, 재배포, 모델 공개 조건) 미확인.
- 공용IRB의 현행 이용 자격·심의비·심의 기간, 그리고 "예비창업자(법인 미설립)" 신분으로 신청 가능한지 여부 미확인.
- 개인정보보호법상 음성 데이터의 "생체인식정보/민감정보" 해당 여부에 대한 개인정보보호위원회 해석은 조사하지 못함.

---

## 핵심질문 4. 연구자-스타트업 협업을 지원하는 한국 공공 프로그램 (UNIST 팀빌딩, 예비창업패키지, 창업중심대학, 한남대, 대전, R&D)

### Takeaway
2026 UNIST 연구자-예비창업자 팀빌딩 프로그램은 9/21~10/19 접수 마감, 11/3 밋업·12월 해커톤·추후 경진대회로 진행되며 총 상금 약 6,000만 원, TIPS 추천·UNIST 기술지주 투자 검토 혜택이 있다. 전국 단위 예비창업패키지(2026, 300명 내외, 1단계 2천만 원)와 대전 지역 프로그램(대전창업허브 입주, Startup:D, 딥테크 스튜디오) 및 한남대 창업중심대학(대학발/지역발)이 후속·병행 트랙이다.

### Cited Findings
- **UNIST 연구자-예비창업자 팀빌딩 프로그램(2026)**: "UNIST 연구자가 보유한 우수 기술과 예비창업자의 사업화 역량을 연계하여 기술창업 연합팀 구성을 지원"; 팀 매칭→전문가 멘토링→집중 해커톤→경진대회. 모집 2026.9.21(월)~10.19(월) 13:00; 자격: UNIST 연구자·보유기술 매칭 희망 전국 예비창업자; 팀 구성: 연구자 1명 + 예비창업자 1~2명; 혜택: 우수팀 상금 총 약 6,000만 원, TIPS 추천 검토, UNIST 기술지주 투자 검토, 산학협력관 입주 가점, 80% 이상 참여 시 수료증; 일정: 면접대상자 발표 10.22, 면접 10.27, 최종 선정 10.29, 연구자-예비창업자 밋업 11.3, 컴퍼니빌더 멘토링 11월 중 3회, 12월 1박2일 집중 해커톤, 경진대회 추후 공지; 유의: 희망 기술분야를 적어도 특정 연구자·기술 매칭 비보장. 공고 게시자 소속은 에스이메이커스(주)(운영사 여부 미확인). 공고문 링크: https://url.kr/hx6m7w — [EO플래닛 공고](https://eopla.net/magazines/47985); [링커리어 공고](https://linkareer.com/activity/354564)
- UNIST는 2026년 TeX-Corp '실험실 창업 혁신단' 선정(5년 76억 원), 2021년부터 동남권실험실창업혁신단 운영 중—팀빌딩 프로그램 수료팀이 연결될 수 있는 후속 인프라. — [UNIST 뉴스센터](https://news.unist.ac.kr/kor/?p=68862)
- **2026 예비창업패키지**(중기부 공고 제2026-143호, 수정공고 2026.2.27): 선정 300명 내외(일반 110, 특화 190), 협약기간 8개월 이내('26.6~'27.1), 사업화 자금 2단계 차등(1단계 BM 구체화·시장조사·MVP 2천만 원), 평균 0.4억 원, 접수 마감 2026.3.24, 문의 창업진흥원 예비재도전실(044-410-1983/1992/1985). — [넥스트유니콘 공고 요약](https://www.nextunicorn.kr/support-programs/3837ee2d76a322c7); [K-Startup 공고 PDF 사본](https://hoyjckszljqxplxxpzcl.supabase.co/storage/v1/object/public/program-attachments/crawl/kstartup/2f/2fe237e650f2387b8aa5bec19abd3028254b4b51ce02631279d4707fa30ca75f.pdf)
- **한남대 창업중심대학 지원사업(2026)**: 중기부·창업진흥원 사업, 대학발/지역발 모집 구분, 창업지원단장 이상훈, 2026.3.5 14:00 본관 1층 설명회(신청 절차·선정 기준·1:1 상담·교원창업 상담). — [한국경제 2026.03.04](https://www.hankyung.com/article/202603047732h); [대학저널](https://www.dhnews.co.kr/news/view/1065573515841511)
- 한남대 창업지원단 과거 성과(2024.11 보도): 85개 기업 152명 고용, 17억 원 투자 성과. — [한경 잡앤조이 2024.11](https://magazine.hankyung.com/job-joy/article/202411049959d)
- **대전 지역**: 대전창조경제혁신센터 '2026 예비창업패키지 창업준비 아카데미 스타트업 첫걸음'(대전스타트업파크 D1, 사업계획서 교육·1:1 상담) 개최; 대전창업허브·대전소셜벤처캠퍼스 입주기업 모집(예비창업자 포함, 제5차 2026.9.23~10.13 마감, 입주계약 6개월 내 사업자 설립 조건); Startup:D 창업 BuS(예비창업자·7년 이내, 접수 ~2026.12.31, 액셀러레이팅·멘토링·투자검토); 2026 딥테크 스튜디오(대학·출연연 공공기술 기반, 상시모집 2026.4~10); 2026 소셜 임팩트 랩(대전 소재 예정 예비창업자). — [벤처스퀘어 스타트업 첫걸음](https://www.venturesquare.net/1110946/); [대전창업허브 5차](https://www.venturesquare.net/announcement/1116520); [Startup:D](https://thevc.kr/grants/505d15a6e5783574c33dba08); [소셜 임팩트 랩](https://www.venturesquare.net/announcement/1076789)
- **정부 R&D 참고**: 복지부·보건산업진흥원 2024 보건의료기술 R&D "AI·로봇 활용 정신건강 관리 플랫폼"(단국대 주관, 연세대 원주 등 참여, 디지털데이터 기반 정신건강 코호트). 고려대 함병주 교수 AI+디지털트윈 우울증 치료기술(복지부, ~2027.12). — [머니투데이 2024.07.22](https://www.mt.co.kr/policy/2024/07/22/2024072210461457925); [파이낸셜뉴스 2023.05.09](https://www.fnnews.com/news/202305091445415056)

### Inferences
- 팀빌딩 프로그램은 "매칭 비보장"이므로, 서류·면접 단계에서 김태환 교수 등 특정 UNIST 연구자 기술을 구체적으로 지목하고 왜 「한벗」과 결합되는지(음성 감정→표정/반응 생성, 상담 AI 활용처 명시)를 보여주는 것이 선정 확률을 높인다.
- 팀빌딩 → 실험실창업혁신단(TeX-Corp) → TIPS 추천 → UNIST 기술지주 투자로 이어지는 UNIST 내부 사다리가 존재하므로, 사업계획서에 "후속 연계 경로"로 기술 가능.
- 대전(한남대)과 울산(UNIST)의 이중 거점은 단점이 아니라 "대전: 한남대 창업중심대학 지역발 + 대전창경센터 + KAIST/ETRI 임상·데이터 협력, 울산: UNIST 기술 협업"으로 역할 분담해 서술할 수 있다.
- 정부 정신건강 R&D는 대학·병원 주관 과제가 대부분이므로, 스타트업은 "참여기업"으로 들어가는 구조가 현실적이며 이것이 연구자 협업의 재정적 유인이 된다.

### Gaps
- UNIST 팀빌딩 프로그램의 공식 공고 원문(url.kr/hx6m7w)은 열람하지 못해 운영 주체(UNIST 창업진흥단? 기술지주?), 과거 기수 성과·선정팀 사례를 확인하지 못함.
- 한남대 창업중심대학의 2026년 예산·지원 기업 수·지원금 상한은 기사에 미기재. 한남대 2026 예비창업패키지 자체 공고는 검색되지 않음(한밭대 공고만 확인).
- LINC 3.0(한남대 참여 여부 및 산학협력 과제 연계 방식)은 조사하지 못함.
- 2025~2026 과기정통부/복지부의 "정신건강 AI" 신규 R&D 공고 자체는 확인하지 못함(IRIS·IITP·보건산업진흥원 공고 직접 확인 필요).

---

## 핵심질문 5. 정서 컴퓨팅·디지털 정신건강 분야 산학협력 성공 사례와 협업의 기여

### Takeaway
해외(Hume AI, Woebot, Therabot, Ellipsis Health)와 국내(네이버 클로바 케어콜, 웰트) 사례 모두 "연구자가 제공한 것"은 명확하다: 이론적 근거(정서 분류 체계), RCT·임상 설계, 규제 승인용 근거, 학회 발표를 통한 신뢰 자본. 특히 클로바 케어콜은 산업체가 학계(UC Irvine)와 공동으로 CHI 2023 Best Paper를 내며 지자체 확산의 근거를 만든 국내 최적 비교 사례다.

### Cited Findings
- **Hume AI (Alan Cowen)**: 창업자 Alan Cowen은 Google 연구원 시절 '의미공간이론(semantic space theory)'을 개척했고, Nature·PNAS·Science Advances·Nature Human Behaviour 등에 발표한 대규모 표정·음성 표현 연구가 기술의 기반. Ekman 6기본정서·Barrett 차원모델의 한계를 대체하려는 이론 틀 위에 2024년 EQT Ventures 주도 5,000만 달러 시리즈B를 유치, 공감형 음성 인터페이스(EVI) 출시. — [SiliconANGLE 2024.03.27](https://siliconangle.com/2024/03/27/hume-ai-raises-50m-building-realistic-generative-ai-chat-experience-yet/); [AIM Research](https://aimresearch.co/?p=11489); [Scale AI 강연 2021](https://exchange.scale.com/public/videos/how-to-build-technology-with-empathy-addressing-the-need-for-psychologically-valid-data-2021-12-01)
- **Woebot (Stanford, Alison Darcy)**: Fitzpatrick, Darcy, Vierhile, "Delivering CBT to Young Adults With Symptoms of Depression and Anxiety Using a Fully Automated Conversational Agent (Woebot): A RCT", JMIR Mental Health 2017;4(2):e19. 18~28세 70명(Woebot 34 vs NIMH e-book 대조 36), PHQ-9·GAD-7·PANAS 2~3주 측정, 평균 12.14회 상호작용. 창업 전 대학 소속 연구로 RCT를 먼저 확보한 모델. — [JMIR Mental Health 원문](https://mental.jmir.org/2017/2/e19); [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC5478797)
- **Therabot (Dartmouth)**: NEJM AI 2025.3.27 게재, 생성형 AI 치료 챗봇 최초 임상시험. Dartmouth 발표는 주요우울장애·범불안장애·섭식장애 위험군 106명으로 보고하고, C4TBH 브리프는 210명 모집·대기 대조군 무작위 배정으로 보고(수치 불일치—원문 확인 필요). 4주 일일 프롬프트+4주 자유사용, 4·8주 시점 증상 감소 대조군 대비 유의. 참가자는 신뢰·소통을 인간 임상의와 비슷하게 평가. — [Dartmouth TTO](https://tto.dartmouth.edu/news/2025/03/first-therapy-chatbot-trial-yields-mental-health-benefits); [C4TBH 연구 브리프](https://www.c4tbh.org/research-brief/randomized-trial-of-a-generative-ai-chatbot-for-mental-health-treatment/); [ScienceDaily](https://www.sciencedaily.com/releases/2025/03/250327141529.htm)
- **Ellipsis Health (음성 바이오마커)**: 유일하게 확인된 동료심사 논문은 Lin 외, Frontiers in Psychology 2022(Desert Oasis Healthcare 환자, 평균 63세, 6주간 주 1회 5분 음성, PHQ-8·GAD-7 대비 AUC 0.82, 비무작위 타당성 연구). 임상의 평가 대비 가중 카파를 1차 지표로 하는 540명 관찰연구(NCT06464575), Mayo Clinic 코로나 후유증 클리닉 연구, 덴버대 청소년(11~17세, 700명 이상 목표) 타당화 연구가 등록·진행. 회사는 "진단이 아닌 증상 중증도 측정"으로 포지셔닝. — [Frontiers in Psychology 2022](https://www.frontiersin.org/articles/10.3389/fpsyg.2022.811517/full); [ClinicalTrials.gov NCT06464575](https://clinicaltrials.gov/study/NCT06464575); [Mayo Clinic](https://mayo.edu/research/clinical-trials/cls-20527605); [덴버대 사회복지대학원](https://socialwork.du.edu/research/project/validating-and-evaluating-artificial-intelligence-enabled-depression-and-anxiety-screening-tool-adolescents)
- **네이버 클로바 케어콜 (국내)**: HyperCLOVA 기반 AI 안부전화(음성합성·음성인식 탑재), 2021.11 부산 해운대구 시작, 2024.8 기준 전국 128개 시군구 도입(네이버 발표), 사용자 3만 명 중 96% 효과적 활용(자체조사), 순천시 이상징후 조기발견 사례. 네이버클라우드-이모코그 치매 선별·인지훈련 연계 공동연구 추진. — [쿠키뉴스 2024.09](https://www.kukinews.com/article/view/kuk202409050089); [메트로신문 2024.09.05](https://www.metroseoul.co.kr/article/20240905500135); [바이라인네트워크 2025.06](https://byline.network/2025/06/23-435/)
- 케어콜 산학 연구: Eunkyung Jo(UC Irvine), Daniel A. Epstein(UC Irvine), Hyunhoon Jung(NAVER), Young-Ho Kim(NAVER AI Lab), "Understanding the Benefits and Challenges of Deploying Conversational AI Leveraging LLMs for Public Health Intervention", ACM CHI 2023 (doi 10.1145/3544548.3581503), **Best Paper Award**. 사용자·텔레오퍼레이터·개발자 3그룹 34명 포커스그룹·인터뷰: 케어콜이 외로움·정서적 부담 완화 및 공공보건 업무 부담 경감에 기여했으나 LLM 특성상 공중보건·개인건강 지원에 한계 확인. 후속 CHI 2024 논문은 장기기억이 자기개방에 미치는 영향을 통화기록 1,252건·사용자 9명 인터뷰로 분석. — [NAVER CLOVA 테크블로그 2024.08.07](https://clova.ai/en/tech-blog/en-clova-carecall-research-paper-understanding-the-benefits-and-challenges-of-deploying-conversational-ai-leveraging-large-language-models-for-public-health-intervention); [CHI 2023 논문 PDF](https://www.csee.umbc.edu/courses/graduate/691/spring24/pdf/3544548.3581503.pdf); [CHI 2024 논문 arXiv 2402.11353](https://arxiv.org/html/2402.11353v1); [CLOVA 테크블로그 2024.08.19](https://clova.ai/en/tech-blog/en-clova-carecall-research-paper-2)
- **웰트 (국내 DTx)**: 2016년 삼성전자 스핀오프. WELT-I(불면증 CBT, 6주)는 2023.4.19 국내 2호 디지털치료기기 허가, 120명 임상에서 수면효율 유의 개선, 혁신의료기기 통합심사로 현장 도입 기간 약 80% 단축, 한독이 국내 판권. 식약처 심사 시 대한신경정신의학회·대한디지털치료학회 전문가 자문. — [데일리팜 2023.04](https://www.dailypharm.com/user/news/29116); [메디게이트 2023.04.19](https://medigatenews.com/news/3626414635); [메디칼타임즈](https://www.medicaltimes.com/Main/News/NewsView.html?ID=1153185)
- **아토머스(마인드카페)**: 웰트와 업무협약(디지털치료제 접근성 생태계 "첫걸음"), 2025년 말 축적된 사용자 심리 데이터·AI를 의료·임상 영역과 연결하는 확장 방향 발표, 명상앱 '코끼리'·EAP '밝음' 인수. 대학병원 공동연구·임상시험의 구체 사례는 확인되지 않음. — [바이라인네트워크 2024.04](https://byline.network/2024/04/04-107/); [유니콘팩토리 2025.11.28](https://www.unicornfactory.co.kr/article/2025112810353978053)
- **심심이**: 2023.05 고려대 안암병원 함병주 교수(우울증 권위자) 영입 보도—소비자 챗봇이 임상 전문가를 합류시킨 국내 사례. — [MTN 2023.05.10](https://news.mtn.co.kr/news-detail/2023051012580815440)

### Inferences
- 성공 사례의 공통 패턴: (1) 학술 이론/데이터 기반(Hume) → (2) 소규모 RCT로 "효과·안전" 1차 근거 확보(Woebot 70명, Therabot) → (3) 등록 임상·규제 승인(웰트, Ellipsis). 「한벗」은 현재 (0)단계이므로, 첫 산학 협업 목표는 "소규모 IRB 승인 사용성·안전성 파일럿(예: 30~70명)"으로 설정하는 것이 현실적이고 사례와 정합한다.
- 클로바 케어콜의 CHI Best Paper는 서비스 확산(128개 지자체)과 병행된 "학술적 정당성"을 만들었으며, 한국어 음성 기반 정서 돌봄이라는 점에서 「한벗」과 가장 유사하다. 같은 방법론(이해관계자 인터뷰, 통화 로그 분석)을 HCI 연구자(UNIST 디자인학과, KAIST ICLab)와 재현하면 지자체 B2G 진입 근거가 된다.
- 국내 소비자 멘탈헬스 스타트업(아토머스)조차 대학병원 공동연구가 공개적으로 확인되지 않는다는 점은, 거꾸로 「한벗」이 초기부터 연구자 협업을 확보하면 차별화 요소가 된다는 논거로 쓸 수 있다.

### Gaps
- 스캐터랩(이루다) 연구 논문 발표 이력(EMNLP/ACL 등)은 두 차례 검색으로도 확인하지 못함. ACL Anthology에서 "Scatter Lab" 소속 저자 직접 검색 필요.
- Therabot 참가자 수(106 vs 210)의 불일치는 NEJM AI 원문으로 확정 필요.
- 웰트 WELT-I 임상시험 수행 대학병원명은 확인하지 못함.
- 아토머스·마인드카페의 대학병원 공동연구 여부는 공식 자료로 확인되지 않음(부재가 아니라 미확인).
- 클로바 케어콜의 효과에 대한 독립적(비네이버) 학술 검증 논문은 확인하지 못함.
