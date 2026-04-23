import { useEffect, useMemo, useRef, useState } from "react";
import { COLORS } from "../../styles/tokens.js";
import { t } from "../../i18n.js";

/**
 * HeroParabola — passive auto-looping parabola that tells the discriminant (Δ) story.
 *
 * Three-phase narrative cycle, mapping each discriminant case onto the parabola's
 * vertical position. The parabola shape is y = a·(x−h)² + k. For a > 0, the sign
 * of k matches the sign of −Δ (since Δ = −4ak in vertex form), so animating k
 * through negative → zero → positive directly visualizes Δ > 0 → Δ = 0 → Δ < 0.
 *
 *   Phase A  (t ≈ 0 .. 0.33)  — vertex below x-axis, two dots at roots, "Δ > 0".
 *   Phase B  (t ≈ 0.33 .. 0.55) — vertex rises, two dots converge at vertex, "Δ = 0".
 *   Phase C  (t ≈ 0.55 .. 0.85) — vertex above axis, no dots, "Δ < 0".
 *   Return   (t ≈ 0.85 .. 1)   — smooth ease back down to Phase A for seamless loop.
 *
 * A permanent bar above the parabola shows the formula "Δ = b² − 4ac", giving the
 * phase labels context without requiring prior familiarity with Δ.
 *
 * Constraints preserved from v1:
 *   - Passive, non-clickable (pointer-events: none, aria-hidden, focusable=false).
 *   - prefers-reduced-motion → static Phase A frame (two roots, dots, label).
 *   - IntersectionObserver pauses rAF offscreen; disconnect on unmount.
 *   - rAF throttled ~30fps; cancelled on unmount or when visible=false.
 *   - Pure SVG + React, no external deps.
 *
 * Coordinate system: math coords ([-5,5] × [-4,4]) mapped to SVG viewBox.
 */

const VB_W = 240;
const VB_H = 160;
const X_MIN = -5, X_MAX = 5;
const Y_MIN = -4, Y_MAX = 4;
const PERIOD_MS = 7000;

// Vertex-y envelope amplitude. With a ≈ 1 this puts roots comfortably inside view
// (|x| ≤ √1.5 ≈ 1.22) and keeps the "above the axis" phase visible on screen.
const K_AMP = 1.5;

// Reserve ~24 SVG-units of top vertical band for the formula + phase label so they
// never overlap the parabola when the vertex floats high (Phase C).
const TEXT_BAND_H = 28;

function mathToSvgX(x) {
  return ((x - X_MIN) / (X_MAX - X_MIN)) * VB_W;
}
function mathToSvgY(y) {
  // Squeeze the plot region below the reserved text band so labels never collide
  // with the curve even when the vertex rises in Phase C.
  const plotH = VB_H - TEXT_BAND_H;
  return TEXT_BAND_H + plotH - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * plotH;
}

/** Smoothstep (Hermite) — C¹ at 0 and 1, good for seamless segment joining. */
function smoothstep(x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  return x * x * (3 - 2 * x);
}

/** Linear remap of t ∈ [a,b] to [0,1], clamped. */
function remap(t, a, b) {
  return smoothstep((t - a) / (b - a));
}

/** Sample parabola y = a·(x−h)² + k across viewport; return SVG polyline points. */
function parabolaPoints(a, h, k) {
  const pts = [];
  const STEPS = 80;
  for (let i = 0; i <= STEPS; i++) {
    const x = X_MIN + (i / STEPS) * (X_MAX - X_MIN);
    const y = a * (x - h) * (x - h) + k;
    if (y < Y_MIN - 2 || y > Y_MAX + 2) continue;
    pts.push(`${mathToSvgX(x).toFixed(2)},${mathToSvgY(y).toFixed(2)}`);
  }
  return pts.join(" ");
}

/** Real roots of a·(x−h)² + k = 0, clipped to viewport. A small epsilon treats
 *  near-tangent cases (|k| ≪ 1) as a single root so Phase B renders one dot. */
