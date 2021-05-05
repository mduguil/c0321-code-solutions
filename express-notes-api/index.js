const express = require('express');
const fs = require('fs');
const app = express();
const JSONparser = express.json();

app.use(JSONparser);

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
    res.status(400).json({ error: 'ID must be a positive interger!' });
    return;
  }

  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    const notes = dataObj.notes;

    if (notes[id]) {
      res.status(200).json(notes[id]);
    } else {
      res.status(404).json({ error: `Cannot find note with ID ${id}` });
    }
  });
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'Content is a required field!' });
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) throw err;

      const dataObj = JSON.parse(data);
      let nextId = dataObj.nextId;
      const updateData = () => {
        req.body.id = nextId;
        dataObj.notes[nextId] = req.body;

        nextId++;
        dataObj.nextId = nextId;
        return dataObj;
      };

      const updatedData = JSON.stringify(updateData(), null, 2);

      fs.writeFile('data.json', updatedData, 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(201).send(req.body);
        }
      });
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to port 3000');
});
