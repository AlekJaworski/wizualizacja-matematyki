---
label: Lagrangian intuition
labelPl: Sformułowanie Lagrange'a — intuicja
scope: classical
section: TIER2
level: 2
x: 1000
y: 500
tag: pending
---
Same physics as Newton, packaged differently. Instead of "forces produce accelerations", the Lagrangian picture says: between two events, an object takes the path that *extremizes the action* $S = \int L \, dt$, where $L = T - V$ (kinetic energy minus potential).<br><br>For ordinary motion this gives back $F = ma$. For light it gives Fermat's principle (least time). For free fall in GR it gives the [[geodesic]] equation — the trajectory is the one that extremizes proper time.<br><br>The Lagrangian framework is the bridge from "forces" (Newtonian) to "geometry" (GR). The variational principle generalizes; $F = ma$ doesn't.

<!-- example -->
A ball thrown upward in gravity. Among all paths from start to end (parabolic, zigzag, looping), the one that *minimizes the action* $\int (T - V) dt$ is the parabolic one. That's the path the ball actually takes. The principle of least action *replaces* the equations of motion — same predictions.

<!-- mistakes -->
- **"Lagrangian mechanics is a different physics than Newtonian"** — same physics, different formalism. Predictions are identical for cases where both apply.
- **"The action is always *minimized*"** — sometimes a saddle point, sometimes a max. Hence "extremizes" rather than "minimizes" as the precise statement.
