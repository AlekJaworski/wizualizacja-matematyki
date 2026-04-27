import { useEffect, useCallback, useRef } from "react";

/**
 * Lightweight hash-based router for in-graph navigation.
 *
 * The parent (CourseApp) owns the top-level hash structure and embeds the
 * language + map-prefix via the `prefix` option (e.g. "en/map/<beliefCode>").
 * This hook only handles sub-routes inside that prefix:
 *
 *   <prefix>/                                    → graph explore
 *   <prefix>/node/<nodeId>                       → node selected (InfoPanel open)
 *   <prefix>/node/<nodeId>/resource/<index>      → resource viewer open
 *   <prefix>/node/<nodeId>/question/<qIndex>     → quiz panel at a specific question
 *   <prefix>/diagnostic/quick                    → quick diagnostic mode
 *   <prefix>/diagnostic/deepdive/<goalNode>      → deep-dive mode with goal
 */

function splitPrefix(hash, prefix) {
  const raw = (hash || "").replace(/^#\/?/, "");
  if (!prefix) return raw;
  const clean = prefix.replace(/^\/+|\/+$/g, "");
  if (!clean) return raw;
  if (raw === clean) return "";
  if (raw.startsWith(clean + "/")) return raw.slice(clean.length + 1);
  return raw;
}

export function parseHash(hash, prefix = null) {
  const stripped = splitPrefix(hash, prefix);
  const parts = stripped.split("/").filter(Boolean);

  if (parts[0] === "node" && parts[1]) {
    const nodeId = decodeURIComponent(parts[1]);
    if (parts[2] === "resource" && parts[3] != null) {
      return { view: "resource", nodeId, resourceIndex: parseInt(parts[3], 10) };
    }
    if (parts[2] === "question" && parts[3] != null) {
      return { view: "question", nodeId, questionIndex: parseInt(parts[3], 10) };
    }
    return { view: "node", nodeId };
  }

  if (parts[0] === "diagnostic") {
    if (parts[1] === "deepdive" && parts[2]) {
      return { view: "diagnostic", mode: "deepdive", goalNode: decodeURIComponent(parts[2]) };
    }
    if (parts[1] === "quick") {
      return { view: "diagnostic", mode: "quick" };
    }
  }

  return { view: "graph" };
}

export function buildHash(route, prefix = null) {
  const pfx = prefix ? `/${prefix.replace(/^\/+|\/+$/g, "")}` : "";
  if (!route) return `#${pfx}`;
  switch (route.view) {
    case "node":
      return `#${pfx}/node/${encodeURIComponent(route.nodeId)}`;
    case "resource":
      return `#${pfx}/node/${encodeURIComponent(route.nodeId)}/resource/${route.resourceIndex}`;
    case "question":
      return `#${pfx}/node/${encodeURIComponent(route.nodeId)}/question/${route.questionIndex}`;
    case "diagnostic":
      if (route.mode === "deepdive" && route.goalNode)
        return `#${pfx}/diagnostic/deepdive/${encodeURIComponent(route.goalNode)}`;
      return `#${pfx}/diagnostic/quick`;
    default:
      return `#${pfx}`;
  }
}

/**
 * @param {(route: object) => void} onRoute — called when hash changes (including initial load)
 * @param {{ prefix?: string | null }} [options]
 * @returns {{ setRoute: (route: object, opts?: { replace?: boolean }) => void }}
 */
export function useHashRouter(onRoute, options = {}) {
  const onRouteRef = useRef(onRoute);
  onRouteRef.current = onRoute;

  const prefixRef = useRef(options.prefix ?? null);
  prefixRef.current = options.prefix ?? null;

  // Suppress the next popstate handler when we're the ones changing the hash
  const suppressRef = useRef(false);

  const setRoute = useCallback((route, opts = {}) => {
    const hash = buildHash(route, prefixRef.current);
    if (window.location.hash === hash) return;
    suppressRef.current = true;
    if (opts.replace) {
      window.history.replaceState(null, "", hash);
    } else {
      window.location.hash = hash;
    }
  }, []);

  useEffect(() => {
    const handlePop = () => {
      if (suppressRef.current) {
        suppressRef.current = false;
        return;
      }
      onRouteRef.current(parseHash(window.location.hash, prefixRef.current));
    };

    window.addEventListener("hashchange", handlePop);

    const initial = parseHash(window.location.hash, prefixRef.current);
    Promise.resolve().then(() => onRouteRef.current(initial));

    return () => window.removeEventListener("hashchange", handlePop);
  }, []);

  return { setRoute };
}
