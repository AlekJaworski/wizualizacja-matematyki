---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
resources:
  - "interactive|fn-poly-explorer.html|Polynomial Functions|Funkcje wielomianowe"
---
Funkcja wielomianowa stopnia $n$ ma postać $f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0$, gdzie $a_n \neq 0$. Stopień wielomianu wyznacza zachowanie wykresu na końcach: dla parzystego $n$ oba ramiona biegną w tę samą stronę, a dla nieparzystego $n$ — w przeciwne, przy czym znak współczynnika $a_n$ decyduje, czy w górę, czy w dół.<br><br>Liczba pierwiastków rzeczywistych nie przekracza stopnia wielomianu, a krotność pierwiastka decyduje o tym, jak wykres zachowuje się przy osi $OX$ — przy krotności nieparzystej wykres przecina oś, a przy parzystej jedynie jej dotyka. Funkcje wielomianowe są ciągłe i gładkie, więc wykres rysujemy bez odrywania ołówka i bez ostrych załamań.

<!-- example -->
Rozważmy $f(x) = x^3 - x$. Wyłączając $x$ przed nawias i stosując wzór na różnicę kwadratów, otrzymujemy $f(x) = x(x^2 - 1) = x(x-1)(x+1)$, więc pierwiastki to $-1$, $0$ oraz $1$, każdy o krotności pierwszej.<br><br>Stopień wynosi $3$ (nieparzysty), a współczynnik przy najwyższej potędze jest dodatni, zatem dla $x \to -\infty$ mamy $f(x) \to -\infty$, a dla $x \to +\infty$ — $f(x) \to +\infty$. Wykres przecina oś $OX$ w trzech punktach i ma jedno lokalne maksimum oraz jedno lokalne minimum pomiędzy nimi.

<!-- mistakes -->
- **Stopień nie zawsze równa się liczbie pierwiastków rzeczywistych**: stopień to górne ograniczenie liczby pierwiastków w $\mathbb{R}$, ale wielomian $x^2 + 1$ stopnia drugiego nie ma żadnego pierwiastka rzeczywistego, a $x^4 + 1$ — również. Dopiero nad $\mathbb{C}$, z uwzględnieniem krotności, zachodzi równość.
- **Pominięta krotność przy szkicowaniu**: w pierwiastku o krotności parzystej wykres dotyka osi $OX$ i zawraca, a nie przecina jej, jak w pierwiastku pojedynczym. Dla $f(x) = (x-2)^2(x+1)$ wykres dotyka osi w $x=2$ i przecina ją w $x=-1$.
- **Założenie, że pierwiastki zawsze da się wyznaczyć algebraicznie**: dla wielomianów stopnia co najmniej piątego nie istnieją ogólne wzory na pierwiastki przez radyki, a w praktyce już dla stopnia trzeciego i czwartego bywa wygodniej szukać pierwiastków numerycznie lub odgadnąć je z twierdzenia o pierwiastkach wymiernych.

<!-- see-also -->
polynomials
poly_roots
fn_quadratic

<!-- en -->
A polynomial function of degree $n$ has the form $f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0$, where $a_n \neq 0$. The degree determines the end behavior of the graph: for even $n$ both arms go in the same direction, while for odd $n$ they go in opposite directions, with the sign of $a_n$ deciding whether they head up or down.<br><br>The number of real roots does not exceed the degree, and the multiplicity of a root determines how the graph behaves at the $x$-axis — at odd multiplicity the graph crosses the axis, while at even multiplicity it only touches it. Polynomial functions are continuous and smooth, so the graph is drawn without lifting the pencil and without sharp corners.

<!-- example -->
Consider $f(x) = x^3 - x$. Factoring out $x$ and applying the difference of squares, we get $f(x) = x(x^2 - 1) = x(x-1)(x+1)$, so the roots are $-1$, $0$, and $1$, each of multiplicity one.<br><br>The degree is $3$ (odd) and the leading coefficient is positive, so as $x \to -\infty$ we have $f(x) \to -\infty$, and as $x \to +\infty$ we have $f(x) \to +\infty$. The graph crosses the $x$-axis at three points and has one local maximum and one local minimum between them.

<!-- mistakes -->
- **Degree does not always equal the number of real roots**: the degree is an upper bound on the number of roots in $\mathbb{R}$, but $x^2 + 1$ of degree two has no real root at all, and neither does $x^4 + 1$. Equality only holds over $\mathbb{C}$ when multiplicities are counted.
- **Multiplicity ignored when sketching**: at a root of even multiplicity the graph touches the $x$-axis and turns back, rather than crossing it as it would at a simple root. For $f(x) = (x-2)^2(x+1)$ the graph touches the axis at $x=2$ and crosses it at $x=-1$.
- **Assuming roots can always be found algebraically**: for polynomials of degree at least five there is no general formula for the roots in terms of radicals, and in practice already at degrees three and four it is often more convenient to find roots numerically or to guess them via the rational root theorem.

<!-- see-also -->
polynomials
poly_roots
fn_quadratic
