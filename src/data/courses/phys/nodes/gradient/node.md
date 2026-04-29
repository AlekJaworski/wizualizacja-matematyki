---
label: Gradient
labelPl: Gradient
scope: math_tools
section: TIER1
level: 2
x: 1100
y: 300
tag: pending
---
The gradient $\nabla f$ of a scalar field $f(x, y, z)$ is the vector pointing in the direction of *steepest increase* of $f$, with magnitude equal to that steepest rate.<br><br>Components: $\nabla f = (\partial f/\partial x,\ \partial f/\partial y,\ \partial f/\partial z)$. Stack the partials into a vector.<br><br>Physical meaning: heat flows opposite to the temperature gradient. Force from a potential is the negative gradient: $\vec{F} = -\nabla V$. The gradient turns "where things change fastest" into a vector, which is what physics needs to compute fluxes, forces, currents.

<!-- example -->
On a hill described by $h(x, y)$, the gradient $\nabla h$ at a point tells you which way is uphill and how steep the climb is. Walk perpendicular to $\nabla h$ — you stay at the same elevation (a contour line).

<!-- mistakes -->
- **Treating $\nabla f$ as a scalar** — it's a vector. The magnitude is one number; the direction is a separate piece.
- **"Gradient is the same as derivative"** — partials *are* derivatives, but the gradient packages them into a vector. The vector packaging carries directional information.
