---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
resources:
  - "interactive|geo-series-explorer.html|Geometric Series Explorer|Szeregi geometryczne — Eksplorator"
  - "interactive|geo-series-warsztat.html|Geometric Series Warsztat|Ciąg geometryczny — Warsztat zbieżności"
---
Szereg geometryczny to suma nieskończenie wielu wyrazów ciągu geometrycznego — choć składników jest nieskończenie wiele, suma może być skończona.<br><br>Postać: $S = a_1 + a_1 q + a_1 q^2 + \ldots$ Gdy $|q| < 1$, szereg jest zbieżny i $S = \frac{a_1}{1-q}$. Gdy $|q| \geq 1$, szereg jest rozbieżny (suma rośnie bez końca).<br><br>Suma częściowa $S_n = \frac{a_1(1-q^n)}{1-q}$ przybliża sumę nieskończoną z błędem $\left|\frac{a_1 q^n}{1-q}\right|$.

<!-- example -->
Na przykład: $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \ldots$ to szereg z $a_1 = \frac{1}{2}$, $q = \frac{1}{2}$. Suma: $S = \frac{1/2}{1 - 1/2} = 1$.<br><br>Zastosowanie w ułamkach okresowych: $0{,}333\ldots = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000} + \ldots = \frac{3/10}{1 - 1/10} = \frac{1}{3}$.<br><br>**Dla ciekawych — procent miesięczny vs roczny.** Pożyczka z odsetkami $10\%$ miesięcznie to nie odpowiednik $120\%$ rocznie, tylko **ponad $213\%$**: po dwunastu miesiącach dług rośnie $1{,}10^{12} \approx 3{,}14$ razy. Ten mechanizm stoi za tzw. chwilówkami — procent składany działa jak ciąg geometryczny i rośnie wykładniczo z liczbą okresów. Wzór: $\text{efektywna stopa roczna} = (1 + r)^{12} - 1$ dla stopy miesięcznej $r$; dla $r = 0{,}05$ to ok. $80\%$, dla $r = 0{,}02$ ok. $27\%$.<br><br>**Dla ciekawych — regularne oszczędzanie bije loterię.** Odkładanie $500$ zł miesięcznie przez $40$ lat przy rocznym oprocentowaniu $7\%$ daje około $1{,}3$ mln zł — to suma ciągu geometrycznego, w którym każda wpłata jest mnożona przez czynnik $(1 + r)^n$ dla malejących $n$. Wzór: $S = p \cdot \dfrac{(1+r)^n - 1}{r}$, gdzie $p$ to wpłata regularna, $r$ stopa za okres, $n$ liczba okresów. Większość „dużych wygranych" w totalizatorach ma wartość oczekiwaną znacznie niższą od tej kwoty, ale bez bajkowo niskiego prawdopodobieństwa. Ta sama matematyka co w ułamku okresowym — tylko tutaj $|q| > 1$, więc zamiast zbieżności mamy wzrost.

<!-- mistakes -->
- **Warunek zbieżności jest OSTRY**: $|q| < 1$, nie $|q| \le 1$. Dla $q = 1$ szereg $a_1 + a_1 + a_1 + \ldots$ rośnie liniowo (dla $a_1 \neq 0$), dla $q = -1$ sumy częściowe oscylują między $a_1$ i $0$ — obie te sytuacje to rozbieżność. Przed zastosowaniem wzoru $S = \dfrac{a_1}{1-q}$ sprawdź $|q|<1$.
- **$a_1$ to pierwszy wyraz szeregu, nie ciągu wyjściowego**: w sumie typu $\sum_{n=3}^{\infty} 2^{-n}$ pierwszym wyrazem jest $2^{-3} = \tfrac{1}{8}$, a nie $2^{-1}$. Niepoprawne wstawienie daje błędny wynik o czynnik potęgowy. Zapisz pierwszy składnik jawnie zanim sięgniesz po wzór.
- **Znak $q$ a kolejne wyrazy**: dla $q < 0$ wyrazy zmieniają znak naprzemiennie: $a_1, -|a_1|\cdot|q|, a_1 q^2, \ldots$. Suma jest nadal $\dfrac{a_1}{1-q}$, ale przy ręcznym sumowaniu łatwo opuścić minusy. Sprawdzenie sumą częściową $S_n = \dfrac{a_1(1-q^n)}{1-q}$ dla $n = 2, 3$ szybko wyłapie błąd znaku.

