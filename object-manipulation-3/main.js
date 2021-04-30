console.log('Lodash is loaded:', typeof _ !== 'undefined');

const cardDeckInfo = {
  suite: ['Diamonds', 'Spade', 'Heart', 'Clubs'],
  rank: ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2]
};

const cardDeck = [];

cardDeckInfo.suite.forEach(suite => {
  cardDeckInfo.rank.forEach(rank => {
    cardDeck.push(suite + rank);
  });
});

const players = [
  {
    name: 'P1',
    hand: []
  },
  {
    name: 'P2',
    hand: []
  },
  {
    name: 'P3',
    hand: []
  },
  {
    name: 'P4',
    hand: []
  }
];

const handout = players => {
  const shuffledDeck = _.shuffle(cardDeck);

  players.forEach(player => {
    const hand = player.hand;
    while (hand.length < 2) {
      hand.push(shuffledDeck.pop());
    }
  });
  return players;
};

const cardValue = cardDeckInfo.rank;
let points = 0;

cardValue.forEach(card => {
  switch (card) {
    case 'Ace':
      points = 11;
      break;
    case 'King':
      points = 10;
      break;
    case 'Queen':
      points = 10;
      break;
    case 'Jack':
      points = 10;
      break;
    case '10':
      points = 10;
      break;
    case '9':
      points = 9;
      break;
    case '8':
      points = 8;
      break;
    case '7':
      points = 7;
      break;
    case '6':
      points = 6;
      break;
    case '5':
      points = 5;
      break;
    case '4':
      points = 4;
      break;
    case '3':
      points = 3;
      break;
    case '2':
      points = 2;
      break;
  }
});
