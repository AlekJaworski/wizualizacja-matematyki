import { useEffect, useCallback, useRef } from "react";

/**
 * Lightweight hash-based router.
 *
 * URL scheme (all under window.location.hash):
 *   #/<lang>/                                  → graph explore
 *   #/<lang>/node/<nodeId>                     → node selected (InfoPanel open)
 *   #/<lang>/node/<nodeId>/resource/<index>    → resource viewer open
 *   #/<lang>/node/<nodeId>/question/<qIndex>   → quiz panel open at a specific question
 *   #/<lang>/diagnostic/quick                  → quick diagnostic mode
 *   #/<lang>/diagnostic/deepdive/<goalNode>    → deep-dive mode with goal
 *
 * <lang> is "pl" or "en". Falls back to "pl" if missing.
 */

const VALID_LANGS = new Set(["pl", "en"]);

export function parseHash(hash) {
  const raw = (hash || "").replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);

  // Extract language prefix
  let lang = "pl";
  let rest = parts;
  if (parts.length > 0 && VALID_LANGS.has(parts[0])) {
    lang = parts[0];
    rest = parts.slice(1);
  }

  if (rest[0] === "node" && rest[1]) {
    const nodeId = decodeURIComponent(rest[1]);
    if (rest[2] === "resource" && rest[3] != null) {
      return { view: "resource", nodeId, resourceIndex: parseInt(rest[3], 10), lang };
    }
    if (rest[2] === "question" && rest[3] != null) {
      return { view: "question", nodeId, questionIndex: parseInt(rest[3], 10), lang };
    }
    return { view: "node", nodeId, lang };
  }

  if (rest[0] === "diagnostic") {
    if (rest[1] === "deepdive" && rest[2]) {
      return { view: "diagnostic", mode: "deepdive", goalNode: decodeURIComponent(rest[2]), lang };
    }
    if (rest[1] === "quick") {
      return { view: "diagnostic", mode: "quick", lang };
    }
  }

  return { view: "graph", lang };
}

export function buildHash(route) {
  const lang = route?.lang || "pl";
  if (!route) return `#/${lang}`;
  switch (route.view) {
    case "node":
      return `#/${lang}/node/${encodeURIComponent(route.nodeId)}`;
    case "resource":
      return `#/${lang}/node/${encodeURIComponent(route.nodeId)}/resource/${route.resourceIndex}`;
    case "question":
      return `#/${lang}/node/${encodeURIComponent(route.nodeId)}/question/${route.questionIndex}`;
    case "diagnostic":
      if (route.mode === "deepdive" && route.goalNode)
        return `#/${lang}/diagnostic/deepdive/${encodeURIComponent(route.goalNode)}`;
      return `#/${lang}/diagnostic/quick`;
    default:
      return `#/${lang}`;
  }
}

/**
 * @param {(route: object) => void} onRoute — called when hash changes (including initial load)
 * @returns {{ setRoute: (route: object) => void }}
 */
export function useHashRouter(onRoute) {
  const onRouteRef = useRef(onRoute);
  onRouteRef.current = onRoute;

  // Suppress the next popstate handler when we're the ones changing the hash
  const suppressRef = useRef(false);

  const setRoute = useCallback((route) => {
    const hash = buildHash(route);
    if (window.location.hash === hash) return;
    suppressRef.current = true;
    window.location.hash = hash;
  }, []);

  useEffect(() => {
    const handlePop = () => {
      if (suppressRef.current) {
        suppressRef.current = false;
        return;
      }
      onRouteRef.current(parseHash(window.location.hash));
    };

    window.addEventListener("hashchange", handlePop);

    // Initial route from URL (deferred so component state is ready)
    const initial = parseHash(window.location.hash);
    // Always fire on initial load so language is applied
    Promise.resolve().then(() => onRouteRef.current(initial));

    return () => window.removeEventListener("hashchange", handlePop);
  }, []);

  return { setRoute };
}
