---
label: Coordinates as labels
labelPl: Współrzędne jako etykiety
scope: foundations
section: TIER0
level: 1
x: 200
y: 100
---
A point in space exists before you label it. Choosing labels — Cartesian (x, y), polar (r, θ), a city street grid, a subway grid — is up to you. The point doesn't move when you switch label systems.<br><br>This sounds trivial. It is not. The whole machinery of tensors is built to answer one question: *which quantities stay the same when I relabel*? Length, angle, the trajectory of a thrown ball — these are physical, they don't depend on the grid you draw on top of the world. Coordinate components — x of velocity, y of position — are *labels*, and labels change when you change grids.<br><br>Anything that depends on label choice isn't physics. Anything physical has to be expressible in a way that survives relabeling. Keep this distinction sharp; it's the seed of every later insight.

<!-- example -->
A coffee shop sits at the corner of 5th and Main. In a city with a rotated subway grid the same shop has different coordinates — say, 3 stops east, 2 stops north of Central station. Same shop. The *distance* from the shop to your house is real (you walk it). Either coordinate description gets you there. Neither set of numbers IS the shop.

<!-- mistakes -->
- **"The point is at (3, 4)"** — no. The point is the point. (3, 4) is one possible *label* in one possible coordinate system.
- **"This vector has components (2, 5), so it's a (2, 5)-vector"** — components are coordinate-system-relative. Rotate the grid and the components change while the vector itself doesn't.
- **"Coordinates are arbitrary, so they don't matter"** — they're arbitrary, but you have to pick *some* set to compute. The skill is computing in whichever set is convenient and knowing the answer doesn't depend on the choice.
