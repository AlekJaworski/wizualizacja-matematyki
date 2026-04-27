---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
Liczby zespolone rozszerzają zbiór liczb rzeczywistych o jednostkę urojoną $i$, dla której $i^2 = -1$. Każdą liczbę zespoloną można zapisać w postaci algebraicznej $z = a + bi$, gdzie $a$ to część rzeczywista, a $b$ część urojona.<br><br>Z liczbami zespolonymi związane są: moduł $|z| = \sqrt{a^2 + b^2}$ (czyli odległość punktu $(a, b)$ od początku układu współrzędnych), liczba sprzężona $\bar{z} = a - bi$ oraz postać trygonometryczna $z = |z|(\cos\varphi + i\sin\varphi)$. Dzięki temu rozszerzeniu rozwiązanie ma każde równanie wielomianowe — w tym takie, które w liczbach rzeczywistych nie mają pierwiastków, jak $x^2 + 1 = 0$.

<!-- example -->
Równanie $x^2 + 1 = 0$ daje $x^2 = -1$, więc $x = \pm i$ — dwa pierwiastki zespolone, których w liczbach rzeczywistych nie ma.<br><br>Mnożenie liczb zespolonych przebiega tak jak mnożenie wyrażeń algebraicznych, z dodatkową zasadą $i^2 = -1$. Na przykład: $(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i - 3 \cdot (-1) = 5 + i$.

<!-- mistakes -->
- **$\sqrt{-4} \neq -2$**: pierwiastek z liczby ujemnej nie jest liczbą rzeczywistą — w liczbach zespolonych $\sqrt{-4} = \pm 2i$, ponieważ $(2i)^2 = 4i^2 = -4$. Pisanie $-2$ to mylenie pierwiastka kwadratowego z liczbą przeciwną.
- **Pominięte $i^2 = -1$**: przy mnożeniu liczb zespolonych łatwo zostawić $i^2$ bez zamiany na $-1$ albo zamienić je na $+1$. Przykład: $(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$, a nie $1 + 2i + 1 = 2 + 2i$.
- **Moduł to nie wartość bezwzględna**: $|z|$ dla $z = a + bi$ to długość wektora $(a, b)$, czyli $\sqrt{a^2 + b^2}$, a nie wartość bezwzględna pojedynczej liczby. Na przykład $|3 + 4i| = 5$, a nie $3$ ani $4$.

<!-- see-also -->
quadratic_eq
poly_roots

<!-- en -->
Complex numbers extend the real numbers by the imaginary unit $i$, defined by $i^2 = -1$. Every complex number can be written in algebraic form $z = a + bi$, where $a$ is the real part and $b$ is the imaginary part.<br><br>Associated with complex numbers are: the modulus $|z| = \sqrt{a^2 + b^2}$ (the distance from the point $(a, b)$ to the origin), the conjugate $\bar{z} = a - bi$, and the trigonometric (polar) form $z = |z|(\cos\varphi + i\sin\varphi)$. Thanks to this extension every polynomial equation has a solution — including those with no real roots, such as $x^2 + 1 = 0$.

<!-- example -->
The equation $x^2 + 1 = 0$ gives $x^2 = -1$, so $x = \pm i$ — two complex roots that do not exist among the reals.<br><br>Multiplication of complex numbers proceeds like multiplication of algebraic expressions, with the extra rule $i^2 = -1$. For example: $(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i - 3 \cdot (-1) = 5 + i$.

<!-- mistakes -->
- **$\sqrt{-4} \neq -2$**: the square root of a negative number is not a real number — over the complex numbers $\sqrt{-4} = \pm 2i$, since $(2i)^2 = 4i^2 = -4$. Writing $-2$ confuses the square root with the negative of the number.
- **Forgetting $i^2 = -1$**: when multiplying complex numbers it is easy to leave $i^2$ unsimplified, or to replace it with $+1$. Example: $(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$, not $1 + 2i + 1 = 2 + 2i$.
- **Modulus is not ordinary absolute value**: for $z = a + bi$, $|z|$ is the length of the vector $(a, b)$, namely $\sqrt{a^2 + b^2}$, not the absolute value of a single number. For instance $|3 + 4i| = 5$, not $3$ or $4$.

<!-- see-also -->
quadratic_eq
poly_roots
