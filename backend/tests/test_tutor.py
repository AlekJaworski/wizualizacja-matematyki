"""
Basic tests for the tutor agent scaffolding.
Tests the prompt builder and response parsing without hitting the LLM.
"""

import pytest
from app.models.tutor import TutorRequest, BeliefState, Message
from app.agent.tutor import build_system_prompt


def make_request(**kwargs) -> TutorRequest:
    defaults = dict(
        history=[Message(role="user", content="Co to jest pochodna?")],
        belief_state=BeliefState(
            beliefs={"limits": "known", "derivatives": "uncertain"},
            course_id="math_pl",
        ),
        lang="pl",
    )
    defaults.update(kwargs)
    return TutorRequest(**defaults)


def test_system_prompt_contains_known_nodes():
    req = make_request()
    prompt = build_system_prompt(req)
    assert "limits" in prompt
    assert "Odpowiadaj po polsku" in prompt


def test_system_prompt_english():
    req = make_request(lang="en")
    prompt = build_system_prompt(req)
    assert "Respond in English" in prompt


def test_system_prompt_with_node_context():
    req = make_request(node_id="derivatives")
    prompt = build_system_prompt(req)
    assert "derivatives" in prompt


def test_system_prompt_with_target():
    req = make_request(
        belief_state=BeliefState(
            beliefs={},
            target_node="integrals",
            course_id="math_pl",
        )
    )
    prompt = build_system_prompt(req)
    assert "integrals" in prompt
