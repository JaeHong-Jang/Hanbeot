---
title: "src-livekit-2026-agents-github"
tags: ["app-design", "grade-A", "livekit", "repo", "license"]
created: 2026-10-25T14:49:38.845Z
updated: 2026-10-25T14:49:38.845Z
sources: ["https://github.com/livekit/agents", "https://raw.githubusercontent.com/livekit/agents/main/livekit-agents/pyproject.toml"]
links: ["overview-app-design.md", "src-livekit-2026-pipeline-docs.md", "topic-tech-mvp-stack.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-livekit-2026-agents-github

# src-livekit-2026-agents-github
## 서지정보
LiveKit, GitHub 저장소 agents + pyproject.toml, 발행일 미표기, 확인일 2026-10-25, 유형 저장소
## 핵심 수치·사실 (설계서에서 쓴 것)
- Apache-2.0, Python >=3.10
## 검증 결과
- 등급 A(설계서 정정 반영본). 검증표(implementation_refs) 정정: 이전 노트 "Python >=3.11"은 불일치(현재 `>=3.10,<3.15`), "버전 1.8.9"는 확인불가, "서버가 반드시 필요"는 불일치(`console` 모드는 외부 서버 없이 실행). 턴 감지 모델은 별도 LiveKit Model License. 스타 14.9k는 API 14,933과 근사 일치(B).
## 사용처
- [[overview-app-design]] 의 6.1절
- 관련: [[src-livekit-2026-pipeline-docs]], [[topic-tech-mvp-stack]]
