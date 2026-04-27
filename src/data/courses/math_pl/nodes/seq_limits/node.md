---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
resources:
  - "interactive|seq-limits-explorer.html|Limits of Sequences|Granice ciągów"
---
Granica ciągu to wartość, do której zbliżają się jego wyrazy, gdy wskaźnik $n$ rośnie nieograniczenie. Ciąg, który ma granicę skończoną, nazywamy zbieżnym; w przeciwnym razie mówimy, że jest rozbieżny — w szczególności rozbieżny do $+\infty$ lub $-\infty$, albo rozbieżny bez granicy (jak $a_n = (-1)^n$, którego wyrazy oscylują między $-1$ a $1$).<br><br>Wśród granic standardowych warto pamiętać $\lim_{n\to\infty} \frac{1}{n} = 0$, $\lim_{n\to\infty} q^n = 0$ dla $|q| < 1$ oraz $\lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^n = e$. Działania na granicach (suma, różnica, iloczyn, iloraz przy mianowniku różnym od zera) są dozwolone tylko wtedy, gdy granice składników są skończone — w przeciwnym razie pojawiają się symbole nieoznaczone, które trzeba rozwiązać przez przekształcenie wyrażenia.

<!-- example -->
Wyznacz granicę ciągu $a_n = \dfrac{2n+1}{n+3}$. Bezpośrednie podstawienie daje symbol $\infty/\infty$, więc dzielimy licznik i mianownik przez $n$:<br><br>$a_n = \dfrac{2 + 1/n}{1 + 3/n}$. Ponieważ $1/n \to 0$ oraz $3/n \to 0$, otrzymujemy $\lim_{n\to\infty} a_n = \dfrac{2 + 0}{1 + 0} = 2$. Ciąg jest zatem zbieżny do $2$.

<!-- mistakes -->
- **Mylenie ograniczoności ze zbieżnością**: ciąg ograniczony nie musi mieć granicy. Klasyczny kontrprzykład to $a_n = (-1)^n$ — wszystkie wyrazy mieszczą się w przedziale $[-1, 1]$, a mimo to ciąg nie jest zbieżny, bo wyrazy nie zbliżają się do żadnej jednej wartości. Zbieżność implikuje ograniczoność, ale nie odwrotnie.
- **Rozbicie granicy ilorazu, gdy obie granice są nieskończone**: zapis $\lim \frac{2n+1}{n+3} = \frac{\lim(2n+1)}{\lim(n+3)} = \frac{\infty}{\infty}$ jest nielegalny — twierdzenie o granicy ilorazu wymaga, by obie granice były skończone, a mianownik różny od zera. Symbol $\infty/\infty$ jest nieoznaczony i trzeba najpierw przekształcić wyrażenie (na przykład dzieląc przez najwyższą potęgę $n$).
- **Traktowanie $\infty$ jak liczby**: zapis $\lim a_n = \infty$ oznacza tylko, że wyrazy rosną nieograniczenie, a nie że granica jest jakąś konkretną wielkością. Wyrażenia $\infty - \infty$, $0 \cdot \infty$, $\infty/\infty$ czy $1^\infty$ są symbolami nieoznaczonymi — bez przekształcenia nic o granicy nie mówią.

<!-- see-also -->
sequences
arith_geom
limits

<!-- en -->
The limit of a sequence is the value its terms approach as the index $n$ grows without bound. A sequence with a finite limit is called convergent; otherwise it is divergent — in particular, divergent to $+\infty$ or $-\infty$, or divergent without a limit (like $a_n = (-1)^n$, whose terms oscillate between $-1$ and $1$).<br><br>Among the standard limits worth remembering are $\lim_{n\to\infty} \frac{1}{n} = 0$, $\lim_{n\to\infty} q^n = 0$ for $|q| < 1$, and $\lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^n = e$. The algebra of limits (sum, difference, product, quotient with nonzero denominator) is valid only when the component limits are finite — otherwise indeterminate forms appear and the expression has to be transformed first.

<!-- example -->
Find the limit of $a_n = \dfrac{2n+1}{n+3}$. Direct substitution gives the form $\infty/\infty$, so we divide numerator and denominator by $n$:<br><br>$a_n = \dfrac{2 + 1/n}{1 + 3/n}$. Since $1/n \to 0$ and $3/n \to 0$, we get $\lim_{n\to\infty} a_n = \dfrac{2 + 0}{1 + 0} = 2$. The sequence is therefore convergent to $2$.

<!-- mistakes -->
- **Confusing boundedness with convergence**: a bounded sequence need not have a limit. The classic counterexample is $a_n = (-1)^n$ — every term lies in $[-1, 1]$, yet the sequence is not convergent, because the terms do not approach any single value. Convergence implies boundedness, but not the other way around.
- **Splitting the quotient when both limits are infinite**: writing $\lim \frac{2n+1}{n+3} = \frac{\lim(2n+1)}{\lim(n+3)} = \frac{\infty}{\infty}$ is illegal — the quotient rule requires both limits to be finite and the denominator nonzero. The symbol $\infty/\infty$ is indeterminate, and the expression has to be transformed first (for example by dividing by the highest power of $n$).
- **Treating $\infty$ as a number**: writing $\lim a_n = \infty$ only means that the terms grow without bound, not that the limit is a specific quantity. Expressions like $\infty - \infty$, $0 \cdot \infty$, $\infty/\infty$, or $1^\infty$ are indeterminate forms — without further transformation they say nothing about the actual limit.

<!-- see-also -->
sequences
arith_geom
limits
