---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
resources:
  - "interactive|bayes-explorer.html|Bayes' Theorem — Rare Disease Test Paradox|Twierdzenie Bayesa — paradoks testu na rzadką chorobę"
  - "interactive|conditional-warsztat.html|Conditional Probability Warsztat|Prawdopodobieństwo warunkowe — Warsztat"
---
Prawdopodobieństwo warunkowe odpowiada na pytanie: jak zmienia się szansa zdarzenia, gdy wiemy, że inne zdarzenie już zaszło?<br><br>Wzór: $P(A|B) = \frac{P(A \cap B)}{P(B)}$ — prawdopodobieństwo $A$, gdy wiemy że zaszło $B$.<br><br>Bayes pozwala odwrócić warunek — z $P(B|A)$ wyliczyć $P(A|B)$. Twierdzenie Bayesa: $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$. Jeśli zdarzenia $A_i$ rozbijają przestrzeń na rozłączne przypadki, to $P(B)$ można policzyć sumując po nich: Wzór na prawdopodobieństwo całkowite: $P(B) = \sum P(B|A_i) \cdot P(A_i)$. Drzewo decyzyjne pomaga organizować obliczenia.

<!-- example -->
Na przykład: w klasie 30 osób, 12 gra w piłkę nożną, 8 gra w piłkę i koszykówkę.<br><br>$P(\text{koszykówka} | \text{piłka}) = \frac{8}{12} = \frac{2}{3}$. Wiemy, że ktoś gra w piłkę — jakie szanse, że gra też w kosza?

<!-- mistakes -->
- **$P(A|B) \neq P(B|A)$**: prawdopodobieństwo, że pacjent jest chory, gdy test pozytywny, to COŚ INNEGO niż prawdopodobieństwo pozytywnego testu u chorego. Wzór Bayesa łączy oba: $P(A|B) = \frac{P(B|A)\,P(A)}{P(B)}$ — pamiętaj o mnożeniu przez $P(A)$, inaczej mylisz kierunek.
- **Znaczenie bazy (prior)**: nawet bardzo czuły test przy rzadkiej chorobie daje przewagę fałszywych alarmów. Gdy $P(\text{chory}) = 0{,}001$ i fałszywy alarm $5\%$, to większość pozytywnych wyników dotyczy osób zdrowych. Bez uwzględnienia $P(A)$ wyjście z $P(B|A)$ prowadzi do nieintuicyjnych błędów.
- **Warunkowanie na zdarzeniu niemożliwym**: wzór $P(A|B) = \frac{P(A \cap B)}{P(B)}$ wymaga $P(B) > 0$. Jeśli $B$ ma zerowe prawdopodobieństwo (np. "wylosowano liczbę wymierną z przedziału $[0,1]$"), warunkowanie jest nieokreślone — trzeba uważać przy modelach ciągłych i podzbiorach miary zero.

<!-- see-also -->
probability

<!-- en -->
Conditional probability answers the question: how does the chance of an event change when we know that another event has already occurred?<br><br>Formula: $P(A|B) = \frac{P(A \cap B)}{P(B)}$ — the probability of $A$ given that $B$ occurred.<br><br>Bayes' theorem allows reversing the condition — from $P(B|A)$ compute $P(A|B)$. Bayes' theorem: $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$. If the events $A_i$ partition the space into disjoint cases, then $P(B)$ can be computed by summing over them: the law of total probability: $P(B) = \sum P(B|A_i) \cdot P(A_i)$. A decision tree helps organize the calculations.

<!-- example -->
For example: in a class of 30 people, 12 play football, 8 play football and basketball.<br><br>$P(\text{basketball} | \text{football}) = \frac{8}{12} = \frac{2}{3}$. We know someone plays football — what are the chances they also play basketball?

<!-- mistakes -->
- **$P(A|B) \neq P(B|A)$**: the probability that a patient is sick given a positive test is SOMETHING DIFFERENT from the probability of a positive test given a sick patient. Bayes' formula links them: $P(A|B) = \frac{P(B|A)\,P(A)}{P(B)}$ — remember to multiply by $P(A)$, otherwise you confuse the direction.
- **The importance of the base rate (prior)**: even a very sensitive test, when applied to a rare disease, gives an excess of false alarms. When $P(\text{sick}) = 0{,}001$ and the false alarm rate is $5\%$, most positive results concern healthy people. Without taking $P(A)$ into account, going from $P(B|A)$ leads to counterintuitive errors.
- **Conditioning on an impossible event**: the formula $P(A|B) = \frac{P(A \cap B)}{P(B)}$ requires $P(B) > 0$. If $B$ has zero probability (e.g. "a rational number was drawn from the interval $[0,1]$"), conditioning is undefined — care is needed in continuous models and subsets of measure zero.

<!-- see-also -->
probability
