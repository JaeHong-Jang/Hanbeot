"""통화 세션 생성·종료, WebRTC 오퍼 교환 (P0-1). 로직은 아직 없다."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.domain.modes import Mode

router = APIRouter(prefix="/sessions", tags=["sessions"])


class CreateSessionRequest(BaseModel):
    mode: Mode = Mode.LISTEN


class SessionResponse(BaseModel):
    session_id: str
    mode: Mode


@router.post("", response_model=SessionResponse, status_code=201)
async def create_session(body: CreateSessionRequest) -> SessionResponse:
    """TODO: 세션 생성, 동의 확인 후 파이프라인 구성 (pipeline.build)."""
    raise HTTPException(status_code=501, detail="TODO: 세션 생성")


@router.delete("/{session_id}", status_code=204)
async def end_session(session_id: str) -> None:
    """TODO: 세션 종료, 요약 작업 큐 등록."""
    raise HTTPException(status_code=501, detail="TODO: 세션 종료")
