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
  if (!input.name || !input.course || !input.score) {
    res.status(400).json({ error: 'Name, Course and Score are required fields!' });
    return;
  }
  if (isNaN(+input.score) || +input.score < 0 || +input.score > 100) {
    res.status(400).json({ error: 'Score should be a number between 0 and 100!' });
    return;
  }
  const addGrade = `
    insert into "grades" ("name", "course", "score")
    values ($1, $, $3)
    returning *
  `;

  const values = [input.name, input.course, parseInt(input.score, 10)];

  db.query(addGrade, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const input = req.body;
  const id = parseInt(req.params.gradeId, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'ID must be a positive interger!' });
    return;
  } else if (!input.name || !input.course || !input.score) {
    res.status(400).json({ error: 'Name, Course and Score are required fields!' });
    return;
  }

  const updateGrade = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
      where "gradeId" = $4
      returning *
  `;

  const params = [input.name, input.course, parseInt(input.score, 10), id];

  db.query(updateGrade, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${id}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = parseInt(req.params.gradeId, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ error: 'ID must be a positive interger!' });
    return;
  }

  const deleteGrade = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const params = [id];

  db.query(deleteGrade, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${id}` });
      } else {
        res.sendStatus(204);
      }
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
