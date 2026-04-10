import { useEffect, useCallback, useRef } from "react";

/**
 * Lightweight hash-based router.
 *
 * URL scheme (all under window.location.hash):
 *   #/                                → graph explore (no node selected)
 *   #/node/<nodeId>                   → node selected (InfoPanel open)
 *   #/node/<nodeId>/resource/<index>  → resource viewer open
 *   #/diagnostic/quick                → quick diagnostic mode
 *   #/diagnostic/deepdive/<goalNode>  → deep-dive mode with goal
 *
 * The hook reads the hash on mount and on popstate, calling the provided
 * `onRoute` callback.  It also exposes `setRoute` to push new state.
 */

export function parseHash(hash) {
  const raw = (hash || "").replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);

  if (parts[0] === "node" && parts[1]) {
    const nodeId = decodeURIComponent(parts[1]);
    if (parts[2] === "resource" && parts[3] != null) {
      return { view: "resource", nodeId, resourceIndex: parseInt(parts[3], 10) };
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

export function buildHash(route) {
  if (!route) return "#/";
  switch (route.view) {
    case "node":
      return `#/node/${encodeURIComponent(route.nodeId)}`;
    case "resource":
      return `#/node/${encodeURIComponent(route.nodeId)}/resource/${route.resourceIndex}`;
    case "diagnostic":
      if (route.mode === "deepdive" && route.goalNode)
        return `#/diagnostic/deepdive/${encodeURIComponent(route.goalNode)}`;
      return "#/diagnostic/quick";
    default:
      return "#/";
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
    if (initial.view !== "graph") {
      // Use microtask so the component has finished its first render
      Promise.resolve().then(() => onRouteRef.current(initial));
    }

    return () => window.removeEventListener("hashchange", handlePop);
  }, []);

  return { setRoute };
}
