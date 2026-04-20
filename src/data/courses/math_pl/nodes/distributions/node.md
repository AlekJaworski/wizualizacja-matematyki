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
**Rozkład prawdopodobieństwa** to przepis: *jakie wyniki są możliwe i z jakim prawdopodobieństwem każdy z nich się pojawia*. Rzut kostką ma rozkład: każda z liczb $1,2,3,4,5,6$ wypada z prawdopodobieństwem $\tfrac{1}{6}$. Liczba orłów w 10 rzutach monetą ma zupełnie inny rozkład — nie każdy wynik jest równie częsty, bo np. $5$ orłów wypada o wiele częściej niż $0$.<br><br>Dwie najważniejsze liczby, którymi *streszcza się* rozkład:<br>• **Wartość oczekiwana** $\mathbb{E}(X)$ — średnia, jakiej się spodziewamy, gdybyśmy powtórzyli eksperyment bardzo dużo razy. Dla kostki: $\tfrac{1+2+\dots+6}{6}=3{,}5$.<br>• **Wariancja** $\text{Var}(X)$ — jak bardzo wyniki się "rozchodzą" wokół średniej. Mały rozkład wariancji = wyniki blisko średniej, duży = rozrzut.<br><br>Trzy rozkłady, które najczęściej się pojawiają:<br>• **Dwumianowy** $B(n, p)$ — liczba sukcesów w $n$ niezależnych próbach, gdzie każda próba udaje się z prawdopodobieństwem $p$. Np. liczba orłów w $n$ rzutach monetą.<br>• **Poissona** — liczba "rzadkich" zdarzeń w ustalonym czasie (np. liczba połączeń na godzinę do infolinii).<br>• **Normalny** (Gaussa) — "krzywa dzwonowa". Pojawia się w naturze wszędzie tam, gdzie wynik jest sumą wielu małych, niezależnych wpływów (np. wzrost człowieka, błąd pomiaru).

<!-- example -->
**Rzucamy monetą 10 razy. Jakie jest prawdopodobieństwo dokładnie 3 orłów?**<br><br>Każdy rzut: orzeł z prawdopodobieństwem $p = \tfrac{1}{2}$. Liczba orłów $X \sim B(10, \tfrac{1}{2})$.<br><br>$P(X = 3) = \binom{10}{3} \cdot \left(\tfrac{1}{2}\right)^3 \cdot \left(\tfrac{1}{2}\right)^7 = 120 \cdot \tfrac{1}{1024} \approx 0{,}117$<br><br>Czyli około 12% — co trzeci raz trafimy na wynik "dokładnie 3 orły".<br><br>**Wartość oczekiwana:** $\mathbb{E}(X) = n \cdot p = 10 \cdot \tfrac{1}{2} = 5$ orłów. Intuicyjnie: rzucając monetą 10 razy *spodziewamy się* 5 orłów. To nie znaczy, że zawsze tyle wypada — ale to średnia z długiej serii powtórzeń eksperymentu.

<!-- mistakes -->
- **Mylenie $\mathbb{E}(X)$ z "najbardziej prawdopodobnym wynikiem"** — to nie to samo. Dla kostki $\mathbb{E}(X)=3{,}5$, ale 3.5 nigdy nie wypadnie. Wartość oczekiwana to średnia z długiej serii, nie typowy wynik.<br>- **Używanie rozkładu dwumianowego gdy próby nie są niezależne** — np. "ile czerwonych kart wyciągnę w 5 dobraniach z talii bez zwracania". Każde dobranie zmienia resztę talii, więc to NIE jest $B(n, p)$ (byłoby, gdyby karty wracały do talii).<br>- **Zakładanie, że rozkład normalny opisuje wszystko** — bardzo wiele zjawisk jest normalne, ale nie wszystkie. Rozkłady "długoogonowe" (majątek, liczba obserwujących w social media) mają zupełnie inny kształt.
