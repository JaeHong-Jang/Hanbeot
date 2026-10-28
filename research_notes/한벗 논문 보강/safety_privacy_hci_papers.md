# 한벗 안전·개인정보·HCI 축 논문 노트

작성: researcher / 2026-10-26. 등급: A=해당 논문·초록·공식 페이지를 직접 열람(WebFetch 성공), B=검색 결과 요약·2차 출처, C=미확인.
주의: 숫자는 열람한 페이지에서만 옮겼다. "초록만"은 본문 미열람. 기존 Wiki 논문(src-psycrisisbench-2025, src-vera-mh-2026-eval-tools, src-jmir-2026-systematic-review-29 등)은 재검색하지 않고 슬러그로만 인용한다.

## 1. 대화·텍스트 기반 자살/자해 위험 탐지 (한국어 포함)

| 논문 | 연도·학회 | URL | 핵심 수치 | 대상·언어 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Park, Park, Ahn, Oh. Suicidal Risk Detection for Military Personnel | 2020 · EMNLP (main, 2020.emnlp-main.198) | https://aclanthology.org/2020.emnlp-main.198 | 게시글 2,791건, 전문가 주석 13,955건. KoBERT·XLM-R 파인튜닝 F1 최대 0.88 (검색 요약 B 기준) | 한국 현역 군인, 한국어 Q&A 사이트 글(대화 아님) | 한국어 위험 수준 분류가 가능하다는 최소 근거. 단 SNS식 장문 글이라 음성 대화 발화에 일반화 불가 | B (페이지 직접 열람 실패, 검색 결과로 확인) |
| Lee, Park, Kang, Choi, Han. Cross-Lingual Suicidal-Oriented Word Embedding toward Suicide Prevention | 2020 · EMNLP Findings (2020.findings-emnlp.200) | https://aclanthology.org/2020.findings-emnlp.200.pdf | 정확도 87% 이상 (검색 요약, PDF 본문은 압축되어 판독 불가) | 한국어 자살 게시글(자살 사전이 없는 저자원 언어) | 번역 후 영어·중국어 자살 임베딩을 쓰는 우회 접근. 한국어 전용 자원이 부족하다는 점을 보여줌 | B (제목·저자는 A, 수치는 B) |
| Judd et al. Independent Clinical Evaluation of General-Purpose LLM Responses to Signals of Suicide Risk | 2025 · arXiv:2510.27521 (IASEAI'26 발표라고 Sentio 페이지가 소개, B) | https://arxiv.org/abs/2510.27521 | 치료사·수련생 43명 평가. OLMo-2-32b가 위험 신호가 누적될수록 대화를 이어가자고 초대할 가능성이 낮아짐 (효과 크기는 초록에 없음) | 영어, 오픈소스 LLM 1종 | "위험이 올라갈수록 LLM이 물러난다" = safe mode에서 대화 단절 위험의 직접 근거. 한벗은 응답 정책을 별도 설계해야 함 | A (초록만) |
| McBain et al. Evaluation of LLM chatbots' responses to suicide-related queries | 2025 · Psychiatric Services (DOI 10.1176/appi.ps.20250086) | https://www.rand.org/pubs/external_publications/EP71040.html (RAND 페이지는 403으로 열람 실패) | 전문가 13명이 질문 30개를 5단계 위험으로 분류, 챗봇당 질문별 100회 응답. 최고위험 질문엔 3종 모두 직접 답변 0건. 매우 낮은 위험엔 ChatGPT·Claude 100% 직접 답변. 중간 위험 구간에서 구분 능력이 약함 | 영어, ChatGPT·Claude·Gemini | LLM 태깅은 양극단은 되지만 "중간 위험(수동적 사고 등)"이 약점. 키워드 게이트+LLM 태그의 사각지대가 이 구간 | B (언론·RAND 요약) |
| (Wiki 재사용) src-psycrisisbench-2025, src-vera-mh-2026-eval-tools, src-jmir-2026-systematic-review-29, src-arxiv-2026-ai-suicide-primer | 기존 | - | - | - | 재검색 금지 지시에 따라 미조사 | - |

- 한국어 "대화 발화 단위" 자살 위험 분류 논문은 찾지 못했다. 찾은 한국어 연구는 모두 게시글 기반이다. 한벗이 "한국어 발화 분류기를 직접 검증했다"고 말하면 안 되고, 자체 평가셋을 만들어야 한다.
- 위험 구간별 오류 비대칭: 양극단은 안정적, 중간 위험은 불안정(McBain). 따라서 한벗에서 모호하면 위험 쪽으로 기울이는(false positive 허용) 임계값과 사용자 확인 질문("혹시 죽고 싶다는 생각이 드는지 물어봐도 될까요?")이 필요하다.
- 알려진 실패 모드(간접 표현, 반어, 수동적 사고)는 위 논문들의 직접 수치로 확인하지 못했다. Wiki의 PsyCrisisBench 쪽을 참조하거나 별도 조사가 필요하다.
- 한국어 연구의 한계: 데이터 접근이 윤리 서약을 요구하고(군인 데이터셋), 대학생 대화 도메인과 다르다.

## 2. 챗봇 위기 응답 가이드라인·평가, 안전 모드(잠금) 논쟁

| 논문 | 연도·학회 | URL | 핵심 수치 | 대상·언어 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Miner et al. Smartphone-Based Conversational Agents and Responses to Questions About Mental Health, Interpersonal Violence, and Physical Health | 2016 · JAMA Internal Medicine (10.1001/jamainternmed.2016.0400) | https://escholarship.org/content/qt0h03z121/qt0h03z121.pdf | 휴대폰 68대(7개 제조사), 에이전트 77개(Siri 27, Google Now 31, S Voice 9, Cortana 10), 질문 9개. 위기 인식·존중 언어·헬프라인 안내 3기준으로 평가, 응답은 "비일관적이고 불완전". 성폭력 질문에 헬프라인 안내는 Cortana뿐 (검색 요약) | 영어, 음성비서 | 음성 에이전트 위기 응답 평가의 원조. 한벗의 평가 기준(인식·언어·안내) 틀로 재사용 가능 | B (본문 미열람) |
| Nobles et al. Responses to Addiction Help-seeking from Alexa, Siri, Google Assistant, Cortana, and Bixby | 2020 · npj Digital Medicine 3:11 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668 | 5개 기기, 질의 70건(유형 14개). 단일 응답 4/70, 치료 연결 2건(모두 Google Assistant). 알코올·오피오이드는 연결 0건. Siri가 대마 판매점을 안내한 사례. 무료 공공 헬프라인(SAMHSA 1-800-662-HELP) 연결을 권고 | 영어, 미국 샌디에이고, 2019년 1월 | 일반 음성비서는 "헬프라인 카드"조차 안정적이지 못했다. 한벗의 확정적 전화 카드(109·1388)는 이 공백을 메우는 설계. 소규모·단일 도시 한계 | A |
| McBain et al. (위 1번 참조) | 2025 · Psychiatric Services | 위와 동일 | 위와 동일 | | 위와 동일 | B |
| Judd et al. 2025 (위 1번 참조) | | https://arxiv.org/abs/2510.27521 | | | 위기에서 LLM이 대화를 끊는 경향이 임상 모범 사례와 반대라고 저자들이 주장 | A (초록만) |
| CMAJ commentary: Urgent considerations for suicide prevention in (제목 잘림) | 2026 · CMAJ (검색 결과 PDF) | https://www.suicideinfo.ca/wp-content/uploads/2026/04/Urgent-considerations-for-suicide-prevention-in.pdf | 챗봇은 사용자를 신뢰할 수 있는 사람에게 연결하고 대화를 끝내야 하며 위험을 무시해선 안 된다는 주장(검색 요약). 수치 없음 | 캐나다, 의견글 | 잠금 찬성 측 입장. Judd와 상반되어 "잠금 논쟁"의 양쪽 근거 | B |

- 잠금 논쟁 요약: 한쪽(CMAJ 의견)은 사람에게 연결 후 종료를, 다른 쪽(Judd)은 위험이 높아질 때 LLM이 물러나는 것 자체가 임상 모범 사례와 어긋난다고 본다. 두 입장 모두 근거가 의견·소규모 평가 수준이며, "잠금이 해롭다/이롭다"를 직접 비교한 실증 연구는 찾지 못했다.
- 따라서 한벗 safe mode는 "종료"가 아니라 "축소된 지속 연결"(공감적 짧은 응답+카드+재확인)으로 설계하고, 이는 근거가 아니라 설계 판단임을 명시한다.
- 웜 핸드오프 vs 카드 효과 비교 연구는 찾지 못했다(빈 곳).
- WHO/AFSP/National Action Alliance 안전 메시징 공식 문서, 한국 109/1393/1388 의뢰 문헌은 이번 조사에서 열람하지 못했다(빈 곳).

## 3. 메모리 투명성과 사용자 통제 (HCI)

| 논문 | 연도·학회 | URL | 핵심 수치 | 대상·언어 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Chen, Molina, Liao, Cho. AI Never Forgets: Exploring Users' Perceptions of AI Memory and ChatGPT's Memory Feature | 2026 · ACM CHI '26 (doi 10.1145/3772318.3791635) | https://grady.uga.edu/research/ai-never-forgets-exploring-users-perceptions-of-ai-memory-and-chatgpts-memory-feature/ | ChatGPT 사용자 20명. 대부분이 기억 내용을 확인한 뒤 부정적 기대 위반을 경험. 가시성·접근성·투명성·통제 요구. AI 기억의 특징: 잊지 않음, 상세함, 정확함, 감정 없음 | 영어, n=20 질적 | "저장 사실을 사용자가 처음 볼 때의 놀람"이 문제. 한벗의 저장 전 승인 4단계 설계를 지지. 정확한 비율은 페이지에 없음 | A (연구실 페이지, 논문 본문 미열람) |
| Huang, Gutierrez, Kamana, MacNeil. Memory Sandbox: Transparent and Interactive Memory Management for Conversational Agents | 2023 · arXiv:2308.01542 (학회 미확인) | https://arxiv.org/abs/2308.01542 | 수치 없음(디자인 프로브). 기억 객체를 보기·추가·수정·삭제하며 모델이 보는 것과 사용자가 보는 것을 일치시킴 | 영어, 시스템 | 열람·편집·삭제 UI의 선행 사례. 효과 수치는 없으므로 "구현 선례"로만 인용 | A (초록만) |
| MemCtrl / CJR 보도(ChatGPT 메모리 2,050건, 80명) | 2026 NeurIPS 리스팅 / 보도 | https://neurips.cc/virtual/2026/168268 | 메모리 항목의 96%가 시스템 단독 생성, 사용자 명시 지시는 4%(CJR 요약). 삭제·잊기 지시를 모든 유형에서 따르는 시스템은 없음(MemCtrl 요약) | 영어 | 상용 제품조차 "사용자 승인 없는 자동 저장"이 기본. 한벗 차별점. 두 항목 모두 2차 요약이므로 직접 인용 전 원문 확인 필요 | B |
| (Wiki 재사용) src-cox-2023-chatbot-memory-reference | 기존 | - | - | - | 재검색 안 함 | - |

- 승인 마찰(승인 요청이 이탈을 부르는가)에 대한 실증 연구는 찾지 못했다(빈 곳). PACIS 2024의 Xing 등은 투명성이 프라이버시 우려를 조절한다는 제안 단계 연구일 뿐 결과가 없다(B).
- 한벗의 "stated/inferred/confirmed/approved" 4단계는 "inferred를 사용자에게 보여주고 확인받기"라는 점에서 Chen 2026의 놀람 문제를 직접 완화한다는 논리를 쓸 수 있다.
- 메모리 삭제의 기술적 한계: 삭제 지시를 신뢰성 있게 따르는 시스템이 없다는 MemCtrl 결과는, 한벗이 삭제를 저장소와 프롬프트 모두에서 보장해야 한다는 근거가 된다.

## 4. 음성 vs 텍스트 자기개방, 정서 의존, 측정 척도

| 논문 | 연도·학회 | URL | 핵심 수치 | 대상·언어 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Peng, Qian, He. When AI chatbots understand emotions: mechanisms of self-disclosure ... hybrid SEM–ANN–NCA | 2025/2026 · Frontiers in Psychology 16 | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full | n=352 대학생, 약 30턴. 감정 각성 경로계수 음성 0.271 vs 텍스트 0.192, 정서 참여 0.305 vs 0.179, 심리적 수용 0.219 vs 0.162. 자기개방 R²=0.359. 표의 음성·다중모달 라벨이 뒤바뀌었을 가능성 있음 | 대학생(중국 추정, 본문 미확인), 영어 UI | 음성이 정서 반응을 더 끌어낸다는 근거이나 플랫폼과 모달리티가 교락됨. 의존은 측정하지 않음 | A (본문 앞 100k자만) |
| (Wiki 재사용) src-mit-openai-2025-affective-use-rct, src-fang-2025-ai-companion-rct, src-de-freitas-2024-ai-companions-loneliness | 기존 | - | 검색 요약상 MIT RCT는 모달리티 효과 비유의, 많이 쓸수록 나쁜 결과 | - | 재조사 안 함. 음성 vs 텍스트 결론은 "혼재"로 정리 | - |
| 2026 APS 학회 포스터: AI-Chatbot Emotional Dependence(Aied) 5문항 척도 | 2026 · APS 연례 학회 | https://www.psychologicalscience.org/conventions/archive/2026annual/paper/61393/ | 5문항, 단일요인, 5,855명, 성별·학교급 불변성(검색 요약) | 미확인 | 의존 측정 도구 후보. 포스터 초록이라 정식 발표 전 | B |
| AI Attachment Scale (Computers in Human Behavior Reports) | 2025 | 검색 결과에 URL 없음 | 3요인(정서적 친밀·사회적 대체·규범적 존중), 신뢰도·타당도 양호(검색 요약) | 미확인 | 한벗 파일럿의 의존 모니터링 척도 후보 | C |
| How AI Companionship Develops: Evidence from a Longitudinal Study | 2025 · arXiv:2510.10079 | https://arxiv.org/pdf/2510.10079 | 의존 내성·금단 하위척도, 모든 다문항 척도 Cronbach α>0.7(검색 요약) | 미확인 | 종단 측정 설계 참고 | B |

- 음성 vs 텍스트: 근거는 혼재한다. 설문(Peng)은 음성이 정서 참여를 높인다고 보고, MIT/OpenAI RCT 요약은 모달리티 주효과가 유의하지 않았고 사용량이 클수록 결과가 나빴다고 한다(검색 요약 B, Wiki 확인 필요). 검색에서 나온 "음성이 자기개방을 줄인다"는 122명 ACM 2025 실험은 논문을 특정하지 못해 인용하지 않는다.
- 이용 시간 제한·휴식 알림의 효과를 직접 검증한 연구는 찾지 못했다(빈 곳). 사용량이 의존의 핵심 예측변수라는 MIT RCT 결과로 간접 근거만 가능하다.
- 한벗은 음성이므로 "개방이 쉬워진다"가 이점이자 위험이다. 의존 지표(사용량, 사회적 대체 척도)를 파일럿에서 측정한다고 답변하는 것이 근거 대비 안전하다.

## 5. 정신건강·동반자 앱의 데이터 보관·개인정보

| 논문 | 연도·학회 | URL | 핵심 수치 | 대상·언어 | 설계·답변 시사점 | 등급 |
|---|---|---|---|---|---|---|
| Huckvale, Torous, Larsen. Assessment of the Data Sharing and Privacy Practices of Smartphone Apps for Depression and Smoking Cessation | 2019 · JAMA Network Open 2(4):e192542 | https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782 | 앱 36개 중 25개(69%)가 개인정보 정책 보유. 정책은 25개 중 23개(92%)가 제3자 전송 가능성을 언급했으나 실제 전송은 36개 중 33개(92%). 29개(81%)가 광고·분석용으로 Google·Facebook 두 곳에 전송. Google 전송 28개 중 12개(43%), Facebook 12개 중 6개(50%)만 정책에 공개 | 우울·금연 앱, 미국·호주 상위 앱 | 정책 문구만으로는 불충분, 실제 네트워크 트래픽 점검이 필요. 한벗은 제3자 SDK 제로와 점검을 약속 가능 | A (초록·결론) |
| Mozilla Foundation. *Privacy Not Included: Replika: My AI Friend | 2024-02-07 · Mozilla | https://www.mozillafoundation.org/privacynotincluded/replika-my-ai-friend/ | 수치 없음. 모든 상호작용 기록 수집, 행동 데이터가 광고주에 공유·판매될 수 있음, 최소 보안 기준 미달, 쿠키 거부 불가. 민감정보(종교·성적 지향·건강)를 입력할 수 있다고 정책이 명시 | 영어, 앱 리뷰(학술 논문 아님) | 동반자 앱의 최악 사례 대조군. 학술 논문이 아닌 NGO 평가이므로 보조 근거로만 사용 | B (검색 결과, 직접 열람 안 함) |
| Wiepert et al. Reidentification of Participants in Shared Clinical Data Sets: Experimental Study | 2024 · JMIR AI 3:e52054 | https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495 | 화자식별 공격 모의. 비교 건수가 늘수록 오수락이 증가(r=0.69). 오수락/참수락 비율이 1×10^5건에서 0.02, 6×10^6건에서 1.41(약 3×10^6에서 1:1). 데이터: VoxCeleb 7,000명 이상, Mayo Clinic 941명 19,195건. 저자는 큰 탐색 공간에선 실제 위험이 작다고 결론하되 화자식별 기술 발전 시 상승 가능 | 영어, 임상 음성(정신건강 전용 아님) | 음성은 그 자체로 식별자가 될 수 있고 위험은 공격자의 후보군 크기에 좌우됨. 원본 즉시 폐기와 보관 최소화의 근거. 정신건강 음성에 직접 적용은 불가 | A |
| 개인정보 보호법 및 PIPC 생성형 AI 이용자 가이드 | 2026-05 보도 | https://v.daum.net/v/20260519222300715 | 가이드는 대화 내용도 개인정보가 될 수 있으며 학교·진료 결과 등 결합 정보도 포함된다고 설명, 옵트아웃·대화 기록 저장·삭제 기능과 처리방침의 국외 이전·보유 기간 확인을 안내(기사 요약) | 한국 | 공식 PIPC 문서 원문은 열람하지 못함. 음성·민감정보의 구체적 보관 기간 기준은 확인하지 못함 | B (기사) |

- 법령 조항 번호: 개인정보 보호법 제21조(파기), 제23조(민감정보의 처리 제한), 제39조의6(파기 특례), 제39조의8(이용내역 통지)이라는 목차는 해설서 목차 검색 결과로 확인했다(B). 조문 본문과 "1년 미이용 시 파기·분리보관" 같은 구체 내용은 열람하지 못했으므로 단정하지 않는다. law.go.kr 본문 WebFetch는 제목만 반환했다.
- 학술 권고(최소 보관 기간 숫자)는 찾지 못했다. 보관 기간 TTL은 외부 근거 없이 팀이 정해야 하며, "목적 달성 시 파기"와 "사용자 삭제 즉시 반영"을 원칙으로 두고 숫자는 정책 결정임을 밝히는 편이 안전하다.
- 한벗의 3단계 동의는 Huckvale가 지적한 "사용자가 공유를 예측할 수 없다"는 문제에 직접 대응한다.

## 교수님 ② 답변 초안 재료 (위기 대응 흐름·전문기관 안내)

- [Nobles 2020] 상용 음성비서 5종, 질의 70건 중 단일 응답 4건, 알코올·오피오이드 치료 연결 0건. 일반 음성비서는 도움 요청에 헬프라인을 안정적으로 연결하지 못했으므로, 한벗은 109·1388 카드를 고정 응답으로 둔다.
- [Miner 2016, JAMA IM] 휴대폰 68대·에이전트 77개 평가에서 위기 인식·존중 언어·헬프라인 안내 모두 비일관적이었다. 한벗 평가도 이 3기준을 쓰고 한국어로 자체 검증한다(수치는 2차 요약).
- [McBain 2025, Psychiatric Services] 챗봇은 최고위험·최저위험 질문은 안정적이나 중간 위험에서 구분이 약했다. 한벗이 키워드 게이트와 LLM 태그를 이중으로 두고 모호할 때 확인 질문을 하는 이유.
- [Judd 2025, arXiv] 임상가 43명 평가에서 위험 신호가 쌓일수록 LLM이 대화 초대를 줄였다. 한벗 safe mode가 "대화 종료"가 되지 않도록 짧은 지속 응답을 유지하는 설계 근거(오픈소스 모델 1종이므로 일반화 주의).
- [CMAJ 2026 의견글] 사람에게 연결 후 종료해야 한다는 상반된 입장도 있다. 근거 수준이 낮아 한벗은 "잠금 없음, 축소 모드"를 설계 판단으로 제시하고 파일럿에서 검증한다고 답한다.
- [Park 2020, EMNLP] 한국어 자살 위험 수준 분류에서 F1 최대 0.88(게시글, 군인). 한국어 분류가 가능하다는 최소 근거이며 대화 발화로는 검증되지 않았다고 한계를 함께 말한다.
- [src-psycrisisbench-2025, src-vera-mh-2026-eval-tools] 기존 Wiki 근거를 연결해 평가 방법(위기 벤치마크, VERA-MH)을 설명.
- 솔직한 한계: 웜 핸드오프 vs 카드의 효과 비교, 한국 109/1393 의뢰 문헌, WHO/AFSP 안전 메시징 공식 문서는 이번에 확인하지 못했다. 답변에서 "검토 중"으로 표기.

## 교수님 ⑤ 답변 초안 재료 (데이터 저장 범위·보관 기간)

- [Huckvale 2019, JAMA Netw Open] 우울·금연 앱 36개 중 33개(92%)가 제3자에 데이터를 전송했고 81%가 Google·Facebook에 전송. 한벗은 제3자 광고·분석 SDK를 두지 않고 네트워크 트래픽을 점검한다.
- [Huckvale 2019] Google 전송 앱 중 정책에 공개한 비율은 43%. 정책 문구만으로 신뢰를 말하지 않고 실제 전송 목록을 공개한다.
- [Wiepert 2024, JMIR AI] 음성만으로 화자 식별이 가능하고 비교 후보가 3×10^6건 근처에서 오수락과 참수락이 1:1. 큰 풀에선 위험이 작지만 기술 발전 시 상승. 원본 음성을 STT 직후 폐기(기본)하는 근거.
- [Chen 2026, CHI] ChatGPT 사용자 20명 다수가 저장된 기억을 보고 부정적 기대 위반을 경험. 한벗은 저장 전 승인과 열람·수정·삭제를 제공한다.
- [Memory Sandbox 2023] 기억 객체의 열람·추가·수정·삭제 인터페이스 선행 사례(효과 수치 없음).
- [MemCtrl 2026 / CJR] 상용 메모리의 96%가 시스템 단독 생성이고 삭제 지시를 신뢰성 있게 따르는 시스템이 없다는 요약. 한벗은 삭제를 저장소와 프롬프트 모두에서 검증하는 테스트를 둔다(2차 요약).
- [Mozilla 2024, Replika] 모든 상호작용 기록 수집과 광고주 공유 가능성이 지적됨. 동반자 앱의 대조군으로 제시(NGO 평가).
- [PIPC 가이드 2026, 기사 요약] 대화 내용도 개인정보이며 처리방침에 국외 이전·보유 기간을 명시하도록 안내. 한벗은 LLM API 국외 이전과 보유 기간을 처리방침에 쓴다.
- 솔직한 한계: 정신건강 앱 보관 기간에 대한 학술 권고 숫자와 음성·민감정보의 PIPC 공식 보관 기준은 찾지 못했다. TTL은 팀 정책으로 정하고 원칙(목적 달성 시 파기, 사용자 삭제 즉시 반영)을 제시.

## 빈 곳

- 한국어 대화 발화 단위 자살 위험 분류(KCI/DBpia) 연구, 그리고 간접 표현·반어·수동적 사고 실패 모드의 정량 근거.
- WHO·AFSP·National Action Alliance 안전 메시징 공식 문서 원문 열람, 한국 109/1393/1388 의뢰 효과 문헌.
- 웜 핸드오프 vs 카드의 효과 비교, 잠금(safe mode)의 해악 여부를 직접 비교한 실증 연구.
- 메모리 승인 요청의 이탈(마찰) 실증 연구. Memory Sandbox 사용자 실험 결과(본문 미열람).
- 음성 vs 텍스트 자기개방의 직접 RCT(122명 ACM 2025 실험은 논문 특정 실패), 사용 제한·휴식 알림의 효과 연구, 의존 척도 3종의 원문 검증(Aied는 포스터 초록).
- 개인정보 보호법 조문 본문과 PIPC 음성·민감정보 보관 기준 원문(law.go.kr·PIPC 공식 문서). 이번엔 목차·기사 수준(B)만 확인.
- Miner 2016, McBain 2025, Park 2020 본문 직접 열람(현재 B).
