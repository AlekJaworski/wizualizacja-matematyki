---
label: Ricci tensor and scalar
labelPl: Tensor Ricciego i skalar krzywizny
scope: diff_geom
section: TIER4
level: 3
x: 1600
y: 950
tag: pending
---
The Riemann tensor has 20 independent components in 4D — too rich for the field equations to use directly. The *Ricci tensor* $R_{\mu\nu} = R^\rho_{\mu\rho\nu}$ is a "partial trace" — sum over one index repeated up and down. It has 10 components.<br><br>The *scalar curvature* $R = g^{\mu\nu} R_{\mu\nu}$ is a further trace — one number per point.<br><br>Geometrical meaning: the Ricci tensor measures how the *volume* of a small ball of test particles changes from what it would be in flat space. The scalar $R$ averages this over all directions.<br><br>The Einstein tensor $G_{\mu\nu} = R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R$ — built from Ricci and the scalar — is the geometric side of the [[einstein_field_eq]]. Why this particular combination? Because it's the simplest 2-index symmetric tensor whose covariant divergence vanishes (matching energy-momentum conservation).

<!-- example -->
A small cloud of dust released in flat space: volume stays constant. Same cloud in curved space (e.g., near a star): volume contracts (in vacuum it's traceless contraction — shape changes). The Ricci tensor is the formal way to say this.

<!-- mistakes -->
- **"Ricci is half the curvature information"** — Ricci is *one part* of the Riemann tensor; the rest is the *Weyl tensor*. In vacuum, Ricci is zero but Weyl can be non-zero (gravitational waves and tidal effects live in Weyl).
- **Confusing $R$ (scalar) with $R^\rho_{\sigma\mu\nu}$ (Riemann tensor)** — same letter, very different objects. Convention: scalar gets no indices; Ricci has two; Riemann has four.
