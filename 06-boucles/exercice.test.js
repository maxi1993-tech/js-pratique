const {
  sommeJusqua, doubler, garderPairs, compterLettre,
  listeDesCles, premierSuperieur, compteARebours,
} = require("./exercice");

describe("Bloc 6 — Boucles", () => {

  test("sommeJusqua additionne de 1 à n", () => {
    expect(sommeJusqua(5)).toBe(15);
    expect(sommeJusqua(1)).toBe(1);
    expect(sommeJusqua(10)).toBe(55);
  });

  test("doubler multiplie chaque élément par 2", () => {
    expect(doubler([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubler([0, 5])).toEqual([0, 10]);
  });

  test("garderPairs ne garde que les pairs", () => {
    expect(garderPairs([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(garderPairs([1, 3, 5])).toEqual([]);
  });

  test("compterLettre compte les occurrences", () => {
    expect(compterLettre("banane", "a")).toBe(3);
    expect(compterLettre("bonjour", "o")).toBe(2);
    expect(compterLettre("hello", "z")).toBe(0);
  });

  test("listeDesCles retourne les clés de l'objet", () => {
    expect(listeDesCles({ nom: "Alice", age: 30 })).toEqual(["nom", "age"]);
  });

  test("premierSuperieur retourne le premier nombre > seuil", () => {
    expect(premierSuperieur([1, 3, 7, 2, 9], 5)).toBe(7);
    expect(premierSuperieur([1, 2, 3], 10)).toBeNull();
  });

  test("compteARebours retourne le bon tableau", () => {
    expect(compteARebours(3)).toEqual([3, 2, 1, 0]);
    expect(compteARebours(0)).toEqual([0]);
  });

});
