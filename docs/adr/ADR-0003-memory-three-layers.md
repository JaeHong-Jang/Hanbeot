# ADR-0003 기억 3층 구조

- 상태: 제안 (11/9 회의 결정 대기)
- 배경: 직전 N턴(6~10) / 원문 DB / 기억 에이전트의 3층 구조가 제안됨.
- 현재 기본값: 직전 10턴 전체 전달 + pgvector RAG(approved만). 기억 에이전트(`workers/summarize`)는 미확정.
- 구현: `memory.context_window(turns, n)`의 n은 `rules.yaml context_window_turns`. 4상태 전이(stated/inferred/confirmed/approved)는 확정이라 그대로.
- 대안: 2층(윈도우 + RAG), Mem0 승급(P1).
- 결정 시 할 일: rules.yaml의 n, summarize 워커 범위, 실험 0/2/6/10(`ml/ser/experiments/context_turns.py`).
- 근거: 설계서 5⑧, 구현-계획 §4
