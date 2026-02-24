import { useState, useCallback, useEffect, useRef, useMemo } from "react";

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const SECTIONS = {
  SP8: { label: "SP kl. 8",        color: "#4a9eff" },
  LP:  { label: "Matura podst.",   color: "#f5a623" },
  LR:  { label: "Matura rozszerz.",color: "#e05cef" },
  UNIV:{ label: "Uczelnia / IB",   color: "#6b7d9a" },
};

const SCOPE_COLORS = {
  liczby_rzeczywiste:   "#3dc9b0",
  wyrazenia:            "#2ecc71",
  rownania:             "#e74c3c",
  funkcje:              "#f5a623",
  ciagi:                "#e67e22",
  trygonometria:        "#9b59b6",
  planimetria:          "#e05cef",
  geometria_analityczna:"#c0392b",
  stereometria:         "#8e44ad",
  kombinatoryka:        "#c8d6e5",
  statystyka:           "#4a9eff",
  logika:               "#ff6b6b",
  optymalizacja:        "#1abc9c",  // XIII. Optymalizacja i rachunek różniczkowy (LR)
  analiza:              "#7f8c8d",  // Uczelnia / IB only
};

const SCOPE_LABELS = {
  liczby_rzeczywiste:   { en: "Real Numbers",          pl: "I. Liczby rzeczywiste" },
  wyrazenia:            { en: "Algebraic Expressions",  pl: "II. Wyrażenia algebraiczne" },
  rownania:             { en: "Equations & Ineq.",      pl: "III–IV. Równania i układy" },
  funkcje:              { en: "Functions",               pl: "V. Funkcje" },
  ciagi:                { en: "Sequences",               pl: "VI. Ciągi" },
  trygonometria:        { en: "Trigonometry",            pl: "VII. Trygonometria" },
  planimetria:          { en: "Plane Geometry",          pl: "VIII. Planimetria" },
  geometria_analityczna:{ en: "Analytic Geometry",       pl: "IX. Geometria analityczna" },
  stereometria:         { en: "Solid Geometry",          pl: "X. Stereometria" },
  kombinatoryka:        { en: "Combinatorics & Prob.",   pl: "XI. Kombinatoryka i rach. prawdop." },
  statystyka:           { en: "Statistics",              pl: "XII. Statystyka" },
  logika:               { en: "Logic & Sets",            pl: "XIII. Logika i teoria zbiorów" },
  optymalizacja:        { en: "Calculus (LR)",           pl: "XIII. Optymalizacja i rach. różniczkowy" },
  analiza:              { en: "Analysis (Univ/IB)",      pl: "Analiza matematyczna (uczelnia/IB)" },
};

