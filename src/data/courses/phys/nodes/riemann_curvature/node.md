---
label: Riemann curvature tensor
labelPl: Tensor krzywizny Riemanna
scope: diff_geom
section: TIER4
level: 3
x: 1400
y: 950
tag: pending
---
The Riemann tensor $R^\rho_{\sigma\mu\nu}$ is the precise measure of "how much a vector rotates when parallel-transported around an infinitesimal closed loop". Four indices because: one for the input vector, two for the directions defining the loop, one for the output direction of rotation.<br><br>$R = 0$ everywhere ⟺ space is flat (Euclidean or Minkowski).<br>$R \neq 0$ somewhere ⟺ space is curved there.<br><br>Computed from the metric, via Christoffels: $R^\rho_{\sigma\mu\nu} = \partial_\mu \Gamma^\rho_{\nu\sigma} - \partial_\nu \Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda} \Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda} \Gamma^\lambda_{\mu\sigma}$. The formula is brutal; the *meaning* is "infinitesimal parallel-transport mismatch".<br><br>Riemann is *the* curvature object — it captures all geometric information about how a manifold deviates from flatness. Its contractions ([[ricci_and_scalar]]) appear in the field equations.

<!-- example -->
On a sphere of radius $R$, the Riemann tensor's nonzero components scale as $1/R^2$. Smaller sphere = more curved = bigger $R$. Flat plane = infinite $R$ = zero curvature.

<!-- mistakes -->
- **Treating Riemann as one number** — it's a *4-index* tensor; in 4D spacetime that's potentially $4^4 = 256$ components, of which 20 are independent due to symmetries. Curvature is a rich object.
- **Confusing intrinsic and extrinsic curvature** — Riemann measures *intrinsic* curvature (you can measure it from inside the manifold without ever stepping outside). A piece of paper rolled into a cylinder has zero intrinsic curvature even though it looks curved from outside.
