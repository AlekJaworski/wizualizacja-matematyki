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
---
Prawdopodobieństwo warunkowe odpowiada na pytanie: jak zmienia się szansa zdarzenia, gdy wiemy, że inne zdarzenie już zaszło?<br><br>Wzór: $P(A|B) = \frac{P(A \cap B)}{P(B)}$ — prawdopodobieństwo $A$, gdy wiemy że zaszło $B$.<br><br>Twierdzenie Bayesa: $P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$. Wzór na prawdopodobieństwo całkowite: $P(B) = \sum P(B|A_i) \cdot P(A_i)$. Drzewo decyzyjne pomaga organizować obliczenia.

<!-- example -->
Na przykład: w klasie 30 osób, 12 gra w piłkę nożną, 8 gra w piłkę i koszykówkę.<br><br>$P(\text{koszykówka} | \text{piłka}) = \frac{8}{12} = \frac{2}{3}$. Wiemy, że ktoś gra w piłkę — jakie szanse, że gra też w kosza?
