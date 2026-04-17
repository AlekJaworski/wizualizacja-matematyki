/**
 * graph-core.js — stateless function-graphing library for oczochodzi.pl
 *
 * A lightweight GraphView class created per-frame. Provides coordinate
 * transforms, grid/axes drawing, function plotting, annotations, and shading.
 *
 * Usage:
 *   import { GraphView } from '../lib/graph-core.js';
 *   const gv = new GraphView(cx, { xRange: [-6, 6], yRange: [-4, 4] });
 *   gv.drawGrid();
 *   gv.drawAxes();
 *   gv.plotFn(x => Math.sin(x), { color: '#58C4DD' });
 */

// ── helpers ──────────────────────────────────────────────────────────

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

// ── GraphView ────────────────────────────────────────────────────────

export class GraphView {
  constructor(cx, opts = {}) {
    this.cx = cx;
    // rect: [left, top, width, height] screen pixels
    this.rect = opts.rect || [0, 0, cx.canvas?.width || 600, cx.canvas?.height || 310];
    const [rx, ry, rw, rh] = this.rect;

    // Compute scale from ranges
    const xr = opts.xRange || [-6, 6];
    const yr = opts.yRange || [-4, 4];
    this.xMin = xr[0]; this.xMax = xr[1];
    this.yMin = yr[0]; this.yMax = yr[1];

    if (opts.scale) {
      this.sc = opts.scale;
      this.ox = rx + rw / 2 - ((xr[0] + xr[1]) / 2) * this.sc;
      this.oy = ry + rh / 2 + ((yr[0] + yr[1]) / 2) * this.sc;
    } else {
      const scX = rw / (xr[1] - xr[0]);
      const scY = rh / (yr[1] - yr[0]);
      this.sc = Math.min(scX, scY);
      this.ox = rx + rw / 2 - ((xr[0] + xr[1]) / 2) * this.sc;
      this.oy = ry + rh / 2 + ((yr[0] + yr[1]) / 2) * this.sc;
    }
  }

  // ── coordinate transforms ──────────────────────────────────────────

  px(x) { return this.ox + x * this.sc; }
  py(y) { return this.oy - y * this.sc; }
  toWorld(sx, sy) { return { x: (sx - this.ox) / this.sc, y: (this.oy - sy) / this.sc }; }
  get scale() { return this.sc; }

  // ── clipping ───────────────────────────────────────────────────────

  beginClip() {
    const [rx, ry, rw, rh] = this.rect;
    this.cx.save();
    this.cx.beginPath();
    this.cx.rect(rx, ry, rw, rh);
    this.cx.clip();
  }

  endClip() {
    this.cx.restore();
  }

  // ── clear ──────────────────────────────────────────────────────────

  clear(color = '#0e0e12') {
    const [rx, ry, rw, rh] = this.rect;
    this.cx.fillStyle = color;
    this.cx.fillRect(rx, ry, rw, rh);
  }

  // ── grid ───────────────────────────────────────────────────────────

  drawGrid(opts = {}) {
    const color = opts.color || 'rgba(255,255,255,0.05)';
    const lw = opts.lineWidth || 0.7;
    const step = opts.step || 1;
    const [rx, ry, rw, rh] = this.rect;
    const cx = this.cx;

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash([]);

    // vertical lines
    const x0 = Math.ceil(this.xMin / step) * step;
    for (let x = x0; x <= this.xMax; x += step) {
      const sx = this.px(x);
      cx.beginPath();
      cx.moveTo(sx, ry);
      cx.lineTo(sx, ry + rh);
      cx.stroke();
    }

    // horizontal lines
    const y0 = Math.ceil(this.yMin / step) * step;
    for (let y = y0; y <= this.yMax; y += step) {
      const sy = this.py(y);
      cx.beginPath();
      cx.moveTo(rx, sy);
      cx.lineTo(rx + rw, sy);
      cx.stroke();
    }

    this.endClip();
  }

  // ── axes ───────────────────────────────────────────────────────────

