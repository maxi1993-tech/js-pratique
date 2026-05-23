const {
  direBonjour,
  donnerType,
  nettoyerEtMajuscules,
  contient,
  troisPremiersCaracteres,
  corrigerTexte,
  estUneString,
} = require("./exercice");

describe("Bloc 1 — Variables & Strings", () => {

  test("direBonjour retourne un message de bienvenue", () => {
    expect(direBonjour("Alice")).toBe("Bonjour, Alice !");
    expect(direBonjour("Max")).toBe("Bonjour, Max !");
  });

  test("donnerType retourne le bon type", () => {
    expect(donnerType(42)).toBe("number");
    expect(donnerType("hello")).toBe("string");
    expect(donnerType(true)).toBe("boolean");
    expect(donnerType(undefined)).toBe("undefined");
  });

  test("nettoyerEtMajuscules enlève les espaces et met en majuscules", () => {
    expect(nettoyerEtMajuscules("  bonjour  ")).toBe("BONJOUR");
    expect(nettoyerEtMajuscules("  javascript  ")).toBe("JAVASCRIPT");
  });

  test("contient retourne true si le mot est dans la phrase", () => {
    expect(contient("JavaScript est fun", "fun")).toBe(true);
    expect(contient("JavaScript est fun", "Python")).toBe(false);
  });

  test("troisPremiersCaracteres retourne les 3 premiers caractères", () => {
    expect(troisPremiersCaracteres("Bonjour")).toBe("Bon");
    expect(troisPremiersCaracteres("Alice")).toBe("Ali");
  });

  test("corrigerTexte remplace 'erreur' par 'correction'", () => {
    expect(corrigerTexte("Il y a une erreur ici")).toBe("Il y a une correction ici");
    expect(corrigerTexte("Une autre erreur")).toBe("Une autre correction");
  });

  test("estUneString retourne true pour une string, false sinon", () => {
    expect(estUneString("hello")).toBe(true);
    expect(estUneString(42)).toBe(false);
    expect(estUneString(true)).toBe(false);
  });

});
