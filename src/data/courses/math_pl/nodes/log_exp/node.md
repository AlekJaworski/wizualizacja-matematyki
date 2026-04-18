---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
resources:
  - "interactive|resources/log_exp/log-exp-explorer.html|Logarithms & Exponentials Explorer|Logarytmy i wykładnicze — eksplorator"
  - "interactive|log-explorer.html|Log Explorer — Mirror of exp|Logarytm — lustro potęgi"
---
Logarytm to odwrotność potęgowania — odpowiada na pytanie: do jakiej potęgi podnieść podstawę, by otrzymać daną liczbę?<br><br>Definicja: $\log_a b = c \iff a^c = b$. Wykres $y = \log_a x$ jest odbiciem $y = a^x$ względem prostej $y = x$.<br><br>Kluczowe własności: $\log(a \cdot b) = \log a + \log b$, $\log(a/b) = \log a - \log b$, $\log(a^n) = n \cdot \log a$. Zmiana podstawy: $\log_a x = \frac{\log_b x}{\log_b a}$.

<!-- example -->
Na przykład: $2^3 = 8$, więc $\log_2 8 = 3$.<br><br>Reguła iloczynu: $\log_2(4 \cdot 8) = \log_2 4 + \log_2 8 = 2 + 3 = 5$. Sprawdzenie: $\log_2 32 = 5$ ✓.<br><br>Zmiana podstawy: $\log_2 8 = \frac{\ln 8}{\ln 2} = \frac{2{,}08}{0{,}69} = 3$ ✓.

<!-- mistakes -->
- **Dziedzina logarytmu**: argument musi być dodatni ($\log_a b$ wymaga $b > 0$, $a > 0$, $a \neq 1$). Rozwiązanie równania trzeba wrócić i sprawdzić w dziedzinie oryginalnego równania.
- **$\log(a+b) \neq \log a + \log b$**: to najczęstszy błąd. Zachodzi TYLKO $\log(a \cdot b) = \log a + \log b$.
- **Mylenie podstawy**: $\log_2 8 = 3$, a $\log 8 \approx 0{,}9$ (log dziesiętny). Zawsze sprawdź, jaka jest podstawa.
