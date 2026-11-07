"""통화 후 요약·승인 후보 (P0-8, 설계서 5⑫)."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/summaries", tags=["summaries"])


class SummaryResponse(BaseModel):
    session_id: str
    summary: list[str]
    next_step: str | None = None


@router.get("/{session_id}", response_model=SummaryResponse)
async def get_summary(session_id: str) -> SummaryResponse:
    """TODO: 세션 요약과 기억 후보(stated|confirmed)."""
    raise HTTPException(status_code=501, detail="TODO: 요약 조회")
