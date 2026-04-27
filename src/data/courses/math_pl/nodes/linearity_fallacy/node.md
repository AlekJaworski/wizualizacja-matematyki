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
Jednym z najczęstszych błędów algebraicznych jest założenie, że funkcja **rozdziela się względem dodawania** — czyli zapisy typu:<br><br>$(a + b)^2 \stackrel{?}{=} a^2 + b^2$<br>$\sqrt{a^2 + b^2} \stackrel{?}{=} a + b$<br>$\log(a + b) \stackrel{?}{=} \log a + \log b$<br>$\sin(\alpha + \beta) \stackrel{?}{=} \sin \alpha + \sin \beta$<br>$\dfrac{1}{a + b} \stackrel{?}{=} \dfrac{1}{a} + \dfrac{1}{b}$<br><br>Wszystkie te równości są **fałszywe** (poza trywialnymi przypadkami, gdy np. $a = 0$). Intuicja, która za nimi stoi, wywodzi się z rozdzielności mnożenia: $c(a+b) = ca + cb$. Taką własność mają jednak wyłącznie funkcje **liniowe** postaci $f(x) = cx$ — a kwadrat, pierwiastek, logarytm, sinus czy odwrotność liniowe nie są, więc rozdzielności nie mają.<br><br>**Reguła ogólna:** $f(a + b) \neq f(a) + f(b)$ dla niemal każdej funkcji spotykanej w szkole. Gdy widzisz taki zapis, warto sprawdzić go podstawieniem (np. $a = b = 1$), zanim przepiszesz go dalej.

<!-- example -->
**Test "podstaw 1":**<br><br>$(1 + 1)^2 = 4$, a $1^2 + 1^2 = 2$ — wartości się nie zgadzają.<br><br>$\sqrt{1^2 + 1^2} = \sqrt{2} \approx 1{,}41$, podczas gdy $1 + 1 = 2$.<br><br>$\log(1 + 1) = \log 2 \approx 0{,}30$, natomiast $\log 1 + \log 1 = 0$.<br><br>$\sin(30° + 60°) = \sin 90° = 1$, a $\sin 30° + \sin 60° = 0{,}5 + 0{,}87 = 1{,}37$ — wynik przekracza $1$, co dla pojedynczego sinusa jest niemożliwe.<br><br>$\dfrac{1}{1+1} = 0{,}5$, a $\dfrac{1}{1} + \dfrac{1}{1} = 2$ — różnica czterokrotna.

<!-- mistakes -->
- **$(a+b)^2 = a^2 + b^2$** — najsłynniejszy. Poprawnie: $(a+b)^2 = a^2 + 2ab + b^2$. Brakuje członu $2ab$, który geometrycznie jest powierzchnią dwóch prostokątów $a \times b$ w rozkładzie kwadratu.<br>- **$\sqrt{a^2 + b^2} = a + b$** — złamanie nierówności trójkąta. Poprawnie: $\sqrt{a^2 + b^2} \leq a + b$ (przeciwprostokątna nigdy nie jest dłuższa niż suma przyprostokątnych), z równością tylko gdy $a = 0$ lub $b = 0$.<br>- **$\log(a+b) = \log a + \log b$** — pomylenie dwóch reguł. Poprawnie: $\log(a \cdot b) = \log a + \log b$ (logarytm **iloczynu**, nie sumy). Logarytm sumy nie ma w ogóle prostej postaci.<br>- **$\sin(\alpha + \beta) = \sin \alpha + \sin \beta$** — ignoruje wzór na sinus sumy. Poprawnie: $\sin(\alpha+\beta) = \sin \alpha \cos \beta + \cos \alpha \sin \beta$. Dodatkowy sygnał: LHS zawsze $\in [-1, 1]$, a RHS może wynosić do 2 — niemożliwe dla pojedynczego sinusa.

<!-- en -->
One of the most common algebraic errors is the assumption that a function **distributes over addition** — i.e., expressions like:<br><br>$(a + b)^2 \stackrel{?}{=} a^2 + b^2$<br>$\sqrt{a^2 + b^2} \stackrel{?}{=} a + b$<br>$\log(a + b) \stackrel{?}{=} \log a + \log b$<br>$\sin(\alpha + \beta) \stackrel{?}{=} \sin \alpha + \sin \beta$<br>$\dfrac{1}{a + b} \stackrel{?}{=} \dfrac{1}{a} + \dfrac{1}{b}$<br><br>All of these equalities are **false** (apart from trivial cases such as $a = 0$). The intuition behind them comes from the distributivity of multiplication: $c(a+b) = ca + cb$. But only **linear** functions of the form $f(x) = cx$ have this property — and squaring, square root, logarithm, sine, or reciprocal are not linear, so they do not distribute.<br><br>**General rule:** $f(a + b) \neq f(a) + f(b)$ for almost every function encountered in school. When you see such a step, it is worth checking it by substitution (e.g., $a = b = 1$) before carrying it further.

<!-- example -->
**The "plug in 1" test:**<br><br>$(1 + 1)^2 = 4$, but $1^2 + 1^2 = 2$ — the values do not match.<br><br>$\sqrt{1^2 + 1^2} = \sqrt{2} \approx 1{.}41$, while $1 + 1 = 2$.<br><br>$\log(1 + 1) = \log 2 \approx 0{.}30$, whereas $\log 1 + \log 1 = 0$.<br><br>$\sin(30° + 60°) = \sin 90° = 1$, but $\sin 30° + \sin 60° = 0{.}5 + 0{.}87 = 1{.}37$ — the result exceeds $1$, which is impossible for a single sine.<br><br>$\dfrac{1}{1+1} = 0{.}5$, but $\dfrac{1}{1} + \dfrac{1}{1} = 2$ — a fourfold difference.

<!-- mistakes -->
- **$(a+b)^2 = a^2 + b^2$** — the most famous one. Correctly: $(a+b)^2 = a^2 + 2ab + b^2$. The $2ab$ term is missing — geometrically, it is the area of two $a \times b$ rectangles in the decomposition of the square.<br>- **$\sqrt{a^2 + b^2} = a + b$** — violation of the triangle inequality. Correctly: $\sqrt{a^2 + b^2} \leq a + b$ (the hypotenuse is never longer than the sum of the legs), with equality only when $a = 0$ or $b = 0$.<br>- **$\log(a+b) = \log a + \log b$** — confusing two rules. Correctly: $\log(a \cdot b) = \log a + \log b$ (logarithm of a **product**, not a sum). The logarithm of a sum has no simple form at all.<br>- **$\sin(\alpha + \beta) = \sin \alpha + \sin \beta$** — ignores the sine-of-sum formula. Correctly: $\sin(\alpha+\beta) = \sin \alpha \cos \beta + \cos \alpha \sin \beta$. Additional signal: the LHS is always $\in [-1, 1]$, while the RHS can reach 2 — impossible for a single sine.
