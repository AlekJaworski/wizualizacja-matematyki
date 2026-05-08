/**
 * lang-detect.mjs — heuristic + n-gram Polish/English classifier.
 *
 * Returns "pl" | "en" | "neutral" for an arbitrary string. Combines:
 *
 *   1. Polish-only diacritics (ąćęłńóśźż) — strongest signal.
 *   2. Polish-only consonant clusters (wz-, prz-, szcz-, krzy-, brzm-, …)
 *      — catches diacriticless Polish like "Wzory" or "faktoryzuj".
 *   3. Polish-/English-only stopword counts — useful on short UI strings.
 *   4. franc-min trigram language model — kicks in on text with enough letters
 *      and resolves longer prose with no obvious surface signal.
 *
 * Why a layered approach:
 *   - franc-min needs ~20+ letters to be confident; it falls down on short
 *     UI labels and on math-heavy strings ("faktoryzuj 2x²-x+4" reads as English
 *     to an n-gram model because the math noise dominates).
 *   - Pure surface signals (diacritics/clusters) miss longer prose written
 *     without obvious markers but with Polish grammar.
 *   - We use the strongest signal that fires; "neutral" only if nothing fires
 *     so callers can choose to ignore ambiguous cases.
 */
import { francAll } from "franc-min";

// ── Surface signals ────────────────────────────────────────────────
const PL_DIACRITICS = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/;

// Onset clusters that are common in Polish but never legal in English.
// Word-initial position is the strong filter (English has no /wz/ /prz/ start).
const PL_ONLY_ONSETS = /\b(wz|prz|trz|wsz|szcz|krz|grz|brz|chrz|drz|mglist|tysiąc|nikt|odp|odk|zna|znaj)/i;

// Polish-typical suffixes that don't appear word-finally in English.
// We require the suffix to follow a vowel-rich stem to avoid catching
// random English fragments. Hits "faktoryzuj", "rozkładać", "umiesz".
const PL_SUFFIXES = /\b\w{2,}(uj|aj|ić|ać|eć|ość|ście|emy|ecie|esz|isz)\b/i;

// Polish-only function words. Excludes ambiguous overlaps with English.
const PL_STOPWORDS = new Set([
  "się", "że", "jest", "są", "był", "była", "było", "były",
  "jeśli", "więc", "dla", "tym", "tej", "tego", "tych",
  "oraz", "jak", "gdy", "czyli", "ale", "lecz", "jednak",
  "albo", "lub", "przez", "między", "bez", "wśród",
  "który", "która", "które", "którego", "której", "którym", "którymi",
  "gdzie", "kiedy", "dlatego", "ponieważ", "skoro", "żeby", "aby",
  "musi", "może", "można", "trzeba", "powinien", "powinna",
  "nie", "ten", "ta", "te", "tę",
  "także", "również", "tylko", "jeszcze", "już",
  "często", "zawsze", "nigdy", "czasami", "czasem",
  "tutaj", "tam", "stąd", "wtedy",
  "nasz", "nasza", "nasze", "wasz", "wasza", "wasze",
  "co", "kto", "czy",
  "przy", "pod", "nad", "obok",
  "zacznij", "wybierz", "sprawdź", "kliknij", "wróć", "pokaż", "schowaj",
  "rozumiem", "znam", "umiem", "wiem",
  "wymagania", "wstępne", "tematy", "temat", "rozwiąż", "uprość",
  "oblicz", "wyznacz", "wykaż", "udowodnij", "narysuj", "zapisz",
  "rozkład", "rozłóż", "faktoryzuj", "wzory", "wzór", "wartość",
]);

const EN_STOPWORDS = new Set([
  "the", "is", "are", "was", "were", "been",
  "if", "then", "but", "and", "or", "of", "in",
  "with", "for", "from", "by", "at",
  "this", "that", "these", "those",
  "have", "has", "had", "having",
  "you", "your", "yours", "we", "our", "ours", "they", "their",
  "what", "which", "who", "where", "when", "how", "why",
  "click", "select", "choose", "back", "show", "hide",
  "know", "understand", "answer", "solve",
]);

