---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
resources:
  - "interactive|resources/abs_value/abs-value-explorer.html|Absolute Value Explorer|Wartosc bezwzgledna — odleglosc od zera"
  - "interactive|abs-value-warsztat.html|Absolute Value Warsztat|Wartość bezwzględna — Warsztat"
---
Wartość bezwzględna mierzy odległość liczby od zera na osi liczbowej — niezależnie od znaku, zawsze dostajemy wynik nieujemny.<br><br>Definicja: $|x| = x$ gdy $x \geq 0$, oraz $|x| = -x$ gdy $x < 0$. Zawsze zachodzi $|x| \geq 0$.<br><br>Równanie $|x| = a$ (dla $a > 0$) ma dwa rozwiązania: $x = a$ i $x = -a$. Nierówność $|x| < a$ oznacza $-a < x < a$. Uogólnienie: $|x - c|$ to odległość od punktu $c$.

<!-- example -->
Na przykład: $|-5| = 5$, bo $-5$ jest w odległości 5 od zera.<br><br>Równanie $|x| = 3$ daje $x = 3$ lub $x = -3$.<br><br>Nierówność $|x - 2| < 3$ oznacza $-1 < x < 5$, czyli wszystkie punkty bliżej niż 3 od punktu 2.

<!-- mistakes -->
- **Dwa przypadki**: równanie/nierówność z $|\cdot|$ rozbijamy na 2 przypadki ($\geq 0$ i $< 0$), a nie jeden "zdjęcie modułu".
- **$|a-b| \neq |a| - |b|$**: to nie jest liniowe. Na przykład $|3 - 5| = 2$, ale $|3| - |5| = -2$.
- **Nierówność $|x| < a$**: to $-a < x < a$, nie $x < a$. Minus często gubi się w rachunku.
