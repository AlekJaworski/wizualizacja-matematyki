"""
Tutor Agent
===========
Orchestrates a multi-turn tutoring session using an LLM.

Architecture:
  - Stateless on the server: the frontend sends the full conversation
    history + belief state on each request.
  - The agent builds a system prompt from the belief state and node context,
    then calls the LLM and returns a structured TutorResponse.

Future extensions:
  - Tool use: the agent could call a "get_node_info" tool to look up
    node content from the knowledge graph.
  - Multi-step reasoning: the agent could plan a sequence of questions
    before responding.
"""

import os
import json
import httpx
from typing import Optional

from app.models.tutor import TutorRequest, TutorResponse, Message


ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages"
ANTHROPIC_MODEL = "claude-opus-4-5"


def build_system_prompt(request: TutorRequest) -> str:
    """
    Build a system prompt that gives the LLM full context:
      - Its role as a tutor
      - The student's current belief state
      - The active node (if any)
      - Language preference
    """
    lang = request.lang
    belief = request.belief_state

    known = [nid for nid, state in belief.beliefs.items() if state == "known"]
    unknown = [nid for nid, state in belief.beliefs.items() if state == "unknown"]
    uncertain = [nid for nid, state in belief.beliefs.items() if state == "uncertain"]

    lang_instruction = (
        "Odpowiadaj po polsku." if lang == "pl"
        else "Respond in English."
    )

    node_context = (
        f"\nThe student is currently looking at node: {request.node_id}."
        if request.node_id else ""
    )

    target_context = (
        f"\nThe student's learning goal is to understand node: {belief.target_node}."
        if belief.target_node else ""
    )

    return f"""You are an expert mathematics tutor for Polish high school students.
You are embedded in an interactive knowledge graph app (oczochodzi.pl).
{lang_instruction}

Your role:
- Explain concepts clearly and concisely.
- Use LaTeX for math (wrap in $...$ for inline, $$...$$ for display).
- Ask one guiding question at a time to check understanding.
- Adapt to the student's knowledge level based on their belief state.
- Be encouraging but honest about gaps.

Student's knowledge state (course: {belief.course_id}):
- Known nodes ({len(known)}): {', '.join(known[:10])}{'...' if len(known) > 10 else ''}
- Unknown nodes ({len(unknown)}): {', '.join(unknown[:10])}{'...' if len(unknown) > 10 else ''}
- Uncertain ({len(uncertain)}): {', '.join(uncertain[:10])}{'...' if len(uncertain) > 10 else ''}
{node_context}{target_context}

When you are confident the student knows or doesn't know something,
end your response with a JSON block in this exact format (no markdown fences):
BELIEF_UPDATE: {{"node_id": "known" or "unknown"}}

Keep responses concise — this is a chat UI, not an essay."""


async def run_tutor_agent(request: TutorRequest) -> TutorResponse:
    """
    Main entry point. Builds prompt, calls LLM, parses response.
    """
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        raise RuntimeError("ANTHROPIC_API_KEY not set")

    system = build_system_prompt(request)

    # Convert history to Anthropic format
    messages = [{"role": m.role, "content": m.content} for m in request.history]

    payload = {
        "model": ANTHROPIC_MODEL,
        "max_tokens": 1024,
        "system": system,
        "messages": messages,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        resp = await client.post(
            ANTHROPIC_API_URL,
            headers={
                "x-api-key": api_key,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
            },
            json=payload,
        )
        resp.raise_for_status()
        data = resp.json()

    raw_text: str = data["content"][0]["text"]

    # Parse optional BELIEF_UPDATE from response
    belief_updates: dict = {}
    suggested_node_id: Optional[str] = None
    message_text = raw_text

    if "BELIEF_UPDATE:" in raw_text:
        parts = raw_text.split("BELIEF_UPDATE:", 1)
        message_text = parts[0].strip()
        try:
            belief_updates = json.loads(parts[1].strip())
        except json.JSONDecodeError:
            pass  # Ignore malformed belief updates

    # TODO: parse SUGGEST_NODE: node_id if we want agent-driven navigation

    return TutorResponse(
        message=message_text,
        suggested_node_id=suggested_node_id,
        belief_updates=belief_updates,
    )
