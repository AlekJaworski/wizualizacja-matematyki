"""
Pydantic models for the tutor agent API.
"""

from typing import Literal, Optional
from pydantic import BaseModel


class Message(BaseModel):
    role: Literal["user", "assistant", "system"]
    content: str


class BeliefState(BaseModel):
    """
    Snapshot of the student's knowledge state from the frontend.
    Maps node_id -> "known" | "unknown" | "uncertain"
    """
    beliefs: dict[str, Literal["known", "unknown", "uncertain"]] = {}
    target_node: Optional[str] = None   # deep-dive goal node, if any
    course_id: str = "math_pl"


class TutorRequest(BaseModel):
    """
    Frontend sends this when the student asks the tutor a question
    or the tutor is asked to explain a node.
    """
    history: list[Message]              # conversation so far
    belief_state: BeliefState           # student's current knowledge map
    node_id: Optional[str] = None       # node currently open (optional context)
    lang: Literal["pl", "en"] = "pl"


class TutorResponse(BaseModel):
    """
    Backend responds with the tutor's next message and optional actions.
    """
    message: str                        # tutor reply (may contain LaTeX)
    # Optional: the agent may suggest the next node to study
    suggested_node_id: Optional[str] = None
    # Optional: belief updates the agent recommends
    belief_updates: dict[str, Literal["known", "unknown"]] = {}