<!-- see-also -->
arith_geom
sequences

<!-- en -->
A geometric series is the sum of infinitely many terms of a geometric sequence — even though there are infinitely many summands, the sum can be finite.<br><br>Form: $S = a_1 + a_1 q + a_1 q^2 + \ldots$ When $|q| < 1$, the series converges and $S = \frac{a_1}{1-q}$. When $|q| \geq 1$, the series diverges (the sum grows without bound).<br><br>The partial sum $S_n = \frac{a_1(1-q^n)}{1-q}$ approximates the infinite sum with error $\left|\frac{a_1 q^n}{1-q}\right|$.

<!-- example -->
For example: $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \ldots$ is a series with $a_1 = \frac{1}{2}$, $q = \frac{1}{2}$. Sum: $S = \frac{1/2}{1 - 1/2} = 1$.<br><br>Application to repeating decimals: $0{.}333\ldots = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000} + \ldots = \frac{3/10}{1 - 1/10} = \frac{1}{3}$.<br><br>**For the curious — monthly vs. annual interest.** A loan with $10\%$ monthly interest is not the equivalent of $120\%$ annually, but **over $213\%$**: after twelve months the debt grows $1{.}10^{12} \approx 3{.}14$ times. This mechanism underlies so-called payday loans — compound interest works like a geometric sequence and grows exponentially with the number of periods. Formula: $\text{effective annual rate} = (1 + r)^{12} - 1$ for monthly rate $r$; for $r = 0{.}05$ that is about $80\%$, for $r = 0{.}02$ about $27\%$.<br><br>**For the curious — regular saving beats the lottery.** Setting aside $500$ zł monthly for $40$ years at an annual rate of $7\%$ gives about $1{.}3$ million zł — this is the sum of a geometric sequence in which each contribution is multiplied by the factor $(1 + r)^n$ for decreasing $n$. Formula: $S = p \cdot \dfrac{(1+r)^n - 1}{r}$, where $p$ is the regular contribution, $r$ the rate per period, $n$ the number of periods. Most "big lottery wins" have an expected value far below this amount, but without the fairy-tale-low probability. The same math as in repeating decimals — only here $|q| > 1$, so instead of convergence we get growth.

<!-- mistakes -->
- **The convergence condition is STRICT**: $|q| < 1$, not $|q| \le 1$. For $q = 1$ the series $a_1 + a_1 + a_1 + \ldots$ grows linearly (for $a_1 \neq 0$); for $q = -1$ partial sums oscillate between $a_1$ and $0$ — both are divergence. Before applying the formula $S = \dfrac{a_1}{1-q}$, check $|q|<1$.
- **$a_1$ is the first term of the series, not of the underlying sequence**: in a sum like $\sum_{n=3}^{\infty} 2^{-n}$ the first term is $2^{-3} = \tfrac{1}{8}$, not $2^{-1}$. Plugging in incorrectly gives a result off by a power factor. Write out the first term explicitly before reaching for the formula.
- **Sign of $q$ and consecutive terms**: for $q < 0$ the terms alternate in sign: $a_1, -|a_1|\cdot|q|, a_1 q^2, \ldots$. The sum is still $\dfrac{a_1}{1-q}$, but when summing by hand it is easy to drop minuses. Checking with the partial sum $S_n = \dfrac{a_1(1-q^n)}{1-q}$ for $n = 2, 3$ quickly catches a sign error.

<!-- see-also -->
arith_geom
sequences
