import { useState, useCallback, useEffect, useRef, useMemo } from "react";

import { t } from "../i18n.js";
import { buildAdjacency } from "../engine/adjacency.js";
import { computePositions } from "../engine/simulation.js";
import { LAYOUTS, DEFAULT_LAYOUT_ID } from "../engine/layouts/index.js";
import { FONT, COLORS } from "../styles/tokens.js";

import { usePanZoom }       from "../hooks/usePanZoom.js";
import { useNodeDrag }      from "../hooks/useNodeDrag.js";
import { useDiagnostic }    from "../hooks/useDiagnostic.js";
import { useLocalStorage }  from "../hooks/useLocalStorage.js";
import { useIsMobile }      from "../hooks/useIsMobile.js";
import { useHashRouter }    from "../hooks/useHashRouter.js";

import { EdgeLayer }           from "./graph/EdgeLayer.jsx";
import { NodeLayer }           from "./graph/NodeLayer.jsx";
import { InfoPanel }           from "./panels/InfoPanel.jsx";
import { TopicView }           from "./screens/TopicView.jsx";
import { LearningPath }        from "./screens/LearningPath.jsx";
import { QuizPanel }           from "./panels/QuizPanel.jsx";
import { DiagnosticPanel }     from "./panels/DiagnosticPanel.jsx";
import { DeepDivePanel }       from "./panels/DeepDivePanel.jsx";
import { Legend }              from "./ui/Legend.jsx";
import { GoalSelectionModal }  from "./ui/GoalSelectionModal.jsx";
import { DiagnosticModeModal } from "./ui/DiagnosticModeModal.jsx";
import { OnboardingModal }     from "./ui/OnboardingModal.jsx";
import { SettingsDropdown }    from "./ui/SettingsDropdown.jsx";

const DEFAULT_VIEW    = { x: 40,  y: 40,  scale: 0.72 };
const DEFAULT_VIEW_MB = { x: 20,  y: 20,  scale: 0.42 };

