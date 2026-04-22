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
