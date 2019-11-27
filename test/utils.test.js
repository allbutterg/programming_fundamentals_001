const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 240 when passed 200", () => {
    expect(utils.addVAT(200)).toBe(240);
  });

});

describe("utils.getFullName", () => {
  test("returns Gauri Kangai when passed Gauri and Kangai", () => {
    expect(utils.getFullName("Gauri", "Kangai")).toBe("Gauri Kangai");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 50 when passed 100", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});

describe("utils.countBooks", () => {
  test("returns 3 when passed Harry Potter, Shantaram, The Way Of The Turtle", () => {
    expect(utils.countBooks(["Harry Potter", "Shantaram", "The Way Of The Turtle"])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if passed a quantity equal or greater to 1", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
    expect(utils.isInStock("The Stone Diaries")).toBe(true);
  });
});



