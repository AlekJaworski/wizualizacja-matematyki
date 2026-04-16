---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
resources:
  - "interactive|resources/sequences/sequences-explorer.html|Sequences Explorer|Ciągi — eksplorator"
---
Ciąg to uporządkowana lista liczb, w której każdy wyraz ma swój numer — formalnie, funkcja z liczb naturalnych w liczby rzeczywiste.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$ (stała różnica $d$ między kolejnymi wyrazami). Ciąg geometryczny: $a_n = a_1 \cdot q^{n-1}$ (stały iloraz $q$).<br><br>Sumy: arytmetyczny $S_n = \frac{n(a_1 + a_n)}{2}$, geometryczny $S_n = a_1 \cdot \frac{1 - q^n}{1 - q}$.

<!-- example -->
Na przykład: ciąg arytmetyczny $2, 5, 8, 11, \ldots$ ma $a_1 = 2$, $d = 3$. Więc $a_{10} = 2 + 9 \cdot 3 = 29$, a $S_{10} = \frac{10(2+29)}{2} = 155$.<br><br>Ciąg geometryczny $3, 6, 12, 24, \ldots$ ma $q = 2$, więc $a_5 = 3 \cdot 2^4 = 48$.
