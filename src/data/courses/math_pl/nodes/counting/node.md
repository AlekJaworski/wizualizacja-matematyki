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
