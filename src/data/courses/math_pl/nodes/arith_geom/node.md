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
