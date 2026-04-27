import { useState, useCallback, useEffect, useRef } from "react";
import { COURSES, DEFAULT_COURSE_ID } from "../data/courses/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { applyTheme } from "../styles/tokens.js";
import { encodeBelief, decodeBelief } from "../utils/shareCode.js";
import { detectLang, persistLang, isValidLang } from "../utils/lang.js";
import CurriculumGraph from "./CurriculumGraph.jsx";
import { HeroScreen } from "./screens/HeroScreen.jsx";
import { QuizFlow } from "./screens/QuizFlow.jsx";
import { GoalQuizFlow } from "./screens/GoalQuizFlow.jsx";
import { ResultsScreen } from "./screens/ResultsScreen.jsx";
import { LearningPath } from "./screens/LearningPath.jsx";
import { GoalSelectionModal } from "./ui/GoalSelectionModal.jsx";
import { VizGallery } from "./screens/VizGallery.jsx";
import { ShowcaseGallery } from "./screens/ShowcaseGallery.jsx";
import { ProfileScreen } from "./screens/ProfileScreen.jsx";
import { LessonView } from "./screens/LessonView.jsx";

/**
 * CourseApp — top-level flow controller.
 *
 * Phases:
 *   "hero"      → Landing screen with CTAs
 *   "quiz"      → Full-screen diagnostic quiz
 *   "goalPick"  → Goal selection modal
 *   "goalQuiz"  → Goal-scoped quiz
 *   "goalPath"  → Learning path after goal quiz
 *   "results"   → Summary + "see your map"
 *   "map"       → CurriculumGraph
 *   "profile"   → Saved learning path / progress
 */

// Hash structure (lang prefix is always present after we sync):
//   #/<lang>                                        → hero
//   #/<lang>/results/<code>                         → results
//   #/<lang>/map                                    → browse map (no belief)
//   #/<lang>/map/<code>                             → map with belief
//   #/<lang>/map[/<code>]/node/<id>[/...]           → map sub-routes (CurriculumGraph owns)
//
// `<lang>` may be missing in shared links — callers should fall back to detectLang().
function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);

  let lang = null;
  let i = 0;
  if (isValidLang(parts[0])) {
    lang = parts[0];
    i = 1;
  }
  const tail = parts.slice(i);

  if (tail[0] === "results" && tail[1]) {
    return { lang, phase: "results", code: tail[1] };
  }
  if (tail[0] === "map") {
    // The segment after "map" is either a belief code, or "node"/"diagnostic"
    // (a CurriculumGraph sub-route in browse mode without a belief code).
    const next = tail[1];
    const codeReserved = next === "node" || next === "diagnostic";
    const code = next && !codeReserved ? next : null;
    const nodeStart = code ? 2 : 1;
    const node = tail[nodeStart] === "node" && tail[nodeStart + 1] ? tail[nodeStart + 1] : null;
    return { lang, phase: "map", code, node };
  }
  return { lang, phase: null };
}

