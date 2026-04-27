---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
resources:
  - "interactive|sign-chart-explorer.html|Sign Chart Explorer — Quadratic Inequalities|Tabelka znaków — nierówności kwadratowe"
---
Nierówności kwadratowe rozwiązujemy graficznie — wystarczy narysować parabolę i odczytać, gdzie jest powyżej lub poniżej osi X.<br><br>Postać: $ax^2 + bx + c > 0$ (lub $<, \geq, \leq$). Metoda: znajdź miejsca zerowe, narysuj schemat znaku paraboli, odczytaj przedziały spełniające nierówność.<br><br>Parabola z $a > 0$ jest ujemna między pierwiastkami, dodatnia na zewnątrz. Dla $a < 0$ — odwrotnie.

<!-- example -->
Na przykład: $x^2 - x - 6 < 0$. Pierwiastki: $x = -2$ i $x = 3$.<br><br>Parabola ($a > 0$) jest pod osią X między pierwiastkami, więc odpowiedź: $x \in (-2, 3)$.

<!-- mistakes -->
- **Znak $a$ odwraca wynik**: dla $a > 0$ parabola jest dodatnia NA ZEWNĄTRZ pierwiastków, ujemna MIĘDZY. Dla $a < 0$ — odwrotnie. Sam widok paraboli (kierunek ramion) mówi, gdzie szukać rozwiązania.
- **Ostra vs nieostra nierówność**: $x^2 - 9 > 0$ ma rozwiązanie $(-\infty, -3) \cup (3, +\infty)$ (przedziały otwarte), a $x^2 - 9 \geq 0$ to $(-\infty, -3] \cup [3, +\infty)$ (domknięte, z pierwiastkami). Nawiasy nie są kosmetyką — zmieniają zbiór rozwiązań.
- **Suma, nie iloczyn przedziałów**: rozwiązanie „$x < -3$ lub $x > 3$" zapisujemy jako $(-\infty, -3) \cup (3, +\infty)$. Użycie $\cap$ zamiast $\cup$ daje zbiór pusty — to inna operacja na zbiorach.

<!-- see-also -->
rational_expr
fn_quadratic
factoring

<!-- en -->
We solve quadratic inequalities graphically — it's enough to draw the parabola and read off where it lies above or below the X-axis.<br><br>Form: $ax^2 + bx + c > 0$ (or $<, \geq, \leq$). Method: find the zeros, sketch the sign chart of the parabola, read off the intervals satisfying the inequality.<br><br>A parabola with $a > 0$ is negative between the roots, positive outside. For $a < 0$ — the other way around.

<!-- example -->
For example: $x^2 - x - 6 < 0$. Roots: $x = -2$ and $x = 3$.<br><br>The parabola ($a > 0$) is below the X-axis between the roots, so the answer is: $x \in (-2, 3)$.

<!-- mistakes -->
- **The sign of $a$ flips the result**: for $a > 0$ the parabola is positive OUTSIDE the roots, negative BETWEEN them. For $a < 0$ — the other way round. Just looking at the parabola (the direction of the arms) tells you where to look for the solution.
- **Strict vs non-strict inequality**: $x^2 - 9 > 0$ has solution $(-\infty, -3) \cup (3, +\infty)$ (open intervals), while $x^2 - 9 \geq 0$ is $(-\infty, -3] \cup [3, +\infty)$ (closed, including the roots). The brackets aren't cosmetic — they change the solution set.
- **Union, not intersection of intervals**: the solution "$x < -3$ or $x > 3$" is written as $(-\infty, -3) \cup (3, +\infty)$. Using $\cap$ instead of $\cup$ gives the empty set — that's a different operation on sets.

<!-- see-also -->
rational_expr
fn_quadratic
factoring
