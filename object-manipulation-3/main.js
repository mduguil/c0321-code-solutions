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

handout(players);
