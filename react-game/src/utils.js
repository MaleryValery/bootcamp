export function buildDeck() {
  const fullSuites = ['♠', '♥', '♦', '♣'];

  const deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      deck.push({ type: fullSuites[i], value: j });
    }
  }

  return deck;
}

// a fn thats shuffles the deck
export function shuffleDeck(deck) {
  return deck.sort(() => Math.random() - 0.5);
}

export function getPoints(number) {
  if (number > 1 && number < 10) {
    return number;
  } else if (number >= 10 && number <= 13) {
    return 10;
  } else return 11;
}

export function getPointsSum(cardsOnHand) {
  return cardsOnHand.reduce((acc, el) => acc + getPoints(el.value), 0);
}

export function checkWinner(playerObj, houseObj) {
  const player = getPointsSum(playerObj);
  const house = getPointsSum(houseObj);
  if (house > 21) return 'player';
  if (house < 22) return player >= house ? 'player' : 'house';
}
