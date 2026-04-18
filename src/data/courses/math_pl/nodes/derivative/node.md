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
---
Pochodna mówi, jak szybko zmienia się funkcja w danym punkcie — to tempo zmian. Geometrycznie: nachylenie stycznej do wykresu w tym punkcie.<br><br>Definicja: $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$ — czyli średnia prędkość na odcinku $[x, x+h]$, gdy $h$ staje się znikomo małe.<br><br>Reguły, które musisz znać:<br>$(x^n)' = n x^{n-1}$ — używasz zawsze, gdy masz potęgę.<br>$(f+g)' = f' + g'$ i $(c \cdot f)' = c f'$ — rozbijasz sumę na kawałki, stałą wyciągasz.<br>$(f \cdot g)' = f'g + fg'$ — dla iloczynu, np. $x^2 \sin x$.<br>$(f/g)' = \frac{f'g - fg'}{g^2}$ — dla ilorazu.<br>$(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — reguła łańcuchowa, gdy masz funkcję "w funkcji", np. $\sin(x^2)$.<br><br>W praktyce: rozbij funkcję na najprostsze kawałki, policz każdy osobno, złóż wyniki.

<!-- example -->
Policz $f'(x)$ dla $f(x) = 3x^4 - 2x + 7$.<br><br>Rozbij na składniki: $(3x^4)' - (2x)' + (7)'$.<br><br>$(3x^4)' = 3 \cdot 4x^3 = 12x^3 \Rightarrow (2x)' = 2 \Rightarrow (7)' = 0$.<br><br>Składamy: $f'(x) = 12x^3 - 2$.

<!-- mistakes -->
- **Pochodna stałej = 0**: $(c)' = 0$, nie $c$. Błąd "$(7)' = 7$" kosztuje punkty co roku.
- **Pochodna iloczynu**: $(f \cdot g)' = f'g + fg'$, nie $f' \cdot g'$. Mnożenie pochodnych to błąd.
- **Reguła łańcuchowa**: $(f(g(x)))' = f'(g(x)) \cdot g'(x)$ — pochodna zewnętrznej RAZY pochodna wewnętrznej. Pomijanie drugiego czynnika to klasyk.
