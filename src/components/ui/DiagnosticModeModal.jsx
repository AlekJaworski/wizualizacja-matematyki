import { useState, useEffect, useRef } from "react";

const MODES = [
  {
    id: "quick",
    label: "Szybka diagnoza",
    description: "Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",
    icon: "⚡",
    color: "#4a9eff",
  },
  {
    id: "deepdive",
    label: "Szczegółowa analiza",
    description: "Wybierz konkretny cel (np. maturę rozszerzoną). System przeanalizuje tylko wymagane tematy.",
    icon: "◎",
    color: "#8e44ad",
  },
];

export function DiagnosticModeModal({ isOpen, onSelect, onClose }) {
  const [selected, setSelected] = useState(null);
  const firstBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSelected(null);
      setTimeout(() => firstBtnRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && selected) onSelect(selected);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, selected, onClose, onSelect]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "#000000cc", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 100,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: 420, maxWidth: "90vw",
        background: "#0d1520", border: "1px solid #1e2d45",
        borderRadius: 10, display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "16px 18px 12px",
          borderBottom: "1px solid #1e2d45",
        }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#f5f6fa", marginBottom: 4 }}>
            Wybierz tryb diagnozy
          </div>
          <div style={{ fontSize: 11, color: "#6b7d9a" }}>
            Jak chcesz sprawdzić swoją wiedzę?
          </div>
        </div>

        <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {MODES.map((mode, idx) => (
            <button
              key={mode.id}
              ref={idx === 0 ? firstBtnRef : null}
              onClick={() => setSelected(mode.id)}
              onDoubleClick={() => onSelect(mode.id)}
              style={{
                textAlign: "left",
                padding: "12px 14px",
                borderRadius: 6,
                fontSize: 12,
                cursor: "pointer",
                background: selected === mode.id ? `${mode.color}18` : "#0a0e17",
                border: `1px solid ${selected === mode.id ? mode.color : "#1e2d45"}`,
                color: "#c8d6e5",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${mode.color}18`;
                e.currentTarget.style.borderColor = `${mode.color}60`;
              }}
              onMouseLeave={(e) => {
                if (selected !== mode.id) {
                  e.currentTarget.style.background = "#0a0e17";
                  e.currentTarget.style.borderColor = "#1e2d45";
                }
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: 16 }}>{mode.icon}</span>
                <span style={{ fontWeight: 600, color: selected === mode.id ? mode.color : "#f5f6fa" }}>
                  {mode.label}
                </span>
              </div>
              <div style={{ fontSize: 10, color: "#6b7d9a", lineHeight: 1.5 }}>
                {mode.description}
              </div>
            </button>
          ))}
        </div>

        <div style={{
          padding: "12px 16px", borderTop: "1px solid #1a2235",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button
            onClick={onClose}
            style={{
              padding: "6px 14px", borderRadius: 5, fontSize: 11, cursor: "pointer",
              background: "transparent", border: "1px solid #1e2d45", color: "#6b7d9a",
            }}
          >
            Anuluj
          </button>
          <button
            onClick={() => selected && onSelect(selected)}
            disabled={!selected}
            style={{
              padding: "6px 18px", borderRadius: 5, fontSize: 11, cursor: selected ? "pointer" : "not-allowed",
              background: selected ? "#4a9eff" : "#1e2d45",
              border: "none", color: selected ? "#fff" : "#3a4d63",
              opacity: selected ? 1 : 0.5,
            }}
          >
            Dalej
          </button>
        </div>
      </div>
    </div>
  );
}
