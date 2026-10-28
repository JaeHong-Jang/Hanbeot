---
title: "overview-orchestra-team"
tags: ["orchestra", "team", "workflow", "models"]
created: 2026-10-25T06:41:03.594Z
updated: 2026-10-25T06:41:03.594Z
sources: []
links: ["overview-hanbeot-project.md"]
category: architecture
confidence: medium
schemaVersion: 1
---

# overview-orchestra-team

## 오케스트라 팀 구조

상세: `.omc/orchestra/TEAM.md`, 설정: `.omc/orchestra/team.json`, 호출: `.omc/orchestra/consult.sh`

| 층 | 역할 | 모델 | 실행 |
|---|---|---|---|
| 지휘부 | 지휘자 (계획·합성·Wiki 적재) | Claude Code Opus 5.5 | 현재 세션 |
| 지휘부 | 비평가 (계획·보고서 비판) | GPT-6 Astra | `consult.sh critic` (codex) |
| 지휘부 | 스캐너 (광역 리서치) | Gemini 4 Argon | `consult.sh scanner` (gemini) |
| 서브 | 리서처 ×N (트랙별 딥리서치) | Claude Sonnet 5.5 | Agent 도구 (deep-research 스킬) |
| 서브 | 검증자 (출처·수치 검증, A/B/C 등급) | GPT-6.1 Sol | `consult.sh verifier` (codex) |

파이프라인: Plan → Critique → Research → Verify → Synthesize → Ingest → Lint

규칙
1. 작성자와 검증자는 다른 모델이어야 한다.
2. Wiki에 source 페이지가 없는 근거는 보고서에 쓰지 않는다.
3. 수치는 출처·연도·표본 없이 적지 않는다. 등급 C(미확인)는 본문과 분리한다.

페이지 유형: `src-*`(출처 1건, reference) · `topic-*`(주제, pattern) · `claim-*`(사업계획서용 주장, decision) · `overview-*`(영역 종합, architecture)

관련: [[overview-hanbeot-project]]

