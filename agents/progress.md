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

---

## Session: 2026-02-25 — Multi-course architecture complete

### What was done

1. **Abstract Algebra course — content complete**
   - All 20 node.md files written (Sets/Functions, Relations, Induction, Binary Ops, Groups Intro, Subgroups, Cyclic Groups, Cosets, Group Homomorphisms, Normal Subgroups, Iso Theorem, Group Actions, Sylow, Rings Intro, Ideals, Ring Homomorphisms, Integral Domains, Poly Rings, Fields Intro, Field Extensions)
   - 60 quiz questions written (3 per node), all with 4 options, correct answer, and hint
   - `abstract_algebra/index.js` course loader with Vite globs
   - `abstract_algebra/sections.js` with FOUNDATIONS/GROUPS/RINGS/FIELDS sections and 6 scope colours

2. **Course registry** — `src/data/courses/index.js` maps courseId → module; `COURSE_LIST` for picker UI

3. **`CourseApp.jsx`** — new top-level shell:
   - Shows course picker screen (title, description, icon per course)
   - Mounts `<CurriculumGraph key={courseId} ... />` with all course data as props
   - "←" back button in header returns to picker

4. **`CurriculumGraph.jsx` refactor** — fully decoupled from data layer:
   - Receives `courseId`, `RAW_NODES`, `RAW_EDGES`, `QUESTION_BANK`, `SECTIONS`, `SCOPE_COLORS`, `SCOPE_LABELS`, `COURSE_META`, `onBackToCourses` as props
   - No direct imports from data files
   - Passes `SECTIONS`/`SCOPE_COLORS`/`SCOPE_LABELS` down to all child components

5. **All components decoupled from stale imports:**
   - `FilterBar.jsx` — SECTIONS, SCOPE_COLORS, SCOPE_LABELS as props
   - `Legend.jsx` — SCOPE_COLORS, SCOPE_LABELS, SECTIONS as props
   - `InfoPanel.jsx` — SCOPE_COLORS, SCOPE_LABELS, SECTIONS as props
   - `DiagnosticPanel.jsx` — SCOPE_LABELS as prop; uses `nodes` prop instead of `RAW_NODES` import
   - `DeepDivePanel.jsx` — removed SCOPE_COLORS import (unused)
   - `GoalSelectionModal.jsx` — SECTIONS, SCOPE_COLORS as props; section order derived from SECTIONS keys
   - `NodeLayer.jsx` — `scopeColors` prop instead of import
   - `QuizPanel.jsx` — `questionBank` prop + `getQuestion` from courseLoader; removed sections import

6. **`useDiagnostic.js` refactor:**
   - Accepts `(adjacency, questionBank, courseId)` parameters
   - localStorage keys namespaced by courseId: `${courseId}_diagMode`, etc.
   - Derives node list from adjacency keys (no RAW_NODES import needed)
   - Removed import from curriculum.js

7. **`simulation.js` refactor:**
   - Removed module-level `RAW_NODES`/`RAW_EDGES` imports
   - `computePositions(layoutId, iters, nodes, edges)` — nodes+edges as parameters
   - All simulation constants computed per call (ranks, rankY, simEdges, idealK)

8. **`src/index.jsx`** — now mounts `<CourseApp />` instead of `<CurriculumGraph />`

9. **Build** — clean, 388 modules, no errors; deployed to dev branch

### Files changed (major)
- `src/components/CourseApp.jsx` — **new**
- `src/index.jsx` — mounts CourseApp
- `src/components/CurriculumGraph.jsx` — full props refactor
- `src/components/ui/FilterBar.jsx`, `Legend.jsx`, `GoalSelectionModal.jsx`
- `src/components/panels/InfoPanel.jsx`, `DiagnosticPanel.jsx`, `DeepDivePanel.jsx`, `QuizPanel.jsx`
- `src/components/graph/NodeLayer.jsx`
- `src/hooks/useDiagnostic.js`
- `src/engine/simulation.js`
- `src/data/courses/abstract_algebra/` — 20 nodes × (node.md + 3 questions) = 80 files, plus index.js, sections.js, edges.js
- `src/data/courses/index.js` — **new** course registry

