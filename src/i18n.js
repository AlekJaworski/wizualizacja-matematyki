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
  hintDiagDeep:     { pl: "kliknij węzeł w podgrafie aby odpowiedzieć",
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
  modeQuickDesc:    { pl: "Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",
                      en: "Sweep the whole curriculum and find what you know. The system picks the most informative questions." },
  modeDeepLabel:    { pl: "Szczegółowa analiza",   en: "Deep-dive analysis" },
  modeDeepDesc:     { pl: "Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",
                      en: "Pick a specific target topic. The system analyses only the required prerequisites." },

  // ── GoalSelectionModal ───────────────────────────────────────────
  goalModalTitle:   { pl: "Wybierz cel",            en: "Choose goal" },
  goalModalSub:     { pl: "Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",
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
  accuracy:         { pl: "Skuteczność", en: "Accuracy" },
  sessionDone:      { pl: "Sesja zakończona ✓", en: "Session complete ✓" },
  sessionDoneSub:   { pl: "Odpowiedziano na", en: "Answered" },
  sessionDoneQ:     { pl: "pytań", en: "questions" },
  sessionDoneClass: { pl: "Sklasyfikowano", en: "Classified" },
  sessionDoneAcc:   { pl: "Skuteczność", en: "Accuracy" },
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
  legendFrontier:   { pl: "Granica (do zbadania)", en: "Frontier (to assess)" },
  legendUnclassified:{ pl: "Niezklasyfikowany", en: "Unclassified" },
  legendScopes:     { pl: "Działy",     en: "Topic areas" },
  legendStages:     { pl: "Etapy",      en: "Stages" },

  // ── Onboarding ───────────────────────────────────────────────────
  onboardingTitle:     { pl: "Witaj w oczochodzi.pl", en: "Welcome to oczochodzi.pl" },
  onboardingSub:       { pl: "Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",
                         en: "An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites." },
  onboardingBrowse:    { pl: "🔍 Przeglądaj", en: "🔍 Browse" },
  onboardingBrowseDesc:{ pl: "Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",
                         en: "Click any node to see details, prerequisites, and the topics it unlocks." },
  onboardingDiag:      { pl: "⚡ Szybka diagnoza", en: "⚡ Quick diagnostic" },
  onboardingDiagDesc:  { pl: "Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",
                         en: "Find out what you know — the algorithm picks the most informative questions and maps your knowledge." },
  onboardingDeep:      { pl: "◎ Szczegółowa analiza", en: "◎ Deep-dive analysis" },
  onboardingDeepDesc:  { pl: "Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",
                         en: "Pick a specific goal topic — the system focuses only on its required prerequisites." },
  onboardingChoose:    { pl: "Wybierz tryb, żeby zacząć:", en: "Choose a mode to get started:" },
  onboardingStart:     { pl: "Zaczynamy →", en: "Get started →" },
  onboardingSkip:      { pl: "Pomiń",       en: "Skip" },
  onboardingLangHint:  { pl: "Możesz zmienić język w pasku filtrów (PL / EN).",
                         en: "You can switch language in the filter bar (PL / EN)." },
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
