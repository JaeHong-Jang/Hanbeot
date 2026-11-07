"""삭제 요청 → 삭제 큐 (P0-10, 설계서 5⑩-4)."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/deletion", tags=["deletion"])


class DeletionRequestResponse(BaseModel):
    request_id: str
    status: str


@router.post("", response_model=DeletionRequestResponse, status_code=202)
async def request_deletion() -> DeletionRequestResponse:
    """TODO: deletion_queue에 행 추가. 24h 이내 처리가 목표(운영 DB 기준)."""
    raise HTTPException(status_code=501, detail="TODO: 삭제 요청")
