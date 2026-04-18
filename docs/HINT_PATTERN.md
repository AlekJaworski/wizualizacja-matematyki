# Konwencja wskazówek ①②③ (hint ladder)

Zamiast jednej „wskazówki” zawierającej pełne rozwiązanie, każde zadanie powinno mieć **drabinkę trzech wskazówek** odsłanianych po kolei. Student widzi najpierw tylko ①, a po kliknięciu odsłania ② i ③. Dzięki temu wskazówka faktycznie uczy — nie podaje gotowca.

## Trzy szczeble

- **① Zauważ** — co w zadaniu jest istotne, jaka jest struktura/intuicja.
  - Bez liczb, bez wzorów konkretnych, bez wyniku.
  - Przykład (prawdopodobieństwo): „W zbiorze są 2 parzyste i 3 nieparzyste. Suma jest parzysta dokładnie wtedy, gdy oba losowania trafiły w tę samą parzystość.”

- **② Narzędzie** — którego wzoru / tożsamości / techniki użyć.
  - Nazwij wzór, ale bez podstawiania liczb z zadania.
  - Przykład: „Skorzystaj ze wzoru na logarytm iloczynu: $\log_a(xy) = \log_a x + \log_a y$.”

- **③ Policz** — wykonanie rachunku prowadzące do wyniku.
  - To jedyny szczebel, na którym pojawiają się liczby z zadania.
  - Przykład: „$\log_9 27 + \log_9 3 = \log_9 81 = \log_9 9^2 = 2$.”

Każdy szczebel maksymalnie **1–2 zdania**. Polski, $\LaTeX$ w `$...$`.

## Gdzie to jest zaimplementowane

- **YAML pytań MCQ** — `src/data/courses/math_pl/nodes/<id>/questions/<NN>.md`. Pole `hints:` jako lista:
  ```yaml
  hints:
    - "① <co zauważyć>"
    - "② <którego wzoru użyć>"
    - "③ <dokończ liczenie>"
  ```
  Wspierane przez parser w `src/data/courseLoader.js` (klucz `hints`, backward-compatible: legacy `hint:` nadal działa i jest normalizowany do tablicy).

- **UI** — `src/components/panels/QuizPanel.jsx` renderuje tylko `hints[0]` po sprawdzeniu odpowiedzi; przycisk „Pokaż kolejną wskazówkę” odsłania następne szczeble.

- **Warsztaty interaktywne (kanwa)** — `public/resources/*/*-warsztat.html` używają analogicznego wzorca (tablica `hints: [...]` w każdym kroku, żółty lewy pasek, odsłanianie jeden po drugim). Referencyjna implementacja: `public/resources/vieta/vieta-warsztat.html` (patrz `.hints .hint` w CSS oraz logika odsłaniania w `next()/prev()`).

## Glify ①②③

Unicode U+2460, U+2461, U+2462. Wklejamy je na początku każdego stringa wskazówki — nawet gdyby UI nic o nich nie wiedział, student widzi numerację wzrokowo.

## Uwagi stylistyczne

- ① nie powinien zawierać arytmetyki ani końcowej odpowiedzi. Jeśli nie da się tego uniknąć (zadanie jest jednokrokowe — np. „podstaw $n=4$ do wzoru”), ① powinien opisać **ramowanie** („to tylko podstawienie, żadnej rekurencji”), a nie wykonać podstawienie.
- Styl: zwracaj się do studenta per „ty” (forma nieoficjalna), ale unikaj infantylizmu.
- LaTeX: w YAML-u ukośnik odwrotny podwajamy: `\\log`, `\\sqrt`, itp.

## Dla autorów nowych zadań

Pisząc nowe zadanie CKE/autorskie:

1. Najpierw rozwiąż zadanie na kartce.
2. Zapisz trzy wskazówki w kolejności: **ramowanie → narzędzie → rachunek**.
3. Upewnij się, że ① ma sens bez ② (student po ① powinien móc sam dojść do ② i ③).
4. Zostaw pole `hint:` (stare) puste — parser już tego nie wymaga, używamy wyłącznie `hints:`.
