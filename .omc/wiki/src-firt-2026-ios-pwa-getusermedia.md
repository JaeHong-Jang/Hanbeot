---
title: "src-firt-2026-ios-pwa-getusermedia"
tags: ["app-design", "grade-B", "ios", "pwa", "getusermedia", "webkit"]
created: 2026-10-25T14:46:33.260Z
updated: 2026-10-25T14:46:33.260Z
sources: ["https://firt.dev/notes/pwa-ios/", "https://bugs.webkit.org/show_bug.cgi?id=212040", "https://bugs.webkit.org/show_bug.cgi?id=273938"]
links: ["overview-app-design.md", "topic-tech-mvp-stack.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-firt-2026-ios-pwa-getusermedia

# src-firt-2026-ios-pwa-getusermedia
## 서지정보
Maximiliano Firtman(firt.dev) iOS PWA 노트 + WebKit Bugzilla 212040, 273938, 발행일 미표기, 확인일 2026-10-25, 유형 2차(개발자 노트)/버그 트래커
## 핵심 수치·사실 (설계서에서 쓴 것)
- iOS PWA getUserMedia 버그 보고
- 측정 조건: 주로 카메라 사례
## 검증 결과
- 등급 B(firt.dev) / A(Bugzilla 원문). 검증표(implementation_refs): 표의 "13.0부터 getUserMedia"는 일치(B, 개인 테스트 기반). 2025-2026 iOS PWA 안정성은 확인불가(C): 개발자 댓글·사용자 보고는 있으나 전체 안정성 미확정. 마이크 사례 아님에 주의.
## 사용처
- [[overview-app-design]] 의 5절 ①
- 관련: [[topic-tech-mvp-stack]]