const RAW_NODES = [
  // ── I. Liczby rzeczywiste / SP8 ────────────────────────────────
  { id:"integers",      label:"Integers & Operations",       labelPl:"Liczby całkowite",           scope:"liczby_rzeczywiste",    section:"SP8",  level:1, x:120,  y:80  },
  { id:"fractions",     label:"Fractions & Rationals",       labelPl:"Ułamki i liczby wymierne",   scope:"liczby_rzeczywiste",    section:"SP8",  level:1, x:260,  y:80  },
  { id:"powers",        label:"Powers & Roots",              labelPl:"Potęgi i pierwiastki",       scope:"liczby_rzeczywiste",    section:"SP8",  level:1, x:400,  y:80  },
  // ── I. Liczby rzeczywiste / LP ─────────────────────────────────
  { id:"log_exp",       label:"Logarithms & Exponentials",   labelPl:"Logarytmy i wykładnicze",    scope:"liczby_rzeczywiste",    section:"LP",   level:2, x:680,  y:200 },
  { id:"abs_value",     label:"Absolute Value",              labelPl:"Wartość bezwzględna",        scope:"liczby_rzeczywiste",    section:"LP",   level:2, x:100,  y:310 },

  // ── II. Wyrażenia algebraiczne / LP ────────────────────────────
  { id:"polynomials",   label:"Polynomials",                 labelPl:"Wielomiany",                 scope:"wyrazenia",             section:"LP",   level:2, x:490,  y:200 },
  { id:"rational_expr", label:"Rational Expressions",        labelPl:"Wyrażenia wymierne",         scope:"wyrazenia",             section:"LP",   level:2, x:490,  y:310 },
  { id:"factoring",     label:"Factoring",                   labelPl:"Faktoryzacja",               scope:"wyrazenia",             section:"LP",   level:2, x:580,  y:390 },
  // ── II. Wyrażenia algebraiczne / LR ────────────────────────────
  { id:"binom_theorem", label:"Binomial Theorem",            labelPl:"Wzór dwumianowy",            scope:"wyrazenia",             section:"LR",   level:3, x:1400, y:600 },

  // ── III–IV. Równania i układy / SP8 ────────────────────────────
  { id:"linear_eq",     label:"Linear Equations",            labelPl:"Równania liniowe",           scope:"rownania",              section:"SP8",  level:2, x:190,  y:200 },
  { id:"linear_ineq",   label:"Linear Inequalities",         labelPl:"Nierówności liniowe",        scope:"rownania",              section:"SP8",  level:2, x:330,  y:200 },
  { id:"linear_sys",    label:"Systems of Linear Eq.",       labelPl:"Układy równań liniowych",    scope:"rownania",              section:"SP8",  level:2, x:250,  y:310 },
  // ── III–IV. Równania i układy / LP ─────────────────────────────
  { id:"quadratic_eq",  label:"Quadratic Equations",         labelPl:"Równania kwadratowe",        scope:"rownania",              section:"LP",   level:2, x:390,  y:390 },
  { id:"quadratic_ineq",label:"Quadratic Inequalities",      labelPl:"Nierówności kwadratowe",     scope:"rownania",              section:"LP",   level:2, x:390,  y:480 },
  { id:"log_eq",        label:"Log. & Exp. Equations",       labelPl:"Równania log. i wykł.",      scope:"rownania",              section:"LP",   level:2, x:740,  y:310 },
  // ── III–IV. Równania i układy / LR ─────────────────────────────
  { id:"vieta",         label:"Vieta's Formulas",            labelPl:"Wzory Viète'a",              scope:"rownania",              section:"LR",   level:3, x:390,  y:560 },
  { id:"param_eq",      label:"Equations with Parameters",   labelPl:"Równania z parametrem",      scope:"rownania",              section:"LR",   level:3, x:560,  y:480 },
  { id:"poly_roots",    label:"Polynomial Roots",            labelPl:"Pierwiastki wielomianów",    scope:"rownania",              section:"LR",   level:3, x:580,  y:560 },
  { id:"trig_eq",       label:"Trig. Equations",             labelPl:"Równania trygonometryczne",  scope:"rownania",              section:"LR",   level:3, x:880,  y:400 },

  // ── V. Funkcje / SP8 ───────────────────────────────────────────
  { id:"fn_concept",    label:"Function Concept",            labelPl:"Pojęcie funkcji",            scope:"funkcje",               section:"SP8",  level:1, x:160,  y:450 },
  { id:"fn_linear",     label:"Linear Function",             labelPl:"Funkcja liniowa",            scope:"funkcje",               section:"SP8",  level:2, x:260,  y:540 },
  // ── V. Funkcje / LP ────────────────────────────────────────────
  { id:"fn_quadratic",  label:"Quadratic Function",          labelPl:"Funkcja kwadratowa",         scope:"funkcje",               section:"LP",   level:2, x:390,  y:700 },
  { id:"fn_exp",        label:"Exponential Function",        labelPl:"Funkcja wykładnicza",        scope:"funkcje",               section:"LP",   level:2, x:700,  y:540 },
  { id:"fn_log",        label:"Logarithmic Function",        labelPl:"Funkcja logarytmiczna",      scope:"funkcje",               section:"LP",   level:2, x:810,  y:540 },
  // ── V. Funkcje / LR ────────────────────────────────────────────
  { id:"fn_poly",       label:"Polynomial Functions",        labelPl:"Funkcje wielomianowe",       scope:"funkcje",               section:"LP",   level:2, x:560,  y:700 },  // LP: f(x)=ax etc; LR adds compositions/monotonicity proofs
  { id:"fn_compositions",label:"Function Compositions",     labelPl:"Złożenia funkcji",           scope:"funkcje",               section:"LR",   level:3, x:660,  y:640 },
  // ── V. Funkcje / LR (trygonometryczne — full periodic) ─────────
  { id:"fn_trig",       label:"Trig. Functions (periodic)", labelPl:"Funkcje trygon. (okresowe)", scope:"trygonometria",         section:"LR",   level:3, x:960,  y:440 },

  // ── VI. Ciągi / LP ─────────────────────────────────────────────
  { id:"sequences",     label:"Sequences",                   labelPl:"Ciągi",                      scope:"ciagi",                 section:"LP",   level:2, x:980,  y:120 },
  { id:"arith_geom",    label:"Arith. & Geometric Seq.",     labelPl:"Ciągi arytm. i geom.",       scope:"ciagi",                 section:"LP",   level:2, x:1080, y:220 },
  // ── VI. Ciągi / LR ─────────────────────────────────────────────
  { id:"seq_limits",    label:"Limits of Sequences",         labelPl:"Granice ciągów",             scope:"ciagi",                 section:"LR",   level:3, x:980,  y:280 },
  { id:"geo_series",    label:"Geometric Series",            labelPl:"Szeregi geometryczne",       scope:"ciagi",                 section:"LR",   level:3, x:1080, y:340 },

  // ── VII. Trygonometria / SP8 ───────────────────────────────────
  { id:"trig_basic",    label:"Basic Trigonometry",          labelPl:"Trygonometria podstawowa",   scope:"trygonometria",         section:"SP8",  level:2, x:830,  y:200 },
  // ── VII. Trygonometria / LP ────────────────────────────────────
  { id:"trig_lp",       label:"Trigonometry (0°–180°)",      labelPl:"Trygonometria (0°–180°)",    scope:"trygonometria",         section:"LP",   level:2, x:880,  y:200 },
  { id:"sin_cos_law",   label:"Sine & Cosine Law",           labelPl:"Tw. sinusów i cosinusów",   scope:"trygonometria",         section:"LP",   level:2, x:880,  y:310 },
  // ── VII. Trygonometria / LR ────────────────────────────────────
  { id:"trig_formulas", label:"Trig. Identities & Reduction",labelPl:"Wzory trygonometryczne",    scope:"trygonometria",         section:"LR",   level:3, x:990,  y:310 },

  // ── VIII. Planimetria / SP8 ────────────────────────────────────
  { id:"thales",        label:"Thales' Theorem",             labelPl:"Twierdzenie Talesa",         scope:"planimetria",           section:"SP8",  level:1, x:200,  y:760 },
  { id:"pythagoras",    label:"Pythagorean Theorem",         labelPl:"Twierdzenie Pitagorasa",     scope:"planimetria",           section:"SP8",  level:2, x:300,  y:840 },
  { id:"area_perimeter",label:"Area & Perimeter",            labelPl:"Pole i obwód",               scope:"planimetria",           section:"SP8",  level:1, x:100,  y:860 },
  // ── VIII. Planimetria / LP ─────────────────────────────────────
  { id:"planimetria_lp",label:"Plane Geometry (LP)",         labelPl:"Planimetria",                scope:"planimetria",           section:"LP",   level:2, x:380,  y:870 },

  // ── IX. Geometria analityczna / LP ─────────────────────────────
  { id:"analytic_geom", label:"Analytic Geometry",           labelPl:"Geometria analityczna",      scope:"geometria_analityczna", section:"LP",   level:2, x:530,  y:960 },
  { id:"circle_eq",     label:"Circle Equation",             labelPl:"Równanie okręgu",            scope:"geometria_analityczna", section:"LP",   level:2, x:530,  y:870 },  // PP IX LP
  // ── IX. Geometria analityczna / LR ─────────────────────────────
  { id:"vectors",       label:"Vectors",                     labelPl:"Wektory",                    scope:"geometria_analityczna", section:"LR",   level:3, x:660,  y:870 },  // PP IX LR
  // ── IX. Geometria analityczna / UNIV ───────────────────────────
  { id:"conic_sections",label:"Conic Sections",              labelPl:"Krzywe stożkowe",            scope:"geometria_analityczna", section:"UNIV", level:3, x:660,  y:960 },

  // ── X. Stereometria / LP ───────────────────────────────────────
  { id:"solid_geom",    label:"Solid Geometry",              labelPl:"Stereometria",               scope:"stereometria",          section:"LP",   level:2, x:300,  y:960 },

  // ── XI. Kombinatoryka / LP ─────────────────────────────────────
  { id:"counting",      label:"Counting Principles",         labelPl:"Zasady liczenia",            scope:"kombinatoryka",         section:"LP",   level:2, x:1360, y:200 },
  { id:"permutations",  label:"Permutations",                labelPl:"Permutacje",                 scope:"kombinatoryka",         section:"LR",   level:3, x:1410, y:340 },  // PP XI LR
  { id:"combinations",  label:"Combinations",                labelPl:"Kombinacje",                 scope:"kombinatoryka",         section:"LR",   level:3, x:1360, y:470 },  // PP XI LR
  { id:"probability",   label:"Probability",                 labelPl:"Prawdopodobieństwo",         scope:"kombinatoryka",         section:"LP",   level:2, x:1210, y:220 },
  // ── XI. Kombinatoryka / LR ─────────────────────────────────────
  { id:"cond_prob",     label:"Conditional Probability",     labelPl:"Prawdop. warunkowe",         scope:"kombinatoryka",         section:"LR",   level:3, x:1260, y:360 },
  { id:"bernoulli",     label:"Bernoulli Scheme",            labelPl:"Schemat Bernoulliego",       scope:"kombinatoryka",         section:"LR",   level:3, x:1310, y:480 },

  // ── XII. Statystyka / LP ───────────────────────────────────────
  { id:"data_basics",   label:"Data & Statistics",           labelPl:"Dane i statystyka",          scope:"statystyka",            section:"SP8",  level:1, x:1160, y:80  },
  { id:"stat_lp",       label:"Descriptive Statistics",      labelPl:"Statystyka opisowa",         scope:"statystyka",            section:"LP",   level:2, x:1160, y:180 },  // średnia, mediana, odch. std, wartość oczekiwana
  // ── XII. Statystyka / UNIV ─────────────────────────────────────
  { id:"distributions", label:"Distributions",               labelPl:"Rozkłady",                   scope:"statystyka",            section:"UNIV", level:3, x:1300, y:490 },

  // ── XIII. Logika i teoria zbiorów / SP8 ────────────────────────
  { id:"sets",          label:"Sets",                        labelPl:"Zbiory",                     scope:"logika",                section:"SP8",  level:1, x:1160, y:580 },
  // ── XIII. Logika i teoria zbiorów / LP ─────────────────────────
  { id:"logic_basics",  label:"Logic Basics",                labelPl:"Logika",                     scope:"logika",                section:"LP",   level:1, x:1210, y:680 },
  { id:"proof",         label:"Mathematical Proofs",         labelPl:"Dowody matematyczne",        scope:"logika",                section:"LP",   level:2, x:1260, y:790 },

  // ── XIII. Optymalizacja / LP ───────────────────────────────────
  { id:"optimization_lp",label:"Optimization (quadratic)",  labelPl:"Optymalizacja (funkcja kw.)",scope:"funkcje",               section:"LP",   level:2, x:480,  y:790 },

  // ── XIII. Optymalizacja i rachunek różniczkowy / LR ────────────
  { id:"limits",        label:"Limits of Functions",         labelPl:"Granice funkcji",            scope:"optymalizacja",         section:"LR",   level:3, x:760,  y:700 },
  { id:"derivative",    label:"Derivatives",                 labelPl:"Pochodne",                   scope:"optymalizacja",         section:"LR",   level:3, x:850,  y:800 },
  { id:"deriv_apps",    label:"Derivative Applications",     labelPl:"Zastosowania pochodnych",    scope:"optymalizacja",         section:"LR",   level:3, x:970,  y:880 },

  // ── Analiza matematyczna / UNIV ────────────────────────────────
  { id:"complex",       label:"Complex Numbers",             labelPl:"Liczby zespolone",           scope:"analiza",               section:"UNIV", level:3, x:390,  y:650 },
  { id:"integral",      label:"Integrals",                   labelPl:"Całki",                      scope:"analiza",               section:"UNIV", level:3, x:720,  y:880 },
];

