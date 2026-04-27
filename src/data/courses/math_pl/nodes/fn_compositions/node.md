---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
resources:
  - "interactive|fn-compositions-explorer.html|Function Compositions Explorer|Złożenia funkcji"
---
Złożenie funkcji $(f \circ g)(x) = f(g(x))$ to wykonanie dwóch funkcji jedna po drugiej — najpierw $g$, potem $f$. Wynik $g(x)$ staje się argumentem $f$.<br><br>Wartość złożenia można odczytać wprost z wykresów, bez podstawiania wzorów. Mając $g$ i $f$ narysowane na jednym układzie, dla wybranego $x_0$ idziemy pionowo do wykresu $g$ — uzyskujemy wysokość $g(x_0)$. Tę wysokość trzeba teraz „przerzucić" z osi $y$ na oś $x$, żeby móc ją wstawić do $f$, i właśnie do tego służy prosta $y = x$: z punktu na wykresie $g$ idziemy poziomo do tej prostej, a potem pionowo w dół na oś $x$. Stoimy teraz w punkcie $g(x_0)$ na osi i wystarczy iść pionowo do wykresu $f$ — wysokość, jaką osiągniemy, to właśnie $f(g(x_0))$.<br><br>Kolejność ma znaczenie — w ogólności $f \circ g \neq g \circ f$. Dziedziną złożenia $f \circ g$ są te argumenty $x$ z dziedziny $g$, dla których $g(x)$ należy do dziedziny $f$. Innymi słowy, do $f$ trafia tylko to, co $f$ potrafi przyjąć.

<!-- example -->
Niech $f(x) = 2x + 1$ oraz $g(x) = x^2$. Wtedy $(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$, czyli najpierw podnosimy do kwadratu, potem stosujemy $f$.<br><br>Odwrotna kolejność daje inny wynik: $(g \circ f)(x) = g(f(x)) = g(2x+1) = (2x+1)^2 = 4x^2 + 4x + 1$. Widać wyraźnie, że $f \circ g \neq g \circ f$ — wartości tych funkcji różnią się dla niemal każdego $x$.

<!-- mistakes -->
- **Odwrotna kolejność złożenia**: w zapisie $f \circ g$ to $g$ działa pierwsze, a $f$ drugie — choć $f$ jest po lewej. Liczenie $g(f(x))$ zamiast $f(g(x))$ to jeden z najczęstszych błędów, szczególnie pod presją czasu.
- **Pominięta dziedzina złożenia**: do $f \circ g$ kwalifikują się tylko te $x$, dla których $g(x)$ należy do dziedziny $f$. Na przykład jeśli $f(x) = \sqrt{x}$ i $g(x) = x - 4$, to $(f \circ g)(x) = \sqrt{x - 4}$ wymaga $x \geq 4$, mimo że dziedziną $g$ jest cały zbiór $\mathbb{R}$.
- **Mylenie złożenia z mnożeniem**: $(f \circ g)(x)$ to $f(g(x))$, a nie $f(x) \cdot g(x)$. Dla $f(x) = 2x+1$ i $g(x) = x^2$ złożenie daje $2x^2 + 1$, a iloczyn $(2x+1) \cdot x^2 = 2x^3 + x^2$ — wyniki nie mają ze sobą nic wspólnego.

<!-- see-also -->
fn_concept
fn_poly
fn_exp

<!-- en -->
The composition of functions $(f \circ g)(x) = f(g(x))$ means applying two functions one after the other — first $g$, then $f$. The result $g(x)$ becomes the argument of $f$.<br><br>You can read the value of a composition straight off the graphs, without plugging anything into a formula. With $g$ and $f$ drawn on the same axes, pick an $x_0$ and go vertically up to the graph of $g$ — you reach the height $g(x_0)$. Now you need to "transfer" that height from the $y$-axis to the $x$-axis so it can be fed into $f$, and the line $y = x$ does exactly that: from the point on $g$ go horizontally to that line, then vertically down to the $x$-axis. You are now standing at $g(x_0)$ on the $x$-axis; one more vertical step, this time to the graph of $f$, gives a height of $f(g(x_0))$ — the value of the composition.<br><br>Order matters — in general $f \circ g \neq g \circ f$. The domain of $f \circ g$ consists of those arguments $x$ in the domain of $g$ for which $g(x)$ lies in the domain of $f$. In other words, only inputs that $f$ can accept are passed on to $f$.

<!-- example -->
Let $f(x) = 2x + 1$ and $g(x) = x^2$. Then $(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$ — first square, then apply $f$.<br><br>Reversing the order gives a different result: $(g \circ f)(x) = g(f(x)) = g(2x+1) = (2x+1)^2 = 4x^2 + 4x + 1$. Clearly $f \circ g \neq g \circ f$ — the values of these functions differ for almost every $x$.

<!-- mistakes -->
- **Reversed order of composition**: in the notation $f \circ g$, $g$ is applied first and $f$ second — even though $f$ is on the left. Computing $g(f(x))$ instead of $f(g(x))$ is one of the most common mistakes, especially under time pressure.
- **Skipped domain check**: only those $x$ for which $g(x)$ belongs to the domain of $f$ qualify for $f \circ g$. For example, if $f(x) = \sqrt{x}$ and $g(x) = x - 4$, then $(f \circ g)(x) = \sqrt{x - 4}$ requires $x \geq 4$, even though the domain of $g$ alone is all of $\mathbb{R}$.
- **Confusing composition with multiplication**: $(f \circ g)(x)$ is $f(g(x))$, not $f(x) \cdot g(x)$. For $f(x) = 2x+1$ and $g(x) = x^2$ the composition gives $2x^2 + 1$, while the product $(2x+1) \cdot x^2 = 2x^3 + x^2$ — the results have nothing in common.

<!-- see-also -->
fn_concept
fn_poly
fn_exp
