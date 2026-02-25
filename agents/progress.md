# Agent Progress Log

This file tracks incremental work done by AI agents on this project.
Each session appends a new entry. Read this before starting any new task.

---

## Project Snapshot (as of 2026-02-24)

### Architecture
- **Framework:** React 18 + Vite 6, plain JSX (no TypeScript)
- **Rendering:** Custom SVG canvas — no D3 or graph library
- **Math:** KaTeX (CDN + npm)
- **Deploy:** GitHub Pages via GitHub Actions (`deploy.yml`, `deploy-dev.yml`)

### File Map
```
src/
  components/
    CurriculumGraph.jsx     # Root component, all state wiring (426 lines)
    graph/
      EdgeLayer.jsx         # SVG edges + arrowheads
      NodeLayer.jsx         # SVG nodes, diagnostic colouring
    panels/
      InfoPanel.jsx         # Browse-mode node detail sidebar
      QuizPanel.jsx         # Multiple-choice quiz card
      DiagnosticPanel.jsx   # Quick-mode sidebar
      DeepDivePanel.jsx     # Deep-dive sidebar (247 lines)
    ui/
      FilterBar.jsx         # Search + scope/section toggles
      Legend.jsx            # Colour legend
      GoalSelectionModal.jsx  # Deep-dive target picker modal (168 lines)
  data/
    curriculum.js           # Vite glob loader, YAML frontmatter parser
    edges.js                # ~100 directed prerequisite edges
    sections.js             # Section & scope colours/labels
    nodes/<id>/
      node.md               # Topic metadata (62 topics)
      questions/01-03.md    # Quiz questions (186 files)
  engine/
    adjacency.js            # prereqs/dependents maps
    belief.js               # Belief propagation + Beta distribution engine
    layout.js
    ranks.js
    simulation.js           # Force-directed layout
    layouts/
      index.js              # Layout registry
      nPartite.js           # Default layout
      spectral.js
      topoRank.js
  hooks/
    useDiagnostic.js        # All diagnostic state (204 lines)
    useNodeDrag.js
    usePanZoom.js
  styles/
    tokens.js               # Design tokens (dark theme)
  utils/
    latex.js                # KaTeX helper
```

### Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Graph canvas (SVG) | Complete | Pan, zoom, drag nodes |
| 62 topic nodes | Complete | All with metadata + 3 questions each |
| ~100 directed edges | Complete | Full DAG |
| 3 graph layouts | Complete | N-Partite (default), Topo Rank, Spectral |
| Browse mode (InfoPanel) | Complete | Prereqs/dependents shown |
| Quick diagnostic mode | Complete | ERV-based binary belief propagation |
| Deep-dive diagnostic mode | Complete | Beta distribution, subgraph-restricted |
| GoalSelectionModal | Complete | Searchable, section-grouped, keyboard+backdrop dismiss |
| FilterBar | Complete | Search + scope + section filters |
| Legend | Complete | |
| CI/CD | Complete | GitHub Pages deploy |
| README | Missing | No root-level documentation |
| Tests | Missing | No test framework configured |
| Mobile/touch | Missing | Mouse-only interaction |
| Persistence | Missing | State lost on refresh |

---

## Session: 2026-02-24 — Agent Setup + Modal Audit

### What was done
- Explored full project structure
- Audited `GoalSelectionModal.jsx` (168 lines): **complete and functional**
  - Full-screen overlay, backdrop blur, `z-index: 100`
  - Searchable input with `autoFocus`
  - Grouped by section (SP8, LP, LR, UNIV) with colour-coded topic pills
  - Hover effects on topic buttons
  - Backdrop click + `×` button + Escape key (wired in `CurriculumGraph.jsx:164`) to close
  - Footer shows `filtered / total` count
  - Wired in `CurriculumGraph.jsx:413-423` via `showGoalModal` state
- Created `agents/` directory and `agents.md` pointer at root

