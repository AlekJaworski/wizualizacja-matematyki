/**
 * warsztat-core.js — shared runtime for "Warsztat" interactive challenge nodes.
 *
 * A Warsztat is a linear sequence of challenges where each challenge follows
 * the phase machine:   predict  →  working  →  solved.
 *
 *   - predict:  an optional MCQ with per-option "why" feedback. If the challenge
 *               omits `predict`, the phase starts at `working`.
 *   - working:  the student manipulates sliders and/or picks discrete choices
 *               until `solved()` returns true. Hint ladder reveals progressively
 *               at 20s / 45s / 90s (idle timers from entry into working).
 *   - solved:   shows `solvedMsg`, marks the challenge complete in localStorage,
 *               optionally appends a global `wrapup` note after the last one.
 *
 * ── Challenge schema ────────────────────────────────────────────────────
 *   {
 *     id:        string                         // stable, used for LS completion key
 *     title:     string
 *     desc:      string
 *     init():    void                           // reset challenge-local state
 *     predict?:  {                              // optional predict MCQ (BEFORE work)
 *       question: string,
 *       options: [{ label, correct, why }]
 *     },
 *     predictAfter?: {                          // optional transfer-check MCQ (AFTER solve)
 *       question: string,                       //   gates "Dalej \u2192" until answered;
 *       options: [{ label, correct, why }]     //   correctness is recorded but does not
 *     },                                        //   downgrade completion.
 *     sliders?:  [{ id, lbl, color, min, max, step, get(), set(v) }]
 *     choices?:  {                              // optional discrete pick widget
 *       question: string,
 *       options: [{ id, label, correct }],
 *       pick(id)                                // write the pick into caller state
 *     }
 *     debug?:    {                              // optional "find the error" widget
 *       task:       string,                     // problem statement (HTML allowed)
 *       steps:      [{ n: number, text: string }],
 *       errorLine:  number,                     // 1-based line with the real error
 *       wrongChoice?: { general?: string, [n]: string },  // per-line nudges
 *       correctExplanation: string,             // shown on success
 *     }
 *     pips():    [{ label, ok }]                // live constraint checklist
 *     solved():  boolean
 *     hints:     string[]                       // 1-3 lines, revealed by timer
 *     solvedMsg: string
 *     draw():    void                           // canvas draw, caller-owned
 *     drawBackground?: 'graph' | 'blank'        // opt in to grid+axes background
 *     view?:     GraphView-config-override      // per-challenge view override
 *   }
 *
 * ── initWarsztat({ canvasId, challenges, lsKey, view, wrapup, drawBackground }) ──
 *   canvasId:        id of the <canvas> element. Caller provides DOM panel with
 *                    the standard ids: step, title, desc, predict, sliders-wrap,
 *                    choices-wrap, pips, hints, solved-msg, dots, prev, next.
 *   challenges:      array of Challenge objects.
 *   lsKey:           localStorage key for completion persistence.
 *   view:            optional default GraphView config used when a challenge opts
 *                    into the graph background. Expects { xRange, yRange, scale }.
 *                    Caller is responsible for wiring a GraphView constructor —
 *                    see `renderBackground` hook below.
 *   wrapup:          optional string shown once, after the final challenge solves.
 *   drawBackground:  optional function(view). Called each tick when the current
 *                    challenge has `drawBackground: 'graph'`. If omitted, core
 *                    simply skips background rendering — the caller's draw() is
 *                    responsible for everything on the canvas.
 *   initView:        function(ctx) => GraphView (per frame). Optional; only needed
 *                    if any challenge uses drawBackground === 'graph' OR if the
 *                    caller wants core to call view.clear() each frame.
 *
 * The core intentionally does NOT know about GraphView, plotParabola, infoBox,
 * or anything topic-specific. Those live in per-node HTML.
 */

// ── Phase constants ────────────────────────────────────────────────────
export const Phase = Object.freeze({
  PREDICT: 'predict',
  WORKING: 'working',
  SOLVED:  'solved',
});

// ── State factory ──────────────────────────────────────────────────────
export function createState() {
  return {
    phase:            Phase.PREDICT,
    hintLevel:        0,
    predictAnswer:    null,
    predictConfirmed: false,
    predictAfterAnswer: null, // transfer-check MCQ pick; stays null until student picks
    startTime:        0,
    debugPicked:      null,   // last step (1-based) clicked in debug widget
    debugSolved:      false,  // becomes true once the correct error line is picked
  };
}

