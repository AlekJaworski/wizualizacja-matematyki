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
Na przykład: $2^3 = 8$, więc $\log_2 8 = 3$.<br><br>Reguła iloczynu: $\log_2(4 \cdot 8) = \log_2 4 + \log_2 8 = 2 + 3 = 5$. Sprawdzenie: $\log_2 32 = 5$ ✓.<br><br>Zmiana podstawy: $\log_2 8 = \frac{\ln 8}{\ln 2} = \frac{2{,}08}{0{,}69} = 3$ ✓.<br><br>**Dla ciekawych — skala Richtera jest logarytmiczna.** Trzęsienie o magnitudzie $7{,}0$ nie jest „trochę mocniejsze" od trzęsienia $6{,}0$ — jest **dziesięciokrotnie mocniejsze**, bo skala Richtera mierzy $\log_{10}$ amplitudy fal sejsmicznych. Magnituda $8{,}0$ to już sto razy mocniejsze trzęsienie niż $6{,}0$. Ta sama logika dotyczy decybeli (głośność, $10\log_{10}$), pH (kwasowość, $-\log_{10}$ stężenia jonów) i magnitud gwiazd. Wszystkie te skale są logarytmiczne, bo opisują wielkości rozciągające się na wiele rzędów — a liniowa skala byłaby nieczytelna.<br><br>**Dla ciekawych — ludzka percepcja jest logarytmiczna (prawo Webera–Fechnera).** Gdy podwoimy energię dźwięku, nie słyszymy „dwa razy głośniej". Gdy dołożymy do świecy drugą, nie widzimy „dwa razy jaśniej". Psychofizyka XIX-wieczna (Weber, Fechner) ustaliła, że nasza reakcja na bodźce jest proporcjonalna do $\log$ intensywności. Stąd konstrukcja decybela: wzrost o $10$ dB odpowiada **dziesięciokrotnemu** wzrostowi energii, ale słychać to jako „dwa razy głośniej". Cyfra $10$ na pokrętle głośności nie jest więc dwa razy większa od cyfry $5$, tylko znacznie dalej — pokrętło skalibrowano pod logarytmiczne ucho.

<!-- mistakes -->
- **Dziedzina logarytmu**: argument musi być dodatni ($\log_a b$ wymaga $b > 0$, $a > 0$, $a \neq 1$). Rozwiązanie równania trzeba wrócić i sprawdzić w dziedzinie oryginalnego równania.
- **$\log(a+b) \neq \log a + \log b$**: to najczęstszy błąd. Zachodzi TYLKO $\log(a \cdot b) = \log a + \log b$.
- **Mylenie podstawy**: $\log_2 8 = 3$, a $\log 8 \approx 0{,}9$ (log dziesiętny). Zawsze sprawdź, jaka jest podstawa.

<!-- see-also -->
fn_log
fn_exp
powers

<!-- en -->
A logarithm is the inverse of exponentiation — it answers the question: to what power must the base be raised to obtain a given number?<br><br>Definition: $\log_a b = c \iff a^c = b$. The graph of $y = \log_a x$ is the reflection of $y = a^x$ across the line $y = x$.<br><br>Key properties: $\log(a \cdot b) = \log a + \log b$, $\log(a/b) = \log a - \log b$, $\log(a^n) = n \cdot \log a$. Change of base: $\log_a x = \frac{\log_b x}{\log_b a}$.

<!-- example -->
For example: $2^3 = 8$, so $\log_2 8 = 3$.<br><br>Product rule: $\log_2(4 \cdot 8) = \log_2 4 + \log_2 8 = 2 + 3 = 5$. Check: $\log_2 32 = 5$ ✓.<br><br>Change of base: $\log_2 8 = \frac{\ln 8}{\ln 2} = \frac{2{.}08}{0{.}69} = 3$ ✓.<br><br>**For the curious — the Richter scale is logarithmic.** An earthquake of magnitude $7{.}0$ is not "a bit stronger" than one of magnitude $6{.}0$ — it is **ten times stronger**, because the Richter scale measures $\log_{10}$ of the amplitude of seismic waves. Magnitude $8{.}0$ is already a hundred times stronger than $6{.}0$. The same logic applies to decibels (loudness, $10\log_{10}$), pH (acidity, $-\log_{10}$ of ion concentration), and stellar magnitudes. All these scales are logarithmic because they describe quantities spanning many orders of magnitude — a linear scale would be illegible.<br><br>**For the curious — human perception is logarithmic (Weber–Fechner law).** When we double the energy of a sound, we do not hear "twice as loud". When we add a second candle, we do not see "twice as bright". 19th-century psychophysics (Weber, Fechner) established that our reaction to stimuli is proportional to $\log$ of intensity. Hence the construction of the decibel: an increase of $10$ dB corresponds to a **tenfold** increase in energy, but is heard as "twice as loud". So the digit $10$ on the volume knob is not twice as large as the digit $5$, but much further — the knob is calibrated for a logarithmic ear.

<!-- mistakes -->
- **Domain of the logarithm**: the argument must be positive ($\log_a b$ requires $b > 0$, $a > 0$, $a \neq 1$). After solving an equation you must go back and verify within the domain of the original equation.
- **$\log(a+b) \neq \log a + \log b$**: this is the most common error. Only $\log(a \cdot b) = \log a + \log b$ holds.
- **Confusing the base**: $\log_2 8 = 3$, but $\log 8 \approx 0{.}9$ (common log). Always check what the base is.

<!-- see-also -->
fn_log
fn_exp
powers
