---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
resources:
  - "interactive|resources/counting/counting-explorer.html|Counting Principles Explorer|Zasady liczenia — eksplorator"
---
Zasady liczenia to fundament kombinatoryki — pozwalają systematycznie zliczać możliwości w złożonych sytuacjach.<br><br>Reguła mnożenia: jeśli jedno zdarzenie ma $m$ możliwości, a drugie $n$, to razem jest $m \cdot n$ kombinacji. Reguła dodawania: jeśli zdarzenia się wzajemnie wykluczają, sumujemy możliwości.<br><br>Zasada szufladkowa (Dirichleta): jeśli $n+1$ obiektów umieszczamy w $n$ szufladkach, to w co najmniej jednej są $\geq 2$ obiekty. Przykład: w grupie 13 osób co najmniej dwie urodziły się w tym samym miesiącu (12 miesięcy, 13 osób).

<!-- example -->
Na przykład: 3 koszulki $\times$ 4 spodnie $= 12$ zestawów (reguła mnożenia).<br><br>Albo: wejście A ma 5 opcji, wejście B ma 3 opcje, razem $5 + 3 = 8$ opcji, jeśli się wykluczają (reguła dodawania).<br><br>**Dla ciekawych — paradoks urodzin.** W grupie już $23$ osób szansa, że co najmniej dwie mają urodziny tego samego dnia, przekracza $50\%$. Dla $50$ osób to już ponad $97\%$. Intuicja tu zawodzi, bo myślimy o liczbie osób, a nie o liczbie par — a par w grupie $n$-osobowej jest $\binom{n}{2} = \tfrac{n(n-1)}{2}$. Dla $23$ osób to $253$ pary, z których każda ma szansę $\tfrac{1}{365}$ na pokrycie się urodzin. Gdy liczba par staje się porównywalna z liczbą dni, wspólne urodziny stają się niemal pewne. Formalnie: $P(\text{żadna para}) = \dfrac{365}{365} \cdot \dfrac{364}{365} \cdot \ldots \cdot \dfrac{343}{365} \approx 0{,}49$, więc $P(\text{jakaś para}) \approx 0{,}51$. Ten sam mechanizm — „paradoks" zderzeń w rosnącej liczbie par — stoi za atakami kryptograficznymi typu *birthday attack* na funkcje skrótu.

<!-- mistakes -->
- **Mnożenie vs dodawanie**: mnożymy, gdy wybieramy KAŻDĄ rzecz po kolei („3 koszulki $\times$ 4 spodnie"), dodajemy, gdy wybór jest ALTERNATYWĄ wykluczającą („klub A albo klub B" $= 5 + 3$). Kryterium: „i" → mnożenie, „lub" (rozłączne) → dodawanie.
- **Z powtórzeniami czy bez**: ten sam element może być wybrany ponownie? 3 cyfry z $\{1,\ldots,5\}$ bez powtórzeń: $5 \cdot 4 \cdot 3 = 60$; z powtórzeniami: $5^3 = 125$. Treść zadania zawsze rozstrzyga — „różne cyfry" vs „cyfry (z możliwością powtórzenia)".
- **Z kolejnością czy bez**: permutacje liczą ułożenia (ABCD $\neq$ BACD), kombinacje — wybory (zbiór $\{A,B,C\}$ to jedna kombinacja niezależnie od kolejności). Podium: z kolejnością. Zespół 3-osobowy: bez kolejności. Dobór wzoru zależy wyłącznie od tego, czy kolejność ma znaczenie w problemie.

<!-- see-also -->
permutations
combinations
probability

<!-- en -->
Counting principles are the foundation of combinatorics — they allow systematic counting of possibilities in complex situations.<br><br>Multiplication rule: if one event has $m$ possibilities and another $n$, then there are $m \cdot n$ combinations together. Addition rule: if events are mutually exclusive, we add the possibilities.<br><br>Pigeonhole principle (Dirichlet's): if $n+1$ objects are placed in $n$ pigeonholes, then at least one contains $\geq 2$ objects. Example: in a group of 13 people, at least two were born in the same month (12 months, 13 people).

<!-- example -->
For example: 3 shirts $\times$ 4 trousers $= 12$ outfits (multiplication rule).<br><br>Or: entrance A has 5 options, entrance B has 3 options, together $5 + 3 = 8$ options, if they exclude each other (addition rule).<br><br>**For the curious — the birthday paradox.** In a group of just $23$ people, the chance that at least two share a birthday exceeds $50\%$. For $50$ people it's already over $97\%$. Intuition fails here, because we think about the number of people, not the number of pairs — and the number of pairs in an $n$-person group is $\binom{n}{2} = \tfrac{n(n-1)}{2}$. For $23$ people that's $253$ pairs, each having a chance of $\tfrac{1}{365}$ to share a birthday. When the number of pairs becomes comparable to the number of days, shared birthdays become almost certain. Formally: $P(\text{no pair}) = \dfrac{365}{365} \cdot \dfrac{364}{365} \cdot \ldots \cdot \dfrac{343}{365} \approx 0{,}49$, so $P(\text{some pair}) \approx 0{,}51$. The same mechanism — the "paradox" of collisions in a growing number of pairs — is behind cryptographic *birthday attacks* on hash functions.

<!-- mistakes -->
- **Multiplication vs addition**: we multiply when we choose EACH thing in turn ("3 shirts $\times$ 4 trousers"), we add when the choice is an EXCLUSIVE ALTERNATIVE ("club A or club B" $= 5 + 3$). Criterion: "and" → multiplication, "or" (disjoint) → addition.
- **With or without repetitions**: can the same element be chosen again? 3 digits from $\{1,\ldots,5\}$ without repetitions: $5 \cdot 4 \cdot 3 = 60$; with repetitions: $5^3 = 125$. The problem statement always decides — "different digits" vs "digits (with possible repetition)".
- **With or without order**: permutations count arrangements (ABCD $\neq$ BACD), combinations — selections (the set $\{A,B,C\}$ is one combination regardless of order). Podium: with order. 3-person team: without order. The choice of formula depends solely on whether order matters in the problem.

<!-- see-also -->
permutations
combinations
probability
