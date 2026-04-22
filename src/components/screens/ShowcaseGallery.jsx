import { useState, useMemo, useRef, useEffect } from "react";
import { FONT, COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";
import { ResourcePanel } from "../panels/ResourcePanel.jsx";

/**
 * ShowcaseGallery — curated "magazine" entry page for visualizations.
 *
 * Opens by default when a student chooses "see resources" without doing the
 * diagnostic. Groups the best resources into a handful of themed sections
 * (classic topics, misconception-killers, visually striking explorers,
 * meta-skills). Each card is a curator's pick with a custom hook line.
 *
 * The flat filterable gallery (VizGallery) is still available via a
 * "pełna lista" link at the bottom for power users.
 */

// ── Curated sections ─────────────────────────────────────────────────
// Each entry picks a resource by (nodeId, match on title fragment).
// If no match is found (e.g. resource was removed), the card is silently dropped.

const SECTIONS = [
  {
    id: "klasyki",
    titlePl: "Klasyki maturalne",
    titleEn: "Matura classics",
    subtitlePl: "Kluczowe tematy z najczystszymi Warsztatami",
    subtitleEn: "Core topics with the cleanest Warsztats",
    accent: "#58C4DD",
    items: [
      { nodeId: "vieta",       match: "Warsztat",  hookPl: "Wzory Viete'a bez delty — pierwiastki wprost ze współczynników." },
      { nodeId: "derivative",  match: "Warsztat",  hookPl: "Reguły pochodnych na przykładach, z wizualizacją stycznej." },
      { nodeId: "trig_basic",  match: "Warsztat",  hookPl: "Trygonometria od okręgu jednostkowego, krok po kroku." },
      { nodeId: "probability", match: "Warsztat",  hookPl: "Drzewo zdarzeń oraz reguły dodawania i mnożenia na konkretnych przykładach." },
    ],
  },
  {
    id: "pulapki",
    titlePl: "Najczęstsze pułapki",
    titleEn: "Common traps",
    subtitlePl: "Błędy, przez które najczęściej traci się punkty",
    subtitleEn: "Errors that quietly cost points every matura",
    accent: "#FF6B6B",
    items: [
      { nodeId: "linearity_fallacy", match: "Warsztat", hookPl: "$(a+b)^2 \\neq a^2 + b^2$ i pięć podobnych pułapek w jednym miejscu." },
      { nodeId: "equation_domain",   match: "Warsztat", hookPl: "Dlaczego dzielenie przez $x$ gubi rozwiązania — i jak tego uniknąć." },
      { nodeId: "trig_basic",        match: "kwadrant",  hookPl: "Znaki sinusa i kosinusa w każdej ćwiartce — reguła z okręgu jednostkowego." },
      { nodeId: "abs_value",         match: "odleg",     hookPl: "$|x-a|$ jako odległość na osi liczbowej — geometria pokonuje rachunek." },
    ],
  },
  {
    id: "widac",
    titlePl: "Zobacz, jak to działa",
    titleEn: "See it move",
    subtitlePl: "Zjawiska, które łatwiej zrozumieć w ruchu niż z samego wzoru",
    subtitleEn: "Interactive explorers — slide, rotate, watch it move",
    accent: "#83C167",
    items: [
      { nodeId: "solid_geom",    match: "Warsztat", hookPl: "Ostrosłupy i przekątne w 3D — przekroje pokazane na rzucie izometrycznym." },
      { nodeId: "fn_transforms", match: "Warsztat", hookPl: "Przesunięcia, odbicia i skalowanie — cztery rodziny na paraboli i sinusoidzie." },
      { nodeId: "derivative",    match: "Why",       hookPl: "Dlaczego pochodna $x^2$ równa się $2x$ — wyprowadzenie geometryczne." },
      { nodeId: "integral",      match: "Explor",    hookPl: "Całka jako pole pod wykresem — sumy Riemanna na żywo." },
    ],
  },
  {
    id: "meta",
    titlePl: "Meta-umiejętności",
    titleEn: "Meta-skills",
    subtitlePl: "Techniki rozumowania przydatne w zadaniach otwartych",
    subtitleEn: "Reasoning techniques that transfer across topics",
    accent: "#C78DFF",
    items: [
      { nodeId: "odtwarzanie_wzorow", match: null, hookPl: "Jak odtworzyć wzór, którego nie pamiętasz — pięć sprawdzonych technik." },
      { nodeId: "matura_pytania",     match: null, hookPl: "Jak czytać polecenia: „wykaż\" vs „sprawdź\" vs „wyznacz\" i dlaczego to ma znaczenie." },
      { nodeId: "linearity_fallacy",  match: null, hookPl: "Klasyczne błędy liniowości — i dlaczego intuicja je podpowiada." },
      { nodeId: "proof",              match: null, hookPl: "Struktura dowodu: założenie → przekształcenia → teza." },
    ],
  },
];

// Hero viz: auto-embedded at the top of the page.
const HERO_VIZ = {
  nodeId: "linearity_fallacy",
  match: "Warsztat",
  captionPl: "Interaktywny model — przesuwaj suwaki i obserwuj, jak zmienia się wynik.",
  captionEn: "Touch it, slide it, see it — math you can grab.",
};

// ── Component ─────────────────────────────────────────────────────────

export function ShowcaseGallery({ RAW_NODES, SCOPE_COLORS, SCOPE_LABELS, lang, onClose, onBrowseAll, onSelectTopic }) {
  const [openResource, setOpenResource] = useState(null);

  const nodeById = useMemo(
    () => Object.fromEntries(RAW_NODES.map(n => [n.id, n])),
    [RAW_NODES],
  );

  // Resolve a (nodeId, match) pair to an actual resource object.
  // Returns null when the node has no interactive resources — card then becomes
  // "topic-only" (clicking opens the topic description instead).
  function resolveResource(item) {
    const node = nodeById[item.nodeId];
    if (!node?.resources) return null;
    const interactives = node.resources.filter(r => r.type === "interactive");
    if (interactives.length === 0) return null;
    if (!item.match) return interactives[0];
    const needle = item.match.toLowerCase();
    const found = interactives.find(r =>
      (r.titlePl?.toLowerCase().includes(needle)) ||
      (r.titleEn?.toLowerCase().includes(needle)) ||
      (r.url?.toLowerCase().includes(needle))
    );
    return found || interactives[0];
  }

  // Resolve hero
  const heroResource = useMemo(() => resolveResource(HERO_VIZ), [RAW_NODES]);
  const heroUrl = heroResource ? resolveUrl(heroResource.url, lang) : null;

  // Resolve section items — keep all, use topic-only mode for those with no
  // interactive resource. Drop only items whose node doesn't exist at all.
  const resolvedSections = useMemo(() => SECTIONS.map(section => ({
    ...section,
    cards: section.items
      .map(it => {
        const node = nodeById[it.nodeId];
        if (!node) return null;
        const resource = resolveResource(it);
        return {
          item: it,
          resource,
          node,
          title: resource
            ? (lang === "pl" ? resource.titlePl : resource.titleEn)
            : (lang === "pl" ? node.labelPl : node.label),
          nodeLabel: lang === "pl" ? node.labelPl : node.label,
          topicOnly: !resource,
        };
      })
      .filter(Boolean),
  })), [RAW_NODES, lang]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 50,
      background: COLORS.bg, fontFamily: FONT,
      overflowY: "auto",
      animation: "showcaseIn 0.2s ease",
    }}>
      <style>{`
        @keyframes showcaseIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 16px 48px" }}>
        {/* Header: back button + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 14px", fontSize: 12, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textDim, cursor: "pointer",
            }}
          >←</button>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: COLORS.textPrimary }}>
              {lang === "pl" ? "Wybrane wizualizacje" : "Browse what we've built"}
            </h1>
            <p style={{ margin: 0, fontSize: 12, color: COLORS.textDim }}>
              {lang === "pl"
                ? "Ręcznie wybrane Warsztaty i wizualizacje — zacznij bez testu"
                : "Hand-picked Warsztats and explorers — entry without the quiz"}
            </p>
          </div>
        </div>

        {/* Hero embed */}
        {heroUrl && (
          <HeroEmbed
            url={heroUrl}
            caption={lang === "pl" ? HERO_VIZ.captionPl : HERO_VIZ.captionEn}
            onOpen={() => setOpenResource(heroResource)}
            lang={lang}
          />
        )}

        {/* Sections */}
        {resolvedSections.map(section => (
          <Section
            key={section.id}
            section={section}
            lang={lang}
            onOpen={(res) => setOpenResource(res)}
            onSelectTopic={(id) => {
              if (onSelectTopic) onSelectTopic(id);
            }}
          />
        ))}

        {/* Full list fallback */}
        <div style={{
          marginTop: 32, paddingTop: 24, borderTop: `1px solid ${COLORS.border}`,
          textAlign: "center",
        }}>
          <p style={{ fontSize: 12, color: COLORS.textFaint, margin: "0 0 10px" }}>
            {lang === "pl" ? "Szukasz czegoś konkretnego?" : "Looking for something specific?"}
          </p>
          <button
            onClick={onBrowseAll}
            style={{
              padding: "10px 20px", fontSize: 13, fontFamily: FONT,
              borderRadius: 6, border: `1px solid ${COLORS.border}`,
              background: "transparent", color: COLORS.textBody, cursor: "pointer",
            }}
          >
            {lang === "pl" ? "Pełna lista z filtrem →" : "Full list with filter →"}
          </button>
        </div>
      </div>

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

// ── Hero embed ─────────────────────────────────────────────────────────
function HeroEmbed({ url, caption, onOpen, lang }) {
  const iframeRef = useRef(null);
  const [h, setH] = useState(560);
  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    let ro;
    const sync = () => {
      try {
        const doc = el.contentDocument;
        if (!doc?.body) return;
        const nh = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
        if (nh > 0) setH(nh);
      } catch {}
    };
    const onLoad = () => {
      sync();
      try {
        const doc = el.contentDocument;
        if (doc?.body && typeof ResizeObserver !== "undefined") {
          ro = new ResizeObserver(sync);
          ro.observe(doc.body);
        }
      } catch {}
    };
    el.addEventListener("load", onLoad);
    return () => { el.removeEventListener("load", onLoad); ro?.disconnect(); };
  }, [url]);

  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{
        borderRadius: 12, overflow: "hidden",
        border: `1px solid ${COLORS.border}`,
        background: "#0e0e12",
      }}>
        <iframe
          ref={iframeRef}
          src={url}
          sandbox="allow-scripts allow-same-origin allow-forms"
          scrolling="no"
          style={{ width: "100%", height: h, border: "none", display: "block", background: "#0e0e12" }}
          title="hero"
          loading="eager"
        />
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        marginTop: 10, gap: 12, flexWrap: "wrap",
      }}>
        <p style={{ margin: 0, fontSize: 12, color: COLORS.textDim, fontStyle: "italic" }}>{caption}</p>
        <button
          onClick={onOpen}
          style={{
            padding: "6px 14px", fontSize: 11, fontFamily: FONT,
            borderRadius: 6, border: "1px solid #58C4DD40",
            background: "#58C4DD12", color: "#58C4DD", cursor: "pointer",
          }}
        >
          {lang === "pl" ? "Otwórz w pełnym widoku" : "Open full view"}
        </button>
      </div>
    </div>
  );
}

// ── Section (header + card grid) ──────────────────────────────────────
function Section({ section, lang, onOpen, onSelectTopic }) {
  if (section.cards.length === 0) return null;
  const title = lang === "pl" ? section.titlePl : section.titleEn;
  const subtitle = lang === "pl" ? section.subtitlePl : section.subtitleEn;

  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 10,
        marginBottom: 4, paddingLeft: 2,
      }}>
        <span style={{ width: 4, height: 16, background: section.accent, borderRadius: 2, display: "inline-block" }} />
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: COLORS.textPrimary }}>{title}</h2>
      </div>
      <p style={{ margin: "0 0 14px 16px", fontSize: 12, color: COLORS.textDim }}>{subtitle}</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 12,
      }}>
        {section.cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            accent={section.accent}
            hook={lang === "pl" ? card.item.hookPl : (card.item.hookEn ?? card.item.hookPl)}
            onOpen={() => {
              if (card.topicOnly) onSelectTopic(card.node.id);
              else onOpen(card.resource);
            }}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────
function Card({ card, accent, hook, onOpen, lang }) {
  return (
    <button
      onClick={onOpen}
      style={{
        padding: "14px 14px 12px", borderRadius: 10,
        background: COLORS.surface, border: `1px solid ${COLORS.border}`,
        cursor: "pointer", textAlign: "left", fontFamily: FONT,
        display: "flex", flexDirection: "column", gap: 8,
        transition: "border-color 0.15s, background 0.15s, transform 0.15s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent + "60";
        e.currentTarget.style.background = accent + "08";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = COLORS.border;
        e.currentTarget.style.background = COLORS.surface;
        e.currentTarget.style.transform = "";
      }}
    >
      {/* Accent bar + node label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
        <span style={{ fontSize: 10, color: COLORS.textFaint, textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {card.nodeLabel}
        </span>
      </div>
      {/* Title */}
      <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.textPrimary, lineHeight: 1.35 }}>
        {card.title}
      </div>
      {/* Hook */}
      <div
        style={{ fontSize: 12, color: COLORS.textDim, lineHeight: 1.5, marginTop: 2 }}
        dangerouslySetInnerHTML={{ __html: renderInlineMath(hook) }}
      />
      <div style={{ marginTop: "auto", fontSize: 11, color: accent, paddingTop: 6 }}>
        {card.topicOnly
          ? (lang === "pl" ? "Przeczytaj →" : "Read →")
          : (lang === "pl" ? "Otwórz →" : "Open →")}
      </div>
    </button>
  );
}

// Light inline $...$ math renderer (defers to KaTeX if present, plain-text otherwise).
function renderInlineMath(text) {
  if (!text) return "";
  const katex = typeof globalThis !== "undefined" ? globalThis.katex : null;
  if (!katex) return text.replace(/\$([^$]+)\$/g, (_, m) => m);
  return text.replace(/\$([^$]+)\$/g, (_, m) => {
    try { return katex.renderToString(m, { throwOnError: false, output: "html" }); }
    catch { return m; }
  });
}

// URL resolver (same shape as in LessonView)
function resolveUrl(url, lang) {
  const base = import.meta.env.BASE_URL ?? "/";
  const raw = url.startsWith("http") ? url : `${base.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
  return raw + (raw.includes("?") ? "&" : "?") + "lang=" + lang;
}
