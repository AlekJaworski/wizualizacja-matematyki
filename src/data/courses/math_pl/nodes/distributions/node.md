---
label: "Distributions"
labelPl: "Rozkłady prawdopodobieństwa"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
resources:
  - "interactive|distributions-explorer.html|Probability Distributions Explorer|Eksplorator rozkładów prawdopodobieństwa"
---
Zmienna losowa $X$ przypisuje każdemu zdarzeniu z przestrzeni probabilistycznej liczbę. Rozróżniamy dwa typy: **dyskretne** (wynik ze zbioru przeliczalnego — np. rzut kostką, liczba orłów w serii) i **ciągłe** (wynik z przedziału — np. czas oczekiwania, wzrost człowieka).<br><br>Dla zmiennej dyskretnej rozkład opisuje **funkcja masy prawdopodobieństwa** $p(k) = P(X = k)$. Dla ciągłej — **gęstość** $f(x)$, dla której $P(a \leq X \leq b) = \int_a^b f(x)\,dx$. W obu przypadkach $\sum p(k) = 1$ lub $\int f(x)\,dx = 1$.<br><br>Dwie kluczowe charakterystyki rozkładu:<br>• **Wartość oczekiwana** $\mathbb{E}(X) = \sum k \cdot p(k)$ (lub $\int x \, f(x)\,dx$) — "średnia" w sensie probabilistycznym.<br>• **Wariancja** $\text{Var}(X) = \mathbb{E}\bigl((X - \mathbb{E}(X))^2\bigr) = \mathbb{E}(X^2) - \mathbb{E}(X)^2$ — miara rozrzutu.<br><br>Najważniejsze rozkłady: **dwumianowy** $B(n, p)$ (liczba sukcesów w $n$ próbach Bernoulliego), **Poissona** $\mathcal{P}(\lambda)$ (rzadkie zdarzenia, granica dwumianowego), **normalny** $\mathcal{N}(\mu, \sigma^2)$ (centralne twierdzenie graniczne — suma wielu niezależnych składników).

<!-- example -->
**Przykład** (dwumianowy): Rzucamy monetą 10 razy. Jakie jest prawdopodobieństwo dokładnie 3 orłów?<br><br>$X \sim B(10, 0.5)$, więc $P(X = 3) = \binom{10}{3} \cdot 0.5^3 \cdot 0.5^7 = 120 \cdot \tfrac{1}{1024} \approx 0.117$.<br><br>Wartość oczekiwana: $\mathbb{E}(X) = np = 5$. Wariancja: $\text{Var}(X) = np(1-p) = 2.5$.<br><br>**Ciekawostka** (granica Poissona): dla dużych $n$ i małych $p$, takich że $\lambda = np$ jest stałe, $B(n, p) \to \mathcal{P}(\lambda)$. To dlatego Poisson modeluje "rzadkie zdarzenia w czasie" — np. liczbę trzęsień ziemi w roku, połączeń do call center na minutę.
