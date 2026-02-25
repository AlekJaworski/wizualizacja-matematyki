# oczochodzi.pl — Backend

FastAPI backend serving as:
- **LLM proxy** — no browser-direct Anthropic API calls
- **Tutor agent** — stateless orchestrator that builds context from the student's belief state and calls Claude

## Structure

```
backend/
  app/
    main.py              # FastAPI app, CORS, router wiring
    routes/
      tutor.py           # POST /api/tutor/chat
    agent/
      tutor.py           # Agent logic: prompt builder + LLM call + response parser
    models/
      tutor.py           # Pydantic models: TutorRequest, TutorResponse, BeliefState
  tests/
    test_tutor.py        # Unit tests (no LLM calls)
  requirements.txt
  .env.example
```

## Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# fill in ANTHROPIC_API_KEY in .env
```

## Run locally

```bash
uvicorn app.main:app --reload --port 8000
```

API docs: http://localhost:8000/docs

## API

### `POST /api/tutor/chat`

Request:
```json
{
  "history": [
    { "role": "user", "content": "Co to jest pochodna?" }
  ],
  "belief_state": {
    "beliefs": { "limits": "known", "derivatives": "uncertain" },
    "target_node": null,
    "course_id": "math_pl"
  },
  "node_id": "derivatives",
  "lang": "pl"
}
```

Response:
```json
{
  "message": "Pochodna to miara szybkości zmiany funkcji...",
  "suggested_node_id": null,
  "belief_updates": { "derivatives": "known" }
}
```

## Design decisions

- **Stateless server**: full conversation history is sent on every request. No session storage needed for MVP.
- **Belief state from frontend**: the frontend owns the belief state (in localStorage). The agent can *suggest* updates but the frontend applies them.
- **BELIEF_UPDATE protocol**: the agent embeds `BELIEF_UPDATE: {"node_id": "known"}` at the end of its message when confident. The frontend applies these to its local belief map.

## Deploy (Hetzner)

```bash
# On Hetzner VPS:
git pull
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
# or use systemd / supervisor for production
```
