---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
Równanie z parametrem to równanie, w którym poza niewiadomą $x$ występuje dodatkowa litera (najczęściej $m$), traktowana jako stała wartość, ale niewskazana z góry. Pytanie zwykle brzmi: dla jakich wartości parametru równanie ma określoną liczbę pierwiastków rzeczywistych albo dla jakich pierwiastki spełniają zadany warunek (np. są obu znaków dodatniego, mają przeciwne znaki, ich suma jest większa od trzech).<br><br>W przypadku trójmianu $ax^2+bx+c=0$ głównymi narzędziami są znak wyróżnika $\Delta = b^2 - 4ac$ oraz wzory Viète'a, czyli $x_1+x_2 = -b/a$ i $x_1 x_2 = c/a$. Należy jednak pamiętać, że całe rozumowanie zakłada $a \neq 0$ — przypadek $a=0$ trzeba rozpatrzyć osobno, ponieważ równanie staje się wtedy liniowe.

<!-- example -->
Dla jakich wartości $m$ równanie $x^2 - 2mx + m + 2 = 0$ ma dwa różne pierwiastki rzeczywiste? Współczynnik przy $x^2$ wynosi $1$, więc równanie jest kwadratowe dla każdego $m$, a warunkiem dwóch różnych pierwiastków jest $\Delta > 0$.<br><br>Liczymy: $\Delta = (-2m)^2 - 4 \cdot 1 \cdot (m+2) = 4m^2 - 4m - 8 = 4(m^2 - m - 2) = 4(m-2)(m+1)$. Nierówność $4(m-2)(m+1) > 0$ jest spełniona, gdy oba czynniki mają zgodny znak, czyli dla $m \in (-\infty, -1) \cup (2, +\infty)$.

<!-- mistakes -->
- **Pominięty przypadek $a = 0$**: gdy współczynnik przy $x^2$ sam zależy od parametru, dla pewnych $m$ równanie przestaje być kwadratowe i metoda wyróżnika nie ma zastosowania. Na przykład w $(m-1)x^2 + 2x + 3 = 0$ dla $m=1$ otrzymujemy równanie liniowe $2x + 3 = 0$, które ma dokładnie jeden pierwiastek — i taki przypadek trzeba uwzględnić osobno.
- **Ostra a nieostra nierówność na $\Delta$**: warunek "dwa różne pierwiastki rzeczywiste" odpowiada $\Delta > 0$, natomiast "co najmniej jeden pierwiastek rzeczywisty" (albo "pierwiastki rzeczywiste, niekoniecznie różne") to $\Delta \geq 0$. Pomylenie jednego z drugim daje błędną odpowiedź na granicach przedziału.
- **Znaki we wzorach Viète'a**: dla równania $ax^2+bx+c=0$ jest $x_1+x_2 = -b/a$, a nie $b/a$ — minus pochodzi z postaci ogólnej. Łatwo o pomyłkę zwłaszcza wtedy, gdy współczynniki są wyrażeniami z parametrem i znak ginie w przekształceniach.

<!-- see-also -->
quadratic_eq
quadratic_ineq
vieta

<!-- en -->
A parametric equation contains, besides the unknown $x$, an extra letter (usually $m$) treated as a fixed but unspecified constant. The standard question is: for which values of the parameter does the equation have a given number of real roots, or for which values do the roots satisfy a stated condition (both positive, opposite signs, sum greater than three, and so on).<br><br>For a quadratic $ax^2+bx+c=0$ the main tools are the sign of the discriminant $\Delta = b^2 - 4ac$ and Vieta's formulas: $x_1+x_2 = -b/a$ and $x_1 x_2 = c/a$. The whole argument assumes $a \neq 0$ — the case $a=0$ has to be handled separately, since the equation then becomes linear.

<!-- example -->
For which values of $m$ does $x^2 - 2mx + m + 2 = 0$ have two distinct real roots? The coefficient of $x^2$ is $1$, so the equation is quadratic for every $m$, and the condition for two distinct roots is $\Delta > 0$.<br><br>We compute: $\Delta = (-2m)^2 - 4 \cdot 1 \cdot (m+2) = 4m^2 - 4m - 8 = 4(m^2 - m - 2) = 4(m-2)(m+1)$. The inequality $4(m-2)(m+1) > 0$ holds when both factors share a sign, that is, for $m \in (-\infty, -1) \cup (2, +\infty)$.

<!-- mistakes -->
- **Skipping the case $a = 0$**: when the coefficient of $x^2$ itself depends on the parameter, the equation stops being quadratic for some $m$ and the discriminant method no longer applies. For instance, in $(m-1)x^2 + 2x + 3 = 0$ at $m=1$ we get the linear equation $2x + 3 = 0$, which has exactly one root — that case must be considered separately.
- **Strict vs non-strict inequality on $\Delta$**: "two distinct real roots" corresponds to $\Delta > 0$, while "at least one real root" (or "real roots, not necessarily distinct") corresponds to $\Delta \geq 0$. Confusing the two changes the answer at the endpoints of the interval.
- **Sign errors in Vieta's formulas**: for $ax^2+bx+c=0$ we have $x_1+x_2 = -b/a$, not $b/a$ — the minus comes from the general form. The slip is especially easy when the coefficients are themselves expressions in the parameter and the sign gets lost during simplification.

<!-- see-also -->
quadratic_eq
quadratic_ineq
vieta
