const {
  premier, dernier, ajouterFin, supprimerFin,
  contient, trouverIndex, extraire, joindre, inverser, decomposer,
} = require("./exercice");

describe("Bloc 5 — Tableaux", () => {

  test("premier retourne le premier élément", () => {
    expect(premier(["a", "b", "c"])).toBe("a");
    expect(premier([42])).toBe(42);
  });

  test("dernier retourne le dernier élément", () => {
    expect(dernier(["a", "b", "c"])).toBe("c");
    expect(dernier([1, 2, 3, 4])).toBe(4);
  });

  test("ajouterFin ajoute à la fin", () => {
    expect(ajouterFin(["a", "b"], "c")).toEqual(["a", "b", "c"]);
  });

  test("supprimerFin retourne l'élément supprimé", () => {
    expect(supprimerFin(["a", "b", "c"])).toBe("c");
  });

  test("contient retourne true si la valeur est présente", () => {
    expect(contient(["a", "b", "c"], "b")).toBe(true);
    expect(contient(["a", "b", "c"], "z")).toBe(false);
  });

  test("trouverIndex retourne l'index correct ou -1", () => {
    expect(trouverIndex(["a", "b", "c"], "b")).toBe(1);
    expect(trouverIndex(["a", "b", "c"], "z")).toBe(-1);
  });

  test("extraire retourne la bonne portion sans modifier l'original", () => {
    const original = ["a", "b", "c", "d"];
    expect(extraire(original, 1, 3)).toEqual(["b", "c"]);
    expect(original).toEqual(["a", "b", "c", "d"]); // original intact
  });

  test("joindre joint avec le séparateur", () => {
    expect(joindre(["Bonjour", "monde"], " ")).toBe("Bonjour monde");
    expect(joindre(["a", "b", "c"], "-")).toBe("a-b-c");
  });

  test("inverser retourne un tableau inversé sans modifier l'original", () => {
    const original = [1, 2, 3];
    expect(inverser(original)).toEqual([3, 2, 1]);
    expect(original).toEqual([1, 2, 3]); // original intact !
  });

  test("decomposer déstructure correctement", () => {
    expect(decomposer([1, 2, 3, 4])).toEqual({ premier: 1, deuxieme: 2, reste: [3, 4] });
    expect(decomposer(["a", "b"])).toEqual({ premier: "a", deuxieme: "b", reste: [] });
  });

});
