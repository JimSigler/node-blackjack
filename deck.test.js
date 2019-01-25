const theDeck = require("./deck");

test("should have 52 cards", () => {
  theDeck.create();
  expect(theDeck.myDeck.length).toBe(52);
});
