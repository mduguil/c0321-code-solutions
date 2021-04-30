console.log('Lodash is loaded:', typeof _ !== 'undefined');

const cardDeckInfo = {
  suite: ['Diamonds', 'Spade', 'Heart', 'Clubs'],
  rank: ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2]
};

const cardDeck = [];

cardDeckInfo.suite.forEach(suite => {
  cardDeckInfo.rank.forEach(rank => {
    cardDeck.push(rank + ' ' + suite);
  });
});

const playGame = () => {
  handout(players);
  checkScore(players);
};

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

const checkScore = players => {
  let highScore = 0;
  let winner = '';

  players.forEach(player => {
    let score = 0;
    const hand = player.hand;

    hand.forEach(card => {
      const cardInfo = card.split(' ');
      const rank = cardInfo[0];
      const points = checkValue(rank);
      score += points;
    });

    console.log(player.name + ': ' + score);

    if (score > highScore) {
      highScore = score;
      winner = player.name;
    }
  });
  console.log('The winner is: ' + winner + ' with ' + highScore + ' points.');
};

const checkValue = rank => {
  switch (rank) {
    case 'Ace':
      return 11;
    case 'King':
    case 'Queen':
    case 'Jack':
      return 10;
    default:
      return parseInt(rank);
  }
};
