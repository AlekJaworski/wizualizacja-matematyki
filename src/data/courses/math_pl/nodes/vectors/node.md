---
label: "Vectors"
labelPl: "Wektory"
scope: geometria_analityczna
section: LR
level: 3
x: 660
y: 870
resources:
  - "interactive|vectors-explorer.html|Vectors Explorer|Eksplorator wektorów"
---
Wektor na płaszczyźnie to odcinek skierowany — ma długość i kierunek, ale nie jest przywiązany do konkretnego punktu. W układzie współrzędnych zapisujemy go jako parę liczb $\vec{u} = [a, b]$, gdzie $a$ i $b$ to przesunięcia wzdłuż osi $x$ i $y$.<br><br>Działania na wektorach wykonuje się po współrzędnych: dodawanie $[a_1, b_1] + [a_2, b_2] = [a_1+a_2,\, b_1+b_2]$, mnożenie przez skalar $k\vec{u} = [ka, kb]$, długość $|\vec{u}| = \sqrt{a^2 + b^2}$ (z twierdzenia Pitagorasa), iloczyn skalarny $\vec{u} \cdot \vec{v} = a_1 a_2 + b_1 b_2$. Iloczyn skalarny daje liczbę, a nie wektor, i pozwala szybko sprawdzić prostopadłość: $\vec{u} \perp \vec{v} \Leftrightarrow \vec{u} \cdot \vec{v} = 0$.

<!-- example -->
Niech $\vec{u} = [3, 4]$ oraz $\vec{v} = [-4, 3]$. Wtedy suma $\vec{u} + \vec{v} = [3 + (-4),\, 4 + 3] = [-1, 7]$, a długość $|\vec{u}| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$.<br><br>Iloczyn skalarny: $\vec{u} \cdot \vec{v} = 3 \cdot (-4) + 4 \cdot 3 = -12 + 12 = 0$, więc $\vec{u} \perp \vec{v}$ ✓. Geometrycznie $\vec{v}$ powstaje z $\vec{u}$ przez obrót o $90°$, co tłumaczy zerowy iloczyn skalarny.

<!-- mistakes -->
- **Iloczyn skalarny traktowany jak wektor**: $\vec{u} \cdot \vec{v}$ to liczba (skalar), a nie wektor — nie można potem napisać "współrzędnych" tego wyniku ani mnożyć go przez kolejny wektor jak iloczyn wektorowy. Sama nazwa "skalarny" o tym mówi.
- **Skrót $\vec{u}^2 = |\vec{u}|^2$ bez uzasadnienia**: równość $\vec{u} \cdot \vec{u} = |\vec{u}|^2$ rzeczywiście zachodzi, bo $a \cdot a + b \cdot b = a^2 + b^2$, ale wynika z definicji iloczynu skalarnego, a nie z "podnoszenia wektora do kwadratu". Zapis $\vec{u}^2$ jest poprawny tylko jako skrót notacyjny.
- **Pomylenie warunku równoległości i prostopadłości**: $\vec{u} \parallel \vec{v}$ wtedy i tylko wtedy, gdy ich współrzędne są proporcjonalne (czyli $a_1 b_2 - a_2 b_1 = 0$), a $\vec{u} \perp \vec{v}$ wtedy i tylko wtedy, gdy $\vec{u} \cdot \vec{v} = a_1 a_2 + b_1 b_2 = 0$. Te dwa warunki dotyczą różnych kombinacji współrzędnych — łatwo je pomylić.

<!-- see-also -->
analytic_geom
pythagoras

<!-- en -->
A vector in the plane is a directed segment — it has length and direction, but is not tied to a specific point. In coordinates we write it as a pair of numbers $\vec{u} = [a, b]$, where $a$ and $b$ are the displacements along the $x$- and $y$-axes.<br><br>Operations are done coordinate-wise: addition $[a_1, b_1] + [a_2, b_2] = [a_1+a_2,\, b_1+b_2]$, scalar multiplication $k\vec{u} = [ka, kb]$, length $|\vec{u}| = \sqrt{a^2 + b^2}$ (by the Pythagorean theorem), dot product $\vec{u} \cdot \vec{v} = a_1 a_2 + b_1 b_2$. The dot product produces a number, not a vector, and gives a quick perpendicularity test: $\vec{u} \perp \vec{v} \Leftrightarrow \vec{u} \cdot \vec{v} = 0$.

<!-- example -->
Let $\vec{u} = [3, 4]$ and $\vec{v} = [-4, 3]$. Then the sum $\vec{u} + \vec{v} = [3 + (-4),\, 4 + 3] = [-1, 7]$, and the length $|\vec{u}| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$.<br><br>Dot product: $\vec{u} \cdot \vec{v} = 3 \cdot (-4) + 4 \cdot 3 = -12 + 12 = 0$, so $\vec{u} \perp \vec{v}$ ✓. Geometrically $\vec{v}$ is obtained from $\vec{u}$ by a $90°$ rotation, which explains the zero dot product.

<!-- mistakes -->
- **Treating the dot product as a vector**: $\vec{u} \cdot \vec{v}$ is a number (a scalar), not a vector — you cannot then write "coordinates" of the result or multiply it by another vector as if it were a cross product. The name "scalar product" says exactly that.
- **Using $\vec{u}^2 = |\vec{u}|^2$ without justification**: the equality $\vec{u} \cdot \vec{u} = |\vec{u}|^2$ does hold, since $a \cdot a + b \cdot b = a^2 + b^2$, but it follows from the definition of the dot product, not from "squaring a vector". The notation $\vec{u}^2$ is acceptable only as shorthand.
- **Confusing the parallel and perpendicular conditions**: $\vec{u} \parallel \vec{v}$ if and only if their coordinates are proportional (equivalently $a_1 b_2 - a_2 b_1 = 0$), while $\vec{u} \perp \vec{v}$ if and only if $\vec{u} \cdot \vec{v} = a_1 a_2 + b_1 b_2 = 0$. These two conditions involve different combinations of coordinates — easy to mix up.

<!-- see-also -->
analytic_geom
pythagoras