  drawAxes(opts = {}) {
    const color = opts.color || 'rgba(255,255,255,0.3)';
    const lw = opts.lineWidth ?? 1.5;
    const arrows = opts.arrows ?? true;
    const ticks = opts.ticks ?? true;
    const labels = opts.labels ?? true;
    const tickStep = opts.tickStep || 1;
    const tickSize = opts.tickSize || 4;
    const [rx, ry, rw, rh] = this.rect;
    const cx = this.cx;

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash([]);

    const originSX = this.px(0);
    const originSY = this.py(0);

    // x-axis
    cx.beginPath();
    cx.moveTo(rx, originSY);
    cx.lineTo(rx + rw, originSY);
    cx.stroke();

    // y-axis
    cx.beginPath();
    cx.moveTo(originSX, ry);
    cx.lineTo(originSX, ry + rh);
    cx.stroke();

    // arrowheads
    if (arrows) {
      const aSize = 7;
      cx.fillStyle = color;
      // x-axis arrow (right)
      cx.beginPath();
      cx.moveTo(rx + rw, originSY);
      cx.lineTo(rx + rw - aSize, originSY - aSize * 0.5);
      cx.lineTo(rx + rw - aSize, originSY + aSize * 0.5);
      cx.closePath();
      cx.fill();
      // y-axis arrow (up)
      cx.beginPath();
      cx.moveTo(originSX, ry);
      cx.lineTo(originSX - aSize * 0.5, ry + aSize);
      cx.lineTo(originSX + aSize * 0.5, ry + aSize);
      cx.closePath();
      cx.fill();
    }

    // ticks and labels
    if (ticks || labels) {
      cx.fillStyle = color;
      cx.font = '10px monospace';
      cx.textAlign = 'center';
      cx.textBaseline = 'top';

      // x-axis ticks
      const x0 = Math.ceil(this.xMin / tickStep) * tickStep;
      for (let x = x0; x <= this.xMax; x += tickStep) {
        if (Math.abs(x) < 1e-9) continue;
        const sx = this.px(x);
        if (ticks) {
          cx.beginPath();
          cx.moveTo(sx, originSY - tickSize);
          cx.lineTo(sx, originSY + tickSize);
          cx.stroke();
        }
        if (labels) {
          const lbl = Number.isInteger(x) ? String(x) : x.toFixed(1);
          cx.fillText(lbl, sx, originSY + tickSize + 2);
        }
      }

      // y-axis ticks
      cx.textAlign = 'right';
      cx.textBaseline = 'middle';
      const y0 = Math.ceil(this.yMin / tickStep) * tickStep;
      for (let y = y0; y <= this.yMax; y += tickStep) {
        if (Math.abs(y) < 1e-9) continue;
        const sy = this.py(y);
        if (ticks) {
          cx.beginPath();
          cx.moveTo(originSX - tickSize, sy);
          cx.lineTo(originSX + tickSize, sy);
          cx.stroke();
        }
        if (labels) {
          const lbl = Number.isInteger(y) ? String(y) : y.toFixed(1);
          cx.fillText(lbl, originSX - tickSize - 3, sy);
        }
      }
    }

    this.endClip();
  }

  // ── plotFn ─────────────────────────────────────────────────────────

  plotFn(fn, opts = {}) {
    const color = opts.color || '#58C4DD';
    const lw = opts.lineWidth ?? 2.5;
    const resolution = opts.resolution || 600;
    const maxJump = opts.maxJump ?? 100;
    const domain = opts.domain || [this.xMin, this.xMax];
    const cx = this.cx;

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash(opts.dash || []);
    if (opts.alpha != null) cx.globalAlpha = opts.alpha;
    if (opts.glow) { cx.shadowColor = color; cx.shadowBlur = opts.glow; }

    cx.beginPath();
    let drawing = false;
    let prevY = NaN;

    const dx = (domain[1] - domain[0]) / resolution;
    for (let i = 0; i <= resolution; i++) {
      const x = domain[0] + i * dx;
      const y = fn(x);
      if (!isFinite(y) || isNaN(y)) {
        drawing = false;
        prevY = NaN;
        continue;
      }
      const sx = this.px(x);
      const sy = this.py(y);
      if (!drawing || (isFinite(prevY) && Math.abs(y - prevY) > maxJump)) {
        cx.moveTo(sx, sy);
      } else {
        cx.lineTo(sx, sy);
      }
      drawing = true;
      prevY = y;
    }
    cx.stroke();

    cx.shadowBlur = 0;
    cx.setLineDash([]);
    if (opts.alpha != null) cx.globalAlpha = 1;
    this.endClip();
  }

