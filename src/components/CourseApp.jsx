import { useState, useCallback } from "react";
import { COURSES, DEFAULT_COURSE_ID } from "../data/courses/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import CurriculumGraph from "./CurriculumGraph.jsx";
import { HeroScreen } from "./screens/HeroScreen.jsx";
import { QuizFlow } from "./screens/QuizFlow.jsx";
import { ResultsScreen } from "./screens/ResultsScreen.jsx";

/**
 * CourseApp — top-level flow controller.
 *
 * Phases:
 *   "hero"    → Landing screen with CTA
 *   "quiz"    → Full-screen diagnostic quiz
 *   "results" → Summary + "see your map"
 *   "map"     → CurriculumGraph (with optional pre-loaded belief)
 */
export default function CourseApp() {
  const courseId = DEFAULT_COURSE_ID;
  const course = COURSES[courseId];

  const [lang, setLang] = useLocalStorage("lang", "pl");
  const [phase, setPhase] = useState("hero");
  const [quizBelief, setQuizBelief] = useState(null);
  const [quizStats, setQuizStats] = useState(null);
  const [quizPreset, setQuizPreset] = useState("standard");

  const handleStartQuiz = useCallback((preset = "standard") => {
    setQuizPreset(preset);
    setQuizBelief(null);
    setQuizStats(null);
    setPhase("quiz");
  }, []);

  const handleQuizComplete = useCallback((belief, stats) => {
    setQuizBelief(belief);
    setQuizStats(stats);
    setPhase("results");
  }, []);

  const handleSeeMap = useCallback(() => {
    setPhase("map");
  }, []);

  const handleBrowseMap = useCallback(() => {
    setQuizBelief(null);
    setQuizStats(null);
    setPhase("map");
  }, []);

  const handleBackToHero = useCallback(() => {
    setPhase("hero");
  }, []);

  if (!course) return null;

  switch (phase) {
    case "hero":
      return (
        <HeroScreen
          lang={lang}
          setLang={setLang}
          onStartQuiz={handleStartQuiz}
          onBrowseMap={handleBrowseMap}
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

    case "results":
      return (
        <ResultsScreen
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          belief={quizBelief}
          stats={quizStats}
          lang={lang}
          onSeeMap={handleSeeMap}
          onRetake={() => handleStartQuiz(quizPreset)}
        />
      );

    case "map":
      return (
        <CurriculumGraph
          key={courseId}
          courseId={courseId}
          RAW_NODES={course.RAW_NODES}
          RAW_EDGES={course.RAW_EDGES}
          QUESTION_BANK={course.QUESTION_BANK}
          SECTIONS={course.SECTIONS}
          SCOPE_COLORS={course.SCOPE_COLORS}
          SCOPE_LABELS={course.SCOPE_LABELS}
          COURSE_META={course.COURSE_META}
          initialBelief={quizBelief}
          initialLang={lang}
          onBackToHome={handleBackToHero}
        />
      );

    default:
      return null;
  }
}
