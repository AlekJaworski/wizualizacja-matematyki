---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
resources:
  - "interactive|sin-cos-law-explorer.html|Sine & Cosine Law|Tw. sinusów i cosinusów"
---
Twierdzenia sinusów i cosinusów uogólniają twierdzenie Pitagorasa na dowolne trójkąty, a nie tylko prostokątne, dzięki czemu pozwalają wyznaczyć brakujące boki i kąty w niemal każdej konfiguracji.<br><br>Twierdzenie sinusów mówi, że $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$, gdzie $R$ jest promieniem okręgu opisanego na trójkącie. Twierdzenie cosinusów ma postać $c^2 = a^2 + b^2 - 2ab\cos C$ i sprowadza się do równości Pitagorasa, kiedy $C = 90°$, ponieważ wtedy $\cos C = 0$ i wyraz korekcyjny znika.<br><br>W praktyce twierdzenia sinusów używa się, gdy znamy dwa kąty i bok (przypadki AAS oraz ASA), natomiast po twierdzenie cosinusów sięgamy w sytuacjach SAS (dwa boki i kąt między nimi) oraz SSS (trzy boki).

<!-- example -->
Niech w trójkącie $a = 5$, $b = 7$ oraz $C = 60°$ — szukamy boku $c$ leżącego naprzeciw kąta $C$.<br><br>Z twierdzenia cosinusów otrzymujemy $c^2 = 5^2 + 7^2 - 2 \cdot 5 \cdot 7 \cdot \cos 60° = 25 + 49 - 70 \cdot \tfrac{1}{2} = 74 - 35 = 39$, skąd $c = \sqrt{39}$.<br><br>Mając wszystkie trzy boki, brakujące kąty można już dopowiedzieć z twierdzenia sinusów: $\frac{\sqrt{39}}{\sin 60°} = \frac{5}{\sin A}$, więc $\sin A = \frac{5 \sin 60°}{\sqrt{39}}$.

<!-- mistakes -->
- **Znak $\cos C$ przy kącie rozwartym**: kiedy $C > 90°$, wartość $\cos C$ jest ujemna, więc wyraz $-2ab\cos C$ faktycznie dodaje się do $a^2 + b^2$, a nie odejmuje. Wstawiając wartość bez znaku można otrzymać bok krótszy niż w trójkącie prostokątnym, co przeczy geometrii.
- **Przypadek dwuznaczny SSA**: gdy z twierdzenia sinusów wyznaczamy kąt na podstawie dwóch boków i kąta nieleżącego między nimi, równanie $\sin x = k$ ma w przedziale $(0°, 180°)$ dwa rozwiązania — $x$ oraz $180° - x$. Trzeba sprawdzić, które z nich jest zgodne z sumą kątów trójkąta.
- **Niedopasowanie boku do kąta**: w obu twierdzeniach bok $a$ leży naprzeciw kąta $A$, $b$ naprzeciw $B$, a $c$ naprzeciw $C$. Pomylenie tego dopasowania prowadzi do bezsensownych wyników, nawet jeśli rachunki są poprawne arytmetycznie.

<!-- see-also -->
pythagoras
trig_basic
trig_lp
solid_geom

<!-- en -->
The laws of sines and cosines extend the Pythagorean theorem from right triangles to arbitrary triangles, letting you recover missing sides and angles from almost any configuration of given data.<br><br>The law of sines states that $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$, where $R$ is the circumradius of the triangle. The law of cosines reads $c^2 = a^2 + b^2 - 2ab\cos C$ and reduces to the Pythagorean equality when $C = 90°$, because $\cos C = 0$ and the correction term vanishes.<br><br>In practice, the sine law fits the AAS and ASA cases (two angles and a side known), while the cosine law handles SAS (two sides and the included angle) and SSS (three sides).

<!-- example -->
Suppose a triangle has $a = 5$, $b = 7$, and $C = 60°$, and we want the side $c$ opposite angle $C$.<br><br>The law of cosines gives $c^2 = 5^2 + 7^2 - 2 \cdot 5 \cdot 7 \cdot \cos 60° = 25 + 49 - 70 \cdot \tfrac{1}{2} = 74 - 35 = 39$, hence $c = \sqrt{39}$.<br><br>Once all three sides are known, the remaining angles follow from the sine law: $\frac{\sqrt{39}}{\sin 60°} = \frac{5}{\sin A}$, so $\sin A = \frac{5 \sin 60°}{\sqrt{39}}$.

<!-- mistakes -->
- **Sign of $\cos C$ for an obtuse angle**: when $C > 90°$, $\cos C$ is negative, so the term $-2ab\cos C$ actually adds to $a^2 + b^2$ rather than subtracting. Plugging in the unsigned value can yield a side shorter than in the right-angled case, which contradicts the geometry.
- **The ambiguous SSA case**: when the sine law is used to recover an angle from two sides and a non-included angle, the equation $\sin x = k$ has two solutions in $(0°, 180°)$, namely $x$ and $180° - x$. You must check which of them is consistent with the angle sum of the triangle.
- **Mismatching a side and its angle**: in both laws side $a$ lies opposite angle $A$, $b$ opposite $B$, and $c$ opposite $C$. Confusing this pairing produces nonsensical results even when the arithmetic is correct.

<!-- see-also -->
pythagoras
trig_basic
trig_lp
solid_geom
