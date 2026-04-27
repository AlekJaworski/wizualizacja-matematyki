---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
resources:
  - "interactive|resources/sequences/sequences-explorer.html|Sequences Explorer|Ciągi — eksplorator"
  - "interactive|resources/sequences/arith-geom-explorer.html|Arithmetic & Geometric Sequences|Ciągi arytmetyczne i geometryczne"
  - "interactive|resources/sequences/recursive-explorer.html|Recursive Sequences & Reindexing|Ciągi rekurencyjne i przeindeksowanie"
---
Ciąg to uporządkowana lista liczb, w której każdy wyraz ma swój numer — formalnie, funkcja z liczb naturalnych w liczby rzeczywiste.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$ (stała różnica $d$ między kolejnymi wyrazami). Ciąg geometryczny: $a_n = a_1 \cdot q^{n-1}$ (stały iloraz $q$).<br><br>Sumy: arytmetyczny $S_n = \frac{n(a_1 + a_n)}{2}$, geometryczny $S_n = a_1 \cdot \frac{1 - q^n}{1 - q}$.

<!-- example -->
Na przykład: ciąg arytmetyczny $2, 5, 8, 11, \ldots$ ma $a_1 = 2$, $d = 3$. Więc $a_{10} = 2 + 9 \cdot 3 = 29$, a $S_{10} = \frac{10(2+29)}{2} = 155$.<br><br>Ciąg geometryczny $3, 6, 12, 24, \ldots$ ma $q = 2$, więc $a_5 = 3 \cdot 2^4 = 48$.<br><br>**Dla ciekawych — ciąg to funkcja, a przeindeksowanie to przesunięcie wykresu.** Z definicji ciąg jest funkcją $a: \mathbb{N} \to \mathbb{R}$ z dyskretną dziedziną — więc transformacje z węzła fn_transforms stosują się wprost. Przeindeksowanie $b_k = a_{k+1}$ to po prostu przesunięcie wykresu w lewo o $1$ (czyli $y = f(x+1)$); analogicznie $c_n = -a_n$ odpowiada odbiciu względem osi indeksów, a $d_n = a_n + C$ przesunięciu pionowemu. Reguła rekurencji jest równaniem funkcyjnym na $a$, a przesunięta funkcja spełnia przesunięte równanie — dlatego $a_{n+2} = a_{n+1} + a_n$ przechodzi w $b_{k+1} = b_k + b_{k-1}$ bez zmiany postaci.

<!-- mistakes -->
- **Indeksowanie od 1 czy 0**: matura CKE indeksuje od 1 (pierwszy wyraz to $a_1$), niektóre podręczniki od 0. Zawsze sprawdź w zadaniu.
- **Wzór na $n$-ty wyraz vs rekurencyjny**: $a_n = a_1 + (n-1)d$ to postać bezpośrednia, a $a_{n+1} = a_n + d$ to rekurencja — w jednym zadaniu warto trzymać się jednej konwencji.
- **Suma $n$ wyrazów**: $S_n = \frac{n(a_1 + a_n)}{2}$ dla arytmetycznego — łatwo w pośpiechu pominąć dzielenie przez 2.

<!-- see-also -->
fn_transforms
fn_concept

<!-- en -->
A sequence is an ordered list of numbers in which each term has its index — formally, a function from the natural numbers to the real numbers.<br><br>Arithmetic sequence: $a_n = a_1 + (n-1)d$ (constant common difference $d$ between consecutive terms). Geometric sequence: $a_n = a_1 \cdot q^{n-1}$ (constant common ratio $q$).<br><br>Sums: arithmetic $S_n = \frac{n(a_1 + a_n)}{2}$, geometric $S_n = a_1 \cdot \frac{1 - q^n}{1 - q}$.

<!-- example -->
For example: the arithmetic sequence $2, 5, 8, 11, \ldots$ has $a_1 = 2$, $d = 3$. So $a_{10} = 2 + 9 \cdot 3 = 29$, and $S_{10} = \frac{10(2+29)}{2} = 155$.<br><br>The geometric sequence $3, 6, 12, 24, \ldots$ has $q = 2$, so $a_5 = 3 \cdot 2^4 = 48$.<br><br>**For the curious — a sequence is a function, and reindexing is a graph shift.** By definition a sequence is a function $a: \mathbb{N} \to \mathbb{R}$ with a discrete domain — so the transformations from the fn_transforms node apply directly. Reindexing $b_k = a_{k+1}$ is simply shifting the graph left by $1$ (i.e. $y = f(x+1)$); analogously $c_n = -a_n$ corresponds to reflection across the index axis, and $d_n = a_n + C$ to a vertical shift. A recurrence rule is a functional equation on $a$, and the shifted function satisfies the shifted equation — that is why $a_{n+2} = a_{n+1} + a_n$ becomes $b_{k+1} = b_k + b_{k-1}$ without changing form.

<!-- mistakes -->
- **Indexing from 1 or 0**: the Polish CKE matura indexes from 1 (the first term is $a_1$), some textbooks from 0. Always check the problem.
- **Closed-form vs recursive formula**: $a_n = a_1 + (n-1)d$ is the direct form, while $a_{n+1} = a_n + d$ is a recurrence — within one problem it is worth sticking to a single convention.
- **Sum of $n$ terms**: $S_n = \frac{n(a_1 + a_n)}{2}$ for arithmetic — it is easy to skip the division by 2 in a hurry.

<!-- see-also -->
fn_transforms
fn_concept