### Current file map (updated)
```
src/
  index.jsx                        # mounts CourseApp
  i18n.js                          # ~70 translation keys PL+EN
  components/
    CourseApp.jsx                  # NEW: top-level shell, course picker
    CurriculumGraph.jsx            # graph view, accepts course data as props
    graph/
      EdgeLayer.jsx
      NodeLayer.jsx                # scopeColors prop
    panels/
      InfoPanel.jsx                # SCOPE_COLORS/LABELS/SECTIONS props
      QuizPanel.jsx                # questionBank prop
      DiagnosticPanel.jsx          # SCOPE_LABELS prop, uses nodes not RAW_NODES
      DeepDivePanel.jsx
    ui/
      FilterBar.jsx                # SECTIONS/SCOPE_COLORS/SCOPE_LABELS props
      Legend.jsx                   # SCOPE_COLORS/LABELS/SECTIONS props
      GoalSelectionModal.jsx       # SECTIONS/SCOPE_COLORS props
      DiagnosticModeModal.jsx
      OnboardingModal.jsx
  data/
    curriculum.js                  # STALE but harmless (no longer imported)
    courseLoader.js                # shared parseFrontmatter, buildNodes, buildQuestionBank, getQuestion
    courses/
      index.js                     # registry: { math_pl, abstract_algebra }
      math_pl/
        index.js                   # Vite globs for math_pl
        nodes/<62 nodes>/          # node.md + 3 questions each
        edges.js
        sections.js
      abstract_algebra/
        index.js                   # Vite globs for abstract_algebra
        nodes/<20 nodes>/          # node.md + 3 questions each
        edges.js                   # 27 edges
        sections.js
  engine/
    adjacency.js
    belief.js
    layout.js
    ranks.js
    simulation.js                  # now accepts nodes/edges as params
    layouts/
      index.js
      nPartite.js
      spectral.js
      topoRank.js
  hooks/
    useDiagnostic.js               # namespaced localStorage, no data imports
    useLocalStorage.js
    useNodeDrag.js
    usePanZoom.js
  styles/
    tokens.js
  utils/
    latex.js
```

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

### Multi-subject architecture (next major feature)

**Motivation:** the platform should be subject-agnostic. The first new subject will be
**Abstract Algebra** — so the author can use the app themselves to learn.

#### Architecture plan
- [ ] Move curriculum data into a subject-aware directory structure:
      `src/data/subjects/math_pl/` — current Polish math curriculum (62 nodes)
      `src/data/subjects/abstract_algebra/` — new subject
      Each subject has its own `nodes/`, `edges.js`, `sections.js`, `meta.json`
      (label, description, language, difficulty level, scope colour palette)
- [ ] Update `curriculum.js` to load a specific subject by ID, not hardcoded globs
- [ ] Add subject picker UI — either a landing screen or a dropdown in the header
- [ ] `CurriculumGraph` receives `subjectId` prop, all data is loaded dynamically
- [ ] Diagnostic state keyed by subject: `wizmat_v1_{subjectId}_belief` etc.
      so switching subjects doesn't clobber saved progress

#### Abstract Algebra subject (to build)
Planned node structure — a proper DAG from foundations to advanced topics:

**Foundations**
- Sets and functions
- Relations and equivalence classes
- Mathematical induction

**Groups**
- Binary operations and algebraic structures
- Definition of a group + examples (Z, Zn, Sn, GL(n))
- Subgroups and Lagrange's theorem
- Cyclic groups and generators
- Cosets and quotient groups
- Group homomorphisms and isomorphisms
- Normal subgroups
- First isomorphism theorem
- Group actions and Cayley's theorem
- Sylow theorems

**Rings**
- Definition of a ring + examples (Z, Z[x], Mn(R))
- Subrings and ideals
- Quotient rings
- Ring homomorphisms
- Integral domains and fields
- Polynomial rings
- UFD, PID, Euclidean domains

**Fields**
- Field extensions
- Algebraic vs transcendental elements
- Splitting fields
- Finite fields (Galois fields GF(p^n))

**Optional / advanced**
- Galois theory
- Modules over rings
- Category theory basics

All questions in English (subject is taught in English internationally).
Resources: links to Abstract Algebra by Dummit & Foote, Artin, 3Blue1Brown, etc.

### Infrastructure / polish
- [ ] Add a README.md
- [ ] Mobile/touch support (pinch-zoom, tap)
- [ ] Update `progress.md` file map

---

