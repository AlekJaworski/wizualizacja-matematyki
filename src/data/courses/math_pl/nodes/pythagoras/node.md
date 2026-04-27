---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
resources:
  - "interactive|pythagoras-explorer.html|Pythagorean Theorem Explorer|Twierdzenie Pitagorasa"
---
Twierdzenie Pitagorasa mówi, że w trójkącie prostokątnym o przyprostokątnych $a, b$ i przeciwprostokątnej $c$ zachodzi równość $a^2 + b^2 = c^2$. Przeciwprostokątna to bok leżący naprzeciw kąta prostego — zawsze najdłuższy z trzech boków.<br><br>Twierdzenie obowiązuje wyłącznie w trójkątach prostokątnych i służy przede wszystkim do obliczania długości boków, odległości między punktami w układzie współrzędnych, długości przekątnych prostokątów i prostopadłościanów, a także do sprawdzania, czy zadany trójkąt jest prostokątny (jeśli kwadraty dwóch krótszych boków sumują się do kwadratu najdłuższego, to jest).

<!-- example -->
Trójkąt prostokątny ma przyprostokątne długości $3$ i $4$. Z twierdzenia Pitagorasa $c^2 = 3^2 + 4^2 = 9 + 16 = 25$, zatem $c = \sqrt{25} = 5$.<br><br>Trójka $(3, 4, 5)$ jest najczęściej spotykaną pitagorejską trójką liczb całkowitych — warto rozpoznawać ją od razu, podobnie jak $(5, 12, 13)$ czy $(8, 15, 17)$, ponieważ pojawiają się w wielu zadaniach.

<!-- mistakes -->
- **Stosowanie twierdzenia w trójkącie nieprostokątnym**: równość $a^2 + b^2 = c^2$ zachodzi tylko wtedy, gdy kąt między bokami $a$ i $b$ jest prosty. W trójkącie ostrokątnym $a^2 + b^2 > c^2$, a w rozwartokątnym $a^2 + b^2 < c^2$ — w tych przypadkach należy sięgnąć po twierdzenie kosinusów.
- **Zamiana przeciwprostokątnej z przyprostokątną**: kwadrat przeciwprostokątnej zawsze stoi po stronie sumy, a nie odejmowania. Jeśli znamy $c$ i $a$, a szukamy $b$, to $b^2 = c^2 - a^2$, a nie $b^2 = c^2 + a^2$. Pomylenie ról boków daje wynik bezsensownie duży albo prowadzi do pierwiastka z liczby ujemnej.
- **Brak pierwiastkowania na końcu**: po wyznaczeniu $c^2 = 25$ trzeba jeszcze obliczyć $c = \sqrt{25} = 5$. Zapis $c = 25$ to wartość $c^2$, nie samego $c$ — pomyłka kosztuje wynik nawet wtedy, gdy cały rachunek był poprawny.

<!-- see-also -->
thales
trig_basic
planimetria_lp

<!-- en -->
The Pythagorean theorem states that in a right triangle with legs $a, b$ and hypotenuse $c$, the equality $a^2 + b^2 = c^2$ holds. The hypotenuse is the side opposite the right angle, and it is always the longest of the three sides.<br><br>The theorem applies only to right triangles. It is the standard tool for computing side lengths, distances between points in the coordinate plane, diagonals of rectangles and rectangular boxes, and for checking whether a given triangle is right (if the squares of the two shorter sides sum to the square of the longest, it is).

<!-- example -->
A right triangle has legs of length $3$ and $4$. By the Pythagorean theorem $c^2 = 3^2 + 4^2 = 9 + 16 = 25$, hence $c = \sqrt{25} = 5$.<br><br>The triple $(3, 4, 5)$ is the most common Pythagorean triple of integers — worth recognizing on sight, alongside $(5, 12, 13)$ and $(8, 15, 17)$, since they appear in many problems.

<!-- mistakes -->
- **Applying the theorem to a non-right triangle**: the equality $a^2 + b^2 = c^2$ holds only when the angle between sides $a$ and $b$ is right. In an acute triangle $a^2 + b^2 > c^2$, in an obtuse one $a^2 + b^2 < c^2$ — in these cases the law of cosines is the right tool.
- **Swapping the hypotenuse with a leg**: the square of the hypotenuse is always on the side of the sum, never of the subtraction. If $c$ and $a$ are known and $b$ is sought, then $b^2 = c^2 - a^2$, not $b^2 = c^2 + a^2$. Mixing up the roles either inflates the answer or leads to the square root of a negative number.
- **Forgetting the final square root**: after finding $c^2 = 25$ one still has to compute $c = \sqrt{25} = 5$. Writing $c = 25$ gives $c^2$, not $c$ itself — a slip that ruins the answer even when the rest of the calculation was correct.

<!-- see-also -->
thales
trig_basic
planimetria_lp
