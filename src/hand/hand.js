let cards = [];
let currentTotal = 0;
const hitMinimum = 16;

function Hand() {
  return {
    getCard,
    getTotal,
    hit,
    stand,
    seeHand,
    clearHand,
    getValue,
    shouldHit
  };
}

module.exports = Hand();

function getCard(deck) {
  let tempCard = deck.deal();
  currentTotal = currentTotal + getValue(tempCard.value);
  cards.push(tempCard);
}

function getValue(stringValue) {
  let returnValue = 1;
  switch (stringValue) {
    case "Jack":
    case "Queen":
    case "King":
      returnValue = 10;
      break;
    case "Ace":
      returnValue = 1;
      break;
    default:
      returnValue = Number(stringValue);
  }
  return returnValue;
}

function seeHand() {
  return cards;
}

function getTotal() {
  return currentTotal;
}

function clearHand() {
  currentTotal = 0;
  cards = [];
}

function hit(deck) {
  getCard(deck);
}

function stand() {
  return currentTotal;
}

function shouldHit() {
  if (currentTotal <= hitMinimum) {
    return true;
  }
  return false;
}