function rootsOf(a, h, k) {
  if (a === 0) return [];
  const disc = -k / a;
  if (disc < -1e-6) return [];
  const d = Math.sqrt(Math.max(0, disc));
  const r1 = h - d, r2 = h + d;
  const out = [];
  if (r1 >= X_MIN && r1 <= X_MAX) out.push(r1);
  if (Math.abs(r1 - r2) > 1e-3 && r2 >= X_MIN && r2 <= X_MAX) out.push(r2);
  return out;
}

/**
 * animState(t) — the full per-frame state driven by loop fraction t ∈ [0, 1).
 *
 * Timing plan (segments, with smoothstep easing at every boundary):
 *   0.00 .. 0.28   Phase A plateau      k = −K_AMP            (Δ > 0, two roots)
 *   0.28 .. 0.48   morph A → B         k: −K_AMP → 0          (roots merge)
 *   0.48 .. 0.55   Phase B pause        k = 0                  (Δ = 0)
 *   0.55 .. 0.70   morph B → C         k: 0 → +K_AMP          (lift off axis)
 *   0.70 .. 0.85   Phase C plateau      k = +K_AMP            (Δ < 0, no roots)
 *   0.85 .. 1.00   return C → A         k: +K_AMP → −K_AMP    (seam)
 *
 * Phase opacities are derived from the same `t` so labels fade in/out alongside
 * the motion — no separate schedule to get out of sync.
 *
 * `h` wobbles gently (±0.15) and `a` breathes (0.85..1.15) so the curve feels
 * alive without distracting from the Δ narrative.
 */
function animState(t) {
  // ── vertex-y (k) piecewise schedule ───────────────────────────────
  let k;
  if (t < 0.28) {
    k = -K_AMP;
  } else if (t < 0.48) {
    k = -K_AMP + K_AMP * remap(t, 0.28, 0.48);        // −K_AMP → 0
  } else if (t < 0.55) {
    k = 0;
  } else if (t < 0.70) {
    k = K_AMP * remap(t, 0.55, 0.70);                  // 0 → +K_AMP
  } else if (t < 0.85) {
    k = K_AMP;
  } else {
    k = K_AMP - 2 * K_AMP * remap(t, 0.85, 1.00);      // +K_AMP → −K_AMP
  }

  // ── phase opacities for the three labels ──────────────────────────
  // Each label fades in over a short leading window, holds through its plateau,
  // and fades out over a short trailing window. The three windows don't overlap,
  // so at most one label is near full opacity at any moment (brief crossfade at
  // the boundaries). Phase A reappears on the return leg (k: +K_AMP → −K_AMP)
  // so the loop seam feels continuous rather than a snap back into Phase A.
  const opA_start = 1 - remap(t, 0.28, 0.42);                    // leading plateau
  const opA_return = remap(t, 0.92, 1.00);                       // fades back in on return
  const opA = Math.max(opA_start, opA_return);
  // Phase B: visible around the k=0 plateau. Starts rising at 0.38 (inside the
  // A→B morph) so there is no dead zone between opA fading out and opB rising.
  const opB = remap(t, 0.38, 0.48) * (1 - remap(t, 0.55, 0.62));
  // Phase C: visible around the k=+K_AMP plateau.
  const opC = remap(t, 0.62, 0.70) * (1 - remap(t, 0.85, 0.92));

  // ── subtle width + horizontal breathing ───────────────────────────
  const a = 1 + 0.15 * Math.sin(2 * Math.PI * t);
  const h = 0.15 * Math.sin(2 * Math.PI * t + Math.PI / 3);

  return { a, h, k, opA, opB, opC };
}

// Static frame for prefers-reduced-motion — the richest "tells the story" single
// frame: Phase A (Δ > 0), two root dots, vertex at deepest point.
const STATIC_FRAME = {
  a: 1, h: 0, k: -K_AMP,
  opA: 1, opB: 0, opC: 0,
};

