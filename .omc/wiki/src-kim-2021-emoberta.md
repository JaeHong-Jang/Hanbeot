---
title: "src-kim-2021-emoberta"
tags: ["paper-evidence", "erc", "context", "grade-A"]
created: 2026-11-07T11:36:08.557Z
updated: 2026-11-07T11:36:08.557Z
sources: ["research_notes/회의 후속 조사/AB_맥락_개인화.md"]
links: ["topic-ser-context-personalization.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-kim-2021-emoberta

# src-kim-2021-emoberta

## 서지
Kim & Vossen, "EmoBERTa: Speaker-Aware Emotion Recognition in Conversation with RoBERTa", arXiv 2108.12009, 2021. 동료 심사 학회 게재는 확인 못 함.

## 수치
- RoBERTa 입력에 "화자명: 발화" 형식으로 과거(·미래) 발화를 이어 붙임. 512토큰까지.
- IEMOCAP 맥락 없음 56.09 → 과거만 68.57 (+12.48). MELD 63.46 → 65.61 (+2.15, 과거+미래).
- 화자명 제거 시 IEMOCAP 68.57 → 64.02 (화자 표시가 약 4.5점 기여).

## 한벗 적용
직전 6~10턴을 화자 표시와 함께 전달하는 제안의 근거. 과거 발화만으로 대부분의 이득. IEMOCAP은 라벨 복사 경향으로 이득이 과장될 수 있음.

## 사용처
[[topic-ser-context-personalization]] · [[topic-meeting-followup-ser-2026-11]]

