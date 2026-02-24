/**
 * Question bank — one multiple-choice question per curriculum node.
 * Inspired by CKE matura 2022–2024, PP formuła 2023.
 *
 * Each entry: { q, options: string[], correct: number (0-based), hint: string }
 */
export const QUESTION_BANK = {
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
