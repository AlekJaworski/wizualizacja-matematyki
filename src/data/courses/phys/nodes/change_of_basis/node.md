---
label: Change of basis
labelPl: Zmiana bazy
scope: math_tools
section: TIER1
level: 2
x: 200
y: 300
tag: pending
---
The same vector has different *components* in different coordinate bases — and the rule for how those components transform when you change basis is the seed of the entire tensor formalism.<br><br>Pick a basis $\{\vec{e}_1, \vec{e}_2\}$. A vector $\vec{v}$ has components $(v_1, v_2)$. Change to a rotated basis $\{\vec{e}'_1, \vec{e}'_2\}$ — same vector, components $(v'_1, v'_2)$. The transformation rule between $(v_i)$ and $(v'_i)$ is a linear map: a *change-of-basis matrix*.<br><br>A *tensor* is just a generalization: a quantity with a known transformation rule under change of basis. Vector = rank-1 tensor. Matrix = often (but not always) rank-2 tensor. The rule is what makes the object physical — without it, components are unmoored.<br><br>This node is the keystone of the entire Tier 4 formalism. Without it, tensors look like arbitrary indexed objects. With it, tensors are exactly "things that transform predictably when you relabel".

<!-- example -->
A vector with components $(1, 0)$ in the $(\vec{e}_x, \vec{e}_y)$ basis becomes $(\cos\theta, \sin\theta)$ in a basis rotated by $\theta$. The vector itself didn't move; the labels did. The change-of-basis matrix is the 2×2 rotation matrix.

<!-- mistakes -->
- **"Tensors are arrays of numbers"** — components are arrays. Tensors are the underlying objects, identified by a *transformation rule*. An array of numbers without a rule is just an array.
- **Forgetting which way the matrix goes** — components transform in the *opposite* sense to basis vectors (they're "contravariant"). This sign-direction confusion is what the upper/lower index notation in tensors handles.