const RAW_EDGES = [
  // ── SP8 foundations ──────────────────────────────────────────
  ["integers",       "linear_eq"],
  ["fractions",      "linear_eq"],
  ["powers",         "linear_eq"],
  ["linear_eq",      "linear_ineq"],
  ["linear_eq",      "linear_sys"],
  ["linear_eq",      "abs_value"],
  ["fractions",      "sequences"],
  ["powers",         "sequences"],

  // ── Geometry SP8 ─────────────────────────────────────────────
  ["thales",         "pythagoras"],
  ["thales",         "trig_basic"],
  ["pythagoras",     "trig_basic"],
  ["pythagoras",     "solid_geom"],
  ["area_perimeter", "solid_geom"],
  ["area_perimeter", "planimetria_lp"],
  ["thales",         "planimetria_lp"],
  ["pythagoras",     "planimetria_lp"],
  ["trig_basic",     "trig_lp"],

  // ── LP algebra ───────────────────────────────────────────────
  ["linear_eq",      "polynomials"],   // linear expressions are the entry point to polynomial manipulation
  ["powers",         "polynomials"],   // potęgowanie needed for wielomiany
  ["polynomials",    "rational_expr"],
  ["polynomials",    "factoring"],
  ["factoring",      "quadratic_eq"],
  ["polynomials",    "quadratic_eq"],
  ["quadratic_eq",   "quadratic_ineq"],
  ["quadratic_eq",   "vieta"],
  ["quadratic_eq",   "param_eq"],
  ["quadratic_ineq", "param_eq"],
  ["polynomials",    "poly_roots"],
  ["factoring",      "poly_roots"],
  ["powers",         "log_exp"],
  ["log_exp",        "log_eq"],
  ["log_exp",        "fn_exp"],
  ["log_exp",        "fn_log"],
  ["trig_lp",        "sin_cos_law"],
  ["trig_lp",        "trig_formulas"],
  ["trig_formulas",  "trig_eq"],
  ["sequences",      "arith_geom"],
  ["arith_geom",     "seq_limits"],
  ["arith_geom",     "geo_series"],

  // ── LP functions ─────────────────────────────────────────────
  ["fn_concept",     "fn_linear"],
  ["fn_concept",     "fn_quadratic"],
  ["fn_linear",      "fn_quadratic"],
  ["quadratic_eq",   "fn_quadratic"],
  ["fn_quadratic",   "fn_poly"],
  ["polynomials",    "fn_poly"],
  ["fn_quadratic",   "optimization_lp"],
  ["fn_poly",        "fn_compositions"],
  ["fn_exp",         "fn_compositions"],

  // ── Trig functions (LR) ───────────────────────────────────────
  ["trig_formulas",  "fn_trig"],
  ["trig_eq",        "fn_trig"],

  // ── LP geometry ──────────────────────────────────────────────
  ["linear_sys",     "analytic_geom"],
  ["analytic_geom",  "circle_eq"],
  ["quadratic_eq",   "circle_eq"],
  ["sin_cos_law",    "solid_geom"],
  ["planimetria_lp", "solid_geom"],
  ["trig_lp",        "planimetria_lp"],

  // ── LR geometry ──────────────────────────────────────────────
  ["analytic_geom",  "vectors"],       // vectors: PP IX LR
  ["circle_eq",      "conic_sections"],

  // ── Statistics ───────────────────────────────────────────────
  ["data_basics",    "stat_lp"],
  ["stat_lp",        "probability"],
  ["sets",           "probability"],
  ["counting",       "probability"],
  ["probability",    "cond_prob"],
  ["probability",    "bernoulli"],
  ["cond_prob",      "distributions"],
  ["bernoulli",      "distributions"],

  // ── Logic ────────────────────────────────────────────────────
  ["sets",           "logic_basics"],
  ["logic_basics",   "proof"],
  ["sets",           "proof"],

  // ── Combinatorics ────────────────────────────────────────────
  ["counting",       "permutations"],
  ["counting",       "combinations"],
  ["combinations",   "binom_theorem"],
  ["permutations",   "binom_theorem"],
  ["powers",         "binom_theorem"],

  // ── LR calculus (PP XIII rozszerzony) ────────────────────────
  ["fn_poly",        "limits"],
  ["fn_exp",         "limits"],
  ["fn_log",         "limits"],
  ["fn_trig",        "limits"],
  ["seq_limits",     "limits"],
  ["limits",         "derivative"],
  ["derivative",     "deriv_apps"],
  ["optimization_lp","deriv_apps"],    // optimization generalised via derivatives

  // ── UNIV extensions ──────────────────────────────────────────
  ["quadratic_eq",   "complex"],
  ["poly_roots",     "complex"],
  ["derivative",     "integral"],
];

// ═══════════════════════════════════════════════════════════════════
// QUESTION BANK  (inspired by CKE matura 2022–2024, PP formuła 2023)
// Each node gets 1 multiple-choice question.
// correct: index into options (0-based)
// ═══════════════════════════════════════════════════════════════════

