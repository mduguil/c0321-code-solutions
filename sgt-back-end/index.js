const pg = require('pg');
const express = require('express');
const app = express();
const JSONParser = express.json();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(JSONParser);

app.get('/api/grades', (req, res) => {
  const grades = `
    select *
      from "grades"
  `;

  db.query(grades)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    });
});

app.post('/api/grades', (req, res) => {
  const input = req.body;
  if (!input.name) {
    res.status(400).json({ error: 'Name is a required field!' });
    return;
  }
  if (!input.course) {
    res.status(400).json({ error: 'Course is a required field!' });
    return;
  }
  if (!input.score) {
    res.status(400).json({ error: 'Score is a required field!' });
    return;
  }
  if (isNaN(+input.score) || +input.score < 0 || +input.score > 100) {
    res.status(400).json({ error: 'Score should be a number between 0 and 100!' });
    return;
  }
  const addGrade = `
    insert into "grades" ("name", "course", "score")
    values ('${input.name}', '${input.course}', '${+input.score}')
    returning *
  `;

  db.query(addGrade)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Connected to port 3000');
});
