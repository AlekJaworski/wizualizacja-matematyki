/**
 * domain-gate.js — reusable "Bramka Dziedziny" (Domain Gate) visualisation.
 *
 * Algebra is not enough for equations with restricted domains (logarithms,
 * square roots, rational denominators, absolute-value inequalities). Every
 * candidate solution must pass through a *gate* that checks the domain
 * predicate. Values that fail bounce back; values that pass flow through
 * with a green glow.
 *
 * This helper draws the gate into a 2D canvas context inside a bounding box.
 * It is stateless: caller passes the list of candidates and the accepted
 * subset on each frame. Optional `t` parameter (seconds, monotonically
 * increasing) drives lightweight animation — a pulse on the gate, a drift
 * on the passed candidates, a flash on the rejected ones.
 *
 * ── Schema ─────────────────────────────────────────────────────────────
 *   drawDomainGate(ctx, {
 *     bounds: { x, y, w, h },                 // rect on the canvas
 *     domain: {
 *       predicate: (v) => boolean,            // used only as a tiebreaker
 *                                              // when `passed` is missing
 *       label:     string,                    // e.g. 'x > 3' — shown on gate
 *     },
 *     candidates: [
 *       { value: number|string, label: string,
 *         passed?: boolean,                    // if omitted, derived from predicate
 *         note?: string,                       // small text under the candidate
 *       },
 *       ...
 *     ],
 *     accepted?: Array<number|string>,         // optional: subset that actually
 *                                              //   made it through (survivors).
 *                                              //   If omitted, equal to the set
 *                                              //   of candidates with passed=true.
 *     t?: number,                              // animation clock (seconds)
 *     title?: string,                          // small header above the gate
 *     subtitle?: string,                       // second line header
 *   });
 *
 * ── Visual layout ──────────────────────────────────────────────────────
 *   ┌────────────────────────────────────────────────────────┐
 *   │ [title]                                                │
 *   │                                                        │
 *   │   candidates        GATE ( x > 3 )       survivors     │
 *   │   (x=-3)  ────────→ │▓▓▓▓▓▓▓│ ────────→    x=4         │
 *   │   (x=4)   ────────→ │▓▓▓▓▓▓▓│                          │
 *   │                                                        │
 *   └────────────────────────────────────────────────────────┘
 *
 * Passed candidates drift rightward past the gate (green glow).
 * Rejected candidates approach the gate and bounce back (red flash + "x>0"
 * reminder).
 *
 * Colors (fixed to match the rest of the project's palette):
 *   pass   #83C167  (green)
 *   reject #FF6B6B  (red)
 *   gate   #FFD166  (yellow)
 */

const COL_PASS   = '#83C167';
const COL_REJECT = '#FF6B6B';
const COL_GATE   = '#FFD166';
const COL_TEXT   = 'rgba(255,255,255,0.82)';
const COL_DIM    = 'rgba(255,255,255,0.45)';

