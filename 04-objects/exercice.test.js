const {
  getNom,
  activer,
  supprimerMotDePasse,
  aPropriete,
  animal,
  getEmail,
  decrire,
  versJSON,
} = require("./exercice");

describe("Bloc 4 — Objects", () => {

  test("getNom retourne la valeur de la propriété nom", () => {
    expect(getNom({ nom: "Alice", age: 30 })).toBe("Alice");
    expect(getNom({ nom: "Max", ville: "Paris" })).toBe("Max");
  });

  test("activer ajoute la propriété actif: true", () => {
    const result = activer({ nom: "Alice" });
    expect(result.actif).toBe(true);
    expect(result.nom).toBe("Alice");
  });

  test("supprimerMotDePasse enlève la propriété motDePasse", () => {
    const user = { nom: "Alice", motDePasse: "1234" };
    const result = supprimerMotDePasse(user);
    expect(result.motDePasse).toBeUndefined();
    expect(result.nom).toBe("Alice");
  });

  test("aPropriete retourne true si la propriété existe", () => {
    expect(aPropriete({ nom: "Alice" }, "nom")).toBe(true);
    expect(aPropriete({ nom: "Alice" }, "age")).toBe(false);
    expect(aPropriete({ volume: 0 }, "volume")).toBe(true); // valeur falsy mais propriété existe
  });

  test("animal.presenter retourne la bonne phrase", () => {
    expect(animal.presenter()).toBe("Je m'appelle Rex et je suis un chien.");
  });

  test("getEmail retourne l'email ou 'non renseigné'", () => {
    expect(getEmail({ profil: { email: "a@b.com" } })).toBe("a@b.com");
    expect(getEmail({ profil: {} })).toBe("non renseigné");
    expect(getEmail({})).toBe("non renseigné");
  });

  test("decrire utilise la déstructuration et retourne la bonne phrase", () => {
    expect(decrire({ nom: "Alice", age: 30, ville: "Paris" })).toBe("Alice a 30 ans.");
    expect(decrire({ nom: "Max", age: 33 })).toBe("Max a 33 ans.");
  });

  test("versJSON convertit l'objet en string JSON", () => {
    expect(versJSON({ nom: "Alice" })).toBe('{"nom":"Alice"}');
    expect(versJSON({ a: 1, b: 2 })).toBe('{"a":1,"b":2}');
  });

});
