---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
resources:
  - "interactive|resources/sequences/sequences-explorer.html|Sequences Explorer|Ciągi — eksplorator"
---
Ciągi arytmetyczne i geometryczne to dwa fundamentalne typy ciągów — jeden rośnie jednostajnie, drugi wykładniczo.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$, każdy wyraz różni się od poprzedniego o stałą $d$. Ciąg geometryczny: $a_n = a_1 \cdot q^{n-1}$, każdy wyraz jest $q$ razy większy od poprzedniego.<br><br>Arytmetyczny rośnie liniowo, geometryczny wykładniczo. Dla $|q| < 1$ ciąg geometryczny zbiega do 0, a jego suma nieskończona wynosi $S_\infty = \frac{a_1}{1-q}$.

<!-- example -->
Na przykład: arytmetyczny $1, 4, 7, 10$ ($d = 3$) vs geometryczny $1, 2, 4, 8$ ($q = 2$).<br><br>Przy $n = 10$: arytmetyczny daje $a_{10} = 28$, a geometryczny $a_{10} = 512$ — różnica między wzrostem liniowym a wykładniczym widać od razu.<br><br>Ale gdy $q = 0{,}5$: $1;\ 0{,}5;\ 0{,}25;\ 0{,}125;\ \ldots$ zbiega do $S_\infty = \frac{1}{1-0{,}5} = 2$.

<!-- mistakes -->
- **$(n-1)$, nie $n$**: wzór na wyraz to $a_n = a_1 + (n-1)d$ (arytmetyczny) i $a_n = a_1 \cdot q^{n-1}$ (geometryczny). Przy $n=1$ wykładnik lub mnożnik musi dać zero/jedynkę — bo $a_1$ to jeszcze punkt wyjścia, różnica/iloraz nie została zastosowana.
- **Rozpoznanie typu**: stała RÓŻNICA między kolejnymi wyrazami → arytmetyczny; stały ILORAZ → geometryczny. Ciąg $1, 2, 4, 7, 11, \ldots$ (różnice $1, 2, 3, 4$) nie jest ani jednym, ani drugim — wzory $a_n = a_1 + (n-1)d$ i $a_n = a_1 q^{n-1}$ tu nie obowiązują.
- **Suma geometryczna przy $q=1$**: wzór $S_n = a_1\cdot\frac{1-q^n}{1-q}$ ma zero w mianowniku. Gdy $q=1$, ciąg jest stały ($a_n = a_1$ dla każdego $n$) i $S_n = n\cdot a_1$ — zastosuj ten wzór zamiast uniwersalnego.

<!-- see-also -->
sequences
geo_series

<!-- en -->
Arithmetic and geometric sequences are two fundamental types of sequences — one grows uniformly, the other exponentially.<br><br>Arithmetic sequence: $a_n = a_1 + (n-1)d$, each term differs from the previous one by a constant $d$. Geometric sequence: $a_n = a_1 \cdot q^{n-1}$, each term is $q$ times larger than the previous one.<br><br>The arithmetic one grows linearly, the geometric one exponentially. For $|q| < 1$, the geometric sequence converges to 0, and its infinite sum equals $S_\infty = \frac{a_1}{1-q}$.

<!-- example -->
For example: arithmetic $1, 4, 7, 10$ ($d = 3$) vs geometric $1, 2, 4, 8$ ($q = 2$).<br><br>At $n = 10$: the arithmetic gives $a_{10} = 28$, and the geometric $a_{10} = 512$ — the difference between linear and exponential growth is immediately visible.<br><br>But when $q = 0{,}5$: $1;\ 0{,}5;\ 0{,}25;\ 0{,}125;\ \ldots$ converges to $S_\infty = \frac{1}{1-0{,}5} = 2$.

<!-- mistakes -->
- **$(n-1)$, not $n$**: the formula for the term is $a_n = a_1 + (n-1)d$ (arithmetic) and $a_n = a_1 \cdot q^{n-1}$ (geometric). At $n=1$ the exponent or multiplier must give zero/one — because $a_1$ is still the starting point, the common difference/ratio has not yet been applied.
- **Identifying the type**: a constant DIFFERENCE between consecutive terms → arithmetic; a constant RATIO → geometric. The sequence $1, 2, 4, 7, 11, \ldots$ (differences $1, 2, 3, 4$) is neither — the formulas $a_n = a_1 + (n-1)d$ and $a_n = a_1 q^{n-1}$ do not apply here.
- **Geometric sum at $q=1$**: the formula $S_n = a_1\cdot\frac{1-q^n}{1-q}$ has zero in the denominator. When $q=1$, the sequence is constant ($a_n = a_1$ for every $n$) and $S_n = n\cdot a_1$ — use this formula instead of the universal one.

<!-- see-also -->
sequences
geo_series
