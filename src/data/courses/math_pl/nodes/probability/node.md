---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
resources:
  - "interactive|probability-explorer.html|Probability Explorer|Eksplorator prawdopodobieństwa"
  - "interactive|probability-warsztat.html|Probability Warsztat|Prawdopodobieństwo — Warsztat"
---
Prawdopodobieństwo mierzy szansę zajścia zdarzenia — od 0 (niemożliwe) do 1 (pewne).<br><br>Prawdopodobieństwo klasyczne: $P(A) = \frac{|A|}{|\Omega|}$ — liczba zdarzeń sprzyjających dzielona przez liczbę wszystkich zdarzeń. Zdarzenie przeciwne: $P(A') = 1 - P(A)$.<br><br>Dla zdarzeń niezależnych: $P(A \cap B) = P(A) \cdot P(B)$. Dla dowolnych: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

<!-- example -->
Na przykład: kostka sześcienna. Zdarzenia parzyste: $\{2, 4, 6\}$, więc $P(\text{parzysta}) = \frac{3}{6} = \frac{1}{2}$.<br><br>Zdarzenie przeciwne: $P(\text{NIE parzysta}) = 1 - \frac{1}{2} = \frac{1}{2}$.

<!-- mistakes -->
- **Ze zwracaniem vs bez zwracania**: w zadaniu z urną musisz wyraźnie sprawdzić, czy kula wraca. Inaczej $|\Omega|$ się różni.
- **"Co najmniej 1" przez dopełnienie**: $P(\geq 1) = 1 - P(0)$, zamiast sumy $P(1)+P(2)+\ldots$ — znacznie krótsza droga.
- **Sumowanie niezależnych zdarzeń**: $P(A \cup B)$ to NIE zawsze $P(A) + P(B)$. Odejmij iloczyn, jeśli mogą wystąpić razem.

<!-- see-also -->
cond_prob
counting
bernoulli

<!-- en -->
Probability measures the chance that an event occurs — from 0 (impossible) to 1 (certain).<br><br>Classical probability: $P(A) = \frac{|A|}{|\Omega|}$ — the number of favorable outcomes divided by the number of all outcomes. Complementary event: $P(A') = 1 - P(A)$.<br><br>For independent events: $P(A \cap B) = P(A) \cdot P(B)$. For arbitrary events: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

<!-- example -->
For example: a six-sided die. Even outcomes: $\{2, 4, 6\}$, so $P(\text{even}) = \frac{3}{6} = \frac{1}{2}$.<br><br>Complementary event: $P(\text{NOT even}) = 1 - \frac{1}{2} = \frac{1}{2}$.

<!-- mistakes -->
- **With replacement vs without replacement**: in an urn problem you must explicitly check whether the ball goes back. Otherwise $|\Omega|$ differs.
- **"At least 1" via the complement**: $P(\geq 1) = 1 - P(0)$, instead of the sum $P(1)+P(2)+\ldots$ — a much shorter route.
- **Adding probabilities of independent events**: $P(A \cup B)$ is NOT always $P(A) + P(B)$. Subtract the intersection if they can occur together.

<!-- see-also -->
cond_prob
counting
bernoulli
