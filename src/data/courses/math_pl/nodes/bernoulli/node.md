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

<!-- en -->
The Bernoulli scheme describes repeated experiments with two possible outcomes — success or failure.<br><br>We repeat the experiment $n$ times, independently. Success with probability $p$, failure with $1-p$. The probability of exactly $k$ successes: $P(k) = C(n,k) \cdot p^k \cdot (1-p)^{n-k}$.<br><br>Expected value: $E = n \cdot p$. Typical applications: coin flips, quality control, multiple testing.

<!-- example -->
For example: we flip a coin 4 times. What is the probability of exactly 3 heads?<br><br>$P(3) = C(4,3) \cdot \left(\frac{1}{2}\right)^3 \cdot \left(\frac{1}{2}\right)^1 = 4 \cdot \frac{1}{8} \cdot \frac{1}{2} = \frac{4}{16} = \frac{1}{4}$.

<!-- mistakes -->
- **$P(X=k)$ vs $P(X \ge k)$**: the Bernoulli formula $\binom{n}{k} p^k (1-p)^{n-k}$ gives the probability of EXACTLY $k$ successes. The question "at least $k$" requires the sum $P(X=k) + P(X=k+1) + \ldots + P(X=n)$, and "at most $k$" — the sum from $0$ to $k$. The first thing to do: read "exactly", "at least" or "at most".
- **Assumption of independent trials**: the formula assumes that each trial is independent and has the same $p$. Drawing 5 cards from a deck WITHOUT replacement does not satisfy these assumptions (probabilities change with each card) — Bernoulli does not work then, you need to use a different model.
- **$\binom{n}{k}$ is the binomial coefficient, not a fraction**: $\binom{5}{2} = \frac{5!}{2!\,3!} = 10$, not $\frac{5}{2} = 2{,}5$. When computing quickly, it's easy to skip the formula and write ordinary division — always check whether it's a binomial coefficient.

<!-- see-also -->
probability
combinations
binom_theorem
