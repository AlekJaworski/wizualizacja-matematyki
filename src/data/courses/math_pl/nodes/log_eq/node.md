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
Równanie logarytmiczne to równanie, w którym niewiadoma występuje pod znakiem logarytmu, a równanie wykładnicze to takie, w którym niewiadoma stoi w wykładniku potęgi. Oba typy są ze sobą ściśle powiązane przez równoważność $\log_b x = y \Leftrightarrow b^y = x$, która pozwala przechodzić od jednej postaci do drugiej.<br><br>W równaniach logarytmicznych standardowa strategia polega na tym, by — korzystając z własności $\log a + \log b = \log(ab)$, $\log a - \log b = \log\!\left(\tfrac{a}{b}\right)$ oraz $n\log a = \log a^n$ — sprowadzić obie strony do jednego logarytmu, a następnie użyć powyższej definicji, aby pozbyć się logarytmu. Konieczne jest też wyznaczenie dziedziny: argument każdego logarytmu musi być dodatni, a podstawa dodatnia i różna od jedności.<br><br>W równaniach wykładniczych dążymy do tego, by obie strony miały tę samą podstawę — wtedy z $b^{f(x)} = b^{g(x)}$ wynika $f(x) = g(x)$. Gdy podstawy się różnią, pomocna bywa zamiana zmiennych (np. $t = 2^x$ przy równaniach kwadratowych w $2^x$) albo logarytmowanie obu stron.

<!-- example -->
Równanie logarytmiczne: $\log_2(x+1) = 3$. Zaczynamy od dziedziny: $x+1 > 0$, skąd $x > -1$. Z definicji mamy $x + 1 = 2^3 = 8$, więc $x = 7$. Warunek $7 > -1$ jest spełniony, więc $x = 7$ jest jedynym rozwiązaniem.<br><br>Równanie wykładnicze: $4^x - 5 \cdot 2^x + 4 = 0$. Podstawmy $t = 2^x > 0$. Otrzymujemy $t^2 - 5t + 4 = 0$, czyli $(t-1)(t-4) = 0$, skąd $t = 1$ lub $t = 4$. Wracając do zmiennej $x$: $2^x = 1$ daje $x = 0$, a $2^x = 4 = 2^2$ daje $x = 2$.

<!-- mistakes -->
- **Pominięcie dziedziny**: argument logarytmu musi być dodatni, a podstawa dodatnia i różna od jedności, więc dziedzinę wyznaczamy przed rozwiązaniem i odrzucamy pierwiastki, które jej nie spełniają. W równaniu $\log(x-2) + \log(x+1) = \log 4$ dziedziną jest $x > 2$, więc ujemne rozwiązanie przekształconego równania kwadratowego trzeba odrzucić.
- **Nieistniejący „wzór” $\log(a+b) = \log a + \log b$**: ta równość jest fałszywa — logarytm rozkłada iloczyn na sumę, a nie sumę na sumę. Zachodzi tylko $\log(ab) = \log a + \log b$, i to przy założeniu $a, b > 0$.
- **Pomylenie podstawy logarytmu**: zapis $\log x$ bez podstawy oznacza w polskiej szkole logarytm dziesiętny (podstawa $10$), a $\ln x$ — logarytm naturalny (podstawa $e$). Przy rozwiązywaniu warto wyraźnie zapisać podstawę, zwłaszcza gdy w jednym równaniu pojawiają się logarytmy o różnych podstawach.
- **Sprowadzanie do różnych podstaw w równaniach wykładniczych**: z $b^{f(x)} = c^{g(x)}$ nie wnioskujemy bezpośrednio $f(x) = g(x)$, gdy $b \neq c$. Albo sprowadzamy obie strony do tej samej podstawy ($8 = 2^3$, $9 = 3^2$ itp.), albo logarytmujemy obie strony — bezpośrednie porównanie wykładników to częsty błąd.

<!-- see-also -->
log_exp
fn_log

<!-- en -->
A logarithmic equation has the unknown inside a logarithm; an exponential equation has the unknown in the exponent. The two are tightly linked through the equivalence $\log_b x = y \Leftrightarrow b^y = x$, which lets you switch between the forms.<br><br>For logarithmic equations, the standard strategy is to use the properties $\log a + \log b = \log(ab)$, $\log a - \log b = \log\!\left(\tfrac{a}{b}\right)$, and $n\log a = \log a^n$ to reduce both sides to a single logarithm, then apply the definition above to remove it. Determining the domain is essential: every logarithm's argument must be positive, and the base must be positive and different from one.<br><br>For exponential equations, the goal is to make both sides share the same base — then $b^{f(x)} = b^{g(x)}$ implies $f(x) = g(x)$. When bases differ, a substitution (e.g. $t = 2^x$ for equations quadratic in $2^x$) or taking logs of both sides usually works.

<!-- example -->
Logarithmic equation: $\log_2(x+1) = 3$. Start with the domain: $x+1 > 0$, so $x > -1$. By the definition, $x + 1 = 2^3 = 8$, giving $x = 7$. Since $7 > -1$, the condition holds and $x = 7$ is the unique solution.<br><br>Exponential equation: $4^x - 5 \cdot 2^x + 4 = 0$. Substitute $t = 2^x > 0$ to get $t^2 - 5t + 4 = 0$, i.e. $(t-1)(t-4) = 0$, so $t = 1$ or $t = 4$. Returning to $x$: $2^x = 1$ gives $x = 0$, and $2^x = 4 = 2^2$ gives $x = 2$.

<!-- mistakes -->
- **Skipping the domain check**: the argument of a logarithm must be positive, and the base must be positive and different from one, so the domain is found before solving and any roots violating it are discarded. In $\log(x-2) + \log(x+1) = \log 4$ the domain is $x > 2$, so a negative root of the resulting quadratic must be rejected.
- **The nonexistent "rule" $\log(a+b) = \log a + \log b$**: this equality is false — a logarithm turns a product into a sum, not a sum into a sum. Only $\log(ab) = \log a + \log b$ holds, and only under the assumption $a, b > 0$.
- **Confusing the base of the logarithm**: the notation $\log x$ without a written base means the common logarithm (base $10$) in Polish school notation, while $\ln x$ is the natural logarithm (base $e$). When solving, it is worth writing the base explicitly, especially when a single equation mixes logarithms with different bases.
- **Comparing exponents across different bases in exponential equations**: from $b^{f(x)} = c^{g(x)}$ you cannot conclude $f(x) = g(x)$ when $b \neq c$. Either rewrite both sides to a common base ($8 = 2^3$, $9 = 3^2$, etc.) or take logs of both sides — comparing exponents directly is a frequent error.

<!-- see-also -->
log_exp
fn_log
