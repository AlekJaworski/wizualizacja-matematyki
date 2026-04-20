---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
resources:
  - "interactive|area-perimeter-explorer.html|Area & Perimeter|Pole i obwód"
---
Pole to ilość płaszczyzny zajętej przez figurę; obwód to długość jej brzegu. Dwie liczby, dwie zupełnie różne jednostki: pole w $\text{cm}^2$, obwód w cm.<br><br>**Podstawowe wzory:** prostokąt — $P = a \cdot b$, $L = 2(a+b)$; kwadrat — $P = a^2$, $L = 4a$; trójkąt — $P = \tfrac{1}{2} a h$; koło — $P = \pi r^2$, $L = 2\pi r$. Dla trapezu $P = \tfrac{1}{2}(a+b) h$, dla równoległoboku $P = a h$.<br><br>**Skalowanie:** gdy powiększasz figurę $k$ razy (każdy wymiar mnożysz przez $k$), obwód rośnie $k$ razy, ale pole rośnie $k^2$ razy. Koło o dwukrotnie większym promieniu ma czterokrotnie większe pole, nie dwukrotnie.

<!-- example -->
Prostokąt o bokach $6$ i $4$: pole $P = 6 \cdot 4 = 24$ cm$^2$, obwód $L = 2(6+4) = 20$ cm.<br><br>Po powiększeniu dwukrotnym — boki $12$ i $8$ — pole wychodzi $96$ cm$^2$ (cztery razy większe), a obwód $40$ cm (dwa razy większy). Liczby rosną w różnym tempie, bo opisują różne rzeczy: długość brzegu i powierzchnię wnętrza.<br><br>**Dla ciekawych — dlaczego pizza 40 cm to nie dwa razy więcej jedzenia niż pizza 20 cm.** Podwojenie średnicy podwaja promień, a pole skaluje się z $\pi r^2$, więc rośnie **czterokrotnie**. Pizza o średnicy $40$ cm to cztery razy więcej jedzenia niż $20$-centymetrowa, nie dwa razy. Dla wielu osób to nieintuicyjne — patrzymy na „szerokość", a nie na powierzchnię. Ta sama logika dotyczy ekranów: monitor 27-calowy ma około 78% większą powierzchnię niż 20-calowy (nie 35%, jakby sugerowała różnica przekątnej).<br><br>**Dla ciekawych — pszczoły i plaster miodu.** Pszczoły budują plaster z sześciokątów foremnych. Spośród regularnych wielokątów, którymi można pokryć płaszczyznę bez pustek (trójkąty, kwadraty, sześciokąty), sześciokąt **minimalizuje długość ścian przy ustalonym polu komórki** — pszczoły zużywają najmniej wosku na pokrycie danej powierzchni. Matematyczny dowód, że heksagon jest globalnie optymalny (także wśród nieregularnych kształtów), Thomas Hales podał dopiero w 1999 roku — tzw. „twierdzenie o plastrze miodu".<br><br>**Dla ciekawych — kostki lodu rozpadają się szybciej, gdy się je pokruszy.** Ta sama masa lodu roztopi się wyraźnie szybciej po rozdrobnieniu, bo powierzchnia styku z otoczeniem rośnie drastycznie. Dwie kostki o łącznej objętości $V$ mają większą sumę powierzchni niż jedna kostka o tej samej objętości. Ta sama zasada stoi za tym, że drobno pokrojone warzywa lepiej się smażą (więcej powierzchni daje więcej skórki). Skalowanie $L^2$ względem $L^3$ to ukryta sprężyna za wieloma zjawiskami termicznymi i biologicznymi.

<!-- mistakes -->
- **Mylenie jednostek pola i obwodu.** Dla kwadratu o boku 4 jednostki liczbowe pola i obwodu są takie same, ale to przypadek. Pole zawsze w jednostkach kwadratowych ($\text{cm}^2$, $\text{m}^2$), obwód w liniowych.<br>- **Skalowanie jak dla liniowej zależności.** Jeśli kwadrat o boku 3 ma pole 9, to kwadrat o boku 6 ma pole **36**, a nie 18. Pole zawsze skaluje się kwadratowo — to ta sama pułapka co w wielu innych formułach (zobacz też: *Pułapka liniowości*).<br>- **Wzór na pole trójkąta.** $P = \tfrac{1}{2} a h$, gdzie $h$ to **wysokość opuszczona na bok $a$**, nie długość drugiego boku. Dla trójkąta rozwartokątnego wysokość może wypaść poza trójkąt — to nie błąd, tylko geometria.
