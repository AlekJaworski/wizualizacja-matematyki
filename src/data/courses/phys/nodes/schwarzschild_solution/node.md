---
label: Schwarzschild solution
labelPl: Rozwiązanie Schwarzschilda
scope: general_rel
section: TIER5
level: 3
x: 1200
y: 1200
tag: pending
---
The unique vacuum solution of the Einstein field equations outside a spherically symmetric mass. Found by Karl Schwarzschild in 1915 — six weeks after Einstein published the field equations, while Schwarzschild was serving on the Russian front in WWI. He died of disease months later.<br><br>The Schwarzschild metric in $(t, r, \theta, \phi)$ coordinates:<br><br>$ds^2 = -\left(1 - \frac{2GM}{rc^2}\right) c^2 dt^2 + \frac{dr^2}{1 - \frac{2GM}{rc^2}} + r^2 (d\theta^2 + \sin^2\theta\, d\phi^2)$<br><br>Crucial features:<br>- At $r \to \infty$: reduces to flat Minkowski. Far from the mass, gravity weak.<br>- At $r = r_s = 2GM/c^2$ (the Schwarzschild radius): the metric coefficients blow up. *Coordinate singularity*, not a real one — choosing different coordinates removes it. But it's the location of the *event horizon*: a one-way membrane.<br>- At $r = 0$: real (curvature) singularity. Riemann components diverge. Inside any [[black_holes]], this is unavoidable.<br><br>From Schwarzschild we get all the classical tests: gravitational time dilation, gravitational redshift, [[mercury_perihelion]], [[light_bending_eclipse]], and the prediction of black holes.

<!-- example -->
Schwarzschild radius for the Sun: $r_s = 2GM_\odot/c^2 \approx 3$ km. The Sun's actual radius is 700,000 km, so the Sun is nowhere near a black hole. For Earth: $r_s \approx 9$ mm. To make Earth a black hole you'd need to compress it to that size. To make a black hole from a star, you typically need at least 3 solar masses post-collapse.

<!-- mistakes -->
- **Treating $r$ as a radial distance** — at the level of intuition this is fine, but $r$ is a coordinate, not a measured distance. Inside the horizon, $r$ becomes timelike and things get weirder.
- **"The horizon is a place where things break"** — physics is fine at the horizon. The breakdown is in the *Schwarzschild coordinates*. Use Eddington–Finkelstein or Kruskal coordinates and the horizon is a smooth surface.