// ── LocalStorage persistence ───────────────────────────────────────────
export function loadCompleted(lsKey) {
  try { return new Set(JSON.parse(localStorage.getItem(lsKey) || '[]')); }
  catch { return new Set(); }
}

export function persistCompleted(lsKey, completed) {
  localStorage.setItem(lsKey, JSON.stringify([...completed]));
}

// ── Helpers ────────────────────────────────────────────────────────────
function fmtSlider(v, step) {
  return step < 1
    ? (v.toFixed(2).replace(/\.?0+$/, '') || v.toFixed(0))
    : v.toFixed(0);
}

/**
 * Render inline math (delimiters `$...$`) using KaTeX if it's loaded on the
 * page; otherwise return the inner text. Warsztat HTML pages should load
 * KaTeX from CDN; if they don't, strings degrade gracefully to plaintext.
 * Non-strings pass through untouched.
 */
export function renderMath(str) {
  if (typeof str !== 'string' || !str.includes('$')) return str ?? '';
  if (typeof globalThis.katex === 'undefined') {
    return str.replace(/\$([^$]+)\$/g, (_, inner) => inner);
  }
  return str.replace(/\$([^$]+)\$/g, (_match, inner) => {
    try {
      return globalThis.katex.renderToString(inner, { throwOnError: false, output: 'html' });
    } catch {
      return inner;
    }
  });
}

// ── Render functions (all take explicit refs; no globals) ──────────────
export function renderHead(refs, ch, idx, total, S) {
  refs.step.textContent  = 'Wyzwanie ' + (idx + 1) + ' / ' + total;
  refs.title.innerHTML = renderMath(ch.title);
  // Suppress the action-framed description during the predict phase so the
  // student reads the predict question first instead of reaching for the
  // slider (desc often says "przesuwaj…" which invites premature dragging).
  const suppressDesc = ch.predict && S && S.phase === Phase.PREDICT;
  refs.desc.innerHTML  = suppressDesc ? '' : renderMath(ch.desc || '');
}

export function renderDots(refs, challenges, currentIdx, completed, onGoTo) {
  refs.dots.innerHTML = challenges.map((ch, i) => {
    let cls = 'dot';
    if (i === currentIdx) cls += ' active';
    else if (completed.has(ch.id)) cls += ' done';
    return '<span class="' + cls + '" data-i="' + i + '"></span>';
  }).join('');
  refs.dots.querySelectorAll('.dot').forEach(d => {
    d.addEventListener('click', () => onGoTo(+d.dataset.i));
  });
}

export function renderPredict(refs, ch, S, onPick) {
  if (!ch.predict || S.phase !== Phase.PREDICT) { refs.predict.innerHTML = ''; return; }
  const picked = S.predictAnswer;
  const showFeedback = picked !== null;
  let html = '<div class="predict"><div class="q">' + renderMath(ch.predict.question) + '</div><div class="opts">';
  ch.predict.options.forEach((opt, i) => {
    const cls = picked === i ? 'picked' : '';
    html += '<button class="' + cls + '" data-i="' + i + '" ' + (showFeedback ? 'disabled' : '') + '>' + renderMath(opt.label) + '</button>';
  });
  html += '</div>';
  if (showFeedback) {
    const opt = ch.predict.options[picked];
    const prefix = opt.correct ? '\u2713 ' : '\u2717 ';
    html += '<div class="feedback">' + prefix + renderMath(opt.why) + '</div>';
  }
  html += '</div>';
  refs.predict.innerHTML = html;
  refs.predict.querySelectorAll('.predict button[data-i]').forEach(b => {
    b.addEventListener('click', () => onPick(+b.dataset.i));
  });
}

export function renderPredictAfter(refs, ch, S, onPick) {
  // Transfer-check MCQ: shown in the same DOM slot as the pre-predict, but only during SOLVED.
  if (!ch.predictAfter || S.phase !== Phase.SOLVED) return;
  const picked = S.predictAfterAnswer;
  const showFeedback = picked !== null;
  let html = '<div class="predict predict-after"><div class="q">' + renderMath(ch.predictAfter.question) + '</div><div class="opts">';
  ch.predictAfter.options.forEach((opt, i) => {
    const cls = picked === i ? 'picked' : '';
    html += '<button class="' + cls + '" data-i="' + i + '" ' + (showFeedback ? 'disabled' : '') + '>' + renderMath(opt.label) + '</button>';
  });
  html += '</div>';
  if (showFeedback) {
    const opt = ch.predictAfter.options[picked];
    const prefix = opt.correct ? '\u2713 ' : '\u2717 ';
    html += '<div class="feedback">' + prefix + renderMath(opt.why) + '</div>';
  }
  html += '</div>';
  refs.predict.innerHTML = html;
  refs.predict.querySelectorAll('.predict button[data-i]').forEach(b => {
    b.addEventListener('click', () => onPick(+b.dataset.i));
  });
}

