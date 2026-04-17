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
**Przykład** ($\!384 \pmod{11}\!$): Ponieważ $10 \equiv -1 \pmod{11}$, to $10^k \equiv (-1)^k$. Stąd $384 = 3\!\cdot\!100 + 8\!\cdot\!10 + 4 \equiv 3\!\cdot\!1 + 8\!\cdot\!(-1) + 4\!\cdot\!1 = -1 \pmod{11}$. Sprawdzenie: $384 = 34\!\cdot\!11 + 10$, więc reszta to $10 \equiv -1 \pmod{11}$. ✓<br><br>**Zastosowania**: cechy podzielności, kryptografia (RSA), hash-funkcje, małe twierdzenie Fermata ($a^{p-1} \equiv 1 \pmod{p}$ dla $p$ pierwszego).
