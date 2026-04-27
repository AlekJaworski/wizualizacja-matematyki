---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
Pierwiastek wielomianu $W(x)$ to po prostu liczba $a$, dla której $W(a) = 0$ — czyli miejsce zerowe wykresu. Cały temat sprowadza się do pytania: jak je znaleźć, gdy wielomian jest stopnia $\geq 3$ i wzorków nie ma?<br><br>Kluczowe twierdzenie (Bézouta): $(x - a) \mid W(x) \iff W(a) = 0$. Innymi słowy: jeśli $a$ jest pierwiastkiem, to możesz wyciągnąć $(x - a)$ jako czynnik. Używasz go, gdy chcesz rozłożyć wielomian na czynniki.<br><br>Twierdzenie o pierwiastkach wymiernych: jeśli $W(x)$ ma współczynniki całkowite i $\tfrac{p}{q}$ jest pierwiastkiem wymiernym (ułamek w postaci skróconej), to $p$ dzieli wyraz wolny, a $q$ — wiodący. W praktyce: kandydaci to dzielniki wyrazu wolnego podzielone przez dzielniki współczynnika wiodącego.<br><br>Schemat Hornera to szybki sposób dzielenia $W(x)$ przez $(x - a)$ — warto znać, ale można też dzielić długim dzieleniem. Pierwiastek o wielokrotności $k$ oznacza, że $(x-a)^k$ dzieli $W(x)$.

<!-- example -->
Znajdź pierwiastki $W(x) = x^3 - 2x^2 - x + 2$.<br><br>Kandydaci wymierni (dzielniki $2$): $\pm 1, \pm 2$.<br><br>Testujemy: $W(1) = 1 - 2 - 1 + 2 = 0$ ✓. Czyli $(x-1)$ jest czynnikiem.<br><br>Dzielimy: $W(x) : (x - 1) = x^2 - x - 2 \Rightarrow$ rozkładamy: $x^2 - x - 2 = (x-2)(x+1)$.<br><br>Pierwiastki: $x = 1, 2, -1$. Pełen rozkład: $W(x) = (x-1)(x-2)(x+1)$.

<!-- en -->
A root of a polynomial $W(x)$ is simply a number $a$ for which $W(a) = 0$ — i.e. a zero of the graph. The whole topic boils down to one question: how do you find them when the polynomial has degree $\geq 3$ and there's no formula?<br><br>Key theorem (Bézout): $(x - a) \mid W(x) \iff W(a) = 0$. In other words: if $a$ is a root, you can pull out $(x - a)$ as a factor. You use this when you want to factor a polynomial.<br><br>Rational root theorem: if $W(x)$ has integer coefficients and $\tfrac{p}{q}$ is a rational root (a fraction in lowest terms), then $p$ divides the constant term and $q$ — the leading one. In practice: the candidates are divisors of the constant term divided by divisors of the leading coefficient.<br><br>Horner's scheme is a fast way to divide $W(x)$ by $(x - a)$ — worth knowing, but you can also use long division. A root of multiplicity $k$ means that $(x-a)^k$ divides $W(x)$.

<!-- example -->
Find the roots of $W(x) = x^3 - 2x^2 - x + 2$.<br><br>Rational candidates (divisors of $2$): $\pm 1, \pm 2$.<br><br>Test: $W(1) = 1 - 2 - 1 + 2 = 0$ ✓. So $(x-1)$ is a factor.<br><br>Divide: $W(x) : (x - 1) = x^2 - x - 2 \Rightarrow$ factor: $x^2 - x - 2 = (x-2)(x+1)$.<br><br>Roots: $x = 1, 2, -1$. Full factorization: $W(x) = (x-1)(x-2)(x+1)$.
