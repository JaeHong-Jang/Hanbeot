검증 기준일은 **2026-10-26**입니다. 본문·표·초록·공식 페이지를 대조했고, 뒤쪽 답변 초안에서 반복된 주장은 합쳤습니다.

**주요 수정 사항은 APS 척도 URL 오류, 메모리 연구 두 편의 혼합, 구법 조문 인용, Park의 F1 평가 과제 누락입니다.** A도 연구의 일반화 가능성이나 한벗 설계의 효과까지 보증하지는 않습니다. 등급은 요청하신 기준에 따라 **원 주장과 원출처가 일치하면 A, 간접 확인·근사치는 B, 지지 근거를 확인하지 못하면 C**로 매겼습니다.

**1. 자살·자해 위험 탐지 및 위기 응답**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Park·Park·Ahn·Oh, 2020 EMNLP 본회의 논문 | [ACL](https://aclanthology.org/2020.emnlp-main.198/) | 공식 서지와 PDF 첫 페이지 대조 | 일치 | A | 제목·저자·연도·학회 일치. |
| Park: 게시글 2,791건, 전문가 주석 13,955건 | [ACL](https://aclanthology.org/2020.emnlp-main.198/) | 초록·본문 확인 | 일치 | A | 게시글마다 5명 주석. |
| Park: KoBERT·XLM-R 등을 미세조정해 F1 최대 0.88 | [ACL PDF](https://aclanthology.org/2020.emnlp-main.198.pdf) | 본문 §3·표 5 대조 | 일치 | A | **0.88은 KoBERT의 위험 유무 이진분류(Flagged)** 결과. 이를 4단계 위험 수준 분류 성능으로 소개하면 부정확함. 최대 위험 주석 기준 4단계 F1은 0.72. |
| Park: 한국 현역 군인의 한국어 Q&A 게시글 연구 | [ACL](https://aclanthology.org/2020.emnlp-main.198/) | 데이터 수집 절 확인 | 일치 | A | 네이버 지식iN 게시글. 음성·대화 발화 단위 검증 자료가 아님. |
| Park: 데이터 접근에 연구윤리 동의 필요 | [ACL PDF](https://aclanthology.org/2020.emnlp-main.198.pdf) | 윤리 설명 확인 | 일치 | A | 게시자 접촉·재식별 금지에 명시적 동의 요구. |
| Lee·Park·Kang·Choi·Han, 2020 EMNLP Findings 논문 | [제시 PDF](https://aclanthology.org/2020.findings-emnlp.200.pdf) | [공식 서지·초록](https://aclanthology.org/2020.findings-emnlp.200/) 대조 | 일치 | A | 제목·저자·학회 일치. |
| Lee: 정확도 87% 이상 | [제시 PDF](https://aclanthology.org/2020.findings-emnlp.200.pdf) | 공식 초록 확인 | 일치 | A | 초록은 **87% 초과**라고 명시. |
| Lee: 한국어 글을 영어·중국어로 번역한 뒤 해당 언어의 자살 지향 임베딩을 결합 | [ACL](https://aclanthology.org/2020.findings-emnlp.200/) | 모델 설명이 포함된 초록 확인 | 일치 | A | 한국어 자원이 부족하다는 설명은 **2020년 연구 당시**의 맥락으로 한정해야 함. |
| Judd: 2025, arXiv:2510.27521 | [arXiv](https://arxiv.org/abs/2510.27521) | 서지 확인 | 일치 | A | 최초 제출일 2025-10-31. |
| Judd: 미국 치료사·수련생 43명, OLMo-2-32b 1종 평가 | [arXiv](https://arxiv.org/abs/2510.27521) | 초록 확인 | 일치 | A | 노트의 표본·모델 설명 일치. |
| Judd: 위험 신호가 누적될수록 지속 대화를 초대할 가능성이 감소 | [arXiv](https://arxiv.org/abs/2510.27521) | 결과·결론에 해당하는 초록 문장 대조 | 일치 | A | 모든 LLM이 대화를 끊는다는 결과로 일반화하면 안 됨. |
| Judd: 이러한 후퇴가 임상 모범 사례에 반한다고 저자들이 주장 | [arXiv](https://arxiv.org/abs/2510.27521) | 초록 확인 | 일치 | A | 대화 종료가 실제 위해를 발생시켰다는 임상 결과를 측정한 것은 아님. |
| Judd: IASEAI ’26 발표 | [arXiv](https://arxiv.org/abs/2510.27521) | [IASEAI 공식 세션](https://library.iaseai.org/videos/protecting-vulnerable-and-underserved-ai-users/)의 발표자·제목 확인 | 일치 | A | 공식 세션에 Nicholas Judd와 동일 제목이 등재됨. |
| McBain 논문 제목이 “Evaluation of LLM chatbots' responses to suicide-related queries” | [RAND](https://www.rand.org/pubs/external_publications/EP71040.html) | DOI·공식 논문 소개의 제목 대조 | 불일치 | C | 실제 제목은 **Evaluation of Alignment Between Large Language Models and Expert Clinicians in Suicide Risk Assessment**. Psychiatric Services, 2025 및 DOI는 일치. |
| McBain: 전문가 13명, 질문 30개, 위험 5단계, 챗봇별 질문당 100회 | [RAND](https://www.rand.org/pubs/external_publications/EP71040.html) | 연구기관이 게시한 논문 초록 확인 | 일치 | A | 총 응답은 9,000개. ChatGPT·Claude·Gemini 평가. |
| McBain: 최고위험 질문에는 3종 모두 직접 답변 0건 | [RAND](https://www.rand.org/pubs/external_publications/EP71040.html) | 결과 확인 | 일치 | A | ‘직접 답변 없음’은 무응답과 다름. 거절·헬프라인 안내 등이 간접 답변에 포함됨. |
| McBain: 최저위험 질문에는 ChatGPT·Claude가 100% 직접 답변 | [RAND](https://www.rand.org/pubs/external_publications/EP71040.html) | 결과 확인 | 일치 | A | Gemini까지 100%였다고 확대하면 안 됨. |
| McBain: 중간 위험 수준을 의미 있게 구분하지 못함 | [RAND](https://www.rand.org/pubs/external_publications/EP71040.html) | 결과·결론 확인 | 일치 | A | **답변의 직접성**과 전문가 위험도 사이의 정렬을 평가함. 사용자 위험 분류기의 정확도를 측정한 연구로 소개하면 부정확함. |
| Miner: 2016 JAMA Internal Medicine, DOI 10.1001/jamainternmed.2016.0400 | [제시 PDF](https://escholarship.org/content/qt0h03z121/qt0h03z121.pdf) | [출판사 본문](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2500043) 대조 | 일치 | A | 제시 URL은 접근 제한이 있었으나 출판사에서 확인. |
| Miner: 휴대폰 68대·제조사 7곳·에이전트 77개 | [제시 PDF](https://escholarship.org/content/qt0h03z121/qt0h03z121.pdf) | 출판사 초록·표 1 확인 | 일치 | A | 에이전트 77개는 77종의 서로 다른 제품이라는 뜻이 아님. |
| Miner: Siri 27, Google Now 31, S Voice 9, Cortana 10 | [제시 PDF](https://escholarship.org/content/qt0h03z121/qt0h03z121.pdf) | 출판사 표 1 대조 | 일치 | A | 합계 77. |
| Miner: 질문 9개, 위기 인식·존중 언어·적절한 자원 안내의 3기준 | [제시 PDF](https://escholarship.org/content/qt0h03z121/qt0h03z121.pdf) | 출판사 방법·초록 확인 | 일치 | A | 신체 건강 질문에서는 헬프라인 외 의료 자원 안내도 평가. |
| Miner: 응답이 비일관적·불완전했고, 성폭력 진술에 헬프라인을 안내한 것은 Cortana뿐 | [제시 PDF](https://escholarship.org/content/qt0h03z121/qt0h03z121.pdf) | 출판사 결과·응답표 확인 | 일치 | A | 당시 정해진 진술에 대한 결과로 한정. 현재 제품 성능을 나타내지 않음. |
| Nobles: 2020 npj Digital Medicine 3:11 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668) | [출판사 원문](https://www.nature.com/articles/s41746-019-0215-9) 확인 | 일치 | A | DOI 10.1038/s41746-019-0215-9. |
| Nobles: 기기·비서 5개, 질의 유형 14개, 총 70개 조합 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668) | 원문 Methods 확인 | 일치 | A | 각 질의는 저자 2명이 반복했고 응답이 일관됐다고 설명. |
| Nobles: 단일 응답 4/70, 치료·치료 의뢰 연결 2건, 모두 Google Assistant | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668) | Results·Discussion 확인 | 일치 | A | 2건은 금연 앱 안내. 실제 치료 이용·전화 연결 완료를 측정하지 않음. |
| Nobles: 알코올·오피오이드 연결 0건, Siri가 대마 판매점 안내 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668) | 원문 결과 확인 | 일치 | A | 해당 질의에서는 단일 답변 자체가 없었음. |
| Nobles: 2019년 1월 샌디에이고, 미국 영어 설정 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668) | 원문 방법 확인 | 일치 | A | 지역·시점·언어 제한 일치. |
| Nobles: SAMHSA 1-800-662-HELP 등 무료 공공 자원 안내 권고 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6989668) | 원문 초록·논의 확인 | 일치 | A | 권고의 존재가 확인됨. 한국 전화 카드의 효과 검증 근거는 아님. |
| CMAJ: 2026년 의견글이며 사람에게 도움을 요청하도록 권한 뒤 대화 종료를 제안 | [제시 PDF](https://www.suicideinfo.ca/wp-content/uploads/2026/04/Urgent-considerations-for-suicide-prevention-in.pdf) | [원문 PMC 검색 색인](https://pmc.ncbi.nlm.nih.gov/articles/PMC13102457/) 대조 | 일치 | B | 직접 열람은 차단. 사전 승인된 공감 응답·지역 헬프라인·신뢰하는 사람에게 연락 권고 후 종료하자는 내용 확인. |
| CMAJ와 Judd가 ‘잠금의 효과’를 놓고 상반된 실증 결과를 제시 | 위 CMAJ·Judd URL | 두 자료의 연구 유형·평가 대상 대조 | 불일치 | C | **권고 방향은 다르지만 동일한 개입의 효과를 비교한 연구들이 아님.** CMAJ는 논평, Judd는 모델 응답 평가. |
| 한국어 대화 발화 단위 위험 분류 논문은 찾지 못했고, 찾은 한국어 연구는 게시글 기반 | 검색 범위·검색식 없음 | Park·Lee의 자료 단위 확인 | 확인불가 | C | 두 논문이 게시글 기반인 것은 확인. 한국어 관련 연구 전체에 대한 부재 주장은 검증할 수 없음. |
| 간접 표현·반어·수동적 사고가 알려진 실패 모드 | 구체 URL 없음 | 인용 연결 상태 점검 | 확인불가 | C | 노트도 직접 정량 근거를 확보하지 못했다고 밝힘. 검증된 결과처럼 인용하지 말 것. |
| 109·1388이 전문 상담 안내 번호 | URL 없음 | [보건복지부](https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1479607&mid=a10503010300&nPage=115&tag=), [청소년1388 공식 안내](https://www.1388.go.kr/OCC/YTOSP_SC_OYY_01) 확인 | 일치 | A | 109는 자살예방, 1388은 청소년 상담. **1393은 109로 개편된 과거 번호**임을 구분해야 함. 카드의 임상 효과는 별개. |

**2. 메모리 투명성·통제**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Chen·Molina·Liao·Cho, CHI ’26, DOI 10.1145/3772318.3791635 | [UGA 연구 소개](https://grady.uga.edu/research/ai-never-forgets-exploring-users-perceptions-of-ai-memory-and-chatgpts-memory-feature/) | 저자 소속 대학의 서지 확인 | 일치 | A | 제목·저자·학회·DOI 일치. |
| Chen: ChatGPT 사용자 20명 인터뷰 | [UGA](https://grady.uga.edu/research/ai-never-forgets-exploring-users-perceptions-of-ai-memory-and-chatgpts-memory-feature/) | 게시된 논문 초록 확인 | 일치 | A | 질적 연구. |
| Chen: 대부분이 저장된 기억을 확인한 뒤 부정적 기대 위반 경험 | [UGA](https://grady.uga.edu/research/ai-never-forgets-exploring-users-perceptions-of-ai-memory-and-chatgpts-memory-feature/) | 초록 결과 확인 | 일치 | A | ‘대부분’의 정확한 인원·비율은 해당 페이지에 없음. |
| Chen: 잊지 않음·상세함·정확함·감정 없음이라는 기억 특성 및 가시성·접근성·투명성·통제 요구 | [UGA](https://grady.uga.edu/research/ai-never-forgets-exploring-users-perceptions-of-ai-memory-and-chatgpts-memory-feature/) | 초록 확인 | 일치 | A | 특성은 **참여자의 인식**임. AI 기억의 객관적 정확성이 입증됐다는 뜻이 아님. |
| Memory Sandbox: Huang·Gutierrez·Kamana·MacNeil, 2023 | [arXiv](https://arxiv.org/abs/2308.01542) | 서지·[본문](https://arxiv.org/html/2308.01542v1) 확인 | 일치 | A | 본문에 **UIST 2023 Adjunct** 표기 있음. 노트의 ‘학회 미확인’을 보완 가능. |
| Memory Sandbox: 기억 열람·추가·수정·삭제 및 모델에 보일 기억 통제 | [arXiv](https://arxiv.org/abs/2308.01542) | 본문 시스템 설명·그림 1 확인 | 일치 | A | 기능 구현 선례로 인용 가능. |
| Memory Sandbox: 디자인 프로브이며 사용자 효과 수치 없음 | [arXiv](https://arxiv.org/abs/2308.01542) | 본문 전체 구조 확인 | 일치 | A | 비교 사용자 실험·효과 크기 보고 없음. |
| ChatGPT 사용자 80명에서 메모리 2,050건 분석 | [NeurIPS 리스팅](https://neurips.cc/virtual/2026/168268) | 제목·수치 검색 후 [원논문](https://arxiv.org/abs/2602.01450) 확인 | 일치 | A | 수치는 맞지만 출처는 **The Algorithmic Self-Portrait: Deconstructing Memory in ChatGPT**. |
| 메모리 96%는 시스템 단독 생성, 4%는 사용자 명시 요청 | [NeurIPS 리스팅](https://neurips.cc/virtual/2026/168268) | [원논문 §4.1](https://arxiv.org/html/2602.01450v3) 확인 | 일치 | A | 명시 요청 84건, 약 4.1%. 연구의 탐지 방법으로 직접 요청이 검출되지 않은 항목을 시스템 주도로 분류함. |
| 위 96% 연구가 MemCtrl이며 NeurIPS 2026 연구 | [NeurIPS 리스팅](https://neurips.cc/virtual/2026/168268) | 원논문 제목·학회 정보 대조 | 불일치 | C | **서로 다른 연구가 합쳐짐.** 96% 연구는 ACM Web Conference 2026 채택으로 명시됨. |
| MemCtrl: 모든 유형의 메모리 통제 지시를 신뢰성 있게 따르는 시스템은 없음 | [NeurIPS 리스팅](https://neurips.cc/virtual/2026/168268) | 별도 제목 검색·[검색된 초록 재게시](https://acceptodds.com/papers/iclr2027-14406) 대조 | 일치 | B | 저장 금지·잊기·일시적 사용 금지의 **세 유형 모두**를 신뢰성 있게 준수하는 시스템이 없다는 주장. 원문 직접 확인은 못 함. |
| MemCtrl: “삭제 지시를 신뢰성 있게 따르는 시스템이 없다” | 위와 동일 | 검색된 초록의 범위 대조 | 불일치 | C | ‘세 유형을 모두 충족하지 못함’을 ‘삭제 기능 자체가 전부 실패함’으로 바꿀 수 없음. 평가된 시스템 밖으로도 일반화 불가. |
| 96% 결과가 상용 제품 전반의 기본 동작을 증명 | 위와 동일 | 원논문의 분석 표본·대상 확인 | 불일치 | C | 특정 ChatGPT 이용 자료의 관찰 결과. 모든 상용 제품·현재 설정을 대표하지 않음. |
| CJR 보도가 80명·2,050건 연구를 소개 | CJR URL 미제시 | [해당 CJR 기사](https://www.cjr.org/tow_center/chatbots-memory-remember-users-conversations-history-openai-sam-altman-llm-gemini.php) 확인 | 일치 | B | 기사는 확인되지만 수치 인용에는 위 원논문을 쓰는 편이 정확함. |
| Xing 등, PACIS 2024: 투명성의 프라이버시 우려 조절 효과를 제안했으며 결과는 없음 | URL 없음 | [학회 공식 저장소](https://aisel.aisnet.org/pacis2024/track13_hcinteract/track13_hcinteract/6/) 초록 확인 | 일치 | A | 종단 실험을 **제안**한 Short paper. 효과가 입증됐다고 쓰면 안 됨. |
| Chen 연구가 한벗의 stated/inferred/confirmed/approved 4단계의 효과를 직접 지지 | [UGA](https://grady.uga.edu/research/ai-never-forgets-exploring-users-perceptions-of-ai-memory-and-chatgpts-memory-feature/) | 연구가 평가한 설계 범위 확인 | 확인불가 | C | 통제·투명성 요구에서 도출한 **설계 가설**. 해당 4단계의 효과를 시험하지 않음. |

**3. 음성·텍스트 자기개방과 의존 척도**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Peng·Qian·He의 자기개방 연구, Frontiers in Psychology 16 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | 출판사 본문·서지 확인 | 일치 | A | DOI·논문 식별 일치. |
| Peng: 대학생 352명, 약 30턴 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | §3.3·3.4 확인 | 일치 | A | 유효 표본 352명. 참가자별 30턴으로 표준화했다고 명시. |
| Peng: 중국 표본, 영어 UI | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | 모집·조건 설명 검색 | 확인불가 | C | 이 조건들을 명확하게 뒷받침하는 문구를 확인하지 못함. ‘중국 추정’은 확정 정보로 옮기지 말 것. |
| 감정 각성 0.271 대 0.192, 정서 참여 0.305 대 0.179, 심리적 수용 0.219 대 0.162 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | 표 5 대조 | 일치 | A | 수치는 IMM 대 IMT 경로계수와 일치. |
| 위 IMM 계수들이 확정적으로 음성 조건의 효과 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | 표 1과 §4.1.2 대조 | 확인불가 | C | **표 1은 IM-V=음성·IM-M=다중모달, 결과 절은 IMM=음성·IMV=다중모달**로 설명. 저자 확인 전 해석 유보 필요. |
| 자기개방 R²=0.359 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | 표 6 확인 | 일치 | A | 모형의 설명력 지표. 음성 조건 단독 효과 크기가 아님. |
| 플랫폼과 모달리티가 교락됨 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | §3.3 확인 | 일치 | A | 텍스트 Wysa·음성 ChatGPT-5·다중모달 Replika. 순수 모달리티 인과효과로 해석하기 어려움. |
| Peng은 의존을 측정하지 않음 | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1724313/full) | 측정 구성개념 확인 | 일치 | A | 의존 증가의 직접 근거로 인용 불가. |
| MIT/OpenAI RCT에서 모달리티 효과가 비유의하고 많이 사용할수록 결과가 나쁨 | Wiki 슬러그만 제시 | 원문 URL·해당 분석 위치의 제공 여부 점검 | 확인불가 | C | 노트의 ‘재조사 안 함’ 범위를 유지. 배정 조건 효과와 자발적 사용량의 연관성을 구분해야 함. |
| APS URL이 AIED 5문항 척도 연구 | [APS 61393](https://www.psychologicalscience.org/conventions/archive/2026annual/paper/61393/) | 공식 제목·초록 직접 확인 | 불일치 | C | 실제로는 **Development of a Measure for Parasocial Relationships with AI Companions**. 전문가 내용타당도 연구이며 제시 표본·척도 결과 없음. |
| AIED: 5문항·단일요인·5,855명·성별 및 학교급 불변성 | [APS 61393](https://www.psychologicalscience.org/conventions/archive/2026annual/paper/61393/) | 별도 연구 검색 후 [프리프린트 초록 재게시](https://sciety.org/articles/activity/10.31234/osf.io/yhetz_v1) 확인 | 일치 | B | 수치는 **별도 AIED 프리프린트**와 일치. 중국 청소년 표본. DOI 10.31234/osf.io/yhetz_v1로 출처 교체 필요. |
| AIED가 APS 포스터이며 정식 발표 전 | 위 APS URL | APS 발표물과 별도 AIED 자료 대조 | 확인불가 | C | 잘못 연결된 URL로 발표 형태·상태를 판단할 수 없음. 기준일에는 APS 행사도 이미 지난 상태. |
| AI Attachment Scale: 정서적 친밀·사회적 대체·규범적 존중의 3요인, 신뢰도·타당도 양호 | URL 없음 | [출판사 논문 검색 색인](https://doi.org/10.1016/j.chbr.2025.100912) 확인 | 일치 | B | 논문 특정 성공. 직접 열람은 403. 최종 척도는 15문항으로 소개됨. |
| 위 AI Attachment Scale 논문은 2025년 | URL 없음 | 출판사 권호 서지 대조 | 불일치 | C | 확인된 권호는 **2026년 3월, 제21권**. DOI의 ‘2025’만으로 출판연도를 정하면 안 됨. |
| Hwang 등의 종단 연구: 의존 내성·금단 하위척도 사용 | [arXiv PDF](https://arxiv.org/pdf/2510.10079) | [저자 제공 PDF](https://angelhwang.github.io/doc/AI_Companion_arXiv.pdf) 측정표 확인 | 일치 | A | 원래 arXiv PDF는 용량 제한으로 열람 실패했으나 저자본에서 확인. |
| 모든 다문항 척도의 Cronbach α>0.7 | [arXiv PDF](https://arxiv.org/pdf/2510.10079) | 저자본 부록 표 5 확인 | 일치 | A | 표 주석에 명시됨. 신뢰도만으로 한국어판 타당도가 보장되지는 않음. |
| “음성이 자기개방을 줄인다”는 122명 ACM 2025 실험 | 논문·URL 미특정 | 식별 가능한 서지 제공 여부 점검 | 확인불가 | C | 현재 형태로 인용 불가. 노트도 인용하지 않겠다고 명시. |

**4. 개인정보·음성 재식별·법령**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| Huckvale·Torous·Larsen, 2019 JAMA Network Open 2(4):e192542 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 출판사 서지 확인 | 일치 | A | 제목·저자·연도·권호 일치. |
| 앱 36개 중 25개(69%)에 개인정보처리방침 존재 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 초록·표 1 확인 | 일치 | A | 25/36의 반올림 값. |
| 방침 보유 앱 25개 중 23개(92%)가 제3자 전송 언급 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 초록·결과 확인 | 일치 | A | 분모는 방침이 있는 25개. |
| 실제 제3자 전송은 전체 36개 중 33개(92%) | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 트래픽 분석 결과 확인 | 일치 | A | 바로 위 92%와 분모가 다름. |
| 29개(81%)가 Google·Facebook 광고·분석 서비스로 전송 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 본문 결과 확인 | 일치 | A | **두 회사 중 한 곳 이상**으로 전송했다는 뜻. 29개 모두 양쪽에 전송했다는 뜻은 아님. |
| Google 전송 앱 28개 중 12개(43%), Facebook 전송 앱 12개 중 6개(50%)만 공개 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 본문·표 2 대조 | 일치 | A | 정확히는 **회사명을 특정해 공개한 비율**. 일반적인 제3자 전송 고지 비율과 구분 필요. |
| 미국·호주 상위 우울·금연 앱 대상이며 방침만으로 공유를 예측하기 어려움 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2730782) | 방법·논의 확인 | 일치 | A | 당시 표본의 결과. 모든 정신건강 앱의 현재 전송률이 아님. |
| Mozilla Replika 리뷰 날짜 2024-02-07 | [Mozilla](https://www.mozillafoundation.org/privacynotincluded/replika-my-ai-friend/) | 리뷰 날짜 확인 | 일치 | A | 해당 NGO 평가의 원페이지를 직접 확인. |
| Mozilla: 대화·사진·영상·음성 등 모든 상호작용 기록 수집을 지적 | [Mozilla](https://www.mozillafoundation.org/privacynotincluded/replika-my-ai-friend/) | 평가 본문·정책 인용 확인 | 일치 | A | **Mozilla가 그렇게 평가했다는 주장**에 대한 A. 현재 서비스 전체를 별도 감사한 결과는 아님. |
| Mozilla: 행동 데이터가 광고주에 공유·판매될 수 있다고 지적 | [Mozilla](https://www.mozillafoundation.org/privacynotincluded/replika-my-ai-friend/) | 평가 본문 확인 | 일치 | A | 이를 ‘민감한 대화 내용이 광고주에게 판매됐다’로 확대하면 안 됨. |
| Mozilla: 최소 보안 기준 미달·쿠키 거부 불가 | [Mozilla](https://www.mozillafoundation.org/privacynotincluded/replika-my-ai-friend/) | 평가 항목·본문 확인 | 일치 | A | Mozilla 자체 기준. 쿠키 거부 지적은 웹사이트에 관한 설명. |
| Mozilla: 정책이 종교·성적 지향·건강 등 민감정보를 입력할 수 있음을 명시 | [Mozilla](https://www.mozillafoundation.org/privacynotincluded/replika-my-ai-friend/) | 리뷰 내 정책 인용 확인 | 일치 | A | 해당 시점 정책의 인용. 입력 가능성과 광고 공유 여부는 별개. |
| Wiepert 등, 2024 JMIR AI 3:e52054 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | [출판사 원문](https://ai.jmir.org/2024/1/e52054) 확인 | 일치 | A | 서지 일치. |
| 화자 비교 건수와 오수락 수의 상관 r=0.69 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | 원문 결과 확인 | 일치 | A | **오수락 건수**와의 상관. 오수락률이나 재식별 성공률의 상관이 아님. |
| FA/TA 비율: 10⁵회 비교에서 0.02, 6×10⁶회에서 1.41, 약 3×10⁶회에서 1:1 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | 초록·결과 확인 | 일치 | A | 단위는 **쌍별 비교 횟수**. 후보 사람 300만 명이라는 뜻이 아님. |
| VoxCeleb 7,000명 이상, Mayo Clinic 941명·19,195개 녹음 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | 원문 데이터 설명 확인 | 일치 | A | VoxCeleb 합계는 7,363명으로 구체화 가능. |
| 저자는 큰 탐색 공간에서 실제 재식별 위험이 작아진다고 결론 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | 초록·논의 확인 | 일치 | A | 비교 증가로 오탐 후보가 늘어 정확한 식별이 어려워지는 맥락. |
| 화자식별 기술 발전으로 위험이 상승할 수 있음 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | 원문 논의 확인 | 일치 | A | 미래 위험에 관한 해석이며 상승 폭을 정량 예측하지 않음. |
| 이 연구가 정신건강 음성의 STT 직후 원본 폐기를 직접 입증 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11041495) | 연구 대상·개입 확인 | 확인불가 | C | 재식별 가능성은 뒷받침하지만 **STT 직후 폐기의 효과·적정성**을 비교하지 않음. 팀 정책 판단으로 표시해야 함. |
| 2026년 5월 PIPC 생성형 AI 이용자 가이드 발간 | [Daum 기사](https://v.daum.net/v/20260519222300715) | 기사와 [PIPC 공식 카드뉴스](https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS212&mCode=C040030000&nttId=12257) 대조 | 일치 | A | 공식 자료에 ‘26.5. 발간’ 표기. |
| 옵트아웃·대화 기록 저장 및 삭제·보관 정책 확인 안내 | [Daum 기사](https://v.daum.net/v/20260519222300715) | 기사·PIPC 공식 안내 확인 | 일치 | A | 공식 카드뉴스에서 확인 가능. |
| 누적 대화·문서에 포함된 정보가 개인 식별로 이어질 수 있음 | [Daum 기사](https://v.daum.net/v/20260519222300715) | PIPC 공식 카드뉴스 확인 | 일치 | A | 학교·진료 결과라는 구체 예시까지는 이번에 확인하지 못함. |
| 가이드가 국외 이전·보유 기간의 처리방침 확인을 안내 | [Daum 기사](https://v.daum.net/v/20260519222300715) | 제시 기사·공식 요약 대조 | 확인불가 | C | 보관 정책 확인은 확인됨. **국외 이전 관련 정확한 문구·위치**는 가이드 전체 원문 대조가 필요. |
| 제21조는 개인정보 파기 조항 | law.go.kr, 구체 URL 없음 | [현행 조문](https://law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1029334977) 직접 확인 | 일치 | A | 불필요해진 개인정보를 지체 없이 파기. 다른 법령의 보존 의무 예외 있음. |
| 제23조는 민감정보 처리 제한 조항 | law.go.kr, 구체 URL 없음 | [현행 조문](https://www.law.go.kr/lsLinkCommonInfo.do?ancYnChk=&chrClsCd=010202&lsJoLnkSeq=1020398539) 직접 확인 | 일치 | A | 별도 동의 또는 법령상 요구·허용 등 예외 존재. |
| 제39조의6이 ‘파기 특례’, 제39조의8이 ‘이용내역 통지’ | 해설서 목차, URL 없음 | [법령 연혁](https://www.law.go.kr/LSW/lsInfoP.do?ancNo=16930&ancYd=20200204&ancYnChk=0&chrClsCd=010202&efGubun=Y&efYd=20200805&lsiSeq=213857&nwJoYnInfo=Y) 대조 | 불일치 | C | **구법 설명을 현행 조문처럼 사용하면 오류.** 제39조의6은 소송기록 관련 조항으로 전면 개정됐고 과거 제39조의8 특례는 삭제됨. |
| ‘1년 미이용 시 파기·분리보관’이 현행 의무일 가능성 | 구체 URL 없음 | [PIPC 공식 폐지 안내](https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=C020010000&nttId=9573) 확인 | 불일치 | C | **유효기간제는 2023년 폐지.** 노트처럼 단정을 유보하는 데서 더 나아가 폐지 사실을 명시해야 함. |
| 법률상 목적 달성 시 파기 원칙과 ‘사용자 삭제 즉시 반영’이 동일한 의무 | 구체 URL 없음 | 제21조의 실제 문구 대조 | 불일치 | C | 법문은 ‘지체 없이’이며 보존 의무 예외가 있음. ‘즉시 반영’은 한벗의 더 엄격한 제품 정책으로 구분할 것. |

**5. 출처가 빠졌거나 설계 판단으로 남겨야 하는 주장**

| 주장 | 제시된 출처(URL) | 확인 방법 | 결과(일치/불일치/확인불가) | 등급(A/B/C) | 메모 |
|---|---|---|---|---|---|
| PsyCrisisBench·VERA-MH·JMIR 29편 체계적 고찰·AI suicide primer·Cox 메모리 연구의 근거 | Wiki 슬러그만 존재 | 인용 식별 가능성 점검 | 확인불가 | C | URL·정확한 제목·해당 문장·표가 없어 현재 노트만으로 검증 불가. |
| Fang RCT·de Freitas 외로움 연구가 음성·의존 관련 결론을 지지 | Wiki 슬러그만 존재 | 인용과 주장 연결 점검 | 확인불가 | C | 개별 연구에 어떤 주장을 귀속하는지 불명확함. |
| 모호하면 위험 쪽으로 분류하고 false positive를 허용해야 함 | McBain 등 | 연구에서 해당 임계값 정책을 시험했는지 점검 | 확인불가 | C | 연구 결과에서 도출한 설계 판단. 최적 임계값·오탐 허용 수준은 검증되지 않음. |
| safe mode의 ‘축소된 지속 연결’이 적절함 | Judd·CMAJ | 해당 모드의 비교 평가 여부 점검 | 확인불가 | C | 노트가 설계 판단이라고 명시한 것은 적절함. 효과가 입증됐다고 소개하면 안 됨. |
| 저장 전 4단계 승인·3단계 동의가 프라이버시 문제를 직접 완화 | Chen·Huckvale | 해당 설계의 효과 평가 여부 점검 | 확인불가 | C | 요구와 문제에 대응하는 설계 논리는 가능하나 효과 검증은 없음. |
| 제3자 광고·분석 SDK 제로, 원본 음성 폐기, 저장소·프롬프트 삭제 보장 | 논문에서 도출한 한벗 계획 | 인용 논문과 제품 구현 증거 구분 | 확인불가 | C | **제품 정책·구현 약속**. 논문으로 실제 이행 여부를 입증할 수 없음. |
| 웜 핸드오프 대 카드, 잠금의 위해·이익, 승인 마찰·이탈, 시간 제한·휴식 알림의 효과 연구를 찾지 못함 | 검색 기록 없음 | 검색 범위·방법 제공 여부 점검 | 확인불가 | C | ‘이번 조사에서 미확보’로 유지. ‘관련 연구가 없다’로 바꾸면 안 됨. |
| 정신건강 앱·음성·민감정보에 대한 보관 기간 권고 숫자를 찾지 못함 | 검색 기록 없음 | 특정 권고·공식 기준의 인용 여부 점검 | 확인불가 | C | 보편적 부재를 입증하지 못함. TTL은 관련 법적 보존 의무를 확인한 뒤 정책으로 정해야 함. |
| WHO·AFSP·National Action Alliance 공식 문서 및 한국 상담 의뢰 효과 근거를 미확보 | URL 없음 | 출처 제공 여부 점검 | 확인불가 | C | 기관명이나 전화번호의 존재와 **의뢰 효과의 실증 근거**는 구분해야 함. |

원문 수정 시에는 특히 **“Park의 4단계 분류 F1=0.88”, “MemCtrl의 96%”, “APS 링크의 AIED 척도”, “현행 제39조의6 파기 특례”로 읽힐 수 있는 표현을 우선 고치는 것이 필요합니다.**