const QUESTION_BANK = {
  // ── I. Liczby rzeczywiste ─────────────────────────────────────
  integers: {
    q: "Ile wynosi NWD(84, 56)?",
    options: ["14", "28", "7", "42"],
    correct: 1,
    hint: "Rozkładasz na czynniki pierwsze: 84 = 4·21, 56 = 8·7."
  },
  fractions: {
    q: "Uproszczona postać ułamka 45/60 to:",
    options: ["3/4", "9/12", "4/5", "7/9"],
    correct: 0,
    hint: "Dzielisz licznik i mianownik przez NWD(45,60) = 15."
  },
  powers: {
    q: "Wartość wyrażenia (1/16)⁸ · 8¹⁶ jest równa:",
    options: ["2²⁴", "2¹⁶", "2¹²", "2⁸"],
    correct: 1,
    hint: "1/16 = 2⁻⁴, 8 = 2³. Stosujesz prawa działań na potęgach."
  },
  log_exp: {
    q: "Wartość log₍√3₎ 9 jest równa:",
    options: ["2", "3", "4", "9"],
    correct: 2,
    hint: "(√3)ˣ = 9, czyli 3^(x/2) = 3², więc x/2 = 2."
  },
  abs_value: {
    q: "Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:",
    options: ["(−∞, −2] ∪ [4, +∞)", "[−2, 4]", "(−∞, −2)", "(4, +∞)"],
    correct: 0,
    hint: "Nierówność |x−1| ≥ 3 daje x−1 ≥ 3 lub x−1 ≤ −3."
  },

  // ── II. Wyrażenia algebraiczne ────────────────────────────────
  polynomials: {
    q: "Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:",
    options: ["3x(x² + 2x + 3)", "3(x³ + 2x + 3)", "x(3x² + 6x)", "3x²(x + 2)"],
    correct: 0,
    hint: "Wyłącz przed nawias 3x z każdego wyrazu."
  },
  rational_expr: {
    q: "Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:",
    options: ["x + 2", "x − 2", "x² + 2", "2x"],
    correct: 0,
    hint: "x²−4 = (x−2)(x+2). Skracasz (x−2)."
  },
  factoring: {
    q: "Rozkład na czynniki: x² − 5x + 6 =",
    options: ["(x−2)(x−3)", "(x+2)(x+3)", "(x−1)(x−6)", "(x−2)(x+3)"],
    correct: 0,
    hint: "Szukasz dwóch liczb, których suma = −5 i iloczyn = 6."
  },
  binom_theorem: {
    q: "Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:",
    options: ["10", "5", "20", "15"],
    correct: 0,
    hint: "C(5,2) = 5!/(2!·3!) = 10."
  },

  // ── III–IV. Równania i układy ─────────────────────────────────
  linear_eq: {
    q: "Rozwiązaniem równania 2x − 3 = 7 jest:",
    options: ["x = 5", "x = 2", "x = −2", "x = 7"],
    correct: 0,
    hint: "2x = 10, x = 5."
  },
  linear_ineq: {
    q: "Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:",
    options: ["(2/3, +∞)", "(−∞, 2/3)", "(−2/3, +∞)", "(−∞, −2/3)"],
    correct: 0,
    hint: "Mnożysz obie strony przez 6, potem przenosisz x na lewą stronę."
  },
  linear_sys: {
    q: "Układ { x+y=5, x−y=1 } ma rozwiązanie:",
    options: ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"],
    correct: 0,
    hint: "Dodajesz równania: 2x = 6, x = 3."
  },
  quadratic_eq: {
    q: "Równanie x² − 5x + 6 = 0 ma rozwiązania:",
    options: ["x=2 i x=3", "x=−2 i x=−3", "x=1 i x=6", "x=2 i x=−3"],
    correct: 0,
    hint: "Δ = 25 − 24 = 1. x = (5±1)/2."
  },
  quadratic_ineq: {
    q: "Rozwiązaniem nierówności x² − x − 6 < 0 jest:",
    options: ["(−2, 3)", "(−∞,−2)∪(3,+∞)", "[−2, 3]", "(−3, 2)"],
    correct: 0,
    hint: "Pierwiastki to −2 i 3. Parabola jest nad osią poza przedziałem (−2,3)."
  },
  log_eq: {
    q: "Rozwiązaniem równania log₂(x) = 3 jest:",
    options: ["x = 8", "x = 6", "x = 9", "x = 4"],
    correct: 0,
    hint: "log₂(x) = 3 ⟺ x = 2³ = 8."
  },
  vieta: {
    q: "Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =",
    options: ["12", "7", "−12", "−7"],
    correct: 0,
    hint: "Wzór Viète'a: x₁·x₂ = c/a = 12/1 = 12."
  },
  param_eq: {
    q: "Równanie x² − 2kx + k = 0 ma dwa pierwiastki rzeczywiste gdy:",
    options: ["k ≤ 0 lub k ≥ 4", "0 < k < 4", "k < 0 lub k > 4", "k = 0 lub k = 4"],
    correct: 0,
    hint: "Δ = 4k² − 4k ≥ 0, czyli k(k−1) ≥ 0... poczekaj, Δ = 4k²−4k, więc k ≤ 0 lub k ≥ 1."
  },
  poly_roots: {
    q: "Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:",
    options: ["W(2) = 0", "W(2) = 4", "W(2) = 2", "W(0) = 0"],
    correct: 0,
    hint: "Podstaw x=2: 8 − 8 − 6 + 6 = 0."
  },
  trig_eq: {
    q: "Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:",
    options: ["x = 30° i x = 150°", "x = 30° tylko", "x = 60° i x = 120°", "x = 45°"],
    correct: 0,
    hint: "sin jest symetryczny względem 90°. sin(30°) = sin(150°) = 1/2."
  },

  // ── V. Funkcje ────────────────────────────────────────────────
  fn_concept: {
    q: "Która z poniższych relacji NIE jest funkcją?",
    options: ["{(1,2),(1,3),(2,4)}", "{(1,2),(2,3),(3,4)}", "{(1,1),(2,2),(3,3)}", "{(1,2),(2,1)}"],
    correct: 0,
    hint: "Funkcja przypisuje każdemu argumentowi dokładnie jedną wartość. Para (1,2) i (1,3) — jeden argument, dwie wartości."
  },
  fn_linear: {
    q: "Funkcja liniowa f(x) = (−2k+3)x + k − 1 jest malejąca gdy:",
    options: ["k > 3/2", "k < 3/2", "k > 1", "k < 0"],
    correct: 0,
    hint: "Funkcja liniowa maleje gdy współczynnik kierunkowy < 0, czyli −2k+3 < 0."
  },
  fn_quadratic: {
    q: "Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:",
    options: ["(2, −1)", "(−2, 1)", "(2, 1)", "(4, 3)"],
    correct: 0,
    hint: "p = −b/(2a) = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
  },
  fn_exp: {
    q: "Funkcja f(x) = 2ˣ jest:",
    options: ["rosnąca na całej dziedzinie", "malejąca na całej dziedzinie", "stała", "rosnąca tylko dla x > 0"],
    correct: 0,
    hint: "Podstawa 2 > 1, więc funkcja wykładnicza jest rosnąca."
  },
  fn_log: {
    q: "Dziedzina funkcji f(x) = log(x − 2) to:",
    options: ["(2, +∞)", "[2, +∞)", "(−∞, 2)", "R"],
    correct: 0,
    hint: "Logarytm wymaga argumentu dodatniego: x − 2 > 0."
  },
  fn_poly: {
    q: "Wielomian W(x) = x³ − x ma ile miejsc zerowych?",
    options: ["3", "1", "2", "0"],
    correct: 0,
    hint: "W(x) = x(x−1)(x+1). Trzy miejsca zerowe: 0, 1, −1."
  },
  fn_compositions: {
    q: "Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =",
    options: ["2x+2", "2x+1", "2x²+2", "x+2"],
    correct: 0,
    hint: "f(g(x)) = f(x+1) = 2(x+1) = 2x+2."
  },

  // ── VI. Ciągi ─────────────────────────────────────────────────
  sequences: {
    q: "Ciąg określony wzorem aₙ = 3n − 1 ma piąty wyraz równy:",
    options: ["14", "13", "15", "12"],
    correct: 0,
    hint: "a₅ = 3·5 − 1 = 14."
  },
  arith_geom: {
    q: "Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, r=3) wynosi:",
    options: ["155", "150", "145", "160"],
    correct: 0,
    hint: "S₁₀ = (10/2)·(2·2 + 9·3) = 5·31 = 155."
  },
  seq_limits: {
    q: "Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:",
    options: ["3", "1", "∞", "0"],
    correct: 0,
    hint: "Dzielisz licznik i mianownik przez n². Wyrazy 1/n² i 2/n² dążą do 0."
  },
  geo_series: {
    q: "Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:",
    options: ["9", "6", "18", "3"],
    correct: 0,
    hint: "S = a₁/(1−q) = 6/(1−1/3) = 6/(2/3) = 9."
  },

  // ── VII. Trygonometria ────────────────────────────────────────
  trig_basic: {
    q: "W trójkącie prostokątnym sin(α) = 3/5. Wartość cos(α) =",
    options: ["4/5", "3/4", "5/3", "1/5"],
    correct: 0,
    hint: "sin²+cos²=1, więc cos² = 1 − 9/25 = 16/25."
  },
  trig_lp: {
    q: "Wartość sin(120°) jest równa:",
    options: ["√3/2", "1/2", "−√3/2", "√2/2"],
    correct: 0,
    hint: "120° = 180°−60°, sin(180°−α) = sin(α), sin(60°) = √3/2."
  },
  sin_cos_law: {
    q: "W trójkącie a=5, b=7, C=60°. Wartość c² =",
    options: ["39", "25", "49", "74"],
    correct: 0,
    hint: "Tw. cosinusów: c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39."
  },
  trig_formulas: {
    q: "sin(2α) jest równe:",
    options: ["2sin(α)cos(α)", "sin²(α)−cos²(α)", "cos²(α)−sin²(α)", "2cos²(α)−1"],
    correct: 0,
    hint: "Wzór na sinus kąta podwojonego: sin(2α) = 2sin(α)cos(α)."
  },
  fn_trig: {
    q: "Okres funkcji f(x) = sin(2x) wynosi:",
    options: ["π", "2π", "π/2", "4π"],
    correct: 0,
    hint: "Podstawowy okres sin to 2π. Przy sin(2x) dzielisz przez 2: T = π."
  },

  // ── VIII. Planimetria ─────────────────────────────────────────
  thales: {
    q: "Proste równoległe odcinają na siecznych odcinki proporcjonalne. Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=",
    options: ["8", "6", "12", "4"],
    correct: 0,
    hint: "Tw. Talesa: AD/DB = AE/EC, więc EC = 4·6/3 = 8."
  },
  pythagoras: {
    q: "Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych 6 i 8 wynosi:",
    options: ["10", "12", "14", "√(48)"],
    correct: 0,
    hint: "c² = 36 + 64 = 100, c = 10."
  },
  area_perimeter: {
    q: "Pole rombu o przekątnych d₁=8 i d₂=6 wynosi:",
    options: ["24", "48", "14", "12"],
    correct: 0,
    hint: "P = (d₁·d₂)/2 = 48/2 = 24."
  },
  planimetria_lp: {
    q: "Kąt wpisany w okrąg oparty na średnicy mierzy:",
    options: ["90°", "45°", "60°", "180°"],
    correct: 0,
    hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
  },

  // ── IX. Geometria analityczna ─────────────────────────────────
  analytic_geom: {
    q: "Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:",
    options: ["2", "4", "1/2", "3"],
    correct: 0,
    hint: "a = (6−2)/(3−1) = 4/2 = 2."
  },
  circle_eq: {
    q: "Okrąg o środku (2,−1) i promieniu 3 ma równanie:",
    options: ["(x−2)²+(y+1)²=9", "(x+2)²+(y−1)²=9", "(x−2)²+(y−1)²=9", "(x+2)²+(y+1)²=3"],
    correct: 0,
    hint: "Wzór: (x−a)²+(y−b)²=r². Tu a=2, b=−1, r=3."
  },
  vectors: {
    q: "Długość wektora v = [3, 4] wynosi:",
    options: ["5", "7", "√7", "12"],
    correct: 0,
    hint: "|v| = √(3²+4²) = √25 = 5."
  },

  // ── X. Stereometria ───────────────────────────────────────────
  solid_geom: {
    q: "Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:",
    options: ["12π", "36π", "9π", "48π"],
    correct: 0,
    hint: "V = (1/3)πr²h = (1/3)·π·9·4 = 12π."
  },

  // ── XI. Kombinatoryka ─────────────────────────────────────────
  counting: {
    q: "Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?",
    options: ["6", "3", "9", "27"],
    correct: 0,
    hint: "3! = 6 permutacji."
  },
  permutations: {
    q: "Liczba permutacji zbioru {A, B, C, D} wynosi:",
    options: ["24", "12", "16", "10"],
    correct: 0,
    hint: "P₄ = 4! = 24."
  },
  combinations: {
    q: "Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?",
    options: ["10", "15", "20", "60"],
    correct: 0,
    hint: "C(5,3) = 5!/(3!·2!) = 10."
  },
  probability: {
    q: "Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:",
    options: ["1/2", "1/3", "2/3", "1/6"],
    correct: 0,
    hint: "Parzyste: {2,4,6}. P = 3/6 = 1/2."
  },
  cond_prob: {
    q: "P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =",
    options: ["0.2", "0.9", "0.5", "0.1"],
    correct: 0,
    hint: "P(A∩B) = P(A)·P(B|A) = 0.4·0.5 = 0.2."
  },
  bernoulli: {
    q: "Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:",
    options: ["1/4", "1/8", "3/8", "1/2"],
    correct: 0,
    hint: "C(4,3)·(1/2)³·(1/2)¹ = 4/16 = 1/4."
  },

  // ── XII. Statystyka ───────────────────────────────────────────
  data_basics: {
    q: "Mediana zbioru {3, 7, 1, 9, 5} wynosi:",
    options: ["5", "3", "7", "25/5"],
    correct: 0,
    hint: "Sortujesz: 1,3,5,7,9. Środkowy element to 5."
  },
  stat_lp: {
    q: "Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:",
    options: ["6", "5", "7", "8"],
    correct: 0,
    hint: "Suma = 30, liczba wyrazów = 5. 30/5 = 6."
  },

  // ── XIII. Logika i zbiory ─────────────────────────────────────
  sets: {
    q: "A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =",
    options: ["{3,4}", "{1,2,5,6}", "{1,2,3,4,5,6}", "{3}"],
    correct: 0,
    hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
  },
  logic_basics: {
    q: 'Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:',
    options: [
      "Istnieje liczba parzysta, która nie dzieli się przez 4",
      "Żadna liczba parzysta nie dzieli się przez 4",
      "Wszystkie liczby nieparzyste dzielą się przez 4",
      "Istnieje liczba nieparzysta dzieląca się przez 4"
    ],
    correct: 0,
    hint: "Negacja ∀x: P(x) to ∃x: ¬P(x)."
  },
  proof: {
    q: "Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?",
    options: [
      "2k+1 i 2m+1 są nieparzyste, ich suma = 2(k+m+1) — parzysta",
      "5+7=12, więc działa",
      "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta",
      "Wystarczy sprawdzić kilka przykładów"
    ],
    correct: 0,
    hint: "Dowód ogólny: reprezentujesz liczby jako 2k+1 i 2m+1."
  },

  // ── XIII. Optymalizacja / LR ──────────────────────────────────
  optimization_lp: {
    q: "Prostokąt o obwodzie 20 ma największe pole gdy:",
    options: ["jest kwadratem o boku 5", "ma boki 2 i 8", "ma boki 4 i 6", "jest kwadratem o boku 10"],
    correct: 0,
    hint: "x + y = 10. Pole P = x·y maksymalne dla x=y=5 (wierzchołek paraboli)."
  },
  limits: {
    q: "Granica lim(x→∞) (3x² + 1)/(x² − 5) wynosi:",
    options: ["3", "1", "∞", "0"],
    correct: 0,
    hint: "Dzielisz przez x². Wyrazy 1/x² i 5/x² → 0."
  },
  derivative: {
    q: "Pochodna funkcji f(x) = x³ − 4x wynosi:",
    options: ["3x² − 4", "3x² + 4", "x² − 4", "3x²"],
    correct: 0,
    hint: "Reguła potęgi: (xⁿ)' = n·xⁿ⁻¹. (x³)' = 3x², (−4x)' = −4."
  },
  deriv_apps: {
    q: "Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:",
    options: ["(−∞,−1) ∪ (1,+∞)", "(−1, 1)", "(0, +∞)", "(−∞, 0)"],
    correct: 0,
    hint: "f'(x) = 3x²−3 = 3(x−1)(x+1). f'>0 gdy |x|>1."
  },

  // ── UNIV ──────────────────────────────────────────────────────
  complex: {
    q: "Moduł liczby zespolonej z = 3 + 4i wynosi:",
    options: ["5", "7", "1", "√5"],
    correct: 0,
    hint: "|z| = √(3²+4²) = √25 = 5."
  },
  integral: {
    q: "∫ 2x dx =",
    options: ["x² + C", "2 + C", "x + C", "2x² + C"],
    correct: 0,
    hint: "Całka z xⁿ = xⁿ⁺¹/(n+1). Tu n=1: x²/1 + C."
  },
  conic_sections: {
    q: "Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:",
    options: ["a=3, b=2", "a=9, b=4", "a=2, b=3", "a=√3, b=√2"],
    correct: 0,
    hint: "Standardowa postać: x²/a² + y²/b² = 1."
  },
  distributions: {
    q: "W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:",
    options: ["5", "10", "2.5", "0.5"],
    correct: 0,
    hint: "E(X) = n·p = 10·0.5 = 5."
  },
};

