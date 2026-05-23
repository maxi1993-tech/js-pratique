# Bloc 5 — Tableaux (Arrays)

## Concepts couverts

- Créer un tableau, accéder par index
- `.length`
- Ajouter / supprimer : `.push()`, `.pop()`, `.shift()`, `.unshift()`
- Chercher : `.indexOf()`, `.includes()`
- Extraire / modifier : `.slice()`, `.splice()`
- Transformer : `.join()`, `.reverse()`, `.concat()`
- Spread `[...arr]`
- Déstructuration

---

## Rappels clés

```js
const fruits = ["pomme", "banane", "orange"];

fruits[0]        // "pomme"  ← index commence à 0
fruits.length    // 3

fruits.push("kiwi")      // ajoute à la fin
fruits.pop()             // supprime le dernier, le retourne
fruits.unshift("mangue") // ajoute au début
fruits.shift()           // supprime le premier, le retourne

fruits.indexOf("banane")   // 1  (retourne -1 si absent)
fruits.includes("pomme")   // true

fruits.slice(1, 3)  // ["banane","orange"] — ne modifie PAS le tableau
fruits.splice(1, 1) // supprime 1 élément à l'index 1 — modifie le tableau !

fruits.join(" - ")  // "pomme - banane - orange"
fruits.reverse()    // inverse EN PLACE (modifie le tableau)

// Spread (copie superficielle)
const copie = [...fruits];

// Déstructuration
const [premier, deuxieme] = fruits;
```

---

## Pièges fréquents

- `.splice()` **modifie** le tableau original, `.slice()` non
- `.reverse()` modifie aussi le tableau original
- Index inexistant → retourne `undefined`, pas d'erreur
- `.indexOf()` retourne `-1` si non trouvé (pas `false`)
