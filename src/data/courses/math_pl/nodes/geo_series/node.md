---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
resources:
  - "interactive|geo-series-explorer.html|Geometric Series Explorer|Szeregi geometryczne — Eksplorator"
---
Szereg geometryczny to suma nieskończenie wielu wyrazów ciągu geometrycznego — choć składników jest nieskończenie wiele, suma może być skończona.<br><br>Postać: $S = a_1 + a_1 q + a_1 q^2 + \ldots$ Gdy $|q| < 1$, szereg jest zbieżny i $S = \frac{a_1}{1-q}$. Gdy $|q| \geq 1$, szereg jest rozbieżny (suma rośnie bez końca).<br><br>Suma częściowa $S_n = \frac{a_1(1-q^n)}{1-q}$ przybliża sumę nieskończoną z błędem $\left|\frac{a_1 q^n}{1-q}\right|$.

<!-- example -->
Na przykład: $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \ldots$ to szereg z $a_1 = \frac{1}{2}$, $q = \frac{1}{2}$. Suma: $S = \frac{1/2}{1 - 1/2} = 1$.<br><br>Ciekawe zastosowanie: $0{,}333\ldots = \frac{3}{10} + \frac{3}{100} + \frac{3}{1000} + \ldots = \frac{3/10}{1 - 1/10} = \frac{1}{3}$.
