const express = require('express');
const fs = require('fs');

const app = express();

app.get('/api/notes', (req, res) => {
  const dataArr = [];

  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    const notes = dataObj.notes;
    for (const key in notes) {
      dataArr.push(notes[key]);
    }
    res.json(dataArr);
    res.status(200);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to port 3000');
});
