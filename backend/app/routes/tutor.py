"""
Tutor API routes.
"""

from fastapi import APIRouter, HTTPException
from app.models.tutor import TutorRequest, TutorResponse
from app.agent.tutor import run_tutor_agent

router = APIRouter()


@router.post("/chat", response_model=TutorResponse)
async def tutor_chat(request: TutorRequest) -> TutorResponse:
    """
    Main tutoring endpoint.

    The frontend sends:
      - Full conversation history
      - Current belief state (known/unknown nodes)
      - Active node context (optional)
      - Language preference

    Returns:
      - Tutor's reply message
      - Optional belief updates
      - Optional next node suggestion
    """
    try:
        return await run_tutor_agent(request)
    except RuntimeError as e:
        raise HTTPException(status_code=503, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Agent error: {str(e)}")
