---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
resources:
  - "interactive|polynomial-explorer.html|Polynomial Explorer — Terms, Coefficients & End Behavior|Wielomiany — wyrazy, współczynniki i zachowanie na krańcach"
---
Wielomiany to wyrażenia algebraiczne zbudowane z potęg zmiennej i współczynników — uogólnienie funkcji liniowej i kwadratowej.<br><br>Postać: $a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0$. Stopień wielomianu to najwyższa potęga $x$ z niezerowym współczynnikiem.<br><br>Kluczowe umiejętności: mnożenie wielomianów, wyłączanie przed nawias, dzielenie wielomianów i twierdzenie Bezouta (reszta z dzielenia $W(x)$ przez $x-a$ równa się $W(a)$ — w szczególności: $a$ jest pierwiastkiem $W$ wtedy i tylko wtedy, gdy $(x-a)$ dzieli $W(x)$).

<!-- example -->
Na przykład: $2x^3 + 5x^2 - 3x + 1$.<br><br>Tu $a_3 = 2$, $a_2 = 5$, $a_1 = -3$, $a_0 = 1$. Stopień $= 3$, bo najwyższa potęga $x$ to $x^3$.

<!-- mistakes -->
- **Stopień iloczynu a stopień sumy**: $\deg(f \cdot g) = \deg f + \deg g$ zawsze, ale $\deg(f+g) \le \max(\deg f, \deg g)$ — może spaść, jeśli najwyższe wyrazy się znoszą. Przykład: $x^2 + (-x^2 + 1) = 1$ ma stopień $0$, nie $2$.
- **Wielomian zerowy $\neq$ wielomian stały**: $f(x) = 0$ dla każdego $x$ to wielomian zerowy — stopień nieokreślony (często zapisywany jako $-\infty$). Z kolei $f(x) = 5$ to wielomian stały stopnia $0$. Dwa różne obiekty, często mylone.
- **Liczba pierwiastków rzeczywistych $\le$ stopień, ale niekoniecznie równa**: wielomian stopnia $n$ ma co NAJWYŻEJ $n$ pierwiastków w $\mathbb{R}$. $x^2+1$ ma zero pierwiastków rzeczywistych, $(x-1)^2$ ma jeden pierwiastek (podwójny), $x^3 - x$ ma trzy pojedyncze. Stopień mówi ile MAX, nie ile dokładnie.

<!-- see-also -->
factoring
fn_poly

<!-- en -->
Polynomials are algebraic expressions built from powers of a variable and coefficients — a generalization of linear and quadratic functions.<br><br>Form: $a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0$. The degree of a polynomial is the highest power of $x$ with a nonzero coefficient.<br><br>Key skills: multiplying polynomials, factoring out a common factor, polynomial division and Bézout's theorem (the remainder of $W(x)$ divided by $x-a$ equals $W(a)$ — in particular: $a$ is a root of $W$ if and only if $(x-a)$ divides $W(x)$).

<!-- example -->
For example: $2x^3 + 5x^2 - 3x + 1$.<br><br>Here $a_3 = 2$, $a_2 = 5$, $a_1 = -3$, $a_0 = 1$. Degree $= 3$, because the highest power of $x$ is $x^3$.

<!-- mistakes -->
- **Degree of a product vs degree of a sum**: $\deg(f \cdot g) = \deg f + \deg g$ always, but $\deg(f+g) \le \max(\deg f, \deg g)$ — it can drop if the leading terms cancel. Example: $x^2 + (-x^2 + 1) = 1$ has degree $0$, not $2$.
- **Zero polynomial $\neq$ constant polynomial**: $f(x) = 0$ for every $x$ is the zero polynomial — degree undefined (often written as $-\infty$). On the other hand, $f(x) = 5$ is a constant polynomial of degree $0$. Two different objects, often confused.
- **Number of real roots $\le$ degree, but not necessarily equal**: a polynomial of degree $n$ has AT MOST $n$ roots in $\mathbb{R}$. $x^2+1$ has zero real roots, $(x-1)^2$ has one root (double), $x^3 - x$ has three single ones. The degree tells you the MAX, not the exact count.

<!-- see-also -->
factoring
fn_poly
