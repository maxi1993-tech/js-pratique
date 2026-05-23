// ============================================================
// BLOC 3 — Functions
// ============================================================
// Complète chaque fonction en suivant les consignes.
// Ne modifie pas les noms des fonctions.
// Lance : npm run test:bloc3
// ============================================================


// EXERCICE 1
// Écris une fonction classique qui retourne le double d'un nombre.
// Exemple : doubler(5) → 10
function doubler(nombre) {
  return nombre * 2;
}


// EXERCICE 2
// Écris une arrow function qui retourne le carré d'un nombre.
// Exemple : carre(4) → 16
const carre = (nombre) => {
  return nombre * nombre;
};


// EXERCICE 3
// Retourne true si le nombre est positif (strictement supérieur à 0).
// Exemple : estPositif(5) → true
// Exemple : estPositif(-3) → false
// Exemple : estPositif(0) → false
function estPositif(nombre) {
  return nombre > 0;
}


// EXERCICE 4
// Retourne la somme de trois nombres.
// Si un paramètre n'est pas fourni, il vaut 0 par défaut.
// Exemple : somme(1, 2, 3) → 6
// Exemple : somme(1, 2) → 3
function somme(a = 0, b = 0, c = 0) {
  return a + b + c;
}


// EXERCICE 5
// Retourne une fonction qui multiplie son argument par le facteur donné.
// (C'est une fonction qui retourne une fonction.)
// Exemple :
//   const tripler = multiplierPar(3);
//   tripler(5) → 15
function multiplierPar(facteur) {
  return function(nombre) {
    return nombre * facteur;
  }
}


// EXERCICE 6
// Retourne le plus grand des deux nombres.
// Exemple : max(3, 7) → 7
// Exemple : max(9, 2) → 9
const max = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};


// ============================================================
// NE PAS MODIFIER EN DESSOUS
// ============================================================
module.exports = {
  doubler,
  carre,
  estPositif,
  somme,
  multiplierPar,
  max,
};
