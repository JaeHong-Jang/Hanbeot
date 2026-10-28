---
title: "claim-tech-5-latency-target"
tags: ["tech", "voice-pipeline-latency-cost", "grade-A", "grade-B", "grade-C", "decision", "latency", "ttfa", "turn-detection", "paper-evidence"]
created: 2026-10-25T07:33:13.786Z
updated: 2026-10-26T05:47:52.265Z
sources: []
links: ["topic-tech-voice-pipeline-latency-cost.md", "overview-technology.md", "claim-tech-4-voice-pipeline-architecture.md", "src-salesforce-2026-voice-agent-tutorial.md", "src-livekit-2026-pipeline-docs.md", "src-kyutai-2024-moshi.md", "src-qwen-2025-omni-models.md", "src-stepfun-2025-step-audio-r1.md", "src-funaudiollm-2024-sensevoice.md", "src-mem0-2025-locomo-paper.md", "src-elevenlabs-2026-api-pricing.md", "topic-app-cost-latency-budget.md", "topic-app-paper-evidence.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-tech-5-latency-target

# claim-tech-5-latency-target

## 결정
**MVP 지연 목표는 사용자 발화 종료 → 첫 오디오(TTFA) P50 ≤ 1.0초, P95 ≤ 1.5초로 설정한다. 이는 실측값이 아니라 목표치다. 단계 예산: STT final ≤ 300ms, SER 병렬(추가 지연 0 목표), 메모리 prefetch(추가 ≤ 100ms), Claude TTFT ≤ 700ms, TTS 첫 청크 ≤ 200ms. turn detection(VAD endpointing)은 별도 측정 항목으로 둔다.**

상위: [[topic-tech-voice-pipeline-latency-cost]], [[overview-technology]], [[claim-tech-4-voice-pipeline-architecture]]

## 근거
- 유사 cascade 실측: 본문 755ms / 표 P50 947ms, min 729ms(Deepgram+vLLM+ElevenLabs) [B] [[src-salesforce-2026-voice-agent-tutorial]]
- 업계 단계 예산: STT 100–300ms, LLM TTFT 350–1,000ms, 총 ~800ms [B]; 컴포넌트 합 ~0.8s인데 체감 3–4s인 사례 → turn detection이 병목 가능 [A] [[src-livekit-2026-pipeline-docs]]
- S2S 참고 하한: Moshi 200ms(영어), Qwen3-Omni 이론 234ms, cloud 702ms, Step-Audio-R1 0.92s [[src-kyutai-2024-moshi]], [[src-qwen-2025-omni-models]], [[src-stepfun-2025-step-audio-r1]]
- SER 백본 처리: SenseVoice-S 70ms/10초(특정 조건) — 병렬화 시 추가 지연 "거의 없음"은 실측 필요(C) [[src-funaudiollm-2024-sensevoice]]
- 메모리 검색 Mem0 p95 1.44s(논문 조건) → 동기 호출 불가, prefetch 필수 [[src-mem0-2025-locomo-paper]]
- TTS 모델 지연 ElevenLabs Flash ~75ms(벤더) [[src-elevenlabs-2026-api-pricing]]

## 측정 프로토콜(검증 가능)
1. 클라이언트 타임스탬프: VAD end → STT final → LLM first token → TTS first chunk → 재생 시작
2. 주 1회 100턴 자동 측정, P50/P95 기록, 단계별 분해
3. 합격: P50 ≤ 1.0s, P95 ≤ 1.5s; 미달 시 (a) sentence-chunk 크기 축소 (b) Claude 모델 티어 조정 (c) endpointing 임계 조정 순으로 반복

## 비용 영향
- sentence-chunk streaming은 TTS 호출 수를 늘리지만 글자 수 과금이라 비용 중립
- prefetch는 세션당 1회 추가 검색 → 미미

## 미확인 리스크 (C)
- 한벗 구성의 실측값 부재(Claude·한국어 STT/TTS·SER·메모리 포함)
- 947 vs 755ms 불일치 원인
- gpt-realtime 공식 지연 수치 없음, Pipecat 실측 없음
- 국내 네트워크 → 해외 API(Claude, OpenAI) 왕복 지연은 별도 측정

---

## Update (2026-10-25T14:52:23.877Z)

## 앱 설계서 반영 (2026-10-25)
- P50 ≤ 1.0s 목표는 유지한다. 단 단계 예산 합계는 직렬 1.2s + 문장 집계 0.2–0.3s = 1.4–1.5s로 미달할 수 있다(비평 8).
- TTFA 시작점은 VAD 발화 종료(stop 대기 0.2s와 Smart Turn 판정 포함), 끝점은 클라이언트 첫 재생 이벤트로 고정한다. W2 1차 측정 후 P50 ≤ 1.5s로 조정할지 결정한다.
- 상세: [[topic-app-cost-latency-budget]]

---

## Update (2026-10-26T05:47:52.265Z)

## 2026-10-26 논문 보강
논문 보강으로 달라진 점 (전체: [[topic-app-paper-evidence]], 비용·지연: [[topic-app-cost-latency-budget]]):
- TTFA P50 ≤ 1.0s 목표는 유지. 사람 턴 간격 약 200ms(±250ms 언어 평균 차) [P15][P16], ChatGPT Voice 평균 약 1,370ms [P18]는 측정 조건이 달라 참고 맥락일 뿐 직접 비교하지 않는다. "달성 불가"·"상용보다 빠르다" 표현 금지.
- Smart Turn v3 한국어 96.85%(n=890, 벤더 자체셋)·CPU 12.6~94.8ms [P6]. 추론 시간이 TTFA에서 무시 가능한지는 W2 실측 전 미확인.
- 설계서 7.2 정의로 P50·P95를 자체 측정.

