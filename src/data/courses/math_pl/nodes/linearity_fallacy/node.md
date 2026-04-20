---
label: "The Linearity Fallacy"
labelPl: "Pułapka liniowości"
scope: logika
section: LP
level: 1
x: 200
y: 1060
resources:
  - "interactive|linearity-fallacy-warsztat.html|Linearity Fallacy Warsztat|Pułapka liniowości — Warsztat"
---
Najczęstszy błąd w matematyce szkolnej — i na maturze — to **zakładanie, że funkcja jest rozdzielna względem dodawania**. Czyli zapisy typu:<br><br>$(a + b)^2 \stackrel{?}{=} a^2 + b^2$<br>$\sqrt{a^2 + b^2} \stackrel{?}{=} a + b$<br>$\log(a + b) \stackrel{?}{=} \log a + \log b$<br>$\sin(\alpha + \beta) \stackrel{?}{=} \sin \alpha + \sin \beta$<br>$\dfrac{1}{a + b} \stackrel{?}{=} \dfrac{1}{a} + \dfrac{1}{b}$<br><br>Wszystkie te równości są **FAŁSZYWE** (z banalnymi wyjątkami typu $a = 0$). A mimo to pojawiają się w pracach maturalnych każdego roku.<br><br>**Dlaczego to się dzieje?** Intuicja przenosi własność *mnożenia przez stałą* — $c(a+b) = ca + cb$ — na *dowolną funkcję*. Ale tylko funkcje **liniowe** $f(x) = cx$ mają tę własność. Kwadrat, pierwiastek, logarytm, sinus, odwrotność — **żadna** z nich nie jest liniowa, więc żadna nie jest rozdzielna.<br><br>**Regula ogólna:** $f(a + b) \neq f(a) + f(b)$ dla praktycznie każdej funkcji, którą spotkasz w szkole. Jeśli widzisz taki zapis — sprawdź podstawieniem (np. $a = b = 1$) zanim coś napiszesz.

<!-- example -->
**Test "podstaw 1":**<br><br>$(1 + 1)^2 = 4$, ale $1^2 + 1^2 = 2$. Różne.<br><br>$\sqrt{1^2 + 1^2} = \sqrt{2} \approx 1{,}41$, ale $1 + 1 = 2$. Różne.<br><br>$\log(1 + 1) = \log 2 \approx 0{,}30$, ale $\log 1 + \log 1 = 0$. Różne.<br><br>$\sin(30° + 60°) = \sin 90° = 1$, ale $\sin 30° + \sin 60° = 0{,}5 + 0{,}87 = 1{,}37$. Różne — w dodatku przekracza 1, co dla pojedynczego sinusa jest niemożliwe.<br><br>$\dfrac{1}{1+1} = 0{,}5$, ale $\dfrac{1}{1} + \dfrac{1}{1} = 2$. Cztery razy różnica.

<!-- mistakes -->
- **$(a+b)^2 = a^2 + b^2$** — najsłynniejszy. Poprawnie: $(a+b)^2 = a^2 + 2ab + b^2$. Brakuje członu $2ab$, który geometrycznie jest powierzchnią dwóch prostokątów $a \times b$ w rozkładzie kwadratu.<br>- **$\sqrt{a^2 + b^2} = a + b$** — złamanie nierówności trójkąta. Poprawnie: $\sqrt{a^2 + b^2} \leq a + b$ (przeciwprostokątna nigdy nie jest dłuższa niż suma przyprostokątnych), z równością tylko gdy $a = 0$ lub $b = 0$.<br>- **$\log(a+b) = \log a + \log b$** — pomylenie dwóch reguł. Poprawnie: $\log(a \cdot b) = \log a + \log b$ (logarytm **iloczynu**, nie sumy). Logarytm sumy nie ma w ogóle prostej postaci.<br>- **$\sin(\alpha + \beta) = \sin \alpha + \sin \beta$** — ignoruje wzór na sinus sumy. Poprawnie: $\sin(\alpha+\beta) = \sin \alpha \cos \beta + \cos \alpha \sin \beta$. Dodatkowy sygnał: LHS zawsze $\in [-1, 1]$, a RHS może wynosić do 2 — niemożliwe dla pojedynczego sinusa.
