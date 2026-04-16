/**
 * i18n.js — all UI strings in Polish and English.
 *
 * Usage:
 *   import { t } from "../i18n.js";
 *   t("search", lang)  // → "Szukaj…" or "Search…"
 *
 * Adding a new string: add a key to STRINGS with both "pl" and "en" values.
 * Never hardcode UI text elsewhere.
 */

const STRINGS = {
  // ── General ──────────────────────────────────────────────────────
  all:              { pl: "Wszystkie", en: "All" },
  cancel:           { pl: "Anuluj",    en: "Cancel" },
  reset:            { pl: "Reset",     en: "Reset" },
  next:             { pl: "Dalej",     en: "Next" },
  close:            { pl: "Zamknij",   en: "Close" },
  search:           { pl: "Szukaj…",   en: "Search…" },
  noResults:        { pl: "Brak wyników", en: "No results" },
  level:            { pl: "Poziom",    en: "Level" },

  // ── Header ───────────────────────────────────────────────────────
  appTitle:         { pl: "PODSTAWA PROGRAMOWA — MATEMATYKA", en: "CURRICULUM — MATHEMATICS" },
  topicsCount:      { pl: "tematy",    en: "topics" },
  edgesCount:       { pl: "połączenia", en: "edges" },
  hintBrowse:       { pl: "scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",
                      en: "scroll = zoom · drag = pan · click node = details" },
  hintDiagQuick:    { pl: "kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",
                      en: "click node = question · shift+click = unknown · green = undo" },
  hintDiagDeep:     { pl: "kliknij węzeł w podgrafie, aby odpowiedzieć",
                      en: "click a node in the subgraph to answer" },
  layoutLabel:      { pl: "Układ",     en: "Layout" },

  // ── Mode toggle ──────────────────────────────────────────────────
  exploreMode:      { pl: "Eksploruj", en: "Explore" },
  diagnosticOff:    { pl: "Diagnoza",  en: "Diagnostic" },
  diagnosticOnQuick:{ pl: "Diagnoza (Szybka) ✓", en: "Diagnostic (Quick) ✓" },
  diagnosticOnDeep: { pl: "Diagnoza (Szczegółowa) ✓", en: "Diagnostic (Deep-Dive) ✓" },
  goalBtn:          { pl: "◎ Cel",     en: "◎ Goal" },
  goalBtnTitle:     { pl: "Wybierz cel szczegółowej diagnozy", en: "Choose deep-dive target" },

  // ── DiagnosticModeModal ──────────────────────────────────────────
  modePickerTitle:  { pl: "Wybierz tryb diagnozy", en: "Choose diagnostic mode" },
  modePickerSub:    { pl: "Jak chcesz sprawdzić swoją wiedzę?", en: "How do you want to assess your knowledge?" },
  modeQuickLabel:   { pl: "Szybka diagnoza",       en: "Quick diagnostic" },
  modeQuickDesc:    { pl: "Przejrzyj cały materiał i sprawdź, co już umiesz. Algorytm dobierze najbardziej wartościowe pytania.",
                      en: "Sweep the whole curriculum and find what you know. The system picks the most informative questions." },
  modeDeepLabel:    { pl: "Szczegółowa analiza",   en: "Deep-dive analysis" },
  modeDeepDesc:     { pl: "Wybierz konkretny cel (np. temat maturalny). Algorytm przeanalizuje tylko wymagane tematy wstępne.",
                      en: "Pick a specific target topic. The system analyses only the required prerequisites." },

  // ── GoalSelectionModal ───────────────────────────────────────────
  goalModalTitle:   { pl: "Wybierz cel",            en: "Choose goal" },
  goalModalSub:     { pl: "Wybierz temat docelowy. Zbadamy wszystkie wymagania wstępne.",
                      en: "Pick a target topic. We will diagnose all transitive prerequisites." },

  // ── FilterBar ────────────────────────────────────────────────────
  filterSection:    { pl: "Etap",      en: "Stage" },
  filterScope:      { pl: "Dział",     en: "Topic area" },
  filters:          { pl: "Filtry",    en: "Filters" },
  filterTitle:      { pl: "Filtry",    en: "Filters" },
  done:             { pl: "Gotowe",    en: "Done" },
  moreOptions:      { pl: "Opcje",     en: "Options" },

  // ── InfoPanel ────────────────────────────────────────────────────
  prerequisites:    { pl: "Wymagania wstępne", en: "Prerequisites" },
  enables:          { pl: "Odblokuje",          en: "Enables" },
  noPrereqs:        { pl: "Brak wymagań wstępnych", en: "No prerequisites" },
  noDependents:     { pl: "Brak zależnych tematów",  en: "No dependent topics" },
  learningResources:{ pl: "Materiały do nauki",      en: "Learning resources" },
  resourceInteractive:{ pl: "Interaktywna wizualizacja", en: "Interactive visualization" },
  resourceVideo:    { pl: "Wideo",              en: "Video" },
  resourceArticle:  { pl: "Artykuł",            en: "Article" },
  openResource:     { pl: "Otwórz",             en: "Open" },
  closeResource:    { pl: "Zamknij materiał",   en: "Close resource" },
  openInTab:        { pl: "Otwórz w nowej karcie", en: "Open in new tab" },

  // ── QuizPanel ────────────────────────────────────────────────────
  checkAnswer:      { pl: "Sprawdź",   en: "Check" },
  knownConfirm:     { pl: "✓ Znam!",   en: "✓ I know it!" },
  unknownConfirm:   { pl: "✗ Nie znam", en: "✗ Don't know it" },
  skipBtn:          { pl: "Pomiń",     en: "Skip" },
  noQuestion:       { pl: "Brak pytania dla tego węzła. Czy znasz ten temat?",
                      en: "No question for this node. Do you know this topic?" },
  yesKnow:          { pl: "✓ Tak",     en: "✓ Yes" },
  noKnow:           { pl: "✗ Nie",     en: "✗ No" },

  // ── DiagnosticPanel ──────────────────────────────────────────────
  diagHeader:       { pl: "Diagnoza",  en: "Diagnostic" },
  statKnown:        { pl: "Znam",      en: "Known" },
  statUnknown:      { pl: "Nie znam",  en: "Unknown" },
  statRemaining:    { pl: "Do odp.",   en: "To go" },
  answered:         { pl: "Odpowiedzi", en: "Answered" },
  estimated:        { pl: "Szacowane", en: "Estimated" },
  accuracy:         { pl: "Trafność", en: "Accuracy" },
  sessionDone:      { pl: "Sesja zakończona ✓", en: "Session complete ✓" },
  sessionDoneSub:   { pl: "Odpowiedziano na", en: "Answered" },
  sessionDoneQ:     { pl: "pytań", en: "questions" },
  sessionDoneClass: { pl: "Sklasyfikowano", en: "Classified" },
  sessionDoneAcc:   { pl: "Trafność", en: "Accuracy" },
  sessionDoneKnown: { pl: "Znasz", en: "You know" },
  sessionDoneStudy: { pl: "do nauki", en: "to study" },
  toStudy:          { pl: "Do nauki", en: "To study" },
  knownList:        { pl: "Znam", en: "Known" },
  startHere:        { pl: "★ Zacznij tutaj", en: "★ Start here" },
  startHereSub:     { pl: "najwięcej powiązań w grafie", en: "most connections in the graph" },
  clickAnyNode:     { pl: "Lub kliknij dowolny węzeł na grafie.", en: "Or click any node on the graph." },
  whatNext:         { pl: "▶ Co dalej", en: "▶ What next" },
  best:             { pl: "najlepsze", en: "best" },
  hintShift:        { pl: "Shift+click → oznacz jako nieznany", en: "Shift+click → mark as unknown" },
  hintGreen:        { pl: "Kliknij zielony → usuń oznaczenie", en: "Click green → remove mark" },
  hintClick:        { pl: "Kliknij węzeł → pytanie", en: "Click node → question" },

  // ── DeepDivePanel ────────────────────────────────────────────────
  deepDiveHeader:   { pl: "Szczegółowa diagnoza", en: "Deep-dive diagnostic" },
  deepDiveTarget:   { pl: "Cel",        en: "Goal" },
  deepDiveNodes:    { pl: "węzłów w podgrafie", en: "nodes in subgraph" },
  classified:       { pl: "Sklasyfikowano", en: "Classified" },
  questions:        { pl: "Pytań",      en: "Questions" },
  diagReady:        { pl: "Diagnoza gotowa ✓", en: "Diagnosis complete ✓" },
  diagKnown:        { pl: "Znam",       en: "Known" },
  diagStudy:        { pl: "Do nauki",   en: "To study" },
  diagTotal:        { pl: "Razem",      en: "Total" },
  studyThese:       { pl: "Do nauki — zacznij od tych:", en: "To study — start with these:" },
  mastered:         { pl: "Opanowane:", en: "Mastered:" },
  nextQuestion:     { pl: "★ Następne pytanie", en: "★ Next question" },
  confidence:       { pl: "pewność",    en: "confidence" },
  unclassified:     { pl: "Niezbadane", en: "Unclassified" },

  // ── Legend ───────────────────────────────────────────────────────
  legendTitle:      { pl: "Legenda",    en: "Legend" },
  legendKnown:      { pl: "Znany",      en: "Known" },
  legendUnknown:    { pl: "Nieznany",   en: "Unknown" },
  legendFrontier:   { pl: "Granica (do sprawdzenia)", en: "Frontier (to assess)" },
  legendUnclassified:{ pl: "Niesklasyfikowany", en: "Unclassified" },
  legendScopes:     { pl: "Działy",     en: "Topic areas" },
  legendStages:     { pl: "Etapy",      en: "Stages" },

  // ── Onboarding ───────────────────────────────────────────────────
  onboardingTitle:     { pl: "Witaj w oczochodzi.pl", en: "Welcome to oczochodzi.pl" },
  onboardingSub:       { pl: "Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, a połączenia pokazują wymagania wstępne.",
                         en: "An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites." },
  onboardingBrowse:    { pl: "🔍 Przeglądaj", en: "🔍 Browse" },
  onboardingBrowseDesc:{ pl: "Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",
                         en: "Click any node to see details, prerequisites, and the topics it unlocks." },
  onboardingDiag:      { pl: "⚡ Szybka diagnoza", en: "⚡ Quick diagnostic" },
  onboardingDiagDesc:  { pl: "Sprawdź, co umiesz — algorytm dobierze najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",
                         en: "Find out what you know — the algorithm picks the most informative questions and maps your knowledge." },
  onboardingDeep:      { pl: "◎ Szczegółowa analiza", en: "◎ Deep-dive analysis" },
  onboardingDeepDesc:  { pl: "Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — algorytm przeanalizuje tylko wymagane tematy wstępne.",
                         en: "Pick a specific goal topic — the system focuses only on its required prerequisites." },
  onboardingChoose:    { pl: "Wybierz tryb, żeby zacząć:", en: "Choose a mode to get started:" },
  onboardingStart:     { pl: "Zaczynamy →", en: "Get started →" },
  onboardingSkip:      { pl: "Pomiń",       en: "Skip" },
  onboardingLangHint:  { pl: "Możesz zmienić język w pasku filtrów (PL / EN).",
                         en: "You can switch language in the filter bar (PL / EN)." },

  // ── Hero screen ──────────────────────────────────────────────────
  heroTitle:     { pl: "Znajdź swoje luki w matematyce",
                   en: "Find your gaps in mathematics" },
  heroSub:       { pl: "Odpowiedz na kilkanaście pytań. Pokażemy Ci, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",
                   en: "Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations." },
  heroStart:     { pl: "Sprawdź się",        en: "Start assessment" },
  heroBrowse:    { pl: "Przeglądaj mapę →",  en: "Browse the map →" },
  heroLength:    { pl: "Czas:",            en: "Length:" },
  heroQuestions:  { pl: "pytań",           en: "questions" },
  presetQuick:    { pl: "Szybki",          en: "Quick" },
  presetQuickDesc:{ pl: "Szybki przegląd",  en: "Quick overview" },
  presetStandard: { pl: "Standardowy",     en: "Standard" },
  presetStandardDesc:{ pl: "Dobry balans", en: "Good balance" },
  presetThorough: { pl: "Dokładny",        en: "Thorough" },
  presetThoroughDesc:{ pl: "Szczegółowy obraz", en: "Detailed picture" },
  heroStep1:     { pl: "Odpowiadasz na pytania",        en: "Answer questions" },
  heroStep2:     { pl: "Algorytm mapuje Twoją wiedzę",  en: "Algorithm maps your knowledge" },
  heroStep3:     { pl: "Dostajesz plan, od czego zacząć", en: "Get a plan for where to start" },

  // ── Quiz flow ────────────────────────────────────────────────────
  quizExit:       { pl: "Wyjdź",              en: "Exit" },
  quizQuestion:   { pl: "Pytanie",            en: "Question" },
  quizClassified: { pl: "zbadane",            en: "classified" },
  quizAccuracy:   { pl: "trafność",           en: "accuracy" },
  quizCheck:      { pl: "Sprawdź",            en: "Check" },
  quizContinue:   { pl: "Dalej",              en: "Continue" },
  quizProcessing: { pl: "Analizuję wyniki…",     en: "Analyzing results…" },
  quizExitConfirm:{ pl: "Na pewno chcesz przerwać? Postęp zostanie utracony.",
                    en: "Are you sure you want to quit? Progress will be lost." },
  quizNoQuestion: { pl: "Brak pytania dla tego tematu. Czy go znasz?",
                    en: "No question available for this topic. Do you know it?" },
  quizYes:        { pl: "Tak, znam",          en: "Yes, I know it" },
  quizNo:         { pl: "Nie, nie znam",       en: "No, I don't" },

  // ── Results screen ───────────────────────────────────────────────
  resultsTitle:      { pl: "Twoja diagnoza",              en: "Your diagnosis" },
  resultsAnswered:   { pl: "pytań",                       en: "questions" },
  resultsAccuracy:   { pl: "trafność",                    en: "accuracy" },
  resultsKnown:      { pl: "Znasz",                       en: "Known" },
  resultsToStudy:    { pl: "Do nauki",                    en: "To study" },
  resultsGapsTitle:  { pl: "Zacznij tutaj",               en: "Start here" },
  resultsGapsSub:    { pl: "Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",
                       en: "These are your biggest gaps — the best starting point to build a solid foundation." },
  resultsHasResource:{ pl: "ma materiały",                en: "has resources" },
  resultsMore:       { pl: "więcej tematów do nauki",     en: "more topics to study" },
  resultsAllGood:    { pl: "Wszystko opanowane!",         en: "All clear!" },
  resultsAllGoodSub: { pl: "Nie znaleziono luk w Twojej wiedzy.",
                       en: "No gaps found in your knowledge." },
  resultsSeeMap:     { pl: "Zobacz swoją mapę",           en: "See your map" },
  resultsShare:      { pl: "Udostępnij wynik",             en: "Share results" },
  resultsRetake:     { pl: "Spróbuj ponownie",            en: "Try again" },

  // ── Coffee ───────────────────────────────────────────────────────
  coffeeText:        { pl: "Pomogło? Możesz postawić mi kawę.",
                       en: "Found it helpful? You can buy me a coffee." },
  coffeeBtn:         { pl: "Postaw kawę ☕",               en: "Buy me a coffee ☕" },

  // ── Belief status in InfoPanel ───────────────────────────────────
  beliefKnown:       { pl: "Znasz ten temat",             en: "You know this topic" },
  beliefUnknown:     { pl: "Do nauki",                    en: "To study" },

  // ── Topic view ───────────────────────────────────────────────────
  topicBack:         { pl: "Wróć do mapy",                en: "Back to map" },
  topicLearnPath:    { pl: "Ścieżka do tego tematu",     en: "Path to this topic" },

  // ── Learning path ────────────────────────────────────────────────
  pathLabel:         { pl: "Ścieżka nauki",              en: "Learning path" },
  pathTopics:        { pl: "tematów w ścieżce",          en: "topics in path" },
  pathKnown:         { pl: "znasz",                      en: "known" },
  pathToStudy:       { pl: "do nauki",                   en: "to study" },
  pathGoal:          { pl: "— cel",                      en: "— goal" },
};

/**
 * Get a translated string.
 * @param {string} key
 * @param {"pl"|"en"} lang
 * @returns {string}
 */
export function t(key, lang = "pl") {
  const entry = STRINGS[key];
  if (!entry) {
    console.warn(`i18n: missing key "${key}"`);
    return key;
  }
  return entry[lang] ?? entry["pl"] ?? key;
}
