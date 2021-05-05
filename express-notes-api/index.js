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
    res.status(200).json(dataArr);
  });
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.json({ error: 'ID must be a positive interger!' });
    res.sendStatus(400);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to port 3000');
});
