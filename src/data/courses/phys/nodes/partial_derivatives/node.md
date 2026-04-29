---
label: Partial derivatives
labelPl: Pochodne cząstkowe
scope: math_tools
section: TIER1
level: 2
x: 800
y: 300
tag: pending
---
For a function $f(x, y)$, the partial derivative $\partial f/\partial x$ is the rate of change of $f$ as you vary *only* $x$, holding $y$ fixed. Similarly $\partial f/\partial y$.<br><br>Geometrically: stand at a point $(x_0, y_0)$ on the surface $f$. Walk in the +$x$ direction (only). The slope of your path is $\partial f/\partial x$. Walk in the +$y$ direction (only). That's $\partial f/\partial y$.<br><br>In physics, partial derivatives are everywhere: gradient of temperature ($\partial T/\partial x$), pressure gradient, components of the velocity field. The Christoffel symbols and the Einstein equations are written entirely in partial derivatives of the metric.

<!-- example -->
Temperature: $T(x, y) = 20 + 0.1 x^2 + 0.05 y$. Then $\partial T/\partial x = 0.2 x$ (depends on where you are along $x$), and $\partial T/\partial y = 0.05$ (constant).

<!-- mistakes -->
- **Forgetting "hold the others fixed"** — $\partial f/\partial x$ treats $y$ as if it were a constant. Differentiating "with respect to $x$" while letting $y$ implicitly track $x$ gives the *total* derivative, a different beast.
- **Confusing $\partial$ and $d$** — $df/dx$ for a one-variable function. $\partial f/\partial x$ for many variables. The notation matters because you're saying "fix the others".
