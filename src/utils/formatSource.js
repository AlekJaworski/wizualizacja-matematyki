/**
 * Format a question's `source` frontmatter tag into a human badge.
 *
 * Recognises:
 *   "cke"                              → "CKE"
 *   "cke_2024_rozszerzona_zad15"       → "Matura 2024 rozszerzona, zad. 15" (pl)
 *                                      → "Matura 2024 extended, task 15"   (en)
 *   "cke_2023_podstawowa_zad7"         → "Matura 2023 podstawowa, zad. 7"   (pl)
 *
 * Returns null for missing / unrecognised sources.
 */
export function formatSource(source, lang = "pl") {
  if (!source) return null;
  if (source === "cke") return "CKE";
  const m = source.match(/^cke_(\d{4})_(podstawowa|rozszerzona)_zad(\d+)/);
  if (!m) return "CKE";
  const [, year, tier, task] = m;
  if (lang === "pl") {
    return `Matura ${year} ${tier}, zad. ${task}`;
  }
  const tierEn = tier === "rozszerzona" ? "extended" : "basic";
  return `Matura ${year} ${tierEn}, task ${task}`;
}
