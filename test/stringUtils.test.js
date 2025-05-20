const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require("../src/stringUtils");

describe("reverseString", () => {
  test("inverte una stringa normale", () => {
    expect(reverseString("abc")).toBe("cba");
  });
  test("gestisce stringa vuota", () => {
    expect(reverseString("")).toBe("");
  });
  test("gestisce caratteri speciali e spazi", () => {
    expect(reverseString("a b!")).toBe("!b a");
  });
  test("gestisce stringhe con caratteri Unicode", () => {
    expect(reverseString("😀👍")).toBe("👍😀");
  });
});

describe("isPalindrome", () => {
  test("riconosce palindromi semplici", () => {
    expect(isPalindrome("anna")).toBe(true);
  });
  test("ignora maiuscole/minuscole", () => {
    expect(isPalindrome("Anna")).toBe(true);
  });
  test("ignora spazi", () => {
    expect(isPalindrome("i topi non avevano nipoti")).toBe(true);
  });
  test("gestisce stringa vuota", () => {
    expect(isPalindrome("")).toBe(true);
  });
  test("gestisce stringa non palindroma", () => {
    expect(isPalindrome("ciao")).toBe(false);
  });
  test("gestisce stringhe con caratteri speciali", () => {
    expect(isPalindrome("A!b b!A")).toBe(true);
  });
});

describe("truncateString", () => {
  test("tronca una stringa più lunga del limite", () => {
    expect(truncateString("abcdef", 3)).toBe("abc...");
  });
  test("non tronca se la stringa è corta", () => {
    expect(truncateString("abc", 5)).toBe("abc");
  });
  test("limite uguale alla lunghezza", () => {
    expect(truncateString("abc", 3)).toBe("abc");
  });
  test("gestisce stringa vuota", () => {
    expect(truncateString("", 2)).toBe("");
  });
  test("limite zero", () => {
    expect(truncateString("abc", 0)).toBe("...");
  });
  test("limite negativo", () => {
    expect(truncateString("abc", -1)).toBe("...");
  });
});

describe("countCharacters", () => {
  test("conta caratteri distinti", () => {
    expect(countCharacters("aabbc")).toEqual({ a: 2, b: 2, c: 1 });
  });
  test("gestisce stringa vuota", () => {
    expect(countCharacters("")).toEqual({});
  });
  test("gestisce spazi e simboli", () => {
    expect(countCharacters("a a!")).toEqual({ a: 2, " ": 1, "!": 1 });
  });
  test("gestisce caratteri Unicode", () => {
    expect(countCharacters("😀😀a")).toEqual({ "😀": 2, a: 1 });
  });
});
