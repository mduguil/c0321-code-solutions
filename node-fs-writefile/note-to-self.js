const fs = require('fs');

const inputText = process.argv[2] + '\n';

fs.writeFile('note.txt', inputText, 'utf8', err => {
  if (err) throw err;
});
