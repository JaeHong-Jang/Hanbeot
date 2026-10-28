---
title: "topic-tech-empathetic-dialogue"
tags: ["tech", "empathetic-dialogue", "grade-A", "grade-B", "grade-C", "empathy", "esconv", "motivational-interviewing", "evaluation", "topic"]
created: 2026-10-25T07:28:38.254Z
updated: 2026-10-25T07:28:38.254Z
sources: []
links: ["overview-technology.md", "claim-tech-7-dialogue-mode-strategy.md", "src-ayers-2023-jama-chatbot-empathy.md", "src-lee-2024-llm-empathy.md", "src-conll-2026-empathy-raters.md", "src-wenger-2026-ai-empathy-paradox.md", "src-kang-2024-esconv-llm-limits.md", "src-esc-eval-2024-frameworks.md", "src-basar-2024-mi-reflection.md", "topic-tech-speech-emotion-recognition.md", "topic-tech-long-term-memory.md", "topic-tech-voice-pipeline-latency-cost.md", "topic-tech-safety-crisis-detection.md"]
category: pattern
confidence: medium
schemaVersion: 1
---

# topic-tech-empathetic-dialogue

# topic-tech-empathetic-dialogue

대화 품질·공감 영역 종합. 한벗 핵심 기능 ②(들어줘/조언/정리 모드)의 기술 근거. 상위: [[overview-technology]]. 결정: [[claim-tech-7-dialogue-mode-strategy]].

## 요약
LLM 응답은 블라인드 평가에서 반복적으로 인간보다 공감적으로 평가된다(Ayers 2023 78.6% 선호; Lee 2024 N=192/202; CoNLL 2026 평가자 1,000명). 그러나 (a) AI 작성임을 알리면 "들어줬다"는 느낌이 감소하고 귀속 후 선호는 인간이 57–62%, (b) 응답이 담화 기능 수준에서 정형화되어 있으며, (c) ESConv에서 LLM은 지지 전략 선택에 편향이 있어 단독으로는 좋은 emotional supporter가 아니다. MI reflection은 GPT-4가 인간 작성과 comparable 품질이므로, 모드별로 전략을 고정하는 설계가 타당하다.

## 확인된 발견 (A/B)
- Ayers JAMA IM 2023: 195질문·585평가, 챗봇 선호 78.6%(CI 75.0–81.8), 공감적 비율 9.8배, 길이 평균(IQR) 52 vs 211단어 [[src-ayers-2023-jama-chatbot-empathy]]
- Lee ACII 2024: GPT-4 Turbo·Llama2·Mistral 모두 인간 응답보다 공감적으로 평가(N=192, 202) [[src-lee-2024-llm-empathy]]
- CoNLL 2026: 평가자 1,000명, LLM 우위 + 인간·LLM judge 모두 in-group bias; 정형성(formulaic) 지적 [[src-conll-2026-empathy-raters]]
- Wenger 2026: 귀속 후 인간 공감 선택 57–62%(B); AI 라벨이 heard 느낌 감소(Yin 2024 선행연구)(B) [[src-wenger-2026-ai-empathy-paradox]]
- Kang ACL 2024: 전략 선호 편향, 외부 도움 없는 LLM 한계; 2025 ESC 재정의(한 턴 내 다중 전략 연속 생성) [[src-kang-2024-esconv-llm-limits]]
- 평가: FEEL(자동 지표 상관 낮음, LLM judge), ESC-Eval(역할놀이+수동 평가), HEART 5축, ESC-Skills(100케이스, GPT-5.4 judge + 인간 3명) [[src-esc-eval-2024-frameworks]]
- Başar 2024: GPT-4 MI reflection이 인간 작성과 comparable, 4기준(appropriateness, specificity, naturalness, engagement); COLING 2025 후속 [[src-basar-2024-mi-reflection]]

## 미확인 (C) — 본문 분리
- Ayers "중앙값" 표기(→ 평균 IQR) [[src-ayers-2023-jama-chatbot-empathy]]
- Xie ACL Findings 2024 MI 귀납 규칙 논문(목록 접근 실패, Anthology ID 필요) [[src-basar-2024-mi-reflection]]
- "MI reflection 품질 = 인간 상담사 수준 상담 능력"으로의 확대 금지
- EmpatheticDialogues·ESConv 원 논문 규모 미확인; 한국어 empathetic dialogue 데이터셋·한국어 LLM 공감 평가 미발견

## 설계 패턴
1. **모드 = 전략 고정**(ESConv 전략 체계 매핑): 들어줘 = reflection/restatement/affirmation(조언 금지, MI reflection 프롬프트), 조언 = providing suggestions/information 허용, 정리 = restatement + summarization. 한 턴 내 reflection → question 연속 허용.
2. **specificity 주입**: SER 라벨(예: "목소리가 평소보다 느리고 멈춤이 많네")과 메모리(`user_stated_facts`)의 구체 맥락을 응답에 반영해 정형화 비판에 대응 → [[topic-tech-speech-emotion-recognition]], [[topic-tech-long-term-memory]]
3. **짧은 응답**: 음성 매체이므로 Ayers의 211단어식 장문 대신 1–2문장 reflection 우선(TTS 비용·지연에도 유리 → [[topic-tech-voice-pipeline-latency-cost]])
4. **평가 프로토콜**: LLM-as-judge(FEEL식) + 인간 평가(Başar 4기준 + HEART Empathic Responsiveness/Attunement), 30명 테스트 전사에서 100 턴 샘플, 평가자 3명. in-group bias 때문에 LLM judge 단독 금지.
5. **투명성**: AI임을 숨기지 않음(AI 라벨 페널티 감수) → [[topic-tech-safety-crisis-detection]]

