---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
resources:
  - "interactive|deriv-apps-explorer.html|Applications of Derivatives|Zastosowania pochodnych"
  - "interactive|deriv-apps-warsztat.html|Applied Derivative Warsztat|Optymalizacja z pochodną — Warsztat"
---
Pochodna sama w sobie jest ciekawa, ale prawdziwa moc ujawnia się w trzech zastosowaniach: badanie monotoniczności, szukanie ekstremów i zadania optymalizacyjne.<br><br>Monotoniczność: jeśli $f'(x) > 0$ na przedziale, to $f$ rośnie; jeśli $f'(x) < 0$ — maleje. Używasz, gdy trzeba podać przedziały wzrostu/spadku.<br><br>Ekstrema: szukasz $x_0$, gdzie $f'(x_0) = 0$, i sprawdzasz znak $f'$ przed i po. Zmiana z $+$ na $-$ = maksimum, z $-$ na $+$ = minimum.<br><br>Optymalizacja — schemat, którego trzymaj się sztywno:<br>1. Z treści zadania wypisz, co minimalizujesz/maksymalizujesz (np. objętość, pole).<br>2. Zapisz wszystkie zmienne i powiąż je równaniem z warunków zadania.<br>3. Sprowadź do funkcji *jednej* zmiennej $f(x)$ z zaznaczoną dziedziną.<br>4. Policz $f'(x)$, przyrównaj do zera, sprawdź znak pochodnej wokół pierwiastka.

<!-- example -->
Z kartonu $20 \times 30$ cm wycinamy kwadraty o boku $x$ w rogach i składamy pudełko. Jakie $x$ daje maksymalną objętość?<br><br>Wymiary pudełka: podstawa $(20 - 2x)(30 - 2x)$, wysokość $x$. Objętość: $V(x) = x(20 - 2x)(30 - 2x)$, gdzie $x \in (0, 10)$.<br><br>Po rozwinięciu $V(x) = 4x^3 - 100x^2 + 600x \Rightarrow V'(x) = 12x^2 - 200x + 600$.<br><br>$V'(x) = 0 \Rightarrow x^2 - \tfrac{50}{3}x + 50 = 0 \Rightarrow x \approx 3{,}92$ (drugi pierwiastek odpada — poza dziedziną). Znak $V'$ zmienia się z $+$ na $-$, więc to maksimum.