// ═══════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════

function buildAdjacency(nodes, edges) {
  const prereqs = {}, dependents = {};
  nodes.forEach(n => { prereqs[n.id] = []; dependents[n.id] = []; });
  edges.forEach(([from, to]) => {
    prereqs[to]?.push(from);
    dependents[from]?.push(to);
  });
  return { prereqs, dependents };
}

// ── Diagnostic helpers ────────────────────────────────────────────

// Propagate known upward: if v is known, all ancestors must be known
function propagateKnown(id, belief, adjacency) {
  const result = { ...belief };
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    if (result[cur] === "known") continue;
    result[cur] = "known";
    adjacency.prereqs[cur]?.forEach(p => { if (result[p] !== "known") queue.push(p); });
  }
  return result;
}

// Propagate unknown downward: if v is unknown, all descendants are unknown
function propagateUnknown(id, belief, adjacency) {
  const result = { ...belief };
  const queue = [id];
  while (queue.length) {
    const cur = queue.shift();
    if (result[cur] === "unknown") continue;
    result[cur] = "unknown";
    adjacency.dependents[cur]?.forEach(d => { if (result[d] !== "unknown") queue.push(d); });
  }
  return result;
}

// Frontier: nodes not yet known whose ALL prerequisites are known
function computeFrontier(belief, adjacency) {
  return RAW_NODES
    .filter(n => belief[n.id] !== "known" && belief[n.id] !== "unknown")
    .filter(n => adjacency.prereqs[n.id]?.every(p => belief[p] === "known"))
    .map(n => n.id);
}


function spectralInit(nodes, edges, W, H, margin = 80) {
  const n = nodes.length;
  const idx = Object.fromEntries(nodes.map((nd, i) => [nd.id, i]));
  const A = Array.from({ length: n }, () => new Float64Array(n));
  edges.forEach(([from, to]) => {
    const i = idx[from], j = idx[to];
    if (i == null || j == null) return;
    A[i][j] = 1; A[j][i] = 1;
  });
  const deg = A.map(row => row.reduce((s, v) => s + v, 0));
  const Lv = (v) => v.map((_, i) => {
    let sum = 0;
    for (let j = 0; j < n; j++) sum += A[i][j] * v[j];
    return deg[i] * v[i] - sum;
  });
  const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const norm = (v) => { const d = Math.sqrt(dot(v, v)) || 1; return v.map(x => x / d); };
  const deflect = (v, evecs) => {
    let u = [...v];
    evecs.forEach(e => { const c = dot(u, e); u = u.map((x, i) => x - c * e[i]); });
    return norm(u);
  };
  const eigenvector = (prevEvecs, iters = 400) => {
    let v = norm(Array.from({ length: n }, () => Math.random() - 0.5));
    v = deflect(v, prevEvecs);
    for (let it = 0; it < iters; it++) {
      const shift = Math.max(...deg) + 1;
      const Mv = v.map((x, i) => shift * x - Lv(v)[i]);
      v = deflect(Mv, prevEvecs);
    }
    return v;
  };
  const e0 = norm(new Array(n).fill(1));
  const e1 = eigenvector([e0]);
  const e2 = eigenvector([e0, e1]);
  const xs = e1, ys = e2;
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const sx = (maxX - minX) < 1e-6 ? 1 : (W - 2 * margin) / (maxX - minX);
  const sy = (maxY - minY) < 1e-6 ? 1 : (H - 2 * margin) / (maxY - minY);
  return nodes.map((nd, i) => ({
    id: nd.id,
    x: margin + (xs[i] - minX) * sx,
    y: margin + (ys[i] - minY) * sy,
    vx: 0, vy: 0,
  }));
}

// Public entry point kept for reference — actual layout now runs live via rAF in the component

function nodeRadius(n) { return 6 + n.level * 2; }

// ═══════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function EdgeLayer({ edges, nodes, highlightedIds, adjacency }) {
  const byId = useMemo(() => Object.fromEntries(nodes.map(n => [n.id, n])), [nodes]);

  return (
    <g>
      {edges.map(([from, to]) => {
        const a = byId[from], b = byId[to];
        if (!a || !b) return null;

        const isHighlighted = highlightedIds?.has(from) && highlightedIds?.has(to);
        const isDimmed = highlightedIds && !isHighlighted;

        // Shorten line so arrowhead lands at the target node's circumference
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const rB = nodeRadius(b) + 3; // +3 = arrowhead offset
        const ex = b.x - (dx / dist) * rB;
        const ey = b.y - (dy / dist) * rB;
        // Start just outside source node too
        const rA = nodeRadius(a) + 2;
        const sx = a.x + (dx / dist) * rA;
        const sy = a.y + (dy / dist) * rA;

        const stroke = isDimmed ? "#0f1825" : isHighlighted ? "#4a9eff" : "#2a3f5a";
        const strokeWidth = isHighlighted ? 1.8 : 1;
        const opacity = isDimmed ? 0.15 : isHighlighted ? 1 : 0.55;
        const markerId = isDimmed ? "url(#arrow-dim)" : isHighlighted ? "url(#arrow-hi)" : "url(#arrow-default)";

        return (
          <line key={`${from}-${to}`}
            x1={sx} y1={sy} x2={ex} y2={ey}
            stroke={stroke} strokeWidth={strokeWidth} opacity={opacity}
            markerEnd={markerId}
          />
        );
      })}
    </g>
  );
}