export function renderSliders(refs, ch, S, onSolve) {
  if (!refs.sliders) return;
  if (S.phase === Phase.PREDICT || !ch.sliders) { refs.sliders.innerHTML = ''; return; }
  let html = '<div class="sliders">';
  ch.sliders.forEach(s => {
    html += '<div class="slider-row">' +
      '<span class="lbl" style="color:' + s.color + '">' + s.lbl + ' =</span>' +
      '<input type="range" id="s_' + s.id + '" min="' + s.min + '" max="' + s.max + '" step="' + s.step + '" value="' + s.get() + '">' +
      '<span class="val" id="v_' + s.id + '" style="color:' + s.color + '">' + fmtSlider(s.get(), s.step) + '</span>' +
    '</div>';
  });
  html += '</div>';
  refs.sliders.innerHTML = html;
  ch.sliders.forEach(s => {
    const el = document.getElementById('s_' + s.id);
    const valEl = document.getElementById('v_' + s.id);
    el.addEventListener('input', () => {
      const v = +el.value;
      valEl.textContent = fmtSlider(v, s.step);
      s.set(v);
      if (S.phase === Phase.WORKING && ch.solved()) onSolve();
    });
  });
}

export function renderChoices(refs, ch, S, onSolve, onRerender) {
  if (!refs.choices) return;
  if (S.phase === Phase.PREDICT || !ch.choices) { refs.choices.innerHTML = ''; return; }
  let html = '<div class="choices"><div class="q" style="font-size:13px;color:rgba(255,255,255,.72);margin-bottom:6px;">' + renderMath(ch.choices.question) + '</div>';
  ch.choices.options.forEach(opt => {
    let cls = '';
    if (S.phase === Phase.SOLVED && opt.correct) cls = 'correct';
    html += '<button data-id="' + opt.id + '" class="' + cls + '">' + renderMath(opt.label) + '</button>';
  });
  html += '</div>';
  refs.choices.innerHTML = html;
  refs.choices.querySelectorAll('button[data-id]').forEach(b => {
    b.addEventListener('click', () => {
      if (S.phase === Phase.SOLVED) return;
      ch.choices.pick(b.dataset.id);
      const opt = ch.choices.options.find(o => o.id === b.dataset.id);
      if (opt.correct && ch.solved()) {
        onSolve();
      } else {
        refs.choices.querySelectorAll('button[data-id]').forEach(btn => btn.classList.remove('picked','wrong'));
        b.classList.add(opt.correct ? 'picked' : 'wrong');
        onRerender();
      }
    });
  });
}

export function renderDebug(refs, ch, S, onSolve) {
  if (!refs.debug) return;
  if (!ch.debug) { refs.debug.innerHTML = ''; return; }
  if (S.phase === Phase.PREDICT) { refs.debug.innerHTML = ''; return; }

  const d = ch.debug;
  const picked = S.debugPicked;
  const correctPicked = S.debugSolved;
  const showWrong = picked !== null && picked !== d.errorLine && !correctPicked;

  let html = '<div class="debug">';
  if (d.task) html += '<div class="debug-task">' + d.task + '</div>';
  html += '<div class="debug-steps">';
  d.steps.forEach(st => {
    let cls = 'debug-step';
    const isCorrect = correctPicked && st.n === d.errorLine;
    const isWrongPick = showWrong && st.n === picked;
    if (isCorrect) cls += ' correct';
    else if (isWrongPick) cls += ' wrong';
    const disabled = correctPicked ? 'disabled' : '';
    html += '<button class="' + cls + '" data-n="' + st.n + '" ' + disabled + '>' +
      '<span class="debug-n">' + st.n + '.</span>' +
      '<span class="debug-text">' + st.text + '</span>' +
    '</button>';
  });
  html += '</div>';

  if (correctPicked) {
    html += '<div class="debug-feedback ok">\u2713 ' + d.correctExplanation + '</div>';
  } else if (showWrong) {
    const msg = (d.wrongChoice && d.wrongChoice[picked])
      || (d.wrongChoice && d.wrongChoice.general)
      || 'Ten krok jest zgodny z poprzednimi — błąd jest gdzie indziej.';
    html += '<div class="debug-feedback bad">\u2717 ' + msg + '</div>';
  }
  html += '</div>';
  refs.debug.innerHTML = html;

  refs.debug.querySelectorAll('.debug-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (S.debugSolved) return;
      const n = +btn.dataset.n;
      S.debugPicked = n;
      if (n === d.errorLine) {
        S.debugSolved = true;
        onSolve();
      } else {
        renderDebug(refs, ch, S, onSolve);
      }
    });
  });
}

