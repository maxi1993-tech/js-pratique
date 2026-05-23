# Bloc 3 — Functions

## Concepts couverts

- Déclaration de fonction (`function`)
- Arrow functions (`=>`)
- Paramètres et arguments
- `return`
- Portée : globale, locale, bloc
- Fonctions avec valeur par défaut

---

## Rappels clés

```js
// Déclaration classique
function saluer(nom) {
  return "Bonjour " + nom;
}

// Arrow function (version courte)
const saluer = (nom) => "Bonjour " + nom;

// Avec plusieurs lignes → accolades + return obligatoires
const calculer = (a, b) => {
  const somme = a + b;
  return somme;
};

// Valeur par défaut
function saluer(nom = "inconnu") {
  return "Bonjour " + nom;
}
saluer(); // "Bonjour inconnu"
```

---

## Portée (scope)

```js
let x = "global";

function test() {
  let x = "local"; // variable différente
  console.log(x);  // "local"
}

test();
console.log(x); // "global"
```

Une variable déclarée dans une fonction n'existe **pas** à l'extérieur.

---

## Piège fréquent

Oublier le `return` → la fonction retourne `undefined` par défaut.

```js
function double(x) {
  x * 2; // ← pas de return !
}
double(5); // undefined
```
