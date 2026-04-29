---
label: Parallel transport
labelPl: Przeniesienie równoległe
scope: diff_geom
section: TIER4
level: 3
x: 1200
y: 950
tag: pending
---
Moving a vector along a path *while keeping it parallel to itself*. Sounds obvious, until you do it on a curved surface — and discover the result depends on the path.<br><br>Stand on the equator pointing your arm east. Walk to the north pole, *keeping your arm pointing in the same direction the whole way* (don't twist your shoulder — that's parallel transport). Now walk down a different meridian back to the equator. Walk back to your starting point along the equator. Your arm is now pointing in a *different direction* than where you started.<br><br>The rotation your arm picked up is a direct measurement of curvature. On a flat plane, parallel transport around a closed loop returns the vector unchanged. On any curved space, it doesn't. The amount of rotation per unit area enclosed is the *Gaussian curvature* in 2D and the [[riemann_curvature]] in higher dimensions.

<!-- example -->
A 90° walk: from $(0°, 0°)$ on the equator to $(90°, 0°)$ at the north pole, then 90° around to $(90°, 90°)$ — but you can't really walk *along* the pole, the pole is one point. Skip to: pole to $(0°, 90°)$ on the equator, then back along the equator to $(0°, 0°)$. Your arm started pointing east; after the round trip, parallel transported, it points 90° away from east — i.e., north. The 90° rotation matches the *area* enclosed by the loop times the curvature.

<!-- mistakes -->
- **"Parallel transport is just translation"** — only on flat spaces. On curved spaces it's path-dependent and that's the whole point.
- **Forgetting that the result depends on the path** — two different paths between the same start and end produce two different transported vectors. The *difference* between them is the curvature.