export function renderPips(refs, ch, S) {
  if (S.phase === Phase.PREDICT) { refs.pips.innerHTML = ''; return; }
  const pips = ch.pips();
  refs.pips.innerHTML = pips.map(p =>
    '<span class="pip ' + (p.ok ? 'ok' : '') + '"><span class="mark"></span>' + renderMath(p.label) + '</span>'
  ).join('');
}

export function renderHints(refs, ch, S) {
  if (S.phase !== Phase.WORKING) { refs.hints.innerHTML = ''; return; }
  const elapsed = (Date.now() - S.startTime) / 1000;
  const thresholds = [20, 45, 90];
  let level = 0;
  for (let i = 0; i < thresholds.length; i++) if (elapsed >= thresholds[i]) level = i + 1;
  level = Math.max(level, S.hintLevel);
  S.hintLevel = level;
  const shown = ch.hints.slice(0, level);
  refs.hints.innerHTML = shown.map(h => '<div class="hint">\u{1F4A1} ' + renderMath(h) + '</div>').join('');
}

export function renderSolvedMsg(refs, ch, S, isLast, wrapup) {
  if (S.phase !== Phase.SOLVED) { refs.solvedMsg.innerHTML = ''; return; }
  let html = '<div class="solved-note">' + renderMath(ch.solvedMsg) + '</div>';
  if (isLast && wrapup) {
    html += '<div class="wrapup-note">' + renderMath(wrapup) + '</div>';
  }
  refs.solvedMsg.innerHTML = html;
}

export function renderNav(refs, S, currentIdx, total, ch) {
  refs.prev.disabled = currentIdx === 0;
  const atLast = currentIdx === total - 1;
  if (S.phase === Phase.PREDICT) {
    refs.next.textContent = 'Sprawd\u017A \u2192';
    refs.next.disabled = S.predictAnswer === null;
    refs.next.classList.toggle('primary', S.predictAnswer !== null);
  } else if (S.phase === Phase.WORKING) {
    refs.next.textContent = 'Dalej \u2192';
    refs.next.disabled = true;
    refs.next.classList.remove('primary');
  } else {
    // SOLVED: if this challenge has a transfer-check and student hasn't answered it, gate advance.
    const needsTransfer = ch && ch.predictAfter && S.predictAfterAnswer === null;
    if (atLast) {
      // Finale: "Koniec" stays clickable so the student can restart (goTo(0) wired in advance()).
      refs.next.textContent = 'Koniec \u21BA';
      refs.next.disabled = needsTransfer;
      refs.next.classList.toggle('primary', !needsTransfer);
    } else {
      refs.next.textContent = 'Dalej \u2192';
      refs.next.disabled = needsTransfer;
      refs.next.classList.toggle('primary', !needsTransfer);
    }
  }
}

// ── Main entry: wires DOM, nav, render loop ────────────────────────────
/**
 * initWarsztat(opts):
 *   canvasId:       string                              required
 *   panelIds?:      { step, title, desc, predict, sliders, choices, pips, hints, solvedMsg, dots, prev, next }
 *                                                       optional — defaults match our standard HTML
 *   challenges:     Challenge[]                         required
 *   lsKey:          string                              required
 *   wrapup?:        string
 *   onFrame?:       ({ ctx, canvas, ch, S }) => void    called every frame BEFORE ch.draw()
 *                                                       — use this for view.clear(), grid/axes,
 *                                                       conditioned on ch.drawBackground.
 *
 * Returns { current, setIndex, reset, S, completed }.
 */
