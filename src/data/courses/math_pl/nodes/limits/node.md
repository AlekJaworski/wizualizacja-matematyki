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

<!-- en -->
A limit of a function describes what value the function approaches as $x$ approaches a given point — even if the function itself is not defined at that point. For the limit to exist, the one-sided limits (left and right) must agree.<br><br>**For the curious:** in the formal definition $\lim_{x \to a} f(x) = L$ means that for every $\varepsilon > 0$ there exists $\delta > 0$ such that $0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$. For the matura, the intuition from the first sentence is enough.

<!-- example -->
For example: $f(x) = \frac{x^2 - 1}{x - 1}$ is undefined for $x = 1$ (since $\frac{0}{0}$).<br><br>But $\frac{x^2 - 1}{x - 1} = x + 1$ for $x \neq 1$, so $\lim_{x \to 1} f(x) = 2$. The function tends to 2, even though it does not exist at the point 1.
