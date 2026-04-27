---
label: "Function Transformations"
labelPl: "Przekształcenia wykresów funkcji"
scope: funkcje
section: LR
level: 3
x: 360
y: 440
resources:
  - "interactive|fn-transforms-warsztat.html|Function Transforms Warsztat|Przekształcenia wykresów — Warsztat"
---
Przekształcenia wykresów funkcji pozwalają z jednego znanego wykresu $y = f(x)$ szybko narysować całą rodzinę pokrewnych funkcji — bez liczenia tabelek wartości.<br><br>**Sześć rodzin przekształceń:**<br>• $y = f(x) + c$ — przesunięcie w PIONIE (w górę gdy $c > 0$, w dół gdy $c < 0$).<br>• $y = f(x + a)$ — przesunięcie w POZIOMIE. **Uwaga — w PRZECIWNĄ stronę niż znak $a$**: $f(x+2)$ przesuwa w LEWO, $f(x-2)$ w PRAWO.<br>• $y = -f(x)$ — odbicie względem osi $x$ (zewnętrzny minus zmienia znak wartości).<br>• $y = f(-x)$ — odbicie względem osi $y$ (wewnętrzny minus zmienia znak argumentu).<br>• $y = a \cdot f(x)$ dla $a > 0$ — rozciągnięcie/ściśnięcie w pionie (razy $a$).<br>• $y = f(a \cdot x)$ — rozciągnięcie/ściśnięcie w POZIOMIE — **znów kontrintuicyjne**: $f(2x)$ ściska do połowy, $f(x/2)$ rozciąga dwa razy.<br><br>**Reguła uniwersalna:** co jest NA ZEWNĄTRZ funkcji, działa w pionie zgodnie z intuicją; co jest W ŚRODKU argumentu, działa w poziomie i ODWROTNIE do intuicji.

<!-- example -->
Niech $f(x) = x^2$ (parabola z wierzchołkiem w $(0,0)$).<br><br>**Przesunięcie poziome:** $g(x) = f(x - 3) = (x - 3)^2$. Wierzchołek przesuwa się z $(0,0)$ do $(3, 0)$ — czyli w PRAWO o 3, choć w nawiasie jest minus.<br><br>**Przesunięcie pionowe:** $h(x) = f(x) + 2 = x^2 + 2$. Wierzchołek idzie z $(0,0)$ do $(0, 2)$ — w górę o 2, zgodnie z intuicją.<br><br>**Połączenie:** $k(x) = (x - 3)^2 + 2$ — wierzchołek w $(3, 2)$. To dokładnie postać kanoniczna funkcji kwadratowej.

<!-- mistakes -->
- **$f(x-2)$ przesuwa W PRAWO, nie w lewo** — kierunek łatwo wyprowadzić z podstawienia: jeśli nowe $x = 5$, to $f(5 - 2) = f(3)$, czyli wartość, którą dawniej funkcja miała w $x = 3$, pojawia się teraz w $x = 5$ — wykres przesunął się w prawo o 2.
- **$f(2x)$ ŚCISKA, nie rozciąga** — już przy małym $x$ argument rośnie szybko, więc pełny kształt mieści się na krótszym przedziale. Rozciąga natomiast $f(x/2)$.
- **Mnożenie zewnętrzne a wewnętrzne** — $2 \cdot f(x)$ działa w pionie (rozciąga wartość), a $f(2x)$ w poziomie (ściska argument); warto świadomie rozróżniać te dwa przypadki.

<!-- see-also -->
fn_quadratic
fn_concept

<!-- en -->
Function graph transformations let you quickly draw a whole family of related functions from one known graph $y = f(x)$ — without computing tables of values.<br><br>**Six families of transformations:**<br>• $y = f(x) + c$ — VERTICAL shift (up when $c > 0$, down when $c < 0$).<br>• $y = f(x + a)$ — HORIZONTAL shift. **Note — in the OPPOSITE direction to the sign of $a$**: $f(x+2)$ shifts LEFT, $f(x-2)$ shifts RIGHT.<br>• $y = -f(x)$ — reflection across the $x$-axis (the outer minus changes the sign of the value).<br>• $y = f(-x)$ — reflection across the $y$-axis (the inner minus changes the sign of the argument).<br>• $y = a \cdot f(x)$ for $a > 0$ — vertical stretch/compression (by a factor of $a$).<br>• $y = f(a \cdot x)$ — HORIZONTAL stretch/compression — **again counterintuitive**: $f(2x)$ compresses by half, $f(x/2)$ stretches by two.<br><br>**Universal rule:** what is OUTSIDE the function acts vertically and matches intuition; what is INSIDE the argument acts horizontally and is OPPOSITE to intuition.

<!-- example -->
Let $f(x) = x^2$ (a parabola with vertex at $(0,0)$).<br><br>**Horizontal shift:** $g(x) = f(x - 3) = (x - 3)^2$. The vertex moves from $(0,0)$ to $(3, 0)$ — i.e. to the RIGHT by 3, even though there is a minus inside the parentheses.<br><br>**Vertical shift:** $h(x) = f(x) + 2 = x^2 + 2$. The vertex goes from $(0,0)$ to $(0, 2)$ — up by 2, in line with intuition.<br><br>**Combination:** $k(x) = (x - 3)^2 + 2$ — vertex at $(3, 2)$. This is exactly the vertex form of a quadratic function.

<!-- mistakes -->
- **$f(x-2)$ shifts to the RIGHT, not to the left** — the direction is easy to derive by substitution: if the new $x = 5$, then $f(5 - 2) = f(3)$, i.e. the value the function previously had at $x = 3$ now appears at $x = 5$ — the graph has shifted to the right by 2.
- **$f(2x)$ COMPRESSES, it does not stretch** — even for small $x$ the argument grows quickly, so the full shape fits in a shorter interval. What stretches is $f(x/2)$.
- **Outer vs inner multiplication** — $2 \cdot f(x)$ acts vertically (stretches the value), while $f(2x)$ acts horizontally (compresses the argument); it is worth consciously distinguishing these two cases.

<!-- see-also -->
fn_quadratic
fn_concept
