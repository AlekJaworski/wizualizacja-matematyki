---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
resources:
  - "interactive|integral-explorer.html|Integral Explorer|Całki — Eksplorator"
---
Całka to dwie rzeczy w jednym: operacja odwrotna do pochodnej (antypochodna) oraz pole pod wykresem funkcji. Te dwa światy spina wzór Newtona–Leibniza.<br><br>Wzór Newtona–Leibniza: $\int_a^b f(x)\,dx = F(b) - F(a)$, gdzie $F$ jest dowolną antypochodną $f$ (czyli $F' = f$). Używasz go zawsze, gdy liczysz całkę oznaczoną.<br><br>Kilka antypochodnych, które wracają najczęściej i warto je mieć w pamięci:<br>$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ dla $n \neq -1$ (reguła potęg),<br>$\int \frac{1}{x}\,dx = \ln|x| + C$ jako jedyny wyjątek od reguły potęg,<br>$\int e^x\,dx = e^x + C$, bo pochodna $e^x$ to znów $e^x$,<br>$\int \sin x\,dx = -\cos x + C$ oraz $\int \cos x\,dx = \sin x + C$.<br><br>Gdy wykres leży poniżej osi $x$, całka wychodzi ujemna — to nie błąd, tylko "pole ze znakiem".

<!-- example -->
Policz $\int_0^2 3x^2\,dx$.<br><br>Antypochodna: $F(x) = 3 \cdot \frac{x^3}{3} = x^3 \Rightarrow$ sprawdź: $(x^3)' = 3x^2$ ✓.<br><br>Stosujesz Newtona–Leibniza: $\int_0^2 3x^2\,dx = F(2) - F(0) = 8 - 0 = 8$.
