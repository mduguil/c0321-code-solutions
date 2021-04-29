const fs = require('fs');

const command = process.argv[2];

const read = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const dataObj = JSON.parse(data);
    for (const key in dataObj.notes) {
      console.log(key + ': ' + dataObj.notes[key]);
    }
  });
};

switch (command) {
  case 'read':
    read();
    break;
}
