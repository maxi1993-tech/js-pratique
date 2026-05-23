// ============================================================
// BLOC 2 — Booléens, Nombres & Opérateurs
// ============================================================
// Complète chaque fonction. Ne modifie pas les noms.
// Lance : npm run test:bloc2
// ============================================================


// EXERCICE 1
// Retourne le reste de la division de a par b.
// Exemple : reste(10, 3) → 1
function reste(a, b) {
  // TODO
}


// EXERCICE 2
// Retourne true si le nombre est pair, false sinon.
// Exemple : estPair(4) → true  |  estPair(7) → false
function estPair(nombre) {
  // TODO
}


// EXERCICE 3
// Les deux paramètres peuvent être des strings.
// Assure-toi que le calcul est bien numérique.
// Exemple : additionner("5", "3") → 8 (number, pas "53")
function additionner(a, b) {
  // TODO
}


// EXERCICE 4
// Retourne true si a est strictement égal à b (utilise ===).
// Exemple : sontEgaux(5, 5) → true  |  sontEgaux(5, "5") → false
function sontEgaux(a, b) {
  // TODO
}


// EXERCICE 5
// Retourne la mention selon la note (sur 100) :
// >= 90 → "Excellent"
// >= 70 → "Bien"
// >= 50 → "Passable"
// < 50  → "Insuffisant"
function mention(note) {
  // TODO : utilise if / else if / else
}


// EXERCICE 6
// Retourne "majeur" si l'âge est >= 18, "mineur" sinon.
// Utilise l'opérateur ternaire.
// Exemple : majorite(20) → "majeur"  |  majorite(15) → "mineur"
function majorite(age) {
  // TODO : utilise ? :
}


// EXERCICE 7
// Retourne le nom du jour selon le numéro (1 = Lundi ... 7 = Dimanche).
// Si le numéro est invalide, retourne "Inconnu".
// Utilise switch.
function nomDuJour(numero) {
  // TODO : utilise switch / case / default
}


// EXERCICE 8
// Retourne le nombre arrondi à l'entier inférieur.
// Exemple : arrondir(4.9) → 4
function arrondir(nombre) {
  // TODO : utilise Math.floor()
}


// EXERCICE 9
// Retourne la valeur absolue.
// Exemple : valeurAbsolue(-7) → 7
function valeurAbsolue(nombre) {
  // TODO : utilise Math.abs()
}


// ============================================================
// NE PAS MODIFIER EN DESSOUS
// ============================================================
module.exports = {
  reste, estPair, additionner, sontEgaux,
  mention, majorite, nomDuJour, arrondir, valeurAbsolue,
};
