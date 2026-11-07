# contracts

프런트·백엔드가 공유하는 계약. **계약 우선**: 서버 코드에서 스키마를 뽑지 않고, 이 폴더를 먼저 고친 뒤 양쪽이 맞춘다.

- `openapi.yaml` — REST (OpenAPI 3.1)
- `events/*.schema.json` — 통화 중 이벤트 (JSON Schema). 서버 `pipeline/events.py`와 `apps/web/src/shared/voice`가 같이 본다.

## 타입 다시 만들기

```
scripts/gen-types.sh        # 저장소 루트에서
```

`apps/web/src/entities/generated/api.d.ts`, `events.d.ts`가 생성된다. 손으로 고치지 않는다.
계약을 바꾸면 생성 파일도 같은 커밋에 넣는다.
