import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CurriculumGraph from "./components/CurriculumGraph.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurriculumGraph />
  </StrictMode>
);
