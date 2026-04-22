import { useState, useMemo } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { ResourcePanel } from "../panels/ResourcePanel.jsx";

/**
 * Visualization gallery — browse all interactive resources.
 * Like a video library: cards with titles, topic tags, search.
 */
export function VizGallery({ RAW_NODES, SCOPE_COLORS, SCOPE_LABELS, lang, onClose }) {
  const [search, setSearch] = useState("");
  const [openResource, setOpenResource] = useState(null);
  const [filterScope, setFilterScope] = useState(null);

  // Collect all interactive resources across all nodes, deduped by URL.
  // The same viz can legitimately be referenced from multiple nodes
  // (e.g. resources/sequences/sequences-explorer.html is shared between
  // sequences and arith_geom). Keep the entry whose nodeId matches the
  // URL's folder segment — that's the viz's "home" node.
  const allVizzes = useMemo(() => {
    const byUrl = new Map();
    for (const node of RAW_NODES) {
      if (!node.resources) continue;
      for (const res of node.resources) {
        if (res.type !== "interactive") continue;
        const entry = {
          nodeId: node.id,
          nodeLabel: lang === "pl" ? node.labelPl : node.label,
          scope: node.scope,
          section: node.section,
          title: lang === "pl" ? res.titlePl : res.titleEn,
          resource: res,
          isHome: res.url?.includes(`/${node.id}/`) ?? false,
          isDlaCiekawych: (res.titlePl || "").includes("Dla ciekawych") || (res.titleEn || "").includes("curious"),
        };
        const prev = byUrl.get(res.url);
        if (!prev || (entry.isHome && !prev.isHome)) byUrl.set(res.url, entry);
      }
    }
    return [...byUrl.values()];
  }, [RAW_NODES, lang]);

  // Filter
  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return allVizzes.filter(v => {
      if (filterScope && v.scope !== filterScope) return false;
      if (term && !v.title.toLowerCase().includes(term) && !v.nodeLabel.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [allVizzes, search, filterScope]);

  // Unique scopes that have vizzes
  const scopes = useMemo(() => {
    const s = new Set(allVizzes.map(v => v.scope));
    return [...s].sort();
  }, [allVizzes]);

  const scopeColor = (scope) => SCOPE_COLORS?.[scope] ?? "#4a9eff";
  const scopeLabel = (scope) => SCOPE_LABELS?.[scope]?.[lang === "pl" ? "pl" : "en"] ?? scope;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: COLORS.bg, fontFamily: FONT,
      overflowY: "auto",
      animation: "galleryIn 0.2s ease",
    }}>
      <style>{`
        @keyframes galleryIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        maxWidth: "min(720px, calc(100% - 32px))", width: "100%",
        margin: "0 auto", padding: "24px 16px 48px",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 14px", fontSize: 12, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textDim, cursor: "pointer",
            }}
          >←</button>
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: COLORS.textPrimary }}>
              {t("galleryTitle", lang)}
            </h1>
            <p style={{ margin: 0, fontSize: 12, color: COLORS.textDim }}>
              {filtered.length} {t("galleryCount", lang)}
            </p>
          </div>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t("search", lang)}
          style={{
            width: "100%", padding: "12px 14px", fontSize: 13, fontFamily: FONT,
            borderRadius: 8, border: `1px solid ${COLORS.border}`,
            background: COLORS.surface, color: COLORS.textBody,
            marginBottom: 12, outline: "none",
          }}
        />

        {/* Scope filter pills */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
          <button
            onClick={() => setFilterScope(null)}
            style={{
              padding: "6px 12px", fontSize: 11, fontFamily: FONT,
              borderRadius: 16, cursor: "pointer",
              border: !filterScope ? "1px solid #4a9eff" : `1px solid ${COLORS.border}`,
              background: !filterScope ? "#4a9eff18" : "transparent",
              color: !filterScope ? "#4a9eff" : COLORS.textDim,
            }}
          >{t("all", lang)}</button>
          {scopes.map(scope => (
            <button
              key={scope}
              onClick={() => setFilterScope(filterScope === scope ? null : scope)}
              style={{
                padding: "6px 12px", fontSize: 11, fontFamily: FONT,
                borderRadius: 16, cursor: "pointer",
                border: filterScope === scope ? `1px solid ${scopeColor(scope)}` : `1px solid ${COLORS.border}`,
                background: filterScope === scope ? `${scopeColor(scope)}18` : "transparent",
                color: filterScope === scope ? scopeColor(scope) : COLORS.textDim,
              }}
            >{scopeLabel(scope)}</button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 10,
        }}>
          {filtered.map((v, i) => {
            const sc = scopeColor(v.scope);
            return (
              <button
                key={`${v.nodeId}-${i}`}
                onClick={() => setOpenResource(v.resource)}
                style={{
                  padding: "16px 14px", borderRadius: 10,
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                  cursor: "pointer", textAlign: "left",
                  fontFamily: FONT, display: "flex", flexDirection: "column", gap: 8,
                  transition: "border-color 0.15s, background 0.15s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = sc + "60";
                  e.currentTarget.style.background = `${sc}08`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.background = COLORS.surface;
                }}
              >
                {/* Icon + scope tag */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 22 }}>⬡</span>
                  {v.isDlaCiekawych && (
                    <span style={{
                      fontSize: 9, padding: "2px 6px", borderRadius: 4,
                      background: "#8e44ad18", color: "#c39bd3", border: "1px solid #8e44ad30",
                    }}>🧩</span>
                  )}
                </div>

                {/* Title */}
                <div style={{
                  fontSize: 13, fontWeight: 600, color: COLORS.textPrimary,
                  lineHeight: 1.4,
                }}>
                  {v.title}
                </div>

                {/* Topic tag */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 6, marginTop: "auto",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: sc, flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 10, color: COLORS.textFaint }}>
                    {v.nodeLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 0", color: COLORS.textFaint, fontSize: 13 }}>
            {t("noResults", lang)}
          </div>
        )}
      </div>

      {/* Resource viewer */}
      {openResource && (
        <ResourcePanel
          resource={openResource}
          lang={lang}
          onClose={() => setOpenResource(null)}
        />
      )}
    </div>
  );
}
