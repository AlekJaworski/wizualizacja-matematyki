import { COLORS } from "../../styles/tokens.js";

/**
 * A mobile bottom sheet that slides up from the bottom of the screen.
 * On desktop it renders nothing (children are rendered inline by parent).
 *
 * Props:
 *   isOpen   — whether the sheet is visible
 *   onClose  — called when backdrop or handle is tapped
 *   title    — optional string header
 *   children
 *   maxHeight — css value, default "75vh"
 */
export function BottomSheet({ isOpen, onClose, title, children, maxHeight = "75vh" }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(5,9,18,0.6)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Sheet */}
      <div style={{
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        background: COLORS.surface,
        borderTop: `1px solid ${COLORS.border}`,
        borderRadius: "16px 16px 0 0",
        maxHeight,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Drag handle */}
        <div style={{
          display: "flex", justifyContent: "center",
          padding: "10px 0 4px",
          flexShrink: 0,
        }}>
          <div style={{
            width: 36, height: 4,
            borderRadius: 2,
            background: COLORS.textFaint,
          }} />
        </div>

        {/* Optional title */}
        {title && (
          <div style={{
            padding: "4px 16px 10px",
            fontWeight: 700, fontSize: 14,
            color: COLORS.textPrimary,
            flexShrink: 0,
            borderBottom: `1px solid ${COLORS.borderSubtle}`,
          }}>
            {title}
          </div>
        )}

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", flex: 1, padding: "12px 16px 24px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
