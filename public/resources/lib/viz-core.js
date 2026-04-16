/**
 * viz-core.js — shared library for oczochodzi.pl interactive visualizations
 *
 * Usage (in new viz HTML files):
 *   <script type="module">
 *   import { VizCore, T, COLORS } from '../lib/viz-core.js';
 *   VizCore.init({ title: '...', H: 310, stages: [...] });
 *   </script>
 *
 * Each stage object:
 *   {
 *     title: () => T('PL', 'EN'),
 *     desc:  () => T('PL', 'EN'),
 *     sliders: [{ id, lbl, color, min, max, step, val }],  // optional
 *     draw(cx, W, H, vals) { }  // vals = { id: currentValue, ... }
 *   }
 */

// ── i18n ──────────────────────────────────────────────────────────
export const LANG = (typeof window !== 'undefined')
  ? (new URLSearchParams(window.location.search).get('lang') || 'pl')
  : 'pl';

export const T = makeTFn(LANG);

export function makeTFn(lang) {
  return (pl, en) => lang === 'pl' ? pl : en;
}

// ── Color palette ─────────────────────────────────────────────────
export const COLORS = {
  CYAN:   '#58C4DD',
  BLUE:   '#4a9eff',
  ORANGE: '#FF6B35',
  GREEN:  '#83C167',
  YELLOW: '#FFD166',
  PINK:   '#E07090',
  PURPLE: '#C080FF',
  BG:     '#0e0e12',
  PANEL:  '#16161a',
};

// ── Pure helpers (exported for testing) ───────────────────────────

export function clampStage(idx, count) {
  return Math.max(0, Math.min(count - 1, idx));
}

export function getVals(sliders) {
  const vals = {};
  if (sliders) sliders.forEach(s => { vals[s.id] = s.val; });
  return vals;
}

export function fmtVal(step, value) {
  const decimals = step < 0.1 ? 2 : step < 1 ? 1 : 0;
  return (+value).toFixed(decimals);
}

