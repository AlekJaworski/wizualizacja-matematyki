---
label: Tangent space
labelPl: Przestrzeń styczna
scope: diff_geom
section: TIER4
level: 3
x: 400
y: 950
tag: pending
---
At each point of a manifold, vectors live in their own *little flat vector space* called the tangent space at that point.<br><br>Picture: a sphere with a flat plane drawn tangent to it at the north pole. Vectors in that plane are tangent vectors at the north pole. The plane is the tangent space $T_p M$ where $p$ is the north pole.<br><br>**Key consequence**: vectors at different points of a manifold live in *different* tangent spaces. The tangent space at the north pole is a different vector space from the tangent space at the equator. They aren't naively comparable.<br><br>This is why "moving a vector while keeping it parallel" is non-trivial on a curved space. You have to specify *how* you move it from one tangent space to another — that's the role of the connection (see [[christoffel]]) and parallel transport (see [[parallel_transport]]).

<!-- example -->
A vector tangent to the Earth at the equator points east. "Move" it to the north pole keeping it parallel-along-the-meridian. When you arrive, the vector points... in some direction. Which direction depends on which path you took. (Spoiler: it's not the same vector you started with — see [[parallel_transport]].)

<!-- mistakes -->
- **"Vectors live on the manifold"** — they live *at points* of the manifold, in tangent spaces. The tangent spaces are different at different points.
- **"Tangent space is a 2D plane"** — only for 2-manifolds. For an $n$-manifold, the tangent space at each point is an $n$-dimensional vector space. For spacetime: 4D.
