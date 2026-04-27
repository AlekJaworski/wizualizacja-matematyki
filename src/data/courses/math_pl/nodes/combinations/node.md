---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
resources:
  - "interactive|combinations-explorer.html|Combinations Explorer — Why divide by k!?|Eksplorator kombinacji — dlaczego dzielimy przez k!?"
---
Kombinacja to sposób wyboru $k$ elementów z $n$, w którym kolejność nie ma znaczenia — liczy się tylko to, co wybraliśmy.<br><br>Wzór: $C(n,k) = \binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}$. Kluczowa różnica: permutacje uwzględniają kolejność, kombinacje nie. (Permutacja to uporządkowanie tych samych elementów — zmiana kolejności daje inne ustawienie.)<br><br>Trójkąt Pascala daje elegancką zależność rekurencyjną: $C(n,k) = C(n-1, k-1) + C(n-1, k)$.

<!-- example -->
Na przykład: ile 2-osobowych par z grupy $\{A, B, C\}$?<br><br>To AB, AC, BC — 3 pary $= C(3,2) = \frac{3!}{2! \cdot 1!} = 3$. Kolejność nie ma znaczenia: AB to to samo co BA.

<!-- mistakes -->
- **Kolejność**: kombinacja NIE uwzględnia kolejności, permutacja uwzględnia. "Delegacja 3-osobowa" = kombinacja; "kolejność na podium" = permutacja.
- **$\binom{n}{k}$ vs $k!$**: $\binom{5}{3} = 10$ (wybieram 3 z 5), ale $5! = 120$ (ustawiam wszystkie 5). Zupełnie różne liczby.
- **Powtórzenia**: w kombinacji domyślnie zakładamy brak powtórzeń. Gdy powtórzenia są dozwolone, stosuje się odrębny wzór $\binom{n+k-1}{k}$ (poziom rozszerzony).

<!-- see-also -->
permutations
binom_theorem
bernoulli

<!-- en -->
A combination is a way of selecting $k$ elements from $n$ in which order does not matter — only what we chose counts.<br><br>Formula: $C(n,k) = \binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}$. Key difference: permutations take order into account, combinations do not. (A permutation is an ordering of the same elements — changing the order gives a different arrangement.)<br><br>Pascal's triangle gives an elegant recursive relation: $C(n,k) = C(n-1, k-1) + C(n-1, k)$.

<!-- example -->
For example: how many 2-person pairs from the group $\{A, B, C\}$?<br><br>That's AB, AC, BC — 3 pairs $= C(3,2) = \frac{3!}{2! \cdot 1!} = 3$. Order doesn't matter: AB is the same as BA.

<!-- mistakes -->
- **Order**: a combination does NOT take order into account, a permutation does. "3-person delegation" = combination; "podium order" = permutation.
- **$\binom{n}{k}$ vs $k!$**: $\binom{5}{3} = 10$ (choosing 3 from 5), but $5! = 120$ (arranging all 5). Completely different numbers.
- **Repetitions**: in a combination, by default we assume no repetitions. When repetitions are allowed, a separate formula $\binom{n+k-1}{k}$ is used (extended level).

<!-- see-also -->
permutations
binom_theorem
bernoulli