export function drawDomainGate(ctx, spec) {
  const {
    bounds,
    domain,
    candidates = [],
    accepted,
    t = 0,
    title,
    subtitle,
  } = spec;

  const { x: BX, y: BY, w: BW, h: BH } = bounds;

  // Layout: left column for candidates, center for gate, right for survivors.
  const padT = title ? 32 : 10;
  const padB = 14;
  const gateX = BX + BW * 0.52;
  const gateTop = BY + padT;
  const gateBot = BY + BH - padB;
  const gateH = gateBot - gateTop;
  const gateW = 14;

  const leftX = BX + BW * 0.18;     // candidate spawn column
  const rightX = BX + BW * 0.82;    // survivor column

  ctx.save();

  // ── Header text ──────────────────────────────────────────────────
  if (title) {
    ctx.font = 'bold 13px monospace';
    ctx.fillStyle = COL_TEXT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(title, BX + BW / 2, BY + 6);
  }
  if (subtitle) {
    ctx.font = '11px monospace';
    ctx.fillStyle = COL_DIM;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(subtitle, BX + BW / 2, BY + 22);
  }

  // ── The gate itself ──────────────────────────────────────────────
  // Pulsing yellow barrier with tick-marks. A soft glow around it sells
  // the "checkpoint" metaphor.
  const pulse = 0.5 + 0.5 * Math.sin(t * 2.0);
  const glowAlpha = 0.18 + 0.12 * pulse;

  // Outer glow
  ctx.fillStyle = hexA(COL_GATE, glowAlpha);
  roundRect(ctx, gateX - gateW - 6, gateTop - 4, gateW * 2 + 12, gateH + 8, 4);
  ctx.fill();

  // Gate body — two vertical posts with hatching between them
  ctx.fillStyle = hexA(COL_GATE, 0.85);
  roundRect(ctx, gateX - gateW - 1, gateTop, 4, gateH, 2);
  ctx.fill();
  roundRect(ctx, gateX + gateW - 3, gateTop, 4, gateH, 2);
  ctx.fill();

  // Hatching (the "sieve")
  ctx.strokeStyle = hexA(COL_GATE, 0.45);
  ctx.lineWidth = 1;
  const hatchStep = 7;
  ctx.beginPath();
  for (let y = gateTop + 2; y < gateBot - 2; y += hatchStep) {
    ctx.moveTo(gateX - gateW + 2, y);
    ctx.lineTo(gateX + gateW - 2, y + hatchStep * 0.55);
  }
  ctx.stroke();

  // Gate label (domain predicate) — vertical sign above the gate
  if (domain && domain.label) {
    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = COL_GATE;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('Bramka: ' + domain.label, gateX, gateTop - 6);
  }

  // ── Candidates ───────────────────────────────────────────────────
  // Evenly space them vertically along the left column. Animate:
  //   passed → drift rightward past the gate to rightX
  //   rejected → oscillate close to the gate, then bounce back
  const n = candidates.length || 1;
  const midY = (gateTop + gateBot) / 2;
  const spread = Math.min(gateH - 20, Math.max(n * 34, 34));
  const step = n > 1 ? spread / (n - 1) : 0;
  const y0 = midY - spread / 2;

  // Helper: derive accepted-set for lookup
  const acceptedSet = new Set(
    (accepted !== undefined ? accepted : candidates.filter(c => c.passed).map(c => c.value))
      .map(String)
  );

  candidates.forEach((c, i) => {
    const y = n > 1 ? y0 + i * step : midY;
    const passed = c.passed !== undefined
      ? c.passed
      : (domain && typeof domain.predicate === 'function' ? !!domain.predicate(c.value) : false);
    const arrived = acceptedSet.has(String(c.value));

    // Animation phase per candidate — stagger by index so arrivals aren't synced.
    const phase = (t * 0.9 + i * 0.37) % 1.0; // 0..1 repeating

    if (passed) {
      // Glide from left column to right column, loop.
      // Ease the drift so it slows down just past the gate.
      const ease = phase < 0.5 ? phase * 2 : 1; // move in first half, rest at target
      const x = leftX + (rightX - leftX) * ease;
      const arrivedHere = arrived && ease >= 1;
      drawCandidate(ctx, x, y, c, /*pass*/ true, arrivedHere, pulse);
    } else {
      // Approach the gate then bounce back. Flash red briefly.
      // phase 0..0.35 → travel toward gate
      // phase 0.35..0.5 → hit + flash
      // phase 0.5..1.0  → drift back to origin, fading
      let x, flash, alpha;
      if (phase < 0.35) {
        const p = phase / 0.35;
        x = leftX + (gateX - gateW - 10 - leftX) * p;
        flash = 0; alpha = 1;
      } else if (phase < 0.5) {
        x = gateX - gateW - 10 + 2 * Math.sin((phase - 0.35) * 80);
        flash = 1 - (phase - 0.35) / 0.15;
        alpha = 1;
      } else {
        const p = (phase - 0.5) / 0.5;
        x = (gateX - gateW - 10) + (leftX - (gateX - gateW - 10)) * p;
        flash = 0;
        alpha = 1 - 0.4 * p;
      }
      drawCandidate(ctx, x, y, c, /*pass*/ false, /*arrived*/ false, flash, alpha);
    }
  });

  // ── Small legend under the gate ──────────────────────────────────
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.fillStyle = COL_DIM;
  ctx.textBaseline = 'bottom';
  ctx.fillText('← kandydaci           przyjęci →', BX + BW / 2, BY + BH - 2);

  ctx.restore();
}

