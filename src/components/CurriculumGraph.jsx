import { useState, useCallback, useEffect, useRef, useMemo } from "react";

import { RAW_NODES } from "../data/curriculum.js";
import { RAW_EDGES } from "../data/edges.js";
import { buildAdjacency } from "../engine/adjacency.js";
import { computePositions } from "../engine/simulation.js";
import { LAYOUTS, DEFAULT_LAYOUT_ID } from "../engine/layouts/index.js";
import { FONT } from "../styles/tokens.js";

import { usePanZoom }    from "../hooks/usePanZoom.js";
import { useNodeDrag }   from "../hooks/useNodeDrag.js";
import { useDiagnostic } from "../hooks/useDiagnostic.js";

import { EdgeLayer }           from "./graph/EdgeLayer.jsx";
import { NodeLayer }           from "./graph/NodeLayer.jsx";
import { InfoPanel }           from "./panels/InfoPanel.jsx";
import { QuizPanel }           from "./panels/QuizPanel.jsx";
import { DiagnosticPanel }     from "./panels/DiagnosticPanel.jsx";
import { DeepDivePanel }       from "./panels/DeepDivePanel.jsx";
import { FilterBar }           from "./ui/FilterBar.jsx";
import { Legend }              from "./ui/Legend.jsx";
import { GoalSelectionModal }  from "./ui/GoalSelectionModal.jsx";
import { DiagnosticModeModal } from "./ui/DiagnosticModeModal.jsx";

const DEFAULT_VIEW = { x: 40, y: 40, scale: 0.72 };

