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
 *
 * Optional `prefix` (e.g. "map/<beliefCode>") — prepended before the <lang>
 * segment in every built hash and stripped before parsing. This lets a parent
 * router (e.g. CourseApp) embed a shareable belief code in the URL without
 * the graph router clobbering it.
 */

const VALID_LANGS = new Set(["pl", "en"]);

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

export function buildHash(route, prefix = null) {
  const lang = route?.lang || "pl";
  const pfx = prefix ? `/${prefix.replace(/^\/+|\/+$/g, "")}` : "";
  if (!route) return `#${pfx}/${lang}`;
  switch (route.view) {
    case "node":
      return `#${pfx}/${lang}/node/${encodeURIComponent(route.nodeId)}`;
    case "resource":
      return `#${pfx}/${lang}/node/${encodeURIComponent(route.nodeId)}/resource/${route.resourceIndex}`;
    case "question":
      return `#${pfx}/${lang}/node/${encodeURIComponent(route.nodeId)}/question/${route.questionIndex}`;
    case "diagnostic":
      if (route.mode === "deepdive" && route.goalNode)
        return `#${pfx}/${lang}/diagnostic/deepdive/${encodeURIComponent(route.goalNode)}`;
      return `#${pfx}/${lang}/diagnostic/quick`;
    default:
      return `#${pfx}/${lang}`;
  }
}

/**
 * @param {(route: object) => void} onRoute — called when hash changes (including initial load)
 * @param {{ prefix?: string | null }} [options]
 * @returns {{ setRoute: (route: object) => void }}
 */
export function useHashRouter(onRoute, options = {}) {
  const onRouteRef = useRef(onRoute);
  onRouteRef.current = onRoute;

  const prefixRef = useRef(options.prefix ?? null);
  prefixRef.current = options.prefix ?? null;

  // Suppress the next popstate handler when we're the ones changing the hash
  const suppressRef = useRef(false);

  /**
   * Update the URL hash to match `route`.
   *
   * @param {object} route
   * @param {{ replace?: boolean }} [opts] — when `replace` is true, use
   *   history.replaceState (no new history entry). Default: push. Callers
   *   should pass `replace: true` for non-navigational writes such as the
   *   initial mount-time sync, where a new history entry would create a
   *   spurious "back" step (e.g. hash `#/map/<code>` → `#/map/<code>/pl`
   *   on mount should not consume a back press).
   */
  const setRoute = useCallback((route, opts = {}) => {
    const hash = buildHash(route, prefixRef.current);
    if (window.location.hash === hash) return;
    suppressRef.current = true;
    if (opts.replace) {
      // Assigning location.hash always pushes; use replaceState instead.
      window.history.replaceState(null, "", hash);
      // replaceState does NOT fire hashchange, so we don't need the
      // suppressRef guard to trigger — but we've armed it in case a
      // stacked change occurs before the next tick.
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

    // Initial route from URL (deferred so component state is ready)
    const initial = parseHash(window.location.hash, prefixRef.current);
    // Always fire on initial load so language is applied
    Promise.resolve().then(() => onRouteRef.current(initial));

    return () => window.removeEventListener("hashchange", handlePop);
  }, []);

  return { setRoute };
}
