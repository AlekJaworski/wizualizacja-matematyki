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
