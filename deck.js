const Random = require("random-js");
myDeck = [];
const random = new Random(Random.engines.mt19937().autoSeed());

function Deck() {
  return {
    create,
    shuffle,
    deal,
    discard,
    myDeck
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
locales = ["Deck", "Hand", "Discard"];

function create() {
  for (let i = 0; i < 52; i++) {
    myDeck[i] = {
      suit: suits[i % 4],
      value: values[i % 13],
      locale: locales[0]
    };
  }
}

function shuffle() {
  for (let i = 0; i < myDeck.length; i++) {
    const tempCard = myDeck[i];
    const rando = random(0, 51);
    myDeck[i] = myDeck[rando];
    myDeck[rando] = tempCard;
    if (myDeck[i].locale === locales[2]) {
      myDeck[i].locale = locales[0];
    }
    if (myDeck[rando].locale === locales[2]) {
      myDeck[rando].locale = locales[0];
    }
  }
}

function deal() {}

function discard() {}
