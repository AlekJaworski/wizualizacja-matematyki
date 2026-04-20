import { useState, useCallback, useEffect } from "react";
import { COURSES, DEFAULT_COURSE_ID } from "../data/courses/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { applyTheme } from "../styles/tokens.js";
import { encodeBelief, decodeBelief } from "../utils/shareCode.js";
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

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/");
  if (parts[0] === "results" && parts[1]) return { phase: "results", code: parts[1] };
  if (parts[0] === "map" && parts[1]) return { phase: "map", code: parts[1], node: parts[2] || null };
  if (parts[0] === "map") return { phase: "map" };
  return null;
}

export default function CourseApp() {
  const courseId = DEFAULT_COURSE_ID;
  const course = COURSES[courseId];

  const [lang, setLang] = useLocalStorage("lang", "pl");
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

  // Sync phase → URL hash
  useEffect(() => {
    let hash = "";
    if (phase === "results" && quizBelief) {
      hash = `#/results/${encodeBelief(quizBelief)}`;
    } else if (phase === "map" && quizBelief) {
      hash = `#/map/${encodeBelief(quizBelief)}`;
    }
    if (hash && window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    } else if (!hash && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [phase, quizBelief]);

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
          initialLang={lang}
          onBackToHome={handleBackToHero}
        />
      );

    default:
      return null;
  }
}
