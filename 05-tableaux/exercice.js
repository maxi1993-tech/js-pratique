// ============================================================
// BLOC 5 — Tableaux (Arrays)
// ============================================================
// Complète chaque fonction. Ne modifie pas les noms.
// Lance : npm run test:bloc5
// ============================================================


// EXERCICE 1
// Retourne le premier élément du tableau.
// Exemple : premier(["a", "b", "c"]) → "a"
function premier(tableau) {
  // TODO
}


// EXERCICE 2
// Retourne le dernier élément du tableau.
// Exemple : dernier(["a", "b", "c"]) → "c"
// Astuce : utilise .length
function dernier(tableau) {
  // TODO
}


// EXERCICE 3
// Ajoute l'élément à la fin du tableau et retourne le tableau modifié.
// Exemple : ajouterFin(["a", "b"], "c") → ["a", "b", "c"]
function ajouterFin(tableau, element) {
  // TODO : utilise .push()
}


// EXERCICE 4
// Supprime le dernier élément et retourne l'élément supprimé.
// Exemple : supprimerFin(["a", "b", "c"]) → "c"
function supprimerFin(tableau) {
  // TODO : utilise .pop()
}


// EXERCICE 5
// Retourne true si la valeur est dans le tableau, false sinon.
// Exemple : contient(["a", "b", "c"], "b") → true
function contient(tableau, valeur) {
  // TODO : utilise .includes()
}


// EXERCICE 6
// Retourne l'index de la valeur dans le tableau.
// Si elle n'est pas trouvée, retourne -1.
// Exemple : trouverIndex(["a", "b", "c"], "b") → 1
function trouverIndex(tableau, valeur) {
  // TODO : utilise .indexOf()
}


// EXERCICE 7
// Retourne une copie du tableau de l'index debut (inclus) à fin (exclu).
// Ne modifie pas le tableau original.
// Exemple : extraire(["a","b","c","d"], 1, 3) → ["b","c"]
function extraire(tableau, debut, fin) {
  // TODO : utilise .slice()
}


// EXERCICE 8
// Retourne les éléments du tableau joints par le séparateur donné.
// Exemple : joindre(["Bonjour", "monde"], " ") → "Bonjour monde"
function joindre(tableau, separateur) {
  // TODO : utilise .join()
}


// EXERCICE 9
// Retourne une copie du tableau inversée.
// Ne modifie PAS le tableau original.
// Exemple : inverser([1, 2, 3]) → [3, 2, 1]
function inverser(tableau) {
  // TODO : utilise le spread [...tableau] puis .reverse()
  // Pourquoi le spread ? Parce que .reverse() modifie le tableau original.
}


// EXERCICE 10
// Déstructure le tableau pour retourner un objet { premier, deuxieme, reste }
// Exemple :
//   decomposer([1, 2, 3, 4]) → { premier: 1, deuxieme: 2, reste: [3, 4] }
function decomposer(tableau) {
  // TODO : utilise la déstructuration avec rest syntax
}


// ============================================================
// NE PAS MODIFIER EN DESSOUS
// ============================================================
module.exports = {
  premier, dernier, ajouterFin, supprimerFin,
  contient, trouverIndex, extraire, joindre, inverser, decomposer,
};
