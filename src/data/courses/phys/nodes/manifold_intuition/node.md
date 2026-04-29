---
label: Manifold intuition
labelPl: Rozmaitość — intuicja
scope: diff_geom
section: TIER4
level: 3
x: 200
y: 950
tag: pending
---
A manifold is a thing that *looks flat locally*. The Earth's surface is a 2-manifold: from inside your kitchen, geometry looks Euclidean; zoom out and the curvature shows up. A torus is a 2-manifold (locally flat, globally curved). Spacetime in GR is a 4-manifold.<br><br>The local-flatness is precise: at every point, you can choose coordinates that make the metric look Euclidean *to first order* in a small neighborhood. This is what lets you do calculus on a manifold — locally, it's just $\mathbb{R}^n$.<br><br>The *global* shape — the curvature, the topology — is what differentiates manifolds. A sphere isn't a torus isn't a flat plane. The whole tier 4 machinery is about quantifying these global differences while doing calculus locally.<br><br>**Where it came from**: Riemann's habilitation lecture *On the hypotheses which lie at the foundation of geometry* (1854). Riemann asked: what if we don't assume Euclid? Answered: do calculus locally, glue globally. Einstein needed exactly this.

<!-- example -->
Earth's surface. From your kitchen, it looks flat — straight lines work, parallel lines stay parallel, triangles have angle sum 180°. Zoom out to see the whole sphere — none of those statements are *globally* true. Two ships sailing due north from the equator on parallel paths converge at the pole. A triangle with three right angles is possible (one corner at the pole, two corners 90° apart on the equator). Triangles' angle sums are *more* than 180° on a sphere.

<!-- mistakes -->
- **"A manifold is a curved surface in 3D"** — that's *one* example (an embedded surface). Manifolds can be intrinsic — defined without reference to any embedding space. Riemann's whole point was that you don't need a higher-dimensional ambient space to describe curvature.
- **Confusing local flatness with global flatness** — locally everything is flat. Globally almost nothing is. The interesting physics lives in the gap.
