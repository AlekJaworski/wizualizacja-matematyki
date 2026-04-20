---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
resources:
  - "interactive|solid-geom-explorer.html|Solid Geometry Explorer|Eksplorator stereometrii — bryły 3D"
  - "interactive|solid-geom-warsztat.html|Solid Geometry Warsztat|Stereometria — Warsztat"
---
Stereometria to geometria w trzech wymiarach — patrzysz na bryłę i próbujesz „zobaczyć" trójkąty ukryte w środku. Bryła jest foremna, gdy jej podstawa jest wielokątem foremnym, a wierzchołek leży nad jej środkiem.<br><br>**Podstawowe bryły**: prostopadłościan, graniastosłup (boki to prostokąty), ostrosłup (ściany boczne to trójkąty schodzące się w wierzchołku), walec, stożek, kula.<br><br>**Wzory na objętość** (gdzie $B$ = pole podstawy, $h$ = wysokość): $V_{\text{graniastosłup}} = B \cdot h$, $V_{\text{ostrosłup}} = \frac{1}{3} B h$, $V_{\text{walec}} = \pi r^2 h$, $V_{\text{stożek}} = \frac{1}{3}\pi r^2 h$, $V_{\text{kula}} = \frac{4}{3}\pi r^3$.<br><br>**Pole powierzchni**: całkowite $P_c = P_b + 2B$ (dla bryły z dwiema podstawami) oraz pole boczne $P_b$. Dla walca rozwinięcie boku to prostokąt $2\pi r \times h$, więc $P_b = 2\pi r h$ — zawsze myśl o rozwinięciu.<br><br>**Elementy ostrosłupa**: **krawędź boczna** łączy wierzchołek z wierzchołkiem podstawy; **wysokość ściany bocznej** (apotema bryły) idzie z wierzchołka ostrosłupa prostopadle do krawędzi podstawy; **apotema podstawy** leży w podstawie — od środka podstawy prostopadle do jej krawędzi; **wysokość** $H$ spada z wierzchołka prostopadle do środka podstawy. **Kąt nachylenia krawędzi bocznej do podstawy** to kąt między tą krawędzią a jej rzutem (odcinek od środka podstawy do wierzchołka podstawy). **Kąt nachylenia ściany bocznej do podstawy** to kąt między wysokością ściany bocznej a apotemą podstawy.<br><br>**Ogólna strategia**: prawie każde zadanie ze stereometrii sprowadza się do znalezienia odpowiedniego trójkąta prostokątnego wewnątrz bryły i zastosowania twierdzenia Pitagorasa lub funkcji trygonometrycznych. Dlatego warto zacząć od rysunku bryły z zaznaczoną wysokością i szukać w niej trójkątów.<br><br>**Przekrój osiowy**: dla walca to prostokąt $2r \times h$; dla stożka — trójkąt równoramienny o podstawie $2r$ i wysokości $h$.

<!-- example -->
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 6$ i krawędź boczną $b = 5$. Oblicz wysokość $H$ i kąt $\alpha$ nachylenia krawędzi bocznej do podstawy.<br><br>Krok 1: przekątna kwadratu podstawy $d = a\sqrt{2} = 6\sqrt{2}$, więc połowa przekątnej $p = 3\sqrt{2}$ (to rzut krawędzi bocznej na podstawę).<br><br>Krok 2: znajdź trójkąt prostokątny wewnątrz — przyprostokątne $H$ i $p$, przeciwprostokątna $b$. Z Pitagorasa: $H^2 = b^2 - p^2 = 25 - 18 = 7$, więc $H = \sqrt{7}$.<br><br>Krok 3: $\tan \alpha = \frac{H}{p} = \frac{\sqrt{7}}{3\sqrt{2}} = \frac{\sqrt{14}}{6}$.
