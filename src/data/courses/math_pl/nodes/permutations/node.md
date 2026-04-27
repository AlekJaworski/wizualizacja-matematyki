---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
resources:
  - "interactive|permutations-explorer.html|Permutations Explorer — Orderings, Trees & Factorial|Permutacje — ustawienia, drzewa i silnia"
---
Permutacja to uporządkowanie elementów — tu liczy się kolejność, bo każde inne ustawienie daje inny wynik.<br><br>Liczba permutacji $n$ elementów: $P(n) = n!$. Permutacje z powtórzeniami (gdy elementy się powtarzają): $\frac{n!}{k_1! \cdot k_2! \cdot \ldots}$.<br><br>Wariacja to permutacja, w której nie używamy wszystkich $n$ elementów — ustawiamy w kolejności tylko wybrane $k$ z nich. Wariacje bez powtórzeń — wybieramy $k$ z $n$ elementów, z uwzględnieniem kolejności: $V(n,k) = \frac{n!}{(n-k)!}$.

<!-- example -->
Na przykład: na ile sposobów ustawić litery A, B, C?<br><br>To ABC, ACB, BAC, BCA, CAB, CBA — 6 sposobów $= 3! = 3 \cdot 2 \cdot 1 = 6$.

<!-- see-also -->
combinations
counting

<!-- en -->
A permutation is an ordering of elements — order matters here, because every different arrangement gives a different outcome.<br><br>Number of permutations of $n$ elements: $P(n) = n!$. Permutations with repetitions (when elements repeat): $\frac{n!}{k_1! \cdot k_2! \cdot \ldots}$.<br><br>A variation is a permutation in which we don't use all $n$ elements — we order only a chosen $k$ of them. Variations without repetitions — choosing $k$ out of $n$ elements with order taken into account: $V(n,k) = \frac{n!}{(n-k)!}$.

<!-- example -->
For example: in how many ways can we arrange the letters A, B, C?<br><br>That's ABC, ACB, BAC, BCA, CAB, CBA — 6 ways $= 3! = 3 \cdot 2 \cdot 1 = 6$.

<!-- see-also -->
combinations
counting