// ── Shared CSS ────────────────────────────────────────────────────
const BASE_CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #0e0e12; font-family: monospace; display: flex; justify-content: center; padding: 2rem 1rem; min-height: 100vh; }
.wrap { width: 100%; max-width: 640px; }
canvas { width: 100%; display: block; border-radius: 10px 10px 0 0; cursor: default; }
canvas.draggable { cursor: grab; }
canvas.draggable:active { cursor: grabbing; }
.panel { background: #16161a; border: 0.5px solid rgba(255,255,255,.1); border-top: 0.5px solid rgba(255,255,255,.07); border-radius: 0 0 10px 10px; padding: .875rem 1.25rem; }
#qf { margin: 0 0 5px; font-size: 16px; font-weight: 500; color: #58C4DD; letter-spacing: .02em; }
#qd { margin: 0 0 10px; font-size: 13px; line-height: 1.65; color: rgba(255,255,255,.62); min-height: 48px; white-space: pre-line; }
.sliders { display: flex; flex-direction: column; gap: 6px; margin-bottom: 8px; }
.slider-row { display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(255,255,255,.45); }
.slider-row span.lbl { font-family: monospace; min-width: 36px; }
.slider-row input[type=range] { flex: 1; accent-color: #58C4DD; }
.slider-row span.val { font-family: monospace; min-width: 46px; text-align: right; }
.nav { display: flex; align-items: center; justify-content: space-between; }
button { background: transparent; border: 0.5px solid rgba(255,255,255,.25); color: rgba(255,255,255,.7); padding: 5px 14px; font-size: 13px; border-radius: 6px; cursor: pointer; font-family: monospace; transition: background .15s; }
button:hover { background: rgba(255,255,255,.08); }
button:disabled { opacity: .3; cursor: default; }
#qdots { display: flex; gap: 8px; }
.dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; cursor: pointer; background: rgba(255,255,255,.18); transition: background .2s; }
.dot.active { background: #58C4DD; }
#sliders-wrap { min-height: 0; }
.link-btn { display: inline-block; margin-top: 8px; padding: 6px 14px; border-radius: 6px; background: rgba(88,196,221,.12); border: 1px solid rgba(88,196,221,.3); color: #58C4DD; font-size: 12px; text-decoration: none; font-family: monospace; transition: background .15s; }
.link-btn:hover { background: rgba(88,196,221,.22); }
`;

// ── VizCore.init ──────────────────────────────────────────────────
export const VizCore = {
  /**
   * @param {object} config
   * @param {string} [config.title]       - Page <title>
   * @param {number} [config.H=310]       - Canvas height in px
   * @param {Array}  config.stages        - Stage objects
   * @param {string} [config.extraCSS=''] - Additional CSS injected after base
   * @returns {{ cv, cx, W, H, goTo, clear, gdot, getCanvasPos }}
   */
  init({ title = '', H = 310, stages, extraCSS = '' }) {
    const W = 600;

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = BASE_CSS + extraCSS;
    document.head.appendChild(style);
    if (title) document.title = title;

    // Build HTML
    document.body.innerHTML = `
      <div class="wrap">
        <canvas id="cv" width="${W}" height="${H}"></canvas>
        <div class="panel">
          <p id="qf"></p>
          <p id="qd"></p>
          <div id="sliders-wrap"></div>
          <div class="nav">
            <button id="qprev">&larr;</button>
            <div id="qdots"></div>
            <button id="qnext">&rarr;</button>
          </div>
        </div>
      </div>`;

    const cv      = document.getElementById('cv');
    const cx      = cv.getContext('2d');
    const slWrap  = document.getElementById('sliders-wrap');
    const prevBtn = document.getElementById('qprev');
    const nextBtn = document.getElementById('qnext');
    const dotsEl  = document.getElementById('qdots');
    const titleEl = document.getElementById('qf');
    const descEl  = document.getElementById('qd');

    let stage = 0;

    function buildSliders(defs) {
      if (!defs || !defs.length) { slWrap.innerHTML = ''; return; }
      let html = '<div class="sliders">';
      defs.forEach(s => {
        html += `<div class="slider-row">
          <span class="lbl" style="color:${s.color}">${s.lbl} =</span>
          <input type="range" id="s_${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.val}">
          <span class="val" id="v_${s.id}" style="color:${s.color}"></span>
        </div>`;
      });
      html += '</div>';
      slWrap.innerHTML = html;
      defs.forEach(s => {
        const el = document.getElementById('s_' + s.id);
        document.getElementById('v_' + s.id).textContent = fmtVal(s.step, el.value);
        el.addEventListener('input', function () {
          s.val = +this.value;
          document.getElementById('v_' + s.id).textContent = fmtVal(s.step, this.value);
        });
      });
    }

    function renderDots() {
      dotsEl.innerHTML = stages.map((_, i) =>
        `<span class="dot${i === stage ? ' active' : ''}" data-i="${i}"></span>`
      ).join('');
      dotsEl.querySelectorAll('.dot').forEach(d =>
        d.addEventListener('click', () => goTo(+d.dataset.i))
      );
    }

    function goTo(idx) {
      stage = clampStage(idx, stages.length);
      const s = stages[stage];
      titleEl.textContent = s.title();
      descEl.textContent  = s.desc();
      buildSliders(s.sliders);
      prevBtn.disabled = stage === 0;
      nextBtn.disabled = stage === stages.length - 1;
      renderDots();
    }

    prevBtn.addEventListener('click', () => goTo(stage - 1));
    nextBtn.addEventListener('click', () => goTo(stage + 1));

    // ── Drawing helpers exposed to viz authors ──────────────────
    function clear() {
      cx.fillStyle = COLORS.BG;
      cx.fillRect(0, 0, W, H);
    }

    function gdot(sx, sy, r, col, glow = 10) {
      cx.beginPath();
      cx.arc(sx, sy, r, 0, Math.PI * 2);
      cx.fillStyle = col;
      cx.shadowColor = col;
      cx.shadowBlur = glow;
      cx.fill();
      cx.shadowBlur = 0;
    }

    /** Convert mouse/touch event coords to canvas logical coords */
    function getCanvasPos(e) {
      const rect = cv.getBoundingClientRect();
      const scX = W / rect.width;
      const scY = H / rect.height;
      const src = e.touches ? e.touches[0] : e;
      return {
        x: (src.clientX - rect.left) * scX,
        y: (src.clientY - rect.top)  * scY,
      };
    }

    // ── Animation loop ──────────────────────────────────────────
    function tick() {
      clear();
      stages[stage].draw(cx, W, H, getVals(stages[stage].sliders));
      requestAnimationFrame(tick);
    }

    goTo(0);
    requestAnimationFrame(tick);

    return { cv, cx, W, H, goTo, clear, gdot, getCanvasPos };
  },
};