  // ── plotParametric ─────────────────────────────────────────────────

  plotParametric(xFn, yFn, tMin, tMax, opts = {}) {
    const color = opts.color || '#58C4DD';
    const lw = opts.lineWidth ?? 2.5;
    const resolution = opts.resolution || 600;
    const maxJump = opts.maxJump ?? 100;
    const cx = this.cx;

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash(opts.dash || []);
    if (opts.alpha != null) cx.globalAlpha = opts.alpha;
    if (opts.glow) { cx.shadowColor = color; cx.shadowBlur = opts.glow; }

    cx.beginPath();
    let drawing = false;
    let psx = NaN, psy = NaN;

    const dt = (tMax - tMin) / resolution;
    for (let i = 0; i <= resolution; i++) {
      const t = tMin + i * dt;
      const x = xFn(t);
      const y = yFn(t);
      if (!isFinite(x) || !isFinite(y)) {
        drawing = false;
        continue;
      }
      const sx = this.px(x);
      const sy = this.py(y);
      const jump = Math.hypot(sx - psx, sy - psy);
      if (!drawing || jump > maxJump * this.sc) {
        cx.moveTo(sx, sy);
      } else {
        cx.lineTo(sx, sy);
      }
      drawing = true;
      psx = sx; psy = sy;
    }
    cx.stroke();

    cx.shadowBlur = 0;
    cx.setLineDash([]);
    if (opts.alpha != null) cx.globalAlpha = 1;
    this.endClip();
  }

  // ── dot (world coords) ────────────────────────────────────────────

  dot(worldX, worldY, opts = {}) {
    const r = opts.radius ?? 5;
    const color = opts.color || '#58C4DD';
    const glow = opts.glow ?? 12;
    const cx = this.cx;
    const sx = this.px(worldX);
    const sy = this.py(worldY);

    cx.beginPath();
    cx.arc(sx, sy, r, 0, Math.PI * 2);
    cx.fillStyle = color;
    if (glow) { cx.shadowColor = color; cx.shadowBlur = glow; }
    cx.fill();
    cx.shadowBlur = 0;
  }

  // ── dotScreen (screen coords) ─────────────────────────────────────

  dotScreen(sx, sy, opts = {}) {
    const r = opts.radius ?? 5;
    const color = opts.color || '#58C4DD';
    const glow = opts.glow ?? 12;
    const cx = this.cx;

    cx.beginPath();
    cx.arc(sx, sy, r, 0, Math.PI * 2);
    cx.fillStyle = color;
    if (glow) { cx.shadowColor = color; cx.shadowBlur = glow; }
    cx.fill();
    cx.shadowBlur = 0;
  }

  // ── openDot ────────────────────────────────────────────────────────

  openDot(worldX, worldY, opts = {}) {
    const r = opts.radius ?? 5;
    const color = opts.color || '#58C4DD';
    const lw = opts.lineWidth ?? 2;
    const cx = this.cx;
    const sx = this.px(worldX);
    const sy = this.py(worldY);

    cx.beginPath();
    cx.arc(sx, sy, r, 0, Math.PI * 2);
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.fillStyle = opts.fill || '#0e0e12';
    cx.fill();
    cx.stroke();
  }

  // ── label ──────────────────────────────────────────────────────────

  label(text, worldX, worldY, opts = {}) {
    const color = opts.color || '#58C4DD';
    const font = opts.font || '11px monospace';
    const ox = opts.offsetX ?? opts.offset?.[0] ?? 0;
    const oy = opts.offsetY ?? opts.offset?.[1] ?? 0;
    const cx = this.cx;

    cx.font = font;
    cx.fillStyle = color;
    cx.textAlign = opts.align || 'left';
    cx.textBaseline = opts.baseline || 'alphabetic';
    cx.fillText(text, this.px(worldX) + ox, this.py(worldY) + oy);
  }

