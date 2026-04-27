---
label: "Quadratic Equations"
labelPl: "Równania kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 390
resources:
  - "interactive|resources/fn_quadratic/quadratic-derivation.html|Parabola Explorer — Quadratic Formula|Eksplorator paraboli — wzór kwadratowy"
  - "interactive|resources/factoring/factoring-explorer.html|Factoring Explorer — Two Lines × Parabola|Rozkład na czynniki — dwie proste × parabola"
  - "interactive|quadratic-warsztat.html|Quadratic Warsztat — Find the Error|Równanie kwadratowe — wyłap błąd"
---
Równanie kwadratowe to jedno z najczęstszych równań w matematyce — rozwiązuje się je za pomocą wyróżnika (delty).<br><br>Postać: $ax^2 + bx + c = 0$. Wyróżnik: $\Delta = b^2 - 4ac$. Gdy $\Delta > 0$: dwa rozwiązania $x = \frac{-b \pm \sqrt{\Delta}}{2a}$. Gdy $\Delta = 0$: jedno rozwiązanie $x = \frac{-b}{2a}$. Gdy $\Delta < 0$: brak rozwiązań rzeczywistych.<br><br>Alternatywne metody: rozkład na czynniki lub wzory Viete'a.

<!-- example -->
Na przykład: $x^2 - 5x + 6 = 0$. Tu $a=1$, $b=-5$, $c=6$.<br><br>$\Delta = 25 - 24 = 1$. Rozwiązania: $x = \frac{5 \pm 1}{2}$, czyli $x=3$ lub $x=2$.<br><br>Sprawdź: $3^2 - 5 \cdot 3 + 6 = 9 - 15 + 6 = 0$ ✓.

<!-- mistakes -->
- **Znaki Viète'a**: $x_1 + x_2 = -b/a$ i $x_1 \cdot x_2 = c/a$ — łatwo pominąć minus przy $b$.
- **Wzór kwadratowy z $2a$ w mianowniku**: $x = \frac{-b \pm \sqrt{\Delta}}{2a}$, nie $\frac{-b \pm \sqrt{\Delta}}{a}$.
- **Ujemna delta — brak rozwiązań rzeczywistych**: to ≠ "równanie jest źle postawione". To po prostu informacja.

<!-- see-also -->
factoring
fn_quadratic
vieta

<!-- en -->
A quadratic equation is one of the most common equations in mathematics — you solve it using the discriminant (delta).<br><br>Form: $ax^2 + bx + c = 0$. Discriminant: $\Delta = b^2 - 4ac$. When $\Delta > 0$: two solutions $x = \frac{-b \pm \sqrt{\Delta}}{2a}$. When $\Delta = 0$: one solution $x = \frac{-b}{2a}$. When $\Delta < 0$: no real solutions.<br><br>Alternative methods: factoring or Vieta's formulas.

<!-- example -->
For example: $x^2 - 5x + 6 = 0$. Here $a=1$, $b=-5$, $c=6$.<br><br>$\Delta = 25 - 24 = 1$. Solutions: $x = \frac{5 \pm 1}{2}$, i.e. $x=3$ or $x=2$.<br><br>Check: $3^2 - 5 \cdot 3 + 6 = 9 - 15 + 6 = 0$ ✓.

<!-- mistakes -->
- **Vieta's signs**: $x_1 + x_2 = -b/a$ and $x_1 \cdot x_2 = c/a$ — easy to drop the minus on $b$.
- **Quadratic formula with $2a$ in the denominator**: $x = \frac{-b \pm \sqrt{\Delta}}{2a}$, not $\frac{-b \pm \sqrt{\Delta}}{a}$.
- **Negative discriminant — no real solutions**: this $\neq$ "the equation is ill-posed". It's just information.

<!-- see-also -->
factoring
fn_quadratic
vieta