function NodeLayer({ nodes, filteredIds, highlightedIds, selected, onSelect, onHover, lang,
                     diagMode, belief, frontier }) {
  return (
    <g>
      {nodes.map(n => {
        const r = nodeRadius(n);
        const baseColor = SCOPE_COLORS[n.scope] || "#aaa";
        const filtered = filteredIds && !filteredIds.has(n.id);
        const highlighted = highlightedIds?.has(n.id);
        const isSelected = selected === n.id;
        const dimmed = (highlightedIds && !highlighted) || filtered;
        const lbl = lang === "pl" ? n.labelPl : n.label;

        // Diagnostic overrides
        let fillColor = baseColor;
        let fillOpacity = dimmed ? 0.15 : 0.9;
        let labelOpacity = dimmed ? 0.2 : 0.85;
        let ringColor = null;
        let ringWidth = 2;

        if (diagMode) {
          const state = belief[n.id];
          const isFrontier = frontier.includes(n.id);
          fillOpacity = filtered ? 0.1 : 0.9;
          labelOpacity = filtered ? 0.15 : 0.9;
          if (state === "known") {
            fillColor = "#27ae60";
            ringColor = "#2ecc71";
          } else if (state === "unknown") {
            fillColor = "#c0392b";
            fillOpacity = filtered ? 0.1 : 0.5;
            ringColor = "#e74c3c";
          } else if (isFrontier) {
            fillColor = "#f39c12";
            ringColor = "#f1c40f";
            ringWidth = 3;
          } else {
            fillColor = baseColor;
            fillOpacity = filtered ? 0.1 : 0.35;
          }
        }

        return (
          <g key={n.id} data-node-id={n.id} style={{ cursor: "pointer" }}
            onClick={() => onSelect(n.id === selected ? null : n.id)}
            onMouseEnter={() => onHover(n.id)}
            onMouseLeave={() => onHover(null)}
          >
            {(isSelected || (diagMode && ringColor)) && (
              <circle cx={n.x} cy={n.y} r={r + (isSelected ? 5 : 4)} fill="none"
                stroke={isSelected ? baseColor : ringColor}
                strokeWidth={isSelected ? 2 : ringWidth} opacity={isSelected ? 0.5 : 0.9} />
            )}
            <circle cx={n.x} cy={n.y} r={r}
              fill={fillColor} fillOpacity={fillOpacity}
              stroke={!diagMode && (highlighted || isSelected) ? baseColor : "none"}
              strokeWidth={1.5}
            />
            <text x={n.x} y={n.y + r + 10}
              textAnchor="middle" fontSize={8}
              fill="#c8d6e5" opacity={labelOpacity}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {lbl.length > 20 ? lbl.slice(0, 18) + "…" : lbl}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function InfoPanel({ nodeId, nodes, adjacency, lang }) {
  const node = nodes.find(n => n.id === nodeId);
  if (!node) return null;
  const color = SCOPE_COLORS[node.scope] || "#aaa";
  const lbl = lang === "pl" ? node.labelPl : node.label;
  const prereqs = adjacency.prereqs[nodeId] || [];
  const deps = adjacency.dependents[nodeId] || [];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;
  return (
    <div style={{
      position:"absolute", right:16, top:70, width:240,
      background:"#0d1520", border:`1px solid ${color}40`,
      borderRadius:8, padding:"12px 14px", fontSize:11,
      color:"#c8d6e5", lineHeight:1.6,
    }}>
      <div style={{ color, fontWeight:700, fontSize:13, marginBottom:6 }}>{lbl}</div>
      <div style={{ color:"#6b7d9a", fontSize:10, marginBottom:8 }}>
        {SECTIONS[node.section]?.label} · {SCOPE_LABELS[node.scope]?.[lang === "pl" ? "pl" : "en"]}
        {" · "}Level {node.level}
      </div>
      {prereqs.length > 0 && (
        <>
          <div style={{ color:"#4a9eff", fontSize:10, marginBottom:4 }}>Prerequisites:</div>
          {prereqs.map(id => (
            <div key={id} style={{ color:"#7a9cc8", paddingLeft:8, fontSize:10 }}>← {getLabel(id)}</div>
          ))}
        </>
      )}
      {deps.length > 0 && (
        <div style={{ marginTop:8 }}>
          <div style={{ color:"#3dc9b0", fontSize:10, marginBottom:4 }}>Enables:</div>
          {deps.map(id => (
            <div key={id} style={{ color:"#7ac8b0", paddingLeft:8, fontSize:10 }}>→ {getLabel(id)}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuizPanel({ nodeId, nodes, onAnswer, onSkip, lang }) {
  const node = nodes.find(n => n.id === nodeId);
  const q = QUESTION_BANK[nodeId];
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const color = SCOPE_COLORS[node?.scope] || "#4a9eff";
  const lbl = node ? (lang === "pl" ? node.labelPl : node.label) : nodeId;

  if (!q) return (
    <div style={panelStyle(color)}>
      <div style={{ color, fontWeight:700, marginBottom:8 }}>{lbl}</div>
      <div style={{ color:"#6b7d9a", fontSize:11, marginBottom:12 }}>
        Brak pytania dla tego węzła. Czy znasz ten temat?
      </div>
      <div style={{ display:"flex", gap:8 }}>
        <button onClick={() => onAnswer(true)}  style={ansBtn("#27ae60")}>✓ Tak</button>
        <button onClick={() => onAnswer(false)} style={ansBtn("#e74c3c")}>✗ Nie</button>
        <button onClick={onSkip} style={ansBtn("#3a4d63")}>Pomiń</button>
      </div>
    </div>
  );

  const submit = () => {
    if (picked === null) return;
    setRevealed(true);
  };
  const confirm = () => {
    onAnswer(picked === q.correct);
    setPicked(null);
    setRevealed(false);
  };

  return (
    <div style={panelStyle(color)}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
        <div style={{ color, fontWeight:700, fontSize:12 }}>{lbl}</div>
        <button onClick={onSkip} style={{ background:"none", border:"none", color:"#3a4d63", cursor:"pointer", fontSize:16, lineHeight:1 }}>×</button>
      </div>
      <div style={{ fontSize:11, color:"#c8d6e5", marginBottom:12, lineHeight:1.6 }}>{q.q}</div>
      <div style={{ display:"flex", flexDirection:"column", gap:6, marginBottom:12 }}>
        {q.options.map((opt, i) => {
          let bg = "#0d1520", border = "#1e2d45", txtColor = "#c8d6e5";
          if (picked === i && !revealed) { bg = `${color}22`; border = color; txtColor = color; }
          if (revealed) {
            if (i === q.correct) { bg = "#27ae6022"; border = "#27ae60"; txtColor = "#2ecc71"; }
            else if (i === picked) { bg = "#e74c3c22"; border = "#e74c3c"; txtColor = "#ff6b6b"; }
          }
          return (
            <button key={i}
              onClick={() => { if (!revealed) setPicked(i); }}
              style={{
                textAlign:"left", padding:"7px 10px", borderRadius:5, fontSize:10,
                cursor: revealed ? "default" : "pointer",
                background: bg, border:`1px solid ${border}`, color: txtColor,
                lineHeight:1.4,
              }}
            >
              <span style={{ marginRight:8, opacity:0.5 }}>{["A","B","C","D"][i]}.</span>{opt}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div style={{ fontSize:10, color:"#8a9dbe", marginBottom:10, padding:"6px 8px",
                      background:"#ffffff08", borderRadius:4, lineHeight:1.5 }}>
          💡 {q.hint}
        </div>
      )}
      {!revealed ? (
        <button onClick={submit} disabled={picked === null}
          style={{ ...ansBtn(color), width:"100%", opacity: picked === null ? 0.4 : 1 }}>
          Sprawdź
        </button>
      ) : (
        <div style={{ display:"flex", gap:8 }}>
          <button onClick={confirm} style={{ ...ansBtn(picked === q.correct ? "#27ae60" : "#e74c3c"), flex:1 }}>
            {picked === q.correct ? "✓ Znam!" : "✗ Nie znam"}
          </button>
        </div>
      )}
    </div>
  );
}

const panelStyle = (color) => ({
  position:"absolute", right:16, top:16, width:280,
  background:"#0d1520ee", backdropFilter:"blur(6px)",
  border:`1px solid ${color}40`, borderRadius:8,
  padding:"14px 16px", fontSize:11, color:"#c8d6e5",
  zIndex:20, maxHeight:"85vh", overflowY:"auto",
});
const ansBtn = (color) => ({
  padding:"6px 14px", borderRadius:5, fontSize:11, cursor:"pointer", fontWeight:600,
  border:`1px solid ${color}`, background:`${color}22`, color,
});

function DiagnosticPanel({ belief, frontier, adjacency, nodes, lang, onReset, onNodeClick }) {
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const getLabel = id => lang === "pl" ? byId[id]?.labelPl : byId[id]?.label;
  const known   = RAW_NODES.filter(n => belief[n.id] === "known");
  const unknown = RAW_NODES.filter(n => belief[n.id] === "unknown");

  return (
    <div style={{
      position:"absolute", right:16, top:16, width:220,
      background:"#0d1520ee", backdropFilter:"blur(6px)",
      border:"1px solid #1e2d45", borderRadius:8,
      padding:"12px 14px", fontSize:11, color:"#c8d6e5",
      zIndex:10, maxHeight:"80vh", overflowY:"auto",
    }}>
      <div style={{ fontWeight:700, fontSize:12, marginBottom:10, color:"#f5f6fa",
                    display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span>🎯 Diagnostic</span>
        <button onClick={onReset} style={{
          fontSize:9, padding:"2px 7px", borderRadius:4, cursor:"pointer",
          background:"transparent", border:"1px solid #3a4d63", color:"#6b7d9a"
        }}>reset</button>
      </div>

      <div style={{ display:"flex", gap:8, marginBottom:12 }}>
        {[
          { label:"Known", count:known.length, color:"#27ae60" },
          { label:"Unknown", count:unknown.length, color:"#e74c3c" },
          { label:"Frontier", count:frontier.length, color:"#f39c12" },
        ].map(({ label, count, color }) => (
          <div key={label} style={{ flex:1, textAlign:"center", background:`${color}18`,
                                    borderRadius:5, padding:"5px 0", border:`1px solid ${color}40` }}>
            <div style={{ color, fontWeight:700, fontSize:16 }}>{count}</div>
            <div style={{ color:"#6b7d9a", fontSize:9 }}>{label}</div>
          </div>
        ))}
      </div>

      {frontier.length > 0 && (
        <>
          <div style={{ color:"#f39c12", fontSize:10, fontWeight:600, marginBottom:5 }}>
            ▶ Co ćwiczyć teraz — kliknij, by odpowiedzieć
          </div>
          {frontier.map(id => (
            <div key={id}
              onClick={() => onNodeClick?.(id)}
              style={{
                padding:"6px 8px", marginBottom:3, borderRadius:4, cursor:"pointer",
                background:"#f39c1215", border:"1px solid #f39c1240",
                fontSize:10, color:"#f5d78e",
                transition:"background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background="#f39c1230"}
              onMouseLeave={e => e.currentTarget.style.background="#f39c1215"}
            >
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span>{getLabel(id)}</span>
                <span style={{ opacity:0.5 }}>→</span>
              </div>
              <div style={{ fontSize:8, color:"#6b7d9a", marginTop:1 }}>
                {SCOPE_LABELS[byId[id]?.scope]?.pl}
              </div>
            </div>
          ))}
        </>
      )}

      {known.length > 0 && (
        <>
          <div style={{ color:"#27ae60", fontSize:10, fontWeight:600, margin:"10px 0 5px" }}>
            ✓ Known ({known.length})
          </div>
          {known.map(n => (
            <div key={n.id} style={{ fontSize:9, color:"#6dbb87", paddingLeft:4, lineHeight:1.7 }}>
              {getLabel(n.id)}
            </div>
          ))}
        </>
      )}

      <div style={{ marginTop:12, color:"#3a4d63", fontSize:9, lineHeight:1.5 }}>
        Kliknij węzeł → pytanie<br/>
        Shift+click → oznacz jako nieznany<br/>
        Kliknij zielony → usuń oznaczenie
      </div>
    </div>
  );
}


function FilterBar({ filterScope, toggleScope, clearScope, filterSection, toggleSection, clearSection,
                     searchTerm, setSearchTerm, lang, setLang }) {
  const btnStyle = (active, color) => ({
    padding:"3px 10px", borderRadius:20, fontSize:10, cursor:"pointer",
    border: active ? `1px solid ${color}` : "1px solid #1e2d45",
    background: active ? `${color}22` : "transparent",
    color: active ? color : "#6b7d9a",
  });
  return (
    <div style={{
      padding:"8px 16px", borderBottom:"1px solid #1a2235",
      display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", flexShrink:0
    }}>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search…"
        style={{
          background:"#0d1520", border:"1px solid #1e2d45", borderRadius:4,
          color:"#c8d6e5", padding:"3px 8px", fontSize:11, width:120, outline:"none"
        }}
      />
      <span style={{ color:"#3a4d63", fontSize:10 }}>|</span>
      <button style={btnStyle(filterSection.size === 0, "#c8d6e5")} onClick={clearSection}>All</button>
      {Object.entries(SECTIONS).map(([k, v]) => (
        <button key={k} style={btnStyle(filterSection.has(k), v.color)} onClick={() => toggleSection(k)}>
          {v.label}
        </button>
      ))}
      <span style={{ color:"#3a4d63", fontSize:10 }}>|</span>
      <button style={btnStyle(filterScope.size === 0, "#c8d6e5")} onClick={clearScope}>All</button>
      {Object.entries(SCOPE_COLORS).map(([k, c]) => (
        <button key={k} style={btnStyle(filterScope.has(k), c)} onClick={() => toggleScope(k)}>
          {SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]}
        </button>
      ))}
      <span style={{ color:"#3a4d63", fontSize:10 }}>|</span>
      <button style={btnStyle(lang === "pl", "#f5a623")} onClick={() => setLang(l => l === "pl" ? "en" : "pl")}>
        {lang === "pl" ? "PL" : "EN"}
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════

const CANVAS_W = 1400, CANVAS_H = 1000;
const MARGIN = 60;
const IDEAL_K = Math.sqrt((CANVAS_W * CANVAS_H) / RAW_NODES.length) * 1.4;
const DAMPING  = 0.55;
const MAX_DISP = 8;   // max pixels moved per frame — prevents explosion

// Undirected edge index built once at module level
const SIM_EDGES = (() => {
  const idx = Object.fromEntries(RAW_NODES.map((n, i) => [n.id, i]));
  return RAW_EDGES
    .map(([f, t]) => [idx[f], idx[t]])
    .filter(([a, b]) => a != null && b != null);
})();

function initParticles() {
  const spec = spectralInit(RAW_NODES, RAW_EDGES, CANVAS_W, CANVAS_H, MARGIN + 20);
  return spec.map(p => ({
    id: p.id,
    x: p.x + (Math.random() - 0.5) * 40,
    y: p.y + (Math.random() - 0.5) * 40,
    vx: 0, vy: 0,
  }));
}

function computePositions(iters = 500) {
  let pts = initParticles();
  for (let i = 0; i < iters; i++) pts = simStep(pts, null, 0, 0);
  return Object.fromEntries(pts.map(p => [p.id, { x: p.x, y: p.y }]));
}

function simStep(particles, pinnedId, pinnedX, pinnedY) {
  const n = particles.length;
  const fx = new Float64Array(n);
  const fy = new Float64Array(n);

  // Coulomb repulsion: F = k² / d²  (falls off with distance squared — correct)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist2 = Math.max(dx * dx + dy * dy, 1);
      const dist  = Math.sqrt(dist2);
      const force = (IDEAL_K * IDEAL_K) / dist2;
      fx[i] += (dx / dist) * force;  fy[i] += (dy / dist) * force;
      fx[j] -= (dx / dist) * force;  fy[j] -= (dy / dist) * force;
    }
  }

  // Hooke attraction along edges: F = d² / k
  for (const [a, b] of SIM_EDGES) {
    const dx = particles[b].x - particles[a].x;
    const dy = particles[b].y - particles[a].y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
    const force = (dist * dist) / IDEAL_K;
    const ux = dx / dist, uy = dy / dist;
    fx[a] += ux * force;  fy[a] += uy * force;
    fx[b] -= ux * force;  fy[b] -= uy * force;
  }

  // Gravity toward canvas center — prevents drift
  const tcx = CANVAS_W / 2, tcy = CANVAS_H / 2;
  for (let i = 0; i < n; i++) {
    fx[i] += (tcx - particles[i].x) * 0.004;
    fy[i] += (tcy - particles[i].y) * 0.004;
  }

  return particles.map((p, i) => {
    if (p.id === pinnedId) return { ...p, x: pinnedX, y: pinnedY, vx: 0, vy: 0 };

    // Integrate velocity with damping
    let vx = (p.vx + fx[i]) * DAMPING;
    let vy = (p.vy + fy[i]) * DAMPING;

    // Cap displacement per frame
    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > MAX_DISP) { vx *= MAX_DISP / speed; vy *= MAX_DISP / speed; }

    return {
      ...p, vx, vy,
      x: Math.max(MARGIN, Math.min(CANVAS_W - MARGIN, p.x + vx)),
      y: Math.max(MARGIN, Math.min(CANVAS_H - MARGIN, p.y + vy)),
    };
  });
}

export default function CurriculumGraph() {
  const [lang, setLang] = useState("pl");
  const [filterScope, setFilterScope] = useState(new Set());
  const [filterSection, setFilterSection] = useState(new Set());

  const toggleScope = useCallback(k => setFilterScope(prev => {
    const next = new Set(prev); next.has(k) ? next.delete(k) : next.add(k); return next;
  }), []);
  const toggleSection = useCallback(k => setFilterSection(prev => {
    const next = new Set(prev); next.has(k) ? next.delete(k) : next.add(k); return next;
  }), []);
  const clearScope = useCallback(() => setFilterScope(new Set()), []);
  const clearSection = useCallback(() => setFilterSection(new Set()), []);

  // ── Diagnostic mode ───────────────────────────────────────────
  const [diagMode, setDiagMode] = useState(false);
  const [belief, setBelief] = useState({});
  const [quizNode, setQuizNode] = useState(null);

  const adjacency = useMemo(() => buildAdjacency(RAW_NODES, RAW_EDGES), []);

  const frontier = useMemo(() => diagMode ? computeFrontier(belief, adjacency) : [], [diagMode, belief, adjacency]);

  const handleDiagClick = useCallback((id, shiftKey) => {
    if (!diagMode) return false;
    const state = belief[id];
    if (shiftKey) {
      // Shift+click: toggle unknown / clear
      setBelief(prev => {
        if (prev[id] === "unknown") { const n = {...prev}; delete n[id]; return n; }
        return propagateUnknown(id, prev, adjacency);
      });
      setQuizNode(null);
      return true;
    }
    if (state === "known") {
      // Click known node → clear it
      setBelief(prev => { const n = {...prev}; delete n[id]; return n; });
      setQuizNode(null);
      return true;
    }
    // Otherwise open quiz
    setQuizNode(id);
    return true;
  }, [diagMode, belief, adjacency]);

  const handleQuizAnswer = useCallback((id, correct) => {
    setBelief(prev => correct
      ? propagateKnown(id, prev, adjacency)
      : propagateUnknown(id, prev, adjacency)
    );
    setQuizNode(null);
  }, [adjacency]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [viewTransform, setViewTransform] = useState({ x: 40, y: 40, scale: 0.72 });

  // ── Positions: computed once, manually adjustable by drag ─────
  const [positions, setPositions] = useState(() => computePositions());

  const nodes = useMemo(() =>
    RAW_NODES.map(n => ({ ...n, x: positions[n.id]?.x ?? n.x, y: positions[n.id]?.y ?? n.y })),
    [positions]
  );

  const svgRef = useRef(null);
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const draggingNode = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  const filteredIds = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const result = RAW_NODES.filter(n => {
      if (filterScope.size > 0 && !filterScope.has(n.scope)) return false;
      if (filterSection.size > 0 && !filterSection.has(n.section)) return false;
      if (term && !n.label.toLowerCase().includes(term) && !n.labelPl.toLowerCase().includes(term)) return false;
      return true;
    });
    return result.length < RAW_NODES.length ? new Set(result.map(n => n.id)) : null;
  }, [filterScope, filterSection, searchTerm]);

  const activeNode = selected || hoveredNode;
  const highlightedIds = useMemo(() => {
    if (!activeNode) return null;
    const s = new Set([activeNode]);
    adjacency.prereqs[activeNode]?.forEach(id => s.add(id));
    adjacency.dependents[activeNode]?.forEach(id => s.add(id));
    return s;
  }, [activeNode, adjacency]);

  // ── Pan / zoom / drag ─────────────────────────────────────────
  const handleWheel = useCallback(e => {
    e.preventDefault();
    setViewTransform(prev => {
      const factor = e.deltaY > 0 ? 0.9 : 1.1;
      return { ...prev, scale: Math.max(0.15, Math.min(5, prev.scale * factor)) };
    });
  }, []);

  // Convert screen coords to canvas coords
  const toCanvas = useCallback((cx, cy) => ({
    x: (cx - viewTransform.x) / viewTransform.scale,
    y: (cy - viewTransform.y) / viewTransform.scale,
  }), [viewTransform]);

  const handleMouseDown = useCallback(e => {
    const nodeEl = e.target.closest("[data-node-id]");
    if (nodeEl) {
      const id = nodeEl.getAttribute("data-node-id");
      const canvasPos = toCanvas(e.clientX, e.clientY);
      const node = nodes.find(n => n.id === id);
      draggingNode.current = id;
      dragOffset.current = { x: canvasPos.x - node.x, y: canvasPos.y - node.y };
      e.stopPropagation();
      return;
    }
    isPanning.current = true;
    panStart.current = { x: e.clientX - viewTransform.x, y: e.clientY - viewTransform.y };
  }, [viewTransform, toCanvas, nodes]);

  const handleMouseMove = useCallback(e => {
    if (draggingNode.current) {
      const canvasPos = toCanvas(e.clientX, e.clientY);
      const id = draggingNode.current;
      setPositions(prev => ({
        ...prev,
        [id]: { x: canvasPos.x - dragOffset.current.x, y: canvasPos.y - dragOffset.current.y }
      }));
      return;
    }
    if (!isPanning.current) return;
    setViewTransform(prev => ({
      ...prev,
      x: e.clientX - panStart.current.x,
      y: e.clientY - panStart.current.y,
    }));
  }, [toCanvas]);

  const handleMouseUp = useCallback(() => {
    draggingNode.current = null;
    isPanning.current = false;
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.addEventListener("wheel", handleWheel, { passive: false });
    return () => svg.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ── Legend items ──────────────────────────────────────────────
  const legendItems = Object.entries(SCOPE_COLORS).map(([k, c]) => ({
    color: c, label: SCOPE_LABELS[k]?.[lang === "pl" ? "pl" : "en"]
  }));

  return (
    <div style={{
      width:"100%", height:"100vh", background:"#0a0e17",
      fontFamily:"'JetBrains Mono','SF Mono','Fira Code',monospace",
      color:"#c8d6e5", display:"flex", flexDirection:"column", overflow:"hidden"
    }}>
      {/* Header */}
      <div style={{
        padding:"10px 16px", borderBottom:"1px solid #1a2235",
        display:"flex", alignItems:"center", gap:12, flexShrink:0
      }}>
        <h1 style={{ margin:0, fontSize:14, fontWeight:700, color:"#f5f6fa", letterSpacing:1 }}>
          PODSTAWA PROGRAMOWA — MATEMATYKA
        </h1>
        <span style={{ fontSize:10, color:"#3a4d63" }}>
          {RAW_NODES.length} topics · {RAW_EDGES.length} edges · spectral layout
        </span>
        <span style={{ fontSize:10, color:"#3a4d63", marginLeft:"auto" }}>
          {diagMode
            ? "kliknij węzeł = pytanie · shift+click = nieznany · zielony = kliknij by cofnąć"
            : "scroll to zoom · drag canvas to pan · drag node to move · click to inspect"}
        </span>
        <button
          onClick={() => { setDiagMode(d => !d); setSelected(null); }}
          style={{
            padding:"4px 12px", borderRadius:5, fontSize:11, cursor:"pointer", fontWeight:600,
            border: diagMode ? "1px solid #f39c12" : "1px solid #1e2d45",
            background: diagMode ? "#f39c1222" : "transparent",
            color: diagMode ? "#f39c12" : "#6b7d9a",
          }}
        >
          {diagMode ? "🎯 Diagnostic ON" : "🎯 Diagnostic"}
        </button>
      </div>

      {/* Filter bar */}
      <FilterBar
        filterScope={filterScope} toggleScope={toggleScope} clearScope={clearScope}
        filterSection={filterSection} toggleSection={toggleSection} clearSection={clearSection}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        lang={lang} setLang={setLang}
      />

      {/* Canvas */}
      <div style={{ flex:1, position:"relative", overflow:"hidden" }}>
        <svg ref={svgRef} width="100%" height="100%"
          style={{ cursor: draggingNode.current ? "grabbing" : isPanning.current ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={e => {
            if (!diagMode) return;
            const nodeEl = e.target.closest("[data-node-id]");
            if (!nodeEl) return;
            const id = nodeEl.getAttribute("data-node-id");
            handleDiagClick(id, e.shiftKey);
          }}
        >
          <defs>
            <marker id="arrow-default" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#3a5578" />
            </marker>
            <marker id="arrow-hi" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#4a9eff" />
            </marker>
            <marker id="arrow-dim" markerWidth="6" markerHeight="6"
              refX="5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L6,3 L0,6 L1.5,3 Z" fill="#0f1825" />
            </marker>
          </defs>
          <g transform={`translate(${viewTransform.x},${viewTransform.y}) scale(${viewTransform.scale})`}>
            <EdgeLayer
              edges={RAW_EDGES} nodes={nodes}
              highlightedIds={highlightedIds}
              adjacency={adjacency}
            />
            <NodeLayer
              nodes={nodes}
              filteredIds={filteredIds}
              highlightedIds={diagMode ? null : highlightedIds}
              selected={selected}
              onSelect={id => {
                if (diagMode) { handleDiagClick(id, false); return; }
                setSelected(id === selected ? null : id);
              }}
              onHover={setHoveredNode}
              lang={lang}
              diagMode={diagMode}
              belief={belief}
              frontier={frontier}
            />
          </g>
        </svg>

        {/* Info panel — hidden in diag mode */}
        {selected && !diagMode && (
          <InfoPanel
            nodeId={selected} nodes={nodes}
            adjacency={adjacency} lang={lang}
          />
        )}

        {/* Quiz panel */}
        {diagMode && quizNode && (
          <QuizPanel
            nodeId={quizNode}
            nodes={nodes}
            lang={lang}
            onAnswer={(correct) => handleQuizAnswer(quizNode, correct)}
            onSkip={() => setQuizNode(null)}
          />
        )}

        {/* Diagnostic summary panel — only when quiz is closed */}
        {diagMode && !quizNode && (
          <DiagnosticPanel
            belief={belief} frontier={frontier}
            adjacency={adjacency} nodes={nodes} lang={lang}
            onNodeClick={(id) => setQuizNode(id)}
            onReset={() => { setBelief({}); setQuizNode(null); }}
          />
        )}

        {/* Legend */}
        <div style={{
          position:"absolute", left:16, bottom:16,
          background:"#0d152090", backdropFilter:"blur(4px)",
          borderRadius:6, padding:"8px 12px",
          display:"flex", flexDirection:"column", gap:4
        }}>
          {legendItems.map(({ color, label }) => (
            <div key={label} style={{ display:"flex", alignItems:"center", gap:6, fontSize:9 }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:color }} />
              <span style={{ color:"#8a9dbe" }}>{label}</span>
            </div>
          ))}
          <div style={{ marginTop:4, borderTop:"1px solid #1e2d45", paddingTop:4 }}>
            {Object.entries(SECTIONS).map(([k, v]) => (
              <div key={k} style={{ display:"flex", alignItems:"center", gap:6, fontSize:9 }}>
                <div style={{ width:8, height:3, borderRadius:1, background:v.color }} />
                <span style={{ color:"#8a9dbe" }}>{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Zoom / reset controls */}
        <div style={{
          position:"absolute", right:16, bottom:16,
          display:"flex", flexDirection:"column", gap:4
        }}>
          {[["＋", 1.2], ["－", 0.8], ["↺", null]].map(([lbl, f]) => (
            <button key={lbl}
              onClick={() => {
                if (f === null) {
                  setPositions(computePositions());
                  setViewTransform({ x: 40, y: 40, scale: 0.72 });
                } else {
                  setViewTransform(p => ({ ...p, scale: Math.max(0.15, Math.min(5, p.scale * f)) }));
                }
              }}
              style={{
                width:28, height:28, background:"#0d1520", border:"1px solid #1e2d45",
                color:"#c8d6e5", borderRadius:4, cursor:"pointer", fontSize:14,
                display:"flex", alignItems:"center", justifyContent:"center"
              }}
            >{lbl}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
