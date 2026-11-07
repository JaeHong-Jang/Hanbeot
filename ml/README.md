# hanbeot-ml

모델 실험·평가. `apps/api`를 import하지 않는다 (README 경계 규칙 3). 공유는 `data/schemas`와 `common/metrics.py`뿐.

```
uv sync --group dev
uv run pytest -q
uv run python -m ser.evaluate --manifest ../data/processed/<set>/manifest.jsonl --split test
uv run python -m latency.ttfa turn_events.jsonl
```

수치 목표(UA, TTFA 등)는 테스트가 아니라 이 평가 스크립트가 보고한다. 테스트는 "정의대로 계산되는가"만 본다.
