---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
resources:
  - "interactive|log-eq-explorer.html|Log & Exp Equations Explorer|Równania log. i wykł."
  - "interactive|log-eq-warsztat.html|Log Equations Warsztat — Domain Gate|Równania log. — Warsztat z Bramką Dziedziny"
---
Równanie logarytmiczne to równanie, w którym niewiadoma występuje pod znakiem logarytmu. Standardowa strategia polega na tym, by najpierw — korzystając z własności logarytmów: $\log a + \log b = \log(ab)$, $\log a - \log b = \log\!\left(\tfrac{a}{b}\right)$ oraz $n\log a = \log a^n$ — sprowadzić obie strony do postaci jednego logarytmu, a następnie użyć definicji $\log_b x = y \Leftrightarrow b^y = x$, aby pozbyć się logarytmu.<br><br>Konieczne jest również wyznaczenie dziedziny równania — argument każdego logarytmu musi być dodatni, a podstawa dodatnia i różna od jedności. Pierwiastki wykraczające poza dziedzinę odrzucamy, nawet jeśli formalnie spełniają przekształcone równanie.

<!-- example -->
Rozwiążmy $\log_2(x+1) = 3$. Zaczynamy od dziedziny: argument logarytmu musi być dodatni, czyli $x+1 > 0$, skąd $x > -1$.<br><br>Z definicji logarytmu mamy $x + 1 = 2^3 = 8$, więc $x = 7$. Sprawdzamy, czy rozwiązanie należy do dziedziny: $7 > -1$, zatem warunek jest spełniony i $x = 7$ jest jedynym rozwiązaniem.

<!-- mistakes -->
- **Pominięcie dziedziny**: argument logarytmu musi być dodatni, a podstawa dodatnia i różna od jedności, więc dziedzinę wyznaczamy przed rozwiązaniem i odrzucamy pierwiastki, które jej nie spełniają. W równaniu $\log(x-2) + \log(x+1) = \log 4$ dziedziną jest $x > 2$, więc ujemne rozwiązanie przekształconego równania kwadratowego trzeba odrzucić.
- **Nieistniejący „wzór” $\log(a+b) = \log a + \log b$**: ta równość jest fałszywa — logarytm rozkłada iloczyn na sumę, a nie sumę na sumę. Zachodzi tylko $\log(ab) = \log a + \log b$, i to przy założeniu $a, b > 0$.
- **Pomylenie podstawy logarytmu**: zapis $\log x$ bez podstawy oznacza w polskiej szkole logarytm dziesiętny (podstawa $10$), a $\ln x$ — logarytm naturalny (podstawa $e$). Przy rozwiązywaniu warto wyraźnie zapisać podstawę, zwłaszcza gdy w jednym równaniu pojawiają się logarytmy o różnych podstawach.

<!-- see-also -->
log_exp
fn_log

<!-- en -->
A logarithmic equation is an equation in which the unknown appears inside a logarithm. The standard strategy is first to use the logarithm properties — $\log a + \log b = \log(ab)$, $\log a - \log b = \log\!\left(\tfrac{a}{b}\right)$, and $n\log a = \log a^n$ — to reduce both sides to a single logarithm, and then to apply the definition $\log_b x = y \Leftrightarrow b^y = x$ to eliminate the logarithm.<br><br>It is also essential to determine the domain of the equation — the argument of every logarithm must be positive, and the base must be positive and different from one. Roots that fall outside the domain are discarded, even if they formally satisfy the transformed equation.

<!-- example -->
Let us solve $\log_2(x+1) = 3$. We start with the domain: the argument of the logarithm must be positive, i.e. $x+1 > 0$, so $x > -1$.<br><br>By the definition of the logarithm, $x + 1 = 2^3 = 8$, so $x = 7$. We check that the solution lies in the domain: $7 > -1$, so the condition holds and $x = 7$ is the unique solution.

<!-- mistakes -->
- **Skipping the domain check**: the argument of a logarithm must be positive, and the base must be positive and different from one, so the domain is found before solving and any roots violating it are discarded. In $\log(x-2) + \log(x+1) = \log 4$ the domain is $x > 2$, so a negative root of the resulting quadratic must be rejected.
- **The nonexistent "rule" $\log(a+b) = \log a + \log b$**: this equality is false — a logarithm turns a product into a sum, not a sum into a sum. Only $\log(ab) = \log a + \log b$ holds, and only under the assumption $a, b > 0$.
- **Confusing the base of the logarithm**: the notation $\log x$ without a written base means the common logarithm (base $10$) in Polish school notation, while $\ln x$ is the natural logarithm (base $e$). When solving, it is worth writing the base explicitly, especially when a single equation mixes logarithms with different bases.

<!-- see-also -->
log_exp
fn_log
