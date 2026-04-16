---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
resources:
  - "interactive|bernoulli-explorer.html|Bernoulli Explorer — Coin Flips, Histogram & Formula|Schemat Bernoulliego — rzuty monetą, histogram i wzór"
---
Schemat Bernoulliego: $n$ niezależnych powtórzeń doświadczenia z dwoma wynikami (sukces z $p$, porażka z $1-p$). $P(\text{dokładnie } k \text{ sukcesów}) = C(n,k) \cdot p^k \cdot (1-p)^{n-k}$. Wartość oczekiwana: $E = n \cdot p$. Typowe zadania: rzuty monetą, kontrola jakości, testy wielokrotne.

<!-- example -->
Na przykład: rzucamy monetą 4 razy, $P(\text{dokładnie 3 orły}) = C(4,3) \cdot \left(\frac{1}{2}\right)^3 \cdot \left(\frac{1}{2}\right)^1 = 4 \cdot \frac{1}{8} \cdot \frac{1}{2} = \frac{4}{16} = \frac{1}{4}$.
