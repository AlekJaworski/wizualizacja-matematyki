---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
resources:
  - "interactive|optimization-explorer.html|Optimization Explorer — Vertex, Fencing & Projectile|Optymalizacja — wierzchołek, ogrodzenie i pocisk"
---
Optymalizacja to sztuka znajdowania najlepszego rozwiązania — a funkcja kwadratowa daje eleganckie narzędzie, bo jej ekstremum (czyli najmniejsza lub największa wartość funkcji) jest w wierzchołku paraboli.<br><br>Klucz: zapisz wielkość do optymalizacji jako funkcję kwadratową jednej zmiennej. Gdy $a > 0$, wierzchołek daje minimum; gdy $a < 0$ — maksimum.<br><br>Typowe zadania: największe pole prostokąta o zadanym obwodzie, maksymalny dochód, zasięg pocisku.

<!-- example -->
Na przykład: prostokąt o obwodzie 20. Boki: $x$ i $(10 - x)$.<br><br>Pole: $P = x(10 - x) = -x^2 + 10x$. Wierzchołek paraboli: $x = 5$, $P = 25$.<br><br>Największe pole ma kwadrat $5 \times 5$.

<!-- mistakes -->
- **Dziedzina ogranicza rozwiązanie**: wierzchołek paraboli to kandydat na ekstremum tylko wtedy, gdy leży w dziedzinie zadania. Dla prostokąta o boku $x \in (0, 10)$ wierzchołek przy $x=5$ jest wewnątrz — OK. Ale dla $x \in (0, 3]$ wierzchołek przy $x=5$ jest na zewnątrz, a minimum/maksimum leży na brzegu. Zawsze najpierw zapisz dziedzinę.
- **Min czy max zależy od znaku $a$**: dla $a > 0$ (ramiona w górę) wierzchołek daje MINIMUM, dla $a < 0$ — MAKSIMUM. Wypisanie znaku $a$ przed rachunkami oszczędza stwierdzeń typu „wierzchołek to minimum" dla paraboli odwróconej.
- **Jedna zmienna, potem optymalizacja**: zanim zastosujesz wzór na wierzchołek, zredukuj problem do funkcji JEDNEJ zmiennej. Dla prostokąta o obwodzie $20$ nie optymalizuj po dwóch bokach $a, b$ jednocześnie — wykorzystaj $a + b = 10$, wstaw $b = 10 - a$ i optymalizuj po $a$.

<!-- see-also -->
fn_quadratic
deriv_apps
