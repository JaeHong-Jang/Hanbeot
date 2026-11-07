"""3단 동의 조회·변경·통화 중 철회 (P0-7, 설계서 5⑩)."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/consents", tags=["consents"])


class ConsentBody(BaseModel):
    basic: bool
    voice: bool
    sensitive: bool


@router.get("", response_model=ConsentBody)
async def get_consents() -> ConsentBody:
    """TODO: 인증 사용자의 현재 동의 조회."""
    raise HTTPException(status_code=501, detail="TODO: 동의 조회")


@router.put("", response_model=ConsentBody)
async def update_consents(body: ConsentBody) -> ConsentBody:
    """TODO: 동의 변경. 철회면 domain.consent.on_withdraw 결과를 실행."""
    raise HTTPException(status_code=501, detail="TODO: 동의 변경")