export default function CurriculumGraph() {
  // ── Layout selection ────────────────────────────────────────────
  const [layoutId, setLayoutId] = useState(DEFAULT_LAYOUT_ID);

  // ── Language & filters ──────────────────────────────────────────
  const [lang,          setLang]          = useState("pl");
  const [filterScope,   setFilterScope]   = useState(new Set());
  const [filterSection, setFilterSection] = useState(new Set());
  const [searchTerm,    setSearchTerm]    = useState("");
  const [selected,      setSelected]      = useState(null);
  const [hoveredNode,   setHoveredNode]   = useState(null);

  // ── Goal selection modal (for deep-dive) ────────────────────────
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showModePicker, setShowModePicker] = useState(false);

  const toggleScope   = useCallback(k => setFilterScope(prev => {
    const next = new Set(prev); next.has(k) ? next.delete(k) : next.add(k); return next;
  }), []);
  const toggleSection = useCallback(k => setFilterSection(prev => {
    const next = new Set(prev); next.has(k) ? next.delete(k) : next.add(k); return next;
  }), []);
  const clearScope    = useCallback(() => setFilterScope(new Set()), []);
  const clearSection  = useCallback(() => setFilterSection(new Set()), []);

  // ── Graph data ──────────────────────────────────────────────────
  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), []);

  const [positions, setPositions] = useState(() => computePositions(layoutId));

  const nodes = useMemo(
    () => RAW_NODES.map(n => ({ ...n, x: positions[n.id]?.x ?? n.x, y: positions[n.id]?.y ?? n.y })),
    [positions]
  );

  // ── Pan / zoom / drag ───────────────────────────────────────────
  const svgRef = useRef(null);
  const {
    viewTransform, setViewTransform,
    toCanvas, isPanning, startPan,
    cursorStyle, setCursorStyle,
    handleMouseMove: panMove,
    handleMouseUp: panUp,
  } = usePanZoom(svgRef);

  const { draggingNode, startNodeDrag, handleDragMove, handleDragEnd } =
    useNodeDrag(toCanvas, nodes, setPositions, setCursorStyle);

  // ── Diagnostic mode ─────────────────────────────────────────────
  const {
    diagMode, setDiagMode,
    mode,
    quizNode, setQuizNode,
    questionsAnswered,
    getAnsweredIndices,
    handleDiagClick,
    handleQuizAnswer,
    resetDiagnostic,
    startDeepDive,
    targetNode,

    // Quick mode
    belief,
    frontier, visibleFrontier, hasStarted,
    nextSuggestedId, expectedRemaining, pCorrect,
    sessionComplete,

    // Deep-dive mode
    betaBeliefs, subgraphIds, ddClassification,
    ddNextNodeId, ddComplete,
  } = useDiagnostic(adjacency);

  // ── Derived display state ───────────────────────────────────────
  const filteredIds = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const result = RAW_NODES.filter(n => {
      if (filterScope.size   > 0 && !filterScope.has(n.scope))     return false;
      if (filterSection.size > 0 && !filterSection.has(n.section)) return false;
      if (term && !n.label.toLowerCase().includes(term) && !n.labelPl.toLowerCase().includes(term)) return false;
      return true;
    });
    return result.length < RAW_NODES.length ? new Set(result.map(n => n.id)) : null;
  }, [filterScope, filterSection, searchTerm]);

  const activeNode     = selected || hoveredNode;
  const highlightedIds = useMemo(() => {
    if (!activeNode) return null;
    const s = new Set([activeNode]);
    adjacency.prereqs[activeNode]?.forEach(id => s.add(id));
    adjacency.dependents[activeNode]?.forEach(id => s.add(id));
    return s;
  }, [activeNode, adjacency]);

  // In deep-dive: highlight the subgraph
  const deepDiveHighlight = useMemo(() => {
    if (!diagMode || mode !== "deepdive" || subgraphIds.length === 0) return null;
    return new Set(subgraphIds);
  }, [diagMode, mode, subgraphIds]);

  // ── Mouse handlers ──────────────────────────────────────────────
  const handleMouseDown = useCallback(e => {
    const nodeEl = e.target.closest("[data-node-id]");
    if (nodeEl) {
      startNodeDrag(nodeEl.getAttribute("data-node-id"), e.clientX, e.clientY);
      e.stopPropagation();
      return;
    }
    startPan(e.clientX, e.clientY);
  }, [startNodeDrag, startPan]);

  const handleMouseMove = useCallback(e => {
    if (handleDragMove(e.clientX, e.clientY)) return;
    panMove(e);
  }, [handleDragMove, panMove]);

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
    panUp();
  }, [handleDragEnd, panUp]);

  // ── Auto-advance to next quiz after answering (quick mode) ───────
  useEffect(() => {
    if (mode !== "quick") return;
    if (!quizNode && nextSuggestedId && !sessionComplete && hasStarted) {
      const timer = setTimeout(() => setQuizNode(nextSuggestedId), 400);
      return () => clearTimeout(timer);
    }
  }, [mode, quizNode, nextSuggestedId, sessionComplete, hasStarted]);

  // ── Auto-advance to next quiz after answering (deep-dive) ────────
  useEffect(() => {
    if (mode !== "deepdive") return;
    if (!quizNode && ddNextNodeId && !ddComplete) {
      const timer = setTimeout(() => setQuizNode(ddNextNodeId), 400);
      return () => clearTimeout(timer);
    }
  }, [mode, quizNode, ddNextNodeId, ddComplete]);

  // ── Keyboard ────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") { setSelected(null); setShowGoalModal(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Layout switcher handler ─────────────────────────────────────
  const switchLayout = useCallback(id => {
    setLayoutId(id);
    setPositions(computePositions(id));
    setViewTransform(DEFAULT_VIEW);
  }, [setViewTransform]);

  // ── Diagnostic button handler ────────────────────────────────────
  const handleDiagnosticToggle = useCallback(() => {
    if (diagMode) {
      setDiagMode(false);
      resetDiagnostic();
      setSelected(null);
    } else {
      setShowModePicker(true);
    }
  }, [diagMode, setDiagMode, resetDiagnostic]);

  const handleModeSelect = useCallback((mode) => {
    setShowModePicker(false);
    resetDiagnostic(); // Reset all diagnostic state including answered questions
    if (mode === "deepdive") {
      setDiagMode(true);
      setShowGoalModal(true);
    } else {
      setDiagMode(true);
      setMode("quick");
      setSelected(null);
    }
  }, [setDiagMode, setMode, resetDiagnostic]);

  // ── Node belief colour for deep-dive ────────────────────────────
  // Build a belief-like map from ddClassification so NodeLayer can colour nodes
  const deepDiveBelief = useMemo(() => {
    if (mode !== "deepdive") return {};
    const result = {};
    for (const [id, cls] of Object.entries(ddClassification)) {
      if (cls === "known") result[id] = "known";
      else if (cls === "unknown") result[id] = "unknown";
      // "uncertain" → unclassified = no entry
    }
    return result;
  }, [mode, ddClassification]);

  const effectiveBelief   = mode === "deepdive" ? deepDiveBelief : belief;
  const effectiveFrontier = mode === "deepdive"
    ? subgraphIds.filter(id => ddClassification[id] === "uncertain")
    : visibleFrontier;

  // ── Render ──────────────────────────────────────────────────────
  return (
    <div style={{
      width: "100%", height: "100vh",
      background: "#0a0e17", fontFamily: FONT,
      color: "#c8d6e5", display: "flex", flexDirection: "column", overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        padding: "10px 16px", borderBottom: "1px solid #1a2235",
        display: "flex", alignItems: "center", gap: 12, flexShrink: 0,
      }}>
        <h1 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#f5f6fa", letterSpacing: 1 }}>
          PODSTAWA PROGRAMOWA — MATEMATYKA
        </h1>
        <span style={{ fontSize: 10, color: "#3a4d63" }}>
          {RAW_NODES.length} topics · {RAW_EDGES.length} edges
        </span>

        {/* Layout switcher */}
        <div style={{ display: "flex", gap: 4, marginLeft: 8 }}>
          {LAYOUTS.map(l => (
            <button
              key={l.meta.id}
              onClick={() => switchLayout(l.meta.id)}
              style={{
                padding: "3px 10px", borderRadius: 4, fontSize: 10, cursor: "pointer",
                border: layoutId === l.meta.id ? "1px solid #4a9eff" : "1px solid #1e2d45",
                background: layoutId === l.meta.id ? "#4a9eff22" : "transparent",
                color: layoutId === l.meta.id ? "#4a9eff" : "#6b7d9a",
              }}
            >
              {l.meta.label}
            </button>
          ))}
        </div>

        <span style={{ fontSize: 10, color: "#3a4d63", marginLeft: "auto" }}>
          {diagMode
            ? mode === "deepdive"
              ? "deep-dive: kliknij węzeł w podgrafie"
              : "kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij"
            : "scroll to zoom · drag to pan · drag node to move · click to inspect"}
        </span>

        {/* Diagnostic button group */}
        <div style={{ display: "flex", gap: 4 }}>
          <button
            onClick={handleDiagnosticToggle}
            style={{
              padding: "4px 12px", borderRadius: 5, fontSize: 11, cursor: "pointer", fontWeight: 600,
              border: diagMode ? "1px solid #f39c12" : "1px solid #1e2d45",
              background: diagMode ? "#f39c1222" : "transparent",
              color: diagMode ? "#f39c12" : "#6b7d9a",
            }}
          >
            {diagMode ? `Diagnostic (${mode === "deepdive" ? "Deep-Dive" : "Quick"}) ON` : "Diagnostic"}
          </button>

          {/* Deep-dive picker button (visible when diagnostic is on) */}
          {diagMode && (
            <button
              onClick={() => setShowGoalModal(true)}
              style={{
                padding: "4px 10px", borderRadius: 5, fontSize: 11, cursor: "pointer",
                border: "1px solid #8e44ad",
                background: mode === "deepdive" ? "#8e44ad22" : "transparent",
                color: mode === "deepdive" ? "#c39bd3" : "#6b7d9a",
              }}
              title="Wybierz cel deep-dive"
            >
              ◎ Cel
            </button>
          )}
        </div>
      </div>

      {/* Filter bar */}
      <FilterBar
        filterScope={filterScope}     toggleScope={toggleScope}     clearScope={clearScope}
        filterSection={filterSection} toggleSection={toggleSection} clearSection={clearSection}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        lang={lang} setLang={setLang}
      />

      {/* Canvas */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <svg
          ref={svgRef}
          width="100%" height="100%"
          style={{ cursor: cursorStyle }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={e => {
            if (!diagMode) return;
            const nodeEl = e.target.closest("[data-node-id]");
            if (!nodeEl) return;
            handleDiagClick(nodeEl.getAttribute("data-node-id"), e.shiftKey);
          }}
        >
          <defs>
            <marker id="arrow-default" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#3a5578" />
            </marker>
            <marker id="arrow-hi" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#4a9eff" />
            </marker>
            <marker id="arrow-dim" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#0f1825" />
            </marker>
          </defs>

          <g transform={`translate(${viewTransform.x},${viewTransform.y}) scale(${viewTransform.scale})`}>
            <EdgeLayer edges={RAW_EDGES} nodes={nodes}
              highlightedIds={diagMode && mode === "deepdive" ? deepDiveHighlight : highlightedIds}
            />
            <NodeLayer
              nodes={nodes}
              filteredIds={diagMode && mode === "deepdive" ? deepDiveHighlight : filteredIds}
              highlightedIds={diagMode ? null : highlightedIds}
              selected={selected}
              onSelect={id => {
                if (diagMode) { handleDiagClick(id, false); return; }
                setSelected(id === selected ? null : id);
              }}
              onHover={setHoveredNode}
              lang={lang} diagMode={diagMode}
              belief={effectiveBelief}
              frontier={effectiveFrontier}
              scale={viewTransform.scale}
            />
          </g>
        </svg>

        {selected && !diagMode && (
          <InfoPanel nodeId={selected} nodes={nodes} adjacency={adjacency} lang={lang} />
        )}

        {diagMode && quizNode && (
          <QuizPanel
            nodeId={quizNode} nodes={nodes} lang={lang}
            excludeIndices={getAnsweredIndices(quizNode)}
            onAnswer={(correct, question, questionIndex) => handleQuizAnswer(quizNode, correct, question, questionIndex)}
            onSkip={() => setQuizNode(null)}
          />
        )}

        {/* Quick mode sidebar */}
        {diagMode && mode === "quick" && !quizNode && (
          <DiagnosticPanel
            belief={belief} frontier={frontier} visibleFrontier={visibleFrontier}
            hasStarted={hasStarted} nextSuggestedId={nextSuggestedId}
            sessionComplete={sessionComplete} adjacency={adjacency}
            expectedRemaining={expectedRemaining} pCorrect={pCorrect}
            questionsAnswered={questionsAnswered}
            nodes={nodes} lang={lang}
            onNodeClick={id => setQuizNode(id)} onReset={resetDiagnostic}
          />
        )}

        {/* Deep-dive sidebar */}
        {diagMode && mode === "deepdive" && !quizNode && targetNode && (
          <DeepDivePanel
            nodes={nodes} lang={lang} targetNode={targetNode}
            subgraphIds={subgraphIds} ddClassification={ddClassification}
            betaBeliefs={betaBeliefs} ddComplete={ddComplete}
            ddNextNodeId={ddNextNodeId} questionsAnswered={questionsAnswered}
            onNodeClick={id => setQuizNode(id)}
            onReset={resetDiagnostic}
          />
        )}

        <Legend lang={lang} />

        {/* Zoom + reset controls */}
        <div style={{
          position: "absolute", right: 16, bottom: 16,
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {[["＋", 1.2], ["－", 0.8], ["↺", null]].map(([lbl, factor]) => (
            <button key={lbl}
              onClick={() => {
                if (factor === null) {
                  setPositions(computePositions(layoutId));
                  setViewTransform(DEFAULT_VIEW);
                } else {
                  setViewTransform(p => ({ ...p, scale: Math.max(0.15, Math.min(5, p.scale * factor)) }));
                }
              }}
              style={{
                width: 28, height: 28,
                background: "#0d1520", border: "1px solid #1e2d45",
                color: "#c8d6e5", borderRadius: 4, cursor: "pointer", fontSize: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >{lbl}</button>
          ))}
        </div>
      </div>

      {/* Goal selection modal */}
      {showGoalModal && (
        <GoalSelectionModal
          nodes={nodes}
          lang={lang}
          onSelect={nodeId => {
            setShowGoalModal(false);
            startDeepDive(nodeId);
          }}
          onClose={() => setShowGoalModal(false)}
        />
      )}

      {/* Mode picker modal (Quick vs Deep-Dive) */}
      <DiagnosticModeModal
        isOpen={showModePicker}
        onSelect={handleModeSelect}
        onClose={() => setShowModePicker(false)}
      />
    </div>
  );
}
