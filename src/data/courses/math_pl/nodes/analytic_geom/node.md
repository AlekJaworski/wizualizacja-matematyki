---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
resources:
  - "interactive|analytic-geom-explorer.html|Analytic Geometry|Geometria analityczna"
---
Geometria analityczna łączy algebrę z geometrią — punkty zapisujemy jako pary współrzędnych $(x, y)$, a figury opisujemy równaniami. Dzięki temu zadania geometryczne sprowadzają się do rachunków na liczbach.<br><br>Podstawowe narzędzia to: odległość między punktami $|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$, środek odcinka $S = \left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}\right)$, równanie prostej w postaci kierunkowej $y = ax + b$, gdzie $a$ to współczynnik kierunkowy, oraz warunki równoległości ($a_1 = a_2$) i prostopadłości ($a_1 \cdot a_2 = -1$).

<!-- example -->
Niech $A = (1, 2)$ oraz $B = (4, 6)$. Odległość: $|AB| = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$. Środek odcinka: $S = \left(\frac{1+4}{2}, \frac{2+6}{2}\right) = (2{,}5;\ 4)$.<br><br>Współczynnik kierunkowy prostej $AB$: $a = \frac{6 - 2}{4 - 1} = \frac{4}{3}$. Prosta prostopadła do $AB$ ma więc współczynnik $-\frac{3}{4}$, ponieważ $\frac{4}{3} \cdot \left(-\frac{3}{4}\right) = -1$.

<!-- mistakes -->
- **Mylenie współczynnika kierunkowego z wyrazem wolnym**: w równaniu $y = ax + b$ to $a$ odpowiada za nachylenie prostej, a $b$ za jej przecięcie z osią $OY$. Zamiana ról prowadzi do prostej o zupełnie innym przebiegu.
- **Warunek prostopadłości**: proste są prostopadłe, gdy $a_1 \cdot a_2 = -1$, a nie gdy $a_1 = -a_2$. Na przykład prosta o współczynniku $2$ jest prostopadła do prostej o współczynniku $-\frac{1}{2}$, a nie $-2$.
- **Znaki w odległości**: różnice $x_B - x_A$ oraz $y_B - y_A$ są podnoszone do kwadratu, więc kolejność punktów nie ma znaczenia — ale łatwo zgubić nawias i policzyć $x_B^2 - x_A^2$ zamiast $(x_B - x_A)^2$, co daje błędny wynik.

<!-- see-also -->
linear_eq
circle_eq
vectors

<!-- en -->
Analytic geometry connects algebra and geometry — points are recorded as pairs of coordinates $(x, y)$, and figures are described by equations. This reduces geometric problems to computations with numbers.<br><br>The basic tools are: the distance between two points $|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$, the midpoint of a segment $S = \left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}\right)$, the slope-intercept form of a line $y = ax + b$, where $a$ is the slope, and the conditions for parallel ($a_1 = a_2$) and perpendicular ($a_1 \cdot a_2 = -1$) lines.

<!-- example -->
Let $A = (1, 2)$ and $B = (4, 6)$. Distance: $|AB| = \sqrt{(4-1)^2 + (6-2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$. Midpoint: $S = \left(\frac{1+4}{2}, \frac{2+6}{2}\right) = (2.5,\ 4)$.<br><br>Slope of line $AB$: $a = \frac{6 - 2}{4 - 1} = \frac{4}{3}$. A line perpendicular to $AB$ therefore has slope $-\frac{3}{4}$, since $\frac{4}{3} \cdot \left(-\frac{3}{4}\right) = -1$.

<!-- mistakes -->
- **Confusing slope with y-intercept**: in the equation $y = ax + b$, $a$ controls the steepness of the line and $b$ its intersection with the $y$-axis. Swapping their roles gives a line with a completely different behavior.
- **Perpendicularity condition**: lines are perpendicular when $a_1 \cdot a_2 = -1$, not when $a_1 = -a_2$. For instance, a line with slope $2$ is perpendicular to a line with slope $-\frac{1}{2}$, not $-2$.
- **Signs in the distance formula**: the differences $x_B - x_A$ and $y_B - y_A$ are squared, so the order of the points does not matter — but it is easy to drop the parentheses and compute $x_B^2 - x_A^2$ instead of $(x_B - x_A)^2$, giving a wrong answer.

<!-- see-also -->
linear_eq
circle_eq
vectors
