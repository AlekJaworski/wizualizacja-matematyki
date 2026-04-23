import { useEffect, useMemo, useRef, useState } from "react";
import { COLORS } from "../../styles/tokens.js";

/**
 * HeroParabola — passive auto-looping parabola animation for HeroScreen.
 *
 * Visual promise: "math can be seen, not just computed."
 *
 * - SVG-only (no canvas, no external deps, no pointer events).
 * - Animates vertex along (-2,+3) → (0,0) → (+2,+3) → return, with `a`
 *   gently breathing 0.5..1.5. One smooth 7s loop.
 * - When parabola crosses x-axis, roots light up briefly (COLORS.knownHi).
 * - Pauses rAF when not visible (IntersectionObserver).
 * - Respects prefers-reduced-motion → static mid-frame, no rAF.
 *
 * Coordinate system: math coords in ([-5,5] x ([-4,4]) mapped to SVG viewBox.
 */

const VB_W = 240;
const VB_H = 160;
const X_MIN = -5, X_MAX = 5;
const Y_MIN = -4, Y_MAX = 4;
const PERIOD_MS = 7000;

function mathToSvgX(x) {
  return ((x - X_MIN) / (X_MAX - X_MIN)) * VB_W;
}
function mathToSvgY(y) {
  return VB_H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * VB_H;
}

/** Smooth easing — cosine over the full period so the motion never jerks at loop seam. */
function cosPhase(t, phase = 0) {
  // returns value in [-1, 1]
  return Math.cos(2 * Math.PI * t + phase);
}

/** Sample parabola y = a*(x-h)^2 + k across viewport, return SVG polyline points. */
function parabolaPoints(a, h, k) {
  const pts = [];
  const STEPS = 80;
  for (let i = 0; i <= STEPS; i++) {
    const x = X_MIN + (i / STEPS) * (X_MAX - X_MIN);
    const y = a * (x - h) * (x - h) + k;
    // Clip far-off verticals but still include them so the line exits the frame cleanly.
    if (y < Y_MIN - 2 || y > Y_MAX + 2) continue;
    pts.push(`${mathToSvgX(x).toFixed(2)},${mathToSvgY(y).toFixed(2)}`);
  }
  return pts.join(" ");
}

/** Real roots of a*(x-h)^2 + k = 0, if they exist and lie in view. */
function roots(a, h, k) {
  if (a === 0) return [];
  const disc = -k / a;
  if (disc < 0) return [];
  const d = Math.sqrt(disc);
  const r1 = h - d, r2 = h + d;
  const out = [];
  if (r1 >= X_MIN && r1 <= X_MAX) out.push(r1);
  if (Math.abs(r1 - r2) > 1e-6 && r2 >= X_MIN && r2 <= X_MAX) out.push(r2);
  return out;
}

/** Compute animation state from t in [0,1). */
function animState(t) {
  // Vertex h: smooth sweep using sin. h = 2*sin(2πt) gives 0→2→0→-2→0 over a full cycle.
  const h = 2 * Math.sin(2 * Math.PI * t);
  // Vertex k: up at extremes, dips below zero at the center crossings so we get real
  // roots to highlight. k = 3*sin²(2πt) - 1 gives range [-1, 3]:
  //   t=0:     k = -1 (vertex below → two real roots, x-axis crossings)
  //   t=.25:   k =  3 (vertex high)
  //   t=.5:    k = -1 (vertex below again)
  //   t=.75:   k =  3
  const s = Math.sin(2 * Math.PI * t);
  const k = 3 * s * s - 1;
  // `a` breathes between 0.5 and 1.5 with a different phase so it feels organic.
  const a = 1 + 0.5 * cosPhase(t, Math.PI / 3);
  return { a, h, k };
}

export function HeroParabola({ compact = false }) {
  const containerRef = useRef(null);
  const rafRef = useRef(0);
  const startRef = useRef(0);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // The full animation state. For reduced-motion, we render a fixed mid-frame
  // (vertex left-of-center and dipping below the axis, so both the shape and a
  // crossing dot are visible — the viz still "tells the story" without motion).
  const [state, setState] = useState(() =>
    prefersReducedMotion ? { a: 1, h: -1.4, k: -0.6 } : animState(0)
  );
  const [visible, setVisible] = useState(true);

  // IntersectionObserver — pause when offscreen.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  // rAF loop.
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!visible) {
      cancelAnimationFrame(rafRef.current);
      return;
    }
    let last = 0;
    const FRAME_MS = 1000 / 30; // target ~30fps
    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      if (now - last >= FRAME_MS) {
        last = now;
        const elapsed = (now - startRef.current) % PERIOD_MS;
        const t = elapsed / PERIOD_MS;
        setState(animState(t));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, prefersReducedMotion]);

  const { a, h, k } = state;
  const points = parabolaPoints(a, h, k);
  const rs = roots(a, h, k);

  // Grid lines — integer x, y.
  const xGrid = [];
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) {
    xGrid.push(x);
  }
  const yGrid = [];
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) {
    yGrid.push(y);
  }

  // The parabola line color — unknownHi is bolder; use that.
  const lineColor = COLORS.unknownHi;
  const axisColor = COLORS.textFaint;
  const gridColor = `${COLORS.textFaint}30`; // very subdued grid
  const dotColor = COLORS.knownHi;

  const aspect = compact ? "2 / 1" : "3 / 2";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        width: "100%",
        aspectRatio: aspect,
        maxWidth: 420,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block", pointerEvents: "none" }}
        focusable="false"
      >
        {/* Grid — vertical lines */}
        {xGrid.map((x) => (
          <line
            key={`vx${x}`}
            x1={mathToSvgX(x)}
            x2={mathToSvgX(x)}
            y1={0}
            y2={VB_H}
            stroke={gridColor}
            strokeWidth={0.5}
          />
        ))}
        {/* Grid — horizontal lines */}
        {yGrid.map((y) => (
          <line
            key={`hy${y}`}
            x1={0}
            x2={VB_W}
            y1={mathToSvgY(y)}
            y2={mathToSvgY(y)}
            stroke={gridColor}
            strokeWidth={0.5}
          />
        ))}

        {/* Axes */}
        <line
          x1={0}
          x2={VB_W}
          y1={mathToSvgY(0)}
          y2={mathToSvgY(0)}
          stroke={axisColor}
          strokeWidth={1}
          opacity={0.7}
        />
        <line
          x1={mathToSvgX(0)}
          x2={mathToSvgX(0)}
          y1={0}
          y2={VB_H}
          stroke={axisColor}
          strokeWidth={1}
          opacity={0.7}
        />

        {/* Parabola */}
        <polyline
          points={points}
          fill="none"
          stroke={lineColor}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.95}
        />

        {/* x-axis intersection dots — only visible when parabola crosses (k < 0).
            Opacity ramps up smoothly as we move deeper below the axis, so dots fade
            in at each crossing and fade out as the vertex lifts back up. */}
        {rs.map((r, i) => {
          // k ranges in [-1, 3]. Dots live when k < 0. Brighter as k goes more negative.
          const depth = Math.max(0, -k); // 0..1 for our animation range
          const op = 0.35 + 0.6 * depth;
          const radius = 2.5 + 1.5 * depth;
          return (
            <circle
              key={`root${i}`}
              cx={mathToSvgX(r)}
              cy={mathToSvgY(0)}
              r={radius}
              fill={dotColor}
              opacity={op}
            />
          );
        })}
      </svg>
    </div>
  );
}
