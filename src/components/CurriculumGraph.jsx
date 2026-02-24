import { useState, useCallback, useEffect, useRef, useMemo } from "react";

import { RAW_NODES } from "../data/curriculum.js";
import { RAW_EDGES } from "../data/edges.js";
import { buildAdjacency } from "../engine/adjacency.js";
import { computePositions } from "../engine/simulation.js";
import { FONT } from "../styles/tokens.js";

import { usePanZoom }   from "../hooks/usePanZoom.js";
import { useNodeDrag }  from "../hooks/useNodeDrag.js";
import { useDiagnostic } from "../hooks/useDiagnostic.js";

import { EdgeLayer }        from "./graph/EdgeLayer.jsx";
import { NodeLayer }        from "./graph/NodeLayer.jsx";
import { InfoPanel }        from "./panels/InfoPanel.jsx";
import { QuizPanel }        from "./panels/QuizPanel.jsx";
import { DiagnosticPanel }  from "./panels/DiagnosticPanel.jsx";
import { FilterBar }        from "./ui/FilterBar.jsx";
import { Legend }           from "./ui/Legend.jsx";

// ── Constants ──────────────────────────────────────────────────────
const DEFAULT_VIEW = { x: 40, y: 40, scale: 0.72 };

export default function CurriculumGraph() {
  // ── Language & filters ──────────────────────────────────────────
  const [lang, setLang] = useState("pl");
  const [filterScope,   setFilterScope]   = useState(new Set());
  const [filterSection, setFilterSection] = useState(new Set());
  const [searchTerm,    setSearchTerm]    = useState("");
  const [selected,      setSelected]      = useState(null);
  const [hoveredNode,   setHoveredNode]   = useState(null);

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

  const [positions, setPositions] = useState(() => computePositions());

  const nodes = useMemo(
    () => RAW_NODES.map(n => ({ ...n, x: positions[n.id]?.x ?? n.x, y: positions[n.id]?.y ?? n.y })),
    [positions]
  );

  // ── Pan / zoom / drag ───────────────────────────────────────────
  const svgRef = useRef(null);
  const { viewTransform, setViewTransform, toCanvas, isPanning, startPan, handleMouseMove: panMove, handleMouseUp: panUp } =
    usePanZoom(svgRef);

  const { draggingNode, startNodeDrag, handleDragMove, handleDragEnd } =
    useNodeDrag(toCanvas, nodes, setPositions);

  // ── Diagnostic mode ─────────────────────────────────────────────
  const {
    diagMode, setDiagMode,
    belief, quizNode, setQuizNode,
    frontier,
    handleDiagClick,
    handleQuizAnswer,
    resetDiagnostic,
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

  const activeNode = selected || hoveredNode;
  const highlightedIds = useMemo(() => {
    if (!activeNode) return null;
    const s = new Set([activeNode]);
    adjacency.prereqs[activeNode]?.forEach(id => s.add(id));
    adjacency.dependents[activeNode]?.forEach(id => s.add(id));
    return s;
  }, [activeNode, adjacency]);

  // ── Mouse event handlers ────────────────────────────────────────
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

  // ── Keyboard shortcut ───────────────────────────────────────────
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Render ──────────────────────────────────────────────────────
  return (
    <div style={{
      width: "100%", height: "100vh",
      background: "#0a0e17",
      fontFamily: FONT,
      color: "#c8d6e5",
      display: "flex", flexDirection: "column", overflow: "hidden",
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
          {RAW_NODES.length} topics · {RAW_EDGES.length} edges · spectral layout
        </span>
        <span style={{ fontSize: 10, color: "#3a4d63", marginLeft: "auto" }}>
          {diagMode
            ? "kliknij węzeł = pytanie · shift+click = nieznany · zielony = kliknij by cofnąć"
            : "scroll to zoom · drag canvas to pan · drag node to move · click to inspect"}
        </span>
        <button
          onClick={() => { setDiagMode(d => !d); setSelected(null); }}
          style={{
            padding: "4px 12px", borderRadius: 5, fontSize: 11, cursor: "pointer", fontWeight: 600,
            border: diagMode ? "1px solid #f39c12" : "1px solid #1e2d45",
            background: diagMode ? "#f39c1222" : "transparent",
            color: diagMode ? "#f39c12" : "#6b7d9a",
          }}
        >
          {diagMode ? "Diagnostic ON" : "Diagnostic"}
        </button>
      </div>

      {/* Filter bar */}
      <FilterBar
        filterScope={filterScope}   toggleScope={toggleScope}   clearScope={clearScope}
        filterSection={filterSection} toggleSection={toggleSection} clearSection={clearSection}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        lang={lang} setLang={setLang}
      />

      {/* Canvas */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <svg
          ref={svgRef}
          width="100%" height="100%"
          style={{ cursor: draggingNode.current || isPanning.current ? "grabbing" : "grab" }}
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
          {/* Arrowhead markers */}
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
            <EdgeLayer
              edges={RAW_EDGES}
              nodes={nodes}
              highlightedIds={highlightedIds}
            />
            <NodeLayer
              nodes={nodes}
              filteredIds={filteredIds}
              highlightedIds={diagMode ? null : highlightedIds}
              selected={selected}
              onSelect={id => {
                if (diagMode) { handleDiagClick(id, false); return; }
                setSelected(id === selected ? null : id);
              }}
              onHover={setHoveredNode}
              lang={lang}
              diagMode={diagMode}
              belief={belief}
              frontier={frontier}
            />
          </g>
        </svg>

        {/* Info panel (normal mode only) */}
        {selected && !diagMode && (
          <InfoPanel nodeId={selected} nodes={nodes} adjacency={adjacency} lang={lang} />
        )}

        {/* Quiz panel */}
        {diagMode && quizNode && (
          <QuizPanel
            nodeId={quizNode}
            nodes={nodes}
            lang={lang}
            onAnswer={correct => handleQuizAnswer(quizNode, correct)}
            onSkip={() => setQuizNode(null)}
          />
        )}

        {/* Diagnostic summary (quiz closed) */}
        {diagMode && !quizNode && (
          <DiagnosticPanel
            belief={belief}
            frontier={frontier}
            nodes={nodes}
            lang={lang}
            onNodeClick={id => setQuizNode(id)}
            onReset={resetDiagnostic}
          />
        )}

        <Legend lang={lang} />

        {/* Zoom controls */}
        <div style={{
          position: "absolute", right: 16, bottom: 16,
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {[["＋", 1.2], ["－", 0.8], ["↺", null]].map(([lbl, factor]) => (
            <button
              key={lbl}
              onClick={() => {
                if (factor === null) {
                  setPositions(computePositions());
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
    </div>
  );
}
