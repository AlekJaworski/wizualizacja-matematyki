---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
resources:
  - "interactive|limits-explorer.html|Limits Explorer|Granice funkcji — Eksplorator"
---
Granica funkcji opisuje, do jakiej wartości funkcja dąży, gdy $x$ zbliża się do pewnego punktu — nawet jeśli sama funkcja w tym punkcie nie jest określona. Aby granica istniała, granice jednostronne (lewostronna i prawostronna) muszą się zgadzać.<br><br>**Dla ciekawych:** w ujęciu formalnym $\lim_{x \to a} f(x) = L$ oznacza, że dla każdego $\varepsilon > 0$ istnieje $\delta > 0$, takie że $0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$. Na maturze wystarczy intuicja z pierwszego zdania.

<!-- example -->
Na przykład: $f(x) = \frac{x^2 - 1}{x - 1}$ jest nieokreślona dla $x = 1$ (bo $\frac{0}{0}$).<br><br>Ale $\frac{x^2 - 1}{x - 1} = x + 1$ dla $x \neq 1$, więc $\lim_{x \to 1} f(x) = 2$. Funkcja dąży do 2, choć w punkcie 1 nie istnieje.
