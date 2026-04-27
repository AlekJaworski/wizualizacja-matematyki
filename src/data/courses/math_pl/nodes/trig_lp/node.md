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
Trygonometria na poziomie rozszerzonym wychodzi poza trójkąt prostokątny i opiera się na okręgu jednostkowym, dzięki czemu funkcje $\sin$, $\cos$ i $\tan$ są określone dla dowolnego kąta rzeczywistego, a nie tylko dla kątów ostrych.<br><br>Na okręgu jednostkowym punkt odpowiadający kątowi $\alpha$ ma współrzędne $(\cos\alpha, \sin\alpha)$, a $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$. Z tej definicji wynika tożsamość $\sin^2\alpha + \cos^2\alpha = 1$ — jest to po prostu twierdzenie Pitagorasa zapisane na okręgu o promieniu $1$. W trójkącie prostokątnym te same funkcje wyrażają się przez stosunki boków (SOH-CAH-TOA), a wartości dla kątów $30°$, $45°$ i $60°$ warto znać na pamięć, bo pojawiają się w niemal każdym zadaniu.

<!-- example -->
Wartości dla $30°$: $\sin 30° = \frac{1}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{\sin 30°}{\cos 30°} = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ (po usunięciu niewymierności z mianownika).<br><br>Sprawdzenie tożsamości: $\sin^2 30° + \cos^2 30° = \frac{1}{4} + \frac{3}{4} = 1$ ✓. Symetrycznie dla $60°$ wartości $\sin$ i $\cos$ zamieniają się miejscami: $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac{1}{2}$.

<!-- mistakes -->
- **Zamiana $\sin$ i $\cos$ przy $30°$ i $60°$**: $\sin 30° = \frac{1}{2}$, ale $\sin 60° = \frac{\sqrt{3}}{2}$ — wartości się zamieniają, bo kąty są dopełnieniami ($30° + 60° = 90°$), a $\sin\alpha = \cos(90°-\alpha)$. Łatwo wpisać nie tę wartość pod stresem.
- **$\tan 90°$ jako liczba**: dla $\alpha = 90°$ mamy $\cos 90° = 0$, więc $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac{1}{0}$ jest nieokreślone. Zapisanie $\tan 90° = \infty$ albo dowolnej konkretnej liczby to błąd — funkcja $\tan$ ma w tym punkcie asymptotę.
- **Pomylenie współrzędnych na okręgu jednostkowym**: $\cos$ to współrzędna $x$, a $\sin$ to współrzędna $y$ — w tej kolejności, bo punkt to $(\cos\alpha, \sin\alpha)$. Odwrócenie kolejności prowadzi do błędnych znaków w drugiej i czwartej ćwiartce.

<!-- see-also -->
trig_basic
trig_formulas
sin_cos_law
planimetria_lp

<!-- en -->
Extended-curriculum trigonometry moves beyond the right triangle and is built on the unit circle, so that $\sin$, $\cos$, and $\tan$ are defined for any real angle, not just acute angles.<br><br>On the unit circle, the point corresponding to angle $\alpha$ has coordinates $(\cos\alpha, \sin\alpha)$, and $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$. The identity $\sin^2\alpha + \cos^2\alpha = 1$ follows directly — it is just the Pythagorean theorem on a unit-radius circle. In a right triangle the same functions are expressed as ratios of sides (SOH-CAH-TOA), and the values at $30°$, $45°$, and $60°$ are worth memorizing, since they appear in almost every problem.

<!-- example -->
Values at $30°$: $\sin 30° = \frac{1}{2}$, $\cos 30° = \frac{\sqrt{3}}{2}$, $\tan 30° = \frac{\sin 30°}{\cos 30°} = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$ (after rationalizing the denominator).<br><br>Identity check: $\sin^2 30° + \cos^2 30° = \frac{1}{4} + \frac{3}{4} = 1$ ✓. By symmetry, at $60°$ the values of $\sin$ and $\cos$ swap: $\sin 60° = \frac{\sqrt{3}}{2}$, $\cos 60° = \frac{1}{2}$.

<!-- mistakes -->
- **Swapping $\sin$ and $\cos$ at $30°$ and $60°$**: $\sin 30° = \frac{1}{2}$, but $\sin 60° = \frac{\sqrt{3}}{2}$ — the values swap, because the angles are complementary ($30° + 60° = 90°$) and $\sin\alpha = \cos(90°-\alpha)$. Easy to write the wrong one under pressure.
- **Treating $\tan 90°$ as a number**: at $\alpha = 90°$ we have $\cos 90° = 0$, so $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac{1}{0}$ is undefined. Writing $\tan 90° = \infty$ or any specific number is an error — $\tan$ has a vertical asymptote there.
- **Mixing up unit-circle coordinates**: $\cos$ is the $x$-coordinate and $\sin$ is the $y$-coordinate — in that order, because the point is $(\cos\alpha, \sin\alpha)$. Reversing the order leads to wrong signs in the second and fourth quadrants.

<!-- see-also -->
trig_basic
trig_formulas
sin_cos_law
planimetria_lp
