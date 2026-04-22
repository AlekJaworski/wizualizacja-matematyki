---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
resources:
  - "interactive|factoring-explorer.html|Factoring Explorer — Two Lines × Parabola|Rozkład na czynniki — dwie proste × parabola"
  - "interactive|factoring-warsztat.html|Factoring Warsztat|Rozkład na czynniki — Warsztat"
---
Rozkład na czynniki to jedno z najważniejszych narzędzi w algebrze — zamienia sumę w iloczyn, co upraszcza równania i wyrażenia.<br><br>Kluczowe metody: wyłączanie wspólnego czynnika, wzory skróconego mnożenia ($a^2 - b^2 = (a-b)(a+b)$), grupowanie wyrazów, oraz rozkład trójmianu kwadratowego na iloczyn $(x - x_1)(x - x_2)$.

<!-- example -->
Na przykład: $x^2 - 9 = (x-3)(x+3)$. Sprawdź mnożąc: $(x-3)(x+3) = x^2 + 3x - 3x - 9 = x^2 - 9$ ✓.<br><br>Albo: $x^2 - 5x + 6$ — szukasz dwóch liczb, które dają w sumie $-5$, a w iloczynie $6$: to $-2$ i $-3$, więc $(x-2)(x-3)$.

<!-- mistakes -->
- **$(a+b)^2 \neq a^2 + b^2$**: wzór to $(a+b)^2 = a^2 + 2ab + b^2$ — środkowy wyraz $2ab$ jest kluczowy. Analogicznie $(a-b)^2 = a^2 - 2ab + b^2$, a nie $a^2 - b^2$.
- **Różnica kwadratów vs kwadrat różnicy**: $a^2 - b^2 = (a-b)(a+b)$, a $a^2 - 2ab + b^2 = (a-b)^2$. Różnią się obecnością wyrazu $2ab$ — łatwo pomylić te formy, szczególnie gdy w wyrażeniu brakuje środkowego wyrazu.
- **Pominięty wspólny czynnik**: zanim sięgniesz po wzory skróconego mnożenia, wyłącz wspólny czynnik. $2x^2 - 18 = 2(x^2 - 9) = 2(x-3)(x+3)$, a nie od razu $(x-3)(x+3)$ — zgubienie dwójki zmienia wartość wyrażenia dwukrotnie.

<!-- see-also -->
quadratic_eq
polynomials
rational_expr
