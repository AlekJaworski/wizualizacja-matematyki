---
label: Four-vectors
labelPl: Czterowektory
scope: special_rel
section: TIER3
level: 3
x: 1100
y: 700
tag: pending
---
In spacetime, position is a 4-component object: $x^\mu = (ct, x, y, z)$. The Greek index $\mu$ runs over four values (0, 1, 2, 3 by convention).<br><br>Velocity, momentum, and acceleration are also four-vectors when you do SR properly. The "four-velocity" $u^\mu = dx^\mu/d\tau$ (where $\tau$ is the proper time — the elapsed time on a clock moving with the object) packages the time-component and the spatial-velocity components into one object that transforms cleanly under Lorentz transformations.<br><br>Four-momentum $p^\mu = m u^\mu = (E/c, p_x, p_y, p_z)$ unifies energy and 3-momentum. The energy-momentum relation $E^2 = (pc)^2 + (mc^2)^2$ is just the four-momentum's "Minkowski length squared" (see [[minkowski_metric]]).

<!-- example -->
A particle at rest has four-momentum $(mc, 0, 0, 0)$ — its energy is $mc^2$ and its 3-momentum is zero. A photon traveling in the $+x$ direction has $(E/c, E/c, 0, 0)$ — energy and 3-momentum equal, mass zero.

<!-- mistakes -->
- **Treating the 4-vector's time component as just "the time"** — it's $ct$ (or $E/c$, etc.), not raw $t$ or $E$. The $c$ factor makes all four components have the same units.
- **Mixing up upper and lower indices** — $x^\mu$ and $x_\mu$ differ by sign on the time component (in the standard Minkowski metric). The distinction matters; ignoring it produces wrong signs in inner products.
