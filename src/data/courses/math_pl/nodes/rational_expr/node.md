---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
resources:
  - "interactive|resources/quadratic_ineq/sign-chart-explorer.html|Sign Chart Method|Metoda tabelki znaków"
---
Wyrażenia wymierne to ilorazy wielomianów — uogólnienie zwykłych ułamków na wyrażenia algebraiczne.<br><br>Przykład: $\frac{x^2 - 1}{x + 3}$. Kluczowe umiejętności: skracanie (najpierw rozkład na czynniki!) (czyli zapis $W(x) = (x-a)(x-b)\ldots$, żeby można było skracać równe czynniki w liczniku i mianowniku), dodawanie i odejmowanie (wspólny mianownik), mnożenie i dzielenie.<br><br>Nierówności wymierne rozwiązujemy metodą przedziałów (tabelka znaków) — znaczy to: znajdź miejsca zerowe licznika i mianownika, zaznacz je na osi, potem w każdym przedziale sprawdź znak wyrażenia. Pamiętaj: mianownik nigdy nie może być zerem!

<!-- example -->
Na przykład: $\frac{x^2 - 4}{x - 2}$. Rozkładasz licznik: $x^2 - 4 = (x-2)(x+2)$. Skracasz $(x-2)$ i dostajesz $x + 2$ (dla $x \neq 2$).<br><br>Nierówność wymierna: $\frac{x+1}{x-3} > 0$. Miejsca zerowe: $x = -1$ (licznik), $x = 3$ (mianownik, wyłączony z dziedziny).<br><br>Tabelka znaków: $(-\infty, -1)$: $+$, $(-1, 3)$: $-$, $(3, +\infty)$: $+$. Odpowiedź: $x \in (-\infty, -1) \cup (3, +\infty)$.

<!-- mistakes -->
- **Dziedzina przeżywa uproszczenie**: $\frac{x^2-1}{x-1}$ upraszcza się do $x+1$, ale dziedzina wciąż wyklucza $x=1$ — uproszczenie algebraiczne nie "dodaje" wartości, której w pierwotnym wyrażeniu nie było. Przy rozwiązywaniu równań zawsze zapisuj założenia dziedziny ZANIM zaczniesz przekształcać.
- **Dzielenie przez $x$ gubi pierwiastek**: $x^2 = 3x$ po podzieleniu przez $x$ daje $x = 3$, ale oryginalne równanie spełnia też $x = 0$. Zamiast dzielić, wyłącz: $x^2 - 3x = x(x-3) = 0 \Rightarrow x=0$ lub $x=3$.
- **Mnożenie nierówności przez $x$**: $\frac{1}{x} > 2$ NIE jest równoważne $1 > 2x$, bo znak mnożnika $x$ jest nieznany i przy $x<0$ trzeba odwrócić znak nierówności. Bezpieczna metoda: przenieś wszystko na jedną stronę ($\frac{1}{x} - 2 > 0 \Rightarrow \frac{1 - 2x}{x} > 0$) i zrób tabelkę znaków.

<!-- see-also -->
factoring
quadratic_ineq