// ── Helpers ────────────────────────────────────────────────────────
// Strip LaTeX math ($...$), markdown code, numbers, operators — anything
// that adds n-gram noise without contributing to the language signal.
function cleanForLang(text) {
  return text
    .replace(/\$[^$]*\$/g, " ")          // $...$ inline math
    .replace(/\\[a-zA-Z]+/g, " ")        // \frac, \sin, etc.
    .replace(/[`*_~^{}\[\]<>=+\-/|\\]/g, " ")
    .replace(/\d+(?:\.\d+)?/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return (text.toLowerCase().match(/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/g) ?? []);
}

// ── Main ──────────────────────────────────────────────────────────
export function detectLang(text) {
  return detectLangVerbose(text).lang;
}

export function detectLangVerbose(text) {
  if (!text || typeof text !== "string") return { lang: "neutral", reasons: ["empty"] };
  const trimmed = text.trim();
  if (trimmed.length < 3) return { lang: "neutral", reasons: ["too-short"] };

  const reasons = [];

  // 1. Diacritics — definitive PL.
  if (PL_DIACRITICS.test(trimmed)) {
    reasons.push("pl-diacritics");
    return { lang: "pl", reasons };
  }

  const cleaned = cleanForLang(trimmed);
  const tokens  = tokenize(cleaned);

  // 2. Polish-only onset cluster on any token.
  if (PL_ONLY_ONSETS.test(cleaned)) {
    reasons.push("pl-onset-cluster");
    return { lang: "pl", reasons };
  }

  // 3. Polish-only suffixes (require ≥4-letter stem to avoid noise).
  const longTokens = tokens.filter(t => t.length >= 4);
  if (longTokens.some(t => PL_SUFFIXES.test(t))) {
    reasons.push("pl-suffix");
    return { lang: "pl", reasons };
  }

  // 4. Stopword counts.
  let plHits = 0, enHits = 0;
  const plMatched = [], enMatched = [];
  for (const t of tokens) {
    if (PL_STOPWORDS.has(t)) { plHits++; plMatched.push(t); }
    if (EN_STOPWORDS.has(t)) { enHits++; enMatched.push(t); }
  }
  if (plMatched.length) reasons.push(`pl-stopwords:${plMatched.slice(0,5).join(",")}`);
  if (enMatched.length) reasons.push(`en-stopwords:${enMatched.slice(0,5).join(",")}`);

  // Strong stopword signal: ≥2 hits clearly winning.
  if (plHits >= 2 && plHits > enHits) return { lang: "pl", reasons };
  if (enHits >= 2 && enHits > plHits) return { lang: "en", reasons };

  // 5. n-gram model — needs at least ~20 letters to be reliable.
  const letters = cleaned.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, "");
  if (letters.length >= 20) {
    const ranked = francAll(cleaned, { only: ["pol", "eng"], minLength: 10 });
    if (ranked.length >= 2) {
      const [[topLang, topScore], [, runScore]] = ranked;
      if (topScore - runScore >= 0.10) {
        reasons.push(`franc:${topLang}(${topScore.toFixed(2)} vs ${runScore.toFixed(2)})`);
        return { lang: topLang === "pol" ? "pl" : "en", reasons };
      }
      reasons.push(`franc-ambiguous:${ranked.map(r => r[0]+":"+r[1].toFixed(2)).join("|")}`);
    } else if (ranked.length === 1) {
      reasons.push(`franc:${ranked[0][0]}(only)`);
      return { lang: ranked[0][0] === "pol" ? "pl" : "en", reasons };
    }
  }

  // 6. Single-stopword tiebreak for short text.
  if (plHits > enHits) return { lang: "pl", reasons };
  if (enHits > plHits) return { lang: "en", reasons };

  return { lang: "neutral", reasons: reasons.length ? reasons : ["no-signal"] };
}
