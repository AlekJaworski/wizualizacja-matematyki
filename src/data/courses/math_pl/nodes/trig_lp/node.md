---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
resources:
  - "interactive|trig-lp-explorer.html|Trigonometry LP Explorer|Trygonometria (0°–180°)"
---
Trygonometria na poziomie podstawowym obejmuje funkcje $\sin$, $\cos$ i $\tan$ dla kątów z przedziału $\langle 0°, 180°\rangle$, czyli kątów spotykanych w dowolnym trójkącie. Definicje opierają się na trójkącie prostokątnym (SOH-CAH-TOA), a dla kątów rozwartych na półokręgu jednostkowym, gdzie punkt odpowiadający kątowi $\alpha$ ma współrzędne $(\cos\alpha, \sin\alpha)$.<br><br>Z tej definicji wynika tożsamość $\sin^2\alpha + \cos^2\alpha = 1$ — jest to twierdzenie Pitagorasa zapisane na okręgu o promieniu $1$. Wartości dla kątów $30°$, $45°$ i $60°$ warto znać na pamięć, bo pojawiają się w niemal każdym zadaniu, a dla kątów rozwartych obowiązują wzory redukcyjne $\sin(180°-\alpha) = \sin\alpha$ oraz $\cos(180°-\alpha) = -\cos\alpha$.

<!-- example -->
Wartości dla $30°$: $\sin 30° = \frac{1}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{\sin 30°}{\cos 30°} = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ (po usunięciu niewymierności z mianownika).<br><br>Sprawdzenie tożsamości: $\sin^2 30° + \cos^2 30° = \frac{1}{4} + \frac{3}{4} = 1$. Symetrycznie dla $60°$ wartości $\sin$ i $\cos$ zamieniają się miejscami: $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac{1}{2}$. Dla kąta rozwartego $150°$ wzór redukcyjny daje $\sin 150° = \sin 30° = \frac{1}{2}$ oraz $\cos 150° = -\cos 30° = -\frac{\sqrt{3}}{2}$.

<!-- mistakes -->
- **Zamiana $\sin$ i $\cos$ przy $30°$ i $60°$**: $\sin 30° = \frac{1}{2}$, ale $\sin 60° = \frac{\sqrt{3}}{2}$ — wartości się zamieniają, bo kąty są dopełnieniami ($30° + 60° = 90°$), a $\sin\alpha = \cos(90°-\alpha)$. Łatwo wpisać nie tę wartość pod stresem.
- **$\tan 90°$ jako liczba**: dla $\alpha = 90°$ mamy $\cos 90° = 0$, więc $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac{1}{0}$ jest nieokreślone. Zapisanie $\tan 90° = \infty$ albo dowolnej konkretnej liczby to błąd — funkcja $\tan$ ma w tym punkcie asymptotę.
- **Znak $\cos$ dla kątów rozwartych**: dla $\alpha \in (90°, 180°)$ kosinus jest ujemny, bo punkt na półokręgu leży po lewej stronie osi $y$. Łatwo wpisać $\cos 120° = \frac{1}{2}$ zamiast $-\frac{1}{2}$ — to częsty błąd w zadaniach z twierdzeniem cosinusów.

<!-- see-also -->
trig_basic
trig_formulas
sin_cos_law
planimetria_lp

<!-- en -->
Standard-curriculum trigonometry covers $\sin$, $\cos$, and $\tan$ for angles in the range $[0°, 180°]$ — the angles that appear in any triangle. The definitions come from the right triangle (SOH-CAH-TOA), and for obtuse angles from the unit semicircle, where the point corresponding to angle $\alpha$ has coordinates $(\cos\alpha, \sin\alpha)$.<br><br>The identity $\sin^2\alpha + \cos^2\alpha = 1$ follows directly — it is the Pythagorean theorem on a unit-radius circle. The values at $30°$, $45°$, and $60°$ are worth memorizing, since they appear in almost every problem, and for obtuse angles the reduction formulas $\sin(180°-\alpha) = \sin\alpha$ and $\cos(180°-\alpha) = -\cos\alpha$ give everything beyond $90°$.

<!-- example -->
Values at $30°$: $\sin 30° = \frac{1}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{\sin 30°}{\cos 30°} = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ (after rationalizing the denominator).<br><br>Identity check: $\sin^2 30° + \cos^2 30° = \frac{1}{4} + \frac{3}{4} = 1$. By symmetry, at $60°$ the values of $\sin$ and $\cos$ swap: $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac{1}{2}$. For the obtuse angle $150°$, the reduction formula gives $\sin 150° = \sin 30° = \frac{1}{2}$ and $\cos 150° = -\cos 30° = -\frac{\sqrt{3}}{2}$.

<!-- mistakes -->
- **Swapping $\sin$ and $\cos$ at $30°$ and $60°$**: $\sin 30° = \frac{1}{2}$, but $\sin 60° = \frac{\sqrt{3}}{2}$ — the values swap, because the angles are complementary ($30° + 60° = 90°$) and $\sin\alpha = \cos(90°-\alpha)$. Easy to write the wrong one under pressure.
- **Treating $\tan 90°$ as a number**: at $\alpha = 90°$ we have $\cos 90° = 0$, so $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac{1}{0}$ is undefined. Writing $\tan 90° = \infty$ or any specific number is an error — $\tan$ has a vertical asymptote there.
- **Sign of $\cos$ for obtuse angles**: for $\alpha \in (90°, 180°)$ the cosine is negative, because the point on the semicircle lies to the left of the $y$-axis. It is easy to write $\cos 120° = \frac{1}{2}$ instead of $-\frac{1}{2}$ — a frequent error in problems involving the law of cosines.

<!-- see-also -->
trig_basic
trig_formulas
sin_cos_law
planimetria_lp
