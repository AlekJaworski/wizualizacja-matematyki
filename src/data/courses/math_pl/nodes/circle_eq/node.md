---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
resources:
  - "interactive|circle-eq-explorer.html|Circle Equation Explorer|Równanie okręgu"
---
Okrąg to zbiór punktów oddalonych o tę samą wartość $r$ (promień) od ustalonego punktu $(h, k)$ (środka). Korzystając z twierdzenia Pitagorasa na trójkącie między środkiem a punktem $(x, y)$ na okręgu, dostajesz bezpośrednio **postać kanoniczną**:<br><br>$$(x - h)^2 + (y - k)^2 = r^2$$<br><br>Z równania od razu odczytasz środek $(h, k)$ i promień $r$ — bez żadnych dalszych rachunków.<br><br>Czasem okrąg zapisuje się w **postaci ogólnej** $x^2 + y^2 + Dx + Ey + F = 0$. Żeby wrócić do postaci kanonicznej, uzupełniasz kwadrat osobno dla $x$ i dla $y$ — wtedy widać środek i promień.

<!-- example -->
Równanie $(x - 2)^2 + (y + 3)^2 = 25$.<br><br>Porównaj wzorzec: $(x - h)^2 + (y - k)^2 = r^2$. Zgadza się gdy $h = 2$, $k = -3$ (bo $y + 3 = y - (-3)$), $r^2 = 25$, czyli $r = 5$.<br><br>Środek: $(2, -3)$. Promień: $5$.<br><br>**Dla ciekawych — związek z przekształceniami wykresów.** Postać kanoniczna jest dokładnie tym samym mechanizmem co **postać kanoniczna paraboli** $y = (x - h)^2 + k$ (zobacz: *Przekształcenia wykresów funkcji*). Punktem wyjścia jest **okrąg jednostkowy** $x^2 + y^2 = 1$ — środek $(0, 0)$, promień $1$. Podstawienie $x \to x - h$ przesuwa go poziomo o $h$ (przeciwnie do znaku w nawiasie), podstawienie $y \to y - k$ przesuwa pionowo o $k$, a pomnożenie prawej strony przez $r^2$ rozciąga promień $r$-krotnie. Dowolny okrąg na płaszczyźnie to okrąg jednostkowy po tych trzech operacjach: dwie translacje i jednorodne skalowanie. Ta sama zasada "wewnątrz argumentu znak działa przeciwnie do intuicji" obowiązuje tu tak samo jak przy funkcjach — i wyjaśnia, dlaczego $(x - 2)^2$ oznacza przesunięcie w **prawo** o $2$, a nie w lewo.

<!-- mistakes -->
- **Znak w nawiasie:** $(x - 2)^2$ oznacza środek w $x = 2$, a nie w $x = -2$. Wzorzec jest $(x - h)^2$, więc znak w równaniu jest przeciwny do współrzędnej środka.<br>- **Mylenie promienia z $r^2$:** w równaniu po prawej stronie stoi $r^2$, nie $r$. Dla $(x-1)^2 + (y-2)^2 = 9$ promień to $3$, nie $9$.<br>- **Postać ogólna bez uzupełniania kwadratu:** z równania $x^2 + y^2 - 4x + 6y - 12 = 0$ nie da się od razu odczytać środka. Trzeba najpierw pogrupować wyrazy i uzupełnić kwadrat — dopiero wtedy pojawia się postać kanoniczna $(x-2)^2 + (y+3)^2 = 25$.

<!-- en -->
A circle is the set of points at the same distance $r$ (the radius) from a fixed point $(h, k)$ (the center). Using the Pythagorean theorem on the triangle between the center and a point $(x, y)$ on the circle, you directly get the **standard form**:<br><br>$$(x - h)^2 + (y - k)^2 = r^2$$<br><br>From the equation you can immediately read off the center $(h, k)$ and radius $r$ — without any further calculations.<br><br>Sometimes the circle is written in **general form** $x^2 + y^2 + Dx + Ey + F = 0$. To return to the standard form, you complete the square separately for $x$ and for $y$ — then the center and radius become visible.

<!-- example -->
The equation $(x - 2)^2 + (y + 3)^2 = 25$.<br><br>Compare with the pattern: $(x - h)^2 + (y - k)^2 = r^2$. It matches when $h = 2$, $k = -3$ (because $y + 3 = y - (-3)$), $r^2 = 25$, i.e. $r = 5$.<br><br>Center: $(2, -3)$. Radius: $5$.<br><br>**For the curious — connection to graph transformations.** The standard form is exactly the same mechanism as the **vertex form of a parabola** $y = (x - h)^2 + k$ (see: *Graph transformations of functions*). The starting point is the **unit circle** $x^2 + y^2 = 1$ — center $(0, 0)$, radius $1$. The substitution $x \to x - h$ shifts it horizontally by $h$ (opposite to the sign in the parenthesis), the substitution $y \to y - k$ shifts it vertically by $k$, and multiplying the right side by $r^2$ stretches the radius $r$-fold. Any circle in the plane is the unit circle after these three operations: two translations and uniform scaling. The same principle "inside the argument the sign acts opposite to intuition" holds here just as for functions — and explains why $(x - 2)^2$ means a shift to the **right** by $2$, not to the left.

<!-- mistakes -->
- **Sign in the parenthesis:** $(x - 2)^2$ means the center at $x = 2$, not at $x = -2$. The pattern is $(x - h)^2$, so the sign in the equation is opposite to the coordinate of the center.<br>- **Confusing radius with $r^2$:** in the equation, on the right side stands $r^2$, not $r$. For $(x-1)^2 + (y-2)^2 = 9$ the radius is $3$, not $9$.<br>- **General form without completing the square:** from the equation $x^2 + y^2 - 4x + 6y - 12 = 0$ the center cannot be read off directly. You first need to group the terms and complete the square — only then does the standard form $(x-2)^2 + (y+3)^2 = 25$ appear.
