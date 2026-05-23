# Bloc 2 — Booléens, Nombres & Opérateurs

## Concepts couverts

- Opérateurs arithmétiques : `+`, `-`, `*`, `/`, `%`, `**`
- Coercition de types
- `null` et `undefined` dans les calculs
- `==` vs `===`
- Opérateurs de comparaison
- Booléens : `true`, `false`, valeurs truthy/falsy
- Conditionnels : `if / else if / else`, ternaire `? :`, `switch`
- `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.abs()`

---

## Rappels clés

```js
// Coercition avec +
5 + "10"   // "510" ← string (concaténation)
"10" - 5   // 5     ← number (conversion forcée)

// null et undefined
null + 5       // 5
undefined + 5  // NaN

// == vs ===
5 == "5"   // true  ← dangereux
5 === "5"  // false ← recommandé

// Valeurs FALSY (évaluées comme false)
// false, 0, "", null, undefined, NaN

// if / else
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Ternaire
const resultat = score >= 50 ? "reçu" : "recalé";

// Switch
switch (jour) {
  case 1: console.log("Lundi"); break;
  case 2: console.log("Mardi"); break;
  default: console.log("Autre jour");
}
```

---

## Pièges fréquents

- `+` avec une string → concaténation, pas addition
- `typeof null` → `"object"` (bug historique JS)
- Oublier `break` dans un `switch` → tous les cas suivants s'exécutent
- `==` fait de la coercition : préfère toujours `===`
