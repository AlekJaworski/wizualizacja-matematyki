---
label: Christoffel symbols
labelPl: Symbole Christoffela
scope: diff_geom
section: TIER4
level: 3
x: 800
y: 950
tag: pending
---
When your coordinate grid bends, even motion in a "straight line" picks up extra terms in the equations of motion. Those terms are the Christoffel symbols $\Gamma^\lambda_{\mu\nu}$.<br><br>They're not forces. They're bookkeeping for the bent grid. The same trajectory, in Cartesian coordinates, has all $\Gamma$ vanishing. In polar coordinates, the $\Gamma$ are non-zero, and they encode "centrifugal-like" corrections needed to keep the trajectory description consistent.<br><br>Christoffels are computed from the metric: $\Gamma^\lambda_{\mu\nu} = \frac{1}{2} g^{\lambda\sigma}(\partial_\mu g_{\sigma\nu} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu})$. Index gymnastics, but the formula is mechanical once you have the metric.<br><br>The geodesic equation (the GR equation of motion for free-falling objects) is $\ddot{x}^\lambda + \Gamma^\lambda_{\mu\nu} \dot{x}^\mu \dot{x}^\nu = 0$. The Christoffel terms are what make a free-falling object's worldline curve in coordinate-language even though the object isn't being pushed.

<!-- example -->
A puck slides in a straight line across a frictionless table. In Cartesian $(x, y)$ coords, $\ddot{x} = \ddot{y} = 0$. Switch to polar $(r, \theta)$: same physical motion, but now $\ddot{r} \neq 0$ — there's a centrifugal-like term. That extra term is a Christoffel-symbol contribution from the polar metric. The puck didn't change its motion; the bookkeeping changed.

<!-- mistakes -->
- **"Christoffel symbols are forces"** — they look like forces in the equations of motion, but they're geometric corrections from coordinate choice. In a free-falling local inertial frame, the Christoffels vanish.
- **"They're a tensor"** — they're not. They transform with extra correction terms under coordinate change, which is exactly why they can be made to vanish at a point by choosing coordinates well.
