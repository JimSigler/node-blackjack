const theShoe = require("./deck");

test("should have 52 cards", () => {
  theShoe.create();
  expect(theShoe.myDeck.length).toBe(52);
});

test("should not have duplicate cards", () => {
  theShoe.create();
  let duplicates = 0;
  for (let i = 0; i < theShoe.myDeck.length; i++) {
    let found = findInDeck(theShoe.myDeck, theShoe.myDeck[i]);
    if (found.length > 1) {
      duplicates = duplicates + 1;
    }
  }
  expect(duplicates).toBe(0);
});

test("shuffle should randomize the cards", () => {
  theShoe.create();
  let originalDeck = [...theShoe.myDeck];
  theShoe.shuffle();
  let sameSpot = 0;
  for (let i = 0; i < theShoe.myDeck.length; i++) {
    let placement = findInDeck(originalDeck, theShoe.myDeck[i]);
    if (placement[0] === i) {
      sameSpot = sameSpot + 1;
    }
  }
  // If the deck is shuffled properly, we would expect only a few cards to be
  // in the same locations - maybe 10?
  expect(sameSpot).toBeLessThan(10);
});

test("the card has changed locale", () => {
  theShoe.create();
  let found = false;
  let card = theShoe.deal();
  for (let i = 0; i < theShoe.myDeck.length; i++) {
    if (
      card.value === theShoe.myDeck[i].value &&
      card.suit === theShoe.myDeck[i].suit &&
      theShoe.myDeck[i].locale === theShoe.locales.HAND
    ) {
      found = true;
    }
  }
  expect(found).toBe(true);
});

test("the dealt card should be the first on a new deck", () => {
  theShoe.create();
  theShoe.shuffle();
  let card = theShoe.deal();
  expect(card.value).toBe(theShoe.myDeck[0].value);
  expect(card.suit).toBe(theShoe.myDeck[0].suit);
});

test("when discarded all cards in hand should be in discard", () => {
  theShoe.create();
  theCardsInHand = [];
  let cardsToDraw = 5;
  for (let i = 0; i < cardsToDraw; i++) {
    theCardsInHand.push(theShoe.deal());
  }
  theShoe.discard();
  let success = true;
  let cardsInDeck = theShoe.myDeck;
  for (let i = 0; i < cardsToDraw; i++) {
    if (
      theCardsInHand[i].value === cardsInDeck[i].value &&
      theCardsInHand[i].suit === cardsInDeck[i].suit &&
      cardsInDeck[i].locale !== theShoe.locales.DISCARD
    ) {
      success = false;
    }
  }
  expect(success).toBe(true);
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
