/**
 * useLocalStorage — a drop-in replacement for useState that persists
 * to localStorage under a given key.
 *
 * Handles:
 *  - JSON serialisation / deserialisation
 *  - Set ↔ Array conversion (localStorage can't store Sets directly)
 *  - Graceful fallback if localStorage is unavailable or value is corrupt
 *
 * Usage:
 *   const [lang, setLang] = useLocalStorage("wizmat_lang", "pl");
 *
 * Future migration path:
 *   Replace the read/write calls with API calls when a backend is added.
 */

import { useState, useEffect, useCallback } from "react";

const PREFIX = "wizmat_v1_";

function serialize(value) {
  // Convert Set → { __type: "Set", values: [...] }
  if (value instanceof Set) {
    return JSON.stringify({ __type: "Set", values: [...value] });
  }
  return JSON.stringify(value);
}

function deserialize(raw, fallback) {
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.__type === "Set") {
      return new Set(parsed.values);
    }
    return parsed;
  } catch {
    return fallback;
  }
}

export function useLocalStorage(key, initialValue) {
  const fullKey = PREFIX + key;

  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(fullKey);
      if (raw === null) return initialValue;
      return deserialize(raw, initialValue);
    } catch {
      return initialValue;
    }
  });

  // Write to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(fullKey, serialize(state));
    } catch {
      // Quota exceeded or private browsing — silently ignore
    }
  }, [fullKey, state]);

  // Wrap setState to match the useState API (supports functional updates)
  const setPersisted = useCallback((valueOrUpdater) => {
    setState(prev => {
      const next = typeof valueOrUpdater === "function"
        ? valueOrUpdater(prev)
        : valueOrUpdater;
      return next;
    });
  }, []);

  return [state, setPersisted];
}

/**
 * Clear all wizmat session data from localStorage.
 * Call this on explicit "reset session" user action.
 */
export function clearSession() {
  try {
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX))
      .forEach(k => localStorage.removeItem(k));
  } catch {
    // ignore
  }
}
