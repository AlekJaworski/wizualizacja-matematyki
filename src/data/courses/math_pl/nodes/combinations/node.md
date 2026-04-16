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
Kombinacja to sposób wyboru $k$ elementów z $n$, w którym kolejność nie ma znaczenia — liczy się tylko to, co wybraliśmy.<br><br>Wzór: $C(n,k) = \binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}$. Kluczowa różnica: permutacje uwzględniają kolejność, kombinacje nie.<br><br>Trójkąt Pascala daje elegancką zależność rekurencyjną: $C(n,k) = C(n-1, k-1) + C(n-1, k)$.

<!-- example -->
Na przykład: ile 2-osobowych par z grupy $\{A, B, C\}$?<br><br>To AB, AC, BC — 3 pary $= C(3,2) = \frac{3!}{2! \cdot 1!} = 3$. Kolejność nie ma znaczenia: AB to to samo co BA.
