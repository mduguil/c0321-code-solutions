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
    hand: null
  },
  {
    name: 'P2',
    hand: null
  },
  {
    name: 'P3',
    hand: null
  },
  {
    name: 'P4',
    hand: null
  }
];