export function HeroParabola({ compact = false, lang = "pl" }) {
  const containerRef = useRef(null);
  const rafRef = useRef(0);
  const startRef = useRef(0);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [state, setState] = useState(() =>
    prefersReducedMotion ? STATIC_FRAME : animState(0)
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
    const FRAME_MS = 1000 / 30;
    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      if (now - last >= FRAME_MS) {
        last = now;
        const elapsed = (now - startRef.current) % PERIOD_MS;
        const tt = elapsed / PERIOD_MS;
        setState(animState(tt));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, prefersReducedMotion]);

  const { a, h, k, opA, opB, opC } = state;
  const points = parabolaPoints(a, h, k);
  const rs = rootsOf(a, h, k);

  // Root dots: two during Phase A, converging into one at the Phase B tangent,
  // then zero for Phase C (rs = [] when Δ < 0 mathematically).
  const tangent = rs.length === 1;
  const displayDots = rs;

  // Grid — integer x,y.
  const xGrid = [];
  for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x++) xGrid.push(x);
  const yGrid = [];
  for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y++) yGrid.push(y);

  const lineColor = COLORS.unknownHi;
  const axisColor = COLORS.textFaint;
  const gridColor = `${COLORS.textFaint}30`;
  const dotColor = COLORS.knownHi;

  const aspect = compact ? "2 / 1" : "3 / 2";

  // Text sizes tuned so formula and label both fit in the reserved 28-unit band.
  const FORMULA_FS = 9;
  const LABEL_FS = 9.5;

  const labelA = t("heroVizDeltaPos", lang);
  const labelB = t("heroVizDeltaZero", lang);
  const labelC = t("heroVizDeltaNeg", lang);

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
        {/* Grid — vertical lines (plot region only) */}
        {xGrid.map((x) => (
          <line
            key={`vx${x}`}
            x1={mathToSvgX(x)}
            x2={mathToSvgX(x)}
            y1={TEXT_BAND_H}
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
          y1={TEXT_BAND_H}
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

        {/* Root dots — opacity and radius are a single continuous function of
            depth (how deep the vertex sits below the x-axis). The tangent case
            (one dot at k=0) falls out naturally: depth=0 gives the same visual
            as the 2-dot case just before they merge, so no snap at the seam. */}
        {displayDots.map((rx, i) => {
          const depth = Math.max(0, -k) / K_AMP;      // 0..1 across Phase A range
          const op = 0.55 + 0.4 * depth;
          const radius = 3.0 + 0.8 * depth;
          return (
            <circle
              key={`root${i}`}
              cx={mathToSvgX(rx)}
              cy={mathToSvgY(0)}
              r={radius}
              fill={dotColor}
              opacity={op}
            />
          );
        })}

        {/* Permanent formula bar — top centre. Kept dim so phase labels dominate. */}
        <text
          x={VB_W / 2}
          y={11}
          textAnchor="middle"
          fontSize={FORMULA_FS}
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fill={COLORS.textDim}
          opacity={0.85}
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          Δ = b² − 4ac
        </text>

        {/* Phase labels — stacked at the same y; only one is near full opacity
            at a time, with brief crossfades at the segment boundaries. */}
        <g>
          <text
            x={VB_W / 2}
            y={23}
            textAnchor="middle"
            fontSize={LABEL_FS}
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fill={COLORS.textFaint}
            opacity={opA}
          >
            {labelA}
          </text>
          <text
            x={VB_W / 2}
            y={23}
            textAnchor="middle"
            fontSize={LABEL_FS}
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fill={COLORS.textFaint}
            opacity={opB}
          >
            {labelB}
          </text>
          <text
            x={VB_W / 2}
            y={23}
            textAnchor="middle"
            fontSize={LABEL_FS}
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fill={COLORS.textFaint}
            opacity={opC}
          >
            {labelC}
          </text>
        </g>
      </svg>
    </div>
  );
}
