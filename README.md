# js-pratique

Exercices JavaScript progressifs avec tests automatiques.  
Chaque bloc correspond à une section du parcours FreeCodeCamp.

---

## Installation

```bash
npm install
```

---

## Comment utiliser ce repo

### 1. Ouvre un dossier de bloc
Chaque bloc a :
- `exercice.js` → **c'est ici que tu écris ton code**
- `exercice.test.js` → les tests automatiques (ne pas modifier)
- `README.md` → les consignes et rappels de concepts

### 2. Lis les consignes dans le `README.md` du bloc

### 3. Complète les fonctions dans `exercice.js`

Cherche les commentaires `// TODO :` — c'est là que tu travailles.

### 4. Lance les tests

```bash
# Tous les tests
npm test

# Un seul bloc
npm run test:bloc1
npm run test:bloc2
npm run test:bloc3
npm run test:bloc4

# Mode surveillance automatique (relance à chaque sauvegarde)
npm run test:watch
```

### 5. Lis les résultats

- ✅ Test vert = bon résultat
- ❌ Test rouge = quelque chose ne va pas — lis le message d'erreur

---

## Structure

```
js-pratique/
├── 01-variables-strings/   → let, const, string, template literals
├── 02-numbers-operators/   → nombres, opérateurs, coercition de types
├── 03-functions/           → fonctions, arrow functions, portée
└── 04-objects/             → objets, propriétés, méthodes
```

---

## Ressources

- [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript) — référence principale
- [FreeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [JavaScript.info](https://fr.javascript.info/) — explications claires et progressives

---

> Ce repo est un outil de consolidation.  
> Si un test échoue, essaie de comprendre **pourquoi** avant de corriger.
