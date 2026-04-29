---
label: Vectors as displacement
labelPl: Wektory jako przesunięcie
scope: foundations
section: TIER0
level: 1
x: 500
y: 100
---
A vector is a *trip* — from one point to another. The arrow you draw on paper is a picture of the trip, not the trip itself.<br><br>Vector addition: stringing trips together. From home to shop ($\vec{u}$), then shop to park ($\vec{v}$), gives home to park ($\vec{u} + \vec{v}$). The order doesn't matter for the endpoint; the same trips in either order land you in the same place. That's commutativity, and it's *physical* — not a definition we picked.<br><br>Same vector, different coordinate components. Rotate the grid and the trip is unchanged but its components $(v_x, v_y)$ get relabeled. This is exactly the [[coordinates_as_labels]] story applied: the *vector* survives the relabel; the components don't.<br><br>Vectors live at *points*. The trip "from home to shop" lives at home (or shop, depending on convention). Two vectors at different points cannot be added without extra structure — and that becomes a real obstacle on curved spaces. Foreshadowing for [[tangent_space]].

<!-- example -->
You walk 3 km east, then 4 km north. Where are you relative to the start? Two trips: $(3, 0)$ km east and $(0, 4)$ km north. Their sum is $(3, 4)$ — 5 km away from the start, at angle $\arctan(4/3) \approx 53°$ north of east. The order doesn't matter — go north first then east, you land in the same place.

<!-- mistakes -->
- **"A vector is an arrow"** — it's *represented* by an arrow. The vector is the displacement; the arrow is one drawing of it.
- **"Adding vectors means adding components"** — yes in coordinates, but the *meaning* is stringing trips. Components-first is fine for computation but obscures the structure.
- **"Vectors are free to slide around the page"** — they slide for plane geometry only because the plane is flat. On a sphere, "sliding a vector while keeping it parallel" is non-trivial and path-dependent. (See [[parallel_transport]].)
