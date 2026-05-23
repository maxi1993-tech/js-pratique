// ============================================================
// BLOC 6 — Boucles (Loops)
// ============================================================
// Complète chaque fonction. Ne modifie pas les noms.
// Lance : npm run test:bloc6
// ============================================================


// EXERCICE 1
// Retourne la somme de tous les nombres de 1 à n (inclus).
// Exemple : sommeJusqua(5) → 15  (1+2+3+4+5)
// Utilise une boucle for classique.
function sommeJusqua(n) {
  // TODO
}


// EXERCICE 2
// Retourne un nouveau tableau avec chaque élément multiplié par 2.
// Exemple : doubler([1, 2, 3]) → [2, 4, 6]
// Utilise for...of.
function doubler(tableau) {
  // TODO
}


// EXERCICE 3
// Retourne un tableau contenant uniquement les nombres pairs du tableau.
// Exemple : garderPairs([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
// Utilise for...of et continue pour sauter les impairs.
function garderPairs(tableau) {
  // TODO
}


// EXERCICE 4
// Compte le nombre de fois où la lettre apparaît dans la string.
// Exemple : compterLettre("banane", "a") → 3
// Utilise for...of.
function compterLettre(texte, lettre) {
  // TODO
}


// EXERCICE 5
// Retourne un tableau avec les clés de l'objet.
// Exemple : listeDesCles({ nom: "Alice", age: 30 }) → ["nom", "age"]
// Utilise for...in.
function listeDesCles(objet) {
  // TODO
}


// EXERCICE 6
// Retourne le premier nombre du tableau qui est supérieur à seuil.
// Si aucun n'est trouvé, retourne null.
// Exemple : premierSuperieur([1, 3, 7, 2, 9], 5) → 7
// Utilise for et break.
function premierSuperieur(tableau, seuil) {
  // TODO
}


// EXERCICE 7
// Retourne le compte à rebours sous forme de tableau : [n, n-1, ..., 1, 0]
// Exemple : compteARebours(3) → [3, 2, 1, 0]
// Utilise while.
function compteARebours(n) {
  // TODO
}


// ============================================================
// NE PAS MODIFIER EN DESSOUS
// ============================================================
module.exports = {
  sommeJusqua, doubler, garderPairs, compterLettre,
  listeDesCles, premierSuperieur, compteARebours,
};
