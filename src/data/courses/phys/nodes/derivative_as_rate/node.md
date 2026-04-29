---
label: Derivative as rate
labelPl: Pochodna jako tempo zmian
scope: foundations
section: TIER0
level: 1
x: 800
y: 100
---
The derivative answers one question: *how fast is this changing right now?* Not "how much did it change over the journey" (that's an average). Not "where am I now" (that's the value). The instantaneous rate.<br><br>The speedometer in your car shows the derivative of your position with respect to time. The trip computer shows the integral. Two complementary readings of the same drive.<br><br>Geometrically: the slope of the tangent to the graph at a point. If position $x(t)$ is plotted against time $t$, the slope at $t = 5$ tells you how fast you're moving at $t = 5$ — not your average speed over the trip.<br><br>For physics, the key family of derivatives:<br>- Position $x(t)$ → velocity $v(t) = dx/dt$<br>- Velocity $v(t)$ → acceleration $a(t) = dv/dt$<br>- Free fall: $x(t) = \frac{1}{2} g t^2$, so $v(t) = gt$, $a(t) = g$. Constant acceleration is the seed of every projectile problem.<br><br>This node is the physics-flavored entry point to derivatives. For mechanical rules and the limit definition, see the math curriculum's `derivative` node.

<!-- example -->
A ball is dropped from rest. Its height above the ground is $h(t) = h_0 - \frac{1}{2} g t^2$, where $g \approx 9.81$ m/s². The velocity (downward) is $v(t) = -dh/dt = g t$. At $t = 1$ s, $v = 9.81$ m/s; at $t = 2$ s, $v = 19.62$ m/s. The acceleration is $-g$, constant. The ball's position is changing faster every second — that's what acceleration *means*.

<!-- mistakes -->
- **"The derivative is a formula"** — it's a *rate of change*. The formula $(x^n)' = nx^{n-1}$ is one tool for computing it; the meaning is "how fast is this changing right now".
- **Confusing average and instantaneous rate** — average velocity over a trip is $\Delta x / \Delta t$. Instantaneous velocity is the limit as $\Delta t \to 0$. They're the same only when motion is uniform.
- **"Derivative = slope" but forgetting *of what*** — slope of the tangent at a *specific point*. The slope is itself a function of where you read it.
