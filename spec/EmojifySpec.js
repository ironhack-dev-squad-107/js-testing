// Functions defined by JASMINE:
// -----------------------------
// describe() - group up a series of test cases
// it() - an individual test case
// expect() - verifies the result of a test case

// declare the group of tests of the emojify function
describe("emojify function", function() {
  it("replaces 'pizza' with 🍕", function() {
    expect(emojify("I like pizza!")).toEqual("I like 🍕!");
  });

  it("replaces 'taco' with 🌮", function() {
    expect(emojify("Two tacos please.")).toEqual("Two 🌮 please.");
  });

  it("ignores case", function() {
    expect(emojify("I like PIZZA!")).toEqual("I like 🍕!");
  });

  it("works for plural words", function() {
    expect(emojify("Pizzas are here!")).toEqual("🍕 are here!");
  });

  it("replaces more than 1 word", function() {
    expect(emojify("I like pizza. Pizza is my favorite.")).toEqual(
      "I like 🍕. 🍕 is my favorite."
    );
  });
});
