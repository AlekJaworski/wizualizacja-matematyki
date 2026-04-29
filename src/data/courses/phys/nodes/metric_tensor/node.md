---
label: Metric tensor
labelPl: Tensor metryczny
scope: diff_geom
section: TIER4
level: 3
x: 600
y: 950
tag: pending
---
A *metric* is a recipe for measuring distances on a manifold. At each point, the metric tensor $g_{\mu\nu}$ tells you how to convert coordinate differences into actual physical distance.<br><br>On a flat plane, $ds^2 = dx^2 + dy^2$ — Pythagoras. The metric is $g = \text{diag}(1, 1)$.<br>On a sphere of radius $R$, $ds^2 = R^2 \, d\theta^2 + R^2 \sin^2\theta \, d\phi^2$. The metric depends on where you are (specifically on $\theta$).<br>In Minkowski spacetime: $ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$. (See [[minkowski_metric]].)<br>In curved spacetime (GR): $ds^2 = g_{\mu\nu}(x) \, dx^\mu dx^\nu$, summed over $\mu, \nu$ — and $g_{\mu\nu}$ generally varies from point to point.<br><br>The metric is the central object of GR. *Specifying the metric* on spacetime tells you the geometry, hence (via the field equations) the gravitational behavior.

<!-- example -->
On the surface of the Earth (radius 6371 km), the distance from $(\theta_1, \phi_1) = (45°, 0°)$ to $(\theta_2, \phi_2) = (45°, 1°)$ is *not* $1°$ in any straightforward sense — it's $R \sin(45°) \cdot (1° \text{ in radians}) \approx 78$ km. The metric's $\sin^2\theta$ factor encodes that lines of longitude are closer together near the pole than at the equator.

<!-- mistakes -->
- **"The metric is just Pythagoras"** — only for flat space in Cartesian coordinates. Curved space, or even flat space in non-Cartesian coordinates (polar, spherical), gives non-trivial metrics.
- **Confusing the metric with the line element $ds$** — the metric $g_{\mu\nu}$ is the tensor; $ds^2 = g_{\mu\nu} dx^\mu dx^\nu$ is the line element formula. Closely related, not the same thing.
