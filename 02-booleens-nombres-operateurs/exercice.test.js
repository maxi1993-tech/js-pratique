const {
  reste, estPair, additionner, sontEgaux,
  mention, majorite, nomDuJour, arrondir, valeurAbsolue,
} = require("./exercice");

describe("Bloc 2 — Booléens, Nombres & Opérateurs", () => {

  test("reste retourne le bon reste", () => {
    expect(reste(10, 3)).toBe(1);
    expect(reste(8, 4)).toBe(0);
  });

  test("estPair retourne true pour les pairs", () => {
    expect(estPair(4)).toBe(true);
    expect(estPair(7)).toBe(false);
    expect(estPair(0)).toBe(true);
  });

  test("additionner retourne un number même avec des strings", () => {
    expect(additionner("5", "3")).toBe(8);
    expect(typeof additionner("5", "3")).toBe("number");
  });

  test("sontEgaux utilise === sans coercition", () => {
    expect(sontEgaux(5, 5)).toBe(true);
    expect(sontEgaux(5, "5")).toBe(false);
    expect(sontEgaux(0, false)).toBe(false);
  });

  test("mention retourne la bonne mention", () => {
    expect(mention(95)).toBe("Excellent");
    expect(mention(75)).toBe("Bien");
    expect(mention(55)).toBe("Passable");
    expect(mention(30)).toBe("Insuffisant");
  });

  test("majorite utilise le ternaire", () => {
    expect(majorite(20)).toBe("majeur");
    expect(majorite(15)).toBe("mineur");
    expect(majorite(18)).toBe("majeur");
  });

  test("nomDuJour retourne le bon jour", () => {
    expect(nomDuJour(1)).toBe("Lundi");
    expect(nomDuJour(7)).toBe("Dimanche");
    expect(nomDuJour(9)).toBe("Inconnu");
  });

  test("arrondir arrondit vers le bas", () => {
    expect(arrondir(4.9)).toBe(4);
    expect(arrondir(2.1)).toBe(2);
  });

  test("valeurAbsolue retourne la valeur absolue", () => {
    expect(valeurAbsolue(-7)).toBe(7);
    expect(valeurAbsolue(3)).toBe(3);
  });

});
