"""
oczochodzi.pl — Backend API
FastAPI server acting as:
  - LLM proxy (no browser-direct API calls)
  - Tutor agent orchestrator
  - (Future) curriculum builder agent
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import tutor

app = FastAPI(
    title="oczochodzi.pl API",
    description="Tutor agent backend for the math knowledge graph platform.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://oczochodzi.pl",
        "https://www.oczochodzi.pl",
        # Allow local dev
        "http://localhost:5173",
        "http://localhost:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tutor.router, prefix="/api/tutor", tags=["tutor"])


@app.get("/health")
async def health():
    return {"status": "ok"}
