---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
resources:
  - "interactive|thales-explorer.html|Thales' Theorem Explorer|Twierdzenie Talesa"
---
Twierdzenie Talesa w polskiej tradycji szkolnej dotyczy proporcji odcinków powstałych przy przecięciu ramion kąta dwiema prostymi równoległymi: jeżeli proste $k$ i $l$ są równoległe i przecinają ramiona kąta o wierzchołku $O$ odpowiednio w punktach $A, B$ oraz $C, D$, to $\frac{|OA|}{|OB|} = \frac{|OC|}{|OD|}$, a w konsekwencji także $\frac{|OA|}{|AB|} = \frac{|OC|}{|CD|}$.<br><br>Założenie równoległości jest tu kluczowe — bez niego proporcje przestają być prawdziwe. Twierdzenie Talesa o kącie wpisanym opartym na średnicy (ten kąt jest prosty) bywa omawiane osobno i nie należy mylić tych dwóch wyników.<br><br>Najczęściej używa się go do wyznaczania nieznanych długości odcinków oraz do dowodzenia podobieństwa trójkątów powstałych przy takim cięciu.

<!-- example -->
Niech ramiona kąta o wierzchołku $O$ będą przecinane dwiema prostymi równoległymi. Na pierwszym ramieniu otrzymujemy punkty $A$ i $B$ takie, że $|OA| = 6$ i $|OB| = 10$, a na drugim ramieniu punkty $C$ i $D$ takie, że $|OC| = 9$, natomiast $|OD|$ jest niewiadome.<br><br>Z twierdzenia Talesa wynika $\frac{|OA|}{|OB|} = \frac{|OC|}{|OD|}$, czyli $\frac{6}{10} = \frac{9}{|OD|}$.<br><br>Stąd $|OD| = \frac{9 \cdot 10}{6} = 15$, a odcinek między prostymi równoległymi na drugim ramieniu wynosi $|CD| = |OD| - |OC| = 6$.

<!-- mistakes -->
- **Pominięte założenie o równoległości**: bez równoległości prostych przecinających ramiona kąta proporcje Talesa po prostu nie zachodzą. Sprawdzenie tego założenia powinno być pierwszym krokiem, nawet jeśli rysunek wygląda przekonująco.
- **Złe sparowanie odcinków**: w proporcji muszą stać odcinki odpowiadające sobie po obu stronach tego samego cięcia, czyli np. $|OA|$ z $|OC|$, a nie $|OA|$ z $|OD|$. Pomylenie pary daje równanie poprawne formalnie, ale liczbowo bezsensowne.
- **Stosowanie poza właściwą konfiguracją**: twierdzenie obowiązuje, gdy mamy kąt (lub dwie proste przecinające się w jednym punkcie) cięty prostymi równoległymi. Próba użycia go w trapezie albo w czworokącie ogólnym, gdzie nie ma wspólnego wierzchołka, prowadzi do błędnych wniosków.

<!-- see-also -->
pythagoras
planimetria_lp
trig_basic

<!-- en -->
In the Polish school convention, Thales' theorem concerns proportions of segments created when two parallel lines cut the arms of an angle: if lines $k$ and $l$ are parallel and meet the arms of an angle with vertex $O$ at points $A, B$ and $C, D$ respectively, then $\frac{|OA|}{|OB|} = \frac{|OC|}{|OD|}$, and consequently $\frac{|OA|}{|AB|} = \frac{|OC|}{|CD|}$.<br><br>The parallelism assumption is essential — without it the proportions fail. Thales' inscribed-angle theorem (an angle subtended by a diameter is right) is usually treated as a separate result and should not be confused with this one.<br><br>The theorem is most often used to find unknown segment lengths and to prove similarity of the triangles that arise from such a cut.

<!-- example -->
Let the arms of an angle with vertex $O$ be cut by two parallel lines. On the first arm we obtain points $A$ and $B$ with $|OA| = 6$ and $|OB| = 10$; on the second arm we obtain points $C$ and $D$ with $|OC| = 9$, while $|OD|$ is unknown.<br><br>Thales' theorem yields $\frac{|OA|}{|OB|} = \frac{|OC|}{|OD|}$, i.e. $\frac{6}{10} = \frac{9}{|OD|}$.<br><br>Hence $|OD| = \frac{9 \cdot 10}{6} = 15$, and the segment between the two parallel lines on the second arm has length $|CD| = |OD| - |OC| = 6$.

<!-- mistakes -->
- **Missing parallelism assumption**: without parallel cutting lines, Thales' proportions simply do not hold. Verifying this assumption should be the first step, even when the picture looks convincing.
- **Wrong pairing of segments**: in the proportion you must match segments that correspond across the same cut, e.g. $|OA|$ with $|OC|$, not $|OA|$ with $|OD|$. Mixing up the pairing produces a formally well-posed equation that has no geometric meaning.
- **Using it outside the right configuration**: the theorem applies when an angle (or two lines meeting at a single point) is cut by parallel lines. Trying to use it on a trapezoid or a general quadrilateral, where there is no common vertex, leads to incorrect conclusions.

<!-- see-also -->
pythagoras
planimetria_lp
trig_basic
