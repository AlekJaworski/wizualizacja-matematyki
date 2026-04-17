/**
 * geo-engine.js — constraint-based geometry engine for oczochodzi.pl
 *
 * A lightweight mini-GeoGebra with mathematical guarantees.
 * All derived objects auto-update when their parent objects move.
 *
 * Usage:
 *   import { GeoScene } from '../lib/geo-engine.js';
 *   const scene = new GeoScene(cx, W, H, { originX: 300, originY: 200, scale: 40 });
 *   const A = scene.point(-2, 1, { drag: true, label: 'A' });
 *   const B = scene.point(3, -1, { drag: true, label: 'B' });
 *   const M = scene.midpoint(A, B, { label: 'M' });
 *   scene.draw();
 */

const EPS = 1e-9;

// ── helpers ──────────────────────────────────────────────────────────

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function dist(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); }
function normalizeAngle(a) { return ((a % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); }

// ── GeoObject base class ─────────────────────────────────────────────

class GeoObject {
  constructor(scene, deps, opts) {
    this.scene = scene;
    this.deps = deps;
    this.opts = { visible: true, color: '#58C4DD', lineWidth: 2, glow: false, dash: null, ...opts };
    this.recompute();
  }
  recompute() { /* override */ }
  render(cx) { /* override */ }

  /** Apply common stroke style before rendering lines/arcs */
  _applyStroke(cx) {
    cx.strokeStyle = this.opts.color;
    cx.lineWidth = this.opts.lineWidth;
    if (this.opts.dash) cx.setLineDash(this.opts.dash);
    else cx.setLineDash([]);
    if (this.opts.glow) {
      cx.shadowColor = this.opts.color;
      cx.shadowBlur = 8;
    }
  }
  _clearGlow(cx) {
    if (this.opts.glow) { cx.shadowBlur = 0; }
    cx.setLineDash([]);
  }
}

// ── GeoPoint — free or computed point ────────────────────────────────

class GeoPoint extends GeoObject {
  constructor(scene, x, y, deps, opts) {
    super(scene, deps, { radius: 5, labelOffset: [8, -8], ...opts });
    // only set wx/wy for free points (deps.length === 0)
    if (deps.length === 0) { this.wx = x; this.wy = y; }
  }
  recompute() { /* free point — nothing to recompute */ }

  render(cx) {
    const s = this.scene.toScreen(this.wx, this.wy);
    const r = this.opts.radius;
    cx.beginPath();
    cx.arc(s.x, s.y, r, 0, Math.PI * 2);
    cx.fillStyle = this.opts.color;
    if (this.opts.glow !== false) {
      cx.shadowColor = this.opts.color;
      cx.shadowBlur = 10;
    }
    cx.fill();
    cx.shadowBlur = 0;

    // label
    if (this.opts.label) {
      cx.font = 'bold 13px sans-serif';
      cx.fillStyle = this.opts.color;
      const off = this.opts.labelOffset;
      cx.fillText(this.opts.label, s.x + off[0], s.y + off[1]);
    }
  }
}

// ── GeoPointOn — point constrained to an object ──────────────────────

class GeoPointOn extends GeoObject {
  /**
   * @param {GeoObject} host — line, segment, or circle
   * @param {number} t — parameter (0-1 for segment, angle for circle, etc.)
   */
  constructor(scene, host, t, opts) {
    super(scene, [host], { radius: 5, labelOffset: [8, -8], drag: false, ...opts });
    this.host = host;
    this.t = t;
    this._recomputePos();
  }

  _recomputePos() {
    if (this.host instanceof GeoSegment || this.host instanceof GeoLine || this.host instanceof GeoRay) {
      const A = this.host.deps[0], B = this.host.deps[1];
      this.wx = lerp(A.wx, B.wx, this.t);
      this.wy = lerp(A.wy, B.wy, this.t);
    } else if (this.host instanceof GeoCircle) {
      const C = this.host.deps[0];
      const r = this.host.radius;
      this.wx = C.wx + r * Math.cos(this.t);
      this.wy = C.wy + r * Math.sin(this.t);
    }
  }

  recompute() { this._recomputePos(); }

  /** When dragged, project back onto host */
  projectOntoHost(worldX, worldY) {
    if (this.host instanceof GeoSegment) {
      const A = this.host.deps[0], B = this.host.deps[1];
      const dx = B.wx - A.wx, dy = B.wy - A.wy;
      const len2 = dx * dx + dy * dy;
      if (len2 < EPS) { this.t = 0; return; }
      this.t = clamp(((worldX - A.wx) * dx + (worldY - A.wy) * dy) / len2, 0, 1);
    } else if (this.host instanceof GeoLine || this.host instanceof GeoRay) {
      const A = this.host.deps[0], B = this.host.deps[1];
      const dx = B.wx - A.wx, dy = B.wy - A.wy;
      const len2 = dx * dx + dy * dy;
      if (len2 < EPS) { this.t = 0; return; }
      let t = ((worldX - A.wx) * dx + (worldY - A.wy) * dy) / len2;
      if (this.host instanceof GeoRay) t = Math.max(0, t);
      this.t = t;
    } else if (this.host instanceof GeoCircle) {
      const C = this.host.deps[0];
      this.t = Math.atan2(worldY - C.wy, worldX - C.wx);
    }
    this._recomputePos();
  }

  render(cx) {
    GeoPoint.prototype.render.call(this, cx);
  }
}

// ── GeoMidpoint ──────────────────────────────────────────────────────

class GeoMidpoint extends GeoPoint {
  constructor(scene, A, B, opts) {
    super(scene, 0, 0, [A, B], opts);
  }
  recompute() {
    const [A, B] = this.deps;
    this.wx = (A.wx + B.wx) / 2;
    this.wy = (A.wy + B.wy) / 2;
  }
}

// ── GeoSegment ───────────────────────────────────────────────────────

class GeoSegment extends GeoObject {
  constructor(scene, A, B, opts) {
    super(scene, [A, B], opts);
  }
  recompute() { /* endpoints are live references */ }

  render(cx) {
    const [A, B] = this.deps;
    const a = this.scene.toScreen(A.wx, A.wy);
    const b = this.scene.toScreen(B.wx, B.wy);
    this._applyStroke(cx);
    cx.beginPath();
    cx.moveTo(a.x, a.y);
    cx.lineTo(b.x, b.y);
    cx.stroke();
    this._clearGlow(cx);
  }
}

// ── GeoLine — infinite line through two points ───────────────────────

class GeoLine extends GeoObject {
  constructor(scene, A, B, opts) {
    super(scene, [A, B], opts);
  }
  recompute() { /* live references */ }

  /** Get direction vector (dx, dy) in world coords */
  get dx() { return this.deps[1].wx - this.deps[0].wx; }
  get dy() { return this.deps[1].wy - this.deps[0].wy; }

  /** Return two screen points clipped to canvas for rendering */
  _clipToCanvas() {
    const scene = this.scene;
    const [A, B] = this.deps;
    const dx = B.wx - A.wx, dy = B.wy - A.wy;
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return null;

    // find t range that covers the canvas
    const margin = 2; // extra world units
    const corners = [
      scene.toWorld(0, 0),
      scene.toWorld(scene.W, 0),
      scene.toWorld(scene.W, scene.H),
      scene.toWorld(0, scene.H),
    ];
    let tMin = -1e6, tMax = 1e6;
    // project corners onto line direction
    const ts = corners.map(c => {
      if (Math.abs(dx) > Math.abs(dy))
        return (c.x - A.wx) / dx;
      else
        return (c.y - A.wy) / dy;
    });
    tMin = Math.min(...ts) - margin;
    tMax = Math.max(...ts) + margin;

    const p1 = scene.toScreen(A.wx + tMin * dx, A.wy + tMin * dy);
    const p2 = scene.toScreen(A.wx + tMax * dx, A.wy + tMax * dy);
    return [p1, p2];
  }

  render(cx) {
    const pts = this._clipToCanvas();
    if (!pts) return;
    this._applyStroke(cx);
    cx.beginPath();
    cx.moveTo(pts[0].x, pts[0].y);
    cx.lineTo(pts[1].x, pts[1].y);
    cx.stroke();
    this._clearGlow(cx);

    // label
    if (this.opts.label) {
      const mid = this.scene.toScreen(
        (this.deps[0].wx + this.deps[1].wx) / 2,
        (this.deps[0].wy + this.deps[1].wy) / 2
      );
      cx.font = '12px sans-serif';
      cx.fillStyle = this.opts.color;
      cx.fillText(this.opts.label, mid.x + 6, mid.y - 6);
    }
  }
}

// ── GeoRay — ray from origin through a point ─────────────────────────

class GeoRay extends GeoObject {
  constructor(scene, origin, through, opts) {
    super(scene, [origin, through], opts);
  }
  recompute() {}

  render(cx) {
    const [O, P] = this.deps;
    const dx = P.wx - O.wx, dy = P.wy - O.wy;
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return;

    // extend to large t
    const far = this.scene.toScreen(O.wx + dx * 1000, O.wy + dy * 1000);
    const o = this.scene.toScreen(O.wx, O.wy);
    this._applyStroke(cx);
    cx.beginPath();
    cx.moveTo(o.x, o.y);
    cx.lineTo(far.x, far.y);
    cx.stroke();
    this._clearGlow(cx);
  }
}

// ── GeoCircle ────────────────────────────────────────────────────────

class GeoCircle extends GeoObject {
  /**
   * @param {GeoPoint} center
   * @param {GeoPoint|null} through — if null, uses fixedR
   * @param {number} fixedR — world-unit radius (used when through is null)
   */
  constructor(scene, center, through, fixedR, opts) {
    super(scene, through ? [center, through] : [center], opts);
    this.fixedR = fixedR;
    this.radius = 0;
  }
  recompute() {
    const center = this.deps[0];
    if (this.deps.length > 1) {
      const through = this.deps[1];
      this.radius = dist(center.wx, center.wy, through.wx, through.wy);
    } else {
      this.radius = this.fixedR;
    }
  }

  render(cx) {
    const center = this.deps[0];
    const s = this.scene.toScreen(center.wx, center.wy);
    const sr = this.radius * this.scene.sc;
    this._applyStroke(cx);
    cx.beginPath();
    cx.arc(s.x, s.y, sr, 0, Math.PI * 2);
    cx.stroke();
    this._clearGlow(cx);
  }
}

// ── GeoArc ───────────────────────────────────────────────────────────

class GeoArc extends GeoObject {
  /**
   * @param {GeoPoint} center
   * @param {number} radius — world units
   * @param {number} startAngle — radians
   * @param {number} endAngle — radians
   */
  constructor(scene, center, radius, startAngle, endAngle, opts) {
    super(scene, [center], opts);
    this._radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
  recompute() {}

  render(cx) {
    const C = this.deps[0];
    const s = this.scene.toScreen(C.wx, C.wy);
    const sr = this._radius * this.scene.sc;
    this._applyStroke(cx);
    cx.beginPath();
    // canvas y is inverted, so negate angles
    cx.arc(s.x, s.y, sr, -this.startAngle, -this.endAngle, true);
    cx.stroke();
    this._clearGlow(cx);
  }
}

// ── GeoPerpendicularBisector ─────────────────────────────────────────

class GeoPerpendicularBisector extends GeoLine {
  constructor(scene, A, B, opts) {
    // We create virtual midpoint-based deps but override recompute
    super(scene, A, B, opts);
    // store originals for rendering as an infinite line
    this._pA = A;
    this._pB = B;
    // We'll use internal virtual points for the line direction
    this._m = { wx: 0, wy: 0 };
    this._m2 = { wx: 0, wy: 0 };
    this.recompute();
  }

  get dx() { return this._m2.wx - this._m.wx; }
  get dy() { return this._m2.wy - this._m.wy; }

  recompute() {
    if (!this._pA) return;
    const A = this._pA, B = this._pB;
    const mx = (A.wx + B.wx) / 2, my = (A.wy + B.wy) / 2;
    // direction perpendicular to AB: rotate (dx, dy) by 90 degrees
    const dx = B.wx - A.wx, dy = B.wy - A.wy;
    this._m.wx = mx; this._m.wy = my;
    this._m2.wx = mx - dy; this._m2.wy = my + dx;
  }

  _clipToCanvas() {
    const scene = this.scene;
    const dx = this._m2.wx - this._m.wx, dy = this._m2.wy - this._m.wy;
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return null;

    const corners = [
      scene.toWorld(0, 0), scene.toWorld(scene.W, 0),
      scene.toWorld(scene.W, scene.H), scene.toWorld(0, scene.H),
    ];
    const ts = corners.map(c => {
      if (Math.abs(dx) > Math.abs(dy))
        return (c.x - this._m.wx) / dx;
      else
        return (c.y - this._m.wy) / dy;
    });
    const tMin = Math.min(...ts) - 2;
    const tMax = Math.max(...ts) + 2;

    return [
      scene.toScreen(this._m.wx + tMin * dx, this._m.wy + tMin * dy),
      scene.toScreen(this._m.wx + tMax * dx, this._m.wy + tMax * dy),
    ];
  }
}

// ── GeoPerpendicular — line through point perpendicular to a line ────

class GeoPerpendicular extends GeoLine {
  constructor(scene, line, point, opts) {
    super(scene, line.deps[0], line.deps[1], opts);
    this._line = line;
    this._point = point;
    this._v1 = { wx: 0, wy: 0 };
    this._v2 = { wx: 0, wy: 0 };
    this.recompute();
  }

  get dx() { return this._v2.wx - this._v1.wx; }
  get dy() { return this._v2.wy - this._v1.wy; }

  recompute() {
    if (!this._line) return;
    const L = this._line, P = this._point;
    // direction of line
    const ldx = L.deps[1].wx - L.deps[0].wx;
    const ldy = L.deps[1].wy - L.deps[0].wy;
    // perpendicular direction: (-ldy, ldx)
    this._v1.wx = P.wx; this._v1.wy = P.wy;
    this._v2.wx = P.wx - ldy; this._v2.wy = P.wy + ldx;
  }

  _clipToCanvas() {
    const scene = this.scene;
    const dx = this._v2.wx - this._v1.wx, dy = this._v2.wy - this._v1.wy;
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return null;
    const corners = [
      scene.toWorld(0, 0), scene.toWorld(scene.W, 0),
      scene.toWorld(scene.W, scene.H), scene.toWorld(0, scene.H),
    ];
    const ts = corners.map(c =>
      Math.abs(dx) > Math.abs(dy) ? (c.x - this._v1.wx) / dx : (c.y - this._v1.wy) / dy
    );
    const tMin = Math.min(...ts) - 2, tMax = Math.max(...ts) + 2;
    return [
      scene.toScreen(this._v1.wx + tMin * dx, this._v1.wy + tMin * dy),
      scene.toScreen(this._v1.wx + tMax * dx, this._v1.wy + tMax * dy),
    ];
  }
}

// ── GeoParallel — line through point parallel to a line ──────────────

class GeoParallel extends GeoLine {
  constructor(scene, line, point, opts) {
    super(scene, line.deps[0], line.deps[1], opts);
    this._line = line;
    this._point = point;
    this._v1 = { wx: 0, wy: 0 };
    this._v2 = { wx: 0, wy: 0 };
    this.recompute();
  }

  get dx() { return this._v2.wx - this._v1.wx; }
  get dy() { return this._v2.wy - this._v1.wy; }

  recompute() {
    if (!this._line) return;
    const L = this._line, P = this._point;
    const ldx = L.deps[1].wx - L.deps[0].wx;
    const ldy = L.deps[1].wy - L.deps[0].wy;
    this._v1.wx = P.wx; this._v1.wy = P.wy;
    this._v2.wx = P.wx + ldx; this._v2.wy = P.wy + ldy;
  }

  _clipToCanvas() {
    const scene = this.scene;
    const dx = this._v2.wx - this._v1.wx, dy = this._v2.wy - this._v1.wy;
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return null;
    const corners = [
      scene.toWorld(0, 0), scene.toWorld(scene.W, 0),
      scene.toWorld(scene.W, scene.H), scene.toWorld(0, scene.H),
    ];
    const ts = corners.map(c =>
      Math.abs(dx) > Math.abs(dy) ? (c.x - this._v1.wx) / dx : (c.y - this._v1.wy) / dy
    );
    const tMin = Math.min(...ts) - 2, tMax = Math.max(...ts) + 2;
    return [
      scene.toScreen(this._v1.wx + tMin * dx, this._v1.wy + tMin * dy),
      scene.toScreen(this._v1.wx + tMax * dx, this._v1.wy + tMax * dy),
    ];
  }
}

// ── GeoAngleBisector ─────────────────────────────────────────────────

class GeoAngleBisector extends GeoLine {
  constructor(scene, A, V, B, opts) {
    super(scene, V, A, opts); // dummy deps for base
    this._A = A; this._V = V; this._B = B;
    this._v1 = { wx: 0, wy: 0 };
    this._v2 = { wx: 0, wy: 0 };
    this.recompute();
  }

  get dx() { return this._v2.wx - this._v1.wx; }
  get dy() { return this._v2.wy - this._v1.wy; }

  recompute() {
    if (!this._V) return;
    const A = this._A, V = this._V, B = this._B;
    const dax = A.wx - V.wx, day = A.wy - V.wy;
    const dbx = B.wx - V.wx, dby = B.wy - V.wy;
    const la = Math.hypot(dax, day) || 1;
    const lb = Math.hypot(dbx, dby) || 1;
    // unit vectors then average
    const bx = dax / la + dbx / lb;
    const by = day / la + dby / lb;
    this._v1.wx = V.wx; this._v1.wy = V.wy;
    this._v2.wx = V.wx + bx; this._v2.wy = V.wy + by;
  }

  _clipToCanvas() {
    const scene = this.scene;
    const dx = this._v2.wx - this._v1.wx, dy = this._v2.wy - this._v1.wy;
    if (Math.abs(dx) < EPS && Math.abs(dy) < EPS) return null;
    const corners = [
      scene.toWorld(0, 0), scene.toWorld(scene.W, 0),
      scene.toWorld(scene.W, scene.H), scene.toWorld(0, scene.H),
    ];
    const ts = corners.map(c =>
      Math.abs(dx) > Math.abs(dy) ? (c.x - this._v1.wx) / dx : (c.y - this._v1.wy) / dy
    );
    const tMin = Math.min(...ts) - 2, tMax = Math.max(...ts) + 2;
    return [
      scene.toScreen(this._v1.wx + tMin * dx, this._v1.wy + tMin * dy),
      scene.toScreen(this._v1.wx + tMax * dx, this._v1.wy + tMax * dy),
    ];
  }
}

// ── Intersection helpers ─────────────────────────────────────────────

function lineParams(obj) {
  // Returns { px, py, dx, dy } — a point and direction for any line-like object
  if (obj instanceof GeoPerpendicularBisector) {
    return { px: obj._m.wx, py: obj._m.wy, dx: obj.dx, dy: obj.dy };
  }
  if (obj instanceof GeoPerpendicular || obj instanceof GeoParallel || obj instanceof GeoAngleBisector) {
    return { px: obj._v1.wx, py: obj._v1.wy, dx: obj.dx, dy: obj.dy };
  }
  if (obj instanceof GeoLine || obj instanceof GeoRay || obj instanceof GeoSegment) {
    const A = obj.deps[0], B = obj.deps[1];
    return { px: A.wx, py: A.wy, dx: B.wx - A.wx, dy: B.wy - A.wy };
  }
  return null;
}

function circleParams(obj) {
  if (obj instanceof GeoCircle) {
    return { cx: obj.deps[0].wx, cy: obj.deps[0].wy, r: obj.radius };
  }
  return null;
}

function intersectLineLine(l1, l2) {
  const det = l1.dx * l2.dy - l1.dy * l2.dx;
  if (Math.abs(det) < EPS) return []; // parallel
  const t = ((l2.px - l1.px) * l2.dy - (l2.py - l1.py) * l2.dx) / det;
  return [{ wx: l1.px + t * l1.dx, wy: l1.py + t * l1.dy }];
}

function intersectLineCircle(l, c) {
  // project circle center onto line
  const ex = l.dx, ey = l.dy;
  const len = Math.hypot(ex, ey);
  if (len < EPS) return [];
  const ux = ex / len, uy = ey / len;
  const fx = c.cx - l.px, fy = c.cy - l.py;
  const proj = fx * ux + fy * uy;
  const closest_x = l.px + proj * ux;
  const closest_y = l.py + proj * uy;
  const h = Math.hypot(c.cx - closest_x, c.cy - closest_y);

  if (h > c.r + EPS) return [];
  if (Math.abs(h - c.r) < EPS) {
    return [{ wx: closest_x, wy: closest_y }];
  }
  const d = Math.sqrt(c.r * c.r - h * h);
  return [
    { wx: closest_x - d * ux, wy: closest_y - d * uy },
    { wx: closest_x + d * ux, wy: closest_y + d * uy },
  ];
}

function intersectCircleCircle(c1, c2) {
  const dx = c2.cx - c1.cx, dy = c2.cy - c1.cy;
  const d = Math.hypot(dx, dy);
  if (d < EPS) return [];
  if (d > c1.r + c2.r + EPS) return [];
  if (d < Math.abs(c1.r - c2.r) - EPS) return [];

  const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d);
  const h2 = c1.r * c1.r - a * a;
  if (h2 < -EPS) return [];
  const h = Math.sqrt(Math.max(0, h2));

  const mx = c1.cx + a * dx / d;
  const my = c1.cy + a * dy / d;

  if (h < EPS) return [{ wx: mx, wy: my }];
  return [
    { wx: mx + h * dy / d, wy: my - h * dx / d },
    { wx: mx - h * dy / d, wy: my + h * dx / d },
  ];
}

// ── GeoIntersection ──────────────────────────────────────────────────

class GeoIntersection extends GeoPoint {
  /**
   * @param {number} which — 0 or 1 for choosing among multiple intersection points
   */
  constructor(scene, obj1, obj2, which, opts) {
    super(scene, 0, 0, [obj1, obj2], opts);
    this._obj1 = obj1;
    this._obj2 = obj2;
    this._which = which || 0;
    this.exists = true;
    this.recompute();
  }

  recompute() {
    if (!this._obj1) return;
    const l1 = lineParams(this._obj1);
    const l2 = lineParams(this._obj2);
    const c1 = circleParams(this._obj1);
    const c2 = circleParams(this._obj2);

    let pts = [];
    if (l1 && l2) pts = intersectLineLine(l1, l2);
    else if (l1 && c2) pts = intersectLineCircle(l1, c2);
    else if (c1 && l2) pts = intersectLineCircle(l2, c1);
    else if (c1 && c2) pts = intersectCircleCircle(c1, c2);

    if (pts.length > this._which) {
      this.wx = pts[this._which].wx;
      this.wy = pts[this._which].wy;
      this.exists = true;
    } else {
      this.exists = false;
    }
  }

  render(cx) {
    if (this.exists) GeoPoint.prototype.render.call(this, cx);
  }
}

// ── GeoProjection — foot of perpendicular from point to line ─────────

class GeoProjection extends GeoPoint {
  constructor(scene, point, lineObj, opts) {
    super(scene, 0, 0, [point, lineObj], opts);
    this._point = point;
    this._lineObj = lineObj;
    this.recompute();
  }

  recompute() {
    if (!this._point) return;
    const P = this._point;
    const lp = lineParams(this._lineObj);
    if (!lp) return;
    const len2 = lp.dx * lp.dx + lp.dy * lp.dy;
    if (len2 < EPS) { this.wx = lp.px; this.wy = lp.py; return; }
    const t = ((P.wx - lp.px) * lp.dx + (P.wy - lp.py) * lp.dy) / len2;
    this.wx = lp.px + t * lp.dx;
    this.wy = lp.py + t * lp.dy;
  }
}

// ── GeoReflection — mirror of point across a line ────────────────────

class GeoReflection extends GeoPoint {
  constructor(scene, point, lineObj, opts) {
    super(scene, 0, 0, [point, lineObj], opts);
    this._point = point;
    this._lineObj = lineObj;
    this.recompute();
  }

  recompute() {
    if (!this._point) return;
    const P = this._point;
    const lp = lineParams(this._lineObj);
    if (!lp) return;
    const len2 = lp.dx * lp.dx + lp.dy * lp.dy;
    if (len2 < EPS) { this.wx = P.wx; this.wy = P.wy; return; }
    const t = ((P.wx - lp.px) * lp.dx + (P.wy - lp.py) * lp.dy) / len2;
    const footX = lp.px + t * lp.dx;
    const footY = lp.py + t * lp.dy;
    this.wx = 2 * footX - P.wx;
    this.wy = 2 * footY - P.wy;
  }
}

// ── Measurements ─────────────────────────────────────────────────────

class GeoDistance extends GeoObject {
  constructor(scene, A, B, opts) {
    super(scene, [A, B], { visible: false, ...opts });
    this.value = 0;
  }
  recompute() {
    const [A, B] = this.deps;
    this.value = dist(A.wx, A.wy, B.wx, B.wy);
  }
  render() {} // invisible by default
}

class GeoAngle extends GeoObject {
  constructor(scene, A, V, B, opts) {
    super(scene, [A, V, B], { visible: false, ...opts });
    this.value = 0;
  }
  recompute() {
    const [A, V, B] = this.deps;
    const a1 = Math.atan2(A.wy - V.wy, A.wx - V.wx);
    const a2 = Math.atan2(B.wy - V.wy, B.wx - V.wx);
    let diff = a2 - a1;
    // normalize to [0, 2pi)
    diff = ((diff % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    this.value = diff;
  }
  get degrees() { return this.value * 180 / Math.PI; }
  render() {}
}

// ── Annotations ──────────────────────────────────────────────────────

class GeoRightAngleMarker extends GeoObject {
  constructor(scene, vertex, arm1End, arm2End, opts) {
    super(scene, [vertex, arm1End, arm2End], { size: 10, color: 'rgba(255,255,255,0.5)', ...opts });
  }
  recompute() {}

  render(cx) {
    const [V, A, B] = this.deps;
    const sv = this.scene.toScreen(V.wx, V.wy);
    const sa = this.scene.toScreen(A.wx, A.wy);
    const sb = this.scene.toScreen(B.wx, B.wy);

    // unit vectors along each arm (screen coords)
    const d1 = Math.hypot(sa.x - sv.x, sa.y - sv.y) || 1;
    const d2 = Math.hypot(sb.x - sv.x, sb.y - sv.y) || 1;
    const u1x = (sa.x - sv.x) / d1, u1y = (sa.y - sv.y) / d1;
    const u2x = (sb.x - sv.x) / d2, u2y = (sb.y - sv.y) / d2;

    const s = this.opts.size;
    const p1x = sv.x + u1x * s, p1y = sv.y + u1y * s;
    const p3x = sv.x + u2x * s, p3y = sv.y + u2y * s;
    const p2x = p1x + u2x * s, p2y = p1y + u2y * s;

    cx.strokeStyle = this.opts.color;
    cx.lineWidth = 1.5;
    cx.setLineDash([]);
    cx.beginPath();
    cx.moveTo(p1x, p1y);
    cx.lineTo(p2x, p2y);
    cx.lineTo(p3x, p3y);
    cx.stroke();
  }
}

class GeoEqualMarker extends GeoObject {
  /** Draw tick marks on a segment to indicate equal length */
  constructor(scene, segOrA, B, ticks, opts) {
    // Accept segment or two points
    if (segOrA instanceof GeoSegment) {
      super(scene, segOrA.deps, { ticks: B || 1, tickLen: 6, color: '#fff', ...ticks });
      this._ticks = (typeof B === 'number') ? B : 1;
    } else {
      super(scene, [segOrA, B], { ticks: ticks || 1, tickLen: 6, color: '#fff', ...opts });
      this._ticks = ticks || 1;
    }
  }
  recompute() {}

  render(cx) {
    const [A, B] = this.deps;
    const sa = this.scene.toScreen(A.wx, A.wy);
    const sb = this.scene.toScreen(B.wx, B.wy);
    const mx = (sa.x + sb.x) / 2, my = (sa.y + sb.y) / 2;
    const dx = sb.x - sa.x, dy = sb.y - sa.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len; // perpendicular
    const ux = dx / len, uy = dy / len; // along segment

    const tl = this.opts.tickLen;
    const n = this._ticks;
    const gap = 4;

    cx.strokeStyle = this.opts.color;
    cx.lineWidth = 1.5;
    cx.setLineDash([]);

    for (let i = 0; i < n; i++) {
      const off = (i - (n - 1) / 2) * gap;
      const cx0 = mx + ux * off, cy0 = my + uy * off;
      cx.beginPath();
      cx.moveTo(cx0 - nx * tl, cy0 - ny * tl);
      cx.lineTo(cx0 + nx * tl, cy0 + ny * tl);
      cx.stroke();
    }
  }
}

class GeoAngleArc extends GeoObject {
  constructor(scene, A, V, B, opts) {
    super(scene, [A, V, B], { arcRadius: 0.5, showLabel: true, color: '#FFD166', ...opts });
  }
  recompute() {}

  render(cx) {
    const [A, V, B] = this.deps;
    const sv = this.scene.toScreen(V.wx, V.wy);

    const a1 = Math.atan2(A.wy - V.wy, A.wx - V.wx);
    const a2 = Math.atan2(B.wy - V.wy, B.wx - V.wx);

    let start = a1, end = a2;
    // Ensure we draw the smaller arc (counterclockwise in math coords)
    let diff = ((end - start) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    if (diff > Math.PI) {
      // swap to get the reflex complement
      [start, end] = [end, start];
      diff = 2 * Math.PI - diff;
    }

    const r = this.opts.arcRadius * this.scene.sc;
    this._applyStroke(cx);
    cx.lineWidth = 1.5;
    cx.beginPath();
    // canvas has inverted Y, so negate angles
    cx.arc(sv.x, sv.y, r, -start, -end, true);
    cx.stroke();
    this._clearGlow(cx);

    // label
    if (this.opts.showLabel) {
      const midA = (start + end) / 2;
      // if we swapped, the midangle needs to be on the correct side
      const deg = Math.round(diff * 180 / Math.PI);
      const lx = sv.x + (r + 12) * Math.cos(-midA);
      const ly = sv.y + (r + 12) * Math.sin(-midA);
      cx.font = '11px sans-serif';
      cx.fillStyle = this.opts.color;
      cx.textAlign = 'center';
      cx.textBaseline = 'middle';
      cx.fillText(deg + '\u00B0', lx, ly);
      cx.textAlign = 'start';
      cx.textBaseline = 'alphabetic';
    }
  }
}

// ── GeoScene — the container ─────────────────────────────────────────

class GeoScene {
  constructor(cx, W, H, opts = {}) {
    this.cx = cx;
    this.W = W;
    this.H = H;
    this.ox = opts.originX ?? W / 2;
    this.oy = opts.originY ?? H / 2;
    this.sc = opts.scale ?? 40;
    this.objects = [];
    this.dragTarget = null;
  }

  // ── coordinate transforms ───────────────────────────────────────

  toScreen(wx, wy) {
    return { x: this.ox + wx * this.sc, y: this.oy - wy * this.sc };
  }
  toWorld(sx, sy) {
    return { x: (sx - this.ox) / this.sc, y: (this.oy - sy) / this.sc };
  }

  // ── factory methods ─────────────────────────────────────────────

  _add(obj) { this.objects.push(obj); return obj; }

  point(x, y, opts) {
    return this._add(new GeoPoint(this, x, y, [], opts));
  }

  pointOn(host, t, opts) {
    return this._add(new GeoPointOn(this, host, t, opts));
  }

  midpoint(A, B, opts) {
    return this._add(new GeoMidpoint(this, A, B, opts));
  }

  segment(A, B, opts) {
    return this._add(new GeoSegment(this, A, B, opts));
  }

  line(A, B, opts) {
    return this._add(new GeoLine(this, A, B, opts));
  }

  ray(origin, through, opts) {
    return this._add(new GeoRay(this, origin, through, opts));
  }

  circle(center, through, opts) {
    return this._add(new GeoCircle(this, center, through, null, opts));
  }

  circleR(center, r, opts) {
    return this._add(new GeoCircle(this, center, null, r, opts));
  }

  arc(center, radius, startAngle, endAngle, opts) {
    return this._add(new GeoArc(this, center, radius, startAngle, endAngle, opts));
  }

  perpBisector(A, B, opts) {
    return this._add(new GeoPerpendicularBisector(this, A, B, opts));
  }

  perpendicular(line, point, opts) {
    return this._add(new GeoPerpendicular(this, line, point, opts));
  }

  parallel(line, point, opts) {
    return this._add(new GeoParallel(this, line, point, opts));
  }

  angleBisector(A, V, B, opts) {
    return this._add(new GeoAngleBisector(this, A, V, B, opts));
  }

  intersection(obj1, obj2, which, opts) {
    if (typeof which === 'object' && !opts) { opts = which; which = 0; }
    return this._add(new GeoIntersection(this, obj1, obj2, which || 0, opts));
  }

  projection(point, lineObj, opts) {
    return this._add(new GeoProjection(this, point, lineObj, opts));
  }

  reflection(point, lineObj, opts) {
    return this._add(new GeoReflection(this, point, lineObj, opts));
  }

  distance(A, B, opts) {
    return this._add(new GeoDistance(this, A, B, opts));
  }

  angle(A, V, B, opts) {
    return this._add(new GeoAngle(this, A, V, B, opts));
  }

  rightAngleMarker(vertex, arm1End, arm2End, opts) {
    return this._add(new GeoRightAngleMarker(this, vertex, arm1End, arm2End, opts));
  }

  equalMarker(segOrA, B, ticks, opts) {
    return this._add(new GeoEqualMarker(this, segOrA, B, ticks, opts));
  }

  angleArc(A, V, B, opts) {
    return this._add(new GeoAngleArc(this, A, V, B, opts));
  }

  // ── update & render ─────────────────────────────────────────────

  update() {
    for (const obj of this.objects) {
      if (obj.deps.length > 0) obj.recompute();
    }
  }

  clear(color) {
    this.cx.fillStyle = color || '#0e0e12';
    this.cx.fillRect(0, 0, this.W, this.H);
  }

  drawGrid(opts = {}) {
    const cx = this.cx;
    const step = opts.step || 1;
    const color = opts.color || 'rgba(255,255,255,0.06)';
    const tl = this.toWorld(0, 0);
    const br = this.toWorld(this.W, this.H);

    cx.strokeStyle = color;
    cx.lineWidth = 0.5;
    cx.setLineDash([]);
    cx.beginPath();

    const xStart = Math.floor(br.x / step) * step; // br.x is the smaller x (left might be negative)
    const xEnd = Math.ceil(tl.x / step) * step;
    // Actually, toWorld(0,0) gives top-left world, toWorld(W,H) gives bottom-right world
    // With Y inverted: toWorld(0,0).y is top (positive), toWorld(0,H).y is bottom (negative)
    const minWX = Math.floor(Math.min(tl.x, br.x) / step) * step;
    const maxWX = Math.ceil(Math.max(tl.x, br.x) / step) * step;
    const minWY = Math.floor(Math.min(tl.y, br.y) / step) * step;
    const maxWY = Math.ceil(Math.max(tl.y, br.y) / step) * step;

    for (let wx = minWX; wx <= maxWX; wx += step) {
      const s = this.toScreen(wx, 0);
      cx.moveTo(s.x, 0);
      cx.lineTo(s.x, this.H);
    }
    for (let wy = minWY; wy <= maxWY; wy += step) {
      const s = this.toScreen(0, wy);
      cx.moveTo(0, s.y);
      cx.lineTo(this.W, s.y);
    }
    cx.stroke();
  }

  drawAxes(opts = {}) {
    const cx = this.cx;
    const color = opts.color || 'rgba(255,255,255,0.25)';
    const labelColor = opts.labelColor || 'rgba(255,255,255,0.3)';
    const step = opts.step || 1;

    // axes
    cx.strokeStyle = color;
    cx.lineWidth = 1;
    cx.setLineDash([]);
    cx.beginPath();
    // X axis
    cx.moveTo(0, this.oy);
    cx.lineTo(this.W, this.oy);
    // Y axis
    cx.moveTo(this.ox, 0);
    cx.lineTo(this.ox, this.H);
    cx.stroke();

    // tick labels
    if (opts.labels !== false) {
      cx.font = '10px sans-serif';
      cx.fillStyle = labelColor;
      cx.textAlign = 'center';
      cx.textBaseline = 'top';

      const tl = this.toWorld(0, 0);
      const br = this.toWorld(this.W, this.H);
      const minWX = Math.floor(Math.min(tl.x, br.x) / step) * step;
      const maxWX = Math.ceil(Math.max(tl.x, br.x) / step) * step;
      const minWY = Math.floor(Math.min(tl.y, br.y) / step) * step;
      const maxWY = Math.ceil(Math.max(tl.y, br.y) / step) * step;

      for (let wx = minWX; wx <= maxWX; wx += step) {
        if (Math.abs(wx) < EPS) continue;
        const s = this.toScreen(wx, 0);
        cx.fillText(String(wx), s.x, this.oy + 4);
      }
      cx.textAlign = 'right';
      cx.textBaseline = 'middle';
      for (let wy = minWY; wy <= maxWY; wy += step) {
        if (Math.abs(wy) < EPS) continue;
        const s = this.toScreen(0, wy);
        cx.fillText(String(wy), this.ox - 6, s.y);
      }
      cx.textAlign = 'start';
      cx.textBaseline = 'alphabetic';
    }
  }

  draw(bgColor) {
    this.clear(bgColor);
    this.update();
    for (const obj of this.objects) {
      if (obj.opts.visible) obj.render(this.cx);
    }
  }

  // ── drag handling ───────────────────────────────────────────────

  onDown(canvasX, canvasY) {
    const w = this.toWorld(canvasX, canvasY);
    const threshold = 0.5;
    let best = null, bestD = threshold;

    for (const o of this.objects) {
      if (!o.opts.drag) continue;
      if (o instanceof GeoPoint || o instanceof GeoPointOn) {
        const d = Math.hypot(o.wx - w.x, o.wy - w.y);
        if (d < bestD) { bestD = d; best = o; }
      }
    }
    this.dragTarget = best;
    return !!this.dragTarget;
  }

  onMove(canvasX, canvasY) {
    if (!this.dragTarget) return false;
    const w = this.toWorld(canvasX, canvasY);
    if (this.dragTarget instanceof GeoPointOn) {
      this.dragTarget.projectOntoHost(w.x, w.y);
    } else {
      this.dragTarget.wx = w.x;
      this.dragTarget.wy = w.y;
    }
    return true;
  }

  onUp() {
    this.dragTarget = null;
  }

  /**
   * Attach mouse & touch drag handlers to a canvas element.
   * @param {HTMLCanvasElement} canvas
   * @param {function} [getCanvasPos] — (event) => {x, y} in canvas-local coords
   */
  bindDrag(canvas, getCanvasPos) {
    const pos = getCanvasPos || ((e) => {
      const r = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - r.left, y: clientY - r.top };
    });

    const onDown = (e) => {
      const p = pos(e);
      if (this.onDown(p.x, p.y)) {
        e.preventDefault();
      }
    };
    const onMove = (e) => {
      if (!this.dragTarget) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const r = canvas.getBoundingClientRect();
      const p = { x: clientX - r.left, y: clientY - r.top };
      if (this.onMove(p.x, p.y)) {
        e.preventDefault();
      }
    };
    const onUp = () => this.onUp();

    canvas.addEventListener('mousedown', onDown);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseup', onUp);
    canvas.addEventListener('mouseleave', onUp);
    canvas.addEventListener('touchstart', onDown, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    canvas.addEventListener('touchend', onUp);
    canvas.addEventListener('touchcancel', onUp);
  }
}

// ── exports ──────────────────────────────────────────────────────────

export {
  GeoScene,
  GeoObject,
  GeoPoint,
  GeoPointOn,
  GeoMidpoint,
  GeoSegment,
  GeoLine,
  GeoRay,
  GeoCircle,
  GeoArc,
  GeoPerpendicularBisector,
  GeoPerpendicular,
  GeoParallel,
  GeoAngleBisector,
  GeoIntersection,
  GeoProjection,
  GeoReflection,
  GeoDistance,
  GeoAngle,
  GeoRightAngleMarker,
  GeoEqualMarker,
  GeoAngleArc,
};