export default function CurriculumGraph({
  courseId,
  RAW_NODES,
  RAW_EDGES,
  QUESTION_BANK,
  SECTIONS,
  SCOPE_COLORS,
  SCOPE_LABELS,
  COURSE_META,
  onBackToCourses,
  initialBelief,
  initialEvidence,
  initialLang,
  onBackToHome,
}) {
  const isMobile = useIsMobile();

  // ── Layout selection ────────────────────────────────────────────
  const [layoutId, setLayoutId] = useState(DEFAULT_LAYOUT_ID);

  // ── Language & filters ──────────────────────────────────────────
  const [lang,          setLang]          = useLocalStorage("lang", initialLang ?? "pl");
  const [filterScope,   setFilterScope]   = useState(new Set());
  const [filterSection, setFilterSection] = useState(new Set());
  const [searchTerm,    setSearchTerm]    = useState("");
  const [selected,      setSelected]      = useState(null);
  const [hoveredNode,   setHoveredNode]   = useState(null);
  const [openResourceIdx, setOpenResourceIdx] = useState(null);
  const [pathGoal,      setPathGoal]      = useState(null);

  // ── Modals ──────────────────────────────────────────────────────
  const [showGoalModal,   setShowGoalModal]   = useState(false);
  const [showModePicker,  setShowModePicker]  = useState(false);


  // ── Onboarding (skipped when arriving from quiz results) ────────
  const cameFromQuiz = !!initialBelief;
  const [onboardingSeen, setOnboardingSeen] = useLocalStorage("onboardingSeen", false);
  const [showOnboarding, setShowOnboarding] = useState(!onboardingSeen && !cameFromQuiz);

  const handleOnboardingClose = useCallback(() => {
    setOnboardingSeen(true);
    setShowOnboarding(false);
  }, [setOnboardingSeen]);



  const toggleScope   = useCallback(k => setFilterScope(prev => {
    const next = new Set(prev); next.has(k) ? next.delete(k) : next.add(k); return next;
  }), []);
  const toggleSection = useCallback(k => setFilterSection(prev => {
    const next = new Set(prev); next.has(k) ? next.delete(k) : next.add(k); return next;
  }), []);
  const clearScope    = useCallback(() => setFilterScope(new Set()), []);
  const clearSection  = useCallback(() => setFilterSection(new Set()), []);

  // ── Graph data ──────────────────────────────────────────────────
  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), [RAW_NODES, RAW_EDGES]);
  const [positions, setPositions] = useState(() => computePositions(layoutId, 300, RAW_NODES, RAW_EDGES));

  const nodes = useMemo(
    () => RAW_NODES.map(n => ({ ...n, x: positions[n.id]?.x ?? n.x, y: positions[n.id]?.y ?? n.y })),
    [RAW_NODES, positions]
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
    mode, setMode,
    quizNode, setQuizNode,
    questionsAnswered,
    answeredQuestions, setAnsweredQuestions,
    getAnsweredIndices,
    handleDiagClick,
    handleQuizAnswer,
    resetDiagnostic,
    startDeepDive,
    targetNode,
    belief, setBelief,
    frontier, visibleFrontier, hasStarted,
    nextSuggestedId, expectedRemaining, pCorrect,
    sessionComplete,
    betaBeliefs, subgraphIds, ddClassification,
    ddNextNodeId, ddComplete,
  } = useDiagnostic(adjacency, QUESTION_BANK, courseId);

  // ── Seed belief from quiz results (visual overlay, not diagnostic mode) ──
  useEffect(() => {
    if (initialBelief && Object.keys(initialBelief).length > 0) {
      setBelief(initialBelief);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps — run once on mount

  // ── Hash-based routing ──────────────────────────────────────────
  const handleRoute = useCallback((route) => {
    if (route.lang) setLang(route.lang);
    if (route.view === "node") {
      setSelected(route.nodeId);
      setOpenResourceIdx(null);
    } else if (route.view === "resource") {
      setSelected(route.nodeId);
      setOpenResourceIdx(route.resourceIndex);
    } else if (route.view === "diagnostic") {
      if (route.mode === "quick") {
        setDiagMode(true);
        setMode("quick");
        setSelected(null);
      } else if (route.mode === "deepdive" && route.goalNode) {
        setDiagMode(true);
        startDeepDive(route.goalNode);
      }
    } else {
      setSelected(null);
      setOpenResourceIdx(null);
    }
  }, [setLang, setDiagMode, setMode, startDeepDive]);

  const { setRoute } = useHashRouter(handleRoute);

  // Sync state → hash (when state changes via UI, not via hash)
  useEffect(() => {
    if (diagMode) {
      if (mode === "deepdive" && targetNode) {
        setRoute({ view: "diagnostic", mode: "deepdive", goalNode: targetNode, lang });
      } else {
        setRoute({ view: "diagnostic", mode: "quick", lang });
      }
    } else if (selected) {
      if (openResourceIdx != null) {
        setRoute({ view: "resource", nodeId: selected, resourceIndex: openResourceIdx, lang });
      } else {
        setRoute({ view: "node", nodeId: selected, lang });
      }
    } else {
      setRoute({ view: "graph", lang });
    }
  }, [selected, openResourceIdx, diagMode, mode, targetNode, lang, setRoute]);

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
  }, [RAW_NODES, filterScope, filterSection, searchTerm]);

  // Highlight connections for hovered or selected node
  const activeNode     = selected || hoveredNode;
  const highlightedIds = useMemo(() => {
    if (!activeNode) return null;
    const s = new Set([activeNode]);
    adjacency.prereqs[activeNode]?.forEach(id => s.add(id));
    adjacency.dependents[activeNode]?.forEach(id => s.add(id));
    return s;
  }, [activeNode, adjacency]);

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

  // ── Tap on canvas background — deselect panel ───────────────────
  const handleCanvasTap = useCallback(e => {
    if (isMobile && !e.target.closest("[data-node-id]")) {
      setSelected(null);
    }
  }, [isMobile]);

  // ── Auto-advance quiz (only after answering, not after manual close) ──
  const autoAdvanceRef = useRef(false);

  useEffect(() => {
    if (!diagMode || mode !== "quick") return;
    if (!quizNode && nextSuggestedId && !sessionComplete && hasStarted && autoAdvanceRef.current) {
      autoAdvanceRef.current = false;
      const timer = setTimeout(() => setQuizNode(nextSuggestedId), 400);
      return () => clearTimeout(timer);
    }
  }, [diagMode, mode, quizNode, nextSuggestedId, sessionComplete, hasStarted]);

  useEffect(() => {
    if (!diagMode || mode !== "deepdive") return;
    if (!quizNode && ddNextNodeId && !ddComplete && autoAdvanceRef.current) {
      autoAdvanceRef.current = false;
      const timer = setTimeout(() => setQuizNode(ddNextNodeId), 400);
      return () => clearTimeout(timer);
    }
  }, [diagMode, mode, quizNode, ddNextNodeId, ddComplete]);

  // ── Keyboard ────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = e => {
      if (e.key !== "Escape") return;
      setSelected(null);
      setShowGoalModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Layout switcher ─────────────────────────────────────────────
  const switchLayout = useCallback(id => {
    setLayoutId(id);
    setPositions(computePositions(id, 300, RAW_NODES, RAW_EDGES));
    setViewTransform(isMobile ? DEFAULT_VIEW_MB : DEFAULT_VIEW);
  }, [setViewTransform, RAW_NODES, RAW_EDGES, isMobile]);

  // ── Diagnostic toggle ───────────────────────────────────────────
  const handleDiagnosticToggle = useCallback(() => {
    if (diagMode) {
      setDiagMode(false);
      resetDiagnostic();
      setSelected(null);
    } else {
      setShowModePicker(true);
    }
  }, [diagMode, setDiagMode, resetDiagnostic]);

  const handleModeSelect = useCallback((m) => {
    setShowModePicker(false);
    resetDiagnostic();
    if (m === "deepdive") {
      setDiagMode(true);
      setShowGoalModal(true);
    } else {
      setDiagMode(true);
      setMode("quick");
      setSelected(null);
    }
  }, [setDiagMode, setMode, resetDiagnostic]);

  // ── Onboarding mode selection ────────────────────────────────────
  const handleOnboardingSelect = useCallback((mode) => {
    setOnboardingSeen(true);
    setShowOnboarding(false);
    if (mode === "quick" || mode === "deepdive") {
      handleModeSelect(mode);
    }
    // "browse" — just dismiss, user lands on the graph
  }, [setOnboardingSeen, handleModeSelect]);

  // ── Deep-dive belief colour ──────────────────────────────────────
  const deepDiveBelief = useMemo(() => {
    if (mode !== "deepdive") return {};
    const result = {};
    for (const [id, cls] of Object.entries(ddClassification)) {
      if (cls === "known")   result[id] = "known";
      else if (cls === "unknown") result[id] = "unknown";
    }
    return result;
  }, [mode, ddClassification]);

  const effectiveBelief   = mode === "deepdive" ? deepDiveBelief : belief;
  const effectiveFrontier = mode === "deepdive"
    ? subgraphIds.filter(id => ddClassification[id] === "uncertain")
    : visibleFrontier;

  const displayTitle = lang === "pl"
    ? (COURSE_META.title ?? COURSE_META.titleEn)
    : (COURSE_META.titleEn ?? COURSE_META.title);

  // Disable SVG interaction whenever any overlay modal is open so touch events
  // on fixed-position modals are not intercepted by the SVG's non-passive
  // touch listeners (which cover the full viewport).
  const anyModalOpen = showOnboarding || showModePicker || showGoalModal;

  // ── Shared button style ─────────────────────────────────────────
  const hdrBtn = (active, color = "#4a9eff") => ({
    padding: "7px 13px", borderRadius: 5, fontSize: 13, cursor: "pointer",
    border: active ? `1px solid ${color}` : `1px solid ${COLORS.border}`,
    background: active ? `${color}22` : "transparent",
    color: active ? color : COLORS.textDim,
    whiteSpace: "nowrap", minHeight: 36, fontWeight: active ? 600 : 400,
  });

  // ── Render ──────────────────────────────────────────────────────
  return (
    <div style={{
      width: "100%", height: "100dvh",
      background: COLORS.bg, fontFamily: FONT,
      color: COLORS.textBody, display: "flex", flexDirection: "column", overflow: "hidden",
    }}>

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <div style={{
        padding: isMobile ? "8px 12px" : "8px 16px",
        borderBottom: `1px solid ${COLORS.borderSubtle}`,
        display: "flex", alignItems: "center", gap: isMobile ? 8 : 10, flexShrink: 0,
      }}>
        {(onBackToHome || onBackToCourses) && (
          <button onClick={onBackToHome ?? onBackToCourses} style={{ ...hdrBtn(false), padding: "7px 10px" }}>←</button>
        )}
        <h1 style={{
          margin: 0, fontSize: 13, fontWeight: 700,
          color: COLORS.textPrimary, letterSpacing: isMobile ? 0.5 : 1,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          flex: 1,
        }}>
          {displayTitle}
        </h1>

        {/* ── Mode toggle: Explore / Diagnostic ── */}
        <div style={{ display: "flex", gap: 0, borderRadius: 6, overflow: "hidden", border: `1px solid ${COLORS.border}` }}>
          <button
            onClick={() => { if (diagMode) { setDiagMode(false); resetDiagnostic(); setSelected(null); } }}
            style={{
              padding: isMobile ? "7px 12px" : "7px 16px", fontSize: 12, cursor: "pointer",
              border: "none", fontWeight: !diagMode ? 700 : 400,
              background: !diagMode ? "#4a9eff22" : "transparent",
              color: !diagMode ? "#4a9eff" : COLORS.textDim,
              minHeight: 36,
            }}
          >
            {t("exploreMode", lang)}
          </button>
          <button
            onClick={() => { if (!diagMode) setShowModePicker(true); }}
            style={{
              padding: isMobile ? "7px 12px" : "7px 16px", fontSize: 12, cursor: "pointer",
              border: "none", borderLeft: `1px solid ${COLORS.border}`, fontWeight: diagMode ? 700 : 400,
              background: diagMode ? "#f39c1222" : "transparent",
              color: diagMode ? "#f39c12" : COLORS.textDim,
              minHeight: 36,
            }}
          >
            {diagMode
              ? mode === "deepdive" ? t("diagnosticOnDeep", lang) : t("diagnosticOnQuick", lang)
              : t("diagnosticOff", lang)}
          </button>
        </div>

        {/* Goal button (diagnostic deep-dive only) */}
        {diagMode && (
          <button onClick={() => setShowGoalModal(true)} style={hdrBtn(mode === "deepdive", "#8e44ad")}>
            {t("goalBtn", lang)}
          </button>
        )}

        {/* ── Settings gear ── */}
        <SettingsDropdown
          lang={lang} setLang={(l) => typeof l === "function" ? setLang(l) : setLang(l)}
          layoutId={layoutId} layouts={LAYOUTS} onLayoutChange={switchLayout}
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          filterScope={filterScope} toggleScope={toggleScope} clearScope={clearScope}
          filterSection={filterSection} toggleSection={toggleSection} clearSection={clearSection}
          SECTIONS={SECTIONS} SCOPE_COLORS={SCOPE_COLORS} SCOPE_LABELS={SCOPE_LABELS}
          isMobile={isMobile}
        />
      </div>

      {/* ── CANVAS ─────────────────────────────────────────────────── */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <svg
          ref={svgRef}
          width="100%" height="100%"
          style={{ cursor: cursorStyle, touchAction: "none", pointerEvents: anyModalOpen ? "none" : "auto" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={e => {
            handleCanvasTap(e);
            if (!diagMode) return;
            const nodeEl = e.target.closest("[data-node-id]");
            if (!nodeEl) return;
            handleDiagClick(nodeEl.getAttribute("data-node-id"), e.shiftKey);
          }}
        >
          <defs>
            <marker id="arrow-default" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#3a5578" />
            </marker>
            <marker id="arrow-hi" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#4a9eff" />
            </marker>
            <marker id="arrow-dim" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#151b26" />
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
                setOpenResourceIdx(null);
                setSelected(id === selected ? null : id);
              }}
              onHover={setHoveredNode}
              lang={lang} diagMode={diagMode}
              belief={effectiveBelief}
              frontier={effectiveFrontier}
              scale={viewTransform.scale}
              scopeColors={SCOPE_COLORS}
            />
          </g>
        </svg>

        {/* Topic detail view — full overlay when a node is selected */}
        {selected && !diagMode && !pathGoal && (
          <TopicView
            nodeId={selected} nodes={nodes} adjacency={adjacency} lang={lang}
            SCOPE_COLORS={SCOPE_COLORS} SCOPE_LABELS={SCOPE_LABELS} SECTIONS={SECTIONS}
            belief={effectiveBelief}
            evidence={initialEvidence}
            onClose={() => setSelected(null)}
            onNavigate={(id) => setSelected(id)}
            onShowPath={(id) => { setSelected(null); setPathGoal(id); }}
          />
        )}

        {/* Learning path overlay */}
        {pathGoal && (
          <LearningPath
            goalId={pathGoal}
            RAW_NODES={RAW_NODES} RAW_EDGES={RAW_EDGES}
            SCOPE_COLORS={SCOPE_COLORS} SCOPE_LABELS={SCOPE_LABELS} SECTIONS={SECTIONS}
            belief={effectiveBelief}
            evidence={initialEvidence}
            lang={lang}
            onSelectTopic={(id) => { setPathGoal(null); setSelected(id); }}
            onClose={() => setPathGoal(null)}
          />
        )}

        {/* Quiz panel (non-blocking side panel) */}
        {diagMode && quizNode && (
          <QuizPanel
            nodeId={quizNode} nodes={nodes} lang={lang}
            questionBank={QUESTION_BANK}
            excludeIndices={getAnsweredIndices(quizNode)}
            isMobile={isMobile}
            onAnswer={(correct, question, questionIndex) => {
              autoAdvanceRef.current = true;
              handleQuizAnswer(quizNode, correct, question, questionIndex);
            }}
            onSkip={(questionIndex) => {
              if (typeof questionIndex === "number") {
                setAnsweredQuestions(prev => new Set([...prev, `${quizNode}:${questionIndex}`]));
              }
              setQuizNode(null);
            }}
          />
        )}

        {/* Quick mode sidebar */}
        {diagMode && mode === "quick" && (
          <DiagnosticPanel
            belief={belief} frontier={frontier} visibleFrontier={visibleFrontier}
            hasStarted={hasStarted} nextSuggestedId={nextSuggestedId}
            sessionComplete={sessionComplete} adjacency={adjacency}
            expectedRemaining={expectedRemaining} pCorrect={pCorrect}
            questionsAnswered={questionsAnswered}
            nodes={nodes} lang={lang}
            onNodeClick={id => setQuizNode(id)} onReset={resetDiagnostic}
            SCOPE_LABELS={SCOPE_LABELS}
            isMobile={isMobile}
          />
        )}

        {/* Deep-dive sidebar */}
        {diagMode && mode === "deepdive" && targetNode && (
          <DeepDivePanel
            nodes={nodes} lang={lang} targetNode={targetNode}
            subgraphIds={subgraphIds} ddClassification={ddClassification}
            betaBeliefs={betaBeliefs} ddComplete={ddComplete}
            ddNextNodeId={ddNextNodeId} questionsAnswered={questionsAnswered}
            onNodeClick={id => setQuizNode(id)}
            onReset={resetDiagnostic}
            isMobile={isMobile}
          />
        )}

        {/* Legend — hidden on mobile to save space */}
        {!isMobile && (
          <Legend lang={lang} diagMode={diagMode}
            hasBelief={Object.keys(effectiveBelief).length > 0}
            SCOPE_COLORS={SCOPE_COLORS} SCOPE_LABELS={SCOPE_LABELS} SECTIONS={SECTIONS}
          />
        )}

        {/* Zoom + reset controls */}
        <div style={{
          position: "absolute",
          right: 12,
          bottom: isMobile ? 16 : 16,
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {[["＋", 1.2], ["－", 0.8], ["↺", null]].map(([lbl, factor]) => (
            <button key={lbl}
              onClick={() => {
                if (factor === null) {
                  setPositions(computePositions(layoutId, 300, RAW_NODES, RAW_EDGES));
                  setViewTransform(isMobile ? DEFAULT_VIEW_MB : DEFAULT_VIEW);
                } else {
                  setViewTransform(p => ({ ...p, scale: Math.max(0.15, Math.min(5, p.scale * factor)) }));
                }
              }}
              style={{
                width: 44, height: 44,
                background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                color: COLORS.textBody, borderRadius: 8, cursor: "pointer", fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >{lbl}</button>
          ))}
        </div>

        {/* Mobile bottom action bar (when in diag mode) */}
        {isMobile && diagMode && !quizNode && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: `${COLORS.surface}ee`,
            borderTop: `1px solid ${COLORS.border}`,
            display: "flex", gap: 0,
            zIndex: 20,
          }}>
            <button
              onClick={() => setShowGoalModal(true)}
              style={{
                flex: 1, padding: "12px 8px", fontSize: 12,
                background: "transparent", border: "none", borderRight: `1px solid ${COLORS.border}`,
                color: mode === "deepdive" ? "#c39bd3" : COLORS.textDim, cursor: "pointer",
              }}
            >
              {t("goalBtn", lang)}
            </button>
            <button
              onClick={handleDiagnosticToggle}
              style={{
                flex: 1, padding: "12px 8px", fontSize: 12,
                background: "transparent", border: "none",
                color: "#f39c12", cursor: "pointer", fontWeight: 600,
              }}
            >
              {t("reset", lang)}
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showGoalModal && (
        <GoalSelectionModal
          nodes={nodes} lang={lang} SECTIONS={SECTIONS} SCOPE_COLORS={SCOPE_COLORS}
          onSelect={nodeId => { setShowGoalModal(false); startDeepDive(nodeId); }}
          onClose={() => setShowGoalModal(false)}
        />
      )}

      <DiagnosticModeModal
        isOpen={showModePicker}
        onSelect={handleModeSelect}
        onClose={() => setShowModePicker(false)}
        lang={lang}
      />

      <OnboardingModal
        isOpen={showOnboarding}
        onSelect={handleOnboardingSelect}
        onClose={handleOnboardingClose}
        lang={lang}
      />
    </div>
  );
}
