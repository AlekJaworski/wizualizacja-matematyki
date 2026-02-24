/** @type {Array<{id:string, label:string, labelPl:string, scope:string, section:string, level:number, x:number, y:number}>} */
export const RAW_NODES = [
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
  { id:"fn_poly",       label:"Polynomial Functions",        labelPl:"Funkcje wielomianowe",       scope:"funkcje",               section:"LP",   level:2, x:560,  y:700 },
  { id:"fn_compositions",label:"Function Compositions",      labelPl:"Złożenia funkcji",           scope:"funkcje",               section:"LR",   level:3, x:660,  y:640 },
  // ── V. Funkcje / LR (trygonometryczne) ─────────────────────────
  { id:"fn_trig",       label:"Trig. Functions (periodic)",  labelPl:"Funkcje trygon. (okresowe)", scope:"trygonometria",         section:"LR",   level:3, x:960,  y:440 },

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
  { id:"circle_eq",     label:"Circle Equation",             labelPl:"Równanie okręgu",            scope:"geometria_analityczna", section:"LP",   level:2, x:530,  y:870 },
  // ── IX. Geometria analityczna / LR ─────────────────────────────
  { id:"vectors",       label:"Vectors",                     labelPl:"Wektory",                    scope:"geometria_analityczna", section:"LR",   level:3, x:660,  y:870 },
  // ── IX. Geometria analityczna / UNIV ───────────────────────────
  { id:"conic_sections",label:"Conic Sections",              labelPl:"Krzywe stożkowe",            scope:"geometria_analityczna", section:"UNIV", level:3, x:660,  y:960 },

  // ── X. Stereometria / LP ───────────────────────────────────────
  { id:"solid_geom",    label:"Solid Geometry",              labelPl:"Stereometria",               scope:"stereometria",          section:"LP",   level:2, x:300,  y:960 },

  // ── XI. Kombinatoryka / LP ─────────────────────────────────────
  { id:"counting",      label:"Counting Principles",         labelPl:"Zasady liczenia",            scope:"kombinatoryka",         section:"LP",   level:2, x:1360, y:200 },
  { id:"permutations",  label:"Permutations",                labelPl:"Permutacje",                 scope:"kombinatoryka",         section:"LR",   level:3, x:1410, y:340 },
  { id:"combinations",  label:"Combinations",                labelPl:"Kombinacje",                 scope:"kombinatoryka",         section:"LR",   level:3, x:1360, y:470 },
  { id:"probability",   label:"Probability",                 labelPl:"Prawdopodobieństwo",         scope:"kombinatoryka",         section:"LP",   level:2, x:1210, y:220 },
  // ── XI. Kombinatoryka / LR ─────────────────────────────────────
  { id:"cond_prob",     label:"Conditional Probability",     labelPl:"Prawdop. warunkowe",         scope:"kombinatoryka",         section:"LR",   level:3, x:1260, y:360 },
  { id:"bernoulli",     label:"Bernoulli Scheme",            labelPl:"Schemat Bernoulliego",       scope:"kombinatoryka",         section:"LR",   level:3, x:1310, y:480 },

  // ── XII. Statystyka / LP ───────────────────────────────────────
  { id:"data_basics",   label:"Data & Statistics",           labelPl:"Dane i statystyka",          scope:"statystyka",            section:"SP8",  level:1, x:1160, y:80  },
  { id:"stat_lp",       label:"Descriptive Statistics",      labelPl:"Statystyka opisowa",         scope:"statystyka",            section:"LP",   level:2, x:1160, y:180 },
  // ── XII. Statystyka / UNIV ─────────────────────────────────────
  { id:"distributions", label:"Distributions",               labelPl:"Rozkłady",                   scope:"statystyka",            section:"UNIV", level:3, x:1300, y:490 },

  // ── XIII. Logika i teoria zbiorów / SP8 ────────────────────────
  { id:"sets",          label:"Sets",                        labelPl:"Zbiory",                     scope:"logika",                section:"SP8",  level:1, x:1160, y:580 },
  // ── XIII. Logika i teoria zbiorów / LP ─────────────────────────
  { id:"logic_basics",  label:"Logic Basics",                labelPl:"Logika",                     scope:"logika",                section:"LP",   level:1, x:1210, y:680 },
  { id:"proof",         label:"Mathematical Proofs",         labelPl:"Dowody matematyczne",        scope:"logika",                section:"LP",   level:2, x:1260, y:790 },

  // ── XIII. Optymalizacja / LP ───────────────────────────────────
  { id:"optimization_lp",label:"Optimization (quadratic)",   labelPl:"Optymalizacja (funkcja kw.)",scope:"funkcje",               section:"LP",   level:2, x:480,  y:790 },

  // ── XIII. Optymalizacja i rachunek różniczkowy / LR ────────────
  { id:"limits",        label:"Limits of Functions",         labelPl:"Granice funkcji",            scope:"optymalizacja",         section:"LR",   level:3, x:760,  y:700 },
  { id:"derivative",    label:"Derivatives",                 labelPl:"Pochodne",                   scope:"optymalizacja",         section:"LR",   level:3, x:850,  y:800 },
  { id:"deriv_apps",    label:"Derivative Applications",     labelPl:"Zastosowania pochodnych",    scope:"optymalizacja",         section:"LR",   level:3, x:970,  y:880 },

  // ── Analiza matematyczna / UNIV ────────────────────────────────
  { id:"complex",       label:"Complex Numbers",             labelPl:"Liczby zespolone",           scope:"analiza",               section:"UNIV", level:3, x:390,  y:650 },
  { id:"integral",      label:"Integrals",                   labelPl:"Całki",                      scope:"analiza",               section:"UNIV", level:3, x:720,  y:880 },
];