  // ── infoBox ────────────────────────────────────────────────────────

  infoBox(text, screenX, screenY, opts = {}) {
    const font = opts.font || '11px monospace';
    const bg = opts.bg || 'rgba(14,14,18,0.85)';
    const color = opts.color || '#fff';
    const pad = opts.padding ?? 6;
    const radius = opts.radius ?? 4;
    const cx = this.cx;

    cx.font = font;
    const m = cx.measureText(text);
    const w = m.width + pad * 2;
    const h = 16 + pad * 2;
    const bx = screenX;
    const by = screenY - h;

    // rounded rect background
    cx.beginPath();
    cx.roundRect(bx, by, w, h, radius);
    cx.fillStyle = bg;
    cx.fill();
    if (opts.border) {
      cx.strokeStyle = opts.border;
      cx.lineWidth = 1;
      cx.stroke();
    }

    cx.fillStyle = color;
    cx.textAlign = 'left';
    cx.textBaseline = 'middle';
    cx.fillText(text, bx + pad, by + h / 2);
  }

  // ── segment (world coords) ────────────────────────────────────────

  segment(x1, y1, x2, y2, opts = {}) {
    const color = opts.color || '#58C4DD';
    const lw = opts.lineWidth ?? 2;
    const cx = this.cx;

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash(opts.dash || []);
    if (opts.alpha != null) cx.globalAlpha = opts.alpha;

    cx.beginPath();
    cx.moveTo(this.px(x1), this.py(y1));
    cx.lineTo(this.px(x2), this.py(y2));
    cx.stroke();

    cx.setLineDash([]);
    if (opts.alpha != null) cx.globalAlpha = 1;
    this.endClip();
  }

  // ── line (infinite through two points, clipped) ────────────────────

  line(x1, y1, x2, y2, opts = {}) {
    const color = opts.color || '#58C4DD';
    const lw = opts.lineWidth ?? 2;
    const cx = this.cx;

    // parametric: P = (x1,y1) + t*(dx,dy)
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (Math.abs(dx) < 1e-12 && Math.abs(dy) < 1e-12) return;

    // find t range that intersects the world-coord bounding box
    let tMin = -1e6, tMax = 1e6;
    if (Math.abs(dx) > 1e-12) {
      const t1 = (this.xMin - x1) / dx;
      const t2 = (this.xMax - x1) / dx;
      tMin = Math.max(tMin, Math.min(t1, t2));
      tMax = Math.min(tMax, Math.max(t1, t2));
    }
    if (Math.abs(dy) > 1e-12) {
      const t1 = (this.yMin - y1) / dy;
      const t2 = (this.yMax - y1) / dy;
      tMin = Math.max(tMin, Math.min(t1, t2));
      tMax = Math.min(tMax, Math.max(t1, t2));
    }
    if (tMin > tMax) return;

    const ax = x1 + tMin * dx, ay = y1 + tMin * dy;
    const bx = x1 + tMax * dx, by = y1 + tMax * dy;

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash(opts.dash || []);
    if (opts.alpha != null) cx.globalAlpha = opts.alpha;

    cx.beginPath();
    cx.moveTo(this.px(ax), this.py(ay));
    cx.lineTo(this.px(bx), this.py(by));
    cx.stroke();

    cx.setLineDash([]);
    if (opts.alpha != null) cx.globalAlpha = 1;
    this.endClip();
  }

  // ── tangentLine ────────────────────────────────────────────────────

  tangentLine(fn, worldX, opts = {}) {
    const h = 0.001;
    const slope = opts.derivFn
      ? opts.derivFn(worldX)
      : (fn(worldX + h) - fn(worldX - h)) / (2 * h);
    const y0 = fn(worldX);
    // line through (worldX, y0) with given slope: y = y0 + slope*(x - worldX)
    const x1 = this.xMin;
    const x2 = this.xMax;
    this.line(x1, y0 + slope * (x1 - worldX), x2, y0 + slope * (x2 - worldX), opts);
  }

