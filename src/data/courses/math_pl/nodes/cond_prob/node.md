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