export default function CourseApp() {
  const courseId = DEFAULT_COURSE_ID;
  const course = COURSES[courseId];

  const [lang, setLangState] = useState(detectLang);
  const setLang = useCallback((next) => {
    setLangState(prev => {
      const value = typeof next === "function" ? next(prev) : next;
      persistLang(value);
      return value;
    });
  }, []);

  const systemPrefers = typeof window !== "undefined"
    && window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "bright" : "midnight";
  const [themeId, setThemeId] = useLocalStorage("theme", systemPrefers);

  const initialHash = parseHash();
  const initialBelief = initialHash?.code ? decodeBelief(initialHash.code) : null;

  const [phase, setPhase] = useState(initialHash?.phase ?? "hero");
  const [initialSelectedNode, setInitialSelectedNode] = useState(initialHash?.node ?? null);
  const [quizBelief, setQuizBelief] = useState(initialBelief);
  const [quizStats, setQuizStats] = useState(initialBelief ? { correct: 0, incorrect: 0, questionsAnswered: 0 } : null);
  const [quizEvidence, setQuizEvidence] = useState(null);
  const [quizPreset, setQuizPreset] = useState("standard");
  const [goalId, setGoalId] = useState(null);
  const [lessonPath, setLessonPath] = useState(null);

  // ── Persisted learning course ──────────────────────────────────
  const [savedCourse, setSavedCourse] = useLocalStorage("savedCourse", null);

  const handleThemeChange = useCallback((id) => {
    applyTheme(id);
    setThemeId(id);
  }, [setThemeId]);
  applyTheme(themeId);

  // Sync phase → URL hash.
  //
  // History semantics: entering a new hash-bearing phase (results or map)
  // from a different phase pushes a new history entry, so the browser back
  // button can step back through phases (quiz → results → map → back →
  // results → back → hero). Within-phase hash churn (e.g. belief updates
  // while already on results) uses replaceState.
  //
  // Note: in `map` phase, CurriculumGraph's own useHashRouter owns the hash
  // beyond the `map/<code>` prefix. We only seed the prefix on entering the
  // phase; after that, we let the graph router extend it with its sub-routes
  // (lang, node, diagnostic).
  const prevPhaseRef = useRef(phase);
  useEffect(() => {
    const prevPhase = prevPhaseRef.current;
    prevPhaseRef.current = phase;
    // "Entering" = phase changed into a hash-bearing state. Initial mount
    // (prevPhase === phase) is not an entry — it's hydration, which should
    // never push (user's first history entry must remain navigable to exit
    // the site).
    const entering = prevPhase !== phase && (phase === "results" || phase === "map");

    const langSeg = `/${lang}`;

    if (phase === "results" && quizBelief) {
      const hash = `#${langSeg}/results/${encodeBelief(quizBelief)}`;
      if (window.location.hash !== hash) {
        if (entering) window.history.pushState(null, "", hash);
        else          window.history.replaceState(null, "", hash);
      }
    } else if (phase === "map") {
      const code = quizBelief ? encodeBelief(quizBelief) : null;
      const wanted = code ? `#${langSeg}/map/${code}` : `#${langSeg}/map`;
      // Only seed the hash if it doesn't already start with our map prefix.
      // This preserves sub-routes written by CurriculumGraph.
      if (!window.location.hash.startsWith(wanted)) {
        if (entering) window.history.pushState(null, "", wanted);
        else          window.history.replaceState(null, "", wanted);
      }
    } else {
      const wanted = `#${langSeg}`;
      if (window.location.hash !== wanted) {
        window.history.replaceState(null, "", window.location.pathname + wanted);
      }
    }
  }, [phase, quizBelief, lang]);

  // Listen for browser back/forward navigation (hashchange).
  //
  // When the user presses back from map → the hash reverts from
  // `#/map/<code>/...` to `#/results/<code>` (pushed earlier); we must
  // re-read the hash and move phase state back to "results", decoding the
  // belief from the code so the Results screen renders with the same data.
  // Symmetrically for back from results → hero (hash becomes empty).
  //
  // We only react to top-level prefix changes (results vs map vs neither).
  // Sub-routes inside the graph (`#/map/<code>/pl/node/<id>`) are owned by
  // CurriculumGraph's own hashchange listener — we leave them alone.
  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHash();
      const currentPhase = prevPhaseRef.current;

      // External lang change (back/forward to a hash with a different lang).
      if (parsed.lang && isValidLang(parsed.lang)) {
        setLang(parsed.lang);
      }

      if (parsed.phase === null) {
        // Empty hash or just `#/<lang>` → only move to hero if we were in a
        // hash-bearing phase (results or map). Otherwise leave phase alone
        // so in-flight flows (quiz, goal quiz, lesson) aren't disrupted.
        if (currentPhase === "results" || currentPhase === "map") {
          setPhase("hero");
        }
        return;
      }
      if (parsed.phase === "results") {
        if (currentPhase === "results") return; // within-results hash change
        if (parsed.code) {
          const belief = decodeBelief(parsed.code);
          setQuizBelief(belief);
          setQuizStats(prev => prev ?? { correct: 0, incorrect: 0, questionsAnswered: 0 });
        }
        setPhase("results");
        return;
      }
      if (parsed.phase === "map") {
        if (currentPhase === "map") return; // within-map sub-route change
        if (parsed.code) {
          const belief = decodeBelief(parsed.code);
          setQuizBelief(belief);
        }
        setInitialSelectedNode(parsed.node ?? null);
        setPhase("map");
        return;
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [setLang]);

  const handleStartQuiz = useCallback((preset = "standard") => {
    setQuizPreset(preset);
    setQuizBelief(null);
    setQuizStats(null);
    setQuizEvidence(null);
    setPhase("quiz");
  }, []);

  const handleQuizComplete = useCallback((belief, stats, evidence) => {
    setQuizBelief(belief);
    setQuizStats(stats);
    setQuizEvidence(evidence ?? {});
    setSavedCourse({ goalId: null, belief, evidence: evidence ?? {}, createdAt: new Date().toISOString() });
    setPhase("results");
  }, [setSavedCourse]);

  const handleStartGoalQuiz = useCallback(() => {
    setPhase("goalPick");
  }, []);

  const handleGoalSelected = useCallback((nodeId) => {
    setGoalId(nodeId);
    setQuizBelief(null);
    setQuizStats(null);
    setQuizEvidence(null);
    setPhase("goalQuiz");
  }, []);

  const handleGoalQuizComplete = useCallback((gId, belief, stats, evidence) => {
    setGoalId(gId);
    setQuizBelief(belief);
    setQuizStats(stats);
    setQuizEvidence(evidence ?? {});
    setSavedCourse({ goalId: gId, belief, evidence: evidence ?? {}, createdAt: new Date().toISOString() });
    setPhase("goalPath");
  }, [setSavedCourse]);

  const handleSeeMap = useCallback((selectedNodeId) => {
    setInitialSelectedNode(selectedNodeId ?? null);
    setPhase("map");
  }, []);

  const handleBrowseViz = useCallback(() => {
    setPhase("showcase");
  }, []);

  const handleBrowseAllVizzes = useCallback(() => {
    setPhase("gallery");
  }, []);

  const handleBrowseMap = useCallback(() => {
    setQuizBelief(null);
    setQuizStats(null);
    setQuizEvidence(null);
    setPhase("map");
  }, []);

  const handleBackToHero = useCallback(() => {
    setPhase("hero");
  }, []);

  const handleProfile = useCallback(() => {
    setPhase("profile");
  }, []);

  const handleFromScratch = useCallback(() => {
    const emptyCourse = { goalId: null, belief: {}, evidence: {}, createdAt: new Date().toISOString() };
    setSavedCourse(emptyCourse);
    setQuizBelief({});
    setQuizEvidence({});
    setPhase("profile");
  }, [setSavedCourse]);

  const handleResumePath = useCallback((nodeId) => {
    if (savedCourse) {
      setQuizBelief(savedCourse.belief ?? {});
      setQuizEvidence(savedCourse.evidence ?? {});
    }
    setInitialSelectedNode(nodeId ?? null);
    setPhase("map");
  }, [savedCourse]);

  const handleStartLesson = useCallback((path, gId) => {
    setLessonPath(path);
    setGoalId(gId ?? null);
    if (savedCourse) {
      setQuizBelief(savedCourse.belief ?? {});
      setQuizEvidence(savedCourse.evidence ?? {});
    }
    setPhase("lesson");
  }, [savedCourse]);

  const handleLessonUpdateBelief = useCallback((newBelief, newEvidence) => {
    setQuizBelief(newBelief);
    setQuizEvidence(newEvidence);
    setSavedCourse(prev => ({
      ...(prev ?? {}),
      goalId: goalId,
      belief: newBelief,
      evidence: newEvidence,
      createdAt: prev?.createdAt ?? new Date().toISOString(),
    }));
  }, [goalId, setSavedCourse]);

  if (!course) return null;

  switch (phase) {
    case "hero":
      return (
        <HeroScreen
          lang={lang}
          setLang={setLang}
          themeId={themeId}
          onThemeChange={handleThemeChange}
          onStartQuiz={handleStartQuiz}
          onStartGoalQuiz={handleStartGoalQuiz}
          onBrowseViz={handleBrowseViz}
          onBrowseMap={handleBrowseMap}
          onProfile={handleProfile}
          onFromScratch={handleFromScratch}
          hasSavedCourse={!!savedCourse}
        />
      );

    case "showcase":
      return (
        <ShowcaseGallery
          RAW_NODES={course.RAW_NODES}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          lang={lang}
          onClose={handleBackToHero}
          onBrowseAll={handleBrowseAllVizzes}
          onSelectTopic={(id) => handleSeeMap(id)}
        />
      );

    case "gallery":
      return (
        <VizGallery
          RAW_NODES={course.RAW_NODES}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          lang={lang}
          onClose={handleBackToHero}
        />
      );

    case "quiz":
      return (
        <QuizFlow
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          QUESTION_BANK={course.QUESTION_BANK}
          lang={lang}
          quizPreset={quizPreset}
          onComplete={handleQuizComplete}
          onExit={handleBackToHero}
        />
      );

    case "goalPick":
      return (
        <GoalSelectionModal
          isOpen
          nodes={course.RAW_NODES}
          lang={lang}
          SECTIONS={course.SECTIONS}
          SCOPE_COLORS={course.SCOPE_COLORS}
          onSelect={handleGoalSelected}
          onClose={handleBackToHero}
        />
      );

    case "goalQuiz":
      return (
        <GoalQuizFlow
          goalId={goalId}
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          QUESTION_BANK={course.QUESTION_BANK}
          lang={lang}
          onComplete={handleGoalQuizComplete}
          onExit={handleBackToHero}
        />
      );

    case "goalPath":
      return (
        <LearningPath
          goalId={goalId}
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          SECTIONS={course.SECTIONS}
          belief={quizBelief}
          evidence={quizEvidence}
          lang={lang}
          onSelectTopic={(id) => handleSeeMap(id)}
          onStartLesson={handleStartLesson}
          onClose={handleBackToHero}
        />
      );

    case "results":
      return (
        <ResultsScreen
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          belief={quizBelief}
          stats={quizStats}
          evidence={quizEvidence}
          lang={lang}
          onSeeMap={handleSeeMap}
          onRetake={() => handleStartQuiz(quizPreset)}
          onSelectTopic={(id) => handleSeeMap(id)}
          onStartPath={(gId) => {
            setGoalId(gId);
            setSavedCourse(prev => ({ ...(prev ?? {}), goalId: gId, belief: quizBelief ?? {}, evidence: quizEvidence ?? {}, createdAt: prev?.createdAt ?? new Date().toISOString() }));
            setPhase("goalPath");
          }}
        />
      );

    case "lesson":
      return (
        <LessonView
          path={lessonPath}
          goalId={goalId}
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          QUESTION_BANK={course.QUESTION_BANK}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          SECTIONS={course.SECTIONS}
          belief={quizBelief ?? {}}
          evidence={quizEvidence ?? {}}
          lang={lang}
          onUpdateBelief={handleLessonUpdateBelief}
          onClose={() => setPhase(savedCourse ? "profile" : "hero")}
        />
      );

    case "profile":
      return (
        <ProfileScreen
          savedCourse={savedCourse}
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          SECTIONS={course.SECTIONS}
          lang={lang}
          onResumePath={handleResumePath}
          onStartLesson={handleStartLesson}
          onStartNew={() => {
            setSavedCourse(null);
            setQuizBelief(null);
            setQuizStats(null);
            setQuizEvidence(null);
            setPhase("hero");
          }}
          onSeeMap={() => {
            if (savedCourse) {
              setQuizBelief(savedCourse.belief ?? {});
              setQuizEvidence(savedCourse.evidence ?? {});
            }
            setPhase("map");
          }}
          onClose={handleBackToHero}
        />
      );

    case "map":
      return (
        <CurriculumGraph
          key={`${courseId}-${initialSelectedNode ?? ''}`}
          courseId={courseId}
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          QUESTION_BANK={course.QUESTION_BANK}
          SECTIONS={course.SECTIONS}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          COURSE_META={course.COURSE_META}
          initialBelief={quizBelief}
          initialEvidence={quizEvidence}
          initialSelectedNode={initialSelectedNode}
          lang={lang}
          setLang={setLang}
          beliefCode={quizBelief && Object.keys(quizBelief).length > 0 ? encodeBelief(quizBelief) : null}
          onBackToHome={handleBackToHero}
        />
      );

    default:
      return null;
  }
}