  // ── verticalLine ───────────────────────────────────────────────────

  verticalLine(worldX, opts = {}) {
    const color = opts.color || 'rgba(255,255,255,0.3)';
    const lw = opts.lineWidth ?? 1;
    const dash = opts.dash || [5, 5];
    const [rx, ry, , rh] = this.rect;
    const cx = this.cx;
    const sx = this.px(worldX);

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash(dash);
    if (opts.alpha != null) cx.globalAlpha = opts.alpha;

    cx.beginPath();
    cx.moveTo(sx, ry);
    cx.lineTo(sx, ry + rh);
    cx.stroke();

    cx.setLineDash([]);
    if (opts.alpha != null) cx.globalAlpha = 1;
    this.endClip();
  }

  // ── horizontalLine ─────────────────────────────────────────────────

  horizontalLine(worldY, opts = {}) {
    const color = opts.color || 'rgba(255,255,255,0.3)';
    const lw = opts.lineWidth ?? 1;
    const dash = opts.dash || [5, 5];
    const [rx, ry, rw] = this.rect;
    const cx = this.cx;
    const sy = this.py(worldY);

    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash(dash);
    if (opts.alpha != null) cx.globalAlpha = opts.alpha;

    cx.beginPath();
    cx.moveTo(rx, sy);
    cx.lineTo(rx + rw, sy);
    cx.stroke();

    cx.setLineDash([]);
    if (opts.alpha != null) cx.globalAlpha = 1;
    this.endClip();
  }

  // ── shadeFnToAxis ──────────────────────────────────────────────────

  shadeFnToAxis(fn, xMin, xMax, opts = {}) {
    const color = opts.color || '#58C4DD';
    const alpha = opts.alpha ?? 0.2;
    const resolution = opts.resolution || 300;
    const cx = this.cx;

    this.beginClip();
    cx.globalAlpha = alpha;
    cx.fillStyle = color;

    cx.beginPath();
    const dx = (xMax - xMin) / resolution;
    // start at axis level
    cx.moveTo(this.px(xMin), this.py(0));
    for (let i = 0; i <= resolution; i++) {
      const x = xMin + i * dx;
      const y = fn(x);
      if (isFinite(y)) {
        cx.lineTo(this.px(x), this.py(y));
      }
    }
    // close back down to axis
    cx.lineTo(this.px(xMax), this.py(0));
    cx.closePath();
    cx.fill();

    cx.globalAlpha = 1;
    this.endClip();
  }

  // ── shadeBetween ───────────────────────────────────────────────────

  shadeBetween(fn1, fn2, xMin, xMax, opts = {}) {
    const color = opts.color || '#58C4DD';
    const alpha = opts.alpha ?? 0.2;
    const resolution = opts.resolution || 300;
    const cx = this.cx;

    this.beginClip();
    cx.globalAlpha = alpha;
    cx.fillStyle = color;

    const dx = (xMax - xMin) / resolution;
    cx.beginPath();
    // trace fn1 forward
    for (let i = 0; i <= resolution; i++) {
      const x = xMin + i * dx;
      const y = fn1(x);
      if (isFinite(y)) {
        if (i === 0) cx.moveTo(this.px(x), this.py(y));
        else cx.lineTo(this.px(x), this.py(y));
      }
    }
    // trace fn2 backward
    for (let i = resolution; i >= 0; i--) {
      const x = xMin + i * dx;
      const y = fn2(x);
      if (isFinite(y)) {
        cx.lineTo(this.px(x), this.py(y));
      }
    }
    cx.closePath();
    cx.fill();

    cx.globalAlpha = 1;
    this.endClip();
  }

  // ── shadeRect ──────────────────────────────────────────────────────

  shadeRect(xMin, yMin, xMax, yMax, opts = {}) {
    const color = opts.color || '#58C4DD';
    const alpha = opts.alpha ?? 0.2;
    const cx = this.cx;

    this.beginClip();
    cx.globalAlpha = alpha;
    cx.fillStyle = color;
    const sx = this.px(xMin);
    const sy = this.py(yMax);
    const sw = (xMax - xMin) * this.sc;
    const sh = (yMax - yMin) * this.sc;
    cx.fillRect(sx, sy, sw, sh);
    cx.globalAlpha = 1;
    this.endClip();
  }

