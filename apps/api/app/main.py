"""FastAPI 앱 조립: 라우터 등록, lifespan."""

from __future__ import annotations

from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

import structlog
from fastapi import FastAPI

from app.api import consents, deletion, health, memories, sessions, summaries

log = structlog.get_logger()


@asynccontextmanager
async def lifespan(_app: FastAPI) -> AsyncIterator[None]:
    """시작·종료 훅. DB 풀 등은 여기서 열고 닫는다 (TODO)."""
    log.info("startup")
    yield
    log.info("shutdown")


def create_app() -> FastAPI:
    """앱 팩토리."""
    app = FastAPI(title="hanbeot-api", lifespan=lifespan)
    for module in (health, sessions, consents, memories, summaries, deletion):
        app.include_router(module.router)
    return app


app = create_app()
