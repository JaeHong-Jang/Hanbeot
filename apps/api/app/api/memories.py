"""기억 목록·수정·삭제·승인 (P0-8, P0-9). 모든 질의는 인증 user_pk 기준 + RLS."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.domain.memory import MemoryState

router = APIRouter(prefix="/memories", tags=["memories"])


class MemoryItem(BaseModel):
    id: str
    block: str
    state: MemoryState
    text: str


@router.get("", response_model=list[MemoryItem])
async def list_memories() -> list[MemoryItem]:
    """TODO: 승인(approved)된 기억 목록."""
    raise HTTPException(status_code=501, detail="TODO: 기억 목록")


@router.post("/{memory_id}/approve", response_model=MemoryItem)
async def approve_memory(memory_id: str) -> MemoryItem:
    """TODO: domain.memory.transition(state, APPROVE) 후 임베딩 생성."""
    raise HTTPException(status_code=501, detail="TODO: 기억 승인")


@router.delete("/{memory_id}", status_code=204)
async def delete_memory(memory_id: str) -> None:
    """TODO: 기억 삭제 + tombstone 해시."""
    raise HTTPException(status_code=501, detail="TODO: 기억 삭제")