export function initWarsztat(opts) {
  const {
    canvasId,
    panelIds = {},
    challenges,
    lsKey,
    wrapup,
    onFrame,
    extraState,
  } = opts;

  const ids = {
    step:      panelIds.step      || 'step',
    title:     panelIds.title     || 'title',
    desc:      panelIds.desc      || 'desc',
    predict:   panelIds.predict   || 'predict',
    sliders:   panelIds.sliders   || 'sliders-wrap',
    choices:   panelIds.choices   || 'choices-wrap',
    debug:     panelIds.debug     || 'debug-wrap',
    pips:      panelIds.pips      || 'pips',
    hints:     panelIds.hints     || 'hints',
    solvedMsg: panelIds.solvedMsg || 'solved-msg',
    dots:      panelIds.dots      || 'dots',
    prev:      panelIds.prev      || 'prev',
    next:      panelIds.next      || 'next',
  };

  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  const refs = {
    step:      document.getElementById(ids.step),
    title:     document.getElementById(ids.title),
    desc:      document.getElementById(ids.desc),
    predict:   document.getElementById(ids.predict),
    sliders:   document.getElementById(ids.sliders),
    choices:   document.getElementById(ids.choices),
    debug:     document.getElementById(ids.debug),
    pips:      document.getElementById(ids.pips),
    hints:     document.getElementById(ids.hints),
    solvedMsg: document.getElementById(ids.solvedMsg),
    dots:      document.getElementById(ids.dots),
    prev:      document.getElementById(ids.prev),
    next:      document.getElementById(ids.next),
  };

  const completed = loadCompleted(lsKey);
  const S = Object.assign(createState(), extraState || {});
  let currentIdx = 0;

  function renderAll() {
    const ch = challenges[currentIdx];
    renderHead(refs, ch, currentIdx, challenges.length, S);
    renderDots(refs, challenges, currentIdx, completed, goTo);
    renderPredict(refs, ch, S, onPredictPick);
    renderPredictAfter(refs, ch, S, onPredictAfterPick);
    renderSliders(refs, ch, S, onSolve);
    renderChoices(refs, ch, S, onSolve, renderAll);
    renderDebug(refs, ch, S, onSolve);
    renderPips(refs, ch, S);
    renderHints(refs, ch, S);
    renderSolvedMsg(refs, ch, S, currentIdx === challenges.length - 1, wrapup);
    renderNav(refs, S, currentIdx, challenges.length, ch);
  }

  function onPredictPick(i) {
    S.predictAnswer = i;
    renderPredict(refs, challenges[currentIdx], S, onPredictPick);
    renderNav(refs, S, currentIdx, challenges.length, challenges[currentIdx]);
  }

  function onPredictAfterPick(i) {
    S.predictAfterAnswer = i;
    renderPredictAfter(refs, challenges[currentIdx], S, onPredictAfterPick);
    renderNav(refs, S, currentIdx, challenges.length, challenges[currentIdx]);
  }

  function goTo(idx) {
    currentIdx = Math.max(0, Math.min(challenges.length - 1, idx));
    const ch = challenges[currentIdx];
    S.predictAnswer = null;
    S.predictConfirmed = false;
    S.predictAfterAnswer = null;
    S.phase = ch.predict ? Phase.PREDICT : Phase.WORKING;
    S.hintLevel = 0;
    S.startTime = Date.now();
    S.debugPicked = null;
    S.debugSolved = false;
    ch.init();
    renderAll();
  }

  function advance() {
    if (S.phase === Phase.PREDICT && S.predictAnswer !== null) {
      S.phase = Phase.WORKING;
      S.startTime = Date.now();
      if (challenges[currentIdx].solved()) { onSolve(); return; }
      renderAll();
      return;
    }
    if (S.phase === Phase.SOLVED) {
      if (currentIdx < challenges.length - 1) {
        goTo(currentIdx + 1);
      } else {
        // Finale: "Koniec" restarts the warsztat at Ch.1 so the student can
        // replay. Also post a completion event for the enclosing page to pick
        // up (e.g. close the iframe or show a "well done" toast).
        try { window.parent?.postMessage?.({ type: 'warsztat:done', lsKey }, '*'); } catch {}
        goTo(0);
      }
    }
  }

  function onSolve() {
    S.phase = Phase.SOLVED;
    completed.add(challenges[currentIdx].id);
    persistCompleted(lsKey, completed);
    renderAll();
  }

  refs.prev.addEventListener('click', () => { if (currentIdx > 0) goTo(currentIdx - 1); });
  refs.next.addEventListener('click', advance);

  function tick() {
    const ch = challenges[currentIdx];
    if (onFrame) onFrame({ ctx, canvas, ch, S });
    ch.draw();
    renderPips(refs, ch, S);
    renderHints(refs, ch, S);
    requestAnimationFrame(tick);
  }

  goTo(0);
  tick();

  return {
    get current() { return currentIdx; },
    setIndex: goTo,
    reset: () => goTo(0),
    S,
    completed,
  };
}
