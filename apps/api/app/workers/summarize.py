"""통화 후 요약 + 기억 후보 추출 (설계서 5⑫, 기억 에이전트는 미확정)."""

from __future__ import annotations


async def run_once() -> None:
    """종료된 세션 중 요약 안 된 것을 1회 처리한다. 세션당 추출은 1회뿐이고 과거 전사는 재처리하지 않는다.

    저장 직전에 사용자 존재와 동의를 다시 확인한다 (write-time check, 5⑩-3).
    TODO: 구현.
    """
    raise NotImplementedError
