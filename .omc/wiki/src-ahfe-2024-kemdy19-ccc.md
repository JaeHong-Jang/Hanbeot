---
title: "src-ahfe-2024-kemdy19-ccc"
tags: ["tech", "speech-emotion-recognition", "grade-A", "korean-dataset", "kemdy19", "wav2vec", "hubert", "paper-evidence", "ser", "ser-limits", "korean"]
created: 2026-10-25T07:13:26.577Z
updated: 2026-10-26T05:51:54.726Z
sources: ["https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68", "https://scholar.gist.ac.kr/handle/local/21974"]
links: ["claim-tech-1-ser-model.md", "topic-tech-speech-emotion-recognition.md", "src-etri-2020-kemdy.md", "src-sogang-2024-aihub-hubert.md", "topic-app-paper-evidence.md", "topic-app-impl-ser-cues.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-ahfe-2024-kemdy19-ccc

# src-ahfe-2024-kemdy19-ccc

## 서지정보
1. AHFE/CMS Conferences 논문: KEMDy19 dimensional SER (Wav2Vec 2.0 / HuBERT 기반), ISBN 978-1-958651-90-2, article 68.
2. GIST 2021 연구: 한국어 wav2vec 특징 vs 기존 음향 특징 (SVM/MLP).

## URL
- https://openaccess.cms-conferences.org/publications/book/978-1-958651-90-2/article/978-1-958651-90-2_68
- https://scholar.gist.ac.kr/handle/local/21974

## 라이선스/상업 이용
학술 논문. 해당 없음.

## 핵심 수치
- KEMDy19 dimensional(arousal/valence) SER mean CCC: Wav2Vec 2.0 **0.5473**, HuBERT **0.5271** (전체 감정 범주 조건; 4범주 조건 수치는 별도 존재)
- GIST 2021: 한국어 wav2vec 특징이 기존 음향 특징 대비 SVM/MLP에서 더 높은 WA/UA

## 검증 결과
- 두 주장 모두 등급 **A** (기관 저장소 초록과 일치)

## 한벗 적용 포인트
- 한국어 SSL 백본(wav2vec/HuBERT)이 전통 음향 특징을 능가한다는 한국어 직접 근거 → SER 후보 선정의 뒷받침 → [[claim-tech-1-ser-model]]
- 차원형(arousal/valence) 라벨도 KEMDy19에 존재 → 한벗 "강도" 지표 설계 참고 → [[topic-tech-speech-emotion-recognition]]
- 관련: [[src-etri-2020-kemdy]], [[src-sogang-2024-aihub-hubert]]

확인일: 2026-10-25

---

## Update (2026-10-26T05:51:54.726Z)

## 2026-10-26 논문 보강 (설계서 [P27])
- 수치: valence·arousal 평균 CCC Wav2Vec2 0.5473, HuBERT 0.5271. 한국어, 등급 A.
- 교정: 분류 정확도가 아닌 차원 회귀 CCC다. "KEMDy19 0.5초 UA −10.61%, 3초 −5.08%"는 원문 조회 실패로 %/%p 불명(미확인, §4). KEMDy20 외부 평가자 10명도 미확인.
- 적용: 한국어 SSL 백본 참고만.
- 사용처: [[topic-app-paper-evidence]] · [[topic-app-impl-ser-cues]]
