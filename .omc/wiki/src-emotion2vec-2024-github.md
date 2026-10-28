---
title: "src-emotion2vec-2024-github"
tags: ["tech", "speech-emotion-recognition", "grade-A", "ser", "emotion2vec", "funasr", "license", "app-design"]
created: 2026-10-25T07:13:15.501Z
updated: 2026-10-25T14:52:35.441Z
sources: ["https://github.com/ddlBoJack/emotion2vec", "https://huggingface.co/emotion2vec/emotion2vec_plus_base", "https://huggingface.co/emotion2vec/emotion2vec_plus_large"]
links: ["claim-tech-1-ser-model.md", "topic-tech-speech-emotion-recognition.md", "src-ma-2024-emotion2vec.md", "src-funasr-2026-model-license.md", "overview-app-design.md"]
category: reference
confidence: high
schemaVersion: 1
---

# src-emotion2vec-2024-github

# src-emotion2vec-2024-github

## 서지정보
ddlBoJack/emotion2vec GitHub README 및 공식 HuggingFace 모델 카드 (emotion2vec_plus_base / emotion2vec_plus_large). 벤더(저자) 문서.

## URL
- https://github.com/ddlBoJack/emotion2vec
- https://huggingface.co/emotion2vec/emotion2vec_plus_base
- https://huggingface.co/emotion2vec/emotion2vec_plus_large

## 라이선스/상업 이용
- GitHub README에 **MIT** 배지 (코드)
- **정정**: 모델 가중치까지 MIT라고 일반화하면 안 됨. 공식 HF 카드는 `model-license`로 표시 → 상업 이용 전 약관 전문 확인 필요 (미확인)

## 핵심 수치
- emotion2vec+ seed: 201h fine-tune / base: 4,788h, 약 90M / large: 42,526h(160k시간 중 약 40k 사용), 약 300M
- 9-class 라벨: angry, disgusted, fearful, happy, neutral, other, sad, surprised, unknown
- 로드: `pip install -U funasr` → `AutoModel(model="iic/emotion2vec_plus_large", hub="hf")`, `granularity="utterance"`, `extract_embedding=True`
- RESD 리더보드 수치(base UA 79.8, large 69.1)는 집계 페이지 접근 실패로 **C(미확인)**; 원본 65.04만 논문에서 확인

## 검증 결과
- 등급 **A** (학습 규모, 파라미터, 라벨, FunASR 로드 모두 공식 문서와 일치)
- 문서상 지원 확인이며 실제 설치·실행 검증은 아님
- emotion2vec+ large 공식 정확도 표는 이미지로만 제공, 한국어 성능 미공개(검토 자료 기준)

## 한벗 적용 포인트
- MVP SER 후보: emotion2vec+ base(약 90M)를 FunASR로 로드, utterance 단위 추론 + embedding 추출 → [[claim-tech-1-ser-model]]
- 상업 서비스 전 가중치 라이선스 확인 필수 → [[topic-tech-speech-emotion-recognition]]
- 원 논문: [[src-ma-2024-emotion2vec]]

확인일: 2026-10-25

---

## Update (2026-10-25T14:52:35.441Z)

## 앱 설계서 사용 (2026-10-25)
- 설계서 [S38] (등급 A, 공식설명): HF 모델 카드 emotion2vec_plus_base. 90M, 16kHz, 9라벨, 스니펫.
- 설계서 [S39] (등급 A): ddlBoJack/emotion2vec 저장소. 반환 키, 코드 MIT.
- 검증(implementation_refs): emotion2vec 공식 RTF·지연 실측 보고가 "없다"는 두 페이지 범위에서만 확인(부재 입증 아님, C). 가중치 상업 이용 가능 여부는 라이선스만으로 확정 불가(관련 [[src-funasr-2026-model-license]]).
- 사용처: [[overview-app-design]] 의 5절 ④, 6.1절. 관련: [[claim-tech-1-ser-model]]