// ── helpers ──────────────────────────────────────────────────────────
function drawCandidate(ctx, x, y, c, pass, arrived, flash, alpha) {
  const col = pass ? COL_PASS : COL_REJECT;
  const a = alpha === undefined ? 1 : alpha;
  ctx.save();
  ctx.globalAlpha = a;

  // Glow (bigger if passed & arrived, or on flash)
  if (arrived) {
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fillStyle = hexA(col, 0.18);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 13, 0, Math.PI * 2);
    ctx.fillStyle = hexA(col, 0.28);
    ctx.fill();
  } else if (flash && !pass) {
    ctx.beginPath();
    ctx.arc(x, y, 16 + flash * 6, 0, Math.PI * 2);
    ctx.fillStyle = hexA(col, 0.22 + 0.25 * flash);
    ctx.fill();
  }

  // Body: a pill showing the label
  ctx.font = 'bold 12px monospace';
  const text = c.label || String(c.value);
  const tw = ctx.measureText(text).width + 14;
  const th = 22;
  ctx.fillStyle = pass ? hexA(col, arrived ? 0.95 : 0.85) : hexA(col, 0.92);
  ctx.strokeStyle = col;
  ctx.lineWidth = 1.2;
  roundRect(ctx, x - tw / 2, y - th / 2, tw, th, 11);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#0e0e12';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);

  // Reject: show a small reminder below ("argument ≤ 0" etc.)
  if (!pass && c.note) {
    ctx.font = '10px monospace';
    ctx.fillStyle = hexA(COL_REJECT, 0.95);
    ctx.textBaseline = 'top';
    ctx.fillText(c.note, x, y + th / 2 + 3);
  }
  if (pass && arrived && c.note) {
    ctx.font = '10px monospace';
    ctx.fillStyle = hexA(COL_PASS, 0.95);
    ctx.textBaseline = 'top';
    ctx.fillText(c.note, x, y + th / 2 + 3);
  }

  ctx.restore();
}

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

function hexA(hex, a) {
  if (typeof hex !== 'string' || !hex.startsWith('#') || hex.length !== 7) return hex;
  const n = Math.round(Math.max(0, Math.min(1, a)) * 255);
  return hex + n.toString(16).padStart(2, '0');
}

/**
 * drawMiniGate(ctx, { x, y, w, h, label, passed, t })
 *
 * Compact single-condition gate for Ch.5 (three side-by-side gates). Shows
 * a small arch with a label underneath and a pass/fail indicator.
 */
export function drawMiniGate(ctx, spec) {
  const { x, y, w, h, label, passed, t = 0 } = spec;
  const col = passed ? COL_PASS : COL_GATE;
  const pulse = 0.5 + 0.5 * Math.sin(t * 2 + (x + y) * 0.01);

  ctx.save();

  // arch
  ctx.strokeStyle = hexA(col, 0.8);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 6, y + h - 6);
  ctx.lineTo(x + 6, y + 14);
  ctx.quadraticCurveTo(x + w / 2, y - 2, x + w - 6, y + 14);
  ctx.lineTo(x + w - 6, y + h - 6);
  ctx.stroke();

  // base
  ctx.strokeStyle = hexA(col, 0.5);
  ctx.beginPath();
  ctx.moveTo(x, y + h - 6);
  ctx.lineTo(x + w, y + h - 6);
  ctx.stroke();

  // glow if passed
  if (passed) {
    ctx.fillStyle = hexA(COL_PASS, 0.1 + 0.08 * pulse);
    ctx.beginPath();
    ctx.arc(x + w / 2, y + h / 2 + 4, w * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // label
  ctx.font = 'bold 11px monospace';
  ctx.fillStyle = col;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(label || '', x + w / 2, y + h - 2);

  // check/X
  ctx.font = 'bold 16px monospace';
  ctx.fillStyle = col;
  ctx.textBaseline = 'middle';
  ctx.fillText(passed ? '\u2713' : '?', x + w / 2, y + h / 2 + 2);

  ctx.restore();
}
