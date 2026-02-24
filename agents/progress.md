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

## Next Steps (backlog)

- [ ] Add a README.md
- [ ] Consider localStorage persistence for session state
- [ ] Mobile/touch support (pinch-zoom, tap)
- [ ] Add a way to restart diagnostic without full page refresh
