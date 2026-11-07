# data

연구·평가용 데이터셋만 둔다. **서비스 사용자 데이터는 절대 넣지 않는다** (코딩 규약 §3).

## 데이터 사전

| 폴더 | 뜻 | 규칙 |
|---|---|---|
| `raw/` | 받은 그대로의 원본 | 수정·이름 변경 금지. 데이터셋마다 폴더 + `SOURCE.md` |
| `interim/` | 변환 중간물 (16kHz mono wav, 전사 jsonl) | 스크립트로 재생성 가능해야 함. 손 편집 금지 |
| `processed/` | 학습·평가 입력 최종본 `manifest.jsonl` | 한 줄 = 샘플 하나. `schemas/manifest.schema.json` 준수 |
| `eval/vN/` | 동결 평가 세트 | 바꾸면 버전 올리고 `eval/CHANGELOG.md`에 이유 |
| `schemas/` | JSON Schema (manifest, turn_event, memory_record) | git 추적 |

git 추적 대상은 `schemas/`와 README, `.gitkeep`뿐이다. 데이터 본체는 제외된다.

## 분할

화자 기준. `split` = `train | dev | calib | test`. 같은 `speaker_id`가 두 split에 있으면 `ml/common/manifest.py`가 에러를 낸다.

## 라이선스 3종

`license` 필드는 셋 중 하나로 시작한다. 불확실하면 가장 엄격한 쪽.
1. `open` — 재배포·상업 이용 가능 (출처 표기 의무는 `SOURCE.md`에)
2. `research-only` — 연구 목적만 (AI Hub 약관류). 상업 이용 판단 전까지 모델 가중치 배포 금지
3. `restricted` — 팀 내부 승인자만. 약관 확인 전 데이터 포함

## 민감도 규칙

음성 원본, 감정 라벨이 붙은 발화, 위기 시나리오, 우울·불안 점수는 `raw/sensitive/` 아래에만 둔다 (git 제외, 접근은 팀 내 승인자).

## 데이터셋 추가 방법

1. `raw/<이름>/`에 원본을 넣고 같은 폴더에 `SOURCE.md` 작성: 출처 URL, 받은 날, 라이선스 3종 중 하나, 민감정보 여부.
2. 변환 스크립트를 `ml/`에 두고 `interim/` → `processed/<이름>/manifest.jsonl` 생성.
3. `ml` 쪽 `uv run python -m ml.common.manifest <manifest 경로>`로 스키마·화자 분할 검증.
4. 평가 세트로 동결할 때만 `eval/vN/`으로 복사하고 `eval/CHANGELOG.md`에 기록.