  // ── slopeTriangle ──────────────────────────────────────────────────

  slopeTriangle(fn, worldX, opts = {}) {
    const color = opts.color || '#FCFC62';
    const lw = opts.lineWidth ?? 1.5;
    const run = opts.run ?? 1;
    const h = 0.001;
    const slope = opts.derivFn
      ? opts.derivFn(worldX)
      : (fn(worldX + h) - fn(worldX - h)) / (2 * h);
    const y0 = fn(worldX);
    const rise = slope * run;
    const cx = this.cx;

    // triangle: (x, y0) → (x+run, y0) → (x+run, y0+rise)
    this.beginClip();
    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash([4, 3]);

    cx.beginPath();
    cx.moveTo(this.px(worldX), this.py(y0));
    cx.lineTo(this.px(worldX + run), this.py(y0));
    cx.lineTo(this.px(worldX + run), this.py(y0 + rise));
    cx.stroke();
    cx.setLineDash([]);

    // labels
    const labelColor = opts.labelColor || color;
    cx.font = opts.font || '11px monospace';
    cx.fillStyle = labelColor;

    // "run" label below horizontal
    cx.textAlign = 'center';
    cx.textBaseline = 'top';
    const runLabel = opts.runLabel ?? run.toFixed(1);
    cx.fillText(runLabel, this.px(worldX + run / 2), this.py(y0) + 4);

    // "rise" label right of vertical
    cx.textAlign = 'left';
    cx.textBaseline = 'middle';
    const riseLabel = opts.riseLabel ?? rise.toFixed(2);
    cx.fillText(riseLabel, this.px(worldX + run) + 4, this.py(y0 + rise / 2));

    this.endClip();
  }

  // ── brace ──────────────────────────────────────────────────────────

  brace(x1, y1, x2, y2, opts = {}) {
    const color = opts.color || 'rgba(255,255,255,0.5)';
    const lw = opts.lineWidth ?? 1.5;
    const bulge = opts.bulge ?? 8;
    const cx = this.cx;

    const sx1 = this.px(x1), sy1 = this.py(y1);
    const sx2 = this.px(x2), sy2 = this.py(y2);
    const mx = (sx1 + sx2) / 2;
    const my = (sy1 + sy2) / 2;

    // perpendicular direction
    const dx = sx2 - sx1, dy = sy2 - sy1;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;

    cx.strokeStyle = color;
    cx.lineWidth = lw;
    cx.setLineDash([]);
    cx.beginPath();
    cx.moveTo(sx1, sy1);
    cx.quadraticCurveTo(sx1 + nx * bulge, sy1 + ny * bulge, mx + nx * bulge * 1.5, my + ny * bulge * 1.5);
    cx.moveTo(sx2, sy2);
    cx.quadraticCurveTo(sx2 + nx * bulge, sy2 + ny * bulge, mx + nx * bulge * 1.5, my + ny * bulge * 1.5);
    cx.stroke();

    // label
    if (opts.label) {
      cx.font = opts.font || '11px monospace';
      cx.fillStyle = opts.labelColor || color;
      cx.textAlign = 'center';
      cx.textBaseline = 'middle';
      cx.fillText(opts.label, mx + nx * (bulge * 1.5 + 12), my + ny * (bulge * 1.5 + 12));
    }
  }

  // ── static drawDivider ─────────────────────────────────────────────

  static drawDivider(cx, screenY, height, opts = {}) {
    const color = opts.color || '#0e0e12';
    const w = cx.canvas?.width || 600;
    cx.fillStyle = color;
    cx.fillRect(0, screenY, w, height);

    if (opts.line) {
      cx.strokeStyle = opts.lineColor || 'rgba(255,255,255,0.08)';
      cx.lineWidth = opts.lineWidth || 1;
      cx.beginPath();
      cx.moveTo(0, screenY + height / 2);
      cx.lineTo(w, screenY + height / 2);
      cx.stroke();
    }
  }
}
