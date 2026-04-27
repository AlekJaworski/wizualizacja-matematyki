---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
resources:
  - "interactive|derivative-explorer.html|Derivative Explorer|Eksplorator pochodnej"
  - "interactive|product-rule-explorer.html|Product Rule — Why d/dx[x²] = 2x|Reguła iloczynu — dlaczego pochodna x² to 2x"
  - "interactive|product-rule-general.html|🧩 Dla ciekawych: General Product Rule (f·g)' = f'g + fg'|🧩 Dla ciekawych: Ogólna reguła iloczynu (f·g)' = f'g + fg'"
  - "interactive|derivative-warsztat.html|Derivative Rules Warsztat|Reguły pochodnych — Warsztat"
---
Pochodna mówi, jak szybko zmienia się funkcja w danym punkcie — to tempo zmian. Geometrycznie: nachylenie stycznej do wykresu w tym punkcie.<br><br>Definicja: $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ — czyli średnia prędkość na odcinku $[x, x+h]$, gdy $h$ staje się znikomo małe.<br><br>Podstawowe reguły:<br>$(x^n)' = n x^{n-1}$ — dla każdej potęgi.<br>$(f+g)' = f' + g'$ oraz $(c \cdot f)' = c f'$ — pochodną sumy liczymy składnik po składniku, a stałą wyciągamy przed pochodną.<br>$(f \cdot g)' = f'g + fg'$ — dla iloczynu, np. $x^2 \sin x$.<br>$(f/g)' = \frac{f'g - fg'}{g^2}$ — dla ilorazu.<br>$(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — reguła łańcuchowa dla złożenia funkcji, np. $\sin(x^2)$.<br><br>Do każdego składnika stosujesz reguły osobno, a następnie dodajesz wyniki.

<!-- example -->
Policz $f'(x)$ dla $f(x) = 3x^4 - 2x + 7$.<br><br>Rozbij na składniki: $(3x^4)' - (2x)' + (7)'$.<br><br>$(3x^4)' = 3 \cdot 4x^3 = 12x^3 \Rightarrow (2x)' = 2 \Rightarrow (7)' = 0$.<br><br>Składamy: $f'(x) = 12x^3 - 2$.

<!-- mistakes -->
- **Pochodna stałej = 0**: $(c)' = 0$, nie $c$. Zapis "$(7)' = 7$" jest błędny — pochodna stałej zawsze znika.
- **Pochodna iloczynu**: $(f \cdot g)' = f'g + fg'$, a nie $f' \cdot g'$. Pochodnych czynników się nie mnoży.
- **Reguła łańcuchowa**: $(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — pochodna zewnętrznej razy pochodna wewnętrznej. Drugi czynnik łatwo pominąć, dlatego warto na niego zwrócić uwagę.

<!-- en -->
The derivative tells you how quickly a function changes at a given point — it is the rate of change. Geometrically: the slope of the tangent to the graph at that point.<br><br>Definition: $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ — i.e. the average speed on the interval $[x, x+h]$, as $h$ becomes vanishingly small.<br><br>Basic rules:<br>$(x^n)' = n x^{n-1}$ — for any power.<br>$(f+g)' = f' + g'$ and $(c \cdot f)' = c f'$ — the derivative of a sum is computed term by term, and a constant is pulled out in front of the derivative.<br>$(f \cdot g)' = f'g + fg'$ — for a product, e.g. $x^2 \sin x$.<br>$(f/g)' = \frac{f'g - fg'}{g^2}$ — for a quotient.<br>$(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — the chain rule for a composition of functions, e.g. $\sin(x^2)$.<br><br>You apply the rules to each term separately and then add the results.

<!-- example -->
Compute $f'(x)$ for $f(x) = 3x^4 - 2x + 7$.<br><br>Split into terms: $(3x^4)' - (2x)' + (7)'$.<br><br>$(3x^4)' = 3 \cdot 4x^3 = 12x^3 \Rightarrow (2x)' = 2 \Rightarrow (7)' = 0$.<br><br>Combining: $f'(x) = 12x^3 - 2$.

<!-- mistakes -->
- **Derivative of a constant = 0**: $(c)' = 0$, not $c$. Writing "$(7)' = 7$" is wrong — the derivative of a constant always vanishes.
- **Derivative of a product**: $(f \cdot g)' = f'g + fg'$, not $f' \cdot g'$. You do not multiply the derivatives of the factors.
- **Chain rule**: $(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — derivative of the outer times derivative of the inner. The second factor is easy to omit, so it is worth paying attention to.
