const theDeck = require("./deck");

test("should have 52 cards", () => {
  theDeck.create();
  expect(theDeck.myDeck.length).toBe(52);
});

test("should not have duplicate cards", () => {
  theDeck.create();
  let duplicates = 0;
  for (let i = 0; i < theDeck.myDeck.length; i++) {
    let found = findInDeck(theDeck.myDeck, theDeck.myDeck[i]);
    if (found.length > 1) {
      duplicates = duplicates + 1;
    }
  }
  expect(duplicates).toBe(0);
});

test("shuffle should randomize the cards", () => {
  theDeck.create();
  let originalDeck = [...theDeck.myDeck];
  theDeck.shuffle();
  let sameSpot = 0;
  for (let i = 0; i < theDeck.myDeck.length; i++) {
    let placement = findInDeck(originalDeck, theDeck.myDeck[i]);
    if (placement[0] === i) {
      sameSpot = sameSpot + 1;
    }
  }
  // If the deck is shuffled properly, we would expect only a few cards to be
  // in the same locations - maybe 10?
  expect(sameSpot).toBeLessThan(10);
});

function findInDeck(deck, card) {
  let index = [];
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === card) {
      index.push(i);
    }
  }
  return index;
}
