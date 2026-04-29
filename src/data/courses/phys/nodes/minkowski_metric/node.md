---
label: Minkowski metric
labelPl: Metryka Minkowskiego
scope: special_rel
section: TIER3
level: 3
x: 1300
y: 700
tag: pending
---
Distance in spacetime is *not* $\sqrt{\Delta t^2 + \Delta x^2 + \Delta y^2 + \Delta z^2}$. It's<br><br>$\Delta s^2 = -c^2 \Delta t^2 + \Delta x^2 + \Delta y^2 + \Delta z^2$.<br><br>The minus sign on the time term is the entire content of special relativity. It's what makes time *different* from space, what defines causal structure (light cones), what makes time dilation come out of the geometry instead of being a separate postulate.<br><br>The Minkowski metric tensor is $\eta_{\mu\nu} = \text{diag}(-1, +1, +1, +1)$ (or $\text{diag}(+1, -1, -1, -1)$ depending on convention — both are used; pick one and stick with it).<br><br>For a *timelike* separation ($\Delta s^2 < 0$ in the $-+++$ convention), $\sqrt{-\Delta s^2/c^2}$ is the *proper time* $\Delta\tau$ — the elapsed time on a clock moving along that path. For *spacelike* separations, $\sqrt{\Delta s^2}$ is the proper length. *Lightlike* separations have $\Delta s^2 = 0$ exactly — light rays trace out null intervals.

<!-- example -->
Two events: lightning strikes at $(t_1, x_1) = (0, 0)$ and $(t_2, x_2) = (1\text{ s}, 2 \times 10^8\text{ m})$. The Pythagorean spatial distance is $2 \times 10^8$ m. The Minkowski interval squared: $-c^2(1)^2 + (2 \times 10^8)^2 = -9 \times 10^{16} + 4 \times 10^{16} = -5 \times 10^{16}$ m². It's *timelike* — there's enough time for a sub-light signal to connect them.

<!-- mistakes -->
- **Sign convention confusion** — physicists use both $(-+++)$ and $(+---)$. The physics is the same; the signs of intermediate quantities flip. Be consistent within one calculation.
- **Treating $\Delta s$ as ordinary distance** — it can be negative-squared (timelike) or zero (lightlike). It's an *interval*, not a Euclidean distance.
