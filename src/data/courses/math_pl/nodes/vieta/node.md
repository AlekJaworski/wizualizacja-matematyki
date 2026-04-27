---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
resources:
  - "interactive|vieta-explorer.html|Vieta's Formulas Explorer|Wzory Viète'a — Eksplorator"
  - "interactive|vieta-warsztat.html|Vieta's Formulas Warsztat|Wzory Viète'a — Warsztat"
---
Wzory Viete'a to elegancki most między współczynnikami równania kwadratowego a jego pierwiastkami — pozwalają wnioskować o rozwiązaniach bez ich obliczania.<br><br>Dla $ax^2 + bx + c = 0$ z pierwiastkami $x_1, x_2$: suma $x_1 + x_2 = \frac{-b}{a}$, iloczyn $x_1 \cdot x_2 = \frac{c}{a}$.<br><br>Zastosowania: konstruowanie równań o zadanych pierwiastkach i obliczanie wyrażeń symetrycznych (np. $x_1^2 + x_2^2$) bez rozwiązywania równania.

<!-- example -->
Na przykład: $x^2 - 7x + 12 = 0$ ma pierwiastki 3 i 4.<br><br>Sprawdź: $3 + 4 = 7 = \frac{-(-7)}{1}$ ✓, $3 \cdot 4 = 12 = \frac{12}{1}$ ✓. Bez rozwiązywania wiesz, że suma $= 7$, iloczyn $= 12$.

<!-- mistakes -->
- **Znak przy sumie**: dla $ax^2 + bx + c = 0$ mamy $x_1 + x_2 = -\frac{b}{a}$ z minusem. Dla $x^2 - 7x + 12 = 0$ jest $b = -7$, więc suma $= -\frac{-7}{1} = 7$, a nie $-7$. Pomylenie minusa to najczęstszy błąd przy Viète'u.
- **Dzielenie przez $a$**: wzory wymagają podzielenia przez $a$, gdy $a \neq 1$. Dla $2x^2 - 6x + 4 = 0$ suma $= -\frac{-6}{2} = 3$, a iloczyn $= \frac{4}{2} = 2$ — nie $6$ ani $4$.
- **Viète wymaga istnienia pierwiastków**: jeśli $\Delta < 0$, równanie nie ma rozwiązań rzeczywistych i mówienie o „sumie pierwiastków" w zakresie $\mathbb{R}$ traci sens. Przed użyciem wzorów sprawdź znak wyróżnika.

<!-- see-also -->
quadratic_eq
factoring

<!-- en -->
Vieta's formulas are an elegant bridge between the coefficients of a quadratic equation and its roots — they let you reason about the solutions without computing them.<br><br>For $ax^2 + bx + c = 0$ with roots $x_1, x_2$: sum $x_1 + x_2 = \frac{-b}{a}$, product $x_1 \cdot x_2 = \frac{c}{a}$.<br><br>Applications: constructing equations with prescribed roots and computing symmetric expressions (e.g. $x_1^2 + x_2^2$) without solving the equation.

<!-- example -->
For example: $x^2 - 7x + 12 = 0$ has roots 3 and 4.<br><br>Check: $3 + 4 = 7 = \frac{-(-7)}{1}$ ✓, $3 \cdot 4 = 12 = \frac{12}{1}$ ✓. Without solving, you know that the sum $= 7$ and the product $= 12$.

<!-- mistakes -->
- **Sign of the sum**: for $ax^2 + bx + c = 0$ we have $x_1 + x_2 = -\frac{b}{a}$ with a minus. For $x^2 - 7x + 12 = 0$ we have $b = -7$, so the sum $= -\frac{-7}{1} = 7$, not $-7$. Mishandling the minus is the most common Vieta mistake.
- **Dividing by $a$**: the formulas require dividing by $a$ when $a \neq 1$. For $2x^2 - 6x + 4 = 0$ the sum $= -\frac{-6}{2} = 3$ and the product $= \frac{4}{2} = 2$ — not $6$ or $4$.
- **Vieta requires the roots to exist**: if $\Delta < 0$, the equation has no real solutions and speaking of "the sum of the roots" in $\mathbb{R}$ is meaningless. Check the sign of the discriminant before using the formulas.

<!-- see-also -->
quadratic_eq
factoring
