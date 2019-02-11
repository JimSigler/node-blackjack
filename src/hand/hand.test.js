const theShoe = require("./../deck/deck");
const player = require("./hand");

test("should get a card", () => {
  theShoe.create();
  theShoe.shuffle();
  player.getCard(theShoe);
  expect(player.seeHand().length).toBe(1);
});

test("should give the correct current total", () => {
  theShoe.create();
  theShoe.shuffle();
  player.clearHand();
  player.getCard(theShoe);
  let tempCard = player.seeHand();
  expect(player.getTotal()).toBe(player.getValue(tempCard[0].value));
});

test("Should give another card when hit", () => {
  theShoe.create();
  theShoe.shuffle();
  player.clearHand();
  player.hit(theShoe);
  let tempCard = player.seeHand();
  expect(player.getTotal()).toBe(player.getValue(tempCard[0].value));
});

test("should give the correct current total when stand", () => {
  theShoe.create();
  theShoe.shuffle();
  player.clearHand();
  player.getCard(theShoe);
  player.getCard(theShoe);
  let tempCards = player.seeHand();
  let total = player.stand();
  let calcTotal = 0;
  tempCards.forEach(card => {
    calcTotal = calcTotal + player.getValue(card.value);
  });
  console.log(total, calcTotal);
  expect(total).toBe(calcTotal);
});
