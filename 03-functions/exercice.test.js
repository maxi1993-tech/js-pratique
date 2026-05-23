const {
  doubler,
  carre,
  estPositif,
  somme,
  multiplierPar,
  max,
} = require("./exercice");

describe("Bloc 3 — Functions", () => {

  test("doubler retourne le double", () => {
    expect(doubler(5)).toBe(10);
    expect(doubler(0)).toBe(0);
    expect(doubler(-3)).toBe(-6);
  });

  test("carre retourne le carré", () => {
    expect(carre(4)).toBe(16);
    expect(carre(3)).toBe(9);
    expect(carre(0)).toBe(0);
  });

  test("estPositif retourne true uniquement pour les strictement positifs", () => {
    expect(estPositif(5)).toBe(true);
    expect(estPositif(-3)).toBe(false);
    expect(estPositif(0)).toBe(false);
  });

  test("somme additionne trois nombres avec valeurs par défaut", () => {
    expect(somme(1, 2, 3)).toBe(6);
    expect(somme(1, 2)).toBe(3);
    expect(somme(5)).toBe(5);
    expect(somme()).toBe(0);
  });

  test("multiplierPar retourne une fonction qui multiplie correctement", () => {
    const tripler = multiplierPar(3);
    expect(tripler(5)).toBe(15);
    expect(tripler(0)).toBe(0);

    const doubleF = multiplierPar(2);
    expect(doubleF(7)).toBe(14);
  });

  test("max retourne le plus grand des deux", () => {
    expect(max(3, 7)).toBe(7);
    expect(max(9, 2)).toBe(9);
    expect(max(5, 5)).toBe(5);
  });

});
