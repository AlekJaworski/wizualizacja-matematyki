---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
resources:
  - "interactive|trig-eq-explorer.html|Trigonometric Equations|Równania trygonometryczne"
---
Równania trygonometryczne to równania, w których niewiadoma występuje pod znakiem funkcji $\sin$, $\cos$ lub $\tan$. Ze względu na okresowość tych funkcji rozwiązanie nie jest pojedynczą liczbą, lecz nieskończoną rodziną wartości — np. równanie $\sin x = \tfrac{1}{2}$ ma rozwiązania $x = \tfrac{\pi}{6} + 2k\pi$ oraz $x = \tfrac{5\pi}{6} + 2k\pi$, gdzie $k \in \mathbb{Z}$.<br><br>Standardowa strategia polega na sprowadzeniu równania do postaci podstawowej $\sin x = a$, $\cos x = a$ albo $\tan x = a$, a następnie odczytaniu wszystkich rozwiązań z koła trygonometrycznego. W bardziej złożonych przypadkach pomocne są wzory trygonometryczne, rozkład na czynniki oraz podstawienie nowej zmiennej za $\sin x$ lub $\cos x$.

<!-- example -->
Rozważmy równanie $2\sin^2 x - \sin x - 1 = 0$. Po podstawieniu $t = \sin x$ otrzymujemy zwykłe równanie kwadratowe $2t^2 - t - 1 = 0$, które rozkłada się jako $(2t + 1)(t - 1) = 0$, skąd $t = -\tfrac{1}{2}$ lub $t = 1$.<br><br>Wracając do zmiennej oryginalnej, mamy $\sin x = -\tfrac{1}{2}$ albo $\sin x = 1$.<br><br>Pierwsze równanie daje $x = -\tfrac{\pi}{6} + 2k\pi$ oraz $x = \tfrac{7\pi}{6} + 2k\pi$, drugie zaś $x = \tfrac{\pi}{2} + 2k\pi$, gdzie $k \in \mathbb{Z}$. Cały zbiór rozwiązań jest sumą tych trzech rodzin.

<!-- mistakes -->
- **Pominięta rodzina rozwiązań**: zapisanie samego rozwiązania głównego, np. $x = \tfrac{\pi}{6}$ zamiast $x = \tfrac{\pi}{6} + 2k\pi$, pomija nieskończenie wiele wartości spełniających równanie. Każde rozwiązanie trzeba zamknąć w rodzinie z parametrem całkowitoliczbowym $k$.
- **Pomylenie okresów**: funkcje $\sin$ i $\cos$ mają okres $2\pi$, więc do rozwiązań dopisujemy $+ 2k\pi$, natomiast $\tan$ ma okres $\pi$, więc dopisujemy $+ k\pi$. Użycie złego okresu albo dodaje rozwiązania pozorne, albo gubi część prawdziwych.
- **Podnoszenie stron do kwadratu bez kontroli**: kiedy obie strony równania są podnoszone do kwadratu, mogą pojawić się rozwiązania pozorne, które nie spełniały równania wyjściowego. Po takim przekształceniu trzeba wstawić każde wyznaczone $x$ z powrotem i sprawdzić zgodność znaków.

<!-- see-also -->
trig_basic
trig_formulas
fn_trig

<!-- en -->
Trigonometric equations are equations in which the unknown appears inside $\sin$, $\cos$, or $\tan$. Because these functions are periodic, the solution set is not a single number but an infinite family of values — for example, $\sin x = \tfrac{1}{2}$ has solutions $x = \tfrac{\pi}{6} + 2k\pi$ and $x = \tfrac{5\pi}{6} + 2k\pi$ for $k \in \mathbb{Z}$.<br><br>The standard strategy is to reduce the equation to a basic form $\sin x = a$, $\cos x = a$, or $\tan x = a$, and then read off all solutions from the unit circle. In more involved cases, trigonometric identities, factoring, and a substitution for $\sin x$ or $\cos x$ are the usual tools.

<!-- example -->
Consider the equation $2\sin^2 x - \sin x - 1 = 0$. The substitution $t = \sin x$ turns it into an ordinary quadratic $2t^2 - t - 1 = 0$, which factors as $(2t + 1)(t - 1) = 0$, giving $t = -\tfrac{1}{2}$ or $t = 1$.<br><br>Returning to the original variable, $\sin x = -\tfrac{1}{2}$ or $\sin x = 1$.<br><br>The first equation gives $x = -\tfrac{\pi}{6} + 2k\pi$ and $x = \tfrac{7\pi}{6} + 2k\pi$, while the second gives $x = \tfrac{\pi}{2} + 2k\pi$, $k \in \mathbb{Z}$. The full solution set is the union of these three families.

<!-- mistakes -->
- **Dropped family of solutions**: writing only the principal solution, e.g. $x = \tfrac{\pi}{6}$ instead of $x = \tfrac{\pi}{6} + 2k\pi$, throws away infinitely many valid values. Every answer must be wrapped in a family parameterised by an integer $k$.
- **Confusing the periods**: $\sin$ and $\cos$ have period $2\pi$, so the appended term is $+ 2k\pi$, while $\tan$ has period $\pi$, so the appended term is $+ k\pi$. Using the wrong period either introduces spurious solutions or loses real ones.
- **Squaring both sides without checking**: squaring an equation can introduce extraneous solutions that did not satisfy the original. After such a step you must substitute each candidate $x$ back and verify the signs.

<!-- see-also -->
trig_basic
trig_formulas
fn_trig