### Known issues / potential refinements for next session
- Modal header mixes English ("Deep-Dive Diagnostic") with Polish subtitle — consider making language-aware
- No keyboard navigation inside the modal (Tab through topics, Enter to select)
- Modal width is fixed at 440px — may clip on very small screens
- `mode` state in `useDiagnostic` is never reset to `"quick"` when diagnostic is turned off via the main toggle (only `resetDiagnostic` is called, which doesn't reset `mode`)
- Deep-dive: after completion, there is no easy way to start a new deep-dive for a different target without full reset

---

## Session: 2026-02-24 — Modal Refinements + Bug Fixes

### What was done
1. **Created `DiagnosticModeModal.jsx`** — new modal shown when turning on diagnostic mode
   - Fully Polish UI ("Wybierz tryb diagnozy", "Szybka diagnoza", "Szczegółowa analiza")
   - Two options: Quick (⚡) and Deep-Dive (◎)
   - Keyboard support (Enter to confirm, Escape to close)
   - Wired into `CurriculumGraph.jsx` via `showModePicker` state

2. **Fixed `mode` not resetting** — `resetDiagnostic()` in `useDiagnostic.js` now resets `mode` to `"quick"`

3. **Fixed repeated questions** — added session-level tracking of answered questions
   - New state `answeredQuestions` (Set of `"nodeId:index"` strings) in `useDiagnostic.js`
   - Updated `getQuestion()` in `curriculum.js` to accept `excludeIndices` parameter
   - Updated `QuizPanel.jsx` to receive `excludeIndices` and pass question index on answer
   - Questions are never repeated within a session (unless all questions for a node are exhausted)

4. **Improved `GoalSelectionModal.jsx`**
   - All labels now Polish (title: "Wybierz cel")
   - Added keyboard navigation: Arrow Up/Down to move, Enter to select
   - Made width responsive: `Math.min(440, window.innerWidth - 40)`
   - Added visual focus indicator (outline + different background)

### Files changed
- `src/components/ui/DiagnosticModeModal.jsx` — **new file**
- `src/components/ui/GoalSelectionModal.jsx` — updated
- `src/components/CurriculumGraph.jsx` — added mode picker modal + wiring
- `src/hooks/useDiagnostic.js` — added answeredQuestions tracking, fixed mode reset
- `src/data/curriculum.js` — updated `getQuestion()` to support exclusions
- `src/components/panels/QuizPanel.jsx` — added excludeIndices prop

### Feature Status updates
| Feature | Status | Notes |
|---------|--------|-------|
| Diagnostic mode picker | **NEW** | Choose Quick vs Deep-Dive on start |
| No repeated questions | **NEW** | Session-level tracking |
| GoalSelectionModal keyboard nav | Complete | Arrow keys + Enter |

---

## Session: 2026-02-25 — i18n, UX polish, Legend rework

### What was done
1. **Created `src/i18n.js`** — central translation file with ~70 keys in Polish and English.
   All UI strings now go through `t(key, lang)`. No more hardcoded text anywhere.

2. **Refactored header** — decluttered: layout buttons + diagnostic button + goal picker grouped
   on the right, hint text in the middle, title + counts on the left. Responsive wrapping.
   All strings via i18n.

3. **Full i18n sweep** across all components:
   - `FilterBar.jsx` — search placeholder, "All", section/scope labels, lang toggle tooltip
   - `InfoPanel.jsx` — "Prerequisites", "Enables", empty state messages
   - `QuizPanel.jsx` — "Check", confirm buttons, fallback messages
   - `DiagnosticPanel.jsx` — all stat labels, hints, session complete messages
   - `DeepDivePanel.jsx` — all labels, classified/unclassified, confidence, reset
   - `DiagnosticModeModal.jsx` — title, descriptions, cancel/next buttons
   - `GoalSelectionModal.jsx` — already Polish; wired to i18n

4. **Legend rework** (`Legend.jsx`)
   - Now collapsible (▶/▼ toggle) — doesn't clutter the canvas
   - Shows diagnostic node colours (known/unknown/frontier/unclassified) when `diagMode` is on
   - Sections split into labelled groups: "Działy" (scopes) and "Etapy" (stages)
   - `diagMode` prop passed from `CurriculumGraph.jsx`

### Files changed
- `src/i18n.js` — **new file**
- `src/components/CurriculumGraph.jsx` — header rewrite, i18n import, diagMode→Legend
- `src/components/ui/FilterBar.jsx` — i18n
- `src/components/ui/Legend.jsx` — collapsible + diagnostic colours
- `src/components/ui/DiagnosticModeModal.jsx` — i18n + lang prop
- `src/components/panels/InfoPanel.jsx` — i18n + empty states
- `src/components/panels/QuizPanel.jsx` — i18n
- `src/components/panels/DiagnosticPanel.jsx` — i18n
- `src/components/panels/DeepDivePanel.jsx` — i18n

---

## Session: 2026-02-25 — localStorage persistence

### What was done
1. **Created `src/hooks/useLocalStorage.js`**
   - Drop-in replacement for `useState` that syncs to localStorage
   - Handles `Set ↔ Array` conversion (localStorage can't store Sets natively)
   - Graceful fallback on corrupt data or private browsing (quota exceeded)
   - `clearSession()` utility wipes all `wizmat_v1_*` keys at once
   - Key prefix `wizmat_v1_` — easy to migrate/wipe when schema changes

2. **Persisted state in `useDiagnostic.js`**
   - `diagMode`, `mode`, `belief`, `targetNode`, `stats`, `answeredQuestions`, `betaBeliefs`
   - `quizNode` deliberately NOT persisted (in-flight question discarded on reload)
   - `resetDiagnostic()` now calls `clearSession()` — existing reset buttons handle clearing

3. **Persisted `lang` in `CurriculumGraph.jsx`**
   - Language preference survives page refresh

### What is NOT persisted (intentional)
- `quizNode` — discard open question on reload, cleaner UX
- `positions` / `viewTransform` — layout always recomputes from algorithm
- `filterScope/Section/searchTerm` — filters start fresh each visit

### Files changed
- `src/hooks/useLocalStorage.js` — **new file**
- `src/hooks/useDiagnostic.js` — all state switched to useLocalStorage
- `src/components/CurriculumGraph.jsx` — lang switched to useLocalStorage

---

## Next Steps (backlog)

### Learning mode (highest priority)
The vision: any node can be opened for study at any time, independent of diagnosis.
After diagnosis the system knows which topics are weak — learning mode surfaces those first.

- [ ] **Resource links per node** — add `resources` field to `node.md` frontmatter (list of URLs + labels)
      Initially link to existing quality web resources (Khan Academy PL, Matematyka.pl, YouTube, etc.)
      Later: host custom explanations/videos on the site itself
- [ ] **Study panel** — clicking a node in browse mode (or from DiagnosticPanel's "do nauki" list)
      opens a panel showing: topic description, ordered list of curated resource links, then a quiz
      to self-test after reading. Style: similar to InfoPanel but with a "Zacznij naukę" CTA.
- [ ] **Guided study path** — after diagnosis, show an ordered list of topics to study
      based on DAG prereq order (learn prereqs first). Surface this in DiagnosticPanel and DeepDivePanel
      as a "Plan nauki" section — clickable, each item opens the study panel.
- [ ] **Re-test after studying** — after visiting a resource link, prompt a new quiz question
      to confirm understanding. If correct, mark node as known in the belief state.
- [ ] **"Do nauki" shortcut** — in DiagnosticPanel / DeepDivePanel, each unknown node row
      gets a small "Ucz się →" button that opens the study panel directly.

### Persistence
- [ ] **localStorage** — save belief state, betaBeliefs, answeredQuestions, and mode to localStorage
      on every update. Restore on page load. Key: `wizmat_session_v1`.
      Future path: swap for API calls when backend/accounts are added.

### LLM tutor (future — requires lightweight backend)

**Vision:** an AI teacher agent that knows the full curriculum graph and the student's
exact belief state, and uses that context to guide learning in a personalised way.
Not a generic chatbot — a structured agent with tools and pre-computed materials as grounding.

#### Context engineering (what the LLM receives)
- Full curriculum graph: all 62 nodes with descriptions, prereqs, dependents, scope/section
- Student belief state: which topics are known / unknown / uncertain + Beta confidence scores
- History: which questions were answered, which were correct/wrong (summarised, not raw)
- Current topic: the node the student is looking at right now
- Pre-computed per-node materials (see below) injected as grounding documents

#### Pre-computed materials (static, generated offline)
- [ ] **Node explanations** — for each of the 62 nodes, generate a structured markdown document:
      concept summary, key formulas, 2–3 worked examples, common mistakes.
      Stored in `src/data/nodes/<id>/explanation.md`. Generated once, version-controlled,
      updated manually or regenerated when curriculum changes.
- [ ] **Node difficulty notes** — short description of where students typically struggle,
      fed into the LLM system prompt as grounding when a student gets a question wrong.

#### Teacher agent design
- [ ] **Teacher model with tools** — LLM agent (GPT-4o / Claude) given a set of tools:
      - `get_node_explanation(nodeId)` — fetch pre-computed explanation for a topic
      - `get_student_belief_state()` — return known/unknown/uncertain map
      - `get_study_path()` — return DAG-ordered list of topics to learn next
      - `get_wrong_answers(nodeId)` — return which questions were answered incorrectly
      - `generate_question(nodeId)` — generate a fresh quiz question when bank is exhausted
- [ ] **Interaction modes:**
      - *Explain this* — student clicks "Wyjaśnij" on any node → LLM explains it in context
        of what they already know (e.g. "since you know linear functions, quadratics are...")
      - *Why was I wrong?* — after incorrect answer → LLM walks through the solution step-by-step
      - *What should I study next?* — LLM narrates the recommended study plan in Polish,
        explaining the reasoning behind the order
      - *Free chat* — general tutor chat with full curriculum + belief state in context

#### Backend — phased approach

**Phase 1 (PoC, now):** user-supplied API key in localStorage, no backend.
**Phase 2 (beta/public):** Python/FastAPI on Hetzner, domain on OVH.
**Phase 3 (production):** accounts, persistent DB, full agent with LangGraph/LlamaIndex.

##### Phase 1 — browser-direct (zero cost)
- User pastes their OpenAI/Anthropic key into a settings modal, stored in localStorage
- All LLM calls go directly from the browser
- Zero infra, zero cost, fine for closed testing with trusted users

##### Phase 2 — Python/FastAPI on Hetzner VPS
- **Language/framework:** Python + FastAPI — chosen over Rust to properly learn agentic
  patterns (LangGraph, LlamaIndex, instructor). Rust considered but LLM ecosystem is Python-native.
- **Hosting:** Hetzner CX11 VPS — €3.79/month, Falkenstein (Germany) or Helsinki (Finland)
  EU-based company (German), GDPR-native, no US data sovereignty issues.
  Raw Ubuntu VPS: FastAPI + uvicorn + nginx reverse proxy + Let's Encrypt SSL (free).
- **Domain:** `oczochodzi.pl` — register at **domeny.pl**, ~35 PLN/yr flat, no transfer games.
  `oczochodzi` = pun on "o co chodzi" (what's it about) + "oczy" (eyes) — fits the
  visual explanation platform perfectly.
  DNS: domeny.pl panel → A record `api.oczochodzi.pl` → Hetzner IP.
  Frontend served from GitHub Pages at `oczochodzi.pl` (CNAME → GitHub Pages).
- **Stack:** FastAPI → LangGraph/LlamaIndex agent → OpenAI/Anthropic API
  Per-session request cap enforced server-side. Hard spending cap set on LLM provider account.
- **Auth:** session UUID in localStorage → maps to server-side session state.
  Full accounts added in Phase 3.

##### Cost summary (Phase 2)
| Item | Cost |
|------|------|
| `oczochodzi.pl` domain (domeny.pl) | ~35 PLN/yr |
| Hetzner CX11 VPS | €3.79/month (~190 PLN/yr) |
| SSL (Let's Encrypt) | free |
| **Total** | **~225 PLN/yr (~€52/yr)** |


- [ ] Auth: initially no accounts — session identified by a random UUID stored in localStorage.
      When accounts are added later, the UUID maps to a user record.

#### Data pipeline
- [ ] Script to generate `explanation.md` for all 62 nodes using an LLM (run once, commit output)
- [ ] Add `explanation.md` to the Vite glob loader in `curriculum.js` so explanations are
      available at runtime for both the study panel and LLM context injection

### Infrastructure / polish
- [ ] Add a README.md
- [ ] Mobile/touch support (pinch-zoom, tap)
- [ ] Add a way to restart diagnostic without full page refresh
- [ ] Update `progress.md` file map (DiagnosticModeModal.jsx not listed yet)
