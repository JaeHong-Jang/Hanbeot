"""설정. 비밀값은 .env에서만 읽는다 (코딩 규약 §4)."""

from __future__ import annotations

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """환경 변수 → 설정. 코드에 비밀값을 쓰지 않는다."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    anthropic_api_key: str = ""
    rtzr_client_id: str = ""
    rtzr_client_secret: str = ""
    typecast_api_key: str = ""
    database_url: str = "postgresql+asyncpg://hanbeot:hanbeot@localhost:5432/hanbeot"
    voice_enabled: bool = False  # True일 때만 Pipecat을 import한다


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """Settings 싱글턴."""
    return Settings()
