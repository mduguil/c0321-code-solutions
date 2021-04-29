const fs = require('fs');

const getRandNum = () => Math.floor(Math.random() * 10);
const num = getRandNum() + ' \n';

fs.writeFile('random.txt', num, 'utf8', err => {
  if (err) throw err;
});
