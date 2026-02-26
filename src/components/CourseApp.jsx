import { useState } from "react";
import { COURSES, COURSE_LIST, DEFAULT_COURSE_ID } from "../data/courses/index.js";
import CurriculumGraph from "./CurriculumGraph.jsx";
import { FONT } from "../styles/tokens.js";

/**
 * CourseApp — top-level shell.
 *
 * Shows a course picker when no course is selected, then mounts CurriculumGraph
 * with the selected course's data passed as props.
 */
export default function CourseApp() {
  const [courseId, setCourseId] = useState(DEFAULT_COURSE_ID);
  const [showPicker, setShowPicker] = useState(false);

  const course = COURSES[courseId];
  if (!course) return <div style={{ color: "#ff6b6b", padding: 20 }}>Unknown course: {courseId}</div>;

  // If the picker is open, show it as a modal overlay
  if (showPicker) {
    return (
      <CoursePicker
        courses={COURSE_LIST}
        activeCourseId={courseId}
        onSelect={id => { setCourseId(id); setShowPicker(false); }}
        onClose={() => setShowPicker(false)}
      />
    );
  }

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
      onBackToCourses={() => setShowPicker(true)}
    />
  );
}

/**
 * Course picker screen.
 */
function CoursePicker({ courses, activeCourseId, onSelect, onClose }) {
  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: "#0a0e17", fontFamily: FONT,
      color: "#c8d6e5",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 32,
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#f5f6fa", marginBottom: 6 }}>
          oczochodzi.pl
        </div>
        <div style={{ fontSize: 12, color: "#3a4d63" }}>
          Select a course
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "min(340px, calc(100vw - 32px))" }}>
        {courses.map(meta => (
          <button
            key={meta.id}
            onClick={() => onSelect(meta.id)}
            style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "16px 20px", borderRadius: 10, cursor: "pointer",
              border: meta.id === activeCourseId
                ? `1px solid ${meta.color}`
                : "1px solid #1a2235",
              background: meta.id === activeCourseId
                ? `${meta.color}18`
                : "#0d1520",
              color: "#c8d6e5",
              textAlign: "left",
              transition: "border-color 0.15s, background 0.15s",
            }}
          >
            <span style={{ fontSize: 28, lineHeight: 1 }}>{meta.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#f5f6fa" }}>
                {meta.titleEn ?? meta.title}
              </div>
              <div style={{ fontSize: 10, color: "#6b7d9a", marginTop: 3, lineHeight: 1.4 }}>
                {meta.descriptionEn ?? meta.description}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onClose}
        style={{
          fontSize: 11, color: "#3a4d63", background: "none",
          border: "none", cursor: "pointer", textDecoration: "underline",
        }}
      >
        Cancel
      </button>
    </div>
  );
}
