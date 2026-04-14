import { useEffect, useRef } from "react";
import { t } from "../../i18n.js";
import { COLORS, FONT } from "../../styles/tokens.js";

/**
 * ResourcePanel — full-screen modal that displays a learning resource.
 *
 * For "interactive" type: renders an iframe with the HTML visualization.
 * For "video" / "article": opens in a new tab (no iframe needed).
 *
 * Props:
 *   resource  — { type, url, titleEn, titlePl }
 *   lang      — "pl" | "en"
 *   onClose   — () => void
 */
export function ResourcePanel({ resource, lang, onClose }) {
  const backdropRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Trap scroll behind modal
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!resource) return null;

  const title  = lang === "pl" ? resource.titlePl : resource.titleEn;
  const isInteractive = resource.type === "interactive";

  const typeLabel = {
    interactive: t("resourceInteractive", lang),
    video:       t("resourceVideo",       lang),
    article:     t("resourceArticle",     lang),
  }[resource.type] ?? resource.type;

  const typeColor = {
    interactive: "#58C4DD",
    video:       "#FF6B35",
    article:     "#83C167",
  }[resource.type] ?? "#8a9dbe";

  // For non-interactive resources, just open externally and close modal
  if (!isInteractive) {
    window.open(resource.url, "_blank", "noopener");
    onClose();
    return null;
  }

  // Resolve URL — prepend base if it's a relative path, append lang param
  const base = import.meta.env.BASE_URL ?? "/";
  const rawUrl = resource.url.startsWith("http")
    ? resource.url
    : `${base.replace(/\/$/, "")}/${resource.url.replace(/^\//, "")}`;
  const resolvedUrl = rawUrl + (rawUrl.includes("?") ? "&" : "?") + "lang=" + lang;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(8, 11, 20, 0.88)",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        animation: "rsPanel_fadeIn 0.18s ease",
      }}
    >
      <style>{`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Modal container */}
      <div style={{
        width: "100%",
        maxWidth: 760,
        maxHeight: "calc(100vh - 32px)",
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        overflow: "hidden",
        border: `1px solid ${typeColor}33`,
        boxShadow: `0 0 48px ${typeColor}18, 0 8px 32px rgba(0,0,0,0.7)`,
      }}>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          background: "#161c28f8",
          borderBottom: `1px solid ${typeColor}22`,
          flexShrink: 0,
          fontFamily: FONT,
        }}>
          {/* Type badge */}
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: typeColor,
            background: `${typeColor}18`,
            border: `1px solid ${typeColor}40`,
            borderRadius: 4,
            padding: "2px 7px",
            flexShrink: 0,
          }}>
            {typeLabel}
          </span>

          {/* Title */}
          <span style={{
            flex: 1,
            fontSize: 13,
            fontWeight: 500,
            color: COLORS.textBody,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            {title}
          </span>

          {/* Open in new tab */}
          <button
            onClick={() => window.open(resolvedUrl, "_blank", "noopener")}
            title={t("openInTab", lang)}
            style={headerBtn}
          >
            ↗
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            title={t("closeResource", lang)}
            style={{ ...headerBtn, fontSize: 18, lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        {/* Iframe */}
        <iframe
          src={resolvedUrl}
          sandbox="allow-scripts allow-same-origin allow-forms"
          style={{
            flex: 1,
            border: "none",
            background: "#0e0e12",
            minHeight: 420,
            display: "block",
          }}
          title={title}
          loading="eager"
        />
      </div>
    </div>
  );
}

const headerBtn = {
  background: "none",
  border: `1px solid ${COLORS.border}`,
  borderRadius: 5,
  color: COLORS.textDim,
  cursor: "pointer",
  fontSize: 14,
  padding: "3px 9px",
  fontFamily: FONT,
  transition: "background 0.12s, color 0.12s",
  flexShrink: 0,
  lineHeight: 1.4,
};
