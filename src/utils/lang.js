/**
 * Language detection.
 *
 * Resolution order:
 *   1. URL hash — first segment matching "pl" or "en" wins (e.g. `#/en/...`).
 *      This is what makes shared links carry their language.
 *   2. localStorage (`wizmat_v1_lang`) — what the user picked previously.
 *   3. navigator.language — `pl-*` → "pl", anything else → "en".
 *   4. Fallback "pl".
 */

const VALID = new Set(["pl", "en"]);
const STORAGE_KEY = "wizmat_v1_lang";

export function isValidLang(s) {
  return VALID.has(s);
}

export function langFromHash(hash = window.location?.hash ?? "") {
  const stripped = hash.replace(/^#\/?/, "");
  for (const seg of stripped.split("/")) {
    if (VALID.has(seg)) return seg;
  }
  return null;
}

function langFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return VALID.has(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function langFromBrowser() {
  if (typeof navigator === "undefined") return null;
  const codes = [navigator.language, ...(navigator.languages ?? [])];
  for (const code of codes) {
    if (!code) continue;
    if (code.toLowerCase().startsWith("pl")) return "pl";
    if (code.toLowerCase().startsWith("en")) return "en";
  }
  return null;
}

export function detectLang() {
  return langFromHash() ?? langFromStorage() ?? langFromBrowser() ?? "pl";
}

export function persistLang(lang) {
  if (!VALID.has(lang)) return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(lang)); } catch {}
}
