// ============================================================
// BLOC 4 — Objects
// ============================================================
// Complète chaque fonction en suivant les consignes.
// Ne modifie pas les noms des fonctions.
// Lance : npm run test:bloc4
// ============================================================


// EXERCICE 1
// Retourne le nom de la personne (propriété "nom").
// Exemple : getNom({ nom: "Alice", age: 30 }) → "Alice"
function getNom(personne) {
  // TODO : utilise la notation pointée
}


// EXERCICE 2
// Ajoute une propriété "actif" avec la valeur true à l'objet.
// Retourne l'objet modifié.
// Exemple : activer({ nom: "Alice" }) → { nom: "Alice", actif: true }
function activer(objet) {
  // TODO
}


// EXERCICE 3
// Supprime la propriété "motDePasse" de l'objet.
// Retourne l'objet modifié.
function supprimerMotDePasse(utilisateur) {
  // TODO : utilise delete
}


// EXERCICE 4
// Retourne true si l'objet possède la propriété donnée, false sinon.
// Exemple : aPropriete({ nom: "Alice" }, "nom") → true
// Exemple : aPropriete({ nom: "Alice" }, "age") → false
function aPropriete(objet, propriete) {
  // TODO : utilise Object.hasOwn()
}


// EXERCICE 5
// L'objet "animal" a une méthode "presenter".
// Complète cette méthode pour qu'elle retourne :
// "Je m'appelle [nom] et je suis un [espece]."
// Exemple : animal.presenter() → "Je m'appelle Rex et je suis un chien."
const animal = {
  nom: "Rex",
  espece: "chien",
  presenter() {
    // TODO : utilise this
  }
};


// EXERCICE 6
// Retourne l'email de l'utilisateur en utilisant l'optional chaining.
// Si le profil ou l'email n'existe pas, retourne "non renseigné".
// Exemple : getEmail({ profil: { email: "a@b.com" } }) → "a@b.com"
// Exemple : getEmail({ profil: {} }) → "non renseigné"
// Exemple : getEmail({}) → "non renseigné"
function getEmail(utilisateur) {
  // TODO : utilise ?. et ??
}


// EXERCICE 7
// Utilise la déstructuration pour extraire "nom" et "age" de l'objet.
// Retourne une string : "Alice a 30 ans."
// Exemple : decrire({ nom: "Alice", age: 30, ville: "Paris" }) → "Alice a 30 ans."
function decrire(personne) {
  // TODO : déstructure l'objet pour extraire nom et age
}


// EXERCICE 8
// Convertis l'objet en string JSON.
// Exemple : versJSON({ nom: "Alice" }) → '{"nom":"Alice"}'
function versJSON(objet) {
  // TODO : utilise JSON.stringify()
}


// ============================================================
// NE PAS MODIFIER EN DESSOUS
// ============================================================
module.exports = {
  getNom,
  activer,
  supprimerMotDePasse,
  aPropriete,
  animal,
  getEmail,
  decrire,
  versJSON,
};
