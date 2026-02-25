import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CourseApp from "./components/CourseApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CourseApp />
  </StrictMode>
);