## Session 2026-02-26: Onboarding as mode picker + three diagnostic bug fixes

### Onboarding redesign
The onboarding modal now doubles as the entry-point mode picker.
The three feature tiles (Browse, Quick Diagnostic, Deep-dive) are clickable buttons —
clicking one closes the modal and immediately starts that mode.
No more "Get started → go find the Diagnoza button" friction.

- Removed the passive footer buttons ("Skip" / "Get started")
- Each tile is a `<button>` with hover feedback and a `→` arrow
- New i18n key `onboardingChoose` added (pl/en)
- `OnboardingModal` now accepts `onSelect(mode)` prop alongside `onClose`
- New `handleOnboardingSelect` callback in `CurriculumGraph` wires the selection:
  - `"browse"` → just dismisses the modal
  - `"quick"` / `"deepdive"` → calls `handleModeSelect(mode)` directly

### Files changed
- `src/components/ui/OnboardingModal.jsx` — full rewrite
- `src/components/CurriculumGraph.jsx` — `handleOnboardingSelect`, `onSelect` prop
- `src/i18n.js` — added `onboardingChoose`

---

## Session 2026-02-26: Three Diagnostic Mode Bug Fixes

### Bugs fixed

**Bug 1 — "Brak pytania" repeated + isolated nodes never asked**
- `allNodeIds` in `useDiagnostic.js` now includes `Object.keys(questionBank)` so nodes with
  no edges (isolated in the DAG) are included in the diagnostic sequence.
- Added sentinel index `-1` in `QuizPanel.jsx`: when no question is available, the
  Know/Don't-Know/Skip buttons now call `onAnswer(true/false, null, -1)` / `onSkip(-1)`
  instead of passing `null`. This stores `"nodeId:-1"` in `answeredQuestions`.
- `getQuestion()` in `courseLoader.js` now checks `if (excludeIndices.includes(-1)) return null`
  — so a node manually classified with no question won't be re-opened.

**Bug 2 — Can't exit diagnostic mode (auto-advance re-fires)**
- Both auto-advance `useEffect`s in `CurriculumGraph.jsx` now guard with `if (!diagMode || mode !== "...")`.
- `diagMode` added to the dependency arrays of both effects.
- When the diagnostic toggle is clicked, `diagMode` becomes `false` and the effects immediately
  return without setting a new `quizNode`.

**Bug 3 — OnboardingModal buttons not clickable on mobile**
- The SVG registers non-passive `touchstart`/`touchmove` listeners that cover the full viewport.
- Added `anyModalOpen` computed value in `CurriculumGraph.jsx` (true when onboarding, mode picker,
  goal modal, or quiz panel is open).
- SVG now has `pointerEvents: anyModalOpen ? "none" : "auto"` — disables SVG touch interception
  while any overlay modal is shown, ensuring taps reach `position: fixed` modals correctly.

### Files changed
- `src/components/CurriculumGraph.jsx` — Bug 2 (diagMode guard) + Bug 3 (anyModalOpen + pointerEvents)
- `src/hooks/useDiagnostic.js` — Bug 1 (allNodeIds includes questionBank keys)
- `src/components/panels/QuizPanel.jsx` — Bug 1 (sentinel -1 for no-question case)
- `src/data/courseLoader.js` — Bug 1 (getQuestion returns null when -1 in excludeIndices)

---

## Session 2026-02-25: Domain Setup + Quiz UI Fixes

### Domain Setup (completed)
- Added 4 A records at OVH: `oczochodzi.pl` → GitHub IPs
- Added CNAME for `www` → `alekjaworski.github.io`
- Set GitHub Pages custom domain via API
- HTTPS now works on `oczochodzi.pl`
- Dev version at `oczochodzi.pl/dev/`

### Quiz UI Fixes (completed)
- **Larger buttons:** Increased fontSize 11→14, padding 6px→10px
- **Fixed onAnswer args:** Now passes all 3 args (correct, question, questionIndex)
- **Fixed skip:** Now properly marks skipped questions as answered to prevent loops
- **Fixed fallback case:** YesKnow/NoKnow/Skip buttons now work when node has no questions

### Backlog (UI Improvements)
1. **Center quiz in modal:** Move QuizPanel to full-screen centered modal instead of floating card
2. **Belief mini-panel:** Show belief state changes in small floating panel or reflect on graph nodes
