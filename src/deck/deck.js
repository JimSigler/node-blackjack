const Random = require("random-js");
myDeck = [];
const random = new Random(Random.engines.mt19937().autoSeed());
let locales = {
  DECK: "Deck",
  HAND: "Hand",
  DISCARD: "Discard"
};

function Deck() {
  return {
    create,
    shuffle,
    deal,
    discard,
    myDeck,
    locales
  };
}

module.exports = Deck();

suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

function create() {
  for (let i = 0; i < 52; i++) {
    myDeck[i] = {
      suit: suits[i % 4],
      value: values[i % 13],
      locale: locales.DECK
    };
  }
}

function shuffle() {
  for (let i = 0; i < myDeck.length; i++) {
    if (myDeck.length < 1) {
      create();
    }
    const tempCard = myDeck[i];
    const rando = random.integer(0, 51);
    myDeck[i] = myDeck[rando];
    myDeck[rando] = tempCard;
    if (myDeck[i].locale === locales.DISCARD) {
      myDeck[i].locale = locales.DECK;
    }
    if (myDeck[rando].locale === locales.DISCARD) {
      myDeck[rando].locale = locales.DECK;
    }
  }
}

function deal() {
  for (let i = 0; i < myDeck.length; i++) {
    if (myDeck[i].locale === locales.DECK) {
      myDeck[i].locale = locales.HAND;
      let returnCard = myDeck[i];
      return returnCard;
    }
  }
  return null;
}

function discard() {
  for (let i = 0; i < myDeck.length; i++) {
    if (myDeck[i].locale === locales.HAND) {
      myDeck[i].locale = locales.DISCARD;
    }
  }
}
