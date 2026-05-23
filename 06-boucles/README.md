# Bloc 6 — Boucles (Loops)

## Concepts couverts

- `for` classique
- `for...of` (tableaux, strings)
- `for...in` (objets)
- `while`
- `do...while`
- `break` et `continue`

---

## Rappels clés

```js
// for classique
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// for...of (valeurs d'un itérable)
const fruits = ["pomme", "banane"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in (clés d'un objet)
const chat = { nom: "Mochi", age: 3 };
for (const cle in chat) {
  console.log(cle, chat[cle]);
}

// while
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do...while (s'exécute au moins une fois)
let x = 10;
do {
  console.log(x); // s'exécute même si la condition est fausse
  x++;
} while (x < 5);

// break → sort de la boucle
// continue → passe à l'itération suivante
```

---

## Quelle boucle choisir ?

| Situation | Boucle recommandée |
|---|---|
| Nombre d'itérations connu | `for` |
| Parcourir un tableau ou une string | `for...of` |
| Parcourir les propriétés d'un objet | `for...in` |
| Condition inconnue à l'avance | `while` |
| Doit s'exécuter au moins une fois | `do...while` |

---

## Piège fréquent

Oublier d'incrémenter dans un `while` → boucle infinie.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  // i++ oublié → tourne indéfiniment !
}
```
