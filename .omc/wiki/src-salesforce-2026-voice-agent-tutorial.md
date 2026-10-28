---
title: "src-salesforce-2026-voice-agent-tutorial"
tags: ["tech", "voice-pipeline-latency-cost", "grade-B", "latency", "cascade", "ttfa", "qwen-omni", "app-design", "paper-evidence"]
created: 2026-10-25T07:18:31.064Z
updated: 2026-10-26T05:51:47.212Z
sources: ["https://arxiv.org/abs/2603.05413", "https://www.emergentmind.com/papers/2603.05413"]
links: ["claim-tech-5-latency-target.md", "claim-tech-4-voice-pipeline-architecture.md", "topic-tech-voice-pipeline-latency-cost.md", "src-qwen-2025-omni-models.md", "overview-app-design.md", "topic-app-paper-evidence.md", "topic-app-impl-audio-stt-turn.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-salesforce-2026-voice-agent-tutorial

# src-salesforce-2026-voice-agent-tutorial

## 서지정보
Salesforce AI Research, 음성 에이전트 구축 튜토리얼 논문 (cascade vs speech-to-speech 지연 실측), arXiv 2603.05413 (2026-03).

## URL
- https://arxiv.org/abs/2603.05413
- https://www.emergentmind.com/papers/2603.05413 (2차 요약)

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치
- Cascade: Deepgram(streaming STT) + vLLM(function calling) + ElevenLabs(streaming TTS)
  - 본문 time-to-first-audio **755ms**, best case 729ms
  - 표(추정 E2E TTFA): **P50 947ms, min 729ms** — 본문과 표가 서로 다른 통계량. **단일 대표값으로 쓰기 어려움**
- Qwen3-Omni DashScope Realtime API(cloud) audio-to-audio 평균 **702ms** (A)
- 로컬 vLLM Thinker 516ms는 **음성→텍스트(음성 출력 없음)**; 로컬 Transformers 풀 파이프라인 145,694ms(약 146초, H200 조건) (A)

## 검증 결과
- 755/729ms: 등급 **B** (본문-표 불일치). "947은 버전 차이" 추정: **C** (같은 원문에 두 값이 공존, 원인 미확인)
- 702ms, 516ms, 146s: 등급 **A**
- **C**: "동일 cascade면 한벗 TTFA 0.75–1초 예상"은 Claude·한국어 STT/TTS·메모리·SER 포함 실측이 아님 → **목표치**로 표기

## 한벗 적용 포인트
- 스트리밍 cascade의 참고 범위 **0.73–0.95초**(P50 기준 약 0.95초). 한벗 MVP 지연 **목표** 설정 근거 → [[claim-tech-5-latency-target]]
- cloud S2S(702ms)와 cascade(755–947ms)의 차이가 크지 않아 SER 제어 가능성이 더 큰 cascade 선택을 정당화 → [[claim-tech-4-voice-pipeline-architecture]]
- 관련: [[topic-tech-voice-pipeline-latency-cost]], [[src-qwen-2025-omni-models]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:51:57.771Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S17] (등급 B, 독립연구). 사용: cascade TTFA 본문 755ms, 표 P50 947ms. 조건: Deepgram + vLLM + ElevenLabs, 영어, 본문·표 불일치.
- 검증: 검증표에 해당 행 없음 -> 설계서 등급 유지. 두 수치 병기 필요.
- 사용처: [[overview-app-design]] 의 7.2절. 관련: [[claim-tech-5-latency-target]]

---

## Update (2026-10-26T05:51:47.212Z)

## 2026-10-26 논문 보강 (설계서 [P19])
- 수치: cascade TTFA 본문 755ms, 표 P50 947ms. 본문과 표가 불일치하므로 등급 B. 영어.
- 적용: 유사 cascade 구성의 참고치(설계서 S17)일 뿐 한벗 목표의 직접 근거가 아니다. 한벗은 설계서 7.2 정의로 P50·P95를 직접 잰다.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-audio-stt-turn]]
