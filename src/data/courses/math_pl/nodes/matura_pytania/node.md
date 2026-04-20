---
label: "Reading Matura Commands"
labelPl: "Polecenia maturalne — jak czytać"
scope: logika
section: LP
level: 1
tag: matura_tip
x: 60
y: 1040
---
Polecenie z matury działa jak **kontrakt**: każde słowo dokładnie określa, czego oczekuje egzaminator. Gdy pomylimy "sprawdź" z "wykaż", nawet poprawny rachunek nie zaliczy zadania — zostało ono zinterpretowane inaczej, niż zostało zapisane.<br><br>Poniżej najważniejsze słowa-klucze i to, co **naprawdę** oznaczają:<br><br>**Oblicz** — w odpowiedzi ma się znaleźć konkretna liczba (lub wyrażenie). Końcowy wynik zawsze wyraźnie zaznacz (ramka, podkreślenie, "Odp.:").<br><br>**Wyznacz** — znajdź **wszystkie** wartości spełniające warunki (np. wszystkie $m$, dla których…). Pamiętaj o dziedzinie i o warunkach ubocznych (mianownik $\neq 0$, argument logarytmu $> 0$ itd.).<br><br>**Rozwiąż** — praktycznie to samo co "wyznacz", ale dotyczy równania lub nierówności. Zapisz **zbiór rozwiązań**, a nie tylko jedno $x$.<br><br>**Wykaż / Udowodnij** — musisz uzasadnić **każdy** krok. Sprawdzenie kilku wartości NIE jest dowodem. Struktura: *"Zakładamy… → przekształcamy… → otrzymujemy tezę."* Na końcu $\blacksquare$ lub "c.n.d.".<br><br>**Uzasadnij** — lżejsza wersja "wykaż"; argumentacja może być słowna, ale wciąż musi być **logiczna** i pełna. To nie jest "napisz, co myślisz".<br><br>**Naszkicuj / Narysuj** — wykres z oznaczeniami osi, skalą oraz punktami charakterystycznymi (miejscami zerowymi, ekstremami, asymptotami). Sam szkic bez opisanych osi nie jest uznawany za wykres.<br><br>**Sprawdź** — dostajesz konkretną hipotezę; wystarczy rachunek pokazujący, czy jest prawdziwa. Nie musisz uzasadniać **dlaczego** — tylko *że* tak jest (lub nie).

<!-- example -->
**Wykaż, że** $n(n+1)$ jest parzyste dla każdego $n \in \mathbb{N}$.<br><br>Sprawdzenie $n=1,\,2,\,3$ **NIE jest dowodem** — egzaminator oczekuje argumentu dla *wszystkich* $n$.<br><br>Poprawny dowód: wśród dwóch kolejnych liczb naturalnych $n$ oraz $n+1$ zawsze jedna jest parzysta, więc ich iloczyn $n(n+1)$ zawiera czynnik parzysty, a zatem sam jest parzysty. $\blacksquare$<br><br>---<br><br>**Sprawdź, czy** $n=3$ spełnia równanie $n^2 - 2n + 1 = 4$.<br><br>Podstawiamy: $3^2 - 2\cdot 3 + 1 = 9 - 6 + 1 = 4$. ✓<br><br>I tyle — przy "sprawdź" sam rachunek **wystarczy**. Nie trzeba tłumaczyć, dlaczego tak wyszło.

<!-- mistakes -->
- **Ignorowanie słowa "każdego" / "dla dowolnego"** w dowodzie — musisz pokazać tezę dla **wszystkich** wartości, nie dla kilku przykładów. Kilka przykładów to *sprawdzenie*, nie *dowód*.<br>- **Brak spójników** "zatem", "więc", "stąd", "ponieważ" między krokami. Egzaminator czyta dowód jak spójny tekst — bez łączników dowód traci rytm, a forma zostaje obniżona, nawet gdy rachunek jest poprawny.<br>- **Pomijanie dziedziny** przy "wyznacz" i "rozwiąż". Równanie $\log(x-2) = 1$ ma rozwiązanie $x = 12$, ale najpierw trzeba zapisać warunek $x - 2 > 0$.
