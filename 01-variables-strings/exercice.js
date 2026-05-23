// ============================================================
// BLOC 1 — Variables & Strings
// ============================================================
// Complète chaque fonction en suivant les consignes.
// Ne modifie pas les noms des fonctions.
// Lance : npm run test:bloc1
// ============================================================


// EXERCICE 1
// Retourne un message de bienvenue en utilisant un template literal.
// Exemple : direBonjour("Alice") → "Bonjour, Alice !"
function direBonjour(prenom) {
  // TODO : utilise un template literal
}


// EXERCICE 2
// Retourne le type de la valeur reçue.
// Exemple : donnerType(42) → "number"
// Exemple : donnerType("hello") → "string"
function donnerType(valeur) {
  // TODO : utilise typeof
}


// EXERCICE 3
// Retourne la string en majuscules, sans espaces au début ni à la fin.
// Exemple : nettoyerEtMajuscules("  bonjour  ") → "BONJOUR"
function nettoyerEtMajuscules(texte) {
  // TODO : combine .trim() et .toUpperCase()
}


// EXERCICE 4
// Retourne true si le mot est contenu dans la phrase, false sinon.
// Exemple : contient("JavaScript est fun", "fun") → true
// Exemple : contient("JavaScript est fun", "Python") → false
function contient(phrase, mot) {
  // TODO : utilise .includes()
}


// EXERCICE 5
// Retourne les 3 premiers caractères de la string.
// Exemple : troiPremiersCaracteres("Bonjour") → "Bon"
function troisPremiersCaracteres(texte) {
  // TODO : utilise .slice()
}


// EXERCICE 6
// Remplace le mot "erreur" par "correction" dans le texte.
// Exemple : corrigerTexte("Il y a une erreur ici") → "Il y a une correction ici"
function corrigerTexte(texte) {
  // TODO : utilise .replace()
}


// EXERCICE 7
// Retourne true si la valeur est une string, false sinon.
// Exemple : estUneString("hello") → true
// Exemple : estUneString(42) → false
function estUneString(valeur) {
  // TODO : utilise typeof
}


// ============================================================
// NE PAS MODIFIER EN DESSOUS
// ============================================================
module.exports = {
  direBonjour,
  donnerType,
  nettoyerEtMajuscules,
  contient,
  troisPremiersCaracteres,
  corrigerTexte,
  estUneString,
};
