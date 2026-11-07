---
title: "src-demszky-2020-goemotions"
tags: ["paper-evidence", "text-emotion", "label-scheme", "grade-A"]
created: 2026-11-07T11:37:32.091Z
updated: 2026-11-07T11:37:32.091Z
sources: ["research_notes/회의 후속 조사/EF_텍스트단위_감정분류.md"]
links: ["topic-ser-label-scheme-and-fusion.md", "topic-meeting-followup-ser-2026-11.md"]
category: reference
confidence: medium
schemaVersion: 1
---

# src-demszky-2020-goemotions

# src-demszky-2020-goemotions

## 서지
Demszky et al., "GoEmotions: A Dataset of Fine-Grained Emotions", ACL 2020. https://aclanthology.org/2020.acl-main.372 . 레딧 5.8만 문장, 27감정+중립, 평가자 3명(불일치 시 +2).

## 수치
- 같은 BERT에서 라벨을 묶을수록 상승: 27분류 F1 .46 → Ekman 6 .64 → 감성 4그룹(긍정·부정·애매·중립) .69. 중립이 라벨의 26%.
- 같은 노트 LLM 측면: 28클래스 GoEmotions에서 GPT-4 macro-F1 12.5%, 1,000문장 중 89개 라벨 지어냄.

## 한벗 적용
적은 범주로 시작(평가용 4감정, 서비스용 5감정)하고 Claude에는 고정 라벨 목록 + 정서가·각성 점수를 출력하게 하는 제안(미확정).

## 사용처
[[topic-ser-label-scheme-and-fusion]] · [[topic-meeting-followup-ser-2026-11]]

