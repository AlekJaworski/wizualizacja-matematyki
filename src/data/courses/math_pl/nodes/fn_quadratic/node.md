---
label: "Quadratic Function"
labelPl: "Funkcja kwadratowa"
scope: funkcje
section: LP
level: 2
x: 390
y: 700
resources:
  - "interactive|quadratic-derivation.html|Parabola Explorer — Derivation via Transformations|Eksplorator paraboli — wyprowadzenie przez przekształcenia"
---
Funkcja kwadratowa to jedna z najważniejszych funkcji w matematyce — opisuje tor rzutu, kształt mostu czy zysk firmy.<br><br>Postać ogólna: $f(x) = ax^2 + bx + c$. Postać kanoniczna: $f(x) = a(x-p)^2 + q$, gdzie $(p,q)$ to wierzchołek paraboli.<br><br>Ramiona paraboli w górę gdy $a > 0$, w dół gdy $a < 0$. Oś symetrii: $x = p$. Miejsca zerowe wyznaczamy z wyróżnika $\Delta = b^2 - 4ac$.

<!-- example -->
Na przykład: $f(x) = x^2 - 4x + 3$.<br><br>Wierzchołek: $p = \frac{4}{2} = 2$, $q = 4 - 8 + 3 = -1$, więc $(2, -1)$. Ramiona w górę ($a=1>0$).<br><br>Miejsca zerowe: $x=1$ i $x=3$ (bo $x^2 - 4x + 3 = (x-1)(x-3)$).

<!-- mistakes -->
- **Znak $a$ i kierunek ramion**: dla $a > 0$ parabola ma ramiona skierowane w górę (wartość najmniejsza w wierzchołku), dla $a < 0$ — w dół (wartość największa). Minimum albo maksimum funkcji zależy od znaku $a$, nie od znaków pozostałych współczynników.
- **Postać kanoniczna a znak $p$**: wzór $f(x) = a(x - p)^2 + q$ daje wierzchołek $(p, q)$, nie $(-p, q)$. $f(x) = (x-3)^2 + 1$ ma wierzchołek $(3, 1)$, a $f(x) = (x+3)^2 + 1$ — wierzchołek $(-3, 1)$.
- **$\Delta < 0$ nie znaczy „brak paraboli"**: ujemny wyróżnik oznacza jedynie, że parabola nie przecina osi $OX$ (nie ma miejsc zerowych w $\mathbb{R}$). Wykres nadal istnieje, ma wierzchołek i leży w całości nad osią (gdy $a > 0$) albo pod nią (gdy $a < 0$).

<!-- see-also -->
quadratic_eq
vieta
fn_transforms
