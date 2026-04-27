---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
resources:
  - "interactive|deriv-apps-explorer.html|Applications of Derivatives|Zastosowania pochodnych"
  - "interactive|deriv-apps-warsztat.html|Applied Derivative Warsztat|Optymalizacja z pochodną — Warsztat"
---
Pochodna ma trzy podstawowe zastosowania: badanie monotoniczności funkcji, wyznaczanie ekstremów oraz rozwiązywanie zadań optymalizacyjnych.<br><br>Monotoniczność: jeśli $f'(x) > 0$ na przedziale, to $f$ rośnie; jeśli $f'(x) < 0$, to maleje. Tego używa się, gdy trzeba podać przedziały wzrostu i spadku.<br><br>Ekstrema: szukamy $x_0$, dla którego $f'(x_0) = 0$, a następnie sprawdzamy znak $f'$ po obu stronach. Zmiana z $+$ na $-$ oznacza maksimum, a z $-$ na $+$ minimum.<br><br>Optymalizacja przebiega według stałego schematu:<br>1. Z treści zadania wypisz, co minimalizujesz/maksymalizujesz (np. objętość, pole).<br>2. Zapisz wszystkie zmienne i powiąż je równaniem z warunków zadania.<br>3. Sprowadź do funkcji *jednej* zmiennej $f(x)$ z zaznaczoną dziedziną.<br>4. Policz $f'(x)$, przyrównaj do zera, sprawdź znak pochodnej wokół pierwiastka.

<!-- example -->
Z kartonu $20 \times 30$ cm wycinamy kwadraty o boku $x$ w rogach i składamy pudełko. Jakie $x$ daje maksymalną objętość?<br><br>Wymiary pudełka: podstawa $(20 - 2x)(30 - 2x)$, wysokość $x$. Objętość: $V(x) = x(20 - 2x)(30 - 2x)$, gdzie $x \in (0, 10)$.<br><br>Po rozwinięciu $V(x) = 4x^3 - 100x^2 + 600x \Rightarrow V'(x) = 12x^2 - 200x + 600$.<br><br>$V'(x) = 0 \Rightarrow x^2 - \tfrac{50}{3}x + 50 = 0 \Rightarrow x \approx 3{,}92$ (drugi pierwiastek odpada — poza dziedziną). Znak $V'$ zmienia się z $+$ na $-$, więc to maksimum.

<!-- en -->
The derivative has three basic applications: studying the monotonicity of a function, finding extrema, and solving optimization problems.<br><br>Monotonicity: if $f'(x) > 0$ on an interval, then $f$ is increasing; if $f'(x) < 0$, then it is decreasing. This is used when you need to give the intervals of growth and decline.<br><br>Extrema: we look for $x_0$ for which $f'(x_0) = 0$, and then check the sign of $f'$ on both sides. A change from $+$ to $-$ means a maximum, and from $-$ to $+$ a minimum.<br><br>Optimization follows a fixed scheme:<br>1. From the problem statement, write down what you are minimizing/maximizing (e.g. volume, area).<br>2. Write down all variables and link them by an equation from the conditions of the problem.<br>3. Reduce to a function of *one* variable $f(x)$ with the domain marked.<br>4. Compute $f'(x)$, set it equal to zero, check the sign of the derivative around the root.

<!-- example -->
From a $20 \times 30$ cm cardboard we cut squares of side $x$ in the corners and fold a box. What $x$ gives the maximum volume?<br><br>Box dimensions: base $(20 - 2x)(30 - 2x)$, height $x$. Volume: $V(x) = x(20 - 2x)(30 - 2x)$, where $x \in (0, 10)$.<br><br>After expansion $V(x) = 4x^3 - 100x^2 + 600x \Rightarrow V'(x) = 12x^2 - 200x + 600$.<br><br>$V'(x) = 0 \Rightarrow x^2 - \tfrac{50}{3}x + 50 = 0 \Rightarrow x \approx 3{,}92$ (the second root is rejected — outside the domain). The sign of $V'$ changes from $+$ to $-$, so this is a maximum.
