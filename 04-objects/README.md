# Bloc 4 — Objects

## Concepts couverts

- Créer un objet
- Accéder aux propriétés (notation pointée et crochets)
- Modifier et ajouter des propriétés
- Supprimer une propriété (`delete`)
- Vérifier l'existence d'une propriété (`Object.hasOwn`, `in`)
- Méthodes d'objet (`this`)
- Optional chaining (`?.`)
- Déstructuration
- JSON (`JSON.stringify`, `JSON.parse`)

---

## Rappels clés

```js
const chat = {
  nom: "Mochi",
  age: 3
};

// Accès
chat.nom        // "Mochi"
chat["nom"]     // "Mochi"

// Ajout / modification
chat.couleur = "roux";

// Suppression
delete chat.age;

// Vérification d'existence
Object.hasOwn(chat, "nom")  // true  ← recommandé
"nom" in chat               // true

// Méthode
const chien = {
  nom: "Rex",
  aboyer() {
    return `${this.nom} dit Wouf !`;
  }
};
chien.aboyer(); // "Rex dit Wouf !"

// Optional chaining
const user = { profil: { email: "a@b.com" } };
user.profil?.email   // "a@b.com"
user.adresse?.rue    // undefined (pas d'erreur)
```

---

## Piège fréquent

`if (obj.prop)` est **faux** si la valeur est `0`, `false`, `null`, ou `""`.  
Utilise `Object.hasOwn()` pour vérifier l'existence réelle.

```js
const config = { volume: 0 };
if (config.volume) { /* Ne s'exécute pas ! */ }
if (Object.hasOwn(config, "volume")) { /* S'exécute correctement */ }
```
