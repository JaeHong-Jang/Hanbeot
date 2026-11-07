---
title: "claim-app-13-tts-blind-test-protocol-w4"
tags: ["claim-app", "tts", "blind-test", "w4", "design-value"]
created: 2026-11-07T19:48:05.773Z
updated: 2026-11-07T19:48:05.773Z
sources: ["research_notes/Scopus 조사/03_tts_humanlike_literature.md", ".omc/orchestra/reviews/20261108_041922_verify_03_tts_humanlike_literature.md"]
links: ["topic-tts-humanlike-evidence-2026-11.md", "claim-tech-3-stt-tts-vendors.md", "topic-tts-opensource-candidates-2026-11.md"]
category: decision
confidence: medium
schemaVersion: 1
---

# claim-app-13-tts-blind-test-protocol-w4

# claim-app-13-tts-blind-test-protocol-w4

상위: [[topic-tts-humanlike-evidence-2026-11]] · [[claim-tech-3-stt-tts-vendors]] · [[topic-tts-opensource-candidates-2026-11]].

## 결정
W4에 한국어 TTS 블라인드 청취 테스트를 아래 설계로 실시해 Typecast 유지/이전을 판단한다. 설계값(인원·문항·통과선·형식)은 **팀 제안이며 문헌이 정한 값이 아니다**.

## 설계
- 후보: Typecast ssfm(현행 기준), Qwen3-TTS 1.7B CustomVoice(Sohee), VoxCPM2, Fun-CosyVoice3. 버전·가중치·추론 설정 기록(공개 체크포인트가 논문 모델과 같은지 불확실).
- 청취자: 목표 30명 이상(최소 20). 근거는 MUSHRA 재표집(20명 순위 상관 >90%, 30명+30문항 >95%)이며 검정력 보장 아님. 구성에 따라 총원이 30 미만이 되지 않게 구성(대학생 20+ / 전문가 5~10).
- 문항: 30개 이상 층화(위로·공감 8 / 맞장구 4 / 되묻기 4 / 숫자·시간·주소 6 / 존댓말 4 / 긴 문장 4 / 감정 불일치 4). 대본은 한벗 응답 로그 + CoreaSpeech Numeric 스타일. raw와 정규화본 중 하나를 전 시스템 동일 적용(엔진 자체 정규화 비교는 별도 raw 조건).
- 1단계 전문가 사전 점검: 숫자·고유어·존댓말·누락·잡음 오류 표기. 오류율은 별도 보고.
- 2단계 MUSHRA 기준음 숨김(hidden reference), "사람 같음"과 "듣기 편함" 2축 분리, 페이지당 12개 이하.
- 3단계 직전 2턴 맥락 제시 후 Typecast 대비 1:1, **7점 CMOS 평정**(이진 선호만으로는 CMOS 계산 불가) + 사람/불확실/기계 3택(1/0.5/0, ATT 방식).
- 통제: -23 LUFS, wav 24kHz, 앞뒤 무음 100ms, 성별·연령대 일치, 무작위 순서, 시스템당 12~15문항 균형 라틴 방격(배정표로 20~25분 검증 필요), 지시문·척도 라벨 전문 기록.
- 분석: 혼합효과 모형(청취자·문항 임의효과), 부트스트랩 95% CI, Holm 보정. 반복 청취의 군집 구조 때문에 모든 투표를 독립 시행으로 보는 단순 이항검정 지양.
- 채택 기준(팀 제안, 문헌 근거 아님): Typecast 대비 CMOS 유의하게 +0.3 이상 또는 맥락 조건 승률 60% 이상, 그리고 오류율이 Typecast 이하일 때만 이전 검토. 유의성과 효과 크기 기준을 구분해 보고.

## 한국어 함정
숫자 읽기(고유어/한자어), 해요체 끝 억양, 연음·경음화 오류, 필러·맞장구 억양 변이, 속도 0.9 가설 무근거.

