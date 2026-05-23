# Bloc 1 — Variables & Strings

## Concepts couverts

- `let` vs `const`
- Types de données : string, number, boolean, null, undefined
- Concaténation avec `+`
- Template literals (backticks `` ` ``)
- Méthodes de string : `.toUpperCase()`, `.toLowerCase()`, `.slice()`, `.includes()`, `.trim()`, `.replace()`
- `typeof`

---

## Rappels clés

```js
// let = peut être réassigné
let nom = "Alice";
nom = "Bob"; // ok

// const = ne peut pas être réassigné
const PI = 3.14;
PI = 3; // Erreur !

// Template literal
const age = 30;
console.log(`J'ai ${age} ans`); // J'ai 30 ans

// typeof
console.log(typeof "bonjour"); // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof null);      // "object" ← piège classique !
console.log(typeof undefined); // "undefined"
```

---

## Piège fréquent

`typeof null` retourne `"object"` — c'est un bug historique de JavaScript.  
Ce n'est **pas** un objet, c'est une valeur nulle intentionnelle.

---

## Méthodes de string utiles

| Méthode | Ce qu'elle fait |
|---|---|
| `.toUpperCase()` | Met tout en majuscules |
| `.toLowerCase()` | Met tout en minuscules |
| `.trim()` | Supprime les espaces au début et à la fin |
| `.includes("x")` | Retourne `true` si la string contient "x" |
| `.slice(0, 3)` | Extrait une portion (index 0 inclus, 3 exclu) |
| `.replace("a", "b")` | Remplace la première occurrence de "a" par "b" |
