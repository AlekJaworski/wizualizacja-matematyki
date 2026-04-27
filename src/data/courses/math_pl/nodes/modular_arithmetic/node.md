---
label: "Modular Arithmetic (optional)"
labelPl: "Arytmetyka modulo (dla ciekawych)"
scope: liczby_rzeczywiste
section: LR
level: 2
x: 220
y: 80
optional: true
resources:
  - "interactive|modular-explorer.html|Modular Arithmetic — Clock Explorer|Eksplorator arytmetyki modulo (zegar)"
---
Arytmetyka modulo to "matematyka zegarowa". Na zegarze mamy $m = 12$ godzin: $13:00 \equiv 1:00$, $25:00 \equiv 1:00$ — to jest $\pmod{12}$. Ogólnie: $a \equiv b \pmod{m}$ oznacza, że $m \mid (a-b)$, czyli $a$ i $b$ dają tę samą resztę przy dzieleniu przez $m$.<br><br>Zegar to model wizualny dla każdego modulo: dla $m=7$ mamy "7-godzinny zegar" (klasy $0,1,2,3,4,5,6$), dla $m=11$ — jedenastogodzinny, itd. Dodawanie, mnożenie i potęgowanie modulo "okręcają się" po tym zegarze.<br><br>Kluczowa obserwacja: **cechy podzielności** wynikają z zachowania się $10^k \pmod{m}$. Dla $m=3,9$: $10 \equiv 1$ → suma cyfr. Dla $m=11$: $10 \equiv -1$ → suma naprzemienna. Dla $m=2,4,5,8$: potęgi $10$ zerują się → wystarczą ostatnie cyfry.

<!-- example -->
**Przykład** ($\!384 \pmod{11}\!$): Ponieważ $10 \equiv -1 \pmod{11}$, to $10^k \equiv (-1)^k$. Stąd $384 = 3\!\cdot\!100 + 8\!\cdot\!10 + 4 \equiv 3\!\cdot\!1 + 8\!\cdot\!(-1) + 4\!\cdot\!1 = -1 \pmod{11}$. Sprawdzenie: $384 = 34\!\cdot\!11 + 10$, więc reszta to $10 \equiv -1 \pmod{11}$. ✓<br><br>**Zastosowania**: cechy podzielności, kryptografia (RSA), hash-funkcje, małe twierdzenie Fermata ($a^{p-1} \equiv 1 \pmod{p}$ dla $p$ pierwszego) — dla każdej liczby pierwszej $p$ i liczby $a$ niepodzielnej przez $p$, $a^{p-1}$ zawsze daje resztę 1 z dzielenia przez $p$.

<!-- en -->
Modular arithmetic is "clock math". On a clock we have $m = 12$ hours: $13:00 \equiv 1:00$, $25:00 \equiv 1:00$ — that is $\pmod{12}$. In general: $a \equiv b \pmod{m}$ means that $m \mid (a-b)$, i.e., $a$ and $b$ give the same remainder when divided by $m$.<br><br>The clock is a visual model for any modulus: for $m=7$ we have a "7-hour clock" (classes $0,1,2,3,4,5,6$), for $m=11$ — an eleven-hour one, etc. Addition, multiplication, and exponentiation modulo "wrap around" this clock.<br><br>Key observation: **divisibility rules** follow from the behavior of $10^k \pmod{m}$. For $m=3,9$: $10 \equiv 1$ → digit sum. For $m=11$: $10 \equiv -1$ → alternating sum. For $m=2,4,5,8$: powers of $10$ vanish → only the last digits matter.

<!-- example -->
**Example** ($\!384 \pmod{11}\!$): Since $10 \equiv -1 \pmod{11}$, we have $10^k \equiv (-1)^k$. Hence $384 = 3\!\cdot\!100 + 8\!\cdot\!10 + 4 \equiv 3\!\cdot\!1 + 8\!\cdot\!(-1) + 4\!\cdot\!1 = -1 \pmod{11}$. Check: $384 = 34\!\cdot\!11 + 10$, so the remainder is $10 \equiv -1 \pmod{11}$. ✓<br><br>**Applications**: divisibility rules, cryptography (RSA), hash functions, Fermat's little theorem ($a^{p-1} \equiv 1 \pmod{p}$ for prime $p$) — for every prime $p$ and every $a$ not divisible by $p$, $a^{p-1}$ always gives remainder 1 when divided by $p$.
