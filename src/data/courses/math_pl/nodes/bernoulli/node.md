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
Schemat Bernoulliego opisuje powtarzalne eksperymenty z dwoma możliwymi wynikami — sukces lub porażka.<br><br>Powtarzamy doświadczenie $n$ razy, niezależnie. Sukces z prawdopodobieństwem $p$, porażka z $1-p$. Prawdopodobieństwo dokładnie $k$ sukcesów: $P(k) = C(n,k) \cdot p^k \cdot (1-p)^{n-k}$.<br><br>Wartość oczekiwana: $E = n \cdot p$. Typowe zastosowania: rzuty monetą, kontrola jakości, testy wielokrotne.

<!-- example -->
Na przykład: rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo dokładnie 3 orłów?<br><br>$P(3) = C(4,3) \cdot \left(\frac{1}{2}\right)^3 \cdot \left(\frac{1}{2}\right)^1 = 4 \cdot \frac{1}{8} \cdot \frac{1}{2} = \frac{4}{16} = \frac{1}{4}$.

<!-- mistakes -->
- **$P(X=k)$ vs $P(X \ge k)$**: wzór Bernoulliego $\binom{n}{k} p^k (1-p)^{n-k}$ daje prawdopodobieństwo DOKŁADNIE $k$ sukcesów. Pytanie "co najmniej $k$" wymaga sumy $P(X=k) + P(X=k+1) + \ldots + P(X=n)$, a "co najwyżej $k$" — sumy od $0$ do $k$. Pierwsze, co zrobić: przeczytaj "dokładnie", "co najmniej" albo "co najwyżej".
- **Założenie niezależności prób**: wzór zakłada, że każda próba jest niezależna i ma to samo $p$. Losowanie 5 kart z talii BEZ zwracania nie spełnia tych założeń (prawdopodobieństwa zmieniają się z każdą kartą) — wtedy Bernoulli nie działa, trzeba użyć innego modelu.
- **$\binom{n}{k}$ to symbol Newtona, nie ułamek**: $\binom{5}{2} = \frac{5!}{2!\,3!} = 10$, a nie $\frac{5}{2} = 2{,}5$. Przy szybkim liczeniu łatwo pominąć wzór i wpisać zwykłe dzielenie — sprawdź zawsze, czy to symbol Newtona.

<!-- see-also -->
probability
combinations
binom_theorem
